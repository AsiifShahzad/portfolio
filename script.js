// Toggle Icon Navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

// Scroll Sections Active Link
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
      });
    };
  });

  // Sticky Navbar
  let header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 100);

  // Remove toggle icon and navbar when click navbar link
  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');
};

// Dynamic Content Rendering
document.addEventListener('DOMContentLoaded', () => {
  renderServices();
  renderProjects();
  renderExperience();
  renderCertifications();
});

function renderServices() {
  const container = document.getElementById('services-container');
  if (!data.services) return;

  data.services.forEach(service => {
    const div = document.createElement('div');
    div.className = 'service-box';
    div.innerHTML = `
            <i class='bx ${service.icon}'></i>
            <h3>${service.title}</h3>
            <p>${service.desc}</p>
        `;
    container.appendChild(div);
  });
}

function renderProjects() {
  const container = document.getElementById('projects-container');
  if (!data.projects) return;

  data.projects.forEach(project => {
    const div = document.createElement('div');
    div.className = 'portfolio-box';

    // We are using a generic background or could use project images if available. 
    // For now, styling relies on CSS gradients or we need to add images to data.js
    // Using a data attribute for ID to pass to the detail page

    div.innerHTML = `
            <div class="portfolio-content-visible">
                 <h4>${project.title}</h4>
                 <p>${project.summary}</p>
            </div>
            <div class="portfolio-layer">
                <h4>${project.title}</h4>
                <p>Click to view details</p>
                <a href="project.html?id=${project.id}"><i class='bx bx-link-external'></i></a>
            </div>
        `;
    container.appendChild(div);
  });
}

function renderExperience() {
  const container = document.getElementById('experience-container');
  if (!data.experience) return;

  data.experience.forEach(exp => {
    const div = document.createElement('div');
    div.className = 'service-box'; // Reusing service-box style which looks good for cards
    div.style.textAlign = 'left';

    let descHtml = '<ul>';
    exp.desc.forEach(point => {
      descHtml += `<li style="font-size: 1.4rem; color: #ccc; margin-bottom: 0.5rem;">• ${point}</li>`;
    });
    descHtml += '</ul>';

    div.innerHTML = `
            <i class='bx bx-briefcase' style="font-size: 4rem; margin-bottom: 1rem;"></i>
            <h3 style="font-size: 2rem;">${exp.company}</h3>
            <h4 style="font-size: 1.6rem; color: var(--main-color); margin-bottom: 1rem;">${exp.role}</h4>
            ${descHtml}
        `;
    container.appendChild(div);
  });
}

function renderCertifications() {
  const container = document.getElementById('certifications-container');
  if (!data.certifications) return;

  data.certifications.forEach(cert => {
    const div = document.createElement('div');
    div.className = 'cert-card';
    div.innerHTML = `
            <i class='bx ${cert.icon}'></i>
            <h3>${cert.title}</h3>
            <p>${cert.issuer} • ${cert.date}</p>
        `;
    container.appendChild(div);
  });
}
