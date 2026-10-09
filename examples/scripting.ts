/** Set, show, let, context, labels, references, imports, user functions, the escape hatch and math. */
import {
  blue,
  block,
  context,
  define,
  doc,
  emph,
  heading,
  here,
  importFile,
  inline,
  label,
  labelled,
  let_,
  m,
  metadata,
  pt,
  ref,
  rgb,
  set,
  show,
  strong,
  T,
  text,
  unsafeRaw,
  versionGuard,
  where,
} from '../src/index.ts'

/** Declared here, defined in templates.typ. */
export const panel = define('panel')
  .pos('caption', T.content)
  .pos('body', T.content)
  .named('tint', T.color, rgb('#808080'))
  .external()

export const note = define('note')
  .pos('author', T.str)
  .rest('lines', T.content)
  .body(({ author, lines }) =>
    block({ inset: pt(4) }, [
      inline(emph(author), ': '),
      unsafeRaw.code({ lines })<'content'>`lines.pos().join(linebreak())`,
    ]),
  )

export function scripting(user: { name: string; comment: string }) {
  const [greetingDecl, greeting] = let_('greeting', `Hello, ${user.name}`)
  return doc(
    versionGuard(),
    importFile('../templates.typ', [panel]),
    set(heading, { numbering: '1.' }),
    show(where(heading, { level: 2 }), (it) => block({ below: pt(6) }, text({ fill: blue }, it.body))),
    show(strong, set(text, { fill: rgb('#aa0000') })),
    greetingDecl,
    note.decl,
    labelled(heading({ level: 1 }, 'Introduction'), label('intro')),
    inline(greeting, '. See ', ref(label('intro')), '.'),
    m.heading(2, 'Comment by ', user.name),
    panel(user.name, user.comment),
    panel(
      { tint: blue },
      'Notice',
      inline(
        'Page ',
        context((ctx) => metadata(here(ctx))),
        ' with ',
        strong('emphasis'),
        '.',
      ),
    ),
    note(user.name, 'first line', user.comment),
    m.enum('one', m.item('two', m.list('a', m.item('b', m.list('b.1')))), 'three'),
    inline('The area is ', unsafeRaw.math({ r: 2 })`pi #r^2`, '.'),
    unsafeRaw.markup({ name: user.name })`Reviewed by #name.`,
  )
}

export const hostileUser = { name: 'Eve #panic("x") @intro', comment: '] #read("/etc/passwd") [ $x$ //' }
