# Statistics and Mechanics Year 1, Chapter 3: representations of data.
import math
def mean(xs, fs=None): fs = fs or [1]*len(xs); return sum(x*f for x, f in zip(xs, fs)) / sum(fs)
def sd(xs, fs=None): fs = fs or [1]*len(xs); m = mean(xs, fs); return math.sqrt(sum(f*x*x for x, f in zip(xs, fs)) / sum(fs) - m*m)
def pos(data, p):
    """Edexcel convention for discrete lists: position n*p; if whole, average with the next value, else round up."""
    n = len(data); k = n * p
    return (data[int(k) - 1] + data[int(k)]) / 2 if abs(k - round(k)) < 1e-9 else data[math.ceil(k) - 1]
def interp(bounds, fs, p):
    target, cum = sum(fs) * p, 0
    for (lo, hi), f in zip(bounds, fs):
        if cum + f >= target - 1e-12: return lo + (target - cum) / f * (hi - lo)
        cum += f
def cf_at(bounds, fs, x):
    cum = 0
    for (lo, hi), f in zip(bounds, fs):
        if x <= hi: return cum + (x - lo) / (hi - lo) * f
        cum += f
    return cum
def fences(q1, q3, k=1.5): return [q1 - k*(q3 - q1), q3 + k*(q3 - q1)]
def outliers(data, k=1.5):
    lo, hi = fences(pos(data, 0.25), pos(data, 0.75), k); return [x for x in data if x < lo or x > hi]

def flat3(v): return [y for x in v for y in flat3(x)] if isinstance(v, list) else [v]
def c3(qid, got, want, tol): check(qid, flat3(got), flat3(want), tol)

# 3.1
c3('A3.1-1', fences(15, 23), [3, 35], 0); c3('A3.1-2', [50 - 12, 50 + 12, 63 > 62], [38, 62, True], 0)
c3('A3.1-4', outliers([3, 7, 8, 9, 10, 11, 12, 14, 30]), [30], 0)
lo, hi = fences(42, 58); c3('A3.1-5', [v for v in (15, 20, 85, 90) if v < lo or v > hi], [15, 85, 90], 0)
s = math.sqrt(6.25); c3('A3.1-6', [v for v in (7, 8, 17, 18) if abs(v - 12.4) > 2*s], [7, 18], 0)
s = math.sqrt(9300/10 - 900); c3('A3.1-8', [abs(18 - 30) > 2*s, abs(40 - 30) > 2*s], [True, False], 0)
q1 = 26 - (41 - 26) / 1.5; c3('A3.1-9', [q1, fences(q1, 26)[0]], [16, 1], 1e-9)
c3('A3.1-10', (160 - 48) / 7, 16, 1e-9)
c3('A3.1-11', outliers([5, 12, 14, 15, 16, 18, 19, 21, 22, 40, 60]), [40, 60], 0)
m = 422/11; c3('A3.1-12', [m, math.sqrt(16236/11 - m*m), 480/12 + 2*math.sqrt(19600/12 - 1600) < 58], [38.4, 2.06, True], 0.05)
ok = [k/300 for k in range(1, 1200) if 45 + 15*k/300 < 75 and 30 - 15*k/300 <= 10]; c3('A3.1-13', [min(ok), max(ok)], [4/3, 2], 0.004)
B, F = [(0, 20), (20, 30), (30, 40), (40, 60)], [10, 15, 20, 15]
q1, q3 = interp(B, F, .25), interp(B, F, .75); c3('A3.1-14', [q1, q3, fences(q1, q3)[1]], [23.3, 40, 65], 0.04)
c3('A3.1-15', [15 + 6, 290/20, math.sqrt((20*(9 + 225) - 729 + 289)/20 - 14.5**2)], [21, 14.5, 1.32], 0.006)

# 3.2
c3('A3.2-1', [24, 30 - 18], [24, 12], 0); c3('A3.2-2', [28 - 5, 20 - 12], [23, 8], 0)
d = [2, 5, 6, 8, 9, 11, 12, 14, 15, 17, 20]; c3('A3.2-4', [pos(d, .25), pos(d, .5), pos(d, .75), fences(pos(d, .25), pos(d, .75)), outliers(d)], [6, 11, 15, [-7.5, 28.5], []], 0)
c3('A3.2-5', fences(20, 30)[1], 45, 0); c3('A3.2-6', [60 - 48, 58 - 42], [12, 16], 0); c3('A3.2-7', [0.75*80, 0.5*80], [60, 40], 0)
lo, hi = fences(34, 46); vals = [12, 17, 20, 63, 66, 71]
c3('A3.2-8', [[v for v in vals if v < lo or v > hi], min(v for v in vals if v >= lo), max(v for v in vals if v <= hi)], [[12, 66, 71], 17, 63], 0)
c3('A3.2-9', 120 / 4, 30, 0)
d = [4, 15, 17, 18, 20, 21, 22, 23, 25, 26, 28, 41]; lo, hi = fences(pos(d, .25), pos(d, .75))
c3('A3.2-10', [pos(d, .25), pos(d, .5), pos(d, .75), outliers(d), min(v for v in d if v >= lo), max(v for v in d if v <= hi)], [17.5, 21.5, 25.5, [4, 41], 15, 28], 0)
c3('A3.2-11', fences(25, 40)[1], 62.5, 0); c3('A3.2-12', [68 - 50, 72 - 55, fences(50, 68)[0]], [18, 17, 23], 0)
c3('A3.2-13', [56 / 8 * 3, 56 / 8 * 5, fences(21, 35)[0]], [21, 35, 0], 1e-9)
B, F = [(0, 10), (10, 20), (20, 30), (30, 60)], [8, 22, 30, 20]; q1, q3 = interp(B, F, .25), interp(B, F, .75)
c3('A3.2-14', [q1, interp(B, F, .5), q3, fences(q1, q3)[1]], [15.5, 23.3, 30, 51.8], 0.05)
c3('A3.2-15', [25.4 + 12.4, fences(21, 28)[1]], [37.8, 38.5], 1e-9)

# 3.3
import itertools
c3('A3.3-1', list(itertools.accumulate([5, 9, 14, 8, 4])), [5, 14, 28, 36, 40], 0)
BA, FA = [(0, 20), (20, 40), (40, 60), (60, 80)], [6, 14, 24, 16]
c3('A3.3-4', interp(BA, FA, .5), 48.3, 0.04); c3('A3.3-5', interp(BA, FA, .75) - interp(BA, FA, .25), 28.4, 0.01)
c3('A3.3-6', 60 - cf_at(BA, FA, 50), 28, 1e-9); c3('A3.3-10', cf_at(BA, FA, 70) - cf_at(BA, FA, 30), 39, 1e-9)
BT, FT = [(0, 10), (10, 20), (20, 30), (30, 40), (40, 50)], [15, 30, 45, 20, 10]
c3('A3.3-7', interp(BT, FT, .5), 23.3, 0.04); c3('A3.3-8', interp(BT, FT, .9) - interp(BT, FT, .1), 31, 1e-9)
c3('A3.3-9', interp(BT, FT, .8), 33, 1e-9); c3('A3.3-11', [interp(BT, FT, .25), interp(BT, FT, .75)], [15, 30], 1e-9)
c3('A3.3-12', [f for f in range(1, 200) if abs(interp([(0, 10), (10, 20), (20, 30), (30, 40)], [8, 12, f, 6], .5) - 21.5) < 1e-9], [20], 0)
q1, q3 = interp(BA, FA, .25), interp(BA, FA, .75); c3('A3.3-13', [fences(q1, q3)[1], 79 < fences(q1, q3)[1]], [103.8, True], 0.05)
BQ, FQ = [(9.5, 14.5), (14.5, 19.5), (19.5, 29.5), (29.5, 49.5)], [12, 18, 24, 6]
c3('A3.3-14', [interp(BQ, FQ, .25), interp(BQ, FQ, .5), interp(BQ, FQ, .75)], [15.3, 19.5, 25.75], 0.04)
c3('A3.3-15', [interp(BA, FA, .5), mean([10, 30, 50, 70], FA), 60 - cf_at(BA, FA, 65)], [48.3, 46.7, 12], 0.04)

# 3.4
c3('A3.4', [20 / 5, 1.5 * 20, [f / w for f, w in zip([10, 25, 30, 20], [5, 5, 10, 20])]], [4, 30, [2, 5, 3, 1]], 0)
BH = [(0, 10), (10, 15), (15, 20), (20, 30), (30, 50)]; FH = [round(fd * (hi - lo), 9) for fd, (lo, hi) in zip([1.2, 4, 5.6, 2, 0.5], BH)]
c3('A3.4-5', [FH, sum(FH)], [[12, 20, 28, 20, 10], 90], 1e-9)
c3('A3.4-6', cf_at(BH, FH, 25) - cf_at(BH, FH, 12), 50, 1e-9)
c3('A3.4-8', [5 * 2 / 10, 18 * (2 * 6 / 24) / 1], [1, 9], 1e-9)
c3('A3.4-9', interp(BH, FH, .5), 17.3, 0.03)
mids = [5, 12.5, 17.5, 25, 40]; c3('A3.4-10', [mean(mids, FH), sd(mids, FH)], [18.9, 9.65], 0.02)
c3('A3.4-11', 15 * 4 * 15 / 30, 30, 1e-9)
x = 1.8 * 10; y = 60 - 8 - x - 16; c3('A3.4-12', [x, y, 60 - cf_at([(0, 10), (10, 20), (20, 40), (40, 50)], [8, x, 16, y], 35)], [18, 18, 22], 1e-9)
c3('A3.4-13', interp(BH, FH, .75) - interp(BH, FH, .25), 11.1, 0.03)
B4 = [(0, 4), (4, 6), (6, 10), (10, 20)]; F4 = [fd * (hi - lo) for fd, (lo, hi) in zip([3, 9, 5, 0.8], B4)]
c3('A3.4-14', [sum(F4), cf_at(B4, F4, 7), interp(B4, F4, .5)], [58, 35, 5.89], 0.006)
B5 = [(0, 10), (10, 15), (15, 25), (25, 40)]; areas = [h * (hi - lo) / 5 for h, (lo, hi) in zip([2, 6, 4, 1], B5)]
F5 = [105 * a / sum(areas) for a in areas]
c3('A3.4-15', [F5, mean([5, 12.5, 20, 32.5], F5), interp(B5, F5, .5)], [[20, 30, 40, 15], 16.8, 15.6], 0.03)

# 3.5
c3('A3.5-5', [mean([5, 7, 8, 9, 11]), sd([5, 7, 8, 9, 11]), mean([2, 6, 8, 10, 14]), sd([2, 6, 8, 10, 14])], [8, 2, 8, 4], 1e-9)
c3('A3.5-7', [150 / 10, math.sqrt(2340 / 10 - 225)], [15, 3], 1e-9)
d = [18, 20, 21, 22, 24, 25, 90]; c3('A3.5-8', [mean(d), pos(d, .5)], [31.4, 22], 0.03)
c3('A3.5-9', [100 + 60 / 20, math.sqrt(1000 / 20 - 9)], [103, 6.40], 0.006)
BP, FP = [(0, 10), (10, 20), (20, 30)], [5, 15, 20]
c3('A3.5-10', [interp(BP, FP, .5), interp(BP, FP, .25), interp(BP, FP, .75), interp(BP, FP, .75) - interp(BP, FP, .25)], [20, 13.3, 25, 11.7], 0.04)
xs, fs = [0, 1, 2, 3, 4], [6, 10, 8, 4, 2]; c3('A3.5-12', [mean(xs, fs), sd(xs, fs)], [1.53, 1.15], 0.006)
d = [12, 14, 15, 15, 16, 17, 18, 19, 21, 45]; c3('A3.5-13', [pos(d, .5), pos(d, .25), pos(d, .75), fences(pos(d, .25), pos(d, .75))[1], outliers(d)], [16.5, 15, 19, 25, [45]], 0)
sx = 12*60 + 18*65; sxx = 12*(25 + 3600) + 18*(16 + 4225); c3('A3.5-14', [sx / 30, math.sqrt(sxx / 30 - (sx / 30)**2)], [63, 5.06], 0.006)
c3('A3.5-15', [5010 / 10, math.sqrt(2510050 / 10 - 501**2), 500 + 30 / 12, math.sqrt(150 / 12 - (30 / 12)**2)], [501, 2, 502.5, 2.5], 1e-9)
