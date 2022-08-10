const submit_btn = document.querySelector(".btn-submit");
const rate_card = document.querySelector("#rate-card");
const thank_card = document.querySelector(".thank-card");
let rating = document.querySelector(".rating");
let result_num = document.querySelector(".result-num");
let input = document.querySelector("input");
submit_btn.addEventListener("click", () => {
  rate_card.style.display = "none";
  thank_card.style.display = "flex";
});

rating.addEventListener("click", (e) => {
  console.log(e);
  if (e.target.nodeName === "INPUT") {
    result_num.textContent = input.value;
    console.log(input.value);
  }
});

// submit_btn.addEventListener("click", (e) => {
//   console.log(e);
// });
