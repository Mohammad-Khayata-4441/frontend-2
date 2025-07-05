 

````markdown
# 🌈 أساسيات لغة CSS

CSS هي اختصار لـ **Cascading Style Sheets**، وتُستخدم لتنسيق وتصميم صفحات الويب وجعلها أكثر جاذبية وتنظيمًا.

---

## 1️⃣ ما هو CSS؟ ولماذا نستخدمه؟

- CSS تسمح لك بالتحكم في:
  - الألوان والخطوط
  - توزيع العناصر ومسافاتها
  - الاستجابة لأحجام الشاشات
  - وغير ذلك الكثير

---

## 2️⃣ أين نكتب كود CSS؟

1. **ملف خارجي:**  
   يفضل في المشاريع الحقيقية  
   ```html
   <link rel="stylesheet" href="style.css">
````

2. **داخل وسم `<style>` في ملف HTML:**

   ```html
   <style>
     p { color: red; }
   </style>
   ```

3. **Inline (داخل الوسم نفسه):**

   ```html
   <p style="color: blue;">نص أزرق</p>
   ```

---

## 3️⃣ Selectors (المحددات)

* **Tag selector:** استهداف اسم العنصر

  ```css
  h1 { color: green; }
  ```
* **Class selector:** استهداف العناصر عبر الكلاس

  ```css
  .special { background: yellow; }
  ```
* **ID selector:** استهداف عنصر محدد بمعرّف

  ```css
  #main-title { font-size: 28px; }
  ```

---

## 4️⃣ display و الفرق بين block و inline

* **display:** تحدد كيف يُعرض العنصر

  * `block`: يبدأ بسطر جديد، يأخذ كل العرض، مثل `<div>`, `<p>`
  * `inline`: لا يبدأ بسطر جديد، يأخذ فقط حجمه، مثل `<span>`, `<a>`
  * `inline-block`: في السطر، لكن يمكن تحديد أبعاده
  * `flex`: لإنشاء ترتيب مرن للعناصر (سنتوسع بها لاحقًا)

**مثال:**

```css
div { display: block; }
span { display: inline; }
img { display: inline-block; }
```

---

## 5️⃣ Margins و Paddings

* **margin:** المسافة خارج حدود العنصر (تفصل بين العناصر)
* **padding:** المسافة بين حدود العنصر ومحتواه الداخلي

**مثال:**

```css
.box {
  margin: 20px;
  padding: 10px;
  background: #eee;
}
```

---

## 6️⃣ height و width و min/max

* **width / height:** تحديد العرض والارتفاع مباشرة

  ```css
  img { width: 200px; height: 100px; }
  ```
* **min-width / min-height:** أصغر عرض/ارتفاع ممكن

  ```css
  div { min-width: 100px; }
  ```
* **max-width / max-height:** أكبر عرض/ارتفاع مسموح

  ```css
  div { max-width: 500px; }
  ```

---

## 7️⃣ تنسيق النصوص (font, color, text-align, ...)

* **color:** لون النص
* **font-size:** حجم الخط
* **font-family:** نوع الخط
* **text-align:** محاذاة النص

**مثال:**

```css
h2 {
  color: #4a90e2;
  font-size: 26px;
  font-family: Tahoma, Arial, sans-serif;
  text-align: center;
}
```

---

## 8️⃣ خصائص أساسية أخرى لا غنى عنها

* **background-color:** لون الخلفية

  ```css
  body { background-color: #fafafa; }
  ```
* **border:** تحديد حدود العنصر

  ```css
  .card { border: 1px solid #ddd; border-radius: 6px; }
  ```
* **opacity:** الشفافية

  ```css
  .img-fade { opacity: 0.6; }
  ```
* **cursor:** شكل المؤشر عند المرور

  ```css
  button { cursor: pointer; }
  ```

---

## 9️⃣ مثال تطبيقي سريع

```html
<div class="card">
  <h2>عنوان</h2>
  <p>هذا نص داخل كرت مع هوامش ومسافات داخلية وحدود.</p>
</div>
```

```css
.card {
  background: #fff;
  border: 1px solid #eee;
  border-radius: 8px;
  margin: 30px auto;
  padding: 25px;
  width: 350px;
  box-shadow: 0 2px 6px #0001;
  text-align: center;
}
```

---

## 🟢 نصائح عامة

* استخدم الكلاسات دائمًا لتكرار التنسيقات.
* قم بفصل CSS عن HTML قدر الإمكان.
* اختبر تغييراتك على أكثر من متصفح وحجم شاشة.
* CSS بسيط في البداية، لكنه قوي جدًا في المشاريع الكبيرة!

---

 