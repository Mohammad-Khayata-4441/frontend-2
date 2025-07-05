 
# 👨‍💻 الجلسة الرابعة: أساسيات التيرمينال، Git، وربط المشروع بـ GitHub

---

## 1️⃣ مقدمة سريعة

- **التيرمينال (Terminal / Command Line):**  
  هو أداة لكتابة أوامر نصية للتعامل مع نظام التشغيل (نسخ ملفات، فتح مجلدات، تثبيت برامج... إلخ)، ويُسمى في ويندوز غالباً بـ **Command Prompt** أو **PowerShell**.

- **Git:**  
  هو نظام لإدارة الإصدارات وتتبع التغييرات على ملفات المشاريع البرمجية، يُستخدم بشكل أساسي في العمل الجماعي وتنظيم الشيفرة البرمجية.

- **GitHub:**  
  هو منصة سحابية لاستضافة مشاريع Git، تُستخدم لمشاركة المشاريع والعمل الجماعي ونسخ احتياطية للمشروع.

---

## 2️⃣ أساسيات التيرمينال على ويندوز

### أشهر أنواع التيرمينال في ويندوز:
- **Command Prompt** (`cmd`)
- **PowerShell**
- **Windows Terminal** (يدعم كذا شِل معاً)
- **Git Bash** (يأتي مع Git)

### أهم الأوامر الأساسية:

| الأمر             | وظيفته                             | مثال                   |
| ----------------- | ---------------------------------- | ---------------------- |
| `dir` / `ls`      | عرض محتوى المجلد الحالي            | `dir` أو `ls`          |
| `cd`              | الانتقال لمجلد معين                | `cd Desktop`           |
| `cd ..`           | الرجوع للمجلد السابق               | `cd ..`                |
| `cls`             | مسح الشاشة                         | `cls`                  |
| `mkdir`           | إنشاء مجلد جديد                    | `mkdir myFolder`       |
| `rmdir`           | حذف مجلد فارغ                      | `rmdir myFolder`       |
| `del`             | حذف ملف                            | `del test.txt`         |
| `copy`            | نسخ ملف إلى مكان آخر               | `copy a.txt D:\`       |
| `move`            | نقل ملف أو إعادة تسميته            | `move a.txt b.txt`     |
| `type nul > file` | إنشاء ملف جديد (cmd)               | `type nul > notes.txt` |
| `echo. > file`    | أيضاً لإنشاء ملف جديد (cmd)         | `echo. > notes.txt`    |
| `touch file`      | إنشاء ملف جديد (Git Bash أو Linux) | `touch notes.txt`      |

### ملاحظات:
- الأوامر لا تفرق بين أحرف كبيرة وصغيرة.
- المسار الكامل: `cd C:\Users\YourName\Desktop`
- السهم للأعلى ↑ يعيد آخر أمر كتبته.

---

## 3️⃣ ما هو Git ولماذا نستخدمه؟

- **Git** نظام مجاني ومفتوح المصدر لإدارة الإصدارات.
- يحفظ لك تاريخ التعديلات على مشروعك (تقدر ترجع لأي نسخة قديمة).
- ضروري لأي عمل جماعي أو حتى فردي لتنظيم مشروعك، وتفادي ضياع الكود أو تعارضه بين أكثر من شخص.

---

## 4️⃣ تثبيت Git

1. نزّل Git من [git-scm.com](https://git-scm.com/download/win)
2. ثبّت البرنامج بالطريقة الافتراضية (Next → Next...)
3. بعد التثبيت سيظهر عندك برنامج **Git Bash** (تيرمينال خاص بـ Git)

---

## 5️⃣ أوامر Git الأساسية

| الأمر                                    | وظيفته                                    | مثال                                              |
| ---------------------------------------- | ----------------------------------------- | ------------------------------------------------- |
| `git init`                               | إنشاء مستودع Git في المجلد الحالي         | `git init`                                        |
| `git status`                             | عرض حالة الملفات (معدلة/جديدة/غير متعقبة) | `git status`                                      |
| `git add <file>`                         | إضافة ملف لمنطقة الانتظار (Stage)         | `git add index.html`                              |
| `git add .`                              | إضافة كل الملفات الجديدة/المعدلة          | `git add .`                                       |
| `git commit -m "رسالة"`                  | تثبيت التغييرات وحفظها برسالة             | `git commit -m "أول نسخة"`                        |
| `git log`                                | عرض سجل الكوميتات                         | `git log`                                         |
| `git config --global user.name "اسمك"`   | تعيين اسم المستخدم لأول مرة               | `git config --global user.name "Ali"`             |
| `git config --global user.email "بريدك"` | تعيين بريد المستخدم لأول مرة              | `git config --global user.email "your@email.com"` |

### مثال عملي سريع:
```bash
# إنشاء مجلد جديد للمشروع
mkdir my-project
cd my-project

# تهيئة مستودع Git جديد
git init

# إنشاء ملف جديد (مثال)
echo "Hello World" > index.html

# إضافة الملف إلى Git
git add index.html

# حفظ التغييرات مع رسالة
git commit -m "أول ملف بالمشروع"
````

---

## 6️⃣ ما هو GitHub ولماذا نستخدمه؟

* **GitHub** منصة سحابية لاستضافة مشاريع Git.
* من خلالها يمكنك:

  * مشاركة الكود مع العالم أو مع زملاء العمل
  * الاحتفاظ بنسخ احتياطية من مشروعك على الإنترنت
  * التعاون الجماعي والتعليق على الشيفرة
  * إدارة المهام والمشاكل (issues) الخاصة بالمشروع

---

## 7️⃣ ربط مشروعك المحلي بـ GitHub

### 1. إنشاء مستودع جديد على GitHub

* افتح موقع [github.com](https://github.com) وسجل دخولك
* اضغط على **New Repository**
* اختر اسم المستودع (مثلاً: `my-project`)
* لا تفعّل خيار "Initialize with README"
* انسخ رابط المستودع الجديد (مثال):

  ```
  https://github.com/username/my-project.git
  ```

---

### 2. إضافة الريموت وربط المشروع

#### ما معنى remote و origin؟

* **remote:**
  عنوان المستودع البعيد (عادة على GitHub أو GitLab).
* **origin:**
  هو الاسم الافتراضي لأول ريموت تربطه بمشروعك (عادةً GitHub).

#### إضافة الريموت:

```bash
git remote add origin https://github.com/username/my-project.git
```

#### عرض الريموتات المسجلة:

```bash
git remote -v
```

---

### 3. رفع المشروع لأول مرة إلى GitHub

```bash
git push -u origin main
```

* إذا كان الفرع الرئيسي باسم `master`:

  ```bash
  git push -u origin master
  ```

#### ملاحظات هامة:

* أول عملية push قد تطلب تسجيل دخولك لحساب GitHub (متصفح أو Access Token).
* بعد أول push، يمكنك فقط كتابة `git push` لاحقاً لرفع أي تحديثات.

---

### 4. خطوات كاملة: من الصفر حتى رفع الكود

```bash
# تجهيز المشروع وربطه بـ GitHub:
git init
git add .
git commit -m "أول نسخة"
git remote add origin https://github.com/username/my-project.git
git push -u origin main
```

---

### 5. أوامر Git/GitHub مهمة

| الأمر                         | وظيفته                   | مثال                                  |
| ----------------------------- | ------------------------ | ------------------------------------- |
| `git remote add <name> <url>` | إضافة ريموت جديد         | `git remote add origin <الرابط>`      |
| `git remote -v`               | عرض الريموتات المسجلة    | `git remote -v`                       |
| `git remote remove <name>`    | حذف ريموت                | `git remote remove origin`            |
| `git push origin <branch>`    | رفع الفرع المحدد للريموت | `git push origin main`                |
| `git pull origin <branch>`    | جلب التحديثات من GitHub  | `git pull origin main`                |
| `git clone <url>`             | تحميل مشروع من GitHub    | `git clone https://github.com/...git` |

---

## 8️⃣ تلميحات ونصائح للمبتدئين

* اكتب رسائل توضيحية دائماً عند كل commit.
* أي تعديل يجب أن يمر بمرحلة `add` ثم `commit` ليُحفظ بالتاريخ.
* إذا واجهتك مشاكل في الربط مع GitHub، تحقق من إعدادات الاتصال أو احذف الريموت وأعد إضافته.
* يمكنك حذف مجلد `.git` لبدء مستودع جديد (ستفقد كل التاريخ السابق).
* جرّب الأوامر عملياً ولا تخف من الخطأ، التعلم بالتجربة!

---

## 9️⃣ مصادر للتعلم والمتابعة

* [دليل Git الرسمي بالعربي](https://git-scm.com/book/ar/v2)
* [Git Tutorials for Beginners (YouTube)](https://www.youtube.com/results?search_query=git+basics+arabic)
* [رفع مشروع على GitHub (يوتيوب)](https://www.youtube.com/results?search_query=رفع+مشروع+على+github)
* [شرح أوامر التيرمينال في ويندوز (مقالة عربية)](https://www.geeksforgeeks.org/windows-command-prompt/)
* [مقدمة GitHub من الموقع الرسمي](https://docs.github.com/en/get-started)

---

> **ملاحظة:**
> لا تتردد بالتجربة واللعب بالأوامر. الأخطاء جزء من التعلم!

 
