 // JavaScript for checkout page logic
        const DELIVERY_FEE = 5.99; // Define the fixed delivery fee

        document.addEventListener('DOMContentLoaded', () => {
            onLoadCartNumbers(); // Keep cart count updated in header
            displayCheckoutCart();

            const checkoutForm = document.getElementById('checkoutForm');
            const paymentMethodRadios = document.querySelectorAll('input[name="paymentMethod"]');
            const creditCardDetails = document.getElementById('creditCardDetails');
            const digitalPaymentNote = document.getElementById('digitalPaymentNote');

            // Function to toggle display of payment sections and update input 'required' status
            function togglePaymentDetails() {
                const selectedMethod = document.querySelector('input[name="paymentMethod"]:checked')?.value;

                // Hide all payment detail sections and remove required attributes
                creditCardDetails.style.display = 'none';
                digitalPaymentNote.style.display = 'none';

                creditCardDetails.querySelectorAll('input').forEach(input => input.removeAttribute('required'));
                digitalPaymentNote.querySelectorAll('textarea').forEach(textarea => textarea.removeAttribute('required'));

                // Show the relevant section and add required attributes
                if (selectedMethod === 'Credit Card') {
                    creditCardDetails.style.display = 'block';
                    creditCardDetails.querySelectorAll('input').forEach(input => input.setAttribute('required', 'required'));
                } else if (selectedMethod && selectedMethod !== 'Credit Card') { // Any digital payment method
                    digitalPaymentNote.style.display = 'block';
                    digitalPaymentNote.querySelectorAll('textarea').forEach(textarea => textarea.setAttribute('required', 'required'));
                }
            }

            // Add event listeners to payment method radios
            paymentMethodRadios.forEach(radio => {
                radio.addEventListener('change', togglePaymentDetails);
            });

            // Call on initial load to set correct display based on default selection (or none)
            togglePaymentDetails();


            checkoutForm.addEventListener('submit', (event) => {
                // Populate hidden fields with cart data before submission
                const cartItemsJson = localStorage.getItem('productsInCart') || '{}';
                const totalCostFromLocalStorage = parseFloat(localStorage.getItem('totalCost') || '0');
                const grandTotal = totalCostFromLocalStorage + DELIVERY_FEE; // Calculate grand total

                document.getElementById('cartItemsJson').value = cartItemsJson;
                document.getElementById('totalCostInput').value = grandTotal.toFixed(2); // Send the GRAND total to PHP

                // The form will now naturally submit to process_order.php
                // No need for event.preventDefault() here unless you want to do AJAX submission
            });
        });

        // Function to update the cart numbers displayed in the header (reused from main.js logic)
        function onLoadCartNumbers() {
            let productNumbers = localStorage.getItem('cartNumbers');
            if (productNumbers) {
                document.querySelector('.cart span').textContent = productNumbers;
            } else {
                document.querySelector('.cart span').textContent = 0; // Ensure it shows 0 if empty
            }
        }

        // Function to display items in the cart on the checkout page
        function displayCheckoutCart() {
            let cartItems = JSON.parse(localStorage.getItem('productsInCart'));
            let subTotal = parseFloat(localStorage.getItem("totalCost") || 0); // Cart total is now subtotal
            let grandTotal = subTotal + DELIVERY_FEE; // Calculate grand total

            let cartItemsContainer = document.getElementById('checkout-cart-items');
            let subtotalDisplay = document.getElementById('subtotal-display');
            let deliveryFeeDisplay = document.getElementById('delivery-fee-display'); // Get the delivery fee span
            let grandTotalDisplay = document.getElementById('grand-total-display');
            
            if (cartItems && cartItemsContainer) {
                cartItemsContainer.innerHTML = ''; // Clear existing content

                if (Object.keys(cartItems).length === 0) {
                    cartItemsContainer.innerHTML = '<p class="text-center text-gray-500">Your cart is empty. Please add some products!</p>';
                    subtotalDisplay.textContent = '$0.00'; // Just the value
                    deliveryFeeDisplay.textContent = '$0.00'; // No fee for empty cart
                    grandTotalDisplay.textContent = '$0.00';
                    // Disable form if cart is empty
                    document.getElementById('checkoutForm').querySelector('button[type="submit"]').disabled = true;
                } else {
                    Object.values(cartItems).map((item) => {
                        cartItemsContainer.innerHTML += 
                        `<div class="cart-item">
                         <img src="./img/${item.tag}.webp" alt="${item.name}" />
                            <div class="item-details">
                                <h4>${item.name}</h4>
                                <p>Price: $${item.price.toFixed(2)}</p>
                                <p>Quantity: ${item.inCart}</p>
                            </div>
                            <div class="item-subtotal">
                                <strong>$${(item.inCart * item.price).toFixed(2)}</strong>
                            </div>
                        </div>`;
                    });

                    // Update displays
                    subtotalDisplay.textContent = `$${subTotal.toFixed(2)}`; // Just the value
                    deliveryFeeDisplay.textContent = `$${DELIVERY_FEE.toFixed(2)}`;
                    grandTotalDisplay.textContent = `$${grandTotal.toFixed(2)}`;

                    document.getElementById('checkoutForm').querySelector('button[type="submit"]').disabled = false;
                }
            } else {
                // Handle case where no cart items or container is found
                cartItemsContainer.innerHTML = '<p class="text-center text-gray-500">Your cart is empty.</p>';
                subtotalDisplay.textContent = '$0.00';
                deliveryFeeDisplay.textContent = '$0.00'; // No fee for empty cart
                grandTotalDisplay.textContent = '$0.00';
                document.getElementById('checkoutForm').querySelector('button[type="submit"]').disabled = true;
            }
        }