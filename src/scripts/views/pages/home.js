import RestaurantData from "../../data/restaurant-data";
import { restaurantItemTemp } from "../templates/template-creator";

const Home = {
  async render() {
    return `
      <section id="hero-jumbotron">
        <h1 tabindex="0">Good Resto</h1>
        <p>
          We always serving best for the best.
        </p>
      </section>
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
      restaurantContainer.innerHTML += restaurantItemTemp(restaurant);
    })
  }
}

export default Home;