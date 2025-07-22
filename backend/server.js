// backend/server.js

const express = require('express');
const cors = require('cors'); // Import the cors middleware
const app = express();
const port = 3000; // You can choose any available port

// --- Product Data from your cart.js ---
// Each product now has an 'id' property, which is its 'tag' value.
// The 'inCart' property is specific to the frontend cart state and should NOT be stored here.
const products = [
    { id: "stork", name: "Stork", price: 34.99, tag: "stork" },
    { id: "racoon", name: "Racoon", price: 34.99, tag: "racoon" },
    { id: "panda", name: "Panda", price: 34.99, tag: "panda" },
    { id: "unicorn", name: "Unicorn", price: 34.99, tag: "unicorn" },
    { id: "koala", name: "Koala", price: 34.99, tag: "koala" },
    { id: "monkey", name: "Monkey", price: 34.99, tag: "monkey" },
    { id: "donkey", name: "Donkey", price: 34.99, tag: "donkey" },
    { id: "giraffe", name: "Giraffe", price: 34.99, tag: "giraffe" },
    { id: "mini-bear", name: "Mini Bear", price: 19.99, tag: "mini-bear" },
    { id: "gnome", name: "Gnome", price: 34.99, tag: "gnome" },
    { id: "mini-jellyfish", name: "Mini Jellyfish", price: 19.99, tag: "mini-jellyfish" },
    { id: "mini-owl", name: "Mini Owl", price: 19.99, tag: "mini-owl" },
    { id: "cow", name: "Cow", price: 34.99, tag: "cow" },
    { id: "penguin", name: "Penguin", price: 34.99, tag: "penguin" },
    { id: "mini-hippo", name: "Mini Hippo", price: 19.99, tag: "mini-hippo" },
    { id: "kitten", name: "Kitten", price: 34.99, tag: "kitten" },
    { id: "mini-bunny", name: "Mini Bunny", price: 19.99, tag: "mini-bunny" },
    { id: "standing-puppy", name: "Standing Puppy", price: 34.99, tag: "standing-puppy" },
    { id: "large-rabbit", name: "Large Rabbit", price: 49.99, tag: "large-rabbit" },
    { id: "mini-puppy", name: "Mini Puppy", price: 19.99, tag: "mini-puppy" },
    { id: "bunny-in-overall", name: "Bunny In Overall", price: 49.99, tag: "bunny-in-overall" },
    { id: "mini-goose", name: "Mini Goose", price: 19.99, tag: "mini-goose" },
    { id: "bunny-in-tutu", name: "Bunny in Tutu", price: 34.99, tag: "bunny-in-tutu" },
    { id: "baby-doll", name: "Baby Doll", price: 34.99, tag: "baby-doll" },
    { id: "dachshund-keychain", name: "Dachshund Keychain", price: 19.99, tag: "dachshund-keychain" },
    { id: "cat", name: "Cat", price: 34.99, tag: "cat" },
    { id: "dachshund", name: "Dachshund", price: 34.99, tag: "dachshund" },
    { id: "bear", name: "Bear", price: 34.99, tag: "bear" },
    { id: "deer", name: "Deer", price: 34.99, tag: "deer" },
    { id: "bears-in-pajamas", name: "Bears in Pajamas", price: 29.99, tag: "bears-in-pajamas" },
    { id: "mini-baby", name: "Mini Baby", price: 19.99, tag: "mini-baby" },
    { id: "duck", name: "Duck", price: 29.99, tag: "duck" },
    { id: "tiger-in-pajamas", name: "Tiger in Pajamas", price: 34.99, tag: "tiger-in-pajamas" },
    { id: "bunny-in-pajamas", name: "Bunny in Pajamas", price: 39.99, tag: "bunny-in-pajamas" },
    { id: "hedgehog", name: "Hedgehog", price: 34.99, tag: "hedgehog" },
    { id: "lion-with-mane", name: "Lion With Mane", price: 39.99, tag: "lion-with-mane" },
    { id: "mini-dino", name: "Mini Dino", price: 19.99, tag: "mini-dino" },
    { id: "giraffe-in-overalls", name: "Giraffe in Overalls", price: 49.99, tag: "giraffe-in-overalls" },
    { id: "kitten-2", name: "Kitten 2", price: 29.99, tag: "kitten-2" },
    { id: "bear-in-tie", name: "Bear in Tie", price: 34.99, tag: "bear-in-tie" },
    { id: "fox", name: "Fox", price: 34.99, tag: "fox" },
    { id: "horse", name: "Horse", price: 34.99, tag: "horse" },
    { id: "lion-without-mane", name: "Lion Without Mane", price: 34.99, tag: "lion-without-mane" },
    { id: "mini-hamster", name: "Mini Hamster", price: 19.99, tag: "mini-hamster" },
    { id: "elephant", name: "Elephant", price: 34.99, tag: "elephant" },
    { id: "lion", name: "Lion", price: 34.99, tag: "lion" },
    { id: "tiger", name: "Tiger", price: 34.99, tag: "tiger" },
    { id: "dog", name: "Dog", price: 34.99, tag: "dog" },
    { id: "bear-eyeglass-holder", name: "Bear Eyeglass Holder", price: 19.99, tag: "bear-eyeglass-holder" },
    { id: "cactus-love-set", name: "Cactus LOVE set", price: 19.99, tag: "cactus-love-set" },
    { id: "purple-flower-coasters", name: "Purple Flower Coasters", price: 19.99, tag: "purple-flower-coasters" },
    { id: "cat-butt-coasters", name: "Cat Butt Coasters", price: 19.99, tag: "cat-butt-coasters" },
    { id: "lemon-coasters", name: "Lemon Coasters", price: 19.99, tag: "lemon-coasters" },
    { id: "tulip-coasters", name: "Tulip Coasters", price: 19.99, tag: "tulip-coasters" },
    { id: "sunflower-coasters", name: "Sunflower Coasters", price: 19.99, tag: "sunflower-coasters" },
    { id: "animal-pack-coasters-4pcs", name: "Animal Pack Coasters 4pcs", price: 19.99, tag: "animal-pack-coasters-4pcs" },
    { id: "rainbow-and-coaster-holder", name: "Rainbow and Coaster Holder", price: 19.99, tag: "rainbow-and-coaster-holder" },
    { id: "cat-bouquet-coaster", name: "Cat Bouquet Coaster", price: 19.99, tag: "cat-bouquet-coaster" },
    { id: "pink-rose-flower-coasters", name: "Pink Rose Flower Coasters", price: 19.99, tag: "pink-rose-flower-coasters" },
    { id: "red-rose-flower-coasters", name: "Red Rose Flower Coasters", price: 19.99, tag: "red-rose-flower-coasters" },
    { id: "white-rose-coasters", name: "White Rose Coasters", price: 19.99, tag: "white-rose-coasters" },
    { id: "cheeseburger-coasters", name: "Cheeseburger Coasters", price: 21.99, tag: "cheeseburger-coasters" },
    { id: "turtle-coasters", name: "Turtle Coasters", price: 19.99, tag: "turtle-coasters" },
    { id: "multi-color-rose-coasters", name: "Multi Color Rose Coasters", price: 19.99, tag: "multi-color-rose-coasters" },
    { id: "star-pillow", name: "Star Pillow", price: 29.99, tag: "star-pillow" },
    { id: "banana-pillow", name: "Banana Pillow", price: 39.99, tag: "banana-pillow" },
    { id: "olive-pillow", name: "Olive Pillow", price: 39.99, tag: "olive-pillow" },
    { id: "tea-cup-pillow", name: "Tea Cup Pillow", price: 39.99, tag: "tea-cup-pillow" },
    { id: "cactus-ball-pillow", name: "Cactus Ball Pillow", price: 34.99, tag: "cactus-ball-pillow" },
    { id: "tulip-pillow", name: "Tulip Pillow", price: 34.99, tag: "tulip-pillow" },
    { id: "cactus-pillow", name: "Cactus Pillow", price: 34.99, tag: "cactus-pillow" },
    { id: "sun-pillow", name: "Sun Pillow", price: 39.99, tag: "sun-pillow" },
    { id: "knot-pillow", name: "Knot Pillow", price: 34.99, tag: "knot-pillow" },
    { id: "pumpkin-pillow", name: "Pumpkin Pillow", price: 34.99, tag: "pumpkin-pillow" },
    { id: "shell-pillow", name: "Shell Pillow", price: 44.99, tag: "shell-pillow" },
    { id: "bow-pillow", name: "Bow Pillow", price: 34.99, tag: "bow-pillow" },
    { id: "pretzel-pillow", name: "Pretzel Pillow", price: 34.99, tag: "pretzel-pillow" },
    { id: "monkey-pillow", name: "Monkey Pillow", price: 39.99, tag: "monkey-pillow" },
    { id: "coffee-mug-pillow", name: "Coffee Mug Pillow", price: 39.99, tag: "coffee-mug-pillow" },
    { id: "heart-tapestry-pillow", name: "Heart Tapestry Pillow", price: 34.99, tag: "heart-tapestry-pillow" },
    { id: "long-animal-plush-pillow", name: "Long Animal Plush Pillow", price: 34.99, tag: "long-animal-plush-pillow" },
    { id: "large-pencil-pillow", name: "Large Pencil Pillow", price: 39.99, tag: "large-pencil-pillow" },
    { id: "sleeping-cat-pillow", name: "Sleeping Cat Pillow", price: 39.99, tag: "sleeping-cat-pillow" },
    { id: "sleeping-star-pillow", name: "Sleeping Star Pillow", price: 29.99, tag: "sleeping-star-pillow" },
    { id: "blueberry-pillow", name: "Blueberry Pillow", price: 34.99, tag: "blueberry-pillow" },
    { id: "bunny-butt-pillow", name: "Bunny Butt Pillow", price: 39.99, tag: "bunny-butt-pillow" },
    { id: "bear-pillow", name: "Bear Pillow", price: 34.99, tag: "bear-pillow" },
    { id: "donut-pillow", name: "Donut Pillow", price: 34.99, tag: "donut-pillow" },
    { id: "flower-bubble-pillow", name: "Flower Bubble Pillow", price: 39.99, tag: "flower-bubble-pillow" },
    { id: "leaf-pillow", name: "Leaf Pillow", price: 34.99, tag: "leaf-pillow" },
    { id: "animal-pillow", name: "Animal Pillow", price: 39.99, tag: "animal-pillow" },
    { id: "flower-shaped-pillow", name: "Flower Shaped Pillow", price: 34.99, tag: "flower-shaped-pillow" },
    { id: "striped-pillow", name: "Striped Pillow", price: 39.99, tag: "striped-pillow" },
    { id: "apple-pillow", name: "Apple Pillow", price: 34.99, tag: "apple-pillow" },
    { id: "granny-square-pillow", name: "Granny Square Pillow", price: 39.99, tag: "granny-square-pillow" },
    { id: "strawberry-pillow", name: "Strawberry Pillow", price: 34.99, tag: "strawberry-pillow" },
    { id: "critter-pots", name: "Critter pots", price: 24.99, tag: "critter-pots" },
    { id: "emoji-keychain", name: "Emoji Keychain", price: 19.99, tag: "emoji-keychain" },
    { id: "turtle-keychain", name: "Turtle Keychain", price: 19.99, tag: "turtle-keychain" },
    { id: "octopus-keychain", name: "Octopus Keychain", price: 19.99, tag: "octopus-keychain" },
    { id: "hedgehog-keychain", name: "Hedgehog Keychain", price: 19.99, tag: "hedgehog-keychain" },
    { id: "avocado-keychain", name: "Avocado Keychain", price: 19.99, tag: "avocado-keychain" },
    { id: "whale-keychain", name: "Whale Keychain", price: 19.99, tag: "whale-keychain" },
    { id: "snake-keychain", name: "Snake Keychain", price: 19.99, tag: "snake-keychain" },
    { id: "frog-keychain", name: "Frog Keychain", price: 19.99, tag: "frog-keychain" },
    { id: "cherry-keychain", name: "Cherry Keychain", price: 19.99, tag: "cherry-keychain" },
    { id: "bear-keychain", name: "Bear Keychain", price: 19.99, tag: "bear-keychain" },
    { id: "bunny-keychain", name: "Bunny Keychain", price: 19.99, tag: "bunny-keychain" },
    { id: "duck-keychain", name: "Duck Keychain", price: 19.99, tag: "duck-keychain" },
    { id: "kitten-keychain", name: "Kitten Keychain", price: 19.99, tag: "kitten-keychain" },
    { id: "sloth-keychain", name: "Sloth Keychains", price: 19.99, tag: "sloth-keychain" },
    { id: "chiwawa-keychain", name: "Chiwawa Keychain", price: 19.99, tag: "chiwawa-keychain" },
    { id: "xxl-size-tote-bag", name: "XXL Size Tote Bag", price: 79.99, tag: "xxl-size-tote-bag" },
    { id: "sunflower-granny-square-tote-bag", name: "Sunflower Granny Square Tote Bag", price: 59.99, tag: "sunflower-granny-square-tote-bag" },
    { id: "bucket-backpack", name: "Bucket Backpack", price: 59.99, tag: "bucket-backpack" },
    { id: "sunflower-granny-square-backpack", name: "Sunflower Granny Square Backpack", price: 59.99, tag: "sunflower-granny-square-backpack" },
    { id: "granny-square-starburst-tote-bag", name: "Granny Square Starburst Tote Bag", price: 59.99, tag: "granny-square-starburst-tote-bag" },
    { id: "orange-fruit-granny-square-tote-bag", name: "Orange Fruit Granny Square Tote Bag", price: 59.99, tag: "orange-fruit-granny-square-tote-bag" },
    { id: "frog-backpack", name: "Frog Backpack", price: 59.99, tag: "frog-backpack" },
    { id: "strawberry-granny-square-bag", name: "Strawberry Granny Square Bag", price: 59.99, tag: "strawberry-granny-square-bag" },
    { id: "pink-heart-granny-square-bag", name: "Pink Heart Granny Square Bag", price: 59.99, tag: "pink-heart-granny-square-bag" },
    { id: "sun-moon-and-star-granny-square-bag", name: "Sun, Moon, and Star Granny Square Bag", price: 59.99, tag: "sun-moon-and-star-granny-square-bag" },
    { id: "turtle-granny-square-bag", name: "Turtle Granny Square Bag", price: 59.99, tag: "turtle-granny-square-bag" },
    { id: "lemon-granny-square-bag", name: "Lemon Granny Square Bag", price: 59.99, tag: "lemon-granny-square-bag" },
    { id: "bunny-backpack", name: "Bunny Backpack", price: 59.99, tag: "bunny-backpack" },
    { id: "giraffe-bag", name: "Giraffe Bag", price: 49.99, tag: "giraffe-bag" },
    { id: "mushroom-strawberry-frog-tote-bag", name: "Mushroom & Strawberry Frog Tote Bag", price: 49.99, tag: "mushroom-strawberry-frog-tote-bag" },
    { id: "apple-bag", name: "Apple Bag", price: 49.99, tag: "apple-bag" },
    { id: "frog-phone-bag", name: "Frog Phone Bag", price: 49.99, tag: "frog-phone-bag" },
    { id: "pink-lily-flower-crochet-bag", name: "Pink Lily Flower Crochet Bag", price: 49.99, tag: "pink-lily-flower-crochet-bag" },
    { id: "market-tote-bag", name: "Market Tote Bag", price: 49.99, tag: "market-tote-bag" },
    { id: "chicken-crossbody-bag", name: "Chicken Crossbody Bag", price: 39.99, tag: "chicken-crossbody-bag" },
    { id: "animal-folding-shopping-bag", name: "Animal Folding Shopping Bag", price: 39.99, tag: "animal-folding-shopping-bag" },
    { id: "goose-tote-bag", name: "Goose Tote Bag", price: 39.99, tag: "goose-tote-bag" },
    { id: "turtle-plush-with-pouch", name: "Turtle Plush with Pouch", price: 39.99, tag: "turtle-plush-with-pouch" },
    { id: "3-compartment-messenger-bag", name: "3 Compartment Messenger Bag", price: 39.99, tag: "3-compartment-messenger-bag" },
    { id: "seashell-crossbody-bag", name: "Seashell Crossbody Bag", price: 34.99, tag: "seashell-crossbody-bag" },
    { id: "small-orange-fruit-backpack", name: "Small Orange Fruit Backpack", price: 34.99, tag: "small-orange-fruit-backpack" },
    { id: "small-cotton-hobo-bag", name: "Small Cotton Hobo Bag", price: 34.99, tag: "small-cotton-hobo-bag" },
    { id: "small-mushroom-pouch", name: "Small Mushroom Pouch", price: 34.99, tag: "small-mushroom-pouch" },
    { id: "small-one-eyed-monster-bag", name: "Small One Eyed Monster Bag", price: 34.99, tag: "small-one-eyed-monster-bag" },
    { id: "small-dino-fanny-pack", name: "Small Dino Fanny Pack", price: 34.99, tag: "small-dino-fanny-pack" },
    { id: "small-camellia-flower-bag", name: "Small Camellia Flower Bag", price: 34.99, tag: "small-camellia-flower-bag" },
    { id: "small-crossbody-long-leg-frog-phone-bag", name: "Small Crossbody Long Leg Frog Phone Bag", price: 34.99, tag: "small-crossbody-long-leg-frog-phone-bag" },
    { id: "small-rose-pouch", name: "Small Rose Pouch", price: 34.99, tag: "small-rose-pouch" }
];

// --- Middleware ---
// Enable CORS for all routes
app.use(cors());
// Enable parsing of JSON request bodies
app.use(express.json());

// --- API Endpoints ---

// GET /api/products
// Returns all product data
app.get('/api/products', (req, res) => {
    console.log('Fetching all products...');
    res.json(products);
});

// GET /api/products/:id
// Returns a single product by its ID (which is the 'tag' from your frontend)
app.get('/api/products/:id', (req, res) => {
    const productId = req.params.id;
    const product = products.find(p => p.id === productId); // Find by 'id' (which is the 'tag')

    if (product) {
        console.log(`Fetching product with ID: ${productId}`);
        res.json(product);
    } else {
        console.warn(`Product not found for ID: ${productId}`);
        res.status(404).send('Product not found');
    }
});

// --- Server Start ---
app.listen(port, () => {
    console.log(`Backend server listening at http://localhost:${port}`);
    console.log(`Product API available at http://localhost:${port}/api/products`);
});