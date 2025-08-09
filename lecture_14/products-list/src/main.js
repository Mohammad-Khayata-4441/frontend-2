

// npm install sweetalert2
import Swal from 'sweetalert2';

const API_URL = "https://fakestoreapi.com/products";

// حالة السلة في الذاكرة: Map<productId, { product, qty }>
const cart = new Map();



// عناصر DOM
const productsGrid = document.getElementById("products-grid");
const cartDrawer = document.getElementById("cart-drawer");
const overlay = document.getElementById("overlay");
const openCartBtn = document.getElementById("open-cart");
const closeCartBtn = document.getElementById("close-cart");
const cartCount = document.getElementById("cart-count");

const cartItemsEl = document.getElementById("cart-items");
const cartTotalEl = document.getElementById("cart-total");

// فتح/إغلاق السلة
openCartBtn.addEventListener("click", () => {
  cartDrawer.classList.remove("translate-x-full");
  overlay.classList.remove("hidden");
});


closeCartBtn.addEventListener("click", closeCart);

overlay.addEventListener("click", closeCart);

function closeCart() {
  cartDrawer.classList.add("translate-x-full");
  overlay.classList.add("hidden");
}

// جلب المنتجات
async function fetchProducts() {
  const res = await fetch(API_URL);
  if (!res.ok) throw new Error("Failed to fetch products");

  return res.json();
}

// توليد بطاقة منتج (مطابقة لقالبك قدر الإمكان)
function renderProductCard(product) {

  const price = `$${Number(product.price).toFixed(2)}`;
  return `
    <a class="max-w-[384px] mx-auto block">
      <div class="w-full max-w-sm aspect-square">
        <img src="${product.image}" 
             class="w-full h-full rounded-xl object-contain bg-white p-6">
      </div>
      <div class="mt-5 flex items-center justify-between">
        <div>
          <h6 class="font-medium text-xl leading-8 text-black mb-2 line-clamp-2">${product.title}</h6>
          <h6 class="font-semibold text-xl leading-8 text-indigo-600">${price}</h6>
        </div>
        <button
          class="add-to-cart p-2 min-[400px]:p-4 rounded-full bg-white border border-gray-300 flex items-center justify-center group shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-200 hover:border-gray-400 hover:bg-gray-50"
          data-id="${product.id}"
          aria-label="إضافة للسلة">
          <svg class="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
            xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
            <path d="M12.6892 21.125C12.6892 22.0225 11.9409 22.75 11.0177 22.75C10.0946 22.75 9.34632 22.0225 9.34632 21.125M19.3749 21.125C19.3749 22.0225 18.6266 22.75 17.7035 22.75C16.7804 22.75 16.032 22.0225 16.032 21.125M4.88917 6.5L6.4566 14.88C6.77298 16.5715 6.93117 17.4173 7.53301 17.917C8.13484 18.4167 8.99525 18.4167 10.7161 18.4167H18.0056C19.7266 18.4167 20.587 18.4167 21.1889 17.9169C21.7907 17.4172 21.9489 16.5714 22.2652 14.8798L22.8728 11.6298C23.3172 9.25332 23.5394 8.06508 22.8896 7.28254C22.2398 6.5 21.031 6.5 18.6133 6.5H4.88917ZM4.88917 6.5L4.33203 3.25"
              stroke-width="1.6" stroke-linecap="round" />
          </svg>
        </button>
      </div>
    </a>
  `;
}

// إضافة للسلة
function addToCart(product) {
  const existing = cart.get(product.id);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.set(product.id, { product, qty: 1 });
  }
  updateCartUI();

  // عرض Toast
  Swal.fire({
    toast: true,
    position: 'top-end',
    icon: 'success',
    title: 'تمت الإضافة إلى السلة',
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true
  });
}


// إزالة عنصر من السلة تماماً
function removeFromCart(productId) {
  cart.delete(productId);
  updateCartUI();
}

// زيادة/تنقيص الكمية
function increment(productId) {
  const item = cart.get(productId);
  if (!item) return;
  item.qty += 1;
  updateCartUI();
}

function decrement(productId) {
  const item = cart.get(productId);
  if (!item) return;
  item.qty -= 1;
  if (item.qty <= 0) cart.delete(productId);
  updateCartUI();
}

// رسم عناصر السلة
function renderCartItem({ product, qty }) {
  const price = Number(product.price);
  const lineTotal = (price * qty).toFixed(2);
  const safeTitle = escapeHtml(product.title);

  return `
    <div class="border rounded-lg p-3 flex gap-3">
      <img src="${product.image}" alt="${safeTitle}" class="w-16 h-16 object-contain bg-white rounded">
      <div class="flex-1">
        <div class="flex items-start justify-between gap-2">
          <h4 class="font-medium line-clamp-2">${safeTitle}</h4>
          <button class="text-red-600 hover:underline remove-item" data-id="${product.id}">حذف</button>
        </div>
        <div class="mt-2 flex items-center justify-between">
          <div class="flex items-center gap-2">
            <button class="decrement rounded border px-2" data-id="${product.id}">-</button>
            <span class="px-2">${qty}</span>
            <button class="increment rounded border px-2" data-id="${product.id}">+</button>
          </div>
          <div class="font-semibold">$${lineTotal}</div>
        </div>
      </div>
    </div>
  `;
}

// تحديث واجهة السلة والعداد والإجمالي
function updateCartUI() {
  // عدّاد السلة
  const count = Array.from(cart.values()).reduce((acc, it) => acc + it.qty, 0);
  cartCount.textContent = count;

  // عناصر السلة
  if (cart.size === 0) {
    cartItemsEl.innerHTML = `<p class="text-center text-gray-500">السلة فارغة</p>`;
  } else {
    cartItemsEl.innerHTML = Array.from(cart.values()).map(renderCartItem).join("");
  }

  // الإجمالي
  const total = Array.from(cart.values()).reduce((acc, it) => acc + it.product.price * it.qty, 0);
  cartTotalEl.textContent = `$${total.toFixed(2)}`;
}

// التعامل مع نقرات المنتجات (إضافة إلى السلة) عبر التفويض
productsGrid.addEventListener("click", (e) => {
  const btn = e.target.closest(".add-to-cart");
  if (!btn) return;
  const id = Number(btn.dataset.id);
  // الحصول على بيانات المنتج من بطاقة DOM (أو نخزن قائمة المنتجات)
  // الأفضل: نخزن المنتجات بعد الجلب
  const product = productsCache.find((p) => p.id === id);
  if (product) addToCart(product);
});

// التعامل مع نقرات السلة (حذف/زيادة/تنقيص) عبر التفويض
cartItemsEl.addEventListener("click", (e) => {
  const removeBtn = e.target.closest(".remove-item");
  const incBtn = e.target.closest(".increment");
  const decBtn = e.target.closest(".decrement");

  if (removeBtn) {
    removeFromCart(Number(removeBtn.dataset.id));
    return;
  }
  if (incBtn) {
    increment(Number(incBtn.dataset.id));
    return;
  }
  if (decBtn) {
    decrement(Number(decBtn.dataset.id));
    return;
  }
});

// كاش محلي للمنتجات بعد الجلب
let productsCache = [];

// حماية بسيطة للنص
function escapeHtml(str) {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

// تشغيل
(async function init() {
  try {
    const products = await fetchProducts();
    productsCache = products;


    productsGrid.innerHTML = products.map(renderProductCard).join("");


    updateCartUI();


  } catch (err) {
    console.error(err);
    productsGrid.innerHTML = `<p class="text-red-600">حدث خطأ أثناء جلب المنتجات.</p>`;
  }
})();
