document.addEventListener("DOMContentLoaded", function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll("nav ul li a");
  
    for (const link of navLinks) {
      link.addEventListener("click", smoothScroll);
    }
  
    function smoothScroll(e) {
      e.preventDefault();
  
      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);
      const targetOffset = targetElement.offsetTop;
  
      window.scrollTo({
        top: targetOffset,
        behavior: "smooth"
      });
    }

    // Fade-in effect on scroll
  const fadeElements = document.querySelectorAll(".fade-out");

  function checkFade() {
    for (const element of fadeElements) {
      const elementTop = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (sectionTop < windowHeight - 100 && sectionBottom > 0) {
        section.classList.add("fade-in");
        section.classList.remove("fade-out");
      } else {
        section.classList.remove("fade-in");
        section.classList.add("fade-out");
      }
    }
  }

  window.addEventListener("scroll", checkFade);
  checkFade();

  // Get all the video containers
const videoContainers = document.querySelectorAll('.video-container');

// Initialize the Vimeo Players
videoContainers.forEach(container => {
  const videoPlayer = container.querySelector('.video-player');
  const videoThumbnail = container.querySelector('.video-thumbnail');
  const videoId = videoPlayer.dataset.vimeoId;

  // Create a new Vimeo Player instance
  const player = new Vimeo.Player(videoPlayer, {
    id: videoId,
  });

  // Hide the video player initially
  // player.hide();

  // Show the video player and start playing on thumbnail click
  videoThumbnail.addEventListener('click', () => {
    videoThumbnail.style.display = 'none';
    // player.show();
    player.play();
  });
});


  });
  
  document.addEventListener("DOMContentLoaded", function() {
    const videoThumbnails = document.querySelectorAll(".video-thumbnail");
  
    for (const thumbnail of videoThumbnails) {
      thumbnail.addEventListener("click", playVideo);
    }
  
    function playVideo() {
      const videoContainer = this.parentNode;
      const videoThumbnail = this;
      const videoPlayer = videoContainer.querySelector(".video-player");
      const vimeoId = videoPlayer.getAttribute("data-vimeo-id");
  
      // Smoothly fade out thumbnail
    videoThumbnail.style.opacity = "0";
    videoThumbnail.addEventListener("transitionend", function() {
      videoThumbnail.style.display = "none";
    });

    // Display video player and smoothly fade it in
    videoPlayer.style.display = "block";
    setTimeout(function() {
      videoPlayer.style.opacity = "1";
    }, 50);

    // Simulate click on the play button to start the video
    const playButton = videoPlayer.querySelector(".play-button");
    playButton.click();

    // Load Vimeo player with controls enabled
    const player = new Vimeo.Player(videoPlayer, {
      id: vimeoId,
      controls: true
      });
    }
  });

  window.addEventListener("scroll", function() {
    var fadeInElements = document.querySelectorAll(".fade-in");
    
    for (var i = 0; i < fadeInElements.length; i++) {
      var element = fadeInElements[i];
      var position = element.getBoundingClientRect().top;
      var windowHeight = window.innerHeight;
  
      if (position < windowHeight) {
        element.classList.add("fade-in-visible");
      } else {
        element.classList.remove("fade-in-visible");
      }
    }
  });
  

  document.addEventListener("DOMContentLoaded", function() {
    const changingTextElement = document.getElementById("changing-text");
    const wordPairs = [
      ["Product", "Videos" ],
      ["Video", "Solutions"]
      
    ]; // Add your desired word pairs here
    let currentIndex = 0;
  
    function changeLastWords() {
      const currentText = changingTextElement.innerText;
      const wordsArray = currentText.split(" ");
  
      if (wordsArray.length >= 2) {
        const newFirstWord = wordPairs[currentIndex][0];
        const newSecondWord = wordPairs[currentIndex][1];
        currentIndex = (currentIndex + 1) % wordPairs.length;
  
        const rollAnimation = document.createElement("span");
        rollAnimation.classList.add("roll-animation");
        rollAnimation.textContent = `${newFirstWord} ${newSecondWord}`;
  
        const rollContainer = document.createElement("span");
        rollContainer.classList.add("roll-container");
        rollContainer.appendChild(rollAnimation);
  
        changingTextElement.innerHTML = "";
  
        wordsArray.forEach((word, index) => {
          if (index >= wordsArray.length - 2) {
            changingTextElement.appendChild(rollContainer);
          } else {
            const regularWord = document.createElement("span");
            regularWord.textContent = word;
            changingTextElement.appendChild(regularWord);
          }
  
          if (index < wordsArray.length - 1) {
            const space = document.createTextNode(" ");
            changingTextElement.appendChild(space);
          }
        });
      }
    }
  
    setInterval(changeLastWords, 3000); // Change words every 3 seconds
  });

  document.addEventListener('DOMContentLoaded', () => {
    function changeBackgroundImage() {
      const images = [
        './1.jpg',
        './5.jpg'
        // Add more image URLs here
      ];
    
      const backgroundVideo = document.getElementById('background-video');
      let currentImageIndex = 0;
    
      setInterval(() => {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        const imageUrl = `url(${images[currentImageIndex]})`;
        backgroundVideo.style.backgroundImage = imageUrl;
      }, 3000);
    }
    
    changeBackgroundImage();
  });
  