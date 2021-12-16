import API_ENDPOINT from "../globals/api-endpoint";

class RestaurantData {
  static async getAllData() {
    const response = await fetch(API_ENDPOINT.ALL_DATA);
    const data = await response.json();
    return data.restaurants;
  }

  static async getDetailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const data = await response.json();
    return data.restaurant;
  }
}

export default RestaurantData;