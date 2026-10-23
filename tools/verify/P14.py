# Pure Year 1, Chapter 14: exponentials and logarithms.
import math
from sympy import symbols, Rational as Q, sqrt, exp, log, E, diff, solve, simplify, nsimplify, Integer
x, t, k, a, b = symbols('x t k a b', real=True)
L = math.log10; ln = math.log
def same(qid, got, want):
    global count
    count += 1
    if got != want: fails.append(f'{qid}: worked out {got}, answer says {want}')
def sym(qid, e, want): exact(qid, simplify(e - want), 0)
def rts(qid, eq, want, tol=0.006):
    s = sorted(float(v) for v in solve(eq, x) if v.is_real); check(qid, s, sorted(want), tol)

# 14.1
check('P14.1', [2**5, 5**0], [32, 1], 0); same('P14.1-6', [v for v in solve(a**2 - 16, a) if v > 0], [4]); sym('P14.1-7', Integer(3)**(0 - 1), Q(1, 3))
s = solve([k - 5, k*a**2 - 45], [k, a], dict=True); same('P14.1-8', sorted((d[k], d[a]) for d in s if d[a] > 0), [(5, 3)])
same('P14.1-9', solve(x - (3*x - 4), x), [2]); same('P14.1-10', solve(x + 1 - 2*x, x), [1]); same('P14.1-12', [solve(2*x - (x + 3))[0], 4**3, 2**6], [3, 64, 64])
same('P14.1-14', sorted(v for v in solve(2**(2*x) - 5*2**x + 4, x)), [0, 2]); sym('P14.1-15', 2**Q(3, 2), 2*sqrt(2)); same('P14.1-15d', 8*Q(1, 2)**0 - 2**0, 7)
check('P14.1-11', [len(roots(lambda v: 2**v - (3 - v), -10, 10, 0.003)), 2**1 - (3 - 1)], [1, 0], 0)

# 14.2
check('P14.2-1', math.e**2, 7.39, 0.005); sym('P14.2-5', diff(5*exp(-3*x), x), -15*exp(-3*x)); check('P14.2-8', float(diff(3*exp(x/2), x).subs(x, 2)), 4.08, 0.005)
sym('P14.2-12', diff(2*exp(3*x), x).subs(x, 0)*x + 2, 6*x + 2); sym('P14.2-13', diff(exp(2*x) - 4*x, x), 2*exp(2*x) - 4)
sym('P14.2-14', diff(exp(x) + exp(-x), x).subs(x, 0), 0); sym('P14.2-15', diff(3*exp(2*x) + 1, x), 6*exp(2*x))

# 14.3
check('P14.3', [500*math.exp(0.3), 20000*math.exp(-0.45), 10*math.e, -2*math.exp(-0.2), 2000*math.exp(0.5)], [675, 12752, 27.2, -1.64, 3297], 0.6)
check('P14.3-9', [15000*math.exp(-1), 12000*math.exp(-0.5)], [5518, 7278], 0.6); check('P14.3-11', [300*math.exp(0.5), 300*math.e, math.exp(0.5)], [495, 815, 1.6487], 0.6)
check('P14.3-12', 8000*math.exp(0.9), 19677, 0.5); check('P14.3-13', [15*math.exp(-0.8), 0.2*15*math.exp(-0.8)], [6.74, 1.35], 0.006)
kk = -ln(0.75)/5; check('P14.3-14', 80*math.exp(-10*kk), 45, 1e-9); kk = ln(2)/10; check('P14.3-15', 20 + 70*math.exp(-20*kk), 37.5, 1e-9)

# 14.4
check('P14.4', [math.log2(8), L(1000), math.log(1, 5), math.log(1/9, 3), math.log(2, 4), 2**5, 64**(1/3), math.log(27, 9), 81**0.25, L(0.001), (9 - 1)/2, math.log2(math.log(81, 3)), math.log(8, math.sqrt(2))],
      [3, 3, 0, -2, 0.5, 32, 4, 1.5, 3, -3, 4, 2, 6], 1e-9)
same('P14.4-14', [v for v in solve(x**2 - 2*x - 3, x) if v > 0], [3]); check('P14.4-15', [math.log2(16), math.log(2, 16), 16**0.25], [4, 0.25, 2], 1e-9)
same('P14.4-15d', sorted(solve(x**2 - 1 - 8, x)), [-3, 3])

# 14.5
check('P14.5', [L(3) + L(5) - L(15), L(20) - L(4) - L(5), 3*L(2) - L(8), 2*L(3) + L(4) - L(36), math.log2(40) - math.log2(5), math.log(54, 3) - math.log(2, 3), 2*L(5) + L(4)],
      [0, 0, 0, 0, 3, 3, 2], 1e-9)
check('P14.5-8', [math.log(12, 7), 2*math.log(2, 7) + math.log(3, 7), math.log(4.5, 7), 2*math.log(3, 7) - math.log(2, 7)][0] - (2*math.log(2, 7) + math.log(3, 7)), 0, 1e-12)
same('P14.5-9', [v for v in solve(x*(x + 2) - 8, x) if v > 0], [2]); same('P14.5-10', solve(x + 5 - 3*x, x), [Q(5, 2)])
same('P14.5-12', sorted(solve(x**2 - 4*x + 3, x)), [1, 3]); same('P14.5-14', [v for v in solve(x**2 - 1 - 8, x) if v > 1], [3])
check('P14.5-15', [math.log(16, 4) - 0.5*math.log2(16), math.log2(16) + math.log(16, 4), 2*math.log(5, 4) - math.log2(5)], [0, 6, 0], 1e-9)

# 14.6
check('P14.6', [L(10)/L(2), L(30)/L(5), L(20)/L(3), L(50)/L(7)/2, 1 + L(12)/L(4), -2*L(3)/(L(3) - L(2)), L(3)/(L(3) - L(2)), L(4)/L(6), L(25)/L(6)],
      [3.32, 2.11, 2.73, 1.01, 2.79, -5.42, 2.71, 0.774, 1.80], 0.006)
check('P14.6-8', sorted([1, L(3)/L(2)]), [1, 1.58], 0.006); check('P14.6-8c', [2**2 - 5*2 + 6, 9 - 15 + 6], [0, 0], 0)
check('P14.6-10', [L(4)/L(5), 5**(2*0.8614) - 5**(1.8614) + 4], [0.861, 0], 0.01); check('P14.6-12', [2**(2*-1 + 1) - 7*2**-1 + 3, L(3)/L(2)], [0, 1.58], 0.006)
check('P14.6-14', min(n for n in range(100) if 1000*1.04**n > 2000), 18, 0); check('P14.6-15', [L(5)/L(2), 4**2 - 6*2**2 + 8, 4**1 - 6*2 + 8], [2.32, 0, 0], 0.006)

# 14.7
check('P14.7', [ln(5), math.e**2, 0.5*ln(7), (math.e**2 + 1)/3, ln(10) - 1, -ln(4), ln(2)/0.03, (1 + ln(5))/3], [1.61, 7.39, 0.973, 2.80, 1.30, -1.386, 23.1, 0.870], 0.006)
same('P14.7-8', sorted(solve(exp(2*x) - 5*exp(x) + 6, x), key=float), [log(2), log(3)]); same('P14.7-10', [v for v in solve(x**2 - x - 6, x) if v > 0], [3])
same('P14.7-11', solve(exp(2*x) - 3*exp(x), x), [log(3)]); same('P14.7-13', sorted(solve(exp(2*x) - 3*exp(x) + 2, x), key=float), [0, log(2)])
kk = ln(2)/10; check('P14.7-15', [ln(7)/kk, 70*kk], [28.1, 4.85], 0.05)

# 14.8
check('P14.8', [10**0.5, 10**0.3, 10**0.7, 10**0.48, 10**0.3, math.e**2, L(5), L(2), 10**-0.2, 10**(2 + 0.2*10)], [3.16, 2.00, 5.01, 3.02, 2.00, 7.39, 0.699, 0.301, 0.631, 10000], 0.006)
check('P14.8-8', [(L(12) - L(3))/(L(2) - L(1)), (L(48) - L(12))/(L(4) - L(2)), 3*1**2], [2, 2, 3], 1e-9)
check('P14.8-12', [(3.2 - 2)/6, 10**2, 10**0.2], [0.2, 100, 1.585], 0.001); check('P14.8-13', [L(8)/L(2), 24/2**3], [3, 3], 1e-9)
g = (0.88 - 1.20)/4; c = 1.20 - g; check('P14.8-15', [g, c, 10**c, 10**g, 10**(c + 8*g)], [-0.08, 1.28, 19.1, 0.832, 4.37], 0.05)
