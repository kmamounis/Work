'use strict';

const catImage = document.getElementById('cat-image');
const newCatButton = document.getElementById('new-cat-button');

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
