// Challenge 1
// Log li with id special
let countrySpecial = document.querySelector("li#special");
console.log(countrySpecial);
// Challenge 2
// Log all li with class of country
let countries = document.querySelectorAll("li.country");
console.log(countries);
// Challenge 3
// Add class special to the li with id special
countrySpecial.classList.add('special');
// Challenge 4
// In your code, replace the content of the element with id special
// by your favorite country (other than Portugal of course)
 
countrySpecial.innerHTML="South Korea 🇰🇷";
