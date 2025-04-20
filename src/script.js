const akanNames = {
    male: ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"],
    female: ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]
  };
  
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  
  function getAkanName() {
    const day = document.getElementById("day").value;
    const month = document.getElementById("month").value;
    const year = document.getElementById("year").value;
    const genderInput = document.querySelector('input[name="gender"]:checked');
  
    // Validate inputs
    if (!day || !month || !year || !genderInput) {
      alert("Please fill in all fields and select your gender.");
      return;
    }
  
    const birthDate = new Date(`${year}-${month}-${day}`);
  
    if (isNaN(birthDate.getTime())) {
      alert("Please enter a valid date.");
      return;
    }
  
    const dayIndex = birthDate.getDay(); // 0 (Sun) to 6 (Sat)
    const gender = genderInput.value;
  
    const akanName = akanNames[gender][dayIndex];
    const dayName = daysOfWeek[dayIndex];
  
    document.getElementById("result").textContent =
      `You were born on a ${dayName}. Your Akan name is ${akanName}.`;
  }
  