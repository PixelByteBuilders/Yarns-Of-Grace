// cart.js (After Backend Integration)

// The base URL for your backend API
const API_BASE_URL = 'http://localhost:3000/api';

// This will store products fetched from the backend.
// We'll populate this array once the page loads.
let availableProducts = [];

// Remove the hardcoded 'products' array from here!
// It's now managed by the backend.
// let products = [...] // DELETE THIS BLOCK from your cart.js

// --- Animation Function (NO CHANGE) ---
function animateToCart(buttonElement) {
    const cartIcon = document.querySelector('#navbar .cart a');

    if (!cartIcon) {
        console.warn("Cart icon not found for animation. Skipping animation.");
        return;
    }

    const startRect = buttonElement.getBoundingClientRect();
    const endRect = cartIcon.getBoundingClientRect();

    const flyingItem = document.createElement('span');
    flyingItem.classList.add('flying-cart-item');
    flyingItem.textContent = 'Add Cart';

    flyingItem.style.position = 'fixed';
    flyingItem.style.zIndex = '9999';
    flyingItem.style.color = '#DAA06D';
    flyingItem.style.fontWeight = 'bold';
    flyingItem.style.fontSize = '18px';
    flyingItem.style.whiteSpace = 'nowrap';
    flyingItem.style.opacity = '1';
    flyingItem.style.transition = 'all 0.7s ease-in-out';

    document.body.appendChild(flyingItem);

    const itemWidth = flyingItem.offsetWidth;
    const itemHeight = flyingItem.offsetHeight;

    flyingItem.style.top = `${startRect.top + startRect.height / 2 - itemHeight / 2}px`;
    flyingItem.style.left = `${startRect.left + startRect.width / 2 - itemWidth / 2}px`;

    setTimeout(() => {
        const targetX = endRect.left + endRect.width / 2 - (startRect.left + startRect.width / 2);
        const targetY = endRect.top + endRect.height / 2 - (startRect.top + startRect.height / 2);

        flyingItem.style.transform = `translate(${targetX}px, ${targetY}px) scale(0)`;
        flyingItem.style.opacity = '0';
    }, 50);

    setTimeout(() => {
        flyingItem.remove();
    }, 700);
}

// --- Fetch Products from Backend ---
// This new function will get your products securely.
async function fetchProductsFromBackend() {
    try {
        console.log('Attempting to fetch products from:', `${API_BASE_URL}/products`);
        const response = await fetch(`${API_BASE_URL}/products`);
        if (!response.ok) {
            // If the server responds with an error status (e.g., 404, 500)
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        availableProducts = await response.json(); // Store the fetched products
        console.log('Products successfully fetched:', availableProducts);

        // After fetching, if you have a product listing page,
        // you would call a function here to render them.
        // For example, if you have a function named renderProductGrid():
        // renderProductGrid();
        // Ensure this function exists in your main product display script or here.
        // For now, if your main product display is driven by `products` array directly,
        // you'll need to adapt it to use `availableProducts`.
        // If your website does not have a dynamic product listing page
        // and only adds products from product detail pages, this call isn't strictly necessary for main functionality.
        // However, it's good practice to have this data available for features like search, recommendations, etc.
    } catch (error) {
        console.error('Failed to fetch products from backend:', error);
        // Provide user feedback, e.g., display a message on the page
        // or ensure product detail pages handle missing product data gracefully.
    }
}


// --- PRODUCT DETAIL PAGE CART BUTTON LISTENER (MODIFIED) ---
document.addEventListener('DOMContentLoaded', async () => {
    // First, fetch products from the backend as soon as the DOM is ready.
    // This makes 'availableProducts' accessible for subsequent operations.
    await fetchProductsFromBackend(); // Use await here to ensure products are loaded before other logic runs

    const productDetailPageAddToCartBtn = document.getElementById('add-to-cart-btn');
    const productQuantityInput = document.getElementById('product-quantity');
    const prodetailsSection = document.getElementById('prodetails');

    if (productDetailPageAddToCartBtn && productQuantityInput && prodetailsSection) {
        const productTagOnPage = prodetailsSection.dataset.productTag;

        // Find the full product object from our 'availableProducts' array
        // It's crucial that availableProducts is populated by now.
        const currentProduct = availableProducts.find(p => p.tag === productTagOnPage);

        if (currentProduct) {
            productDetailPageAddToCartBtn.addEventListener('click', (event) => {
                event.preventDefault();

                const quantity = parseInt(productQuantityInput.value);

                if (quantity > 0) {
                    cartNumbers(currentProduct, null, quantity);
                    totalCost(currentProduct, null, quantity);
                    animateToCart(productDetailPageAddToCartBtn);
                } else {
                    alert('Please enter a valid quantity (at least 1).');
                }
            });
        } else {
            console.error("Current product not found in 'availableProducts' array for tag:", productTagOnPage);
            // Optionally, disable the add to cart button or show an error
            if (productDetailPageAddToCartBtn) {
                productDetailPageAddToCartBtn.disabled = true;
                productDetailPageAddToCartBtn.textContent = 'Product Unavailable';
            }
        }
    }

    onLoadCartNumbers();

    if (document.querySelector('.products')) {
        displayCart();
    }
});


// --- Functions Below (Minimal to NO CHANGE needed) ---

function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');
    if (productNumbers) {
        document.querySelector('.cart span').textContent = productNumbers;
    } else {
        document.querySelector('.cart span').textContent = 0;
    }
}

function cartNumbers(product, action, quantity = 1) {
    let productNumbers = parseInt(localStorage.getItem('cartNumbers') || 0);

    if (action === "decrease") {
        localStorage.setItem("cartNumbers", productNumbers - quantity);
        document.querySelector('.cart span').textContent = productNumbers - quantity;
    } else {
        localStorage.setItem("cartNumbers", productNumbers + quantity);
        document.querySelector('.cart span').textContent = productNumbers + quantity;
    }
    setItems(product, quantity);
}

function setItems(product, quantity) {
    let cartItems = JSON.parse(localStorage.getItem('productsInCart')) || {};
    const uniqueCartKey = product.tag; // Still using tag as the key for cart items

    if(cartItems[uniqueCartKey]) {
        cartItems[uniqueCartKey].inCart += quantity;
    } else {
        // Crucially, when adding to cart, store the product's name, tag, and price
        // from the *backend-fetched* product object.
        cartItems[uniqueCartKey] = {
            name: product.name,
            tag: product.tag,
            price: product.price,
            inCart: quantity
        };
    }
    localStorage.setItem('productsInCart', JSON.stringify(cartItems));
}

function totalCost(product, action, quantity = 1) {
    let cartCost = parseFloat(localStorage.getItem("totalCost") || 0);

    if (action === "decrease") {
        localStorage.setItem("totalCost", cartCost - (product.price * quantity));
    } else {
        localStorage.setItem("totalCost", cartCost + (product.price * quantity));
    }
}

function displayCart() {
    let cartItems = JSON.parse(localStorage.getItem('productsInCart'));
    let cartTotal = parseFloat(localStorage.getItem("totalCost") || 0);

    let productContainer = document.querySelector('.products');
    let basketTotalElement = document.querySelector('.basketTotal');
    let checkoutButtonContainer = document.querySelector('.checkout-button-container');

    if (cartItems && productContainer) {
        productContainer.innerHTML = '';

        if (Object.keys(cartItems).length === 0) {
            productContainer.innerHTML = '<p style="text-align: center; margin-top: 50px; font-size: 1.2rem; color: #777;">Your cart is empty. Why not add some lovely items?</p>';
            if (basketTotalElement) {
                basketTotalElement.textContent = '$0.00';
            }
            if (checkoutButtonContainer) {
                checkoutButtonContainer.style.display = 'none';
            }
        } else {
            if (checkoutButtonContainer) {
                checkoutButtonContainer.style.display = 'block';
            }

            Object.values(cartItems).map((item) => {
                const uniqueDataTag = item.tag;
                productContainer.innerHTML +=
                `<div class="cart-product-row">
                    <div class="product" data-tag="${uniqueDataTag}">
                        <ion-icon name="close-circle" data-tag="${uniqueDataTag}"></ion-icon>
                        <img src="./img/${item.tag}.webp" alt="${item.name}" />
                        <span class="sm-hide">${item.name}</span>
                    </div>
                    <div class="price sm-hide">$${item.price.toFixed(2)}</div>
                    <div class="quantity">
                        <ion-icon class="decrease" name="arrow-dropleft-circle" data-tag="${uniqueDataTag}"></ion-icon>
                            <span>${item.inCart}</span>
                        <ion-icon class="increase" name="arrow-dropright-circle" data-tag="${uniqueDataTag}"></ion-icon>
                    </div>
                    <div class="total">$${(item.inCart * item.price).toFixed(2)}</div>
                </div>`;
            });
            if (basketTotalElement) {
                basketTotalElement.textContent = `$${cartTotal.toFixed(2)}`;
            }

            deleteButtons();
            manageQuantity();
        }
    }
}

function manageQuantity() {
    let decreaseButtons = document.querySelectorAll('.decrease');
    let increaseButtons = document.querySelectorAll('.increase');
    let cartItems = JSON.parse(localStorage.getItem('productsInCart'));

    for (let i = 0; i < increaseButtons.length; i++) {
        decreaseButtons[i].addEventListener('click', () => {
            let productUniqueTag = decreaseButtons[i].dataset.tag;
            let currentItem = cartItems[productUniqueTag];

            if (currentItem && currentItem.inCart > 1) {
                currentItem.inCart -= 1;
                cartNumbers(currentItem, "decrease", 1);
                totalCost(currentItem, "decrease", 1);
                localStorage.setItem('productsInCart', JSON.stringify(cartItems));
                displayCart();
            }
        });

        increaseButtons[i].addEventListener('click', () => {
            let productUniqueTag = increaseButtons[i].dataset.tag;
            let currentItem = cartItems[productUniqueTag];

            if (currentItem) {
                currentItem.inCart += 1;
                cartNumbers(currentItem, null, 1);
                totalCost(currentItem, null, 1); // Pass null for action, 1 for quantity
                localStorage.setItem('productsInCart', JSON.stringify(cartItems));
                displayCart();
            }
        });
    }
}

function deleteButtons() {
    let deleteButtons = document.querySelectorAll('.product ion-icon[name="close-circle"]');
    let cartItems = JSON.parse(localStorage.getItem('productsInCart'));

    for (let i = 0; i < deleteButtons.length; i++) {
        deleteButtons[i].addEventListener('click', () => {
            let productUniqueTag = deleteButtons[i].dataset.tag;
            let itemToDelete = cartItems[productUniqueTag];

            if (itemToDelete) {
                let productNumbers = parseInt(localStorage.getItem('cartNumbers') || 0);
                let cartCost = parseFloat(localStorage.getItem("totalCost") || 0);

                localStorage.setItem('cartNumbers', productNumbers - itemToDelete.inCart);
                localStorage.setItem('totalCost', cartCost - (itemToDelete.price * itemToDelete.inCart));

                delete cartItems[productUniqueTag];
                localStorage.setItem('productsInCart', JSON.stringify(cartItems));
            }

            displayCart();
            onLoadCartNumbers();
        })
    }
}

onLoadCartNumbers(); // Still call on load, but products fetch is async
// displayCart(); // This line is commented out as it's handled by DOMContentLoaded check now