
const CardContainer = document.getElementById('card-section');
const url = 'https://fakestoreapi.com/products';


function loadperson() {
    fetch(url)
        .then(res => res.json())
        .then(json => showData(json))

};

loadperson();

function showData(product) {


    for (let i = 0; i < 10; i++) {
        console.log(product);
        const title = product[i].title;
        console.log(title);
        const price = product[i].price;
        console.log(price);
        const category = product[i].category;
        console.log(category);
        const img = product[i].image;
        console.log(img);
        const products = document.querySelector(".products");


        const productElement = document.createElement("div");
        productElement.classList.add("product", "col-lg-2", "col-md-4", "col-sm-12");


        productElement.innerHTML = `
        <div class="product-container">
        <img src="${img}" class=" card-img-top img-size" alt="pic1"> 
        <div class="person-info">
        <h5 class="card-title text-left">${title}</h5>
        <h4 class="card-text text-left">$${price}</h4>

        <div class="cart-btn">
        <button class="btn-style">Add to Cart</button>
         </div>
         </div>
        
        </div>
     
        
  `;
        products.appendChild(productElement);




    };

};









