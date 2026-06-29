// ---------- 1. mobile menu toggle ----------
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    navToggle.classList.toggle('open', isOpen);
    navToggle.setAttribute('aria-expanded', isOpen);
  });

  // close mobile menu after clicking a link
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      navToggle.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });

  // ---------- 2. scroll-reveal animation + stat counters ----------
  const revealItems = document.querySelectorAll('.reveal');
  const scrollProgress = document.getElementById('scrollProgress');
  const backToTop = document.getElementById('backToTop');
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function animateCounter(el){
    const target = parseFloat(el.dataset.target);
    const isDecimal = target % 1 !== 0;
    if (prefersReducedMotion){
      el.textContent = isDecimal ? target.toFixed(2) : target;
      return;
    }
    const duration = 1200;
    const startTime = performance.now();
    function step(now){
      const progress = Math.min((now - startTime) / duration, 1);
      const current = target * progress;
      el.textContent = isDecimal ? current.toFixed(2) : Math.floor(current);
      if (progress < 1) requestAnimationFrame(step);
      else el.textContent = isDecimal ? target.toFixed(2) : target;
    }
    requestAnimationFrame(step);
  }

  function revealOnScroll() {
    revealItems.forEach(item => {
      if (item.classList.contains('visible')) return; // already shown, skip
      const rect = item.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.9) {
        item.classList.add('visible');
        const counter = item.querySelector('.stat-number');
        if (counter) animateCounter(counter);
      }
    });
  }

  function updateScrollProgress(){
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    scrollProgress.style.width = pct + '%';
  }

  function updateBackToTop(){
    const show = (window.scrollY || document.documentElement.scrollTop) > window.innerHeight * 0.6;
    backToTop.classList.toggle('show', show);
  }

  // Single continuous loop, driven by animation frames rather than the
  // 'scroll' event — works regardless of how/where scrolling happens
  // (real browser, or a preview tool that wraps the page in a container).
  function mainLoop(){
    revealOnScroll();
    updateScrollProgress();
    updateBackToTop();
    requestAnimationFrame(mainLoop);
  }
  mainLoop();

  backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' }));

  // ---------- typing effect on the hero eyebrow ----------
  const typedTextEl = document.getElementById('typedText');
  const fullText = "Hello, world!";
  if (prefersReducedMotion){
    typedTextEl.textContent = fullText;
  } else {
    let charIndex = 0;
    (function typeWriter(){
      if (charIndex <= fullText.length){
        typedTextEl.textContent = fullText.slice(0, charIndex);
        charIndex++;
        setTimeout(typeWriter, 70);
      }
    })();
  }

  // ---------- cursor-following spotlight (mouse only, not touch) ----------
  const cursorGlow = document.getElementById('cursorGlow');
  if (window.matchMedia('(hover: hover) and (pointer: fine)').matches){
    window.addEventListener('mousemove', (e) => {
      cursorGlow.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
    });
  }

  // ---------- achievement cards: tap/click to expand (hover handles desktop) ----------
  document.querySelectorAll('.ach-item').forEach(item => {
    item.addEventListener('click', () => item.classList.toggle('expanded'));
  });
  // ---------- 3. active nav link while scrolling ----------
  const sections = document.querySelectorAll('section, footer');
  const navAnchors = document.querySelectorAll('.nav-links a');

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navAnchors.forEach(a => a.classList.remove('active'));
        const match = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
        if (match) match.classList.add('active');
      }
    });
  }, { rootMargin: '-50% 0px -50% 0px' }); // triggers when section crosses middle of viewport

  sections.forEach(sec => sectionObserver.observe(sec));

  // ---------- 4. contact form submission ----------
  const contactForm = document.getElementById('contactForm');
  const formStatus = document.getElementById('formStatus');

  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    formStatus.textContent = 'Sending...';
    formStatus.className = 'form-status';

    const formData = new FormData(contactForm);

    try {
      const response = await fetch(contactForm.action, {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        formStatus.textContent = "Message sent — I'll get back to you soon.";
        formStatus.classList.add('success');
        contactForm.reset();
      } else {
        throw new Error('Submission failed');
      }
    } catch (err) {
      formStatus.textContent = 'Something went wrong. Try emailing me directly instead.';
      formStatus.classList.add('error');
    }
  });

  const certModal = document.getElementById('certModal');
  const certImage = document.getElementById('certImage');
  const certClose = document.getElementById('certClose');
 
  function openCertModal(src, alt){
    certImage.src = src;
    certImage.alt = alt || 'Certificate';
    certModal.classList.add('open');
  }
  function closeCertModal(){
    certModal.classList.remove('open');
    certImage.src = '';
  }
 
  document.querySelectorAll('.cert-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation(); // don't also trigger the achievement card's expand/collapse
      openCertModal(btn.dataset.cert, btn.dataset.alt);
    });
  });
 
  certClose.addEventListener('click', closeCertModal);
  certModal.addEventListener('click', (e) => {
    if (e.target === certModal) closeCertModal(); // click outside the image closes it
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeCertModal();
  });