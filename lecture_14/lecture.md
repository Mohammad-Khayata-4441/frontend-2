# 📚 جافاسكريبت - الاستيراد والتصدير، الوعود، الجلب، وملفات JSON، و LocalStorage
## 1️⃣ `export` و `import`



### **ما الهدف؟**
في JavaScript الحديثة (ES Modules) يمكن تقسيم الكود إلى ملفات متعددة وإعادة استخدامه عن طريق **التصدير** (`export`) و **الاستيراد** (`import`).


### **أنواع التصدير**

#### 1. التصدير المسمّى (`Named Export`)
```javascript
// file1.js
export const name = "Ali";
export function greet() {
  console.log("Hello!");
}
``` 

```javascript
// file2.js
import { name, greet } from './file1.js';

console.log(name); // Ali
greet(); // Hello!
```


#### 2. التصدير الافتراضي (`Default Export`)

* ملف يمكن أن يحتوي على **تصدير افتراضي واحد فقط**.

```javascript
// file1.js
export default function sayHi() {
  console.log("Hi!");
}
```

```javascript
// file2.js
import sayHi from './file1.js';

sayHi(); // Hi!
```

---

## 2️⃣ **Promises** (الوعود)

### **ما هي؟**

`Promise` هي طريقة للتعامل مع العمليات **غير المتزامنة** (Asynchronous)، مثل جلب البيانات من API.

* **الحالات:**

  1. **Pending**: قيد التنفيذ
  2. **Fulfilled**: تمت بنجاح
  3. **Rejected**: فشلت

---

### **مثال:**

```javascript
const myPromise = new Promise((resolve, reject) => {
  let success = true;
  if (success) {
    resolve("تمت العملية بنجاح");
  } else {
    reject("حدث خطأ");
  }
});

myPromise
  .then(result => console.log(result))
  .catch(error => console.error(error));
```

---

## 3️⃣ **fetch()**

### **الوصف:**

`fetch()` تستخدم لجلب البيانات من **API** أو ملف على الإنترنت.

### **مثال:**

```javascript
fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => response.json()) // تحويل الرد إلى JSON
  .then(data => console.log(data))
  .catch(error => console.error('خطأ:', error));
```

---

## 4️⃣ **ملفات JSON**

### **ما هو JSON؟**

* **JavaScript Object Notation**: صيغة لتخزين وتبادل البيانات.
* تستخدم بشكل واسع في APIs.
* تشبه كائنات جافاسكريبت لكن بدون دوال.

**مثال JSON:**

```json
{
  "name": "Omar",
  "age": 25,
  "skills": ["HTML", "CSS", "JavaScript"]
}
```

---

## 5️⃣ **JSON.parse()** و **JSON.stringify()**

### **JSON.parse()**

* يحول نص JSON إلى **كائن جافاسكريبت**.

```javascript
const jsonString = '{"name":"Omar","age":25}';
const obj = JSON.parse(jsonString);
console.log(obj.name); // Omar
```

---

### **JSON.stringify()**

* يحول كائن جافاسكريبت إلى **نص JSON**.

```javascript
const obj = { name: "Omar", age: 25 };
const jsonString = JSON.stringify(obj);
console.log(jsonString); // {"name":"Omar","age":25}
```

---

## 6️⃣ **LocalStorage**

### **الوصف:**

`localStorage` عبارة عن مساحة تخزين في المتصفح تسمح بحفظ البيانات على جهاز المستخدم بشكل دائم (حتى بعد إعادة تشغيل المتصفح) بحجم يقارب **5MB** لكل نطاق.

---

### **الخصائص:**

* التخزين يتم على شكل **سلاسل نصية (Strings)**.
* يمكن تخزين الكائنات بعد تحويلها إلى JSON.
* البيانات لا تنتهي صلاحيتها إلا إذا تم مسحها يدوياً.

---

### **الأوامر الأساسية:**

#### 1. **حفظ بيانات**

```javascript
localStorage.setItem('username', 'Ali');
```

#### 2. **قراءة بيانات**

```javascript
const name = localStorage.getItem('username');
console.log(name); // Ali
```

#### 3. **حذف عنصر**

```javascript
localStorage.removeItem('username');
```

#### 4. **مسح كل البيانات**

```javascript
localStorage.clear();
```

---

### **تخزين كائن باستخدام JSON**

```javascript
const user = { name: "Ali", age: 25 };
localStorage.setItem('user', JSON.stringify(user));

const savedUser = JSON.parse(localStorage.getItem('user'));
console.log(savedUser.name); // Ali
```

---

## 📌 ملاحظات مهمة:

* **`export/import`** تعمل فقط إذا كان `type="module"` في HTML أو في بيئة Node.js الحديثة.
* **`Promise`** و **`fetch`** أساس التعامل مع أي API حديث.
* **`JSON.parse`** و **`JSON.stringify`** ضروريان لتحويل البيانات بين النصوص والكائنات.
* **`localStorage`** لا يجب استخدامه لتخزين بيانات حساسة لأنه يمكن لأي شخص قراءته من المتصفح.

 
