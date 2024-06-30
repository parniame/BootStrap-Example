document.addEventListener("submit", function (e) {
  const message = document.getElementById("message");
  const birthDateString = document.getElementById("birth-date").value;

  age = CheckAge(birthDateString, message);

  const bootcampCode = document.getElementById("bootcamp-code").value;
  CheckBootCampCode(bootcampCode, message);
  if (!("alert-danger" in message.classList)) {
    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;

    message.classList.add("alert-success");
    message.textContent =
      "Your name is " +
      firstName +
      " " +
      lastName +
      " And You are " +
      age +
      "years old!";
  }
  e.preventDefault();
});
function CheckAge(birthDateString, message) {
  if (birthDateString) {
    const birthDate = new Date(birthDateString);
    const today = new Date();
    const age = today.getFullYear() - birthDate.getFullYear();

    if (age < 18) {
      message.textContent = " You must be atleast 18!\n";
      CheckClass(message, "alert-danger");
    }
    return age;
  }
}
function CheckBootCampCode(bootcampCode, message) {
  if (bootcampCode) {
    if (bootcampCode != 114) {
      CheckClass(message, "alert-danger");
      message.textContent += "Bootcamp Code is not acceptable\n";
    }
  }
}
function CheckClass(obj, class_) {
  if (!(class_ in obj.classList)) {
    obj.classList.add("alert-danger");
  }
}
