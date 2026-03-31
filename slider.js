const sliderContent = [
  {
    id: 1,
    title: "Slider number 1",
    description: "Hello world, this is the first slider contn",
    link: "https://www.google.com",
    linkText: "Go to google",
    image: "hero-image.jpg",
  },
  {
    id: 2,
    title: "Slider number 2",
    description: "Hello world, this is the second slider contn",
    link: "https://www.x.com",
    linkText: "Go to X (Twitter)",
    image: "hero.jpg",
  },
  {
    id: 2,
    title: "Slider number 2---b",
    description: "Hello world, this is the second slider contn",
    link: "https://www.x.com",
    linkText: "Go to X (Twitter)",
    image: "hero.jpg",
  },
  {
    id: 2,
    title: "Slider number 2---c",
    description: "Hello world, this is the second slider contn",
    link: "https://www.x.com",
    linkText: "Go to X (Twitter)",
    image: "hero.jpg",
  },
  {
    id: 3,
    title: "Slider number 3",
    description: "Hello world, this is the third slider contn",
    link: "https://www.facebook.com",
    linkText: "Go to Facebook",
    image: "robotics.jpg",
  },
];
const sliderSection = document.querySelector("#hero");

function renderSlider(index) {
  const slider = sliderContent[index];
  const sliderContainer = document.createElement("div");
  sliderContainer.innerHTML = `  
        <h2>${slider.title}</h2>
        <p>${slider.description}</p>
        <a href="${slider.link}">${slider.linkText}</a>
        <img src="${slider.image}" alt="${slider.title}">
    `;
  sliderSection.innerHTML = ""; // Clear previous content
  sliderSection.appendChild(sliderContainer);
}

// for (let i = 0; i < sliderContent.length; i++) {
//   setTimeout(() => {
//     renderSlider(i);
//   }, i * 3000);
// }

const maxCounter = sliderContent.length - 1;
let currentIndex = 0;
setInterval(() => {
  renderSlider(currentIndex);
  if (currentIndex === maxCounter) {
    currentIndex = 0;
  } else {
    currentIndex++;
  }
}, 3000);

// alert("This is an alert message!");

sliderContent.forEach((item) => console.log(item.title));

// setTimeout, setInterval, clearTimeout, clearInterval, alert , confirm, prompt

// setTimeOut

setTimeout(function logMessage() {
  document.querySelector("aside").style.display = "block";
}, 500000);

// setinterval
// Assignment1:  find out about template literals  in js
