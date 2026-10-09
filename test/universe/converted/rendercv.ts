// Converted from test/universe/corpus/rendercv.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  blocks,
  center,
  cm,
  codeBlock,
  context,
  counter,
  datetime,
  define,
  doc,
  em,
  emph,
  external,
  here,
  importPackage,
  inches,
  inline,
  m,
  parbreak,
  pt,
  raw,
  rgb,
  right,
  show,
  smartquote,
  space,
  str,
  strong,
  sym,
  symbol,
  text,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const rendercv = external('rendercv')
  const connections = define('connections')
    .pos('arg1', T.content)
    .pos('arg2', T.content)
    .pos('arg3', T.content)
    .pos('arg4', T.content)
    .pos('arg5', T.content)
    .returns(T.any)
    .external()
  const link_2 = define('link')
    .pos('arg1', T.any)
    .pos('arg2', T.content)
    .named('icon', T.any, null)
    .named('if-color', T.any, null)
    .named('if-underline', T.any, null)
    .returns(T.any)
    .external()
  const educationEntry = define('education-entry')
    .pos('arg1', T.content)
    .pos('arg2', T.content)
    .named('main-column-second-row', T.content, [])
    .returns(T.any)
    .external()
  const regularEntry = define('regular-entry')
    .pos('arg1', T.content)
    .pos('arg2', T.content)
    .named('main-column-second-row', T.content, [])
    .returns(T.any)
    .external()
  const summary = define('summary').pos('arg1', T.content).returns(T.any).external()
  const reversedNumberedEntries = define('reversed-numbered-entries').pos('arg1', T.content).returns(T.any).external()
  const rendercv_with = define('with')
    .named('colors-body', T.any, null)
    .named('colors-connections', T.any, null)
    .named('colors-footer', T.any, null)
    .named('colors-headline', T.any, null)
    .named('colors-links', T.any, null)
    .named('colors-name', T.any, null)
    .named('colors-section-titles', T.any, null)
    .named('colors-top-note', T.any, null)
    .named('date', T.any, null)
    .named('entries-allow-page-break', T.any, null)
    .named('entries-date-and-location-width', T.any, null)
    .named('entries-highlights-bullet', T.any, null)
    .named('entries-highlights-nested-bullet', T.any, null)
    .named('entries-highlights-space-above', T.any, null)
    .named('entries-highlights-space-between-bullet-and-text', T.any, null)
    .named('entries-highlights-space-between-items', T.any, null)
    .named('entries-highlights-space-left', T.any, null)
    .named('entries-short-second-row', T.any, null)
    .named('entries-side-space', T.any, null)
    .named('entries-space-between-columns', T.any, null)
    .named('entries-summary-space-above', T.any, null)
    .named('entries-summary-space-left', T.any, null)
    .named('footer', T.any, null)
    .named('header-alignment', T.any, null)
    .named('header-connections-display-urls-instead-of-usernames', T.any, null)
    .named('header-connections-hyperlink', T.any, null)
    .named('header-connections-separator', T.any, null)
    .named('header-connections-show-icons', T.any, null)
    .named('header-connections-space-between-connections', T.any, null)
    .named('header-photo-width', T.any, null)
    .named('header-space-below-connections', T.any, null)
    .named('header-space-below-headline', T.any, null)
    .named('header-space-below-name', T.any, null)
    .named('links-show-external-link-icon', T.any, null)
    .named('links-underline', T.any, null)
    .named('locale-catalog-language', T.any, null)
    .named('name', T.any, null)
    .named('page-bottom-margin', T.any, null)
    .named('page-left-margin', T.any, null)
    .named('page-right-margin', T.any, null)
    .named('page-show-footer', T.any, null)
    .named('page-show-top-note', T.any, null)
    .named('page-size', T.any, null)
    .named('page-top-margin', T.any, null)
    .named('section-titles-line-thickness', T.any, null)
    .named('section-titles-space-above', T.any, null)
    .named('section-titles-space-below', T.any, null)
    .named('section-titles-type', T.any, null)
    .named('sections-allow-page-break', T.any, null)
    .named('sections-space-between-regular-entries', T.any, null)
    .named('sections-space-between-text-based-entries', T.any, null)
    .named('top-note', T.content, [])
    .named('typography-alignment', T.any, null)
    .named('typography-bold-connections', T.any, null)
    .named('typography-bold-headline', T.any, null)
    .named('typography-bold-name', T.any, null)
    .named('typography-bold-section-titles', T.any, null)
    .named('typography-date-and-location-column-alignment', T.any, null)
    .named('typography-font-family-body', T.any, null)
    .named('typography-font-family-connections', T.any, null)
    .named('typography-font-family-headline', T.any, null)
    .named('typography-font-family-name', T.any, null)
    .named('typography-font-family-section-titles', T.any, null)
    .named('typography-font-size-body', T.any, null)
    .named('typography-font-size-connections', T.any, null)
    .named('typography-font-size-headline', T.any, null)
    .named('typography-font-size-name', T.any, null)
    .named('typography-font-size-section-titles', T.any, null)
    .named('typography-line-spacing', T.any, null)
    .named('typography-small-caps-connections', T.any, null)
    .named('typography-small-caps-headline', T.any, null)
    .named('typography-small-caps-name', T.any, null)
    .named('typography-small-caps-section-titles', T.any, null)
    .returns(T.any)
    .external(rendercv)
  return doc(
    importPackage('@preview/rendercv:0.3.0', [
      rendercv,
      connections,
      link_2,
      educationEntry,
      regularEntry,
      summary,
      reversedNumberedEntries,
    ]),
    show(
      rendercv_with({
        name: 'John Doe',
        footer: context((ctx) =>
          codeBlock(
            [],
            inline(
              emph(
                inline`John Doe -- ${str(here(ctx).page())}${symbol('/')}${str(unsafeRaw.code<any>`counter(page).final().first()`)}`,
              ),
            ),
          ),
        ),
        topNote: inline(space, emph(inline`Last updated in Dec 2025`), space),
        localeCatalogLanguage: 'en',
        pageSize: 'us-letter',
        pageTopMargin: inches(0.7),
        pageBottomMargin: inches(0.7),
        pageLeftMargin: inches(0.7),
        pageRightMargin: inches(0.7),
        pageShowFooter: false,
        pageShowTopNote: true,
        colorsBody: rgb(0, 0, 0),
        colorsName: rgb(0, 0, 0),
        colorsHeadline: rgb(0, 0, 0),
        colorsConnections: rgb(0, 0, 0),
        colorsSectionTitles: rgb(0, 0, 0),
        colorsLinks: rgb(0, 0, 0),
        colorsFooter: rgb(128, 128, 128),
        colorsTopNote: rgb(128, 128, 128),
        typographyLineSpacing: em(0.6),
        typographyAlignment: 'justified',
        typographyDateAndLocationColumnAlignment: right,
        typographyFontFamilyBody: 'XCharter',
        typographyFontFamilyName: 'XCharter',
        typographyFontFamilyHeadline: 'XCharter',
        typographyFontFamilyConnections: 'XCharter',
        typographyFontFamilySectionTitles: 'XCharter',
        typographyFontSizeBody: pt(10),
        typographyFontSizeName: pt(25),
        typographyFontSizeHeadline: pt(10),
        typographyFontSizeConnections: pt(10),
        typographyFontSizeSectionTitles: em(1.2),
        typographySmallCapsName: false,
        typographySmallCapsHeadline: false,
        typographySmallCapsConnections: false,
        typographySmallCapsSectionTitles: false,
        typographyBoldName: false,
        typographyBoldHeadline: false,
        typographyBoldConnections: false,
        typographyBoldSectionTitles: true,
        linksUnderline: true,
        linksShowExternalLinkIcon: false,
        headerAlignment: center,
        headerPhotoWidth: cm(3.5),
        headerSpaceBelowName: cm(0.7),
        headerSpaceBelowHeadline: cm(0.7),
        headerSpaceBelowConnections: cm(0.7),
        headerConnectionsHyperlink: true,
        headerConnectionsShowIcons: false,
        headerConnectionsDisplayUrlsInsteadOfUsernames: true,
        headerConnectionsSeparator: '|',
        headerConnectionsSpaceBetweenConnections: cm(0.5),
        sectionTitlesType: 'with_full_line',
        sectionTitlesLineThickness: pt(0.5),
        sectionTitlesSpaceAbove: cm(0.5),
        sectionTitlesSpaceBelow: cm(0.3),
        sectionsAllowPageBreak: true,
        sectionsSpaceBetweenTextBasedEntries: cm(0.15),
        sectionsSpaceBetweenRegularEntries: cm(0.42),
        entriesDateAndLocationWidth: cm(4.15),
        entriesSideSpace: cm(0),
        entriesSpaceBetweenColumns: cm(0.1),
        entriesAllowPageBreak: false,
        entriesShortSecondRow: false,
        entriesSummarySpaceLeft: cm(0),
        entriesSummarySpaceAbove: cm(0.08),
        entriesHighlightsBullet: text({ baseline: pt(-0.6), size: pt(13) }, inline`•`),
        entriesHighlightsNestedBullet: text({ baseline: pt(-0.6), size: pt(13) }, inline`•`),
        entriesHighlightsSpaceLeft: cm(0),
        entriesHighlightsSpaceAbove: cm(0.08),
        entriesHighlightsSpaceBetweenItems: cm(0.08),
        entriesHighlightsSpaceBetweenBulletAndText: em(0.3),
        date: datetime({ year: 2025, month: 12, day: 5 }),
      }),
    ),
    m.heading(1, 'John Doe'),
    inline(
      connections(
        inline`San Francisco, CA`,
        inline(
          link_2(
            { icon: false, ifUnderline: false, ifColor: false },
            'mailto:john.doe@email.com',
            inline`john.doe@email.com`,
          ),
        ),
        inline(
          link_2({ icon: false, ifUnderline: false, ifColor: false }, 'https://rendercv.com/', inline`rendercv.com`),
        ),
        inline(
          link_2(
            { icon: false, ifUnderline: false, ifColor: false },
            'https://linkedin.com/in/rendercv',
            inline`linkedin.com${symbol('/')}in${symbol('/')}rendercv`,
          ),
        ),
        inline(
          link_2(
            { icon: false, ifUnderline: false, ifColor: false },
            'https://github.com/rendercv',
            inline`github.com${symbol('/')}rendercv`,
          ),
        ),
      ),
    ),
    m.heading(2, 'Welcome to RenderCV'),
    'RenderCV reads a CV written in a YAML file, and generates a PDF with professional typography.',
    inline`See the ${link_2('https://docs.rendercv.com', inline`documentation`)} for more details.`,
    m.heading(2, 'Education'),
    inline(
      educationEntry(
        {
          mainColumnSecondRow: blocks(
            m.list(
              { tight: false },
              m.item(['Thesis: Efficient Neural Architecture Search for Resource-Constrained Deployment']),
              m.item(['Advisor: Prof. Sanjeev Arora']),
              m.item(['NSF Graduate Research Fellowship, Siebel Scholar (Class of 2022)']),
            ),
            parbreak(),
          ),
        },
        blocks(inline`${strong(inline`Princeton University`)}, PhD in Computer Science -- Princeton, NJ`, parbreak()),
        blocks('Sept 2018 – May 2023', parbreak()),
      ),
    ),
    inline(
      educationEntry(
        {
          mainColumnSecondRow: blocks(
            m.list(
              { tight: false },
              m.item(['GPA: 3.97', symbol('/'), '4.00, Valedictorian']),
              m.item(['Fulbright Scholarship recipient for graduate studies']),
            ),
            parbreak(),
          ),
        },
        blocks(
          inline`${strong(inline`Boğaziçi University`)}, BS in Computer Engineering -- Istanbul, Türkiye`,
          parbreak(),
        ),
        blocks('Sept 2014 – June 2018', parbreak()),
      ),
    ),
    m.heading(2, 'Experience'),
    inline(
      regularEntry(
        {
          mainColumnSecondRow: blocks(
            m.list(
              { tight: false },
              m.item([
                'Built foundation model infrastructure serving 2M+ monthly API requests with 99.97',
                symbol('%'),
                space,
                'uptime',
              ]),
              m.item(['Raised $18M Series A led by Sequoia Capital, with participation from a16z and Founders Fund']),
              m.item(['Scaled engineering team from 3 to 28 across ML research, platform, and applied AI divisions']),
              m.item([
                'Developed proprietary inference optimization reducing latency by 73',
                symbol('%'),
                space,
                'compared to baseline',
              ]),
            ),
            parbreak(),
          ),
        },
        blocks(inline`${strong(inline`Co-Founder & CTO`)}, Nexus AI -- San Francisco, CA`, parbreak()),
        blocks('June 2023 – present', parbreak()),
      ),
    ),
    inline(
      regularEntry(
        {
          mainColumnSecondRow: blocks(
            m.list(
              { tight: false },
              m.item(['Designed sparse attention mechanism reducing transformer memory footprint by 4.2x']),
              m.item([
                'Co-authored paper accepted at NeurIPS 2022 (spotlight presentation, top 5',
                symbol('%'),
                space,
                'of submissions)',
              ]),
            ),
            parbreak(),
          ),
        },
        blocks(inline`${strong(inline`Research Intern`)}, NVIDIA Research -- Santa Clara, CA`, parbreak()),
        blocks('May 2022 – Aug 2022', parbreak()),
      ),
    ),
    inline(
      regularEntry(
        {
          mainColumnSecondRow: blocks(
            m.list(
              { tight: false },
              m.item(['Developed reinforcement learning algorithms for multi-agent coordination']),
              m.item(
                ['Published research at top-tier venues with significant academic impact'],
                m.list(
                  { tight: false },
                  m.item(['ICML 2022 main conference paper, cited 340+ times within two years']),
                  m.item(['NeurIPS 2022 workshop paper on emergent communication protocols']),
                  m.item(['Invited journal extension in JMLR (2023)']),
                ),
              ),
            ),
            parbreak(),
          ),
        },
        blocks(inline`${strong(inline`Research Intern`)}, Google DeepMind -- London, UK`, parbreak()),
        blocks('May 2021 – Aug 2021', parbreak()),
      ),
    ),
    inline(
      regularEntry(
        {
          mainColumnSecondRow: blocks(
            m.list(
              { tight: false },
              m.item(['Created on-device neural network compression pipeline deployed across 50M+ devices']),
              m.item(['Filed 2 patents on efficient model quantization techniques for edge inference']),
            ),
            parbreak(),
          ),
        },
        blocks(inline`${strong(inline`Research Intern`)}, Apple ML Research -- Cupertino, CA`, parbreak()),
        blocks('May 2020 – Aug 2020', parbreak()),
      ),
    ),
    inline(
      regularEntry(
        {
          mainColumnSecondRow: blocks(
            m.list(
              { tight: false },
              m.item(['Implemented novel self-supervised learning framework for low-resource language modeling']),
              m.item([
                'Research integrated into Azure Cognitive Services, reducing training data requirements by 60',
                symbol('%'),
              ]),
            ),
            parbreak(),
          ),
        },
        blocks(inline`${strong(inline`Research Intern`)}, Microsoft Research -- Redmond, WA`, parbreak()),
        blocks('May 2019 – Aug 2019', parbreak()),
      ),
    ),
    m.heading(2, 'Projects'),
    inline(
      regularEntry(
        {
          mainColumnSecondRow: blocks(
            inline(summary(inline`Open-source library for high-performance LLM inference kernels`)),
            m.list(
              { tight: false },
              m.item(['Achieved 2.8x speedup over baseline attention implementations on A100 GPUs']),
              m.item(['Adopted by 3 major AI labs, 8,500+ GitHub stars, 200+ contributors']),
            ),
            parbreak(),
          ),
        },
        blocks(inline(strong(inline(link_2('https://github.com/', inline`FlashInfer`)))), parbreak()),
        blocks('Jan 2023 – present', parbreak()),
      ),
    ),
    inline(
      regularEntry(
        {
          mainColumnSecondRow: blocks(
            inline(summary(inline`Automated neural network pruning toolkit with differentiable masks`)),
            m.list(
              { tight: false },
              m.item([
                'Reduced model size by 90',
                symbol('%'),
                space,
                'with less than 1',
                symbol('%'),
                space,
                'accuracy degradation on ImageNet',
              ]),
              m.item(['Featured in PyTorch ecosystem tools, 4,200+ GitHub stars']),
            ),
            parbreak(),
          ),
        },
        blocks(inline(strong(inline(link_2('https://github.com/', inline`NeuralPrune`)))), parbreak()),
        blocks('Jan 2021', parbreak()),
      ),
    ),
    m.heading(2, 'Publications'),
    inline(
      regularEntry(
        {
          mainColumnSecondRow: blocks(
            inline`${emph(inline`John Doe`)}, Sarah Williams, David Park`,
            inline`${link_2('https://doi.org/10.1234/neurips.2023.1234', inline`10.1234${symbol('/')}neurips.2023.1234`)}
(NeurIPS 2023)`,
            parbreak(),
          ),
        },
        blocks(
          inline(strong(inline`Sparse Mixture-of-Experts at Scale: Efficient Routing for Trillion-Parameter Models`)),
          parbreak(),
        ),
        blocks('July 2023', parbreak()),
      ),
    ),
    inline(
      regularEntry(
        {
          mainColumnSecondRow: blocks(
            inline`James Liu, ${emph(inline`John Doe`)}`,
            inline`${link_2('https://doi.org/10.1234/neurips.2022.5678', inline`10.1234${symbol('/')}neurips.2022.5678`)}
(NeurIPS 2022, Spotlight)`,
            parbreak(),
          ),
        },
        blocks(inline(strong(inline`Neural Architecture Search via Differentiable Pruning`)), parbreak()),
        blocks('Dec 2022', parbreak()),
      ),
    ),
    inline(
      regularEntry(
        {
          mainColumnSecondRow: blocks(
            inline`Maria Garcia, ${emph(inline`John Doe`)}, Tom Anderson`,
            inline`${link_2('https://doi.org/10.1234/icml.2022.9012', inline`10.1234${symbol('/')}icml.2022.9012`)}
(ICML 2022)`,
            parbreak(),
          ),
        },
        blocks(inline(strong(inline`Multi-Agent Reinforcement Learning with Emergent Communication`)), parbreak()),
        blocks('July 2022', parbreak()),
      ),
    ),
    inline(
      regularEntry(
        {
          mainColumnSecondRow: blocks(
            inline`${emph(inline`John Doe`)}, Kevin Wu`,
            inline`${link_2('https://doi.org/10.1234/iclr.2021.3456', inline`10.1234${symbol('/')}iclr.2021.3456`)}
(ICLR 2021, Best Paper Award)`,
            parbreak(),
          ),
        },
        blocks(inline(strong(inline`On-Device Model Compression via Learned Quantization`)), parbreak()),
        blocks('May 2021', parbreak()),
      ),
    ),
    m.heading(2, 'Selected Honors'),
    m.list(
      { tight: false },
      m.item(['MIT Technology Review 35 Under 35 Innovators (2024)']),
      m.item(['Forbes 30 Under 30 in Enterprise Technology (2024)']),
      m.item(['ACM Doctoral Dissertation Award Honorable Mention (2023)']),
      m.item(['Google PhD Fellowship in Machine Learning (2020 – 2023)']),
      m.item(['Fulbright Scholarship for Graduate Studies (2018)']),
    ),
    m.heading(2, 'Skills'),
    inline`${strong(inline`Languages:`)} Python, C++, CUDA, Rust, Julia`,
    inline`${strong(inline`ML Frameworks:`)} PyTorch, JAX, TensorFlow, Triton, ONNX`,
    inline`${strong(inline`Infrastructure:`)} Kubernetes, Ray, distributed training, AWS, GCP`,
    inline`${strong(inline`Research Areas:`)} Neural architecture search, model compression, efficient
inference, multi-agent RL`,
    m.heading(2, 'Patents'),
    m.enum(
      { tight: false },
      m.item(['Adaptive Quantization for Neural Network Inference on Edge Devices (US Patent 11,234,567)']),
      m.item(['Dynamic Sparsity Patterns for Efficient Transformer Attention (US Patent 11,345,678)']),
      m.item(['Hardware-Aware Neural Architecture Search Method (US Patent 11,456,789)']),
    ),
    m.heading(2, 'Invited Talks'),
    inline(
      reversedNumberedEntries(
        blocks(
          parbreak(),
          m.enum(
            { tight: false },
            m.item(['Scaling Laws for Efficient Inference — Stanford HAI Symposium (2024)']),
            m.item(['Building AI Infrastructure for the Next Decade — TechCrunch Disrupt (2024)']),
            m.item(['From Research to Production: Lessons in ML Systems — NeurIPS Workshop (2023)']),
            m.item([
              'Efficient Deep Learning: A Practitioner',
              smartquote({ double: false }),
              's Perspective — Google Tech Talk (2022)',
            ]),
          ),
        ),
      ),
    ),
    m.heading(2, 'Any Section Title'),
    'You can use any section title you want.',
    inline`You can choose any entry type for the section: ${raw('TextEntry')}, ${raw('ExperienceEntry')},
${raw('EducationEntry')}, ${raw('PublicationEntry')}, ${raw('BulletEntry')}, ${raw('NumberedEntry')},
or ${raw('ReversedNumberedEntry')}.`,
    'Markdown syntax is supported everywhere.',
    inline`The ${raw('design')} field in YAML gives you control over almost any aspect of your CV design.`,
    inline`See the ${link_2('https://docs.rendercv.com', inline`documentation`)} for more details.`,
  )
}
