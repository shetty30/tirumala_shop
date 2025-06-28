document.addEventListener('DOMContentLoaded', function() {
    // ==================== PRODUCT DATA ====================
    const products = [
        {
            id: 1,
            name: "5D Master Toilet Cleaner",
            description: "1.5X stronger than ordinary toilet cleaners. Advanced thicker formulation saves time & effort.",
            category: "toilet",
            sizes: [
                { size: "5 LTR", price: 430 },
                { size: "500ML", price: 82 }
            ],
            features: [
                "Thicker formula clings to surfaces",
                "Removes tough stains",
                "Leaves bathroom shining"
            ],
            image: "toilet-cleaner.jpg",
            popularity: 5 
        },
        {
            id: 2,
            name: "5D Master Dish Wash (Lemon)",
            description: "Cuts tough grease residue, gentle on hands. Leaves refreshing lemon fragrance.",
            category: "dishwash",
            sizes: [
                { size: "5 LTR", price: 460 },
                { size: "500ML", price: 94 }
            ],
            features: [
                "1 spoon cleans sink-full utensils",
                "No white residue",
                "Removes foul smells"
            ],
            image: "dish-wash.jpg",
            popularity: 4
        },
        {
            id: 3,
            name: "5D Master Hand Wash (Rose)",
            description: "Antibacterial formula with added moisturizer. Decreases bacteria on skin.",
            category: "handwash",
            sizes: [
                { size: "5 LTR", price: 450 },
                { size: "500ML", price: 86 }
            ],
            features: [
                "Kills 99.9% germs",
                "Rose fragrance",
                "Moisturizes skin"
            ],
            image: "hand-wash.jpg",
            popularity: 4
        },
        {
            id: 4,
            name: "5D Master Hand Wash (Orange)",
            description: "Fights germs while being gentle on hands. Eliminates odor with citrus freshness.",
            category: "handwash",
            sizes: [
                { size: "5 LTR", price: 450 },
                { size: "500ML", price: 92 }
            ],
            features: [
                "Antibacterial protection",
                "Refreshing orange scent",
                "pH balanced"
            ],
            image: "handwash-orange.jpg",
            popularity: 5
        },
        {
            id: 5,
            name: "5D Master Hand Wash (Apple)",
            description: "Gentle cleansing with fruity apple fragrance. Dermatologically tested.",
            category: "handwash",
            sizes: [
                { size: "5 LTR", price: 450 },
                { size: "500ML", price: 89 }
            ],
            features: [
                "Kills germs effectively",
                "Apple fragrance",
                "No harsh chemicals"
            ],
            image: "handwash-apple.jpg",
            popularity: 3
        },
        {
            id: 6,
            name: "5D Master Floor Cleaner (White)",
            description: "For all floor types. Removes oil without harsh effects on hands.",
            category: "floor",
            sizes: [
                { size: "5 LTR", price: 440 },
                { size: "500ML", price: 69 }
            ],
            features: [
                "Works on marble, tiles, kota",
                "Quick-dry formula",
                "No sticky residue"
            ],
            image: "floor-white.jpg",
            popularity: 4
        },
        {
            id: 7,
            name: "5D Master Floor Cleaner (Green)",
            description: "Antibacterial floor cleaner with long-lasting freshness.",
            category: "floor",
            sizes: [
                { size: "5 LTR", price: 440 },
                { size: "500ML", price: 75 }
            ],
            features: [
                "Kills 99.9% bacteria",
                "Pleasant herbal fragrance",
                "Eco-friendly chemicals"
            ],
            image: "floor-green.jpg",
            popularity: 3
        },
        {
            id: 8,
            name: "5D Master Floor Cleaner (Scented)",
            description: "Special fragrant formula leaves floors smelling fresh for hours.",
            category: "floor",
            sizes: [
                { size: "5 LTR", price: 450 },
                { size: "500ML", price: 80 }
            ],
            features: [
                "Long-lasting fragrance",
                "Removes tough stains",
                "Safe for all floors"
            ],
            image: "floor-scented.jpg",
            popularity: 4
        },
        {
            id: 9,
            name: "5D Master Air Freshener (Lavender)",
            description: "Creates relaxing atmosphere with floral lavender fragrance.",
            category: "air",
            sizes: [
                { size: "5 LTR", price: 750 },
                { size: "500ML", price: 112 }
            ],
            features: [
                "Long-lasting freshness",
                "Calming lavender scent",
                "Alcohol-free"
            ],
            image: "air-lavender.jpg",
            popularity: 4
        },
        {
            id: 10,
            name: "5D Master Air Freshener (Draker)",
            description: "Masculine fragrance for spaces needing bold freshness.",
            category: "air",
            sizes: [
                { size: "5 LTR", price: 750 },
                { size: "500ML", price: 112 }
            ],
            features: [
                "Eliminates strong odors",
                "Woody fragrance",
                "Non-aerosol"
            ],
            image: "air-draker.jpg",
            popularity: 3
        },
        {
            id: 11,
            name: "5D Master Air Freshener (Mogra)",
            description: "Traditional Indian mogra fragrance for elegant spaces.",
            category: "air",
            sizes: [
                { size: "5 LTR", price: 750 },
                { size: "500ML", price: 112 }
            ],
            features: [
                "Classic floral scent",
                "Neutralizes odors",
                "Light, non-overpowering"
            ],
            image: "air-mogra.jpg",
            popularity: 5
        },
        {
            id: 12,
            name: "5D Master Air Freshener (Magnnet)",
            description: "Magnetic fragrance that adapts to your environment.",
            category: "air",
            sizes: [
                { size: "5 LTR", price: 750 },
                { size: "500ML", price: 112 }
            ],
            features: [
                "Adaptive fragrance technology",
                "Eliminates stubborn odors",
                "Works in all spaces"
            ],
            image: "air-magnnet.jpg",
            popularity: 4
        },
        {
            id: 13,
            name: "5D Master Sanitizer",
            description: "Alcohol-based sanitizer for complete germ protection.",
            category: "sanitizer",
            sizes: [
                { size: "5 LTR", price: 550 }
            ],
            features: [
                "Kills 99.99% germs",
                "Quick-drying",
                "No sticky residue"
            ],
            image: "sanitizer.jpg",
            popularity: 4
        },
        {
            id: 14,
            name: "5D Master Glass Cleaner",
            description: "Streak-free shine for all glass surfaces.",
            category: "glass",
            sizes: [
                { size: "5 LTR", price: 462 },
                { size: "500ML", price: 130 }
            ],
            features: [
                "Ammonia-free formula",
                "Works on mirrors/windows",
                "No smudges or streaks"
            ],
            image: "glass-cleaner.jpg",
            popularity: 3
        },
        {
            id: 15,
            name: "5D Master Pocket Perfume",
            description: "Compact 20ml fragrance for personal freshness.",
            category: "perfume",
            sizes: [
                { size: "20ML", price: 55 }
            ],
            features: [
                "Long-lasting fragrance",
                "Portable size",
                "Variety of scents available"
            ],
            image: "pocket-perfume.jpg",
            popularity: 4
        }
    ];

    // ==================== DOM ELEMENTS ====================
    const productGrid = document.querySelector('.product-grid');
    const cartItemsEl = document.querySelector('.cart-items');
    const cartCountEl = document.querySelector('.cart-count');
    const subtotalEl = document.querySelector('.subtotal');
    const totalEl = document.querySelector('.total-amount');
    const cartSidebar = document.querySelector('.cart-sidebar');
    const cartOverlay = document.querySelector('.cart-overlay');
    const closeCartBtn = document.querySelector('.close-cart');
    const cartIcon = document.querySelector('.cart-icon');
    const tabs = document.querySelectorAll('.tab');
    const sortSelect = document.createElement('select');
    
    // ==================== APP STATE ====================
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let currentCategory = 'all';
    let currentSort = 'popularity';

    // ==================== INITIALIZATION ====================
    function init() {
        createSortDropdown();
        displayProducts();
        updateCart();
        setupEventListeners();
    }

    // ==================== PRODUCT DISPLAY ====================
    function displayProducts() {
        productGrid.innerHTML = '';
        
        // Filter by category
        let filteredProducts = currentCategory === 'all' 
            ? [...products] 
            : products.filter(p => p.category === currentCategory);
        
        // Sort products
        filteredProducts = sortProducts(filteredProducts);
        
        // Display products
        filteredProducts.forEach(product => {
            const productCard = createProductCard(product);
            productGrid.appendChild(productCard);
        });
    }

    function createProductCard(product) {
        const card = document.createElement('div');
        card.className = 'product-card';
        
        // Star rating based on popularity
        const stars = '★'.repeat(product.popularity) + '☆'.repeat(5 - product.popularity);
        
        card.innerHTML = `
            <div class="product-image">
                <img src="images/${product.image}" alt="${product.name}" loading="lazy">
                <div class="popularity">${stars}</div>
            </div>
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <p class="product-desc">${product.description}</p>
                
                <div class="product-features">
                    ${product.features.map(f => `
                        <div class="feature">
                            <i class="fas fa-check-circle"></i>
                            <span>${f}</span>
                        </div>
                    `).join('')}
                </div>
                
                <div class="price-container">
                    <div class="price">₹${product.sizes[0].price}</div>
                    <select class="size-select" data-id="${product.id}">
                        ${product.sizes.map(s => `
                            <option value="${s.price}">${s.size}</option>
                        `).join('')}
                    </select>
                </div>
                
                <button class="add-to-cart" data-id="${product.id}">
                    <i class="fas fa-cart-plus"></i> Add to Cart
                </button>
            </div>
        `;
        return card;
    }

    // ==================== SORTING ====================
    function createSortDropdown() {
        sortSelect.innerHTML = `
            <option value="popularity">Sort by: Popularity</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="name">Name: A-Z</option>
        `;
        sortSelect.className = 'sort-select';
        sortSelect.value = currentSort;
        sortSelect.addEventListener('change', (e) => {
            currentSort = e.target.value;
            displayProducts();
        });
        
        document.querySelector('.categories').appendChild(sortSelect);
    }

    function sortProducts(products) {
        switch(currentSort) {
            case 'price-low':
                return [...products].sort((a, b) => a.sizes[0].price - b.sizes[0].price);
            case 'price-high':
                return [...products].sort((a, b) => b.sizes[0].price - a.sizes[0].price);
            case 'name':
                return [...products].sort((a, b) => a.name.localeCompare(b.name));
            case 'popularity':
            default:
                return [...products].sort((a, b) => b.popularity - a.popularity);
        }
    }

    // ==================== CART FUNCTIONALITY ====================
    function addToCart(e) {
        const productId = parseInt(e.target.dataset.id);
        const product = products.find(p => p.id === productId);
        const sizeSelect = document.querySelector(`.size-select[data-id="${productId}"]`);
        const selectedSize = sizeSelect.options[sizeSelect.selectedIndex].text;
        const selectedPrice = parseInt(sizeSelect.value);
        
        const existingItem = cart.find(item => 
            item.id === productId && 
            item.size === selectedSize
        );

        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({
                id: productId,
                name: product.name,
                size: selectedSize,
                price: selectedPrice,
                quantity: 1,
                image: product.image
            });
        }
        
        updateCart();
        showCartNotification(`${product.name} added to cart!`);
    }

    function updateCart() {
        localStorage.setItem('cart', JSON.stringify(cart));
        
        // Update cart count
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCountEl.textContent = totalItems;
        
        // Update cart items
        cartItemsEl.innerHTML = cart.length ? '' : '<li class="empty-cart">Your cart is empty</li>';
        
        let subtotal = 0;
        
        cart.forEach(item => {
            const itemTotal = item.price * item.quantity;
            subtotal += itemTotal;
            
            const li = document.createElement('li');
            li.className = 'cart-item';
            li.innerHTML = `
                <div class="cart-item-image">
                    <img src="images/${item.image}" alt="${item.name}" loading="lazy">
                </div>
                <div class="cart-item-details">
                    <div class="cart-item-title">${item.name}</div>
                    <div class="cart-item-variant">${item.size}</div>
                    <div class="cart-item-price">₹${item.price} × ${item.quantity} = ₹${itemTotal}</div>
                    <div class="cart-item-actions">
                        <button class="quantity-btn minus" data-id="${item.id}" data-size="${item.size}">
                            <i class="fas fa-minus"></i>
                        </button>
                        <span>${item.quantity}</span>
                        <button class="quantity-btn plus" data-id="${item.id}" data-size="${item.size}">
                            <i class="fas fa-plus"></i>
                        </button>
                        <button class="remove-item" data-id="${item.id}" data-size="${item.size}">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </div>
            `;
            cartItemsEl.appendChild(li);
        });
        
        // Update totals
        subtotalEl.textContent = subtotal;
        const delivery = subtotal > 1000 ? 0 : 50; // Free delivery on orders over ₹1000
        const total = subtotal + delivery;
        
        document.querySelector('.delivery').textContent = `₹${delivery}`;
        totalEl.textContent = total;
    }

    function removeItem(e) {
        const id = parseInt(e.target.closest('button').dataset.id);
        const size = e.target.closest('button').dataset.size;
        cart = cart.filter(item => !(item.id === id && item.size === size));
        updateCart();
        showCartNotification('Item removed from cart');
    }

    function adjustQuantity(e, change) {
        const btn = e.target.closest('button');
        const id = parseInt(btn.dataset.id);
        const size = btn.dataset.size;
        const item = cart.find(item => item.id === id && item.size === size);
        
        if (change === 'increase') {
            item.quantity += 1;
        } else if (change === 'decrease' && item.quantity > 1) {
            item.quantity -= 1;
        } else {
            cart = cart.filter(i => !(i.id === id && i.size === size));
        }
        
        updateCart();
    }

    // ==================== UI HELPERS ====================
    function showCartNotification(message) {
        const notification = document.createElement('div');
        notification.className = 'cart-notification';
        notification.innerHTML = `
            <i class="fas fa-check-circle"></i>
            <span>${message}</span>
        `;
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.classList.add('show');
            setTimeout(() => {
                notification.classList.remove('show');
                setTimeout(() => notification.remove(), 300);
            }, 2000);
        }, 10);
    }

    function toggleCart() {
        cartSidebar.classList.toggle('active');
        cartOverlay.classList.toggle('active');
        document.body.style.overflow = cartSidebar.classList.contains('active') ? 'hidden' : '';
    }

    // ==================== EVENT LISTENERS ====================
    function setupEventListeners() {
        // Cart toggle
        cartIcon.addEventListener('click', toggleCart);
        closeCartBtn.addEventListener('click', toggleCart);
        cartOverlay.addEventListener('click', toggleCart);
        
        // Category tabs
        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                tabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                currentCategory = tab.dataset.category;
                displayProducts();
            });
        });
        
        // Checkout
        document.querySelector('.checkout-btn').addEventListener('click', () => {
            if (!cart.length) return alert('Your cart is empty!');
            
            const orderDetails = {
                date: new Date().toLocaleString(),
                items: cart,
                total: parseFloat(totalEl.textContent.replace('₹', ''))
            };
            
            console.log('Order placed:', orderDetails); // In real app, send to server
            alert(`Order successful! Total: ₹${orderDetails.total}\nWe'll contact you for delivery.`);
            
            cart = [];
            updateCart();
            toggleCart();
        });
        
        // Delegated events for dynamic elements
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('add-to-cart') || 
                e.target.closest('.add-to-cart')) {
                addToCart(e.target.classList.contains('add-to-cart') ? e : e.target.closest('.add-to-cart'));
            }
            
            if (e.target.classList.contains('remove-item') || 
                e.target.closest('.remove-item')) {
                removeItem(e);
            }
            
            if (e.target.classList.contains('plus') || 
                e.target.closest('.plus')) {
                adjustQuantity(e, 'increase');
            }
            
            if (e.target.classList.contains('minus') || 
                e.target.closest('.minus')) {
                adjustQuantity(e, 'decrease');
            }
        });
    }

    // ==================== START APP ====================
    init();

    // ==================== STYLES ====================
    const dynamicStyles = document.createElement('style');
    dynamicStyles.textContent = `
        .sort-select {
            padding: 8px 12px;
            border-radius: 20px;
            border: 1px solid var(--primary);
            font-family: 'Poppins', sans-serif;
            margin-left: 20px;
        }
        
        .popularity {
            color: #FFC107;
            font-size: 0.9rem;
            position: absolute;
            bottom: 10px;
            left: 50%;
            transform: translateX(-50%);
            background: rgba(0,0,0,0.7);
            padding: 2px 10px;
            border-radius: 10px;
        }
        
        .cart-notification {
            position: fixed;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%);
            background: var(--secondary);
            color: white;
            padding: 12px 24px;
            border-radius: 30px;
            box-shadow: 0 3px 10px rgba(0,0,0,0.2);
            display: flex;
            align-items: center;
            gap: 10px;
            opacity: 0;
            transition: opacity 0.3s;
            z-index: 1100;
        }
        
        .cart-notification.show {
            opacity: 1;
        }
        
        .empty-cart {
            text-align: center;
            padding: 20px;
            color: var(--gray);
        }
        
        .quantity-btn {
            transition: all 0.2s;
        }
        
        .quantity-btn:hover {
            background: #f0f0f0;
        }
        
        .remove-item {
            color: #ff4444;
            transition: color 0.2s;
        }
        
        .remove-item:hover {
            color: #cc0000;
        }
    `;
    document.head.appendChild(dynamicStyles);
});