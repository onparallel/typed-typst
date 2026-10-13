# Changelog

## [0.15.102](https://github.com/onparallel/typed-typst/compare/v0.15.101...v0.15.102) (2026-10-13)


### Features

* initial release ([cb30524](https://github.com/onparallel/typed-typst/commit/cb30524e03c397246cb5f7abf27c96cf0044f44e))
* **node:** one typst() with the commands of the CLI: compile, eval, version ([2aa879d](https://github.com/onparallel/typed-typst/commit/2aa879d8a8f7b0f2c7181f8039b59932fbeb6039))
* **node:** query a document's elements; read the PDF without blocking ([5f419d1](https://github.com/onparallel/typed-typst/commit/5f419d137a07cb8002789d9d61cb701d7dcd4cc6))
* **node:** reject a timeout with a TimeoutError and an abort with the signal's reason ([d8fc1dc](https://github.com/onparallel/typed-typst/commit/d8fc1dc61b3e8693c4ce80473071dff7ca9ee6e0))

## Changelog

Versions name the Typst version of the bindings: Typst `a.b.c` is
`a.b.(c × 100 + r)`, where `r` counts the releases for that Typst version
(see the README). Each entry says whether it changes the library's API.
