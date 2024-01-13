const products = [
    { name: 'Produit 1', price: 20 },
    { name: 'Produit 2', price: 30 },
    // Ajoutez autant de produits que nécessaire
];

// Panier initial
const cart = [];

// Fonction pour afficher les produits dans le panier
function displayCart() {
    const cartItemsContainer = document.getElementById('cartItems');
    const totalAmountElement = document.getElementById('totalAmount');
    let totalAmount = 0;

    // Efface le contenu actuel du panier
    cartItemsContainer.innerHTML = '';

    // Ajoute chaque produit dans le panier à la table
    cart.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.name}</td>
            <td>$${item.price.toFixed(2)}</td>
            <td>${item.quantity}</td>
            <td>$${(item.price * item.quantity).toFixed(2)}</td>
        `;
        cartItemsContainer.appendChild(row);
        totalAmount += item.price * item.quantity;
    });

    // Met à jour le montant total
    totalAmountElement.textContent = totalAmount.toFixed(2);
}

// Fonction pour ajouter un produit au panier
function addToCart(product) {
    const existingItem = cart.find(item => item.name === product.name);

    if (existingItem) {
        // Le produit est déjà dans le panier, augmentez la quantité
        existingItem.quantity++;
    } else {
        // Ajoutez le produit au panier avec une quantité de 1
        cart.push({ ...product, quantity: 1 });
    }

    // Met à jour l'affichage du panier
    displayCart();
}

// Ajoutez des produits d'exemple au panier au chargement de la page
window.onload = function () {
    products.forEach(product => addToCart(product));
};

// Ajoutez ici le script JavaScript pour gérer les interactions du panier
function checkout() {
    alert('Fonctionnalité de paiement non implémentée dans cet exemple.');
    // Vous pouvez ajouter ici la logique de paiement ou rediriger vers une page de paiement.
}

