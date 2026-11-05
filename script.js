const MOVIES = [
  {
    id: 1,
    title: "Ditto",
    genre: ["Drama", "Romance"],
    rating: 8.9,
    duration: "2h 18m",
    release: "2026",
    director: "ADOR Films",
    cast: ["Minji", "Hanni", "Danielle", "Haerin", "Hyein"],
    description: "A nostalgic story about youth, friendship, and a connection that feels real even when you're not sure it ever was. Set against cold winter days and memories that blur with reality.",
    posterImage: "https://wallpaperaccess.com/full/26621741.jpg",
    heroImage: "https://wallpaperaccess.com/full/26621741.jpg",
    trailerUrl: "https://www.youtube-nocookie.com/embed/pSUydWEqKwE?autoplay=1",
    regularPrice: 320
  },
  {
    id: 2,
    title: "What You Want",
    genre: ["Drama"],
    rating: 8.2,
    duration: "2h 04m",
    release: "2026",
    director: "HYBE Cinema",
    cast: ["Cortis", "K-Creative Studio"],
    description: "A young individual caught between rigid societal expectations and passion embarks on a late-night journey across the metropolitan lights.",
    posterImage: "https://phinf.wevpstatic.net/MjAyNTA4MTVfNzgg/MDAxNzU1MTg4MzE5MjIx.sk6sXT82gkeaVu8dGgs2zdRfBuPhAw3tPTKvvGxiH1Ag.EAa8L_cF19QaYax0Sk0fEUwqz4TRKPIfSaxzYPaRHkUg.JPEG/6cd0d1f2-4ad1-4700-a1d0-19098ed9aba3.jpeg",
    heroImage: "https://phinf.wevpstatic.net/MjAyNTA4MTVfNzgg/MDAxNzU1MTg4MzE5MjIx.sk6sXT82gkeaVu8dGgs2zdRfBuPhAw3tPTKvvGxiH1Ag.EAa8L_cF19QaYax0Sk0fEUwqz4TRKPIfSaxzYPaRHkUg.JPEG/6cd0d1f2-4ad1-4700-a1d0-19098ed9aba3.jpeg",
    trailerUrl: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1",
    regularPrice: 320
  },
  {
    id: 3,
    title: "Silent Hill: The Forgotten",
    genre: ["Horror", "Thriller"],
    rating: 8.5,
    duration: "1h 48m",
    release: "2026",
    director: "Christophe Gans",
    cast: ["Adelaide Kane", "Thomas Doherty"],
    description: "When Mara enters Silent Hill in search of a missing friend, the impenetrable fog begins peeling away layers of reality and repressed guilt.",
    posterImage: "https://images3.alphacoders.com/137/1379104.jpg",
    heroImage: "https://images3.alphacoders.com/137/1379104.jpg",
    trailerUrl: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1",
    regularPrice: 340
  },
  {
    id: 4,
    title: "The Last Of Us: Part III",
    genre: ["Action", "Drama", "Thriller"],
    rating: 9.2,
    duration: "3h 10m",
    release: "2026",
    director: "Neil Druckmann",
    cast: ["Bella Ramsey", "Kaitlyn Dever", "Isabela Merced"],
    description: "In a world scarred by catastrophic loss, survivors must confront compounding consequences of previous choices while forging paths toward redemption.",
    posterImage: "https://images5.alphacoders.com/137/thumb-1920-1377065.png",
    heroImage: "https://images5.alphacoders.com/137/thumb-1920-1377065.png",
    trailerUrl: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1",
    regularPrice: 350
  },
  {
    id: 5,
    title: "Chungking Express (4K)",
    genre: ["Drama", "Romance"],
    rating: 8.8,
    duration: "1h 42m",
    release: "2026 Remaster",
    director: "Wong Kar Wai",
    cast: ["Takeshi Kaneshiro", "Faye Wong", "Tony Leung"],
    description: "Two lovelorn Hong Kong police officers navigate heartbreak and fleeting encounters in neon-soaked urban landscapes.",
    posterImage: "https://wallpaperaccess.com/full/4243368.jpg",
    heroImage: "https://wallpaperaccess.com/full/4243368.jpg",
    trailerUrl: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1",
    regularPrice: 320
  },
  {
    id: 6,
    title: "Recollective",
    genre: ["Animation", "Drama", "Romance"],
    rating: 8.7,
    duration: "2h 10m",
    release: "2026",
    director: "Studio Lumière",
    cast: ["Koki Uchiyama", "Shun Oguri"],
    description: "An introspective student unexpectedly falls in love right before graduation, forcing him to decide whether to protect his heart or take the leap.",
    posterImage: "https://i.pinimg.com/1200x/b5/75/fd/b575fd57e0955536c4368cbbd6389740.jpg",
    heroImage: "https://i.pinimg.com/1200x/b5/75/fd/b575fd57e0955536c4368cbbd6389740.jpg",
    trailerUrl: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1",
    regularPrice: 300
  }
];

const HERO_FEATURED = [MOVIES[0], MOVIES[1], MOVIES[4], MOVIES[2]];

// CINEMAS with explicit Day of Week availability (1=Mon, 2=Tue, 3=Wed, 4=Thu, 5=Fri, 6=Sat, 0=Sun)
const CINEMAS = [
  {
    id: 1,
    name: "Movie Booking Central",
    location: "BGC High Street, Taguig",
    screens: 12,
    features: ["IMAX Laser", "Dolby Atmos", "Laser Projection"],
    // Available: Mon, Tue, Wed, Thu, Fri, Sat, Sun (Daily)
    availableDays: [1, 2, 3, 4, 5, 6, 0],
    statusText: "Open All Week"
  },
  {
    id: 2,
    name: "Movie Booking Grand Luxe",
    location: "Rockwell Center, Makati",
    screens: 8,
    features: ["4K Sound", "Laser Projection", "Club Bar"],
    // Maintenance on Tuesdays
    availableDays: [1, 3, 4, 5, 6, 0],
    statusText: "Closed Tuesdays"
  },
  {
    id: 3,
    name: "Movie Booking Promenade",
    location: "Greenhills, San Juan",
    screens: 6,
    features: ["Laser Projection", "Dolby Atmos"],
    // Weekday & Weekend (Closed Wednesdays)
    availableDays: [1, 2, 4, 5, 6, 0],
    statusText: "Closed Wednesdays"
  },
  {
    id: 4,
    name: "Movie Booking Seaside Dome",
    location: "Mall of Asia, Pasay",
    screens: 10,
    features: ["Giant IMAX", "Barco 4K", "Dolby Atmos"],
    // Available: Thursday through Sunday
    availableDays: [4, 5, 6, 0],
    statusText: "Thu–Sun Only"
  }
];

const COMING_SOON = [
  { id: 101, title: "Aurora Rising", genre: "Sci-Fi / Adventure", date: "Mar 20, 2026", posterImage: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=300&h=450&fit=crop" },
  { id: 102, title: "Ghostlight", genre: "Horror / Mystery", date: "Apr 04, 2026", posterImage: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=300&h=450&fit=crop" },
  { id: 103, title: "The Glass Garden", genre: "Drama / Romance", date: "Apr 25, 2026", posterImage: "https://images.unsplash.com/photo-1518562180175-34a163b1a9a6?w=300&h=450&fit=crop" },
  { id: 104, title: "Velocity 9", genre: "Action / Heist", date: "May 14, 2026", posterImage: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=300&h=450&fit=crop" }
];

const SHOWTIMES = [
  { time: "11:00 AM", hall: "Hall 1 (Dolby Atmos)" },
  { time: "1:45 PM", hall: "Hall 2 (Laser 4K)" },
  { time: "4:30 PM", hall: "Hall 1 (Dolby Atmos)" },
  { time: "7:15 PM", hall: "Hall 3 (IMAX Laser)" },
  { time: "10:00 PM", hall: "Hall 2 (Laser 4K)" }
];

const SERVICE_FEE = 45;

const state = {
  currentFilter: "all",
  searchQuery: "",
  heroIndex: 0,
  activeBgLayer: 1,
  heroTimer: null,
  lightsDimmed: false,
  soundscapeActive: false,
  audioCtx: null,
  droneNodes: null,
  favorites: JSON.parse(localStorage.getItem("moviebooking_favorites") || "[]"),
  booking: {
    movie: null,
    cinema: null,
    date: null,
    time: null,
    seats: [],
    paymentMethod: "gcash",
    discount: 0,
    step: 1,
    holdTimerInterval: null,
    secondsLeft: 600
  },
  tickets: JSON.parse(localStorage.getItem("moviebooking_tickets") || "[]"),
  adminNotifications: JSON.parse(localStorage.getItem("moviebooking_admin_notifications") || "[]")
};

const $ = sel => document.querySelector(sel);
const $$ = sel => document.querySelectorAll(sel);
const formatPeso = n => '₱' + Math.max(0, n).toLocaleString('en-PH');
const genRef = () => 'MB-' + new Date().getFullYear() + '-' + Math.floor(100000 + Math.random() * 900000);

function haptic(ms = 12) {
  if (navigator.vibrate) navigator.vibrate(ms);
}

function getAudioContext() {
  if (!state.audioCtx) {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (AudioContext) state.audioCtx = new AudioContext();
  }
  if (state.audioCtx && state.audioCtx.state === 'suspended') {
    state.audioCtx.resume();
  }
  return state.audioCtx;
}

function playUiSound(type = 'click') {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    if (type === 'click') {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(580, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.05);
      gain.gain.setValueAtTime(0.08, ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.001, ctx.currentTime + 0.05);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.05);
    } else if (type === 'success') {
      [523.25, 659.25, 783.99, 1046.50].forEach((freq, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, ctx.currentTime + (i * 0.08));
        gain.gain.setValueAtTime(0.1, ctx.currentTime + (i * 0.08));
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + (i * 0.08) + 0.35);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(ctx.currentTime + (i * 0.08));
        osc.stop(ctx.currentTime + (i * 0.08) + 0.35);
      });
    } else if (type === 'admin') {
      [880, 1174.66].forEach((freq, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, ctx.currentTime + (i * 0.1));
        gain.gain.setValueAtTime(0.12, ctx.currentTime + (i * 0.1));
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + (i * 0.1) + 0.25);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(ctx.currentTime + (i * 0.1));
        osc.stop(ctx.currentTime + (i * 0.1) + 0.25);
      });
    }
  } catch (e) {}
}

function toast(msg, type = 'info') {
  const t = document.createElement('div');
  t.className = 'toast ' + type;
  const icon = type === 'success'
    ? '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M20 6 9 17l-5-5"/></svg>'
    : type === 'error'
    ? '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 6 6 18M6 6l12 12"/></svg>'
    : type === 'admin'
    ? '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>'
    : '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>';

  t.innerHTML = `<div class="toast-icon">${icon}</div><div class="toast-msg">${msg}</div>`;
  $('#toastContainer').appendChild(t);
  setTimeout(() => {
    t.classList.add('out');
    setTimeout(() => t.remove(), 300);
  }, 3400);
}

// Full Monday to Sunday Week Generator
function getMondayToSundayWeek() {
  const daysShort = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const daysFull = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const monthsFull = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  const now = new Date();
  const currentDayOfWeek = now.getDay(); // 0 is Sun, 1 is Mon...
  
  // Find Monday of the current screening week (ISO standard: Mon = start)
  const distanceToMonday = (currentDayOfWeek + 6) % 7; 
  const mondayDate = new Date(now);
  mondayDate.setDate(now.getDate() - distanceToMonday);

  const week = [];
  for (let i = 0; i < 7; i++) {
    const d = new Date(mondayDate);
    d.setDate(mondayDate.getDate() + i);

    const dayIdx = d.getDay();
    const day = daysShort[dayIdx];
    const dayFull = daysFull[dayIdx];
    const month = months[d.getMonth()];
    const monthFull = monthsFull[d.getMonth()];
    const num = d.getDate();
    const year = d.getFullYear();

    week.push({
      dayIndex: dayIdx, // 0 to 6
      day,
      dayFull,
      month,
      monthFull,
      num,
      year,
      iso: d.toISOString().slice(0, 10),
      shortDate: `${month} ${num}, ${year}`,
      formattedDate: `${monthFull} ${num}, ${year}`
    });
  }
  return week;
}

// Hero Carousel
function renderHeroIndicators() {
  const c = $('#heroIndicators');
  c.innerHTML = HERO_FEATURED.map((_, i) => `
    <div class="hero-dot-wrap ${i === state.heroIndex ? 'active' : ''}" data-i="${i}">
      <div class="hero-dot-fill"></div>
    </div>
  `).join('');

  c.querySelectorAll('.hero-dot-wrap').forEach(d => {
    d.addEventListener('click', () => {
      haptic(10);
      playUiSound('click');
      clearInterval(state.heroTimer);
      setHero(parseInt(d.dataset.i));
      startHeroTimer();
    });
  });
}

function setHero(i) {
  state.heroIndex = i;
  const m = HERO_FEATURED[i];
  const content = $('#heroContent');

  content.classList.remove('text-enter');
  content.classList.add('text-exit');

  const layer1 = $('#heroBg1');
  const layer2 = $('#heroBg2');

  if (state.activeBgLayer === 1) {
    layer2.style.backgroundImage = `url('${m.heroImage}')`;
    layer2.classList.add('active');
    layer1.classList.remove('active');
    state.activeBgLayer = 2;
  } else {
    layer1.style.backgroundImage = `url('${m.heroImage}')`;
    layer1.classList.add('active');
    layer2.classList.remove('active');
    state.activeBgLayer = 1;
  }

  setTimeout(() => {
    $('#heroTitle').textContent = m.title;
    $('#heroMeta').innerHTML = `
      <span class="hero-rating">★ ${m.rating}</span>
      <span class="dot">•</span>
      <span>${m.genre.join(', ')}</span>
      <span class="dot">•</span>
      <span>${m.duration}</span>
      <span class="dot">•</span>
      <span class="badge-format">IMAX 4K LASER</span>
    `;
    $('#heroDesc').textContent = m.description;
    $('#heroPriceTag').textContent = formatPeso(m.regularPrice);

    content.classList.remove('text-exit');
    content.classList.add('text-enter');
  }, 320);

  renderHeroIndicators();
}

function startHeroTimer() {
  clearInterval(state.heroTimer);
  state.heroTimer = setInterval(() => {
    const nextIdx = (state.heroIndex + 1) % HERO_FEATURED.length;
    setHero(nextIdx);
  }, 6500);
}

// Movies Grid
function toggleFavorite(id, e) {
  e.stopPropagation();
  haptic(15);
  playUiSound('click');
  const idx = state.favorites.indexOf(id);
  if (idx >= 0) {
    state.favorites.splice(idx, 1);
    toast('Removed from favorites.');
  } else {
    state.favorites.push(id);
    toast('Added to favorites! ❤️', 'success');
  }
  localStorage.setItem('moviebooking_favorites', JSON.stringify(state.favorites));
  updateFavCount();
  renderMovies();
}

function updateFavCount() {
  $('#favCount').textContent = state.favorites.length;
}

function renderMovies() {
  const grid = $('#moviesGrid');
  const q = state.searchQuery;
  const filtered = MOVIES.filter(m => {
    let matchFilter = true;
    if (state.currentFilter === 'favorites') {
      matchFilter = state.favorites.includes(m.id);
    } else if (state.currentFilter !== 'all') {
      matchFilter = m.genre.includes(state.currentFilter);
    }
    const matchSearch = !q || m.title.toLowerCase().includes(q) || m.genre.join(' ').toLowerCase().includes(q) || m.director.toLowerCase().includes(q);
    return matchFilter && matchSearch;
  });

  if (filtered.length === 0) {
    grid.innerHTML = '';
    $('#emptyState').classList.remove('hidden');
    return;
  }
  $('#emptyState').classList.add('hidden');

  grid.innerHTML = filtered.map((m) => {
    const isFav = state.favorites.includes(m.id);
    return `
      <article class="movie-card" data-id="${m.id}">
        <div class="movie-poster">
          <img src="${m.posterImage}" alt="${m.title}" loading="lazy" />
          <button class="fav-btn ${isFav ? 'favorited' : ''}" data-fav="${m.id}" title="Save to favorites">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="${isFav ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2.5"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
          </button>
          <div class="movie-rating-badge">${m.rating}</div>
        </div>
        <div class="movie-info">
          <h3 class="movie-title">${m.title}</h3>
          <div class="movie-meta">
            <span>${m.genre.slice(0, 2).join(', ')}</span>
            <span>${m.duration}</span>
          </div>

          <div class="movie-price-tag">
            <span>Seat Ticket</span>
            <strong>${formatPeso(m.regularPrice)}</strong>
          </div>

          <button class="movie-book" data-book="${m.id}">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M4 4h16v16H4z"/><path d="M4 10h16"/></svg>
            Select & Book
          </button>
        </div>
      </article>
    `;
  }).join('');

  grid.querySelectorAll('.fav-btn').forEach(btn => {
    btn.addEventListener('click', e => toggleFavorite(parseInt(btn.dataset.fav), e));
  });

  grid.querySelectorAll('.movie-card').forEach(card => {
    card.addEventListener('click', e => {
      const bookBtn = e.target.closest('[data-book]');
      if (bookBtn) {
        haptic(15);
        playUiSound('click');
        const m = MOVIES.find(x => x.id == bookBtn.dataset.book);
        openBooking(m);
      } else {
        haptic(10);
        openMovieModal(MOVIES.find(x => x.id == card.dataset.id));
      }
    });
  });
}

$$('.filter').forEach(f => f.addEventListener('click', () => {
  haptic(10);
  playUiSound('click');
  $$('.filter').forEach(x => x.classList.remove('active'));
  f.classList.add('active');
  state.currentFilter = f.dataset.filter;
  renderMovies();
}));

// Modal Controls
function openModal(id) {
  const m = document.getElementById(id);
  m.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal(id) {
  const m = document.getElementById(id);
  m.classList.remove('open');
  document.body.style.overflow = '';
  if (id === 'trailerModal') $('#trailerWrapper').innerHTML = '';
  if (id === 'bookingModal' && state.booking.holdTimerInterval) {
    clearInterval(state.booking.holdTimerInterval);
  }
}

document.addEventListener('click', e => {
  if (e.target.matches('[data-close]') || e.target.classList.contains('modal-backdrop')) {
    haptic(10);
    $$('.modal.open').forEach(m => closeModal(m.id));
  }
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') $$('.modal.open').forEach(m => closeModal(m.id));
});

function openTrailer(m) {
  $('#trailerWrapper').innerHTML = `
    <iframe src="${m.trailerUrl}" title="${m.title} Trailer" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  `;
  openModal('trailerModal');
}

function openMovieModal(m) {
  $('#movieModalInner').innerHTML = `
    <div class="modal-movie-poster">
      <img src="${m.posterImage}" alt="${m.title}" />
    </div>
    <div class="modal-movie-details">
      <h2 class="modal-movie-title">${m.title}</h2>
      <div class="modal-movie-meta">
        <span class="hero-rating">★ ${m.rating}</span>
        <span>•</span>
        <span>${m.genre.join(', ')}</span>
        <span>•</span>
        <span>${m.duration}</span>
        <span>•</span>
        <span>${m.release}</span>
      </div>
      <p class="modal-movie-desc">${m.description}</p>

      <div class="movie-price-tag" style="max-width:200px;margin-bottom:16px">
        <span>Standard Seat</span>
        <strong>${formatPeso(m.regularPrice)}</strong>
      </div>

      <div class="modal-movie-section">
        <h4 style="font-size:11px;letter-spacing:1px;color:var(--accent);margin-bottom:6px">DIRECTOR</h4>
        <div class="cast-list"><div class="cast-chip">${m.director}</div></div>
      </div>
      <div class="modal-movie-section" style="margin-top:10px">
        <h4 style="font-size:11px;letter-spacing:1px;color:var(--accent);margin-bottom:6px">CAST</h4>
        <div class="cast-list">${m.cast.map(c => `<div class="cast-chip">${c}</div>`).join('')}</div>
      </div>

      <div style="display:flex;gap:10px;margin-top:20px">
        <button class="btn btn-outline" style="flex:1" id="modalTrailerBtn">Watch Trailer</button>
        <button class="btn btn-primary" style="flex:2" id="modalBookBtn">Book Seats</button>
      </div>
    </div>
  `;
  openModal('movieModal');

  $('#modalTrailerBtn').addEventListener('click', () => {
    closeModal('movieModal');
    setTimeout(() => openTrailer(m), 250);
  });
  $('#modalBookBtn').addEventListener('click', () => {
    closeModal('movieModal');
    setTimeout(() => openBooking(m), 250);
  });
}

// Seat Reservation Hold Timer
function startSeatHoldTimer() {
  clearInterval(state.booking.holdTimerInterval);
  state.booking.secondsLeft = 600;
  $('#seatTimerBanner').classList.remove('hidden');

  state.booking.holdTimerInterval = setInterval(() => {
    state.booking.secondsLeft--;
    const mins = Math.floor(state.booking.secondsLeft / 60);
    const secs = state.booking.secondsLeft % 60;
    const str = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    const el = $('#seatCountdown');
    if (el) el.textContent = str;

    if (state.booking.secondsLeft <= 0) {
      clearInterval(state.booking.holdTimerInterval);
      toast('Seat hold reservation expired.', 'error');
      closeModal('bookingModal');
    }
  }, 1000);
}

// Booking Initiation (Streamlined 5 Steps)
function openBooking(movie) {
  const week = getMondayToSundayWeek();
  const defaultCinema = CINEMAS[0];
  // Find first available day for this branch
  const firstAvailDate = week.find(d => defaultCinema.availableDays.includes(d.dayIndex)) || week[0];

  state.booking = {
    movie,
    cinema: defaultCinema,
    date: firstAvailDate,
    time: SHOWTIMES[0].time,
    seats: [],
    paymentMethod: "gcash",
    discount: 0,
    step: 1,
    holdTimerInterval: null,
    secondsLeft: 600
  };
  openModal('bookingModal');
  $('#seatTimerBanner').classList.add('hidden');
  renderBookingStep();
}

function updateProgress() {
  $$('.progress-step').forEach(s => {
    const n = parseInt(s.dataset.step);
    s.classList.toggle('active', n === state.booking.step);
    s.classList.toggle('done', n < state.booking.step);
  });
}

function renderBookingStep() {
  updateProgress();
  const body = $('#bookingBody');
  const b = state.booking;

  if (b.step === 1) renderStep1(body);
  else if (b.step === 2) renderStep2(body);
  else if (b.step === 3) renderStep3(body);
  else if (b.step === 4) {
    renderStep4(body);
    startSeatHoldTimer();
  }
  else if (b.step === 5) renderStep5(body);
}

// Step 1: Movie Confirmation
function renderStep1(body) {
  const m = state.booking.movie;
  body.innerHTML = `
    <div class="booking-step">
      <h3>Select Film</h3>
      <p class="sub">Verify your film and standard auditorium seat rate.</p>
      <div class="selected-movie-box">
        <div class="selected-movie-poster"><img src="${m.posterImage}" alt="${m.title}" /></div>
        <div class="selected-movie-details">
          <h4>${m.title}</h4>
          <p>${m.genre.join(' • ')}</p>
          <p>★ ${m.rating} • ${m.duration} • ${m.director}</p>
          <div class="movie-price-tag" style="max-width:180px;margin-top:8px">
            <span>Ticket Price</span>
            <strong>${formatPeso(m.regularPrice)}</strong>
          </div>
        </div>
      </div>
      <div class="booking-nav">
        <button class="btn btn-outline" data-close>Cancel</button>
        <button class="btn btn-primary" id="nextBtn">Select Cinema Branch →</button>
      </div>
    </div>
  `;
  $('#nextBtn').addEventListener('click', () => {
    haptic(12);
    playUiSound('click');
    state.booking.step = 2;
    renderBookingStep();
  });
}

// Step 2: Branch Selection WITH DATE AVAILABILITY
function renderStep2(body) {
  const weekDaysShort = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  body.innerHTML = `
    <div class="booking-step">
      <h3>Select Cinema Branch</h3>
      <p class="sub">Check operating screening days and format availability per branch.</p>
      
      <div class="cinema-options-enhanced">
        ${CINEMAS.map(c => {
          const isSelected = state.booking.cinema?.id === c.id;
          return `
            <div class="cinema-option-card ${isSelected ? 'selected' : ''}" data-cid="${c.id}">
              <div class="cinema-option-header">
                <h5>${c.name}</h5>
                <span class="cinema-status-badge ${c.availableDays.length >= 6 ? 'open' : 'maintenance'}">
                  ${c.statusText}
                </span>
              </div>
              <p class="cinema-option-location">${c.location}</p>

              <div class="cinema-available-schedule">
                <span class="schedule-label">Weekly Schedule (Mon - Sun):</span>
                <div class="cinema-mini-days">
                  ${[1, 2, 3, 4, 5, 6, 0].map(dayIdx => {
                    const isAvail = c.availableDays.includes(dayIdx);
                    return `
                      <span class="mini-day-chip ${isAvail ? 'active' : 'disabled'}" title="${weekDaysShort[dayIdx]}: ${isAvail ? 'Available' : 'No Screenings'}">
                        ${weekDaysShort[dayIdx]}
                      </span>
                    `;
                  }).join('')}
                </div>
              </div>

              <div style="margin-top:10px;display:flex;gap:4px;flex-wrap:wrap">
                ${c.features.map(f => `<span class="badge">${f}</span>`).join('')}
              </div>
            </div>
          `;
        }).join('')}
      </div>

      <div class="booking-nav">
        <button class="btn btn-outline" id="backBtn">← Back</button>
        <button class="btn btn-primary" id="nextBtn">Choose Screening Schedule →</button>
      </div>
    </div>
  `;

  body.querySelectorAll('.cinema-option-card').forEach(card => {
    card.addEventListener('click', () => {
      haptic(10);
      playUiSound('click');
      body.querySelectorAll('.cinema-option-card').forEach(x => x.classList.remove('selected'));
      card.classList.add('selected');
      const selectedCinema = CINEMAS.find(c => c.id == card.dataset.cid);
      state.booking.cinema = selectedCinema;

      // Adjust current date if not available for this cinema
      const week = getMondayToSundayWeek();
      if (!selectedCinema.availableDays.includes(state.booking.date?.dayIndex)) {
        state.booking.date = week.find(d => selectedCinema.availableDays.includes(d.dayIndex)) || week[0];
      }
    });
  });

  $('#backBtn').addEventListener('click', () => { state.booking.step = 1; renderBookingStep(); });
  $('#nextBtn').addEventListener('click', () => { state.booking.step = 3; renderBookingStep(); });
}

// Step 3: Monday to Sunday Full Week Selector
function renderStep3(body) {
  const cinema = state.booking.cinema || CINEMAS[0];
  const week = getMondayToSundayWeek();

  // Ensure selected date is valid
  if (!state.booking.date || !cinema.availableDays.includes(state.booking.date.dayIndex)) {
    state.booking.date = week.find(d => cinema.availableDays.includes(d.dayIndex)) || week[0];
  }
  if (!state.booking.time) state.booking.time = SHOWTIMES[0].time;

  body.innerHTML = `
    <div class="booking-step">
      <h3>Select Date & Showtime</h3>
      <p class="sub">Showing full Monday to Sunday calendar for <strong>${cinema.name}</strong>.</p>

      <div class="schedule-preview-box">
        <div class="schedule-preview-icon">📅</div>
        <div class="schedule-preview-content">
          <span class="schedule-preview-label">Active Screening Choice</span>
          <span class="schedule-preview-value" id="schedulePreviewText">
            ${state.booking.date.dayFull}, ${state.booking.date.formattedDate} • ${state.booking.time}
          </span>
        </div>
      </div>

      <h4 class="step-subheading">1. Weekly Calendar (Monday to Sunday)</h4>
      <div class="week-calendar-container">
        ${week.map(d => {
          const isAvail = cinema.availableDays.includes(d.dayIndex);
          const isSelected = state.booking.date.iso === d.iso;
          return `
            <div class="day-cell ${isSelected ? 'selected' : ''} ${!isAvail ? 'disabled' : ''}" data-iso="${d.iso}" data-avail="${isAvail}">
              <span class="day-name">${d.day}</span>
              <span class="day-number">${d.num}</span>
              <span class="day-month">${d.month}</span>
              <span class="day-badge ${isAvail ? 'avail' : 'na'}">${isAvail ? 'Open' : 'Off'}</span>
            </div>
          `;
        }).join('')}
      </div>

      <h4 class="step-subheading">2. Select Showtime</h4>
      <div class="time-grid-enhanced">
        ${SHOWTIMES.map(s => `
          <div class="time-chip-enhanced ${state.booking.time === s.time ? 'selected' : ''}" data-time="${s.time}">
            <div class="time-val">${s.time}</div>
            <div class="time-hall">${s.hall}</div>
          </div>
        `).join('')}
      </div>

      <div class="booking-nav">
        <button class="btn btn-outline" id="backBtn">← Change Branch</button>
        <button class="btn btn-primary" id="nextBtn">Select Seats →</button>
      </div>
    </div>
  `;

  function updatePreview() {
    $('#schedulePreviewText').textContent = `${state.booking.date.dayFull}, ${state.booking.date.formattedDate} • ${state.booking.time}`;
  }

  body.querySelectorAll('.day-cell:not(.disabled)').forEach(cell => {
    cell.addEventListener('click', () => {
      haptic(10);
      playUiSound('click');
      body.querySelectorAll('.day-cell').forEach(c => c.classList.remove('selected'));
      cell.classList.add('selected');
      state.booking.date = week.find(d => d.iso === cell.dataset.iso);
      updatePreview();
    });
  });

  body.querySelectorAll('.time-chip-enhanced').forEach(chip => {
    chip.addEventListener('click', () => {
      haptic(10);
      playUiSound('click');
      body.querySelectorAll('.time-chip-enhanced').forEach(c => c.classList.remove('selected'));
      chip.classList.add('selected');
      state.booking.time = chip.dataset.time;
      updatePreview();
    });
  });

  $('#backBtn').addEventListener('click', () => { state.booking.step = 2; renderBookingStep(); });
  $('#nextBtn').addEventListener('click', () => { state.booking.step = 4; renderBookingStep(); });
}

// Step 4: Seat Map (Standard Uniform Seats Only)
function renderStep4(body) {
  const b = state.booking;
  const m = b.movie;
  const rows = ['A', 'B', 'C', 'D', 'E', 'F'];
  const seatsPerRow = 10;
  const occupied = new Set(['A3', 'A4', 'B8', 'C2', 'D5', 'D6', 'E3', 'E4']);

  body.innerHTML = `
    <div class="booking-step">
      <h3>Select Seats</h3>
      <p class="sub">Standard Cinema Recliners: ${formatPeso(m.regularPrice)} per seat.</p>

      <div class="seat-layout">
        <div class="seat-map-wrapper">
          <div class="screen-container">
            <div class="screen-arc"></div>
            <div class="screen-text">Curved Laser Screen</div>
          </div>

          <div class="seat-map-pan-container">
            <div class="seat-rows">
              ${rows.map(r => `
                <div class="seat-row">
                  <div class="row-label">${r}</div>
                  ${Array.from({ length: seatsPerRow }).map((_, i) => {
                    const num = i + 1;
                    const id = `${r}${num}`;
                    const isOcc = occupied.has(id);
                    const isSelected = b.seats.some(s => s.id === id);
                    const aisle = (i === 2 || i === 7) ? '<div class="aisle"></div>' : '';

                    return `
                      <div class="seat ${isOcc ? 'occupied' : ''} ${isSelected ? 'selected' : ''}"
                           data-seat="${id}">
                        ${num}
                      </div>${aisle}
                    `;
                  }).join('')}
                  <div class="row-label">${r}</div>
                </div>
              `).join('')}
            </div>
          </div>

          <div class="seat-legend">
            <div class="legend-item"><div class="legend-box"></div>Available</div>
            <div class="legend-item"><div class="legend-box sel"></div>Selected</div>
            <div class="legend-item"><div class="legend-box occ"></div>Reserved</div>
          </div>
        </div>

        <div class="booking-summary" id="seatSummary">
          ${renderSummaryHtml()}
        </div>
      </div>

      <div class="booking-nav">
        <button class="btn btn-outline" id="backBtn">← Back</button>
        <button class="btn btn-primary" id="nextBtn" ${b.seats.length === 0 ? 'disabled' : ''}>Proceed to Checkout →</button>
      </div>
    </div>
  `;

  body.querySelectorAll('.seat').forEach(seat => {
    seat.addEventListener('click', () => {
      if (seat.classList.contains('occupied')) return;
      haptic(15);
      playUiSound('click');
      const id = seat.dataset.seat;
      const idx = b.seats.findIndex(s => s.id === id);

      if (idx >= 0) {
        b.seats.splice(idx, 1);
        seat.classList.remove('selected');
        toast(`Seat ${id} deselected`);
      } else {
        if (b.seats.length >= 8) {
          toast('Maximum 8 seats per booking transaction.', 'error');
          return;
        }
        b.seats.push({ id, price: m.regularPrice });
        seat.classList.add('selected');
        toast(`Seat ${id} selected`, 'success');
      }

      $('#seatSummary').innerHTML = renderSummaryHtml();
      $('#nextBtn').disabled = b.seats.length === 0;
    });
  });

  $('#backBtn').addEventListener('click', () => { state.booking.step = 3; renderBookingStep(); });
  $('#nextBtn').addEventListener('click', () => { state.booking.step = 5; renderBookingStep(); });
}

function calculateTotal() {
  const b = state.booking;
  const seatsTotal = b.seats.reduce((sum, s) => sum + s.price, 0);
  const discountAmt = seatsTotal * b.discount;
  const fee = b.seats.length > 0 ? SERVICE_FEE : 0;
  const total = Math.max(0, seatsTotal - discountAmt + fee);

  return { seatsTotal, discountAmt, fee, total };
}

function renderSummaryHtml() {
  const b = state.booking;
  const { seatsTotal, discountAmt, fee, total } = calculateTotal();
  const scheduleFormatted = b.date
    ? `${b.date.day}, ${b.date.formattedDate} • ${b.time}`
    : '—';

  return `
    <h4>Booking Summary</h4>
    <div class="summary-row"><span>Film</span><strong>${b.movie?.title || '—'}</strong></div>
    <div class="summary-row"><span>Cinema</span><strong>${b.cinema?.name || '—'}</strong></div>
    <div class="summary-row"><span>Schedule</span><strong>${scheduleFormatted}</strong></div>
    <div class="summary-divider"></div>
    <div class="summary-row">
      <span>Seats (${b.seats.length})</span>
      <div class="summary-chips">
        ${b.seats.length ? b.seats.map(s => `<span class="seat-chip">${s.id}</span>`).join('') : 'None'}
      </div>
    </div>
    <div class="summary-row"><span>Tickets Subtotal</span><strong>${formatPeso(seatsTotal)}</strong></div>
    ${b.discount > 0 ? `<div class="summary-row" style="color:var(--success)"><span>Promo Voucher</span><strong>-${formatPeso(discountAmt)}</strong></div>` : ''}
    <div class="summary-row"><span>Convenience Fee</span><strong>${formatPeso(fee)}</strong></div>
    <div class="summary-divider"></div>
    <div class="summary-total">
      <span>Total</span>
      <span>${formatPeso(total)}</span>
    </div>
  `;
}

// Step 5: Checkout & Payment
function renderStep5(body) {
  const b = state.booking;
  const { total } = calculateTotal();

  body.innerHTML = `
    <div class="booking-step">
      <h3>Select Payment</h3>
      <p class="sub">Instant encrypted checkout and seat reservation ticket generation.</p>

      <div class="seat-layout">
        <div style="flex:1">
          <div class="payment-section-title">Payment Method</div>
          <div class="payment-modes">
            <div class="payment-mode-card ${b.paymentMethod === 'gcash' ? 'selected' : ''}" data-method="gcash">
              <div class="payment-mode-icon" style="color:#007DFE">📱</div>
              <div class="payment-mode-title">GCash</div>
              <span class="payment-mode-badge">E-Wallet</span>
            </div>
            <div class="payment-mode-card ${b.paymentMethod === 'maya' ? 'selected' : ''}" data-method="maya">
              <div class="payment-mode-icon" style="color:#00D66C">🟢</div>
              <div class="payment-mode-title">Maya</div>
              <span class="payment-mode-badge">E-Wallet</span>
            </div>
            <div class="payment-mode-card ${b.paymentMethod === 'card' ? 'selected' : ''}" data-method="card">
              <div class="payment-mode-icon" style="color:var(--accent)">💳</div>
              <div class="payment-mode-title">Card</div>
              <span class="payment-mode-badge">Visa/MC</span>
            </div>
            <div class="payment-mode-card ${b.paymentMethod === 'applepay' ? 'selected' : ''}" data-method="applepay">
              <div class="payment-mode-icon"></div>
              <div class="payment-mode-title">Apple Pay</div>
              <span class="payment-mode-badge">Express</span>
            </div>
          </div>

          <div class="payment-fields" id="paymentFieldsContainer">
            ${renderPaymentFields(b.paymentMethod)}
          </div>

          <div class="payment-section-title">Promo Code</div>
          <div class="promo-box">
            <input type="text" class="promo-input" id="promoInput" placeholder="Try promo: CINEMA20" />
            <button class="promo-btn" id="applyPromoBtn">Apply</button>
          </div>
        </div>

        <div class="booking-summary" id="paySummary">
          ${renderSummaryHtml()}
        </div>
      </div>

      <div class="booking-nav">
        <button class="btn btn-outline" id="backBtn">← Change Seats</button>
        <button class="btn btn-primary btn-lg" id="payNowBtn">Pay ${formatPeso(total)}</button>
      </div>
    </div>
  `;

  body.querySelectorAll('.payment-mode-card').forEach(card => {
    card.addEventListener('click', () => {
      haptic(10);
      playUiSound('click');
      body.querySelectorAll('.payment-mode-card').forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');
      b.paymentMethod = card.dataset.method;
      $('#paymentFieldsContainer').innerHTML = renderPaymentFields(b.paymentMethod);
    });
  });

  $('#applyPromoBtn').addEventListener('click', () => {
    const code = $('#promoInput').value.trim().toUpperCase();
    if (code === 'CINEMA20') {
      haptic(20);
      playUiSound('success');
      b.discount = 0.20;
      toast('20% Discount Voucher Applied!', 'success');
      $('#paySummary').innerHTML = renderSummaryHtml();
      const updated = calculateTotal();
      $('#payNowBtn').textContent = `Pay ${formatPeso(updated.total)}`;
    } else {
      haptic(30);
      toast('Invalid promo code. Try "CINEMA20"', 'error');
    }
  });

  $('#backBtn').addEventListener('click', () => { state.booking.step = 4; renderBookingStep(); });
  $('#payNowBtn').addEventListener('click', processPayment);
}

function renderPaymentFields(method) {
  if (method === 'gcash' || method === 'maya') {
    return `
      <div class="form-group">
        <label class="form-label">${method === 'gcash' ? 'GCash' : 'Maya'} Registered Mobile</label>
        <input type="tel" class="form-input" placeholder="09XX XXX XXXX" value="0917 888 1234" />
      </div>
      <p style="font-size:11px;color:var(--text-muted);margin-top:4px">One-Time Pin (OTP) will be dispatched instantly.</p>
    `;
  } else if (method === 'card') {
    return `
      <div class="form-group">
        <label class="form-label">Cardholder Name</label>
        <input type="text" class="form-input" placeholder="Juan Dela Cruz" value="Movie Fanatic" />
      </div>
      <div class="form-group">
        <label class="form-label">Card Number</label>
        <input type="text" class="form-input" placeholder="4123 •••• •••• 9876" value="•••• •••• •••• 5689" />
      </div>
      <div class="form-row">
        <div class="form-group">
          <label class="form-label">Expiry</label>
          <input type="text" class="form-input" placeholder="MM/YY" value="12/28" />
        </div>
        <div class="form-group">
          <label class="form-label">CVV</label>
          <input type="password" class="form-input" placeholder="•••" value="888" />
        </div>
      </div>
    `;
  } else {
    return `
      <div style="text-align:center;padding:12px;color:var(--text-dim);font-size:12px">
        <span> Double click side button to authenticate biometrics.</span>
      </div>
    `;
  }
}

function processPayment() {
  haptic(25);
  const payBtn = $('#payNowBtn');
  payBtn.disabled = true;
  payBtn.innerHTML = `Securing Gateway Authorization...`;

  setTimeout(() => {
    confirmBooking();
  }, 1000);
}

// User and Admin Dual Notification Confirmation
function confirmBooking() {
  const b = state.booking;
  const { total } = calculateTotal();
  const ref = genRef();
  const formattedDate = `${b.date.dayFull}, ${b.date.formattedDate}`;
  const seatList = b.seats.map(s => s.id).join(', ');

  const ticket = {
    ref,
    movie: b.movie.title,
    poster: b.movie.posterImage,
    cinema: b.cinema.name,
    date: formattedDate,
    time: b.time,
    seats: seatList,
    qty: b.seats.length,
    paymentMethod: b.paymentMethod.toUpperCase(),
    total,
    bookedAt: Date.now()
  };

  // 1. Save to User Wallet
  state.tickets.unshift(ticket);
  localStorage.setItem('moviebooking_tickets', JSON.stringify(state.tickets));

  // 2. Dispatch to Admin Notification System
  const adminNotif = {
    id: 'ADM-' + Date.now().toString().slice(-6),
    ref: ticket.ref,
    movie: ticket.movie,
    cinema: ticket.cinema,
    seats: ticket.seats,
    qty: ticket.qty,
    total: ticket.total,
    timeString: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  };

  state.adminNotifications.unshift(adminNotif);
  localStorage.setItem('moviebooking_admin_notifications', JSON.stringify(state.adminNotifications));

  closeModal('bookingModal');
  playUiSound('success');

  // Trigger User and Admin Notifications
  setTimeout(() => {
    showConfirmationModal(ticket);
    renderTickets();
    updateAdminMetrics();

    // Show Admin Real-Time Notification Banner
    setTimeout(() => {
      playUiSound('admin');
      $('#adminUnreadDot').classList.remove('hidden');
      toast(`⚡ ADMIN NOTICE: Reserved ${ticket.seats} for "${ticket.movie}" (${formatPeso(ticket.total)})`, 'admin');
    }, 1200);
  }, 200);
}

function showConfirmationModal(t) {
  $('#confirmInner').innerHTML = `
    <div class="confirm-check">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M20 6 9 17l-5-5"/></svg>
    </div>
    <h2 class="confirm-title">Reservation Confirmed!</h2>
    <p class="confirm-sub">Your digital ticket pass has been added to your pass wallet.</p>

    <div class="notification-sync-badge">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
      <span>Customer SMS & Admin Central Database Dispatched</span>
    </div>

    <div class="confirm-ticket">
      <div class="confirm-ticket-row"><span>Movie</span><span>${t.movie}</span></div>
      <div class="confirm-ticket-row"><span>Cinema Branch</span><span>${t.cinema}</span></div>
      <div class="confirm-ticket-row"><span>Screening</span><span>${t.date} • ${t.time}</span></div>
      <div class="confirm-ticket-row"><span>Reserved Seats</span><span>${t.seats} (${t.qty} Passes)</span></div>
      <div class="confirm-ticket-row"><span>Payment</span><span>${t.paymentMethod}</span></div>
      <div class="confirm-ticket-row"><span>Amount Paid</span><span>${formatPeso(t.total)}</span></div>
      <div class="confirm-ref">
        <small>Booking Pass ID</small>
        <strong>${t.ref}</strong>
      </div>
    </div>

    <div style="display:flex;gap:8px">
      <button class="btn btn-outline" style="flex:1" id="dlTicketBtn">Print / Save PDF</button>
      <button class="btn btn-primary" style="flex:1" id="viewPassesBtn">View My Passes</button>
    </div>
  `;

  openModal('confirmModal');

  $('#dlTicketBtn').addEventListener('click', () => {
    haptic(10);
    window.print();
  });

  $('#viewPassesBtn').addEventListener('click', () => {
    haptic(10);
    closeModal('confirmModal');
    document.getElementById('tickets').scrollIntoView({ behavior: 'smooth' });
  });

  toast("Pass saved to wallet!", 'success');
}

// User Ticket Wallet
function renderTickets() {
  const grid = $('#ticketsGrid');
  const countBadgeNav = $('#ticketCountBadgeNav');
  const countBadgeMob = $('#ticketCountBadgeMob');

  const count = state.tickets.length;
  if (count > 0) {
    if (countBadgeNav) { countBadgeNav.textContent = count; countBadgeNav.classList.remove('hidden'); }
    if (countBadgeMob) { countBadgeMob.textContent = count; countBadgeMob.classList.remove('hidden'); }
  } else {
    if (countBadgeNav) countBadgeNav.classList.add('hidden');
    if (countBadgeMob) countBadgeMob.classList.add('hidden');
  }

  if (count === 0) {
    grid.innerHTML = '';
    $('#ticketsEmpty').classList.remove('hidden');
    return;
  }
  $('#ticketsEmpty').classList.add('hidden');

  grid.innerHTML = state.tickets.map(t => `
    <div class="ticket-card" data-ref="${t.ref}">
      <div class="ticket-head">
        <div class="ticket-poster"><img src="${t.poster}" alt="${t.movie}" /></div>
        <div class="ticket-info">
          <div class="ticket-movie">${t.movie}</div>
          <div class="ticket-detail"><strong>${t.cinema}</strong></div>
          <div class="ticket-detail">📅 <strong>${t.date}</strong> • ⏰ <strong>${t.time}</strong></div>
          <div class="ticket-detail">Seats: <strong>${t.seats}</strong></div>
        </div>
      </div>
      <div class="ticket-body">
        <div class="ticket-id">
          <small>PASS ID</small>
          <strong>${t.ref}</strong>
        </div>
        <div class="ticket-qr">
          <svg viewBox="0 0 100 100" width="100%" height="100%">
            <rect width="100" height="100" fill="#fff" />
            <path d="M10 10h30v30h-30zM15 15v20h20v-20zM60 10h30v30h-30zM65 15v20h20v-20zM10 60h30v30h-30zM15 65v20h20v-20zM50 10h5v15h-5zM50 35h5v25h-5zM70 60h20v5h-20zM60 70h15v20h-15zM80 80h10v10h-10z" fill="#000"/>
          </svg>
        </div>
      </div>
      <div class="ticket-actions">
        <button data-act="view">View Pass</button>
        <button data-act="download">PDF</button>
        <button data-act="cancel" class="cancel">Cancel</button>
      </div>
    </div>
  `).join('');

  grid.querySelectorAll('.ticket-card').forEach(card => {
    card.querySelectorAll('button').forEach(btn => {
      btn.addEventListener('click', e => {
        e.stopPropagation();
        haptic(10);
        const ref = card.dataset.ref;
        const act = btn.dataset.act;
        const t = state.tickets.find(x => x.ref === ref);

        if (act === 'view') {
          showConfirmationModal(t);
        } else if (act === 'download') {
          showConfirmationModal(t);
          setTimeout(() => window.print(), 300);
        } else if (act === 'cancel') {
          if (confirm(`Cancel reservation for ${t.movie}? Full refund will be automatically processed.`)) {
            haptic(20);
            state.tickets = state.tickets.filter(x => x.ref !== ref);
            localStorage.setItem('moviebooking_tickets', JSON.stringify(state.tickets));
            renderTickets();
            toast('Pass cancelled and refund initiated.', 'error');
          }
        }
      });
    });
  });
}

// Admin Audit Feed & Metrics
function updateAdminMetrics() {
  const notifs = state.adminNotifications;
  const totalBookings = notifs.length;
  const totalSeats = notifs.reduce((sum, n) => sum + (n.qty || 1), 0);
  const totalRev = notifs.reduce((sum, n) => sum + (n.total || 0), 0);

  const tb = $('#adminTotalBookings');
  const ts = $('#adminTotalSeats');
  const tr = $('#adminTotalRevenue');
  if (tb) tb.textContent = totalBookings;
  if (ts) ts.textContent = totalSeats;
  if (tr) tr.textContent = formatPeso(totalRev);

  const feedList = $('#adminNotificationList');
  if (feedList) {
    if (notifs.length === 0) {
      feedList.innerHTML = `<div style="text-align:center;padding:24px;color:var(--text-muted);font-size:12px">No transactions recorded yet.</div>`;
    } else {
      feedList.innerHTML = notifs.map(n => `
        <div class="admin-feed-item">
          <div class="admin-feed-main">
            <strong>${n.movie}</strong>
            <div class="admin-feed-meta">${n.cinema} • Seats: <strong>${n.seats}</strong> • Ref: ${n.ref}</div>
          </div>
          <div>
            <div class="admin-feed-price">${formatPeso(n.total)}</div>
            <div class="admin-feed-time">${n.timeString}</div>
          </div>
        </div>
      `).join('');
    }
  }
}

// Cinema Branches Showcase
function renderCinemas() {
  const weekDaysShort = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  $('#cinemasGrid').innerHTML = CINEMAS.map(c => `
    <div class="cinema-card">
      <div class="cinema-name">${c.name}</div>
      <div class="cinema-location">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
        ${c.location}
      </div>
      <div class="cinema-screens">${c.screens} State-of-the-Art Halls</div>

      <div class="cinema-schedule-box">
        <div class="cinema-schedule-title">Screening Schedule Availability:</div>
        <div class="cinema-days-pills">
          ${[1, 2, 3, 4, 5, 6, 0].map(d => {
            const isAvail = c.availableDays.includes(d);
            return `
              <span class="day-status-pill ${isAvail ? 'open' : 'closed'}">
                ${weekDaysShort[d]}: ${isAvail ? 'Open' : 'Off'}
              </span>
            `;
          }).join('')}
        </div>
      </div>

      <div class="cinema-badges">${c.features.map(f => `<span class="badge">${f}</span>`).join('')}</div>
    </div>
  `).join('');
}

function renderComingSoon() {
  $('#comingGrid').innerHTML = COMING_SOON.map(m => `
    <div class="coming-card">
      <div class="coming-poster"><img src="${m.posterImage}" alt="${m.title}" loading="lazy" /></div>
      <div class="coming-info">
        <div>
          <div class="coming-title">${m.title}</div>
          <div class="coming-genre">${m.genre}</div>
          <div class="coming-date">Premieres ${m.date}</div>
        </div>
        <button class="notify-btn" data-id="${m.id}">Notify Me</button>
      </div>
    </div>
  `).join('');

  $$('.notify-btn').forEach(b => b.addEventListener('click', () => {
    haptic(10);
    playUiSound('click');
    if (b.classList.contains('notified')) {
      b.classList.remove('notified');
      b.textContent = 'Notify Me';
      toast('Notification cancelled');
    } else {
      b.classList.add('notified');
      b.textContent = '✓ Reminder Set';
      toast("We'll alert you when tickets open!", 'success');
    }
  }));
}

// Audio soundscape toggle
function toggleSoundscape() {
  const btn = $('#soundscapeBtn');
  const ctx = getAudioContext();
  if (!ctx) return toast('Web Audio not supported.');

  if (!state.soundscapeActive) {
    try {
      const osc1 = ctx.createOscillator();
      const osc2 = ctx.createOscillator();
      const gain = ctx.createGain();
      const filter = ctx.createBiquadFilter();

      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(160, ctx.currentTime);

      osc1.type = 'sine';
      osc1.frequency.setValueAtTime(55, ctx.currentTime);

      osc2.type = 'sawtooth';
      osc2.frequency.setValueAtTime(110.5, ctx.currentTime);

      gain.gain.setValueAtTime(0.001, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.1, ctx.currentTime + 2.5);

      osc1.connect(filter);
      osc2.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);

      osc1.start();
      osc2.start();

      state.droneNodes = { osc1, osc2, gain };
      state.soundscapeActive = true;
      btn.classList.add('active-audio');
      toast('Ambient theater audio active 🎧', 'success');
    } catch(err) {
      toast('Audio context unavailable.');
    }
  } else {
    if (state.droneNodes) {
      state.droneNodes.gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.8);
      setTimeout(() => {
        state.droneNodes.osc1.stop();
        state.droneNodes.osc2.stop();
        state.soundscapeActive = false;
        btn.classList.remove('active-audio');
        toast('Soundscape muted.');
      }, 850);
    }
  }
}

// Event Listeners
window.addEventListener('load', () => {
  setTimeout(() => $('#loader').classList.add('done'), 650);
});

window.addEventListener('scroll', () => {
  $('#header').classList.toggle('scrolled', window.scrollY > 20);
  updateActiveNav();
});

function updateActiveNav() {
  const sections = ['home', 'movies', 'cinemas', 'coming', 'tickets'];
  let current = 'home';
  sections.forEach(id => {
    const el = document.getElementById(id);
    if (el && el.getBoundingClientRect().top <= 200) current = id;
  });
  $$('.nav-link').forEach(l => l.classList.toggle('active', l.dataset.section === current));
  $$('.mobile-nav-item').forEach(l => l.classList.toggle('active', l.dataset.section === current));
}

$('#soundscapeBtn').addEventListener('click', toggleSoundscape);

$('#dimmerBtn').addEventListener('click', () => {
  haptic(15);
  playUiSound('click');
  state.lightsDimmed = !state.lightsDimmed;
  document.body.classList.toggle('lights-dimmed', state.lightsDimmed);
  toast(state.lightsDimmed ? 'Theater mode on (Lights Dimmed).' : 'Theater lights restored.');
});

$('#hamburger').addEventListener('click', () => {
  haptic(10);
  $('#hamburger').classList.toggle('active');
  $('#nav').classList.toggle('open');
});

$$('.nav-link').forEach(l => l.addEventListener('click', () => {
  $('#hamburger').classList.remove('active');
  $('#nav').classList.remove('open');
}));

$('#searchToggle').addEventListener('click', () => {
  haptic(10);
  playUiSound('click');
  $('#searchBar').classList.add('open');
  setTimeout(() => $('#searchInput').focus(), 250);
});

$('#searchClose').addEventListener('click', () => {
  $('#searchBar').classList.remove('open');
  $('#searchInput').value = '';
  state.searchQuery = '';
  renderMovies();
});

$('#searchInput').addEventListener('input', e => {
  state.searchQuery = e.target.value.toLowerCase().trim();
  renderMovies();
});

$('#adminPanelBtn').addEventListener('click', () => {
  haptic(10);
  playUiSound('click');
  $('#adminUnreadDot').classList.add('hidden');
  updateAdminMetrics();
  openModal('adminModal');
});

$('#heroBookBtn').addEventListener('click', () => {
  haptic(15);
  playUiSound('click');
  openBooking(HERO_FEATURED[state.heroIndex]);
});

$('#heroTrailerBtn').addEventListener('click', () => {
  haptic(10);
  playUiSound('click');
  openTrailer(HERO_FEATURED[state.heroIndex]);
});

$('#newsletterForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const emailInput = $('#newsletterEmail');
  if (emailInput.value.trim()) {
    haptic(20);
    playUiSound('success');
    toast(`Premiere notifications enabled for ${emailInput.value}!`, 'success');
    emailInput.value = '';
  }
});

function init() {
  setHero(0);
  startHeroTimer();
  updateFavCount();
  renderMovies();
  renderCinemas();
  renderComingSoon();
  renderTickets();
  updateAdminMetrics();
  updateActiveNav();
}

init();
