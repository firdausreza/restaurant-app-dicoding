import UrlParser from "../../routes/url-parser";
import RestaurantData from "../../data/restaurant-data";
import { restaurantDetailTemp } from '../templates/template-creator'

const Detail = {
  async render() {
    return `
      <section id="detail-container">
        
      </section>
    `
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantData.getDetailRestaurant(url.id);
    const container = document.getElementById('detail-container');
    container.innerHTML = restaurantDetailTemp(restaurant);
  }
}

export default Detail;