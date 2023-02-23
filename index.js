const form = document.getElementById("form");
const firstName = document.getElementById("firstname");
const lastName = document.getElementById("lastname");
const email = document.getElementById("email");
const password = document.getElementById("password");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  validateInputs();
});

const errorMessage = (element, message) => {
  const inputControl = element.parentElement;
  const errorIcon = inputControl.querySelector(".error-icon");
  errorIcon.style.display = "block";
  error = inputControl.querySelector(".error");
  error.innerText = message;
};

const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorIcon = inputControl.querySelector(".error-icon");
  errorIcon.style.display = "none";
  error = inputControl.querySelector(".error");
  error.innerText = "";
};

const isValidEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const validateInputs = () => {
  const firstNameValue = firstName.value.trim();
  const lastNameValue = lastName.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  if (firstNameValue === "") {
    errorMessage(firstName, "First name cannot be empty");
  } else {
    setSuccess(firstName);
  }

  if (lastNameValue === "") {
    errorMessage(lastName, "Last name cannot be empty");
  } else {
    setSuccess(lastName);
  }

  if (emailValue === "") {
    errorMessage(email, "Email address cannot be empty");
  } else if (!isValidEmail(emailValue)) {
    errorMessage(email, "Please enter a valid email address");
  } else {
    setSuccess(email);
  }

  if (passwordValue === "") {
    errorMessage(password, "Password cannot be empty");
  } else if (passwordValue.length < 8) {
    errorMessage(password, "Password must be at least 8 character.");
  } else {
    setSuccess(password);
  }
};
