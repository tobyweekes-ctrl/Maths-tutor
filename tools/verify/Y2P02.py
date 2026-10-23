# Pure Year 2, Chapter 2: functions and graphs. Modulus equations are solved by brute-force case checks.
import sympy as sp, math
x = sp.symbols('x', real=True)
sols = lambda e: sorted(float(s) for s in sp.solve(e, x))
def mod_sols(lhs, rhs):
    """Real solutions of lhs = rhs where either side may contain Abs (sympy handles the cases)."""
    return sorted(float(s) for s in sp.solveset(sp.Eq(lhs, rhs), x, domain=sp.S.Reals))
def ineq(e):  # set where e holds, as a sympy set
    return sp.solveset(e, x, domain=sp.S.Reals)
A = sp.Abs
# 2.1
check('2P2.1-1-2', [abs(-7) + abs(3), *mod_sols(A(x), 5)], [10, -5, 5], 1e-9)
check('2P2.1-4', mod_sols(A(2*x - 3), 7), [-2, 5], 1e-9); check('2P2.1-6', mod_sols(A(x + 1), 2*x), [1], 1e-9)
check('2P2.1-7', mod_sols(3*A(x - 1) - 6, 0), [-1, 3], 1e-9); check('2P2.1-8', mod_sols(A(3*x - 2), x + 4), [-0.5, 3], 1e-9)
check('2P2.1-9', ineq(A(x - 3) < 5) == sp.Interval.open(-2, 8), True, 0)
check('2P2.1-10', ineq(A(2*x + 1) > 3) == sp.Union(sp.Interval.open(-sp.oo, -2), sp.Interval.open(1, sp.oo)), True, 0)
check('2P2.1-11', mod_sols(A(x), 4 - x/2), [-8, 8/3], 1e-9); check('2P2.1-12', mod_sols(A(x - 2), 3*x + 6), [-1], 1e-9)
check('2P2.1-13', mod_sols(2*A(x) - 3, x), [-1, 3], 1e-9); check('2P2.1-14', ineq(A(x - 1) <= 2*x + 1) == sp.Interval(0, sp.oo), True, 0)
f = 4 - A(2*x - 3); check('2P2.1-15', [*mod_sols(f, 0), *mod_sols(f, x), float(f.subs(x, 1.5))], [-0.5, 3.5, -1, 7/3, 4], 1e-9)
# 2.2
check('2P2.2-1-6', [2*4 + 3, 1**2 + (8 - 2*3)], [11, 3], 0)
check('2P2.2-5', [2*0 - 1, 2*5 - 1], [-1, 9], 0); check('2P2.2-8', float(sp.minimum(x**2 - 6*x + 10, x)), 1, 1e-9)
check('2P2.2-9', [s for s in sols(x**2 - 5) if s < 2] + [s for s in sols(8 - 2*x - 5) if s >= 2], [-5**0.5], 1e-9)
g = 3 - 2*x**2; check('2P2.2-11', [float(sp.maximum(g, x, sp.Interval(-1, 2))), float(sp.minimum(g, x, sp.Interval(-1, 2)))], [3, -5], 1e-9)
a = sp.symbols('a'); check('2P2.2-12', float(sp.solve(2*a + 1 - 3, a)[0]), 1, 1e-9)
check('2P2.2-13', [float(sp.solve(sp.diff(x**2 - 4*x + 1, x), x)[0]), float(sp.minimum(x**2 - 4*x + 1, x))], [2, -3], 1e-9)
check('2P2.2-14', [-1 + 4, 2, 6, 10 - 2], [3, 2, 6, 8], 0)
F = 2*x**2 - 8*x + 5; exact('2P2.2-15', sp.expand(2*(x - 2)**2 - 3 - F), 0); check('2P2.2-15c', sols(F - 15), [-1, 5], 1e-9)
# 2.3
f, g = lambda t: 2*t + 1, lambda t: t**2
check('2P2.3-1-2', [f(g(3)), g(f(3))], [19, 49], 0); check('2P2.3-4', sols(f(g(x)) - g(f(x))), [-2, 0], 1e-9)
exact('2P2.3-5', sp.expand(f(f(x))), 4*x + 3); exact('2P2.3-6', 3*(1/x) - 2 - (3/x - 2), 0)
check('2P2.3-7', math.sqrt(5 + 4), 3, 0); exact('2P2.3-8', sp.simplify(sp.exp(sp.log(2*x)) - 2*x), 0)
exact('2P2.3-8b', sp.simplify(sp.expand_log(sp.log(2*sp.exp(x)), force=True) - (x + sp.log(2))), 0)
check('2P2.3-9', sols(2*(x**2 + 1) - 1 - 7), [-3**0.5, 3**0.5], 1e-9)
h = lambda t: 1/(t - 1); exact('2P2.3-10', sp.simplify(h(h(x)) - (x - 1)/(2 - x)), 0)
p, q = lambda t: t**2 - 2*t, lambda t: t + 1; exact('2P2.3-12', sp.expand(p(q(x))), x**2 - 1); check('2P2.3-12b', sols(p(q(x)) - q(p(x))), [1], 1e-9)
check('2P2.3-13', float(sp.minimum(sp.exp(x**2 - 1), x)), math.exp(-1), 1e-9)
m = lambda t: (t + 3)/(t - 1); exact('2P2.3-14', sp.simplify(m(m(x)) - x), 0)
k = sp.symbols('k'); check('2P2.3-15', sorted(float(s) for s in sp.solve(12 + k - (3 + k)**2, k)), [-5.54, 0.541], 0.006)
# 2.4: check f(f^-1(x)) = x
y = sp.symbols('y')
inv = {'2P2.4-1': (3*x - 2, (x + 2)/3), '2P2.4-4': ((x + 5)/2, 2*x - 5), '2P2.4-5': (1/(x - 3), 3 + 1/x), '2P2.4-6': (sp.sqrt(x - 1), x**2 + 1),
       '2P2.4-7': (sp.exp(x) + 1, sp.log(x - 1)), '2P2.4-8': (x**2 - 4*x, 2 + sp.sqrt(x + 4)), '2P2.4-9': ((2*x + 1)/(x - 3), (3*x + 1)/(x - 2)),
       '2P2.4-10': (sp.log(2*x - 1), (sp.exp(x) + 1)/2), '2P2.4-12': (x**2 + 6*x + 5, -3 + sp.sqrt(x + 4)), '2P2.4-14': ((x + 3)/(x - 1), (x + 3)/(x - 1)),
       '2P2.4-15': (2*sp.exp(x) - 3, sp.log((x + 3)/2))}
for qid, (fx, gx) in inv.items():
    xp = sp.symbols('xp', positive=True)
    check(qid, float(fx.subs(x, gx.subs(x, sp.Rational(7, 3)))), 7/3, 1e-9)   # f(f^-1(7/3)) = 7/3, inside every domain
check('2P2.4-2', round(8**(1/3), 9), 2, 0); check('2P2.4-11', sols(2*x - 3 - (x + 3)/2), [3], 1e-9)
check('2P2.4-13', [s for s in sols(4 - x**2 - x) if s >= 0], [(-1 + 17**0.5)/2], 1e-9); check('2P2.4-15c', float(sp.log((-1 + 3)/sp.Integer(2))), 0, 1e-12)
# 2.5
check('2P2.5-3', abs(0 - 3), 3, 0); check('2P2.5-5', abs((2 - 1)*(2 - 3)), 1, 0); check('2P2.5-6', 1 - 4, -3, 0)
check('2P2.5-8', mod_sols(A(x**2 - 4), 3), [-7**0.5, -1, 1, 7**0.5], 1e-9)
check('2P2.5-9', mod_sols((A(x) - 1)*(A(x) - 3), 0), [-3, -1, 1, 3], 1e-9)
check('2P2.5-11', [len(mod_sols(A(x**2 - 4), kk)) for kk in (0.5, 2, 3.9)], [4, 4, 4], 0)
check('2P2.5-12', mod_sols(A(x**2 - 2*x - 3), 5), [-2, 4], 1e-9); check('2P2.5-13', len(mod_sols(A(x**2 - 4), 4)), 3, 0)
check('2P2.5-14', [math.log(2), abs(math.exp(0) - 2)], [math.log(2), 1], 1e-12)
f = x**2 - 6*x + 5; check('2P2.5-15', [*mod_sols(A(f), 3), float(A(f).subs(x, 3)), *mod_sols((A(x) - 1)*(A(x) - 5), 0)], [2, 3 - 7**0.5, 3 + 7**0.5, 4, 4, -5, -1, 1, 5], 1e-9)
# 2.6: transform points
check('2P2.6-4-8', [4 + 1, 2*6, 4/2, 6 + 3, 4, -6 + 1, 2 - 3, 5 - 2, 6/2, 3*4 - 1], [5, 12, 2, 9, 4, -5, -1, 3, 3, 11], 1e-9)
check('2P2.6-10', mod_sols(2*A(x + 1) - 4, 0), [-3, 1], 1e-9); check('2P2.6-11', [math.pi/4, 3*math.sin(math.pi/2)], [math.pi/4, 3], 1e-12)
check('2P2.6-12', [c for px, py in [(0, 2), (3, 0), (5, -1)] for c in (px + 1, -2*py + 3)], [1, -1, 4, 3, 6, 5], 0)
check('2P2.6-13', sols(2/(x - 3) + 1), [1], 1e-9); check('2P2.6-14', 3*math.exp(-2) + 1, 1.41, 0.006)
gg = 3 - A(2*x - 2); exact('2P2.6-15', sp.simplify(3 - A(2*(x + 1) - 4) - gg), 0)
check('2P2.6-15b', [*mod_sols(gg, 0), *mod_sols(gg, x/2)], [-0.5, 2.5, -2/3, 2], 1e-9)
# 2.7
check('2P2.7-1', mod_sols(A(x - 4), 3), [1, 7], 1e-9); check('2P2.7-4', mod_sols(A(x - 1), A(x + 3)), [-1], 1e-9)
check('2P2.7-5', mod_sols(A(2*x - 1), A(x + 2)), [-1/3, 3], 1e-9); check('2P2.7-6', ineq(A(x + 2) > A(x - 4)) == sp.Interval.open(1, sp.oo), True, 0)
check('2P2.7-7', ineq(A(3 - x) <= 1) == sp.Interval(2, 4), True, 0); check('2P2.7-8', mod_sols(A(x**2 - 5), 4), [-3, -1, 1, 3], 1e-9)
check('2P2.7-9', ineq(A(x - 2) < 2*x - 1) == sp.Interval.open(1, sp.oo), True, 0); check('2P2.7-10', mod_sols(A(x - 3), 2*A(x)), [-3, 1], 1e-9)
check('2P2.7-11', ineq(A(2*x + 3) < A(x)) == sp.Interval.open(-3, -1), True, 0)
check('2P2.7-12', mod_sols(A(x**2 - 3*x), 2), sorted([1, 2, (3 - 17**0.5)/2, (3 + 17**0.5)/2]), 1e-9)
check('2P2.7-14', mod_sols(A(x + 1) + A(x - 3), 6), [-2, 4], 1e-9)
f, g = A(2*x - 5), 3 - A(x); check('2P2.7-15', [*mod_sols(f, g), ineq(f < g) == sp.Interval.open(2, sp.Rational(8, 3))], [2, 8/3, True], 1e-9)
