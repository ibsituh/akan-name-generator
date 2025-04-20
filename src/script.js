const akanNames = {
    male: ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"],
    female: ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]
  };
  
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  
  function getAkanName(event) {
    event.preventDefault(); // Prevent page refresh
  
    const birthday = document.getElementById("birthday").value;
    const genderInput = document.querySelector('input[name="gender"]:checked');
  
    if (!birthday || !genderInput) {
      alert("Please enter your birthdate and select your gender.");
      return;
    }
  
    const birthDate = new Date(birthday);
    if (isNaN(birthDate.getTime())) {
      alert("Invalid date.");
      return;
    }
  
    const dayIndex = birthDate.getDay();
    const gender = genderInput.value;
  
    const akanName = akanNames[gender][dayIndex];
    const dayName = daysOfWeek[dayIndex];
  
    document.getElementById("result").textContent =
      `You were born on a ${dayName}. Your Akan name is ${akanName}.`;
}