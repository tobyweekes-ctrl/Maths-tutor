# Statistics and Mechanics Year 1, Chapter 5: probability, by counting outcomes and exact fractions.
from fractions import Fraction as Fr
from itertools import product
import sympy as sp
D2 = list(product(range(1, 7), repeat=2))
def pd(cond, space=D2): return Fr(sum(1 for o in space if cond(o)), len(space))

# 5.1
check('A5.1', [Fr(3, 10), 1 - Fr(5, 10), 200*0.35, 1 - 5*0.15], [0.3, 0.5, 70, 0.25], 1e-9)
c = lambda q, got, want: check(q, float(got), float(want), 1e-12)
c('A5.1-4', pd(lambda o: sum(o) == 8), Fr(5, 36)); c('A5.1-5', pd(lambda o: o[0]*o[1] % 2 == 0), Fr(3, 4))
c('A5.1-6a', Fr(18 + 25, 80), Fr(43, 80)); c('A5.1-6b', Fr(25, 80), Fr(5, 16))
x = sp.symbols('x'); check('A5.1-8', float(sp.solve(6*x + sp.Rational(2, 5) - 1, x)[0]), 0.1, 1e-12)
c('A5.1-9', pd(lambda o: abs(o[0] - o[1]) == 1, list(product(range(1, 5), range(1, 4)))), Fr(5, 12))
c('A5.1-10', pd(lambda o: 6 in o), Fr(11, 36)); check('A5.1-11', [132/400, 50*132/400], [0.33, 16.5], 1e-9)
c('A5.1-12', pd(lambda o: sum(o) in (2, 3, 5, 7, 11)), Fr(5, 12))
check('A5.1-13', [b for b in range(50) if Fr(7, 7 + b) == Fr(1, 2)], [7], 0)
C3 = list(product('HT', repeat=3)); c('A5.1-14a', pd(lambda o: o.count('H') == 2, C3), Fr(3, 8)); c('A5.1-14b', pd(lambda o: 'H' in o, C3), Fr(7, 8))
c('A5.1-15a', pd(lambda o: max(o) == 4), Fr(7, 36)); c('A5.1-15b', pd(lambda o: max(o) <= 4), Fr(4, 9)); c('A5.1-15c', pd(lambda o: max(o) == 6), Fr(11, 36))

# 5.2: rebuild each Venn diagram as a list of people
def people(regions): return [set(k) for k, n in regions.items() for _ in range(n)]
V = people({'A': 7, 'AB': 3, 'B': 5, '': 5}); P = lambda pop, f: Fr(sum(1 for s in pop if f(s)), len(pop))
check('A5.2-1-4', [float(P(V, lambda s: 'A' in s)), float(P(V, lambda s: s == {'A', 'B'})), float(P(V, lambda s: 'A' not in s)), float(P(V, lambda s: bool(s))), float(P(V, lambda s: not s))], [0.5, 0.15, 0.5, 0.75, 0.25], 1e-12)
check('A5.2-5', 40 - (22 + 25 - 12), 5, 0); check('A5.2-6', 0.5 + 0.4 - 0.15, 0.75, 1e-12); check('A5.2-7', [0.5 - 0.15, 1 - 0.75], [0.35, 0.25], 1e-12)
L = people({'F': 10, 'G': 8, 'S': 12, 'FG': 5, 'FS': 4, 'GS': 2, 'FGS': 3}); L += [set()] * (50 - len(L))
check('A5.2-8', [sum(1 for s in L if not s), float(P(L, lambda s: len(s) == 2)), float(P(L, lambda s: 'F' in s))], [6, 0.22, 0.44], 1e-12)
check('A5.2-9', 0.6 + 0.3 - 0.7, 0.2, 1e-12); xs = sp.solve(sp.Rational(55, 100) + 3*x - 1, x)[0]; check('A5.2-10', [float(xs), float(xs) + 0.25], [0.15, 0.4], 1e-12)
xs = sp.solve(12 + 15 + 9 + x + 6 + 4 + 3 + 2*x - 100, x)[0]; check('A5.2-12', [xs, (15 + xs + 4 + 3) / 100], [17, 0.39], 1e-12)
check('A5.2-13', 0.45 + (1 - 0.6) - (1 - 0.3), 0.15, 1e-12)
b = 35 + 28 - 50; check('A5.2-14', [b, float(Fr(35 - b + 28 - b, 60))], [13, 37/60], 1e-12)
CM, MP, CP, ALL = 12 - 5, 14 - 5, 10 - 5, 5; Co, Mo, Po = 30 - CM - CP - ALL, 36 - CM - MP - ALL, 40 - MP - CP - ALL
check('A5.2-15', [Co, Mo, Po, 80 - (Co + Mo + Po + CM + MP + CP + ALL), float(Fr(Co + Mo + Po, 80)), float(Fr(CM + MP + CP + ALL, 80))], [13, 15, 21, 5, 49/80, 13/40], 1e-12)

# 5.3
check('A5.3-1-2', [0.25 + 0.4, 0.3*0.5], [0.65, 0.15], 1e-12); check('A5.3-4', 0.4*0.25, 0.1, 1e-12)
check('A5.3-5', 0.6 + 0.3 - 0.18, 0.72, 1e-12); check('A5.3-6', 0.8 - 0.35, 0.45, 1e-12); check('A5.3-7', [Fr(20, 50)*Fr(15, 50), Fr(6, 50)], [0.12, 0.12], 1e-12)
p = sp.symbols('p'); check('A5.3-8', float(sp.solve(sp.Rational(4, 10) + p - sp.Rational(4, 10)*p - sp.Rational(7, 10), p)[0]), 0.5, 1e-12)
die = range(1, 7); A = {d for d in die if d >= 5}; B = {d for d in die if d % 2 == 0}; check('A5.3-9', Fr(len(A & B), 6) == Fr(len(A), 6)*Fr(len(B), 6), True, 0)
cc = sp.solve(sp.Rational(1, 5) + 3*x - 1, x)[0]; c('A5.3-11a', cc, Fr(4, 15)); c('A5.3-11b', 2*cc, Fr(8, 15))
check('A5.3-12', [r for r in sp.solve(x*(x + sp.Rational(1, 5)) - sp.Rational(3, 20), x) if r > 0], [0.3], 1e-12)
q = sp.symbols('q'); s = sp.solve([sp.Rational(1, 5) + p + q + sp.Rational(3, 10) - 1, p - (sp.Rational(1, 5) + p)*(p + q)], [p, q], dict=True)
check('A5.3-13', [[float(d[p]), float(d[q])] for d in s if d[p] >= 0 and d[q] >= 0][0], [0.2, 0.3], 1e-12)
pb = 1 - 0.42/0.7; check('A5.3-14', [pb, 0.3*(1 - pb) + 0.7*pb], [0.4, 0.46], 1e-12)
# 5.3-15: build the joint distribution of A, B, C explicitly
pr = {}
for a, b2, c2 in product([0, 1], repeat=3):
    if a and b2: continue
    pab = 0.2 if a else 0.3 if b2 else 0.5
    pr[(a, b2, c2)] = pab * (0.5 if c2 else 0.5)
check('A5.3-15', [sum(v for k, v in pr.items() if k[0] or k[2]), sum(v for k, v in pr.items() if (k[0] or k[1]) and k[2]), pr[(0, 0, 0)]], [0.6, 0.25, 0.25], 1e-12)

# 5.4
c('A5.4-4a', Fr(3, 8)**2, Fr(9, 64)); c('A5.4-4b', 2*Fr(5, 8)*Fr(3, 8), Fr(15, 32)); c('A5.4-5', Fr(5, 8)*Fr(4, 7), Fr(5, 14))
check('A5.4-3-7', [0.6*0.7, 0.8 + 0.2*0.6, 0.7*0.2 + 0.3*0.5, 0.4*0.2 + 0.6*0.05], [0.42, 0.92, 0.29, 0.11], 1e-12)
c('A5.4-8', 1 - Fr(6, 10)*Fr(5, 9), Fr(2, 3)); c('A5.4-10', 1 - Fr(5, 6)**2, Fr(11, 36))
check('A5.4-11', [n for n in range(60) if Fr(3, 3 + n)**2 == Fr(9, 64)], [5], 0)
check('A5.4-12', [n for n in range(2, 60) if Fr(2, n)*Fr(1, n - 1) == Fr(1, 15)], [6], 0)
check('A5.4-13', sum(0.7**sum(o)*0.3**(3 - sum(o)) for o in product([0, 1], repeat=3) if sum(o) == 2), 0.441, 1e-12)
check('A5.4-14', 0.4 + 0.6*0.6*0.4, 0.544, 1e-12)
pf = 0.6*0.03 + 0.4*0.05; check('A5.4-15', [pf, 0.4*0.95, 2*pf*(1 - pf)], [0.038, 0.38, 0.0731], 0.00006)
