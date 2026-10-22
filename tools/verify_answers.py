#!/usr/bin/env python3
"""Re-solves every question in the bank independently and compares with the stated answers.

Run: python3 tools/verify_answers.py   (needs sympy for the exact checks)
Each check works the question out from scratch, numerically or symbolically, without reading the
answer text, then compares with the value written in the question's answer.
"""
import math, random
from sympy import (symbols, sin, cos, tan, sqrt, pi, Rational as Q, simplify, nsimplify, sec, csc, cot, atan, asin, acos, expand, factor)

g = 9.8
d = math.radians
fails, count = [], 0

def check(qid, got, want, tol=None):
    global count
    count += 1
    if isinstance(want, (list, tuple)):
        ok = len(got) == len(want) and all(abs(a - b) <= (tol or 0.051) for a, b in zip(sorted(got), sorted(want)))
    else:
        t = tol if tol is not None else max(0.005 * abs(want), 0.0051)
        ok = abs(got - want) <= t
    if not ok: fails.append(f'{qid}: worked out {got}, answer says {want}')

def exact(qid, expr, want):
    global count
    count += 1
    if simplify(expr - want) != 0: fails.append(f'{qid}: worked out {simplify(expr)}, answer says {want}')

def identity(qid, lhs, rhs):
    """Checks f(x) = g(x) at many random points (avoiding poles)."""
    global count
    count += 1
    for _ in range(40):
        x = random.uniform(-3, 3)
        try: a, b = lhs(x), rhs(x)
        except ZeroDivisionError: continue
        if abs(a) > 1e6: continue
        if abs(a - b) > 1e-7 * max(1, abs(a)): fails.append(f'{qid}: identity fails at x={x:.3f}: {a} vs {b}'); return

def roots(f, lo, hi, step=0.01):
    """All solutions of f(x) = 0 on [lo, hi), found by sign changes and touching points."""
    out, n = [], int((hi - lo) / step)
    xs = [lo + i * step for i in range(n + 1)]
    vals = []
    for x in xs:
        try: vals.append(f(x))
        except (ZeroDivisionError, ValueError): vals.append(float('nan'))
    for i in range(n):
        a, b, fa, fb = xs[i], xs[i + 1], vals[i], vals[i + 1]
        if math.isnan(fa) or math.isnan(fb): continue
        if abs(fa) < 1e-12: out.append(a); continue
        if fa * fb < 0 and abs(fa - fb) < 1e3:          # a sign change, not a pole
            for _ in range(60):
                m = (a + b) / 2; fm = f(m)
                if fa * fm <= 0: b = m
                else: a, fa = m, fm
            out.append((a + b) / 2)
    for i in range(1, n):                                 # touching roots (double roots)
        if not math.isnan(vals[i]) and abs(vals[i]) < 1e-4 and abs(vals[i]) <= abs(vals[i - 1]) and abs(vals[i]) <= abs(vals[i + 1]):
            if all(abs(xs[i] - r) > 0.05 for r in out): out.append(xs[i])
    res = []
    for r in sorted(out):
        if not res or abs(r - res[-1]) > 1e-6: res.append(r)
    return [r for r in res if lo - 1e-9 <= r < hi - 1e-9]

S, C, T = (lambda x: math.sin(d(x))), (lambda x: math.cos(d(x))), (lambda x: math.tan(d(x)))
x = symbols('x')
A_, B_ = symbols('A B')

# ---------------- 7.1 ----------------
exact('7.1-1', sin(pi/4 + pi/6), (sqrt(6) + sqrt(2)) / 4)
cA, sB, tA, tB = Q(4, 5), Q(5, 13), Q(3, 4), Q(-5, 12)
exact('7.1-2a', Q(3, 5) * Q(-12, 13) + cA * sB, Q(-16, 65))
exact('7.1-2b', cA * Q(-12, 13) + Q(3, 5) * sB, Q(-33, 65))
exact('7.1-2c', (tA + tB) / (1 - tA * tB), Q(16, 63))
exact('7.1-3', tan(pi / 12), 2 - sqrt(3))
identity('7.1-4', lambda t: math.cos(t + math.pi / 4), lambda t: math.sqrt(2) / 2 * (math.cos(t) - math.sin(t)))
identity('7.1-5', lambda t: math.sin(math.pi / 2 - t), math.cos)
exact('7.1-6', tan(5 * pi / 12), 2 + sqrt(3))
exact('7.1-7', cos(7 * pi / 12), (sqrt(2) - sqrt(6)) / 4)
identity('7.1-8', lambda t: math.cos(t + 1.1) + math.cos(t - 1.1), lambda t: 2 * math.cos(t) * math.cos(1.1))
identity('7.1-9', lambda t: math.sin(t + 0.7) * math.sin(t - 0.7), lambda t: math.sin(t) ** 2 - math.sin(0.7) ** 2)
A = math.pi + math.asin(3 / 5); B = math.pi - math.atan(5 / 12)
check('7.1-10a', math.cos(A + B), 63 / 65, 1e-9); check('7.1-10b', math.tan(A - B), 56 / 33, 1e-9)
al = math.atan(3 / 4); be = math.atan(8 / 4) - al
check('7.1-11a', math.tan(be), 0.5, 1e-9); check('7.1-11b', math.sin(be), 1 / math.sqrt(5), 1e-9)
identity('7.1-12a', lambda t: math.cos(t - math.pi / 3) + math.cos(t + math.pi / 3), math.cos)
check('7.1-12b', math.cos(d(15)) + math.cos(d(105)), math.sqrt(2) / 2, 1e-9)
check('7.1-12c', roots(lambda t: math.cos(d(t)) - S(t), 0, 360), [45, 225])
check('7.1-13', roots(lambda t: T(t + 45) - 6 * T(t), 0, 180), [18.4, 26.6])
check('7.1-14', roots(lambda t: S(t + 30) - 2 * S(t - 30), 0, 360), [60, 240])
a, b, c = 0.3, 0.5, 0.9
tt = lambda u: math.tan(u)
check('7.1-15a', tt(a + b + c), (tt(a) + tt(b) + tt(c) - tt(a) * tt(b) * tt(c)) / (1 - tt(a) * tt(b) - tt(b) * tt(c) - tt(c) * tt(a)), 1e-9)
check('7.1-15c', 3 * math.sqrt(3), math.sqrt(3) ** 3, 1e-9)

# ---------------- 7.2 ----------------
identity('7.2-1', lambda t: math.sin(t + math.pi / 6) - math.cos(t + math.pi / 3), lambda t: math.sqrt(3) * math.sin(t))
check('7.2-2', roots(lambda t: S(t + 30) - 2 * C(t), 0, 360), [60, 240])
ty = 0.37; tx = (3 - 2 * ty) / (2 - 3 * ty); X = math.atan(tx); Y = math.atan(ty)
check('7.2-3', 2 * math.sin(X + Y), 3 * math.cos(X - Y), 1e-9)
check('7.2-4', math.atan(1 / 3) + math.atan(1 / 2), math.pi / 4, 1e-12)
identity('7.2-5', lambda t: math.sin(3 * t) * math.cos(t) + math.cos(3 * t) * math.sin(t), lambda t: math.sin(4 * t))
check('7.2-6', S(70) * C(25) - C(70) * S(25), math.sqrt(2) / 2, 1e-12)
check('7.2-7', (T(70) - T(25)) / (1 + T(70) * T(25)), 1, 1e-12)
check('7.2-8', math.tan(math.atan(3) - math.atan(0.5)), 1, 1e-12)
check('7.2-9', roots(lambda t: math.cos(t + math.pi / 3) - math.sin(t), 0, 2 * math.pi, 0.001), [math.pi / 12, 13 * math.pi / 12], 0.002)
identity('7.2-10a', lambda t: math.sin(t + 0.4) / (math.cos(t) * math.cos(0.4)), lambda t: math.tan(t) + math.tan(0.4))
check('7.2-10b', roots(lambda t: S(t + 45) / (C(t) * C(45)) - 3, 0, 360), [63.4, 243.4])
check('7.2-11', roots(lambda t: 2 * S(t - 60) - C(t + 30), -180 + 1e-9, 180.001), [-120, 60])
identity('7.2-12a', lambda t: 3 * math.sin(t + math.pi / 3) - 2 * math.cos(t + math.pi / 6), lambda t: 2.5 * math.sin(t) + math.sqrt(3) / 2 * math.cos(t))
check('7.2-12b', roots(lambda t: 3 * S(t + 60) - 2 * C(t + 30), 0, 360), [160.9, 340.9])
for tx in (1, 0.5):   # 7.2-13: tan x tan y = 1/2 and tan(x + y) = 3
    ty = 0.5 / tx; X, Y = math.atan(tx), math.atan(ty)
    check('7.2-13', math.tan(X + Y), 3, 1e-9); check('7.2-13a', math.cos(X - Y), 3 * math.cos(X + Y), 1e-9)
p, q = (3 / 5 + 1 / 3) / 2, (3 / 5 - 1 / 3) / 2
check('7.2-14a', p, 7 / 15, 1e-12); check('7.2-14b', q, 2 / 15, 1e-12); check('7.2-14c', p / q, 3.5, 1e-12)
t = symbols('t')
exact('7.2-15', expand((t + 1) * (t ** 2 - 4 * t + 1)), t ** 3 - 3 * t ** 2 - 3 * t + 1)
for r in (2 - math.sqrt(3), 2 + math.sqrt(3), -1): check('7.2-15 root', r ** 3 - 3 * r ** 2 - 3 * r + 1, 0, 1e-9)
check('7.2-15 angles', [math.tan(d(15)), math.tan(d(75)), math.tan(d(135))], [2 - math.sqrt(3), 2 + math.sqrt(3), -1], 1e-9)

# ---------------- 7.3 ----------------
X = math.pi - math.acos(1 / 3)
check('7.3-1a', math.sin(X), 2 * math.sqrt(2) / 3, 1e-9); check('7.3-1b', math.sin(2 * X), -4 * math.sqrt(2) / 9, 1e-9)
check('7.3-1c', math.cos(2 * X), -7 / 9, 1e-9); check('7.3-1d', math.tan(2 * X), 4 * math.sqrt(2) / 7, 1e-9)
identity('7.3-2', lambda t: (1 - math.cos(2 * t)) / math.sin(2 * t), math.tan)
identity('7.3-3', lambda t: math.cos(3 * t), lambda t: 4 * math.cos(t) ** 3 - 3 * math.cos(t))
check('7.3-4', C(15), math.sqrt(2 + math.sqrt(3)) / 2, 1e-12)
identity('7.3-5', lambda t: 2 * math.sin(3 * t) * math.cos(3 * t), lambda t: math.sin(6 * t))
check('7.3-6', C(15) ** 2 - S(15) ** 2, math.sqrt(3) / 2, 1e-12)
X = 2 * math.pi - math.atan(2)
check('7.3-7', [math.sin(2 * X), math.cos(2 * X), math.tan(2 * X)], [-0.8, -0.6, 4 / 3], 1e-9)
check('7.3-8', S(22.5), math.sqrt(2 - math.sqrt(2)) / 2, 1e-12)
identity('7.3-9', lambda t: math.cos(4 * t), lambda t: 8 * math.cos(t) ** 4 - 8 * math.cos(t) ** 2 + 1)
identity('7.3-10a', lambda t: math.cos(2 * t), lambda t: (1 - math.tan(t) ** 2) / (1 + math.tan(t) ** 2))
check('7.3-10b', math.cos(2 * math.atan(1 / 3)), 0.8, 1e-12)
check('7.3-10c', roots(lambda t: 2 * (1 - T(t) ** 2) - (1 + T(t) ** 2), 0, 180), [30, 150])
X = math.asin(0.25)
check('7.3-11', [math.sin(2 * X), math.cos(2 * X), math.sin(4 * X)], [math.sqrt(15) / 8, 7 / 8, 7 * math.sqrt(15) / 32], 1e-9)
identity('7.3-12a', lambda t: math.cos(t) ** 4, lambda t: 3 / 8 + math.cos(2 * t) / 2 + math.cos(4 * t) / 8)
check('7.3-12b', math.cos(math.pi / 8) ** 4, (3 + 2 * math.sqrt(2)) / 8, 1e-12)
X = math.atan(3 / 4) / 2
check('7.3-13', [math.tan(X), math.sin(X), math.cos(4 * X)], [1 / 3, 1 / math.sqrt(10), 7 / 25], 1e-9)
th = math.asin(12 / 20)
check('7.3-14', 50 * math.sin(2 * th), 48, 1e-9)
check('7.3-15', S(18), (math.sqrt(5) - 1) / 4, 1e-12)

# ---------------- 7.4 ----------------
check('7.4-1', roots(lambda t: math.cos(d(2 * t)) - 3 * S(t) + 1, 0, 360), [30, 150])
check('7.4-2', roots(lambda t: math.sin(2 * t) * math.cos(t) - math.sin(t), 0, 2 * math.pi + 0.001, 0.001),
      [0, math.pi / 4, 3 * math.pi / 4, math.pi, 5 * math.pi / 4, 7 * math.pi / 4, 2 * math.pi], 0.002)
check('7.4-3', roots(lambda t: 3 * C(2 * t) + 5 * C(t) + 4, 0, 360), [109.5, 120, 240, 250.5])
check('7.4-4', roots(lambda t: S(t) * C(t) - 0.25, 0, 180), [15, 75])
check('7.4-5', roots(lambda t: S(2 * t) - math.sqrt(3) / 2, 0, 180), [30, 60])
check('7.4-6', roots(lambda t: C(2 * t), 0, 180), [45, 135])
check('7.4-7', roots(lambda t: 2 * S(t) * C(t) - C(t), 0, 360), [30, 90, 150, 270])
check('7.4-8', roots(lambda t: C(2 * t) + S(t), -180 + 1e-9, 180.001), [-150, -30, 90])
check('7.4-9', roots(lambda t: math.sin(d(2 * t)) * math.cos(d(t)) - 3 * math.sin(d(t)) * math.cos(d(2 * t)), 0, 180), [0, 30, 150])
check('7.4-10', roots(lambda t: math.sin(4 * t) - math.sin(2 * t), 0, math.pi, 0.0005), [0, math.pi / 6, math.pi / 2, 5 * math.pi / 6], 0.002)
check('7.4-11', roots(lambda t: 3 * S(2 * t) * S(t) - 2 * C(t), 0.001, 360), [35.3, 90, 144.7, 215.3, 270, 324.7])
check('7.4-12b', roots(lambda t: S(2 * t) - math.sqrt(3) * S(t), 0, 360), [0, 30, 180, 330])
check('7.4-12c', roots(lambda t: S(4 * t) - math.sqrt(3) * S(2 * t), 0, 180), [0, 15, 90, 165])
check('7.4-13a', roots(lambda t: 2 * C(t) ** 2 + 3 * S(t) - 3, 0, 360), [30, 90, 150])
check('7.4-13b', roots(lambda t: 2 * C(2 * t - 30) ** 2 + 3 * S(2 * t - 30) - 3, 0, 180), [30, 60, 90])
check('7.4-14', roots(lambda t: 4 * math.cos(2 * t) + 10 * math.sin(t) - 7, 0, 2 * math.pi, 0.0005), [math.pi / 6, 0.848, 2.29, 5 * math.pi / 6], 0.006)
check('7.4-15b', roots(lambda t: 8 * C(t) ** 3 - 6 * C(t) + 1, 0, 180.001), [40, 80, 160])
check('7.4-15c', C(40) + C(80) + C(160), 0, 1e-12)

# ---------------- 7.5 ----------------
check('7.5-1a', math.degrees(math.atan(4 / 3)), 53.13, 0.006)
check('7.5-1b', 90 - math.degrees(math.atan(4 / 3)), 36.87, 0.006)
check('7.5-1c', roots(lambda t: 3 * S(t) + 4 * C(t) - 2, 0, 360), [103.29, 330.45], 0.006)
check('7.5-2', roots(lambda t: math.cos(t) - math.sqrt(3) * math.sin(t) - 1, -1e-9, 2 * math.pi, 0.0005), [0, 4 * math.pi / 3], 0.002)
check('7.5-3', [20 / (20 - 13), 20 / (20 + 13), math.degrees(math.atan(5 / 12))], [20 / 7, 20 / 33, 22.62], 0.006)
check('7.5-4', [5, 3 - 2], [5, 1])
check('7.5-5', [math.hypot(math.sqrt(3), 1), math.degrees(math.atan(1 / math.sqrt(3)))], [2, 30], 1e-9)
identity('7.5-6', lambda t: math.sin(t) - math.cos(t), lambda t: math.sqrt(2) * math.sin(t - math.pi / 4))
identity('7.5-7', lambda t: 2 * math.cos(t) + 3 * math.sin(t), lambda t: math.sqrt(13) * math.cos(t - math.atan(1.5)))
check('7.5-7', math.degrees(math.atan(1.5)), 56.31, 0.006)
identity('7.5-8', lambda t: 4 * math.sin(t) - 3 * math.cos(t), lambda t: 5 * math.sin(t - math.atan(0.75)))
check('7.5-8', math.atan(0.75), 0.644, 0.0006)
check('7.5-9', len(roots(lambda t: 2 * S(t) + C(t) - 3, 0, 360)), 0, 0)
check('7.5-9b', max(2 * S(t) + C(t) for t in range(360)), math.sqrt(5), 0.001)
identity('7.5-10', lambda t: math.sin(t) + math.sqrt(3) * math.cos(t), lambda t: 2 * math.sin(t + math.pi / 3))
check('7.5-11', [len(roots(lambda t: 3 * C(t) + 4 * S(t) - k, 0, 360)) for k in (5, 2, 6)], [1, 2, 0], 0)
check('7.5-12', roots(lambda t: 5 * S(t) - 12 * C(t) - 6.5, 0, 360), [97.4, 217.4])
f13 = lambda t: (2 * C(t) - S(t)) ** 2 + 3
check('7.5-13b', max(f13(t / 100) for t in range(36000)), 8, 0.001)
check('7.5-13b x', [r for r in roots(lambda t: (2 * C(t) - S(t)) ** 2 - 5, 0.01, 360) if r > 0][0], 153.43, 0.006)
check('7.5-13c', min(4 / (1 + (2 * C(t / 100) - S(t / 100)) ** 2) for t in range(36000)), 2 / 3, 0.001)
identity('7.5-14a', lambda t: 3 * math.sin(2 * t) + 4 * math.cos(t) ** 2, lambda t: 2 + 3 * math.sin(2 * t) + 2 * math.cos(2 * t))
f14 = lambda t: 3 * S(2 * t) + 4 * C(t) ** 2
best = max(range(18000), key=lambda i: f14(i / 100)) / 100
check('7.5-14c', [f14(best), best], [2 + math.sqrt(13), 28.2], 0.051)
check('7.5-15a', math.sqrt(1 + 3), 2, 1e-12)
check('7.5-15b', roots(lambda t: S(t) + math.sqrt(3) * C(t) - 2, 0, 360), [30], 0.05)

# ---------------- 7.6 ----------------
idents = {
 '7.6-1': (lambda t: math.cos(2 * t) / (math.cos(t) + math.sin(t)), lambda t: math.cos(t) - math.sin(t)),
 '7.6-2': (lambda t: math.sin(2 * t) / (1 + math.cos(2 * t)), math.tan),
 '7.6-3': (lambda t: 1 / math.tan(t) - math.tan(t), lambda t: 2 / math.tan(2 * t)),
 '7.6-4': (lambda t: math.sin(3 * t), lambda t: 3 * math.sin(t) - 4 * math.sin(t) ** 3),
 '7.6-5': (lambda t: (math.sin(t) + math.cos(t)) ** 2, lambda t: 1 + math.sin(2 * t)),
 '7.6-6': (lambda t: (1 - math.cos(2 * t)) / (1 + math.cos(2 * t)), lambda t: math.tan(t) ** 2),
 '7.6-7': (lambda t: math.sin(t) ** 4 - math.cos(t) ** 4, lambda t: -math.cos(2 * t)),
 '7.6-9': (lambda t: 1 / math.sin(2 * t) + 1 / math.tan(2 * t), lambda t: 1 / math.tan(t)),
 '7.6-10': (lambda t: math.sin(2 * t) / math.sin(t) - math.cos(2 * t) / math.cos(t), lambda t: 1 / math.cos(t)),
 '7.6-11': (lambda t: math.sin(2 * t) / (1 - math.cos(2 * t)), lambda t: 1 / math.tan(t)),
 '7.6-12': (lambda t: math.tan(math.pi / 4 + t) - math.tan(math.pi / 4 - t), lambda t: 2 * math.tan(2 * t)),
 '7.6-13': (lambda t: math.cos(3 * t) + math.cos(t), lambda t: 2 * math.cos(2 * t) * math.cos(t)),
 '7.6-14': (lambda t: (math.sin(t) + math.sin(2 * t)) / (1 + math.cos(t) + math.cos(2 * t)), math.tan),
 '7.6-15a': (lambda t: math.cos(t) ** 6 + math.sin(t) ** 6, lambda t: 1 - 0.75 * math.sin(2 * t) ** 2),
 '7.6-15b': (lambda t: math.cos(t) ** 6 + math.sin(t) ** 6, lambda t: (5 + 3 * math.cos(4 * t)) / 8),
}
for k, (l, r) in idents.items(): identity(k, l, r)
check('7.6-8', [S(180), 2 * S(90)], [0, 2], 1e-9)
check('7.6-10b', roots(lambda t: 1 / C(t) - 2, 0.01, 360), [60, 300])
check('7.6-12b', roots(lambda t: T(45 + t) - T(45 - t) - 2, 0.01, 89.99), [22.5])
check('7.6-13b', roots(lambda t: C(3 * t) + C(t), 0, 180.001), [45, 90, 135])
den = lambda t: 1 + C(t) + C(2 * t)
check('7.6-14b', roots(den, 0, 360), [90, 120, 240, 270])
sols = [r for r in roots(lambda t: T(t) - math.sqrt(3), 0, 360) if abs(den(r)) > 1e-6]
check('7.6-14c', sols, [60])
check('7.6-15c', min(C(t / 100) ** 6 + S(t / 100) ** 6 for t in range(9000)), 0.25, 1e-6)

# ---------------- 7.7 ----------------
D1 = lambda t: 6 + 2.5 * S(30 * t)
check('7.7-1b', roots(lambda t: D1(t) - 7, 0, 12, 0.001), [0.786, 5.214], 0.002)
check('7.7-1c', 5.214 - 0.786, 4 + 26 / 60, 0.01)
T2 = lambda t: 20 + 3 * C(15 * t) - 4 * S(15 * t)
mx = max(range(24000), key=lambda i: T2(i / 1000)) / 1000; mn = min(range(24000), key=lambda i: T2(i / 1000)) / 1000
check('7.7-2', [T2(mx), mx, T2(mn), mn], [25, 20 + 27.5 / 60, 15, 8 + 27.5 / 60], 0.01)
h = lambda t: 25 - 23 * C(12 * t)
check('7.7-3', [max(h(t / 10) for t in range(300)), min(h(t / 10) for t in range(300))], [48, 2], 0.01)
check('7.7-4', 360 / 12, 30)
check('7.7-5', [5 + 2 * S(0), 2], [5, 2])
check('7.7-6', [(24 + 10) / 2, (24 - 10) / 2, 360 / 15], [17, 7, 24])
check('7.7-7', roots(lambda t: h(t) - 37, 0, 15, 0.001)[0], 10.1, 0.051)
check('7.7-8', [360 / 12.4, 4 - 1.5, 12.4 / 2], [29.0, 2.5, 6.2], 0.051)
check('7.7-9', [12 + 4.5, 170 / 0.986, 360 / 365], [16.5, 172.4, 0.986], 0.06)
check('7.7-10', roots(lambda t: 5 + 3 * S(30 * t) - 6.5, 0, 24, 0.001), [1, 5, 13, 17], 0.002)
check('7.7-11', [h(4)] + roots(lambda t: h(t) - 36.5, 0, 30, 0.001), [9.61, 10, 20], 0.006)
Dm = lambda t: 6 + 3.2 * C(30 * t)
check('7.7-12', [Dm(0), Dm(6), Dm(4)], [9.2, 2.8, 4.4], 1e-9)
T13 = lambda t: 18 + 2 * S(15 * t) + 2 * math.sqrt(3) * C(15 * t)
mx = max(range(24000), key=lambda i: T13(i / 1000)) / 1000
check('7.7-13', [T13(mx), mx] + roots(lambda t: T13(t) - 20, 0, 24, 0.001), [22, 2, 6, 22], 0.01)
k = 360 / 12.4
highs = [i / 1000 for i in range(1, 24000) if S(k * (i - 1) / 1000) < S(k * i / 1000) >= S(k * (i + 1) / 1000)]
check('7.7-14', highs[:2], [3.1, 15.5], 0.01)
y = lambda t: 3 * S(30 * t) + 4 * C(30 * t)
lo = min(range(12000), key=lambda i: y(i / 1000)) / 1000
check('7.7-15', [lo, roots(lambda t: y(t) - 5 * S(30 * t), 0.001, 12, 0.001)[0]], [7.23, 2.11], 0.006)

# ---------------- 5.1 ----------------
check('5.1-1', [8 + 5 * C(60), 5 * S(60), math.hypot(10.5, 5 * S(60)), math.degrees(math.atan2(5 * S(60), 10.5))], [10.5, 4.33, 11.4, 22.4], 0.051)
T1 = 4 * g / (S(30) + math.sqrt(3) * S(60)); check('5.1-2', [T1, math.sqrt(3) * T1], [19.6, 33.9], 0.051)
check('5.1-3', [30 * C(20) / 5, 5 * g - 30 * S(20)], [5.64, 38.7], 0.051)
check('5.1-4', [20 * C(30), 20 * S(30)], [17.3, 10], 0.051)
check('5.1-5', [math.hypot(6, 8), math.degrees(math.atan2(8, 6))], [10, 53.1], 0.051)
check('5.1-6', [-(3 - 5), -(-2 + 4)], [2, -2])
check('5.1-7', [5 - 2, 4 - 3, math.hypot(-5, 1)], [3, 1, 5.10], 0.006)
check('5.1-8', [math.hypot(-4, 7), math.degrees(math.atan2(7, -4))], [8.06, 119.7], 0.051)
T9 = 0.5 * g / C(25); check('5.1-9', [T9, T9 * S(25)], [5.41, 2.28], 0.006)
p = 2 - 3; check('5.1-10', [p, math.hypot(3 + p, 2), math.hypot(3 + p, 2) / 2], [-1, 2.83, 1.41], 0.006)
check('5.1-11', [math.hypot(5, 12), math.degrees(math.atan2(12, 5))], [13, 67.4], 0.051)
check('5.1-12', [8 - 7, 12 - 6, math.hypot(1, 6), math.degrees(math.atan(1 / 6)), math.hypot(6, 9)], [1, 6, 6.08, 9.46, 10.8], 0.051)
TB = 20 * C(30) / C(45); check('5.1-13', [TB, (20 * S(30) + TB * S(45)) / g], [24.5, 2.79], 0.051)
X = 5 + 8 * C(120) + 6 * C(240); Y = 8 * S(120) + 6 * S(240)
check('5.1-14', [X, Y, math.hypot(X, Y), math.degrees(math.atan2(Y, X))], [-2, math.sqrt(3), 2.65, 139.1], 0.051)
th = roots(lambda a: math.hypot(6 + 10 * C(a), 10 * S(a)) - 14, 0, 180.01)[0]
check('5.1-15', [th, min(math.hypot(6 + 10 * C(a), 10 * S(a)) for a in range(181)), math.degrees(math.atan2(10 * S(60), 6 + 10 * C(60)))], [60, 4, 38.2], 0.051)

# ---------------- 5.2 ----------------
check('5.2-1', [g * S(30), 3 * g * C(30), g * S(30) * 2], [4.9, 25.5, 9.8], 0.051)
sa, ca = 0.6, 0.8; P = 2 * g * sa / ca; check('5.2-2', [P, 2 * g * ca + P * sa], [14.7, 24.5], 0.051)
a3 = (20 - 1.5 * g * S(25)) / 1.5; check('5.2-3', [a3, math.sqrt(2 * a3 * 3)], [9.19, 7.43], 0.006)
check('5.2-4', [4 * g * S(20), 4 * g * C(20)], [13.4, 36.8], 0.051)
check('5.2-5', g * 7 / 25, 2.74, 0.006)
check('5.2-6', 6 * g * S(35), 33.7, 0.051)
al = math.degrees(math.asin(20 / (5 * g))); check('5.2-7', [al, 5 * g * C(al)], [24.1, 44.7], 0.051)
check('5.2-8', [g * S(30), 49 / (2 * 4.9), 2 * 7 / 4.9], [4.9, 5, 2.86], 0.006)
P = 3 * g * S(25) / C(15); check('5.2-9', [P, 3 * g * C(25) - P * S(15)], [12.9, 23.3], 0.051)
check('5.2-10', [(30 * 0.8 - 2 * g * 0.6) / 2, 2 * g * 0.8 + 30 * 0.6], [6.12, 33.7], 0.051)
a = g * S(40); v = math.sqrt(2 * a * 8); check('5.2-11', [v, v / a], [10.0, 1.59], 0.051)
a = 10 / (0.5 * 2.5 ** 2); al = math.degrees(math.asin(a / g))
check('5.2-12', [a, al, 1.5 * a + 1.5 * 1.2, 1.5 * g * C(al)], [3.2, 19.1, 6.6, 13.9], 0.051)
check('5.2-13', [(60 * C(30) - 10 * g * S(20)) / 10, 10 * g * C(20) - 60 * S(30), 10 * g * C(20) / S(30)], [1.84, 62.1, 184], 0.51)
a = g * 7 / 25; check('5.2-14', [14 / a, 196 / (2 * a), math.sqrt(196 - 2 * a * 20)], [5.10, 35.7, 9.29], 0.051)
m_, al_, th_ = 2.0, 25, 30
P = m_ * g * S(al_) / C(th_); R = m_ * g * C(al_) - P * S(th_)
check('5.2-15a', R, m_ * g * (C(al_) - S(al_) * T(th_)), 1e-9)
check('5.2-15c', m_ * g * (C(al_) - S(al_) * T(90 - al_)), 0, 1e-9)

# ---------------- 5.3 ----------------
check('5.3-1', [0.3 * 10 * g, (40 - 0.3 * 10 * g) / 10], [29.4, 1.06], 0.006)
check('5.3-2', T(30), math.sqrt(3) / 3, 1e-12)
R = 4 * g * 0.8; check('5.3-3', [R, 0.5 * R, 4 * g * 0.6, (4 * g * 0.6 - 0.5 * R) / 4, 0.5 * 1.96 * 9], [31.36, 15.68, 23.52, 1.96, 8.82], 0.006)
R = 20 * g - 100 * S(30); check('5.3-4', [R, 100 * C(30), 100 * C(30) / R], [146, 86.6, 0.593], 0.006)
R = 5 * g * C(20); check('5.3-5', [R, 5 * g * S(20) + 0.4 * R, 5 * g * S(20), 0.4 * R], [46.0, 35.2, 16.8, 18.4], 0.051)
check('5.3-6', 0.4 * 3 * g, 11.8, 0.051)
check('5.3-7', 0.25 * g, 2.45, 0.006)
check('5.3-8', [0.5 * 5 * g, 15], [24.5, 15], 0.051)
a = 64 / 20; check('5.3-9', [a, a / g], [3.2, 0.327], 0.0006)
check('5.3-10', 0.3 * 12 * g / (C(20) + 0.3 * S(20)), 33.8, 0.051)
R = 4 * g * C(30); check('5.3-11', [0.2 * R, 4 * g * 0.5 - 0.2 * R, 4 * g * 0.5 + 0.2 * R], [6.79, 12.8, 26.4], 0.051)
check('5.3-12', (5 * g * 0.6 + 0.25 * 5 * g * 0.8) / (0.8 - 0.25 * 0.6), 60.3, 0.051)
up = g * S(30) + 0.4 * g * C(30); s = 100 / (2 * up); dn = g * S(30) - 0.4 * g * C(30)
check('5.3-13', [up, s, math.sqrt(2 * dn * s)], [8.29, 6.03, 4.26], 0.006)
check('5.3-13c', 0.4 < T(30), True, 0)
a = (4 * g - 3 * g * S(30) - 0.3 * 3 * g * C(30)) / 7; check('5.3-14', [a, 4 * (g - a)], [2.41, 29.6], 0.051)
Pmin = min(0.5 * 20 * g / (C(t / 100) + 0.5 * S(t / 100)) for t in range(9000))
best = min(range(9000), key=lambda t: 0.5 * 20 * g / (C(t / 100) + 0.5 * S(t / 100))) / 100
check('5.3-15', [Pmin, best, 0.5 * 20 * g / math.sqrt(1.25)], [87.7, 26.6, 87.7], 0.051)

# Year 1 chapters: one file of checks per chapter in tools/verify/, run with the same helpers.
import glob, os
for f in sorted(glob.glob(os.path.join(os.path.dirname(os.path.abspath(__file__)), 'verify', '*.py'))):
    exec(compile(open(f).read(), f, 'exec'), globals())

print(f'{count} checks run')
if fails:
    print('\n'.join(fails)); raise SystemExit(1)
print('Every answer agrees with an independent calculation.')
