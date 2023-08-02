import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector(".gallery");
const galleryMarkup = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </li>`,
  )
  .join("");

galleryList.insertAdjacentHTML("beforeend", galleryMarkup);

galleryList.addEventListener("click", handlerOnClick);

function handlerOnClick(event) {
  event.preventDefault();

  if (event.target === event.currentTarget) {
    return;
  }

  const instance = basicLightbox.create(
    `
  <img
  src="${event.target.dataset.source}"
  alt="${event.target.dataset.description}"
/>
`,
  );

  instance.show();

  galleryList.addEventListener("keydown", (event) => {
    console.log(event.code);
    if (event.code === "Escape") {
      instance.close();
    }
  });
}
