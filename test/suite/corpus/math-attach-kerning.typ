// Typst 0.15.1 test suite: tests/suite/math/attach.typ, case math-attach-kerning, attributes: paged html.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test math kerning.
#show math.equation: set text(font: "STIX Two Math")

$ L^A Y^c R^2 delta^y omega^f a^2 t^w gamma^V p^+ \
  b_lambda f_k p_i x_1 x_j x_A y_l y_y beta_s theta_k \
  J_0 Y_0 T_1 T_f V_a V_A F_j cal(F)_j lambda_y \
  attach(W, tl: l) attach(A, tl: 2) attach(cal(V), tl: beta)
  attach(cal(P), tl: iota) attach(f, bl: i) attach(A, bl: x)
  attach(cal(J), bl: xi) attach(cal(A), bl: m) $
