
````markdown
# 🧑‍💻 CSS Flexbox - شرح مفصل مع أمثلة

---

## ما هو Flexbox؟

Flexbox هو نظام حديث لترتيب وتوزيع العناصر داخل الحاوية (container) بشكل مرن وسهل، سواء بشكل أفقي أو عمودي.  
تم تقديمه لحل مشاكل التخطيط التقليدية في CSS مثل float وposition.

---

## أهم المفاهيم والمصطلحات

- **الحاوية (Container):** العنصر الذي يتم تفعيل flex عليه (`display: flex;`).
- **العناصر الفرعية (Flex Items):** العناصر داخل الحاوية.

---

## الخصائص الأساسية للحاوية (Container Properties)

| الخاصية           | القيم                                                                               | الوظيفة                                             |
| ----------------- | ----------------------------------------------------------------------------------- | --------------------------------------------------- |
| `display`         | `flex` / `inline-flex`                                                              | تفعيل Flexbox على الحاوية                           |
| `flex-direction`  | `row`, `row-reverse`, `column`, `column-reverse`                                    | اتجاه المحور الرئيسي                                |
| `flex-wrap`       | `nowrap`, `wrap`, `wrap-reverse`                                                    | السماح بتغليف العناصر                               |
| `justify-content` | `flex-start`, `flex-end`, `center`, `space-between`, `space-around`, `space-evenly` | توزيع العناصر أفقياً على المحور الرئيسي              |
| `align-items`     | `stretch`, `flex-start`, `flex-end`, `center`, `baseline`                           | محاذاة العناصر عمودياً على المحور الفرعي             |
| `align-content`   | مثل align-items                                                                     | توزيع الصفوف عندما يكون هناك أكثر من صف (مع التفاف) |

---

## خصائص العناصر الفرعية (Flex Items Properties)

| الخاصية       | القيم                         | الوظيفة                                      |
| ------------- | ----------------------------- | -------------------------------------------- |
| `order`       | أي رقم                        | ترتيب ظهور العنصر                            |
| `flex-grow`   | رقم (افتراضي 0)               | كم يمكن للعنصر أن يكبر إذا توفر مساحة إضافية |
| `flex-shrink` | رقم (افتراضي 1)               | كم يمكن للعنصر أن يصغر إذا نقصت المساحة      |
| `flex-basis`  | حجم أولي للعنصر               | الحجم الأساسي للعنصر قبل توزيع المساحة       |
| `flex`        | اختصار لـ grow, shrink, basis | مثال: `flex: 1 0 150px;`                     |
| `align-self`  | مثل align-items               | تغيير محاذاة عنصر محدد عن بقية العناصر       |

---

## أمثلة سريعة على الحاوية

```css
.container {
  display: flex;
  flex-direction: row;         /* الاتجاه أفقي (افتراضي) */
  flex-wrap: wrap;             /* السماح بانتقال العناصر لسطر جديد */
  justify-content: space-between; /* توزيع الفراغات بين العناصر */
  align-items: center;         /* محاذاة العناصر في وسط الحاوية عمودياً */
}
````

---

## أمثلة سريعة على العناصر الفرعية

```css
.item {
  flex: 1 1 200px;     /* يكبر العنصر حسب الحاجة، الحجم المبدئي 200px */
  order: 2;            /* يغير ترتيب العنصر */
  align-self: flex-end;/* يحاذي العنصر لأسفل الحاوية */
}
```

---

## توضيح المحاور

* **المحور الرئيسي (Main Axis):** الاتجاه الأساسي المحدد عبر `flex-direction`
* **المحور الفرعي (Cross Axis):** الاتجاه العمودي على المحور الرئيسي

---

## توزيع العناصر وتوسيطها

* `justify-content`: توزيع أفقي على المحور الرئيسي
* `align-items`: توزيع عمودي على المحور الفرعي

---

## أمثلة أساسية توضيحية

### توسيط العناصر أفقياً وعمودياً

```css
.centered-box {
  display: flex;
  justify-content: center; /* توسيط أفقي */
  align-items: center;     /* توسيط عمودي */
  height: 300px;
}
```

### توزيع العناصر بمسافات متساوية

```css
.space-between {
  display: flex;
  justify-content: space-between;
}
```

### التفاف العناصر تلقائياً

```css
.wrap-example {
  display: flex;
  flex-wrap: wrap;
}
```

---

## ملاحظات مهمة

* **Flexbox** رائع لتقسيم واجهات الأعمدة والصفوف بسهولة.
* يمكن دمج Flexbox مع Grid في نفس الصفحة حسب الحاجة.
* استخدم أدوات فحص المتصفح لتجربة توزيع العناصر وتغيير القيم بسرعة.

---

## مصادر إضافية

* [دليل CSS Flexbox على MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout/Basic_Concepts_of_Flexbox)
* [Flexbox Froggy (لعبة تفاعلية)](https://flexboxfroggy.com/)

````

---

## 2️⃣ ملف HTML: أمثلة متقدمة على Flexbox

```html
<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <title>أمثلة Flexbox متقدمة</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 32px;
            background: #fafafa;
            direction: rtl;
        }
        .demo-section {
            margin-bottom: 48px;
            border: 2px dashed #ccc;
            padding: 24px;
            background: #fff;
        }
        .flex-container {
            display: flex;
            gap: 16px;
            padding: 16px;
            background: #e3e8f1;
            margin-bottom: 12px;
            border-radius: 8px;
        }
        .flex-item {
            background: #007bff;
            color: white;
            padding: 24px;
            text-align: center;
            border-radius: 8px;
            font-weight: bold;
            min-width: 80px;
        }
        /* Demo: توسيط أفقي وعمودي */
        .center-demo {
            height: 180px;
            justify-content: center;
            align-items: center;
        }
        /* Demo: Wrap */
        .wrap-demo {
            flex-wrap: wrap;
        }
        /* Demo: Different flex-grow */
        .grow-demo .flex-item:nth-child(1) { flex: 1; }
        .grow-demo .flex-item:nth-child(2) { flex: 2; }
        .grow-demo .flex-item:nth-child(3) { flex: 3; }
        /* Demo: Order */
        .order-demo .flex-item:nth-child(1) { order: 3; }
        .order-demo .flex-item:nth-child(2) { order: 2; }
        .order-demo .flex-item:nth-child(3) { order: 1; }
        /* Demo: align-self */
        .alignself-demo { height: 150px; }
        .alignself-demo .flex-item:nth-child(1) { align-self: flex-start; }
        .alignself-demo .flex-item:nth-child(2) { align-self: center; }
        .alignself-demo .flex-item:nth-child(3) { align-self: flex-end; }
        /* Demo: Responsive menu */
        .navbar {
            display: flex;
            background: #2c3e50;
            border-radius: 8px;
            overflow: hidden;
        }
        .navbar a {
            color: #fff;
            text-decoration: none;
            padding: 14px 28px;
            flex: 1;
            text-align: center;
            transition: background .2s;
        }
        .navbar a:hover { background: #34495e; }
        @media (max-width: 600px) {
            .navbar { flex-direction: column; }
        }
    </style>
</head>
<body>

    <h1>أمثلة Flexbox متقدمة</h1>

    <div class="demo-section">
        <h2>1. توسيط العناصر أفقيًا وعموديًا</h2>
        <div class="flex-container center-demo">
            <div class="flex-item">وسط</div>
        </div>
    </div>

    <div class="demo-section">
        <h2>2. توزيع العناصر بمسافات متساوية (space-between)</h2>
        <div class="flex-container" style="justify-content: space-between;">
            <div class="flex-item">واحد</div>
            <div class="flex-item">اثنان</div>
            <div class="flex-item">ثلاثة</div>
        </div>
    </div>

    <div class="demo-section">
        <h2>3. التفاف العناصر تلقائياً عند صغر الشاشة (flex-wrap)</h2>
        <div class="flex-container wrap-demo" style="max-width: 400px;">
            <div class="flex-item">1</div>
            <div class="flex-item">2</div>
            <div class="flex-item">3</div>
            <div class="flex-item">4</div>
            <div class="flex-item">5</div>
            <div class="flex-item">6</div>
        </div>
    </div>

    <div class="demo-section">
        <h2>4. اختلاف نسبة النمو (flex-grow)</h2>
        <div class="flex-container grow-demo">
            <div class="flex-item">flex:1</div>
            <div class="flex-item">flex:2</div>
            <div class="flex-item">flex:3</div>
        </div>
    </div>

    <div class="demo-section">
        <h2>5. تغيير ترتيب العناصر (order)</h2>
        <div class="flex-container order-demo">
            <div class="flex-item">أ</div>
            <div class="flex-item">ب</div>
            <div class="flex-item">ج</div>
        </div>
        <small>تم تغيير ترتيب العناصر باستخدام خاصية <b>order</b></small>
    </div>

    <div class="demo-section">
        <h2>6. محاذاة عناصر منفردة (align-self)</h2>
        <div class="flex-container alignself-demo">
            <div class="flex-item">start</div>
            <div class="flex-item">center</div>
            <div class="flex-item">end</div>
        </div>
    </div>

    <div class="demo-section">
        <h2>7. قائمة تنقل مرنة (Responsive Navbar)</h2>
        <nav class="navbar">
            <a href="#">الرئيسية</a>
            <a href="#">الخدمات</a>
            <a href="#">من نحن</a>
            <a href="#">اتصل بنا</a>
        </nav>
        <small>تتغير القائمة تلقائيًا في الشاشات الصغيرة لتصبح عمودية</small>
    </div>

</body>
</html>
````

 