// Converted from test/universe/corpus/minimalbc.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, define, doc, external, image, importPackage, path, show } from '../../../src/index.ts'

export default () => {
  const minimalbc = external('minimalbc')
  const minimalbc_with = define('with')
    .named('bg_color', T.any, null)
    .named('company_logo', T.any, null)
    .named('company_name', T.any, null)
    .named('email_address', T.any, null)
    .named('flip', T.any, null)
    .named('geo_size', T.any, null)
    .named('name', T.any, null)
    .named('role', T.any, null)
    .named('telephone_number', T.any, null)
    .named('website', T.any, null)
    .returns(T.any)
    .external(minimalbc)
  return doc(
    importPackage('@preview/minimalbc:0.0.1', [minimalbc]),
    show(
      minimalbc_with({
        geo_size: 'eu',
        flip: false,
        company_name: 'Company Name',
        name: 'First and Last Name',
        role: 'Role',
        telephone_number: '+000 00 000000',
        email_address: 'me@me.com',
        website: 'example.com',
        company_logo: image(path('company_logo.png')),
        bg_color: 'ffffff',
      }),
    ),
  )
}
