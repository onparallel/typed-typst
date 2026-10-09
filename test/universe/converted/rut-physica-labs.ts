// Converted from test/universe/corpus/rut-physica-labs.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  box,
  center,
  cm,
  define,
  doc,
  document,
  external,
  figure,
  fr,
  importPackage,
  inline,
  label,
  labelled,
  m,
  math,
  raw,
  ref,
  set,
  show,
  space,
  strong,
  sym,
  table,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const labreport = external('labreport')
  const noindent = external('noindent')
  const appendixes = external('appendixes')
  const labreport_with = define('with')
    .named('abstract', T.content, [])
    .named('affilation', T.any, null)
    .named('authors', T.any, null)
    .named('designation', T.any, null)
    .named('lector', T.any, null)
    .named('teacher', T.any, null)
    .returns(T.any)
    .external(labreport)
  const appendixes_with = define('with').returns(T.any).external(appendixes)
  return doc(
    importPackage('@preview/rut-physica-labs:0.1.0', [labreport, noindent, appendixes]),
    set(document, { title: 'Изучение законов механики' }),
    show(
      labreport_with({
        designation: 'Л-1',
        authors: [{ name: 'П.П. Павлов' }, { name: 'М.М. Максимова' }],
        affilation: { group: 'РТ-101', subgroup: '1', crew: '1' },
        teacher: 'И.И. Иванов',
        lector: 'П.П. Петров',
        abstract: inline`${space}В данной работе изучаются основные законы механики на примере движения тела по наклонной
плоскости. Проведены измерения времени прохождения различных расстояний, рассчитаны ускорение
и скорость движения. Полученные результаты сравнены с теоретическими предсказаниями. Установлено
хорошее соответствие экспериментальных данных теории в пределах погрешности измерений: среднее
значение${sym.space.nobreak}...; абсолютная погрешность${sym.space.nobreak}...; относительная
погрешность${sym.space.nobreak}...%.${space}`,
      }),
    ),
    inline`${strong(inline`Целью работы`)} является экспериментальное изучение законов механики и проверка
справедливости второго закона Ньютона.`,
    m.lines(
      inline(strong(inline`Задачи работы.`)),
      m.enum(
        m.item(['Измерить время прохождения телом различных расстояний по наклонной плоскости.']),
        m.item(['Рассчитать ускорение движения тела.']),
        m.item(['Определить скорость тела в различных точках траектории.']),
        m.item(['Сравнить полученные результаты с теоретическими предсказаниями.']),
        m.item(['Оценить погрешности измерений.']),
      ),
    ),
    m.heading(1, 'Теоретическая часть'),
    m.heading(2, 'Описание эксперимента'),
    'Наблюдая за движением тела по наклонной плоскости, можно экспериментально подтвердить справедливость 2-го закона Ньютона следующим способом.',
    inline`...`,
    m.heading(2, 'Описание модели'),
    'Движение тела по наклонной плоскости описывается вторым законом Ньютона:',
    inline`${unsafeRaw.math.block`F = m a,`} ${noindent} где ${unsafeRaw.math`F`}${sym.space.nobreak}---${sym.space.nobreak}результирующая
сила; ${unsafeRaw.math`m`}${sym.space.nobreak}---${sym.space.nobreak}масса тела; ${unsafeRaw.math`a`}${sym.space.nobreak}---${sym.space.nobreak}ускорение.`,
    'Для тела, движущегося по наклонной плоскости под действием силы тяжести, результирующая сила равна:',
    inline`${unsafeRaw.math.block`F = m g sin alpha - f,`} ${noindent} где ${unsafeRaw.math`alpha`}${sym.space.nobreak}---${sym.space.nobreak}угол
наклона плоскости; ${unsafeRaw.math`f`}${sym.space.nobreak}---${sym.space.nobreak}сила трения.`,
    'При пренебрежении трением ускорение тела равно:',
    inline(
      labelled(
        [math.equation({ block: true, numbering: '(1)' }, unsafeRaw.math.block`a = g sin alpha.`), space],
        label('eq-accel'),
      ),
    ),
    'Путь, пройденный телом при равноускоренном движении из состояния покоя:',
    inline(unsafeRaw.math.block`s = (a t^2) / 2.`),
    inline`Скорость тела в момент времени ${unsafeRaw.math`t`}:`,
    inline(unsafeRaw.math.block`v = a t.`),
    m.heading(2, 'Анализ модели'),
    inline`Модель предсказывает, что ускорение тела при движении по наклонной плоскости пропорционально
углу наклона${sym.space.nobreak}${unsafeRaw.math`alpha`} (см. уравнение${sym.space.nobreak}(${ref(label('eq-accel'))})),
конкретнее, ${unsafeRaw.math`sin alpha`}.`,
    m.heading(1, 'Практическая часть'),
    m.heading(2, 'Описание установки'),
    inline`Установка состоит из наклонной плоскости, по которой скатывается металлический шарик. Угол наклона
плоскости составляет ${box(unsafeRaw.math`alpha = 30 degree`)}. На плоскости отмечены точки
на расстояниях 20, 40, 60, 80 и 100${sym.space.nobreak}см от начальной позиции.`,
    m.heading(2, 'Методика измерений'),
    inline`Шарик отпускается из начальной позиции без начальной скорости. С помощью секундомера измеряется
время прохождения шариком каждого отмеченного расстояния. Каждое измерение повторяется 5${sym.space.nobreak}раз
для повышения точности.`,
    m.heading(2, 'Результаты измерений'),
    inline`В таблице${sym.space.nobreak}${ref(label('tab-results'))} приведены результаты измерений времени
прохождения различных расстояний.`,
    inline(
      labelled(
        [
          figure(
            { caption: inline`Результаты измерений времени прохождения расстояний` },
            table(
              { align: center, columns: [fr(1), fr(1), fr(1), fr(1), fr(1), fr(1)] },
              table.header(
                inline`${unsafeRaw.math`s`}, см`,
                inline`${unsafeRaw.math`t_1`}, с`,
                inline`${unsafeRaw.math`t_2`}, с`,
                inline`${unsafeRaw.math`t_3`}, с`,
                inline`${unsafeRaw.math`t_4`}, с`,
                inline`${unsafeRaw.math`chevron.l t chevron.r`}, с`,
              ),
              inline`20`,
              inline(unsafeRaw.math`0.64`),
              inline(unsafeRaw.math`0.65`),
              inline(unsafeRaw.math`0.63`),
              inline(unsafeRaw.math`0.66`),
              inline(unsafeRaw.math`0.65`),
              inline`40`,
              inline(unsafeRaw.math`0.91`),
              inline(unsafeRaw.math`0.92`),
              inline(unsafeRaw.math`0.90`),
              inline(unsafeRaw.math`0.93`),
              inline(unsafeRaw.math`0.92`),
              inline`60`,
              inline(unsafeRaw.math`1.11`),
              inline(unsafeRaw.math`1.12`),
              inline(unsafeRaw.math`1.10`),
              inline(unsafeRaw.math`1.13`),
              inline(unsafeRaw.math`1.12`),
              inline`80`,
              inline(unsafeRaw.math`1.28`),
              inline(unsafeRaw.math`1.29`),
              inline(unsafeRaw.math`1.27`),
              inline(unsafeRaw.math`1.30`),
              inline(unsafeRaw.math`1.29`),
              inline`100`,
              inline(unsafeRaw.math`1.43`),
              inline(unsafeRaw.math`1.44`),
              inline(unsafeRaw.math`1.42`),
              inline(unsafeRaw.math`1.45`),
              inline(unsafeRaw.math`1.44`),
            ),
          ),
          space,
        ],
        label('tab-results'),
      ),
    ),
    m.heading(2, 'Обработка результатов'),
    'На основе полученных данных рассчитаны ускорение и скорость движения тела.',
    'Ускорение рассчитывается по формуле:',
    inline(unsafeRaw.math.block`a = (2 s) / t^2.`),
    inline`Результаты расчётов приведены в таблице${sym.space.nobreak}${ref(label('tab-calculations'))}.`,
    inline(
      labelled(
        [
          figure(
            { caption: inline`Результаты расчётов ускорения и скорости` },
            table(
              { align: center, columns: [cm(3), fr(1), fr(1)] },
              table.header(
                inline`${unsafeRaw.math`s`}, см`,
                inline`${unsafeRaw.math`a`}, м/${unsafeRaw.math`"с"^2`}`,
                inline`${unsafeRaw.math`v`}, м/с`,
              ),
              inline`20`,
              inline(unsafeRaw.math`4.82`),
              inline(unsafeRaw.math`3.11`),
              inline`40`,
              inline(unsafeRaw.math`4.78`),
              inline(unsafeRaw.math`4.37`),
              inline`60`,
              inline(unsafeRaw.math`4.83`),
              inline(unsafeRaw.math`5.38`),
              inline`80`,
              inline(unsafeRaw.math`4.85`),
              inline(unsafeRaw.math`6.23`),
              inline`100`,
              inline(unsafeRaw.math`4.87`),
              inline(unsafeRaw.math`6.98`),
            ),
          ),
          space,
        ],
        label('tab-calculations'),
      ),
    ),
    'Среднее значение ускорения:',
    inline(unsafeRaw.math.block`chevron.l a chevron.r = 4.83 " м/с"^2.`),
    inline`Теоретическое значение ускорения при ${unsafeRaw.math`alpha = 30 degree`}:`,
    inline(unsafeRaw.math.block`a_"теор" = g sin(30 degree) = 9.81 dot 0.5 = 4.905 " м/с"^2.`),
    'Относительная погрешность:',
    inline(unsafeRaw.math.block`delta =
(abs(a_"теор" - chevron.l a chevron.r)) / a_"теор" dot 100% =
1.6% approx 2%.`),
    'Абсолютная погрешность:',
    inline(unsafeRaw.math.block`Delta a = delta dot chevron.l a chevron.r = 2% dot 4.83 = 0.10 " м/c"^2.`),
    m.heading(2, 'Анализ результатов'),
    inline`Полученное значение ускорения хорошо согласуется с теоретическим предсказанием. Относительная
погрешность составляет не более${sym.space.nobreak}2%, что находится в пределах допустимой погрешности
для данного типа измерений.`,
    m.lines(
      'Небольшие отклонения отдельных значений ускорения от среднего можно объяснить:',
      m.list(
        m.item(['погрешностями при измерении времени (реакция экспериментатора);']),
        m.item(['неточностью разметки расстояний на плоскости;']),
        m.item(['влиянием трения и сопротивления воздуха;']),
        m.item(['неточностью установки угла наклона плоскости.']),
      ),
    ),
    m.heading(1, 'Заключение'),
    'В результате проведённой работы экспериментально подтверждена справедливость второго закона Ньютона для движения тела по наклонной плоскости. Полученные значения ускорения и скорости хорошо согласуются с теоретическими предсказаниями.',
    'Работа показала, что при правильной организации эксперимента и тщательном проведении измерений можно получить результаты с погрешностью менее 2%, что свидетельствует о высокой точности использованной методики.',
    inline(strong(inline`Результат эксперимента:`)),
    inline(unsafeRaw.math.block`a = chevron.l a chevron.r plus.minus Delta a =
4.83 plus.minus 0.10 " м/c"^2 quad "при " delta = 2%.`),
    show(appendixes_with()),
    m.heading(1, 'Программа обработки данных'),
    'Ниже приведена программа на Python для обработки экспериментальных данных:',
    inline(
      raw(
        { block: true, lang: 'python' },
        'import numpy as np\n\n# Экспериментальные данные\ndistances = np.array([20, 40, 60, 80, 100]) / 100  # в метрах\ntimes = np.array([0.645, 0.915, 1.115, 1.285, 1.435])  # в секундах\n\n# Расчёт ускорения\naccelerations = 2 * distances / (times ** 2)\na_mean = np.mean(accelerations)\n\n# Расчёт скорости\nvelocities = accelerations * times\n\n# Теоретическое ускорение\ng = 9.81\nalpha = np.radians(30)\na_theory = g * np.sin(alpha)\n\n# Погрешность\nerror = abs(a_theory - a_mean) / a_theory * 100\n\nprint(f"Среднее ускорение: {a_mean:.2f} м/с²")\nprint(f"Теоретическое ускорение: {a_theory:.2f} м/с²")\nprint(f"Относительная погрешность: {error:.1f}%")',
      ),
    ),
    m.heading(1, 'Дополнительные материалы'),
    'В этом приложении могут быть размещены дополнительные графики, таблицы и другие материалы, которые не вошли в основной текст отчёта.',
    m.lines(
      'Например, здесь можно привести:',
      m.enum(
        m.item(['Графики зависимости пути от времени.']),
        m.item(['Графики зависимости скорости от времени.']),
        m.item(['Фотографии экспериментальной установки.']),
        m.item(['Расширенные таблицы с промежуточными расчётами.']),
      ),
    ),
  )
}
