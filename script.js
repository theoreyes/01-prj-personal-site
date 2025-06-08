/*
* Theodore Reyes
*
* Used for generating the projects section dynamically
*/

// Hard-coded project data
const projects = [
  {title: "💡 Lightbulb Social Media Website",
   desc: "A collaborative proof-of-concept social media website with features like user profiles, " +
         "posts, and comments [Site is not currently being hosted]",
   link: "https://github.com/HunterRundhaug/Lightbulb_337"
  },
  {title: "🚀 LeetCode Problems",
    desc: "A collection of my solutions to various LeetCode problems, all including short " +
          "explanations of my thought process and reasoning. Updated frequently!",
    link: "https://github.com/theoreyes/leetcode_problems"
  }
]

// Loads an individual project into the projectsSection area of the DOM
function addProject(project, projectsSection) {
  const newSection = document.createElement("div");
  const title = document.createElement("h3");
  const desc = document.createElement("p");
  const link = document.createElement("a");
  title.innerText = project.title;
  desc.innerText = project.desc;
  link.innerText = "View Project";
  link.href = project.link;
  link.target = "_blank";
  newSection.appendChild(title);
  newSection.appendChild(desc);
  newSection.appendChild(link);
  newSection.classList.add("project-item");
  projectsSection.appendChild(newSection);
}

// Gets project section as DOM element and adds each project to it
// using data from project json
const projectsSection = document.querySelector(".projects-row");
projects.forEach(project => {
  addProject(project, projectsSection);
});