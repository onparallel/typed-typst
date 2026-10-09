// Converted from test/suite/corpus/linebreak-link-justify.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, link, m, page, par, pt, set } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(set(page, { width: pt(240) }), set(par, { justify: true })),
    inline`Here's a link ${link('https://url.com/data/extern12840%data_urlenc')} and then there are more
links ${link('www.url.com/data/extern12840%data_urlenc')} in my text of links ${link('http://mydataurl/hash/12098541029831025981024980124124214/incremental/progress%linkdata_information_setup_my_link_just_never_stops_going/on?query=false')}`,
  )
}
