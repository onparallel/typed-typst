// Typst 0.15.1 test suite: tests/suite/layout/inline/justify.typ, case justify-code-blocks.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test that justification doesn't break code blocks
#set par(justify: true)

```cpp
int main() {
  printf("Hello world\n");
  return 0;
}
```
