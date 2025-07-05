<div dir="rtl">

# 🧑‍💻 تطبيقات الويب واساسيات لغة HTML

---

## ✅ **الفرق بين Frontend و Backend**


### 🎯 **المقدمة**

عند بناء أي موقع أو تطبيق ويب، يمكن تقسيمه بشكل عام إلى **جزأين رئيسيين**:

* **Frontend (الواجهة الأمامية)**
* **Backend (الواجهة الخلفية)**

لكل منهما وظيفة محددة وأدوات وتقنيات مختلفة، ويعملان معًا لتقديم تجربة كاملة للمستخدم.

![HTTP Request-Response Diagram](https://miro.medium.com/v2/resize:fit:1400/0*lQJUG355unpGw_fQ)

---

### 🌐 **ما هو الـ Frontend؟**

الـ **Frontend** هو كل ما يراه ويتفاعل معه المستخدم على الشاشة.
هو الجزء "المرئي" من الموقع أو التطبيق، ويشمل:

#### 🧱 **المكونات الأساسية**:

1. **HTML**: الهيكل العام للصفحة (مثل العظام في الجسم).
2. **CSS**: التصميم والمظهر الخارجي (مثل اللباس).
3. **JavaScript**: التفاعل والحركة (مثل الحواس).

#### 🖥️ **أمثلة على واجهات Frontend**:

* الأزرار والنماذج التي تملأها.
* القوائم الجانبية والقوائم المنسدلة.
* الصور والمقالات التي تراها على صفحة الموقع.

#### ⚙️ **أشهر أدوات وتقنيات الـ Frontend**:

* مكتبات: React.js, Vue.js, jQuery
* أطر عمل: Next.js, Angular
* أدوات تنسيق: Tailwind CSS, Bootstrap
* أدوات بناء: Vite, Webpack
* لغات أخرى: TypeScript (امتداد للـ JavaScript)

---

### 🖥️ **ما هو الـ Backend؟**

الـ **Backend** هو الجانب غير المرئي الذي يعمل خلف الكواليس.
وهو المسؤول عن **معالجة البيانات والمنطق الداخلي**.

#### 🧠 **وظائف الـ Backend**:

1. إدارة قواعد البيانات (قراءة، كتابة، تعديل).
2. التعامل مع تسجيل الدخول وكلمات المرور.
3. التحكم بالصلاحيات (من يمكنه رؤية ماذا).
4. إرسال واستقبال البيانات عبر الإنترنت.
5. ربط الموقع بأنظمة أخرى (APIs).

#### 🧰 **أشهر لغات وتقنيات الـ Backend**:

* لغات: Node.js (JavaScript), PHP, Python, Java, Ruby, C#
* أطر عمل: Express.js, Laravel, Django, Spring Boot, ASP.NET Core
* قواعد بيانات: MySQL, PostgreSQL, MongoDB
* APIs: RESTful APIs, GraphQL

---

### 🔁 **كيف يتفاعلان معًا؟**

عندما يضغط المستخدم على زر (في الـ Frontend) لإرسال نموذج:

1. يتم إرسال البيانات إلى السيرفر (Backend).
2. يقوم الـ Backend بمعالجة البيانات (مثل حفظها في قاعدة بيانات).
3. يُرسل ردًا (Response) إلى الـ Frontend.
4. يعرض الـ Frontend النتيجة للمستخدم (نجاح أو فشل مثلاً).

#### مثال:

* المستخدم يكتب بريده وكلمة السر → (Frontend)
* تُرسل البيانات إلى السيرفر للتحقق → (Backend)
* إذا كانت صحيحة → يعود للمستخدم تأكيد الدخول.

---

### 🧩 **تشبيه بسيط**:

| العنصر           | Frontend             | Backend                             |
| ---------------- | -------------------- | ----------------------------------- |
| ما يراه المستخدم | نعم (واجهة مرئية)    | لا (يعمل في الخلفية)                |
| الوظيفة          | العرض والتفاعل       | المعالجة والبيانات                  |
| الأدوات          | HTML, CSS, JS, React | Node.js, Python, DBs, APIs          |
| مثال             | زر "تسجيل دخول"      | التحقق من كلمة المرور وتسجيل الجلسة |

---

### 📌 **لماذا من المهم فهم الفرق؟**

* لتصبح مطور واجهات أمامية (Frontend Developer) عليك التخصص في التصميم وتجربة المستخدم.
* لتصبح مطور خلفيات (Backend Developer) عليك فهم البيانات والمنطق والتخزين.
* أو يمكنك أن تصبح **Full-Stack Developer** وتتعلم كلا الجانبين.

---

- [مقدمة في تطوير الويب - أكاديمية حسوب](https://academy.hsoub.com/programming/web-development/introduction-to-web-development/)
- [Frontend vs Backend – FreeCodeCamp](https://www.freecodecamp.org/news/front-end-vs-back-end/)

---


## ✅ **2. كيف يعمل الويب (Request / Response)**

### 🎯 **مقدمة**

عندما تفتح موقعًا مثل `google.com` في المتصفح، هناك الكثير مما يحدث "خلف الكواليس".
الويب لا يعمل بشكل عشوائي، بل يعتمد على نظام دقيق جدًا يُسمى **نموذج الطلب والرد** (Request / Response Model) ويُبنى على بروتوكول يُدعى **HTTP**.

---

### 🌐 **ما هو HTTP؟**

**HTTP** = HyperText Transfer Protocol
هو البروتوكول الذي يستخدمه الويب لإرسال البيانات بين **المتصفح (العميل)** و **الخادم (السيرفر)**.

> مثال بسيط:
> عند كتابة `https://example.com` في المتصفح:
>
> * يقوم المتصفح بإرسال طلب **GET** للحصول على الصفحة.
> * يرد السيرفر بملف HTML (أو رسالة خطأ).

---

### 🧭 **المسار العام لأي طلب على الإنترنت**

![HTTP Request-Response Diagram](https://media.geeksforgeeks.org/wp-content/uploads/20240529150129/HTTP-.gif)



1. **المستخدم** يفتح متصفحًا ويكتب رابط (URL).
2. **المتصفح** يترجم هذا الرابط إلى عنوان IP عبر DNS.
3. يتم إنشاء **طلب (Request)** يُرسل إلى السيرفر.
4. **السيرفر** يستقبل الطلب، يعالجه، ويرسل **رد (Response)**.
5. **المتصفح** يعرض الرد كمحتوى مرئي.



---


### 📤 **ما هو الطلب (HTTP Request)؟**

طلب يرسله المتصفح للسيرفر، يتكوّن من:

* **الطريقة (Method)**: مثل `GET`, `POST`, `PUT`, `DELETE`
* **الرابط (URL)**: مثل `/products`
* **الرؤوس (Headers)**: مثل نوع المتصفح أو ملفات الكوكيز
* **الجسم (Body)**: (اختياري) مثل البيانات المرسلة في نموذج

#### مثال:

```http
GET /index.html HTTP/1.1
Host: www.example.com
User-Agent: Mozilla/5.0
```

---

### 📥 **ما هو الرد (HTTP Response)؟**

هو ما يرجعه السيرفر ردًا على الطلب، ويتكون من:

* **رمز الحالة (Status Code)**: مثل 200 (نجاح)، 404 (غير موجود)
* **الرؤوس (Headers)**: مثل نوع المحتوى أو مدة التخزين
* **الجسم (Body)**: المحتوى مثل HTML أو JSON أو صورة

#### مثال:

```http
HTTP/1.1 200 OK
Content-Type: text/html

<html> ... </html>
```

---

### 🔄 **أنواع أشهر الطلبات (Methods)**

| الطريقة  | الاستخدام                          |
| -------- | ---------------------------------- |
| `GET`    | جلب بيانات (صفحة، صورة، ملف)       |
| `POST`   | إرسال بيانات (تسجيل الدخول، نموذج) |
| `PUT`    | تعديل مورد موجود                   |
| `DELETE` | حذف مورد                           |

---

### 🖥️ **تشبيه واقعي بسيط**

> تخيل أنك تطلب بيتزا من مطعم:

* أنت (المتصفح): تطلب بيتزا = Request
* المطعم (السيرفر): يحضّر الطلب ويرسله لك = Response
* طريقة الطلب (هاتف؟ تطبيق؟) = HTTP
* نوع الطلب (بيتزا، مشروب) = Method
* العنوان والاسم = Headers
* الطلب نفسه = Body

---

### 🛠️ **أين ترى هذه الطلبات؟**

في أي متصفح حديث، يمكنك:

* الضغط على الزر الأيمن > **Inspect / فحص** > التبويب **Network**
* سترى كل الطلبات التي يتم إرسالها لكل ملف (HTML, CSS, JS, صور...)

---

### 📌 **لماذا يهم أن تفهم هذا؟**

* أي تفاعل بين المتصفح والسيرفر يعتمد عليه.
* ضروري لفهم كيف تعمل النماذج، طلبات API، وعمليات تسجيل الدخول.
* مهم لفهم الأمن، الأداء، وأخطاء الشبكة.

---

### 🔗 مراجع إضافية:

* [شرح شامل لبروتوكول HTTP – MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview)
* [كيف يعمل الإنترنت؟ – أكاديمية حسوب](https://academy.hsoub.com/networking/internet/how-does-the-internet-work/)


---

## ✅ 3. هيكل صفحات الويب (HTML, CSS, JS)
- HTML: الهيكل
- CSS: التنسيق
- JS: التفاعل

### 🔗 مراجع:
- [HTML vs CSS vs JS – W3Schools](https://www.w3schools.com/whatis/whatis_html.asp)
- [دورة برمج – برمج.كوم](https://www.barmej.com/)

---

## ✅ 4. أدوات التطوير (VS Code – Live Server)
VS Code هو محرر شيفرة ممتاز.  
Live Server يقوم بعرض الصفحة مباشرةً عند الحفظ.

### 🔗 مراجع:
- [VS Code Documentation](https://code.visualstudio.com/docs)
- [شرح Live Server (يوتيوب)](https://www.youtube.com/watch?v=xZ3w_zD0C5M)

---

## ✅ 5. عناصر HTML الأساسية
```html
<h1>عنوان</h1>
<p>فقرة</p>
<a href="#">رابط</a>
<img src="image.jpg" alt="وصف" />
```

### 🔗 مراجع:
- [HTML Elements – MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)
- [عناصر HTML – حسوب](https://developer.mozilla.org/ar/docs/Web/HTML/Element)

---

## ✅ 6. القوائم: ul, ol, li
```html
<ul><li>عنصر</li></ul>
<ol><li>عنصر مرتب</li></ol>
```

### 🔗 مراجع:
- [HTML Lists – W3Schools](https://www.w3schools.com/html/html_lists.asp)
- [شرح القوائم – HTML بالعربي](https://www.html.net/tutorials/html/list/)

---

## ✅ 7. الجداول: table, thead, tbody, tr, td, th
```html
<table>
  <thead><tr><th>عنوان</th></tr></thead>
  <tbody><tr><td>معلومة</td></tr></tbody>
</table>
```

### 🔗 مراجع:
- [HTML Tables – W3Schools](https://www.w3schools.com/html/html_tables.asp)
- [الجداول – أكاديمية حسوب](https://academy.hsoub.com/web/html/html-tables-r33/)

---

## ✅ 8. النماذج: form, input, textarea, select, button
```html
<form>
  <input type="text" placeholder="اسمك" />
  <textarea></textarea>
  <select><option>خيار</option></select>
  <button>أرسل</button>
</form>
```

### 🔗 مراجع:
- [HTML Forms – MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form)
- [نماذج HTML – HTML.net](https://www.html.net/tutorials/html/forms/)

---

## ✅ 9. العناصر الهيكلية: div, section, nav, header, footer, main, article, aside
```html
<header><h1>عنوان</h1></header>
<nav><a href="#">رابط</a></nav>
<main><section><article>محتوى</article></section></main>
<footer>نهاية</footer>
```

### 🔗 مراجع:
- [Semantic Elements – W3Schools](https://www.w3schools.com/html/html5_semantic_elements.asp)
- [العناصر الهيكلية – أكاديمية حسوب](https://academy.hsoub.com/web/html5/structural-and-semantic-elements-in-html5-r36/)

---

## ✅ 10. الخصائص (Attributes)
```html
<a href="url" target="_blank">رابط</a>
<img src="image.jpg" alt="نص بديل" />
<input placeholder="اكتب هنا" required />
<button disabled>زر</button>
```

### 🔗 مراجع:
- [HTML Attributes – MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes)
- [Attributes – W3Schools](https://www.w3schools.com/html/html_attributes.asp)

---

## ✅ 11. المشروع التطبيقي
صفحة شخصية تشمل:
- عنوان
- قائمة مهارات
- جدول
- نموذج
- صورة
- روابط

### 🔗 مراجع:
- [HTML Project Ideas – FreeCodeCamp](https://www.freecodecamp.org/news/html-projects-for-beginners/)
- [مشاريع HTML بسيطة – YouTube](https://www.youtube.com/watch?v=WSZz4OaWBA0)

---

## ✅ 12. Git و GitHub
```bash
git init
git add .
git commit -m "الرفع الأول"
git remote add origin https://github.com/user/repo.git
git push -u origin master
```

### 🔗 مراجع:
- [دورة Git و GitHub – الزيرو](https://elzero.org/study/git-and-github/)
- [GitHub Docs](https://docs.github.com/en/get-started/using-git/about-git)