# Pure Year 1, Chapter 2: quadratics.
from sympy import symbols, Rational as Q, sqrt, expand, solve, simplify, nsimplify
x, k, t = symbols('x k t', real=True)

def sols(qid, expr, want, var=None):
    """Exact solutions of expr = 0 compared as sets."""
    global count
    count += 1
    got = solve(expr, var or x)
    if sorted(simplify(g) for g in got) != sorted(simplify(w) for w in want) and \
       sorted(float(g) for g in got) != sorted(float(w) for w in want):
        fails.append(f'{qid}: solved {got}, answer says {want}')

def nsols(qid, expr, want, tol=0.006, var=None):
    vals = sorted(float(g) for g in solve(expr, var or x) if g.is_real)
    check(qid, vals, want, tol)

# 2.1
sols('P2.1-1', x**2 - 7*x + 10, [2, 5]); sols('P2.1-2', x**2 - 5*x, [0, 5]); sols('P2.1-3', (x - 3)**2 - 16, [7, -1])
sols('P2.1-4', 3*x**2 - 5*x - 2, [Q(-1, 3), 2]); sols('P2.1-5', x**2 + 4*x - 1, [-2 + sqrt(5), -2 - sqrt(5)])
nsols('P2.1-6', 2*x**2 - 3*x - 7, [-1.27, 2.77]); sols('P2.1-7', 6 - x*(x - 1), [3, -2])
sols('P2.1-8', x**4 - 13*x**2 + 36, [2, -2, 3, -3])
check('P2.1-9', [9 - 7*3 + 12, 16 - 7*4 + 12], [0, 0], 0); sols('P2.1-10', 2*(x + 1)**2 - 5*(x + 1) - 3, [Q(-3, 2), 2])
sols('P2.1-11', x*(2*x + 3) - (4*x + 1), [Q(-1, 2), 1]); sols('P2.1-12', 3*(x - 2) + 2*(x + 1) - (x + 1)*(x - 2), [3 + sqrt(7), 3 - sqrt(7)])
check('P2.1-13', [9**0 - 10*3**0 + 9, 9**2 - 10*3**2 + 9], [0, 0], 0)
check('P2.1-14', [9 - 7*3 + 12, 16 - 7*4 + 12], [0, 0], 0); sols('P2.1-14c', (2*x - 1)**2 - 7*(2*x - 1) + 12, [2, Q(5, 2)])
phi = (1 + sqrt(5))/2
exact('P2.1-15a', phi**2 - phi - 1, 0); exact('P2.1-15b', phi**3, 2*phi + 1); exact('P2.1-15c', expand(phi**4), Q(7, 2) + Q(3, 2)*sqrt(5))

# 2.2
exact('P2.2-1', expand((x + 4)**2 - 16), x**2 + 8*x); exact('P2.2-2', expand((x - 3)**2 + 2), x**2 - 6*x + 11)
exact('P2.2-4', expand((x + Q(5, 2))**2 - Q(13, 4)), x**2 + 5*x + 3); exact('P2.2-5', expand(2*(x + 3)**2 - 11), 2*x**2 + 12*x + 7)
sols('P2.2-6', x**2 - 4*x - 3, [2 + sqrt(7), 2 - sqrt(7)]); exact('P2.2-7', expand(3*(x - 1)**2 - 2), 3*x**2 - 6*x + 1)
exact('P2.2-8', expand(16 - (x - 3)**2), 7 + 6*x - x**2); sols('P2.2-9', 2*x**2 + 8*x + 5, [-2 + sqrt(6)/2, -2 - sqrt(6)/2])
exact('P2.2-10', expand((x - 3)**2 + 4), x**2 - 6*x + 13); exact('P2.2-11', expand((x - 4)**2 + 4), x**2 - 8*x + 20)
exact('P2.2-12', expand((2*x - 3)**2 + 4), 4*x**2 - 12*x + 13); check('P2.2-12b', 8/4, 2, 0)
a_, b_, c_ = 2, 7, 3; r = solve(a_*x**2 + b_*x + c_, x); check('P2.2-13', sorted(float(v) for v in r), sorted([(-b_ + (b_**2 - 4*a_*c_)**0.5)/(2*a_), (-b_ - (b_**2 - 4*a_*c_)**0.5)/(2*a_)]), 1e-9)
sols('P2.2-14', 3*k + 4 - k**2, [4, -1], k)
check('P2.2-15', [(3 - 3)**2 + (-2 + 2)**2, 9 + 4 - 18 - 8 + 20], [0, 7], 0)

# 2.3
check('P2.3-1', 3*4 + 4, 16, 0); sols('P2.3-2', x**2 - 9*x + 20, [4, 5]); exact('P2.3-4', expand((x + 2)**2 + 3), x**2 + 4*x + 7)
exact('P2.3-5', expand((x + 3)**2 + 2), x**2 + 6*x + 11); sols('P2.3-6', x**2 - 2*x - 15, [5, -3]); sols('P2.3-7', (x + 2)**2 - x**2, [-1])
f = lambda v: v**2 - 4*v + 1; check('P2.3-8', [min(f(i/1000) for i in range(5001)), max(f(i/1000) for i in range(5001))], [-3, 6], 1e-6)
sols('P2.3-9', (2*x)**2 - 2*(2*x) - 3, [Q(3, 2), Q(-1, 2)]); check('P2.3-10', (2.5 + 2)*(2.5 - 7), -81/4, 1e-12)
exact('P2.3-11', expand(4 - (x - 1)**2), 3 + 2*x - x**2)
g = lambda v: 2*v**2 - 8*v + 11; check('P2.3-12', [min(g(i/1000 - 1) for i in range(5001)), max(g(i/1000 - 1) for i in range(5001))], [3, 21], 1e-6)
sols('P2.3-13', x**2 - 3*x - (2*x + 1 - 2), [(5 + sqrt(21))/2, (5 - sqrt(21))/2])
check('P2.3-14', [2*1 - 3 + 4, 2 + 3 + 4, (-3)**2 - 4*2*4], [3, 9, -23], 0)
h = lambda v: v**2 - 6*v + 13; check('P2.3-15', [min(h(i/100) for i in range(-1000, 1000)), h(0) - h(0), h(2) - h(4)], [4, 0, 0], 1e-9)

# 2.4
sols('P2.4-2', x**2 - 9, [3, -3]); exact('P2.4-4', expand((x - 3)**2 - 4), x**2 - 6*x + 5)
sols('P2.4-5', x**2 + 2*x - 8, [-4, 2]); check('P2.4-5 min', (-1)**2 + 2*(-1) - 8, -9, 0); check('P2.4-6', 4*2 - 2**2, 4, 0)
exact('P2.4-7', expand((x - 3)**2 - 2), x**2 - 6*x + 7); sols('P2.4-8', 2*x**2 - 3*x - 2, [Q(-1, 2), 2])
exact('P2.4-8 min', 2*Q(3, 4)**2 - 3*Q(3, 4) - 2, Q(-25, 8)); exact('P2.4-9', expand(-2*(x + 1)*(x - 5)).subs(x, 2), 18)
exact('P2.4-10', expand((x - 2)**2 + 3), x**2 - 4*x + 7); check('P2.4-11', -2*(0 - 2)**2 + 13, 5, 0)
sols('P2.4-12', 3*k - k**2 - 2, [1, 2], k); sols('P2.4-13', x**2 + 6*x - 3, [-3 + 2*sqrt(3), -3 - 2*sqrt(3)])
exact('P2.4-14', expand((x - 1)*(x - 7)), expand((x - 4)**2 - 9))
sols('P2.4-15', (x**2 - 4*x + 3) - (-x**2 + 4*x + 2), [2 + sqrt(14)/2, 2 - sqrt(14)/2])
exact('P2.4-15y', simplify(((2 + sqrt(14)/2)**2 - 4*(2 + sqrt(14)/2) + 3)), Q(5, 2))

# 2.5
check('P2.5-1', 25 - 12, 13, 0); check('P2.5-2', 9 - 32, -23, 0); sols('P2.5-4', k**2 - 64, [8, -8], k); sols('P2.5-5', 36 - 4*k, [9], k)
sols('P2.5-8', (k + 1)**2 - 16, [3, -5], k); sols('P2.5-9', 16 - 4*k**2, [2, -2], k)
sols('P2.5-9r', 2*x**2 + 4*x + 2, [-1]); exact('P2.5-10', expand((2*k)**2 - 4*(k**2 + 1)), -4); exact('P2.5-11', expand(k**2 - 4*(k - 1)), expand((k - 2)**2))
sols('P2.5-12', 16 - 4*(k - 1)*(k + 2), [2, -3], k); sols('P2.5-12r', (-3 - 1)*x**2 + 4*x + (-3 + 2), [Q(1, 2)])
sols('P2.5-13', x**2 - 4*x + 7 - (2*x - 2), [3]); sols('P2.5-14', 4*x**2 + 4*x + 1, [Q(-1, 2)])
sols('P2.5-15a', x**2 - 4*x + 3, [1, 3]); sols('P2.5-15b', x**2 - 8*x + 15, [3, 5])

# 2.6
check('P2.6-1', 20 - 5, 15, 0); nsols('P2.6-2', 20*x - 5*x**2, [0, 4]); check('P2.6-3', 40 - 20, 20, 0)
check('P2.6-4', max(v*(30 - v) for v in range(31)), 225, 0); check('P2.6-5', max(-2*v*v + 24*v - 40 for v in range(20)), 32, 0)
sols('P2.6-6', -2*x**2 + 24*x - 40, [2, 10]); nsols('P2.6-7', 12*x - 4.9*x**2, [0, 2.45])
check('P2.6-8', [5/9.8, 10 + 25/(4*4.9)], [0.510, 11.28], 0.006); nsols('P2.6-9', 10 + 5*x - 4.9*x**2, [-1.01, 2.03])
sols('P2.6-10', (x + 2)*(x + 5) - 70, [5, -12]); check('P2.6-11', [max(40*d - d*d + 100 for d in range(31)), 40*45 - 45**2 + 100], [500, -125], 0)
nsols('P2.6-12', 1.2 + 9*x - 4.9*x**2 - 4, [0.397, 1.44]); check('P2.6-12b', 1.4399 - 0.3969, 1.04, 0.006)
check('P2.6-13', max((v/100 - 5)*(200 - 10*v/100) for v in range(500, 2000)), 562.5, 1e-9)
check('P2.6-14', max(v/100*(10 - v/100) for v in range(1001)), 25, 1e-9)
kk = (6 - 1 + 0.02*2500)/50; check('P2.6-15', [kk, 1 + kk*27.5 - 0.02*27.5**2], [1.1, 16.1], 0.03); nsols('P2.6-15c', 1 + 1.1*x - 0.02*x**2, [-0.894, 55.9], 0.06)
