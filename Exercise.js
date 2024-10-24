const flowers = [
  {
    name: "Rose",
    price: 10,
    image:
      "https://cdn.pixabay.com/photo/2021/11/15/21/39/rose-6799477_1280.jpg",
    qtty: 1,
  },
  {
    name: "Tulip",
    price: 7,
    image:
      "https://cdn.pixabay.com/photo/2020/03/14/14/27/tulips-4930770_640.jpg",
    qtty: 1,
  },
  {
    name: "Daisy",
    price: 5,
    image:
      "https://cdn.pixabay.com/photo/2020/03/15/05/12/purple-daisy-4932472_640.jpg",
    qtty: 1,
  },
];

for (let val of flowers) {
  document.getElementById("result").innerHTML += `<div>
            <div class="card" style="width: 18rem;">
      <img src="${val.image}" class="card-img-top" alt="Image not found!">
      <div class="card-body">
        <h5 class="card-title">${val.name}</h5>
        <p class="card-text">${val.price}</p>
        <a class="btn btn-primary add-to-cart-btn">Add to cart</a>
      </div>
    </div>
    </div>
        `;
}

let cart = [];

let btns = document.querySelectorAll(".add-to-cart-btn");
btns.forEach((element, i) => {
  element.addEventListener("click", function () {
    addToCart(i);
    showCart();
    calculateTotal();
  });
});
