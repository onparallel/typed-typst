// Converted from test/universe/corpus/chicv-ripoff.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  align,
  blocks,
  cm,
  define,
  doc,
  emph,
  external,
  gray,
  importPackage,
  inline,
  link,
  m,
  pt,
  right,
  show,
  space,
  strong,
  sym,
  text,
} from '../../../src/index.ts'

export default () => {
  const chicv = external('chicv')
  const personalInfo = define('personal-info')
    .named('email', T.any, null)
    .named('github', T.any, null)
    .named('linkedin', T.any, null)
    .named('website', T.any, null)
    .returns(T.any)
    .external()
  const cventry = define('cventry')
    .pos('arg1', T.content)
    .named('bl', T.any, null)
    .named('br', T.any, null)
    .named('padding', T.any, null)
    .named('tl', T.any, null)
    .named('tr', T.any, null)
    .returns(T.any)
    .external()
  const dates = define('dates').named('from', T.any, null).named('to', T.any, null).returns(T.any).external()
  const githublink = define('githublink').pos('arg1', T.any).named('text', T.any, null).returns(T.any).external()
  const iconlink = define('iconlink').pos('arg1', T.any).returns(T.any).external()
  const faIcon = define('fa-icon').pos('arg1', T.any).named('solid', T.any, null).returns(T.any).external()
  const today = define('today').returns(T.any).external()
  const chicv_with = define('with')
    .named('margin', T.any, null)
    .named('par-padding', T.any, null)
    .returns(T.any)
    .external(chicv)
  return doc(
    importPackage('@preview/chicv-ripoff:1.1.4', [
      chicv,
      personalInfo,
      cventry,
      dates,
      githublink,
      iconlink,
      faIcon,
      today,
    ]),
    show(chicv_with({ margin: { x: cm(1), top: cm(1.5), bottom: cm(2) }, parPadding: { left: pt(0), right: pt(0) } })),
    m.heading(1, 'Chi Zhang'),
    inline(
      personalInfo({
        email: 'iskyzh@gmail.com',
        github: 'https://github.com/skyzh',
        website: 'https://skyzh.dev',
        linkedin: 'https://www.linkedin.com/in/alex-chi-skyzh/',
      }),
    ),
    m.heading(2, 'Education'),
    inline(
      cventry(
        {
          tl: 'Carnegie Mellon University',
          tr: dates({ from: '2022/08', to: '2023/12' }),
          bl: 'Master of Science in Computer Science, GPA 4.10/4.33',
          br: 'Pittsburgh, PA, USA',
        },
        blocks(
          m.list(
            m.item(['Teaching Assistant for 15-445/645 Database Systems (Fall 2022, Spring 2023, Fall 2023)']),
            m.item([
              'Courses: Distributed Systems, Compiler Design, Advanced Database Systems, Deep Learning Systems, etc.',
            ]),
          ),
        ),
      ),
    ),
    inline(
      cventry(
        {
          tl: 'Shanghai Jiao Tong University',
          tr: dates({ from: '2018/09', to: '2022/06' }),
          bl: 'Bachelor of Engineering in Computer Science and Technology',
          br: 'Shangehai, China',
        },
        blocks(
          m.list(
            m.item(['GPA 93.80/100, Rank 1/149, National Scholarship 2019 (Top 0.2% national-wide)']),
            m.item(['A+ Courses: Operating Systems, Computer Architecture, Computer Networks, and 28 others']),
          ),
        ),
      ),
    ),
    m.heading(2, 'Work Experience'),
    inline(
      cventry(
        {
          tl: inline(link('https://neon.tech', inline(strong(inline`Neon`)))),
          tr: dates({ from: '2024/02' }),
          bl: inline`Systems Software Engineer`,
          br: inline`Remote / Pittsburgh, PA, USA`,
          padding: { bottom: pt(-5) },
        },
        inline(),
      ),
    ),
    inline(
      cventry(
        {
          tl: inline(emph(inline`... and also`)),
          tr: dates({ from: '2023/05', to: '2023/08' }),
          bl: inline`Software Engineer Intern`,
          br: inline`Remote / Pittsburgh, PA, USA`,
        },
        blocks(
          m.list(
            m.item([
              'Neon is a fully-managed PostgreSQL service built on a key-value storage engine with point-to-time recovery support.',
            ]),
            m.item([
              strong(inline`Compaction Strategy Enhancement`),
              '. Conducted an in-depth analysis and evaluation of the storage engine to assess performance metrics and storage space efficiency. Implemented the RocksDB-style tiered compaction and improved page reconstruction strategy, which reduced space amplification by 2x and enhanced read-update performance by 20%.',
            ]),
            m.item([
              strong(inline`Improved User Adoption on the Edge`),
              '. Enhanced the overall reliability of the Neon serverless driver and the control plane proxy. Collaborated closely with the',
              space,
              link('https://github.com/prisma/prisma', inline`Prisma`),
              space,
              'ORM team to integrate the serverless driver into Prisma and ensured compatibility with Vercel Edge Runtime by transitioning the Rust Prisma engine codebase to be WebAssembly-ready.',
            ]),
          ),
        ),
      ),
    ),
    inline(
      cventry(
        {
          tl: inline(link('https://risingwave.com/', inline(strong(inline`RisingWave Labs`)))),
          tr: dates({ from: '2021/08', to: '2022/07' }),
          bl: inline`Database System R&D Intern`,
          br: inline`Shanghai, China`,
        },
        blocks(
          m.list(
            m.item([
              strong(
                inline`Top contributor of ${githublink({ text: 'RisingWave' }, 'https://github.com/risingwavelabs/risingwave')}`,
              ),
              '. RisingWave is a database system with PostgreSQL-compatible interface that incrementally maintains materialized views. Worked on features including streaming index joins, query optimization of stream plans, distributed streaming execution, cloud-native LSM state store, vectorized expression framework.',
            ]),
            m.item([
              strong(inline`Streaming Index Joins`),
              ': Designed shared state and streaming index in RisingWave; implemented index lookup join executor; implemented delta join DAG optimizer transformations; implemented distributed delta join scheduler.',
            ]),
            m.item([
              strong(inline`Performance Improvement`),
              ': Conducted intensive benchmarks and analyzed performance issues. Fixed bugs, proposed strategies, and led cross-team collaboration which improved the system throughput by 10x in a 3-month period.',
            ]),
            m.item([
              strong(inline`Developer Experience`),
              '. Initiated the RiseDev development tool and the developer dashboard, which is deeply integrated into the development workflow across debugging, unit testing, integration testing, and benchmarking.',
            ]),
            m.item([
              strong(inline`Mentoring`),
              '. Mentored database kernel interns and helped their successful integration into the team. Maintained overview documents of the database kernel to facilitate knowledge transfer and help new hires learn about the system.',
            ]),
          ),
        ),
      ),
    ),
    inline(
      cventry(
        {
          tl: 'ByteDance',
          tr: dates({ from: '2021/06', to: '2021/08' }),
          bl: 'Storage System R&D Intern, TerarkDB Team',
          br: 'Beijing, China',
        },
        blocks(
          m.list(
            m.item([
              strong(inline`Co-Optimized ${githublink({ text: 'TerarkDB' }, 'https://github.com/bytedance/terarkdb')}`),
              space,
              'and',
              space,
              strong(inline(githublink({ text: 'ZenFS' }, 'https://github.com/westerndigitalcorporation/zenfs'))),
              '. TerarkDB is a fork of RocksDB and ZenFS is a filesystem on Zoned Namespaces (ZNS) SSDs. Implemented Zone-aware Garbage Collection in TerarkDB for ZNS and WAL-Aware Zone Allocator in ZenFS, which reduced 3-4x of space amplification and greatly improved tail latencies caused by zone allocation.',
            ]),
          ),
        ),
      ),
    ),
    inline(
      cventry(
        {
          tl: 'PingCAP',
          tr: dates({ from: '2020/08', to: '2021/01' }),
          bl: 'Storage System R&D Intern, TiKV Storage Team',
          br: 'Shanghai, China',
        },
        blocks(
          m.list(
            m.item([
              'Built LSM-based storage engine',
              space,
              strong(inline(githublink({ text: 'AgateDB' }, 'https://github.com/tikv/agatedb'))),
              space,
              'from ground-up. Inspired by WiscKey and BadgerDB, AgateDB separates large values from the LSM tree into a separate value log, so as to reduce write amplification and improve throughput.',
            ]),
          ),
        ),
      ),
    ),
    m.heading(2, 'Open-Source Contributions'),
    inline(
      cventry(
        {
          tl: inline(
            space,
            strong(inline`BusTub`),
            space,
            githublink({ text: 'cmu-db/bustub' }, 'https://github.com/cmu-db/bustub'),
            space,
            emph(inline`as Teaching Assistant for Database Systems`),
            space,
          ),
          tr: dates({ from: '2022/08', to: '2023/12' }),
        },
        blocks(
          m.list(
            m.item([
              'Lead the development of the BusTub educational database system and course projects in CMU Database Systems course.',
            ]),
            m.item([
              'Added query processing layer to the system with PostgreSQL syntax support. Restructured the query execution project.',
            ]),
            m.item([
              'Added multi-version concurrency control to the system based on HyPer/Umbra undo log version chain implementation.',
            ]),
            m.item([
              'Redesigned course projects to help students better understand the concepts and align with industrial database systems.',
            ]),
            m.item([
              'Developed leaderboard tests to challenge advanced students and enable further study in optimizing database systems.',
            ]),
          ),
        ),
      ),
    ),
    inline(
      cventry(
        {
          tl: inline(
            space,
            strong(inline`RisingLight Maintainer`),
            space,
            githublink({ text: 'risinglightdb' }, 'https://github.com/risinglightdb'),
            space,
          ),
          tr: dates({ from: '2022/01' }),
        },
        blocks(
          m.list(
            m.item([
              'Lead the development of RisingLight, an OLAP database system in Rust for educational purpose. RisingLight supports simple TPC-H queries, and has a merge-tree based columnar storage.',
            ]),
          ),
        ),
      ),
    ),
    inline(
      cventry(
        {
          tl: inline(
            space,
            strong(inline`TiKV Community`),
            space,
            githublink({ text: 'tikv' }, 'https://github.com/tikv'),
            space,
          ),
          tr: dates({ from: '2020/05' }),
        },
        blocks(
          m.list(
            m.item([
              'Maintains TiKV Coprocessor, the push-down execution framework of TiDB. Mentored community members to contribute features (e.g. new data types, plugin system) in the',
              space,
              strong(inline`LFX Mentorship`),
              '.',
              space,
              iconlink('https://github.com/tikv/tikv/issues/9066'),
              space,
              iconlink('https://github.com/tikv/tikv/issues/9747'),
            ]),
          ),
        ),
      ),
    ),
    inline(
      cventry(
        {
          tl: inline(
            space,
            strong(inline`Personal Projects`),
            space,
            githublink({ text: 'skyzh' }, 'https://github.com/skyzh'),
            space,
          ),
          tr: inline`6.6k followers on GitHub`,
        },
        blocks(
          m.list(
            m.item([
              strong(inline(githublink({ text: 'mini-lsm' }, 'https://github.com/skyzh/mini-lsm'))),
              space,
              '(',
              faIcon({ solid: true }, 'star'),
              space,
              '2k) Build a simple LSM-Tree storage system in Rust in a week',
            ]),
            m.item([
              strong(inline(githublink({ text: 'type-exercise-in-rust' }, 'https://github.com/skyzh/mini-lsm'))),
              space,
              '(',
              faIcon({ solid: true }, 'star'),
              space,
              '1k) Learn Rust generics by implementing a vectorized expression evaluation framework',
            ]),
          ),
        ),
      ),
    ),
    m.heading(2, 'Research Experience'),
    inline(
      cventry(
        {
          tl: inline(
            strong(inline`Adaptive Query Optimization Framework`),
            space,
            githublink({ text: 'cmu-db/optd' }, 'https://github.com/cmu-db/optd'),
          ),
          tr: dates({ from: '2023/09', to: '2023/12' }),
          bl: inline`CMU Database Group, advised by Professor Andy Pavlo`,
          br: inline`Pittsburgh, PA, USA`,
        },
        blocks(
          m.list(
            m.item([
              strong(inline`Developed optd`),
              ', an optimizer framework based on the Columbia Cascades paper targeting real-time OLAP queries.',
            ]),
            m.item([
              strong(inline`Adaptive Optimization`),
              '. optd collects statistics during execution and uses runtime data to guide later plan searches.',
            ]),
            m.item([
              strong(inline`Partial Exploration`),
              '. optd explores plans by reusing and incrementally expanding the plan space from the last search.',
            ]),
          ),
        ),
      ),
    ),
    inline(
      cventry(
        {
          tl: inline(
            strong(inline`PostgreSQL Extension Manager`),
            space,
            githublink({ text: 'cmu-db/pgextmgrext' }, 'https://github.com/cmu-db/pgextmgrext'),
          ),
          tr: dates({ from: inline`2023/02`, to: inline`2023/05` }),
          bl: inline`CMU Database Group, advised by Professor Andy Pavlo`,
          br: inline`Pittsburgh, PA, USA`,
        },
        blocks(
          m.list(
            m.item([
              strong(inline`Implemented pgextmgrext`),
              ', a PostgreSQL extension that manages other PostgreSQL extensions and provides new APIs to PostgreSQL extension developers that enables them to write new extensions with fewer lines of code.',
            ]),
            m.item([
              strong(inline`Integration with PostgreSQL Ecosystem`),
              '. Integrated pg_hint_plan with the extension manager. Implemented output rewriter in the extension manager, and based on that, a demo extension pg_poop that rewrites all text to poop emojis.',
            ]),
          ),
        ),
      ),
    ),
    m.heading(2, 'Skills'),
    m.list(
      m.item([strong(inline`Programming Languages`), ': Rust (6 years), C++, Python, Node.js and Golang']),
      m.item([
        strong(inline`Tech Skills`),
        ': Stream-Processing Systems, Database Systems (Optimizer and Query Execution), Key-Value Storage Systems, SSD-optimized File System',
      ]),
    ),
    inline(align(right, text({ fill: gray }, inline`Last Updated on ${today()}`))),
  )
}
