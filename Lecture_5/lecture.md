 
---

## ✅ **📄 ملف Markdown - شرح display والflex بكل خصائصه**

````markdown
# 🎯 **خاصية Display في CSS**

تُستخدم خاصية **display** لتحديد كيفية عرض العنصر داخل الصفحة. هي من أهم خصائص CSS لأنها تحدد سلوك العنصر وتفاعله مع العناصر الأخرى.

---

## 📝 **أنواع display الأساسية**

### 1️⃣ **display: block**

- يجعل العنصر يأخذ كامل عرض الصفحة تلقائيًا.
- يبدأ بسطر جديد وينتهي بسطر جديد.
- يمكن تحديد `width` و `height`.

🔧 **أمثلة على عناصر block افتراضيًا:**
- div
- p
- h1 – h6
- section
- article

---

### 2️⃣ **display: inline**

- يجعل العنصر لا يبدأ بسطر جديد.
- يأخذ فقط عرض المحتوى بداخله.
- لا يمكن تحديد `width` أو `height` (فقط padding يمين ويسار تؤثر).

🔧 **أمثلة على عناصر inline افتراضيًا:**
- span
- a
- strong
- em

---

### 3️⃣ **display: inline-block**

- يجمع بين خصائص `inline` و `block`:
  - لا يبدأ بسطر جديد (مثل inline).
  - يمكن تحديد `width` و `height` (مثل block).

🔧 **مثال استخدام:**

```css
.button {
  display: inline-block;
  width: 100px;
  height: 40px;
  background-color: blue;
  color: white;
  text-align: center;
}
````

---

### 4️⃣ **display: flex**

* يحول العنصر إلى **حاوية مرنة (Flex Container)** يمكن التحكم بترتيب عناصرها بسهولة.
* جميع العناصر الأبناء تتحول إلى **flex items**.

---

## 🔎 **خصائص Flex الأساسية**

### 🧩 **1. flex-direction**

تحدد اتجاه العناصر داخل الحاوية.

* **row:** أفقي (الافتراضي)
* **row-reverse:** أفقي مع عكس الترتيب
* **column:** عمودي
* **column-reverse:** عمودي مع عكس الترتيب

---

### 🧩 **2. justify-content**

تتحكم في توزيع العناصر على **المحور الأساسي** (Main Axis).

* flex-start
* flex-end
* center
* space-between
* space-around
* space-evenly

---

### 🧩 **3. align-items**

تحدد محاذاة العناصر على **المحور المتعامد** (Cross Axis).

* flex-start
* flex-end
* center
* baseline
* stretch

---

### 🧩 **4. flex-wrap**

تحدد إذا كانت العناصر ستلتف إلى سطر جديد عند امتلاء المساحة.

* nowrap (الافتراضي)
* wrap
* wrap-reverse

---

### 🧩 **5. align-content**

تستخدم عندما يكون هناك أكثر من سطر من العناصر (مع wrap)، لتحديد توزيع الأسطر عموديًا.

* flex-start
* flex-end
* center
* space-between
* space-around
* stretch

---

### 🧩 **6. gap**

تحدد المسافة بين العناصر داخل الحاوية.

---

### 🧩 **7. flex (للأبناء)**

تتحكم في حجم كل عنصر داخل flex container.

```css
.item {
  flex: 1; /* نفس المساحة لكل عنصر */
}
```

* **flex-grow:** التحكم في النمو
* **flex-shrink:** التحكم في الانكماش
* **flex-basis:** الحجم الأساسي قبل التمدد أو الانكماش

---

## ✨ **مثال كامل**

```css
.container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
}
```

---

✋ **💡 ملاحظات هامة:**

* flex تسهل بناء **layouts responsive** بسرعة.
* سنتعلم grid لاحقًا لبناء layouts أكثر تعقيدًا.

---

````

---

## ✅ **📄 ملف HTML شامل display: flex وخصائصه**

```html
<!DOCTYPE html>
<html lang="ar">
<head>
  <meta charset="UTF-8" />
  <title>شرح display: flex</title>
  <style>
    .container {
      display: flex;
      flex-direction: row; /* اتجاه العناصر: row | column | row-reverse | column-reverse */
      justify-content: space-between; /* توزيع العناصر على المحور الأساسي */
      align-items: center; /* محاذاة العناصر على المحور المتعامد */
      flex-wrap: wrap; /* السماح بانتقال العناصر للسطر التالي */
      align-content: center; /* توزيع الأسطر عند تعددها */
      gap: 10px; /* المسافة بين العناصر */
      background-color: #f0f0f0;
      padding: 20px;
      min-height: 200px;
      border: 2px solid #ccc;
    }

    .item {
      background-color: steelblue;
      color: white;
      padding: 20px;
      font-size: 18px;
      flex: 1 1 100px; /* grow | shrink | basis */
      text-align: center;
    }
  </style>
</head>
<body>
  <h2>شرح display: flex والخصائص المتعلقة بها</h2>

  <div class="container">
    <div class="item">1</div>
    <div class="item">2</div>
    <div class="item">3</div>
    <div class="item">4</div>
    <div class="item">5</div>
  </div>

  <p>
    ⚡ <strong>الشرح:</strong><br>
    - <code>display: flex</code>: يجعل الحاوية flex container.<br>
    - <code>flex-direction</code>: اتجاه العناصر داخل الحاوية.<br>
    - <code>justify-content</code>: توزيع العناصر على المحور الأساسي.<br>
    - <code>align-items</code>: محاذاة العناصر عموديًا.<br>
    - <code>flex-wrap</code>: السماح للعناصر بالانتقال لسطر جديد.<br>
    - <code>align-content</code>: توزيع الأسطر الكاملة إذا وجدت.<br>
    - <code>gap</code>: المسافة بين العناصر.<br>
    - <code>flex</code>: التحكم بحجم العناصر داخل الحاوية.
  </p>

</body>
</html>
````