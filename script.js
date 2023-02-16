async function getJob() {
    let url = 'data.json';
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

async function renderJobs() {
    let users = await getJob();
    let html = '';
    users.forEach(user => {
        let htmlSegment = `
  <div class="profile-card float">
    <div class="profile-header">
            <img src="${user.image}">
        <h2>${user.name}</h2>
    </div class="profile-header">
    <div class="profile-bio">
        <p>${user.description}</p> 
 <div class="profile-link">
  <button class="button-89 git" role="button"><a href="${user.github}" target="a_blank">Github Code</a></button> 
      <button class="button-89 live" role="button"><a href="${user.link}" target="a_blank">Live Preview</a></button> 
    </div>
    </div>
    </div>
</div>
</div>
          `;
        html += htmlSegment;
    });
    let container = document.getElementById('job');
    container.innerHTML = html;
}
renderJobs();

/* render sphere */
const myTags = [
    'JavaScript', 'CSS', 'HTML',
    'Node.js', 'NPM', 'React', 'Git',
    'Bootstrap'
];
var tagCloud = TagCloud('.content', myTags, {
    radius: 180,
    maxSpeed: 'normal',
    initSpeed: 'normal',
    direction: 135,
    keep: true,
});
window.onbeforeunload = () => {
    for (const form of document.getElementsByTagName('form')) {
        form.reset();
    }
};

// floatimg-text
function checkForVisibility() {
    var headers = document.querySelectorAll(".float");
    headers.forEach(function (header) {
        if (isElementInViewport(header)) {
            header.classList.add("headerVisible");
        } else {
            header.classList.remove("headerVisible");
        }
    });
}
function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();

    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}
if (window.addEventListener) {
    addEventListener("DOMContentLoaded", checkForVisibility, false);
    addEventListener("load", checkForVisibility, false);
    addEventListener("scroll", checkForVisibility, false);
}


document.getElementById("year").innerHTML = new Date().getFullYear();