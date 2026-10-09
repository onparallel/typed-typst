// Typst 0.15.1 test suite: tests/suite/visualize/image.typ, case image-svg-auto-detection.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#image(bytes(
  ```
  <?xml version="1.0" encoding="utf-8"?>
  <!-- An SVG -->
  <svg width="200" height="150" xmlns="http://www.w3.org/2000/svg">
    <rect fill="red" stroke="black" x="25" y="25" width="150" height="100"/>
  </svg>
  ```.text
))
