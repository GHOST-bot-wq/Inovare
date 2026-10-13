/**
 * Innovare Femine — Estética Face & Corpo
 * Script Principal: Interatividade, Animações e WhatsApp
 */

document.addEventListener('DOMContentLoaded', () => {
  initClinicData();
  initHeaderScroll();
  initMobileMenu();
  initWhatsAppCtas();
  initBookingForm();
  initGalleryLightbox();
  initScrollAnimations();
  initNavActiveState();
  initYearCopyright();
});

/* ==========================================================================
   1. Injeta dados centralizados da clínica no HTML
   ========================================================================== */
function initClinicData() {
  if (typeof CLINIC_CONFIG === 'undefined') return;

  // Injetar textos via data-config
  document.querySelectorAll('[data-config]').forEach(el => {
    const path  = el.getAttribute('data-config');
    const value = getNestedValue(CLINIC_CONFIG, path);
    if (value != null) el.textContent = value;
  });

  // Injetar links via data-config-href
  document.querySelectorAll('[data-config-href]').forEach(el => {
    const path  = el.getAttribute('data-config-href');
    const value = getNestedValue(CLINIC_CONFIG, path);
    if (value) el.setAttribute('href', value);
  });

  // Ocultar seções com dados pendentes de confirmação
  handlePendingData();
}

function handlePendingData() {
  if (!CLINIC_CONFIG) return;

  // Endereço pendente → ocultar bloco de localização pública
  if (CLINIC_CONFIG.location?.locationPendingConfirmation) {
    document.querySelectorAll('[data-requires="location"]').forEach(el => {
      el.style.display = 'none';
    });
    document.querySelectorAll('[data-pending="location"]').forEach(el => {
      el.style.display = '';
    });
  }

  // Horários pendentes
  if (CLINIC_CONFIG.hours?.hoursPendingConfirmation) {
    document.querySelectorAll('[data-requires="hours"]').forEach(el => {
      el.style.display = 'none';
    });
  }
}

function getNestedValue(obj, path) {
  return path.split('.').reduce((acc, key) => (acc ? acc[key] : undefined), obj);
}

/* ==========================================================================
   2. Comportamento do header fixo ao rolar
   ========================================================================== */
function initHeaderScroll() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  const onScroll = () => {
    header.classList.toggle('scrolled', window.scrollY > 50);
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* ==========================================================================
   3. Menu Mobile acessível
   ========================================================================== */
function initMobileMenu() {
  const toggle = document.querySelector('.mobile-toggle');
  const drawer = document.querySelector('.mobile-drawer');
  if (!toggle || !drawer) return;

  const open  = () => {
    drawer.classList.add('open');
    toggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  };

  const close = () => {
    drawer.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  };

  toggle.addEventListener('click', () => {
    drawer.classList.contains('open') ? close() : open();
  });

  drawer.querySelectorAll('.mobile-nav-link, .btn').forEach(el =>
    el.addEventListener('click', close)
  );

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && drawer.classList.contains('open')) {
      close();
      toggle.focus();
    }
  });
}

/* ==========================================================================
   4. Gerenciamento inteligente do WhatsApp
   ========================================================================== */
function initWhatsAppCtas() {
  document.querySelectorAll('[data-wa-type]').forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      const type = btn.getAttribute('data-wa-type');
      const msgs = CLINIC_CONFIG?.whatsappMessages || {};
      const msg  = msgs[type] || msgs.hero || 'Olá! Gostaria de saber mais sobre a Innovare Femine.';
      triggerWhatsApp(msg);
    });
  });

  // Fechar modal
  const modal   = document.getElementById('wa-modal');
  const closeEl = document.getElementById('wa-modal-close');

  if (closeEl && modal) {
    closeEl.addEventListener('click', () => modal.classList.remove('open'));
  }
  if (modal) {
    modal.addEventListener('click', e => {
      if (e.target === modal) modal.classList.remove('open');
    });
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') modal.classList.remove('open');
    });
  }
}

function triggerWhatsApp(message) {
  if (typeof generateWhatsAppUrl !== 'function') return;

  const result = generateWhatsAppUrl(message);

  if (result.isReady) {
    window.open(result.url, '_blank', 'noopener,noreferrer');
    return;
  }

  // Mostrar modal informativo quando número não confirmado
  const modal   = document.getElementById('wa-modal');
  const preview = document.getElementById('wa-modal-preview');
  const contBtn = document.getElementById('wa-modal-continue');

  if (!modal) {
    window.open(result.url, '_blank', 'noopener,noreferrer');
    return;
  }

  if (preview) preview.textContent = decodeURIComponent(message);
  if (contBtn) contBtn.href = result.url;
  modal.classList.add('open');
}

/* ==========================================================================
   5. Formulário de Agendamento → WhatsApp
   ========================================================================== */
function initBookingForm() {
  const form = document.getElementById('innovare-booking-form');
  if (!form) return;

  form.addEventListener('submit', e => {
    e.preventDefault();

    const name      = form.querySelector('[name="name"]')?.value.trim();
    const service   = form.querySelector('[name="service"]')?.value;
    const shift     = form.querySelector('[name="shift"]')?.value;
    const notes     = form.querySelector('[name="notes"]')?.value.trim();

    if (!name) {
      const nameField = form.querySelector('[name="name"]');
      nameField?.focus();
      return;
    }

    let message = `*Innovare Femine — Solicitação de Atendimento*\n`;
    message += `👤 *Nome:* ${name}\n`;
    if (service) message += `✨ *Interesse:* ${service}\n`;
    if (shift)   message += `🕐 *Preferência de horário:* ${shift}\n`;
    if (notes)   message += `📝 *Mensagem:* ${notes}\n`;
    message += `\n_Mensagem enviada através do site da Innovare Femine._`;

    triggerWhatsApp(message);
  });
}

/* ==========================================================================
   6. Galeria com Lightbox
   ========================================================================== */
function initGalleryLightbox() {
  const lightbox  = document.getElementById('lightbox');
  const lightImg  = document.getElementById('lightbox-img');
  const lightClose = document.getElementById('lightbox-close');

  if (!lightbox || !lightImg) return;

  document.querySelectorAll('.gallery-item[data-src]').forEach(item => {
    item.addEventListener('click', () => {
      const src = item.getAttribute('data-src');
      const alt = item.getAttribute('data-alt') || 'Innovare Femine';
      lightImg.src = src;
      lightImg.alt = alt;
      lightbox.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  });

  const closeLightbox = () => {
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
    lightImg.src = '';
  };

  if (lightClose) lightClose.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLightbox(); });
}

/* ==========================================================================
   7. Animações de revelação ao rolar
   ========================================================================== */
function initScrollAnimations() {
  if (!('IntersectionObserver' in window)) {
    // Fallback: tornar visível sem animação
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      el.classList.add('is-visible');
    });
    return;
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold:  0.1,
    rootMargin: '0px 0px -40px 0px'
  });

  document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
}

/* ==========================================================================
   8. Realce do link ativo na navegação durante o scroll
   ========================================================================== */
function initNavActiveState() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
  if (!sections.length || !navLinks.length) return;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.classList.toggle(
            'active',
            link.getAttribute('href') === `#${entry.target.id}`
          );
        });
      }
    });
  }, { threshold: 0.35 });

  sections.forEach(sec => observer.observe(sec));
}

/* ==========================================================================
   9. Ano de copyright automático
   ========================================================================== */
function initYearCopyright() {
  const yearEl = document.getElementById('current-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
}
