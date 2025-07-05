بالطبع! إليك ملف **Markdown** مفصل لشرح خاصية **display** في CSS (بدون التطرق إلى grid)، مع توضيح الأنواع الأساسية والأمثلة العملية:

---

````markdown
# ✨ شرح خاصية display في CSS

تعتبر خاصية **display** من أهم خصائص CSS، فهي التي تحدد كيفية ظهور وتوزيع العناصر داخل الصفحة وكيفية تفاعلها مع العناصر الأخرى.

---

## 1️⃣ ما هي خاصية display؟

هي الخاصية التي تتحكم في نوع الصندوق (box) الخاص بكل عنصر HTML، أي كيف يتصرف في تدفق الصفحة وكيف تُرتب العناصر حوله.

---

## 2️⃣ الأنواع الشائعة لخاصية display

### 1. `block`

- يجعل العنصر يبدأ من سطر جديد ويأخذ كامل العرض المتاح تلقائيًا.
- يمكن تحديد عرضه وارتفاعه وmargins وpaddings بحرية.
- أمثلة: `<div>`, `<p>`, `<h1>` … إلخ.

**مثال:**
```css
div {
  display: block;
  width: 300px;
  background: #e3f2fd;
}
````

---

### 2. `inline`

* لا يبدأ من سطر جديد، بل يُكمل في نفس السطر مع باقي العناصر.
* يأخذ فقط المساحة التي يحتاجها.
* لا يمكن تحديد العرض أو الارتفاع بشكل صريح.
* أمثلة: `<span>`, `<a>`, `<strong>`.

**مثال:**

```css
span {
  display: inline;
  color: #4a90e2;
}
```

---

### 3. `inline-block`

* لا يبدأ من سطر جديد (مثل inline).
* يمكن تحديد العرض والارتفاع (مثل block).
* مفيد لعناصر مثل الأزرار أو الصور في القوائم الأفقية.

**مثال:**

```css
.button {
  display: inline-block;
  width: 120px;
  height: 40px;
  background: #4a90e2;
  color: #fff;
  text-align: center;
  line-height: 40px;
  border-radius: 5px;
  margin: 0 8px;
}
```

---

### 4. `none`

* يخفي العنصر تمامًا، وكأنه غير موجود في الصفحة.
* لا يشغل أي مساحة، ولا يظهر للزوار أو القارئ الآلي.

**مثال:**

```css
.hidden {
  display: none;
}
```

---

### 5. `flex`

* يحول العنصر إلى **flex container** لتوزيع العناصر الأبناء بشكل مرن وسهل.
* يسمح بمحاذاة العناصر أفقيًا أو عموديًا وتغيير ترتيبها بسهولة.
* مفيد لبناء القوائم والتصاميم التفاعلية.

**مثال:**

```css
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}
```

---

## 3️⃣ مقارنة سريعة بين الأنواع الرئيسية

| النوع        | يبدأ بسطر جديد؟ | يقبل width/height؟ | مثال عملي                |
| ------------ | --------------- | ------------------ | ------------------------ |
| block        | نعم             | نعم                | div, p, h1               |
| inline       | لا              | لا                 | span, a, strong          |
| inline-block | لا              | نعم                | button, img              |
| flex         | نعم (حاوية)     | نعم                | div.container            |
| none         | لا يظهر         | لا                 | أي عنصر مع display\:none |

---

## 4️⃣ متى أستخدم كل نوع؟

* **block**: للعناصر الرئيسية أو البلوكات مثل الفقرات والأقسام.
* **inline**: للكلمات أو الجمل داخل النصوص (تمييز، روابط، إلخ).
* **inline-block**: لعناصر متجاورة تريد أن تتحكم بأبعادها (أزرار، صور صغيرة).
* **flex**: لتصميم أقسام مرنة واستجابة مثل الـ navbar أو الـ cards.
* **none**: لإخفاء العناصر مؤقتًا (مثلاً عند التنقل أو عند التصويت أو في القوائم المنسدلة).

---

## 5️⃣ أمثلة تطبيقية متنوعة

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

## 6️⃣ ملاحظات هامة

* بعض العناصر لها نوع display افتراضي (block أو inline)، ويمكنك تغييره حسب حاجتك.
* استخدام display بشكل صحيح يسهل عليك تصميم الصفحات بشكل احترافي وسهل الصيانة.
* خاصية `display: grid` متقدمة، وستُدرس لاحقًا، لذلك ركز الآن على الأنواع السابقة.

---

```

---

لو تريد إضافة أمثلة حية أو تمارين عملية لتدريب الطلاب على display أو ربطه بتصميم واقعي (مثل Navbar أو Card Layout)، أخبرني بذلك!
```
