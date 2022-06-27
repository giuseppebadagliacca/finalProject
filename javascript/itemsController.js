const productListDOM = document.getElementById('list-items');

class ProductsController {
    constructor(currentId = 0) {
        this.items = [];
        this.currentId = currentId;
    }

    addItem(name, description, img, createdAt) {
        const item = {
            id: this.currentId,
            name: name,
            description: description,
            img: img,
            createdAt: createdAt
        };

        this.items.push(item);
    }

    // loadItemsFromLocalStorage() {
    //     const storageItems = localStorage.getItem("items")
    //     if (storageItems) {
    //         const items = JSON.parse(storageItems)
    //         for (var i = 0, size = items.length; i < size; i++) {
    //             const item = items[i];
    //             this.items.push(item);
    //         }
    //     }
    // }
}


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


