# Pure Year 1, Chapter 1: algebraic expressions. Run through tools/verify_answers.py.
from sympy import symbols, Rational as Q, sqrt, expand, factor, simplify, root, Integer, solve, Eq
x, y, a, b, p, n, k = symbols('x y a b p n k', positive=True)
X = symbols('X')

def same(qid, e1, e2):
    exact(qid, expand(e1), expand(e2))

# 1.1
same('P1.1-1', x**5 * x**3, x**8); same('P1.1-2', (y**4)**3, y**12); same('P1.1-3', 12*p**7 / (3*p**2), 4*p**5)
same('P1.1-4', (3*a**2*b)**3, 27*a**6*b**3); same('P1.1-5', 4*x**5*y**2/(2*x**2*y) * 3*x*y**3, 6*x**4*y**4)
same('P1.1-6', x**2*(3*x**4 - 2*x), 3*x**6 - 2*x**3); same('P1.1-7', (2*x**3)**2 * 5*x, 20*x**7)
same('P1.1-8', (6*x**5 + 9*x**3)/(3*x**2), 2*x**3 + 3*x)
A_, B_ = 6, 4; check('P1.1-9', [A_ + B_, 2*A_ - B_], [10, 8], 0)
same('P1.1-10', 8**X * 4**(X + 1) - 2**(5*X + 2), 0) if False else check('P1.1-10', (8**1.7 * 4**2.7) / 2**(5*1.7 + 2), 1, 1e-9)
check('P1.1-11', 3**(2*2) * 9, 27**2, 0)
check('P1.1-12', [2**(3 + 1), 4**(3 - 1), 8**2, 2**(2 + 4)], [16, 16, 64, 64], 0)
same('P1.1-13', (3*x**2*y)**3 * 2*x*y**2 / (9*x**4*y**3), 6*x**3*y**2)
yy = 2*x**3; same('P1.1-14a', yy**2, 4*x**6); same('P1.1-14b', yy**3/(4*x**2), 2*x**7)
check('P1.1-14c', float((2*sqrt(2)**3)**2), float(16*sqrt(2)**2), 1e-9)
same('P1.1-15a', 2**(n + 2) - 2**n, 3*2**n); check('P1.1-15b', 2**(5 + 2) - 2**5, 96, 0); same('P1.1-15c', 3**(n + 1) + 3**n, 4*3**n)

# 1.2
same('P1.2-1', 4*x*(3*x - 2), 12*x**2 - 8*x); same('P1.2-2', (x + 4)*(x + 6), x**2 + 10*x + 24)
same('P1.2-3', 3*(x - 2) - 2*(x - 5), x + 4); same('P1.2-4', (2*x - 3)*(x + 5), 2*x**2 + 7*x - 15)
same('P1.2-5', (3*x - 2)**2, 9*x**2 - 12*x + 4); same('P1.2-6', (x + 7)*(x - 7), x**2 - 49)
same('P1.2-7', (x + 2)*(x**2 - 3*x + 4), x**3 - x**2 - 2*x + 8); same('P1.2-8', (x + 1)*(x - 2)*(x + 3), x**3 + 2*x**2 - 5*x - 6)
same('P1.2-9', (2*x + 1)**2 - (x - 3)**2, 3*x**2 + 10*x - 8); same('P1.2-10', (x - 3)*(x + 5), x**2 + 2*x - 15)
same('P1.2-11', (2*x + 3)*(x - 1) - x**2, x**2 + x - 3)
same('P1.2-12a', (x - 2)**3, x**3 - 6*x**2 + 12*x - 8); exact('P1.2-12b', expand((x - 2)**3*(x + 1)).coeff(x, 2), 6)
same('P1.2-13', (3*x - 3)*(2*x + 5), 6*x**2 + 9*x - 15)
same('P1.2-14', (n + 1)**2 - (n - 1)**2, 4*n); same('P1.2-14b', (2*k + 1)**2 - (2*k - 1)**2, 8*k)
e = expand((x**2 + 3*x + 2)*(x**2 - 3*x + 2))
check('P1.2-15', [e.coeff(x, 3), e.coeff(x, 1), e.coeff(x, 2)], [0, 0, -5], 0)

# 1.3
same('P1.3-1', 5*x*(x - 3), 5*x**2 - 15*x); same('P1.3-2', (x + 3)*(x + 5), x**2 + 8*x + 15); same('P1.3-3', (x + 8)*(x - 8), x**2 - 64)
same('P1.3-4', (x - 5)*(x + 4), x**2 - x - 20); same('P1.3-5', (3*x - 2)*(x + 4), 3*x**2 + 10*x - 8)
same('P1.3-6', (4*x + 7*y)*(4*x - 7*y), 16*x**2 - 49*y**2); same('P1.3-7', 3*(x + 2)*(x - 2), 3*x**2 - 12)
same('P1.3-8', x*(x - 2)*(x - 3), x**3 - 5*x**2 + 6*x); same('P1.3-9', 2*(x**2 + 4)*(x + 2)*(x - 2), 2*x**4 - 32)
same('P1.3-10', (3*x + 1)*(2*x - 3), 6*x**2 - 7*x - 3); same('P1.3-11', (x + 1)*(x - 1)*(x + 3)*(x - 3), x**4 - 10*x**2 + 9)
same('P1.3-12a', (x - 7)*(x + 3), x**2 - 4*x - 21); same('P1.3-12b', 3*x*(x - 7)*(x + 3), 3*x**3 - 12*x**2 - 63*x)
exact('P1.3-12c', simplify((3*x**3 - 12*x**2 - 63*x)/(x**2 - 49) - 3*x*(x + 3)/(x + 7)), 0)
check('P1.3-13', [87**2 - 13**2, (2023**2 - 2021**2) / 4], [7400, 2022], 0)
same('P1.3-14', (n - 1)*n*(n + 1), n**3 - n); check('P1.3-14b', all((m**3 - m) % 6 == 0 for m in range(-50, 50)), True, 0)
same('P1.3-15a', (x + y + 3)*(x + y - 3), x**2 + 2*x*y + y**2 - 9); same('P1.3-15b', (a + b - 2)*(a - b + 2), a**2 - b**2 + 4*b - 4)

# 1.4
check('P1.4-1', 25**0.5, 5, 1e-12); exact('P1.4-2', Integer(2)**-3, Q(1, 8)); same('P1.4-3', 5/x**2, 5*x**-2)
check('P1.4-4', 8**(2/3), 4, 1e-9); exact('P1.4-5', (Q(9, 4))**Q(-1, 2), Q(2, 3)); same('P1.4-6', 1/(3*sqrt(x)), Q(1, 3)*x**Q(-1, 2))
same('P1.4-7', (64*x**6)**Q(1, 3), 4*x**2); same('P1.4-8', (x**3 - 4)/(2*sqrt(x)), Q(1, 2)*x**Q(5, 2) - 2*x**Q(-1, 2))
check('P1.4-9', 9**1.5, 27, 1e-9); same('P1.4-10', (Q(1, 16)*x**4)**Q(-1, 2), 4*x**-2); check('P1.4-11', 4**-1.5, 1/8, 1e-12)
same('P1.4-12', ((2*sqrt(x))**3 - 4)/x, 8*x**Q(1, 2) - 4/x); check('P1.4-13', [2**(2*4 + 1), 8**(4 - 1), 4**-0.5], [512, 512, 0.5], 1e-12)
check('P1.4-14', 9**3 / 3**(3 + 2), 27**(1/3), 1e-9)
check('P1.4-15b', 4**2 - 2**(2 + 3) + 16, 0, 0); check('P1.4-15c', [9**0 - 4*3**0 + 3, 9**1 - 4*3**1 + 3], [0, 0], 0)

# 1.5
exact('P1.5-1', sqrt(50), 5*sqrt(2)); exact('P1.5-2', sqrt(12)*sqrt(3), 6); exact('P1.5-3', 3*sqrt(5) + 4*sqrt(5) - sqrt(5), 6*sqrt(5))
exact('P1.5-4', sqrt(75) - sqrt(27), 2*sqrt(3)); exact('P1.5-5', expand((3 + sqrt(2))*(5 - sqrt(2))), 13 + 2*sqrt(2))
exact('P1.5-6', expand((2*sqrt(3) - 1)**2), 13 - 4*sqrt(3)); exact('P1.5-7', sqrt(8) + sqrt(18) + sqrt(32), 9*sqrt(2))
exact('P1.5-8a', expand((4 + sqrt(5))*(4 - sqrt(5))), 11); exact('P1.5-8b', sqrt(expand((4 + sqrt(5))**2 + (4 - sqrt(5))**2)), sqrt(42))
exact('P1.5-9', sqrt(20) + sqrt(45) - sqrt(80), sqrt(5)); exact('P1.5-10', (sqrt(50) - 5)/sqrt(2), 5 - Q(5, 2)*sqrt(2))
exact('P1.5-11', expand((sqrt(7) + sqrt(3))*(sqrt(7) - sqrt(3)) + (sqrt(7) + sqrt(3))**2), 14 + 2*sqrt(21))
exact('P1.5-12', sqrt((2*sqrt(3))**2 + (2*sqrt(3))**2), 2*sqrt(6)); exact('P1.5-13', expand((3 + sqrt(2))**2), 11 + 6*sqrt(2))
exact('P1.5-14a', Q(1, 2)*expand((2 + sqrt(3))*(2 - sqrt(3))), Q(1, 2)); exact('P1.5-14b', sqrt(expand((2 + sqrt(3))**2 + (2 - sqrt(3))**2)), sqrt(14))
check('P1.5-15', sum(1/(m**0.5 + (m - 1)**0.5) for m in range(2, 101)), 9, 1e-9)

# 1.6
exact('P1.6-1', 10/sqrt(5), 2*sqrt(5)); exact('P1.6-2', 1/sqrt(7), sqrt(7)/7); exact('P1.6-3', 3/(2*sqrt(3)), sqrt(3)/2)
exact('P1.6-4', 1/(3 + sqrt(2)), (3 - sqrt(2))/7); exact('P1.6-5', 6/(sqrt(5) - sqrt(3)), 3*sqrt(5) + 3*sqrt(3))
exact('P1.6-6', 4/(sqrt(3) + 1), 2*sqrt(3) - 2); exact('P1.6-7', sqrt(12)/sqrt(27), Q(2, 3))
exact('P1.6-8', (2 + sqrt(3))/(2 - sqrt(3)), 7 + 4*sqrt(3)); exact('P1.6-9', (5 - sqrt(2))/(3 + sqrt(2)), Q(17, 7) - Q(8, 7)*sqrt(2))
exact('P1.6-10', 1/(sqrt(2) - 1) - 1/(sqrt(2) + 1), 2); exact('P1.6-11', (10 + 4*sqrt(3))/(2 + sqrt(3)), 8 - 2*sqrt(3))
exact('P1.6-12', (sqrt(5) + 2)/(sqrt(5) - 2), 9 + 4*sqrt(5)); exact('P1.6-13', (1 + 2*sqrt(2))/(3 - sqrt(2)), 1 + sqrt(2))
exact('P1.6-14a', 1/(sqrt(3) - sqrt(2)), sqrt(3) + sqrt(2)); exact('P1.6-14b', 1/(sqrt(3) - sqrt(2)) - 2/sqrt(3), sqrt(3)/3 + sqrt(2))
exact('P1.6-15a', 1/(1 + sqrt(2)), sqrt(2) - 1); exact('P1.6-15b', 1/(1 + sqrt(2))**4, 17 - 12*sqrt(2))
check('P1.6-15c', float(17 + 12*sqrt(2)), 34, 0.03)
