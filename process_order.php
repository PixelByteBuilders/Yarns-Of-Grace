 <?php
// THIS FILE NEEDS TO BE RUN ON A WEB SERVER WITH PHP INSTALLED.
// YOU CANNOT JUST OPEN IT IN YOUR BROWSER.

// !!! IMPORTANT SECURITY WARNINGS !!!
// 1. NEVER send real credit card information directly via email or unencrypted forms.
//    This mock form is for demonstration ONLY. A real e-commerce site uses secure payment gateways.
//    For Cash App/PayPal/Venmo/Apple Pay (manual), you'll need to provide customers with your payment details
//    (e.g., your username/tag) on the checkout page itself or a confirmation page.
// 2. The PHP mail() function is often unreliable and emails may go to spam.
//    For a production site, use a robust email library like PHPMailer with a dedicated email service.

// Set the recipient email address
$recipient_email = "calebbolivar18@gmail.com"; // Your Gmail address

// Subject for the email
$email_subject = "New E-commerce Order Received!";

// Get payment method data submitted via POST
$paymentMethod = htmlspecialchars($_POST['paymentMethod'] ?? 'N/A');

// Initialize payment details strings
$payment_details_message = "";

// Conditionally get payment details based on selected method
if ($paymentMethod === "Credit Card") {
    $cardNumber = htmlspecialchars($_POST['cardNumber'] ?? 'N/A');
    $expDate = htmlspecialchars($_POST['expDate'] ?? 'N/A');
    $cvv = htmlspecialchars($_POST['cvv'] ?? 'N/A');
    $cardName = htmlspecialchars($_POST['cardName'] ?? 'N/A');

    $payment_details_message .= "Card Number: {$cardNumber}\n";
    $payment_details_message .= "Expiration Date: {$expDate}\n";
    $payment_details_message .= "CVV: {$cvv}\n";
    $payment_details_message .= "Card Holder Name: {$cardName}\n";
    $payment_details_message .= "(MOCK - DO NOT USE FOR REAL TRANSACTIONS)\n"; // Reinforce warning
} else { // Cash App, PayPal, Venmo, Apple Pay (Manual)
    $paymentNote = htmlspecialchars($_POST['paymentNote'] ?? 'No note provided');
    $payment_details_message .= "Payment Note: {$paymentNote}\n";
    $payment_details_message .= "(Customer to send payment manually to your {$paymentMethod} account)\n";
}


// Get delivery information from POST
$address = htmlspecialchars($_POST['address'] ?? 'N/A');
$city = htmlspecialchars($_POST['city'] ?? 'N/A');
$state = htmlspecialchars($_POST['state'] ?? 'N/A');
$zip = htmlspecialchars($_POST['zip'] ?? 'N/A');
$country = htmlspecialchars($_POST['country'] ?? 'N/A');
$customerEmail = htmlspecialchars($_POST['email'] ?? 'N/A');

// Get cart data from hidden inputs (which were populated by JavaScript)
$cartItemsJson = $_POST['cartItemsJson'] ?? '{}';
$totalCost = htmlspecialchars($_POST['totalCost'] ?? '0');

// Decode the JSON string for cart items
$cartItems = json_decode($cartItemsJson, true);

// Build the email message
$email_message = "Hello Shop Owner,\n\n";
$email_message .= "You have received a new order!\n\n";
$email_message .= "--- Order Details ---\n";

if (!empty($cartItems) && is_array($cartItems)) {
    foreach ($cartItems as $item) {
        $name = htmlspecialchars($item['name'] ?? 'Unknown Item');
        $quantity = htmlspecialchars($item['inCart'] ?? 0);
        $price = htmlspecialchars(number_format($item['price'] ?? 0, 2));
        $subtotal = htmlspecialchars(number_format(($item['inCart'] ?? 0) * ($item['price'] ?? 0), 2));
        $email_message .= "Product: {$name}\n";
        $email_message .= "Quantity: {$quantity}\n";
        $email_message .= "Price: \${$price}\n";
        $email_message .= "Subtotal: \${$subtotal}\n";
        $email_message .= "--------------------\n";
    }
} else {
    $email_message .= "No items found in cart.\n";
}

$email_message .= "\nTotal Order Cost: \${" . htmlspecialchars(number_format((float)$totalCost, 2)) . "}\n\n"; // Cast totalCost to float

$email_message .= "--- Customer Information ---\n";
$email_message .= "Email: {$customerEmail}\n";
$email_message .= "Address: {$address}, {$city}, {$state}, {$zip}, {$country}\n\n";

$email_message .= "--- Payment Information ---\n";
$email_message .= "Payment Method: {$paymentMethod}\n";
$email_message .= $payment_details_message; // Include the details based on method
$email_message .= "\n";

$email_message .= "Please process this order accordingly.\n";
$email_message .= "Thank you!\n";

// Headers for the email
$headers = "From: webmaster@your-shop.com\r\n"; // Replace with your shop's email
$headers .= "Reply-To: {$customerEmail}\r\n";
$headers .= "Content-type: text/plain; charset=UTF-8\r\n";

// Send the email
if (mail($recipient_email, $email_subject, $email_message, $headers)) {
    // Email sent successfully
    echo "<script>
            localStorage.removeItem('productsInCart');
            localStorage.removeItem('cartNumbers');
            localStorage.removeItem('totalCost');
            window.location.href = 'thank_you.html'; // Redirect to a thank you page
          </script>";
    exit();
} else {
    // Email failed to send
    echo "<h1>Order Submission Failed!</h1>";
    echo "<p>There was a problem sending your order. Please try again later.</p>";
    echo "<p>Error details (for debugging, hide in production):</p>";
    echo "<pre>" . print_r(error_get_last(), true) . "</pre>"; // More comprehensive error info
}
?>
