let items = document.querySelectorAll(".number");
items.forEach((item) => {
  item.innerHTML = 0;
  let endVal = item.getAttribute("data-num");
  let inc = endVal / 10;
  let value = 0;
  function changeNumber() {
    if (value < endVal) {
      value += inc;
      item.innerHTML = Math.round(value);
      setTimeout(changeNumber, 100);
    } else {
      item.innerHTML = endVal;
    }
  }
  changeNumber();
});
