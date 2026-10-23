# Statistics and Mechanics Year 1, Chapter 11: variable acceleration by calculus.
import sympy as sp
t = sp.symbols('t', real=True)
D = lambda f: sp.diff(f, t)
I = lambda f, a, b: sp.integrate(f, (t, a, b))
pos_roots = lambda f: sorted(float(r) for r in sp.solve(f, t) if r >= 0)
def distance(v, a, b):
    cuts = [a] + [r for r in pos_roots(v) if a < r < b] + [b]
    return float(sum(abs(I(v, c1, c2)) for c1, c2 in zip(cuts, cuts[1:])))
f = lambda e, x: float(e.subs(t, x))
# 11.1
check('A11.1-1-3', [f(4*t + 2*t**2, 3), 10, 5], [30, 10, 5], 1e-9)
check('A11.1-4', pos_roots(t**3 - 6*t**2 + 9*t), [0, 3], 1e-9); check('A11.1-5', pos_roots(t**2 - 4*t + 3), [1, 3], 1e-9)
check('A11.1-6', [f(2*t**2 - 8*t, 2), f(2*t**2 - 8*t, 5)], [-8, 10], 1e-9); check('A11.1-7', pos_roots(20*t - 5*t**2), [0, 4], 1e-9)
v = 6 + t - t**2; check('A11.1-8', [pos_roots(v)[0], f(v, 4)], [3, -6], 1e-9)
check('A11.1-9', pos_roots(t**3 - 9*t**2 + 24*t - 16), [1, 4], 1e-6); check('A11.1-10', pos_roots(4 - t**2), [2], 1e-9)
check('A11.1-11', [pos_roots(3*t**2 - t**3)[-1], f(3*t**2 - t**3, 1)], [3, 2], 1e-9)
T = pos_roots((t**2 + 2*t) - (12 + 4*t - t**2))[0]; check('A11.1-12', [T, T**2 + 2*T], [3, 15], 1e-9)
check('A11.1-13', pos_roots(t**2 - 5*t + 6), [2, 3], 1e-9); s = t*(t - 4)**2; check('A11.1-14', [f(s, 1), f(s, 6)], [9, 24], 1e-9)
s = t**3 - 7*t**2 + 10*t; check('A11.1-15', [*pos_roots(s), f(s, 3), f(s, 1)], [0, 2, 5, -6, 4], 1e-9)
# 11.2
exact('A11.2-1', D(3*t**2 + 2*t), 6*t + 2); exact('A11.2-2', D(4*t**3 - t), 12*t**2 - 1); check('A11.2-3', f(D(D(t**3)), 2), 12, 1e-9)
s = 2*t**3 - 9*t**2 + 12*t; check('A11.2-4', pos_roots(D(s)), [1, 2], 1e-9); check('A11.2-5', f(D(5*t - t**2), 4), -3, 1e-9)
check('A11.2-6', f(D(8*t - 2*t**2), 3), -4, 1e-9); check('A11.2-7', [r for r in pos_roots(D(D(t**4 - 4*t**3))) if r > 0], [2], 1e-9)
s = t**3 - 6*t**2 + 9*t; check('A11.2-8', [*pos_roots(D(s)), f(s, 1), f(s, 3)], [1, 3, 4, 0], 1e-9)
v = 2*t**2 - 12*t + 10; check('A11.2-9', [f(D(v), r) for r in pos_roots(v)], [-8, 8], 1e-9)
check('A11.2-10', f(D(4*sp.sqrt(t)), 4), 1, 1e-9)
check('A11.2-11', distance(D(t**3 - 9*t**2 + 24*t), 0, 4), 24, 1e-9); check('A11.2-12', distance(3*t**2 - 12*t + 9, 0, 3), 8, 1e-9)
s = 2*t**3 - 15*t**2 + 36*t; check('A11.2-13', [f(D(D(s)), r) for r in pos_roots(D(s))], [-6, 6], 1e-9)
check('A11.2-14', 0.5*f(D(D(t**3 - 2*t**2)), 3), 7, 1e-9)
s = t**3 - 6*t**2 + 9*t + 2; check('A11.2-15', [*pos_roots(D(s)), f(D(D(s)), 1), f(D(D(s)), 3), distance(D(s), 0, 4)], [1, 3, -6, 6, 12], 1e-9)
# 11.3
def extreme(e, which):  # value at the stationary point of e
    r = pos_roots(D(e)); return [f(e, x) for x in r]
check('A11.3-1', extreme(12*t - 3*t**2, 'max'), [12], 1e-9); check('A11.3-2', extreme(20*t - 5*t**2, 'max'), [20], 1e-9)
check('A11.3-4', extreme(6*t - t**2, 'max'), [9], 1e-9); s = 24*t - 2*t**3; check('A11.3-5-6', [*extreme(s, 'max'), f(D(D(s)), 2)], [32, -24], 1e-9)
check('A11.3-7', extreme(2 + 8*t - 2*t**2, 'max'), [10], 1e-9); check('A11.3-8', extreme(t**2 - 6*t + 10, 'min'), [1], 1e-9)
v = t**2 - 2*t - 3; check('A11.3-9', max(abs(f(v, x)) for x in [0, 1, 4]), 5, 1e-9)
s = t**3 - 6*t**2; check('A11.3-10', max(abs(f(s, x)) for x in [0, 4, 5]), 32, 1e-9)
check('A11.3-11', extreme(4*t - t**3, 'max'), [3.08], 0.006); check('A11.3-12', extreme(t**3 - 12*t + 5, 'min'), [-11], 1e-9)
check('A11.3-13', [x for x in extreme(0.3*t**2 - 0.01*t**3, 'max') if x > 1], [40], 1e-9)
check('A11.3-14', extreme(D(9*t**2 - t**3), 'max'), [27], 1e-9)
v = 0.2*t*(10 - t); check('A11.3-15', [*extreme(v, 'max'), f(D(v), 2), max(abs(f(D(v), x)) for x in [0, 10])], [5, 1.2, 2], 1e-9)
# 11.4
check('A11.4-1-3', [f(sp.integrate(3*t**2, t), 2), f(sp.integrate(6*t, t) + 2, 1), float(I(4*t, 0, 2))], [8, 5, 8], 1e-9)
exact('A11.4-4', sp.integrate(6*t**2 - 2*t, t) + 5, 2*t**3 - t**2 + 5); check('A11.4-5', f(sp.integrate(4 - 2*t, t), 3), 3, 1e-9)
check('A11.4-6', float(I(t**2 + 1, 1, 3)), 10.67, 0.006); check('A11.4-7', distance(12 - 3*t**2, 0, 2), 16, 1e-9)
check('A11.4-8', distance(t**2 - 4*t + 3, 0, 3), 8/3, 1e-9)
s = sp.integrate(sp.integrate(6*t - 4, t), t); check('A11.4-9', [r for r in pos_roots(s) if r > 0], [2], 1e-9)
check('A11.4-10', distance(0.2*t*(10 - t), 0, 10), 33.3, 0.04); check('A11.4-11', distance(3*t**2 - 12*t + 9, 0, 4), 12, 1e-9)
v = sp.integrate(2*t - 6, t) + 8; check('A11.4-12', [*pos_roots(v), float(I(v, 0, 2))], [2, 4, 6.67], 0.004)
k = sp.symbols('k'); check('A11.4-13', float(sp.solve(I(k*t*(4 - t), 0, 4) - 32, k)[0]), 3, 1e-9)
check('A11.4-14', float(I(2*t, 0, 3)) + 6*2, 21, 1e-9)
v = sp.integrate(6 - 2*t, t) + 7; T = pos_roots(v)[-1]; check('A11.4-15', [T, float(I(v, 0, T)), *extreme(v, 'max')], [7, 81.7, 16], 0.04)
# 11.5
check('A11.5-8', [float(I(3 + 2*t, 0, 4)), 3*4 + 0.5*2*16], [28, 28], 1e-9); check('A11.5-10', f(D(t**3 + 2*t), 2), 14, 1e-9)
s = 5 - 3*t + t**2; check('A11.5-12', extreme(s, 'min'), [2.75], 1e-9); check('A11.5-13', [36/4, float(I(6 - 2*t, 0, 3))], [9, 9], 1e-9)
check('A11.5-14', 0.5*4*9 + 12*2, 42, 1e-9)
s = 1 + sp.integrate(5 - 2*t, t); check('A11.5-15', [*extreme(s, 'max'), pos_roots(s)[-1]], [7.25, 5.19], 0.006)
