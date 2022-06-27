function addItemCard(item) {
  productListDOM.innerHTML +=
    `
    <div class="card" style="width: 18rem;">
    <img src="${item.items[0].img}" class="card-img-top" alt="${item.items[0].name}">
    <div class="card-body text-center"">
      <h5 class="card-title text-center"">${item.items[0].name}</h5>
      <p class="card-text">${item.items[0].description}</p>
      <a href="#" class="btn btn-primary">Go to product</a>
    </div>
  </div>
  `
}

