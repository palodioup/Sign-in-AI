const btn = document.getElementById("event");
const userName = document.getElementById("name");
const userEmail = document.getElementById("email");
const userPassword = document.getElementById("password");
const api = document.getElementById("result");
const errorFetched = document.getElementById("error");
export const account = api

btn.addEventListener("click", (e) => {
  e.preventDefault();
  if (userName.value === "" || userEmail.value === "" || userPassword === "") {
    api.innerHTML = "";
    errorFetched.innerHTML = "Name, email and password are required";
  } else if (userPassword.value.length <= 9) {
      api.innerHTML = "";
    errorFetched.innerHTML ="Password to short.";
  } else if (userPassword.value.length >= 30) {
      api.innerHTML = "";
    errorFetched.innerHTML ="Password to long.";
  } else {
    api.innerHTML = `${userName.value}, ${userEmail.value}, ${userPassword.value}`;
    errorFetched.innerHTML = "";

    setTimeout(() => {
      userName.value = "";
      userEmail.value = "";
      userPassword.value = "";
    }, 10000);
  }
});
