// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
    // Get all navigation links
    const navLinks = document.querySelectorAll(".navbar a")
  
    // Add active class to navbar links based on scroll position
    function updateActiveLink() {
      const sections = document.querySelectorAll("section")
      const scrollPosition = window.scrollY + 100 // Offset for better accuracy
  
      sections.forEach((section) => {
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight
        const sectionId = section.getAttribute("id")
  
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          // Remove active class from all links
          navLinks.forEach((link) => {
            link.classList.remove("active")
          })
  
          // Add active class to current section link
          const activeLink = document.querySelector(`.navbar a[href="#${sectionId}"]`)
          if (activeLink) {
            activeLink.classList.add("active")
          }
        }
      })
    }
  
    // Add smooth scrolling to all navigation links
    navLinks.forEach((link) => {
      link.addEventListener("click", function (e) {
        e.preventDefault()
  
        // Get the target section id from the href attribute
        const targetId = this.getAttribute("href")
        const targetSection = document.querySelector(targetId)
  
        if (targetSection) {
          // Smooth scroll to the target section
          window.scrollTo({
            top: targetSection.offsetTop - 80, // Offset for header height
            behavior: "smooth",
          })
  
          // Update active link
          navLinks.forEach((link) => link.classList.remove("active"))
          this.classList.add("active")
        }
      })
    })
  
    // Add scroll event listener to update active link
    window.addEventListener("scroll", updateActiveLink)
  
    // Call updateActiveLink on page load
    updateActiveLink()
  
    // Add animation to elements when they come into view
    const animateOnScroll = () => {
      const elements = document.querySelectorAll(".service-box, .project-box, .cert-card, .contact-item, .skill-category")
  
      elements.forEach((element) => {
        const elementPosition = element.getBoundingClientRect().top
        const screenPosition = window.innerHeight / 1.3
  
        if (elementPosition < screenPosition) {
          element.style.animation = "fadeIn 1s ease forwards"
          element.style.opacity = "1"
        }
      })
    }
  
    // Set initial opacity for animation elements
    const elementsToAnimate = document.querySelectorAll(
      ".service-box, .project-box, .cert-card, .contact-item, .skill-category",
    )
    elementsToAnimate.forEach((element) => {
      element.style.opacity = "0"
    })
  
    // Add scroll event listener for animations
    window.addEventListener("scroll", animateOnScroll)
  
    // Call animateOnScroll on page load
    animateOnScroll()
  
    // Form submission handling
    const contactForm = document.querySelector(".contact-form form")
    if (contactForm) {
      contactForm.addEventListener("submit", function (e) {
        e.preventDefault()
  
        // Get form data
        const name = this.querySelector('input[type="text"]').value
        const email = this.querySelector('input[type="email"]').value
        const message = this.querySelector("textarea").value
  
        // Simple form validation
        if (!name || !email || !message) {
          alert("Please fill in all fields")
          return
        }
  
        // Here you would typically send the form data to a server
        // For now, we'll just show a success message
        alert(`Thank you, ${name}! Your message has been sent.`)
  
        // Reset the form
        this.reset()
      })
    }
  })
  