// define variables to gran the imputs
const form = document.getElementById('form');
const h1DOM = document.querySelector('h1');

//const productsController = new ProductsController(0);
// appleWatch.addItem('Apple Watch', 'Really nice watch', '/pics/appleWatch.jpeg', '6/27/22')

// const iphone = new ProductsController(2);
// // iphone.addItem('Iphone', 'Really nice iPhone', '/pics/iPhone.png', '6/27/22')


function displayMsg(msg, color) {
    h1DOM.style.color = color;
    // h1DOM.style.fontSize = "18px";
    h1DOM.innerText = msg
    h1DOM.className = "d-flex flex-column justify-content-center align-items-center"
    setTimeout(clear, 5000)
}


form.addEventListener('submit', function(event) {
    // Prevent default action
    event.preventDefault();

    // Select the inputs
    const productNameInput = document.getElementById('product');
    const productDescriptionInput = document.getElementById('description');
    const productImgInput = document.getElementById('img');
    //const productDateInput = document.getElementById('dateCreated');    

    // Get the values of the inputs
    const name = productNameInput.value;
    const description = productDescriptionInput.value;
    const img = productImgInput.value;
    //const dateCreated = productDateInput.value;

    // if any imput feilds are blank. alert a message that says you MUST fill in all input
    if (name === "" || description === "" || img === "" || productDateInput.value === "") {
        displayMsg('You MUST input data for all fields!', "red");
    }
    // typeof to match input to expected input type
    else if (typeof name !== "string" || typeof description !== "string" || typeof img !== "string") {

        displayMsg('You MUST input data for all fields!', "red");
    } else {

        // successful validation 
        displayMsg('You have successfully submited a new product!', "green");

        // Add the item to the productsController
        productsController.addItem(name, description, img);

        // Clear the form
        name = '';
        description = '';
        img = '';
        //dateCreated = '';
    }
 
});


