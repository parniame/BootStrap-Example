var error_ = false;

document.addEventListener("submit", function (e) {
  const birthDateObj = document.getElementById("birth-date");
  const birthDateString = birthDateObj.value;
  birthDateObj.addEventListener("change", FixError);

  age = CheckAge(birthDateString);
  const bootcampCodeObj = document.getElementById("bootcamp-code");
  const bootcampCode = bootcampCodeObj.value;
  bootcampCodeObj.addEventListener("change", FixError);
  CheckBootCampCode(bootcampCode);
  if (!error_) {
    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;

    alert(
      "Your name is " +
        firstName +
        " " +
        lastName +
        " And You are " +
        age +
        "years old!"
    );
  }
  e.preventDefault();
});
function CheckAge(birthDateString) {
  if (birthDateString) {
    const birthDate = new Date(birthDateString);
    const today = new Date();
    const age = today.getFullYear() - birthDate.getFullYear();

    if (age < 18) {
      alert("You must be atleast 18!");
      error_ = true;
    }
    return age;
  }
}
function CheckBootCampCode(bootcampCode) {
  if (bootcampCode) {
    if (bootcampCode != 114) {
      alert("Bootcamp Code is not acceptable");
      error_ = true;
    }
  }
}
function FixError() {
  error_ = false;
}
