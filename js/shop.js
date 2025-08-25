// Shop page functionality

let currentProducts = [...products];
let currentPage = 1;
const productsPerPage = 9;

// Initialize shop page
function initShop() {
    loadProducts();
    initFilters();
    initSearch();
    initSort();
    
    // Check for category parameter in URL
    const categoryParam = getUrlParameter('category');
    if (categoryParam) {
        filterByCategory(categoryParam);
        // Update active filter
        const categoryRadio = document.querySelector(`input[name="category"][value="${categoryParam}"]`);
        if (categoryRadio) {
            categoryRadio.checked = true;
        }
    }
}

// Load and display products
function loadProducts(productsToShow = currentProducts) {
    const container = document.getElementById('products-container');
    if (!container) return;
    
    // Calculate pagination
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const paginatedProducts = productsToShow.slice(startIndex, endIndex);
    
    if (paginatedProducts.length === 0) {
        container.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 4rem;">
                <i class="fas fa-search" style="font-size: 3rem; color: #ccc; margin-bottom: 1rem;"></i>
                <h3>No products found</h3>
                <p>Try adjusting your filters or search terms.</p>
            </div>
        `;
        return;
    }
    
    container.innerHTML = paginatedProducts.map(createProductCard).join('');
    
    // Update pagination
    updatePagination(productsToShow.length);
    
    // Update wishlist UI
    updateWishlistUI();
    
    // Animate products
    const productCards = container.querySelectorAll('.product-card');
    productCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });
}

// Initialize filters
function initFilters() {
    // Category filters
    const categoryRadios = document.querySelectorAll('input[name="category"]');
    categoryRadios.forEach(radio => {
        radio.addEventListener('change', (e) => {
            filterByCategory(e.target.value);
        });
    });
    
    // Price filters
    const priceRadios = document.querySelectorAll('input[name="price"]');
    priceRadios.forEach(radio => {
        radio.addEventListener('change', (e) => {
            filterByPrice(e.target.value);
        });
    });
    
    // Size filters
    const sizeCheckboxes = document.querySelectorAll('input[type="checkbox"]');
    sizeCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            filterBySize();
        });
    });
}

// Filter by category
function filterByCategory(category) {
    currentProducts = getProductsByCategory(category);
    currentPage = 1;
    applyAllFilters();
}

// Filter by price
function filterByPrice(priceRange) {
    let filteredProducts = getProductsByPriceRange(priceRange);
    
    // Apply category filter if active
    const activeCategory = document.querySelector('input[name="category"]:checked').value;
    if (activeCategory !== 'all') {
        filteredProducts = filteredProducts.filter(product => product.category === activeCategory);
    }
    
    currentProducts = filteredProducts;
    currentPage = 1;
    applyAllFilters();
}

// Filter by size
function filterBySize() {
    const selectedSizes = Array.from(document.querySelectorAll('input[type="checkbox"]:checked'))
        .map(checkbox => checkbox.value);
    
    if (selectedSizes.length === 0) {
        applyAllFilters();
        return;
    }
    
    let filteredProducts = products.filter(product => 
        product.sizes.some(size => selectedSizes.includes(size))
    );
    
    // Apply other active filters
    const activeCategory = document.querySelector('input[name="category"]:checked').value;
    if (activeCategory !== 'all') {
        filteredProducts = filteredProducts.filter(product => product.category === activeCategory);
    }
    
    const activePrice = document.querySelector('input[name="price"]:checked').value;
    if (activePrice !== 'all') {
        filteredProducts = getProductsByPriceRange(activePrice).filter(product =>
            filteredProducts.includes(product)
        );
    }
    
    currentProducts = filteredProducts;
    currentPage = 1;
    loadProducts();
}

// Apply all active filters
function applyAllFilters() {
    let filtered = [...currentProducts];
    
    // Apply search if active
    const searchQuery = document.getElementById('product-search').value;
    if (searchQuery) {
        filtered = searchProducts(searchQuery).filter(product => 
            filtered.includes(product)
        );
    }
    
    // Apply sort
    const sortValue = document.getElementById('sort-select').value;
    filtered = sortProducts(filtered, sortValue);
    
    loadProducts(filtered);
}

// Initialize search
function initSearch() {
    const searchInput = document.getElementById('product-search');
    if (!searchInput) return;
    
    const debouncedSearch = debounce((query) => {
        performSearch(query);
    }, 300);
    
    searchInput.addEventListener('input', (e) => {
        debouncedSearch(e.target.value);
    });
}

// Perform search
function performSearch(query) {
    if (!query) {
        applyAllFilters();
        return;
    }
    
    const searchResults = searchProducts(query);
    
    // Apply active filters to search results
    let filtered = searchResults;
    
    const activeCategory = document.querySelector('input[name="category"]:checked').value;
    if (activeCategory !== 'all') {
        filtered = filtered.filter(product => product.category === activeCategory);
    }
    
    const activePrice = document.querySelector('input[name="price"]:checked').value;
    if (activePrice !== 'all') {
        filtered = getProductsByPriceRange(activePrice).filter(product =>
            filtered.includes(product)
        );
    }
    
    const selectedSizes = Array.from(document.querySelectorAll('input[type="checkbox"]:checked'))
        .map(checkbox => checkbox.value);
    
    if (selectedSizes.length > 0) {
        filtered = filtered.filter(product => 
            product.sizes.some(size => selectedSizes.includes(size))
        );
    }
    
    currentPage = 1;
    loadProducts(filtered);
}

// Initialize sort
function initSort() {
    const sortSelect = document.getElementById('sort-select');
    if (!sortSelect) return;
    
    sortSelect.addEventListener('change', (e) => {
        applyAllFilters();
    });
}

// Update pagination
function updatePagination(totalProducts) {
    const paginationContainer = document.getElementById('pagination');
    if (!paginationContainer) return;
    
    const totalPages = Math.ceil(totalProducts / productsPerPage);
    
    if (totalPages <= 1) {
        paginationContainer.innerHTML = '';
        return;
    }
    
    let paginationHTML = '';
    
    // Previous button
    paginationHTML += `
        <button onclick="goToPage(${currentPage - 1})" ${currentPage === 1 ? 'disabled' : ''}>
            <i class="fas fa-chevron-left"></i> Previous
        </button>
    `;
    
    // Page numbers
    const startPage = Math.max(1, currentPage - 2);
    const endPage = Math.min(totalPages, currentPage + 2);
    
    if (startPage > 1) {
        paginationHTML += `<button onclick="goToPage(1)">1</button>`;
        if (startPage > 2) {
            paginationHTML += `<span>...</span>`;
        }
    }
    
    for (let i = startPage; i <= endPage; i++) {
        paginationHTML += `
            <button onclick="goToPage(${i})" ${i === currentPage ? 'class="active"' : ''}>
                ${i}
            </button>
        `;
    }
    
    if (endPage < totalPages) {
        if (endPage < totalPages - 1) {
            paginationHTML += `<span>...</span>`;
        }
        paginationHTML += `<button onclick="goToPage(${totalPages})">${totalPages}</button>`;
    }
    
    // Next button
    paginationHTML += `
        <button onclick="goToPage(${currentPage + 1})" ${currentPage === totalPages ? 'disabled' : ''}>
            Next <i class="fas fa-chevron-right"></i>
        </button>
    `;
    
    paginationContainer.innerHTML = paginationHTML;
}

// Go to specific page
function goToPage(page) {
    if (page < 1) return;
    
    currentPage = page;
    applyAllFilters();
    
    // Scroll to top of products
    const productsArea = document.querySelector('.products-area');
    if (productsArea) {
        productsArea.scrollIntoView({ behavior: 'smooth' });
    }
}

// Initialize shop when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    if (window.location.pathname.includes('shop.html')) {
        initShop();
    }
});