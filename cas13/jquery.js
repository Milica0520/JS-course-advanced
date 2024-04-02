"use strict";
// https://cat-fact.herokuapp.com/facts

const catBtn = document.getElementById("catBtn");
const list = document.getElementById("factsList");

const renderFacts = (data) => {
  data.forEach((element) => {
    const li = document.createElement("li");
    li.innerText = element.text;
    list.appendChild(li);
  });
};
catBtn.onclick = () => {
  axios
    .get("https://cat-fact.herokuapp.com/facts")
    .then((res) => {
      // console.log(res.data);
      renderFacts(res.data);
    })
    .catch((err) => console.log(err));
};
