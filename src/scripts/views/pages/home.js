import RestaurantData from "../../data/restaurant-data";
import CONFIG from "../../globals/config";

const Home = {
  async render() {
    return `
      <section id="explore">
        <div class="container">
          <h1 tabindex="0">Explore Restaurant</h1>
          <div id="content-wrapper"></div>
        </div>
      </section>
    `
  },

  async afterRender() {
    const restaurants = await RestaurantData.getAllData();
    const restaurantContainer = document.getElementById('content-wrapper');
    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += `
        <article tabindex="0" id="${restaurant.id}" class="card">
          <img src="${CONFIG.BASE_IMG_URL}medium/${restaurant.pictureId}" alt="restaurant photo">
          <div class="card-content">
            <h2 tabindex="0">
              ${restaurant.name}
            </h2>
            <p>${restaurant.description}</p>
            <h3>
              Rating: ${restaurant.rating}
            </h3>
            <h3>
              Kota: ${restaurant.city}
            </h3>
          </div>
        </article>
      `
    })
  }
}

export default Home;