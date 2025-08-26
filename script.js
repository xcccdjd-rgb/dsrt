// ===== LOGIN DEMO =====
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('loginForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('email')?.value || '';
      const password = document.getElementById('password')?.value || '';
      if (email === 'fengbayu@gmail.com' && password === 'kakanda') {
        window.location.href = 'app.html';
      } else {
        alert('Email atau password salah. Coba: fengbayu@gmail.com / kakanda');
      }
    });
  }

  // ===== TABS =====
  const tabs = document.querySelectorAll('.tab');
  const sections = document.querySelectorAll('section.cards.grid');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const target = tab.getAttribute('data-target');
      sections.forEach(s => s.classList.remove('active'));
      sections.forEach(s => s.style.display = 'none');
      const el = document.getElementById(target);
      if (el){ el.style.display = 'grid'; el.classList.add('active'); }
    });
  });

  // ===== SEARCH / FILTER FITUR =====
  const search = document.getElementById('featureSearch');
  if (search) {
    const allCards = [...document.querySelectorAll('.feature.card')];
    search.addEventListener('input', () => {
      const q = search.value.toLowerCase().trim();
      allCards.forEach(c => {
        const name = (c.getAttribute('data-name') || c.textContent).toLowerCase();
        c.style.display = name.includes(q) ? 'block' : 'none';
      });
    });
  }

  // ===== MODAL DETAIL FITUR =====
  const modal = document.getElementById('featureModal');
  const title = document.getElementById('modalTitle');
  const desc  = document.getElementById('modalDesc');
  const closeBtn = modal?.querySelector('.close');

  document.querySelectorAll('.feature.card').forEach(card => {
    card.addEventListener('click', () => {
      const nm = card.getAttribute('data-name') || card.querySelector('h4')?.textContent || 'Fitur';
      title.textContent = nm;
      desc.textContent = `${nm} — antarmuka demo. Di versi produksi, tombol "Buka Editor" akan memuat editor khusus atau memanggil API terkait.`;
      modal.classList.add('show');
    });
  });
  closeBtn?.addEventListener('click', () => modal.classList.remove('show'));
  modal?.addEventListener('click', (e) => { if (e.target === modal) modal.classList.remove('show'); });
});
