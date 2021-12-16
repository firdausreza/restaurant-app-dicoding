import CONFIG from "../../globals/config";

const restaurantItemTemp = (restaurant) => {
  const pathname = window.location.pathname.split('/')[1];
  return `
    <article tabindex="0" id="${restaurant.id}" class="card">
      <img src="${CONFIG.BASE_IMG_URL}medium/${restaurant.pictureId}" alt="restaurant photo">
      <div class="card-content">
        <a tabindex="0" href="${window.location.pathname === '/' ? `/#/detail/${restaurant.id}` : `/${pathname}/#/detail/${restaurant.id}`}">
          ${restaurant.name}
        </a>
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
}

const restaurantDetailTemp = (restaurant) => {
  return `
    <h1>Detail Restoran</h1>
    <article id="${restaurant.id}" class="detail-item">
      <section class="content">
        <img src="${CONFIG.BASE_IMG_URL}medium/${restaurant.pictureId}" alt="restaurant photo">
        <section class="restaurant-profile">
          <h1>${restaurant.name}</h1>
          <p>${restaurant.description}</p>
          <div>
            <h2>Lokasi:</h2>
            <p>${restaurant.address}, ${restaurant.city}</p>
          </div>
          <div>
            <h2>Jenis Restoran:</h2>
            <p>
              ${restaurant.categories.map((category) => {
                return `${category.name} `
              }).join("")}
            </p>
          </div>
          <h2>Rating: ${restaurant.rating}</h2>
        </section>
      </section>
      <section class="customer-review">
        <h1 style="text-align: center">Apa Kata Mereka?</h1>
        ${restaurant.customerReviews.map((review) => {
          return `
            <article class="card">
              <h2>${review.name}</h2>
              <p class="date-text">pada ${review.date}</p>
              <p>${review.review}</p>
            </article>
          `
        }).join("")}
      </section>
    </article>
  `
}

export { restaurantItemTemp, restaurantDetailTemp };
