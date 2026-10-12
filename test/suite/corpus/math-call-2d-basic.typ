// Typst 0.15.1 test suite: tests/suite/math/call.typ, case math-call-2d-basic, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Two-dimensional arguments in math. More tests can be found in `mat.typ`.
#let args(..body) = body
#let check(it, r) = test-repr(it.body.text, r)
#check($args(a;b)$, "arguments(([a],), ([b],))")
#check($args(a,b;c)$, "arguments(([a], [b]), ([c],))")
#check($args(a,b;c,d;e,f)$, "arguments(([a], [b]), ([c], [d]), ([e], [f]))")
#check($args( a; b; )$, "arguments(([a],), ([b],))")
#check($args(a;  ; c)$, "arguments(([a],), ([],), ([c],))")
#check($args(a b,/**/; b)$, "arguments((sequence([a], [ ], [b]), []), ([b],))")
#check($args(a/**/b, ; b)$, "arguments((sequence([a], [b]), []), ([b],))")
#check($args( ;/**/a/**/b/**/; )$, "arguments(([],), (sequence([a], [b]),))")
#check($args( ; , ; )$, "arguments(([],), ([], []))")
#check($args(/**/; // funky whitespace/trivia
    ,   /**/  ;/**/)$, "arguments(([],), ([], []))")
