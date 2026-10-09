// Converted from test/universe/corpus/academicv.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  codeBlock,
  define,
  doc,
  em,
  external,
  importPackage,
  inline,
  let_,
  link,
  page,
  path,
  pt,
  rgb,
  set,
  show,
  text,
  unsafeRaw,
  yaml,
} from '../../../src/index.ts'

export default () => {
  const convertStringToLength = external('convert-string-to-length')
  const convertStringToColor = external('convert-string-to-color')
  const cvinit = external('cvinit')
  const setrules = external('setrules')
  const showrules = external('showrules')
  const layoutHeader = external('layout-header')
  const getSectionData = external('get-section-data')
  const cvsection = external('cvsection')
  const [cvDataDecl, cvData] = let_('cv-data', yaml(path('template.yml')))
  const [defaultSettingsDecl, defaultSettings] = let_('default-settings', {
    fontHeading: 'Libertinus Serif',
    fontBody: 'Libertinus Serif',
    fontsize: pt(10),
    spacingSection: pt(12),
    spacingEntry: em(0.1),
    spacingElement: pt(3),
    spacingLine: pt(5),
    colorHyperlink: rgb(0, 0, 255),
  })
  const customrules = define('customrules')
    .pos('doc', T.any)
    .returns(T.any)
    .body((p) =>
      codeBlock(
        [
          set(page, {
            paper: unsafeRaw.code<any>`if "page" in settings and "paper" in settings.page { 
          settings.page.paper 
        } else { 
          "a4" 
        }`,
            numbering: unsafeRaw.code<any>`if "page" in settings and "numbering" in settings.page { 
          settings.page.numbering 
        } else { 
          "1 / 1" 
        }`,
            numberAlign: unsafeRaw.code<any>`if "page" in settings and "number-align" in settings.page { 
          // Convert string align values to actual Typst align values
          let align = settings.page.number-align
          if align == "center" { center } 
          else if align == "left" { left } 
          else if align == "right" { right }
          else { center }  // Default
        } else { 
          center 
        }`,
            margin: unsafeRaw.code<any>`if "page" in settings and "margin" in settings.page { 
          settings.page.margin 
        } else { 
          3.5cm 
        }`,
          }),
          show(link, (it, ctx) =>
            codeBlock(
              [],
              text(
                {
                  fill: unsafeRaw.code<any>`if "color-hyperlink" in settings { 
              settings.color-hyperlink 
            } else { 
              rgb(0, 0, 255) // Default blue
            }`,
                },
                inline(it),
              ),
            ),
          ),
        ],
        p['doc'],
      ),
    )
  const cvinit_2 = define('cvinit')
    .pos('doc', T.any)
    .returns(T.any)
    .body((p) =>
      codeBlock([
        unsafeRaw.code<any>`doc = setrules(settings, doc)`,
        unsafeRaw.code<any>`doc = showrules(settings, doc)`,
        unsafeRaw.code<any>`doc = customrules(doc)`,
        p['doc'],
      ]),
    )
  return doc(
    importPackage('@preview/academicv:1.0.0', [
      convertStringToLength,
      convertStringToColor,
      cvinit,
      setrules,
      showrules,
      layoutHeader,
      getSectionData,
      cvsection,
    ]),
    cvDataDecl,
    inline(unsafeRaw.code<any>`for section in cv-data.sections {
  if "key" not in section {
    panic("Missing 'key' in section: " + str(section))
  }
  if "layout" not in section {
    panic("Missing 'layout' in section with key: " + section.key)
  }
  if "title" not in section and section.key != "personal" {
    warn("Missing 'title' in section with key: " + section.key)
  }
}`),
    unsafeRaw.markup`#let settings = cv-data.settings`,
    defaultSettingsDecl,
    unsafeRaw.markup`#let settings = if settings != none {
  // First add any missing settings from defaults
  for (k, v) in default-settings {
    if k not in settings {
      settings.insert(k, v)
    }
  }
  
  // Convert length strings to actual length values
  let settings-length = ("fontsize", "spacing-line", "spacing-section", "spacing-entry", "spacing-element")

  // Page settings separately
  for setting in settings-length {
    settings.at(setting) = convert-string-to-length(settings.at(setting))
  }
  if "page" in settings and "margin" in settings.page {
    settings.page.margin = convert-string-to-length(settings.page.margin)
  }

  // Convert color strings to actual colors
  let settings-color = ("color-hyperlink",)
  for setting in settings-color {
    settings.at(setting) = convert-string-to-color(settings.at(setting))
  }
  
  settings
} else {
  default-settings
}`,
    customrules.decl,
    cvinit_2.decl,
    show((doc_2, ctx_2) => cvinit_2(doc_2)),
    inline(unsafeRaw.code<any>`if "sections" in cv-data {
  for section in cv-data.sections {
    if section.at("show", default: true) == true {
      if section.key == "personal" {
        // Special case for personal/heading section
        layout-header(cv-data, settings)
      } else {
        // Standard sections
        let layout = section.layout
        let key = section.key
        let title = section.title
        
        // Get the data for this section
        let section-data = get-section-data(section, cv-data)
        
        // Create a temporary dictionary with just this section's data
        let temp-data = (
          personal: cv-data.personal,  // Keep personal for reference
          (key): section-data.entries,  // Add this section's entries
        )
        
        // Add layout configuration if present
        if "primary-element" in section-data {
          temp-data.insert("primary-element", section-data.primary-element)
        }
        if "secondary-element" in section-data {
          temp-data.insert("secondary-element", section-data.secondary-element)
        }
        if "tertiary-element" in section-data {
          temp-data.insert("tertiary-element", section-data.tertiary-element)
        }
        
        // Call cvsection with the appropriate data
        cvsection(temp-data, layout: layout, section: key, settings: settings, title: title)
      }
    }
  }
}`),
  )
}
