const bill = document.querySelector("img");
const input = document.querySelector("input");
const answer = document.querySelector(".answer");
const error = document.querySelector(".error");

const answers = ["To jest pewne!", "No cóż... to zależy", "Zdecydowano że tak!", "Bez wątpienia", "Tak, oczywiście!", "Możesz w to powątpiewać", "Całkiem możliwe", "Oj, wątpliwe", "Sądzę że nie..."];

const checkFirstWord = () => {
    const lower = input.value.toLowerCase();

    if (!lower.startsWith("czy") && (!lower.startsWith("kiedy"))) {
        error.textContent = "Twoje pytanie musi zaczynać się od 'Czy' lub 'Kiedy'";
    } else {
        bill.classList.add("shake-animation");
        showAnswer();
        setTimeout(removeClass, 1500);
        input.value = "";
    };
};

const checkInput = () => {
    if (input.value === "") {
        error.textContent = "Musisz zadać pytanie!";
        answer.textContent = "";
        input.value = "";
    } else if (input.value !== "") {
        const question = input.value;
        const lastChar = question.charAt(question.length - 1);
        answer.textContent = "";

        if (lastChar !== "?") {
            error.textContent = "Pytanie musisz zakończyć znakiem '?'";
        } else {
            checkFirstWord();
        };
    };
};

const showAnswer = () => {
    const randomNumber = Math.floor(Math.random() * answers.length);
    answer.innerHTML = `<span>Odpowiedź to: </span>${answers[randomNumber]}`;

    error.textContent = "";
};

const removeClass = () => {
      bill.classList.remove("shake-animation");
};

bill.addEventListener("click", () => {
    checkInput();
});