// Converted from test/universe/corpus/athena-tu-darmstadt-exercise.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  auto,
  blue,
  datetime,
  define,
  deg,
  doc,
  em,
  enum_,
  external,
  heading,
  image,
  importPackage,
  inline,
  label,
  labelled,
  linebreak,
  link,
  list,
  m,
  pagebreak,
  path,
  pt,
  raw,
  ref,
  set,
  show,
  space,
  sym,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const difficultyFormat = external('difficulty-format')
  const infoLayout = external('info-layout')
  const pointFormat = external('point-format')
  const subtask = external('subtask')
  const task = external('task')
  const taskPointsHeader = define('task-points-header')
    .named('details-seperator', T.any, null)
    .named('difficulty', T.any, null)
    .named('difficulty-function', T.any, null)
    .named('hspace', T.any, null)
    .named('max-difficulty', T.any, null)
    .named('points', T.any, null)
    .named('points-function', T.any, null)
    .named('star-fill', T.any, null)
    .returns(T.any)
    .external()
  const textRoboto = external('text-roboto')
  const tudaDifficultyStars = external('tuda-difficulty-stars')
  const tudaGrayInfo = define('tuda-gray-info')
    .pos('arg1', T.content)
    .named('title', T.any, null)
    .returns(T.any)
    .external()
  const tudaSection = external('tuda-section')
  const tudaSubsection = define('tuda-subsection').pos('arg1', T.any).returns(T.any).external()
  const tudaexercise = external('tudaexercise')
  const tudaexercise_with = define('with')
    .named('design', T.any, null)
    .named('headline', T.any, null)
    .named('info', T.any, null)
    .named('info-layout', T.any, null)
    .named('language', T.any, null)
    .named('logo', T.any, null)
    .named('task-prefix', T.any, null)
    .named('task-prefix-subtasks', T.any, null)
    .returns(T.any)
    .external(tudaexercise)
  const infoLayout_exercise = define('exercise').returns(T.any).external(infoLayout)
  const pointFormat_with = define('with')
    .named('points-name-plural', T.any, null)
    .named('points-name-single', T.any, null)
    .returns(T.any)
    .external(pointFormat)
  const tudaDifficultyStars_with = define('with')
    .named('baseline', T.any, null)
    .named('difficulty-name', T.any, null)
    .named('edges', T.any, null)
    .named('rotation', T.any, null)
    .returns(T.any)
    .external(tudaDifficultyStars)
  return doc(
    importPackage('@preview/athena-tu-darmstadt-exercise:0.3.0', [
      difficultyFormat,
      infoLayout,
      pointFormat,
      subtask,
      task,
      taskPointsHeader,
      textRoboto,
      tudaDifficultyStars,
      tudaGrayInfo,
      tudaSection,
      tudaSubsection,
      tudaexercise,
    ]),
    show(
      tudaexercise_with({
        language: 'en',
        info: {
          title: 'Usage of TUDaExercise',
          header_title: 'TUDaExercise',
          subtitle: 'A small guide.',
          author: [['Andreas', '129219'], 'Dennis'],
          term: auto,
          date: datetime.today(),
          sheet: 5,
          group: 1,
          tutor: 'Dr. John Smith',
          lecturer: 'Prof. Dr. Jane Doe',
        },
        infoLayout: infoLayout_exercise(),
        headline: ['title', 'name', 'id'],
        logo: image(path('logos/tuda_logo_replace.svg')),
        design: unsafeRaw.code<any>`(
    accentcolor: "0b",
    colorback: true,
    darkmode: "darkmode" in sys.inputs,
  )`,
        taskPrefix: auto,
        taskPrefixSubtasks: false,
      }),
    ),
    m.lines(
      set(enum_, { spacing: em(1), numbering: '1.', indent: pt(5) }),
      set(list, { marker: inline`--`, indent: pt(5), spacing: em(1) }),
    ),
    m.heading(1, 'Most basic usage'),
    inline`The easiest way is by using ${raw('typst init')} like on this templates universe page. But here
is everything broken down:`,
    m.lines(
      m.heading(2, 'Add to typst'),
      m.enum(
        { tight: false },
        m.item(['Import the package:', space, raw('#import "@preview/athena-tu-darmstadt-exercise:0.3.0": *')]),
        m.item(['Apply the template using', space, raw('#show: tudaexercise.with(<options>)')]),
      ),
    ),
    m.lines(
      m.heading(2, 'Fonts'),
      'The template requires the following fonts: Roboto and XCharter. Typst right now does not allow fonts to be installed as packages. So you will either need to install them locally or configure Typst and co. to use the fonts.',
    ),
    inline(
      tudaGrayInfo(
        { title: 'For more info:' },
        inline(
          space,
          link('https://github.com/tuda-typst/tuda-typst-templates?tab=readme-ov-file#logo-and-font-setup'),
          space,
        ),
      ),
    ),
    m.lines(
      m.heading(2, 'Logo'),
      inline`Similarly as the logo is protected and Typst does not have a folder for global resources you
will need to setup the logo manually. You will need to download the logo and convert it into
a svg. Then pass the ${raw('logo: image(<path to logo>)')} option to this package. The height
of the logo will automatically be set to 22mm.`,
    ),
    inline`Additionally, a partner or institution logo can be passed using the ${raw('sublogo')} parameter.`,
    m.lines(
      m.heading(1, 'Configuring the title'),
      inline`All options of the title can be controlled using the ${raw('info')} dictionary:`,
    ),
    inline`${raw({ block: true }, 'info: (\n  title: "The big title",\n  header_title: "The title in the page header",\n  subtitle: "The smaller title below",\n  author: "The author",\n  // author: ("Author 1", "Author 2"), // can also be an array of authors\n  // author: (("Author 1", "123456"), "Author 2"), // or the matriculation number can be provided\n\n  term: "The current term aka. semester",\n  // term: auto, // can also be inferred automatically\n  date: "The current date",\n  // date: datetime.today(), // can also be a datetime object\n  // _date: datetime.today(), // can start with an underscore to control the date for automatic term generation but not show date in the info\n  sheet: 0, // The current sheetnumber\n\n  // submission extras:\n  group: "05", // the lecture group you are in\n  tutor: "John", // the tutor of your group\n  lecturer: "Karpfen", // the lecturer of the module that this assignment is for\n)')}
The options can also be left empty. Then their corresponding item will not appear.`,
    inline`Additionally there is the ${raw('info-layout')} field which controls the subline of the title's
look. By default this is set to the exercise version. There also is a submission version which
displays the submission's additional information fields. Or, if both don't fit your needs, you
can also pass raw content to the field and control the subline to your will. ${linebreak()}
For more info see the exported ${raw('info-layout')} module of this template.`,
    inline`If you do not want to have a title card you can also set ${raw('show-title')} to ${raw('false')}.`,
    m.heading(1, 'Design'),
    inline`You can control the design using the following options of the ${raw('design')} dictionary:`,
    inline(
      raw(
        { block: true },
        'design: (\n  accentcolor: "0b", // either be color code of the TUDa coloring scheme or a typst color object\n  colorback: true, // whether the title should have the accent color as background,\n  darkmode: false, // If you like a dark background\n)',
      ),
    ),
    inline`Furthermore using the ${raw('tud_design')} state you get a dictionary with the following colors
used by the template: ${raw(' text_color, background_color, accent_color, text_on_accent_color')}.`,
    inline`Note that changing any of the state's values will have no effect on the template. See the state
as read-only.`,
    inline`If you do not like lines around subtasks you can pass ${raw('subtask: "plain"')} to not show
the lines.`,
    m.heading(1, 'More options'),
    m.lines(
      'The leftover options are:',
      m.list(
        m.item([
          raw('language'),
          space,
          'to control the language of certain keywords (can either be',
          space,
          raw('"de"'),
          space,
          'or',
          space,
          raw('"en"'),
          ')',
        ]),
        m.item([raw('margins'), space, 'which is a dictionary controlling the page margins']),
        m.item([raw('paper'), space, 'which currently only supports', space, raw('"a4"')]),
        m.item(
          m.lines(
            inline`${raw('headline')} control the headline. The following values are supported:`,
            m.list(
              m.item([
                'An array (or single string) with keys',
                space,
                raw('"title"'),
                ',',
                space,
                raw('"name"'),
                space,
                'and',
                space,
                raw('"id"'),
                space,
                'for the default headline style. Further,',
                space,
                raw('"fl"'),
                space,
                'can be provided to control the order of first and last name in the header.',
              ]),
              m.item(['Raw', space, raw('content'), space, 'that will be displayed']),
              m.item([raw('none'), space, 'or', space, raw('()'), space, 'for no headline']),
            ),
          ),
        ),
      ),
    ),
    m.heading(1, 'Creating tasks'),
    inline`Creating tasks is fairly easy. You simply write ${raw({ block: true }, '= Title of your task')}
Similarly subtasks are created using ${raw({ block: true }, '== Title of your subtask')}`,
    inline`If you dislike the default task format, you can slightly customize it using the ${raw('task-prefix')},
${raw('task-separator')} and ${raw('task-prefix-subtasks')} fields of the template.`,
    m.lines(
      m.heading(1, 'Tasks with points and difficulty', ' ', taskPointsHeader({ points: 5, difficulty: 2.65 })),
      m.heading(2, 'Task point header', ' ', taskPointsHeader({ points: 2 })),
      inline`If you want to add points and difficulty to your tasks, you can use the ${raw('task-points-header')}
function. This will add a header to the task with the points and difficulty. You can pass the
following parameters:`,
      m.list(
        m.item([raw('points'), space, '(int or float): The amount of points of the task']),
        m.item([
          raw('difficulty'),
          space,
          '(int or float): The difficulty rating the task, must be a number between 0 and',
          space,
          raw('max-difficulty'),
        ]),
        m.item([raw('max-difficulty'), space, '(int): The maximum difficulty, default is 5']),
        m.item([
          raw('hspace'),
          space,
          '(length): The horizontal space between the task title and the points, default is 1em',
        ]),
        m.item([
          raw('details-seperator'),
          space,
          '(string): The string that separates the task title from the points header, default is',
          space,
          raw('", "'),
        ]),
        m.item([raw('star-fill'), space, '(color): The fill color of the stars, default is the currentaccent color']),
        m.item([
          raw('points-function'),
          space,
          '(function): The function to format the points, default is',
          space,
          raw('point-format'),
        ]),
        m.item([
          raw('difficulty-function'),
          space,
          '(function): The function to format the difficulty, default is',
          space,
          raw('tuda-difficulty-stars'),
          ', but you can also pass',
          space,
          raw('difficulty-format'),
          space,
          'to use a more simple text representation of the difficulty (or even a custom function). See',
          space,
          ref(label('task-and-subtask-commands')),
          space,
          'to see',
          space,
          raw('difficulty-format'),
          space,
          'in action.',
        ]),
      ),
    ),
    inline`For example you can writethe following command to recreate the header of this task: ${raw({ block: true, lang: 'typst' }, '= Tasks with points and difficulty #task-points-header(points: 5, difficulty: 2.65)\n== Task point header #task-points-header(points: 2)')}`,
    m.lines(
      inline(
        labelled(
          heading(
            { depth: 2 },
            inline(
              'Task and subtask commands',
              ' ',
              taskPointsHeader({ points: 1, difficulty: 1, difficultyFunction: difficultyFormat }),
            ),
          ),
          label('task-and-subtask-commands'),
        ),
      ),
      inline`Instead of the normal section and subsection commands you can also use the ${raw('task')} and
${raw('subtask')} functions to create tasks and subtasks with points and difficulty: ${raw({ block: true, lang: 'typst' }, '#task(points: 5, difficulty: 3.69)[Tasks with *points* and _difficulty_]\n// you can also just pass the points and omit the title if desired\n#subtask(points: 2)')}
They take the same parameters as the ${raw('task-points-header')} function, but additionally
you can pass a ${raw('title')} parameter to set the title of the task or subtask.`,
      m.heading(
        2,
        'Advanced task header styling (',
        taskPointsHeader({
          points: 2,
          difficulty: 1.5,
          maxDifficulty: 3,
          detailsSeperator: ' | ',
          hspace: null,
          starFill: blue,
          pointsFunction: pointFormat_with({ pointsNameSingle: 'Bonus point', pointsNamePlural: 'Bonus points' }),
          difficultyFunction: tudaDifficultyStars_with({
            difficultyName: 'Effort',
            edges: 6,
            rotation: deg(45),
            baseline: pt(2),
          }),
        }),
        ')',
      ),
      inline`As mentioned above, you can overwrite the point- and difficulty functions of the ${raw('task-points-header')}
function. This allows you to customize the header even further. For example, you can change
the number of edges of the stars, the rotation of the stars, or the fill color of the stars:
${raw({ block: true, lang: 'typst' }, '== Advanced task header styling (#task-points-header(points: 2, difficulty: 1.5, max-difficulty: 3, details-seperator: " | ", hspace: none, star-fill: blue, points-function: point-format.with(points-name-single: "Bonus point", points-name-plural: "Bonus points", baseline: 2pt), difficulty-function: tuda-difficulty-stars.with(difficulty-name: "Effort", edges: 6, rotation: 45deg)))')}
${tudaGrayInfo(
  { title: 'Note:' },
  inline`${space}Passing all these parameters everytime is a bit cumbersome, but since typst ${link('https://github.com/typst/typst/issues/147', inline`does not yet support user-defined elements`)},
this is the only way to archieve this without relying on states. You can create your own function
to simplify this if you want to: ${raw({ block: true, lang: 'typst' }, '#let custom-tph = task-points-header.with(points-function: point-format.with(points-name-single: "Bonus point", points-name-plural: "Bonus points"), difficulty-function: difficulty-format)')}${space}`,
)}`,
    ),
    inline(pagebreak()),
    inline(tudaSubsection('Sections')),
    inline`If you want to create an unnumbered section you can use the ${raw('tuda-section')} or ${raw('tuda-subsection')}
functions accordingly. Simply pass the section title as a string. ${raw({ block: true }, '#tuda-subsection("Sections")')}`,
    m.heading(1, 'Currently not supported features from the LaTeX template and the why'),
    m.enum(
      { tight: false },
      m.item([
        'Points',
        space,
        sym.dash.en,
        space,
        'This would require a state and make declaring tasks far more complex than just using headings. Though technically the points can also be written manually into the task title.',
      ]),
      m.item([
        'Solutions',
        space,
        sym.dash.en,
        space,
        'Enabling whether solutions should be shown or not from within the template would again require a state and is thus rather costly. However you can implement them rather easily as from outside the template a boolean will already do.',
      ]),
    ),
    m.heading(1, 'Migrations from v0.2.0 to v0.3.0'),
    m.list(
      m.item([
        'The',
        space,
        raw('title-sub'),
        space,
        'parameter was renamed to',
        space,
        raw('info-layout'),
        '. Further, it now generates no subline, if set to',
        space,
        raw('none'),
        ', or no relevant info keys are passed.',
      ]),
      m.item([
        'A',
        space,
        raw('task-prefix'),
        space,
        'of',
        space,
        raw('none'),
        space,
        'now removes the task prefix. Instead,',
        space,
        raw('auto'),
        space,
        'should be passed, to have the default task prefix.',
      ]),
    ),
  )
}
