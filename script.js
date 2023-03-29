// Select the search form element
const searchForm = document.querySelector('form');

// Add a listener for the submit event on the search form
searchForm.addEventListener('submit', function(event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Get the value of the search input
  const searchInput = document.querySelector('#search-input').value;

  // Do something with the search value, for example:
  console.log(`User searched for: ${searchInput}`);
});

// Select all the heart icons
const heartIcons = document.querySelectorAll('.produit-fav i');
const searchButton = document.querySelector('button[type="submit"]');
const searchInput = document.querySelector('input[type="text"]');

searchButton.addEventListener('click', function(event) {
  event.preventDefault();
  searchInput.classList.toggle('show');
});

// Add a listener for the click event on each heart icon
heartIcons.forEach(icon => {
  icon.addEventListener('click', function() {
    // Toggle the class "fas" (solid heart) and "far" (outline heart)
    this.classList.toggle('fas');
    this.classList.toggle('far');
  });
});
const hamburger = document.querySelector('.hamburger-menu');
  const navbar = document.querySelector('.navbar');
 hamburger.addEventListener('click', () => {
 navbar.classList.toggle('active');});
// Select all the shopping bag icons
const bagIcons = document.querySelectorAll('.produit i.fas.fa-shopping-bag');

// Add a listener for the click event on each shopping bag icon
bagIcons.forEach(icon => {
  icon.addEventListener('click', function() {
    // Get the title and price of the product
    const title = this.previousElementSibling.textContent;
    const price = this.previousElementSibling.previousElementSibling.textContent;

    // Do something with the product data, for example:
    console.log(`Added ${title} to cart for ${price}`);
  });
});
