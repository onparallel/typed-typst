// Converted from test/universe/corpus/modern-jakarta-cv.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  align,
  blocks,
  center,
  define,
  doc,
  em,
  external,
  fr,
  grid,
  importPackage,
  inline,
  linebreak,
  link,
  m,
  pt,
  show,
  smartquote,
  space,
  strong,
  text,
  v,
} from '../../../src/index.ts'

export default () => {
  const project = external('project')
  const section = define('section').pos('arg1', T.any).returns(T.any).external()
  const entry = define('entry')
    .named('date', T.any, null)
    .named('description', T.content, [])
    .named('location', T.any, null)
    .named('sub-title', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external()
  const projectEntry = define('project-entry')
    .named('category', T.any, null)
    .named('description', T.content, [])
    .named('title', T.any, null)
    .returns(T.any)
    .external()
  return doc(
    m.lines(importPackage('@preview/modern-jakarta-cv:0.1.0', [project, section, entry, projectEntry]), show(project)),
    inline(
      align(
        center,
        inline(
          space,
          text({ weight: 'bold', size: pt(18) }, inline`Callista Putmanda`),
          space,
          linebreak(),
          space,
          v(em(0.1)),
          space,
          text(
            { size: pt(9) },
            inline`${space}callista.p@email.com | ${link('https://github.com/callistap', inline`github.com/callistap`)}
| ${link('https://linkedin.com/in/callistaputmanda', inline`linkedin.com/in/callistaputmanda`)}
| ${link('https://callista-marketing.framer.website', inline`Portfolio`)}${space}`,
          ),
          space,
        ),
      ),
    ),
    inline(
      section('Summary'),
      space,
      text(
        { size: pt(9.5) },
        inline`${space}Strategic and creative Marketing graduate from Universitas Indonesia with a strong focus
on Digital Growth and Brand Management. Experienced in managing cross-channel campaigns, analyzing
consumer behavior data, and optimizing social media ROI. Proven ability to execute data-driven
marketing strategies that increased brand engagement by 35% during internship roles in fast-paced
industries.${space}`,
      ),
    ),
    inline(
      section('Education'),
      space,
      entry({
        title: 'Bachelor of Economics (Marketing Major)',
        subTitle: 'Universitas Indonesia',
        date: 'Sept 2021 — July 2025',
        description: blocks(
          m.list(
            m.item([
              strong(inline`GPA: 3.92 / 4.00`),
              space,
              '— Specialized in Digital Marketing and Consumer Insights.',
            ]),
            m.item([
              strong(inline`Honors:`),
              space,
              'National Marketing Competition Finalist; Recipient of Excellence Scholarship.',
            ]),
            m.item([
              strong(inline`Relevant Coursework:`),
              space,
              'Strategic Brand Management, Market Research, and Digital Analytics.',
            ]),
          ),
        ),
      }),
    ),
    inline(
      section('Work Experience'),
      space,
      entry({
        title: 'Growth Marketing Specialist',
        subTitle: 'Lumina Consumer Goods',
        date: 'Aug 2025 — Present',
        location: 'Jakarta, Indonesia',
        description: blocks(
          m.list(
            m.item([
              'Spearheaded a multi-channel digital launch for a new product line, resulting in a 20% increase in monthly recurring revenue (MRR) within the first quarter.',
            ]),
            m.item([
              'Optimized Google Ads and Meta Ads performance, achieving a 15% reduction in Customer Acquisition Cost (CAC) through meticulous A/B testing and keyword optimization.',
            ]),
          ),
        ),
      }),
    ),
    inline(
      entry({
        title: 'Brand Management Intern',
        subTitle: 'Global Brands Co.',
        date: 'Jan 2024 — July 2024',
        location: 'Jakarta, Indonesia',
        description: blocks(
          m.list(
            m.item([
              'Assisted in the execution of nationwide brand awareness campaigns reaching 1M+ unique users across social platforms.',
            ]),
            m.item([
              'Conducted comprehensive competitor analysis and market trend reporting to inform quarterly strategy adjustments.',
            ]),
          ),
        ),
      }),
    ),
    inline(
      section('Organizational Experience'),
      space,
      entry({
        title: 'Head of Public Relations',
        subTitle: 'Economics Student Board (BEM FEB UI)',
        date: 'Jan 2023 — Jan 2024',
        location: 'Depok, Indonesia',
        description: blocks(
          m.list(
            m.item([
              'Managed external communications for major events, securing 10+ media partners and 5 major sponsors.',
            ]),
            m.item([
              'Led a team of 10 in revitalizing digital presence, resulting in a 50% growth in Instagram reach.',
            ]),
          ),
        ),
      }),
    ),
    inline(
      section('Projects'),
      space,
      projectEntry({
        title: 'Market Analysis: Gen Z Skincare Trends',
        category: 'Academic Research Project (SPSS, Google Trends)',
        description: blocks(
          m.list(
            m.item(['Conducted primary research on skincare purchasing habits of 500+ Gen Z respondents in Jakarta.']),
            m.item([
              'Delivered a comprehensive report highlighting the significant shift towards sustainable packaging.',
            ]),
          ),
        ),
      }),
    ),
    inline(
      projectEntry({
        title: 'EcoPrint: Sustainable Fashion Startup Campaign',
        category: 'Strategy Competition (Canva, Meta Business Suite)',
        description: blocks(
          m.list(
            m.item(['Designed a 3-month digital marketing roadmap for a hypothetical eco-friendly fashion brand.']),
            m.item([
              'Won',
              space,
              smartquote({ double: true }),
              'Best Strategy Presentation',
              smartquote({ double: true }),
              space,
              'for innovative use of short-form video content.',
            ]),
          ),
        ),
      }),
    ),
    inline(
      section('Skills & Certification'),
      space,
      grid(
        { columns: [fr(1), fr(1)], gutter: em(1.5) },
        blocks(
          m.list(
            m.item([strong(inline`Digital Marketing:`), space, 'SEO, SEM, PPC, Email Marketing']),
            m.item([strong(inline`Analytics:`), space, 'Google Analytics (GA4), Mixpanel, Tableau']),
          ),
        ),
        blocks(
          m.list(
            m.item([strong(inline`Tools:`), space, 'Mailchimp, HubSpot CRM, Meta Business']),
            m.item([strong(inline`Languages:`), space, 'English (IELTS 8.0), Indonesian (Native)']),
          ),
        ),
      ),
    ),
  )
}
