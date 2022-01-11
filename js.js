function addItem() {
  var enterWord = document.querySelector(".word").value;
  let finalWord_ul = document.querySelector(".finalWord ul");
  let buttons = document.querySelectorAll(".letter button");
  let empity = document.querySelector(".empity");
  let thread = document.querySelector(".thread");
  let head = document.querySelector(".head");
  let body = document.querySelector(".body");
  let leftHand = document.querySelector(".leftHand");
  let rightHand = document.querySelector(".rightHand");
  let leftFoot = document.querySelector(".leftFoot");
  let rightFoot = document.querySelector(".rightFoot");
  let keys = document.querySelector(".buttons");
  let lost = document.querySelector(".lost");
  var count = 7;
  var word;
  var a;
  console.log(enterWord);
  underLine = "";
  for (let i = 0; i < enterWord.length; i++) {
    finalWord_ul.innerHTML += `<li>X</li>`;
  }
  for (let j = 0; j < buttons.length; j++) {
    buttons[j].addEventListener("click", () => {
      for (let f = 0; f < enterWord.length; f++) {
        if (enterWord[f].toLowerCase() === buttons[j].innerText.toLowerCase()) {
          let finalWord_li = finalWord_ul.querySelectorAll("li");
          finalWord_li[f].innerText = buttons[j].innerText;
          finalWord_li[f].style.color = "green";
          finalWord_li[f].style.borderColor = "green";
        }
      }

      a = buttons[j].innerText.toLowerCase();
      if (enterWord.includes(a) == false) {
        count--;
        console.log(count);
      }
      buttons[j].style.color = "red";
      if (count == 6) {
        empity.classList.add("hidden");
        thread.classList.remove("hidden");
      } else if (count == 5) {
        thread.classList.add("hidden");
        head.classList.remove("hidden");
      } else if (count == 4) {
        head.classList.add("hidden");
        body.classList.remove("hidden");
      } else if (count == 3) {
        body.classList.add("hidden");
        leftHand.classList.remove("hidden");
      } else if (count == 2) {
        leftHand.classList.add("hidden");
        rightHand.classList.remove("hidden");
      } else if (count == 1) {
        rightHand.classList.add("hidden");
        leftFoot.classList.remove("hidden");
      } else if (count == 0) {
        leftFoot.classList.add("hidden");
        rightFoot.classList.remove("hidden");
        keys.classList.add("hidden");
        lost.classList.remove("hidden");
      }
    });
  }
}
document.querySelector(".button").addEventListener("click", addItem);
