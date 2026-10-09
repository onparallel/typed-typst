// Converted from test/universe/corpus/araby-book.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  define,
  doc,
  external,
  footnote,
  importPackage,
  inline,
  linebreak,
  m,
  raw,
  show,
  space,
} from '../../../src/index.ts'

export default () => {
  const book = external('book')
  const inlineQuotation = define('inline-quotation')
    .pos('arg1', T.content)
    .named('footnote-entry', T.content, [])
    .named('ref', T.content, [])
    .returns(T.any)
    .external()
  const inlineVerse = define('inline-verse')
    .pos('arg1', T.content)
    .named('ref', T.content, [])
    .returns(T.any)
    .external()
  const poetry = define('poetry').pos('arg1', T.content).pos('arg2', T.content).returns(T.any).external()
  const verse = define('verse').pos('arg1', T.content).named('ref', T.content, []).returns(T.any).external()
  const arabicDigits = define('arabic-digits').pos('arg1', T.any).returns(T.any).external()
  const book_with = define('with')
    .named('author', T.any, null)
    .named('date', T.any, null)
    .named('dedication', T.content, [])
    .named('edition', T.any, null)
    .named('publisher', T.any, null)
    .named('subtitle', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external(book)
  return doc(
    importPackage('@preview/araby-book:0.2.0', [book, inlineQuotation, inlineVerse, poetry, verse, arabicDigits]),
    show(
      book_with({
        title: 'في ظلال الكلمات',
        subtitle: 'خواطر ومقالات مختارة',
        author: 'عبد العزيز إسلام جلال',
        publisher: 'دار المثال للنشر',
        edition: 'الطبعة الأولى',
        date: '2026',
        dedication: inline`${space}إلى كل من أحب الحرف العربي وسعى إلى إحيائه.${space}`,
      }),
    ),
    m.heading(1, 'المقدمة'),
    'هذا نص تجريبي يوضح شكل الفصل الأول من الكتاب. يمكنك استبدال هذا المحتوى بمحتوى كتابك الخاص. يدعم القالب الفقرات المُبررة (justified) والمسافة البادئة التلقائية لبداية كل فقرة، بالإضافة إلى ترقيم الصفحات بالأرقام العربية الشرقية.',
    m.heading(2, 'فقرة فرعية'),
    'يمكن إضافة عناوين من المستوى الثاني داخل كل فصل لتقسيم الأفكار، كما في هذا المثال.',
    m.heading(3, 'فقرة فرعية من المستوى الثالث'),
    inline`هذه فقرة تحتوي على حاشية سفلية لتوضيح تنسيقها المخصص ${footnote(inline`هذا نص الحاشية السفلية، ويظهر لونه مميزًا في أسفل الصفحة.`)}.`,
    m.lines(
      m.heading(4, 'فقرة فرعية من المستوى الرابع'),
      inline`هذه فقرة فرعية من المستوى الرابع. ${linebreak()} كلا الفقرات الفرعية من المستوى الثالث والرابع
تحتوي على ترقيم تلقائي.`,
    ),
    m.heading(1, 'الشعر والاستشهاد'),
    inline`يوفر القالب دالة ${raw('poetry')} لعرض بيت شعري مقسم إلى صدر وعجز:`,
    inline(
      poetry(inline`تَعَلَّمْ فَإِنَّ العِلْمَ زَيْنٌ لِأَهْلِهِ`, inline`وَفَضْلٌ وَعُنْوَانٌ لِكُلِّ المَحَامِدِ`),
    ),
    inline`كما يوفر دالة ${raw('verse')} لعرض استشهاد قرآني أو نص مُبرَز:`,
    inline(
      verse(
        { ref: inline`سورة الغاشية` },
        inline`أَفَلَا يَنظُرُونَ إِلَى ٱلْإِبِلِ كَيْفَ خُلِقَتْ (${arabicDigits(17)}) وَإِلَى ٱلسَّمَآءِ
كَيْفَ رُفِعَتْ (${arabicDigits(18)}) وَإِلَى ٱلْجِبَالِ كَيْفَ نُصِبَتْ (${arabicDigits(19)})
وَإِلَى ٱلْأَرْضِ كَيْفَ سُطِحَتْ (${arabicDigits(20)})`,
      ),
    ),
    inline`ويمكن استخدام ${raw('inline-verse')} لإدراج آية قرآنية أو نص مبرز قصير داخل السياق، مثل قوله:
${inlineVerse(
  { ref: inline`سورة المائدة` },
  inline`قُلْ أَتَعْبُدُونَ مِن دُونِ ٱللَّهِ مَا لَا يَمْلِكُ لَكُمْ ضَرًّۭا وَلَا نَفْعًۭا ۚ وَٱللَّهُ
هُوَ ٱلسَّمِيعُ ٱلْعَلِيمُ (${arabicDigits(76)})`,
)} ضمن فقرة عادية دون قطع تسلسل النص.${linebreak()}`,
    inline`أما ${raw('inline-quotation')} فتُستخدم لإدراج اقتباس عام، بخط مائل بدلاً من اللون المميز، كما
قال أبو هريرة: ${inlineQuotation(
      { ref: inline`صحيح`, footnoteEntry: inline`صحيح البخاري رقم 6116; التخريج: من أفراد البخاري على مسلم` },
      inline`أنَّ رَجُلًا قال للنَّبيِّ صلَّى اللهُ عليه وسلَّم: أوصِني، قال: لا تَغضَبْ. فرَدَّدَ مِرارًا،
قال: لا تَغضَبْ`,
    )} ${footnote(inline`المصادر اختيارية ويمكن حذفها إذا لم تكن هناك حاجة لذكرها.`)}`,
  )
}
