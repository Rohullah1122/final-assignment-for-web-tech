const params = new URLSearchParams(window.location.search);
const videoUrl = params.get("video");
const title = params.get("title");
const desc = params.get("desc");

//getting data throught params.get


// accessing elements
const videoContainer = document.querySelector(".video-container");
const titleElement = document.getElementById("videotitle");
const descElement = document.getElementById("videodesc");


//if condition for checking yoututbe videos
//make the container empty
//used i frame to play video from 
if (videoUrl && videoUrl.includes("youtube")) {
  const embedUrl = videoUrl.replace("watch?v=", "embed/");
  videoContainer.innerHTML = `
    <iframe width="100%" height="400" src="${embedUrl}" frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen></iframe>
  `;
} else {

  const source = document.querySelector("#video source");
  source.src = videoUrl;
  document.getElementById("video").load();
}


if (title) titleElement.textContent = title;
if (desc) descElement.textContent = desc;