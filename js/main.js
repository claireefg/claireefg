gsap.registerPlugin(ScrollTrigger);

// ============================================
// FOOTER YEAR
// ============================================
document.getElementById('year').textContent = new Date().getFullYear();

// ============================================
// HAMBURGER NAV
// ============================================
const navToggle = document.getElementById('nav-toggle');
const navLinks  = document.getElementById('nav-links');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('nav-open');
});

// close nav when a link is clicked
document.querySelectorAll('#nav-links a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('nav-open'));
});

// ============================================
// NAVBAR — hide on scroll down, show on scroll up
// ============================================
let lastScroll = 0;
window.addEventListener('scroll', () => {
  const current = window.scrollY;
  // close mobile nav on scroll
  navLinks.classList.remove('nav-open');
  gsap.to('#navbar', {
    y: current > lastScroll && current > 120 ? -70 : 0,
    duration: 0.35,
    ease: 'power2.out'
  });
  lastScroll = current;
});

// ============================================
// HERO — entrance animation
// ============================================
const heroTl = gsap.timeline({ delay: 0.15 });
heroTl
  .from('.hero-title',   { opacity: 0, y: 32, duration: 0.75, ease: 'power2.out' })
  .from('.hero-sub',     { opacity: 0, y: 20, duration: 0.6,  ease: 'power2.out' }, '-=0.4')
  .from('.btn-primary',  { opacity: 0, y: 14, duration: 0.5,  ease: 'power2.out' }, '-=0.3')
  .from('.hero-drawing', { opacity: 0, x: 30, duration: 0.8,  ease: 'power2.out' }, '-=0.5');

// ============================================
// SCROLL ANIMATIONS
// ============================================

// section headings
gsap.utils.toArray('section h2').forEach(el => {
  gsap.from(el, {
    scrollTrigger: { trigger: el, start: 'top 88%' },
    opacity: 0, y: 24, duration: 0.65, ease: 'power2.out'
  });
});

// about text
gsap.from('.about-text p', {
  scrollTrigger: { trigger: '#about', start: 'top 80%' },
  opacity: 0, y: 20, stagger: 0.12, duration: 0.6, ease: 'power2.out'
});

// skill items — stagger in
gsap.from('.skill-item', {
  scrollTrigger: { trigger: '#skills', start: 'top 75%' },
  opacity: 0, y: 20, stagger: 0.05, duration: 0.5, ease: 'power2.out'
});

// map section
gsap.from('.map-header', {
  scrollTrigger: { trigger: '#map-section', start: 'top 80%' },
  opacity: 0, y: 20, duration: 0.6, ease: 'power2.out'
});

// contact
gsap.from('.contact-text > *', {
  scrollTrigger: { trigger: '#contact', start: 'top 80%' },
  opacity: 0, y: 18, stagger: 0.12, duration: 0.55, ease: 'power2.out'
});

// ============================================
// INTERACTIVE MAP
// ============================================

const projectData = [
  {
    lat: 41.8787, lng: -71.3826,
    title: 'The Fight for Green Space in Pawtucket, Rhode Island',
    date: '',
    place: 'Pawtucket, RI',
    description: 'Developed in collaboration with local non-profits and municipal officials, this project traces the history of green space removal in Pawtucket, Rhode Island and the uneven racial and economic impacts of the demolition of a local field.',
    tags: ['ArcGIS Pro', 'Python', 'Remote Sensing'],
    image: 'assets/images/morley-field.png',
    links: [
      { label: 'StoryMap', url: 'https://storymaps.arcgis.com/stories/ccb830c0c7974161b4362cc9b3da73ba' },
      { label: 'Methodology', url: 'https://docs.google.com/presentation/d/13O3qfedCyycJMTvTF5yFE6O2G581jmXZTpTUVYAff94/edit?slide=id.p#slide=id.p' }
    ]
  },
  {
    lat: 42.3601, lng: -71.0489,
    title: 'Environmental Justice (EJ) and the Toxics Use Reduction Act',
    date: '',
    place: 'Boston, MA',
    description: 'For the Massachusetts Department of Energy & Environmental Affairs, I finalized this overview of Environmental Justice and the Toxics Use Reduction Act, ensuring the website met state accessibility standards.',
    tags: ['ArcGIS'],
    image: 'assets/images/EJ-TURA.png',
    links: [
      { label: 'StoryMap', url: 'https://storymaps.arcgis.com/stories/c142bda80aed4445ad8ca66bb1058858' }
    ]
  },
  {
    lat: 42.2557, lng: -71.8635,
    title: 'Assessing Supply Chain Model Sensitivity to Land-Use Data',
    date: '',
    place: 'Worcester, MA',
    description: "To improve the interoperability and functionality of an existing land use model, I integrated Google's Dynamic World and evaluated the sensitivity of the model to different land use maps and algorithms.",
    tags: ['Python', 'Google Earth Engine & Cloud', 'Machine Learning', 'Docker'],
    image: 'assets/images/supply-chain-model.png',
    links: [
      { label: 'GitHub', url: 'https://github.com/claireefg/geog313-final-project' }
    ]
  },
  {
    lat: 42.2557, lng: -71.8835,
    title: 'Mapping Impact of Climate Change on Habitats of Ant Species in the Pogonomyrmex Genus',
    date: '',
    place: '',
    description: 'I collaborated on the development of an R package and geospatial analysis of the impact of climate change on habitats of ant species in the Pogonomyrmex genus.',
    tags: ['R', 'ArcGIS'],
    image: 'assets/images/ants.png',
    links: [
      { label: 'StoryMap', url: 'https://storymaps.arcgis.com/stories/cd271ddafecf4b0386536547665fd103' }
    ]
  },
  {
    lat: 55.0, lng: -125.0,
    title: 'Old Growth Logging in Endangered Caribou Habitat',
    date: 'June 2025',
    place: 'B.C., Canada',
    description: 'In my position with Stand.earth, I conducted research and designed visualizations for this report on the impact of logging in endangered Caribou habitats.',
    tags: ['ArcGIS', 'PostgreSQL'],
    image: 'assets/images/caribou.png',
    links: [
      { label: 'Report', url: 'https://stand.earth/forest-eye/2025/06/23/old-growth-logging-in-endangered-caribou-habitat/' }
    ]
  },
  {
    lat: 40.7128, lng: -74.0060,
    title: 'Mapping Histories of Slavery & Resistance in NYC',
    date: '',
    place: 'New York, NY',
    description: "I led the digitization of Mariame Kaba's walking tour of the history of slavery and resistance in NYC.",
    tags: ['JavaScript', 'Mapbox', 'QGIS'],
    image: 'assets/images/walking-tour.png',
    links: [
      { label: 'Website', url: 'https://www.slaverywalkingtournyc.com/' },
      { label: 'NACIS Presentation', url: 'https://www.youtube.com/watch?v=EV8bihkotb4' }
    ]
  }
];

const techJobData = [
  {
    lat: 42.2557,
    lng: -71.8735,
    title: "Graduate Research Assistant",
    date: "Sep 2025 – Present",
    place: "Clark University (Worcester, MA)",
    description: "Analyzed 500+ surveys, wrote stakeholder reports, and redesigned survey instruments for a project with Prisoners' Legal Services of Massachusetts.",
    tags: ["R", "Microsoft Office", "Data Analysis", "Survey Design"],
    image: "assets/images/clark.png",
    links: []
  },
  {
    lat: 41.8787,
    lng: -71.3826,
    title: 'GIS Intern',
    date: 'Jul 2025 – Sep 2025',
    place: 'Blackstone Watershed Collaborative (Pawtucket, RI)',
    description: 'Used ArcGIS to analyze green space loss and environmental injustice in collaboration with local nonprofits and officials. Expanded a class project into a year-long funded research initiative.',
    tags: ['ArcGIS', 'Data Analysis', 'Community Outreach', 'Environmental Justice'],
    image: 'assets/images/blackstone-watershed.jpeg',
    links: []
  },
  {
    lat: 42.3876,
    lng: -71.0995,
    title: 'GIS Intern',
    date: 'Mar 2025 – Aug 2025',
    place: 'Stand.earth (Remote)',
    description: 'Monitored deforestation for the Forest Eye program using PostgreSQL and ArcGIS. Managed geospatial databases, optimized ArcGIS Enterprise, and co-authored a public research report on logging dynamics.',
    tags: ['Remote Sensing', 'PostgreSQL', 'ArcGIS', 'Data Management'],
    image: 'assets/images/stand-earth.png',
    links: []
  },
  {
    lat: 42.3601,
    lng: -71.0589,
    title: 'Environmental Justice Intern',
    date: 'Apr 2025 – Jul 2025',
    place: 'Massachusetts Office of Technical Assistance & Technology (Boston, MA)',
    description: 'Conducted GIS analysis supporting statewide environmental justice outreach and created data visualizations to improve accessibility of environmental data systems.',
    tags: ['ArcGIS Experience Builder', 'Microsoft Office', 'Data Visualization', 'GIS Analysis'],
    image: 'assets/images/EEA.jpg',
    links: []
  }
];

const otherJobData = [
  {
    lat: 42.3314,
    lng: -71.1212,
    title: 'Co-Coordinator – Teens Acting for Social Change',
    date: 'Sep 2024 – Jun 2025',
    place: 'Boston Workers Circle (Brookline, MA)',
    description: 'Designed curriculum and facilitated a community-based educational program focused on youth leadership and social change.',
    tags: ['Facilitation', 'Community Outreach', 'Curriculum Design'],
    image: 'assets/images/workers-circle.jpeg',
    links: []
  },
  {
    lat: 42.3370,
    lng: -71.2092,
    title: '7th Grade Teacher',
    date: 'Aug 2022 – May 2023',
    place: 'Congregation Dorshei Tzedek (Newton, MA)',
    description: 'Designed and implemented lesson plans catered to the students, creating a joyful learning environment.',
    tags: ['Leadership Development', 'Community Outreach', 'Curriculum Design'],
    image: 'assets/images/dorshei.png',
    links: []
  },
  {
    lat: 42.5584,
    lng: -70.8800,
    title: 'Volunteer Coordinator',
    date: 'Jan 2022 – Dec 2022',
    place: 'Family Promise North Shore Boston (Beverly, MA)',
    description: 'Managed volunteer programming and local partnerships for a housing campaign, leading trauma-informed trainings and using maps to educate on the root causes of homelessness and housing inequity.',
    tags: ['Microsoft Office', 'EveryAction', 'Community Outreach', 'Curriculum Design'],
    image: 'assets/images/family-promise.png',
    links: []
  }
];

// init map
const map = L.map('map', {
  scrollWheelZoom: false,
  tap: false,
  zoomControl: true
});

L.tileLayer('https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/">CARTO</a>',
  subdomains: 'abcd',
  maxZoom: 19
}).addTo(map);

// panel elements
const mapContainer = document.getElementById('map-container');
const panel        = document.getElementById('map-panel');
const panelClose   = document.getElementById('panel-close');
const panelBadge   = document.getElementById('panel-badge');
const panelImg     = document.getElementById('panel-img');
const panelMeta    = document.getElementById('panel-meta');
const panelTitle   = document.getElementById('panel-title');
const panelPlace   = document.getElementById('panel-place');
const panelDesc    = document.getElementById('panel-desc');
const panelTags    = document.getElementById('panel-tags');
const panelLinks   = document.getElementById('panel-links');

function openPanel(data, type) {
  // badge
  panelBadge.textContent = type === 'project' ? 'Project' : type === 'job' ? 'Technical Experience' : 'Experience';
  panelBadge.className = `panel-badge type-${type}`;

  // image
  if (data.image) {
    panelImg.innerHTML = `<img src="${data.image}" alt="${data.title}" />`;
  } else {
    panelImg.innerHTML = `<span class="panel-img-empty">${type === 'project' ? '◎' : '◈'}</span>`;
  }

  // text content
  panelMeta.textContent  = data.date;
  panelTitle.textContent = data.title;
  panelPlace.textContent = data.place;
  panelDesc.textContent  = data.description;

  // tags
  panelTags.innerHTML = data.tags
    .map(t => `<span class="panel-tag">${t}</span>`)
    .join('');

  // links
  panelLinks.innerHTML = data.links
    .map(l => `<a href="${l.url}" target="_blank" rel="noopener" class="panel-link">${l.label} →</a>`)
    .join('');

  // show panel
  panel.classList.remove('map-panel--hidden');
  panel.setAttribute('aria-hidden', 'false');
  mapContainer.classList.add('panel-open');

  // animate content in
  gsap.fromTo(
    [panelMeta, panelTitle, panelPlace, panelDesc, panelTags, panelLinks],
    { opacity: 0, y: 12 },
    { opacity: 1, y: 0, stagger: 0.07, duration: 0.4, delay: 0.25, ease: 'power2.out' }
  );

  // resize map after panel opens
  setTimeout(() => map.invalidateSize({ animate: true }), 420);
}

function closePanel() {
  panel.classList.add('map-panel--hidden');
  panel.setAttribute('aria-hidden', 'true');
  mapContainer.classList.remove('panel-open');
  setTimeout(() => map.invalidateSize({ animate: true }), 420);
}

panelClose.addEventListener('click', closePanel);

// close panel on map click (desktop)
map.on('click', closePanel);

// --- shared cluster options ---
const clusterOpts = {
  maxClusterRadius: 40,
  spiderfyOnMaxZoom: true,
  showCoverageOnHover: false,
  zoomToBoundsOnClick: true
};

// --- BLUE SQUARE markers for technical jobs ---
const techJobCluster = L.markerClusterGroup({
  ...clusterOpts,
  iconCreateFunction(cluster) {
    return L.divIcon({
      className: '',
      html: `<div style="
        width:28px;height:28px;border-radius:50%;
        background:#2D5BE3;border:1.5px solid #1a1a1a;
        display:flex;align-items:center;justify-content:center;
        font-size:11px;font-weight:600;color:#fff;cursor:pointer;
      ">${cluster.getChildCount()}</div>`,
      iconSize: [28, 28],
      iconAnchor: [14, 14]
    });
  }
});

techJobData.forEach(j => {
  const icon = L.divIcon({
    className: '',
    html: `<div style="
      width:10px;height:10px;
      background:#2D5BE3;border:1px solid #1a1a1a;cursor:pointer;
    "></div>`,
    iconSize: [20, 20],
    iconAnchor: [10, 10]
  });
  const marker = L.marker([j.lat, j.lng], { icon });
  marker.on('click', e => {
    L.DomEvent.stopPropagation(e);
    openPanel(j, 'job');
  });
  marker.bindTooltip(j.title, { direction: 'top', offset: [0, -8] });
  techJobCluster.addLayer(marker);
});
map.addLayer(techJobCluster);

// --- YELLOW SQUARE markers for other experience ---
const otherJobCluster = L.markerClusterGroup({
  ...clusterOpts,
  iconCreateFunction(cluster) {
    return L.divIcon({
      className: '',
      html: `<div style="
        width:28px;height:28px;border-radius:50%;
        background:#E8B84B;border:1.5px solid #1a1a1a;
        display:flex;align-items:center;justify-content:center;
        font-size:11px;font-weight:600;color:#1a1a1a;cursor:pointer;
      ">${cluster.getChildCount()}</div>`,
      iconSize: [28, 28],
      iconAnchor: [14, 14]
    });
  }
});

otherJobData.forEach(j => {
  const icon = L.divIcon({
    className: '',
    html: `<div style="
      width:10px;height:10px;
      background:#E8B84B;border:1px solid #1a1a1a;cursor:pointer;
    "></div>`,
    iconSize: [20, 20],
    iconAnchor: [10, 10]
  });
  const marker = L.marker([j.lat, j.lng], { icon });
  marker.on('click', e => {
    L.DomEvent.stopPropagation(e);
    openPanel(j, 'other');
  });
  marker.bindTooltip(j.title, { direction: 'top', offset: [0, -8] });
  otherJobCluster.addLayer(marker);
});
map.addLayer(otherJobCluster);

// fit map to show all markers
map.setView([42.2, -71.4], 9);

// ============================================
// PROJECT GRID
// ============================================
const projectsGrid = document.getElementById('projects-grid');

projectData.forEach(p => {
  const card = document.createElement('div');
  card.className = 'project-card';

  const thumbHtml = p.image
    ? `<img src="${p.image}" alt="${p.title}" />`
    : `<span class="project-card-placeholder">◎</span>`;

  card.innerHTML = `
    <div class="project-card-thumb">${thumbHtml}</div>
    <div class="project-card-body">
      <h3 class="project-card-title">${p.title}</h3>
      ${p.place ? `<p class="project-card-place">${p.place}</p>` : ''}
      <div class="project-card-tags">${p.tags.map(t => `<span class="panel-tag">${t}</span>`).join('')}</div>
    </div>
  `;

  card.addEventListener('click', () => openProjectModal(p));
  projectsGrid.appendChild(card);

  gsap.from(card, {
    scrollTrigger: { trigger: card, start: 'top 90%' },
    opacity: 0, y: 20, duration: 0.55, ease: 'power2.out'
  });
});

// ============================================
// PROJECT MODAL
// ============================================
const projectModal = document.getElementById('project-modal');
const modalClose   = document.getElementById('modal-close');
const modalImg     = document.getElementById('modal-img');
const modalTitle   = document.getElementById('modal-title');
const modalPlace   = document.getElementById('modal-place');
const modalDesc    = document.getElementById('modal-desc');
const modalTags    = document.getElementById('modal-tags');
const modalLinks   = document.getElementById('modal-links');

function openProjectModal(p) {
  modalImg.innerHTML = p.image
    ? `<img src="${p.image}" alt="${p.title}" />`
    : `<span class="modal-img-placeholder">◎</span>`;

  modalTitle.textContent = p.title;
  modalPlace.textContent = p.place || '';
  modalDesc.textContent  = p.description;
  modalTags.innerHTML    = p.tags.map(t => `<span class="panel-tag">${t}</span>`).join('');
  modalLinks.innerHTML   = p.links.map(l =>
    `<a href="${l.url}" target="_blank" rel="noopener" class="panel-link">${l.label} →</a>`
  ).join('');

  projectModal.classList.remove('modal--hidden');
  document.body.style.overflow = 'hidden';

  gsap.fromTo('.modal-card',
    { opacity: 0, y: 28 },
    { opacity: 1, y: 0, duration: 0.35, ease: 'power2.out' }
  );
}

function closeProjectModal() {
  gsap.to('.modal-card', {
    opacity: 0, y: 16, duration: 0.2, ease: 'power2.in',
    onComplete() {
      projectModal.classList.add('modal--hidden');
      document.body.style.overflow = '';
    }
  });
}

modalClose.addEventListener('click', closeProjectModal);
projectModal.addEventListener('click', e => {
  if (e.target === projectModal) closeProjectModal();
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && !projectModal.classList.contains('modal--hidden')) {
    closeProjectModal();
  }
});