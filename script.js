'use strict';

const catImage = document.getElementById('cat-image');
let breedSelect = document.getElementById('breed-select');

function fetchCatImage() {
  fetch('https://api.thecatapi.com/v1/images/search')
    .then(response => response.json())
    .then(data => {
      const imageUrl = data[0].url;
      catImage.src = imageUrl;
    })
    .catch(error => console.error(error));
}

newCatButton.addEventListener('click', function() {
  fetchCatImage();
});

fetchCatImage();
