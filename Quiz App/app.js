const startBtn = document.querySelector("#start");
const div1 = document.querySelector("#div1");
let answered = false, counter = 0, score = 0;
const answers = ["Python", "Plankalkul", "Object Oriented Programming System", "20", "Introduced Liskov Substitution Principle",]
const qs = ["1. Which of these is a dynamically typed language?", "2. Which is the first ever programming language?", "3. What is the full form of OOPS?", "4. What is the age of Millie Bobby Brown?", "5. What is Barbara Liskov famous for?",];
const obj = {
    "1. Which of these is a dynamically typed language?": ["C++", "Java", "Python", "COBOL"],
    "2. Which is the first ever programming language?": ["Plankalkul", "FORTRAN", "COBOL", "C"],
    "3. What is the full form of OOPS?": ["Optional Oriented Programming Scam", "Oreo Oriented Programming System", "Object Oriented Programming System", "Optional Oriented Programming Storage",],
    "4. What is the age of Millie Bobby Brown?": ["20", "19", "33", "30"],
    "5. What is Barbara Liskov famous for?": ["She is a woman", "Introduced Liskov Substitution Principle", "Created JavaScript", "Best Brawl Stars player"]
}

const removeDivs = () => {
    document.querySelector("#div2").style.display = "none";
    document.querySelector("#div3").style.display = "none";
    document.querySelector("#div4").style.display = "none";

    div1.style.marginBottom = "1.5em"
}

const addDivs = () => {
    const page2Divs = document.querySelectorAll(".page2-divs");

    for (let div of page2Divs)
        div.style.display = "flex";

    if (qs[counter])
        document.querySelector("#page2-div1").innerText = qs[counter];
    document.querySelector("#page2-div2").innerText = obj[qs[counter]][0];
    document.querySelector("#page2-div3").innerText = obj[qs[counter]][1];
    document.querySelector("#page2-div4").innerText = obj[qs[counter]][2];
    document.querySelector("#last-op").innerText = obj[qs[counter]][3];
}

startBtn.addEventListener("click", () => {
    removeDivs();
    addDivs();
})

const options = document.querySelectorAll(".options");
for (let option of options) {
    option.addEventListener("click", () => {
        if (answered)
            return;

        answered = true;

        for (let option of options) {
            option.classList.add("options2");
            option.classList.remove("options");
        }

        if (option.innerText === answers[counter]) {
            console.log(answers[counter]);
            option.classList.add("correct");
            score++;
        }
        else {
            option.classList.add("wrong");

            for (let option of options)
                if (option.innerText == answers[counter])
                    option.classList.add("correct");
        }
        console.log(answers[counter]);
    })
}

function restore() {
    for (let option of options) {
        answered = false;
        option.classList.remove("correct");
        option.classList.remove("wrong");
        option.classList.remove("options2");
        option.classList.add("options");
    }
}

const finalPage = () => {
    const page2Divs = document.querySelectorAll(".page2-divs");

    for (let div of page2Divs)
        div.style.display = "none";

    const result = document.createElement("div");
    const againBtn = document.createElement("button");
    result.innerText = `You scored ${score} out of 5`;
    result.classList.add("result");
    againBtn.innerText = "Play Again";
    againBtn.id = "again";
    document.querySelector("main").append(result);
    document.querySelector("main").append(againBtn);

    againBtn.addEventListener("click", function () {
        this.remove();
        result.remove();

        div1.style.marginBottom = "8.5em";
        document.querySelector("#div2").style.display = "flex";
        document.querySelector("#div3").style.display = "flex";
        document.querySelector("#div4").style.display = "flex";

        counter = 0;
        score = 0;
    });
};

const nextBtn = document.querySelector("#next-btn");
nextBtn.addEventListener("click", () => {
    counter++;
    restore();
    try {
        if (qs[counter])
            document.querySelector("#page2-div1").innerText = qs[counter];
        document.querySelector("#page2-div2").innerText = obj[qs[counter]][0];
        document.querySelector("#page2-div3").innerText = obj[qs[counter]][1];
        document.querySelector("#page2-div4").innerText = obj[qs[counter]][2];
        document.querySelector("#last-op").innerText = obj[qs[counter]][3];
    }
    catch (e) {
        finalPage();
    }
});
