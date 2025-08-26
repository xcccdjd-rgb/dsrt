// script.js — DSRT demo interactions
document.addEventListener('DOMContentLoaded', ()=>{

  // LOGIN form (on login.html)
  const loginForm = document.getElementById('loginForm');
  if (loginForm){
    loginForm.addEventListener('submit', (e)=>{
      e.preventDefault();
      const email = document.getElementById('email').value.trim();
      const pass  = document.getElementById('password').value.trim();
      if (email === 'fengbayu@gmail.com' && pass === 'kakanda'){
        // set simple local flag
        localStorage.setItem('dsrt_user', JSON.stringify({email}));
        window.location.href = 'app.html';
      } else {
        alert('Email/password salah. Coba: fengbayu@gmail.com / kakanda');
      }
    });
  }

  // If app.html loaded
  const sidebar = document.getElementById('sidebar');
  if (sidebar){
    // sidebar item click -> show related workspace section
    sidebar.querySelectorAll('.side-item').forEach(item=>{
      item.addEventListener('click', ()=>{
        const target = item.getAttribute('data-target');
        // activate side item
        sidebar.querySelectorAll('.side-item').forEach(i=>i.classList.remove('active'));
        item.classList.add('active');
        // update title
        const titleMap = {
          adobe:'Photo & Video Tools', retouch:'Retouch & Local', video:'Video Tools',
          ai:'AI Filters & Auto', templates:'Templates & Collage', stickers:'Stickers & Overlays',
          cloud:'Cloud Projects', export:'Export & Share', settings:'Preferences'
        };
        document.getElementById('workspaceTitle').textContent = titleMap[target] || 'Features';
        // hide all feature groups
        document.querySelectorAll('.cards.grid').forEach(sec=>sec.style.display='none');
        const el = document.getElementById(target);
        if (el) el.style.display = 'grid';
        // scroll to top of workspace
        window.scrollTo({top:0,behavior:'smooth'});
      });
    });

    // collapse sidebar
    document.getElementById('collapseSidebar').addEventListener('click', ()=>{
      if (sidebar.style.display === 'none'){
        sidebar.style.display='';
      } else {
        sidebar.style.display='none';
      }
    });

    // feature card click -> modal
    document.querySelectorAll('.feature-card.feature').forEach(card=>{
      card.addEventListener('click', ()=>{
        const name = card.getAttribute('data-name') || card.querySelector('.title')?.textContent || 'Fitur';
        document.getElementById('modalTitle').textContent = name;
        document.getElementById('modalDesc').textContent = `${name} — antarmuka demo. Di versi produksi, tombol 'Buka Editor' akan membuka editor khusus fitur ini (backend / WebAssembly / AI service).`;
        document.getElementById('featureModal').classList.add('show');
        document.getElementById('featureModal').setAttribute('aria-hidden','false');
      });
    });

    // modal close
    const modal = document.getElementById('featureModal');
    modal.querySelector('.close').addEventListener('click', ()=>{ modal.classList.remove('show'); modal.setAttribute('aria-hidden','true');});
    modal.addEventListener('click', (e)=>{ if (e.target === modal){ modal.classList.remove('show'); modal.setAttribute('aria-hidden','true'); }});

    // search filter
    const search = document.getElementById('featureSearch');
    if (search){
      const all = Array.from(document.querySelectorAll('.feature-card.feature'));
      search.addEventListener('input', ()=>{
        const q = search.value.trim().toLowerCase();
        all.forEach(c=>{
          const name = (c.getAttribute('data-name') || c.textContent).toLowerCase();
          c.style.display = name.includes(q) ? 'block' : 'none';
        });
      });
    }

    // ensure default tab visible
    document.querySelectorAll('.cards.grid').forEach(s=>s.style.display='none');
    const defaultEl = document.getElementById('adobe'); if (defaultEl) defaultEl.style.display='grid';
  }

  // if user navigates to app without login, allow but set local user (optional)
  if (window.location.pathname.endsWith('app.html')){
    if (!localStorage.getItem('dsrt_user')){
      // optionally redirect to login: uncomment next line to enforce login
      // window.location.href='login.html';
      console.info('Demo: no user in storage — continuing as guest');
    }
  }

});
