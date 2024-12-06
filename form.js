const doEvent = document.getElementById("doButton");
const doDestroy = document.getElementById("doClose")
const msg = document.getElementById("message");
const def = 0;

doEvent.addEventListener("click", (a) => {
  a.preventDefault();
  msg.innerHTML = `
        <p>My name is Dipo</p>
      `;
});

doClose.addEventListener("click", (z) => {
  z.preventDefault()
  msg.innerHTML = ""
})
