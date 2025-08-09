
# 👨‍💻 محاضرة جافا سكريبت للمبتدئين  

سيشمل الملف شرح كل فكرة بشكل مبسط مع أمثلة برمجية مقارنة مع C++ أحيانًا، وسأراعي أن تكون الأمثلة سهلة التنفيذ.

---

````markdown
# 👨‍💻 محاضرة جافا سكريبت للمبتدئين  

---

## 1️⃣ مقدمة عن جافا سكريبت

- **جافا سكريبت (JavaScript)** لغة برمجة ديناميكية تُستخدم بشكل أساسي في تطوير مواقع الويب لجعل الصفحات تفاعلية.
- تنفذ في **المتصفح** (مثل Google Chrome, Firefox...) ويمكن تنفيذها على **الخادم** باستخدام Node.js.
- تختلف عن Java (على عكس ما يوحي الاسم).
- أصبحت لغة كاملة تستخدم لتطوير الواجهة الأمامية والخلفية (Full Stack).

---

## 2️⃣ كتابة وتشغيل كود جافا سكريبت

- يمكنك كتابة الكود في ملف مستقل `.js` أو داخل صفحة HTML.
- أبسط طريقة للتجربة:  
  افتح المتصفح → اضغط F12 → اذهب إلى **Console** وجرب كتابة أكواد جافا سكريبت.

### مثال: إضافة كود في صفحة HTML

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>JS Example</title>
  </head>
  <body>
    <h1>Hello from JavaScript!</h1>
    <script>
      console.log("Hello World from JS!");
      alert("Welcome to JavaScript!");
    </script>
  </body>
</html>
````

---

## 3️⃣ المتغيرات (Variables)

* لا تحتاج لتعريف نوع المتغير (بعكس C++).
* الأنواع الأكثر استخداماً: `Number`, `String`, `Boolean`, `Object`, `Array`, `undefined`, `null`.

### الفرق بين `var`, `let`, `const`:

* `var`: طريقة قديمة، نطاقها أوسع (function-scoped).
* `let`: حديثة، يفضل استخدامها (block-scoped).
* `const`: متغير ثابت لا يتغير.

### أمثلة

```js
let age = 25;         // Number
const name = "Ali";   // String
var isActive = true;  // Boolean

let x; // متغير بدون قيمة -> undefined
let y = null; // متغير فارغ

// لا حاجة لكتابة int أو string مثل C++
```

---

## 4️⃣ الجمل الشرطية (If, else)

* تشبه C++ من حيث البنية.
* انتبه: لا توجد أنواع صارمة، أحيانًا المقارنة غير متوقعة!

### أمثلة

```js
let a = 5;

if (a > 3) {
  console.log("a is greater than 3");
} else if (a === 3) {
  console.log("a is exactly 3");
} else {
  console.log("a is less than 3");
}
```

### الفرق بين == و ===

* `==`: مقارنة مع تحويل نوع المتغير تلقائياً (type coercion).
* `===`: مقارنة بدون تحويل نوع المتغير (strict equality).

```js
console.log(5 == "5");  // true
console.log(5 === "5"); // false
```

---

## 5️⃣ Truthy و Falsy

* كل القيم في جافا سكريبت تعتبر إما **truthy** أو **falsy** في الشروط.
* القيم "falsy":

  * false, 0, "", null, undefined, NaN

```js
if (0) { console.log("لن تظهر"); }
if ("") { console.log("لن تظهر"); }
if ("hello") { console.log("ستظهر"); }
```

---

## 6️⃣ الحلقات (Loops)

### for loop

```js
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

### while loop

```js
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
```

### for...of loop (للتكرار على عناصر مصفوفة)

```js
let numbers = [10, 20, 30];
for (let num of numbers) {
  console.log(num);
}
```

### for...in loop (للتكرار على خصائص الكائن)

```js
let person = { name: "Ali", age: 20 };
for (let key in person) {
  console.log(key + ": " + person[key]);
}
```

---

## 7️⃣ الدوال (Functions)

### تعريف دالة (Function Declaration)

```js
function greet(name) {
  return "Hello, " + name;
}

console.log(greet("Sara"));
```

### دالة بدون اسم (Function Expression)

```js
const add = function(a, b) {
  return a + b;
};

console.log(add(3, 7));
```

### دوال Arrow (Arrow Functions)

```js
const square = (x) => x * x;
console.log(square(4));
```

### ملاحظة هامة:

* لا حاجة لتعريف نوع المتغير أو قيمة الإرجاع (return type) كما في C++.
* الدالة يمكن أن ترجع أي نوع.

---

## 8️⃣ المصفوفات (Arrays)

### تعريف مصفوفة واستخدامها

```js
let fruits = ["apple", "banana", "orange"];
console.log(fruits[1]); // "banana"

fruits.push("mango");   // إضافة عنصر
console.log(fruits);    // ["apple", "banana", "orange", "mango"]

fruits.pop();           // حذف آخر عنصر
console.log(fruits);    // ["apple", "banana", "orange"]
```

### بعض دوال المصفوفات:

* `forEach`
* `map`
* `filter`

```js
let nums = [1, 2, 3, 4];
nums.forEach(n => console.log(n * 2)); // 2 4 6 8

let doubled = nums.map(n => n * 2);    // [2, 4, 6, 8]
let evens = nums.filter(n => n % 2 === 0); // [2, 4]
```

---

## 9️⃣ الكائنات (Objects)

* الكائن (Object) يشبه struct أو class بسيط في C++.
* يحتوي على أزواج (اسم: قيمة).

```js
let student = {
  name: "Omar",
  age: 22,
  isGraduate: false
};

console.log(student.name);    // "Omar"
student.age = 23;             // تعديل قيمة
student.city = "Damascus";    // إضافة خاصية
```

---

## 🔟 التعامل مع DOM (مقدمة)

* **DOM**: هو تمثيل لكل عناصر صفحة HTML.
* يمكنك باستخدام جافا سكريبت تعديل الصفحة مباشرة.

### مثال: تغيير نص عنصر

```html
<p id="demo">مرحبا!</p>
<button onclick="changeText()">غير النص</button>

<script>
  function changeText() {
    document.getElementById("demo").textContent = "تم تغيير النص!";
  }
</script>
```

---

## 1️⃣1️⃣ أخطاء شائعة وفروقات مع C++

* جافا سكريبت **ليست strongly-typed**: يمكنك تغيير نوع المتغير بسهولة.
* `==` vs `===`
* لا يوجد مؤشرات (pointers).
* لا يوجد إدارة يدوية للذاكرة.
* التعامل مع الأخطاء باستخدام try...catch:

```js
try {
  let x = y + 1; // y غير معرف
} catch (error) {
  console.log("حدث خطأ:", error.message);
}
```

---

## 1️⃣2️⃣ البرمجة الكائنية (OOP) في جافا سكريبت (مقدمة)

* منذ ES6 أصبح لدينا الكلمة المفتاحية `class`.

```js
class Car {
  constructor(model, year) {
    this.model = model;
    this.year = year;
  }

  display() {
    console.log(`Car: ${this.model}, Year: ${this.year}`);
  }
}

let car1 = new Car("BMW", 2021);
car1.display(); // Car: BMW, Year: 2021
```

---

## 1️⃣3️⃣ المفاهيم الحديثة (ES6 وما بعده)

* `let`, `const` بدلاً من `var`.
* Arrow functions: `(x) => x * x`
* Template literals:

  ```js
  let name = "Ali";
  console.log(`Hello, ${name}!`);
  ```
* Destructuring (تفكيك المصفوفات والكائنات):

```js
let arr = [1, 2, 3];
let [a, b] = arr; // a = 1, b = 2

let obj = {x: 10, y: 20};
let {x, y} = obj;
```

---

## 1️⃣4️⃣ تطبيقات وتمارين عملية

### مثال: برنامج Hello World

```js
console.log("Hello, world!");
```

### مثال: جمع رقمين من المستخدم

```js
let num1 = Number(prompt("أدخل الرقم الأول:"));
let num2 = Number(prompt("أدخل الرقم الثاني:"));
alert("الناتج: " + (num1 + num2));
```

### مثال: التحقق من عمر المستخدم

```js
let age = Number(prompt("كم عمرك؟"));
if (age >= 18) {
  alert("أنت بالغ.");
} else {
  alert("أنت قاصر.");
}
```

### مثال: استخدام مصفوفة وكائن

```js
let students = [
  {name: "Ali", grade: 90},
  {name: "Sara", grade: 85}
];

students.forEach(s => {
  console.log(`${s.name}: ${s.grade}`);
});
```

---

## ✅ نصائح للانتقال السلس من C++ إلى جافا سكريبت

* لا تكتب أنواع المتغيرات.
* جرب الكود في الـ Console مباشرة.
* ابدأ بتجارب صغيرة على مصفوفات وكائنات ودوال.
* راقب النتائج عبر `console.log`.

---

**بالتوفيق في تعلم جافا سكريبت!**

```

---

هل ترغب بإضافة تمارين أو أسئلة نهاية المحاضرة؟  
هل تفضل ملفًا للتحميل أو تريده مباشرة هكذا؟
```
