document.addEventListener("DOMContentLoaded", function () {
  // Get the project slug from the URL
  const urlParams = new URLSearchParams(window.location.search);
  const projectSlug = urlParams.get("name");

  // Fetch project data
  fetch("projects.json")
    .then((response) => response.json())
    .then((projects) => {
      // Find the project with the matching slug
      const project = projects.find((p) => p.slug === projectSlug);
      console.log(project);
      if (project) {
        // Populate the template with project data
        document.getElementById("project-title").textContent = project.title;
        document.getElementById("project-name").textContent = project.title;
        document.getElementById("project-location").textContent =
          project.location;
        document.getElementById("project-image").src = project.image;
        document.getElementById("project-description").textContent =
          project.description;
        document.getElementById("project-year").textContent = project.year;
        document.getElementById("project-size").textContent = project.size;
      } else {
        // Handle case where project is not found
        document.getElementById("project-detail").innerHTML =
          "<p>Project not found.</p>";
      }
    })
    .catch((error) => {
      console.error("Error fetching project data:", error);
    });
});
