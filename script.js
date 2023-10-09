function checkQualification() {
  const age = parseInt(document.getElementById("age").value);
  const isMember = document.querySelector('input[name="member"]:checked').value;

  if (age >= 18 && isMember === "no") {
    alert("You do not qualify for a discount.");
  } else if (age >= 65 && isMember === "yes") {
    alert("You qualify for a seniors a discount.");
  } else if (age <= 17) {
    alert("You do not qualify for a discount.");
  } else {
    alert("You qualify for a discount.");
  }
}






