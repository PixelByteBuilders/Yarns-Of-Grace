// cart.js

// Define your products with their specific properties
// Ensure 'tag' matches the image file name for displayCart to work
let products = [
    {
        name: "Stork",
        tag: "stork",
        price: 34.99,
        inCart: 0
    },
    {
        name: "Racoon",
        tag: "racoon",
        price: 34.99,
        inCart: 0
    },
    {
        name: "Panda",
        tag: "panda",
        price: 34.99,
        inCart: 0
    },
    {
        name: "Unicorn",
        tag: "unicorn",
        price: 34.99,
        inCart: 0
    },
    {
        name: "Koala",
        tag: "koala",
        price: 34.99,
        inCart: 0
    },
    {
        name: "Monkey",
        tag: "monkey",
        price: 34.99,
        inCart: 0
    },
    {
        name: "Donkey",
        tag: "donkey",
        price: 34.99,
        inCart: 0
    },
    {
        name: "Giraffe",
        tag: "giraffe",
        price: 34.99,
        inCart: 0
    },
    {
        name: "Mini Bear",
        tag: "mini-bear",
        price: 19.99,
        inCart: 0
    },
    {
        name: "Gnome",
        tag: "gnome",
        price: 34.99,
        inCart: 0
    },
    {
        name: "Mini Jellyfish",
        tag: "mini-jellyfish",
        price: 19.99,
        inCart: 0
    },
    {
        name: "Mini Owl",
        tag: "mini-owl",
        price: 19.99,
        inCart: 0
    },
    {
        name: "Cow",
        tag: "cow",
        price: 34.99,
        inCart: 0
    },
    {
        name: "Penguin",
        tag: "penguin",
        price: 34.99,
        inCart: 0
    },
    {
        name: "Mini Hippo",
        tag: "mini-hippo",
        price: 19.99,
        inCart: 0
    },
    {
        name: "Kitten",
        tag: "kitten",
        price: 34.99,
        inCart: 0
    },
    {
        name: "Mini Bunny",
        tag: "mini-bunny",
        price: 19.99,
        inCart: 0
    },
    {
        name: "Standing Puppy",
        tag: "standing-puppy",
        price: 34.99,
        inCart: 0
    },
    {
        name: "Large Rabbit",
        tag: "large-rabbit",
        price: 49.99,
        inCart: 0
    },
    {
        name: "Mini Puppy",
        tag: "mini-puppy",
        price: 19.99,
        inCart: 0
    },
    {
        name: "Bunny In Overall",
        tag: "bunny-in-overall",
        price: 49.99,
        inCart: 0
    },
    {
        name: "Mini Goose",
        tag: "mini-goose",
        price: 19.99,
        inCart: 0
    },
    {
        name: "Bunny in Tutu",
        tag: "bunny-in-tutu",
        price: 34.99,
        inCart: 0
    },
    {
        name: "Baby Doll",
        tag: "baby-doll",
        price: 34.99,
        inCart: 0
    },
    {
        name: "Dachshund Keychain",
        tag: "dachshund-keychain",
        price: 19.99,
        inCart: 0
    },
    {
        name: "Cat",
        tag: "cat",
        price: 34.99,
        inCart: 0
    },
    {
        name: "Dachshund",
        tag: "dachshund",
        price: 34.99,
        inCart: 0
    },
    {
        name: "Bear",
        tag: "bear",
        price: 34.99,
        inCart: 0
    },
    {
        name: "Deer",
        tag: "deer",
        price: 34.99,
        inCart: 0
    },
    {
        name: "Bears in Pajamas",
        tag: "bears-in-pajamas",
        price: 29.99,
        inCart: 0
    },
    {
        name: "Mini Baby",
        tag: "mini-baby",
        price: 19.99,
        inCart: 0
    },
    {
        name: "Duck",
        tag: "duck",
        price: 29.99,
        inCart: 0
    },
    {
        name: "Tiger in Pajamas",
        tag: "tiger-in-pajamas",
        price: 34.99,
        inCart: 0
    },
    {
        name: "Bunny in Pajamas",
        tag: "bunny-in-pajamas",
        price: 39.99,
        inCart: 0
    },
    {
        name: "Hedgehog",
        tag: "hedgehog",
        price: 34.99,
        inCart: 0
    },
    {
        name: "Lion With Mane",
        tag: "lion-with-mane",
        price: 39.99,
        inCart: 0
    },
    {
        name: "Mini Dino",
        tag: "mini-dino",
        price: 19.99,
        inCart: 0
    },
    {
        name: "Giraffe in Overalls",
        tag: "giraffe-in-overalls",
        price: 49.99,
        inCart: 0
    },
    {
        name: "Kitten 2",
        tag: "kitten-2",
        price: 29.99,
        inCart: 0
    },
    {
        name: "Bear in Tie",
        tag: "bear-in-tie",
        price: 34.99,
        inCart: 0
    },
    {
        name: "Fox",
        tag: "fox",
        price: 34.99,
        inCart: 0
    },
    {
        name: "Horse",
        tag: "horse",
        price: 34.99,
        inCart: 0
    },
    {
        name: "Lion Without Mane",
        tag: "lion-without-mane",
        price: 34.99,
        inCart: 0
    },
    {
        name: "Mini Hamster",
        tag: "mini-hamster",
        price: 19.99,
        inCart: 0
    },
    {
        name: "Elephant",
        tag: "elephant",
        price: 34.99,
        inCart: 0
    }, 
   {
        name: "Lion",
        tag: "lion",
        price: 34.99,
        inCart: 0
    },

    {
        name: "Tiger",
        tag: "tiger",
        price: 34.99,
        inCart: 0
    },
    {
        name: "Dog",
        tag: "dog",
        price: 34.99,
        inCart: 0
    },
    { // Home Decor Section
        name: "Bear Eyeglass Holder",
        tag: "bear-eyeglass-holder",
        price: 19.99,
        inCart: 0
    },
    {
        name: "Cactus LOVE set",
        tag: "cactus-love-set",
        price: 19.99,
        inCart: 0
    },
    {
        name: "Purple Flower Coasters",
        tag: "purple-flower-coasters",
        price: 19.99,
        inCart: 0
    },
    {
        name: "Cat Butt Coasters",
        tag: "cat-butt-coasters",
        price: 19.99,
        inCart: 0
    },
    {
        name: "Lemon Coasters",
        tag: "lemon-coasters",
        price: 19.99,
        inCart: 0
    },
    {
        name: "Tulip Coasters",
        tag: "tulip-coasters",
        price: 19.99,
        inCart: 0
    },
    {
        name: "Sunflower Coasters",
        tag: "sunflower-coasters",
        price: 19.99,
        inCart: 0
    },
    {
        name: "Animal Pack Coasters 4pcs",
        tag: "animal-pack-coasters-4pcs",
        price: 19.99,
        inCart: 0
    },
    {
        name: "Rainbow and Coaster Holder",
        tag: "rainbow-and-coaster-holder",
        price: 19.99,
        inCart: 0
    },
    {
        name: "Cat Bouquet Coaster",
        tag: "cat-bouquet-coaster",
        price: 19.99,
        inCart: 0
    },
    {
        name: "Pink Rose Flower Coasters",
        tag: "pink-rose-flower-coasters",
        price: 19.99,
        inCart: 0
    },
    {
        name: "Red Rose Flower Coasters",
        tag: "red-rose-flower-coasters",
        price: 19.99,
        inCart: 0
    },
    {
        name: "White Rose Coasters",
        tag: "white-rose-coasters",
        price: 19.99,
        inCart: 0
    },
    {
        name: "Cheeseburger Coasters",
        tag: "cheeseburger-coasters",
        price: 21.99,
        inCart: 0
    },
    {
        name: "Turtle Coasters",
        tag: "turtle-coasters",
        price: 19.99,
        inCart: 0
    },
    {
        name: "Multi Color Rose Coasters",
        tag: "multi-color-rose-coasters",
        price: 19.99,
        inCart: 0
    },
    {
        name: "Star Pillow",
        tag: "star-pillow",
        price: 29.99,
        inCart: 0
    },
    {
        name: "Banana Pillow",
        tag: "banana-pillow",
        price: 39.99,
        inCart: 0
    },
    {
        name: "Olive Pillow",
        tag: "olive-pillow",
        price: 39.99,
        inCart: 0
    },
    {
        name: "Tea Cup Pillow",
        tag: "tea-cup-pillow",
        price: 39.99,
        inCart: 0
    },
    {
        name: "Cactus Ball Pillow",
        tag: "cactus-ball-pillow",
        price: 34.99,
        inCart: 0
    },
    {
        name: "Tulip Pillow",
        tag: "tulip-pillow",
        price: 34.99,
        inCart: 0
    },
    {
        name: "Cactus Pillow",
        tag: "cactus-pillow",
        price: 34.99,
        inCart: 0
    },
    {
        name: "Sun Pillow",
        tag: "sun-pillow",
        price: 39.99,
        inCart: 0
    },
    {
        name: "Knot Pillow",
        tag: "knot-pillow",
        price: 34.99,
        inCart: 0
    },
    {
        name: "Pumpkin Pillow",
        tag: "pumpkin-pillow",
        price: 34.99,
        inCart: 0
    },
    {
        name: "Shell Pillow",
        tag: "shell-pillow",
        price: 44.99,
        inCart: 0
    },
    {
        name: "Bow Pillow",
        tag: "bow-pillow",
        price: 34.99,
        inCart: 0
    },
    {
        name: "Pretzel Pillow",
        tag: "pretzel-pillow",
        price: 34.99,
        inCart: 0
    },
    {
        name: "Monkey Pillow",
        tag: "monkey-pillow",
        price: 39.99,
        inCart: 0
    },
    {
        name: "Coffee Mug Pillow",
        tag: "coffee-mug-pillow",
        price: 39.99,
        inCart: 0
    },
    {
        name: "Heart Tapestry Pillow",
        tag: "heart-tapestry-pillow",
        price: 34.99,
        inCart: 0
    },
    {
        name: "Long Animal Plush Pillow",
        tag: "long-animal-plush-pillow",
        price: 34.99,
        inCart: 0
    },
    {
        name: "Large Pencil Pillow",
        tag: "large-pencil-pillow",
        price: 39.99,
        inCart: 0
    },
    {
        name: "Sleeping Cat Pillow",
        tag: "sleeping-cat-pillow",
        price: 39.99,
        inCart: 0
    },
    {
        name: "Sleeping Star Pillow",
        tag: "sleeping-star-pillow",
        price: 29.99,
        inCart: 0
    },
    {
        name: "Blueberry Pillow",
        tag: "blueberry-pillow",
        price: 34.99,
        inCart: 0
    },
    {
        name: "Bunny Butt Pillow",
        tag: "bunny-butt-pillow",
        price: 39.99,
        inCart: 0
    },
    {
        name: "Bear Pillow",
        tag: "bear-pillow",
        price: 34.99,
        inCart: 0
    },
    {
        name: "Donut Pillow",
        tag: "donut-pillow",
        price: 34.99,
        inCart: 0
    },
    {
        name: "Flower Bubble Pillow",
        tag: "flower-bubble-pillow",
        price: 39.99,
        inCart: 0
    },
    {
        name: "Leaf Pillow",
        tag: "leaf-pillow",
        price: 34.99,
        inCart: 0
    },
    {
        name: "Animal Pillow",
        tag: "animal-pillow",
        price: 39.99,
        inCart: 0
    },
    {
        name: "Flower Shaped Pillow",
        tag: "flower-shaped-pillow",
        price: 34.99,
        inCart: 0
    },
    {
        name: "Striped Pillow",
        tag: "striped-pillow",
        price: 39.99,
        inCart: 0
    },
    {
        name: "Apple Pillow",
        tag: "apple-pillow",
        price: 34.99,
        inCart: 0
    },
    {
        name: "Granny Square Pillow",
        tag: "granny-square-pillow",
        price: 39.99,
        inCart: 0
    },
    {
        name: "Strawberry Pillow",
        tag: "strawberry-pillow",
        price: 34.99,
        inCart: 0
    },
    {
        name: "Critter pots",
        tag: "critter-pots",
        price: 24.99,
        inCart: 0
    },
    { // Keychains Section
        name: "Emoji Keychain",
        tag: "emoji-keychain",
        price: 19.99,
        inCart: 0
    },
    {
        name: "Turtle Keychain",
        tag: "turtle-keychain",
        price: 19.99,
        inCart: 0
    },
    {
        name: "Octopus Keychain",
        tag: "octopus-keychain",
        price: 19.99,
        inCart: 0
    },
    {
        name: "Hedgehog Keychain",
        tag: "hedgehog-keychain",
        price: 19.99,
        inCart: 0
    },
    {
        name: "Avocado Keychain",
        tag: "avocado-keychain",
        price: 19.99,
        inCart: 0
    },
    {
        name: "Whale Keychain",
        tag: "whale-keychain",
        price: 19.99,
        inCart: 0
    },
    {
        name: "Snake Keychain",
        tag: "snake-keychain",
        price: 19.99,
        inCart: 0
    },
    {
        name: "Frog Keychain",
        tag: "frog-keychain",
        price: 19.99,
        inCart: 0
    },
    {
        name: "Cherry Keychain",
        tag: "cherry-keychain",
        price: 19.99,
        inCart: 0
    },
    {
        name: "Bear Keychain",
        tag: "bear-keychain",
        price: 19.99,
        inCart: 0
    },
    {
        name: "Bunny Keychain",
        tag: "bunny-keychain",
        price: 19.99,
        inCart: 0
    },
    {
        name: "Duck Keychain",
        tag: "duck-keychain",
        price: 19.99,
        inCart: 0
    },
    {
        name: "Kitten Keychain",
        tag: "kitten-keychain",
        price: 19.99,
        inCart: 0
    },
    {
        name: "Sloth Keychains",
        tag: "sloth-keychain",
        price: 19.99,
        inCart: 0
    },
    {
        name: "Chiwawa Keychain",
        tag: "chiwawa-keychain",
        price: 19.99,
        inCart: 0
    },
    // --- NEW BAG PRODUCTS ADDED BELOW ---
    {
        name: "XXL Size Tote Bag",
        tag: "xxl-size-tote-bag",
        price: 79.99,
        inCart: 0
    },
    {
        name: "Sunflower Granny Square Tote Bag",
        tag: "sunflower-granny-square-tote-bag",
        price: 59.99,
        inCart: 0
    },
    {
        name: "Bucket Backpack",
        tag: "bucket-backpack",
        price: 59.99,
        inCart: 0
    },
    {
        name: "Sunflower Granny Square Backpack",
        tag: "sunflower-granny-square-backpack",
        price: 59.99,
        inCart: 0
    },
    {
        name: "Granny Square Starburst Tote Bag",
        tag: "granny-square-starburst-tote-bag",
        price: 59.99,
        inCart: 0
    },
    {
        name: "Orange Fruit Granny Square Tote Bag",
        tag: "orange-fruit-granny-square-tote-bag",
        price: 59.99,
        inCart: 0
    },
    {
        name: "Frog Backpack",
        tag: "frog-backpack",
        price: 59.99,
        inCart: 0
    },
    {
        name: "Strawberry Granny Square Bag",
        tag: "strawberry-granny-square-bag",
        price: 59.99,
        inCart: 0
    },
    {
        name: "Pink Heart Granny Square Bag",
        tag: "pink-heart-granny-square-bag",
        price: 59.99,
        inCart: 0
    },
    {
        name: "Sun, Moon, and Star Granny Square Bag",
        tag: "sun-moon-and-star-granny-square-bag",
        price: 59.99,
        inCart: 0
    },
    {
        name: "Turtle Granny Square Bag",
        tag: "turtle-granny-square-bag",
        price: 59.99,
        inCart: 0
    },
    {
        name: "Lemon Granny Square Bag",
        tag: "lemon-granny-square-bag",
        price: 59.99,
        inCart: 0
    },
    {
        name: "Bunny Backpack",
        tag: "bunny-backpack",
        price: 59.99,
        inCart: 0
    },
    {
        name: "Giraffe Bag",
        tag: "giraffe-bag",
        price: 49.99,
        inCart: 0
    },
    {
        name: "Mushroom & Strawberry Frog Tote Bag",
        tag: "mushroom-strawberry-frog-tote-bag",
        price: 49.99,
        inCart: 0
    },
    {
        name: "Apple Bag",
        tag: "apple-bag",
        price: 49.99,
        inCart: 0
    },
    {
        name: "Frog Phone Bag",
        tag: "frog-phone-bag",
        price: 49.99,
        inCart: 0
    },
    {
        name: "Pink Lily Flower Crochet Bag",
        tag: "pink-lily-flower-crochet-bag",
        price: 49.99,
        inCart: 0
    },
    {
        name: "Market Tote Bag",
        tag: "market-tote-bag",
        price: 49.99,
        inCart: 0
    },
    {
        name: "Chicken Crossbody Bag",
        tag: "chicken-crossbody-bag",
        price: 39.99,
        inCart: 0
    },
    {
        name: "Animal Folding Shopping Bag",
        tag: "animal-folding-shopping-bag",
        price: 39.99,
        inCart: 0
    },
    {
        name: "Goose Tote Bag",
        tag: "goose-tote-bag",
        price: 39.99,
        inCart: 0
    },
    {
        name: "Turtle Plush with Pouch",
        tag: "turtle-plush-with-pouch",
        price: 39.99,
        inCart: 0
    },
    {
        name: "3 Compartment Messenger Bag",
        tag: "3-compartment-messenger-bag",
        price: 39.99,
        inCart: 0
    },
    {
        name: "Seashell Crossbody Bag",
        tag: "seashell-crossbody-bag",
        price: 34.99,
        inCart: 0
    },
    {
        name: "Small Orange Fruit Backpack",
        tag: "small-orange-fruit-backpack",
        price: 34.99,
        inCart: 0
    },
    {
        name: "Small Cotton Hobo Bag",
        tag: "small-cotton-hobo-bag",
        price: 34.99,
        inCart: 0
    },
    {
        name: "Small Mushroom Pouch",
        tag: "small-mushroom-pouch",
        price: 34.99,
        inCart: 0
    },
    {
        name: "Small One Eyed Monster Bag",
        tag: "small-one-eyed-monster-bag",
        price: 34.99,
        inCart: 0
    },
    {
        name: "Small Dino Fanny Pack",
        tag: "small-dino-fanny-pack",
        price: 34.99,
        inCart: 0
    },
    {
        name: "Small Camellia Flower Bag",
        tag: "small-camellia-flower-bag",
        price: 34.99,
        inCart: 0
    },
    {
        name: "Small Crossbody Long Leg Frog Phone Bag",
        tag: "small-crossbody-long-leg-frog-phone-bag",
        price: 34.99,
        inCart: 0
    },
    {
        name: "Small Rose Pouch",
        tag: "small-rose-pouch",
        price: 34.99,
        inCart: 0
    }
];

// --- Animation Function ---
function animateToCart(buttonElement) {
    const cartIcon = document.querySelector('#navbar .cart a'); // Get the target cart icon element

    if (!cartIcon) {
        console.warn("Cart icon not found for animation. Skipping animation.");
        return;
    }

    const startRect = buttonElement.getBoundingClientRect(); // Position of the 'Add to Cart' button
    const endRect = cartIcon.getBoundingClientRect(); // Position of the cart icon

    // Create a temporary element for the animation
    const flyingItem = document.createElement('span'); // Changed to span for text
    flyingItem.classList.add('flying-cart-item'); // Keep class for potential external CSS or debugging
    flyingItem.textContent = 'Add Cart'; // Set the text content

    flyingItem.style.position = 'fixed';
    flyingItem.style.zIndex = '9999'; // Ensure it's on top of everything
    flyingItem.style.color = '#DAA06D'; // Set the text color
    flyingItem.style.fontWeight = 'bold'; // Make the text bolder
    flyingItem.style.fontSize = '18px'; // Adjust font size as needed for visibility
    flyingItem.style.whiteSpace = 'nowrap'; // Prevent text from wrapping
    flyingItem.style.opacity = '1';
    flyingItem.style.transition = 'all 0.7s ease-in-out'; // Animation duration and easing

    document.body.appendChild(flyingItem);

    // Get the actual width/height of the text after it's in the DOM
    // This is crucial for accurate centering of the text
    const itemWidth = flyingItem.offsetWidth;
    const itemHeight = flyingItem.offsetHeight;

    // Set initial position to the center of the 'Add to Cart' button
    flyingItem.style.top = `${startRect.top + startRect.height / 2 - itemHeight / 2}px`;
    flyingItem.style.left = `${startRect.left + startRect.width / 2 - itemWidth / 2}px`;

    // After a very short delay, trigger the transition
    // This delay ensures the element is rendered at the start position before transitioning
    setTimeout(() => {
        // Calculate the target position relative to its current (fixed) position
        // This makes the animation independent of scroll position
        const targetX = endRect.left + endRect.width / 2 - (startRect.left + startRect.width / 2);
        const targetY = endRect.top + endRect.height / 2 - (startRect.top + startRect.height / 2);

        // Move the text and shrink it to disappear
        flyingItem.style.transform = `translate(${targetX}px, ${targetY}px) scale(0)`;
        flyingItem.style.opacity = '0'; // Fade out
    }, 50); // Small delay to allow initial render

    // Remove the element after the animation completes
    setTimeout(() => {
        flyingItem.remove();
    }, 700); // This should match the transition duration (0.7s)
}

// --- PRODUCT DETAIL PAGE CART BUTTON LISTENER (for product_detail.html) ---
document.addEventListener('DOMContentLoaded', () => {
    const productDetailPageAddToCartBtn = document.getElementById('add-to-cart-btn');
    const productQuantityInput = document.getElementById('product-quantity');
    const prodetailsSection = document.getElementById('prodetails');

    if (productDetailPageAddToCartBtn && productQuantityInput && prodetailsSection) {
        // Get the product tag for this specific page
        const productTagOnPage = prodetailsSection.dataset.productTag;

        // Find the full product object from our 'products' array
        const currentProduct = products.find(p => p.tag === productTagOnPage);

        if (currentProduct) {
            productDetailPageAddToCartBtn.addEventListener('click', (event) => {
                event.preventDefault();

                const quantity = parseInt(productQuantityInput.value);

                if (quantity > 0) {
                    // Update cart numbers and total first
                    cartNumbers(currentProduct, null, quantity);
                    totalCost(currentProduct, null, quantity);

                    // THEN, trigger the animation
                    animateToCart(productDetailPageAddToCartBtn); // Call the animation function
                } else {
                    alert('Please enter a valid quantity (at least 1).');
                }
            });
        } else {
            console.error("Current product not found in 'products' array for tag:", productTagOnPage);
        }
    }

    // Call onLoadCartNumbers on DOMContentLoaded for all pages that link main.js
    onLoadCartNumbers();

    // Call displayCart if on the cart page (based on element presence, assuming cart.html has .products)
    if (document.querySelector('.products')) {
        displayCart();
    }
});


// Function to update the cart numbers displayed in the header
function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');
    if (productNumbers) {
        document.querySelector('.cart span').textContent = productNumbers;
    } else {
        document.querySelector('.cart span').textContent = 0; // Ensure it shows 0 if empty
    }
}

// MODIFIED: No longer accepts size parameter
function cartNumbers(product, action, quantity = 1) {
    let productNumbers = parseInt(localStorage.getItem('cartNumbers') || 0);

    if (action === "decrease") {
        localStorage.setItem("cartNumbers", productNumbers - quantity); // Decrement by specific quantity
        document.querySelector('.cart span').textContent = productNumbers - quantity;
    } else {
        localStorage.setItem("cartNumbers", productNumbers + quantity); // Increment by specific quantity
        document.querySelector('.cart span').textContent = productNumbers + quantity;
    }
    setItems(product, quantity); // Pass quantity, removed size
}

// MODIFIED: No longer accepts size parameter, uses product.tag as unique key
function setItems(product, quantity) {
    let cartItems = JSON.parse(localStorage.getItem('productsInCart')) || {}; // Initialize as empty object if null
    // Unique key is now just the product tag, as there's no size variation
    const uniqueCartKey = product.tag;

    if(cartItems[uniqueCartKey]) {
        cartItems[uniqueCartKey].inCart += quantity; // Increment by the added quantity
    } else {
        // Create a new cart item object without size property
        cartItems[uniqueCartKey] = {
            name: product.name,
            tag: product.tag,
            price: product.price,
            inCart: quantity // Set initial quantity from input
        };
    }

    localStorage.setItem('productsInCart', JSON.stringify(cartItems));
}

// Function to update the total cost of items in the cart (no change here)
function totalCost(product, action, quantity = 1) {
    let cartCost = parseFloat(localStorage.getItem("totalCost") || 0); // Use parseFloat for decimal prices

    if (action === "decrease") {
        localStorage.setItem("totalCost", cartCost - (product.price * quantity));
    } else {
        localStorage.setItem("totalCost", cartCost + (product.price * quantity));
    }
}

// Function to display items in the cart on the cart.html page
function displayCart() {
    let cartItems = JSON.parse(localStorage.getItem('productsInCart'));
    let cartTotal = parseFloat(localStorage.getItem("totalCost") || 0); // Use parseFloat

    let productContainer = document.querySelector('.products');
    let basketTotalElement = document.querySelector('.basketTotal'); // Get the element that displays the total
    let checkoutButtonContainer = document.querySelector('.checkout-button-container'); // Get the checkout button container

    if (cartItems && productContainer) {
        productContainer.innerHTML = ''; // Clear existing content before rendering

        // Check if cart is empty after parsing and before iterating
        if (Object.keys(cartItems).length === 0) {
            productContainer.innerHTML = '<p style="text-align: center; margin-top: 50px; font-size: 1.2rem; color: #777;">Your cart is empty. Why not add some lovely items?</p>';
            if (basketTotalElement) {
                basketTotalElement.textContent = '$0.00'; // Update total to 0
            }
            if (checkoutButtonContainer) {
                checkoutButtonContainer.style.display = 'none'; // Hide checkout button
            }
        } else {
            if (checkoutButtonContainer) {
                checkoutButtonContainer.style.display = 'block'; // Show checkout button if cart has items
            }

            Object.values(cartItems).map((item) => {
                // Unique key is now just the product tag
                const uniqueDataTag = item.tag;
                productContainer.innerHTML +=
                `<div class="cart-product-row">
                    <div class="product" data-tag="${uniqueDataTag}">
                        <ion-icon name="close-circle" data-tag="${uniqueDataTag}"></ion-icon>
                        <img src="./img/${item.tag}.webp" />
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
            // Update the existing total element
            if (basketTotalElement) {
                basketTotalElement.textContent = `$${cartTotal.toFixed(2)}`;
            }

            deleteButtons();
            manageQuantity();
        }
    }
}

// Function to manage quantity increase/decrease buttons in the cart
function manageQuantity() {
    let decreaseButtons = document.querySelectorAll('.decrease');
    let increaseButtons = document.querySelectorAll('.increase');
    let cartItems = JSON.parse(localStorage.getItem('productsInCart'));

    for (let i = 0; i < increaseButtons.length; i++) {
        decreaseButtons[i].addEventListener('click', () => {
            let productUniqueTag = decreaseButtons[i].dataset.tag; // Get the unique tag (now just tag)
            let currentItem = cartItems[productUniqueTag];

            if (currentItem && currentItem.inCart > 1) {
                currentItem.inCart -= 1;
                cartNumbers(currentItem, "decrease", 1); // Decrease by 1, no size param
                totalCost(currentItem, "decrease", 1); // Decrease cost by 1 item's price
                localStorage.setItem('productsInCart', JSON.stringify(cartItems));
                displayCart(); // Re-render cart to show updated quantities/totals
            }
        });

        increaseButtons[i].addEventListener('click', () => {
            let productUniqueTag = increaseButtons[i].dataset.tag; // Get the unique tag (now just tag)
            let currentItem = cartItems[productUniqueTag];

            if (currentItem) {
                currentItem.inCart += 1;
                cartNumbers(currentItem, null, 1); // Increase by 1, no size param
                totalCost(currentItem, currentItem, 1); // Increase cost by 1 item's price
                localStorage.setItem('productsInCart', JSON.stringify(cartItems));
                displayCart(); // Re-render cart to show updated quantities/totals
            }
        });
    }
}

// Function to handle deleting items from the cart
function deleteButtons() {
    let deleteButtons = document.querySelectorAll('.product ion-icon[name="close-circle"]');
    let cartItems = JSON.parse(localStorage.getItem('productsInCart'));

    for (let i = 0; i < deleteButtons.length; i++) {
        deleteButtons[i].addEventListener('click', () => {
            let productUniqueTag = deleteButtons[i].dataset.tag; // Get the unique tag (now just tag)
            let itemToDelete = cartItems[productUniqueTag];

            if (itemToDelete) {
                let productNumbers = parseInt(localStorage.getItem('cartNumbers') || 0);
                let cartCost = parseFloat(localStorage.getItem("totalCost") || 0);

                localStorage.setItem('cartNumbers', productNumbers - itemToDelete.inCart);
                localStorage.setItem('totalCost', cartCost - (itemToDelete.price * itemToDelete.inCart));

                delete cartItems[productUniqueTag]; // Remove the item from the cart object
                localStorage.setItem('productsInCart', JSON.stringify(cartItems));
            }

            displayCart();
            onLoadCartNumbers();
        })
    }
}

// Initial calls
onLoadCartNumbers();
// displayCart(); // This line is commented out as it's handled by DOMContentLoaded check now