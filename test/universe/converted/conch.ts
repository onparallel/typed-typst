// Converted from test/universe/corpus/conch.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, define, dict, doc, external, importPackage, inline, pt, raw, show } from '../../../src/index.ts'

export default () => {
  const system = define('system').named('files', T.any, null).named('hostname', T.any, null).returns(T.any).external()
  const terminal = external('terminal')
  const terminal_with = define('with')
    .named('height', T.any, null)
    .named('system', T.any, null)
    .named('user', T.any, null)
    .returns(T.any)
    .external(terminal)
  return doc(
    importPackage('@preview/conch:0.1.0', [system, terminal]),
    show(
      terminal_with({
        system: system({
          hostname: 'conch',
          files: dict({
            'greet.sh': {
              content: '#!/bin/bash\n# A greeting script\necho "Hello from $USER!"\nls | head -n 3\necho "Done."',
              mode: 755,
            },
            'setup.sh': "#!/bin/bash\nmkdir -p build\necho 'ready' > build/status.txt\necho 'Build environment ready.'",
            'src/main.typ': '#set page(width: 210mm)\nHello from Typst!',
            'README.md': '# Conch\nA shell simulator for Typst.',
          }),
        }),
        user: 'lucifer1004',
        height: pt(300),
      }),
    ),
    inline(
      raw(
        { block: true },
        'ls -la\ncat greet.sh\n./greet.sh\nchmod 755 setup.sh\nbash setup.sh\ncat build/status.txt\ntree',
      ),
    ),
  )
}
