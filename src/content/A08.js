/* Statistics and Mechanics Year 1 · Chapter 8 Modelling in mechanics (sections 8.1 to 8.4) */
BOOK_CHAPTERS.push({ id:'A08', book:'Statistics & Mechanics Year 1', label:'Chapter 8', title:'Modelling in mechanics', mech: true, sections:[
  { id:'A8.1', num:'8.1', title:'Constructing a model' },
  { id:'A8.2', num:'8.2', title:'Modelling assumptions' },
  { id:'A8.3', num:'8.3', title:'Quantities and units' },
  { id:'A8.4', num:'8.4', title:'Working with vectors' }
]});
const NF = { noFig: true };
// Vector diagram: arrows [{ from: [x, y], to: [x, y], label, col }] on a square grid.
const A8vec = ({ label, arrows, x0, x1, y0, y1, texts = [], step = 1 }) => {
  const t = (a, b) => { const r = []; for (let v = Math.ceil(a / step) * step; v <= b; v += step) if (v) r.push([v, String(v)]); return r; };
  return Fig.graph({ label, x0, x1, y0, y1, equal: true, xticks: t(x0, x1), yticks: t(y0, y1), xlab: 'i', ylab: 'j',
    segs: arrows.map(a => ({ x1: a.from[0], y1: a.from[1], x2: a.to[0], y2: a.to[1], arrow: true, col: a.col || 'var(--accent)', w: 2.2 })),
    texts: arrows.filter(a => a.label).map(a => ({ x: (a.from[0] + a.to[0]) / 2 + (a.dx || 0), y: (a.from[1] + a.to[1]) / 2 + (a.dy || 0.5), label: a.label, col: a.col || 'var(--accent)' })).concat(texts) });
};
FIGS['A8.1-ball'] = Fig.graph({ label: 'Height of the ball, h = 1.5 + 20t − 4.9t², rising to about 21.9 m at t ≈ 2 s and landing at t ≈ 4.16 s',
  x0: 0, x1: 4.6, y0: 0, y1: 25, xlab: 't (s)', ylab: 'h (m)', xticks: [[1, '1'], [2, '2'], [3, '3'], [4, '4']], yticks: [[5, '5'], [10, '10'], [15, '15'], [20, '20']],
  fns: [{ f: t => 1.5 + 20 * t - 4.9 * t * t, from: 0, to: 4.155 }], points: [{ x: 0, y: 1.5, label: '1.5', dx: 16, dy: 0 }, { x: 4.155, y: 0, label: '4.16', dx: -20, dy: -12 }] });
FIGS['A8.4-res'] = A8vec({ label: 'Adding vectors: 3i + 2j followed by −i + 5j gives the resultant 2i + 7j', x0: -1, x1: 5, y0: -1, y1: 8,
  arrows: [{ from: [0, 0], to: [3, 2], label: '3i + 2j', dx: 1.1, dy: -0.4 }, { from: [3, 2], to: [2, 7], label: '−i + 5j', dx: 1.3 }, { from: [0, 0], to: [2, 7], label: '2i + 7j', col: 'var(--pen)', dx: -1.4 }] });

CONTENT['A8.1'] = {
notes: R`
### What is a model?
A **mathematical model** is a simplified version of a real situation, written with mathematics so it can be used to make predictions.

### The modelling cycle
1. Start with a real-world problem.
2. Make **simplifying assumptions**.
3. Write the problem mathematically and solve it.
4. Compare the predictions with real data.
5. If they don't match well, **refine** the model (change the assumptions) and repeat.

A model is only valid for a sensible range of values. For example, a model for a ball's height stops being valid once the ball hits the ground.

::: booklet
**Learn this:** the steps of the modelling cycle, and that every model has a range of validity.
:::

### Worked example 1
The height of a ball above the ground is modelled by $h = 1.5 + 20t - 4.9t^2$, where $h$ is in metres and $t$ in seconds.
- Initial height: $h(0) = 1.5$ m.
- It lands when $4.9t^2 - 20t - 1.5 = 0$: $t = \dfrac{20 + \sqrt{400 + 29.4}}{9.8} = 4.16$ s.
- So the model is valid for $0 \le t \le 4.16$.

[[fig:A8.1-ball]]

### Worked example 2: choose the right root
The quadratic in example 1 also has the root $t = -0.0736$.

**The trap:** quoting both roots. A negative time is before the ball was thrown, so it lies outside the model's range of validity and is rejected.

### Watch out
- When asked to criticise a model, refer to a specific assumption (such as ignoring air resistance) and its effect.
`,
questions: [
Q('A8.1-1', 1, R`What is meant by a mathematical model? [[1]]`,
  [R`It isn't the real thing.`, R`It simplifies.`],
  [R`|B1|A simplified mathematical description of a real situation, used to make predictions`], R`A simplified mathematical description of a real situation`,
  R`A mathematical model is a simplified version of a real-world situation, written using mathematics, that can be used to make predictions.`, NF),
Q('A8.1-2', 1, R`The height $h$ m of a ball is modelled by $h = 1.5 + 20t - 4.9t^2$ for $t \ge 0$ seconds. Write down the height from which the ball is thrown. [[1]]`,
  [R`Thrown at $t = 0$.`, R`Substitute $t = 0$.`],
  [R`|B1|$1.5$ m`], R`$1.5$ m`,
  R`At $t = 0$, $h = 1.5$, so the ball is thrown from $1.5$ m above the ground.`, { fig: FIGS['A8.1-ball'] }),
Q('A8.1-3', 1, R`Using the model $h = 1.5 + 20t - 4.9t^2$, find the height of the ball after $2$ seconds. [[1]]`,
  [R`Substitute $t = 2$.`, R`$4.9 \times 4 = 19.6$.`],
  [R`|B1|$21.9$ m`], R`$21.9$ m`,
  R`$h = 1.5 + 40 - 19.6 = 21.9$ m.`, NF),
Q('A8.1-4', 2, R`Using the model $h = 1.5 + 20t - 4.9t^2$, find the time at which the ball hits the ground. [[2]]`,
  [R`Solve $h = 0$.`, R`Reject the negative root.`],
  [R`|M1|$4.9t^2 - 20t - 1.5 = 0$ with the quadratic formula`, R`|A1|$t = 4.16$ s`], R`$4.16$ s`,
  R`$4.9t^2 - 20t - 1.5 = 0$ gives $t = \frac{20 \pm \sqrt{429.4}}{9.8}$, so $t = 4.16$ or $-0.0736$. Time can't be negative, so $t = 4.16$ s.`, { solFig: FIGS['A8.1-ball'], noFig: true }),
Q('A8.1-5', 2, R`Using the model $h = 1.5 + 20t - 4.9t^2$, find the greatest height of the ball. [[2]]`,
  [R`Complete the square or use $t = \frac{-b}{2a}$.`, R`$t = \frac{20}{9.8}$.`],
  [R`|M1|$t = \frac{20}{9.8} = 2.04$`, R`|A1|$21.9$ m`], R`$21.9$ m`,
  R`The maximum is at $t = \frac{20}{9.8} = 2.04$ s, where $h = 1.5 + \frac{20^2}{4 \times 4.9} = 1.5 + 20.4 = 21.9$ m.`, NF),
Q('A8.1-6', 2, R`Put these stages of the modelling cycle in order: compare with real data; make assumptions; refine the model; solve the mathematical problem; identify the real-world problem. [[2]]`,
  [R`It starts with the real problem.`, R`Refining comes after comparing.`],
  [R`|M1|Starts with the real problem and assumptions`, R`|A1|Problem, assumptions, solve, compare, refine`], R`Identify problem, assumptions, solve, compare, refine`,
  R`Identify the real-world problem; make assumptions; solve the mathematical problem; compare with real data; refine the model (and repeat).`, NF),
Q('A8.1-7', 2, R`The stopping distance $d$ m of a car travelling at $v$ m s$^{-1}$ is modelled by $d = 0.7v + 0.07v^2$. Find the stopping distance at $20$ m s$^{-1}$. [[1]]`,
  [R`Substitute $v = 20$.`, R`$0.07 \times 400 = 28$.`],
  [R`|B1|$42$ m`], R`$42$ m`,
  R`$d = 14 + 28 = 42$ m.`, NF),
Q('A8.1-8', 3, R`Using $d = 0.7v + 0.07v^2$, find the speed at which the stopping distance is $60$ m. [[3]]`,
  [R`$0.07v^2 + 0.7v - 60 = 0$.`, R`Reject the negative root.`],
  [R`|M1|$0.07v^2 + 0.7v - 60 = 0$`, R`|M1|Quadratic formula`, R`|A1|$v = 24.7$ m s$^{-1}$`], R`$24.7$ m s$^{-1}$`,
  R`$v = \frac{-0.7 + \sqrt{0.49 + 16.8}}{0.14} = \frac{-0.7 + 4.158}{0.14} = 24.7$ m s$^{-1}$ (the negative root is rejected).`, NF),
Q('A8.1-9', 3, R`The model $h = 1.5 + 20t - 4.9t^2$ predicts the ball lands after $4.16$ s, but it is observed to land after $3.9$ s. Suggest a refinement to the model, and explain why it would help. [[2]]`,
  [R`What has the model ignored?`, R`What would slow the ball?`],
  [R`|B1|Include air resistance`, R`|B1|It slows the ball, reducing the height reached and the time in the air`], R`Include air resistance`,
  R`The model ignores air resistance. Including it would reduce the ball's speed, so it would not go as high and would land sooner, closer to the observed $3.9$ s.`, NF),
Q('A8.1-10', 3, R`State the range of values of $t$ for which the model $h = 1.5 + 20t - 4.9t^2$ is valid, and explain why. [[2]]`,
  [R`Start when the ball is thrown.`, R`Stop when it lands.`],
  [R`|B1|$0 \le t \le 4.16$`, R`|B1|Before $t = 0$ it hadn't been thrown; after $4.16$ s it is on the ground (the model gives negative heights)`], R`$0 \le t \le 4.16$`,
  R`$0 \le t \le 4.16$. The ball is thrown at $t = 0$ and lands at $t = 4.16$; after that the model would give negative heights, which are impossible.`, NF),
Q('A8.1-11', 3, R`The speed $v$ m s$^{-1}$ of a skydiver $t$ seconds after jumping is modelled by $v = 50(1 - e^{-0.2t})$. **(a)** Find the speed after $5$ s. **(b)** State the speed the model predicts the skydiver approaches. [[3]]`,
  [R`$e^{-1} = 0.368$.`, R`As $t$ grows, $e^{-0.2t} \to 0$.`],
  [R`(a)|M1|$50(1 - e^{-1})$`, R`(a)|A1|$31.6$ m s$^{-1}$`, R`(b)|B1|$50$ m s$^{-1}$`], R`(a) $31.6$ m s$^{-1}$ (b) $50$ m s$^{-1}$`,
  R`**(a)** $v = 50(1 - e^{-1}) = 31.6$ m s$^{-1}$.
**(b)** As $t \to \infty$, $e^{-0.2t} \to 0$, so $v \to 50$ m s$^{-1}$.`, NF),
Q('A8.1-12', 4, R`The height of a ball is modelled by $h = a + bt - 4.9t^2$. When $t = 0$, $h = 2$, and when $t = 1$, $h = 17.1$. Find $a$ and $b$. [[3]]`,
  [R`$t = 0$ gives $a$.`, R`$2 + b - 4.9 = 17.1$.`],
  [R`|B1|$a = 2$`, R`|M1|$2 + b - 4.9 = 17.1$`, R`|A1|$b = 20$`], R`$a = 2$, $b = 20$`,
  R`$h(0) = a = 2$. Then $h(1) = 2 + b - 4.9 = 17.1$, so $b = 20$.`, NF),
Q('A8.1-13', 4, R`Stopping distance is modelled by $d = av + bv^2$. At $10$ m s$^{-1}$ the stopping distance is $14$ m; at $20$ m s$^{-1}$ it is $42$ m. Find $a$ and $b$. [[4]]`,
  [R`$10a + 100b = 14$ and $20a + 400b = 42$.`, R`Double the first and subtract.`],
  [R`|M1|$10a + 100b = 14$`, R`|M1|$20a + 400b = 42$`, R`|A1|$b = 0.07$`, R`|A1|$a = 0.7$`], R`$a = 0.7$, $b = 0.07$`,
  R`Doubling the first: $20a + 200b = 28$. Subtracting from the second: $200b = 14$, so $b = 0.07$ and then $a = 0.7$.`, NF),
Q('A8.1-14', 4, R`Using $v = 50(1 - e^{-0.2t})$, find the time at which the skydiver reaches $45$ m s$^{-1}$. [[3]]`,
  [R`$1 - e^{-0.2t} = 0.9$.`, R`Take logs.`],
  [R`|M1|$e^{-0.2t} = 0.1$`, R`|M1|$-0.2t = \ln 0.1$`, R`|A1|$t = 11.5$ s`], R`$11.5$ s`,
  R`$e^{-0.2t} = 0.1$, so $t = \frac{\ln 10}{0.2} = 5\ln 10 = 11.5$ s.`, NF),
Q('A8.1-15', 5, R`A ball is thrown upwards and its height is modelled by $h = 1.2 + 14t - 4.9t^2$. **(a)** Find the greatest height. **(b)** Find how long the ball is in the air. **(c)** Find how long the ball is more than $8$ m above the ground. **(d)** Give one criticism of the model. [[8]]`,
  [R`The maximum is at $t = \frac{14}{9.8}$.`, R`For (c), solve $4.9t^2 - 14t + 6.8 = 0$ and subtract the roots.`],
  [R`(a)|M1|$t = \frac{14}{9.8}$`, R`(a)|A1|$11.2$ m`, R`(b)|M1|$4.9t^2 - 14t - 1.2 = 0$`, R`(b)|A1|$2.94$ s`, R`(c)|M1|$4.9t^2 - 14t + 6.8 = 0$`, R`(c)|M1|Roots $0.620$ and $2.237$`, R`(c)|A1|$1.62$ s`, R`(d)|B1|Ignores air resistance (or treats the ball as a particle)`], R`(a) $11.2$ m (b) $2.94$ s (c) $1.62$ s`,
  R`**(a)** At $t = \frac{14}{9.8} = 1.43$: $h = 1.2 + \frac{14^2}{19.6} = 11.2$ m.
**(b)** $4.9t^2 - 14t - 1.2 = 0$: $t = \frac{14 + \sqrt{219.52}}{9.8} = 2.94$ s.
**(c)** $4.9t^2 - 14t + 6.8 = 0$: $t = \frac{14 \pm \sqrt{62.72}}{9.8}$, so $0.620$ and $2.237$. The ball is above $8$ m for $1.62$ s.
**(d)** It ignores air resistance, which would reduce the height and time.`, NF)
]};

CONTENT['A8.2'] = {
notes: R`
### Common modelling words
| Word | Meaning | Effect |
|---|---|---|
| Particle | Size is ignored; all the mass is at one point | No rotation; air resistance often ignored |
| Light | Mass is negligible | Tension is the same along a string |
| Inextensible | Doesn't stretch | Connected objects have the same acceleration |
| Smooth | No friction | No frictional force |
| Rough | Friction acts | Include a friction force |
| Rigid | Doesn't bend | |
| Uniform | Mass is spread evenly | Centre of mass at the centre |
| Bead | Particle threaded on a wire | Moves along the wire |
| Wire | Rigid, thin | |
| Peg | A fixed support | Can be rough or smooth |

You'll also usually assume $g = 9.8$ m s$^{-2}$ is constant and air resistance is negligible.

::: booklet
**Learn these:** the meanings and the effects. Exam questions ask "state an assumption" **and** "explain its effect".
:::

### Worked example 1
A stone is dropped from a cliff. State two modelling assumptions.
- The stone is a **particle**: its size doesn't matter and it doesn't spin.
- **Air resistance** is ignored, so the only force is its weight.

### Worked example 2: say what the assumption does
A student writes: "The string is light."

**The trap:** stopping there. To score, add the effect: "so the tension is the same throughout the string" (and for "inextensible": "so both particles have the same acceleration").

### Watch out
- Refer to the context: say "the ball" or "the rope", not just "the object".
`,
questions: [
Q('A8.2-1', 1, R`What does it mean to model an object as a particle? [[1]]`,
  [R`What happens to its size?`, R`Where is its mass?`],
  [R`|B1|Its dimensions are ignored and its mass acts at a single point`], R`Its size is ignored; its mass is at a point`,
  R`Its dimensions are negligible, so all its mass is concentrated at a single point (and rotation is ignored).`, NF),
Q('A8.2-2', 1, R`A string is described as light. What does this mean, and what is its effect? [[1]]`,
  [R`What is its mass?`, R`What about the tension?`],
  [R`|B1|Its mass is negligible, so the tension is the same throughout`], R`Negligible mass, so constant tension`,
  R`A light string has negligible mass, so the tension is the same all the way along it.`, NF),
Q('A8.2-3', 1, R`A string is described as inextensible. What is the effect of this assumption on two particles connected by the string? [[1]]`,
  [R`It doesn't stretch.`, R`Think about how they move.`],
  [R`|B1|They have the same speed and acceleration`], R`Both particles have the same acceleration`,
  R`The string doesn't stretch, so both particles move with the same speed and acceleration.`, NF),
Q('A8.2-4', 2, R`A surface is described as smooth. What does this mean? [[1]]`,
  [R`What force is missing?`, R`Smooth means no ...`],
  [R`|B1|There is no friction between the object and the surface`], R`No friction`,
  R`A smooth surface exerts no friction on an object moving (or tending to move) across it.`, NF),
Q('A8.2-5', 2, R`A surface is described as rough. What does this mean? [[1]]`,
  [R`The opposite of smooth.`, R`Which force acts?`],
  [R`|B1|Friction acts between the object and the surface`], R`Friction acts`,
  R`A rough surface exerts friction, opposing motion (or attempted motion) along it.`, NF),
Q('A8.2-6', 2, R`A ball is thrown across a field. State two modelling assumptions, and for each give its effect. [[2]]`,
  [R`Particle?`, R`Air resistance?`],
  [R`|B1|Ball modelled as a particle: its size and spin are ignored`, R`|B1|Air resistance ignored: the only force is the ball's weight`], R`Particle; no air resistance`,
  R`The ball is a particle, so its size and any spin are ignored. Air resistance is negligible, so the only force acting is its weight, and the acceleration is $g$.`, NF),
Q('A8.2-7', 2, R`A plank is modelled as a uniform rod. Explain what each of the words "uniform" and "rod" means. [[2]]`,
  [R`Uniform: how is the mass spread?`, R`Rod: what about its width?`],
  [R`|B1|Uniform: mass evenly spread, so the centre of mass is at the middle`, R`|B1|Rod: one-dimensional (no width) and rigid`], R`Even mass, centre in the middle; thin and rigid`,
  R`"Uniform" means the mass is evenly distributed, so its centre of mass is at its midpoint. "Rod" means it is treated as one-dimensional (no width or thickness) and rigid (it doesn't bend).`, NF),
Q('A8.2-8', 3, R`A stone is dropped from a bridge, and its time to reach the water is predicted ignoring air resistance. State, with a reason, whether the real time will be longer or shorter. [[2]]`,
  [R`What does air resistance do?`, R`Slower means ...`],
  [R`|B1|Longer`, R`|B1|Air resistance reduces the stone's acceleration, so it takes more time`], R`Longer`,
  R`Longer. Air resistance opposes the motion, so the stone accelerates less than $g$ and takes longer to fall.`, NF),
Q('A8.2-9', 3, R`Explain why it's reasonable to model a car as a particle when working out the time for a $50$ km journey, but not when it is being parked. [[2]]`,
  [R`Compare the car's size with the distance.`, R`Does the car's size matter when parking?`],
  [R`|B1|Over $50$ km the car's size is negligible`, R`|B1|When parking, its size and turning matter, so it can't be treated as a point`], R`Size is negligible compared with $50$ km, but not when parking`,
  R`The car's length is tiny compared with $50$ km, so treating it as a point makes almost no difference. When parking, its size, shape and rotation matter, so it can't be modelled as a particle.`, NF),
Q('A8.2-10', 3, R`A stone is dropped from $20$ m above the ground. Its height is modelled by $h = 20 - 4.9t^2$. **(a)** Find the time it takes to reach the ground. **(b)** State an assumption made in this model. [[3]]`,
  [R`Solve $20 - 4.9t^2 = 0$.`, R`What has been ignored?`],
  [R`(a)|M1|$4.9t^2 = 20$`, R`(a)|A1|$t = 2.02$ s`, R`(b)|B1|Air resistance is ignored (or the stone is a particle)`], R`(a) $2.02$ s`,
  R`**(a)** $t^2 = \frac{20}{4.9} = 4.08$, so $t = 2.02$ s.
**(b)** Air resistance is negligible, so the stone falls with constant acceleration $g$.`, NF),
Q('A8.2-11', 3, R`What is a bead, in mechanics modelling? [[1]]`,
  [R`It's threaded onto something.`, R`It can only move one way.`],
  [R`|B1|A particle with a hole through it, threaded on a wire or string`], R`A particle threaded on a wire or string`,
  R`A bead is a particle with a hole through it, so it can be threaded onto a wire or string and moves along it.`, NF),
Q('A8.2-12', 4, R`Explain what is meant by each of the following, and give the effect of each assumption: **(a)** a smooth pulley **(b)** a lamina. [[4]]`,
  [R`Smooth: no friction.`, R`Lamina: a flat object.`],
  [R`(a)|B1|No friction in the pulley`, R`(a)|B1|So the tension is the same on both sides of the pulley`, R`(b)|B1|A two-dimensional object (thickness negligible)`, R`(b)|B1|So only its area and shape matter, not its thickness`], R`(a) no friction, same tension each side (b) flat, thickness ignored`,
  R`**(a)** A smooth pulley has no friction, so the tension in a string passing over it is the same on both sides.
**(b)** A lamina is a flat object whose thickness is negligible, so it is treated as two-dimensional.`, NF),
Q('A8.2-13', 4, R`A box is pulled across a carpet. In a model, the carpet is assumed to be smooth. How will the predicted acceleration compare with the real acceleration? Explain. [[2]]`,
  [R`What force has been left out?`, R`Which way does it act?`],
  [R`|B1|The predicted acceleration will be too large`, R`|B1|Because friction, which opposes the motion, has been ignored`], R`Too large: friction is ignored`,
  R`The model ignores friction from the carpet, which opposes the motion. So the predicted resultant force, and hence the predicted acceleration, will be larger than in reality.`, NF),
Q('A8.2-14', 4, R`In the model $h = 20 - 4.9t^2$, the speed of the stone is $v = 9.8t$. **(a)** Find the speed with which the stone reaches the ground. **(b)** State, with a reason, how the real speed would compare. [[3]]`,
  [R`It lands at $t = 2.02$.`, R`Air resistance slows the stone.`],
  [R`(a)|M1|$v = 9.8 \times 2.02$`, R`(a)|A1|$19.8$ m s$^{-1}$`, R`(b)|B1|The real speed would be lower, because air resistance reduces the acceleration`], R`(a) $19.8$ m s$^{-1}$ (b) lower`,
  R`**(a)** $t = \sqrt{20/4.9} = 2.020$ s, so $v = 9.8 \times 2.020 = 19.8$ m s$^{-1}$.
**(b)** Lower: air resistance acts against the motion, so the stone accelerates less than $9.8$ m s$^{-2}$.`, NF),
Q('A8.2-15', 5, R`A lift of mass $500$ kg carries a passenger of mass $70$ kg and is raised by a cable. **(a)** State three modelling assumptions that might be made, with the effect of each. **(b)** Find the total weight of the lift and passenger. [[5]]`,
  [R`Think about the lift, the cable and any resistance.`, R`Weight $= mg$.`],
  [R`(a)|B1|Lift is a particle (or rigid body): its size doesn't matter`, R`(a)|B1|Cable is light: its mass is ignored, so the tension is the same throughout`, R`(a)|B1|No air resistance or friction from the shaft`, R`(b)|M1|$(500 + 70) \times 9.8$`, R`(b)|A1|$5586$ N ($5590$ N to $3$ s.f.)`], R`(b) $5590$ N`,
  R`**(a)** The lift (with the passenger) is a particle, so its size is ignored; the cable is light and inextensible, so the tension is the same throughout and the lift and passenger move together; there's no air resistance or friction in the shaft, so the only forces are the tension and the weight.
**(b)** $570 \times 9.8 = 5586$ N, about $5590$ N.`, { fig: Fig.particle({ label: 'Lift and passenger as a particle: tension T up, weight 570g down', forces: [{ deg: 90, label: 'T', len: 70 }, { deg: 270, label: '570g', len: 70, weight: true }] }) })
]};

CONTENT['A8.3'] = {
notes: R`
### SI units
| Quantity | Unit | Symbol |
|---|---|---|
| Mass | kilogram | kg |
| Length / displacement | metre | m |
| Time | second | s |
| Speed / velocity | metres per second | m s$^{-1}$ |
| Acceleration | metres per second squared | m s$^{-2}$ |
| Force / weight | newton | N $=$ kg m s$^{-2}$ |

### Scalars and vectors
- A **scalar** has size only: distance, speed, mass, time.
- A **vector** has size and direction: displacement, velocity, acceleration, force.

Weight is a force: $W = mg$, with $g = 9.8$ m s$^{-2}$.

::: booklet
**Learn these:** the SI units above and $W = mg$.
:::

### Worked example 1
Convert $72$ km h$^{-1}$ to m s$^{-1}$.
$$72 \text{ km h}^{-1} = \frac{72 \times 1000}{3600} \text{ m s}^{-1} = 20 \text{ m s}^{-1}$$

### Worked example 2: distance or displacement?
A person walks $3$ km east then $4$ km north.
- Distance travelled: $3 + 4 = 7$ km (a scalar).
- Displacement: $\sqrt{3^2 + 4^2} = 5$ km on a bearing of $90^\circ - \tan^{-1}\frac43 = 036.9^\circ$ (a vector).

**The trap:** giving $7$ km as the displacement, or giving a displacement without a direction.

### Watch out
- Convert grams to kilograms before working out weights.
- Divide by $3600$ to change "per hour" into "per second".
`,
questions: [
Q('A8.3-1', 1, R`State the SI unit of mass. [[1]]`,
  [R`Not grams.`, R`The base unit.`],
  [R`|B1|kilogram (kg)`], R`kg`,
  R`The SI unit of mass is the kilogram (kg).`, NF),
Q('A8.3-2', 1, R`State whether each of speed and velocity is a scalar or a vector. [[1]]`,
  [R`Does it have a direction?`, R`Velocity includes direction.`],
  [R`|B1|Speed is a scalar; velocity is a vector`], R`Speed scalar, velocity vector`,
  R`Speed has size only, so it is a scalar. Velocity has size and direction, so it is a vector.`, NF),
Q('A8.3-3', 1, R`Convert $72$ km h$^{-1}$ into m s$^{-1}$. [[1]]`,
  [R`Multiply by $1000$, divide by $3600$.`, R`$72\,000 \div 3600$.`],
  [R`|B1|$20$ m s$^{-1}$`], R`$20$ m s$^{-1}$`,
  R`$\frac{72 \times 1000}{3600} = 20$ m s$^{-1}$.`, NF),
Q('A8.3-4', 2, R`Find the weight of a $5$ kg mass. [[1]]`,
  [R`$W = mg$.`, R`$g = 9.8$.`],
  [R`|B1|$49$ N`], R`$49$ N`,
  R`$W = 5 \times 9.8 = 49$ N.`, { fig: Fig.particle({ label: 'A 5 kg particle with its weight 5g acting downwards', forces: [{ deg: 270, label: '5g', len: 70, weight: true }] }) }),
Q('A8.3-5', 2, R`The density of a metal is $5$ g cm$^{-3}$. Convert this to kg m$^{-3}$. [[2]]`,
  [R`$1$ g $= 0.001$ kg and $1$ cm$^3 = 10^{-6}$ m$^3$.`, R`$5 \times \frac{0.001}{10^{-6}}$.`],
  [R`|M1|$5 \times 10^{-3} \div 10^{-6}$`, R`|A1|$5000$ kg m$^{-3}$`], R`$5000$ kg m$^{-3}$`,
  R`$5$ g $= 0.005$ kg and $1$ cm$^3 = 10^{-6}$ m$^3$, so $\frac{0.005}{10^{-6}} = 5000$ kg m$^{-3}$.`, NF),
Q('A8.3-6', 2, R`Write the newton in terms of SI base units. [[1]]`,
  [R`$F = ma$.`, R`kg times m s$^{-2}$.`],
  [R`|B1|kg m s$^{-2}$`], R`kg m s$^{-2}$`,
  R`From $F = ma$: $1$ N $= 1$ kg $\times 1$ m s$^{-2} = 1$ kg m s$^{-2}$.`, NF),
Q('A8.3-7', 2, R`Convert $0.5$ km per minute into m s$^{-1}$. [[1]]`,
  [R`$0.5$ km $= 500$ m.`, R`Divide by $60$.`],
  [R`|B1|$8.33$ m s$^{-1}$`], R`$8.33$ m s$^{-1}$`,
  R`$\frac{500}{60} = 8.33$ m s$^{-1}$.`, NF),
Q('A8.3-8', 3, R`A person walks $3$ km east and then $4$ km north. Find **(a)** the distance travelled **(b)** the magnitude and bearing of the displacement. [[3]]`,
  [R`Distance just adds.`, R`Displacement: Pythagoras and an angle from north.`],
  [R`(a)|B1|$7$ km`, R`(b)|B1|$5$ km`, R`(b)|B1|Bearing $037^\circ$`], R`(a) $7$ km (b) $5$ km on a bearing of $037^\circ$`,
  R`**(a)** $3 + 4 = 7$ km.
**(b)** $\sqrt{9 + 16} = 5$ km. The angle east of north is $\tan^{-1}\frac34 = 36.9^\circ$, so the bearing is $037^\circ$.`,
  { fig: A8vec({ label: 'Walk 3 km east then 4 km north; the displacement is 5 km from start to finish', x0: -1, x1: 5, y0: -1, y1: 5, arrows: [{ from: [0, 0], to: [3, 0], label: '3', dy: -0.5 }, { from: [3, 0], to: [3, 4], label: '4', dx: 0.5 }, { from: [0, 0], to: [3, 4], label: '5', col: 'var(--pen)', dx: -0.6 }] }) }),
Q('A8.3-9', 3, R`An acceleration is given as $36\,000$ km h$^{-2}$. Convert it into m s$^{-2}$. [[2]]`,
  [R`$1$ km $= 1000$ m and $1$ h$^2 = 3600^2$ s$^2$.`, R`$\frac{36\,000 \times 1000}{3600^2}$.`],
  [R`|M1|$\frac{36\,000 \times 1000}{3600^2}$`, R`|A1|$2.78$ m s$^{-2}$`], R`$2.78$ m s$^{-2}$`,
  R`$\frac{3.6 \times 10^7}{1.296 \times 10^7} = 2.78$ m s$^{-2}$.`, NF),
Q('A8.3-10', 3, R`Find the weight of a $250$ g apple. [[1]]`,
  [R`Convert to kg first.`, R`$0.25 \times 9.8$.`],
  [R`|B1|$2.45$ N`], R`$2.45$ N`,
  R`$0.25$ kg $\times 9.8 = 2.45$ N.`, NF),
Q('A8.3-11', 3, R`A car travels round a circular track at a constant $20$ m s$^{-1}$. Explain why its speed is constant but its velocity is not. [[2]]`,
  [R`Speed has no direction.`, R`Does its direction change?`],
  [R`|B1|Speed (magnitude only) stays $20$ m s$^{-1}$`, R`|B1|Its direction keeps changing, so its velocity (a vector) changes`], R`The direction changes`,
  R`Speed is the magnitude only, which stays at $20$ m s$^{-1}$. Velocity includes direction, and the car's direction is always changing around the track, so its velocity changes.`, NF),
Q('A8.3-12', 4, R`Show that N m$^{-1}$ is equivalent to kg s$^{-2}$. [[2]]`,
  [R`$1$ N $= 1$ kg m s$^{-2}$.`, R`Divide by m.`],
  [R`|M1|N $=$ kg m s$^{-2}$`, R`|A1|N m$^{-1} =$ kg m s$^{-2}$ m$^{-1} =$ kg s$^{-2}$`], R`kg m s$^{-2}$ m$^{-1}$ = kg s$^{-2}$`,
  R`$1$ N $= 1$ kg m s$^{-2}$, so N m$^{-1} = $ kg m s$^{-2} \times$ m$^{-1}$ $=$ kg s$^{-2}$.`, NF),
Q('A8.3-13', 4, R`A car of mass $2.5$ tonnes accelerates at $2$ m s$^{-2}$. **(a)** Find its weight. **(b)** Find the resultant force on it. [[2]]`,
  [R`$1$ tonne $= 1000$ kg.`, R`Resultant force $= ma$.`],
  [R`(a)|B1|$24\,500$ N`, R`(b)|B1|$5000$ N`], R`(a) $24\,500$ N (b) $5000$ N`,
  R`**(a)** $2500 \times 9.8 = 24\,500$ N.
**(b)** $F = ma = 2500 \times 2 = 5000$ N.`, NF),
Q('A8.3-14', 4, R`A train travels $30$ km in $25$ minutes. Find its average speed in **(a)** km h$^{-1}$ **(b)** m s$^{-1}$. [[2]]`,
  [R`$25$ min $= \frac{25}{60}$ h.`, R`Then convert.`],
  [R`(a)|B1|$72$ km h$^{-1}$`, R`(b)|B1|$20$ m s$^{-1}$`], R`(a) $72$ km h$^{-1}$ (b) $20$ m s$^{-1}$`,
  R`**(a)** $30 \div \frac{25}{60} = 72$ km h$^{-1}$.
**(b)** $\frac{30\,000}{1500} = 20$ m s$^{-1}$.`, NF),
Q('A8.3-15', 5, R`A walker goes $600$ m north in $8$ minutes and then $800$ m east in $12$ minutes. Find **(a)** the total distance **(b)** the magnitude and bearing of the displacement **(c)** the average speed **(d)** the magnitude of the average velocity, both in m s$^{-1}$. [[6]]`,
  [R`Total time $1200$ s.`, R`Average velocity $=$ displacement $\div$ time.`],
  [R`(a)|B1|$1400$ m`, R`(b)|B1|$1000$ m`, R`(b)|B1|Bearing $053^\circ$`, R`(c)|M1|$\frac{1400}{1200}$`, R`(c)|A1|$1.17$ m s$^{-1}$`, R`(d)|B1|$\frac{1000}{1200} = 0.833$ m s$^{-1}$`], R`(a) $1400$ m (b) $1000$ m, $053^\circ$ (c) $1.17$ m s$^{-1}$ (d) $0.833$ m s$^{-1}$`,
  R`**(a)** $600 + 800 = 1400$ m.
**(b)** $\sqrt{600^2 + 800^2} = 1000$ m, at $\tan^{-1}\frac{800}{600} = 53.1^\circ$ east of north: bearing $053^\circ$.
**(c)** $\frac{1400}{1200} = 1.17$ m s$^{-1}$.
**(d)** $\frac{1000}{1200} = 0.833$ m s$^{-1}$.`, NF)
]};

CONTENT['A8.4'] = {
notes: R`
### Vectors in $\mathbf{i}, \mathbf{j}$ form
$\mathbf{i}$ is a unit vector in the $x$-direction (often east) and $\mathbf{j}$ in the $y$-direction (often north).
- **Magnitude:** $|a\mathbf{i} + b\mathbf{j}| = \sqrt{a^2 + b^2}$.
- **Direction:** the angle with $\mathbf{i}$ is $\tan^{-1}\frac{b}{a}$, adjusted for the quadrant. Always sketch it.
- **Speed** is the magnitude of the velocity; **distance** from a point is the magnitude of a displacement.
- Constant velocity: $\mathbf{r} = \mathbf{r}_0 + \mathbf{v}t$.

[[fig:A8.4-res]]

::: booklet
**Learn these:** $|a\mathbf{i} + b\mathbf{j}| = \sqrt{a^2 + b^2}$ and $\mathbf{r} = \mathbf{r}_0 + \mathbf{v}t$.
:::

### Worked example 1
Find the resultant of $3\mathbf{i} + 2\mathbf{j}$ and $-\mathbf{i} + 5\mathbf{j}$, and its magnitude.
- $(3 - 1)\mathbf{i} + (2 + 5)\mathbf{j} = 2\mathbf{i} + 7\mathbf{j}$.
- Magnitude $\sqrt{4 + 49} = \sqrt{53} = 7.28$.

### Worked example 2: bearings
Find the bearing of the velocity $-3\mathbf{i} + 4\mathbf{j}$.
- It points north-west: $3$ west and $4$ north.
- The angle west of north is $\tan^{-1}\frac34 = 36.9^\circ$, so the bearing is $360^\circ - 36.9^\circ = 323.1^\circ$.

**The trap:** quoting $\tan^{-1}\left(\frac{4}{-3}\right) = -53.1^\circ$ from the calculator. Sketch the vector, then measure clockwise from north.

### Watch out
- Speed is a number with units, never a vector.
- Two vectors are parallel when one is a multiple of the other.
`,
questions: [
Q('A8.4-1', 1, R`Find $|3\mathbf{i} + 4\mathbf{j}|$. [[1]]`,
  [R`Pythagoras.`, R`$\sqrt{9 + 16}$.`],
  [R`|B1|$5$`], R`$5$`,
  R`$\sqrt{3^2 + 4^2} = 5$.`, NF),
Q('A8.4-2', 1, R`A particle has velocity $(5\mathbf{i} - 12\mathbf{j})$ m s$^{-1}$. Find its speed. [[1]]`,
  [R`Speed is the magnitude.`, R`$\sqrt{25 + 144}$.`],
  [R`|B1|$13$ m s$^{-1}$`], R`$13$ m s$^{-1}$`,
  R`Speed $= \sqrt{5^2 + 12^2} = 13$ m s$^{-1}$.`, NF),
Q('A8.4-3', 1, R`Find the angle between $2\mathbf{i} + 2\mathbf{j}$ and $\mathbf{i}$. [[1]]`,
  [R`$\tan\theta = \frac22$.`, R`$\tan^{-1} 1$.`],
  [R`|B1|$45^\circ$`], R`$45^\circ$`,
  R`$\tan\theta = 1$, so $\theta = 45^\circ$.`, NF),
Q('A8.4-4', 2, R`$A$ has position vector $(2\mathbf{i} + 3\mathbf{j})$ m and $B$ has position vector $(7\mathbf{i} - \mathbf{j})$ m. Find $\overrightarrow{AB}$ and the distance $AB$. [[2]]`,
  [R`$\overrightarrow{AB} = \mathbf{b} - \mathbf{a}$.`, R`Then find its magnitude.`],
  [R`|B1|$5\mathbf{i} - 4\mathbf{j}$`, R`|B1|$\sqrt{41} = 6.40$ m`], R`$5\mathbf{i} - 4\mathbf{j}$; $6.40$ m`,
  R`$\overrightarrow{AB} = (7 - 2)\mathbf{i} + (-1 - 3)\mathbf{j} = 5\mathbf{i} - 4\mathbf{j}$, and $AB = \sqrt{25 + 16} = \sqrt{41} = 6.40$ m.`, NF),
Q('A8.4-5', 2, R`Find the resultant of $3\mathbf{i} + 2\mathbf{j}$ and $-\mathbf{i} + 5\mathbf{j}$, and its magnitude. [[2]]`,
  [R`Add the $\mathbf{i}$ and $\mathbf{j}$ parts.`, R`Then Pythagoras.`],
  [R`|B1|$2\mathbf{i} + 7\mathbf{j}$`, R`|B1|$\sqrt{53} = 7.28$`], R`$2\mathbf{i} + 7\mathbf{j}$, $7.28$`,
  R`$2\mathbf{i} + 7\mathbf{j}$, with magnitude $\sqrt{53} = 7.28$.`, { fig: FIGS['A8.4-res'] }),
Q('A8.4-6', 2, R`Find the angle that $4\mathbf{i} - 3\mathbf{j}$ makes with $\mathbf{i}$, and say whether it's above or below. [[2]]`,
  [R`$\tan\theta = \frac34$.`, R`The $\mathbf{j}$ part is negative.`],
  [R`|M1|$\tan^{-1}\frac34$`, R`|A1|$36.9^\circ$ below $\mathbf{i}$`], R`$36.9^\circ$ below $\mathbf{i}$`,
  R`$\tan^{-1}\frac34 = 36.9^\circ$. The $\mathbf{j}$ component is negative, so the vector is $36.9^\circ$ below $\mathbf{i}$.`,
  { fig: A8vec({ label: 'The vector 4i − 3j pointing right and down', x0: -1, x1: 5, y0: -4, y1: 1, arrows: [{ from: [0, 0], to: [4, -3], label: '4i − 3j', dx: 1, dy: 0.3 }] }) }),
Q('A8.4-7', 2, R`A boat moves at $6$ m s$^{-1}$ on a bearing of $060^\circ$. Write its velocity in the form $a\mathbf{i} + b\mathbf{j}$, where $\mathbf{i}$ is east and $\mathbf{j}$ is north. [[2]]`,
  [R`$60^\circ$ from north towards east.`, R`East part $6\sin60^\circ$, north part $6\cos60^\circ$.`],
  [R`|M1|$6\sin60^\circ\,\mathbf{i} + 6\cos60^\circ\,\mathbf{j}$`, R`|A1|$5.20\mathbf{i} + 3\mathbf{j}$`], R`$(5.20\mathbf{i} + 3\mathbf{j})$ m s$^{-1}$`,
  R`A bearing of $060^\circ$ is $60^\circ$ east of north, so $\mathbf{v} = 6\sin60^\circ\,\mathbf{i} + 6\cos60^\circ\,\mathbf{j} = 5.20\mathbf{i} + 3\mathbf{j}$.`, NF),
Q('A8.4-8', 3, R`Find the bearing of the velocity $(-3\mathbf{i} + 4\mathbf{j})$ m s$^{-1}$, where $\mathbf{i}$ is east and $\mathbf{j}$ is north. [[2]]`,
  [R`It points north-west.`, R`Angle west of north is $\tan^{-1}\frac34$.`],
  [R`|M1|$\tan^{-1}\frac34 = 36.9^\circ$ west of north`, R`|A1|$323^\circ$`], R`$323^\circ$`,
  R`The vector is $3$ west and $4$ north, so it is $\tan^{-1}\frac34 = 36.9^\circ$ west of north. Bearing $= 360^\circ - 36.9^\circ = 323^\circ$.`,
  { fig: A8vec({ label: 'The vector −3i + 4j pointing up and to the left', x0: -4, x1: 1, y0: -1, y1: 5, arrows: [{ from: [0, 0], to: [-3, 4], label: '−3i + 4j', dx: -1.2 }] }) }),
Q('A8.4-9', 3, R`A particle starts at $(3\mathbf{i} + 4\mathbf{j})$ m and moves with constant velocity $(2\mathbf{i} - \mathbf{j})$ m s$^{-1}$. Find its position vector after $5$ s. [[2]]`,
  [R`$\mathbf{r} = \mathbf{r}_0 + \mathbf{v}t$.`, R`$5(2\mathbf{i} - \mathbf{j}) = 10\mathbf{i} - 5\mathbf{j}$.`],
  [R`|M1|$(3\mathbf{i} + 4\mathbf{j}) + 5(2\mathbf{i} - \mathbf{j})$`, R`|A1|$(13\mathbf{i} - \mathbf{j})$ m`], R`$(13\mathbf{i} - \mathbf{j})$ m`,
  R`$\mathbf{r} = 3\mathbf{i} + 4\mathbf{j} + 10\mathbf{i} - 5\mathbf{j} = 13\mathbf{i} - \mathbf{j}$.`, NF),
Q('A8.4-10', 3, R`The vector $a\mathbf{i} + 6\mathbf{j}$ is parallel to $2\mathbf{i} + 3\mathbf{j}$. Find $a$. [[2]]`,
  [R`$a\mathbf{i} + 6\mathbf{j} = k(2\mathbf{i} + 3\mathbf{j})$.`, R`$3k = 6$.`],
  [R`|M1|$k = 2$`, R`|A1|$a = 4$`], R`$a = 4$`,
  R`$3k = 6$ gives $k = 2$, so $a = 2 \times 2 = 4$.`, NF),
Q('A8.4-11', 3, R`A particle moves at $15$ m s$^{-1}$ in the direction of $6\mathbf{i} + 8\mathbf{j}$. Find its velocity. [[2]]`,
  [R`$|6\mathbf{i} + 8\mathbf{j}| = 10$.`, R`Scale to length $15$.`],
  [R`|M1|$\frac{15}{10}(6\mathbf{i} + 8\mathbf{j})$`, R`|A1|$(9\mathbf{i} + 12\mathbf{j})$ m s$^{-1}$`], R`$(9\mathbf{i} + 12\mathbf{j})$ m s$^{-1}$`,
  R`The unit vector is $0.6\mathbf{i} + 0.8\mathbf{j}$, so $\mathbf{v} = 15(0.6\mathbf{i} + 0.8\mathbf{j}) = 9\mathbf{i} + 12\mathbf{j}$.`, NF),
Q('A8.4-12', 4, R`At noon ship $A$ is at $(2\mathbf{i} + 5\mathbf{j})$ km moving with velocity $(3\mathbf{i} - \mathbf{j})$ km h$^{-1}$, and ship $B$ is at $(8\mathbf{i} + 2\mathbf{j})$ km moving with velocity $(\mathbf{i} + \mathbf{j})$ km h$^{-1}$. **(a)** Find $\overrightarrow{AB}$ at time $t$ hours after noon. **(b)** Find the distance between the ships at $2$ pm. [[4]]`,
  [R`Write each position as $\mathbf{r}_0 + \mathbf{v}t$.`, R`$\overrightarrow{AB} = \mathbf{r}_B - \mathbf{r}_A$.`],
  [R`(a)|M1|$\mathbf{r}_A = (2 + 3t)\mathbf{i} + (5 - t)\mathbf{j}$, $\mathbf{r}_B = (8 + t)\mathbf{i} + (2 + t)\mathbf{j}$`, R`(a)|A1|$(6 - 2t)\mathbf{i} + (2t - 3)\mathbf{j}$`, R`(b)|M1|$t = 2$: $2\mathbf{i} + \mathbf{j}$`, R`(b)|A1|$\sqrt5 = 2.24$ km`], R`(a) $(6 - 2t)\mathbf{i} + (2t - 3)\mathbf{j}$ (b) $2.24$ km`,
  R`**(a)** $\overrightarrow{AB} = (8 + t - 2 - 3t)\mathbf{i} + (2 + t - 5 + t)\mathbf{j} = (6 - 2t)\mathbf{i} + (2t - 3)\mathbf{j}$.
**(b)** At $t = 2$: $2\mathbf{i} + \mathbf{j}$, so the distance is $\sqrt5 = 2.24$ km.`, NF),
Q('A8.4-13', 4, R`Using the ships in question 12, find the time at which $B$ is due north of $A$, and the distance between them then. [[3]]`,
  [R`Due north: the $\mathbf{i}$ part of $\overrightarrow{AB}$ is $0$.`, R`$6 - 2t = 0$.`],
  [R`|M1|$6 - 2t = 0$`, R`|A1|$t = 3$, i.e. $3$ pm`, R`|A1|$3$ km`], R`$3$ pm; $3$ km`,
  R`$6 - 2t = 0$ gives $t = 3$ ($3$ pm). Then $\overrightarrow{AB} = 3\mathbf{j}$, so $B$ is $3$ km due north of $A$.`, NF),
Q('A8.4-14', 4, R`A boat is steered at $5$ m s$^{-1}$ straight across a river (in the direction $\mathbf{j}$), and the current flows at $2$ m s$^{-1}$ (in the direction $\mathbf{i}$). Find the resultant velocity, the speed, and the angle the boat's path makes with the bank. [[3]]`,
  [R`Add the two velocities.`, R`The bank is along $\mathbf{i}$.`],
  [R`|B1|$(2\mathbf{i} + 5\mathbf{j})$ m s$^{-1}$`, R`|B1|$5.39$ m s$^{-1}$`, R`|B1|$68.2^\circ$`], R`$2\mathbf{i} + 5\mathbf{j}$; $5.39$ m s$^{-1}$; $68.2^\circ$`,
  R`Resultant $2\mathbf{i} + 5\mathbf{j}$, speed $\sqrt{29} = 5.39$ m s$^{-1}$, angle with the bank $\tan^{-1}\frac52 = 68.2^\circ$.`,
  { fig: A8vec({ label: 'Velocity across the river 5j, current 2i, resultant 2i + 5j', x0: -1, x1: 4, y0: -1, y1: 6, arrows: [{ from: [0, 0], to: [0, 5], label: '5j', dx: -0.6 }, { from: [0, 5], to: [2, 5], label: '2i', dy: 0.5 }, { from: [0, 0], to: [2, 5], label: 'resultant', col: 'var(--pen)', dx: 1.4, dy: -0.4 }] }) }),
Q('A8.4-15', 5, R`At $t = 0$, particle $P$ is at $(-2\mathbf{i} + 3\mathbf{j})$ m with constant velocity $(4\mathbf{i} + 2\mathbf{j})$ m s$^{-1}$, and particle $Q$ is at $(10\mathbf{i} - 3\mathbf{j})$ m with constant velocity $(-2\mathbf{i} + 5\mathbf{j})$ m s$^{-1}$. **(a)** Find the position vectors of $P$ and $Q$ at time $t$. **(b)** Show that $P$ and $Q$ collide, and find when and where. **(c)** Find the distance between them at $t = 1$. [[7]]`,
  [R`They collide if both components match at the same $t$.`, R`$-2 + 4t = 10 - 2t$ gives $t$.`],
  [R`(a)|B1|$\mathbf{p} = (-2 + 4t)\mathbf{i} + (3 + 2t)\mathbf{j}$`, R`(a)|B1|$\mathbf{q} = (10 - 2t)\mathbf{i} + (-3 + 5t)\mathbf{j}$`, R`(b)|M1|$-2 + 4t = 10 - 2t$ gives $t = 2$`, R`(b)|M1|Checks $\mathbf{j}$: $3 + 4 = -3 + 10 = 7$`, R`(b)|A1|Collide at $t = 2$ at $(6\mathbf{i} + 7\mathbf{j})$ m`, R`(c)|M1|$\mathbf{q} - \mathbf{p} = 6\mathbf{i} - 3\mathbf{j}$`, R`(c)|A1|$6.71$ m`], R`(b) $t = 2$ s at $(6\mathbf{i} + 7\mathbf{j})$ m (c) $6.71$ m`,
  R`**(a)** $\mathbf{p} = (-2 + 4t)\mathbf{i} + (3 + 2t)\mathbf{j}$ and $\mathbf{q} = (10 - 2t)\mathbf{i} + (-3 + 5t)\mathbf{j}$.
**(b)** $\mathbf{i}$: $-2 + 4t = 10 - 2t$, so $t = 2$. $\mathbf{j}$ at $t = 2$: $3 + 4 = 7$ and $-3 + 10 = 7$. Both match, so they collide at $t = 2$ s at $6\mathbf{i} + 7\mathbf{j}$.
**(c)** At $t = 1$: $\mathbf{p} = 2\mathbf{i} + 5\mathbf{j}$ and $\mathbf{q} = 8\mathbf{i} + 2\mathbf{j}$, so $\mathbf{q} - \mathbf{p} = 6\mathbf{i} - 3\mathbf{j}$ and the distance is $\sqrt{45} = 6.71$ m.`, NF)
]};
