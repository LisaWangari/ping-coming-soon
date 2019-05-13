const formValidation = event => {
  const email_regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/;
  console.log("form validation called");
  if (!event.target.value.match(email_regex)) {
    // If there is an error make the notifyError visible and change the inputs border to red.

    document.getElementById("notify_input").style =
      " border: 1px solid var(--lightRed)";
    document.getElementById("notify_error").style = " visibility: visible";
    event.preventDefault();

    return false;
  } else {
    document.getElementById("notify_input").style =
      " border: 1px solid var(--paleBlue)";
    document.getElementById("notify_error").style = " visibility: hidden";
    return true;
  }
};

let notifyButton = document.getElementById("notify");

notifyButton.addEventListener("click", formValidation);
