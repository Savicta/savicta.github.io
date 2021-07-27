function encryption() {
  let output = ``;
  const str = document.getElementsByTagName(`input`)[0].value;
  const number = `)!@#$%^&*(`, alphabetLow = `abcdefghijklmnopqrstuvwxyz`, alphabetUp = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`;
  if (document.getElementById(`newPassword`)) {
    const reset = document.getElementById(`newPassword`);
    reset.remove();
  }
  for (let i = str.length - 1; i >= 0; i--) {
    for (let j = 0; j < alphabetLow.length; j++) {
      if (Number(str[i]) === j) {
        output += number[j];
      } else if (str[i] === alphabetLow[j]) {
        output += alphabetLow[j + 1].toUpperCase();
      } else if (str[i] === alphabetUp[j]) {
        output += alphabetUp[j + 1].toLowerCase();
      } else if (str[i] === `z`) {
        output += 'a';
      } else if (str[i] === `Z`) {
        output += 'A';
      }
    }
    output += str[i];
  }
  document.getElementById(`original-password`).innerHTML = str;
  document.getElementById(`encrypted-password`).innerHTML = output;
}

function uncleGoogle() {
  const keyword = document.getElementById('googleSearchKeyword').value;
  window.open(`https://www.google.com/search?q=${keyword}`);
}

const tombol = document.getElementsByClassName(`searchTerm`)[0];
tombol.addEventListener(`keyup`, function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementsByClassName(`searchButton`)[0].click();
  }
});

const tombolGoogle = document.getElementsByClassName(`searchTerm`)[1];
tombolGoogle.addEventListener(`keyup`, function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementsByClassName(`searchButton`)[1].click();
  }
});

function resetButton() {
  document.getElementsByClassName(`searchTerm`)[0].value = '';
  document.getElementById(`original-password`).innerHTML = '';
  document.getElementById(`encrypted-password`).innerHTML = '';
}
