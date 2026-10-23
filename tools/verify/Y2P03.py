# Pure Year 2, Chapter 3: sequences and series, by generating terms directly.
import math, sympy as sp
from fractions import Fraction as Fr
AP = lambda a, d, n: [a + d*k for k in range(n)]
GP = lambda a, r, n: [a*r**k for k in range(n)]
first = lambda cond, lim=10**5: next(k for k in range(1, lim) if cond(k))
v = sp.symbols('v')
# 3.1
check('2P3.1-1-3', [AP(5, 3, 20)[-1], 11 - 4*1, 11 - 4*3, AP(4, 3, 33)[-1]], [62, 7, -1, 100], 0)
d = (31 - 11)/5; check('2P3.1-4', [d, 11 - 2*d], [4, 3], 1e-9); check('2P3.1-5', AP(6, 5, 400).index(201) + 1, 40, 0)
check('2P3.1-6', next(t for t in AP(7, 6, 100) if t > 200), 205, 0); check('2P3.1-7', float(sp.solve(2*(2*v + 1) - v - (5*v - 6), v)[0]), 4, 1e-9)
d = (45 - 17)/7; a = 17 - 4*d; check('2P3.1-8', a + 19*d, 77, 1e-9)
check('2P3.1-9', first(lambda n: 4*n - 1 > 106 - 6*n), 11, 0); check('2P3.1-10', first(lambda n: 24000 + 1200*(n - 1) > 35000), 11, 0)
x = float(sp.solve(2*(4*v - 3) - (2*v + 1) - (3*v + 4), v)[0]); check('2P3.1-12', [x, (4*x - 3) - (2*x + 1)], [11/3, 10/3], 1e-9)
check('2P3.1-13', [math.log(9) - math.log(3), math.log(27) - math.log(9)], [math.log(3), math.log(3)], 1e-12)
a_, d_ = sp.symbols('a d'); s14 = sp.solve([2*a_ + 8*d_ - 30, a_ + 9*d_ - 32], [a_, d_]); check('2P3.1-14', [s14[a_], s14[d_]], [1.4, 3.4], 1e-9)
s15 = sp.solve([2*a_ + 5*d_ - 25, a_*(a_ + 2*d_) - 55], [a_, d_]); check('2P3.1-15', sorted(float(p[1]) for p in s15) + sorted(float(p[0]) for p in s15), [3, 27, -55, 5], 1e-9)
# 3.2
check('2P3.2-1-4', [sum(range(1, 101)), sum(AP(3, 4, 20)), sum(range(2, 63, 3)), sum(range(1, 100, 2))], [5050, 820, 672, 2500], 0)
n = sp.symbols('n'); exact('2P3.2-6', sp.expand(n/2*(10 + 4*(n - 1))), n*(2*n + 3))
check('2P3.2-7', first(lambda k: sum(AP(3, 4, k)) > 500), 16, 0); check('2P3.2-8', float(sp.solve(5*(4 + 9*v) - 155, v)[0]), 3, 1e-9)
check('2P3.2-9', sum(k for k in range(101, 200) if k % 3 == 0), 4950, 0); check('2P3.2-10', sum(AP(20, 5, 24)), 1860, 0)
exact('2P3.2-11', sp.expand((3*n**2 + 2*n) - (3*(n - 1)**2 + 2*(n - 1))), 6*n - 1)
check('2P3.2-12', max(sum(AP(30, -2, k)) for k in range(1, 40)), 240, 0)
s13 = sp.solve([2*(2*a_ + 3*d_) - 26, 4*(2*a_ + 7*d_) - 100], [a_, d_]); check('2P3.2-13', [s13[a_], s13[d_]], [2, 3], 1e-9)
check('2P3.2-14', first(lambda k: sum(AP(5, 3, k)) == 1455, 200), 30, 0)
check('2P3.2-15', [sum(AP(50, 10, 30)), first(lambda k: sum(AP(50, 10, k)) > 3000)], [5850, 21], 0)
# 3.3
check('2P3.3-1-3', [GP(3, 2, 10)[-1], Fr(27, 81), 5*(-2)**2], [1536, 1/3, 20], 1e-12)
r = 27**(1/3); check('2P3.3-4', [r, 12/r], [3, 4], 1e-9); check('2P3.3-5', next(t for t in GP(2, 3, 30) if t > 1000), 1458, 0)
check('2P3.3-6', [float(s) for s in sp.solve((v + 6)**2 - 9*v**2, v) if s > 0], [3], 1e-9); check('2P3.3-7', 20000*0.85**5, 8874.11, 0.01)
r = 0.064**(1/3); check('2P3.3-8', [r, 20/r**2], [0.4, 125], 1e-9); check('2P3.3-9', next(t for t in GP(512, 0.5, 30) if t < 1), 0.5, 0)
check('2P3.3-10', first(lambda k: 5000*1.03**k > 8000), 16, 0); check('2P3.3-11', [-6/3, -6/-3], [-2, 2], 1e-12)
check('2P3.3-12', float(sp.solve((v + 2)**2 - v*(v + 6), v)[0]), 2, 1e-12); check('2P3.3-13', first(lambda k: 3*2**k == 3072), 10, 0)
exact('2P3.3-14', sp.factor((a_ + 2*d_)**2 - a_*(a_ + 6*d_)), 2*d_*(2*d_ - a_))
check('2P3.3-15', [3000*1.04**10, first(lambda k: 1.04**k >= 2), 3000*1.04**10 - 4200], [4440.73, 18, 240.73], 0.006)
# 3.4
check('2P3.4-1-3', [sum(GP(1, 2, 10)), sum(GP(3, 2, 6)), sum(GP(16, 0.5, 5))], [1023, 189, 31], 1e-9)
check('2P3.4-5', sum(GP(2, -3, 10)), -29524, 0); check('2P3.4-6', sum(GP(30000, 1.02, 10)), 328491.6, 0.1)
check('2P3.4-7', first(lambda k: sum(GP(5, 2, k)) == 5115, 40), 10, 0); check('2P3.4-8', first(lambda k: sum(GP(3, 1.5, k)) > 1000, 100), 13, 0)
check('2P3.4-9', [2, 7/(1 + 2 + 4)], [2, 1], 1e-12); check('2P3.4-10', sum(GP(1, 2, 20)), 1048575, 0)
check('2P3.4-11', sum(GP(50, 0.9, 8)), 285, 0.3); check('2P3.4-12', 520*2/80, 13, 1e-12); check('2P3.4-13', sum(GP(1, 1.1, 10)), 15.94, 0.006)
A, B = sum(AP(25000, 1500, 10)), sum(GP(25000, 1.05, 10)); check('2P3.4-14', [A, B, A - B], [317500, 314447, 3053], 1)
check('2P3.4-15', 10 + 2*sum(GP(6, 0.6, 4)), 36.11, 0.006)
# 3.5
check('2P3.5-1-3', [8/0.5, 9/(1 + 1/3)], [16, 6.75], 1e-12); check('2P3.5-4-5', [1 - 5/20, 60*0.75], [0.75, 45], 1e-12)
check('2P3.5-6-7', [0.3/0.9, Fr(45, 99)], [1/3, 5/11], 1e-12); check('2P3.5-8', 1 - 1/4, 0.75, 0)
rs = sorted(float(s) for s in sp.solve(6/v - 27*(1 - v), v)); check('2P3.5-9', rs + [6/rs[0], 6/rs[1]], [1/3, 2/3, 18, 9], 1e-9)
check('2P3.5-10', 10 + 2*6/0.4, 40, 1e-9); check('2P3.5-12', first(lambda k: 2 - sum(GP(1, 0.5, k)) < 0.01), 8, 0)
check('2P3.5-13', 1/(1 - 0.5), 2, 0); check('2P3.5-14', (2/3)**(1/3), 0.874, 0.0006)
check('2P3.5-15', [0.125**(1/3), 12/0.5, 24/0.5, first(lambda k: sum(GP(24, 0.5, k)) > 47.9)], [0.5, 24, 48, 9], 1e-9)
# 3.6
check('2P3.6-1-2', [sum(r*r for r in range(1, 6)), sum(2*r + 1 for r in range(1, 5))], [55, 24], 0)
check('2P3.6-4-7', [sum(3*r - 1 for r in range(1, 21)), sum(2**r for r in range(1, 9)), sum(4*r + 2 for r in range(5, 16)), 1.5/0.5], [610, 510, 462, 3], 1e-12)
r_ = sp.symbols('r'); exact('2P3.6-8', sp.expand(sp.summation(2*r_ + 3, (r_, 1, n))), n**2 + 4*n)
check('2P3.6-9', first(lambda k: sum(5*r - 2 for r in range(1, k + 1)) == 1010, 100), 20, 0)
check('2P3.6-10-11', [sum(5*3**(r - 1) for r in range(1, 11)), sum(2*r - 1 for r in range(11, 31))], [147620, 800], 0)
check('2P3.6-12', max(k for k in range(1, 200) if sum(100 - 3*r for r in range(1, k + 1)) > 0), 65, 0)
check('2P3.6-13-14', [(2/3)/(1/3), sum(r*math.log(2) for r in range(1, 11))], [2, 38.1], 0.04)
check('2P3.6-15', [sum(3**r + 2*r for r in range(1, 6)), (3**6 - 3)/2 + 5*6], [393, 393], 0)
# 3.7
def seq(f, u1, k):
    u = [u1]
    for _ in range(k - 1): u.append(f(u[-1]))
    return u
check('2P3.7-1', seq(lambda u: 2*u + 1, 3, 3)[1:], [7, 15], 0); check('2P3.7-2', seq(lambda u: u + 4, 2, 5), [4*k - 2 for k in range(1, 6)], 0)
check('2P3.7-4', float(sp.solve(3*(3*2 - v) - v - 11, v)[0]), 1.75, 1e-12)
check('2P3.7-5', seq(lambda u: 1/(1 - u), 2, 4), [2, -1, 0.5, 2], 1e-12); check('2P3.7-6', sum(seq(lambda u: u + 3, 5, 4)), 38, 0)
check('2P3.7-7-8', [*seq(lambda u: 0.5*u + 4, 2, 3)[1:], seq(lambda u: 0.5*u + 4, 2, 80)[-1]], [5, 6.5, 8], 1e-9)
check('2P3.7-9', sorted(float(s) for s in sp.solve(v*(v + 2) + 2 - 14, v)), [-1 - 13**0.5, -1 + 13**0.5], 1e-9)
check('2P3.7-10', all(2*(k + 1)**2 - 5*(k + 1) > 2*k*k - 5*k for k in range(1, 200)), True, 0)
check('2P3.7-11', sum(seq(lambda u: 5 - u, 2, 20)), 50, 0)
u = [1, 2]
for _ in range(98): u.append(-u[-2])
check('2P3.7-12', sum(u), 0, 0); check('2P3.7-13', seq(lambda t: 3*t - 2, 2, 8), [3**(k - 1) + 1 for k in range(1, 9)], 0)
check('2P3.7-14', seq(lambda p: 1.2*p - 300, 2000, 4)[1:], [2100, 2220, 2364], 1e-9)
s15 = sp.solve([4*a_ + d_ - 7, 7*a_ + d_ - 13], [a_, d_]); uu = seq(lambda t: 2*t - 1, 4, 5)
check('2P3.7-15', [s15[a_], s15[d_], uu[3], uu[4], sum(uu)], [2, -1, 25, 49, 98], 0)
# 3.8
check('2P3.8-1-2', [20000 + 4*1000, 400*1.05**2], [24000, 441], 1e-9); check('2P3.8-4-5', [sum(AP(20000, 1000, 10)), sum(GP(400, 1.05, 10))], [245000, 5031], 0.5)
check('2P3.8-6-7', [AP(2, 0.5, 100).index(10) + 1, sum(AP(2, 0.5, 17))], [17, 102], 0); check('2P3.8-8', first(lambda k: 50*2**k > 1e6), 15, 0)
bal = 0
for _ in range(12): bal = (bal + 100)*1.005
check('2P3.8-9', bal, 1239.72, 0.006); check('2P3.8-11', [10*(1 - 0.3**1)/0.7, 10/0.7], [10, 14.29], 0.006)
check('2P3.8-12', [30000 + 7*1500, 28000*1.06**7, sum(AP(30000, 1500, 8)), sum(GP(28000, 1.06, 8))], [40500, 42102, 282000, 277129], 1)
check('2P3.8-13', AP(300, -50, 5) + [sum(AP(300, -50, 5))], [300, 250, 200, 150, 100, 1000], 0)
check('2P3.8-14', [sum(GP(1.2, 0.8, 10)), 1.2/0.2], [5.36, 6], 0.006)
check('2P3.8-15', [5000*1.04**4, sum(GP(5000, 1.04, 10)), first(lambda k: sum(GP(5000, 1.04, k)) > 100000)], [5849, 60031, 15], 0.6)
