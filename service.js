const addToCart = (index) => {
  if (cart.find((val) => val.name == flowers[index].name)) {
    flowers[index].qtty++;
  } else {
    cart.push(flowers[index]);
  }
};

function showCart() {
  document.getElementById("cart").innerHTML = "";
  for (let val of cart) {
    document.getElementById("cart").innerHTML += `
              <div class="d-flex justify-content-between align-items-center mb-3">
                  <img src="${val.image}" width="100" height="100">
                  <p>${val.name}</p>
                  <button class="btn btn-warning minus-btn">-</button>
                  <p class="qtty">${val.qtty}</p>
                  <button class="btn btn-warning plus-btn">+</button>
                  <button class="btn btn-danger x-btn">X</button>
              </div>
          `;
  }
  let plusBtns = document.querySelectorAll(".plus-btn");
  plusBtns.forEach((element, i) => {
    element.addEventListener("click", function () {
      plusQtty(i);
      calculateTotal();
      showCart();
    });
  });

  let minusBtns = document.querySelectorAll(".minus-btn");
  minusBtns.forEach((element, i) => {
    element.addEventListener("click", function () {
      showCart();
      calculateTotal();
      minusQtty(i);
    });
  });

  let xBtns = document.querySelectorAll(".x-btn");
  xBtns.forEach((element, i) => {
    element.addEventListener("click", function () {
      cart[i].qtty = 1;
      cart.splice(i, 1);
      showCart();
      calculateTotal();
    });
  });
}

function calculateTotal() {
  let total = 0;
  for (let val of cart) {
    total = total + val.price * val.qtty;
  }
  document.getElementById("total").innerHTML = total.toFixed(2) + " €";
}

function plusQtty(index) {
  cart[index].qtty++;
  document.querySelectorAll(".qtty")[index].innerHTML = cart[index].qtty;
}

function minusQtty(i) {
  if (cart[i].qtty === 1) {
    cart.splice(i, 1);
  } else {
    cart[i].qtty--;
  }
}
