// Target each repo

const repos = document.querySelectorAll(".repo");

// Convert into an array

const arrayRepos = [...repos];
const testRepos = [repos]; // nodelist inside an array

// Map to get each title

const titles = arrayRepos.map((repo) => repo.textContent);
console.log(titles);

// Filter from the reassigned variable to remove netflix

const filteredTitles = titles.filter((title) => title !== "Netflix-copycat");
console.log(filteredTitles);

//////////

function returnNames() {
  return {
    name: "Titi",
    age: 21,
    nationality: "French",
  };
}

const { name, age: tombola, nationality } = returnNames();
const titi = returnNames();
