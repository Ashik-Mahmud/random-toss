// selector 

const userChoose = document.querySelector(".me span"),
    CmptChoose = document.querySelector(".computer span"),
    headBtn = document.querySelector(".decision .head-btn"),
    tailsBtn = document.querySelector(".decision .tails-btn"),
    imageSrc = document.querySelector(".head-tails"),
    winner = document.querySelector(".shownumber"),
    winnerSelectbox = document.querySelector(".winner-select"),
    index = 0;


// images src data arr 
const imgData = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ8DC7EoJgG3zC9R95cacfN50trqusXd2qvQ&usqp=CAU", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKfXnRxp1N3pGotywgTSjTbWv0U47Y1JJ4ksQNgBYWbqDoyuloOMxdgBqKpc7tmmCZRmA&usqp=CAU"];
// By Default showing up 
imageSrc.src = imgData[index];
var heads = 0,
    tails = 1;
let interVal;


function RandomChangeImage() {
    var randomIndex = Math.floor(Math.random() * imgData.length);
    imageSrc.src = imgData[randomIndex];
    document.querySelector(".wining-image").src = imgData[randomIndex];
    winner.textContent = randomIndex;
    headBtn.classList.add("disabled");
    tailsBtn.classList.add("disabled");

};


// if user click head 
headBtn.addEventListener("click", function () {
    userChoose.textContent = "Head";
    CmptChoose.textContent = "Tails";
    interVal = setInterval(RandomChangeImage, 100);
    setTimeout(function () {
        clearInterval(interVal);
        headBtn.classList.remove("disabled");
        tailsBtn.classList.remove("disabled");
        winnerSelectbox.classList.add("active");
    }, 5000);
})


// if user click Tails 
tailsBtn.addEventListener("click", function () {
    userChoose.textContent = "Tails";
    CmptChoose.textContent = "Head";
    interVal = setInterval(RandomChangeImage, 100);
    setTimeout(function () {
        clearInterval(interVal);
        headBtn.classList.remove("disabled");
        tailsBtn.classList.remove("disabled");
        winnerSelectbox.classList.add("active");
    }, 5000);
})


// who win 
function whoWin() {
    if (winner.textContent == 0) {
        document.querySelector(".winnershow").textContent = "Head Winner";
    } else if (winner.textContent == 1) {
        document.querySelector(".winnershow").textContent = "Tails Winner";
    }
};
setInterval(whoWin, 1500);


// close winner selector window 
document.querySelector(".close-window").addEventListener("click", () => winnerSelectbox.classList.remove("active"))