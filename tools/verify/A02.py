# Statistics and Mechanics Year 1, Chapter 2: measures of location and spread.
import math
def mean(xs, fs=None): fs = fs or [1]*len(xs); return sum(x*f for x, f in zip(xs, fs)) / sum(fs)
def sd(xs, fs=None): fs = fs or [1]*len(xs); m = mean(xs, fs); return math.sqrt(sum(f*x*x for x, f in zip(xs, fs)) / sum(fs) - m*m)
def expand(xs, fs): return sorted(x for x, f in zip(xs, fs) for _ in range(f))
def pos(data, p):
    """Edexcel convention for discrete lists: position n*p; if whole, average with the next value, else round up."""
    n = len(data); k = n * p
    return (data[int(k) - 1] + data[int(k)]) / 2 if abs(k - round(k)) < 1e-9 else data[math.ceil(k) - 1]
def interp(bounds, fs, p):
    """Linear interpolation for grouped data at position n*p (no +1)."""
    target, cum = sum(fs) * p, 0
    for (lo, hi), f in zip(bounds, fs):
        if cum + f >= target - 1e-12: return lo + (target - cum) / f * (hi - lo)
        cum += f

# 2.1
check('A2.1', [mean([3, 7, 8, 10, 12]), pos(sorted([4, 9, 2, 7, 5, 8]), 0.5)], [8, 6], 0)
xs, fs = [0, 1, 2, 3, 4], [5, 8, 10, 4, 3]; check('A2.1-4', [mean(xs, fs), pos(expand(xs, fs), 0.5)], [1.73, 2], 0.006)
check('A2.1-5', [456 / 12, (456 + 51) / 13], [38, 39], 0); check('A2.1-6', (20*64 + 30*70) / 50, 67.6, 1e-9)
check('A2.1-8', mean([5, 15, 25, 40], [4, 9, 5, 2]), 18, 1e-9); check('A2.1-9', 60 - 46, 14, 0)
check('A2.1-11', [k for k in range(20) if abs(mean([1, 2, 3, 4, 5], [2, k, 6, 4, 3]) - 3) < 1e-9], [6], 0)
xs, fs = [10, 11, 12, 13, 14], [3, 7, 9, 6, 5]; check('A2.1-12', [pos(expand(xs, fs), 0.5), mean(xs, fs)], [12, 12.1], 0.006)
check('A2.1-13', (150 - 24) / 9, 14, 0); check('A2.1-14', (20*6.1 - 12*5.5) / 8, 7, 1e-9)
d = [0.0, 2.3, 5.1, 6.8, 7.2, 7.5, 8.0, 9.4, 10.2, 11.5]; check('A2.1-15', [mean(d), pos(d, 0.5), 77 - sum(d)], [6.8, 7.35, 9.0], 1e-9)

# 2.2 / 2.3
L = [3, 5, 6, 8, 9, 12, 15, 17]; check('A2.2-1', [pos(L, 0.25), pos(L, 0.5), pos(L, 0.75)], [5.5, 8.5, 13.5], 1e-9)
L2 = [2, 4, 4, 5, 7, 8, 9, 10, 12, 13, 15]; check('A2.2-4', [pos(L2, 0.25), pos(L2, 0.5), pos(L2, 0.75)], [4, 8, 12], 0)
B, F = [(0, 10), (10, 20), (20, 30), (30, 40)], [8, 14, 10, 8]
check('A2.2-5', [interp(B, F, p) for p in (0.5, 0.25, 0.75, 0.9, 0.1)], [18.6, 11.4, 28, 35, 5], 0.06)
check('A2.2-10', interp([(0, 5), (5, 10), (10, 20), (20, 40)], [6, 10, 12, 2], 0.5), 9.5, 1e-9)
xs, fs = [0, 1, 2, 3, 4], [4, 9, 11, 8, 8]; E = expand(xs, fs); check('A2.2-12', [pos(E, 0.25), pos(E, 0.5), pos(E, 0.75)], [1, 2, 3], 0)
BM, FM = [(50, 60), (60, 65), (65, 70), (70, 80)], [5, 12, 15, 8]; check('A2.2-13', [interp(BM, FM, 0.5), interp(BM, FM, 0.8)], [66, 70], 1e-9)
BL, FL = [(2, 4), (4, 6), (6, 8), (8, 12)], [6, 18, 22, 14]
check('A2.2-15', [interp(BL, FL, 0.5), interp(BL, FL, 0.25), interp(BL, FL, 0.75), 14 * 2 / 4], [6.55, 5, 7.91, 7], 0.006)
check('A2.3', [15 - 2, 27 - 12, pos(L, 0.75) - pos(L, 0.25), 35 - 5, pos(L2, 0.75) - pos(L2, 0.25), 35 - 8, pos(E, 0.75) - pos(E, 0.25)], [13, 15, 8, 30, 8, 27, 2], 1e-9)
check('A2.3-8', interp(B, F, 0.75) - interp(B, F, 0.25), 16.6, 0.06); check('A2.3-12', interp(BM, FM, 0.75) - interp(BM, FM, 0.25), 7.25, 0.006)
check('A2.3-13', interp(B, F, 0.95) - interp(B, F, 0.05), 35, 1e-9)
BR, FR = [(0, 2), (2, 5), (5, 10), (10, 20)], [22, 9, 6, 3]; check('A2.3-15', [interp(BR, FR, 0.5), interp(BR, FR, 0.75) - interp(BR, FR, 0.25)], [1.82, 3.76], 0.006)

# 2.4
check('A2.4', [sd([2, 4, 6])**2, 3, math.sqrt(29 - 25), sd([3, 5, 7, 9, 11]), math.sqrt(158 - 144)], [8/3, 3, 2, 2.83, 3.74], 0.006)
check('A2.4-5', [mean([1, 2, 3, 4], [3, 5, 8, 4]), sd([1, 2, 3, 4], [3, 5, 8, 4])], [2.65, 0.963], 0.006)
check('A2.4-8', [mean([5, 15, 25], [4, 6, 10]), sd([5, 15, 25], [4, 6, 10])], [18, 7.81], 0.006)
check('A2.4-9', [340 - 40**2/5, (340 - 320)/5, 2], [20, 4, 2], 1e-9); check('A2.4-10', math.sqrt((4*(4 + 100) + 100)/5 - 100), 1.79, 0.006)
check('A2.4-11', [75/10, math.sqrt(62.5 - 56.25)], [7.5, 2.5], 1e-9); check('A2.4-12', [28 - 18, sd([4, 6, 8, 10])**2], [10, 5], 1e-9)
check('A2.4-13', sum(1 for v in [2, 4, 4, 4, 5, 5, 7, 9] if 3 <= v <= 7), 6, 0)
check('A2.4-15', [340/20, math.sqrt(6100/20 - 289), 323/19, math.sqrt((6100 - 289)/19 - (323/19)**2)], [17, 4, 17, 4.10], 0.006)

# 2.5
check('A2.5', [53, 12, 5*2.4 + 20, 100 + 10*2.5, 10*math.sqrt(105/10 - 2.5**2), 13, 3, 59, 7.2], [53, 12, 32, 125, 20.6, 13, 3, 59, 7.2], 0.06)
check('A2.5-8', [mean([1002, 1005, 1008, 1001, 1004]), sd([1002, 1005, 1008, 1001, 1004])], [1004, 2.45], 0.006)
check('A2.5-9', [30 + 2*4, 2*math.sqrt(300/12 - 16)], [38, 6], 1e-9); check('A2.5-12', [45 + 10*12/40, 10*math.sqrt(58/40 - 0.09)], [48, 11.7], 0.06)
check('A2.5-13', [8/2, 41 - 3*4], [4, 29], 0); check('A2.5-14', [20 + 2, math.sqrt(300/25 - 4)], [22, 2.83], 0.006)
yb, sy = 90/20, math.sqrt(2410/20 - 4.5**2); check('A2.5-15', [yb, sy, (yb + 150)/10, sy/10, 1.8*(yb + 150)/10 + 32, 1.8*sy/10], [4.5, 10.0, 15.45, 1.00, 59.8, 1.80], 0.05)
