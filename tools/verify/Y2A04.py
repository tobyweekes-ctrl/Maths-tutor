# Statistics and Mechanics Year 2, Chapter 4: moments. Each rod is solved from its two equilibrium equations.
import math, sympy as sp
G4 = 9.8
def mom(forces, about):
    """Clockwise moment about a point on the rod: forces are (position, upward force)."""
    return sum(-F*(x - about) for x, F in forces)
s30, s60 = math.sin(math.radians(30)), math.sin(math.radians(60))
# 4.1
check('2A4.1-1-4', [10*3, 12*2, 8*0.5], [30, 24, 4], 1e-12); check('2A4.1-6-7', [20*s30*4, 15*3], [40, 45], 1e-9)
check('2A4.1-8', [6*5, 6*2.5], [30, 15], 0); check('2A4.1-9', 25*2*s60, 43.3, 0.006); check('2A4.1-10', 4*G4*1.5, 58.8, 1e-9)
check('2A4.1-11', 36/9, 4, 0); check('2A4.1-12', 20/(1.5*math.sin(math.radians(40))), 20.7, 0.06)
check('2A4.1-13', 2*4 - 1*3, 5, 0); check('2A4.1-14', [30*0.25, 12/0.25], [7.5, 48], 1e-12)
check('2A4.1-15', 8*s60*4 - 6*1, 21.7, 0.06)
# 4.2
check('2A4.2-1', mom([(3.5, -5), (0.5, -3)], 1.5), 7, 1e-9); check('2A4.2-2', mom([(0, -4), (6, -4)], 3), 0, 1e-12)
check('2A4.2-3', mom([(0, 2), (4, -2)], 2), 8, 1e-12)
F4 = [(0, -10), (3, -20), (8, -15)]; check('2A4.2-4-5', [mom(F4, 0), -mom(F4, 8)], [180, 180], 1e-9)
check('2A4.2-6', mom([(1, -3*G4), (2, 5)], 0), 19.4, 1e-9); x = sp.symbols('x'); check('2A4.2-7', float(sp.solve(6*x - 4*(5 - x), x)[0]), 2, 1e-12)
check('2A4.2-8', 12*s30*4 - 10*2, 4, 1e-9); check('2A4.2-9', mom([(1, -5), (3, -8), (4, 6)], 0), 5, 1e-12)
check('2A4.2-10', (1*3 - 0*2) + (0*1 - 2*(-1)), 5, 0); F = sp.symbols('F'); check('2A4.2-11', float(sp.solve(20*2 - F*sp.Rational(1, 2)*5, F)[0]), 16, 1e-12)
check('2A4.2-12', (3 + 4 + 5 + 6)*1, 18, 0)
P, Q_ = sp.symbols('P Q'); s = sp.solve([2*P + 5*Q_ - 30, 4*P + Q_ - 12], [P, Q_]); check('2A4.2-13', [s[P], s[Q_]], [5/3, 16/3], 1e-12)
R14 = [(0, 10), (2, -2*G4), (4, -15)]; check('2A4.2-14', [mom(R14, 0), mom(R14, 2)], [99.2, 50], 1e-9)
W15 = [(1, -30), (4, -50), (9, -20)]; check('2A4.2-15', [mom(W15, 0), -mom(W15, 5), (30 + 200 + 180)/100], [410, 90, 4.1], 1e-9)
# 4.3: solve reactions from moments about the first support and resolving
def two_supports(a, b, loads):
    """Reactions at positions a and b for downward loads [(x, W)]."""
    Rb = sum(W*(xx - a) for xx, W in loads)/(b - a); return [sum(W for _, W in loads) - Rb, Rb]
check('2A4.3-1', two_supports(0, 4, [(2, 20)]), [10, 10], 1e-12); check('2A4.3-2', 30*2/40, 1.5, 1e-12)
check('2A4.3-4', two_supports(0, 4, [(3, 10*G4)]), [24.5, 73.5], 1e-9); check('2A4.3-5', two_supports(0, 4, [(2, 20*G4), (1, 60*G4)]), [539, 245], 1e-9)
check('2A4.3-6', two_supports(0, 4, [(1, 50)]), [37.5, 12.5], 1e-12); check('2A4.3-7', two_supports(0, 1.5, [(1, 8*G4)]), [26.1, 52.3], 0.06)
check('2A4.3-8', two_supports(1, 4, [(2.5, 30*G4), (0.5, 80*G4)]), [1061.7, 16.3], 0.06)
check('2A4.3-9', float(sp.solve(40*6 - 20*3 - 60*x, x)[0]), 3, 1e-12)
check('2A4.3-10', float(sp.solve(3*sp.Rational(16, 3) - 6*2 - 2*x, x)[0]), 2, 1e-12)
check('2A4.3-11', two_supports(0.5, 3.5, [(2, 12*G4), (0, 3*G4)]), [93.1, 53.9], 0.06)
m = sp.symbols('m'); check('2A4.3-12', float(sp.solve(sp.Rational(5, 2)*(50 + m) - (150 - m), m)[0]), 7.14, 0.006)
check('2A4.3-13', [8*G4/2, 8*G4 - 8*G4/2], [39.2, 39.2], 1e-9)
r14 = two_supports(0, 3, [(1.5, 4*G4), (1, 2*G4)]); check('2A4.3-14', [*r14, r14[0]/r14[1]], [32.7, 26.1, 1.25], 0.06)
check('2A4.3-15', [*two_supports(0, 4, [(3, 40*G4), (1, 80*G4)]), float(sp.solve(40*1 - 80*(x - 4), x)[0])], [686, 490, 4.5], 1e-9)
# 4.4
check('2A4.4-3', two_supports(0, 3, [(1, 20)]), [13.33, 6.67], 0.006)
RB = 8*G4 - 50; check('2A4.4-4', 5*RB/(8*G4), 1.81, 0.006); check('2A4.4-5', [80, 50*4/80], [80, 2.5], 1e-12)
d = sp.symbols('d'); check('2A4.4-7', float(sp.solve(3*(1 - d) - 1, d)[0]), 2/3, 1e-12)
check('2A4.4-8', float(sp.solve(5*sp.Rational(80, 3) - 20*x - 60*2, x)[0]), 2/3, 1e-12)
check('2A4.4-9-10', [3*4/5, (6*1 + 4*2)/10], [2.4, 1.4], 1e-12); check('2A4.4-11', [100, 0.5 + 60*1.5/100], [100, 1.4], 1e-12)
check('2A4.4-12', 4*4/6, 8/3, 1e-12)
mmax = (160 - 7.5*G4)/(4*G4); check('2A4.4-13', [mmax, (5 + mmax)*G4 - 40], [2.21, 30.6], 0.06)
check('2A4.4-14', 1.5 + 0.5*1.5/2, 1.875, 1e-12)
M = 30 - 10; dd = (6*15 - 10*2)/20; r = two_supports(0, 6, [(dd, M*G4), (6, 10*G4)]); check('2A4.4-15', [M, dd, *r], [20, 3.5, 81.7, 212], 0.6)
# 4.5: on the point of tilting, the far reaction is zero
check('2A4.5-2-4', [10*1/1, 30*1/2, 12*1.5/1], [10, 15, 18], 1e-12); check('2A4.5-5', 8*1 < 12*1.5, True, 0)
check('2A4.5-6', 20*1/1, 20, 0); check('2A4.5-7', 2.5 + 15*0.5/50, 2.65, 1e-12)
check('2A4.5-8-9', [20*1.5/2, 20*1.5/1], [15, 30], 1e-12)
ok = [k/1000 for k in range(0, 5001) if two_supports(1, 3, [(2.5, 10), (k/1000, 20)])[0] >= -1e-9 and two_supports(1, 3, [(2.5, 10), (k/1000, 20)])[1] >= -1e-9]
check('2A4.5-10', [min(ok), max(ok)], [0.25, 3.25], 0.002)
c = sp.symbols('c'); check('2A4.5-12', float(sp.solve(30*(c - 4) - 90*(8 - c), c)[0]), 7, 1e-12)
check('2A4.5-13', [10*1/2, 15*G4], [5, 147], 1e-9); check('2A4.5-14', (50 - 40)/5, 2, 1e-12)
xx = 4 - 60/40; r = two_supports(1, 4, [(xx, 40*G4), (0, 30*G4)]); check('2A4.5-15', [xx, 70*G4, *r], [2.5, 686, 588, 98], 1e-9)
