// script.js

// Function to handle "Order Now" button clicks
function orderNow(item) {
    const userConfirmed = confirm(`Would you like to proceed with your order for ${item}?`);
    if (userConfirmed) {
      // Navigate to the order form or show a custom message
      alert(`Redirecting you to the order page for ${item}...`);
      // Redirect to the order page
      window.location.href = "order.html";
    } else {
      alert("Order canceled.");
    }
  }
  