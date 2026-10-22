# Pure Year 1, Chapter 6: circles.
from sympy import symbols, Rational as Q, sqrt, solve, simplify, expand, Point, Circle, Line, Triangle, Polygon
x, y, k, a, c = symbols('x y k a c', real=True)

def mid(A, B): return (Q(A[0] + B[0], 2), Q(A[1] + B[1], 2))
def grad(A, B): return Q(B[1] - A[1], 1) / (B[0] - A[0])
def dist2(A, B): return (B[0] - A[0])**2 + (B[1] - A[1])**2
def circ(*P):
    cc = Triangle(*[Point(*p) for p in P]).circumcircle; return (cc.center.x, cc.center.y, cc.radius**2)
def flat(v): return [z for t in v for z in (t if isinstance(t, tuple) else (t,))]
def same(qid, got, want):
    got, want = flat(got), flat(want)
    global count
    count += 1
    if [simplify(g - w) for g, w in zip(got, want)] != [0] * len(want) or len(got) != len(want): fails.append(f'{qid}: worked out {got}, answer says {want}')
def centre(qid, expr, want):
    """Centre and r^2 of x^2 + y^2 + ... = 0 (leading coefficients equal)."""
    e = expand(expr); A_ = e.coeff(x, 2); e = expand(e / A_)
    p, q = -e.coeff(x, 1) / 2, -e.coeff(y, 1) / 2; r2 = p**2 + q**2 - e.subs({x: 0, y: 0})
    same(qid, [p, q, r2], want)
def meets(qid, circle, liney, want):
    """Intersections of a circle (expr = 0) with y = liney."""
    sol = solve([circle, y - liney], [x, y], dict=True)
    same(qid, sorted((s[x], s[y]) for s in sol), sorted(want))
def tangent(qid, C_, P, want_grad):
    check(qid, -1 / grad(C_, P), want_grad, 0)

# 6.1
same('P6.1-1', mid((2, 5), (8, 9)), (5, 7)); same('P6.1-2', mid((-4, 3), (6, -7)), (1, -2)); same('P6.1-4', (2*3 + 2, 2*(-1) - 4), (8, -6))
check('P6.1-5', -1 / grad((0, 0), (6, 4)), Q(-3, 2), 0); check('P6.1-5e', 3*3 + 2*2 - 13, 0, 0)
same('P6.1-6', solve((k + 4)/2 - (2*(k + 5)/2 - 3), k), [0]); same('P6.1-7', [dist2((5, 5), (1, 2)), dist2((5, 5), (8, 1))], [25, 25])
same('P6.1-8', [mid((-1, 5), (3, -3))[0], mid((-1, 5), (3, -3))[1], -1 / grad((-1, 5), (3, -3))], [1, 1, Q(1, 2)])
same('P6.1-9', solve((1 - k)/4 + Q(1, 2), k), [3]); same('P6.1-10', [dist2((0, -2), (4, 0)), mid((0, -2), (4, 0))[0], mid((0, -2), (4, 0))[1]], [20, 2, -1])
same('P6.1-11', [dist2((0, 5), (-2, 1)), dist2((0, 5), (4, 3)), 2 - 3*(0 - 1)], [20, 20, 5])
same('P6.1-12', [solve(-5 + Q(1, 2)*(x - 5), x)[0], abs(Polygon(Point(3, 1), Point(7, 9), Point(15, 0)).area)], [15, 50])
same('P6.1-13', circ((1, 7), (5, 3), (-3, -1))[:2], (Q(1, 3), Q(7, 3)))
same('P6.1-15', circ((0, 8), (7, 7), (6, 0)), (3, 4, 25))

# 6.2
centre('P6.2-5', x**2 + y**2 - 8*x + 2*y + 8, [4, -1, 9]); same('P6.2-6', [dist2((3, 1), (7, 4))], [25])
same('P6.2-7', [*mid((-1, 2), (5, 10)), dist2(mid((-1, 2), (5, 10)), (5, 10))], [2, 6, 25]); same('P6.2-4', [(5 - 1)**2 + (2 + 1)**2], [25])
same('P6.2-8', solve(9 + 25 - k - 16, k), [18]); same('P6.2-10', sorted(solve((k - 2)**2 + 16 - 25, k)), [-1, 5])
centre('P6.2-11', 2*x**2 + 2*y**2 - 8*x + 12*y - 6, [2, -3, 16]); same('P6.2-12', [*circ((0, 2), (4, 6), (3 + sqrt(10), 3))], [3, 3, 10])
centre('P6.2-13', x**2 + y**2 - 6*x - 4*y + 9, [3, 2, 4]); check('P6.2-13b', dist2((1, 1), (3, 2)), 5, 0)
centre('P6.2-15', x**2 + y**2 - 10*x + 4*y + 4, [5, -2, 25]); same('P6.2-15c', sorted(solve(x**2 - 10*x + 4, x)), [5 - sqrt(21), 5 + sqrt(21)])
same('P6.2-15b', solve(y**2 + 4*y + 4, y), [-2]); same('P6.2-14', [sqrt(dist2((0, 0), (5, 3)))], [sqrt(34)])

# 6.3
meets('P6.3-1', x**2 + y**2 - 25, 3, [(4, 3), (-4, 3)]); meets('P6.3-4', x**2 + y**2 - 5, x + 1, [(1, 2), (-2, -1)])
meets('P6.3-5', (x - 1)**2 + (y - 2)**2 - 5, 2*x, [(0, 0), (2, 4)]); meets('P6.3-6', x**2 + y**2 - 8, x + 4, [(-2, 2)])
check('P6.3-7', 6**2 - 4*2*25, -164, 0); meets('P6.3-8', (x - 1)**2 + (y - 2)**2 - 10, 7 - x, [(2, 5), (4, 3)])
same('P6.3-9', sorted(solve(64 - 32*(1 + k**2), k)), [-1, 1]); same('P6.3-10', sorted(solve(4*c**2 - 8*(c**2 - 18), c)), [-6, 6])
meets('P6.3-11', x**2 + y**2 - 25, x + 1, [(3, 4), (-4, -3)]); same('P6.3-11b', [sqrt(dist2((3, 4), (-4, -3)))], [7*sqrt(2)])
same('P6.3-12', sorted(solve((4*k - 2)**2 - 20*(k**2 - 4), k)), [-7, 3])
for kk in (3, -7): meets(f'P6.3-12 k={kk}', x**2 + y**2 - 2*x - 4, 2*x + kk, [tuple(solve([x**2 + y**2 - 2*x - 4, y - 2*x - kk], [x, y])[0])])
meets('P6.3-13', x**2 + y**2 - 25, (25 - 3*x)/4, [(3, 4)])
same('P6.3-14', sorted(solve(2*sqrt(16 - (k - 2)**2) - 4*sqrt(3), k)), [0, 4])
meets('P6.3-15', (x - 3)**2 + (y - 2)**2 - 25, x + 4, [(3, 7), (-2, 2)]); same('P6.3-15c', [dist2((3, 2), mid((3, 7), (-2, 2))), dist2((3, 7), (-2, 2))], [Q(25, 2), 50])

# 6.4
tangent('P6.4-1', (0, 0), (3, 4), Q(-3, 4)); check('P6.4-3', -1 / grad((3, 2), (5, 3)), -2, 0)
tangent('P6.4-4', (0, 0), (1, 3), Q(-1, 3)); check('P6.4-4e', 1 + 3*3 - 10, 0, 0)
tangent('P6.4-5', (2, 1), (4, 4), Q(-2, 3)); check('P6.4-5e', 2*4 + 3*4 - 20, 0, 0)
check('P6.4-6', grad((1, -2), (5, 1)), Q(3, 4), 0); check('P6.4-6e', [3*5 - 4*1 - 11, 3*1 - 4*(-2) - 11], [0, 0], 0)
tangent('P6.4-7', (0, 0), (-3, 4), Q(3, 4)); check('P6.4-7b', 4 + Q(3, 4)*(1 + 3), 7, 0)
tangent('P6.4-8', (0, 0), (2, 3), Q(-2, 3)); check('P6.4-8b', Q(1, 2) * Q(13, 2) * Q(13, 3), Q(169, 12), 0)
check('P6.4-9', sqrt(dist2((7, 1), (2, 1)) - 9), 4, 0)
F = solve([y - 2*x - 3, y - 1 + (x - 4)/2], [x, y]); same('P6.4-10', [F[x], F[y], sqrt(dist2((4, 1), (F[x], F[y])))], [0, 3, 2*sqrt(5)])
check('P6.4-11', sqrt(25 - 16), 3, 0); same('P6.4-12', circ((1, 6), (7, 2), (2 + sqrt(26), 1)), (2, 1, 26))
check('P6.4-13', grad((0, 0), (2, 4)) * grad((0, 0), (4, -2)), -1, 0)
same('P6.4-14', solve((a + 1)**2 - (a - 5)**2 - 16, a), [Q(10, 3)])
centre('P6.4-15', x**2 + y**2 - 6*x - 2*y - 15, [3, 1, 25]); same('P6.4-15b', sorted(solve(y**2 - 2*y - 15, y)), [-3, 5])
tangent('P6.4-15c', (3, 1), (0, 5), Q(3, 4)); tangent('P6.4-15d', (3, 1), (0, -3), Q(-3, 4))
same('P6.4-15e', [solve(Q(3, 4)*x + 5 - (-Q(3, 4)*x - 3), x)[0]], [Q(-16, 3)])

# 6.5
same('P6.5-3', circ((0, 0), (4, 0), (0, 3)), (2, Q(3, 2), Q(25, 4))); same('P6.5-4', [dist2((1, 1), (1, 4)), grad((-2, 1), (1, 4)) * grad((4, 1), (1, 4))], [9, -1])
same('P6.5-5', circ((1, 1), (7, 1), (1, 9)), (4, 5, 25)); same('P6.5-6', circ((0, 0), (4, 0), (0, 6)), (2, 3, 13))
same('P6.5-7', [*mid((2, 5), (8, -3)), dist2(mid((2, 5), (8, -3)), (8, -3))], [5, 1, 25]); same('P6.5-8', circ((0, 0), (6, 0), (2, 4)), (3, 1, 10))
same('P6.5-9', (2*3 - 0, 2*(-1) - 3), (6, -5)); same('P6.5-10', sorted(solve(k**2 - 16, k)), [-4, 4])
same('P6.5-11', [dist2((4, 2), (4, 5)), grad((1, 2), (4, 5)) * grad((7, 2), (4, 5))], [9, -1])
same('P6.5-12', [grad((-1, 3), (3, 5)) * grad((3, 5), (5, 1)), *circ((-1, 3), (3, 5), (5, 1))], [-1, 2, 2, 10])
same('P6.5-13', circ((1, 2), (5, 6), (7, 0)), (Q(9, 2), Q(5, 2), Q(25, 2)))
same('P6.5-14', [*circ((0, 0), (8, 0), (0, 6)), -1 / grad((4, 3), (0, 0))], [4, 3, 25, Q(-4, 3)])
same('P6.5-15', [grad((-3, 5), (4, 6)) * grad((4, 6), (5, -1)), *circ((-3, 5), (4, 6), (5, -1)), -1 / grad((1, 2), (5, -1))], [-1, 1, 2, 25, Q(4, 3)])
check('P6.5-15c', 4*5 - 3*(-1) - 23, 0, 0)
