// Product Data
const products = [
    {
        id: 1,
        name: 'Urban Explorer Hoodie',
        category: 'hoodies',
        price: 89.99,
        originalPrice: 119.99,
        image: 'https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwzfHxob29kaWV8ZW58MHx8fHwxNzU2MTE1NDY2fDA&ixlib=rb-4.1.0&q=85',
        images: [
            'https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwzfHxob29kaWV8ZW58MHx8fHwxNzU2MTE1NDY2fDA&ixlib=rb-4.1.0&q=85',
            'https://images.unsplash.com/photo-1556821840-3a63f95609a7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHw0fHxob29kaWV8ZW58MHx8fHwxNzU2MTE1NDY2fDA&ixlib=rb-4.1.0&q=85',
            'https://images.unsplash.com/photo-1542406775-ade58c52d2e4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwyfHxob29kaWV8ZW58MHx8fHwxNzU2MTE1NDY2fDA&ixlib=rb-4.1.0&q=85'
        ],
        description: 'Premium heavyweight cotton hoodie with embroidered logo. Perfect for street culture enthusiasts who demand both comfort and style.',
        sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
        colors: ['Black', 'White', 'Grey', 'Navy'],
        rating: 4.8,
        reviews: 127,
        badge: 'Best Seller',
        inStock: true
    },
    {
        id: 2,
        name: 'Street Flames Graphic Tee',
        category: 'tshirts',
        price: 34.99,
        originalPrice: 44.99,
        image: 'https://images.unsplash.com/photo-1538329972958-465d6d2144ed?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDN8MHwxfHNlYXJjaHwyfHxzdHJlZXR3ZWFyJTIwZmFzaGlvbnxlbnwwfHx8fDE3NTYxMTU0NjF8MA&ixlib=rb-4.1.0&q=85',
        images: [
            'https://images.unsplash.com/photo-1538329972958-465d6d2144ed?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDN8MHwxfHNlYXJjaHwyfHxzdHJlZXR3ZWFyJTIwZmFzaGlvbnxlbnwwfHx8fDE3NTYxMTU0NjF8MA&ixlib=rb-4.1.0&q=85',
            'https://images.unsplash.com/photo-1588117260148-b47818741c74?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDN8MHwxfHNlYXJjaHwzfHxzdHJlZXR3ZWFyJTIwZmFzaGlvbnxlbnwwfHx8fDE3NTYxMTU0NjF8MA&ixlib=rb-4.1.0&q=85'
        ],
        description: '100% premium cotton tee with bold graphic design. Soft, comfortable, and built to last through countless street adventures.',
        sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
        colors: ['Black', 'White', 'Burgundy', 'Olive'],
        rating: 4.6,
        reviews: 89,
        badge: 'New',
        inStock: true
    },
    {
        id: 3,
        name: 'Air Force Classic Sneakers',
        category: 'sneakers',
        price: 159.99,
        originalPrice: 189.99,
        image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzh8MHwxfHNlYXJjaHwxfHxzbmVha2Vyc3xlbnwwfHx8fDE3NTYwNTcyNTl8MA&ixlib=rb-4.1.0&q=85',
        images: [
            'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzh8MHwxfHNlYXJjaHwxfHxzbmVha2Vyc3xlbnwwfHx8fDE3NTYwNTcyNTl8MA&ixlib=rb-4.1.0&q=85',
            'https://images.unsplash.com/photo-1512374382149-233c42b6a83b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzh8MHwxfHNlYXJjaHwyfHxzbmVha2Vyc3xlbnwwfHx8fDE3NTYwNTcyNTl8MA&ixlib=rb-4.1.0&q=85',
            'https://images.unsplash.com/photo-1600269452121-4f2416e55c28?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzh8MHwxfHNlYXJjaHw0fHxzbmVha2Vyc3xlbnwwfHx8fDE3NTYwNTcyNTl8MA&ixlib=rb-4.1.0&q=85'
        ],
        description: 'Iconic low-top sneakers with premium leather construction. The ultimate streetwear essential for any urban wardrobe.',
        sizes: ['7', '7.5', '8', '8.5', '9', '9.5', '10', '10.5', '11', '11.5', '12'],
        colors: ['White', 'Black', 'Red', 'Blue'],
        rating: 4.9,
        reviews: 203,
        badge: 'Popular',
        inStock: true
    },
    {
        id: 4,
        name: 'Urban Legend Jacket',
        category: 'jackets',
        price: 199.99,
        originalPrice: 249.99,
        image: 'https://images.unsplash.com/photo-1523398002811-999ca8dec234?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDN8MHwxfHNlYXJjaHwxfHxzdHJlZXR3ZWFyJTIwZmFzaGlvbnxlbnwwfHx8fDE3NTYxMTU0NjF8MA&ixlib=rb-4.1.0&q=85',
        images: [
            'https://images.unsplash.com/photo-1523398002811-999ca8dec234?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDN8MHwxfHNlYXJjaHwxfHxzdHJlZXR3ZWFyJTIwZmFzaGlvbnxlbnwwfHx8fDE3NTYxMTU0NjF8MA&ixlib=rb-4.1.0&q=85',
            'https://images.unsplash.com/photo-1517942420142-6a296f9ee4b1?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwxfHxob29kaWV8ZW58MHx8fHwxNzU2MTE1NDY2fDA&ixlib=rb-4.1.0&q=85'
        ],
        description: 'Premium bomber jacket with street-inspired design details. Water-resistant fabric with multiple pockets for urban functionality.',
        sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
        colors: ['Black', 'Khaki', 'Navy', 'Burgundy'],
        rating: 4.7,
        reviews: 156,
        badge: 'Limited',
        inStock: true
    },
    {
        id: 5,
        name: 'Core Essentials Hoodie',
        category: 'hoodies',
        price: 64.99,
        originalPrice: 79.99,
        image: 'https://images.unsplash.com/photo-1542406775-ade58c52d2e4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwyfHxob29kaWV8ZW58MHx8fHwxNzU2MTE1NDY2fDA&ixlib=rb-4.1.0&q=85',
        images: [
            'https://images.unsplash.com/photo-1542406775-ade58c52d2e4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwyfHxob29kaWV8ZW58MHx8fHwxNzU2MTE1NDY2fDA&ixlib=rb-4.1.0&q=85',
            'https://images.unsplash.com/photo-1556821840-3a63f95609a7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHw0fHxob29kaWV8ZW58MHx8fHwxNTY2MTE1NDY2fDA&ixlib=rb-4.1.0&q=85'
        ],
        description: 'Essential pullover hoodie in premium cotton blend. Clean design with subtle branding for everyday street style.',
        sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
        colors: ['Grey', 'Black', 'White', 'Navy'],
        rating: 4.5,
        reviews: 92,
        badge: null,
        inStock: true
    },
    {
        id: 6,
        name: 'High-Top Court Sneakers',
        category: 'sneakers',
        price: 129.99,
        originalPrice: 149.99,
        image: 'https://images.unsplash.com/photo-1512374382149-233c42b6a83b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzh8MHwxfHNlYXJjaHwyfHxzbmVha2Vyc3xlbnwwfHx8fDE3NTYwNTcyNTl8MA&ixlib=rb-4.1.0&q=85',
        images: [
            'https://images.unsplash.com/photo-1512374382149-233c42b6a83b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzh8MHwxfHNlYXJjaHwyfHxzbmVha2Vyc3xlbnwwfHx8fDE3NTYwNTcyNTl8MA&ixlib=rb-4.1.0&q=85',
            'https://images.unsplash.com/photo-1465453869711-7e174808ace9?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzh8MHwxfHNlYXJjaHwzfHxzbmVha2Vyc3xlbnwwfHx8fDE3NTYwNTcyNTl8MA&ixlib=rb-4.1.0&q=85'
        ],
        description: 'Classic high-top sneakers with retro vibes and modern comfort. Premium canvas construction with rubber sole.',
        sizes: ['7', '7.5', '8', '8.5', '9', '9.5', '10', '10.5', '11', '11.5', '12'],
        colors: ['White', 'Black', 'Red', 'Navy'],
        rating: 4.4,
        reviews: 78,
        badge: null,
        inStock: true
    },
    {
        id: 7,
        name: 'Minimalist Crew Tee',
        category: 'tshirts',
        price: 29.99,
        originalPrice: null,
        image: 'https://images.unsplash.com/photo-1508216310976-c518daae0cdc?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDN8MHwxfHNlYXJjaHw0fHxzdHJlZXR3ZWFyJTIwZmFzaGlvbnxlbnwwfHx8fDE3NTYxMTU0NjF8MA&ixlib=rb-4.1.0&q=85',
        images: [
            'https://images.unsplash.com/photo-1508216310976-c518daae0cdc?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDN8MHwxfHNlYXJjaHw0fHxzdHJlZXR3ZWFyJTIwZmFzaGlvbnxlbnwwfHx8fDE3NTYxMTU0NjF8MA&ixlib=rb-4.1.0&q=85'
        ],
        description: 'Clean and minimal crew neck tee in premium organic cotton. Perfect base layer for any streetwear outfit.',
        sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
        colors: ['Black', 'White', 'Grey', 'Navy', 'Olive'],
        rating: 4.3,
        reviews: 65,
        badge: null,
        inStock: true
    },
    {
        id: 8,
        name: 'Runner Sport Sneakers',
        category: 'sneakers',
        price: 179.99,
        originalPrice: 199.99,
        image: 'https://images.unsplash.com/photo-1465453869711-7e174808ace9?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzh8MHwxfHNlYXJjaHwzfHxzbmVha2Vyc3xlbnwwfHx8fDE3NTYwNTcyNTl8MA&ixlib=rb-4.1.0&q=85',
        images: [
            'https://images.unsplash.com/photo-1465453869711-7e174808ace9?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzh8MHwxfHNlYXJjaHwzfHxzbmVha2Vyc3xlbnwwfHx8fDE3NTYwNTcyNTl8MA&ixlib=rb-4.1.0&q=85',
            'https://images.unsplash.com/photo-1600269452121-4f2416e55c28?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzh8MHwxfHNlYXJjaHw0fHxzbmVha2Vyc3xlbnwwfHx8fDE3NTYwNTcyNTl8MA&ixlib=rb-4.1.0&q=85'
        ],
        description: 'Performance running sneakers with street style appeal. Advanced cushioning technology meets urban design.',
        sizes: ['7', '7.5', '8', '8.5', '9', '9.5', '10', '10.5', '11', '11.5', '12'],
        colors: ['Grey', 'Black', 'Blue', 'White'],
        rating: 4.6,
        reviews: 134,
        badge: 'New',
        inStock: true
    }
];

// Utility Functions
function formatPrice(price) {
    return `$${price.toFixed(2)}`;
}

function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    let starsHTML = '';
    
    for (let i = 0; i < fullStars; i++) {
        starsHTML += '<i class="fas fa-star"></i>';
    }
    
    if (hasHalfStar) {
        starsHTML += '<i class="fas fa-star-half-alt"></i>';
    }
    
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
        starsHTML += '<i class="far fa-star"></i>';
    }
    
    return starsHTML;
}

function createProductCard(product) {
    return `
        <div class="product-card" data-product-id="${product.id}">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
                ${product.badge ? `<div class="product-badge">${product.badge}</div>` : ''}
                <div class="product-actions">
                    <button class="action-btn" onclick="toggleWishlist(${product.id})" title="Add to Wishlist">
                        <i class="far fa-heart"></i>
                    </button>
                    <button class="action-btn" onclick="quickView(${product.id})" title="Quick View">
                        <i class="fas fa-eye"></i>
                    </button>
                </div>
            </div>
            <div class="product-info">
                <div class="product-category">${product.category}</div>
                <h3 class="product-name">${product.name}</h3>
                <div class="product-price">
                    ${product.originalPrice ? `<span class="original-price">${formatPrice(product.originalPrice)}</span>` : ''}
                    ${formatPrice(product.price)}
                </div>
                <button class="add-to-cart" onclick="addToCart(${product.id}, '${product.name}', ${product.price}, '${product.image}')">
                    <i class="fas fa-shopping-cart"></i> Add to Cart
                </button>
            </div>
        </div>
    `;
}

// Get product by ID
function getProductById(id) {
    return products.find(product => product.id === parseInt(id));
}

// Filter products by category
function getProductsByCategory(category) {
    if (category === 'all') return products;
    return products.filter(product => product.category === category);
}

// Filter products by price range
function getProductsByPriceRange(range) {
    if (range === 'all') return products;
    
    const [min, max] = range.split('-').map(num => num === '+' ? Infinity : parseInt(num));
    return products.filter(product => {
        if (max === undefined) return product.price >= min;
        return product.price >= min && product.price <= max;
    });
}

// Search products
function searchProducts(query) {
    if (!query) return products;
    
    const searchQuery = query.toLowerCase();
    return products.filter(product => 
        product.name.toLowerCase().includes(searchQuery) ||
        product.description.toLowerCase().includes(searchQuery) ||
        product.category.toLowerCase().includes(searchQuery)
    );
}

// Sort products
function sortProducts(products, sortBy) {
    const sorted = [...products];
    
    switch (sortBy) {
        case 'price-low':
            return sorted.sort((a, b) => a.price - b.price);
        case 'price-high':
            return sorted.sort((a, b) => b.price - a.price);
        case 'name':
            return sorted.sort((a, b) => a.name.localeCompare(b.name));
        case 'newest':
            return sorted.sort((a, b) => b.id - a.id);
        default:
            return sorted;
    }
}

// Get related products
function getRelatedProducts(productId, limit = 4) {
    const product = getProductById(productId);
    if (!product) return [];
    
    return products
        .filter(p => p.id !== productId && p.category === product.category)
        .slice(0, limit);
}

// Load featured products on homepage
function loadFeaturedProducts() {
    const container = document.getElementById('featured-products');
    if (!container) return;
    
    const featuredProducts = products.slice(0, 6); // Get first 6 products
    container.innerHTML = featuredProducts.map(createProductCard).join('');
    
    // Animate products
    const productCards = container.querySelectorAll('.product-card');
    productCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });
}

// Wishlist functionality (using localStorage)
function toggleWishlist(productId) {
    let wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
    const index = wishlist.indexOf(productId);
    
    if (index > -1) {
        wishlist.splice(index, 1);
        showMessage('Removed from wishlist', 'info');
    } else {
        wishlist.push(productId);
        showMessage('Added to wishlist', 'success');
    }
    
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    updateWishlistUI();
}

function updateWishlistUI() {
    const wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
    const wishlistButtons = document.querySelectorAll('.action-btn[onclick*="toggleWishlist"]');
    
    wishlistButtons.forEach(button => {
        const productId = parseInt(button.getAttribute('onclick').match(/\d+/)[0]);
        const icon = button.querySelector('i');
        
        if (wishlist.includes(productId)) {
            icon.className = 'fas fa-heart';
            button.style.background = '#ff6b6b';
            button.style.color = 'white';
        } else {
            icon.className = 'far fa-heart';
            button.style.background = '';
            button.style.color = '';
        }
    });
}

// Quick view functionality
function quickView(productId) {
    const product = getProductById(productId);
    if (!product) return;
    
    // Redirect to product details page
    window.location.href = `product.html?id=${productId}`;
}

// Show message to user
function showMessage(message, type = 'info') {
    // Create message element
    const messageEl = document.createElement('div');
    messageEl.className = `message ${type}`;
    messageEl.textContent = message;
    
    // Add to page
    document.body.insertBefore(messageEl, document.body.firstChild);
    
    // Remove after 3 seconds
    setTimeout(() => {
        messageEl.remove();
    }, 3000);
}

// Initialize products when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Load featured products on homepage
    loadFeaturedProducts();
    
    // Update wishlist UI
    updateWishlistUI();
});