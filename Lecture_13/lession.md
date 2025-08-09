 

---

# 📚 جافاسكريبت - شرح توابع المصفوفات وأدوات الوقت
## 1️⃣ توابع المصفوفات الأساسية في JavaScript

````md


### 1. `filter()`
- **الوصف:** يرجع مصفوفة جديدة تحتوي على العناصر التي تحقق الشرط.
- **الصيغة:**
```javascript
const newArray = array.filter(callback);
````

* **مثال:**

```javascript
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // [2, 4]
```

---

### 2. `find()`

* **الوصف:** يرجع أول عنصر يحقق الشرط (أو `undefined` إذا لم يوجد).
* **الصيغة:**

```javascript
const item = array.find(callback);
```

* **مثال:**

```javascript
const users = [
  { name: "Ali", age: 20 },
  { name: "Omar", age: 25 }
];
const found = users.find(user => user.age > 21);
console.log(found); // { name: "Omar", age: 25 }
```

---

### 3. `some()`

* **الوصف:** يرجع `true` إذا وُجد على الأقل عنصر واحد يحقق الشرط.
* **الصيغة:**

```javascript
const hasMatch = array.some(callback);
```

* **مثال:**

```javascript
const numbers = [1, 3, 5];
const hasEven = numbers.some(num => num % 2 === 0);
console.log(hasEven); // false
```

---

### 4. `every()`

* **الوصف:** يرجع `true` إذا **جميع** العناصر تحقق الشرط.
* **مثال:**

```javascript
const numbers = [2, 4, 6];
const allEven = numbers.every(num => num % 2 === 0);
console.log(allEven); // true
```

---

### 5. `map()`

* **الوصف:** يرجع مصفوفة جديدة بعد تطبيق دالة على كل عنصر.
* **مثال:**

```javascript
const numbers = [1, 2, 3];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6]
```

---

### 6. `reduce()`

* **الوصف:** يجمع أو يحسب قيمة نهائية من خلال المرور على المصفوفة.
* **الصيغة:**

```javascript
const result = array.reduce((accumulator, currentValue) => { ... }, initialValue);
```

* **مثال:**

```javascript
const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum); // 10
```

---

### 7. `forEach()`

* **الوصف:** ينفذ دالة على كل عنصر بدون إرجاع قيمة.
* **مثال:**

```javascript
const fruits = ["apple", "banana", "orange"];
fruits.forEach(fruit => console.log(fruit));
// apple
// banana
// orange
```

---

## 2️⃣ أدوات التاريخ والوقت (البسيطة)

### إنشاء كائن تاريخ:

```javascript
const now = new Date();
console.log(now); // التاريخ والوقت الحالي
```

### بعض الدوال الشائعة:

```javascript
const date = new Date();
console.log(date.getFullYear()); // السنة
console.log(date.getMonth() + 1); // الشهر (من 0 إلى 11)
console.log(date.getDate()); // اليوم من الشهر
console.log(date.getHours()); // الساعة
console.log(date.getMinutes()); // الدقائق
console.log(date.getSeconds()); // الثواني
```

### تعيين وقت أو تاريخ:

```javascript
const date = new Date();
date.setFullYear(2025);
date.setMonth(11); // ديسمبر
console.log(date);
```

---

## 3️⃣ `setTimeout` و `setInterval`

### `setTimeout`

* **الوصف:** ينفذ الكود مرة واحدة بعد مدة زمنية معينة (بالملي ثانية).
* **مثال:**

```javascript
setTimeout(() => {
  console.log("بعد ثانيتين");
}, 2000);
```

---

### `setInterval`

* **الوصف:** ينفذ الكود بشكل متكرر كل مدة زمنية محددة.
* **مثال:**

```javascript
let counter = 0;
const intervalId = setInterval(() => {
  counter++;
  console.log("العدد:", counter);
  if (counter === 5) {
    clearInterval(intervalId); // إيقاف التكرار
  }
}, 1000);
```


 
