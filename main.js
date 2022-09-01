const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const shoppingCartMenu = document.querySelector('.navbar-shopping-cart');
const burgerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail');
const mainContainer = document.querySelector('.main-container');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
burgerMenu.addEventListener('mouseover', toggleMobileMenu);
shoppingCartMenu.addEventListener("click", toggleCartAside);
mainContainer.addEventListener('click', closeMenusClick);

function toggleDesktopMenu() {
  // const isAsideClosed = aside.classList.contains("inactive");

  // if (!isAsideClosed) {
  //   aside.classList.add("inactive");
  // }

  desktopMenu.classList.toggle('inactive');
  aside.classList.add('inactive');
}

function toggleMobileMenu() {
  // const isAsideClosed = aside.classList.contains("inactive");
  
  // if (!isAsideClosed) {
  //   aside.classList.add("inactive");
  // }
  
  mobileMenu.classList.toggle('inactive')
  aside.classList.add('inactive');
}

function toggleCartAside() {
  // const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
  // const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');

  // if (!isMobileMenuClosed) {
  //   mobileMenu.classList.add('inactive');
  // }

  // if (!isDesktopMenuClosed) {
  //   desktopMenu.classList.add('inactive');
  // }
  
  aside.classList.toggle('inactive');
  desktopMenu.classList.add('inactive');
  mobileMenu.classList.add('inactive');
}

function closeMenusClick() {
  aside.classList.add("inactive");
  desktopMenu.classList.add("inactive");
  mobileMenu.classList.add("inactive");
}

const productList = []; //Array para devolver el código JS cuando se usa API. Por ahora es manual
productList.push({
  name: 'Bike',
  price: 120,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
}); //Dentro del array agregamos objetos
productList.push({
  name: 'Monitor',
  price: 200,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
  name: 'PC',
  price: 500,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
//Creación de función
function renderProducts(arr) {
  for (product of arr) {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    //product = {name, price, image} ->product.image
    const productImg = document.createElement("img");
    productImg.setAttribute("src", product.image);

    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");

    const productInfoDiv = document.createElement("div");

    const productPrice = document.createElement("p");
    productPrice.innerText = "$" + product.price;
    const productName = document.createElement("p");
    productName.innerText = product.name;

    const productInfoFigure = document.createElement("figure");
    const productImgCart = document.createElement("img");
    productImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg");

    productInfoFigure.append(productImgCart);
    productInfoDiv.append(productPrice, productName);
    productInfo.append(productInfoDiv, productInfoFigure);
    productCard.append(productImg, productInfo);

    cardsContainer.append(productCard);
  }
}

renderProducts(productList); //Organización. La función se puede llamar en x momento