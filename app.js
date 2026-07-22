function generation() {
    let age = parseInt(document.getElementById("age").value);
    let birthYear = 2026 - age;
    let answer = document.getElementById("answer");

    switch (true) {
        case birthYear >= 1946 && birthYear <= 1964:
            answer.textContent =
                "You are a member of the Baby Boomer Generation!";
            break;

        case birthYear >= 1965 && birthYear <= 1980:
            answer.textContent =
                "You are part of Generation X!";
            break;

        case birthYear >= 1981 && birthYear <= 1996:
            answer.textContent =
                "You belong in the Y Generation!";
            break;

        case birthYear >= 1997 && birthYear <= 2012:
            answer.textContent =
                "Generation Z is your generation!";
            break;

        case birthYear >= 2013 && birthYear <= 2025:
            answer.textContent =
                "You are part of Generation Alpha.";
            break;

        default:
            answer.textContent =
                "Sorry - your generation is not listed.";
    }
}
// Problem 2

let grades = [87, 56, 92, 77];

let total = grades[0] + grades[1] + grades[2] + grades[3];

let average = total / grades.length;

let problem2 = document.getElementById("prob2");

let problem2Answer = document.createElement("p");

if (average > 75) {
    problem2Answer.textContent =
        "Average: " + average + " - You are in the top 25% of the class!";
} else if (average >= 60) {
    problem2Answer.textContent =
        "Average: " + average + " - You passed the class!";
} else {
    problem2Answer.textContent =
        "Average: " + average +
        " - Sorry - you did not pass the class. Better luck next time!";
}

problem2.appendChild(problem2Answer);


// Problem 3

let problem3 = document.querySelectorAll("body > div")[2];

let randomButton = document.createElement("button");
randomButton.textContent = "Choose Random Number";
randomButton.onclick = randomNumber;

let randomAnswer = document.createElement("p");

problem3.appendChild(randomButton);
problem3.appendChild(randomAnswer);

function randomNumber() {
    let number = Math.floor(Math.random() * 5) + 1;
    let message;

    switch (number) {
        case 1:
            message = "The lowest number you can get";
            break;

        case 2:
            message = "This is the lowest even number you can get";
            break;

        case 3:
            message = "Right smack in the middle";
            break;

        case 4:
            message = "Good number!";
            break;

        case 5:
            message = "Way to roll!";
            break;
    }

    randomAnswer.textContent = number + ": " + message;
}


// Problem 4

let weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

let problem4 = document.querySelectorAll("body > div")[3];

let dayInput = document.createElement("input");
dayInput.type = "text";
dayInput.placeholder = "Enter current day";

let dayButton = document.createElement("button");
dayButton.textContent = "Submit";
dayButton.onclick = findFutureDay;

let dayAnswer = document.createElement("p");

problem4.appendChild(dayInput);
problem4.appendChild(dayButton);
problem4.appendChild(dayAnswer);

function findFutureDay() {
    let currentDay = dayInput.value.toLowerCase();
    let currentIndex = -1;

    for (let i = 0; i < weekdays.length; i++) {
        if (weekdays[i].toLowerCase() === currentDay) {
            currentIndex = i;
        }
    }

    if (currentIndex === -1) {
        dayAnswer.textContent = "Please enter a valid weekday.";
    } else {
        let futureIndex = (currentIndex + 5) % 7;

        dayAnswer.textContent =
            "It will be " + weekdays[futureIndex] + " in 5 days.";
    }
}


// Problem 5

let colorString = "Red Orange Blue Green Purple Yellow";

let colors = colorString.split(" ");

let favoriteColor = colors[2];

let problem5 = document.querySelectorAll("body > div")[4];

let colorAnswer = document.createElement("p");

colorAnswer.textContent =
    "My favorite color is " + favoriteColor.toLowerCase() + ".";

problem5.appendChild(colorAnswer);