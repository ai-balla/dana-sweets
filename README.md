# dana-sweets

متجر Dana Sweets من صفحة واحدة باللغة العربية، لعرض لفائف القرفة وطلبها عبر واتساب في جدة.

## المميزات

- الشعار وصور المنتجات المقدمة من المتجر.
- عرض متحرك يدعم تفضيل تقليل الحركة وتصميم متجاوب.
- أربع نكهات وكميات مستقلة لكل نكهة.
- نموذج للاسم والعنوان والتاريخ والملاحظات، مع معاينة رسالة الطلب.
- فتح رسالة واتساب إلى `+966507448979`؛ يرسلها العميل بنفسه ويؤكد المتجر الطلب.

## التشغيل

الموقع ثابت ولا يحتاج إلى تثبيت حزم. من جذر المشروع:

```sh
python -m http.server 4173
```

ثم افتح http://localhost:4173.

## الملفات

- `index.html`: الصفحة.
- `style.css`: التصميم والحركات.
- `app.js`: الكميات ونموذج واتساب.
- `assets/`: الشعار والصور.
- `marketing-content.md`: المحتوى التسويقي والمصادر وملاحظات المنافسين.
- `.openai/hosting.json`: إعدادات استضافة Sites الحالية.

الأسعار وأحجام العبوات والتوفر ورسوم وموعد التوصيل تؤكَّد مباشرة مع المتجر. صور المنتجات مواد دعائية مقدمة من المتجر. يستخدم الخط Google Fonts مع خط بديل محلي.

## Hostinger

The website files live at the repository root. Configure Hostinger Git deployment for branch main, targeting the site's document root (typically public_html). Enable automatic deployment in Hostinger and register its provided webhook in GitHub. No npm install or build command is needed for Hostinger. The existing Sites preview uses node build.cjs to generate an ignored dist directory.
