// payment.js

import Swal from 'sweetalert2';

const CART_KEY = "my_cart";
const form = document.getElementById("payment-form");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());
    console.log("Payment payload (demo only):", payload);

    // تفريغ السلة
    localStorage.removeItem(CART_KEY);

    // إشعار نجاح الدفع
    await Swal.fire({
        icon: "success",
        title: "تم الدفع بنجاح",
        text: "شكراً لك! سيتم التواصل معك عند تجهيز الطلب.",
        confirmButtonText: "حسناً",
    });

    // رجوع للصفحة الرئيسية
    window.location.href = "/";
});
