# ALYA - Quick Start Guide

<div dir="rtl">

## 🚀 دليل البدء السريع

### 1. التثبيت

```bash
# تثبيت الحزم المطلوبة
npm install
```

### 2. تشغيل السيرفر المحلي

```bash
# تشغيل بيئة التطوير
npm run dev
```

افتح المتصفح على: **http://localhost:3000**

### 3. إضافة الصور

1. ضع صور العلامات التجارية في المسار: `public/images/`
2. الصور المطلوبة:
   - `by-lj-hero.jpg`
   - `by-lj-logo.png`
   - `lathat-hero.jpg`
   - `lathat-logo.png`
   - `third-brand-hero.jpg`
   - `third-brand-logo.png`

### 4. تعديل البيانات

#### تعديل بيانات الشركة
افتح الملف: `data/company.js`

```javascript
export const company = {
  name: "ALYA",
  nameAr: "ألـيـا",
  goal: "...",      // الهدف
  vision: "...",    // الرؤية
  mission: "...",   // الرسالة
  description: "..." // الوصف
};
```

#### إضافة/تعديل العلامات التجارية
افتح الملف: `data/brands.js`

```javascript
{
  id: 1,
  name: "اسم العلامة",
  slug: "brand-slug",
  category: "الفئة",
  goal: "الهدف",
  vision: "الرؤية",
  mission: "الرسالة",
  theme: {
    primary: "#000000",
    secondary: "#FFFFFF",
    font: "Tajawal"
  }
}
```

### 5. بناء المشروع للإنتاج

```bash
# بناء المشروع
npm run build

# تشغيل السيرفر الإنتاجي
npm start
```

## 📝 هيكل الملفات الأساسية

```
app/
  ├── layout.jsx          → التصميم الرئيسي
  ├── page.jsx            → الصفحة الرئيسية
  └── brand/[slug]/
      └── page.jsx        → صفحات العلامات التجارية

components/               → المكونات القابلة لإعادة الاستخدام
data/                     → بيانات الموقع
styles/                   → ملفات التنسيق
public/                   → الملفات الثابتة
```

## 🎨 تخصيص الألوان

الألوان المستخدمة في المتغيرات:

```css
--primary: اللون الأساسي
--secondary: اللون الثانوي
--accent: لون التمييز
```

يمكنك تعديلها في كل علامة تجارية داخل ملف `data/brands.js`

## 🌐 النشر

### Vercel (موصى به)
```bash
# تثبيت Vercel CLI
npm i -g vercel

# نشر المشروع
vercel
```

### خيارات أخرى:
- **Netlify**
- **AWS Amplify**
- **Digital Ocean**
- **VPS** خاص

## ✅ قائمة التحقق قبل النشر

- [ ] إضافة جميع الصور المطلوبة
- [ ] تعديل بيانات الشركة
- [ ] تعديل بيانات العلامات التجارية
- [ ] اختبار جميع الروابط
- [ ] اختبار النسخة المحمولة
- [ ] مراجعة SEO
- [ ] تحسين الصور
- [ ] اختبار الأداء

## 🆘 المساعدة

إذا واجهت أي مشكلة:

1. تأكد من تثبيت جميع الحزم: `npm install`
2. امسح الكاش: `rm -rf .next`
3. أعد بناء المشروع: `npm run build`
4. راجع سجلات الأخطاء في Terminal

## 📞 الدعم الفني

للدعم الفني أو الاستفسارات:
- البريد الإلكتروني: dev@alya.sa
- الوثائق: راجع README.md

---

**جاهز للانطلاق! 🚀**

</div>
