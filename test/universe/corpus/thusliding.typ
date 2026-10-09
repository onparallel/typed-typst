// Typst Universe template @preview/thusliding:0.0.1, main.typ.
// By its authors, MIT-0 (https://typst.app/universe/package/thusliding).
#import "@preview/thusliding:0.0.1" : slides

#show: slides.with(
  title: "Tsinghua University", // Required
  subtitle: "The best university in China", // Optional
  date: "01.07.2024",
  authors: (
    "name": "Your Name",
    "affiliation": "Some information",
    // "email": "liujk22@mails.tsinghua.edu.cn",
    // Arbitrary number of informations can be added
  ),

  // The configurations belows should not be changed
  ratio: 16/9,
  layout: "medium",
  toc: true,
)

= First Section
== First Slide
#lorem(20)
/ *Term*: Definition
#lorem(20)

== Second Slide
#lorem(200)
