const menuButton = document.querySelector(".menuButton");

const gallery = document.querySelector('.gallery');
const modal = document.querySelector('dialog');
const modalImg = modal.querySelector('.model-img');
const closeButton = modal.querySelector('.close-viewer');

function menuButtonClicked()
{
    let nav = document.getElementById("nav");
    nav.classList.toggle("hide");
}

function handleResize()
{
    if(window.innerWidth > 1000) {
        document.getElementById("nav").classList.remove("hide");
    } else {
        document.getElementById("nav").classList.add("hide");
    }
}

function galleryClick(event)
{
  const clickedImage = event.target.closest('img');
  if (!clickedImage) return;

  const src = clickedImage.getAttribute('src');
  const alt = clickedImage.getAttribute('alt');

  const fullSrc = src.split('-')[0] + '-full.jpeg';

  modalImg.src = fullSrc;
  modalImg.alt = alt;

  modal.showModal();
};

modal.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.close();
  }
});

gallery.addEventListener('click', galleryClick);
closeButton.addEventListener('click', () => modal.close());

handleResize();
window.addEventListener("resize", handleResize);
menuButton.addEventListener("click", menuButtonClicked);