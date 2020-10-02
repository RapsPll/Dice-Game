{
    const Player1 = () => {
        const firstCube = Math.floor(Math.random() * 6) + 1;
        const secondCube = Math.floor(Math.random() * 6) + 1;
        const thirdCube = Math.floor(Math.random() * 6) + 1;

        result = firstCube + secondCube + thirdCube
    }
    const Computer = () => {
        const firstCube = Math.floor(Math.random() * 6) + 1;
        const secondCube = Math.floor(Math.random() * 6) + 1;
        const thirdCube = Math.floor(Math.random() * 6) + 1;

        result2 = firstCube + secondCube + thirdCube
    };

    const updateText = () => {
        const resultThrow = document.querySelector(".js-lastScore")
        resultThrow.innerText = `Gracz ${playerName.value}:  ${result}
        Komputer:  ${result2}`;
    };
    const playerName = document.querySelector(".js-playerName");
    const win = () => {
        const winnerName = document.querySelector(".js-winnerName");
        if (result > result2) {
            winnerName.innerText = `wygrałeś ${playerName.value} !!!!!`;
        } else if (result < result2) {
            winnerName.innerText = "wygrał Komputer :(";
        } else {
            winnerName.innerText = "remis";
        }
    };

    const renderButton = () => {

        let htmlString = "";
        if (playerName.value !== "") {
            htmlString += `
                    <button class="throwDice">rzuć kośćmi</button>
                    <button class="showLastScore">Pokaż ostatni rzut</button>
                    <p class="lastScore js-lastScore"></p>
                    <p class="winnerName js-winnerName"></p>
                `
        } else {
            return;
        }
        document.querySelector(".js-renderHtml").innerHTML = htmlString;
    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        renderButton();
        buttonRoll();
    };

    const form = document.querySelector(".js-form");
    form.addEventListener("submit", onFormSubmit);

    const buttonRoll = () => {
        const buttonThrowDice = document.querySelector(".throwDice");
        if (buttonThrowDice) {
            buttonThrowDice.addEventListener("click", rollADie);
        };

        const showLastScore = document.querySelector(".showLastScore");
        const lastScore = document.querySelector(".lastScore")

        showLastScore.addEventListener("click", () => {
            lastScore.classList.toggle("lastScore--showed")
        });
    };

    const rollADie = () => {
        Player1();
        Computer();
        updateText();
        win();
    };
}