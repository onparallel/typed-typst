// Typst 0.15.1 test suite: tests/suite/text/raw.typ, case issue-3841-tabs-in-raw-type-code.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Tab chars were not rendered in raw blocks with lang: "typ(c)"
#raw("#if true {\n\tf()\t// typ\n}", lang: "typ")

#raw("if true {\n\tf()\t// typc\n}", lang: "typc")

```typ
#if true {
	// tabs around f()
	f()	// typ
}
```

```typc
if true {
	// tabs around f()
	f()	// typc
}
```
