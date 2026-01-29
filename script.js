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
  renderSkills();
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

function renderSkills() {
  const container = document.getElementById('skills-container');
  if (!data.skills) return;

  data.skills.forEach(skill => {
    const div = document.createElement('div');
    div.className = 'skill-card';
    div.innerHTML = `
            <i class='bx ${skill.icon}'></i>
            <h3>${skill.name}</h3>
        `;
    container.appendChild(div);
  });
}

function renderProjects() {
  const container = document.getElementById('projects-container');
  if (!data.projects) return;

  data.projects.forEach((project, index) => {
    const div = document.createElement('div');
    div.className = 'project-card';

    // Build tech stack HTML
    let techStackHtml = '<div class="tech-stack">';
    project.techStack.forEach(tech => {
      techStackHtml += `<span class="tech-tag"><i class='bx ${tech.icon}'></i>${tech.name}</span>`;
    });
    techStackHtml += '</div>';

    // Build how it works/features HTML
    let workingHtml = '<div class="project-working"><h4>How It Works</h4><ul>';
    project.features.slice(0, 3).forEach(feature => {
      workingHtml += `<li><strong>${feature.title}:</strong> ${feature.desc}</li>`;
    });
    workingHtml += '</ul></div>';

    // Build action buttons
    const githubLink = project.links.github !== '#' ? project.links.github : '#';
    const githubHtml = githubLink !== '#' ? `<a href="${githubLink}" target="_blank" class="btn-github"><i class='bx bxl-github'></i>GitHub</a>` : '';

    div.innerHTML = `
      <div class="project-number">${String(index + 1).padStart(2, '0')}</div>
      <div class="project-content">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        ${workingHtml}
        ${techStackHtml}
        <div class="project-actions">
          <a href="${project.links.demo}" target="_blank" class="btn-demo">View Demo</a>
          ${githubHtml}
        </div>
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
    div.className = 'experience-card';

    let descHtml = '<ul>';
    exp.desc.forEach(point => {
      descHtml += `<li>• ${point}</li>`;
    });
    descHtml += '</ul>';

    div.innerHTML = `
      <i class='bx bx-briefcase'></i>
      <h3>${exp.company}</h3>
      <h4>${exp.role}</h4>
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
