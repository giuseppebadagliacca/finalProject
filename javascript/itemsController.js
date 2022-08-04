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
}


