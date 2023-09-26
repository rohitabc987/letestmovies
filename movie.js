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

// Add hover effect to pictures
const pictures = document.querySelectorAll('.pictures');

pictures.forEach((picture) => {
    picture.addEventListener('mouseenter', () => {
        picture.querySelector('.img').style.transform = 'scale(1.2)';
    });

    picture.addEventListener('mouseleave', () => {
        picture.querySelector('.img').style.transform = 'scale(1.0)';
    });
});
