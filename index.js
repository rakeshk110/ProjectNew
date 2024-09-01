function validation() {
    const firstName = document.Formfill.FirstName.value.trim();
    const lastName = document.Formfill.LastName.value.trim();
    const email = document.Formfill.Email.value.trim();
    const password = document.Formfill.Password.value.trim();
    const resultElement = document.getElementById("result");

    if (firstName === "") {
      resultElement.innerHTML = "Enter First Name";
      return false;
    }
    if (lastName === "") {
      resultElement.innerHTML = "Enter Last Name";
      return false;
    }
    if (email === "") {
      resultElement.innerHTML = "Enter Your Email";
      return false;
    }
    if (password === "") {
      resultElement.innerHTML = "Enter Your Password";
      return false;
    }
    if (password.length < 6) {
      resultElement.innerHTML = "Password must be at least 6 characters";
      return false;
    }

    // If everything is valid
    resultElement.innerHTML = "All fields are valid";
    return true; // Submit the form
  }
          