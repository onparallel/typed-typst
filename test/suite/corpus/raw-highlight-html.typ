// Typst 0.15.1 test suite: tests/suite/text/raw.typ, case raw-highlight-html.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#set page(width: auto)

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
  </head>
  <body>
    <h1>Topic</h1>
    <p>The Hypertext Markup Language.</p>
    <script>
      function foo(a, b) {
        return a + b + "string";
      }
    </script>
  </body>
</html>
```
