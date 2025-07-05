
# شرح خاصية Position في CSS

## ما هي خاصية Position؟

تحدد خاصية `position` كيفية تموضع العنصر داخل الصفحة بالنسبة للعنصر الأب أو بالنسبة للنافذة (viewport).

### أنواع القيم الأساسية:

| القيمة     | الوصف                                                                             |
| ---------- | --------------------------------------------------------------------------------- |
| `static`   | الوضع الافتراضي، العنصر يتموضع حسب تدفق الصفحة الطبيعي بدون تغيير.                |
| `relative` | العنصر يتموضع بشكل طبيعي، لكن يمكن تحريكه من موضعه الأصلي باستخدام top/right/...  |
| `absolute` | العنصر يتموضع بالنسبة لأقرب عنصر أب يحمل position غير static، أو إلى body مباشرة. |
| `fixed`    | العنصر يتموضع بالنسبة للنافذة (viewport) ويبقى ثابتًا عند التمرير (scroll).        |
| `sticky`   | العنصر يتصرف كـ relative حتى يصل لموضع معين في التمرير ثم يصبح fixed.             |

---

### مثال توضيحي:

```html
<div class="container">
  <div class="static">Static</div>
  <div class="relative">Relative</div>
  <div class="absolute">Absolute</div>
  <div class="fixed">Fixed</div>
  <div class="sticky">Sticky</div>
</div>
```

```css
.container {
  height: 2000px;
  padding-top: 60px;
  background: #f2f2f2;
}

.static {
  position: static;
  background: #e0e0e0;
}

.relative {
  position: relative;
  top: 20px;
  left: 30px;
  background: #b0d7ff;
}

.absolute {
  position: absolute;
  top: 50px;
  left: 40px;
  background: #ffb0b0;
}

.fixed {
  position: fixed;
  top: 10px;
  right: 10px;
  background: #a0ffa0;
}

.sticky {
  position: sticky;
  top: 0;
  background: #ffe29a;
}
```

---

## شرح خصائص (Top, Right, Bottom, Left, Inset)

* **top**: يحدد المسافة من الأعلى.
* **right**: يحدد المسافة من اليمين.
* **bottom**: يحدد المسافة من الأسفل.
* **left**: يحدد المسافة من اليسار.
* **inset**: خاصية مختصرة (اختيارية) تجمع القيم الأربعة السابقة.

> ⚠️ هذه الخصائص تعمل فقط إذا كان position هو: `relative`, `absolute`, `fixed`, أو `sticky`.

### مثال مختصر:

```css
.box {
  position: absolute;
  top: 20px;
  right: 40px;
  left: 10px;
  bottom: 5px;
}

/* نفس التأثير باستخدام inset */
.box2 {
  position: absolute;
  inset: 20px 40px 5px 10px; /* top right bottom left */
}
```

---

## توضيح الفرق بين القيم:

| الوضع    | كيف يتموضع العنصر؟                    | لمن يتموضع بالنسبة؟    |
| -------- | ------------------------------------- | ---------------------- |
| static   | التدفق الطبيعي                        | —                      |
| relative | التدفق الطبيعي + يمكن تحريكه          | موضعه الأصلي           |
| absolute | يخرج من التدفق                        | أقرب أب غير static     |
| fixed    | يخرج من التدفق                        | نافذة المتصفح          |
| sticky   | عادي حتى يصل للحد المحدد ثم يصبح ثابت | العنصر الأب أو المتصفح |

---

# شرح خاصية Overflow

## ما هي خاصية Overflow؟

تتحكم خاصية `overflow` في كيفية ظهور المحتوى الزائد داخل عنصر عند تجاوز أبعاده.

### القيم الأساسية:

| القيمة    | الوصف                                             |
| --------- | ------------------------------------------------- |
| `visible` | (الافتراضي) يُظهر المحتوى الزائد بدون قص.          |
| `hidden`  | يخفي المحتوى الزائد ولا يظهر شريط تمرير.          |
| `scroll`  | يُظهر شريط تمرير دائمًا حتى لو لم يكن هناك فائض.    |
| `auto`    | يُظهر شريط تمرير فقط عند وجود فائض في المحتوى.     |
| `clip`    | يقص المحتوى الزائد بدون شريط تمرير (حديثة نسبياً). |

### مثال توضيحي:

```html
<div class="overflow-example">
  محتوى طويل جدا جدا جدا جدا جدا جدا جدا جدا جدا جدا جدا جدا جدا جدا جدا جدا جدا ...
</div>
```

```css
.overflow-example {
  width: 200px;
  height: 60px;
  border: 2px solid #333;
  overflow: auto;
  /* جرّب overflow: hidden, scroll, visible, clip */
}
```

---

## خصائص فرعية (overflow-x, overflow-y)

* **overflow-x**: للتحكم بالأفق.
* **overflow-y**: للتحكم بالعمود.

```css
.box {
  overflow-x: auto;
  overflow-y: hidden;
}
```

---

## نقاط إضافية هامة:

* `overflow` مفيد في حال وجود جداول، قوائم، أو نصوص طويلة داخل عناصر ذات أبعاد محددة.
* أحيانًا تحتاج لضبط `position: relative` أو أبعاد محددة (`width`/`height`) ليعمل overflow كما هو متوقع.
* بعض العناصر (كالصور أو الفيديوهات) قد تحتاج أيضًا لـ`object-fit` لضبط سلوكها داخل الحاوية مع overflow.

---

# ملخص سريع

* **position**: يتحكم بتموضع العنصر (static, relative, absolute, fixed, sticky)
* **top/right/bottom/left/inset**: لتحديد موقع العنصر داخل الحاوية أو النافذة
* **overflow**: يتحكم بظهور أو إخفاء أو تمرير المحتوى الزائد عن أبعاد العنصر

 