var topics = ["HTML", "CSS", "Git", "JavaScript"];
var randomTopic = topics[Math.floor(Math.random() * topics.length)];

function listTopics() {
    for (var i = 0; i < topics.length; i++) {
        console.log(topics[i]);
    }
}
function selectTopic() {
    if (randomTopic === 'HTML') {
        console.log("Let's Study HTML!");
    } else if (randomTopic === 'CSS') {
        console.log("Let's study CSS!");
    } else if (randomTopic === 'JavaScript') {
        console.log("Let's study JavaScript!");
    } else if (randomTopic === 'Git') {
        console.log("Let's study Git!");
    } else {
        console.log("Please try again!");
    }
}

function helloWorld() {
    console.log("Hello, world, I am a function!");
}

console.log("Here are the topics we learned through Prework: ");
listTopics();

console.log("Which topic should we study first?");
selectTopic();