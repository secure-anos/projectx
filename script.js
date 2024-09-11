// Sample video data - in a real application, this data would come from a server
const videos = [
  {
    title: "Video 1",
    src: "video1.mp4",
    thumbnail: "video-thumbnail.webp",
  },
  {
    title: "Video 2",
    src: "video2.mp4",
    thumbnail: "video-thumbnail.webp",
  },
  {
    title: "Video 3",
    src: "video3.mp4",
    thumbnail: "video-thumbnail.webp",
  },
  {
    title: "Video 4",
    src: "video4.mp4",
    thumbnail: "video-thumbnail.webp",
  },
  {
    title: "Video 5",
    src: "VID-20240322-WA0068.mp4",
    thumbnail: "video-thumbnail.webp",
  },
  {
    title: "Video 6",
    src: "video2.mp4",
    thumbnail: "video-thumbnail.webp",
  },
  {
    title: "Video 7",
    src: "video1.mp4",
    thumbnail: "video-thumbnail.webp",
  },
  {
    title: "Video 8",
    src: "video2.mp4",
    thumbnail: "video-thumbnail.webp",
  },
  {
    title: "Video 9",
    src: "video1.mp4",
    thumbnail: "video-thumbnail.webp",
  },
  {
    title: "Video 10",
    src: "video2.mp4",
    thumbnail: "video-thumbnail.webp",
  },
  {
    title: "Video 11",
    src: "video3.mp4",
    thumbnail: "video-thumbnail.webp",
  },
  {
    title: "Video 12",
    src: "video2.mp4",
    thumbnail: "video-thumbnail.webp",
  },
  {
    title: "Video 13",
    src: "video3.mp4",
    thumbnail: "video-thumbnail.webp",
  },
  {
    title: "Video 14",
    src: "video2.mp4",
    thumbnail: "video-thumbnail.webp",
  },
  {
    title: "Video 15",
    src: "video1.mp4",
    thumbnail: "video-thumbnail.webp",
  },
  {
    title: "Video 16",
    src: "video2.mp4",
    thumbnail: "video-thumbnail.webp",
  },
  {
    title: "Video 17",
    src: "video3.mp4",
    thumbnail: "video-thumbnail.webp",
  },
  {
    title: "Video 18",
    src: "video2.mp4",
    thumbnail: "video-thumbnail.webp",
  },
  {
    title: "Video 19",
    src: "video3.mp4",
    thumbnail: "video-thumbnail.webp",
  },
  {
    title: "Video 20",
    src: "video2.mp4",
    thumbnail: "video-thumbnail.webp",
  },
];

// Function to load video data into the video list
function loadVideos() {
  const videoList = document.getElementById("videoList");
  videoList.innerHTML = ""; // Clear existing content

  videos.forEach((video, index) => {
    const videoItem = document.createElement("div");
    videoItem.className = "video-item";
    videoItem.innerHTML = `
            <img src="${video.thumbnail}" alt="${video.title}">
            <div class="video-title">${video.title}</div>
            <button onclick="playVideo('${video.src}')">Play</button>
        `;
    videoList.appendChild(videoItem);
  });
}

// Function to play selected video
function playVideo(src) {
  document.getElementById("videoSource").src = src;
  document.getElementById("videoPlayer").load();
}

// Handle download button click
document
  .getElementById("downloadButton")
  .addEventListener("click", function () {
    const videoSrc = document.getElementById("videoSource").src;
    if (videoSrc) {
      const link = document.createElement("a");
      link.href = videoSrc;
      link.download = videoSrc.split("/").pop(); // Use the file name from the URL
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      alert("No video is currently selected.");
    }
  });

// Load video data on page load
window.onload = loadVideos;

document.addEventListener("DOMContentLoaded", function () {
  const loginBtn = document.getElementById("login-btn");
  const subscribeBtn = document.getElementById("subscribe-btn");

  subscribeBtn.addEventListener("click", function () {
    alert("Thank you for subscribing!");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const loginBtn = document.getElementById("login-btn");
  const subscribeBtn = document.getElementById("subscribe-btn");

  loginBtn.addEventListener("click", function () {
    const username = prompt("Enter your username:");
    if (username) {
      alert(`Welcome, ${username}!`);
    }
  });

  subscribeBtn.addEventListener("click", function () {
    alert("Thank you for subscribing!");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const readMoreButtons = document.querySelectorAll(".read-more-btn");
  const downloadButtons = document.querySelectorAll(".download-btn");
  const modal = document.getElementById("read-more-modal");
  const docViewer = document.getElementById("doc-viewer");
  const closeModalBtn = document.querySelector(".close-btn");

  // Function to open modal with the document
  function openModal(docUrl) {
    docViewer.src = `docs/${"अंधेरे का साया.pdf"}`; // Adjust path as needed
    modal.style.display = "block";
  }

  // Event listeners for Read More buttons
  readMoreButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const docUrl = button.getAttribute("data-doc");
      openModal(docUrl);
    });
  });

  // Event listeners for Download buttons
  downloadButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const fileUrl = button.getAttribute("data-file");
      window.location.href = `docs/${fileUrl}`; // Adjust path as needed
    });
  });

  // Close the modal
  closeModalBtn.addEventListener("click", function () {
    modal.style.display = "none";
    docViewer.src = "";
  });

  // Close the modal if clicked outside of it
  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
      docViewer.src = "";
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("blog-form");
  const blogList = document.getElementById("blog-list");
  const blogDetails = document.getElementById("blog-details");

  let blogs = JSON.parse(localStorage.getItem("blogs")) || [];

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const title = document.getElementById("title").value;
      const content = document.getElementById("content").value;

      const blog = {
        id: Date.now(),
        title,
        content,
      };

      blogs.push(blog);
      localStorage.setItem("blogs", JSON.stringify(blogs));
      window.location.href = "index.html";
    });
  }

  if (blogList) {
    blogs.forEach((blog) => {
      const article = document.createElement("article");
      article.innerHTML = `
                <h2>${blog.title}</h2>
                <p>${blog.content.substring(0, 100)}...</p>
                <a href="read.html?id=${blog.id}">Read more</a>
            `;
      blogList.appendChild(article);
    });
  }

  if (blogDetails) {
    const urlParams = new URLSearchParams(window.location.search);
    const blogId = urlParams.get("id");
    const blog = blogs.find((b) => b.id == blogId);

    if (blog) {
      blogDetails.innerHTML = `
                <h2>${blog.title}</h2>
                <p>${blog.content}</p>
            `;
    }
  }
});

// JavaScript function to handle the subscribe action
function subscribe() {
  const emailInput = document.getElementById("email-input");
  const email = emailInput.value.trim();

  // Check if email is not empty
  if (email) {
    alert(`Thank you for subscribing, ${email}!`);
    emailInput.value = ""; // Clear the input field
  } else {
    alert("Please enter a valid email address.");
  }
}

// Adding an event listener to trigger subscribe function when Enter key is pressed
document
  .getElementById("email-input")
  .addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      subscribe();
    }
  });

// JavaScript function to handle the subscribe action
function subscribe() {
  const emailInput = document.getElementById("email-input");
  const email = emailInput.value.trim();

  // Check if email is not empty
  if (email) {
    alert(`Thank you for subscribing, ${email}!`);
    emailInput.value = ""; // Clear the input field
  } else {
    alert("Please enter a valid email address.");
  }
}

// Adding an event listener to trigger subscribe function when Enter key is pressed
document
  .getElementById("email-input")
  .addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      subscribe();
    }
  });
