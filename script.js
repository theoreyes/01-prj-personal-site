/*
* Theodore Reyes
*
* Used for generating the projects section dynamically
*/

const projects = [
  {title: "Lightbulb Social Media Website",
   desc: "A collaborative proof-of-concept social media website with features like user profiles " +
         "posts, and comments [Site is not currently being hosted]",
   link: "https://github.com/HunterRundhaug/Lightbulb_337"
  },
  {title: "LeetCode Problems",
    desc: "A collection of my solutions to various LeetCode problems, all including short " +
          "explanations of my thought processes and reasonings. Updated frequently!",
    link: "https://github.com/theoreyes/leetcode_problems"
  }
]

function addProject(project, projectsSection) {
  const newSection = document.createElement("div");
  const title = document.createElement("h3");
  const desc = document.createElement("p");
  const link = document.createElement("a");
  title.innerText = project.title;
  desc.innerText = project.desc;
  link.innerText = "View Project";
  link.href = project.link;
  link.target = "_blank"; // Opens link in new tab

  newSection.appendChild(title);
  newSection.appendChild(desc);
  newSection.appendChild(link);
  newSection.classList.add("project-item");
  projectsSection.appendChild(newSection);
}

const projectsSection = document.querySelector(".projects-row");
projects.forEach(project => {
  addProject(project, projectsSection);
});