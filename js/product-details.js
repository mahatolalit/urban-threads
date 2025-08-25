// Product details page functionality

let currentProduct = null;
let selectedSize = '';
let selectedColor = '';
let quantity = 1;
let currentImageIndex = 0;

// Initialize product details page
function initProductDetails() {
    const productId = getUrlParameter('id');
    if (!productId) {
        window.location.href = 'shop.html';
        return;
    }
    
    currentProduct = getProductById(productId);
    if (!currentProduct) {
        window.location.href = 'shop.html';
        return;
    }
    
    loadProductDetails();
    loadRelatedProducts();
    initImageGallery();
    initProductOptions();
}

// Load product details
function loadProductDetails() {
    const container = document.getElementById('product-content');
    const breadcrumb = document.getElementById('product-breadcrumb');
    
    if (breadcrumb) {
        breadcrumb.textContent = currentProduct.name;
    }
    
    if (!container) return;
    
    // Set default selections
    selectedSize = currentProduct.sizes[0];
    selectedColor = currentProduct.colors[0];
    
    container.innerHTML = `
        <div class="product-gallery">
            <div class="main-image" onclick="openImageModal(0)">
                <img src="${currentProduct.images[0]}" alt="${currentProduct.name}" id="main-product-image">
            </div>
            <div class="thumbnail-images">
                ${currentProduct.images.map((image, index) => `
                    <div class="thumbnail ${index === 0 ? 'active' : ''}" onclick="changeMainImage(${index})">
                        <img src="${image}" alt="${currentProduct.name}">
                    </div>
                `).join('')}
            </div>
        </div>
        
        <div class="product-details-info">
            <h1>${currentProduct.name}</h1>
            
            <div class="product-rating">
                <div class="stars">${generateStars(currentProduct.rating)}</div>
                <span class="rating-text">(${currentProduct.reviews} reviews)</span>
            </div>
            
            <div class="product-price">
                ${currentProduct.originalPrice ? `<span class="original-price">${formatPrice(currentProduct.originalPrice)}</span>` : ''}
                ${formatPrice(currentProduct.price)}
            </div>
            
            <div class="product-description">
                <p>${currentProduct.description}</p>
            </div>
            
            <div class="product-options">
                <div class="option-group">
                    <label>Size:</label>
                    <div class="size-options">
                        ${currentProduct.sizes.map(size => `
                            <div class="size-option ${size === selectedSize ? 'active' : ''}" 
                                 onclick="selectSize('${size}')">${size}</div>
                        `).join('')}
                    </div>
                </div>
                
                <div class="option-group">
                    <label>Color:</label>
                    <div class="color-options">
                        ${currentProduct.colors.map(color => `
                            <div class="color-option ${color === selectedColor ? 'active' : ''}" 
                                 onclick="selectColor('${color}')">${color}</div>
                        `).join('')}
                    </div>
                </div>
            </div>
            
            <div class="quantity-selector">
                <label>Quantity:</label>
                <div class="quantity-controls">
                    <button class="quantity-btn" onclick="changeQuantity(-1)">-</button>
                    <input type="number" class="quantity-input" value="1" min="1" max="10" 
                           onchange="setQuantity(this.value)" id="quantity-input">
                    <button class="quantity-btn" onclick="changeQuantity(1)">+</button>
                </div>
            </div>
            
            <div class="product-actions">
                <button class="btn btn-primary" onclick="addToCartFromDetails()">
                    <i class="fas fa-shopping-cart"></i> Add to Cart - ${formatPrice(currentProduct.price)}
                </button>
                <button class="btn btn-secondary" onclick="toggleWishlist(${currentProduct.id})">
                    <i class="far fa-heart"></i> Add to Wishlist
                </button>
            </div>
            
            <div class="product-meta">
                <div class="meta-item">
                    <span>SKU:</span>
                    <strong>UT-${currentProduct.id.toString().padStart(4, '0')}</strong>
                </div>
                <div class="meta-item">
                    <span>Category:</span>
                    <strong>${currentProduct.category.charAt(0).toUpperCase() + currentProduct.category.slice(1)}</strong>
                </div>
                <div class="meta-item">
                    <span>Availability:</span>
                    <strong class="in-stock">In Stock</strong>
                </div>
                <div class="meta-item">
                    <span>Shipping:</span>
                    <strong>Free shipping on orders over $75</strong>
                </div>
            </div>
        </div>
    `;
    
    // Update page title
    document.title = `${currentProduct.name} - URBAN THREADS`;
}

// Initialize image gallery
function initImageGallery() {
    // Image modal functionality is handled by the modal functions below
}

// Change main image
function changeMainImage(index) {
    currentImageIndex = index;
    const mainImage = document.getElementById('main-product-image');
    const thumbnails = document.querySelectorAll('.thumbnail');
    
    if (mainImage) {
        mainImage.src = currentProduct.images[index];
    }
    
    thumbnails.forEach((thumb, i) => {
        thumb.classList.toggle('active', i === index);
    });
}

// Open image modal
function openImageModal(index) {
    currentImageIndex = index;
    const modal = document.getElementById('image-modal');
    const modalImage = document.getElementById('modal-image');
    
    if (modal && modalImage) {
        modalImage.src = currentProduct.images[index];
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

// Close image modal
function closeImageModal() {
    const modal = document.getElementById('image-modal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// Navigate modal images
function navigateModalImage(direction) {
    const newIndex = currentImageIndex + direction;
    if (newIndex >= 0 && newIndex < currentProduct.images.length) {
        currentImageIndex = newIndex;
        const modalImage = document.getElementById('modal-image');
        if (modalImage) {
            modalImage.src = currentProduct.images[currentImageIndex];
        }
    }
}

// Initialize product options
function initProductOptions() {
    // Modal close functionality
    const modal = document.getElementById('image-modal');
    const closeBtn = document.querySelector('.modal-close');
    const prevBtn = document.querySelector('.modal-prev');
    const nextBtn = document.querySelector('.modal-next');
    
    if (closeBtn) {
        closeBtn.addEventListener('click', closeImageModal);
    }
    
    if (prevBtn) {
        prevBtn.addEventListener('click', () => navigateModalImage(-1));
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', () => navigateModalImage(1));
    }
    
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeImageModal();
            }
        });
    }
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (modal && modal.classList.contains('active')) {
            switch(e.key) {
                case 'Escape':
                    closeImageModal();
                    break;
                case 'ArrowLeft':
                    navigateModalImage(-1);
                    break;
                case 'ArrowRight':
                    navigateModalImage(1);
                    break;
            }
        }
    });
}

// Select size
function selectSize(size) {
    selectedSize = size;
    
    const sizeOptions = document.querySelectorAll('.size-option');
    sizeOptions.forEach(option => {
        option.classList.toggle('active', option.textContent === size);
    });
    
    updateAddToCartButton();
}

// Select color
function selectColor(color) {
    selectedColor = color;
    
    const colorOptions = document.querySelectorAll('.color-option');
    colorOptions.forEach(option => {
        option.classList.toggle('active', option.textContent === color);
    });
    
    updateAddToCartButton();
}

// Change quantity
function changeQuantity(delta) {
    const input = document.getElementById('quantity-input');
    if (input) {
        const newQuantity = Math.max(1, Math.min(10, quantity + delta));
        quantity = newQuantity;
        input.value = newQuantity;
        updateAddToCartButton();
    }
}

// Set quantity directly
function setQuantity(value) {
    const newQuantity = Math.max(1, Math.min(10, parseInt(value) || 1));
    quantity = newQuantity;
    
    const input = document.getElementById('quantity-input');
    if (input) {
        input.value = newQuantity;
    }
    
    updateAddToCartButton();
}

// Update add to cart button
function updateAddToCartButton() {
    const button = document.querySelector('.product-actions .btn-primary');
    if (button) {
        const totalPrice = currentProduct.price * quantity;
        button.innerHTML = `
            <i class="fas fa-shopping-cart"></i> 
            Add ${quantity > 1 ? quantity + ' ' : ''}to Cart - ${formatPrice(totalPrice)}
        `;
    }
}

// Add to cart from product details
function addToCartFromDetails() {
    if (!selectedSize || !selectedColor) {
        showMessage('Please select size and color', 'error');
        return;
    }
    
    addToCart(
        currentProduct.id,
        currentProduct.name,
        currentProduct.price,
        currentProduct.image,
        selectedSize,
        selectedColor,
        quantity
    );
}

// Load related products
function loadRelatedProducts() {
    const container = document.getElementById('related-products');
    if (!container) return;
    
    const relatedProducts = getRelatedProducts(currentProduct.id, 4);
    
    if (relatedProducts.length === 0) {
        document.querySelector('.related-products').style.display = 'none';
        return;
    }
    
    container.innerHTML = relatedProducts.map(createProductCard).join('');
    
    // Update wishlist UI for related products
    setTimeout(updateWishlistUI, 100);
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    if (window.location.pathname.includes('product.html')) {
        initProductDetails();
    }
});