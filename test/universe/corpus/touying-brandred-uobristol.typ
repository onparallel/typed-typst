// Typst Universe template @preview/touying-brandred-uobristol:0.2.0, main.typ.
// By its authors, MIT (https://typst.app/universe/package/touying-brandred-uobristol).
#import "@preview/touying-brandred-uobristol:0.2.0": *

// Specify `lang` and `font` for the theme if needed.
#show: uobristol-theme.with(
  // lang: "zh",
  // font: ("Linux Libertine", "Source Han Sans SC", "Source Han Sans"),
  config-info(
    title: [Title Here],
    subtitle: [Subtitle Here],
    author: [Authors],
    date: datetime.today(),
    institution: [Institution],
  ),
  config-common(
    datetime-format: "[day] [month repr:short] [year]"
  )
)

#title-slide()

#outline-slide()

= First Section

== Slide 1

Slide content.
