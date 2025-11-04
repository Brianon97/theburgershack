document.addEventListener('DOMContentLoaded', function () {
    
    // === CART CONFIG ===
    const CART_KEY = 'shoppingCart';
    const deals = {
        'Meal deal for 1': 10,
        'Meal deal for 2': 15,
        'Mega deal for 3+': 25,
        'Student deals': 10,
        'Group bundles': 50,
        'Group bundles 50+': 0
    };

    // Load cart
    function loadCart() {
        const saved = localStorage.getItem(CART_KEY);
        return saved ? JSON.parse(saved) : { items: [], total: 0 };
    }

    // Save cart
    function saveCart(cart) {
        localStorage.setItem(CART_KEY, JSON.stringify(cart));
    }

    // Add to cart
    function addToCart(title, price) {
        const cart = loadCart();
        cart.items.push({ title, price, id: Date.now() });
        cart.total += price;
        saveCart(cart);
        updateCartUI();
        showToast(`Added "${title}" to cart! (€${price})`);
    }

    // Remove from cart
    function removeFromCart(id) {
        const cart = loadCart();
        const item = cart.items.find(item => item.id === id);
        if (item) {
            cart.items = cart.items.filter(item => item.id !== id);
            cart.total -= item.price;
            saveCart(cart);
            updateCartUI();
            showToast('Item removed from cart.');
        }
    }

    // Update navbar + modal
    function updateCartUI() {
        const cart = loadCart();
        const count = cart.items.length;

        let cartNav = document.querySelector('.nav-item[data-cart]');
        if (!cartNav) {
            const navList = document.querySelector('.navbar-nav');
            if (navList) {
                cartNav = document.createElement('li');
                cartNav.className = 'nav-item';
                cartNav.setAttribute('data-cart', 'true');
                cartNav.innerHTML = `<a class="nav-link" href="#" data-bs-toggle="modal" data-bs-target="#cartModal">
                    Shopping Cart ${count > 0 ? `<span class="badge bg-danger ms-1">${count}</span>` : ''}
                </a>`;
                navList.appendChild(cartNav);
            }
        } else {
            const link = cartNav.querySelector('a');
            const badge = link.querySelector('.badge');
            if (count > 0) {
                if (badge) badge.textContent = count;
                else link.insertAdjacentHTML('beforeend', `<span class="badge bg-danger ms-1">${count}</span>`);
            } else if (badge) {
                badge.remove();
            }
        }

        // Modal
        let modal = document.getElementById('cartModal');
        if (!modal) {
            modal = createCartModal();
            document.body.appendChild(modal);
        }
        modal.querySelector('.modal-body').innerHTML = generateCartHTML(cart);
    }

    function generateCartHTML(cart) {
        if (cart.items.length === 0) {
            return '<p class="text-center">Your cart is empty. <a href="#deals">Browse deals!</a></p>';
        }
        let html = '<div class="list-group">';
        cart.items.forEach(item => {
            html += `
                <div class="list-group-item d-flex justify-content-between align-items-center">
                    <div>
                        <h6>${item.title}</h6>
                        <small class="text-muted">€${item.price}</small>
                    </div>
                    <button class="btn btn-sm btn-outline-danger" onclick="removeFromCart(${item.id})">Remove</button>
                </div>
            `;
        });
        html += `</div><hr><p class="text-end"><strong>Total: €${cart.total}</strong></p>`;
        html += '<div class="d-grid"><button class="btn btn-success">Proceed to Checkout</button></div>';
        return html;
    }

    function createCartModal() {
        const modal = document.createElement('div');
        modal.className = 'modal fade';
        modal.id = 'cartModal';
        modal.tabIndex = -1;
        modal.innerHTML = `
            <div class="modal-dialog modal-dialog-scrollable">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Shopping Cart</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div class="modal-body"></div>
                </div>
            </div>
        `;
        return modal;
    }

    // Toast
function showToast(message, isSuccess = true) {
    let container = document.getElementById('toastContainer');
    if (!container) {
        container = document.createElement('div');
        container.id = 'toastContainer';
        container.className = 'toast-container position-fixed top-0 end-0 p-3';
        document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    const bgClass = isSuccess ? 'bg-warning' : 'bg-danger';
    toast.className = `toast align-items-center text-white ${bgClass} border-0`;
    toast.role = 'alert';
    toast.innerHTML = `
        <div class="d-flex">
            <div class="toast-body">${message}</div>
            <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"></button>
        </div>
    `;
    container.appendChild(toast);

    const bsToast = new bootstrap.Toast(toast, { delay: 3000 });
    bsToast.show();
    toast.addEventListener('hidden.bs.toast', () => toast.remove());
}

    // === Order Now Buttons ===
    document.addEventListener('click', function (e) {
        if (e.target && e.target.id === 'button' && e.target.textContent.trim() === 'Order now') {
            e.preventDefault();
            const card = e.target.closest('.card');
            const title = card.querySelector('.card-title').textContent.trim();
            const price = deals[title] || 0;
            if (price > 0) {
                addToCart(title, price);
            } else {
                showToast('Custom deal — contact us for pricing!');
            }
        }
    });

    // === All Deals Button (smooth scroll) ===
    const allDealsBtn = document.querySelector('button[onclick*="form"]');
    if (allDealsBtn) {
        allDealsBtn.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector('#form').scrollIntoView({ behavior: 'smooth' });
        });
    }

    // === Init ===
    updateCartUI();

    // Expose for inline onclick
    window.removeFromCart = removeFromCart;
});

