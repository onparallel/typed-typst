// Converted from test/universe/corpus/eskd-drafting.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  add,
  align,
  auto,
  bottom,
  center,
  define,
  doc,
  external,
  horizon,
  importPackage,
  inline,
  linebreak,
  m,
  mm,
  outline,
  rect,
  show,
  space,
  strong,
  sym,
  table,
  unsafeRaw,
  v,
} from '../../../src/index.ts'

export default () => {
  const eskdDocument = external('eskd-document')
  const pageTitle = external('page-title')
  const gostText = define('gost-text')
    .pos('arg1', T.content)
    .named('h', T.any, null)
    .named('weight', T.any, null)
    .returns(T.any)
    .external()
  const h5_0 = external('h5_0')
  const h7_0 = external('h7_0')
  const h3_5 = external('h3_5')
  const eskdSet = define('eskd-set')
    .named('code', T.content, [])
    .named('copier', T.any, null)
    .named('format', T.any, null)
    .named('inv-orig', T.content, [])
    .named('inv-repl', T.content, [])
    .named('lit', T.content, [])
    .named('mass', T.content, [])
    .named('material', T.content, [])
    .named('name', T.content, [])
    .named('scale', T.content, [])
    .named('sig-date-orig', T.content, [])
    .returns(T.any)
    .external()
  const pageFirstForm2 = external('page-first-form2')
  const frameLeft7r = external('frame-left-7r')
  const eskdPage = external('eskd-page')
  const frameForm1 = external('frame-form-1')
  const frameLeft3r = external('frame-left-3r')
  const eskdDocument_with = define('with')
    .named('code', T.content, [])
    .named('copier', T.any, null)
    .named('format', T.any, null)
    .named('inv-orig', T.content, [])
    .named('lit', T.content, [])
    .named('members', T.any, null)
    .named('name', T.content, [])
    .named('org', T.content, [])
    .named('orientation', T.any, null)
    .named('paper', T.any, null)
    .named('preset-lines', T.any, null)
    .named('prim-apply', T.content, [])
    .named('ref-num', T.content, [])
    .named('sig-date-orig', T.content, [])
    .returns(T.any)
    .external(eskdDocument)
  const pageFirstForm2_with = define('with')
    .named('left', T.any, null)
    .named('toc', T.any, null)
    .returns(T.any)
    .external(pageFirstForm2)
  const eskdPage_with = define('with')
    .named('bottom', T.any, null)
    .named('frame', T.any, null)
    .named('left', T.any, null)
    .returns(T.any)
    .external(eskdPage)
  return doc(
    importPackage('@preview/eskd-drafting:0.1.0', [
      eskdDocument,
      pageTitle,
      gostText,
      h5_0,
      h7_0,
      h3_5,
      eskdSet,
      pageFirstForm2,
      frameLeft7r,
      eskdPage,
      frameForm1,
      frameLeft3r,
    ]),
    show(
      eskdDocument_with({
        paper: 'a4',
        orientation: 'portrait',
        presetLines: 'industry',
        members: [
          ['Разраб.', 'Алексеев А.А.', '12.05.26'],
          ['Пров.', 'Борисов Б.Б.', '15.05.26'],
          ['Т.контр.', 'Васильев В.В.', '18.05.26'],
          ['Н.контр.', 'Григорьев Г.Г.', '19.05.26'],
          ['Утв.', 'Дмитриев Д.Д.', '20.05.26'],
        ],
        code: inline`АБВГ.401100.001ПЗ`,
        name: inline`Регламент заваривания чая${linebreak()} Пояснительная записка`,
        org: inline`Исследовательский центр${linebreak()} нейтральных технологий`,
        lit: inline`У`,
        invOrig: inline`99101`,
        sigDateOrig: inline`12.05.26`,
        refNum: inline`РЕГ.2026`,
        primApply: inline`АБВГ.401100.000`,
        copier: null,
        format: null,
      }),
    ),
    show(pageTitle),
    inline(
      align(
        center,
        inline(
          space,
          v(mm(15)),
          space,
          gostText({ h: h5_0 }, inline`ОБЪЕДИНЕНИЕ ИССЛЕДОВАТЕЛЕЙ ОБЫДЕННЫХ ЯВЛЕНИЙ`),
          linebreak(),
          space,
          gostText({ h: h5_0 }, inline`ОТДЕЛ ТЕРМОДИНАМИКИ И БЫТОВЫХ ПРОЦЕССОВ`),
          linebreak(),
          space,
          v(mm(35)),
          space,
          gostText({ h: h7_0, weight: 'bold' }, inline`ПОЯСНИТЕЛЬНАЯ ЗАПИСКА`),
          linebreak(),
          space,
          v(mm(5)),
          space,
          gostText({ h: h5_0 }, inline`к техническому проекту по теме:`),
          linebreak(),
          space,
          v(mm(5)),
          space,
          gostText(
            { h: h5_0, weight: 'bold' },
            inline`${space}«Методика приготовления крупнолистового чая${linebreak()} способом статического настаивания»${space}`,
          ),
          linebreak(),
          space,
          v(mm(40)),
          space,
          gostText({ h: h3_5 }, inline`АБВГ.401100.001ПЗ`),
          space,
        ),
      ),
    ),
    inline(align(add(bottom, center), inline(space, gostText({ h: h3_5 }, inline`Москва, 2026`), space))),
    inline(eskdSet({ copier: auto, format: auto })),
    show(
      pageFirstForm2_with({
        left: frameLeft7r,
        toc: { num: inline`№`, name: inline`Наименование`, code: inline`Обозначение`, note: inline`Примечание` },
      }),
    ),
    inline(align(center, inline(space, gostText({ h: h5_0, weight: 'bold' }, inline`СОДЕРЖАНИЕ`), space))),
    inline(outline({ title: null })),
    show(pageFirstForm2),
    m.lines(
      m.heading(1, '1. Введение и назначение документа'),
      'Настоящая пояснительная записка определяет базовые физико-химические параметры и алгоритм заваривания черного крупнолистового байхового чая с целью достижения сбалансированной концентрации экстрактивных веществ и воспроизводимости органолептических характеристик.',
    ),
    'Применение стандартизированного температурно-временного профиля позволяет снизить вариативность вкусовых параметров готового напитка при серийном изготовлении в лабораторных и бытовых условиях.',
    m.lines(
      m.heading(1, '2. Параметры исходных компонентов'),
      m.heading(2, '2.1. Требования к водной основе'),
      'Для обеспечения корректной диффузии танинов и катехинов используется питьевая вода со следующими характеристиками:',
      m.list(
        m.item(['общая минерализация (сухой остаток): не более', space, unsafeRaw.math`150 "мг/л"`, ';']),
        m.item([
          'водородный показатель (',
          unsafeRaw.math`"pH"`,
          '): в диапазоне',
          space,
          unsafeRaw.math`6.5 ... 7.5`,
          ';',
        ]),
        m.item(['общая жесткость: не более', space, unsafeRaw.math`1.5 "мг-экв/л"`, '.']),
      ),
    ),
    inline`Нагрев теплоносителя осуществляется в закрытом сосуде до достижения температуры фазового перехода
(${unsafeRaw.math`95 ... 98 "°C"`}) с последующей выдержкой в течение 30 секунд для деаэрации.`,
    m.lines(
      m.heading(2, '2.2. Требования к чайному сырью'),
      inline`Чайное сырье должно удовлетворять требованиям ГОСТ 32573-2013 (чай черный, категория листового
сырья — ${strong(inline`Orange Pekoe`)}). Влажность сухого листа перед закладкой не должна превышать
${unsafeRaw.math`7.5\\%`}. Массовая норма расхода сухого чайного листа составляет ${unsafeRaw.math`2.0 "г"`}
на каждые ${unsafeRaw.math`100 "мл"`} номинального объема заварочной емкости.`,
    ),
    inline(
      table(
        { columns: [mm(30), mm(45), mm(45), mm(45)], align: [center, center, center, center] },
        inline`Параметр`,
        inline`Номинал`,
        inline`Допуск`,
        inline`Ед. изм.`,
        inline`Масса листа`,
        inline`2.0`,
        inline`± 0.1`,
        inline`г/100 мл`,
        inline`Температура`,
        inline`95.0`,
        inline`± 1.5`,
        inline`°C`,
        inline`Время покоя`,
        inline`240`,
        inline`± 5`,
        inline`с`,
        inline`Давление`,
        inline`101.3`,
        inline`± 2.0`,
        inline`кПа`,
      ),
    ),
    m.lines(
      m.heading(1, '3. Алгоритм термостатирования и настаивания'),
      m.heading(2, '3.1. Предварительный прогрев заварочной емкости'),
      inline`Заварочный сосуд (чайник из фарфора или боросиликатного стекла) предварительно ополаскивается
нагретой до ${unsafeRaw.math`90 "°C"`} водой в объеме не менее ${unsafeRaw.math`30\\%`} от вместимости
сосуда. Время термической экспозиции составляет ${unsafeRaw.math`15 "с"`}, после чего технологическая
вода сливается. Это обеспечивает минимизацию стартового градиента температур.`,
    ),
    m.lines(
      m.heading(2, '3.2. Фаза гидродинамического покоя'),
      inline`Засыпка сухого листа производится непосредственно после удаления технологической воды. Заливка
основного объема воды (${unsafeRaw.math`95 "°C"`}) выполняется ламинарной струей с высоты не
более ${unsafeRaw.math`50 "мм"`} от среза горловины для предотвращения избыточного аэрирования
и механического разрушения листовых пластин.`,
    ),
    inline`Сосуд немедленно герметизируется крышкой со встроенным пароотводным каналом. Продолжительность
фазы покоя составляет ${unsafeRaw.math`240 "с"`}. Механическое перемешивание суспензии в течение
первых ${unsafeRaw.math`180 "с"`} строго запрещено во избежание ускоренной коагуляции эфирных
масел.`,
    m.lines(
      m.heading(2, '3.3. Фильтрация и отделение экстракта'),
      inline`По истечении установленного времени суспензия пропускается через сетчатый фильтрующий элемент
с размером ячейки не более ${unsafeRaw.math`0.5 "мм"`}. Задержка отфильтрованного объема во
влажном осадке не должна превышать ${unsafeRaw.math`45 "с"`}.`,
    ),
    m.lines(
      m.heading(1, '4. Математическая модель экстракции'),
      inline`Концентрация водорастворимых сухих веществ ${unsafeRaw.math`C(t)`} во времени описывается уравнением
нестационарной конвективно-диффузионной кинетики:`,
    ),
    inline(unsafeRaw.math.block`C(t) = C_max (1 - e^(-k t))`),
    m.lines(
      'где:',
      m.list(
        m.item([
          unsafeRaw.math`C_max`,
          space,
          '— предельная растворимость экстрактивных веществ при температуре',
          space,
          unsafeRaw.math`T = 95 "°C"`,
          ';',
        ]),
        m.item([
          unsafeRaw.math`k`,
          space,
          '— эффективный коэффициент диффузии (',
          unsafeRaw.math`k approx 0.0125 "с"^(-1)`,
          ');',
        ]),
        m.item([unsafeRaw.math`t`, space, '— продолжительность фазы экстракции в секундах.']),
      ),
    ),
    inline`При достижении времени ${unsafeRaw.math`t = 240 "с"`} достигается степень насыщения ${unsafeRaw.math`C/C_max >= 0.95`},
что соответствует оптимуму органолептической плотности.`,
    m.lines(
      m.heading(1, '5. Контроль качества и безопасности'),
      inline`Готовый напиток должен обладать прозрачностью без опалесценции, выраженным янтарно-рубиновым
оттенком и содержанием танинов в диапазоне ${unsafeRaw.math`8 ... 12 "мг/мл"`}. Отработанный
чайный лист утилизируется в соответствии с санитарно-гигиеническими нормативами.`,
    ),
    m.lines(
      show(eskdPage_with({ bottom: frameForm1, left: frameLeft3r, frame: true })),
      inline(
        eskdSet({
          code: inline`АБВГ.715141.001`,
          name: inline`Вал ступенчатый`,
          material: inline`Сталь 45 ГОСТ 1050-2013`,
          lit: inline`У`,
          mass: inline`2,45`,
          scale: inline`1:1`,
          invOrig: inline`84120`,
          sigDateOrig: inline`12.05.26`,
          invRepl: inline`ВЗ-4512`,
        }),
      ),
    ),
    inline(
      align(
        add(center, horizon),
        inline(
          space,
          rect(
            { width: mm(140), height: mm(160), stroke: mm(0.5) },
            inline(
              space,
              align(
                add(center, horizon),
                inline(
                  space,
                  gostText({ h: h7_0, weight: 'bold' }, inline`ЗОНА ГРАФИЧЕСКОГО ПОЛЯ ЧЕРТЕЖА`),
                  linebreak(),
                  space,
                  v(mm(6)),
                  space,
                  gostText({ h: h5_0 }, inline`(Формат А4 вертикальный, 210 ${sym.times} 297${sym.space.nobreak}мм)`),
                  linebreak(),
                  space,
                  v(mm(4)),
                  space,
                  gostText(
                    { h: h3_5 },
                    inline`Штамп Форма 1 (185 ${sym.times} 55${sym.space.nobreak}мм), боковой штамп 3r (85 ${sym.times}
12${sym.space.nobreak}мм), Графа 26`,
                  ),
                  space,
                ),
              ),
              space,
            ),
          ),
          space,
        ),
      ),
    ),
  )
}
