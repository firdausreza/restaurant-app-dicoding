import API_ENDPOINT from "../globals/api-endpoint";

class RestaurantData {
  static async getAllData() {
    const response = await fetch(API_ENDPOINT.ALL_DATA);
    const data = await response.json();
    return data.restaurants;
  }
}

export default RestaurantData;