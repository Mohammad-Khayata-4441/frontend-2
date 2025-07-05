 

````markdown
# 🎨 شرح خصائص `transform` في CSS

## ما هي خاصية transform؟

خاصية `transform` في CSS تسمح لك **بتحويل وتغيير** مظهر العنصر بدون التأثير على باقي العناصر. يمكن استخدامها لتدوير، تكبير/تصغير، نقل، أو إمالة العناصر.

---

## أشهر القيم والخصائص مع أمثلة

### 1. `translate(x, y)`
لنقل العنصر أفقياً أو عمودياً.

```css
.box {
  transform: translate(50px, 20px);
}
````

ينقل العنصر 50px يمين و20px للأسفل.

---

### 2. `scale(x, y)`

لتكبير أو تصغير العنصر.

```css
.box {
  transform: scale(1.5, 2);
}
```

يكبر العرض 1.5 ضعف والارتفاع 2 ضعف.

---

### 3. `rotate(angle)`

لتدوير العنصر حول مركزه.

```css
.box {
  transform: rotate(45deg);
}
```

يدور العنصر 45 درجة.

---

### 4. `skew(x-angle, y-angle)`

لإمالة العنصر (تشويه الزوايا).

```css
.box {
  transform: skew(30deg, 10deg);
}
```

يميل العنصر 30 درجة أفقياً و10 درجات عمودياً.

---

### 5. `matrix(a, b, c, d, e, f)`

تسمح بعمل عدة تحولات معاً في قيمة واحدة (غالباً للمشاريع المتقدمة).

---

### 6. دمج أكثر من تحول

يمكنك دمج عدة خصائص:

```css
.box {
  transform: translate(20px, 20px) scale(1.2) rotate(15deg);
}
```

---

### 7. `transform-origin`

تحدد نقطة الأصل (المحور) للتحويلات (افتراضياً مركز العنصر).

```css
.box {
  transform: rotate(45deg);
  transform-origin: top left;
}
```

---

# 🪄 شرح أهم الـ Pseudo-classes في CSS

**Pseudo-class** هي حالة افتراضية أو تفاعلية للعنصر. تستخدم لإضافة ستايل معين عندما يكون العنصر في حالة محددة.

---

## 1. `:hover`

تُطبق عند مرور مؤشر الفأرة فوق العنصر.

```css
.button:hover {
  background: #1976d2;
  color: #fff;
}
```

---

## 2. `:active`

تُطبق عندما يكون العنصر مضغوطاً (خلال النقر بالماوس).

```css
.button:active {
  background: #0d47a1;
}
```

---

## 3. `:focus`

تُطبق عندما يأخذ العنصر الـ focus (مثلاً حقل إدخال بعد النقر أو الانتقال له بالكيبورد).

```css
input:focus {
  border-color: #1976d2;
  outline: none;
}
```

---

## 4. `:visited` و `:link`

* `:link` لتحديد شكل الروابط قبل زيارتها.
* `:visited` لتحديد شكل الروابط بعد زيارتها.

```css
a:link {
  color: blue;
}
a:visited {
  color: purple;
}
```

---

## 5. `:checked`

تُطبق على العناصر القابلة للتحديد (checkbox, radio) عند تحديدها.

```css
input[type="checkbox"]:checked {
  accent-color: #1976d2;
}
```

---

## 6. لا يوجد `:blur` كـ Pseudo-class مباشرة!

ولكن يمكن تطبيق تأثير البلور باستخدام الـ `:hover` مثلاً:

```css
img:hover {
  filter: blur(2px);
}
```

أو مع focus:

```css
input:focus {
  filter: blur(2px);
}
```

---

## 7. أمثلة أخرى:

* `:disabled` لعناصر الإدخال المعطلة.
* `:nth-child(n)` لتطبيق ستايل حسب ترتيب العنصر بين إخوته.
* `:first-child`, `:last-child`, إلخ...

---

# 📝 ملخص

* **خصائص `transform`:** أدوات قوية لتغيير مظهر العناصر (نقل، تدوير، تكبير...).
* **Pseudo-classes:** تساعدك على تطبيق ستايل حسب حالة العنصر (تفاعل، تركيز، تحديد، إلخ).
* استخدمها لصناعة واجهات تفاعلية وجذابة وسهلة الاستخدام.

 
