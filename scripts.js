document.addEventListener("DOMContentLoaded", function () {
  // Contact Form Submission
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();
      const name = document.querySelector('input[type="text"]').value;
      const email = document.querySelector('input[type="email"]').value;
      const message = document.querySelector("textarea").value;

      // Handle form submission logic here
      console.log("Name:", name);
      console.log("Email:", email);
      console.log("Message:", message);

      // Optionally, send this data to a server using fetch or XMLHttpRequest
    });
  }

  // Project Filtering
  const filterLinks = document.querySelectorAll(".filter-link");
  const projectGallery = document.getElementById("project-gallery");

  if (filterLinks.length > 0 && projectGallery) {
    const projects = projectGallery.querySelectorAll("[data-category]");

    filterLinks.forEach((link) => {
      link.addEventListener("click", function (e) {
        e.preventDefault();

        // Remove active class from all links
        filterLinks.forEach((link) => link.classList.remove("active"));

        // Add active class to the clicked link
        this.classList.add("active");

        // Get the filter value
        const filter = this.getAttribute("data-filter");

        // Filter projects
        projects.forEach((project) => {
          const category = project.getAttribute("data-category");

          if (filter === "all" || category === filter) {
            project.style.display = "block"; // Show project
          } else {
            project.style.display = "none"; // Hide project
          }
        });
      });
    });
  }
});
