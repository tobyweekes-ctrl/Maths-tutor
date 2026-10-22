# Pure Year 1, Chapter 3: equations and inequalities.
from sympy import symbols, Rational as Q, sqrt, solve, simplify, solveset, S, Interval, Union, oo, Lt, Gt, Le, Ge, FiniteSet, And, Or, Intersection
x, y, z, k, m, c, p = symbols('x y z k m c p', real=True)

def system(qid, eqs, want, vars=(x, y)):
    """Solutions of a system compared as a set of tuples."""
    global count
    count += 1
    got = solve(eqs, vars, dict=True)
    got = sorted(tuple(float(s[v]) for v in vars) for s in got)
    want = sorted(tuple(float(w) for w in t) for t in want)
    if len(got) != len(want) or any(abs(a - b) > 1e-9 for g_, w_ in zip(got, want) for a, b in zip(g_, w_)):
        fails.append(f'{qid}: solved {got}, answer says {want}')

def ineq(qid, rel, want, var=None):
    """Solution set of an inequality over the reals compared with an Interval/Union."""
    global count
    count += 1
    got = solveset_(rel, var or x)
    if simplify(got.symmetric_difference(want)) != S.EmptySet:
        fails.append(f'{qid}: solved {got}, answer says {want}')

def solveset_(rel, v):
    if isinstance(rel, And): return Intersection(*[solveset_(r, v) for r in rel.args])
    if isinstance(rel, Or): return Union(*[solveset_(r, v) for r in rel.args])
    return solveset(rel, v, S.Reals)

def setq(qid, got, want):
    global count
    count += 1
    if got != want: fails.append(f'{qid}: worked out {got}, answer says {want}')

O = Interval.open
# 3.1
system('P3.1-1', [x + y - 10, x - y - 4], [(7, 3)]); system('P3.1-2', [y - 2*x + 1, 3*x + y - 14], [(3, 5)])
system('P3.1-3', [2*x + y - 7, 2*x - 3*y + 5], [(2, 3)]); system('P3.1-4', [3*x + 4*y - 18, 2*x - 3*y + 5], [(2, 3)])
system('P3.1-5', [5*x - 2*y - 1, 3*x + 4*y - 37], [(3, 7)]); system('P3.1-6', [2*x + 3*y - 29, x + 2*y - 16], [(10, 3)])
system('P3.1-7', [x/2 + y - 5, x - y/3 - 3], [(4, 3)]); system('P3.1-8', [2*m + c - 5, -m + c + 4], [(3, -1)], (m, c))
system('P3.1-9', [3*(x + y) - 2*(x - y) - 11, x + 2*y - 1], [(Q(-17, 3), Q(10, 3))])
check('P3.1-10', solve(2*(-3) - k*1, k)[0], -6, 0)
system('P3.1-11', [x + y - 11, (10*y + x) - (10*x + y) - 27], [(4, 7)])
system('P3.1-12', [x + y + z - 6, 2*x - y + z - 3, x + 2*y - z - 2], [(1, 2, 3)], (x, y, z))
system('P3.1-13', [3*x + 2*y - Q(27, 2), 2*x + 3*y - 13], [(Q(29, 10), Q(24, 10))])
system('P3.1-14', [2*x - y - 7, 2*y + x - 4], [(Q(18, 5), Q(1, 5))])          # x=a, y=b
check('P3.1-15a', solve(1*k - 2*3, k)[0], 6, 0); check('P3.1-15b', 3*3, 9, 0)
sol = solve([x + 2*y - 3, 3*x + 2*y - c], [x, y]); exact('P3.1-15cx', sol[x], (c - 3)/2); exact('P3.1-15cy', sol[y], (9 - c)/4)
check('P3.1-15cc', solve((c - 3)/2 - (9 - c)/4, c)[0], 5, 0)

# 3.2
system('P3.2-1', [y - x - 1, y - x**2 + 1], [(2, 3), (-1, 0)]); system('P3.2-2', [y - 3*x, y - x**2 - 2], [(1, 3), (2, 6)])
system('P3.2-3', [x + y - 4, x*y - 3], [(1, 3), (3, 1)]); system('P3.2-4', [x + y - 5, x**2 + y**2 - 13], [(2, 3), (3, 2)])
system('P3.2-5', [y - 2*x + 1, x*y - 3], [(Q(3, 2), 2), (-1, -3)]); system('P3.2-6', [x - 2*y - 1, x**2 - 4*y**2 - 5], [(3, 1)])
system('P3.2-7', [y - x**2 + 3*x - 4, y - 2*x + 2], [(2, 2), (3, 4)])
system('P3.2-8', [2*x + y - 3, x**2 + x*y + y**2 - 7], [((9 + sqrt(57))/6, -sqrt(57)/3), ((9 - sqrt(57))/6, sqrt(57)/3)])
system('P3.2-9', [y - x - 2, x**2 + y**2 - 10], [(1, 3), (-3, -1)]); system('P3.2-10', [2*x + 2*y - 22, x*y - 28], [(7, 4), (4, 7)])
system('P3.2-11', [y - x - 1, x**2 + 3*x*y - 10], [(Q(5, 4), Q(9, 4)), (-2, -1)])
system('P3.2-12', [3*x - y - 1, 1/x + 1/y - Q(3, 2)], [(1, 2), (Q(2, 9), Q(-1, 3))])
system('P3.2-13', [x + y - 9, x**2 + y**2 - 53], [(2, 7), (7, 2)]); check('P3.2-13b', 7**3 - 2**3, 335, 0)
check('P3.2-14', solve(4 + 4*(k - 1), k)[0], 0, 0); system('P3.2-14p', [y - 2*x, y - x**2 - 1], [(1, 2)])
system('P3.2-15', [x + y - 3, x**3 + y**3 - 9], [(1, 2), (2, 1)]); check('P3.2-15b', solve(27 - 9*p - 9, p)[0], 2, 0)

# 3.3
system('P3.3-1', [y - 2*x - 1, y - x**2 - 2], [(1, 3)]); system('P3.3-2', [y - x, y - x**2 + 2], [(2, 2), (-1, -1)])
check('P3.3-3', 1 - 4*4, -15, 0); check('P3.3-4', solve(4 + 4*c, c)[0], -1, 0)
ineq('P3.3-5', Gt(16 - 4*(1 - k), 0), O(-3, oo), k)
system('P3.3-6', [x + y - 6, y - x**2 + 6*x - 10], [(1, 5), (4, 2)]); setq('P3.3-7', FiniteSet(*solve(m**2 - 36, m)), FiniteSet(6, -6))
system('P3.3-8', [y - 4*x + 5, y - x**2 + 1], [(2, 3)]); ineq('P3.3-9', Gt((2*k)**2 - 8*(k**2 - 8), 0), O(-4, 4), k)
system('P3.3-10', [y - x**2 + 3*x - 2, y - 2 - x + x**2], [(0, 2), (2, 0)])
system('P3.3-11', [2*y - x - 4, y - x**2/8 - Q(5, 2)], [(2, 3)])
setq('P3.3-12k', FiniteSet(*solve((k + 1)**2 - 4, k)), FiniteSet(1, -3))
system('P3.3-12a', [y - x - 2, y - x**2 + x - 3], [(1, 3)]); system('P3.3-12b', [y + 3*x - 2, y - x**2 + x - 3], [(-1, 5)])
ineq('P3.3-13', Lt(m**2 - 16, 0), O(-4, 4), m)
ms = solve(m**2 - 4*m - 12, m); setq('P3.3-14', FiniteSet(*[(mm, -mm - 3) for mm in ms]), FiniteSet((6, -9), (-2, -1)))
check('P3.3-15a', solve(16 - 4*(6 - c), c)[0], 2, 0); system('P3.3-15b', [y - x - 2, y - x**2 + 3*x - 6], [(2, 4)])
check('P3.3-15c', sum(solve(x**2 - 4*x - 1, x)) / 2, 2, 1e-12)

# 3.4
ineq('P3.4-1', Gt(3*x + 4, 19), O(5, oo)); ineq('P3.4-2', Le(7 - 2*x, 1), Interval(3, oo)); ineq('P3.4-3', Lt(2*(x - 3), x + 1), O(-oo, 7))
ineq('P3.4-4', Ge((x + 5)/3, 2*x - 5), Interval(-oo, 4)); ineq('P3.4-5', (2*x - 1 > 3) & (5 - x > 0), O(2, 5))
ineq('P3.4-6', (-4 < 2*x + 6) & (2*x + 6 <= 10), Interval.Lopen(-5, 2))
check('P3.4-7', [n for n in range(-20, 20) if 3*n - 2 > 4 and 2*n + 1 <= 11], [3, 4, 5], 0)
ineq('P3.4-8', (3*(x + 2) > 4*x - 1) | (x - 8 > 2), Union(O(-oo, 7), O(10, oo)))
ineq('P3.4-9', (2*(2*x + 1) + 2*(x - 2) < 40) & (x - 2 > 0), O(2, 7)); ineq('P3.4-10', Lt((3 - 2*x)/4, x/3 + 1), O(Q(-3, 10), oo))
check('P3.4-11', min(n for n in range(1000) if 20 < 12 + 0.05*n - 1e-9), 161, 0)
ineq('P3.4-12', (-k - 2 > 0) & (-k - 2 < 5), O(-7, -2), k); ineq('P3.4-13', Gt((2*x - 1)/3 - (x + 2)/4, x/6), O(Q(10, 3), oo))
ineq('P3.4-14', (4 + x > x + 2) & (2*x + 2 > 4) & (x + 6 > x) & (x > 0), O(1, oo))
A, B = range(2, 6), range(-3, 2)
check('P3.4-15', [max(a - b for a in A for b in B), min(a - b for a in A for b in B), max(a*b for a in A for b in B), min(a*b for a in A for b in B), max(b/a for a in A for b in B)], [8, 1, 5, -15, 0.5], 1e-12)

# 3.5
ineq('P3.5-1', Lt((x - 1)*(x - 4), 0), O(1, 4)); ineq('P3.5-2', Gt(x**2 - 9, 0), Union(O(-oo, -3), O(3, oo)))
ineq('P3.5-3', Ge(x**2 - 5*x, 0), Union(Interval(-oo, 0), Interval(5, oo))); ineq('P3.5-4', Lt(x**2 - x - 6, 0), O(-2, 3))
ineq('P3.5-5', Ge(2*x**2 + 5*x - 3, 0), Union(Interval(-oo, -3), Interval(Q(1, 2), oo))); ineq('P3.5-6', Lt(x**2, 4*x), O(0, 4))
ineq('P3.5-7', Gt(12 + x - x**2, 0), O(-3, 4)); ineq('P3.5-8', Gt(k**2 - 36, 0), Union(O(-oo, -6), O(6, oo)), k)
ineq('P3.5-9', Lt(16 - 4*p*(p - 3), 0), Union(O(-oo, -1), O(4, oo)), p)
ineq('P3.5-10', (x**2 - 6*x + 5 < 0) & (3*x - 5 > 4), O(3, 5)); ineq('P3.5-11', Gt((x + 2)**2, 2*x + 7), Union(O(-oo, -3), O(1, oo)))
ineq('P3.5-12', Le(x**2 - 2*x - 1, 0), Interval(1 - sqrt(2), 1 + sqrt(2)))
ineq('P3.5-13', Gt(4*k**2 - 12*k, 0), Union(O(-oo, 0), O(3, oo)), k)
ineq('P3.5-14', ((x + 5)*(x - 1) <= 27) & (x - 1 > 0), Interval.Lopen(1, 4)); ineq('P3.5-15', Gt((x + 3)/(x - 1), 2), O(1, 5))

# 3.6
ineq('P3.6-2', Lt(x**2, x + 2), O(-1, 2)); ineq('P3.6-3', Gt(x**2, 3*x), Union(O(-oo, 0), O(3, oo)))
ineq('P3.6-4', Lt(x**2 - 2*x, x + 4), O(-1, 4)); ineq('P3.6-5', Lt(6/x, 2), Union(O(-oo, 0), O(3, oo)))
ineq('P3.6-6', Gt(2*x - 3, x**2 - 4*x + 5), O(2, 4)); ineq('P3.6-7', Ge(4 - x**2, x + 2), Interval(-2, 1))
setq('P3.6-8a', FiniteSet(*solve(2*x**2 - 8, x)), FiniteSet(2, -2)); ineq('P3.6-8b', Gt(x**2 - 4, 4 - x**2), Union(O(-oo, -2), O(2, oo)))
ineq('P3.6-9', Gt((x**2 + 2)/3, x), Union(O(-oo, 1), O(2, oo))); ineq('P3.6-10', Gt(2*x + 1, x**2 - 2), O(-1, 3))
ineq('P3.6-11', Gt(4/x, x), Union(O(-oo, -2), O(0, 2)))
system('P3.6-12a', [y - x**2 + 3*x - 2, y - 2*x + 2], [(1, 0), (4, 6)]); ineq('P3.6-12b', Gt(x**2 - 3*x + 2, 2*x - 2), Union(O(-oo, 1), O(4, oo)))
ineq('P3.6-13', Ge(3/(x - 1), 1), Interval.Lopen(1, 4)); ineq('P3.6-14', Lt(x**2 - 6*x + 5, 2*x - 10), O(3, 5))
setq('P3.6-15a', FiniteSet(*solve((k + 1)**2 - 16, k)), FiniteSet(3, -5))
ineq('P3.6-15b', Lt(x**2 - 6*x + 4, x), O((7 - sqrt(33))/2, (7 + sqrt(33))/2))
ineq('P3.6-15c', Lt((k + 1)**2 - 16, 0), O(-5, 3), k)

# 3.7
check('P3.7-1', int(1 > 2**2 - 5), 1, 0); system('P3.7-4', [y - x**2 + 4, y - 2*x - 4], [(-2, 0), (4, 12)])
check('P3.7-5', [int(0 > -2 and 0 < 4), int(1 > 1 and 1 < 4 - 9)], [1, 0], 0); check('P3.7-7', 4*8/2, 16, 0)
system('P3.7-8', [y - x - 3, y - 7 + x], [(2, 5)]); check('P3.7-8b', (6 - -2)*(5 - 1)/2, 16, 0)
setq('P3.7-9', FiniteSet(*solve(x**2 - 4, x)), FiniteSet(2, -2))
check('P3.7-10', [int(1 + 4 < 9 and 2 > 1), int(4 + 1 < 9 and 1 < 2)], [1, 1], 0)
ineq('P3.7-11', Lt(x**2 - 2*x, x), O(0, 3))
system('P3.7-12', [y - 6 + x**2, y - x], [(2, 2), (-3, -3)]); check('P3.7-12b', int(4 <= 6 - 1 and 4 >= 1), 1, 0)
corners = [(0, 0), (1, 0), (4, 6), (0, 10)]
check('P3.7-13', max(a + 2*b for a, b in corners), 20, 0)
check('P3.7-14', [3*4 + 2*0, 3*0 + 2*6], [12, 12], 0)
system('P3.7-15a', [y - x**2 + 4*x - 3, y - 3 + x], [(0, 3), (3, 0)])
check('P3.7-15c', max(3*t/1000 - (t/1000)**2 for t in range(3001)), 2.25, 1e-6)
