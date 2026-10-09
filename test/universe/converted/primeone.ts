// Converted from test/universe/corpus/primeone.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  define,
  doc,
  em,
  external,
  fr,
  grid,
  h,
  importPackage,
  inline,
  m,
  raw,
  rgb,
  show,
  space,
  strong,
  table,
  text,
  v,
} from '../../../src/index.ts'

export default () => {
  const article = external('article')
  const themeLaraGreen = external('theme-lara-green')
  const badge = define('badge').pos('arg1', T.any).named('severity', T.any, null).returns(T.any).external()
  const message = define('message').pos('arg1', T.content).named('severity', T.any, null).returns(T.any).external()
  const messages = define('messages')
    .pos('arg1', T.content)
    .named('severity', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external()
  const card = define('card')
    .pos('arg1', T.content)
    .named('footer', T.any, null)
    .named('subtitle', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external()
  const panel = define('panel').pos('arg1', T.content).named('title', T.any, null).returns(T.any).external()
  const checkbox = define('checkbox')
    .named('checked', T.any, null)
    .named('disabled', T.any, null)
    .named('label', T.any, null)
    .returns(T.any)
    .external()
  const article_with = define('with')
    .named('abstract', T.any, null)
    .named('abstract-title', T.any, null)
    .named('authors', T.any, null)
    .named('date', T.any, null)
    .named('subtitle', T.any, null)
    .named('theme', T.any, null)
    .named('title', T.any, null)
    .named('titlepage', T.any, null)
    .named('toc', T.any, null)
    .named('toc-depth', T.any, null)
    .named('toc-title', T.any, null)
    .returns(T.any)
    .external(article)
  return doc(
    importPackage('@preview/primeone:1.0.0', [
      article,
      themeLaraGreen,
      badge,
      message,
      messages,
      card,
      panel,
      checkbox,
    ]),
    show(
      article_with({
        title: 'PrimeOne Template',
        subtitle: 'Component Showcase & Demo',
        authors: [
          { name: 'Jane Doe', affiliation: 'University of Example', email: 'jane@example.com' },
          { name: 'John Smith', affiliation: 'Institute of Design', email: 'john@example.com' },
        ],
        date: 'May 2, 2026',
        abstract:
          'This document demonstrates all available components and styling options of the PrimeOne Typst template.',
        abstractTitle: 'Abstract',
        titlepage: true,
        toc: true,
        tocTitle: 'Table of Contents',
        tocDepth: 2,
        theme: themeLaraGreen,
      }),
    ),
    m.heading(1, 'Typography'),
    m.heading(2, 'Headings'),
    'PrimeOne uses a three-level heading hierarchy. Each level has a distinct size, weight, and color to create clear visual structure throughout the document.',
    m.heading(3, 'Level 3 Heading'),
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    m.heading(2, 'Body Text & Paragraphs'),
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.',
    'Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui.',
    m.heading(1, 'Code Blocks'),
    m.heading(2, 'Syntax-Highlighted Code'),
    'Below is an example Python code block:',
    inline(
      raw(
        { block: true, lang: 'python' },
        'import random\n\ndef number_guessing_game():\n    print("Welcome to the Number Guessing Game!")\n    print("I am thinking of a number between 1 and 100.")\n\n    # The computer chooses a random number between 1 and 100\n    secret_number = random.randint(1, 100)\n    attempts = 0\n\n    while True:\n        try:\n            # Ask for user input\n            user_input = input("Please enter your guess: ")\n            guess = int(user_input)\n            attempts += 1\n\n            # Check the guess\n            if guess < 1 or guess > 100:\n                print("Please stay within the range of 1 to 100!")\n            elif guess < secret_number:\n                print("Too low! Try again.")\n            elif guess > secret_number:\n                print("Too high! Try again.")\n            else:\n                print(f"Congratulations! You guessed the number {secret_number} in {attempts} attempts.")\n                break # Exits the loop when the number is guessed\n\n        except ValueError:\n            # If the user enters something that isn\'t a valid number (e.g., letters)\n            print("That was not a valid number. Please try again.")\n\n# Start the program\nif __name__ == "__main__":\n    number_guessing_game()',
      ),
    ),
    m.heading(2, 'Inline Code'),
    inline`You can reference inline code such as ${raw('mean(x)')} or variable names like ${raw('df_cleaned')}
within a sentence without breaking the reading flow.`,
    m.heading(1, 'Tables'),
    m.heading(2, 'Basic Table'),
    inline(
      table(
        { columns: 3 },
        inline(strong(inline`Name`)),
        inline(strong(inline`Role`)),
        inline(strong(inline`Location`)),
        inline`Jane Doe`,
        inline`Lead Researcher`,
        inline`Vienna, AT`,
        inline`John Smith`,
        inline`Data Analyst`,
        inline`Berlin, DE`,
        inline`Maria Garcia`,
        inline`Statistician`,
        inline`Madrid, ES`,
        inline`Luca Rossi`,
        inline`Visualisation`,
        inline`Milan, IT`,
      ),
    ),
    m.heading(2, 'Numeric Table'),
    inline(
      table(
        { columns: 4 },
        inline(strong(inline`Quarter`)),
        inline(strong(inline`Revenue`)),
        inline(strong(inline`Expenses`)),
        inline(strong(inline`Net`)),
        inline`Q1 2025`,
        inline`$124,000`,
        inline`$98,000`,
        inline`$26,000`,
        inline`Q2 2025`,
        inline`$138,500`,
        inline`$104,200`,
        inline`$34,300`,
        inline`Q3 2025`,
        inline`$152,000`,
        inline`$111,800`,
        inline`$40,200`,
        inline`Q4 2025`,
        inline`$179,300`,
        inline`$119,600`,
        inline`$59,700`,
      ),
    ),
    m.heading(1, 'Components'),
    m.heading(2, 'Badges'),
    'Badges are small inline labels useful for status indicators, tags, or labels:',
    inline(
      badge({ severity: 'info' }, 'Info'),
      space,
      h(em(0.5)),
      space,
      badge({ severity: 'success' }, 'Success'),
      space,
      h(em(0.5)),
      space,
      badge({ severity: 'warning' }, 'Warning'),
      space,
      h(em(0.5)),
      space,
      badge({ severity: 'error' }, 'Error'),
      space,
      h(em(0.5)),
      space,
      badge({ severity: 'neutral' }, 'Neutral'),
    ),
    inline(v(em(1))),
    inline`Badges can also appear inline within text — for example, this feature is ${badge({ severity: 'success' }, 'New')}
and this one is ${badge({ severity: 'warning' }, 'Deprecated')}.`,
    m.heading(2, 'Messages'),
    inline`The ${raw('message')} component is a compact single-line alert:`,
    inline(
      v(em(0.5)),
      space,
      message({ severity: 'info' }, inline`This is an informational message with useful context.`),
      space,
      v(em(0.5)),
      space,
      message({ severity: 'success' }, inline`The operation completed successfully.`),
      space,
      v(em(0.5)),
      space,
      message({ severity: 'warn' }, inline`Please review the settings before continuing.`),
      space,
      v(em(0.5)),
      space,
      message({ severity: 'error' }, inline`An error occurred. Please check your input and try again.`),
      space,
      v(em(0.5)),
      space,
      message({ severity: 'neutral' }, inline`This step is optional and can be skipped.`),
    ),
    m.heading(2, 'Messages (Block)'),
    inline`The ${raw('messages')} component is a full-width block alert with an optional title and a left
accent bar:`,
    inline(
      v(em(0.5)),
      space,
      messages(
        { severity: 'info', title: 'Information' },
        inline`${space}Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
ut labore et dolore magna aliqua.${space}`,
      ),
      space,
      v(em(0.5)),
      space,
      messages(
        { severity: 'success', title: 'Success' },
        inline`${space}Your document has been saved. All changes are up to date and have been backed up automatically.${space}`,
      ),
      space,
      v(em(0.5)),
      space,
      messages(
        { severity: 'warn', title: 'Warning' },
        inline`${space}This action will overwrite existing data. Please make sure you have a backup before
proceeding.${space}`,
      ),
      space,
      v(em(0.5)),
      space,
      messages(
        { severity: 'error', title: 'Error' },
        inline`${space}The connection to the server could not be established. Please check your network settings
and try again.${space}`,
      ),
    ),
    m.heading(2, 'Cards'),
    'Cards are versatile containers for structured content:',
    inline(
      v(em(0.5)),
      space,
      card(
        { title: 'Research Summary', subtitle: 'Preliminary Findings — Q1 2025', footer: 'Last updated: May 2, 2026' },
        inline`${space}Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi
tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat
vitae, ultricies eget, tempor sit amet, ante.${space}`,
      ),
    ),
    inline(v(em(1))),
    'Cards can also be placed side by side using a grid:',
    inline(
      grid(
        { columns: [fr(1), fr(1)], columnGutter: em(1) },
        card(
          { title: 'Dataset A' },
          inline`${space}Collected from 320 participants across three sites. Data cleaned and normalised prior
to analysis.${space}`,
        ),
        card(
          { title: 'Dataset B' },
          inline`${space}Secondary dataset sourced from public records. Merged with Dataset A using participant
ID.${space}`,
        ),
      ),
    ),
    m.heading(2, 'Panels'),
    'Panels are simpler bordered containers, useful for grouped content or side notes:',
    inline(
      v(em(0.5)),
      space,
      panel(
        { title: 'Note' },
        inline`${space}Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis
nostrud exercitation ullamco laboris.${space}`,
      ),
    ),
    inline(v(em(1))),
    inline(
      panel(inline`${space}A panel without a title is a plain bordered container — useful for callouts or highlighted
sections.${space}`),
    ),
    m.heading(2, 'Checkboxes'),
    'Checkboxes can be used for checklists, requirements lists, or feature comparisons:',
    inline(
      v(em(0.5)),
      space,
      checkbox({ label: 'Data collection complete', checked: true }),
      space,
      v(em(0.25)),
      space,
      checkbox({ label: 'Preprocessing pipeline verified', checked: true }),
      space,
      v(em(0.25)),
      space,
      checkbox({ label: 'Model training complete', checked: false }),
      space,
      v(em(0.25)),
      space,
      checkbox({ label: 'Results reviewed by co-authors', checked: false }),
      space,
      v(em(0.25)),
      space,
      checkbox({ label: 'This step is not applicable', checked: false, disabled: true }),
    ),
    m.heading(1, 'Color Themes'),
    inline`The template ships with seven built-in color themes. Switch the active theme by changing one
line at the top of ${raw('typst-template.typ')}:`,
    inline(
      table(
        { columns: 2 },
        inline(strong(inline`Variable`)),
        inline(strong(inline`Primary Color`)),
        inline(raw('theme-lara-cyan')),
        inline`${text({ fill: rgb('#06b6d4') }, inline`■`)} ${h(em(0.25))} #06b6d4`,
        inline(raw('theme-lara-purple')),
        inline`${text({ fill: rgb('#8b5cf6') }, inline`■`)} ${h(em(0.25))} #8b5cf6`,
        inline(raw('theme-lara-green')),
        inline`${text({ fill: rgb('#10b981') }, inline`■`)} ${h(em(0.25))} #10b981`,
        inline(raw('theme-lara-blue')),
        inline`${text({ fill: rgb('#3b82f6') }, inline`■`)} ${h(em(0.25))} #3b82f6`,
        inline(raw('theme-lara-teal')),
        inline`${text({ fill: rgb('#14b8a6') }, inline`■`)} ${h(em(0.25))} #14b8a6`,
        inline(raw('theme-lara-indigo')),
        inline`${text({ fill: rgb('#6366f1') }, inline`■`)} ${h(em(0.25))} #6366f1`,
        inline(raw('theme-lara-pink')),
        inline`${text({ fill: rgb('#ec4899') }, inline`■`)} ${h(em(0.25))} #ec4899`,
      ),
    ),
  )
}
