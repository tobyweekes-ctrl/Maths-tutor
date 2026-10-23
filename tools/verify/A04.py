# Statistics and Mechanics Year 1, Chapter 4: correlation and regression.
import math, sympy as sp
def pmcc(pts):
    n = len(pts); mx = sum(p[0] for p in pts) / n; my = sum(p[1] for p in pts) / n
    sxy = sum((x - mx)*(y - my) for x, y in pts); sxx = sum((x - mx)**2 for x, _ in pts); syy = sum((y - my)**2 for _, y in pts)
    return sxy / math.sqrt(sxx * syy)
def worst(pts):
    """The point whose removal most improves the linear fit of the rest."""
    return max(pts, key=lambda p: abs(pmcc([q for q in pts if q != p])))

# 4.1: signs and strengths of the plotted data, and the odd points out
check('A4.1-1', pmcc([(1, 2.1), (2, 2.9), (3, 3.2), (4, 4.4), (5, 4.8), (6, 6.1), (7, 6.5), (8, 7.9)]) > 0.95, True, 0)
P4 = [(1, 3), (2, 4.5), (3, 5), (4, 6.5), (5, 7), (6, 2), (7, 9), (8, 10)]; check('A4.1-4', [*worst(P4), pmcc([p for p in P4 if p != (6, 2)]) > 0.95], [6, 2, True], 0)
r = pmcc([(1, 6), (2, 7.5), (3, 4.5), (4, 7), (5, 4), (6, 6.5), (7, 3.5), (8, 5.5)]); check('A4.1-7', -0.6 < r < -0.2, True, 0)
check('A4.1-8', pmcc([(1, 12), (2, 15), (3, 21), (4, 20), (5, 26), (6, 30), (7, 29), (8, 35)]) > 0.95, True, 0)
A = [(2, 3), (2.5, 2.2), (3, 3.6), (3.5, 2.5), (4, 3.1)]; B = [(7, 8.2), (7.5, 7.1), (8, 7.9), (8.5, 7.3), (9, 8.4)]
check('A4.1-6', [pmcc(A + B) > 0.9, abs(pmcc(A)) < 0.3, abs(pmcc(B)) < 0.3], [True, True, True], 0)
P12 = [(1, 3), (2, 5), (3, 7), (4, 19), (5, 11), (6, 13)]; check('A4.1-12', [*worst(P12), 2*4 + 1, round(pmcc([(1, 3), (2, 5), (3, 7), (4, 9), (5, 11), (6, 13)]), 9)], [4, 19, 9, 1], 0)
check('A4.1-13', [pmcc([(1, 15), (2, 13), (3, 11.5), (4, 10), (5, 8)]) < -0.95, 30 - 15, 20 - 8], [True, 15, 12], 0)
P15 = [(10, 52), (12, 58), (14, 63), (16, 70), (18, 30), (20, 82), (22, 88), (24, 95)]; rest = [p for p in P15 if p != (18, 30)]
n = len(rest); mx = sum(p[0] for p in rest)/n; my = sum(p[1] for p in rest)/n
b = sum((x - mx)*(y - my) for x, y in rest) / sum((x - mx)**2 for x, _ in rest)
check('A4.1-15', [*worst(P15), pmcc(rest) > 0.95, my + b*(18 - mx)], [18, 30, True, 76], 1)

# 4.2
x, y, p, q, t = sp.symbols('x y p q t')
check('A4.2-1', 4 + 2.5*6, 19, 1e-9); check('A4.2-4', 0.8 + 0.35*20, 7.8, 1e-9); check('A4.2-5', 40 - 1.5*12, 22, 1e-9)
exact('A4.2-8', sp.solve(sp.Eq(y/10, 2 + sp.Rational(1, 2)*(x - 100)), y)[0], 5*x - 480)
check('A4.2-9', 3.1 + 1.8*12, 24.7, 1e-9); check('A4.2-10', [60/10, 210/10, 21 - 2.4*6], [6, 21, 6.6], 1e-9)
check('A4.2-11', 30 - (5 + 2.8*8), 2.6, 1e-9)
exact('A4.2-12', sp.expand(sp.Rational(124, 10) + sp.Rational(36, 10)*(x - 1990)/5), sp.Rational(72, 100)*x - sp.Rational(14204, 10))
check('A4.2-12b', 12.4 + 3.6*(2005 - 1990)/5, 23.2, 1e-9)
check('A4.2-13', [-90 + 0.95*175, -90 + 0.95*90], [76.25, -4.5], 1e-9)
check('A4.2-14', [312/8 - 4.5*48/8, 312/8 - 4.5*6 + 4.5*7], [12, 43.5], 1e-9)
exact('A4.2-15', sp.solve(sp.Eq(y - 200, 4 + sp.Rational(12, 10)*(x - 50)/10), y)[0], 198 + sp.Rational(12, 100)*x)
check('A4.2-15b', 198 + 0.12*75, 207, 1e-9)
