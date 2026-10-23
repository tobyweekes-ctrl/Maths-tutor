# Pure Year 2, Chapter 6: sec, cosec, cot, identities and inverse trig. Equations are solved by scanning the interval.
import math, sympy as sp
R = math.radians
sec6, csc6, cot6 = (lambda d: 1/math.cos(R(d))), (lambda d: 1/math.sin(R(d))), (lambda d: math.cos(R(d))/math.sin(R(d)))
def solve_deg6(f, lo=0, hi=360, step=0.05):
    """Roots of f in degrees on [lo, hi], found by sign changes and bisection; skips asymptotes."""
    out, x = [], lo
    def val(t):
        try: return f(t)
        except ZeroDivisionError: return float('nan')
    while x < hi:
        a, b = x, min(x + step, hi); fa, fb = val(a), val(b)
        if abs(fa) < 1e-12: out.append(a)
        elif fa*fb < 0 and abs(fa) < 50 and abs(fb) < 50:
            for _ in range(60):
                m = (a + b)/2
                if val(a)*val(m) <= 0: b = m
                else: a = m
            out.append((a + b)/2)
        x = b
    if abs(val(hi)) < 1e-12: out.append(hi)
    res = []
    for r in out:
        if not res or abs(r - res[-1]) > 1e-6: res.append(r)
    return res
th = sp.symbols('theta')
# 6.1
check('2P6.1-1-3', [sec6(60), csc6(30), cot6(45)], [2, 2, 1], 1e-9)
check('2P6.1-4-7', [sec6(135), csc6(240), cot6(300), sec6(30)], [-2**0.5, -2/3**0.5, -1/3**0.5, 2/3**0.5], 1e-9)
check('2P6.1-8', sec6(50), 1.556, 0.0006)
for q, lhs, rhs in [('2P6.1-9a', sp.sin(th)*sp.cot(th), sp.cos(th)), ('2P6.1-9b', sp.cos(th)/sp.sin(th), sp.cot(th)),
                    ('2P6.1-10', 1/sp.cos(th) - sp.cos(th), sp.sin(th)*sp.tan(th)), ('2P6.1-13', (1 - sp.cos(th)**2)/sp.sin(th), sp.sin(th)),
                    ('2P6.1-14', (1/sp.sin(th))/(1/sp.cos(th)), sp.cot(th))]:
    exact(q, sp.simplify(lhs - rhs), 0)
x = math.pi - math.asin(0.6); check('2P6.1-11', [1/math.sin(x), 1/math.cos(x), math.cos(x)/math.sin(x)], [5/3, -5/4, -4/3], 1e-9)
check('2P6.1-12', 1/math.cos(7*math.pi/6), -2/3**0.5, 1e-9)
check('2P6.1-15', [180 + math.degrees(math.atan(-3**0.5)), sec6(120), csc6(120), cot6(120)], [120, -2, 2/3**0.5, -1/3**0.5], 1e-9)
# 6.2
check('2P6.2-6', len(solve_deg6(lambda d: sec6(d) - 2)), 2, 0); check('2P6.2-7', 3*csc6(90), 3, 1e-12)
check('2P6.2-9', [d for d in range(0, 361) if abs(math.sin(R(d - 30))) < 1e-12], [30, 210], 0)
check('2P6.2-10', [d for d in range(0, 361) if abs(math.cos(R(2*d))) < 1e-12], [45, 135, 225, 315], 0)
check('2P6.2-11', len(solve_deg6(lambda d: csc6(d) - 1.7, 0.01, 359.99)), 2, 0)
a, b = sp.symbols('a b'); s12 = sp.solve([a + b - 5, 2*a + b - 8], [a, b]); check('2P6.2-12', [s12[a], s12[b]], [3, 2], 0)
check('2P6.2-13', solve_deg6(lambda d: csc6(d) - 2, 0.01, 359.99), [30, 150], 1e-6)
check('2P6.2-15', [d for d in range(0, 361) if abs(math.sin(R(d + 30))) < 1e-12] + [2*csc6(90) - 1, 2*csc6(270) - 1], [150, 330, 1, -3], 1e-9)
# 6.3
S = lambda f, lo=0, hi=360: solve_deg6(f, lo, hi)
check('2P6.3-1', S(lambda d: math.cos(R(d)) - 0.5), [60, 300], 1e-6); check('2P6.3-2', S(lambda d: math.sin(R(d)) - 0.5), [30, 150], 1e-6)
check('2P6.3-3', S(lambda d: math.sin(R(d)) - math.cos(R(d))), [45, 225], 1e-6)
check('2P6.3-4', S(lambda d: math.cos(R(d)) + 2/3), [131.8, 228.2], 0.06); check('2P6.3-5', S(lambda d: math.cos(R(d)) + 3**0.5*math.sin(R(d))), [150, 330], 1e-6)
check('2P6.3-6', S(lambda d: math.sin(R(2*d)) - 0.5, 0, 180), [15, 75], 1e-6)
exact('2P6.3-7', sp.simplify(sp.cot(th)/sp.cos(th) - 1/sp.sin(th)), 0)
check('2P6.3-8', S(lambda d: 3*math.sin(R(d))**2 - 1), [35.3, 144.7, 215.3, 324.7], 0.06)
check('2P6.3-9', S(lambda d: math.cos(R(d + 20)) - 0.5), [40, 280], 1e-6)
exact('2P6.3-10', sp.simplify(1/sp.sin(th) - sp.sin(th) - sp.cos(th)*sp.cot(th)), 0)
check('2P6.3-11', S(lambda d: math.cos(R(d))*(1 - 2*math.sin(R(d))), 0.01, 359.99), [30, 90, 150, 270], 1e-6)
check('2P6.3-12', [r for r in [math.pi/4, 7*math.pi/4] if abs(1/math.cos(r) - 2**0.5) < 1e-9], [math.pi/4, 7*math.pi/4], 1e-12)
check('2P6.3-13', S(lambda d: 4*math.cos(R(d))**2 - 1), [60, 120, 240, 300], 1e-6)
exact('2P6.3-14', sp.simplify((1 + sp.cos(th))*(1/sp.sin(th) - sp.cot(th)) - sp.sin(th)), 0)
check('2P6.3-15', S(lambda d: math.sin(R(d))*(1 - 2*math.cos(R(d)))), [0, 60, 180, 300, 360], 1e-6)
# 6.4
check('2P6.4-2', (1 + (3/4)**2)**0.5, 1.25, 1e-12)
exact('2P6.4-3', sp.simplify(1/sp.cos(th)**2 - sp.tan(th)**2), 1); exact('2P6.4-6', sp.simplify((1/sp.cos(th) - 1)*(1/sp.cos(th) + 1) - sp.tan(th)**2), 0)
check('2P6.4-4', S(lambda d: math.tan(R(d))**2 - 2/math.cos(R(d)) + 1 if abs(math.cos(R(d))) > 1e-6 else float('nan')), [60, 300], 1e-6)
check('2P6.4-7', S(lambda d: math.cos(R(d))**2 - 0.25), [60, 120, 240, 300], 1e-6)
check('2P6.4-8', S(lambda d: 2*math.sin(R(d))**2 + math.cos(R(d)) - math.cos(R(d))**2), [0, 131.8, 228.2, 360], 0.06)   # x cos^2
check('2P6.4-9', S(lambda d: math.cos(R(d))**2 + math.sin(R(d)) - 5*math.sin(R(d))**2, 0.01, 359.99), [30, 150, 199.5, 340.5], 0.06)
exact('2P6.4-10', sp.simplify(1/sp.cos(th)**4 - sp.tan(th)**4 - 1/sp.cos(th)**2 - sp.tan(th)**2), 0)
check('2P6.4-11', 1/math.sin(math.pi + math.atan(1/2)), -5**0.5, 1e-9)
exact('2P6.4-12', sp.simplify((1 + sp.tan(th)**2)/(1 + sp.cot(th)**2) - sp.tan(th)**2), 0)
check('2P6.4-13', S(lambda d: 3 - 5*math.cos(R(d))*math.sin(R(d)) - 5*math.sin(R(d))**2, 0.01, 359.99), [26.6, 108.4, 206.6, 288.4], 0.06)
xs = [d for d in S(lambda d: 1 + math.sin(R(d)) - 3*math.cos(R(d))) if abs(math.cos(R(d))) > 1e-9]; check('2P6.4-14', [math.cos(R(xs[0])), sec6(xs[0]) - math.tan(R(xs[0]))], [0.6, 1/3], 1e-6)
check('2P6.4-15', [*S(lambda d: 2*math.sin(R(d))**2 - 3*math.cos(R(d))), math.pi/3, 5*math.pi/3], [60, 300, math.radians(60), math.radians(300)], 1e-6)
# 6.5
check('2P6.5-1-6', [math.asin(0.5), math.acos(0), math.atan(1), math.asin(-3**0.5/2), math.acos(-0.5)], [math.pi/6, math.pi/2, math.pi/4, -math.pi/3, 2*math.pi/3], 1e-12)
check('2P6.5-7', math.sin(math.acos(0.6)), 0.8, 1e-12); check('2P6.5-9', math.sin(math.pi/4), 2**0.5/2, 1e-12)
check('2P6.5-10', all(abs(math.tan(math.acos(t)) - (1 - t*t)**0.5/t) < 1e-9 for t in [0.1, 0.4, 0.7, 0.99]), True, 0)
check('2P6.5-11', math.cos(math.asin(0.5)), 3**0.5/2, 1e-12); check('2P6.5-12', 1 + math.tan(math.pi/4), 2, 1e-12)
check('2P6.5-13', all(abs(math.asin(t) + math.acos(t) - math.pi/2) < 1e-12 for t in [0, 0.3, 0.8, 1]), True, 0)
check('2P6.5-15', [math.cos(math.pi - 2*math.pi/3)/2, math.pi - math.acos(2*0.25)], [0.25, 2*math.pi/3], 1e-12)
