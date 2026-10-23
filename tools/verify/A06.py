# Statistics and Mechanics Year 1, Chapter 6: discrete distributions and the binomial.
from fractions import Fraction as Fr
from itertools import product
from math import comb, log, ceil
import sympy as sp
pmf = lambda r, n, p: comb(n, r) * p**r * (1 - p)**(n - r)
cdf = lambda r, n, p: sum(pmf(k, n, p) for k in range(r + 1))
k = sp.symbols('k')
ks = lambda expr: sp.solve(expr - 1, k)[0]

# 6.1
check('A6.1-1-3', [1 - 0.6, 0.4 + 0.2, 2/6], [0.4, 0.6, 1/3], 1e-12)
check('A6.1-4-5', [ks(sum(k*x for x in range(1, 5))), Fr(2 + 3, 10)], [0.1, 0.5], 1e-12)
dist = {}
for o in product('HT', repeat=2): dist[o.count('H')] = dist.get(o.count('H'), 0) + Fr(1, 4)
check('A6.1-6', [dist[0], dist[1], dist[2]], [0.25, 0.5, 0.25], 1e-12)
kv = ks(10*k); check('A6.1-7', [kv, 5*kv], [0.1, 0.5], 1e-12)
kv = ks(sum(k*(x + 1) for x in range(5))); check('A6.1-8', [kv, 9*kv], [1/15, 3/5], 1e-12)
D = list(product(range(1, 7), repeat=2)); check('A6.1-9', [Fr(sum(abs(a - b) == 2 for a, b in D), 36), Fr(sum(abs(a - b) <= 1 for a, b in D), 36)], [2/9, 4/9], 1e-12)
check('A6.1-10', [0.2 + 0.3, 0.2 + 0.3 + 0.4], [0.5, 0.9], 1e-12)
kv = ks(sum(k*x for x in (1, 2, 3)) + sum(k*(6 - x) for x in (4, 5))); check('A6.1-11', [kv, 3*kv], [1/9, 1/3], 1e-12)
kv = ks(sum(k/x for x in (1, 2, 3, 6))); check('A6.1-12', [kv, kv + kv/2], [0.5, 0.75], 1e-12)
b = sp.symbols('b'); bv = sp.solve(sp.Rational(3, 2)*b + b - sp.Rational(1, 2), b)[0]; check('A6.1-13', [1.5*bv, bv], [0.3, 0.2], 1e-12)
P = {1: 0.2, 2: 0.3, 3: 0.4, 4: 0.1}; check('A6.1-14', sum(P[a]*P[c] for a in P for c in P if a + c == 4), 0.25, 1e-12)
X = [Fr(1, 6), Fr(5, 36), Fr(25, 36)]; check('A6.1-15', [*X, sum(X), sum(x*x for x in X)], [1/6, 5/36, 25/36, 1, 343/648], 1e-12)

# 6.2
check('A6.2-1-5', [pmf(5, 5, .5), pmf(0, 6, .2), pmf(3, 10, .3), pmf(2, 8, .25)], [0.03125, 0.2621, 0.2668, 0.3115], 0.00006)
check('A6.2-7-9', [pmf(2, 12, 1/6), pmf(4, 5, .4) + pmf(5, 5, .4), 1 - pmf(0, 10, .1)], [0.2961, 0.08704, 0.6513], 0.00006)
check('A6.2-11', [n for n in range(1, 30) if abs(pmf(0, n, .5) - 1/64) < 1e-12], [6], 0)
pv = 1 - 0.0081**0.25; check('A6.2-12', [pv, pmf(4, 4, pv)], [0.7, 0.2401], 1e-9)
check('A6.2-13', [min(n for n in range(1, 100) if 1 - pmf(0, n, .2) > 0.9), log(0.1)/log(0.8)], [11, 10.3], 0.02)
q = pmf(9, 10, .85); check('A6.2-14', [q, pmf(2, 5, q)], [0.3474, 0.3354], 0.00006)
p = sp.symbols('p'); sol = [s for s in sp.solve(12*p*(1 - p)**11 - 66*p**2*(1 - p)**10, p) if 0 < s < 1]
check('A6.2-15', [sol[0], pmf(0, 12, float(sol[0]))], [2/13, 0.1347], 0.00006)

# 6.3
check('A6.3-3-7', [cdf(3, 10, .5), cdf(7, 20, .4), 1 - cdf(9, 20, .4), cdf(7, 15, .3) - cdf(2, 15, .3), 1 - cdf(6, 25, .2), cdf(3, 30, .1)],
      [0.1719, 0.4159, 0.2447, 0.8232, 0.2200, 0.6474], 0.00006)
check('A6.3-8', 1 - cdf(10, 40, .2), 0.1608, 0.00006)
check('A6.3-9', max(a for a in range(21) if cdf(a, 20, .35) < 0.1), 3, 0)
check('A6.3-10', [1 - cdf(8, 12, .6), cdf(3, 12, .4)], [0.2253, 0.2253], 0.00006)
check('A6.3-11', cdf(5, 20, .3) - cdf(4, 20, .3), 0.1789, 0.00006)
check('A6.3-12', [min(b for b in range(51) if 1 - cdf(b, 50, .3) < 0.05), cdf(19, 50, .3), cdf(20, 50, .3)], [20, 0.9152, 0.9522], 0.00006)
r = cdf(7, 30, .15) - cdf(2, 30, .15); check('A6.3-13', [r, r**4], [0.7788, 0.3679], 0.00006)
check('A6.3-14', cdf(14, 25, .45) - cdf(10, 25, .45), 0.5198, 0.00006)
r = 1 - cdf(2, 20, .05); check('A6.3-15', [r, cdf(1, 10, r)], [0.0755, 0.8287], 0.00006)
