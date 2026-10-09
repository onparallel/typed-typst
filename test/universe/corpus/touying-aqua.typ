// Typst Universe template @preview/touying-aqua:0.8.0, main.typ.
// By its authors, MIT (https://typst.app/universe/package/touying-aqua).
#import "@preview/touying:0.8.0": *
#import themes.aqua: *

#show: aqua-theme.with(
  aspect-ratio: "16-9",
  config-info(
    title: [Start Your Writing in Touying],
    subtitle: [Subtitle],
    author: [Author],
    date: datetime.today(),
    institution: [Institution],
  ),
)

#title-slide()

#outline-slide()

= The Section

== Slide Title

Slide content.
