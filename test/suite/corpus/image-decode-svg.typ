// Typst 0.15.1 test suite: tests/suite/visualize/image.typ, case image-decode-svg.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test parsing from svg data
#image(bytes(`<svg xmlns="http://www.w3.org/2000/svg" height="140" width="500"><ellipse cx="200" cy="80" rx="100" ry="50" style="fill:yellow;stroke:purple;stroke-width:2" /></svg>`.text), format: "svg")
