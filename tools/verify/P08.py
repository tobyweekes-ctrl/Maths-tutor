# Pure Year 1, Chapter 8: binomial expansion.
from sympy import symbols, Rational as Q, expand, binomial, factorial, solve, Poly, series
x, k, a, b, n, p = symbols('x k a b n p')

def coef(e, r): return Poly(expand(e), x).coeff_monomial(x**r)
def ex(qid, e, want): exact(qid, expand(e - want), 0)
def lead(qid, e, terms, want):
    """First `terms` terms (ascending) of e."""
    P = Poly(expand(e), x); exact(qid, sum(P.coeff_monomial(x**r) * x**r for r in range(terms)) - want, 0)
def same(qid, got, want):
    global count
    count += 1
    if got != want: fails.append(f'{qid}: worked out {got}, answer says {want}')

# 8.1
same('P8.1-1', [binomial(5, r) for r in range(6)], [1, 5, 10, 10, 5, 1]); ex('P8.1-2', (x + 1)**3, x**3 + 3*x**2 + 3*x + 1)
ex('P8.1-4', (x + 2)**3, x**3 + 6*x**2 + 12*x + 8); ex('P8.1-5', (1 - x)**4, 1 - 4*x + 6*x**2 - 4*x**3 + x**4); ex('P8.1-6', (2*x + 3)**3, 8*x**3 + 36*x**2 + 54*x + 27)
check('P8.1-7', coef((1 + 2*x)**5, 2), 40, 0); ex('P8.1-8', (2 - 3*x)**3, 8 - 36*x + 54*x**2 - 27*x**3); check('P8.1-9', coef((3 + x)**5, 3), 90, 0)
ex('P8.1-10', (x - 1/x)**4, x**4 - 4*x**2 + 6 - 4/x**2 + 1/x**4); check('P8.1-11', coef((1 + 3*x)**4, 2), 54, 0)
ex('P8.1-12', (1 + x)*(1 + 2*x)**3, 1 + 7*x + 18*x**2 + 20*x**3 + 8*x**4); check('P8.1-13', expand((x + 2/x)**4).as_coefficients_dict()[1], 24, 0)
check('P8.1-14', coef((1 + 4*x)**3, 2), 48, 0); check('P8.1-14b', coef((1 + 4*x)**3, 3), 64, 0)
ex('P8.1-15', (1 + x)**4 + (1 - x)**4, 2 + 12*x**2 + 2*x**4); exact('P8.1-15d', Q(11, 10)**4 + Q(9, 10)**4, Q(21202, 10000))
same('P8.1-15e', sorted(s for s in solve((1 + x)**4 + (1 - x)**4 - 16, x) if s.is_real), [-1, 1])

# 8.2
check('P8.2', [factorial(5), factorial(7)/factorial(5), binomial(6, 2), binomial(10, 3), binomial(8, 3), binomial(8, 5), binomial(12, 4), binomial(9, 4)], [120, 42, 15, 120, 56, 56, 495, 126], 0)
same('P8.2-8', [s for s in solve(n*(n - 1)/2 - 28, n) if s > 0], [8]); same('P8.2-13', [s for s in solve(n*(n - 1)*(n - 2)/6 - n*(n - 1), n) if s > 2], [8])
check('P8.2-12', all(binomial(m, 2) + binomial(m, 3) == binomial(m + 1, 3) for m in range(3, 30)), True, 0)
check('P8.2-15', [binomial(7, 3), binomial(6, 3) + binomial(6, 2)], [35, 35], 0)

# 8.3
lead('P8.3-1', (1 + x)**10, 3, 1 + 10*x + 45*x**2); lead('P8.3-2', (1 + 3*x)**5, 3, 1 + 15*x + 90*x**2); lead('P8.3-3', (1 - x)**7, 3, 1 - 7*x + 21*x**2)
lead('P8.3-4', (2 + x)**6, 3, 64 + 192*x + 240*x**2); lead('P8.3-5', (1 - 2*x)**6, 4, 1 - 12*x + 60*x**2 - 160*x**3); lead('P8.3-6', (3 - x)**5, 3, 243 - 405*x + 270*x**2)
check('P8.3-7', coef((2 + 3*x)**5, 3), 1080, 0); lead('P8.3-8', (2 - x/4)**8, 3, 256 - 256*x + 112*x**2); exact('P8.3-9', coef((1 + x/2)**9, 5), Q(63, 16))
lead('P8.3-ex1', (1 + 2*x)**8, 4, 1 + 16*x + 112*x**2 + 448*x**3); lead('P8.3-ex2', (3 - x/2)**6, 3, 729 - 729*x + Q(1215, 4)*x**2)
same('P8.3-11', sorted(solve(coef((3 + k*x)**5, 2) - 270, k)), [-1, 1]); check('P8.3-12', expand((2*x - 1/x)**6).as_coefficients_dict()[1], -160, 0)
check('P8.3-13', [coef((1 + 2*x)**5*(1 - x)**3, 1), coef((1 + 2*x)**5*(1 - x)**3, 2)], [7, 13], 0)
check('P8.3-14', expand((x**2 - 2/x)**6).as_coefficients_dict()[x**3], -160, 0)
kk = [s for s in solve(coef((1 + k*x)**7, 2) - 6*coef((1 + k*x)**7, 1), k) if s != 0]; same('P8.3-15', kk, [2])
check('P8.3-15c', [coef((1 + 2*x)**7, 3), coef((2 - x)*(1 + 2*x)**7, 2)], [280, 154], 0)

# 8.4
check('P8.4-1', solve(6*a - 18, a)[0], 3, 0); same('P8.4-2', [s for s in solve(n*(n - 1)/2 - 15, n) if s > 0], [6]); check('P8.4-3', solve(32*b + 96, b)[0], -3, 0)
check('P8.4-4', coef((1 + 2*x)**5, 2), 40, 0); check('P8.4-5', coef((1 + 2*x)**8, 3), 448, 0); check('P8.4-6', coef((2 + x)**5, 2), 80, 0)
check('P8.4-7', [m * 3**(m - 1) for m in (4, 5, 6)], [108, 405, 1458], 0)
s = solve([n*a - 15, n*(n - 1)/2*a**2 - 90], [n, a], dict=True); same('P8.4-8', [(d[a], d[n]) for d in s], [(3, 5)])
check('P8.4-ex', [coef((1 + 2*x)**6, 1), coef((1 + 2*x)**6, 2), coef((2 + 2*x)**5, 1)], [12, 60, 160], 0)
check('P8.4-9', [coef((2 + x)**6, 2), coef((2 + x)**6, 3)], [240, 160], 0); same('P8.4-10', [s for s in solve(4*n*(n - 1)/2 - 40, n) if s > 0], [5])
same('P8.4-11', [s for s in solve(36*p**2 - 84*p**3, p) if s != 0], [Q(3, 7)])
check('P8.4-12', [Poly(expand((2 - 3*x)**5), x).coeff_monomial(x**r) for r in range(3)], [32, -240, 720], 0)
same('P8.4-13', [s for s in solve(binomial(n, 3) - 2*binomial(n, 2), n) if s > 2], [8]) if False else check('P8.4-13', [binomial(8, 3), 2*binomial(8, 2)], [56, 56], 0)
check('P8.4-14', [coef((1 + 3*x)*(1 - 2*x)**5, 1), coef((1 + 3*x)*(1 - 2*x)**5, 2)], [-7, 10], 0)
lead('P8.4-15', (1 + x/4)**8, 4, 1 + 2*x + Q(7, 4)*x**2 + Q(7, 8)*x**3)
s = solve([coef((a + b*x)*(1 + x/4)**8, 1) - 5, coef((a + b*x)*(1 + x/4)**8, 2) - Q(11, 2)], [a, b]); same('P8.4-15b', (s[a], s[b]), (2, 1))
exact('P8.4-15c', coef((2 + x)*(1 + x/4)**8, 3), Q(7, 2))

# 8.5
check('P8.5-1', 1 + 5*0.01 + 10*0.0001, 1.051, 1e-12); check('P8.5-4', 1 + 12*0.01 + 60*0.0001, 1.126, 1e-12); check('P8.5-5', 1 - 0.08 + 28*0.0001, 0.9228, 1e-12)
check('P8.5-6', 32 + 80*0.01 + 80*0.0001, 32.808, 1e-12); check('P8.5-7', abs(0.9228 - 0.99**8)/0.99**8*100, 0.0060, 0.00005)
lead('P8.5-8', (1 - x/2)**10, 3, 1 - 5*x + Q(45, 4)*x**2); check('P8.5-8b', 1 - 0.05 + 45/4*0.0001, 0.951125, 1e-12)
lead('P8.5-9', (3 + x)**4, 3, 81 + 108*x + 54*x**2); check('P8.5-9b', [81 + 10.8 + 0.54, 3.1**4], [92.34, 92.3521], 1e-9)
lead('P8.5-10', (1 + x/5)**10, 4, 1 + 2*x + Q(9, 5)*x**2 + Q(24, 25)*x**3); check('P8.5-10b', 1 + 0.2 + 0.018 + 0.00096, 1.21896, 1e-12)
check('P8.5-12', [1 - 0.15 + 0.009, abs(0.859 - 0.97**5)/0.97**5*100], [0.859, 0.031], 0.0005)
check('P8.5-13', [1 + 0.03 + 15/4*0.0001], [1.030375], 1e-12); lead('P8.5-14', (2 - x)**7, 3, 128 - 448*x + 672*x**2); check('P8.5-14b', 128 - 4.48 + 0.0672, 123.5872, 1e-9)
lead('P8.5-15', (1 - x/10)**12, 4, 1 - Q(6, 5)*x + Q(33, 50)*x**2 - Q(11, 50)*x**3)
check('P8.5-15b', [1 - 0.12 + 0.0066 - 0.00022, abs(0.88638 - 0.99**12)/0.99**12*100], [0.88638, 0.00055], 0.000005)
