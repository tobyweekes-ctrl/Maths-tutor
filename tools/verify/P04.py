# Pure Year 1, Chapter 4: graphs and transformations.
from sympy import symbols, Rational as Q, sqrt, expand, factor, solve, solveset, S, Interval, Union, oo, Poly, real_roots, simplify, FiniteSet
x, k, a, b, c = symbols('x k a b c', real=True)

def rts(qid, expr, want):
    """Distinct real roots of expr = 0 (polynomial or rational) compared as a set."""
    global count
    count += 1
    got = solveset(expr, x, S.Reals)
    if got != FiniteSet(*want): fails.append(f'{qid}: roots {got}, answer says {want}')

def nroots(qid, expr, n):
    global count
    count += 1
    num = Poly(expand(expr), x)
    if len(set(real_roots(num))) != n: fails.append(f'{qid}: {len(set(real_roots(num)))} real roots, answer says {n}')

def eqv(qid, e1, e2): exact(qid, expand(e1 - e2), 0)
def setq(qid, got, want):
    global count
    count += 1
    if got != want: fails.append(f'{qid}: worked out {got}, answer says {want}')
def ineq(qid, rel, want):
    setq(qid, solveset(rel, x, S.Reals), want)
O = Interval.open

# 4.1
f = (x - 2)*(x + 1)*(x + 4); rts('P4.1-1', f, [2, -1, -4]); check('P4.1-1y', f.subs(x, 0), -8, 0)
check('P4.1-2', (5 - 2*x**3).subs(x, 0), 5, 0); eqv('P4.1-3', x*(x - 3)*(x + 3), x**3 - 9*x)
rts('P4.1-4', x*(x - 2)*(x + 3), [0, 2, -3]); rts('P4.1-5', (x - 1)**2*(x + 2), [1, -2]); check('P4.1-5y', 1*2, 2, 0)
check('P4.1-6', [Poly((2 - x)*(x + 1)*(x + 3), x).LC(), ((2 - x)*(x + 1)*(x + 3)).subs(x, 0)], [-1, 6], 0)
eqv('P4.1-7', x*(x - 2)**2, x**3 - 4*x**2 + 4*x); check('P4.1-8', ((x + 1)**3).subs(x, 0), 1, 0)
setq('P4.1-9', solve(((x + a)*(x - 2)*(x - 5)).subs(x, 0) - 30, a), [3])
kk = solve(k*(1)*(-2)*(-4) - 16, k)[0]; eqv('P4.1-10', kk*(x + 1)*(x - 2)*(x - 4), 2*x**3 - 10*x**2 + 4*x + 16)
eqv('P4.1-11', x*(x - 3)*(x + 1), x**3 - 2*x**2 - 3*x); eqv('P4.1-12', (x - 3)**2*(x + 2), x**3 - 4*x**2 - 3*x + 18)
eqv('P4.1-13', x*(2*x - 3)*(x + 2), 2*x**3 + x**2 - 6*x)
setq('P4.1-14', sorted(solve((1 - k)**2 - 4, k)), [-1, 3])
setq('P4.1-15a', solveset(b**2 - 16 < 0, b, S.Reals), O(-4, 4))
for bb in (-4, -3, 0, 3.9, 4, -5, 5): check(f'P4.1-15 b={bb}', int(len(set(real_roots(Poly((x - 1)*(x**2 + Q(bb)*x + 4), x)))) == 1), int(-4 < bb < 4), 0)
eqv('P4.1-15b', (x - 1)*(x**2 - 5*x + 4), (x - 1)**2*(x - 4))

# 4.2
g = (x - 1)*(x - 2)*(x + 1)*(x + 3); rts('P4.2-1', g, [1, 2, -1, -3]); check('P4.2-1y', g.subs(x, 0), 6, 0)
eqv('P4.2-3', (x - 2)*(x + 2)*(x**2 + 4), x**4 - 16); rts('P4.2-3r', x**4 - 16, [2, -2])
check('P4.2-5', ((x - 1)**2*(x + 2)**2).subs(x, 0), 4, 0); check('P4.2-6', Poly(-x*(x - 2)*(x + 1)*(x + 4), x).LC(), -1, 0)
eqv('P4.2-7', (x - 1)*(x + 1)*(x - 2)*(x + 2), x**4 - 5*x**2 + 4)
eqv('P4.2-9', 2*(x - 1)*(x + 1)*(x - 2)*(x + 2), 2*x**4 - 10*x**2 + 8); check('P4.2-9a', (2*(x - 1)*(x + 1)*(x - 2)*(x + 2)).subs(x, 0), 8, 0)
h = (x + 1)**2*(2 - x)*(x + 3); check('P4.2-10', [Poly(h, x).LC(), h.subs(x, 0)], [-1, 6], 0)
eqv('P4.2-11', x**2*(x - 2)**2, x**4 - 4*x**3 + 4*x**2)
eqv('P4.2-12', (x**2 - 9)*(x**2 - 1), (x**2 - 5)**2 - 16); check('P4.2-12m', min(float(((x**2 - 9)*(x**2 - 1)).subs(x, t/1000)) for t in range(-4000, 4000, 7)), -16, 0.01)
check('P4.2-13', (2*(x + 2)**2*(x - 1)**2).subs(x, 0), 8, 0)
setq('P4.2-14', solve((x*(x - 1)*(x + 1)*(x - a)).subs(x, 2) + 6, a), [3]); check('P4.2-14s', (x*(x - 1)*(x + 1)*(x - 3)).subs(x, 2), -6, 0)
eqv('P4.2-15', x**2*(x - 2)*(x + 3), x**4 + x**3 - 6*x**2); ineq('P4.2-15c', x**2*(x - 2)*(x + 3) > 0, Union(O(-oo, -3), O(2, oo)))

# 4.3
check('P4.3-3', 6/(-2)**2, 1.5, 0); rts('P4.3-4', 4/x - 4/x**2, [1]); check('P4.3-6', 2*(-3), -6, 0)
rts('P4.3-7', 5/x**2 - 5, [1, -1]); rts('P4.3-8', 8/x - 2*x, [2, -2]); rts('P4.3-9', 9/x**2 - x**2, [sqrt(3), -sqrt(3)])
rts('P4.3-10', 2/x - (x - 1), [2, -1]); rts('P4.3-11', 12/x - (x + 4), [2, -6])
setq('P4.3-12', sorted(solve(c**2 - 16, c)), [-4, 4]); rts('P4.3-12p', 4/x - (4 - x), [2])
setq('P4.3-13', solveset(12*k > 0, k, S.Reals), O(0, oo))          # discriminant of kx^2 - 3 = 0 is 12k
eqv('P4.3-14', (x - 1)*(x**2 + 2*x + 2), x**3 + x**2 - 2); rts('P4.3-14r', 2/x**2 - (x + 1), [1])
setq('P4.3-15b', sorted(solve(b**2 - 12, b)), [-2*sqrt(3), 2*sqrt(3)]); rts('P4.3-15c', 3/x - (5 - x), [(5 - sqrt(13))/2, (5 + sqrt(13))/2])
setq('P4.3-15d', solveset(3/x > 5 - x, x, Interval.open(0, oo)), Union(O(0, (5 - sqrt(13))/2), O((5 + sqrt(13))/2, oo)))

# 4.4
rts('P4.4-1', x**2 - 1/x, [1]); nroots('P4.4-2', x**3 + x - 4, 1); rts('P4.4-3', (x**2 - 1) - (1 - x**2), [1, -1])
rts('P4.4-4', x**3 - 4*x, [0, 2, -2]); rts('P4.4-5', 2/x - x**2 - 1, [1]); rts('P4.4-6', x**2*(x - 2) - x*(x - 2), [0, 1, 2])
nroots('P4.4-7', x**3 + 3*x**2 - 1, 3); rts('P4.4-8', x**2 - 2*x - (2*x - 4), [2]); rts('P4.4-9', x*(x - 3)**2 - x, [0, 2, 4])
rts('P4.4-10', 3/x - x**2 - 2*x, [1]); rts('P4.4-11', x**3 - x - 3*x, [0, 2, -2])
cub = x**2*(x + 3); check('P4.4-12', [cub.subs(x, -2), cub.subs(x, 0)], [4, 0], 0); nroots('P4.4-12b', cub - 2, 3)
nroots('P4.4-13', x**3 - 4*x + 2, 3); rts('P4.4-14', 1/x - x - 3, [(-3 + sqrt(13))/2, (-3 - sqrt(13))/2])
rts('P4.4-15', x**2*(x - 4) - 5*x, [0, 5, -1]); ineq('P4.4-15c', x**2*(x - 4) > 5*x, Union(O(-1, 0), O(5, oo)))
eqv('P4.4-ex', x**2*(x - 3) - 2*x*(3 - x), x*(x - 3)*(x + 2)); nroots('P4.4-ex2', x**3 - 4*x - 1, 3)

# 4.5
fA = lambda t: t**2*(t - 3)
eqv('P4.5-ex', fA(x + 2), (x + 2)**2*(x - 1)); check('P4.5-exy', fA(2), -4, 0)
rts('P4.5-4', (x - 1)*(x - 3)*x, [0, 1, 3]); eqv('P4.5-4f', ((x)*(x - 2)*(x + 1)).subs(x, x - 1), (x - 1)*(x - 3)*x)
rts('P4.5-5', 1/x + 2, [Q(-1, 2)]); check('P4.5-6', 1/3, 1/3, 0); eqv('P4.5-7', (x + 2)**2 - 4*(x + 2), x**2 - 4)
check('P4.5-8', ((x - 2)**3 - 1).subs(x, 0), -9, 0)
eqv('P4.5-9', ((x - 1)**2*(x + 3)).subs(x, x + 1), x**2*(x + 4)); setq('P4.5-10', sorted(solve(fA(a), a)), [0, 3])
rts('P4.5-11', 4/(x - 1)**2 - 2, [1 - sqrt(2), 1 + sqrt(2)]); check('P4.5-11y', 4 - 2, 2, 0)
eqv('P4.5-12', (x - 3)**2 + 2, x**2 - 6*x + 11); eqv('P4.5-13', (x + 2)*(x + 2 - 4), x**2 - 4)
check('P4.5-13b', min(float((t/100)*(t/100 - 4)) for t in range(0, 400)), -4, 1e-9)
rts('P4.5-14', 3/(x + 2) - 1, [1]); check('P4.5-14y', 3/2 - 1, 0.5, 0)
f15 = lambda t: (t - 2)*(t + 1)**2; setq('P4.5-15', sorted(solve(f15(a), a)), [-1, 2]); eqv('P4.5-15a', f15(x + 2), x*(x + 3)**2); eqv('P4.5-15b', f15(x - 1), (x - 3)*x**2)

# 4.6
f6 = lambda t: t*(t - 2)*(t + 3); rts('P4.6-ex', f6(2*x), [0, 1, Q(-3, 2)]); rts('P4.6-ex2', (3*x)**2 - 9, [1, -1])
q4 = lambda t: t*(t - 4); rts('P4.6-4', q4(2*x), [0, 2]); check('P4.6-4m', q4(2*1), -4, 0)
q5 = lambda t: -(t + 1)*(t - 3); check('P4.6-5', [q5(0), q5(1)], [3, 4], 0); eqv('P4.6-6', (-x)**3 - (-x), x - x**3)
eqv('P4.6-8', 4/(2*x), Q(1, 2)*4/x); f9 = lambda t: (t - 2)*(t + 1)**2; rts('P4.6-9', f9(x/2), [4, -2]); check('P4.6-9y', f9(0), -2, 0)
setq('P4.6-10', solve(a*(-8) - 24, a), [-3]); rts('P4.6-10r', x**2 - 2*x - 8, [4, -2])
setq('P4.6-12', solve(a**2 - 4 - 5, a), [-3, 3]); rts('P4.6-12r', (3*x)**2 - 4, [Q(2, 3), Q(-2, 3)])
eqv('P4.6-13', 3*x*(3*x - 6), 9*x**2 - 18*x); exact('P4.6-14', 1/(2*x)**2 - Q(1, 4)/x**2, 0)
f15b = lambda t: t*(t + 2)*(t - 3); rts('P4.6-15b', f15b(-2*x), [0, 1, Q(-3, 2)]); check('P4.6-15c', Poly(f15b(-2*x), x).LC(), -8, 0)
setq('P4.6-15d', solve(a*f15b(1) - 12, a), [-2])

# 4.7
eqv('P4.7-ex', fA(x) + 4, (x - 2)**2*(x + 1)); rts('P4.7-4', fA(2*x), [0, Q(3, 2)]); check('P4.7-4m', fA(2), -4, 0)
gB = lambda t: 1/(t - 1) + 2; check('P4.7-B', [gB(0), 0], [1, 0], 0); rts('P4.7-Bx', gB(x), [Q(1, 2)])
rts('P4.7-5', gB(x) + 1, [Q(2, 3)]); check('P4.7-5y', gB(0) + 1, 2, 0); rts('P4.7-6', gB(x + 1), [Q(-1, 2)])
rts('P4.7-9', 3*gB(x), [Q(1, 2)]); check('P4.7-9y', 3*gB(0), 3, 0)
hC = lambda t: -Q(3, 4)*t*(t - 4); check('P4.7-C', [hC(0), hC(4), hC(2)], [0, 0, 3], 0)
rts('P4.7-8', hC(x/2), [0, 8]); rts('P4.7-8b', hC(x) - 3, [2]); rts('P4.7-10', fA(-x), [0, -3])
nroots('P4.7-11a', fA(x) - 1, 1); nroots('P4.7-11b', fA(x) + 2, 3); nroots('P4.7-11c', fA(x) + 4, 2)
for kk_, n in ((1, 3), (3.9, 3), (4, 2), (0, 2), (5, 1), (-1, 1)): nroots(f'P4.7-12 k={kk_}', fA(x) + Q(kk_), n)
eqv('P4.7-13', hC(x + 2), 3 - Q(3, 4)*x**2); rts('P4.7-14', gB(2*x), [Q(1, 4)])
eqv('P4.7-15', fA(x + 2) + 4, x**2*(x + 3)); rts('P4.7-15d', fA(x) + 4, [2, -1])
