
  function newFunction() {
    class Job {
      constructor(name, description, skills, image, link) {
        this.skills = skills;
        this.name = name;
        this.description = description;
        this.skills = skills;
        this.image = image;
        this.link = link;
      }
    }
    const portfolio = new Job(
      "Portfolio",
      "My first project that I made as school graduation work",
      "HTML, SCSS",
      "/images/portfolio.png",
      "HTML, SCSS"
    );
    const salaryCalc = new Job(
      "Salary Calculator",
      "Simple salary calculator",
      "HTML, CSS, JavaScript",
      "/images/salary.png",
      "https://ilzbergs.github.io/calculator/"
    );
    const toDo = new Job(
      "ToDo",
      "ToDo application with local storage",
      "HTML, CSS, JavaScript",
      "/images/todo.png",
      "https://ilzbergs.github.io/ToDo/"
    );
    const tinDog = new Job(
      "TinDog",
      "Just some dummy site for dogs, like Tinder",
      "HTML, CSS",
      "/images/tinDog.png",
      "https://ilzbergs.github.io/tinDog-bootstrap-/"
    );
    const blogSite = new Job(
      "BlogSite",
      "Your personal blog site",
      "JavaScript, EJS, CSS",
      "/images/blogSite.png",
      "https://peaceful-gorge-83688.herokuapp.com/"
    );
    const secrets = new Job(
      "Secrets",
      "Application where you can post your secrets",
      "HTML, SCSS",
      "/images/secrets.png",
      "https://www.google.com"
    );
    const drumKit = new Job(
      "Drumkit",
      "Some simple application where you can play some drums",
      "HTML, CSS, JavaScript",
      "/images/drumKit.png",
      "https://ilzbergs.github.io/DrumKit/"
    );
    const toDolist = new Job(
      "ToDo list",
      "A little bit more complex ToDo app with Node.js and MongoDB",
      "HTML, CSS, EJS, JavaScript",
      "/images/todolist.png",
      "https://warm-lake-38037.herokuapp.com/"
    );
  }

