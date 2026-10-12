// Typst Universe template @preview/october:1.0.1, main.typ.
// By its authors, MIT-0 (https://typst.app/universe/package/october).
#import "@preview/october:1.0.1": calendar

#set page(
  "a4",
  flipped: true,
  margin: 8%,
)
#set text(size: 14pt)

#show: calendar.with(
  year: datetime.today().year(),
)
