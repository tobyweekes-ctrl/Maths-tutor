# Statistics and Mechanics Year 1, Chapter 8: modelling, units and vectors.
import math, sympy as sp
t, v, a, b = sp.symbols('t v a b')
pos = lambda eq: [float(r) for r in sp.solve(eq, t if eq.has(t) else v) if r.is_real and r > 0]
h = 1.5 + 20*t - sp.Rational(49, 10)*t**2
check('A8.1-2-5', [float(h.subs(t, 0)), float(h.subs(t, 2)), pos(h)[0], float(h.subs(t, sp.solve(sp.diff(h, t), t)[0]))], [1.5, 21.9, 4.16, 21.9], 0.01)
d = sp.Rational(7, 10)*v + sp.Rational(7, 100)*v**2; check('A8.1-7-8', [float(d.subs(v, 20)), pos(d - 60)[0]], [42, 24.7], 0.006)
s = 50*(1 - sp.exp(-sp.Rational(1, 5)*t)); check('A8.1-11', [float(s.subs(t, 5)), float(sp.limit(s, t, sp.oo))], [31.6, 50], 0.05)
check('A8.1-12', list(sp.solve([a - 2, a + b - sp.Rational(49, 10) - sp.Rational(171, 10)], [a, b]).values()), [2, 20], 1e-9)
check('A8.1-13', list(sp.solve([10*a + 100*b - 14, 20*a + 400*b - 42], [a, b]).values()), [0.7, 0.07], 1e-9)
check('A8.1-14', float(sp.solve(s - 45, t)[0]), 11.5, 0.05)
h2 = sp.Rational(6, 5) + 14*t - sp.Rational(49, 10)*t**2; r8 = sorted(pos(h2 - 8))
check('A8.1-15', [float(h2.subs(t, sp.Rational(14, 98)*10)), pos(h2)[0], r8[1] - r8[0]], [11.2, 2.94, 1.62], 0.006)
check('A8.2-10', [math.sqrt(20/4.9), 9.8*math.sqrt(20/4.9)], [2.02, 19.8], 0.006); check('A8.2-15', 570*9.8, 5586, 1e-9)
# 8.3
check('A8.3', [72*1000/3600, 5*9.8, 5e-3/1e-6, 500/60, 36000*1000/3600**2, 0.25*9.8, 2500*9.8, 2500*2, 30/(25/60), 30000/1500], [20, 49, 5000, 8.33, 2.78, 2.45, 24500, 5000, 72, 20], 0.006)
check('A8.3-8', [3 + 4, math.hypot(3, 4), math.degrees(math.atan2(3, 4))], [7, 5, 37], 0.2)
check('A8.3-15', [1400, math.hypot(600, 800), math.degrees(math.atan2(800, 600)), 1400/1200, 1000/1200], [1400, 1000, 53.1, 1.17, 0.833], 0.05)
# 8.4
check('A8.4-1-3', [math.hypot(3, 4), math.hypot(5, -12), math.degrees(math.atan2(2, 2))], [5, 13, 45], 1e-9)
check('A8.4-4', [7 - 2, -1 - 3, math.hypot(5, -4)], [5, -4, 6.40], 0.006); check('A8.4-5', [2, 7, math.hypot(2, 7)], [2, 7, 7.28], 0.006)
check('A8.4-6', math.degrees(math.atan(3/4)), 36.9, 0.05)
check('A8.4-7', [6*math.sin(math.radians(60)), 6*math.cos(math.radians(60))], [5.20, 3], 0.006)
check('A8.4-8', math.degrees(math.atan2(-3, 4)) % 360, 323.1, 0.06)
check('A8.4-9', [3 + 2*5, 4 - 5], [13, -1], 1e-9); check('A8.4-10', 2*6/3, 4, 1e-9); check('A8.4-11', [15*6/10, 15*8/10], [9, 12], 1e-9)
AB = lambda T: ((8 + T) - (2 + 3*T), (2 + T) - (5 - T))
check('A8.4-12', [*AB(0), math.hypot(*AB(2))], [6, -3, 2.24], 0.006); check('A8.4-13', [3, AB(3)[0], AB(3)[1]], [3, 0, 3], 1e-9)
check('A8.4-14', [math.hypot(2, 5), math.degrees(math.atan2(5, 2))], [5.39, 68.2], 0.006)
P = lambda T: (-2 + 4*T, 3 + 2*T); Q = lambda T: (10 - 2*T, -3 + 5*T)
check('A8.4-15', [*P(2), *Q(2), math.dist(P(1), Q(1))], [6, 7, 6, 7, 6.71], 0.006)
