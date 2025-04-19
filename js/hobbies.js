let hobbycard = document.getElementById('hobby-card');
let hobbyimg = document.getElementById('hobby-img');
let hobbytitle = document.getElementById('hobby-title');
let hobbytext = document.getElementById('hobby-text');
let hobbySection = document.getElementById('hobbySection');

//array of hobbies
const hobbies = [
    {
      hobby_name: "Going out with Friend",
      hobby_img: "../images/out friends.webp",
      hobby_info: "Going with friends sharing making fun laughing",
      video :"https://www.youtube.com/watch?v=Oextk-If8HQ"

    },
    {
        hobby_name: "Music",
        hobby_img: "../images/music.webp",
        hobby_info: "Lestining to my favorit music.",
        video :"https://www.youtube.com/watch?v=T3E9Wjbq44E"
      },
      {
        hobby_name: "Cricket",
        hobby_img: "../images/cricket.webp",
        hobby_info: "Playing Cricket on weekend with my club and league.",
        video: "https://www.youtube.com/watch?v=L1NfeFLdwqY"
      },
      {
        hobby_name: "Watching movies",
        hobby_img: "../images/watching movies.jpg",
        hobby_info: "Watching thriler movies is one of my biggest hobby.",
        video : "https://www.youtube.com/shorts/MdRVFeRM0qU"
      },

      {
        hobby_name: "Writting Code",
        hobby_img: "../images/writting code.webp",
        hobby_info: "writting code learning something new.",
        video : "https://www.youtube.com/shorts/wvQRvmBg09s"
      },

  ];


  //when window gets loaded  appending all the child
window.onload = function () {
  hobbies.forEach((hobby) => {
    let card = document.createElement("div");
    card.className = "hobby-card";

    let img = document.createElement("img");
    img.src = hobby.hobby_img;
    img.alt = hobby.hobby_name;
    card.appendChild(img);

    let title = document.createElement("h3");
    title.textContent = hobby.hobby_name;
    card.appendChild(title);

    let text = document.createElement("p");
    text.textContent = hobby.hobby_info;
    card.appendChild(text);

    // When clicked, go to hobby.html and pass data in URL in params.set
    card.addEventListener("click", function () {
      const params = new URLSearchParams();
      params.set("video", hobby.video);
      params.set("title", hobby.hobby_name);
      params.set("desc", hobby.hobby_info);
      window.location.href = `../htmls/hobby.html?${params.toString()}`;
    });

    hobbySection.appendChild(card);
  });
};





  