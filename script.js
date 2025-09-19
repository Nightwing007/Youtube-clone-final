const hamburger = document.getElementById("hamburger");
const sidebar = document.getElementById("sidebar");

hamburger.addEventListener("click", () => {
    sidebar.classList.toggle("hidden");
    document.body.classList.toggle("sidebar-open");
});

async function loadVideos() {
    const response = await fetch("videos.json");
    const videos = await response.json();
    const videoGrid = document.getElementById("video-grid");

    videos.forEach(video => {
        const videoElement = document.createElement("div");
        videoElement.classList.add("video-preview");

        videoElement.innerHTML = `
            <a href="#">
                <div class="thumbnail-row">
                    <img src="${video.thumbnail}" class="thumbnail">
                    <p class="time">${video.time}</p>
                </div>
                <div class="video-info-grid">
                    <div class="channel-logo">
                        <img src="${video.channelLogo}" class="profile-picture">
                    </div>
                    <div class="video-info">
                        <p class="video-title">${video.title}</p>
                        <p class="video-author">${video.author}</p>
                        <p class="video-stats">${video.stats}</p>
                    </div>
                </div>
            </a>
        `;
        videoGrid.appendChild(videoElement);
    });
}
loadVideos();
