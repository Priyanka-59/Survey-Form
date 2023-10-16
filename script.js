function submitForm() {
  // Validate the form
  if (validateForm()) {
    // Display the selected values in a popup
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var dob = document.getElementById("dob").value;
    var country = document.getElementById("country").value;
    var gender = document.querySelectorAll('input[name="gender"]:checked').length > 0 ? "Male" : "Female";
    var profession = document.getElementById("profession").value;
    var email = document.getElementById("email").value;
    var mobile = document.getElementById("mobile").value;

    var popupContent = "First Name: " + firstName + "<br>" +
      "Last Name: " + lastName + "<br>" +
      "Date of Birth: " + dob + "<br>" +
      "Country: " + country + "<br>" +
      "Gender: " + gender + "<br>" +
      "Profession: " + profession + "<br>" +
      "Email: " + email + "<br>" +
      "Mobile Number: " + mobile;

    // Display the popup
    var popup = window.open("", "Survey Data", "width=400, height=400");
    popup.document.write("<p>" + popupContent + "</p>");
    popup.document.write("<button onclick='window.close()'>Close</button>");

    // Reset the form
    document.getElementById("surveyForm").reset();
  }
}

function resetForm() {
  document.getElementById("surveyForm").reset();
}


function validateForm() {
  // Implement your form validation logic here
  // You can check if the required fields are filled and apply any other necessary validation rules.
  // Return true if the form is valid, or false if it's not.
  var firstName =document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;
  var dob = document.getElementById("dob").value;
  var country = document.getElementById("country").value;
  var gender = document.querySelectorAll('input[name="gender"]:checked').length > 0 ? "Male" : "Female";
var profession =document.getElementById("profession").value;
  var email = document.getElementById("email").value;
  var mobile = document.getElementById("mobile").value;
  
  if(firstName.trim() ===""){
    alert("First name should not be blank");
    return false;
  }
  else if(!validateName(firstName)){
    alert("Invalid First name!!Please enter only Alphabets.");
    return false;
  }
  if(lastName.trim() ===""){
    alert("Last name should not be blank");
    return false;
  }
  else if(!validateLName(lastName)){
    alert("Invalid Last name!!Please enter only Alphabets.");
    return false;
  }
  if(dob.trim() ===""){
    alert("DOB should not be blank");
    return false;
  }
  if(country.trim() ===""){
    alert("Country should not be blank");
    return false;
  }
  if(gender.trim() ===""){
    alert("Gender should not be blank");
    return false;
  }
  if(profession.trim() ===""){
    alert("Profession should not be blank");
    return false;
  }
  if(email.trim() ===""){
    alert("Email should not be blank");
    return false;
  }
  else if(!validateEmail(email)){
    alert("Invalid Email!!Please enter valid email.");
    return false;
  }
  if(mobile.trim() ===""){
    alert("Mobile Number should not be blank");
    return false;
  }
  else if(!validateNumber(mobile)){
    alert("Invalid Number!!!Please enter valid number.");
    return false;
  }
  return true;
}

function validateName(firstName){
  var Fname = /^[A-Za-z]+$/;
  return Fname.test(firstName);
}

function validateLName(lastName){
  var Lname = /^[A-Za-z]+$/;
  return Lname.test(lastName);
}

function validateEmail(email){
  var mail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return mail.test(email);
}

function validateNumber(mobile){
  var number = /^\d{10}$/;
  return number.test(mobile);
}


