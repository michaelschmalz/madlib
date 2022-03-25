
function generateTemplate() {
  const inputOne = document.querySelector(`#one`);
  const inputTwo = document.querySelector(`#two`);
  const inputThree = document.querySelector(`#three`);
  const inputFour = document.querySelector(`#four`);
  const inputFive = document.querySelector(`#five`);
  const inputSix = document.querySelector(`#six`);
  const inputSeven = document.querySelector(`#seven`);
  const inputEight = document.querySelector(`#eight`);
  const inputNine = document.querySelector(`#nine`);
  const inputTen = document.querySelector(`#ten`);
  const output = document.querySelector(`#output`);

  output.innerHTML = ` Winter is my favorite season because I love getting to ${inputOne.value}. and ${inputTwo.value} at ${inputThree.value} with ${inputFour.value}; we always end up ${inputFive.value}.
  My favorite meal to eat in the winter is ${inputSix.value} because it makes me ${inputSeven.value}. It's also really fun to build a ${inputEight.value} out of ${inputNine.value}. Finally, after a long day of playing, I like to sit down and drink a warm cup of ${inputTen.value}`;
}
