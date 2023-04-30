'use strict';

var catImage = document.getElementById('cat-image');
var newCatButton = document.getElementById('new-cat-button');

function fetchCatImage() {
  fetch('https://api.thecatapi.com/v1/images/search')
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      var imageUrl = data[0].url;
      catImage.src = imageUrl;
    })
    .catch(function(error) {
      console.error(error);
    });
}

newCatButton.addEventListener('click', function() {
  fetchCatImage();
});

fetchCatImage();
