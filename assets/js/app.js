// Bertrand Prototype - Main JavaScript

// State Management
const state = {
  cart: [],
  currentOrder: null,
  orders: [
    {
      id: 'BL-2025-001847',
      status: 'pending',
      items: [{ title: 'Educar sem Pressa', author: 'Filipa Malo Franco', price: 16.19, qty: 1 }],
      total: 16.19,
      store: 'Livraria Bertrand Chiado',
      date: new Date().toISOString(),
      notificationsSent: ['email-confirmacao', 'sms-confirmacao']
    }
  ],
  user: {
    name: 'João Silva',
    email: 'joao.silva@email.pt',
    phone: '+351 912 345 678',
    loyaltyPoints: 2450
  }
};

// Initialize
document.addEventListener('DOMContentLoaded', function() {
  initNavigation();
  initAccordions();
  initForms();
  updateCartBadge();
  checkPageSpecific();
});

// Navigation
function initNavigation() {
  // Mobile menu toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const mobileMenu = document.querySelector('.mobile-menu');

  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('active');
    });
  }
}

// Accordion
function initAccordions() {
  document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
      const item = header.parentElement;
      const wasActive = item.classList.contains('active');

      // Close all items in same accordion
      const accordion = item.parentElement;
      accordion.querySelectorAll('.accordion-item').forEach(i => {
        i.classList.remove('active');
      });

      // Toggle clicked item
      if (!wasActive) {
        item.classList.add('active');
      }
    });
  });
}

// Forms
function initForms() {
  // Add to cart form
  const addToCartForm = document.getElementById('addToCartForm');
  if (addToCartForm) {
    addToCartForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const qty = parseInt(document.getElementById('quantity').value) || 1;
      addToCart(qty);
    });
  }

  // Checkout form
  const checkoutForm = document.getElementById('checkoutForm');
  if (checkoutForm) {
    checkoutForm.addEventListener('submit', (e) => {
      e.preventDefault();
      processCheckout();
    });
  }

  // Contact form
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      showContactSuccess();
    });
  }

  // Support case filter
  const filterButtons = document.querySelectorAll('.filter-btn');
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      filterSupportCases(btn.dataset.filter);
    });
  });
}

// Cart Functions
function addToCart(quantity) {
  const product = {
    id: '1',
    title: 'Educar sem Pressa',
    author: 'Filipa Malo Franco',
    price: 16.19,
    quantity: quantity
  };

  state.cart.push(product);
  updateCartBadge();
  showNotification('Livro adicionado ao cesto!');
}

function updateCartBadge() {
  const badge = document.querySelector('.cart-badge');
  if (badge) {
    const total = state.cart.reduce((sum, item) => sum + item.quantity, 0);
    badge.textContent = total;
  }
}

function getCartTotal() {
  return state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
}

// Checkout
function processCheckout() {
  const deliveryMethod = document.querySelector('input[name="delivery"]:checked')?.value;
  const store = document.getElementById('storeSelect')?.value;
  const name = document.getElementById('nome')?.value;
  const email = document.getElementById('email')?.value;
  const phone = document.getElementById('telemovel')?.value;

  // Create order
  const order = {
    id: 'BL-' + new Date().getFullYear() + '-' + String(Math.floor(Math.random() * 999999)).padStart(6, '0'),
    items: [...state.cart],
    total: getCartTotal(),
    deliveryMethod: deliveryMethod,
    store: store,
    customer: { name, email, phone },
    status: 'confirmed',
    date: new Date().toISOString()
  };

  state.currentOrder = order;
  state.orders.push(order);

  // Generate order number URL param
  const url = new URL('confirmacao.html', window.location.origin);
  url.searchParams.set('order', order.id);

  window.location.href = url.toString();
}

// Order Tracking
function loadOrder(orderId) {
  const order = state.orders.find(o => o.id === orderId);
  if (order) {
    state.currentOrder = order;
    updateOrderDisplay(order);
  }
}

function updateOrderDisplay(order) {
  // Update order details
  const orderNumberEl = document.getElementById('orderNumber');
  const orderTotalEl = document.getElementById('orderTotal');
  const orderStoreEl = document.getElementById('orderStore');

  if (orderNumberEl) orderNumberEl.textContent = order.id;
  if (orderTotalEl) orderTotalEl.textContent = '€' + order.total.toFixed(2);
  if (orderStoreEl) orderStoreEl.textContent = order.store;

  // Update timeline
  updateTimeline(order.status);
}

function updateTimeline(status) {
  const statuses = ['pending', 'payment', 'preparing', 'ready', 'pickedup'];
  const currentIndex = statuses.indexOf(status);

  document.querySelectorAll('.timeline-step').forEach((step, index) => {
    step.classList.remove('completed', 'active');

    if (index < currentIndex) {
      step.classList.add('completed');
    } else if (index === currentIndex) {
      step.classList.add('active');
    }
  });
}

function markOrderReady() {
  if (state.currentOrder) {
    state.currentOrder.status = 'ready';
    state.currentOrder.notificationsSent.push('email-pronta', 'sms-pronta');
    updateTimeline('ready');
    showNotification('Encomenda marcada como pronta para levantamento!');
  }
}

// Notifications
function showNotification(message) {
  const notification = document.createElement('div');
  notification.className = 'notification-toast';
  notification.style.cssText = `
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    background: #333;
    color: white;
    padding: 12px 24px;
    border-radius: 4px;
    z-index: 2000;
    animation: slideUp 0.3s ease;
  `;
  notification.textContent = message;

  document.body.appendChild(notification);

  setTimeout(() => {
    notification.remove();
  }, 3000);
}

// Contact Form
function showContactSuccess() {
  const form = document.getElementById('contactForm');
  const success = document.getElementById('contactSuccess');

  if (form && success) {
    form.style.display = 'none';
    success.style.display = 'block';
  }
}

// Support Cases Filter
function filterSupportCases(filter) {
  const rows = document.querySelectorAll('.support-case-row');

  rows.forEach(row => {
    const status = row.dataset.status;
    const priority = row.dataset.priority;

    let visible = true;

    if (filter === 'pending') {
      visible = status === 'pending' || status === 'in_progress';
    } else if (filter === 'urgent') {
      visible = priority === 'high';
    } else if (filter === 'completed') {
      visible = status === 'completed';
    }

    row.style.display = visible ? '' : 'none';
  });
}

// Page Specific Initialization
function checkPageSpecific() {
  const path = window.location.pathname;

  // Order confirmation page
  if (path.includes('confirmacao.html')) {
    const urlParams = new URLSearchParams(window.location.search);
    const orderId = urlParams.get('order');
    if (orderId) {
      loadOrder(orderId);
    }
  }

  // Tracking page
  if (path.includes('acompanhar.html')) {
    const urlParams = new URLSearchParams(window.location.search);
    const orderId = urlParams.get('order');
    if (orderId) {
      loadOrder(orderId);
    }
  }

  // Backoffice demo
  if (path.includes('backoffice.html')) {
    renderSupportCases();
  }
}

// Backoffice Support Cases
function renderSupportCases() {
  const cases = [
    { id: 1, customer: 'Ana Costa', order: 'BL-2025-001845', channel: 'Email', status: 'pending', priority: 'normal', lastContact: '23/02/2026 14:30' },
    { id: 2, customer: 'João Santos', order: 'BL-2025-001846', channel: 'WhatsApp', status: 'in_progress', priority: 'high', lastContact: '23/02/2026 15:45' },
    { id: 3, customer: 'Maria Ferreira', order: 'BL-2025-001847', channel: 'Telefone', status: 'completed', priority: 'normal', lastContact: '23/02/2026 10:15' },
    { id: 4, customer: 'Pedro Martins', order: 'BL-2025-001848', channel: 'Email', status: 'pending', priority: 'high', lastContact: '23/02/2026 16:00' },
    { id: 5, customer: 'Sofia Rodrigues', order: 'BL-2025-001849', channel: 'Formulário', status: 'in_progress', priority: 'normal', lastContact: '23/02/2026 11:20' },
  ];

  const tbody = document.getElementById('supportCasesTable');
  if (tbody) {
    tbody.innerHTML = cases.map(c => `
      <tr class="support-case-row" data-status="${c.status}" data-priority="${c.priority}">
        <td>${c.customer}</td>
        <td><a href="acompanhar.html?order=${c.order}">${c.order}</a></td>
        <td>${c.channel}</td>
        <td><span class="badge badge-${getStatusBadge(c.status)}">${getStatusText(c.status)}</span></td>
        <td>${c.lastContact}</td>
        <td>${getNextAction(c.status)}</td>
        <td><span class="badge badge-${c.priority === 'high' ? 'danger' : 'info'}">${c.priority === 'high' ? 'Urgente' : 'Normal'}</span></td>
        <td><button class="btn btn-secondary" onclick="viewCase(${c.id})">Ver</button></td>
      </tr>
    `).join('');
  }
}

function getStatusBadge(status) {
  const badges = {
    'pending': 'warning',
    'in_progress': 'info',
    'completed': 'success'
  };
  return badges[status] || 'info';
}

function getStatusText(status) {
  const texts = {
    'pending': 'Pendente',
    'in_progress': 'Em curso',
    'completed': 'Concluído'
  };
  return texts[status] || status;
}

function getNextAction(status) {
  const actions = {
    'pending': 'Contactar cliente',
    'in_progress': 'Aguardar resposta',
    'completed': 'Arquivar'
  };
  return actions[status] || '-';
}

function viewCase(id) {
  // Open order tracking
  window.location.href = 'acompanhar.html?order=BL-2025-001847';
}

// Presentation Mode Quick Nav
function showPresentationNav() {
  // Show/hide presentation navigation
}

// Animation
const style = document.createElement('style');
style.textContent = `
  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateX(-50%) translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateX(-50%) translateY(0);
    }
  }

  .notification-toast {
    animation: slideUp 0.3s ease;
  }
`;
document.head.appendChild(style);
