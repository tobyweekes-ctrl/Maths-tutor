# Pure Year 1, Chapter 9: trigonometric ratios. Angles in degrees.
import math
from sympy import sqrt, Rational as Q, sin as ssin, cos as scos, tan as stan, pi as PI, simplify, symbols, solve
D = lambda v: math.radians(v); A_ = lambda v: math.degrees(v)
sn = lambda v: math.sin(D(v)); cs = lambda v: math.cos(D(v)); tn = lambda v: math.tan(D(v))
def side(b, c, A): return math.sqrt(b*b + c*c - 2*b*c*cs(A))
def ang(a, b, c): return A_(math.acos((b*b + c*c - a*a) / (2*b*c)))   # angle opposite a
def sexact(qid, e, want): exact(qid, simplify(e - want), 0)
dg = lambda v: v * PI / 180

# 9.1
check('P9.1-1', side(5, 8, 40), 5.27, 0.006); check('P9.1-2', ang(9, 7, 8), 73.4, 0.06); check('P9.1-4', side(10, 12, 110), 18.1, 0.06)
check('P9.1-5', ang(10, 5, 6), 130.5, 0.06); check('P9.1-6', ang(6, 7, 8), 46.6, 0.06); check('P9.1-7', side(5, 8, 90), 9.43, 0.006)
x = symbols('x', positive=True)
check('P9.1-8', float(solve(x**2 + (x + 2)**2 - x*(x + 2) - 49, x)[0]), 5.78, 0.006); exact('P9.1-9', Q(16 + 25 - 36, 40), Q(1, 8))
check('P9.1-10', [side(6, 9, 50), side(6, 9, 130)], [6.90, 13.65], 0.06); check('P9.1-11', ang(7, 5, 3), 120, 1e-9)
check('P9.1-12', solve(25 + x**2 + 5*x - 49, x)[0], 3, 0); sexact('P9.1-13', solve(4*x**2 + 9*x**2 - 6*x**2 - 100, x)[0], 10*sqrt(7)/7)
check('P9.1-14', side(8, 10, 70), 10.45, 0.006); AC = side(5, 6, 100)
check('P9.1-15', [AC, ang(AC, 4, 7), ang(6, 5, AC)], [8.45, 96.6, 44.4], 0.06)
check('P9.1-ex', [side(7, 5, 60), ang(8, 4, 6)], [6.24, 104.5], 0.06)

# 9.2
check('P9.2-1', 10*sn(70)/sn(50), 12.27, 0.01); check('P9.2-2', A_(math.asin(8*sn(30)/5)), 53.1, 0.06); check('P9.2-3', 6*sn(60)/sn(45), 7.35, 0.006)
check('P9.2-4', 12*sn(35)/sn(65), 7.59, 0.006); check('P9.2-5', A_(math.asin(9*sn(110)/15)), 34.3, 0.06); sexact('P9.2-6', 4*ssin(dg(45))/ssin(dg(30)), 4*sqrt(2))
C1 = A_(math.asin(8*sn(40)/6)); check('P9.2-7', [C1, 180 - C1], [59.0, 121.0], 0.06)
check('P9.2-8', [6*sn(180 - 40 - C1)/sn(40), 6*sn(180 - 40 - (180 - C1))/sn(40)], [9.22, 3.04], 0.006)
BT = 20*sn(32)/sn(18); check('P9.2-9', [BT, BT*sn(50)], [34.3, 26.3], 0.06); check('P9.2-10', 9*sn(48)/sn(75), 6.92, 0.006)
check('P9.2-11', 7*sn(70)/4, 1.64, 0.006); check('P9.2-12', 10*sn(50)/sn(80), 7.78, 0.006); sexact('P9.2-13', 6*ssin(dg(60))/ssin(dg(45)), 3*sqrt(6))
C2 = A_(math.asin(10*sn(35)/7)); check('P9.2-14', [C2, 180 - C2], [55.0, 125.0], 0.06)
PR = 8*sn(63)/sn(75); S1 = A_(math.asin(PR*sn(42)/6))
check('P9.2-15', [PR, 8*sn(42)/sn(75), S1, 180 - S1, 6*sn(180 - 42 - S1)/sn(42), 6*sn(S1 - 42)/sn(42)], [7.38, 5.54, 55.4, 124.6, 8.89, 2.08], 0.05)

# 9.3
check('P9.3-ex', [0.5*7*9*sn(40), A_(math.asin(40/56))], [20.2, 45.6], 0.06)
check('P9.3-2', 0.5*5*9*sn(70), 21.1, 0.06); sexact('P9.3-3', 8*ssin(dg(60)), 4*sqrt(3)); sexact('P9.3-4', 60*ssin(dg(120)), 30*sqrt(3))
check('P9.3-5', A_(math.asin(0.75)), 48.6, 0.06); check('P9.3-6', 40/(7*sn(50)), 7.46, 0.006); sexact('P9.3-7', 15*sqrt(1 - Q(1, 25)), 6*sqrt(6))
a9 = 10*sn(40)/sn(80); check('P9.3-9', 0.5*a9*10*sn(60), 28.3, 0.06); exact('P9.3-10', sqrt(52 - 24), 2*sqrt(7))
sexact('P9.3-12', 6*18*ssin(dg(60)), 54*sqrt(3)); check('P9.3-13', solve((x**2 - 1)/4 - 6, x)[0], 5, 0)
check('P9.3-14', 0.5*40*60*sn(75) + 0.5*50*45*sn(100), 2267, 1); exact('P9.3-15', sqrt(136 + 60) + sqrt(136 - 60), 14 + 2*sqrt(19)); exact('P9.3-15d', 30*sqrt(3)/14, 15*sqrt(3)/7)

# 9.4
check('P9.4-1', side(8, 11, 52), 8.75, 0.006); check('P9.4-2', 9*sn(71)/sn(38), 13.8, 0.06); check('P9.4-3', ang(12, 9, 10), 78.1, 0.06)
check('P9.4-4', [math.hypot(12, 9), 70 + A_(math.atan(9/12))], [15, 106.9], 0.06)
check('P9.4-5', [8*sn(50)/sn(70), 8*sn(60)/sn(70), 0.5*8*(8*sn(60)/sn(70))*sn(50)], [6.52, 7.37, 22.6], 0.06)
check('P9.4-6', [A_(math.acos(0.6)), 180 - 2*A_(math.acos(0.6))], [53.1, 73.7], 0.06); check('P9.4-7', ang(450, 300, 600), 46.6, 0.06)
check('P9.4-8', ang(13, 7, 8), 120, 1e-9); PR9 = side(20, 15, 60); check('P9.4-9', [PR9, 40 + A_(math.asin(15*sn(60)/PR9))], [18.0, 86.1], 0.06)
AC10 = side(12, 15, 40); check('P9.4-10', [AC10, A_(math.asin(12*sn(40)/AC10))], [9.66, 53.0], 0.06)
check('P9.4-11', 10 + 10*sn(30)/sn(105) + 10*sn(45)/sn(105), 22.5, 0.06); check('P9.4-12', [math.sqrt(89 - 64), math.sqrt(89 + 64)], [5, 3*math.sqrt(17)], 1e-9)
check('P9.4-13', ang(math.sqrt(7), 2, 3), 60, 1e-9); BT = 500*sn(25)/sn(15); check('P9.4-14', [BT, BT*sn(40)], [816.4, 525], 1)
AC15 = side(80, 110, 125); ar = 0.5*80*110*sn(125); check('P9.4-15', [AC15, ar, 2*ar/AC15, A_(math.asin(110*sn(125)/AC15))], [169.1, 3604, 42.6, 32.2], 0.6)

# 9.5
sexact('P9.5-ex', scos(dg(300)), Q(1, 2)); sexact('P9.5-7', stan(dg(225)) - stan(dg(135)), 2)
for q, e, w in (('a', ssin(dg(240)), -sqrt(3)/2), ('b', scos(dg(210)), -sqrt(3)/2), ('c', stan(dg(330)), -sqrt(3)/3)): sexact('P9.5-8' + q, e, w)
check('P9.5-9', sum(1 for i in range(72000) if (sn(i/100) - 0.3) * (sn((i + 1)/100) - 0.3) < 0), 4, 0)
check('P9.5-11', [sn(140), sn(220), sn(320)], [0.643, -0.643, -0.643], 0.001); check('P9.5-12', [tn(60), tn(-120)], [math.sqrt(3)]*2, 1e-9)
check('P9.5-13', [cs(120), cs(240)], [-0.5, -0.5], 1e-12)
check('P9.5-15', sum(1 for i in range(108000) if (sn(i/100) - cs(i/100)) * (sn((i + 1)/100) - cs((i + 1)/100)) <= 0), 6, 0)

# 9.6
def zeros(f, a=0, b=360):
    return [round(i/100 + 0.005) for i in range(a*100, b*100) if f(i/100) == 0 or f(i/100) * f((i + 1)/100) < 0]
check('P9.6-5', zeros(lambda v: sn(2*v), 0, 361), [0, 90, 180, 270, 360], 0); check('P9.6-9', [sn(45 + 45), sn(225 + 45)], [1, -1], 1e-12)
check('P9.6-10', [3*cs(0), 3*cs(2*180), 3*cs(2*360), 3*cs(2*90), 3*cs(2*270)], [3, 3, 3, -3, -3], 1e-12); check('P9.6-11', 4*sn(3*30), 4, 1e-12)
check('P9.6-12', [sn(-60), sn(0), sn(180)], [-math.sqrt(3)/2, 0, 0], 1e-12)
check('P9.6-15', [4*sn(2*30 + 30), 4*sn(2*210 + 30), 4*sn(30)], [4, 4, 2], 1e-12); check('P9.6-15e', zeros(lambda v: sn(2*v + 30)), [75, 165, 255, 345], 0)
