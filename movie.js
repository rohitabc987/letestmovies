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

// Function to play video (iframe)
// function playvideo(element) {
//     const mediaContainer = element.querySelector('.media-container');
//     const iframe = mediaContainer.querySelector('iframe');
    
//     // Show the iframe and hide the image
//     iframe.style.display = 'block';
//     iframe.src += "&autoplay=1";
//     mediaContainer.querySelector('.img').style.display = 'none';
// }

// // Function to pause video (iframe)
// function pausevideo(element) {
//     const iframe = element.querySelector('.media-container iframe');
    
//     iframe.src = iframe.src.replace("&autoplay=1", "");
   
// }

// Function to play video (YouTube API)
// Function to play video (YouTube API)
function playVideo(element) {
    const mediaContainer = element.querySelector('.media-container');
    const youtubePlayer = document.createElement('iframe');
    youtubePlayer.src = 'https://www.youtube.com/embed/COv52Qyctws?autoplay=1&controls=0&mute=1'; // Add autoplay, mute, and remove controls
    youtubePlayer.setAttribute('allowfullscreen', 'true');
    youtubePlayer.setAttribute('frameborder', '0');
    youtubePlayer.setAttribute('muted', 'true'); // Add muted attribute
    youtubePlayer.style.width = '100%';
    youtubePlayer.style.height = '100%';
    youtubePlayer.src += "&autoplay=1&mute=1"; 

    mediaContainer.innerHTML = ''; // Clear existing content
    mediaContainer.appendChild(youtubePlayer);
}



// Function to pause video (YouTube API)
function pauseVideo(element) {
    const mediaContainer = element.querySelector('.media-container');
    mediaContainer.innerHTML = ''; // Remove the YouTube player
}