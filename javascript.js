
let myName = 'Austin Gage Jones';
let upperName = myName.toUpperCase();
console.log('Name: ' + upperName);
console.log('Career: Web Development / Programming');
console.log('Description: I have basic knowlege of the HTML, CSS, Java, and JavaScript programming languages.');

//Interests
var interest1 = 'Movies';
var interest2 = 'TV Shows';
var interest3 = 'Video Games';
var interest4 = 'Programming';

console.log('');

console.log('My Interests:')
displaySkill(interest1);
displaySkill(interest2);
displaySkill(interest3);
displaySkill(interest4);

console.log('');

//Experience
let walmartExperience = {
    company: 'Walmart',
    job: 'Maintenance',
    description: 'Training, Cleaning floors/facilities, Making Cardboard/Plastic Bales, Repairing equipment, Cart Retrieval'
}

let superExperience = {
    company: 'Star Labs',
    job: 'Superhero',
    description: 'My name is Barry Allen and I am the FASTEST man alive!'
}

let showExperience = {
    company: 'CW',
    job: 'Actor',
    description: 'I am an actor who plays The Flash on the CW Network!'
}

console.log('My Previous Experience:');

displayPosition(walmartExperience.company, walmartExperience.job, walmartExperience.description);

displayPosition(superExperience.company, superExperience.job, superExperience.description)

displayPosition(showExperience.company, showExperience.job, showExperience.description)

//Skills
var skill1 = 'Basic HTML';
var skill2 = 'Basic CSS';
var skill3 = 'Basic Java';
var skill4 = 'Basic JavaScript';
var skill5 = 'Singing';
var skill6 = 'Creative';
var skill7 = 'Logic';

console.log('');

console.log('My Skills:')
displaySkill(skill1, false);
displaySkill(skill2, false);
displaySkill(skill3, false);
displaySkill(skill4, false);
displaySkill(skill5, true);
displaySkill(skill6, true);
displaySkill(skill7, true);



function displaySkill(skill, cool) {
    if (cool) {
        console.log("* BAM: " + skill);
    } else {
        console.log("* " + skill);
    }
}

function displayPosition(company_name, job_title, description) {
    console.log('* ' + job_title + ' at ' + company_name + ' - ' + description);
}