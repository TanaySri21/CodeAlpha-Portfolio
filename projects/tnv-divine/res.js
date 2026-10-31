// ======================================
// TNV DIVINE - RESTAURANT WEBSITE
// ======================================

// Product menu
const products = [
  { id: 1, name: "Masala Dosa", category: "Indian", price: 140, description: "Crispy dosa served with chutney and sambar.", image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=600" },
  { id: 2, name: "Paneer Tikka", category: "Indian", price: 240, description: "Smoky grilled paneer with Indian spices.", image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=600" },
  { id: 3, name: "Veg Biryani", category: "Indian", price: 190, description: "Aromatic rice cooked with vegetables and spices.", image: "https://images.unsplash.com/photo-1563379091339-03246963d96c?w=600" },
  { id: 4, name: "Butter Chicken", category: "Indian", price: 320, description: "Creamy tomato gravy with tender chicken.", image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=600" },
  { id: 5, name: "Pasta Alfredo", category: "Italian", price: 260, description: "Creamy white sauce pasta with herbs.", image: "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?w=600" },
  { id: 6, name: "Margherita Pizza", category: "Italian", price: 280, description: "Classic pizza with cheese, tomato and basil.", image: "https://images.unsplash.com/photo-1579751626657-72bc17010498?w=600" },
  { id: 7, name: "Veg Sandwich", category: "Snacks", price: 120, description: "Fresh vegetables layered between toasted bread.", image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=600" },
  { id: 8, name: "French Fries", category: "Snacks", price: 100, description: "Golden crispy fries with seasoning.", image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=600" },
  { id: 9, name: "Samosa", category: "Snacks", price: 50, description: "Crispy pastry filled with spicy potato.", image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600" },
  { id: 10, name: "Chocolate Brownie", category: "Desserts", price: 130, description: "Rich chocolate brownie for your sweet cravings.", image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600" },
  { id: 11, name: "Gulab Jamun", category: "Desserts", price: 90, description: "Soft milk dumplings soaked in sugar syrup.", image: "https://images.unsplash.com/photo-1666190092159-6b6e9b7f4a9a?w=600" },
  { id: 12, name: "Pancakes", category: "Desserts", price: 160, description: "Fluffy pancakes served with sweet toppings.", image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=600" },
  { id: 13, name: "Cold Coffee", category: "Drinks", price: 110, description: "Chilled coffee blended with creamy milk.", image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600" },
  { id: 14, name: "Mango Lassi", category: "Drinks", price: 100, description: "Refreshing mango yoghurt drink.", image: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=600" },
  { id: 15, name: "Fresh Lemonade", category: "Drinks", price: 80, description: "Fresh lemon drink with a refreshing twist.", image: "https://images.unsplash.com/photo-1513558161293-cdaf765edfd4?w=600" },
  { id: 16, name: "Caesar Salad", category: "Snacks", price: 180, description: "Fresh greens with a delicious creamy dressing.", image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=600" },
  { id: 17, name: "Chole Bhature", category: "Indian", price: 160, description: "Fluffy bhature served with spicy chole.", image: "https://images.unsplash.com/photo-1626132647523-66f5bf380027?w=600" },
  { id: 18, name: "Dal Makhani", category: "Indian", price: 220, description: "Creamy slow-cooked black lentils.", image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600" },
  { id: 19, name: "Tandoori Roti", category: "Indian", price: 35, description: "Freshly baked Indian bread from the tandoor.", image: "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?w=600" },
  { id: 20, name: "Chicken Biryani", category: "Indian", price: 280, description: "Flavourful rice cooked with aromatic spices.", image: "https://images.unsplash.com/photo-1563379091339-03246963d96c?w=600" },
  { id: 21, name: "Idli Sambar", category: "Indian", price: 100, description: "Soft steamed idlis served with hot sambar.", image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=600" },
  { id: 22, name: "Hot Chocolate", category: "Drinks", price: 150, description: "Warm and rich chocolate drink.", image: "https://images.unsplash.com/photo-1542990253-0b8be9b9b8a3?w=600" },
  { id: 23, name: "Cheese Garlic Bread", category: "Snacks", price: 140, description: "Toasted garlic bread topped with melted cheese.", image: "https://images.unsplash.com/photo-1573140401552-3fab0b24306f?w=600" },
  { id: 24, name: "Chocolate Ice Cream", category: "Desserts", price: 120, description: "Creamy chocolate ice cream served chilled.", image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600" }
];

// Get HTML element by ID
const $ = (id) => document.getElementById(id);

// Safely read saved data
function readStorage(key, fallback = []) {
  try {
    const value = JSON.parse(localStorage.getItem(key));
    return value ?? fallback;
  } catch {
    return fallback;
  }
}

// Cart data
let cart = readStorage("tnvCart", []);

if (!Array.isArray(cart)) {
  cart = [];
}

function saveCart() {
  localStorage.setItem("tnvCart", JSON.stringify(cart));
}

function money(amount) {
  return "₹" + amount.toLocaleString("en-IN");
}

function showToast(message) {
  const toast = $("toast");
  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(window.toastTimer);

  window.toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 2500);
}

function getLocalDate() {
  const now = new Date();
  const local = new Date(now.getTime() - now.getTimezoneOffset() * 60000);
  return local.toISOString().split("T")[0];
}

// ======================================
// MENU DISPLAY
// ======================================

function renderMenu() {
  const search = $("searchInput").value.toLowerCase().trim();
  const category = $("categoryFilter").value;

  const filtered = products.filter(product => {
    const matchesSearch =
      product.name.toLowerCase().includes(search) ||
      product.description.toLowerCase().includes(search);

    const matchesCategory =
      category === "All" || product.category === category;

    return matchesSearch && matchesCategory;
  });

  $("menuGrid").innerHTML = "";
  $("noProducts").classList.toggle("hidden", filtered.length !== 0);

  filtered.forEach(product => {
    const card = document.createElement("article");
    card.className = "food-card";

    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}"
        onerror="this.onerror=null;this.src='https://placehold.co/600x400/f8eee4/963b25?text=TNV+Divine'">

      <div class="food-info">
        <span class="food-category">${product.category}</span>
        <h3>${product.name}</h3>
        <p>${product.description}</p>

        <div class="food-bottom">
          <span class="food-price">${money(product.price)}</span>

          <button class="add-btn" data-add="${product.id}">
            <i class="fa-solid fa-plus"></i> Add to Cart
          </button>
        </div>
      </div>
    `;

    $("menuGrid").appendChild(card);
  });
}

$("searchInput").addEventListener("input", renderMenu);
$("categoryFilter").addEventListener("change", renderMenu);

$("menuGrid").addEventListener("click", event => {
  const button = event.target.closest("[data-add]");

  if (button) {
    addToCart(Number(button.dataset.add));
  }
});

// ======================================
// SHOPPING CART
// ======================================

function addToCart(id) {
  const product = products.find(item => item.id === id);

  if (!product) return;

  const existing = cart.find(item => item.id === id);

  if (existing) {
    existing.quantity++;
  } else {
    cart.push({
      id: product.id,
      quantity: 1
    });
  }

  saveCart();
  renderCart();
  showToast(product.name + " added to your cart!");
}

function changeQuantity(id, amount) {
  const item = cart.find(product => product.id === id);

  if (!item) return;

  item.quantity += amount;

  if (item.quantity <= 0) {
    cart = cart.filter(product => product.id !== id);
  }

  saveCart();
  renderCart();
}

function removeFromCart(id) {
  cart = cart.filter(item => item.id !== id);

  saveCart();
  renderCart();

  showToast("Item removed from cart.");
}

function getSubtotal() {
  return cart.reduce((total, item) => {
    const product = products.find(p => p.id === item.id);

    return total + (product ? product.price * item.quantity : 0);
  }, 0);
}

function getDiscount() {
  const subtotal = getSubtotal();
  return subtotal >= 1000 ? Math.round(subtotal * 0.10) : 0;
}

function getDelivery() {
  const subtotal = getSubtotal();

  if (subtotal === 0 || subtotal >= 499) {
    return 0;
  }

  return 40;
}

function getFinalTotal() {
  return getSubtotal() - getDiscount() + getDelivery();
}

function renderCart() {
  const container = $("cartItems");

  const count = cart.reduce((total, item) => {
    return total + item.quantity;
  }, 0);

  const subtotal = getSubtotal();
  const discount = getDiscount();
  const delivery = getDelivery();
  const total = getFinalTotal();

  $("cartCount").textContent = count;

  if (cart.length === 0) {
    container.innerHTML = `
      <div class="empty-cart">
        <i class="fa-solid fa-basket-shopping"></i>
        <h3>Your cart is empty</h3>
        <p>Explore our menu and add something delicious!</p>
        <a href="#menu" class="btn btn-primary">Explore Menu</a>
      </div>
    `;
  } else {
    container.innerHTML = "";

    cart.forEach(item => {
      const product = products.find(p => p.id === item.id);

      if (!product) return;

      const row = document.createElement("div");
      row.className = "cart-row";

      row.innerHTML = `
        <img src="${product.image}" alt="${product.name}"
          onerror="this.onerror=null;this.src='https://placehold.co/200x150/f8eee4/963b25?text=Food'">

        <div>
          <h4>${product.name}</h4>
          <small>${money(product.price)} each</small>

          <div class="quantity-controls">
            <button data-minus="${product.id}" aria-label="Decrease quantity">−</button>
            <strong>${item.quantity}</strong>
            <button data-plus="${product.id}" aria-label="Increase quantity">+</button>
          </div>

          <button class="remove-btn" data-remove="${product.id}">
            Remove item
          </button>
        </div>

        <strong>${money(product.price * item.quantity)}</strong>
      `;

      container.appendChild(row);
    });
  }

  $("subtotal").textContent = money(subtotal);
  $("discount").textContent = "-" + money(discount);
  $("delivery").textContent = money(delivery);
  $("grandTotal").textContent = money(total);

  $("vipStatus").textContent = subtotal >= 1000
    ? "Congratulations! Your 10% VIP discount is unlocked."
    : `Add ${money(1000 - subtotal)} more to unlock your 10% VIP discount.`;

  $("checkoutButton").disabled = cart.length === 0;
  $("paymentAmount").textContent = money(total);
}

$("cartItems").addEventListener("click", event => {
  const plus = event.target.closest("[data-plus]");
  const minus = event.target.closest("[data-minus]");
  const remove = event.target.closest("[data-remove]");

  if (plus) {
    changeQuantity(Number(plus.dataset.plus), 1);
  }

  if (minus) {
    changeQuantity(Number(minus.dataset.minus), -1);
  }

  if (remove) {
    removeFromCart(Number(remove.dataset.remove));
  }
});

// ======================================
// CHECKOUT AND PAYMENT DEMO
// ======================================

$("checkoutButton").addEventListener("click", () => {
  if (cart.length === 0) {
    showToast("Please add items to your cart first.");
    return;
  }

  $("paymentAmount").textContent = money(getFinalTotal());
  $("paymentSection").classList.remove("hidden");

  $("paymentSection").scrollIntoView({
    behavior: "smooth"
  });
});

$("payButton").addEventListener("click", () => {
  if (cart.length === 0) {
    $("paymentMessage").textContent =
      "Your cart is empty. Please add items first.";
    return;
  }

  const method = $("paymentMethod").value;
  const total = getFinalTotal();
  const orderId = "TNV" + Date.now().toString().slice(-8);

  const orderItems = cart.map(item => {
    const product = products.find(p => p.id === item.id);

    return product
      ? `${product.name} × ${item.quantity}`
      : "";
  }).filter(Boolean);

  $("receiptDetails").innerHTML = `
    <p><strong>Order ID:</strong> ${orderId}</p>
    <p><strong>Items:</strong> ${orderItems.join(", ")}</p>
    <p><strong>Payment:</strong> ${method}</p>
    <p><strong>Total:</strong> ${money(total)}</p>
    <p><strong>Status:</strong> Demo order successful</p>
  `;

  $("receiptModal").classList.remove("hidden");

  cart = [];
  saveCart();
  renderCart();

  $("paymentSection").classList.add("hidden");
  $("paymentMessage").textContent = "";
});

function closeReceipt() {
  $("receiptModal").classList.add("hidden");
  showToast("Thank you! Visit TNV Divine again.");
}

$("closeReceipt").addEventListener("click", closeReceipt);
$("doneButton").addEventListener("click", closeReceipt);

// ======================================
// TABLE BOOKING
// ======================================

function getReservations() {
  return readStorage("tnvReservations", []);
}

function saveReservations(reservations) {
  localStorage.setItem("tnvReservations", JSON.stringify(reservations));
}

function renderReservations() {
  const reservations = getReservations();
  const container = $("reservationList");

  container.innerHTML = "";

  if (reservations.length === 0) {
    container.innerHTML = `
      <p class="empty-message">
        You haven't made any reservations yet.
      </p>
    `;
    return;
  }

  reservations.slice().reverse().forEach(booking => {
    const card = document.createElement("div");
    card.className = "reservation-card";

    const heading = document.createElement("h4");
    heading.textContent = "Reservation " + booking.id;

    const details = [
      ["Customer", booking.name],
      ["Table Number", booking.tableNumber],
      ["Date", booking.date],
      ["Time", booking.time],
      ["Guests", booking.guests],
      ["Restaurant", booking.location]
    ];

    card.appendChild(heading);

    details.forEach(([label, value]) => {
      const paragraph = document.createElement("p");
      const strong = document.createElement("strong");

      strong.textContent = label + ": ";
      paragraph.appendChild(strong);
      paragraph.appendChild(document.createTextNode(String(value)));

      card.appendChild(paragraph);
    });

    const status = document.createElement("span");
    status.className = "reservation-status";
    status.textContent = "Booking Request Saved";

    card.appendChild(status);
    container.appendChild(card);
  });
}

$("bookingDate").min = getLocalDate();

$("bookingForm").addEventListener("submit", event => {
  event.preventDefault();

  const name = $("customerName").value.trim();
  const date = $("bookingDate").value;
  const time = $("bookingTime").value;
  const guests = $("guestCount").value;

  if (!name || !date || !time || !guests) {
    $("bookingMessage").textContent =
      "Please fill in all booking details.";
    return;
  }

  const today = getLocalDate();

  if (date < today) {
    $("bookingMessage").textContent =
      "Please select a future date.";
    return;
  }

  if (date === today) {
    const selected = new Date(`${date}T${time}`);

    if (selected <= new Date()) {
      $("bookingMessage").textContent =
        "Please select a future time.";
      return;
    }
  }

  const reservations = getReservations();

  const reservation = {
    id: "TNV" + Date.now().toString().slice(-8),
    name: name,
    date: date,
    time: time,
    guests: guests,
    tableNumber: "T-" + String((reservations.length % 20) + 1).padStart(2, "0"),
    location: "Greater Noida, Delhi-NCR"
  };

  reservations.push(reservation);
  saveReservations(reservations);

  $("bookingMessage").textContent =
    "Your reservation details have been saved successfully!";

  $("bookingForm").reset();
  $("bookingDate").min = getLocalDate();

  renderReservations();

  $("reservationList").scrollIntoView({
    behavior: "smooth",
    block: "nearest"
  });

  showToast("Your table reservation has been saved!");
});

$("viewReservations").addEventListener("click", () => {
  renderReservations();

  $("reservationList").scrollIntoView({
    behavior: "smooth",
    block: "nearest"
  });
});

// ======================================
// SUGGESTION AND COMPLAINT BOX
// ======================================

function getFeedback() {
  return readStorage("tnvFeedback", []);
}

function saveFeedback(feedback) {
  localStorage.setItem("tnvFeedback", JSON.stringify(feedback));
}

// Display submitted feedback on the page
function renderFeedback() {
  const feedbackEntries = getFeedback();
  const container = $("feedbackList");

  container.innerHTML = "";

  $("feedbackCount").textContent = feedbackEntries.length;

  if (feedbackEntries.length === 0) {
    container.innerHTML = `
      <p class="empty-message">
        No feedback submitted yet. Your feedback will appear here.
      </p>
    `;
    return;
  }

  // Latest feedback appears first
  feedbackEntries.slice().reverse().forEach(entry => {
    const card = document.createElement("div");
    card.className = "feedback-card";

    const top = document.createElement("div");
    top.className = "feedback-card-top";

    const type = document.createElement("span");
    type.className = "feedback-type";
    type.textContent = entry.type;

    const date = document.createElement("span");
    date.className = "feedback-date";
    date.textContent = entry.date;

    top.append(type, date);

    const name = document.createElement("h4");
    name.textContent = "Submitted by: " + entry.name;

    const message = document.createElement("p");
    message.textContent = entry.message;

    const email = document.createElement("p");
    email.className = "feedback-email";
    email.textContent = "Email: " + entry.email;

    card.append(top, name, message, email);
    container.appendChild(card);
  });
}

// Submit feedback form
$("suggestionForm").addEventListener("submit", event => {
  event.preventDefault();

  const name = $("feedbackName").value.trim();
  const email = $("feedbackEmail").value.trim();
  const type = $("feedbackType").value;
  const message = $("feedbackMessage").value.trim();

  if (!name || !email || !type || !message) {
    $("feedbackStatus").textContent =
      "Please complete all fields.";
    return;
  }

  const feedback = getFeedback();

  const newEntry = {
    name: name,
    email: email,
    type: type,
    message: message,
    date: new Date().toLocaleString("en-IN")
  };

  feedback.push(newEntry);
  saveFeedback(feedback);

  // Immediately show the newly submitted feedback
  renderFeedback();

  $("feedbackStatus").textContent =
    "Thank you! Your feedback has been submitted successfully.";

  $("suggestionForm").reset();

  showToast("Your feedback has been submitted!");

  $("feedbackList").scrollIntoView({
    behavior: "smooth",
    block: "nearest"
  });
});

// ======================================
// MOBILE NAVIGATION
// ======================================

$("menuToggle").addEventListener("click", () => {
  $("navLinks").classList.toggle("open");
});

$("navLinks").addEventListener("click", event => {
  if (event.target.closest("a")) {
    $("navLinks").classList.remove("open");
  }
});

// ======================================
// INITIAL PAGE SETUP
// ======================================

renderMenu();
renderCart();
renderReservations();
renderFeedback();