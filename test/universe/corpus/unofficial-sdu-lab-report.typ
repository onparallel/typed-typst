// Typst Universe template @preview/unofficial-sdu-lab-report:0.1.1, main.typ.
// By its authors, MIT (https://typst.app/universe/package/unofficial-sdu-lab-report).
#import "@preview/unofficial-sdu-lab-report:0.1.1": *

#show: report.with(
    partner: "",
    student-name: "",
    student-grade: "",
    student-group: "",
    course: "",
    lab-title: "",
    lab-date: datetime.today(),
    tool-group: "",
    logo: image("sdu-logo.png"),
)
