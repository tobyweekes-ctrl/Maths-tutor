/* Pure Mathematics Year 1 · Chapter 9 Trigonometric ratios (sections 9.1 to 9.6) */
BOOK_CHAPTERS.push({ id:'P09', book:'Pure Mathematics Year 1', label:'Chapter 9', title:'Trigonometric ratios', sections:[
  { id:'P9.1', num:'9.1', title:'The cosine rule' },
  { id:'P9.2', num:'9.2', title:'The sine rule' },
  { id:'P9.3', num:'9.3', title:'Areas of triangles' },
  { id:'P9.4', num:'9.4', title:'Solving triangle problems' },
  { id:'P9.5', num:'9.5', title:'Graphs of sine, cosine and tangent' },
  { id:'P9.6', num:'9.6', title:'Transforming trigonometric graphs' }
]});
{
  const rad = d => d * Math.PI / 180, S = d => Math.sin(rad(d)), Cs = d => Math.cos(rad(d)), Tn = d => Math.tan(rad(d));
  // A triangle with A at the origin, AB along the x-axis: AB = c, AC = b, angle A in degrees.
  const tri = (label, c, b, A, more) => Fig.geo(Object.assign({ label, pts: { A: [0, 0], B: [c, 0], C: [b * Cs(A), b * S(A)] }, segs: 'AB BC CA',
    labels: { A: [-12, 6], B: [12, 6], C: [0, -12] } }, more));
  const deg = [[90, '90°'], [180, '180°'], [270, '270°'], [360, '360°']];
  const trig = (label, fns, x0, x1, y0, y1, more) => Fig.graph(Object.assign({ label, x0, x1, y0, y1, xticks: deg.filter(t => t[0] > x0 && t[0] <= x1), yticks: [[1, '1'], [-1, '−1']], fns }, more));

  FIGS['P9.1-tri'] = tri('Triangle ABC with AB = 5 cm, AC = 7 cm and angle A = 60°; side a = BC is opposite A', 5, 7, 60, {
    angles: [{ at: 'A', from: 'B', to: 'C', label: '60°' }], sides: [{ on: 'AB', label: '5 cm', off: 14 }, { on: 'CA', label: '7 cm', off: 14 }, { on: 'BC', label: 'a', off: 14 }] });
  FIGS['P9.1-obtuse'] = tri('Triangle with sides 4, 6 and 8: the largest angle, opposite the side of 8, is obtuse (104.5°)', 6, 4, 104.48, {
    angles: [{ at: 'A', from: 'B', to: 'C', label: '104.5°' }], sides: [{ on: 'AB', label: '6', off: 14 }, { on: 'CA', label: '4', off: 14 }, { on: 'BC', label: '8', off: 14 }] });
  FIGS['P9.2-amb'] = Fig.geo({ label: 'The ambiguous case: with angle A = 40°, AB = 8 and BC = 6, the third vertex can be at C or at D, giving two different triangles ABC and ABD',
    pts: { A: [0, 0], B: [8 * Cs(40), 8 * S(40)], C: [12.16, 0], D: [4.10, 0] }, segs: 'AB AC BC BD',
    labels: { A: [-12, 6], B: [0, -12], C: [12, 8], D: [-4, 16] }, angles: [{ at: 'A', from: 'C', to: 'B', label: '40°', r: 30 }], sides: [{ on: 'AB', label: '8', off: -14 }, { on: 'BC', label: '6', off: -14 }, { on: 'DB', label: '6', off: -12 }] });
  FIGS['P9.3-area'] = tri('Triangle with sides 7 and 9 and the included angle 40° between them', 9, 7, 40, {
    angles: [{ at: 'A', from: 'B', to: 'C', label: '40°' }], sides: [{ on: 'AB', label: '9', off: 14 }, { on: 'CA', label: '7', off: 14 }] });
  FIGS['P9.4-elev'] = Fig.geo({ label: 'Angles of elevation 25° from A and 40° from B, 500 m closer, to the top T of a mountain with foot F',
    pts: { A: [0, 0], B: [5, 0], F: [11.25, 0], T: [11.25, 5.25] }, segs: 'AF FT AT BT', right: ['AFT'],
    labels: { A: [-10, 8], B: [0, 16], F: [10, 10], T: [10, -6] }, angles: [{ at: 'A', from: 'F', to: 'T', label: '25°', r: 40 }, { at: 'B', from: 'F', to: 'T', label: '40°', r: 26 }], sides: [{ on: 'AB', label: '500 m', off: 14 }] });
  FIGS['P9.5-sin'] = trig('y = sin x for 0° ≤ x ≤ 360°: through (0, 0), a maximum (90°, 1), (180°, 0), a minimum (270°, −1), (360°, 0)', [{ f: S }], 0, 360, -1.4, 1.4);
  FIGS['P9.5-cos'] = trig('y = cos x for 0° ≤ x ≤ 360°: starts at (0, 1), crosses at 90° and 270°, minimum (180°, −1)', [{ f: Cs }], 0, 360, -1.4, 1.4);
  FIGS['P9.5-tan'] = trig('y = tan x for 0° ≤ x ≤ 360°: period 180°, asymptotes at x = 90° and x = 270°', [{ f: Tn }], 0, 360, -4, 4,
    { yticks: [[1, '1'], [-1, '−1']], vlines: [{ x: 90, dash: true, col: 'var(--muted)' }, { x: 270, dash: true, col: 'var(--muted)' }] });
  FIGS['P9.5-half'] = trig('y = sin x and the line y = 0.5 meeting at x = 30° and x = 150°, symmetric about x = 90°', [{ f: S }], 0, 360, -1.4, 1.4,
    { hlines: [{ y: 0.5, label: 'y = 0.5' }], points: [{ x: 30, y: 0.5, label: '30°', dx: -14, dy: -12 }, { x: 150, y: 0.5, label: '150°', dx: 16, dy: -12 }] });
  FIGS['P9.6-trans'] = trig('y = cos x (dashed) and y = 2cos x + 1: stretched vertically by 2 then moved up 1, so it runs from −1 to 3', [{ f: Cs, dash: true, col: 'var(--muted)' }, { f: x => 2 * Cs(x) + 1, col: 'var(--accent)' }], 0, 360, -1.6, 3.4,
    { yticks: [[3, '3'], [1, '1'], [-1, '−1']] });
  FIGS['P9.6-sin2x'] = trig('y = sin x (dashed) and y = sin 2x: the horizontal stretch with scale factor ½ halves the period to 180°', [{ f: S, dash: true, col: 'var(--muted)' }, { f: x => S(2 * x), col: 'var(--accent)' }], 0, 360, -1.4, 1.4);
  FIGS['P9.5-4'] = trig('y = cos x for −180° ≤ x ≤ 180°: maximum (0, 1), crossing at ±90°, minimum at ±180°', [{ f: Cs }], -180, 180, -1.4, 1.4,
    { xticks: [[-180, '−180°'], [-90, '−90°'], [90, '90°'], [180, '180°']] });
  FIGS['P9.5-12'] = trig('y = tan x for −180° ≤ x ≤ 180°, with the line y = √3 meeting it at x = −120° and x = 60°', [{ f: Tn }], -180, 180, -4, 4,
    { xticks: [[-180, '−180°'], [-90, '−90°'], [90, '90°'], [180, '180°']], yticks: [[Math.sqrt(3), '√3']], hlines: [{ y: Math.sqrt(3) }], vlines: [{ x: -90, dash: true, col: 'var(--muted)' }, { x: 90, dash: true, col: 'var(--muted)' }],
      points: [{ x: -120, y: Math.sqrt(3), label: '−120°', dx: -20, dy: -12 }, { x: 60, y: Math.sqrt(3), label: '60°', dx: -18, dy: -12 }] });
  FIGS['P9.5-15'] = trig('y = sin x and y = cos x for 0° ≤ x ≤ 360°, meeting at 45° and 225°; sin x is above cos x between them', [{ f: S, col: 'var(--accent)' }, { f: Cs, col: 'var(--pen)' }], 0, 360, -1.4, 1.4,
    { regions: [{ from: 45, to: 225, lo: Cs, hi: S }], texts: [{ x: 120, y: 1.2, label: 'sin x', col: 'var(--accent)' }, { x: 20, y: 1.2, label: 'cos x', col: 'var(--pen)' }] });
  FIGS['P9.6-10'] = trig('y = 3cos 2x for 0° ≤ x ≤ 360°: period 180°, maxima at 0°, 180°, 360° and minima at 90°, 270°', [{ f: x => 3 * Cs(2 * x) }], 0, 360, -3.6, 3.6, { yticks: [[3, '3'], [-3, '−3']] });
  FIGS['P9.6-15'] = trig('y = 4 sin(2x + 30°) for 0° ≤ x ≤ 360°: maxima at 30° and 210°, crossing at 75°, 165°, 255°, 345°, y-intercept 2', [{ f: x => 4 * S(2 * x + 30) }], 0, 360, -4.8, 4.8,
    { yticks: [[4, '4'], [2, '2'], [-4, '−4']], points: [{ x: 30, y: 4, label: '(30°, 4)', dx: 26, dy: -4 }, { x: 210, y: 4, label: '(210°, 4)', dx: 30, dy: -4 }] });
}

CONTENT['P9.1'] = {
notes: R`
### The cosine rule
In any triangle $ABC$, with side $a$ opposite angle $A$ (and so on):
$$a^2 = b^2 + c^2 - 2bc\cos A \qquad \cos A = \frac{b^2 + c^2 - a^2}{2bc}$$
Use it when you know
- **two sides and the angle between them** (to find the third side), or
- **all three sides** (to find an angle).

If $A = 90°$, $\cos A = 0$ and it becomes Pythagoras.

::: booklet
**Not in the formula booklet:** the cosine rule. Learn both forms.
:::

### Worked example 1
In triangle $ABC$, $AB = 5$ cm, $AC = 7$ cm and $A = 60°$. Find $BC$.

[[fig:P9.1-tri]]

$$a^2 = 7^2 + 5^2 - 2(7)(5)\cos 60° = 49 + 25 - 35 = 39$$
So $a = \sqrt{39} = 6.24$ cm (3 s.f.).

### Worked example 2: an obtuse angle
A triangle has sides $4$, $6$ and $8$. Find its largest angle.
- The largest angle is opposite the longest side, $8$.
- $\cos\theta = \frac{4^2 + 6^2 - 8^2}{2(4)(6)} = \frac{-12}{48} = -0.25$, so $\theta = 104.5°$.

[[fig:P9.1-obtuse]]

**The trap:** typing $(b^2 + c^2 - 2bc)\cos A$ into the calculator. Only the $2bc$ multiplies $\cos A$. A negative cosine just means the angle is obtuse.

### Watch out
- Keep full calculator values until the end; round only the final answer.
`,
questions: [
Q('P9.1-1', 1, R`In triangle $ABC$, $b = 5$ cm, $c = 8$ cm and $A = 40°$. Find $a$. [[2]]`,
  [R`$a^2 = b^2 + c^2 - 2bc\cos A$.`, R`$25 + 64 - 80\cos 40°$.`],
  [R`|M1|$a^2 = 25 + 64 - 80\cos 40°$`, R`|A1|$5.27$ cm`], R`$5.27$ cm`,
  R`$a^2 = 89 - 61.28 = 27.72$, so $a = 5.27$ cm.`),
Q('P9.1-2', 1, R`A triangle has sides $7$ cm, $8$ cm and $9$ cm. Find the angle opposite the $9$ cm side. [[2]]`,
  [R`$\cos\theta = \frac{7^2 + 8^2 - 9^2}{2 \times 7 \times 8}$.`, R`$\frac{32}{112}$.`],
  [R`|M1|$\cos\theta = \frac{32}{112}$`, R`|A1|$73.4°$`], R`$73.4°$`,
  R`$\cos\theta = \frac{49 + 64 - 81}{112} = 0.2857$, $\theta = 73.4°$.`),
Q('P9.1-3', 1, R`Show that, when $A = 90°$, the cosine rule $a^2 = b^2 + c^2 - 2bc\cos A$ becomes Pythagoras' theorem. [[1]]`,
  [R`What is $\cos 90°$?`, R`The last term vanishes.`],
  [R`|B1|$\cos 90° = 0$, so $a^2 = b^2 + c^2$`], R`$\cos 90° = 0$ gives $a^2 = b^2 + c^2$`,
  R`With $\cos 90° = 0$ the term $2bc\cos A$ is zero, leaving $a^2 = b^2 + c^2$, with $a$ the hypotenuse.`),
Q('P9.1-4', 2, R`In triangle $ABC$, $AB = 10$ cm, $AC = 12$ cm and $\angle BAC = 110°$. Find $BC$. [[2]]`,
  [R`$BC^2 = 10^2 + 12^2 - 2(10)(12)\cos 110°$.`, R`$\cos 110°$ is negative, so $BC^2 > 244$.`],
  [R`|M1|Cosine rule`, R`|A1|$18.1$ cm`], R`$18.1$ cm`,
  R`$BC^2 = 244 + 82.08 = 326.08$, $BC = 18.1$ cm.`),
Q('P9.1-5', 2, R`A triangle has sides $5$ cm, $6$ cm and $10$ cm. Find its largest angle. [[2]]`,
  [R`It's opposite the $10$ cm side.`, R`$\cos\theta = \frac{25 + 36 - 100}{60}$.`],
  [R`|M1|$\cos\theta = -\frac{39}{60}$`, R`|A1|$130.5°$`], R`$130.5°$`,
  R`$\cos\theta = -0.65$, so $\theta = 130.5°$ (obtuse).`),
Q('P9.1-6', 2, R`Find the smallest angle in the triangle with sides $6$ cm, $7$ cm and $8$ cm. [[3]]`,
  [R`The smallest angle is opposite the shortest side.`, R`$\cos\theta = \frac{7^2 + 8^2 - 6^2}{2 \times 7 \times 8}$.`],
  [R`|B1|Opposite the $6$ cm side`, R`|M1|$\cos\theta = \frac{77}{112}$`, R`|A1|$46.6°$`], R`$46.6°$`,
  R`$\cos\theta = \frac{49 + 64 - 36}{112} = 0.6875$, so $\theta = 46.6°$.`),
Q('P9.1-7', 2, R`A ship sails $5$ km from $A$ to $B$ on a bearing of $060°$, then $8$ km from $B$ to $C$ on a bearing of $150°$. Find the distance $AC$. [[3]]`,
  [R`Find angle $ABC$: the turn is $150° - 60° = 90°$.`, R`So $\angle ABC = 180° - 90° = 90°$.`],
  [R`|M1|Finds $\angle ABC$`, R`|A1|$90°$`, R`|A1|$AC = \sqrt{89} = 9.43$ km`], R`$9.43$ km`,
  R`At $B$, the back-bearing to $A$ is $240°$ and $C$ is on $150°$: the angle between them is $90°$. $AC = \sqrt{25 + 64} = 9.43$ km.`),
Q('P9.1-8', 3, R`In triangle $ABC$, $AB = x$ cm, $AC = (x + 2)$ cm, $BC = 7$ cm and $\angle BAC = 60°$. Find $x$, to $3$ significant figures. [[4]]`,
  [R`$49 = x^2 + (x + 2)^2 - 2x(x + 2)\cos 60°$.`, R`$\cos 60° = \frac12$, giving $x^2 + 2x + 4 = 49$.`],
  [R`|M1|Cosine rule`, R`|M1|$x^2 + 2x - 45 = 0$`, R`|M1|Quadratic formula`, R`|A1|$x = 5.78$`], R`$x = 5.78$`,
  R`$x^2 + x^2 + 4x + 4 - x^2 - 2x = 49$, so $x^2 + 2x - 45 = 0$ and $x = -1 + \sqrt{46} = 5.78$ (the negative root is impossible).`),
Q('P9.1-9', 3, R`A triangle has sides $4$, $5$ and $6$ cm. Show that the cosine of its largest angle is $\frac18$. [[3]]`,
  [R`The largest angle is opposite $6$.`, R`$\frac{16 + 25 - 36}{40}$.`],
  [R`|B1|Opposite the side of $6$`, R`|M1|$\cos\theta = \frac{4^2 + 5^2 - 6^2}{2 \times 4 \times 5}$`, R`|A1|$= \frac{5}{40} = \frac18$`], R`$\frac18$`,
  R`$\cos\theta = \frac{5}{40} = \frac18$.`),
Q('P9.1-10', 3, R`A parallelogram has sides $6$ cm and $9$ cm and an angle of $50°$. Find the lengths of its diagonals. [[4]]`,
  [R`One diagonal is opposite the $50°$ angle, the other opposite the $130°$ angle.`, R`$d^2 = 36 + 81 - 108\cos\theta$.`],
  [R`|M1|Uses $50°$`, R`|A1|$6.90$ cm`, R`|M1|Uses $130°$`, R`|A1|$13.7$ cm`], R`$6.90$ cm and $13.7$ cm`,
  R`$d_1^2 = 117 - 108\cos 50° = 47.58$; $d_2^2 = 117 - 108\cos 130° = 186.42$.`),
Q('P9.1-11', 3, R`Triangle $PQR$ has $PQ = 7$ cm, $QR = 5$ cm and $RP = 3$ cm. Show that $\angle PRQ = 120°$. [[3]]`,
  [R`$\angle PRQ$ is opposite $PQ$.`, R`$\cos R = \frac{5^2 + 3^2 - 7^2}{2 \times 5 \times 3}$.`],
  [R`|M1|Cosine rule for $R$`, R`|A1|$\cos R = -\frac{15}{30} = -\frac12$`, R`|A1|$R = 120°$`], R`$\cos R = -\frac12$`,
  R`$\cos R = \frac{25 + 9 - 49}{30} = -\frac12$, so $R = 120°$ exactly.`),
Q('P9.1-12', 4, R`In triangle $ABC$, $AB = 5$ cm, $AC = 7$ cm and $\angle ABC = 120°$. Find $BC$. [[4]]`,
  [R`$AC$ is opposite the $120°$ angle: $49 = 25 + x^2 - 10x\cos 120°$.`, R`$\cos 120° = -\frac12$.`],
  [R`|M1|$7^2 = 5^2 + x^2 - 2(5)x\cos 120°$`, R`|M1|$x^2 + 5x - 24 = 0$`, R`|A1|$(x + 8)(x - 3) = 0$`, R`|A1|$BC = 3$ cm`], R`$3$ cm`,
  R`$49 = 25 + x^2 + 5x$, so $x = 3$ ($x = -8$ is impossible).`),
Q('P9.1-13', 4, R`In triangle $ABC$, $AB = 2x$, $AC = 3x$, $BC = 10$ and $\angle BAC = 60°$. Find the exact value of $x$. [[4]]`,
  [R`$100 = 4x^2 + 9x^2 - 2(2x)(3x)\cos 60°$.`, R`$100 = 7x^2$.`],
  [R`|M1|Cosine rule`, R`|A1|$7x^2 = 100$`, R`|M1|Square root`, R`|A1|$x = \frac{10}{\sqrt7} = \frac{10\sqrt7}{7}$`], R`$x = \frac{10\sqrt7}{7}$`,
  R`$13x^2 - 6x^2 = 7x^2 = 100$.`),
Q('P9.1-14', 4, R`Two walkers leave the same point. One walks at $4$ km/h on a bearing of $030°$; the other walks at $5$ km/h on a bearing of $100°$. Find how far apart they are after $2$ hours. [[4]]`,
  [R`After $2$ hours they've walked $8$ km and $10$ km.`, R`The angle between their paths is $70°$.`],
  [R`|B1|$8$ km and $10$ km`, R`|B1|Angle $70°$`, R`|M1|$d^2 = 64 + 100 - 160\cos 70°$`, R`|A1|$10.5$ km`], R`$10.5$ km`,
  R`$d^2 = 164 - 54.72 = 109.28$, $d = 10.45$ km.`),
Q('P9.1-15', 5, R`The quadrilateral $ABCD$ has $AB = 5$ cm, $BC = 6$ cm, $CD = 4$ cm, $DA = 7$ cm and $\angle ABC = 100°$.

**(a)** Find the length of the diagonal $AC$. [[2]]

**(b)** Find $\angle ADC$. [[3]]

**(c)** Find $\angle BAC$. [[3]]`,
  [R`Split the quadrilateral along $AC$ into two triangles.`, R`Keep $AC^2$ unrounded for (b) and (c).`],
  [R`(a)|M1|$AC^2 = 25 + 36 - 60\cos 100°$`, R`(a)|A1|$8.45$ cm`, R`(b)|M1|$\cos D = \frac{4^2 + 7^2 - AC^2}{2 \times 4 \times 7}$`, R`(b)|A1|$\cos D = -0.1146$`, R`(b)|A1|$96.6°$`, R`(c)|M1|$\cos A = \frac{5^2 + AC^2 - 6^2}{2 \times 5 \times AC}$`, R`(c)|A1|$0.7149$`, R`(c)|A1|$44.4°$`],
  R`(a) $8.45$ cm (b) $96.6°$ (c) $44.4°$`,
  R`(a) $AC^2 = 61 + 10.42 = 71.42$, $AC = 8.451$.

(b) $\cos D = \frac{65 - 71.42}{56} = -0.1146$, so $D = 96.6°$.

(c) $\cos(\angle BAC) = \frac{25 + 71.42 - 36}{2 \times 5 \times 8.451} = 0.7149$, so $44.4°$.`)
]};

CONTENT['P9.2'] = {
notes: R`
### The sine rule
$$\frac{a}{\sin A} = \frac{b}{\sin B} = \frac{c}{\sin C} \qquad \text{or} \qquad \frac{\sin A}{a} = \frac{\sin B}{b} = \frac{\sin C}{c}$$
Use it when you know a side and the angle **opposite** it, plus one more side or angle. Put the unknown on top.

### The ambiguous case
$\sin\theta = \sin(180° - \theta)$, so when you find an **angle**, there may be two answers: $\theta$ and $180° - \theta$. Both work if the angles still add to less than $180°$.

::: booklet
**Not in the formula booklet:** the sine rule.
:::

### Worked example 1
In triangle $ABC$, $A = 40°$, $B = 65°$ and $a = 8$ cm. Find $b$.
$$b = \frac{8\sin 65°}{\sin 40°} = 11.3 \text{ cm}$$

### Worked example 2: two triangles
$A = 40°$, $AB = c = 8$ cm and $BC = a = 6$ cm. Find $C$.
- $\sin C = \frac{8\sin 40°}{6} = 0.857$, so $C = 59.0°$ **or** $C = 180° - 59.0° = 121.0°$.
- Both are possible ($40° + 121° < 180°$). In the diagram the two positions are $C$ and $D$: $BC = BD = 6$.

[[fig:P9.2-amb]]

**The trap:** giving only $59.0°$. When you find an angle with the sine rule, always check $180° - \theta$ too.

### Watch out
- If the known angle is obtuse, the other angles must be acute: no ambiguity.
- If $\sin\theta > 1$, no triangle exists.
`,
questions: [
Q('P9.2-1', 1, R`In triangle $ABC$, $A = 50°$, $B = 70°$ and $a = 10$ cm. Find $b$. [[2]]`,
  [R`$\frac{b}{\sin 70°} = \frac{10}{\sin 50°}$.`, R`Multiply by $\sin 70°$.`],
  [R`|M1|$b = \frac{10\sin 70°}{\sin 50°}$`, R`|A1|$12.3$ cm`], R`$12.3$ cm`,
  R`$b = \frac{9.397}{0.766} = 12.3$ cm.`),
Q('P9.2-2', 1, R`In triangle $ABC$, $A = 30°$, $a = 5$ cm and $b = 8$ cm. Find $B$, given that $B$ is acute. [[2]]`,
  [R`$\sin B = \frac{8\sin 30°}{5}$.`, R`$= 0.8$.`],
  [R`|M1|$\sin B = 0.8$`, R`|A1|$53.1°$`], R`$53.1°$`,
  R`$\sin B = \frac{8 \times 0.5}{5} = 0.8$, $B = 53.1°$.`),
Q('P9.2-3', 1, R`A triangle has angles of $45°$ and $60°$. The side opposite the $45°$ angle is $6$ cm. Find the side opposite the $60°$ angle. [[2]]`,
  [R`$\frac{x}{\sin 60°} = \frac{6}{\sin 45°}$.`, R`$x = \frac{6\sin 60°}{\sin 45°}$.`],
  [R`|M1|Sine rule`, R`|A1|$7.35$ cm`], R`$7.35$ cm`,
  R`$x = \frac{6 \times 0.866}{0.7071} = 7.35$ cm.`),
Q('P9.2-4', 2, R`In triangle $ABC$, $A = 35°$, $B = 80°$ and $c = 12$ cm. Find $a$. [[3]]`,
  [R`First find $C$.`, R`$C = 65°$, then $\frac{a}{\sin 35°} = \frac{12}{\sin 65°}$.`],
  [R`|B1|$C = 65°$`, R`|M1|$a = \frac{12\sin 35°}{\sin 65°}$`, R`|A1|$7.59$ cm`], R`$7.59$ cm`,
  R`$C = 180° - 115° = 65°$; $a = \frac{6.883}{0.9063} = 7.59$ cm.`),
Q('P9.2-5', 2, R`In triangle $ABC$, $B = 110°$, $b = 15$ cm and $c = 9$ cm. Find $C$. [[2]]`,
  [R`$\sin C = \frac{9\sin 110°}{15}$.`, R`Since $B$ is obtuse, $C$ must be acute.`],
  [R`|M1|$\sin C = 0.5638$`, R`|A1|$34.3°$ (only answer, as $B$ is obtuse)`], R`$34.3°$`,
  R`$\sin C = 0.5638$. $180° - 34.3° = 145.7°$ is impossible because $B$ is already $110°$.`),
Q('P9.2-6', 2, R`In triangle $ABC$, $A = 30°$, $B = 45°$ and $a = 4$ cm. Find the exact value of $b$. [[2]]`,
  [R`$b = \frac{4\sin 45°}{\sin 30°}$.`, R`$\sin 45° = \frac{\sqrt2}{2}$, $\sin 30° = \frac12$.`],
  [R`|M1|Sine rule with exact values`, R`|A1|$4\sqrt2$ cm`], R`$4\sqrt2$ cm`,
  R`$b = \frac{4 \times \frac{\sqrt2}{2}}{\frac12} = 4\sqrt2$.`),
Q('P9.2-7', 2, R`In triangle $ABC$, $A = 40°$, $AB = 8$ cm and $BC = 6$ cm. Show that there are two possible values of $C$ and find them. [[3]]`,
  [R`$\sin C = \frac{8\sin 40°}{6}$.`, R`Check $180° - C$ as well.`],
  [R`|M1|$\sin C = 0.857$`, R`|A1|$C = 59.0°$`, R`|A1|$C = 121.0°$; both valid as $40° + 121° < 180°$`], R`$59.0°$ or $121.0°$`,
  R`$\sin C = 0.8571$. $C = 59.0°$, or $180° - 59.0° = 121.0°$, which still leaves room for $B = 19.0°$.`),
Q('P9.2-8', 3, R`For the triangle in the previous question ($A = 40°$, $c = 8$ cm, $a = 6$ cm), find the two possible lengths of $AC$. [[4]]`,
  [R`For each value of $C$, find $B = 180° - 40° - C$.`, R`Then $b = \frac{6\sin B}{\sin 40°}$.`],
  [R`|M1|$B = 81.0°$ or $19.0°$`, R`|M1|Sine rule for $b$`, R`|A1|$9.22$ cm`, R`|A1|$3.04$ cm`], R`$9.22$ cm or $3.04$ cm`,
  R`$C = 58.99°$: $B = 81.01°$, $b = \frac{6\sin 81.01°}{\sin 40°} = 9.22$. $C = 121.01°$: $B = 18.99°$, $b = 3.04$.`),
Q('P9.2-9', 3, R`From two points $A$ and $B$, $20$ m apart on level ground in line with a tree, the angles of elevation of the top of the tree are $32°$ and $50°$ (from $A$ and $B$ respectively, with $B$ nearer the tree). Find the height of the tree. [[4]]`,
  [R`In triangle $ABT$ (top $T$), the angle at $T$ is $50° - 32° = 18°$.`, R`Find $BT$ with the sine rule, then height $= BT\sin 50°$.`],
  [R`|B1|$\angle ATB = 18°$`, R`|M1|$BT = \frac{20\sin 32°}{\sin 18°}$`, R`|A1|$34.3$ m`, R`|A1|Height $26.3$ m`], R`$26.3$ m`,
  R`$\angle ABT = 130°$ and $\angle BAT = 32°$, so $\angle T = 18°$. $BT = 34.30$ m; height $34.30\sin 50° = 26.3$ m.`),
Q('P9.2-10', 3, R`In triangle $ABC$, $AB = 9$ cm, $A = 48°$ and $C = 75°$. Find $BC$. [[2]]`,
  [R`$BC$ is opposite $A$; $AB$ is opposite $C$.`, R`$\frac{BC}{\sin 48°} = \frac{9}{\sin 75°}$.`],
  [R`|M1|Sine rule`, R`|A1|$6.92$ cm`], R`$6.92$ cm`,
  R`$BC = \frac{9\sin 48°}{\sin 75°} = 6.92$ cm.`),
Q('P9.2-11', 3, R`Show that no triangle exists with $A = 70°$, $a = 4$ cm and $b = 7$ cm. [[2]]`,
  [R`Find $\sin B$.`, R`Can a sine be bigger than $1$?`],
  [R`|M1|$\sin B = \frac{7\sin 70°}{4}$`, R`|A1|$= 1.64 > 1$, impossible`], R`$\sin B = 1.64 > 1$`,
  R`Side $a$ is too short to reach the other side of the triangle.`),
Q('P9.2-12', 4, R`A lighthouse $L$ is on a bearing of $040°$ from a port $A$. From a buoy $B$, $10$ km due east of $A$, the lighthouse is on a bearing of $320°$. Find the distance $AL$. [[4]]`,
  [R`$\angle LAB = 90° - 40° = 50°$.`, R`$\angle LBA = 320° - 270° = 50°$.`],
  [R`|B1|$\angle LAB = 50°$`, R`|B1|$\angle LBA = 50°$, so $\angle L = 80°$`, R`|M1|$AL = \frac{10\sin 50°}{\sin 80°}$`, R`|A1|$7.78$ km`], R`$7.78$ km`,
  R`$AL = \frac{7.660}{0.9848} = 7.78$ km. (The triangle is isosceles, so $BL$ is the same.)`),
Q('P9.2-13', 4, R`In triangle $ABC$, $A = 45°$, $B = 60°$ and $BC = 6$ cm. Show that $AC = 3\sqrt6$ cm. [[3]]`,
  [R`$\frac{AC}{\sin 60°} = \frac{6}{\sin 45°}$.`, R`Use exact values and rationalise.`],
  [R`|M1|Sine rule`, R`|M1|$\frac{6 \times \frac{\sqrt3}{2}}{\frac{\sqrt2}{2}} = \frac{6\sqrt3}{\sqrt2}$`, R`|A1|$= 3\sqrt6$`], R`Shown`,
  R`$\frac{6\sqrt3}{\sqrt2} = \frac{6\sqrt6}{2} = 3\sqrt6$.`),
Q('P9.2-14', 4, R`In triangle $ABC$, $AB = 10$ cm, $BC = 7$ cm and $A = 35°$. Find the possible values of $C$. [[4]]`,
  [R`$\sin C = \frac{10\sin 35°}{7}$.`, R`Check both $C$ and $180° - C$ with $A = 35°$.`],
  [R`|M1|$\sin C = 0.8194$`, R`|A1|$55.0°$`, R`|A1|$125.0°$`, R`|B1|Both valid since $35° + 125° < 180°$`], R`$55.0°$ or $125.0°$`,
  R`$C = 55.03°$ or $124.97°$, and either leaves a positive angle $B$.`),
Q('P9.2-15', 5, R`In triangle $PQR$, $PQ = 8$ cm, $\angle QPR = 42°$ and $\angle PQR = 63°$.

**(a)** Find $PR$. [[2]]

**(b)** Find $QR$. [[2]]

**(c)** A point $S$ is to be placed on the line through $P$ and $Q$ with $RS = 6$ cm. Find the two possible values of $\angle PSR$. [[3]]

**(d)** Show that only one of these positions lies between $P$ and $Q$. [[1]]`,
  [R`$\angle PRQ = 75°$.`, R`In triangle $PRS$: $\frac{\sin S}{PR} = \frac{\sin 42°}{6}$.`],
  [R`(a)|M1|$PR = \frac{8\sin 63°}{\sin 75°}$`, R`(a)|A1|$7.38$ cm`, R`(b)|M1|$QR = \frac{8\sin 42°}{\sin 75°}$`, R`(b)|A1|$5.54$ cm`, R`(c)|M1|$\sin(\angle PSR) = \frac{7.380\sin 42°}{6}$`, R`(c)|A1|$55.4°$`, R`(c)|A1|$124.6°$`, R`(d)|B1|$PS = 8.89 > 8$ for $55.4°$ but $2.08$ for $124.6°$`],
  R`(a) $7.38$ cm (b) $5.54$ cm (c) $55.4°$ or $124.6°$ (d) only $124.6°$ ($PS = 2.08$ cm)`,
  R`(c) $\sin S = \frac{7.380 \times 0.6691}{6} = 0.8230$, giving $55.4°$ or $124.6°$.

(d) For $S = 55.4°$: $\angle PRS = 82.6°$ and $PS = \frac{6\sin 82.6°}{\sin 42°} = 8.89$ cm, beyond $Q$. For $S = 124.6°$: $\angle PRS = 13.4°$ and $PS = \frac{6\sin 13.4°}{\sin 42°} = 2.08$ cm, between $P$ and $Q$.`)
]};

CONTENT['P9.3'] = {
notes: R`
### Area of a triangle
$$\text{Area} = \tfrac12 ab\sin C$$
using **two sides and the angle between them**.

::: booklet
**Not in the formula booklet:** this area formula.
:::

### Worked example 1
Find the area of a triangle with sides $7$ cm and $9$ cm and an included angle of $40°$.

[[fig:P9.3-area]]

$$\tfrac12 \times 7 \times 9 \times \sin 40° = 20.2 \text{ cm}^2$$

### Worked example 2: finding the angle from the area
A triangle has sides $8$ cm and $7$ cm and area $20$ cm². Find the angle between those sides.
- $\frac12 \times 8 \times 7 \times \sin\theta = 20$, so $\sin\theta = \frac{40}{56} = 0.714$.
- $\theta = 45.6°$ **or** $134.4°$.

**The trap:** using an angle that isn't between the two sides, or forgetting the obtuse answer when you work backwards from an area.

### Watch out
- If you know three sides, use the cosine rule for one angle first.
- Exact values: $\sin 30° = \frac12$, $\sin 60° = \frac{\sqrt3}{2}$, $\sin 45° = \frac{\sqrt2}{2}$.
`,
questions: [
Q('P9.3-1', 1, R`Find the area of a triangle with sides $6$ cm and $8$ cm and an included angle of $30°$. [[1]]`,
  [R`$\frac12 ab\sin C$.`, R`$\sin 30° = \frac12$.`],
  [R`|B1|$12$ cm²`], R`$12$ cm²`,
  R`$\frac12 \times 6 \times 8 \times \frac12 = 12$.`),
Q('P9.3-2', 1, R`Find the area of a triangle with sides $5$ cm and $9$ cm and an included angle of $70°$. [[2]]`,
  [R`$\frac12 \times 5 \times 9 \times \sin 70°$.`, R`$\sin 70° = 0.9397$.`],
  [R`|M1|$\frac12 \times 5 \times 9 \sin 70°$`, R`|A1|$21.1$ cm²`], R`$21.1$ cm²`,
  R`$22.5 \times 0.9397 = 21.1$ cm².`),
Q('P9.3-3', 1, R`Find the exact area of an equilateral triangle with side $4$ cm. [[2]]`,
  [R`Every angle is $60°$.`, R`$\sin 60° = \frac{\sqrt3}{2}$.`],
  [R`|M1|$\frac12 \times 4 \times 4 \times \sin 60°$`, R`|A1|$4\sqrt3$ cm²`], R`$4\sqrt3$ cm²`,
  R`$8 \times \frac{\sqrt3}{2} = 4\sqrt3$.`),
Q('P9.3-4', 2, R`Find the exact area of a triangle with sides $10$ cm and $12$ cm and an included angle of $120°$. [[2]]`,
  [R`$\sin 120° = \sin 60°$.`, R`$= \frac{\sqrt3}{2}$.`],
  [R`|M1|$\frac12 \times 10 \times 12 \times \frac{\sqrt3}{2}$`, R`|A1|$30\sqrt3$ cm²`], R`$30\sqrt3$ cm²`,
  R`$60 \times \frac{\sqrt3}{2} = 30\sqrt3$.`),
Q('P9.3-5', 2, R`A triangle has sides $8$ cm and $10$ cm and area $30$ cm². Find the possible values of the angle between those two sides. [[3]]`,
  [R`$40\sin\theta = 30$.`, R`Two angles have the same sine.`],
  [R`|M1|$\sin\theta = 0.75$`, R`|A1|$48.6°$`, R`|A1|$131.4°$`], R`$48.6°$ or $131.4°$`,
  R`$\sin\theta = 0.75$: $\theta = 48.6°$ or $180° - 48.6° = 131.4°$.`),
Q('P9.3-6', 2, R`In triangle $ABC$, $AB = 7$ cm, $AC = x$ cm and $A = 50°$. The area is $20$ cm². Find $x$. [[2]]`,
  [R`$\frac12 \times 7 \times x \times \sin 50° = 20$.`, R`$x = \frac{40}{7\sin 50°}$.`],
  [R`|M1|Area equation`, R`|A1|$x = 7.46$`], R`$x = 7.46$`,
  R`$x = \frac{40}{5.362} = 7.46$.`),
Q('P9.3-7', 2, R`Find the exact area of the triangle with sides $5$, $6$ and $7$ cm. [[3]]`,
  [R`Find an angle with the cosine rule: the one opposite $7$ has $\cos C = \frac15$.`, R`$\sin C = \sqrt{1 - \frac{1}{25}}$.`],
  [R`|M1|$\cos C = \frac{25 + 36 - 49}{60} = \frac15$`, R`|M1|$\sin C = \frac{\sqrt{24}}{5}$`, R`|A1|Area $6\sqrt6$ cm²`], R`$6\sqrt6$ cm²`,
  R`Area $= \frac12 \times 5 \times 6 \times \frac{2\sqrt6}{5} = 6\sqrt6 \approx 14.7$ cm².`),
Q('P9.3-8', 3, R`A parallelogram has sides $8$ cm and $5$ cm and an angle of $60°$. Find its exact area. [[2]]`,
  [R`It's two congruent triangles.`, R`$2 \times \frac12 \times 8 \times 5 \sin 60°$.`],
  [R`|M1|$8 \times 5 \times \sin 60°$`, R`|A1|$20\sqrt3$ cm²`], R`$20\sqrt3$ cm²`,
  R`$40 \times \frac{\sqrt3}{2} = 20\sqrt3 \approx 34.6$ cm².`),
Q('P9.3-9', 3, R`In triangle $ABC$, $A = 40°$, $B = 60°$ and $c = 10$ cm. Find the area. [[4]]`,
  [R`$C = 80°$; find another side with the sine rule.`, R`$a = \frac{10\sin 40°}{\sin 80°}$, then area $= \frac12 ac\sin B$.`],
  [R`|B1|$C = 80°$`, R`|M1|$a = 6.527$`, R`|M1|$\frac12 \times 6.527 \times 10 \times \sin 60°$`, R`|A1|$28.3$ cm²`], R`$28.3$ cm²`,
  R`$a = 6.527$ cm; area $= 32.63 \times 0.8660 = 28.3$ cm².`),
Q('P9.3-10', 3, R`A triangle has sides $4$ cm and $6$ cm and area $6\sqrt3$ cm².

**(a)** Find the possible values of the included angle. [[2]]

**(b)** For the acute angle, find the exact length of the third side. [[2]]`,
  [R`$12\sin\theta = 6\sqrt3$.`, R`Then the cosine rule with $\cos 60° = \frac12$.`],
  [R`(a)|M1|$\sin\theta = \frac{\sqrt3}{2}$`, R`(a)|A1|$60°$ or $120°$`, R`(b)|M1|$16 + 36 - 48 \times \frac12$`, R`(b)|A1|$2\sqrt7$ cm`], R`(a) $60°$ or $120°$ (b) $2\sqrt7$ cm`,
  R`(b) $x^2 = 52 - 24 = 28$, $x = 2\sqrt7$.`),
Q('P9.3-11', 3, R`Show that a triangle with sides $x$ and $2x$ and an included angle of $150°$ has area $\frac{x^2}{2}$. [[2]]`,
  [R`$\sin 150° = \frac12$.`, R`$\frac12 \times x \times 2x \times \frac12$.`],
  [R`|M1|$\frac12 (x)(2x)\sin 150°$`, R`|A1|$= \frac{x^2}{2}$`], R`Shown`,
  R`$x^2 \sin 150° = \frac{x^2}{2}$.`),
Q('P9.3-12', 4, R`Find the exact area of a regular hexagon with side $6$ cm. [[3]]`,
  [R`Split it into $6$ triangles from the centre.`, R`Each is equilateral with side $6$.`],
  [R`|M1|Six equilateral triangles`, R`|M1|$\frac12 \times 6 \times 6 \times \sin 60° = 9\sqrt3$`, R`|A1|$54\sqrt3$ cm²`], R`$54\sqrt3$ cm²`,
  R`$6 \times 9\sqrt3 = 54\sqrt3 \approx 93.5$ cm².`),
Q('P9.3-13', 4, R`In triangle $ABC$, $AB = (x + 1)$ cm, $AC = (x - 1)$ cm, $A = 30°$ and the area is $6$ cm². Find $x$. [[4]]`,
  [R`$\frac12(x + 1)(x - 1)\sin 30° = 6$.`, R`$x^2 - 1 = 24$.`],
  [R`|M1|Area equation`, R`|A1|$\frac14(x^2 - 1) = 6$`, R`|M1|$x^2 = 25$`, R`|A1|$x = 5$`], R`$x = 5$`,
  R`$x = 5$ (the negative root would give negative lengths).`),
Q('P9.3-14', 4, R`A field $ABCD$ is split by the diagonal $AC$. $AB = 40$ m, $BC = 60$ m, $\angle ABC = 75°$, $CD = 50$ m, $DA = 45$ m and $\angle CDA = 100°$. Find the area of the field. [[4]]`,
  [R`Area $= \triangle ABC + \triangle ACD$.`, R`Each uses $\frac12 ab\sin C$ with the given angles.`],
  [R`|M1|$\frac12 \times 40 \times 60 \sin 75°$`, R`|A1|$1159$ m²`, R`|M1|$\frac12 \times 50 \times 45 \sin 100°$`, R`|A1|Total $2267$ m²`], R`$2270$ m² (3 s.f.)`,
  R`$1159.1 + 1107.9 = 2267$ m².`),
Q('P9.3-15', 5, R`Triangle $ABC$ has $AB = 6$ cm, $BC = 10$ cm and $\angle ABC = \theta$. Its area is $15\sqrt3$ cm².

**(a)** Find the two possible values of $\theta$. [[3]]

**(b)** For the obtuse value of $\theta$, find $AC$ exactly. [[2]]

**(c)** For the acute value of $\theta$, find $AC$ exactly. [[1]]

**(d)** For the obtuse case, find the exact perpendicular distance from $B$ to $AC$. [[2]]`,
  [R`$30\sin\theta = 15\sqrt3$.`, R`For (d): area $= \frac12 \times AC \times$ height.`],
  [R`(a)|M1|$\sin\theta = \frac{\sqrt3}{2}$`, R`(a)|A1|$60°$`, R`(a)|A1|$120°$`, R`(b)|M1|$36 + 100 - 120\cos 120°$`, R`(b)|A1|$14$ cm`, R`(c)|B1|$2\sqrt{19}$ cm`, R`(d)|M1|$\frac{2 \times 15\sqrt3}{14}$`, R`(d)|A1|$\frac{15\sqrt3}{7}$ cm`],
  R`(a) $60°$, $120°$ (b) $14$ cm (c) $2\sqrt{19}$ cm (d) $\frac{15\sqrt3}{7}$ cm`,
  R`(b) $136 + 60 = 196$. (c) $136 - 60 = 76 = 4 \times 19$. (d) Height $= \frac{2 \times \text{area}}{AC} = \frac{30\sqrt3}{14}$.`)
]};

CONTENT['P9.4'] = {
notes: R`
### Which rule?
| You know | Use |
|---|---|
| two sides and the angle **between** them | cosine rule for the third side |
| all three sides | cosine rule for an angle |
| a side and its **opposite** angle, plus one more | sine rule |
| two sides and the included angle, want the area | $\frac12 ab\sin C$ |

In multi-step problems, draw a diagram and mark everything you know.

::: booklet
**Not in the formula booklet:** these rules.
:::

### Worked example 1: bearings
A ship sails $20$ km from $P$ to $Q$ on a bearing of $040°$, then $15$ km to $R$ on a bearing of $160°$. Find $PR$.
1. At $Q$, the bearing back to $P$ is $220°$, so $\angle PQR = 220° - 160° = 60°$.
2. $PR^2 = 400 + 225 - 600\cos 60° = 325$, so $PR = 18.0$ km.

### Worked example 2: heights
From $A$ the angle of elevation of a mountain top $T$ is $25°$. After walking $500$ m towards it to $B$ it is $40°$. Find the height.

[[fig:P9.4-elev]]

1. In triangle $ABT$: $\angle ABT = 140°$, so $\angle ATB = 15°$.
2. $BT = \frac{500\sin 25°}{\sin 15°} = 816.4$ m.
3. Height $= BT\sin 40° = 525$ m.

**The trap:** rounding $BT$ to $816$ before the last step, or using $40°$ inside triangle $ABT$ (the interior angle at $B$ is $140°$).

### Watch out
- Bearings are measured clockwise from north; draw north lines at every point.
`,
questions: [
Q('P9.4-1', 1, R`In triangle $ABC$, $a = 8$ cm, $b = 11$ cm and $C = 52°$. Find $c$. [[2]]`,
  [R`Two sides and the included angle: cosine rule.`, R`$c^2 = 64 + 121 - 176\cos 52°$.`],
  [R`|M1|Cosine rule`, R`|A1|$8.75$ cm`], R`$8.75$ cm`,
  R`$c^2 = 185 - 108.36 = 76.64$, $c = 8.75$ cm.`),
Q('P9.4-2', 1, R`In triangle $ABC$, $A = 38°$, $B = 71°$ and $a = 9$ cm. Find $c$. [[2]]`,
  [R`$C = 71°$.`, R`Sine rule: $c = \frac{9\sin 71°}{\sin 38°}$.`],
  [R`|M1|Finds $C$ and uses the sine rule`, R`|A1|$13.8$ cm`], R`$13.8$ cm`,
  R`$C = 180° - 109° = 71°$; $c = \frac{8.510}{0.6157} = 13.8$ cm.`),
Q('P9.4-3', 1, R`Find the largest angle of the triangle with sides $9$, $10$ and $12$ cm. [[2]]`,
  [R`Opposite the $12$ cm side.`, R`$\cos\theta = \frac{81 + 100 - 144}{180}$.`],
  [R`|M1|$\cos\theta = \frac{37}{180}$`, R`|A1|$78.1°$`], R`$78.1°$`,
  R`$\cos\theta = 0.2056$, $\theta = 78.1°$.`),
Q('P9.4-4', 2, R`A boat sails $12$ km from $A$ to $B$ on a bearing of $070°$, then $9$ km from $B$ to $C$ on a bearing of $160°$. Find the distance $AC$ and the bearing of $C$ from $A$. [[4]]`,
  [R`The angle at $B$ is $180° - (160° - 70°) = 90°$.`, R`$\tan(\angle BAC) = \frac{9}{12}$.`],
  [R`|B1|$\angle ABC = 90°$`, R`|A1|$AC = 15$ km`, R`|M1|$\angle BAC = 36.9°$`, R`|A1|Bearing $107°$`], R`$15$ km; $107°$`,
  R`$AC = \sqrt{144 + 81} = 15$ km. $\angle BAC = \tan^{-1}\frac34 = 36.9°$, so the bearing is $070° + 36.9° = 106.9° \approx 107°$.`),
Q('P9.4-5', 2, R`In triangle $ABC$, $AB = 8$ cm, $A = 50°$ and $B = 60°$. Find $BC$, $AC$ and the area. [[4]]`,
  [R`$C = 70°$.`, R`Sine rule for both sides.`],
  [R`|B1|$C = 70°$`, R`|A1|$BC = 6.52$ cm`, R`|A1|$AC = 7.37$ cm`, R`|A1|Area $22.6$ cm²`], R`$6.52$ cm, $7.37$ cm, $22.6$ cm²`,
  R`$BC = \frac{8\sin 50°}{\sin 70°}$, $AC = \frac{8\sin 60°}{\sin 70°}$, area $= \frac12 \times 8 \times 7.373 \times \sin 50°$.`),
Q('P9.4-6', 2, R`An isosceles triangle has equal sides of $10$ cm and a base of $12$ cm. Find its angles and its area. [[3]]`,
  [R`Split it down the middle: half the base is $6$.`, R`$\cos(\text{base angle}) = \frac{6}{10}$.`],
  [R`|A1|Base angles $53.1°$`, R`|A1|Apex $73.7°$`, R`|A1|Area $48$ cm²`], R`$53.1°$, $53.1°$, $73.7°$; $48$ cm²`,
  R`The height is $\sqrt{100 - 36} = 8$, so the area is $\frac12 \times 12 \times 8 = 48$.`),
Q('P9.4-7', 2, R`A boat is $300$ m from a point $A$ and $450$ m from a point $B$ on the shore, where $AB = 600$ m. Find the angle between $AB$ and the line from $A$ to the boat. [[2]]`,
  [R`Three sides known: cosine rule.`, R`The angle at $A$ is opposite the $450$ m side.`],
  [R`|M1|$\cos A = \frac{300^2 + 600^2 - 450^2}{2 \times 300 \times 600}$`, R`|A1|$46.6°$`], R`$46.6°$`,
  R`$\cos A = \frac{247\,500}{360\,000} = 0.6875$, $A = 46.6°$.`),
Q('P9.4-8', 3, R`A triangle has sides $7$, $8$ and $13$ cm. Find its largest angle and its exact area. [[4]]`,
  [R`The largest angle is opposite $13$.`, R`$\cos\theta = -\frac12$.`],
  [R`|M1|$\cos\theta = \frac{49 + 64 - 169}{112}$`, R`|A1|$120°$`, R`|M1|$\frac12 \times 7 \times 8 \sin 120°$`, R`|A1|$14\sqrt3$ cm²`], R`$120°$; $14\sqrt3$ cm²`,
  R`$\cos\theta = -\frac{56}{112} = -\frac12$; area $28 \times \frac{\sqrt3}{2}$.`),
Q('P9.4-9', 3, R`A ship sails $20$ km from $P$ to $Q$ on a bearing of $040°$, then $15$ km from $Q$ to $R$ on a bearing of $160°$. Find $PR$ and the bearing of $R$ from $P$. [[5]]`,
  [R`$\angle PQR = 60°$.`, R`Find $\angle QPR$ with the sine rule; add it to $040°$.`],
  [R`|B1|$\angle PQR = 60°$`, R`|M1|Cosine rule`, R`|A1|$PR = 18.0$ km`, R`|M1|$\sin(\angle QPR) = \frac{15\sin 60°}{18.03}$`, R`|A1|Bearing $086°$`], R`$18.0$ km; $086°$`,
  R`$PR = \sqrt{325} = 18.03$. $\angle QPR = 46.1°$, so the bearing is $040° + 46.1° = 086.1°$.`),
Q('P9.4-10', 3, R`In triangle $ABC$, $AB = 12$ cm, $BC = 15$ cm and $B = 40°$. Find $AC$ and angle $C$. [[4]]`,
  [R`Cosine rule for $AC$.`, R`Sine rule for $C$ ($C$ is opposite $AB$).`],
  [R`|M1|$AC^2 = 144 + 225 - 360\cos 40°$`, R`|A1|$AC = 9.66$ cm`, R`|M1|$\sin C = \frac{12\sin 40°}{9.655}$`, R`|A1|$C = 53.0°$`], R`$9.66$ cm; $53.0°$`,
  R`$AC^2 = 93.22$. $\sin C = 0.7989$; $C$ can't be $127°$ (then $A$ would be $13°$, opposite the longest side $15$), so $C = 53.0°$.`),
Q('P9.4-11', 3, R`In triangle $ABC$, $A = 30°$, $B = 45°$ and $c = 10$ cm. Find the perimeter. [[4]]`,
  [R`$C = 105°$.`, R`Find $a$ and $b$ with the sine rule.`],
  [R`|B1|$C = 105°$`, R`|M1|$a = \frac{10\sin 30°}{\sin 105°}$`, R`|M1|$b = \frac{10\sin 45°}{\sin 105°}$`, R`|A1|$22.5$ cm`], R`$22.5$ cm`,
  R`$a = 5.176$, $b = 7.321$; perimeter $10 + 5.176 + 7.321 = 22.5$ cm.`),
Q('P9.4-12', 4, R`In triangle $ABC$, $AB = 5$ cm, $AC = 8$ cm and the area is $12$ cm². Find the two possible exact lengths of $BC$. [[5]]`,
  [R`$20\sin A = 12$, so $\sin A = 0.6$ and $\cos A = \pm0.8$.`, R`Cosine rule with each value.`],
  [R`|M1|$\sin A = \frac35$`, R`|A1|$\cos A = \pm\frac45$`, R`|M1|$BC^2 = 25 + 64 - 80\cos A$`, R`|A1|$5$ cm`, R`|A1|$\sqrt{153} = 3\sqrt{17}$ cm`], R`$5$ cm or $3\sqrt{17}$ cm`,
  R`$BC^2 = 89 - 64 = 25$ or $89 + 64 = 153$.`),
Q('P9.4-13', 4, R`Show that the angle opposite the side $\sqrt7$ in a triangle with sides $2$, $3$ and $\sqrt7$ is $60°$. [[3]]`,
  [R`$\cos\theta = \frac{2^2 + 3^2 - 7}{2 \times 2 \times 3}$.`, R`$= \frac{6}{12}$.`],
  [R`|M1|Cosine rule`, R`|A1|$\cos\theta = \frac12$`, R`|A1|$\theta = 60°$`], R`$\cos\theta = \frac12$`,
  R`$\cos\theta = \frac{4 + 9 - 7}{12} = \frac12$.`),
Q('P9.4-14', 4, R`From $A$, the angle of elevation of the top $T$ of a mountain is $25°$. From $B$, $500$ m nearer on level ground, it is $40°$. Find the height of the mountain. [[4]]`,
  [R`$\angle ABT = 140°$, so $\angle ATB = 15°$.`, R`Find $BT$, then height $= BT\sin 40°$.`],
  [R`|B1|$\angle ATB = 15°$`, R`|M1|$BT = \frac{500\sin 25°}{\sin 15°}$`, R`|A1|$816.4$ m`, R`|A1|Height $525$ m`], R`$525$ m`,
  R`$BT = 816.4$ m; $816.4\sin 40° = 524.8$ m.`, { fig: FIGS['P9.4-elev'] }),
Q('P9.4-15', 5, R`Three points $A$, $B$ and $C$ lie on a flat field. $AB = 80$ m, $BC = 110$ m and $\angle ABC = 125°$.

**(a)** Find $AC$. [[2]]

**(b)** Find the area of triangle $ABC$. [[2]]

**(c)** Find the shortest distance from $B$ to the line $AC$. [[2]]

**(d)** Find $\angle BAC$. [[2]]`,
  [R`Cosine rule, then $\frac12 ab\sin C$.`, R`Shortest distance $= \frac{2 \times \text{area}}{AC}$.`],
  [R`(a)|M1|$AC^2 = 6400 + 12\,100 - 17\,600\cos 125°$`, R`(a)|A1|$169$ m`, R`(b)|M1|$\frac12 \times 80 \times 110 \sin 125°$`, R`(b)|A1|$3600$ m²`, R`(c)|M1|$\frac{2 \times 3604}{169.1}$`, R`(c)|A1|$42.6$ m`, R`(d)|M1|$\sin A = \frac{110\sin 125°}{169.1}$`, R`(d)|A1|$32.2°$`],
  R`(a) $169$ m (b) $3600$ m² (c) $42.6$ m (d) $32.2°$`,
  R`(a) $AC^2 = 28\,594.9$, $AC = 169.10$. (b) $3604.2$ m². (c) $\frac{7208.4}{169.10} = 42.6$ m. (d) $\sin A = 0.5329$, $A = 32.2°$ (acute, since $B$ is obtuse).`)
]};

CONTENT['P9.5'] = {
notes: R`
### The three graphs
- $y = \sin x$: period $360°$, between $-1$ and $1$, through the origin, maximum at $90°$.
- $y = \cos x$: period $360°$, between $-1$ and $1$, starts at $(0, 1)$.
- $y = \tan x$: period $180°$, asymptotes at $x = 90°, 270°, \ldots$ (where $\cos x = 0$).

[[fig:P9.5-sin]]

[[fig:P9.5-cos]]

[[fig:P9.5-tan]]

### Symmetries
- $\sin(180° - x) = \sin x$
- $\cos(360° - x) = \cos x$
- $\tan(180° + x) = \tan x$

::: booklet
**Not in the formula booklet:** the graphs or exact values. Learn $\sin$, $\cos$, $\tan$ of $30°$, $45°$, $60°$.
:::

### Worked example 1
Find the exact value of $\cos 300°$.
- $300° = 360° - 60°$, and $\cos$ is symmetric about $360°$: $\cos 300° = \cos 60° = \frac12$.

### Worked example 2: two solutions
Find all $x$ with $0 \le x \le 360°$ and $\sin x = 0.5$.

[[fig:P9.5-half]]

- $\sin^{-1} 0.5 = 30°$; by symmetry, $180° - 30° = 150°$ too.

**The trap:** stopping at the calculator answer. The line $y = 0.5$ crosses the sine curve **twice** in each $360°$.

### Watch out
- Signs: in $0°$–$90°$ all are positive; $90°$–$180°$ only $\sin$; $180°$–$270°$ only $\tan$; $270°$–$360°$ only $\cos$.
`,
questions: [
Q('P9.5-1', 1, R`State the period of $y = \cos x$. [[1]]`,
  [R`After how many degrees does the graph repeat?`, R`The same as $\sin x$.`],
  [R`|B1|$360°$`], R`$360°$`,
  R`$\cos(x + 360°) = \cos x$, and no smaller shift works.`),
Q('P9.5-2', 1, R`Write down the maximum value of $y = \sin x$ and the value of $x$ in $0 \le x \le 360°$ where it occurs. [[1]]`,
  [R`Look at the graph.`, R`The top of the first hump.`],
  [R`|B1|$1$ at $x = 90°$`], R`$1$ at $90°$`,
  R`$\sin 90° = 1$, the top of the first hump; no sine value is bigger than $1$.`),
Q('P9.5-3', 1, R`Write down the equations of the asymptotes of $y = \tan x$ for $0 \le x \le 360°$. [[1]]`,
  [R`$\tan x = \frac{\sin x}{\cos x}$.`, R`Where is $\cos x = 0$?`],
  [R`|B1|$x = 90°$ and $x = 270°$`], R`$x = 90°$, $x = 270°$`,
  R`$\tan x$ is undefined where $\cos x = 0$.`),
Q('P9.5-4', 2, R`Sketch $y = \cos x$ for $-180° \le x \le 180°$, giving the coordinates of the points where it meets the axes. [[2]]`,
  [R`It's symmetric about the $y$-axis.`, R`It crosses at $\pm 90°$.`],
  [R`|B1|Correct shape with maximum on the $y$-axis`, R`|B1|$(0, 1)$, $(-90°, 0)$, $(90°, 0)$`], R`$(0, 1)$, $(\pm90°, 0)$`,
  R`$\cos(-x) = \cos x$, so the graph is symmetric about the $y$-axis.`, { solFig: FIGS['P9.5-4'] }),
Q('P9.5-5', 2, R`Use the symmetry of the graph of $y = \sin x$ to write down the exact value of $\sin 150°$. [[2]]`,
  [R`$\sin(180° - x) = \sin x$.`, R`$150° = 180° - 30°$.`],
  [R`|M1|$\sin 150° = \sin 30°$`, R`|A1|$\frac12$`], R`$\frac12$`,
  R`The sine curve is symmetric about $x = 90°$.`),
Q('P9.5-6', 2, R`Find the exact value of $\cos 300°$. [[2]]`,
  [R`$300° = 360° - 60°$.`, R`$\cos$ is positive in $270°$–$360°$.`],
  [R`|M1|$\cos 300° = \cos 60°$`, R`|A1|$\frac12$`], R`$\frac12$`,
  R`$\cos(360° - 60°) = \cos 60° = \frac12$.`),
Q('P9.5-7', 2, R`Find the exact values of $\tan 225°$ and $\tan 135°$. [[2]]`,
  [R`$\tan$ has period $180°$: $\tan 225° = \tan 45°$.`, R`$135° = 180° - 45°$; $\tan$ is negative there.`],
  [R`|B1|$\tan 225° = 1$`, R`|B1|$\tan 135° = -1$`], R`$1$ and $-1$`,
  R`$\tan(180° + 45°) = \tan 45° = 1$; $\tan(180° - 45°) = -\tan 45° = -1$.`),
Q('P9.5-8', 3, R`Find the exact values of $\sin 240°$, $\cos 210°$ and $\tan 330°$. [[3]]`,
  [R`Work out the related acute angle and the sign.`, R`$240° = 180° + 60°$; $210° = 180° + 30°$; $330° = 360° - 30°$.`],
  [R`|B1|$\sin 240° = -\frac{\sqrt3}{2}$`, R`|B1|$\cos 210° = -\frac{\sqrt3}{2}$`, R`|B1|$\tan 330° = -\frac{1}{\sqrt3}$`], R`$-\frac{\sqrt3}{2}$, $-\frac{\sqrt3}{2}$, $-\frac{\sqrt3}{3}$`,
  R`$\sin$ and $\cos$ are negative in $180°$–$270°$; $\tan$ is negative in $270°$–$360°$.`),
Q('P9.5-9', 3, R`How many solutions does $\sin x = 0.3$ have for $0 \le x \le 720°$? Explain. [[2]]`,
  [R`How many in each $360°$?`, R`$720°$ is two periods.`],
  [R`|B1|Two in each period of $360°$`, R`|B1|$4$`], R`$4$`,
  R`$y = 0.3$ crosses each hump of the sine curve twice, and there are two positive humps in $0$ to $720°$.`),
Q('P9.5-10', 3, R`Find the coordinates of the points where $y = \sin x$ and $y = \cos x$ meet for $0 \le x \le 360°$. [[3]]`,
  [R`$\sin x = \cos x$ means $\tan x = 1$.`, R`$x = 45°$ or $225°$.`],
  [R`|M1|$\tan x = 1$`, R`|A1|$x = 45°$, $225°$`, R`|A1|$\left(45°, \frac{\sqrt2}{2}\right)$, $\left(225°, -\frac{\sqrt2}{2}\right)$`], R`$\left(45°, \frac{\sqrt2}{2}\right)$ and $\left(225°, -\frac{\sqrt2}{2}\right)$`,
  R`Dividing by $\cos x$ is fine here because $\sin x = \cos x = 0$ never happens together.`),
Q('P9.5-11', 3, R`Given that $\sin 40° = 0.643$ (3 s.f.), write down three other angles between $0°$ and $360°$ whose sine is $0.643$ or $-0.643$, stating which is which. [[3]]`,
  [R`$\sin(180° - x) = \sin x$.`, R`$\sin(180° + x) = \sin(360° - x) = -\sin x$.`],
  [R`|B1|$\sin 140° = 0.643$`, R`|B1|$\sin 220° = -0.643$`, R`|B1|$\sin 320° = -0.643$`], R`$140°$ ($+$), $220°$ ($-$), $320°$ ($-$)`,
  R`Use the symmetry of the sine curve about $90°$ and $270°$.`),
Q('P9.5-12', 4, R`Sketch $y = \tan x$ for $-180° \le x \le 180°$, and use it to find the values of $x$ in this range for which $\tan x = \sqrt3$. [[3]]`,
  [R`$\tan^{-1}\sqrt3 = 60°$.`, R`$\tan$ repeats every $180°$.`],
  [R`|B1|Correct sketch with asymptotes at $\pm90°$`, R`|B1|$60°$`, R`|B1|$-120°$`], R`$x = -120°$, $60°$`,
  R`$60° - 180° = -120°$.`, { solFig: FIGS['P9.5-12'] }),
Q('P9.5-13', 4, R`Solve $\cos x = -0.5$ for $0 \le x \le 360°$. [[2]]`,
  [R`$\cos^{-1}(-0.5) = 120°$.`, R`$\cos(360° - x) = \cos x$.`],
  [R`|B1|$120°$`, R`|B1|$240°$`], R`$120°$, $240°$`,
  R`$360° - 120° = 240°$.`),
Q('P9.5-14', 4, R`Explain, using the graph of $y = \sin x$, why $\sin(180° + x) = -\sin x$. Hence find $\sin 210°$ exactly. [[3]]`,
  [R`Shifting by $180°$ moves a hump to the next (negative) hump.`, R`$210° = 180° + 30°$.`],
  [R`|B1|The curve from $180°$ to $360°$ is the reflection of $0°$ to $180°$ in the $x$-axis`, R`|M1|$\sin 210° = -\sin 30°$`, R`|A1|$-\frac12$`], R`$-\frac12$`,
  R`The second half of each period is the first half turned upside down.`),
Q('P9.5-15', 5, R`**(a)** On the same axes, sketch $y = \sin x$ and $y = \cos x$ for $0 \le x \le 360°$. [[2]]

**(b)** Hence find the set of values of $x$ in this range for which $\sin x > \cos x$. [[2]]

**(c)** State the number of solutions of $\sin x = \cos x$ for $0 \le x \le 1080°$. [[2]]

**(d)** Find the values of $x$ for which $\sin x = 1$ in $-360° \le x \le 720°$. [[2]]`,
  [R`They meet at $45°$ and $225°$.`, R`Two meetings per $360°$.`],
  [R`(a)|B1|Both curves`, R`(a)|B1|Intersections at $45°$, $225°$`, R`(b)|M1|Between the intersections`, R`(b)|A1|$45° < x < 225°$`, R`(c)|M1|Two per period`, R`(c)|A1|$6$`, R`(d)|M1|$90° + 360°n$`, R`(d)|A1|$-270°$, $90°$, $450°$`],
  R`(b) $45° < x < 225°$ (c) $6$ (d) $-270°$, $90°$, $450°$`,
  R`(b) The sine curve is above the cosine curve between $45°$ and $225°$.

(c) $1080° = 3 \times 360°$: $3 \times 2 = 6$.

(d) The maxima of $\sin x$ are $360°$ apart.`, { solFig: FIGS['P9.5-15'] })
]};

CONTENT['P9.6'] = {
notes: R`
### Transformations of trig graphs
| Graph | Effect |
|---|---|
| $y = a\sin x$ | vertical stretch, scale factor $a$: range $-a$ to $a$ |
| $y = \sin x + d$ | up $d$ |
| $y = \sin(bx)$ | horizontal stretch, scale factor $\frac1b$: period $\frac{360°}{b}$ |
| $y = \sin(x + c)$ | left $c$ |

The same rules apply to $\cos$ and $\tan$ (for $\tan$, the period becomes $\frac{180°}{b}$).

::: booklet
**Not in the formula booklet:** these rules.
:::

### Worked example 1
Describe $y = 2\cos x + 1$ and find its maximum and minimum.
- Stretch $\cos x$ vertically by $2$, then move it up $1$.
- Maximum $2 + 1 = 3$ (at $x = 0°$, $360°$); minimum $-2 + 1 = -1$ (at $x = 180°$).

[[fig:P9.6-trans]]

### Worked example 2: the period trap
Sketch $y = \sin 2x$ for $0 \le x \le 360°$.
- Period $\frac{360°}{2} = 180°$, so there are **two** complete waves.

[[fig:P9.6-sin2x]]

**The trap:** thinking $\sin 2x$ stretches the graph **out** to a period of $720°$. Multiplying $x$ by $2$ makes everything happen twice as fast.

### Watch out
- $\cos(x + 90°) = -\sin x$ and $\sin(x + 90°) = \cos x$: a translation of one is the other.
- With $\sin(2x + 30°) = \sin 2(x + 15°)$, the shift is $15°$, not $30°$.
`,
questions: [
Q('P9.6-1', 1, R`State the period of $y = \sin 3x$. [[1]]`,
  [R`Period $\frac{360°}{b}$.`, R`$b = 3$.`],
  [R`|B1|$120°$`], R`$120°$`,
  R`$\frac{360°}{3} = 120°$.`),
Q('P9.6-2', 1, R`Write down the maximum and minimum values of $y = 3\sin x$. [[1]]`,
  [R`$\sin x$ is between $-1$ and $1$.`, R`Multiply by $3$.`],
  [R`|B1|$3$ and $-3$`], R`$3$ and $-3$`,
  R`A vertical stretch by $3$ triples the range.`),
Q('P9.6-3', 1, R`Describe the transformation that maps $y = \cos x$ onto $y = \cos(x - 30°)$. [[1]]`,
  [R`Inside the bracket: horizontal.`, R`$-30°$ means right.`],
  [R`|B1|Translation by $\begin{pmatrix} 30° \\ 0 \end{pmatrix}$`], R`Translation $30°$ to the right`,
  R`$f(x - 30°)$ moves the graph $30°$ to the right.`),
Q('P9.6-4', 2, R`Find the maximum and minimum values of $y = 2\sin x + 1$, and the values of $x$ in $0 \le x \le 360°$ where they occur. [[2]]`,
  [R`$\sin x$ is largest at $90°$ and smallest at $270°$.`, R`$2(1) + 1$ and $2(-1) + 1$.`],
  [R`|B1|Maximum $3$ at $90°$`, R`|B1|Minimum $-1$ at $270°$`], R`Max $3$ at $90°$; min $-1$ at $270°$`,
  R`The stretch and shift don't move the $x$-coordinates of the turning points.`),
Q('P9.6-5', 2, R`Find the values of $x$ in $0 \le x \le 360°$ where $y = \sin 2x$ crosses the $x$-axis. [[2]]`,
  [R`$\sin 2x = 0$ when $2x = 0°, 180°, 360°, \ldots$`, R`$2x$ goes up to $720°$.`],
  [R`|M1|$2x = 0°, 180°, \ldots, 720°$`, R`|A1|$x = 0°, 90°, 180°, 270°, 360°$`], R`$0°, 90°, 180°, 270°, 360°$`,
  R`Halve each multiple of $180°$ up to $720°$.`),
Q('P9.6-6', 2, R`Sketch $y = \cos(x + 90°)$ for $0 \le x \le 360°$ and write it more simply. [[2]]`,
  [R`Move $\cos x$ left $90°$.`, R`Compare with $\sin x$.`],
  [R`|B1|Starts at $0$, goes down to $-1$ at $90°$`, R`|B1|$y = -\sin x$`], R`$y = -\sin x$`,
  R`Shifting the cosine curve $90°$ left gives the sine curve reflected in the $x$-axis.`),
Q('P9.6-7', 2, R`State the period of $y = \tan\left(\frac{x}{2}\right)$ and the equation of its asymptote for $0 < x < 360°$. [[2]]`,
  [R`Period $\frac{180°}{1/2}$.`, R`Asymptote where $\frac{x}{2} = 90°$.`],
  [R`|B1|$360°$`, R`|B1|$x = 180°$`], R`Period $360°$; $x = 180°$`,
  R`Halving $x$ doubles the period of $\tan$ from $180°$ to $360°$.`),
Q('P9.6-8', 3, R`For $y = -2\cos x$, $0 \le x \le 360°$, write down the $y$-intercept and the coordinates of the maximum point. [[2]]`,
  [R`$-2\cos 0° = -2$.`, R`The maximum happens where $\cos x = -1$.`],
  [R`|B1|$(0, -2)$`, R`|B1|$(180°, 2)$`], R`$(0, -2)$; $(180°, 2)$`,
  R`Reflecting $2\cos x$ in the $x$-axis turns its minimum at $180°$ into a maximum.`),
Q('P9.6-9', 3, R`Find the coordinates of the maximum and minimum points of $y = \sin(x + 45°)$ for $0 \le x \le 360°$. [[2]]`,
  [R`Shift the max $(90°, 1)$ and min $(270°, -1)$ left $45°$.`, R`$90° - 45° = 45°$.`],
  [R`|B1|$(45°, 1)$`, R`|B1|$(225°, -1)$`], R`$(45°, 1)$, $(225°, -1)$`,
  R`$x + 45° = 90°$ gives $x = 45°$; $x + 45° = 270°$ gives $225°$.`),
Q('P9.6-10', 3, R`Sketch $y = 3\cos 2x$ for $0 \le x \le 360°$, giving the coordinates of the maximum and minimum points. [[3]]`,
  [R`Period $180°$, range $-3$ to $3$.`, R`Maxima where $2x = 0°, 360°, 720°$.`],
  [R`|B1|Two full waves`, R`|B1|Maxima $(0°, 3)$, $(180°, 3)$, $(360°, 3)$`, R`|B1|Minima $(90°, -3)$, $(270°, -3)$`], R`Max at $0°, 180°, 360°$; min at $90°, 270°$`,
  R`$\cos 2x = 1$ when $2x$ is a multiple of $360°$, and $-1$ when $2x = 180°, 540°$.`, { solFig: FIGS['P9.6-10'] }),
Q('P9.6-11', 3, R`The graph of $y = a\sin(bx)$, with $a, b > 0$, has its first maximum for $x > 0$ at $(30°, 4)$. Find $a$ and $b$. [[3]]`,
  [R`The maximum value is $a$.`, R`The first maximum of $\sin(bx)$ is where $bx = 90°$.`],
  [R`|B1|$a = 4$`, R`|M1|$30b = 90$`, R`|A1|$b = 3$`], R`$a = 4$, $b = 3$`,
  R`$\sin(bx) = 1$ first when $bx = 90°$, so $b = 3$.`),
Q('P9.6-12', 4, R`For $y = \sin(x - 60°)$, find the $y$-intercept and the points where the graph crosses the $x$-axis for $0 \le x \le 360°$. [[3]]`,
  [R`$\sin(-60°) = -\frac{\sqrt3}{2}$.`, R`$x - 60° = 0°, 180°$.`],
  [R`|B1|$\left(0, -\frac{\sqrt3}{2}\right)$`, R`|B1|$(60°, 0)$`, R`|B1|$(240°, 0)$`], R`$\left(0, -\frac{\sqrt3}{2}\right)$; $(60°, 0)$, $(240°, 0)$`,
  R`$x - 60°$ ranges from $-60°$ to $300°$; $\sin$ is zero at $0°$ and $180°$ in that range.`),
Q('P9.6-13', 4, R`The graph of $y = \cos x + k$ has maximum value $3$. Find $k$ and the minimum value. [[2]]`,
  [R`$\max = 1 + k$.`, R`$\min = -1 + k$.`],
  [R`|B1|$k = 2$`, R`|B1|Minimum $1$`], R`$k = 2$; minimum $1$`,
  R`$1 + k = 3$, so $k = 2$ and the minimum is $-1 + 2 = 1$.`),
Q('P9.6-14', 4, R`A curve has equation $y = a\sin x + c$, with $a > 0$. Its maximum value is $7$ and its minimum value is $1$. Find $a$ and $c$. [[3]]`,
  [R`$a + c = 7$ and $-a + c = 1$.`, R`$c$ is the midline, $a$ the amplitude.`],
  [R`|M1|Two equations`, R`|A1|$c = 4$`, R`|A1|$a = 3$`], R`$a = 3$, $c = 4$`,
  R`$c = \frac{7 + 1}{2} = 4$ and $a = \frac{7 - 1}{2} = 3$.`),
Q('P9.6-15', 5, R`$f(x) = 4\sin(2x + 30°)$.

**(a)** Describe a sequence of transformations that maps $y = \sin x$ onto $y = f(x)$. [[2]]

**(b)** State the period of $f$. [[1]]

**(c)** Find the coordinates of the maximum points of $y = f(x)$ for $0 \le x \le 360°$. [[2]]

**(d)** Find the $y$-intercept. [[1]]

**(e)** Find the values of $x$ in $0 \le x \le 360°$ where the curve crosses the $x$-axis. [[2]]`,
  [R`$\sin(2x + 30°) = \sin 2(x + 15°)$.`, R`Maxima where $2x + 30° = 90°, 450°$.`],
  [R`(a)|B1|Translation left $30°$, then horizontal stretch sf $\frac12$ (or stretch then left $15°$)`, R`(a)|B1|Vertical stretch sf $4$`, R`(b)|B1|$180°$`, R`(c)|M1|$2x + 30° = 90°$, $450°$`, R`(c)|A1|$(30°, 4)$, $(210°, 4)$`, R`(d)|B1|$(0, 2)$`, R`(e)|M1|$2x + 30° = 180°, 360°, 540°, 720°$`, R`(e)|A1|$75°$, $165°$, $255°$, $345°$`],
  R`(b) $180°$ (c) $(30°, 4)$, $(210°, 4)$ (d) $(0, 2)$ (e) $75°, 165°, 255°, 345°$`,
  R`(a) Order matters: translate $30°$ left first, then stretch by $\frac12$; or stretch first, then translate only $15°$ left. Then stretch vertically by $4$.

(d) $4\sin 30° = 2$.

(e) $2x + 30°$ runs from $30°$ to $750°$; the multiples of $180°$ in that range are $180°, 360°, 540°, 720°$.`, { solFig: FIGS['P9.6-15'] })
]};
