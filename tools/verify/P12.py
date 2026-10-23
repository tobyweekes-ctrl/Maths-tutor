# Pure Year 1, Chapter 12: differentiation.
from sympy import symbols, Rational as Q, sqrt, diff, solve, simplify, expand, limit, pi, Poly, solveset, S, Interval, Union, oo, nsimplify
x, h, a, b, c, k, p, q, t, r, v = symbols('x h a b c k p q t r v', real=True)
def d(qid, f, want, var=x): exact(qid, simplify(diff(f, var) - want), 0)
def d2(qid, f, want): exact(qid, simplify(diff(f, x, 2) - want), 0)
def val(qid, e, want): exact(qid, simplify(e - want), 0)
def setq(qid, got, want):
    global count
    count += 1
    if got != want: fails.append(f'{qid}: worked out {got}, answer says {want}')
def fp(qid, f, want): val(qid, limit((f.subs(x, x + h) - f)/h, h, 0), want)
def chord(qid, f, x0, want): val(qid, simplify((f.subs(x, x0 + h) - f.subs(x, x0))/h), want)
def stat(qid, f, want):
    """Stationary points (x, y, nature) with nature from the sign change of f'."""
    fd = diff(f, x); out = []
    for s in sorted(solve(fd, x)):
        if not s.is_real: continue
        l, rr = fd.subs(x, s - Q(1, 1000)), fd.subs(x, s + Q(1, 1000))
        out.append((s, simplify(f.subs(x, s)), 'min' if l < 0 < rr else 'max' if l > 0 > rr else 'infl'))
    setq(qid, out, sorted(want))

# 12.1
check('P12.1-1', (9 - 1)/2, 4, 0); check('P12.1-2', (3.1**2 - 9)/0.1, 6.1, 1e-9); chord('P12.1-4', x**2, 2, 4 + h)
check('P12.1-5', (1.1**3 - 1)/0.1, 3.31, 1e-9); chord('P12.1-6', 2*x**2, 1, 4 + 2*h); chord('P12.1-8', x**2 - 3*x, 2, 1 + h)
chord('P12.1-9', 1/x, 1, -1/(1 + h)); val('P12.1-10', simplify(((x + h)**3 - x**3)/h), 3*x**2 + 3*x*h + h**2)
chord('P12.1-13', 4 - x**2, 1, -2 - h); check('P12.1-14', (2**0.001 - 1)/0.001, 0.693, 0.0006); chord('P12.1-15', x**2 + 2*x, 3, 8 + h)
val('P12.1-15c', 15 + 8*(x - 3), 8*x - 9)

# 12.2
fp('P12.2-5', x**2 + 3, 2*x); fp('P12.2-6', 4*x**2, 8*x); fp('P12.2-7', x**2 - 6*x, 2*x - 6); fp('P12.2-8', x**3, 3*x**2); fp('P12.2-9', 2*x**2 + 5*x, 4*x + 5)
fp('P12.2-10', 1 - x**2, -2*x); fp('P12.2-11', a*x**2 + b*x + c, 2*a*x + b); fp('P12.2-12', x**3 - 2*x, 3*x**2 - 2); fp('P12.2-13', 1/x, -1/x**2); fp('P12.2-14', x**4, 4*x**3)
f = 2*x**3 + x**2; val('P12.2-15a', expand(f.subs(x, x + h) - f), 6*x**2*h + 6*x*h**2 + 2*h**3 + 2*x*h + h**2); d('P12.2-15b', f, 6*x**2 + 2*x)
check('P12.2-15c', diff(f, x).subs(x, -1), 4, 0); setq('P12.2-15d', sorted(solve(diff(f, x), x)), [Q(-1, 3), 0])

# 12.3
d('P12.3-1', x**6, 6*x**5); d('P12.3-4', x**-4, -4*x**-5); d('P12.3-5', x**Q(1, 3), x**Q(-2, 3)/3); d('P12.3-6', x*sqrt(x), Q(3, 2)*sqrt(x))
d('P12.3-7', 1/sqrt(x), -x**Q(-3, 2)/2); d('P12.3-8', x**3/x**Q(1, 3), Q(8, 3)*x**Q(5, 3))
check('P12.3-9', diff(sqrt(x), x).subs(x, 4), Q(1, 4), 0); check('P12.3-10', diff(x**-2, x).subs(x, 2), Q(-1, 4), 0)
setq('P12.3-11', solve(diff(x**Q(3, 2), x) - 6, x), [16]); setq('P12.3-12', sorted(solve(diff(1/x, x) + 4, x)), [Q(-1, 2), Q(1, 2)])
check('P12.3-13', diff(x**Q(-1, 2), x).subs(x, Q(1, 4)), -4, 0); check('P12.3-14', [m * 2**(m - 1) for m in range(1, 8)].index(32) + 1, 4, 0)
y15 = x**Q(2, 3); check('P12.3-15', [diff(y15, x).subs(x, 8), y15.subs(x, 8)], [Q(1, 3), 4], 0); setq('P12.3-15d', solve(diff(y15, x) - Q(1, 6), x), [64])

# 12.4
d('P12.4-2', 3*x**2 - 5*x + 2, 6*x - 5); d('P12.4-7', (2*x - 1)**2, 8*x - 4); d('P12.4-6', (x + 3)*(x - 1), 2*x + 2)
setq('P12.4-5', solve(diff(x**2 - 4*x + 1, x)), [2]); setq('P12.4-8', solve(diff(2*x**2 - 3*x + 1, x) - 5), [2])
setq('P12.4-9', solve(diff(a*x**2 + 3*x, x).subs(x, 2) - 11, a), [2]); s = solve([2 + b - 6, 1 + b + c - 4], [b, c]); setq('P12.4-10', (s[b], s[c]), (4, -1))
setq('P12.4-11', solve(diff(5 + 4*x - x**2, x)), [2]); setq('P12.4-12', solve(2*x - (6 - 2*x)), [Q(3, 2)])
setq('P12.4-13', solve(diff((3 - x)*(x + 5), x) + 4), [1]); check('P12.4-13y', ((3 - x)*(x + 5)).subs(x, 1), 12, 0)
s = solve([2*p + q - 1, -2*p + q + 7], [p, q]); setq('P12.4-14', (s[p], s[q]), (2, -3))
g = x**2 - 5*x + 6; check('P12.4-15', [diff(g, x).subs(x, 2), diff(g, x).subs(x, 3)], [-1, 1], 0); setq('P12.4-15d', solve(-(x - 2) - (x - 3)), [Q(5, 2)])

# 12.5
d('P12.5-3', x**2 + 1/x, 2*x - x**-2); d('P12.5-4', 4*x**3 - 3*x + 2/x, 12*x**2 - 3 - 2*x**-2); d('P12.5-5', 6*sqrt(x) + x, 3/sqrt(x) + 1)
d('P12.5-7', (x**2 + 3)/x, 1 - 3/x**2); d('P12.5-8', (x**2 + 3)/sqrt(x), Q(3, 2)*sqrt(x) - Q(3, 2)*x**Q(-3, 2)); d('P12.5-9', (2*x + 1)*(x - 3)/x, 2 + 3/x**2)
check('P12.5-11', diff(3*sqrt(x) - 4/sqrt(x), x).subs(x, 4), 1, 0); d('P12.5-12', (x - 2)**2*(x + 1), 3*x**2 - 6*x)
check('P12.5-13', diff((1 + sqrt(x))**2, x).subs(x, 9), Q(4, 3), 0); s = solve([3*a + b - 7, 12*a + b - 34], [a, b]); setq('P12.5-14', (s[a], s[b]), (3, -2))
f15 = (3*x - 2*sqrt(x))/x**2; d('P12.5-15', f15, -3/x**2 + 3*x**Q(-5, 2)); check('P12.5-15c', diff(f15, x).subs(x, 4), Q(-3, 32), 0)
setq('P12.5-15d', [s for s in solve(diff(f15, x), x) if s.is_positive], [1])

# 12.6
def tangent(qid, f, x0, want): val(qid, diff(f, x).subs(x, x0)*(x - x0) + f.subs(x, x0), want)
def normal(qid, f, x0, want): val(qid, -(x - x0)/diff(f, x).subs(x, x0) + f.subs(x, x0), want)
tangent('P12.6-2', x**2, 3, 6*x - 9); tangent('P12.6-4', x**3 - 2*x, 2, 10*x - 16); normal('P12.6-5', x**2 - 4*x + 5, 3, (7 - x)/2)
tangent('P12.6-6', 1/x, 1, 2 - x); tangent('P12.6-7', sqrt(x), 4, x/4 + 1); normal('P12.6-8', 2*x**2 - 3*x, 1, -x)
setq('P12.6-9', sorted(solve(x**3 - (3*x - 2), x)), [-2, 1]); setq('P12.6-10', sorted(solve(3*x**2 - 3 - 9, x)), [-2, 2])
normal('P12.6-11', x**2, 1, -x/2 + Q(3, 2)); setq('P12.6-11b', sorted(solve(x**2 - (-x/2 + Q(3, 2)), x)), [Q(-3, 2), 1])
tangent('P12.6-12', 4/x, 2, 4 - x); setq('P12.6-13', [solve(2*x - 4)[0], solve(4 + c - 3)[0]], [2, -1]); normal('P12.6-14', x**3 - 4*x, 1, x - 4)
tangent('P12.6-15', x**2 - 2*x + 3, 2, 2*x - 1); normal('P12.6-15b', x**2 - 2*x + 3, 2, -x/2 + 4); check('P12.6-15c', Q(1, 2)*5*2, 5, 0)

# 12.7
def inc(qid, f, want): setq(qid, solveset(diff(f, x) >= 0, x, S.Reals), want)
def dec(qid, f, want, dom=S.Reals): setq(qid, solveset(diff(f, x) <= 0, x, dom), want)
inc('P12.7-1', x**2 - 6*x, Interval(3, oo)); dec('P12.7-3', x**2 + 4*x, Interval(-oo, -2)); inc('P12.7-4', x**3 + 3*x, S.Reals); inc('P12.7-5', 4*x - x**2, Interval(-oo, 2))
dec('P12.7-6', x**3 - 12*x, Interval(-2, 2)); inc('P12.7-8', x**3 - 6*x**2 + 9*x, Union(Interval(-oo, 1), Interval(3, oo))); dec('P12.7-9', 2*x**3 + 3*x**2 - 12*x, Interval(-2, 1))
inc('P12.7-10', x + 4/x, Union(Interval(-oo, -2), Interval(2, oo))); inc('P12.7-11', x**3 - 3*x**2 + 3*x - 5, S.Reals); dec('P12.7-12', sqrt(x) - x, Interval(Q(1, 4), oo), Interval.open(0, oo))
dec('P12.7-14', x**4 - 8*x**2, Union(Interval(-oo, -2), Interval(0, 2))); f = x**3 - 3*x**2 - 9*x + 2
inc('P12.7-15', f, Union(Interval(-oo, -1), Interval(3, oo))); check('P12.7-15c', [f.subs(x, -1), f.subs(x, 3)], [7, -25], 0)

# 12.8
d2('P12.8-4', x**4 - 3*x**2, 12*x**2 - 6); d2('P12.8-5', 1/x, 2/x**3); d2('P12.8-6', sqrt(x), -x**Q(-3, 2)/4); check('P12.8-7', diff(2*x**3 - 6*x**2 + x, x, 2).subs(x, 1), 0, 0)
setq('P12.8-8', solve(diff(x**3 + a*x**2, x, 2).subs(x, 2), a), [-6]); check('P12.8-9', diff(3/x**2 + x, x, 2).subs(x, 1), 18, 0); d2('P12.8-10', x**2 + 1/x, 2 + 2/x**3)
check('P12.8-11', diff(x**Q(5, 2), x, 2).subs(x, 4), Q(15, 2), 0); s = solve([3*a + 2*b, 6*a + 2*b - 6], [a, b]); setq('P12.8-12', (s[a], s[b]), (2, -3))
setq('P12.8-13', sorted(solve(diff(x**4 - 6*x**2, x, 2), x)), [-1, 1]); f = x**3 - 6*x**2 + 9*x + 1
val('P12.8-15', diff(f, x), 3*(x - 2)**2 - 3); tangent('P12.8-15d', f, 2, -3*x + 9)

# 12.9
stat('P12.9-1', x**2 - 8*x + 3, [(4, -13, 'min')]); stat('P12.9-3', 6*x - x**2, [(3, 9, 'max')]); stat('P12.9-4', x**3 - 12*x, [(-2, 16, 'max'), (2, -16, 'min')])
stat('P12.9-5', 2*x**3 - 3*x**2, [(0, 0, 'max'), (1, -1, 'min')]); stat('P12.9-6', x + 9/x, [(-3, -6, 'max'), (3, 6, 'min')]); stat('P12.9-7', x**3 + 3*x**2 - 24*x, [(-4, 80, 'max'), (2, -28, 'min')])
stat('P12.9-8', x**4 - 2*x**2, [(-1, -1, 'min'), (0, 0, 'max'), (1, -1, 'min')]); stat('P12.9-9', 4*sqrt(x) - x, [(4, 4, 'max')]); stat('P12.9-10', x**3, [(0, 0, 'infl')])
setq('P12.9-11', solve(diff(x**3 + a*x, x).subs(x, 2), a), [-12]); stat('P12.9-12', x**4 - 4*x**3, [(0, 0, 'infl'), (3, -27, 'min')])
s = solve([4*a + b, c - 3, 4*a + 2*b + c - 7], [a, b, c]); setq('P12.9-13', (s[a], s[b], s[c]), (-1, 4, 3)); stat('P12.9-14', x**2 + 16/x, [(2, 12, 'min')])
stat('P12.9-15', x**3 - 6*x**2 + 9*x - 4, [(1, 0, 'max'), (3, -4, 'min')]); setq('P12.9-15c', sorted(solve(x**3 - 6*x**2 + 9*x - 4, x)), [1, 4])
stat('P12.9-ex', x**3 - 3*x**2 - 9*x + 5, [(-1, 10, 'max'), (3, -22, 'min')]); stat('P12.9-ex2', x**4, [(0, 0, 'min')])

# 12.10
d('P12.10-5', (x - 1)*(x - 5), 2*x - 6); d('P12.10-14', x + 1/x, 1 - 1/x**2); stat('P12.10-13', (x**4)/4 - x**3, [(0, 0, 'infl'), (3, Q(-27, 4), 'min')])
stat('P12.10-10', x**3/3 - x**2/2 - 2*x, [(-1, Q(7, 6), 'max'), (2, Q(-10, 3), 'min')]); val('P12.10-15', diff(x**3 - 3*x**2, x), 3*(x - 1)**2 - 3)

# 12.11
check('P12.11-4', [diff(20*t - 5*t**2, t).subs(t, 1), (20*t - 5*t**2).subs(t, solve(diff(20*t - 5*t**2, t))[0])], [10, 20], 0)
stat('P12.11-5', x*(20 - x), [(10, 100, 'max')]); stat('P12.11-7', 40*x - x**2 - 100, [(20, 300, 'max')])
V = x*(12 - 2*x)**2; stat('P12.11-8', V, [(2, 128, 'max'), (6, 0, 'min')]); stat('P12.11-9', x*(60 - 2*x), [(15, 450, 'max')])
check('P12.11-10', diff(80 - 4*t + Q(1, 10)*t**2, t).subs(t, 10), -2, 0)
setq('P12.11-11', (sorted(solve(diff(4*v + 400/v, v), v)), (4*v + 400/v).subs(v, 10)), ([-10, 10], 80))
Sr = 2*pi*r**2 + 500*pi/r; check('P12.11-12', [[s for s in solve(diff(Sr, r), r) if s.is_positive][0], simplify(Sr.subs(r, 5))], [5, 150*pi], 0)
Sx = x**2 + 128/x; check('P12.11-13', [[s for s in solve(diff(Sx, x), x) if s.is_positive][0], Sx.subs(x, 4), 32/16], [4, 48, 2], 0)
st = t**3 - 6*t**2 + 9*t; setq('P12.11-14', (sorted(solve(diff(st, t), t)), st.subs(t, 1), st.subs(t, 3)), ([1, 3], 4, 0))
stat('P12.11-15', 24*x - 2*x**3, [(-2, -32, 'min'), (2, 32, 'max')])
