const products = [
    { name: 'Nike Air Max Dn8', price: '189,99 €', image: '../images/nike1.png' },
    { name: 'Survêtement Vintage', price: '129,99 €', image: '../images/nike2.png' },
    { name: 'Veste en Cuir', price: '249,99 €', image: '../images/nike3.png' },
    { name: 'Baskets Retro', price: '159,99 €', image: '../images/nike1.png' }
];

function loadProducts() {
    const grid = document.getElementById('hommeProducts');
    
    products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <div class="product-info">
                <h3>${product.name}</h3>
                <p class="price">${product.price}</p>
                <button class="cta-button">Ajouter au panier</button>
            </div>
        `;
        grid.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', loadProducts);