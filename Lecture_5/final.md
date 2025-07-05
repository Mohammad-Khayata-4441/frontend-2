
---

````markdown
# 🌟 أساسيات CSS - دليل تدريبي متكامل

CSS (Cascading Style Sheets) هي اللغة الأساسية لتنسيق صفحات الويب وجعلها أكثر جمالًا وتنظيمًا. في هذا الدليل ستتعلم أهم مفاهيم وخصائص CSS مع أمثلة عملية.

---

## 1️⃣ ما هي CSS ولماذا نستخدمها؟

- CSS تتحكم في مظهر صفحات الويب (ألوان، خطوط، مسافات، ترتيب العناصر، استجابة للشاشات...).
- تفصل بين المحتوى (HTML) والشكل (CSS) لسهولة التعديل والتنظيم.

---

## 2️⃣ أين وكيف نكتب كود CSS؟

- **ملف خارجي:**  
  أفضل طريقة في المشاريع:
  ```html
  <link rel="stylesheet" href="style.css">
````

* **داخل `<style>` في ملف HTML:**

  ```html
  <style>
    p { color: red; }
  </style>
  ```

* **داخل العنصر مباشرة (Inline):**

  ```html
  <p style="color: blue;">نص أزرق</p>
  ```

---

## 3️⃣ Selectors (المحددات الأساسية)

* **Tag Selector:** تحديد عنصر باسم الوسم

  ```css
  h1 { color: green; }
  ```

* **Class Selector:** تحديد مجموعة عناصر

  ```css
  .special { background: yellow; }
  ```

* **ID Selector:** تحديد عنصر وحيد

  ```css
  #main-title { font-size: 28px; }
  ```

---

## 4️⃣ display وأنواعه (block - inline - inline-block - flex - none)

### **ما هي خاصية display؟**

تحدد كيف يظهر العنصر في الصفحة ويتفاعل مع العناصر حوله.

### 1. `block`

* يبدأ من سطر جديد ويأخذ كل العرض.
* يقبل عرض/ارتفاع وحدود وهوامش.
* أمثلة: `<div>`, `<p>`, `<h1>`

### 2. `inline`

* لا يبدأ من سطر جديد، يأخذ مساحة المحتوى فقط.
* لا يقبل عرض/ارتفاع، فقط padding أفقي.
* أمثلة: `<span>`, `<a>`, `<strong>`

### 3. `inline-block`

* في نفس السطر (مثل inline) ويقبل تحديد عرض/ارتفاع (مثل block).
* مناسب للأزرار والقوائم الأفقية.

### 4. `flex`

* يجعل العنصر حاوية مرنة (flex container) لترتيب الأبناء بشكل احترافي.
* خصائص flex المشهورة:

  * `flex-direction` (اتجاه العناصر)
  * `justify-content` (توزيع العناصر أفقيًا)
  * `align-items` (محاذاة العناصر عموديًا)
  * `gap` (مسافة بين العناصر)
  * `flex-wrap` (التفاف العناصر)
  * `align-content`

### 5. `none`

* يخفي العنصر بالكامل ولا يشغل أي مساحة.

---

## 5️⃣ الفرق بين Block و Inline و Inline-block

| النوع        | يبدأ بسطر جديد؟ | يقبل width/height؟ | مثال عملي                |
| ------------ | --------------- | ------------------ | ------------------------ |
| block        | نعم             | نعم                | div, p, h1               |
| inline       | لا              | لا                 | span, a, strong          |
| inline-block | لا              | نعم                | button, img              |
| flex         | نعم (حاوية)     | نعم                | div.container            |
| none         | لا يظهر         | لا                 | أي عنصر مع display\:none |

---

## 6️⃣ Margins & Paddings

* **margin:** المسافة خارج حدود العنصر (تبعده عن العناصر الأخرى)
* **padding:** المسافة بين محتوى العنصر وحدوده

```css
.box {
  margin: 20px;
  padding: 10px;
  background: #eee;
}
```

---

## 7️⃣ width, height, min/max

* **width / height:** تحديد العرض والارتفاع
* **min-width / min-height:** أصغر قيمة ممكنة للعرض/الارتفاع
* **max-width / max-height:** أكبر قيمة مسموحة للعرض/الارتفاع

```css
img { width: 200px; height: 100px; }
div { min-width: 100px; max-width: 500px; }
```

---

## 8️⃣ تنسيق النصوص (color, font-size, font-family, text-align)

* **color:** لون النص
* **font-size:** حجم الخط
* **font-family:** نوع الخط
* **text-align:** محاذاة النص

```css
h2 {
  color: #4a90e2;
  font-size: 26px;
  font-family: Tahoma, Arial, sans-serif;
  text-align: center;
}
```

---

## 9️⃣ خصائص CSS أساسية أخرى

* **background-color:** لون الخلفية

  ```css
  body { background-color: #fafafa; }
  ```
* **border:** حدود العنصر

  ```css
  .card { border: 1px solid #ddd; border-radius: 6px; }
  ```
* **opacity:** شفافية العنصر

  ```css
  .img-fade { opacity: 0.6; }
  ```
* **cursor:** شكل مؤشر الفأرة

  ```css
  button { cursor: pointer; }
  ```

---

## 🔟 مثال عملي شامل على الأنواع المختلفة لـ display

```html
<div style="display: block; background: #ececec; margin-bottom: 10px;">Block Element</div>
<span style="display: inline; background: #ffd700;">Inline Element</span>
<span style="display: inline-block; width: 100px; background: #b2ff59; text-align: center;">Inline-Block</span>

<div style="display: flex; gap: 10px; margin-top: 20px;">
  <div style="background: #4a90e2; color: white; padding: 10px 15px;">Flex Item 1</div>
  <div style="background: #50e3c2; color: white; padding: 10px 15px;">Flex Item 2</div>
</div>
```

---

## 🟢 نصائح هامة

* استخدم الكلاسات بدلًا من تكرار التنسيقات.
* قم بفصل CSS عن HTML بقدر الإمكان في المشاريع الحقيقية.
* اختبر صفحاتك على أكثر من متصفح وجهاز.
* CSS بسيط في البداية، لكنه قوي جدًا مع التقدم في المشاريع.

---

```

إذا تريد إضافة جزء متقدم عن **Responsive Design** أو **Flexbox بشكل موسّع** أو أمثلة عملية تدريبية جاهزة، فقط أخبرني!
```
