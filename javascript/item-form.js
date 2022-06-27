// define variables to gran the imputs
const submitButtonDOM = document.getElementById('submitButton');
const h1DOM = document.querySelector('h1');

// inputs

const productNameInput = document.getElementById('product');

const productDescriptionInput = document.getElementById('description');

const productImgInput = document.getElementById('img');

const productDateInput = document.getElementById('dateCreated');



submitButtonDOM.addEventListener('click', submitEvent)


const appleWatch = new ProductsController(1);
// appleWatch.addItem('Apple Watch', 'Really nice watch', '/pics/appleWatch.jpeg', '6/27/22')

// const iphone = new ProductsController(2);
// // iphone.addItem('Iphone', 'Really nice iPhone', '/pics/iPhone.png', '6/27/22')


function submitEvent(e) {
    // if any imput feilds are blank. alert a message that says you MUST fill in all input
    if (productNameInput.value === "" || productDescriptionInput.value === "" || productImgInput.value === "" || productDateInput.value === "") {
        displayMsg('You MUST input data for all fields!', "red");
    }
    // typeof to match input to expected input type
    else if (typeof productNameInput.value !== "string" || typeof productDescriptionInput.value !== "string" || typeof productImgInput.value !== "string" || typeof productDateInput.value !== "string") {

        displayMsg('You MUST input data for all fields!', "red");
    } else {
        // successfully validation 

        appleWatch.addItem(productNameInput.value, productDescriptionInput.value, productImgInput.value, productDateInput.value);

        addItemCard(appleWatch)

        displayMsg('You have successfully submited a new product!', "green");

    }




    e.preventDefault();
}

function displayMsg(msg, color) {
    h1DOM.style.color = color;
    // h1DOM.style.fontSize = "18px";
    h1DOM.innerText = msg
    h1DOM.className = "d-flex flex-column justify-content-center align-items-center"
    setTimeout(clear, 5000)
}

function clear() {
    h1DOM.innerText = '';
}
