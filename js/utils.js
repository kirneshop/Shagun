/* ============================================
   SHAGUN - शगुन | Shared JavaScript Utilities
   ============================================ */

// --- Scroll Reveal Animation ---
function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .stagger-children');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });

  reveals.forEach(el => observer.observe(el));
}

// --- Navbar Scroll Effect ---
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}

// --- Smooth Scroll for anchor links ---
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

// --- Counter Animation ---
function animateCounter(element, target, duration = 2000, prefix = '', suffix = '') {
  let start = 0;
  const startTime = performance.now();

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
    const current = Math.floor(eased * target);

    element.textContent = prefix + current.toLocaleString('en-IN') + suffix;

    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }

  requestAnimationFrame(update);
}

// --- Progress Bar Animation ---
function animateProgressBar(element, targetPercent) {
  element.style.width = '0%';
  setTimeout(() => {
    element.style.width = targetPercent + '%';
  }, 300);
}

// --- Toast Notification ---
function showToast(message, type = 'info', duration = 4000) {
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `
    <div style="display:flex;align-items:center;gap:0.75rem;">
      <span style="font-size:1.2rem;">${type === 'success' ? '✅' : type === 'info' ? 'ℹ️' : '⚠️'}</span>
      <span style="font-size:0.9rem;">${message}</span>
    </div>
  `;
  document.body.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100px)';
    toast.style.transition = 'all 0.4s ease';
    setTimeout(() => toast.remove(), 400);
  }, duration);
}

// --- Modal ---
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// --- Share Functionality ---
function shareLink(url, title) {
  if (navigator.share) {
    navigator.share({ title, url }).catch(() => {});
  } else {
    navigator.clipboard.writeText(url).then(() => {
      showToast('Link copied to clipboard!', 'success');
    });
  }
}

// --- Format Currency (INR) ---
function formatINR(amount) {
  return '₹' + amount.toLocaleString('en-IN');
}

// --- Particle / Floating elements ---
function createFloatingElements(container, count = 15) {
  const symbols = ['✿', '❀', '✦', '◆', '❋', '✵', '❁', '✾'];
  
  for (let i = 0; i < count; i++) {
    const el = document.createElement('span');
    el.className = 'floating-particle';
    el.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    el.style.cssText = `
      position: absolute;
      font-size: ${Math.random() * 16 + 8}px;
      color: rgba(212,168,83,${Math.random() * 0.2 + 0.05});
      left: ${Math.random() * 100}%;
      top: ${Math.random() * 100}%;
      animation: float ${Math.random() * 4 + 3}s ease-in-out infinite;
      animation-delay: ${Math.random() * 3}s;
      pointer-events: none;
    `;
    container.appendChild(el);
  }
}

// --- Mobile Menu Toggle ---
function initMobileMenu() {
  const btn = document.querySelector('.mobile-menu-btn');
  const links = document.querySelector('.navbar-links');
  if (!btn || !links) return;

  btn.addEventListener('click', () => {
    links.classList.toggle('mobile-open');
    btn.textContent = links.classList.contains('mobile-open') ? '✕' : '☰';
  });
}

// --- Initialize all common features ---
document.addEventListener('DOMContentLoaded', () => {
  initScrollReveal();
  initNavbar();
  initSmoothScroll();
  initMobileMenu();
});
