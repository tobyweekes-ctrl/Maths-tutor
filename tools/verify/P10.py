# Pure Year 1, Chapter 10: trigonometric identities and equations. Angles in degrees.
import math
from sympy import sqrt, Rational as Q, sin as ssin, cos as scos, tan as stan, pi as PI, simplify, symbols
sn = lambda v: math.sin(math.radians(v)); cs = lambda v: math.cos(math.radians(v)); tn = lambda v: math.tan(math.radians(v))
dg = lambda v: v * PI / 180
def sexact(qid, e, want): exact(qid, simplify(e - want), 0)
def solve_deg(qid, f, lo, hi, want, tol=0.06):
    """All solutions of f(x) = 0 in [lo, hi], found numerically, compared with the stated list."""
    r = [v for v in roots(f, lo - 0.3, hi + 0.3, 0.01) if lo - 1e-6 <= v <= hi + 1e-6]
    r = sorted(set(round(v, 2) for v in r))
    merged = []
    for v in r:
        if not merged or v - merged[-1] > 0.05: merged.append(v)
    check(qid, merged, sorted(want), tol)
def ident(qid, lhs, rhs): identity(qid, lambda t: lhs(t * 57.29577951), lambda t: rhs(t * 57.29577951))

# 10.1
sexact('P10.1-ex', ssin(dg(210)), -Q(1, 2)); sexact('P10.1-ex2', scos(dg(-120)), -Q(1, 2))
check('P10.1-4', [cs(250), -cs(70)], [-cs(70)] * 2, 1e-12); check('P10.1-5', tn(310), -tn(50), 1e-12); check('P10.1-6', sn(-50), -sn(50), 1e-12)
sexact('P10.1-7', scos(dg(135)) + ssin(dg(135)), 0); check('P10.1-8', [-math.sqrt(1 - 0.36), 0.6/-0.8], [-0.8, -0.75], 1e-12)
check('P10.1-9', cs(-200), -cs(20), 1e-12); check('P10.1-12', [sn(180 - math.degrees(math.atan(2))), cs(180 - math.degrees(math.atan(2)))], [2/math.sqrt(5), -1/math.sqrt(5)], 1e-12)
th = 360 - math.degrees(math.acos(5/13)); check('P10.1-15', [sn(th), tn(th), sn(180 + th), cs(180 - th), tn(th - 180)], [-12/13, -12/5, 12/13, -5/13, -12/5], 1e-12)
solve_deg('P10.1-14a', lambda v: cs(v) - cs(50), 0, 359.9, [50, 310]); solve_deg('P10.1-14b', lambda v: sn(v - 50), 0, 359.9, [50, 230])

# 10.2
for qid, e, w in (('1', ssin(dg(45)), sqrt(2)/2), ('2', stan(dg(60)), sqrt(3)), ('3', scos(dg(30)), sqrt(3)/2), ('4', ssin(dg(135)), sqrt(2)/2),
                  ('5', scos(dg(240)), -Q(1, 2)), ('6', stan(dg(300)), -sqrt(3)), ('7', ssin(dg(330)) + scos(dg(60)), 0),
                  ('8', ssin(dg(60))*scos(dg(30)) - scos(dg(60))*ssin(dg(30)), Q(1, 2)), ('9', stan(dg(30)), sqrt(3)/3),
                  ('10', ssin(dg(45))**2 + scos(dg(120))**2, Q(3, 4)), ('11', (ssin(dg(120)) + scos(dg(150)))*stan(dg(225)), 0),
                  ('12', 30*ssin(dg(135)), 15*sqrt(2)), ('13', scos(dg(210))/ssin(dg(300)), 1), ('14', 2*ssin(dg(30))*scos(dg(30)) - ssin(dg(60)), 0),
                  ('15', ssin(dg(240)) + scos(dg(300)) + stan(dg(120)), -sqrt(3)/2 + Q(1, 2) - sqrt(3)), ('15c', (1 + stan(dg(60))**2)*scos(dg(60))**2, 1)):
    sexact('P10.2-' + qid, e, w)

# 10.3
ident('P10.3-2', lambda t: sn(t)/tn(t), cs); ident('P10.3-4', lambda t: (1 - sn(t)**2)/cs(t), cs); ident('P10.3-7', lambda t: (sn(t) + cs(t))**2 - 2*sn(t)*cs(t), lambda t: 1)
ident('P10.3-9', lambda t: (1 - cs(t)**2)/(1 - sn(t)**2), lambda t: tn(t)**2); ident('P10.3-10', lambda t: sn(t)**4 - cs(t)**4, lambda t: sn(t)**2 - cs(t)**2)
ident('P10.3-11', lambda t: (sn(t) + cs(t))**2 + (sn(t) - cs(t))**2, lambda t: 2); ident('P10.3-12', lambda t: 1/cs(t) - cs(t), lambda t: sn(t)*tn(t))
ident('P10.3-14', lambda t: tn(t) + 1/tn(t), lambda t: 1/(sn(t)*cs(t)))
check('P10.3-5', [math.sqrt(1 - 0.36), 0.8/0.6], [0.8, 4/3], 1e-12); th = 180 - math.degrees(math.asin(5/13)); check('P10.3-8', [cs(th), tn(th)], [-12/13, -5/12], 1e-12)
th = 180 + math.degrees(math.atan(2)); check('P10.3-13', [sn(th), cs(th)], [-2/math.sqrt(5), -1/math.sqrt(5)], 1e-12)
solve_deg('P10.3-15', lambda v: 3*cs(v)**2 + 5*sn(v) - 5, 0, 359.9, [41.8, 90, 138.2])

# 10.4
solve_deg('P10.4-ex', lambda v: sn(v) - 0.4, 0, 360, [23.6, 156.4]); solve_deg('P10.4-1', lambda v: sn(v) - 0.5, 0, 360, [30, 150])
solve_deg('P10.4-2', lambda v: cs(v) - math.sqrt(3)/2, 0, 360, [30, 330]); solve_deg('P10.4-3', lambda v: sn(v - 45), 0, 360, [45, 225])
solve_deg('P10.4-4', lambda v: sn(v) + 0.6, 0, 360, [216.9, 323.1]); solve_deg('P10.4-5', lambda v: cs(v) + 0.3, -180, 180, [-107.5, 107.5])
solve_deg('P10.4-6', lambda v: sn(v) + 2*cs(v), 0, 360, [116.6, 296.6]); solve_deg('P10.4-7', lambda v: 2*sn(v) - math.sqrt(3), 0, 360, [60, 120])
solve_deg('P10.4-8', lambda v: 5*cs(v) + 2, 0, 360, [113.6, 246.4]); solve_deg('P10.4-9', lambda v: math.sqrt(3)*sn(v) + cs(v), -180, 180, [-30, 150])
solve_deg('P10.4-10', lambda v: sn(v) - 3*cs(v), 0, 360, [71.6, 251.6]); solve_deg('P10.4-11', lambda v: 4*sn(v) - 5*cs(v), -180, 180, [51.3, -128.7])
solve_deg('P10.4-12', lambda v: 2*cs(v) + 1, 0, 720, [120, 240, 480, 600]); solve_deg('P10.4-13', lambda v: sn(v) - 0.2, -360, 360, [-348.5, -191.5, 11.5, 168.5])
solve_deg('P10.4-14', lambda v: 3*sn(v) - 2*cs(v), 0, 360, [33.7, 213.7]); solve_deg('P10.4-15', lambda v: sn(v) - 0.7, 0, 360, [44.4, 135.6])
solve_deg('P10.4-15c', lambda v: sn(v) + 0.7, 0, 360, [224.4, 315.6]); check('P10.4-15d', len([v for v in roots(lambda v: sn(v) - 0.7, 0, 1800, 0.01)]), 10, 0)

# 10.5
solve_deg('P10.5-1', lambda v: sn(2*v) - 0.5, 0, 180, [15, 75]); solve_deg('P10.5-2', lambda v: cs(3*v), 0, 180, [30, 90, 150])
solve_deg('P10.5-3', lambda v: sn(v/2) - cs(v/2), 0, 360, [90]); solve_deg('P10.5-4', lambda v: sn(2*v) - 0.5, 0, 360, [15, 75, 195, 255])
solve_deg('P10.5-5', lambda v: cs(v + 30) - 0.5, 0, 360, [30, 270]); solve_deg('P10.5-6', lambda v: sn(2*v - 45), 0, 360, [22.5, 112.5, 202.5, 292.5])
check('P10.5-7', [v/10 for v in range(0, 3601) if abs(sn(v/10 - 20) + 1) < 1e-9], [290], 1e-9); solve_deg('P10.5-8', lambda v: cs(v - 40) - 0.6, 0, 360, [93.1, 346.9])
solve_deg('P10.5-9', lambda v: 2*sn(3*v) - math.sqrt(3), 0, 180, [20, 40, 140, 160]); solve_deg('P10.5-10', lambda v: sn(v + 45) + cs(v + 45), 0, 360, [90, 270])
solve_deg('P10.5-11', lambda v: cs(2*v) + 0.8, 0, 180, [71.6, 108.4]); solve_deg('P10.5-12', lambda v: sn(2*v + 30) - 0.5, 0, 360, [0, 60, 180, 240, 360])
solve_deg('P10.5-13', lambda v: cs(v/2) + 0.5, 0, 720, [240, 480]); solve_deg('P10.5-14', lambda v: sn(2*v - 10 - 30), 0, 360, [20, 110, 200, 290])
check('P10.5-14b', [3*tn(2*v - 10) for v in (20, 110, 200, 290)], [math.sqrt(3)]*4, 1e-9)
solve_deg('P10.5-15', lambda v: sn(2*v - 30) - math.sqrt(3)/2, 0, 360, [45, 75, 225, 255])
check('P10.5-15b', min(v/100 for v in range(1, 36000) if abs(sn(2*v/100 - 30) + math.sqrt(3)/2) < 1e-6), 135, 1e-9)

# 10.6
solve_deg('P10.6-1', lambda v: sn(v)*(2*cs(v) - 1), 0, 360, [0, 60, 180, 300, 360]); solve_deg('P10.6-2', lambda v: sn(v)**2 - cs(v)**2, 0, 360, [45, 135, 225, 315])
solve_deg('P10.6-3', lambda v: 4*sn(v)**2 - 1, 0, 360, [30, 150, 210, 330]); solve_deg('P10.6-4', lambda v: 2*cs(v)**2 - cs(v) - 1, 0, 360, [0, 120, 240, 360])
solve_deg('P10.6-5', lambda v: sn(v)**2 - 3*cs(v)**2, 0, 360, [60, 120, 240, 300]); solve_deg('P10.6-6', lambda v: 2*sn(v)**2 + 3*sn(v) - 2, 0, 360, [30, 150])
solve_deg('P10.6-7', lambda v: sn(v) - 2*sn(v)*cs(v), 0, 360, [0, 60, 180, 300, 360]); solve_deg('P10.6-8', lambda v: 2*sn(v)**2 + cs(v) - 1, 0, 360, [0, 120, 240, 360])
solve_deg('P10.6-9', lambda v: 6*cs(v)**2 + sn(v) - 5, 0, 360, [30, 150, 199.5, 340.5]); solve_deg('P10.6-10', lambda v: 3*sn(v) - 2*cs(v)**2, 0, 360, [30, 150])
solve_deg('P10.6-11', lambda v: sn(v)**2 - 2*cs(v), 0, 360, [65.5, 294.5]); solve_deg('P10.6-12', lambda v: 4*cs(v)**2 + 5*sn(v) - 3, 0, 360, [190.1, 349.9])
solve_deg('P10.6-13', lambda v: sn(2*v)**2 - 3*cs(2*v)**2, 0, 360, [30, 60, 120, 150, 210, 240, 300, 330]); solve_deg('P10.6-14', lambda v: 2*sn(v)**2 - 3*cs(v), 0, 360, [60, 300])
solve_deg('P10.6-15', lambda v: 4*sn(v)**2 + 8*cs(v) - 7, 0, 359.9, [60, 300]); solve_deg('P10.6-15c', lambda v: 4*sn(2*v)**2 + 8*cs(2*v) - 7, 0, 179.9, [30, 150])
solve_deg('P10.6-ex', lambda v: 2*sn(v)**2 - sn(v) - 1, 0, 360, [90, 210, 330])
