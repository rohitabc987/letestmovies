// movie.js

// Function to search for movies
function searchMovies() {
    const input = document.getElementById('search').value.toLowerCase();
    const movieContainers = document.querySelectorAll('.pictures');
    let result = false;

    movieContainers.forEach((container) => {
        const movieName = container.querySelector('.movie a').textContent.toLowerCase();
        if (movieName.includes(input)) {
            container.style.display = 'block';
            result = true;
        } else {
            container.style.display = 'none';
        }
    });

    const messageElement = document.getElementById('searchMessage');
    const refreshButton = document.getElementById('refreshButton');

    if (!result) {
        messageElement.style.display = 'block';
        messageElement.textContent = 'Sorry, Movie not found';
        refreshButton.style.display = 'block';
    } else {
        messageElement.style.display = 'none';
        messageElement.textContent = '';
        refreshButton.style.display = 'none';
    }
}

// Function to clear search and reload the page
function clearsearch() {
    location.reload();
}

// Function to refresh the page
function refreshPage() {
    location.reload();
}

// function call
if (window.innerWidth < 500){
    handleImageScaling();
}

// sacling image in mobile

// Function to check if an element is in the viewport
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (rect.top >= 0 && rect.bottom <= window.innerHeight);
}

// Function to scale the images
function handleImageScaling() {
    const pictures = document.querySelectorAll('.pictures');
    const windowHeight = window.innerHeight;
    let imageScaled = false;

    pictures.forEach((picture) => {
        const img = picture.querySelector('.img');
        const imgRect = img.getBoundingClientRect();
        const imgCenterY = imgRect.top ;

        if (!imageScaled && imgCenterY > 0 && imgCenterY < windowHeight) {
            img.style.transform = 'scale(1.2)';
            // text.style.transform='scale(1.2)';
            imageScaled = true;
        } else {
            img.style.transform = 'scale(1.0)';
        }
    });
}

// function call on every scrolling
if (window.innerWidth < 500){
    window.addEventListener('scroll', handleImageScaling);
}

