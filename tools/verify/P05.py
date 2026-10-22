# Pure Year 1, Chapter 5: straight line graphs.
from sympy import symbols, Rational as Q, sqrt, solve, simplify, expand, Line, Point, Triangle, Polygon, Segment
x, y, k, t, p = symbols('x y k t p', real=True)

def grad(A, B): return Q(B[1] - A[1], 1) / (B[0] - A[0])
def line(A, B):
    """y in terms of x for the line AB."""
    return expand(A[1] + grad(A, B) * (x - A[0]))
def dist(A, B): return sqrt((B[0] - A[0])**2 + (B[1] - A[1])**2)
def meet(e1, e2):
    s = solve([e1, e2], [x, y], dict=True)[0]; return (s[x], s[y])
def area(*P): return abs(Polygon(*[Point(*q) for q in P]).area)
def same(qid, got, want):
    global count
    count += 1
    if [simplify(g - w) for g, w in zip(got, want)] != [0] * len(want): fails.append(f'{qid}: worked out {got}, answer says {want}')
def prop(qid, e1, e2):
    """Two equations of the same line (expressions = 0)."""
    exact(qid, simplify(solve(e1, y)[0] - solve(e2, y)[0]), 0)

# 5.1
check('P5.1-2', grad((1, 3), (4, 9)), 2, 0); prop('P5.1-3', 2*x + y - 5, y + 2*x - 5); prop('P5.1-4', 3*x - 2*y + 6, y - Q(3, 2)*x - 3)
prop('P5.1-5', y + Q(2, 3)*x - 4, 2*x + 3*y - 12); same('P5.1-6', solve((11 - k)/3 - 3, k), [2])
same('P5.1-7', [solve(4*x - 20, x)[0], solve(5*y - 20, y)[0]], [5, 4])
check('P5.1-8', [grad((-2, 1), (1, 7)), grad((1, 7), (4, 13))], [2, 2], 0)
same('P5.1-9', [solve(3*x + 8, x)[0], solve(-4*y + 8, y)[0], Q(3, 4)], [Q(-8, 3), 2, Q(3, 4)])
same('P5.1-10', solve(6/p - 2, p), [3]); prop('P5.1-11', 5*x + 2*y - 4, y + Q(5, 2)*x - 2)
same('P5.1-12', [grad((-4, 0), (1, 5)), line((-4, 0), (1, 5)).subs(x, 0)], [1, 4])
same('P5.1-13', solve((9 - k) + 2*(k - 3), k), [-3]); same('P5.1-14', [solve(-(k - 1)/2 - 3, k)[0], solve(2*(k - 1) + 2 - 6, k)[0]], [-5, 3])
A, B = (-1, 2), (3, 8); L = line(A, B); prop('P5.1-15b', y - L, 3*x - 2*y + 7)
same('P5.1-15', [grad(A, B), area((0, 0), (0, L.subs(x, 0)), (solve(L, x)[0], 0)), solve(L - x, x)[0]], [Q(3, 2), Q(49, 12), -7])

# 5.2
exact('P5.2-1', 4 + 3*(x - 1), 3*x + 1); exact('P5.2-2', 3 - 2*(x + 1), -2*x + 1); exact('P5.2-3', Q(1, 2)*(x - 4), x/2 - 2)
exact('P5.2-4', line((2, 3), (6, 11)), 2*x - 1); exact('P5.2-5', line((-3, 4), (1, -4)), -2*x - 2); prop('P5.2-6', y - line((1, 5), (4, 3)), 2*x + 3*y - 17)
exact('P5.2-8', line((4, 1), (0, -5)), Q(3, 2)*x - 5); same('P5.2-9', solve(line((-2, 7), (4, -2)), x), [Q(8, 3)])
P = meet(y - 2*x - 1, x + y - 7); same('P5.2-10P', P, (2, 5)); exact('P5.2-10', line(P, (0, -3)), 4*x - 3)
exact('P5.2-11', 6 - (x - 3), -x + 9); prop('P5.2-12', y - line((6, 0), (1, 2)), 2*x + 5*y - 12)
check('P5.2-13', [(-2*x + 9).subs(x, 2), solve(-2*x + 9, x)[0] * 2, 9], [5, 9, 9], 0)
check('P5.2-14', [grad((1, 2), (3, 8)), grad((1, 2), (-1, -4))], [3, 3], 0); exact('P5.2-14e', line((1, 2), (3, 8)), 3*x - 1)
L1 = line((2, 3), (8, 6)); exact('P5.2-15a', L1, x/2 + 2); C = meet(y - L1, y + 2*x - 17); same('P5.2-15b', C, (6, 5))
check('P5.2-15c', dist((2, 3), C) / dist(C, (8, 6)), 2, 1e-12)

# 5.3
check('P5.3-2', solve(6*x - 2*y + 5, y)[0].coeff(x), 3, 0); check('P5.3-3', 2 * solve(x + 2*y - 4, y)[0].coeff(x), -1, 0)
exact('P5.3-4', -2 + 4*(x - 1), 4*x - 6); exact('P5.3-5', 5 + Q(1, 3)*(x - 3), x/3 + 4); same('P5.3-6', [-1 / solve(2*x - 5*y + 1, y)[0].coeff(x)], [Q(-5, 2)])
check('P5.3-7', [Q(1, 2) - Q(1, 2), 3 * Q(-1, 3), 2 * -2], [0, -1, -4], 0)
exact('P5.3-8', 3 - 1*(x - 4), -x + 7); prop('P5.3-9', y - (3 + Q(4, 3)*(x + 2)), 4*x - 3*y + 17)
check('P5.3-10', grad((1, 3), (4, 7)) * grad((4, 7), (8, 4)), -1, 0)
same('P5.3-11', meet(y - 2*x + 1, y + (x - 4)/2), (Q(6, 5), Q(7, 5)))
F = meet(y - x - 1, y + x - 5); same('P5.3-12', [F[0], F[1], dist((5, 0), F)], [2, 3, 3*sqrt(2)])
same('P5.3-13', solve(3*(k + 1) + 2*(k - 2), k), [Q(1, 5)])
exact('P5.3-14a', 2 - 2*(x - 3), -2*x + 8)
sq = [(1, 1), (2, 4), (5, 3), (4, 0)]; check('P5.3-14b', [dist(sq[i], sq[(i + 1) % 4]) for i in range(4)] + [grad(sq[0], sq[1]) * grad(sq[1], sq[2])], [sqrt(10)] * 4 + [-1], 1e-12)
exact('P5.3-15a', 3 - 3*(x - 2), -3*x + 9); exact('P5.3-15b', 0 + 1*(x - 1), x - 1); check('P5.3-15B', (x - 1).subs(x, 5), 4, 0)
same('P5.3-15c', meet(y + 3*x - 9, y - x + 1), (Q(5, 2), Q(3, 2)))

# 5.4
check('P5.4-1', dist((1, 2), (4, 6)), 5, 0); check('P5.4-2', dist((-3, 1), (2, -11)), 13, 0); exact('P5.4-3', dist((0, 0), (2, 4)), 2*sqrt(5))
same('P5.4-4', sorted(solve(9 + (5 - k)**2 - 25, k)), [1, 9]); check('P5.4-5', area((0, 0), (6, 0), (0, 4)), 12, 0)
same('P5.4-6', [dist((1, 1), (4, 5)), dist((1, 1), (-3, 4)), dist((4, 5), (-3, 4))], [5, 5, 5*sqrt(2)])
exact('P5.4-7', 3 + 3 + dist((3, 0), (0, 3)), 6 + 3*sqrt(2))
check('P5.4-8', [grad((2, 1), (6, 4)) * grad((6, 4), (3, 8)), area((2, 1), (6, 4), (3, 8))], [-1, 12.5], 0)
P = meet(y - x - 2, y - 8 + 2*x); check('P5.4-9', area(P, (-2, 0), (4, 0)), 12, 0)
same('P5.4-10', sorted(solve((t - 1)**2 + (2*t - 7)**2 - 25, t)), [1, 5]); same('P5.4-11', solve((x - 1)**2 + 9 - (x - 5)**2 - 1, x), [2])
C = meet(y - 2*x + 4, y + x/2 - 6); same('P5.4-12', [C[0], C[1], area((2, 0), (0, 6), C)], [4, 4, 10])
check('P5.4-13', area((-1, 4), (3, 2), (4, 4)), 5, 0); check('P5.4-14', area((0, 0), (4, 0), (6, 3), (0, 5)), 21, 0)
L2 = -(x - 8)/3; prop('P5.4-15a', y - L2, x + 3*y - 8); P = meet(y - 3*x + 2, y - L2); same('P5.4-15b', P, (Q(7, 5), Q(11, 5)))
same('P5.4-15c', [area(P, (Q(2, 3), 0), (8, 0)), dist((8, 0), P), Line(Point(0, -2), Point(1, 1)).distance(Point(8, 0))], [Q(121, 15), 11*sqrt(10)/5, 11*sqrt(10)/5])

# 5.5
check('P5.5-3', 500/20, 25, 0); check('P5.5-4', 3/200, 0.015, 1e-12); check('P5.5-5', 1.8*37 + 32, 98.6, 1e-9)
check('P5.5-6', 10/0.1, 100, 1e-9); check('P5.5-7', 20/2.5, 8, 0); check('P5.5-8', [(12600 - 18000)/3, (18000 - 3600)/1800], [-1800, 8], 0)
check('P5.5-9', 12/8*10, 15, 0); check('P5.5-10', [(11 - 5)/3, 5 - 2*2], [2, 1], 0); check('P5.5-11', 250/5, 50, 0)
check('P5.5-12', [15000/3, 42000 + 5000*7], [5000, 77000], 0); b_ = 0.6/200; check('P5.5-13', [b_, 120 - 20*b_, (120.3 - (120 - 20*b_))/b_, 120 - 20*b_ - 40*b_], [0.003, 119.94, 120, 119.82], 1e-9)
check('P5.5-14', [5/0.8, 20 - 2*6.25, 20/2, 15/1.2], [6.25, 7.5, 10, 12.5], 1e-9)
check('P5.5-15', [v for v in range(0, 40) if 20 + 3*v < 45 and 20 + 3*v < 8*v], [5, 6, 7, 8], 0)
