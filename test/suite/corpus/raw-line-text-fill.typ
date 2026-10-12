// Typst 0.15.1 test suite: tests/suite/text/raw.typ, case raw-line-text-fill.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#set page(width: 200pt)
#show raw.line: set text(fill: red)

```py
import numpy as np

def f(x):
    return x**2

x = np.linspace(0, 10, 100)
y = f(x)

print(x)
print(y)
```
