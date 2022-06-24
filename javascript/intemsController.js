class ProductsController {
    constructor(currentId = 0) {
        this.items = [];
        this.currentId = currentId;
    }

    addItem(name, description, img, createdAt) {
        const item = {
            id: this.currentId++,
            name: name,
            description: description,
            img: img,
            createdAt: createdAt
        };

        this.items.push(item);
    }
}

const newProd = new ProductsController()


newProd.addItem("Apple Watch", "Really nice watch", "http//www.apple.com", "06/24/22")

console.log(newProd);