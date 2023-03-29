const images = [
    {
    src: "cat1pic.jpg",
    text: "Image by Alexas_Fotos on Pixabay"
    },
    {
    src: "cat2pic.jpg",
    text: "Image by cocoparisienne on Pixabay"
    },
    {
    src: "cat3pic.jpg",
    text: "Image by Daga_Roszkowska on Pixabay"
    },
    {
    src: "cat4pic.jpg",
    text: "Image by TeamK on Pixabay"
    },
    {
    src: "cat5pic.jpg",
    text: "Image by ClaudiaWollesen on Pixabay"
    },
    {
    src: "cat6pic.jpg",
    text: "Image by Katzenspielzeug on Pixabay"
    },
    {
    src: "cat7pic.jpg",
    text: "Image by pikabum on Pixabay"
    },
    {
    src: "cat8pic.jpg",
    text: "Image by andriish22 on Pixabay"
    },
    {
    src: "cat9pic.jpg",
    text: "Image by Melani Marfeld on Pixabay"
    },
    {
    src: "dog1pic.jpg",
    text: "Image by Printeboek on Pixabay"
    },
    {
    src: "cat10pic.jpg",
    text: "Image by Pexels on Pixabay"
    },

  ];

let clickCount = 0;
const image = document.getElementById("myImage");
const count = document.getElementById("count");
const imageText = document.getElementById("image-text");

function showRandomImage() {
  clickCount++;
  count.innerText = `Button clicked ${clickCount} times`;
  
  const randomIndex = Math.floor(Math.random() * images.length);
  const randomImage = images[randomIndex];
  
  image.src = randomImage.src;
  imageText.innerText = randomImage.text;
  
  if (randomImage.src === "dog1pic.jpg") {
    setTimeout(() => {
    alert(`Congratulations! You clicked the button ${clickCount} times to find the puppy!`);
    clickCount = 0;
    }, 100);  
}
}
