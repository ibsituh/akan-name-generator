// Akan name arrays
const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

// Function to get Akan name
function getAkanName() {
  const day = parseInt(document.getElementById("day").value);
  const month = parseInt(document.getElementById("month").value);
  const year = document.getElementById("year").value;
  const gender = document.querySelector('input[name="gender"]:checked');

  // Input validation
  if (!day || day < 1 || day > 31) {
    alert("Please enter a valid day (1 - 31)");
    return;
  }

  if (!month || month < 1 || month > 12) {
    alert("Please enter a valid month (1 - 12)");
    return;
  }

  if (!year || year.length !== 4 || isNaN(year)) {
    alert("Please enter a valid year (e.g., 1998)");
    return;
  }

  if (!gender) {
    alert("Please select a gender");
    return;
  }

  // Extract CC and YY from year
  const CC = parseInt(year.slice(0, 2));
  const YY = parseInt(year.slice(2, 4));
  const MM = month;
  const DD = day;

  // Day of the week calculation formula
  const dayOfWeek = Math.floor(
    ((CC / 4 - 2 * CC - 1) + (5 * YY / 4) + (26 * (MM + 1) / 10) + DD) % 7
  );

  const dayIndex = ((dayOfWeek + 7) % 7); // Ensure non-negative

  const selectedGender = gender.value;

  let akanName = "";
  if (selectedGender === "male") {
    akanName = maleNames[dayIndex];
  } else if (selectedGender === "female") {
    akanName = femaleNames[dayIndex];
  }

  // Show the Akan name
  document.getElementById("result").textContent =
    `Your Akan name is ${akanName}. You were born on a ${getDayName(dayIndex)}.`;
}

// Helper function to convert index to day name
function getDayName(index) {
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  return days[index];
}
