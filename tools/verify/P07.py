# Pure Year 1, Chapter 7: algebraic methods.
from sympy import symbols, Rational as Q, sqrt, cancel, div, expand, factor, solve, simplify, isprime, Poly
x, y, a, b, k, n, m, p, q = symbols('x y a b k n m p q')

def simp(qid, expr, want): exact(qid, cancel(expr) - cancel(want), 0)
def quot(qid, num, den, wq, wr=0):
    qq, rr = div(Poly(num, x), Poly(den, x))
    exact(qid, expand(qq.as_expr() - wq) + (rr.as_expr() - wr)**2, 0)
def facs(qid, expr, want): exact(qid, expand(expr - want), 0)
def rootset(qid, expr, want):
    global count
    count += 1
    if set(solve(expr, x)) != set(want): fails.append(f'{qid}: roots {solve(expr, x)}, answer says {want}')
def same(qid, got, want):
    global count
    count += 1
    if got != want: fails.append(f'{qid}: worked out {got}, answer says {want}')

# 7.1
simp('P7.1-1', (4*x**3 + 6*x)/(2*x), 2*x**2 + 3); simp('P7.1-2', (x**2 - 4)/(x + 2), x - 2); simp('P7.1-3', (x**2 + 5*x + 6)/(x + 3), x + 2)
simp('P7.1-4', (x**2 - 2*x - 15)/(x**2 - 25), (x + 3)/(x + 5)); simp('P7.1-5', (2*x**2 + 7*x + 3)/(4*x**2 - 1), (x + 3)/(2*x - 1))
simp('P7.1-6', (x**2 - 9)/(3 - x), -x - 3); simp('P7.1-7', (6*x**3 + 3*x**2 - 9*x)/(3*x), (2*x + 3)*(x - 1))
simp('P7.1-8', (x**3 - 4*x)/(x**2 + x - 6), x*(x + 2)/(x + 3)); simp('P7.1-9', (2*x**2 - 8)/(x**2 + 4*x + 4), 2*(x - 2)/(x + 2))
simp('P7.1-10', (3*x**2 - 11*x - 4)/(x**2 - 16), (3*x + 1)/(x + 4)); simp('P7.1-11', (x**2 + 3*x)/(x**2 - 9) / (x/(x - 3)), 1)
same('P7.1-12', solve(expand((x - 3)*(x + 4)).coeff(x, 1) - a, a), [1]); simp('P7.1-13', (4*x**2 - 9)/(2*x**2 + x - 3), (2*x - 3)/(x - 1))
simp('P7.1-14', (x**4 - 1)/(x**3 + x), (x**2 - 1)/x); facs('P7.1-15a', 2*x**3 + 5*x**2 - 3*x, x*(2*x - 1)*(x + 3))
simp('P7.1-15b', (2*x**3 + 5*x**2 - 3*x)/(4*x**2 - 1), x*(x + 3)/(2*x + 1)); rootset('P7.1-15c', (2*x**3 + 5*x**2 - 3*x) - 2*(4*x**2 - 1), [2, -1, Q(1, 2)])
# (x = 1/2 is a root of the cleared equation but makes the denominator zero, so it is excluded, as the answer says)
check('P7.1-15d', (4*Q(1, 2)**2 - 1), 0, 0)

# 7.2
quot('P7.2-1', x**3 + 3*x**2 + 3*x + 1, x + 1, x**2 + 2*x + 1); quot('P7.2-2', x**3 - 2*x**2 - x + 2, x - 1, x**2 - x - 2)
quot('P7.2-3', 2*x**3 + 3*x**2 - 2*x, x + 2, 2*x**2 - x); quot('P7.2-4', x**3 - 7*x + 6, x - 2, x**2 + 2*x - 3); facs('P7.2-4f', x**3 - 7*x + 6, (x - 2)*(x + 3)*(x - 1))
quot('P7.2-5', x**3 + 2*x**2 - 3*x + 4, x - 1, x**2 + 3*x, 4); quot('P7.2-6', 3*x**3 - 5*x**2 - 4*x + 4, x - 2, (3*x - 2)*(x + 1))
quot('P7.2-7', x**4 - 1, x - 1, x**3 + x**2 + x + 1); quot('P7.2-8', x**3 + 4*x**2 + x - 6, x + 2, x**2 + 2*x - 3)
quot('P7.2-9', 2*x**3 + x**2 - 13*x + 6, x - 2, 2*x**2 + 5*x - 3); rootset('P7.2-9r', 2*x**3 + x**2 - 13*x + 6, [2, Q(1, 2), -3])
quot('P7.2-10', x**3 - 3*x**2 - 2, x - 3, x**2, -2); quot('P7.2-11', 6*x**3 + 7*x**2 - 1, 2*x + 1, (3*x - 1)*(x + 1))
facs('P7.2-12', (x - 1)*(x**2 + 4*x + 6), x**3 + 3*x**2 + 2*x - 6); quot('P7.2-13', x**4 + x**3 - 7*x**2 - x + 6, x - 2, x**3 + 3*x**2 - x - 3)
facs('P7.2-13f', x**4 + x**3 - 7*x**2 - x + 6, (x - 2)*(x + 3)*(x - 1)*(x + 1)); quot('P7.2-14', 2*x**3 - 3*x**2 + 4*x - 5, x + 1, 2*x**2 - 5*x + 9, -14)
f = 2*x**3 - 7*x**2 - 17*x + 10; quot('P7.2-15', f, x - 5, 2*x**2 + 3*x - 2); facs('P7.2-15b', f, (x - 5)*(2*x - 1)*(x + 2)); rootset('P7.2-15c', f.subs(x, x - 1), [6, Q(3, 2), -1])

# 7.3
check('P7.3-1', (x**3 - 6*x**2 + 11*x - 6).subs(x, 1), 0, 0); check('P7.3-2', (x**3 + 8).subs(x, -2), 0, 0); check('P7.3-3', (x**3 - 2*x**2 - 5*x + 6).subs(x, 3), 0, 0)
facs('P7.3-4', x**3 - 3*x - 2, (x + 1)**2*(x - 2)); facs('P7.3-5', 2*x**3 + x**2 - 5*x + 2, (2*x - 1)*(x + 2)*(x - 1))
same('P7.3-6', solve((x**3 + k*x**2 - 4*x + 4).subs(x, 2), k), [-1]); same('P7.3-7', solve((2*x**3 + a*x**2 - 7*x + 6).subs(x, -3), a), [3])
facs('P7.3-8', x**3 - 7*x - 6, (x + 1)*(x - 3)*(x + 2)); rootset('P7.3-9', x**3 - 4*x**2 + x + 6, [-1, 2, 3]); facs('P7.3-10', 2*x**3 - 5*x**2 - 4*x + 3, (x - 3)*(2*x - 1)*(x + 1))
g = x**3 + a*x**2 + b*x - 6; s = solve([g.subs(x, 1), g.subs(x, -2)], [a, b]); same('P7.3-11', (s[a], s[b]), (4, 1)); facs('P7.3-11f', g.subs(s), (x - 1)*(x + 2)*(x + 3))
h = x**3 + p*x**2 + q*x + 12; s = solve([h.subs(x, -2), h.subs(x, 1) - 6], [p, q]); same('P7.3-12', (s[p], s[q]), (-3, -4)); facs('P7.3-12f', h.subs(s), (x - 3)*(x - 2)*(x + 2))
rootset('P7.3-13', x**3 - 3*x**2 - 3*x + 1, [-1, 2 + sqrt(3), 2 - sqrt(3)]); facs('P7.3-14', x**3 - 2*x**2 + x - 2, (x - 2)*(x**2 + 1))
F = 6*x**3 + a*x**2 + b*x + 6; s = solve([F.subs(x, 3), F.subs(x, Q(1, 2))], [a, b]); same('P7.3-15', (s[a], s[b]), (-17, -5)); facs('P7.3-15f', F.subs(s), (x - 3)*(2*x - 1)*(3*x + 2))

# 7.4 (identities; inequalities via completed squares)
facs('P7.4-2', (x + 3)**2 - (x - 3)**2, 12*x); facs('P7.4-3', (2*m + 1)*(2*n + 1), 2*(2*m*n + m + n) + 1); facs('P7.4-4', x**2 + 4*x + 7, (x + 2)**2 + 3)
facs('P7.4-6', (2*n + 1)**2 - (2*n - 1)**2, 8*n); facs('P7.4-7', (x - 2)*(x**2 + 2*x + 4), x**3 - 8); check('P7.4-8', all((t*t - t) % 2 == 0 for t in range(-50, 50)), True, 0)
check('P7.4-9', Q(5 - 1, 4 - 1) * Q(-2 - 1, 5 - 1), -1, 0); facs('P7.4-10', x**2 - 2*x*y + 2*y**2, (x - y)**2 + y**2); facs('P7.4-11', 2*x**2 - 8*x + 11, 2*(x - 2)**2 + 3)
check('P7.4-12', min(i/j + j/i for i in range(1, 30) for j in range(1, 30) if i != j) > 2, True, 0); check('P7.4-13', all((t**3 - t) % 6 == 0 for t in range(-60, 60)), True, 0)
rootset('P7.4-14', x**2 + (4 - x)**2 - 8, [2]); facs('P7.4-15', x**2 + 6*x + 13, (x + 3)**2 + 4); facs('P7.4-15c', y**2 - 2*y + 5, (y - 1)**2 + 4)

# 7.5
check('P7.5-3', all(not isprime(t) for t in range(90, 97)), True, 0); check('P7.5-4', [isprime(2**t - 1) for t in (2, 3, 4)], [True, True, False], 0)
check('P7.5-6', all((t*t + t) % 2 == 0 for t in range(1, 200)), True, 0); check('P7.5-8', sorted(set(t*t % 10 for t in range(100))), [0, 1, 4, 5, 6, 9], 0)
check('P7.5-9', sorted(set((t*t - 2) % 4 for t in range(-50, 50))), [2, 3], 0); check('P7.5-10', [isprime(t*t - t + 11) for t in range(1, 12)].index(False) + 1, 11, 0)
check('P7.5-11', sorted(set(t*t % 3 for t in range(-50, 50))), [0, 1], 0); check('P7.5-12', sorted(set(t**3 % 9 for t in range(-50, 50))), [0, 1, 8], 0)
check('P7.5-13', [(i, j) for i in range(1, 100) for j in range(1, 100) if i*i - j*j == 2], [], 0)
check('P7.5-14', [t for t in range(1, 10) if not isprime(3**t + 2)][0], 5, 0); check('P7.5-15', all((t*t - 1) % 24 == 0 for t in range(5, 2000) if isprime(t)), True, 0)
facs('P7.5-15b', (6*k + 1)**2 - 1, 12*k*(3*k + 1))
