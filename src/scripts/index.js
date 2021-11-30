import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import data from './data.js'

const cardContainerElement = document.getElementById('content-wrapper');

const getAllData = (items) => {
  console.log(data)
  if (items !== []) {
    items.forEach(item => {
      let i = 1;
      cardContainerElement.innerHTML += `
        <article tabindex="0" id="${item.id}" class="card">
          <img src="${item.pictureId}" alt="restaurant photo">
          <div class="card-content">
            <h2 tabindex="0">
              ${item.name}
            </h2>
            <p>${item.description}</p>
            <h3>
              Rating: ${item.rating}
            </h3>
            <h3>
              Kota: ${item.city}
            </h3>
          </div>
        </article>
      `;
      i++
    })
  }
}

getAllData(data)