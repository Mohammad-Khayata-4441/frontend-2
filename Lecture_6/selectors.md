 

# محددات CSS المتقدمة: First/Last/Nth Selectors

## 1. `:first-child`

* **يحدد أول عنصر ابن** داخل أي عنصر أب.
* يطابق فقط العنصر الأول فعلاً مهما كان نوعه.

```css
li:first-child {
  color: red;
}
```

* 🔹 يلوّن أول عنصر `<li>` في كل قائمة.

---

## 2. `:last-child`

* **يحدد آخر عنصر ابن** داخل أي عنصر أب.

```css
li:last-child {
  color: blue;
}
```

* 🔹 يلوّن آخر عنصر `<li>` في كل قائمة.

---

## 3. `:first-of-type`

* يحدد **أول عنصر من نوع معين** داخل الأب.
* أحياناً يكون فيه عناصر بأنواع مختلفة داخل نفس الأب (مثلاً: `<p>`, `<h2>`, `<span>`).
* يطابق أول عنصر من نوعه فقط.

```css
p:first-of-type {
  font-weight: bold;
}
```

* 🔹 يطبق فقط على أول `<p>` داخل كل عنصر أب، بغض النظر عن ترتيبه بين عناصر أخرى.

---

## 4. `:last-of-type`

* يحدد **آخر عنصر من نوع معين** داخل الأب.

```css
p:last-of-type {
  color: green;
}
```

* 🔹 فقط آخر `<p>` في الأب.

---

## 5. `:nth-child(n)`

* يحدد **العنصر رقم n** داخل كل عنصر أب (بترتيبه الفعلي، بغض النظر عن نوعه).

```css
li:nth-child(3) {
  background: #ffe7a6;
}
```

* 🔹 العنصر الثالث في كل قائمة `<ul>`.

* يمكن استخدام صيغ مثل:

  * `:nth-child(even)` ← العناصر الزوجية (2، 4، 6...)
  * `:nth-child(odd)` ← العناصر الفردية (1، 3، 5...)
  * `:nth-child(2n+1)` ← أيضاً العناصر الفردية

---

## 6. `:nth-of-type(n)`

* يحدد **العنصر رقم n من نوع معين** ضمن الأب، بغض النظر عن ترتيبه بين باقي العناصر.

```css
p:nth-of-type(2) {
  background: #b0f7ce;
}
```

* 🔹 ثاني `<p>` فقط ضمن كل حاوية.

---

## 7. `:not(selector)`

* **يستثني عناصر** من القاعدة.
* مثال: استثناء عنصر معين من التنسيق.

```css
li:not(.active) {
  opacity: 0.7;
}
```

* 🔹 جميع عناصر `<li>` ماعدا تلك التي تحمل الكلاس `active`.

---

## مثال عملي HTML + CSS

```html
<ul>
  <li>عنصر رقم 1</li>
  <li>عنصر رقم 2</li>
  <li>عنصر رقم 3</li>
  <li>عنصر رقم 4</li>
  <li>عنصر رقم 5</li>
</ul>

<p>فقرة أولى</p>
<span>نص فاصل</span>
<p>فقرة ثانية</p>
<p>فقرة ثالثة</p>
```

```css
li:first-child      { color: red; }
li:last-child       { color: blue; }
li:nth-child(odd)   { background: #f0f0f0; }
li:nth-child(even)  { background: #e0f7fa; }
li:nth-child(3)     { font-weight: bold; }

p:first-of-type     { border-bottom: 2px solid orange; }
p:last-of-type      { color: green; }
p:nth-of-type(2)    { background: #b0f7ce; }
```

---

## جدول تلخيصي سريع

| المحدد            | الوصف                              | مثال              |
| ----------------- | ---------------------------------- | ----------------- |
| `:first-child`    | أول ابن ضمن الأب                   | li\:first-child   |
| `:last-child`     | آخر ابن ضمن الأب                   | li\:last-child    |
| `:first-of-type`  | أول ابن من نفس النوع ضمن الأب      | p\:first-of-type  |
| `:last-of-type`   | آخر ابن من نفس النوع ضمن الأب      | p\:last-of-type   |
| `:nth-child(n)`   | الإبن رقم n ضمن الأب               | li\:nth-child(2)  |
| `:nth-of-type(n)` | العنصر رقم n من نفس النوع ضمن الأب | p\:nth-of-type(2) |
| `:not(selector)`  | يستثني عناصر                       | li\:not(.active)  |

---

## ملاحظات هامة:

* `:nth-child(n)` يعتمد على ترتيب العناصر **جميعها**، أما `:nth-of-type(n)` فقط على النوع.
* الـ Selectors المتقدمة مفيدة جداً عند بناء واجهات تفاعلية بدون الحاجة لجافاسكريبت.

 