const catImage = document.getElementById('cat-image');
const newCatBtn = document.getElementById('new-cat-btn');

function getCat() {
  fetch('https://api.thecatapi.com/v1/images/search')
    .then(response => response.json())
    .then(data => catImage.src = data[0].url)
    .catch(error => console.error(error));
}

newCatBtn.addEventListener('click', getCat);

getCat();
