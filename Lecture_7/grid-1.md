
# 🟩 شرح أساسيات CSS Grid (Markdown)

## 1. خاصية `display: grid`

* تقوم بتحويل أي عنصر إلى **حاوية شبكة (Grid Container)**.
* جميع العناصر بداخله تصبح تلقائياً **عناصر شبكة (Grid Items)**.

```css
.container {
  display: grid;
}
```

---

## 2. خاصية `grid-template-columns`

* تُستخدم لتعريف عدد الأعمدة داخل الشبكة وعرض كل عمود.
* يمكن تحديد العرض بوحدات مختلفة مثل: px، fr (وحدة مرنة)، % إلخ.

```css
.container {
  display: grid;
  grid-template-columns: 200px 1fr 2fr;
}
```

* في المثال:

  * العمود الأول: 200px
  * الثاني: يأخذ حصة واحدة من المساحة المتبقية (1fr)
  * الثالث: يأخذ ضعف العمود الثاني (2fr)

---

## 3. دالة `repeat()`

* تُستخدم لتكرار نفس القيمة أكثر من مرة، مفيدة للأعمدة أو الصفوف المتكررة.

```css
.container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}
```

* المثال ينشئ **4 أعمدة متساوية العرض**.

---

## 4. خاصية `auto-fill` مع repeat

* لإنشاء شبكة متجاوبة، حيث يزيد أو ينقص عدد الأعمدة حسب حجم الشاشة أو الحاوية.
* كل عمود له حد أدنى وحد أقصى بواسطة `minmax`.

```css
.container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
}
```

* هنا:

  * كل عمود لا يقل عن 160px
  * الأعمدة تتغير تلقائيًا لتملأ الفراغ المتاح

---

## ⭐ مثال عملي كامل

```html
<div class="container">
  <div>منتج 1</div>
  <div>منتج 2</div>
  <div>منتج 3</div>
  <div>منتج 4</div>
  <div>منتج 5</div>
</div>
```

```css
.container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 16px;
}
```

 