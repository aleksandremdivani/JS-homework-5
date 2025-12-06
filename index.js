const textarea = document.getElementById("message");
const charactersCount = document.createElement("p");
charactersCount.textContent = "სიმბოლო:20/100";
textarea.after(charactersCount);
textarea.addEventListener("input", (event) => {
  charactersCount.textContent = "სიმბოლო:" + event.target.textLength + "/100";
  if (event.target.textLength === 100) {
    charactersCount.style.color = "red";
  }
});
const darkMode = document.getElementById("dark-mode-btn");
textarea.style.backgroundColor = "transparent";
darkMode.style.backgroundColor = "transparent";
const body = document.querySelector("body");
darkMode.addEventListener("click", () => {
    body.classList.toggle("darkbg");
    body.classList.toggle("lighttext");
    textarea.classList.toggle("lighttext");
    darkMode.classList.toggle("lighttext");
  if (darkMode.classList.contains("lighttext")) {
    darkMode.textContent = "Light Mode";
  } else {
    darkMode.textContent = "Dark Mode";
  }
});
