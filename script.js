function openModal(productName) {
    document.getElementById("modalProductName").innerText = "You are ordering: " + productName;
    document.getElementById("orderModal").style.display = "block";
}

function closeModal() {
    document.getElementById("orderModal").style.display = "none";
}

function placeOrder() {
    alert("Your order has been placed!");
    closeModal();
}

// Close the modal when clicking outside of it
window.onclick = function(event) {
    const modal = document.getElementById("orderModal");
    if (event.target == modal) {
        closeModal();
    }
}