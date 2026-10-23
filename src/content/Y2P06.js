/* Pure Mathematics Year 2 · Chapter 6 Trigonometric functions (sections 6.1 to 6.5) */
BOOK_CHAPTERS.push({ id:'Y2P06', book:'Pure Mathematics Year 2', label:'Chapter 6', title:'Trigonometric functions', sections:[
  { id:'2P6.1', num:'6.1', title:'Secant, cosecant and cotangent' },
  { id:'2P6.2', num:'6.2', title:'Graphs of sec x, cosec x and cot x' },
  { id:'2P6.3', num:'6.3', title:'Using sec x, cosec x and cot x' },
  { id:'2P6.4', num:'6.4', title:'Trigonometric identities' },
  { id:'2P6.5', num:'6.5', title:'Inverse trigonometric functions' }
]});
const TD2R = Math.PI / 180;
const tsec = x => 1 / Math.cos(x * TD2R), tcosec = x => 1 / Math.sin(x * TD2R), tcot = x => Math.cos(x * TD2R) / Math.sin(x * TD2R);
// Trig graph in degrees from 0 to 360 with ticks every 90.
const Y2trig = (label, fns, { y0 = -4, y1 = 4, x0 = 0, x1 = 360, vlines = [], hlines = [], points = [] } = {}) => Fig.graph({ label, x0, x1, y0, y1, vlines, hlines, points,
  xticks: [90, 180, 270, 360].filter(v => v > x0 && v <= x1).map(v => [v, v + '°']), yticks: [-3, -2, -1, 1, 2, 3].filter(v => v > y0 && v < y1).map(v => [v, String(v)]),
  fns: fns.map(([f, lab, extra], i) => Object.assign({ f, label: lab || '', col: i ? 'var(--muted)' : 'var(--accent)', dash: !!i }, extra || {})) });
const tasym = xs => xs.map(x => ({ x, dash: true, col: 'var(--pen)' }));
FIGS['2P6.2-sec'] = Y2trig('y = sec x for 0 to 360 degrees, with y = cos x dashed: asymptotes at 90 and 270 degrees, turning points (0, 1), (180, −1) and (360, 1)', [[tsec, 'y = sec x', { lx: 75, ly: 3.5 }], [x => Math.cos(x * TD2R), 'y = cos x']], { vlines: tasym([90, 270]) });
FIGS['2P6.2-cosec'] = Y2trig('y = cosec x for 0 to 360 degrees, with y = sin x dashed: asymptotes at 0, 180 and 360 degrees, turning points (90, 1) and (270, −1)', [[tcosec, 'y = cosec x', { lx: 160, ly: 3.5 }], [x => Math.sin(x * TD2R), 'y = sin x']], { vlines: tasym([180]) });
FIGS['2P6.2-cot'] = Y2trig('y = cot x for 0 to 360 degrees: asymptotes at 0, 180 and 360 degrees, crossing the x-axis at 90 and 270 degrees', [[tcot, 'y = cot x', { lx: 170, ly: 3.5 }]], { vlines: tasym([180]) });
FIGS['2P6.5-arcsin'] = Fig.graph({ label: 'y = arcsin x for −1 ≤ x ≤ 1, from (−1, −π/2) to (1, π/2), with y = sin x on −π/2 to π/2 dashed', x0: -2, x1: 2, y0: -2, y1: 2, equal: true,
  xticks: [[-1, '−1'], [1, '1']], yticks: [[-Math.PI / 2, '−π/2'], [Math.PI / 2, 'π/2']],
  fns: [{ f: x => (Math.abs(x) <= 1 ? Math.asin(x) : NaN), label: 'y = arcsin x', lx: 1.9, ly: 1.2 }, { f: x => (Math.abs(x) <= Math.PI / 2 ? Math.sin(x) : NaN), col: 'var(--muted)', dash: true }, { f: x => x, col: 'var(--muted)', dash: true }],
  points: [{ x: -1, y: -Math.PI / 2 }, { x: 1, y: Math.PI / 2 }] });

CONTENT['2P6.1'] = {
notes: R`
### Three reciprocal functions
$$\sec x = \frac{1}{\cos x} \qquad \operatorname{cosec} x = \frac{1}{\sin x} \qquad \cot x = \frac{1}{\tan x} = \frac{\cos x}{\sin x}$$
Each is undefined where its denominator is $0$.

Exact values come from the exact values of $\sin$, $\cos$ and $\tan$. Use the CAST diagram to get the sign.

::: booklet
**Learn these:** the three definitions. A trick to remember which goes with which: the **third** letter of $\sec$, $\operatorname{cosec}$, $\cot$ is the initial of the function it's the reciprocal of ($\sec \to \cos$, $\operatorname{cosec} \to \sin$, $\cot \to \tan$).
:::

### Worked example 1
Find the exact value of $\sec 135^\circ$.
- $\cos 135^\circ = -\cos 45^\circ = -\frac{1}{\sqrt2}$.
- $\sec 135^\circ = -\sqrt2$.

### Worked example 2: reciprocal, not inverse
Find $\operatorname{cosec} 30^\circ$.
- $\sin 30^\circ = \frac12$, so $\operatorname{cosec} 30^\circ = 2$.

**The trap:** pressing $\sin^{-1}$ on the calculator. $\sin^{-1}$ is the inverse function (giving an angle); $\operatorname{cosec}$ is $\frac{1}{\sin}$.

### Watch out
- $\cot 90^\circ = 0$ even though $\tan 90^\circ$ is undefined, because $\cot x = \frac{\cos x}{\sin x}$.
`,
questions: [
Q('2P6.1-1', 1, R`Find the exact value of $\sec 60^\circ$. [[1]]`,
  [R`$\cos 60^\circ = \frac12$.`, R`Take the reciprocal.`],
  [R`|B1|$2$`], R`$2$`,
  R`$\sec 60^\circ = \frac{1}{\cos 60^\circ} = \frac{1}{1/2} = 2$.`),
Q('2P6.1-2', 1, R`Find the exact value of $\operatorname{cosec} 30^\circ$. [[1]]`,
  [R`$\sin 30^\circ = \frac12$.`, R`Reciprocal.`],
  [R`|B1|$2$`], R`$2$`,
  R`$\operatorname{cosec} 30^\circ = \frac{1}{\sin 30^\circ} = 2$.`),
Q('2P6.1-3', 1, R`Find the exact value of $\cot 45^\circ$. [[1]]`,
  [R`$\tan 45^\circ = 1$.`, R`Reciprocal.`],
  [R`|B1|$1$`], R`$1$`,
  R`$\cot 45^\circ = \frac{1}{\tan 45^\circ} = 1$.`),
Q('2P6.1-4', 2, R`Find the exact value of $\sec 135^\circ$. [[2]]`,
  [R`$\cos 135^\circ = -\cos 45^\circ$.`, R`Reciprocal.`],
  [R`|M1|$\cos 135^\circ = -\frac{1}{\sqrt2}$`, R`|A1|$-\sqrt2$`], R`$-\sqrt2$`,
  R`$\cos 135^\circ = -\frac{\sqrt2}{2}$, so $\sec 135^\circ = -\frac{2}{\sqrt2} = -\sqrt2$.`),
Q('2P6.1-5', 2, R`Find the exact value of $\operatorname{cosec} 240^\circ$. [[2]]`,
  [R`$\sin 240^\circ = -\sin 60^\circ$.`, R`Rationalise.`],
  [R`|M1|$\sin 240^\circ = -\frac{\sqrt3}{2}$`, R`|A1|$-\frac{2}{\sqrt3} = -\frac{2\sqrt3}{3}$`], R`$-\frac{2\sqrt3}{3}$`,
  R`$\sin 240^\circ = -\frac{\sqrt3}{2}$, so $\operatorname{cosec} 240^\circ = -\frac{2}{\sqrt3} = -\frac{2\sqrt3}{3}$.`),
Q('2P6.1-6', 2, R`Find the exact value of $\cot 300^\circ$. [[2]]`,
  [R`$\tan 300^\circ = -\tan 60^\circ$.`, R`Reciprocal.`],
  [R`|M1|$\tan 300^\circ = -\sqrt3$`, R`|A1|$-\frac{1}{\sqrt3} = -\frac{\sqrt3}{3}$`], R`$-\frac{\sqrt3}{3}$`,
  R`$\tan 300^\circ = -\sqrt3$, so $\cot 300^\circ = -\frac{1}{\sqrt3} = -\frac{\sqrt3}{3}$.`),
Q('2P6.1-7', 2, R`Find the exact value of $\sec \frac{\pi}{6}$. [[1]]`,
  [R`$\cos \frac{\pi}{6} = \frac{\sqrt3}{2}$.`, R`Reciprocal, then rationalise.`],
  [R`|B1|$\frac{2}{\sqrt3} = \frac{2\sqrt3}{3}$`], R`$\frac{2\sqrt3}{3}$`,
  R`$\sec\frac\pi6 = \frac{2}{\sqrt3} = \frac{2\sqrt3}{3}$.`),
Q('2P6.1-8', 3, R`Use your calculator to find $\sec 50^\circ$ to $3$ decimal places. [[1]]`,
  [R`$\frac{1}{\cos 50^\circ}$.`, R`Degree mode.`],
  [R`|B1|$1.556$`], R`$1.556$`,
  R`$\frac{1}{\cos 50^\circ} = \frac{1}{0.6428} = 1.556$.`),
Q('2P6.1-9', 3, R`Simplify **(a)** $\sin\theta\cot\theta$ **(b)** $\cos\theta\operatorname{cosec}\theta$. [[2]]`,
  [R`$\cot\theta = \frac{\cos\theta}{\sin\theta}$.`, R`$\operatorname{cosec}\theta = \frac{1}{\sin\theta}$.`],
  [R`(a)|B1|$\cos\theta$`, R`(b)|B1|$\cot\theta$`], R`(a) $\cos\theta$ (b) $\cot\theta$`,
  R`**(a)** $\sin\theta \times \frac{\cos\theta}{\sin\theta} = \cos\theta$.
**(b)** $\cos\theta \times \frac{1}{\sin\theta} = \cot\theta$.`),
Q('2P6.1-10', 3, R`Show that $\sec\theta - \cos\theta = \sin\theta\tan\theta$. [[3]]`,
  [R`Write $\sec\theta = \frac{1}{\cos\theta}$.`, R`Use $1 - \cos^2\theta = \sin^2\theta$.`],
  [R`|M1|$\frac{1}{\cos\theta} - \cos\theta = \frac{1 - \cos^2\theta}{\cos\theta}$`, R`|M1|$= \frac{\sin^2\theta}{\cos\theta}$`, R`|A1|$= \sin\theta\tan\theta$`], R`Shown`,
  R`$\sec\theta - \cos\theta = \frac{1 - \cos^2\theta}{\cos\theta} = \frac{\sin^2\theta}{\cos\theta} = \sin\theta \cdot \frac{\sin\theta}{\cos\theta} = \sin\theta\tan\theta$.`),
Q('2P6.1-11', 3, R`Given that $\sin x = \frac35$ and $x$ is obtuse, find the exact values of $\operatorname{cosec} x$, $\sec x$ and $\cot x$. [[3]]`,
  [R`$\cos x = -\frac45$ since $x$ is obtuse.`, R`Take reciprocals.`],
  [R`|B1|$\operatorname{cosec} x = \frac53$`, R`|B1|$\sec x = -\frac54$`, R`|B1|$\cot x = -\frac43$`], R`$\frac53$, $-\frac54$, $-\frac43$`,
  R`$\cos x = -\sqrt{1 - \frac{9}{25}} = -\frac45$ (obtuse). So $\operatorname{cosec} x = \frac53$, $\sec x = -\frac54$ and $\cot x = \frac{\cos x}{\sin x} = -\frac43$.`),
Q('2P6.1-12', 4, R`Find the exact value of $\sec \frac{7\pi}{6}$. [[2]]`,
  [R`$\frac{7\pi}{6}$ is in the third quadrant.`, R`$\cos\frac{7\pi}{6} = -\frac{\sqrt3}{2}$.`],
  [R`|M1|$\cos\frac{7\pi}{6} = -\frac{\sqrt3}{2}$`, R`|A1|$-\frac{2\sqrt3}{3}$`], R`$-\frac{2\sqrt3}{3}$`,
  R`$\cos\frac{7\pi}{6} = -\cos\frac\pi6 = -\frac{\sqrt3}{2}$, so $\sec\frac{7\pi}{6} = -\frac{2}{\sqrt3} = -\frac{2\sqrt3}{3}$.`),
Q('2P6.1-13', 4, R`Simplify $(1 - \cos^2\theta)\operatorname{cosec}\theta$. [[2]]`,
  [R`$1 - \cos^2\theta = \sin^2\theta$.`, R`Then divide by $\sin\theta$.`],
  [R`|M1|$\sin^2\theta \times \frac{1}{\sin\theta}$`, R`|A1|$\sin\theta$`], R`$\sin\theta$`,
  R`$(1 - \cos^2\theta)\operatorname{cosec}\theta = \frac{\sin^2\theta}{\sin\theta} = \sin\theta$.`),
Q('2P6.1-14', 4, R`Show that $\dfrac{\operatorname{cosec}\theta}{\sec\theta} = \cot\theta$. [[2]]`,
  [R`Write both in terms of $\sin$ and $\cos$.`, R`Divide.`],
  [R`|M1|$\frac{1/\sin\theta}{1/\cos\theta}$`, R`|A1|$= \frac{\cos\theta}{\sin\theta} = \cot\theta$`], R`Shown`,
  R`$\frac{1/\sin\theta}{1/\cos\theta} = \frac{\cos\theta}{\sin\theta} = \cot\theta$.`),
Q('2P6.1-15', 5, R`Given that $\tan\theta = -\sqrt3$ and $90^\circ < \theta < 180^\circ$, find $\theta$ and the exact values of $\sec\theta$, $\operatorname{cosec}\theta$ and $\cot\theta$. [[4]]`,
  [R`$\theta = 180^\circ - 60^\circ$.`, R`$\cos 120^\circ = -\frac12$, $\sin 120^\circ = \frac{\sqrt3}{2}$.`],
  [R`|B1|$\theta = 120^\circ$`, R`|B1|$\sec\theta = -2$`, R`|B1|$\operatorname{cosec}\theta = \frac{2\sqrt3}{3}$`, R`|B1|$\cot\theta = -\frac{\sqrt3}{3}$`], R`$120^\circ$; $-2$, $\frac{2\sqrt3}{3}$, $-\frac{\sqrt3}{3}$`,
  R`$\theta = 120^\circ$. $\sec 120^\circ = -2$, $\operatorname{cosec} 120^\circ = \frac{2}{\sqrt3} = \frac{2\sqrt3}{3}$, $\cot 120^\circ = -\frac{1}{\sqrt3} = -\frac{\sqrt3}{3}$.`)
]};

CONTENT['2P6.2'] = {
notes: R`
### The three graphs
- **$y = \sec x$:** period $360^\circ$, symmetrical about the $y$-axis, asymptotes where $\cos x = 0$ ($x = 90^\circ, 270^\circ, \dots$). Range $y \le -1$ or $y \ge 1$.
- **$y = \operatorname{cosec} x$:** period $360^\circ$, asymptotes where $\sin x = 0$ ($x = 0^\circ, 180^\circ, \dots$). Range $y \le -1$ or $y \ge 1$.
- **$y = \cot x$:** period $180^\circ$, asymptotes at $x = 0^\circ, 180^\circ, \dots$, crossing the $x$-axis at $90^\circ, 270^\circ$. Range all real numbers.

[[fig:2P6.2-sec]]

[[fig:2P6.2-cosec]]

[[fig:2P6.2-cot]]

::: booklet
**Learn these sketches.** Where $\cos x$ (or $\sin x$) has a maximum of $1$, the reciprocal has a minimum of $1$, and vice versa.
:::

### Worked example 1
How many solutions does $\sec x = 2$ have for $0^\circ \le x \le 360^\circ$?
- The line $y = 2$ cuts the graph of $y = \sec x$ twice (once in each upward branch), so $2$ solutions.

### Worked example 2: transformed graphs
Find the asymptotes of $y = \sec 2x$ for $0^\circ \le x \le 360^\circ$.
- $\cos 2x = 0$ when $2x = 90^\circ, 270^\circ, 450^\circ, 630^\circ$, so $x = 45^\circ, 135^\circ, 225^\circ, 315^\circ$.

**The trap:** keeping the asymptotes at $90^\circ$ and $270^\circ$. A horizontal stretch moves them too.

### Watch out
- Draw asymptotes as dashed lines and label the turning points.
`,
questions: [
Q('2P6.2-1', 1, R`State the range of $y = \sec x$. [[1]]`,
  [R`$|\cos x| \le 1$.`, R`So $|\sec x| \ge 1$.`],
  [R`|B1|$y \le -1$ or $y \ge 1$`], R`$y \le -1$ or $y \ge 1$`,
  R`Since $-1 \le \cos x \le 1$, its reciprocal satisfies $\sec x \le -1$ or $\sec x \ge 1$.`, { fig: FIGS['2P6.2-sec'] }),
Q('2P6.2-2', 1, R`State the equations of the asymptotes of $y = \operatorname{cosec} x$ for $0^\circ \le x \le 360^\circ$. [[1]]`,
  [R`Where is $\sin x = 0$?`, R`Three values.`],
  [R`|B1|$x = 0^\circ$, $x = 180^\circ$, $x = 360^\circ$`], R`$x = 0^\circ, 180^\circ, 360^\circ$`,
  R`$\operatorname{cosec} x$ is undefined where $\sin x = 0$: at $x = 0^\circ$, $180^\circ$ and $360^\circ$.`, { fig: FIGS['2P6.2-cosec'] }),
Q('2P6.2-3', 1, R`State the period of $y = \cot x$. [[1]]`,
  [R`Same as $\tan x$.`, R`$180^\circ$.`],
  [R`|B1|$180^\circ$`], R`$180^\circ$`,
  R`$\cot x = \frac{1}{\tan x}$ repeats every $180^\circ$ (or $\pi$ radians).`, { fig: FIGS['2P6.2-cot'] }),
Q('2P6.2-4', 2, R`Sketch $y = \sec x$ for $0^\circ \le x \le 360^\circ$, showing the asymptotes and turning points. [[2]]`,
  [R`Start from $y = \cos x$.`, R`Asymptotes where $\cos x = 0$.`],
  [R`|B1|Asymptotes $x = 90^\circ$ and $x = 270^\circ$`, R`|B1|Turning points $(0, 1)$, $(180^\circ, -1)$, $(360^\circ, 1)$`], R`See sketch`,
  R`The graph has asymptotes at $x = 90^\circ$ and $270^\circ$, minimum points $(0, 1)$ and $(360^\circ, 1)$, and a maximum point $(180^\circ, -1)$.`, { solFig: FIGS['2P6.2-sec'] }),
Q('2P6.2-5', 2, R`Sketch $y = \cot x$ for $0^\circ < x < 360^\circ$, stating where it crosses the $x$-axis. [[2]]`,
  [R`$\cot x = 0$ when $\cos x = 0$.`, R`Asymptotes at $0^\circ, 180^\circ, 360^\circ$.`],
  [R`|B1|Correct shape with asymptotes $x = 0^\circ, 180^\circ, 360^\circ$`, R`|B1|Crosses at $90^\circ$ and $270^\circ$`], R`$x = 90^\circ$ and $270^\circ$`,
  R`$\cot x = \frac{\cos x}{\sin x}$ is zero where $\cos x = 0$: $90^\circ$ and $270^\circ$. It decreases between each pair of asymptotes.`, { solFig: FIGS['2P6.2-cot'] }),
Q('2P6.2-6', 2, R`How many solutions does $\sec x = 2$ have for $0^\circ \le x \le 360^\circ$? [[1]]`,
  [R`Draw $y = 2$ on the sketch.`, R`Two upward branches.`],
  [R`|B1|$2$`], R`$2$`,
  R`The line $y = 2$ meets $y = \sec x$ twice, at $60^\circ$ and $300^\circ$.`, { fig: FIGS['2P6.2-sec'] }),
Q('2P6.2-7', 2, R`Find the minimum value of $y = 3\operatorname{cosec} x$ for $0^\circ < x < 180^\circ$, and where it occurs. [[2]]`,
  [R`$\operatorname{cosec} x$ is smallest where $\sin x$ is largest.`, R`$\sin 90^\circ = 1$.`],
  [R`|B1|Minimum $3$`, R`|B1|At $x = 90^\circ$`], R`$3$ at $x = 90^\circ$`,
  R`For $0^\circ < x < 180^\circ$, $\sin x \le 1$, so $\operatorname{cosec} x \ge 1$ with equality at $90^\circ$. The minimum of $3\operatorname{cosec} x$ is $3$ at $x = 90^\circ$.`),
Q('2P6.2-8', 3, R`Sketch $y = 2 + \sec x$ for $0^\circ \le x \le 360^\circ$, and state its range. [[2]]`,
  [R`Translate $y = \sec x$ up by $2$.`, R`$\sec x \le -1$ or $\ge 1$.`],
  [R`|B1|Sketch translated up $2$`, R`|B1|$y \le 1$ or $y \ge 3$`], R`$y \le 1$ or $y \ge 3$`,
  R`The graph of $y = \sec x$ moves up $2$, so the range becomes $y \le 1$ or $y \ge 3$.`,
  { solFig: Y2trig('y = 2 + sec x: minimum points at (0, 3) and (360, 3), maximum at (180, 1)', [[x => 2 + tsec(x), 'y = 2 + sec x', { lx: 80, ly: 5.5 }]], { y0: -2, y1: 6, vlines: tasym([90, 270]) }) }),
Q('2P6.2-9', 3, R`State the equations of the asymptotes of $y = \operatorname{cosec}(x - 30^\circ)$ for $0^\circ \le x \le 360^\circ$. [[2]]`,
  [R`$\sin(x - 30^\circ) = 0$.`, R`$x - 30^\circ = 0^\circ$ or $180^\circ$.`],
  [R`|M1|$x - 30^\circ = 0^\circ, 180^\circ$`, R`|A1|$x = 30^\circ$ and $x = 210^\circ$`], R`$x = 30^\circ, 210^\circ$`,
  R`$\sin(x - 30^\circ) = 0$ when $x - 30^\circ = 0^\circ$ or $180^\circ$, so $x = 30^\circ$ and $x = 210^\circ$ (in the range).`),
Q('2P6.2-10', 3, R`For $y = \sec 2x$, $0^\circ \le x \le 360^\circ$, state the period and the equations of the asymptotes. [[3]]`,
  [R`Period halves.`, R`$\cos 2x = 0$.`],
  [R`|B1|Period $180^\circ$`, R`|M1|$2x = 90^\circ, 270^\circ, 450^\circ, 630^\circ$`, R`|A1|$x = 45^\circ, 135^\circ, 225^\circ, 315^\circ$`], R`$180^\circ$; $x = 45^\circ, 135^\circ, 225^\circ, 315^\circ$`,
  R`Period $\frac{360^\circ}{2} = 180^\circ$. $\cos 2x = 0$ gives $x = 45^\circ, 135^\circ, 225^\circ, 315^\circ$.`,
  { solFig: Y2trig('y = sec 2x with asymptotes at 45, 135, 225 and 315 degrees', [[x => tsec(2 * x), 'y = sec 2x', { lx: 40, ly: 3.5 }]], { vlines: tasym([45, 135, 225, 315]) }) }),
Q('2P6.2-11', 3, R`State the number of solutions of $\operatorname{cosec} x = k$ for $0^\circ < x < 360^\circ$, where $k > 1$. [[1]]`,
  [R`Draw a horizontal line above $y = 1$.`, R`It hits the upper branch.`],
  [R`|B1|$2$`], R`$2$`,
  R`The line $y = k$ with $k > 1$ meets the branch between $0^\circ$ and $180^\circ$ twice.`, { fig: FIGS['2P6.2-cosec'] }),
Q('2P6.2-12', 4, R`The graph of $y = a\sec x + b$ has a minimum point at $(0, 5)$ and passes through $(60^\circ, 8)$. Find $a$ and $b$. [[3]]`,
  [R`At $x = 0$, $\sec x = 1$.`, R`At $60^\circ$, $\sec x = 2$.`],
  [R`|M1|$a + b = 5$`, R`|M1|$2a + b = 8$`, R`|A1|$a = 3$, $b = 2$`], R`$a = 3$, $b = 2$`,
  R`$a + b = 5$ and $2a + b = 8$, so $a = 3$ and $b = 2$.`),
Q('2P6.2-13', 4, R`Find the $x$-coordinates where $y = \operatorname{cosec} x$ meets $y = 2$ for $0^\circ < x < 360^\circ$. [[2]]`,
  [R`$\sin x = \frac12$.`, R`Two values in the first two quadrants.`],
  [R`|M1|$\sin x = \frac12$`, R`|A1|$x = 30^\circ$ and $150^\circ$`], R`$30^\circ$, $150^\circ$`,
  R`$\operatorname{cosec} x = 2$ means $\sin x = \frac12$, so $x = 30^\circ$ or $150^\circ$.`,
  { fig: Y2trig('y = cosec x and the line y = 2', [[tcosec, 'y = cosec x', { lx: 160, ly: 3.5 }], [x => 2, 'y = 2', { col: 'var(--pen)', dash: false }]], { vlines: tasym([180]) }) }),
Q('2P6.2-14', 4, R`Find the range of $y = 1 - 2\sec x$. [[3]]`,
  [R`$\sec x \ge 1$ or $\sec x \le -1$.`, R`Multiplying by $-2$ reverses each inequality.`],
  [R`|M1|$\sec x \ge 1 \Rightarrow y \le -1$`, R`|M1|$\sec x \le -1 \Rightarrow y \ge 3$`, R`|A1|$y \le -1$ or $y \ge 3$`], R`$y \le -1$ or $y \ge 3$`,
  R`If $\sec x \ge 1$, $y = 1 - 2\sec x \le -1$. If $\sec x \le -1$, $y \ge 3$. So $y \le -1$ or $y \ge 3$.`),
Q('2P6.2-15', 5, R`$f(x) = 2\operatorname{cosec}(x + 30^\circ) - 1$ for $0^\circ \le x \le 360^\circ$. **(a)** State the equations of the asymptotes. **(b)** Find the coordinates of the turning points. **(c)** Sketch $y = f(x)$. [[6]]`,
  [R`$\sin(x + 30^\circ) = 0$ for the asymptotes.`, R`Turning points where $\sin(x + 30^\circ) = \pm1$.`],
  [R`(a)|M1|$x + 30^\circ = 180^\circ, 360^\circ$`, R`(a)|A1|$x = 150^\circ$ and $x = 330^\circ$`, R`(b)|M1|$x + 30^\circ = 90^\circ$ gives $(60^\circ, 1)$`, R`(b)|A1|Minimum $(60^\circ, 1)$`, R`(b)|A1|Maximum $(240^\circ, -3)$`, R`(c)|B1|Correct sketch`], R`(a) $x = 150^\circ, 330^\circ$ (b) $(60^\circ, 1)$, $(240^\circ, -3)$`,
  R`**(a)** $x + 30^\circ = 180^\circ$ or $360^\circ$: $x = 150^\circ$ and $330^\circ$.
**(b)** $\sin(x + 30^\circ) = 1$ at $x = 60^\circ$: $y = 2 - 1 = 1$, a minimum. $\sin(x + 30^\circ) = -1$ at $x = 240^\circ$: $y = -2 - 1 = -3$, a maximum.`,
  { solFig: Y2trig('y = 2 cosec(x + 30) − 1: asymptotes at 150 and 330 degrees, minimum (60, 1), maximum (240, −3)', [[x => 2 * tcosec(x + 30) - 1, 'y = f(x)', { lx: 140, ly: 5.5 }]], { y0: -7, y1: 6, vlines: tasym([150, 330]), points: [{ x: 60, y: 1, label: '(60°, 1)', dy: 14 }, { x: 240, y: -3, label: '(240°, −3)', dy: -14 }] }) })
]};

CONTENT['2P6.3'] = {
notes: R`
### Solving equations
Turn the equation into one about $\sin$, $\cos$ or $\tan$, then solve as usual:
- $\sec x = k \iff \cos x = \frac1k$
- $\operatorname{cosec} x = k \iff \sin x = \frac1k$
- $\cot x = k \iff \tan x = \frac1k$

Never divide by a trig function that could be zero: **factorise** instead, or you'll lose solutions.

::: booklet
**Learn this:** convert to $\sin$, $\cos$ or $\tan$ first, find every solution in the interval, and adjust for transformed angles such as $2x$ or $x + 20^\circ$.
:::

### Worked example 1
Solve $\sec x = -1.5$ for $0^\circ \le x \le 360^\circ$.
- $\cos x = -\frac23$, so $x = 131.8^\circ$ or $360^\circ - 131.8^\circ = 228.2^\circ$.

### Worked example 2: don't divide
Solve $\cot x = 2\cos x$ for $0^\circ < x < 360^\circ$.
- $\frac{\cos x}{\sin x} = 2\cos x$, so $\cos x = 2\sin x\cos x$ and $\cos x(1 - 2\sin x) = 0$.
- $\cos x = 0$: $x = 90^\circ, 270^\circ$. $\sin x = \frac12$: $x = 30^\circ, 150^\circ$.

**The trap:** dividing both sides by $\cos x$, which throws away $90^\circ$ and $270^\circ$.

### Watch out
- $\sec x$ and $\operatorname{cosec} x$ can never be between $-1$ and $1$, so equations like $\sec x = \frac12$ have no solutions.
`,
questions: [
Q('2P6.3-1', 1, R`Solve $\sec x = 2$ for $0^\circ \le x \le 360^\circ$. [[2]]`,
  [R`$\cos x = \frac12$.`, R`Two solutions.`],
  [R`|M1|$\cos x = \frac12$`, R`|A1|$x = 60^\circ$, $300^\circ$`], R`$60^\circ$, $300^\circ$`,
  R`$\cos x = \frac12$ gives $x = 60^\circ$ and $360^\circ - 60^\circ = 300^\circ$.`),
Q('2P6.3-2', 1, R`Solve $\operatorname{cosec} x = 2$ for $0^\circ \le x \le 360^\circ$. [[2]]`,
  [R`$\sin x = \frac12$.`, R`First and second quadrants.`],
  [R`|M1|$\sin x = \frac12$`, R`|A1|$x = 30^\circ$, $150^\circ$`], R`$30^\circ$, $150^\circ$`,
  R`$\sin x = \frac12$ gives $x = 30^\circ$ and $150^\circ$.`),
Q('2P6.3-3', 1, R`Solve $\cot x = 1$ for $0^\circ \le x \le 360^\circ$. [[2]]`,
  [R`$\tan x = 1$.`, R`Add $180^\circ$.`],
  [R`|M1|$\tan x = 1$`, R`|A1|$x = 45^\circ$, $225^\circ$`], R`$45^\circ$, $225^\circ$`,
  R`$\tan x = 1$ gives $x = 45^\circ$ and $225^\circ$.`),
Q('2P6.3-4', 2, R`Solve $\sec x = -1.5$ for $0^\circ \le x \le 360^\circ$, giving answers to $1$ decimal place. [[3]]`,
  [R`$\cos x = -\frac23$.`, R`Second and third quadrants.`],
  [R`|M1|$\cos x = -\frac23$`, R`|A1|$131.8^\circ$`, R`|A1|$228.2^\circ$`], R`$131.8^\circ$, $228.2^\circ$`,
  R`$\cos^{-1}\left(-\frac23\right) = 131.8^\circ$; the other solution is $360^\circ - 131.8^\circ = 228.2^\circ$.`),
Q('2P6.3-5', 2, R`Solve $\cot x = -\sqrt3$ for $0^\circ \le x \le 360^\circ$. [[2]]`,
  [R`$\tan x = -\frac{1}{\sqrt3}$.`, R`Second and fourth quadrants.`],
  [R`|M1|$\tan x = -\frac{1}{\sqrt3}$`, R`|A1|$x = 150^\circ$, $330^\circ$`], R`$150^\circ$, $330^\circ$`,
  R`$\tan x = -\frac{1}{\sqrt3}$ gives $x = 150^\circ$ and $330^\circ$.`),
Q('2P6.3-6', 2, R`Solve $\operatorname{cosec} 2x = 2$ for $0^\circ \le x \le 180^\circ$. [[3]]`,
  [R`$\sin 2x = \frac12$ with $0^\circ \le 2x \le 360^\circ$.`, R`Then halve.`],
  [R`|M1|$\sin 2x = \frac12$`, R`|M1|$2x = 30^\circ, 150^\circ$`, R`|A1|$x = 15^\circ$, $75^\circ$`], R`$15^\circ$, $75^\circ$`,
  R`$\sin 2x = \frac12$, $0^\circ \le 2x \le 360^\circ$: $2x = 30^\circ, 150^\circ$, so $x = 15^\circ, 75^\circ$.`),
Q('2P6.3-7', 2, R`Simplify $\cot\theta\sec\theta$. [[2]]`,
  [R`$\frac{\cos\theta}{\sin\theta} \times \frac{1}{\cos\theta}$.`, R`Cancel.`],
  [R`|M1|$\frac{\cos\theta}{\sin\theta} \times \frac{1}{\cos\theta}$`, R`|A1|$\operatorname{cosec}\theta$`], R`$\operatorname{cosec}\theta$`,
  R`$\cot\theta\sec\theta = \frac{\cos\theta}{\sin\theta}\cdot\frac{1}{\cos\theta} = \frac{1}{\sin\theta} = \operatorname{cosec}\theta$.`),
Q('2P6.3-8', 3, R`Solve $\operatorname{cosec} x = 3\sin x$ for $0^\circ \le x \le 360^\circ$, giving answers to $1$ decimal place. [[4]]`,
  [R`$\frac{1}{\sin x} = 3\sin x$.`, R`$\sin^2 x = \frac13$.`],
  [R`|M1|$\sin^2 x = \frac13$`, R`|M1|$\sin x = \pm0.577$`, R`|A1|$35.3^\circ$, $144.7^\circ$`, R`|A1|$215.3^\circ$, $324.7^\circ$`], R`$35.3^\circ, 144.7^\circ, 215.3^\circ, 324.7^\circ$`,
  R`$\sin^2 x = \frac13$, so $\sin x = \pm\frac{1}{\sqrt3}$. $\sin^{-1}(0.577) = 35.3^\circ$, giving $35.3^\circ, 144.7^\circ, 215.3^\circ, 324.7^\circ$.`),
Q('2P6.3-9', 3, R`Solve $\sec(x + 20^\circ) = 2$ for $0^\circ \le x \le 360^\circ$. [[3]]`,
  [R`$\cos(x + 20^\circ) = \frac12$, with $20^\circ \le x + 20^\circ \le 380^\circ$.`, R`$x + 20^\circ = 60^\circ$ or $300^\circ$.`],
  [R`|M1|$\cos(x + 20^\circ) = \frac12$`, R`|M1|$x + 20^\circ = 60^\circ, 300^\circ$`, R`|A1|$x = 40^\circ$, $280^\circ$`], R`$40^\circ$, $280^\circ$`,
  R`$x + 20^\circ = 60^\circ$ or $300^\circ$ (both in the shifted range), so $x = 40^\circ$ or $280^\circ$.`),
Q('2P6.3-10', 3, R`Show that $\operatorname{cosec}\theta - \sin\theta = \cos\theta\cot\theta$. [[3]]`,
  [R`$\frac{1}{\sin\theta} - \sin\theta = \frac{1 - \sin^2\theta}{\sin\theta}$.`, R`$1 - \sin^2\theta = \cos^2\theta$.`],
  [R`|M1|$\frac{1 - \sin^2\theta}{\sin\theta}$`, R`|M1|$\frac{\cos^2\theta}{\sin\theta}$`, R`|A1|$= \cos\theta\cot\theta$`], R`Shown`,
  R`$\operatorname{cosec}\theta - \sin\theta = \frac{1 - \sin^2\theta}{\sin\theta} = \frac{\cos^2\theta}{\sin\theta} = \cos\theta \cdot \frac{\cos\theta}{\sin\theta} = \cos\theta\cot\theta$.`),
Q('2P6.3-11', 3, R`Solve $\cot x = 2\cos x$ for $0^\circ < x < 360^\circ$. [[4]]`,
  [R`Multiply by $\sin x$ and factorise.`, R`$\cos x(1 - 2\sin x) = 0$.`],
  [R`|M1|$\cos x = 2\sin x\cos x$`, R`|M1|$\cos x(1 - 2\sin x) = 0$`, R`|A1|$90^\circ$, $270^\circ$`, R`|A1|$30^\circ$, $150^\circ$`], R`$30^\circ, 90^\circ, 150^\circ, 270^\circ$`,
  R`$\cos x(1 - 2\sin x) = 0$. $\cos x = 0$: $90^\circ, 270^\circ$. $\sin x = \frac12$: $30^\circ, 150^\circ$.`),
Q('2P6.3-12', 4, R`Solve $\sec\theta = \sqrt2$ for $0 \le \theta \le 2\pi$. [[2]]`,
  [R`$\cos\theta = \frac{1}{\sqrt2}$.`, R`Radians.`],
  [R`|M1|$\cos\theta = \frac{1}{\sqrt2}$`, R`|A1|$\theta = \frac\pi4$, $\frac{7\pi}{4}$`], R`$\frac\pi4$, $\frac{7\pi}{4}$`,
  R`$\cos\theta = \frac{1}{\sqrt2}$ gives $\theta = \frac\pi4$ and $2\pi - \frac\pi4 = \frac{7\pi}{4}$.`),
Q('2P6.3-13', 4, R`Solve $\sec x = 4\cos x$ for $0^\circ \le x \le 360^\circ$. [[3]]`,
  [R`$\frac{1}{\cos x} = 4\cos x$.`, R`$\cos^2 x = \frac14$.`],
  [R`|M1|$\cos^2 x = \frac14$`, R`|M1|$\cos x = \pm\frac12$`, R`|A1|$60^\circ, 120^\circ, 240^\circ, 300^\circ$`], R`$60^\circ, 120^\circ, 240^\circ, 300^\circ$`,
  R`$\cos x = \frac12$: $60^\circ, 300^\circ$. $\cos x = -\frac12$: $120^\circ, 240^\circ$.`),
Q('2P6.3-14', 4, R`Prove that $(1 + \cos\theta)(\operatorname{cosec}\theta - \cot\theta) = \sin\theta$. [[4]]`,
  [R`$\operatorname{cosec}\theta - \cot\theta = \frac{1 - \cos\theta}{\sin\theta}$.`, R`$(1 + \cos\theta)(1 - \cos\theta) = \sin^2\theta$.`],
  [R`|M1|$\operatorname{cosec}\theta - \cot\theta = \frac{1 - \cos\theta}{\sin\theta}$`, R`|M1|$\frac{(1 + \cos\theta)(1 - \cos\theta)}{\sin\theta}$`, R`|M1|$= \frac{1 - \cos^2\theta}{\sin\theta} = \frac{\sin^2\theta}{\sin\theta}$`, R`|A1|$= \sin\theta$`], R`Proof`,
  R`$(1 + \cos\theta)\cdot\frac{1 - \cos\theta}{\sin\theta} = \frac{1 - \cos^2\theta}{\sin\theta} = \frac{\sin^2\theta}{\sin\theta} = \sin\theta$.`),
Q('2P6.3-15', 5, R`Solve $\sec\theta\tan\theta = 2\tan\theta$ for $0^\circ \le \theta \le 360^\circ$. [[5]]`,
  [R`Don't divide by $\tan\theta$.`, R`$\tan\theta(\sec\theta - 2) = 0$.`],
  [R`|M1|$\tan\theta(\sec\theta - 2) = 0$`, R`|M1|$\tan\theta = 0$`, R`|A1|$0^\circ, 180^\circ, 360^\circ$`, R`|M1|$\sec\theta = 2$, so $\cos\theta = \frac12$`, R`|A1|$60^\circ, 300^\circ$`], R`$0^\circ, 60^\circ, 180^\circ, 300^\circ, 360^\circ$`,
  R`$\tan\theta(\sec\theta - 2) = 0$. $\tan\theta = 0$: $0^\circ, 180^\circ, 360^\circ$. $\sec\theta = 2$: $\cos\theta = \frac12$, so $60^\circ, 300^\circ$.`)
]};

CONTENT['2P6.4'] = {
notes: R`
### Two new identities
Divide $\sin^2\theta + \cos^2\theta \equiv 1$ by $\cos^2\theta$ and by $\sin^2\theta$:
$$1 + \tan^2\theta \equiv \sec^2\theta \qquad 1 + \cot^2\theta \equiv \operatorname{cosec}^2\theta$$

Use them to turn an equation into a **quadratic in one function**, then factorise.

::: booklet
**Learn these two identities.** They aren't in the formula booklet.
:::

### Worked example 1
Solve $2\tan^2 x + \sec x = 1$ for $0^\circ \le x \le 360^\circ$.
- $2(\sec^2 x - 1) + \sec x - 1 = 0$, so $2\sec^2 x + \sec x - 3 = 0$.
- $(2\sec x + 3)(\sec x - 1) = 0$.
- $\sec x = 1$: $\cos x = 1$, $x = 0^\circ, 360^\circ$. $\sec x = -\frac32$: $\cos x = -\frac23$, $x = 131.8^\circ, 228.2^\circ$.

### Worked example 2: impossible values
Solve $\tan^2 x = 2\sec x - 1$.
- $\sec^2 x - 1 = 2\sec x - 1$, so $\sec x(\sec x - 2) = 0$.
- $\sec x = 0$ has **no solutions** ($|\sec x| \ge 1$). $\sec x = 2$ gives $x = 60^\circ, 300^\circ$.

**The trap:** writing $\cos x = \frac10$ or skipping the check. Always reject values of $\sec$ or $\operatorname{cosec}$ between $-1$ and $1$.

### Watch out
- In a proof, start from one side and work to the other; don't treat the identity as an equation.
`,
questions: [
Q('2P6.4-1', 1, R`State the identity connecting $\sec\theta$ and $\tan\theta$. [[1]]`,
  [R`Divide $\sin^2\theta + \cos^2\theta = 1$ by $\cos^2\theta$.`, R`$\tan^2\theta + 1$.`],
  [R`|B1|$1 + \tan^2\theta \equiv \sec^2\theta$`], R`$1 + \tan^2\theta \equiv \sec^2\theta$`,
  R`Dividing $\sin^2\theta + \cos^2\theta \equiv 1$ by $\cos^2\theta$ gives $\tan^2\theta + 1 \equiv \sec^2\theta$.`),
Q('2P6.4-2', 1, R`Given that $\tan\theta = \frac34$ and $\theta$ is acute, find $\sec\theta$. [[2]]`,
  [R`$\sec^2\theta = 1 + \frac{9}{16}$.`, R`Acute, so positive.`],
  [R`|M1|$\sec^2\theta = \frac{25}{16}$`, R`|A1|$\sec\theta = \frac54$`], R`$\frac54$`,
  R`$\sec^2\theta = 1 + \frac{9}{16} = \frac{25}{16}$, and $\theta$ is acute, so $\sec\theta = \frac54$.`),
Q('2P6.4-3', 1, R`Simplify $\sec^2\theta - \tan^2\theta$. [[1]]`,
  [R`Use $1 + \tan^2\theta = \sec^2\theta$.`, R`Rearrange.`],
  [R`|B1|$1$`], R`$1$`,
  R`$\sec^2\theta - \tan^2\theta = 1$.`),
Q('2P6.4-4', 2, R`Solve $\tan^2 x = 2\sec x - 1$ for $0^\circ \le x \le 360^\circ$. [[4]]`,
  [R`$\tan^2 x = \sec^2 x - 1$.`, R`$\sec x(\sec x - 2) = 0$.`],
  [R`|M1|$\sec^2 x - 1 = 2\sec x - 1$`, R`|M1|$\sec x(\sec x - 2) = 0$`, R`|B1|$\sec x = 0$ has no solutions`, R`|A1|$x = 60^\circ$, $300^\circ$`], R`$60^\circ$, $300^\circ$`,
  R`$\sec x(\sec x - 2) = 0$. $\sec x = 0$ is impossible. $\sec x = 2$: $\cos x = \frac12$, so $x = 60^\circ, 300^\circ$.`),
Q('2P6.4-5', 2, R`Starting from $\sin^2\theta + \cos^2\theta \equiv 1$, show that $\operatorname{cosec}^2\theta - \cot^2\theta \equiv 1$. [[2]]`,
  [R`Divide by $\sin^2\theta$.`, R`$1 + \cot^2\theta = \operatorname{cosec}^2\theta$.`],
  [R`|M1|Divides by $\sin^2\theta$`, R`|A1|$1 + \cot^2\theta \equiv \operatorname{cosec}^2\theta$, so $\operatorname{cosec}^2\theta - \cot^2\theta \equiv 1$`], R`Shown`,
  R`Dividing by $\sin^2\theta$: $1 + \frac{\cos^2\theta}{\sin^2\theta} \equiv \frac{1}{\sin^2\theta}$, i.e. $1 + \cot^2\theta \equiv \operatorname{cosec}^2\theta$. Rearranging gives the result.`),
Q('2P6.4-6', 2, R`Simplify $(\sec\theta - 1)(\sec\theta + 1)$. [[2]]`,
  [R`Difference of two squares.`, R`$\sec^2\theta - 1$.`],
  [R`|M1|$\sec^2\theta - 1$`, R`|A1|$\tan^2\theta$`], R`$\tan^2\theta$`,
  R`$(\sec\theta - 1)(\sec\theta + 1) = \sec^2\theta - 1 = \tan^2\theta$.`),
Q('2P6.4-7', 2, R`Solve $\sec^2 x = 4$ for $0^\circ \le x \le 360^\circ$. [[3]]`,
  [R`$\cos^2 x = \frac14$.`, R`$\cos x = \pm\frac12$.`],
  [R`|M1|$\cos x = \pm\frac12$`, R`|A1|$60^\circ, 300^\circ$`, R`|A1|$120^\circ, 240^\circ$`], R`$60^\circ, 120^\circ, 240^\circ, 300^\circ$`,
  R`$\cos x = \pm\frac12$ gives $60^\circ, 120^\circ, 240^\circ, 300^\circ$.`),
Q('2P6.4-8', 3, R`Solve $2\tan^2 x + \sec x = 1$ for $0^\circ \le x \le 360^\circ$, giving answers to $1$ decimal place where appropriate. [[5]]`,
  [R`$2(\sec^2 x - 1) + \sec x - 1 = 0$.`, R`$(2\sec x + 3)(\sec x - 1) = 0$.`],
  [R`|M1|$2\sec^2 x + \sec x - 3 = 0$`, R`|M1|$(2\sec x + 3)(\sec x - 1) = 0$`, R`|A1|$\sec x = 1$: $0^\circ, 360^\circ$`, R`|M1|$\cos x = -\frac23$`, R`|A1|$131.8^\circ$, $228.2^\circ$`], R`$0^\circ, 131.8^\circ, 228.2^\circ, 360^\circ$`,
  R`$2\sec^2 x + \sec x - 3 = 0$ factorises as $(2\sec x + 3)(\sec x - 1) = 0$. $\sec x = 1$: $x = 0^\circ, 360^\circ$. $\sec x = -\frac32$: $\cos x = -\frac23$, so $x = 131.8^\circ, 228.2^\circ$.`),
Q('2P6.4-9', 3, R`Solve $\cot^2 x + \operatorname{cosec} x = 5$ for $0^\circ \le x \le 360^\circ$, giving answers to $1$ decimal place. [[5]]`,
  [R`$\cot^2 x = \operatorname{cosec}^2 x - 1$.`, R`$(\operatorname{cosec} x + 3)(\operatorname{cosec} x - 2) = 0$.`],
  [R`|M1|$\operatorname{cosec}^2 x + \operatorname{cosec} x - 6 = 0$`, R`|M1|$(\operatorname{cosec} x + 3)(\operatorname{cosec} x - 2) = 0$`, R`|A1|$\sin x = \frac12$: $30^\circ, 150^\circ$`, R`|M1|$\sin x = -\frac13$`, R`|A1|$199.5^\circ$, $340.5^\circ$`], R`$30^\circ, 150^\circ, 199.5^\circ, 340.5^\circ$`,
  R`$\operatorname{cosec}^2 x - 1 + \operatorname{cosec} x - 5 = 0$ gives $(\operatorname{cosec} x + 3)(\operatorname{cosec} x - 2) = 0$. $\sin x = \frac12$: $30^\circ, 150^\circ$. $\sin x = -\frac13$: $180^\circ + 19.5^\circ = 199.5^\circ$ and $360^\circ - 19.5^\circ = 340.5^\circ$.`),
Q('2P6.4-10', 3, R`Prove that $\sec^4\theta - \tan^4\theta \equiv \sec^2\theta + \tan^2\theta$. [[3]]`,
  [R`Difference of two squares.`, R`$\sec^2\theta - \tan^2\theta = 1$.`],
  [R`|M1|$(\sec^2\theta - \tan^2\theta)(\sec^2\theta + \tan^2\theta)$`, R`|M1|$\sec^2\theta - \tan^2\theta = 1$`, R`|A1|$\equiv \sec^2\theta + \tan^2\theta$`], R`Proof`,
  R`$\sec^4\theta - \tan^4\theta = (\sec^2\theta - \tan^2\theta)(\sec^2\theta + \tan^2\theta) = 1 \times (\sec^2\theta + \tan^2\theta)$.`),
Q('2P6.4-11', 3, R`Given that $\cot\theta = 2$ and $180^\circ < \theta < 270^\circ$, find the exact value of $\operatorname{cosec}\theta$. [[3]]`,
  [R`$\operatorname{cosec}^2\theta = 1 + 4$.`, R`In the third quadrant, $\sin\theta < 0$.`],
  [R`|M1|$\operatorname{cosec}^2\theta = 1 + \cot^2\theta = 5$`, R`|M1|Third quadrant: $\sin\theta < 0$`, R`|A1|$-\sqrt5$`], R`$-\sqrt5$`,
  R`$\operatorname{cosec}^2\theta = 5$. In the third quadrant $\sin\theta$ is negative, so $\operatorname{cosec}\theta = -\sqrt5$.`),
Q('2P6.4-12', 4, R`Prove that $\dfrac{1 + \tan^2\theta}{1 + \cot^2\theta} \equiv \tan^2\theta$. [[3]]`,
  [R`$\frac{\sec^2\theta}{\operatorname{cosec}^2\theta}$.`, R`$= \frac{\sin^2\theta}{\cos^2\theta}$.`],
  [R`|M1|$\frac{\sec^2\theta}{\operatorname{cosec}^2\theta}$`, R`|M1|$= \frac{1/\cos^2\theta}{1/\sin^2\theta}$`, R`|A1|$= \frac{\sin^2\theta}{\cos^2\theta} = \tan^2\theta$`], R`Proof`,
  R`$\frac{1 + \tan^2\theta}{1 + \cot^2\theta} = \frac{\sec^2\theta}{\operatorname{cosec}^2\theta} = \frac{\sin^2\theta}{\cos^2\theta} = \tan^2\theta$.`),
Q('2P6.4-13', 4, R`Solve $3\operatorname{cosec}^2 x - 5\cot x - 5 = 0$ for $0^\circ \le x \le 360^\circ$, giving answers to $1$ decimal place. [[5]]`,
  [R`$3(1 + \cot^2 x) - 5\cot x - 5 = 0$.`, R`$(3\cot x + 1)(\cot x - 2) = 0$.`],
  [R`|M1|$3\cot^2 x - 5\cot x - 2 = 0$`, R`|M1|$(3\cot x + 1)(\cot x - 2) = 0$`, R`|A1|$\tan x = \frac12$: $26.6^\circ$, $206.6^\circ$`, R`|M1|$\tan x = -3$`, R`|A1|$108.4^\circ$, $288.4^\circ$`], R`$26.6^\circ, 108.4^\circ, 206.6^\circ, 288.4^\circ$`,
  R`$3\cot^2 x - 5\cot x - 2 = 0$. $\cot x = 2$: $\tan x = \frac12$, so $26.6^\circ, 206.6^\circ$. $\cot x = -\frac13$: $\tan x = -3$, so $108.4^\circ, 288.4^\circ$.`),
Q('2P6.4-14', 4, R`Given that $\sec x + \tan x = 3$, find **(a)** $\sec x - \tan x$ **(b)** $\cos x$. [[4]]`,
  [R`$(\sec x + \tan x)(\sec x - \tan x) = \sec^2 x - \tan^2 x = 1$.`, R`Add the two equations.`],
  [R`(a)|M1|$(\sec x + \tan x)(\sec x - \tan x) = 1$`, R`(a)|A1|$\frac13$`, R`(b)|M1|$2\sec x = 3 + \frac13$`, R`(b)|A1|$\cos x = \frac35$`], R`(a) $\frac13$ (b) $\frac35$`,
  R`**(a)** $\sec^2 x - \tan^2 x = 1$, so $\sec x - \tan x = \frac13$.
**(b)** Adding: $2\sec x = \frac{10}{3}$, so $\sec x = \frac53$ and $\cos x = \frac35$.`),
Q('2P6.4-15', 5, R`**(a)** Show that $2\tan^2\theta - 3\sec\theta = 0$ can be written as $2\sec^2\theta - 3\sec\theta - 2 = 0$. **(b)** Hence solve the equation for $0^\circ \le \theta \le 360^\circ$. **(c)** Write your answers to (b) in radians. [[6]]`,
  [R`$\tan^2\theta = \sec^2\theta - 1$.`, R`$(2\sec\theta + 1)(\sec\theta - 2) = 0$.`],
  [R`(a)|B1|$2(\sec^2\theta - 1) - 3\sec\theta = 0$`, R`(b)|M1|$(2\sec\theta + 1)(\sec\theta - 2) = 0$`, R`(b)|B1|$\sec\theta = -\frac12$ is impossible`, R`(b)|M1|$\cos\theta = \frac12$`, R`(b)|A1|$60^\circ$, $300^\circ$`, R`(c)|B1|$\frac\pi3$, $\frac{5\pi}{3}$`], R`(b) $60^\circ, 300^\circ$ (c) $\frac\pi3, \frac{5\pi}{3}$`,
  R`**(a)** $2(\sec^2\theta - 1) - 3\sec\theta = 2\sec^2\theta - 3\sec\theta - 2$.
**(b)** $(2\sec\theta + 1)(\sec\theta - 2) = 0$. $\sec\theta = -\frac12$ is impossible since $|\sec\theta| \ge 1$. $\sec\theta = 2$ gives $\theta = 60^\circ, 300^\circ$.
**(c)** $\frac\pi3$ and $\frac{5\pi}{3}$.`)
]};

CONTENT['2P6.5'] = {
notes: R`
### Inverse trig functions
Each trig function is many-to-one, so its domain is restricted to make it one-to-one before inverting:

| Function | Domain | Range |
|---|---|---|
| $\arcsin x$ | $-1 \le x \le 1$ | $-\frac\pi2 \le \arcsin x \le \frac\pi2$ |
| $\arccos x$ | $-1 \le x \le 1$ | $0 \le \arccos x \le \pi$ |
| $\arctan x$ | all real $x$ | $-\frac\pi2 < \arctan x < \frac\pi2$ |

The graph of $y = \arcsin x$ is the reflection of $y = \sin x$ (for $-\frac\pi2 \le x \le \frac\pi2$) in $y = x$.

[[fig:2P6.5-arcsin]]

::: booklet
**Learn these ranges.** The inverse functions give one value only, always inside the range above.
:::

### Worked example 1
Find $\arccos\left(-\frac12\right)$.
- $\cos\frac\pi3 = \frac12$, and the answer must lie in $[0, \pi]$: $\arccos\left(-\frac12\right) = \pi - \frac\pi3 = \frac{2\pi}{3}$.

### Worked example 2: a value outside the range
Find $\arcsin\left(-\frac{\sqrt3}{2}\right)$.
- The answer must be in $\left[-\frac\pi2, \frac\pi2\right]$: $-\frac\pi3$.

**The trap:** giving $\frac{4\pi}{3}$ or $\frac{5\pi}{3}$. Both have the right sine, but neither is in the range of $\arcsin$.

### Watch out
- $\sin(\arcsin x) = x$, but $\arcsin(\sin x) = x$ only for $x$ in $\left[-\frac\pi2, \frac\pi2\right]$.
`,
questions: [
Q('2P6.5-1', 1, R`Find the exact value of $\arcsin\frac12$. [[1]]`,
  [R`Which angle in $\left[-\frac\pi2, \frac\pi2\right]$ has sine $\frac12$?`, R`$30^\circ$ in radians.`],
  [R`|B1|$\frac\pi6$`], R`$\frac\pi6$`,
  R`$\sin\frac\pi6 = \frac12$ and $\frac\pi6$ is in the range, so $\arcsin\frac12 = \frac\pi6$.`),
Q('2P6.5-2', 1, R`Find the exact value of $\arccos 0$. [[1]]`,
  [R`Which angle in $[0, \pi]$ has cosine $0$?`, R`$90^\circ$.`],
  [R`|B1|$\frac\pi2$`], R`$\frac\pi2$`,
  R`$\cos\frac\pi2 = 0$, so $\arccos 0 = \frac\pi2$.`),
Q('2P6.5-3', 1, R`Find the exact value of $\arctan 1$. [[1]]`,
  [R`$\tan 45^\circ = 1$.`, R`In radians.`],
  [R`|B1|$\frac\pi4$`], R`$\frac\pi4$`,
  R`$\tan\frac\pi4 = 1$, so $\arctan 1 = \frac\pi4$.`),
Q('2P6.5-4', 2, R`Find the exact value of $\arcsin\left(-\frac{\sqrt3}{2}\right)$. [[1]]`,
  [R`The answer is in $\left[-\frac\pi2, \frac\pi2\right]$.`, R`Negative angle.`],
  [R`|B1|$-\frac\pi3$`], R`$-\frac\pi3$`,
  R`$\sin\left(-\frac\pi3\right) = -\frac{\sqrt3}{2}$, and $-\frac\pi3$ is in the range of $\arcsin$.`),
Q('2P6.5-5', 2, R`Find the exact value of $\arccos\left(-\frac12\right)$. [[1]]`,
  [R`The answer is in $[0, \pi]$.`, R`$\pi - \frac\pi3$.`],
  [R`|B1|$\frac{2\pi}{3}$`], R`$\frac{2\pi}{3}$`,
  R`$\cos\frac{2\pi}{3} = -\frac12$ and $\frac{2\pi}{3}$ is in $[0, \pi]$.`),
Q('2P6.5-6', 2, R`State the range of $y = \arccos x$. [[1]]`,
  [R`The restricted domain of $\cos$.`, R`From $0$ to $\pi$.`],
  [R`|B1|$0 \le y \le \pi$`], R`$0 \le y \le \pi$`,
  R`$\cos x$ is restricted to $0 \le x \le \pi$ to make it one-to-one, so $\arccos x$ has range $0 \le y \le \pi$.`),
Q('2P6.5-7', 2, R`Find the exact value of $\sin\left(\arccos\frac35\right)$. [[2]]`,
  [R`Let $\theta = \arccos\frac35$, so $\cos\theta = \frac35$.`, R`$\theta$ is acute; use Pythagoras.`],
  [R`|M1|$\cos\theta = \frac35$ with $\theta$ in $[0, \pi]$`, R`|A1|$\sin\theta = \frac45$`], R`$\frac45$`,
  R`If $\cos\theta = \frac35$ with $0 \le \theta \le \pi$, then $\sin\theta \ge 0$, so $\sin\theta = \sqrt{1 - \frac{9}{25}} = \frac45$.`),
Q('2P6.5-8', 3, R`Sketch $y = \arcsin x$, giving the coordinates of its end points. [[2]]`,
  [R`Reflect $y = \sin x$ for $-\frac\pi2 \le x \le \frac\pi2$ in $y = x$.`, R`Domain $-1 \le x \le 1$.`],
  [R`|B1|Correct shape through the origin`, R`|B1|End points $\left(-1, -\frac\pi2\right)$ and $\left(1, \frac\pi2\right)$`], R`From $(-1, -\frac\pi2)$ to $(1, \frac\pi2)$`,
  R`The graph is the reflection of $y = \sin x$ ($-\frac\pi2 \le x \le \frac\pi2$) in $y = x$, running from $\left(-1, -\frac\pi2\right)$ through the origin to $\left(1, \frac\pi2\right)$.`, { solFig: FIGS['2P6.5-arcsin'] }),
Q('2P6.5-9', 3, R`Solve $\arcsin x = \frac\pi4$. [[1]]`,
  [R`Take $\sin$ of both sides.`, R`$\sin\frac\pi4$.`],
  [R`|B1|$x = \frac{\sqrt2}{2}$`], R`$\frac{\sqrt2}{2}$`,
  R`$x = \sin\frac\pi4 = \frac{\sqrt2}{2}$.`),
Q('2P6.5-10', 3, R`Show that $\tan(\arccos x) = \dfrac{\sqrt{1 - x^2}}{x}$ for $0 < x \le 1$. [[3]]`,
  [R`Let $\theta = \arccos x$, so $\cos\theta = x$.`, R`$\sin\theta = \sqrt{1 - x^2}$.`],
  [R`|M1|$\cos\theta = x$`, R`|M1|$\sin\theta = \sqrt{1 - x^2}$ (since $0 \le \theta \le \pi$)`, R`|A1|$\tan\theta = \frac{\sqrt{1 - x^2}}{x}$`], R`Shown`,
  R`Let $\theta = \arccos x$, with $0 \le \theta \le \frac\pi2$ for $0 < x \le 1$. Then $\cos\theta = x$ and $\sin\theta = \sqrt{1 - x^2}$, so $\tan\theta = \frac{\sqrt{1 - x^2}}{x}$.`),
Q('2P6.5-11', 3, R`Solve $\arccos x = \arcsin\frac12$. [[2]]`,
  [R`$\arcsin\frac12 = \frac\pi6$.`, R`$x = \cos\frac\pi6$.`],
  [R`|M1|$\arccos x = \frac\pi6$`, R`|A1|$x = \frac{\sqrt3}{2}$`], R`$\frac{\sqrt3}{2}$`,
  R`$\arcsin\frac12 = \frac\pi6$, so $x = \cos\frac\pi6 = \frac{\sqrt3}{2}$.`),
Q('2P6.5-12', 4, R`Solve $2\arctan(x - 1) = \frac\pi2$. [[2]]`,
  [R`$\arctan(x - 1) = \frac\pi4$.`, R`$x - 1 = 1$.`],
  [R`|M1|$x - 1 = \tan\frac\pi4$`, R`|A1|$x = 2$`], R`$x = 2$`,
  R`$\arctan(x - 1) = \frac\pi4$, so $x - 1 = 1$ and $x = 2$.`),
Q('2P6.5-13', 4, R`Show that $\arcsin x + \arccos x = \frac\pi2$ for $0 \le x \le 1$. [[3]]`,
  [R`Draw a right-angled triangle with hypotenuse $1$ and one side $x$.`, R`The two acute angles add to $\frac\pi2$.`],
  [R`|M1|Let $\alpha = \arcsin x$, so $\sin\alpha = x$`, R`|M1|$\cos\left(\frac\pi2 - \alpha\right) = \sin\alpha = x$`, R`|A1|$\arccos x = \frac\pi2 - \alpha$, as $\frac\pi2 - \alpha \in [0, \pi]$`], R`Shown`,
  R`Let $\alpha = \arcsin x$, so $\sin\alpha = x$ with $0 \le \alpha \le \frac\pi2$. Then $\cos\left(\frac\pi2 - \alpha\right) = \sin\alpha = x$, and $\frac\pi2 - \alpha$ lies in $[0, \pi]$, so $\arccos x = \frac\pi2 - \alpha$. Hence $\arcsin x + \arccos x = \frac\pi2$.`),
Q('2P6.5-14', 4, R`State the domain and range of $y = \arccos\left(\frac{x}{2}\right)$. [[2]]`,
  [R`$-1 \le \frac{x}{2} \le 1$.`, R`The range of $\arccos$ is unchanged.`],
  [R`|B1|$-2 \le x \le 2$`, R`|B1|$0 \le y \le \pi$`], R`$-2 \le x \le 2$; $0 \le y \le \pi$`,
  R`We need $-1 \le \frac{x}{2} \le 1$, so $-2 \le x \le 2$. The range is still $0 \le y \le \pi$.`),
Q('2P6.5-15', 5, R`$f(x) = \pi - \arccos(2x)$. **(a)** State the domain of $f$. **(b)** State the range of $f$. **(c)** Solve $f(x) = \frac{2\pi}{3}$. [[5]]`,
  [R`$-1 \le 2x \le 1$.`, R`If $0 \le \arccos(2x) \le \pi$, then $0 \le \pi - \arccos(2x) \le \pi$.`],
  [R`(a)|B1|$-\frac12 \le x \le \frac12$`, R`(b)|B1|$0 \le f(x) \le \pi$`, R`(c)|M1|$\arccos(2x) = \frac\pi3$`, R`(c)|M1|$2x = \cos\frac\pi3 = \frac12$`, R`(c)|A1|$x = \frac14$`], R`(a) $-\frac12 \le x \le \frac12$ (b) $0 \le f(x) \le \pi$ (c) $\frac14$`,
  R`**(a)** $-1 \le 2x \le 1$, so $-\frac12 \le x \le \frac12$.
**(b)** $0 \le f(x) \le \pi$.
**(c)** $\arccos(2x) = \frac\pi3$, so $2x = \frac12$ and $x = \frac14$.`)
]};
