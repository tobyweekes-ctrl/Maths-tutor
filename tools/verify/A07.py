# Statistics and Mechanics Year 1, Chapter 7: binomial hypothesis tests, critical regions and tail probabilities.
from math import comb, log
pmf = lambda r, n, p: comb(n, r) * p**r * (1 - p)**(n - r)
F = lambda r, n, p: sum(pmf(k, n, p) for k in range(r + 1)) if r >= 0 else 0.0
G = lambda r, n, p: 1 - F(r - 1, n, p)          # P(X >= r)
def lower(n, p, a):
    """Lower critical value, its tail probability, and the next tail probability (which must exceed a)."""
    c = max(c for c in range(n + 1) if F(c, n, p) <= a); return [c, F(c, n, p), F(c + 1, n, p)]
def upper(n, p, a):
    c = min(c for c in range(n + 1) if G(c, n, p) <= a); return [c, G(c, n, p), G(c - 1, n, p)]
T = 0.00006   # answers are given to 4 decimal places

# 7.1: tail probabilities compared with the level
check('A7.1-8', [G(10, 20, .3), F(9, 20, .3)], [0.0480, 0.9520], T); check('A7.1-9', F(2, 15, .4), 0.0271, T)
check('A7.1-12', [G(8, 12, .4), F(7, 12, .4)], [0.0573, 0.9427], T); check('A7.1-14', F(0, 25, .15), 0.0172, T)
check('A7.1-15', [G(7, 25, .15), F(6, 25, .15)], [0.0695, 0.9305], T); check('A7.1-notes', [G(15, 20, .5), pmf(15, 20, .5)], [0.0207, 0.0148], T)

# 7.2: critical regions
check('A7.2-1', lower(20, .3, .05), [2, 0.0355, 0.1071], T); check('A7.2-4', upper(10, .5, .05), [9, 0.0107, 0.0547], T)
check('A7.2-5', lower(25, .2, .10), [2, 0.0982, 0.2340], T); check('A7.2-6', upper(30, .4, .05), [17, 0.0481, 0.0971], T)
check('A7.2-7', upper(20, .15, .01), [8, 0.0059, 0.0219], T)
L, U = lower(20, .4, .05), upper(20, .4, .05); check('A7.2-8', L + U + [L[1] + U[1]], [3, 0.0160, 0.0510, 13, 0.0210, 0.0565, 0.0370], T)
check('A7.2-9', lower(40, .25, .05), [5, 0.0433, 0.0962], T); check('A7.2-10', upper(50, .1, .05), [10, 0.0245, 0.0579], T)
L, U = lower(30, .5, .025), upper(30, .5, .025); check('A7.2-12', L + U + [L[1] + U[1]], [9, 0.0214, 0.0494, 21, 0.0214, 0.0494, 0.0428], T)
check('A7.2-13', [min(n for n in range(1, 60) if pmf(0, n, .2) <= .05), log(.05) / log(.8)], [14, 13.4], 0.05)
L, U = lower(25, .3, .025), upper(25, .3, .025); check('A7.2-14', L + U + [L[1] + U[1]], [2, 0.0090, 0.0332, 13, 0.0175, 0.0442, 0.0264], T)
L, U = lower(40, .35, .05), upper(40, .35, .05); check('A7.2-15', L + U + [L[1] + U[1], 8 < 19 < 20], [8, 0.0303, 0.0644, 20, 0.0363, 0.0699, 0.0666, True], T)

# 7.3: one-tailed tests
check('A7.3-4', G(15, 20, .5), 0.0207, T); check('A7.3-5', F(1, 30, 1/6), 0.0295, T); check('A7.3-6', [F(15, 20, .9), G(15, 20, .9)], [0.0432, 0.9887], T)
check('A7.3-8', upper(25, .2, .05), [9, 0.0468, 0.1091], T); check('A7.3-9', [G(6, 15, .2), F(5, 15, .2)], [0.0611, 0.9389], T)
check('A7.3-10', F(3, 40, .2), 0.0285, T); check('A7.3-11', lower(50, .3, .05), [9, 0.0402, 0.0789], T)
check('A7.3-12', upper(20, .25, .05), [9, 0.0409, 0.1018], T); check('A7.3-13', [G(12, 30, .25), F(11, 30, .25)], [0.0507, 0.9493], T)
check('A7.3-14', lower(60, .15, .05), [4, 0.0424, 0.0968], T); check('A7.3-15', upper(30, .1, .05), [7, 0.0258, 0.0732], T)

# 7.4: two-tailed tests
check('A7.4-4', [F(3, 20, .35), 20*.35], [0.0444, 7], T); check('A7.4-5', G(14, 20, .5), 0.0577, T)
check('A7.4-6', F(1, 25, .2), 0.0274, T); check('A7.4-9', G(11, 25, .3), 0.0978, T); check('A7.4-11', F(5, 30, .3), 0.0766, T)
L, U = lower(20, .3, .025), upper(20, .3, .025); check('A7.4-8', L + U + [L[1] + U[1]], [1, 0.0076, 0.0355, 11, 0.0171, 0.0480, 0.0248], T)
L, U = lower(40, .5, .025), upper(40, .5, .025); check('A7.4-10', L + U + [L[1] + U[1]], [13, 0.0192, 0.0403, 27, 0.0192, 0.0403, 0.0385], T)
L, U = lower(50, .2, .05), upper(50, .2, .05); check('A7.4-12', L + U + [L[1] + U[1]], [5, 0.0480, 0.1034, 16, 0.0308, 0.0607, 0.0788], T)
check('A7.4-13', G(16, 40, .3), 0.1151, T)
L, U = lower(30, .25, .025), upper(30, .25, .025); check('A7.4-14', L + U + [L[1] + U[1]], [2, 0.0106, 0.0374, 13, 0.0216, 0.0507, 0.0322], T)
L, U = lower(60, .4, .05), upper(60, .4, .05); check('A7.4-15', L + U + [L[1] + U[1]], [17, 0.0413, 0.0719, 31, 0.0445, 0.0746, 0.0858], T)
