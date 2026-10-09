// Converted from test/universe/corpus/clean-cnam-template.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  blocks,
  blue,
  datetime,
  define,
  doc,
  em,
  external,
  image,
  importPackage,
  inline,
  linebreak,
  lorem,
  luma,
  m,
  orange,
  parbreak,
  path,
  pct,
  raw,
  show,
  space,
  strong,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const cleanCnamTemplate = external('clean-cnam-template')
  const definition = define('definition')
    .pos('arg1', T.content)
    .named('body-style', T.any, null)
    .named('title', T.any, null)
    .named('title-style', T.any, null)
    .returns(T.any)
    .external()
  const example = define('example').pos('arg1', T.content).named('title', T.any, null).returns(T.any).external()
  const theorem = define('theorem')
    .pos('arg1', T.content)
    .named('body-style', T.any, null)
    .named('title', T.any, null)
    .named('title-style', T.any, null)
    .returns(T.any)
    .external()
  const ar = external('ar')
  const myBlock = define('my-block')
    .pos('arg1', T.content)
    .named('body-style', T.any, null)
    .named('title', T.any, null)
    .named('title-style', T.any, null)
    .returns(T.any)
    .external()
  const blockquote = define('blockquote').pos('arg1', T.content).returns(T.any).external()
  const code = define('code').pos('arg1', T.any).named('filename', T.any, null).returns(T.any).external()
  const cleanCnamTemplate_with = define('with')
    .named('author', T.any, null)
    .named('class', T.any, null)
    .named('colors', T.any, null)
    .named('logo', T.any, null)
    .named('start-date', T.any, null)
    .named('subtitle', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external(cleanCnamTemplate)
  return doc(
    importPackage('@preview/clean-cnam-template:1.6.6', [
      cleanCnamTemplate,
      definition,
      example,
      theorem,
      ar,
      myBlock,
      blockquote,
      code,
    ]),
    show(
      cleanCnamTemplate_with({
        title: 'Main Title',
        author: 'Tom Planche',
        class: 'Class name',
        subtitle: 'Class subtitle',
        logo: image(path('./assets/cnam_logo.svg')),
        startDate: datetime({ day: 7, month: 9, year: 2025 }),
        colors: { main: '#C4122E' },
      }),
    ),
    m.lines(m.heading(1, 'Main title'), m.heading(2, 'Maths')),
    'For my maths class, I made these things:',
    m.heading(3, raw('#definition')),
    inline(
      definition(
        { title: 'Linearity' },
        blocks(
          inline`${linebreak()} We say that ${unsafeRaw.math`phi`} is linear (homomorphism) if:`,
          inline(
            unsafeRaw.math
              .block`phi(lambda_1 X_1 + lambda_2 X_2 + dots + lambda_n X_n) = lambda_1 phi(X_1) + lambda_2 phi(X_2) + dots + lambda_n phi(X_n)`,
          ),
        ),
      ),
    ),
    m.heading(3, raw('#example')),
    inline(
      example(
        { title: 'Example title' },
        inline`${space}Basic text. ${linebreak()} ${lorem(20)} ${unsafeRaw.math
          .block`phi(0, 0, 0) = (0, 0)     = 0_(RR^2) \\
      phi(alpha X_1 + beta X_2) stretch(=)^"?" alpha phi(X_1) + beta phi(X_2) \\`}${space}`,
      ),
    ),
    m.lines(m.heading(3, raw('#theorem')), m.heading(4, 'With', ' ', raw('title'))),
    m.lines(
      inline(
        theorem(
          { title: "Stokes' Theorem" },
          blocks(
            inline`${linebreak()} Let ${unsafeRaw.math`M`} be an oriented differential manifold with boundary of
dimension ${unsafeRaw.math`n`}, and ${unsafeRaw.math`omega`} a ${unsafeRaw.math`(n – 1)"-form"`}
differential form with compact support on ${unsafeRaw.math`M`} of class ${unsafeRaw.math`C_1`}.${linebreak()}
Then, we have:`,
            inline(unsafeRaw.math.block`integral_M d omega = integral_{partial M} i^* omega`),
            inline`where ${unsafeRaw.math`d`} denotes the exterior derivative, ${unsafeRaw.math`partial M`} the
boundary of ${unsafeRaw.math`M`}, equipped with the induced orientation,${linebreak()} and ${unsafeRaw.math`i^* omega = omega |_{partial M}`}
the restriction of ${unsafeRaw.math`omega`} to ${unsafeRaw.math`partial M`}.`,
            parbreak(),
          ),
        ),
      ),
      m.heading(4, 'Without', ' ', raw('title')),
    ),
    inline(
      theorem(inline`${space}${linebreak()} Let ${unsafeRaw.math`E`} be a finite-dimensional vector space, ${unsafeRaw.math`F`}
a vector subspace of ${unsafeRaw.math`E`}, and ${unsafeRaw.math`B = (X_1, X_2, dots, X_n)`}
a basis of ${unsafeRaw.math`F`}. ${linebreak()} Then, there exists a basis ${unsafeRaw.math`(X_1, X_2, dots, X_n, X_{n+1}, dots, X_m)`}
of ${unsafeRaw.math`E`} such that ${unsafeRaw.math`(X_1, X_2, dots, X_n)`} is a basis of ${unsafeRaw.math`F`}.${space}`),
    ),
    m.heading(3, 'Custom styling'),
    inline(
      definition(
        { title: 'Styled Definition', titleStyle: { fill: blue, weight: 'bold' }, bodyStyle: { size: em(0.95) } },
        inline`${space}A ${strong(inline`group`)} is a set ${unsafeRaw.math`G`} equipped with a binary operation
${unsafeRaw.math`dot`} satisfying closure, associativity, identity, and invertibility.${space}`,
      ),
    ),
    inline(
      theorem(
        { title: 'Styled Theorem', titleStyle: { fill: orange.darken(pct(20)) }, bodyStyle: { fill: luma(60) } },
        inline`${space}${linebreak()} For any right triangle with sides ${unsafeRaw.math`a`}, ${unsafeRaw.math`b`},
and hypotenuse ${unsafeRaw.math`c`}: ${unsafeRaw.math.block`a^2 + b^2 = c^2`}${space}`,
      ),
    ),
    m.heading(3, raw('ar')),
    inline`For vectors, I use ${raw('ar(X)')} and it gives ${unsafeRaw.math`ar(X)`}.`,
    m.lines(m.heading(2, 'Subtitle'), m.heading(3, 'Subsubtitle')),
    inline(myBlock(inline`${space}Custom Block${space}`)),
    inline(
      myBlock(
        {
          title: 'Styled Block',
          titleStyle: { size: em(1.2), fill: blue },
          bodyStyle: { size: em(0.9), fill: luma(80) },
        },
        inline`${space}This block uses custom title and body styling.${space}`,
      ),
    ),
    inline(blockquote(inline`${space}Custom Blockquote${space}`)),
    inline(raw('Basic inline raw text')),
    inline`This code block uses ${raw('#code()')} macro.`,
    inline(
      code(
        { filename: 'src/string_utils.rs' },
        raw(
          { block: true, lang: 'rust' },
          '/// Extension traits and utilities for string manipulation\n///\n/// This module provides additional functionality for working with strings,\n/// including title case conversion and other string transformations.\nuse std::string::String;\n\n/// Trait that adds title case functionality to String and &str types\npub trait TitleCase {\n    /// Converts the string to title case where each word starts with an uppercase letter\n    /// and the rest are lowercase\n    ///\n    fn to_title_case(&self) -> String;\n}\n\nimpl TitleCase for str {\n    fn to_title_case(&self) -> String {\n        self.split(|c: char| c.is_whitespace() || c == \'_\' || c == \'-\')\n            .filter(|s| !s.is_empty())\n            .map(|word| {\n                // If the word is all uppercase and longer than 1 character, preserve it\n                if word.chars().all(|c| c.is_uppercase()) && word.len() > 1 {\n                    word.to_string()\n                } else {\n                    let mut chars = word.chars();\n                    match chars.next() {\n                        None => String::new(),\n                        Some(first) => {\n                            let first_upper = first.to_uppercase().collect::<String>();\n                            let rest_lower = chars.as_str().to_lowercase();\n                            format!("{}{}", first_upper, rest_lower)\n                        }\n                    }\n                }\n            })\n            .collect::<Vec<String>>()\n            .join(" ")\n    }\n}\n\nimpl TitleCase for String {\n    fn to_title_case(&self) -> String {\n        self.as_str().to_title_case()\n    }\n}\n\n#[cfg(test)]\nmod tests {\n    use super::*;\n\n    #[test]\n    fn test_title_case_str() {\n        assert_eq!("hello world".to_title_case(), "Hello World");\n        assert_eq!("HASH_TABLE".to_title_case(), "HASH TABLE");\n        assert_eq!("dynamic-programming".to_title_case(), "Dynamic Programming");\n        assert_eq!("BFS".to_title_case(), "BFS");\n        assert_eq!("two-sum".to_title_case(), "Two Sum");\n        assert_eq!("binary_search_tree".to_title_case(), "Binary Search Tree");\n        assert_eq!("   spaced   words   ".to_title_case(), "Spaced Words");\n        assert_eq!("".to_title_case(), "");\n    }\n}',
        ),
      ),
    ),
  )
}
