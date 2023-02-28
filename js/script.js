const annuallyMonthly = document.getElementById("pricing");
const annually = document.querySelectorAll(".annually");
const monthly = document.querySelectorAll(".monthly");

annuallyMonthly.addEventListener("input", function (e) {
  e.preventDefault();

  annually.forEach((annually) => {
    console.log(annually);
    annually.classList.toggle("active");
  });

  monthly.forEach((monthly) => {
    console.log(monthly);
    monthly.classList.toggle("active");
  });
});
