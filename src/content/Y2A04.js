/* Statistics and Mechanics Year 2 · Chapter 4 Moments (sections 4.1 to 4.5) */
BOOK_CHAPTERS.push({ id:'Y2A04', book:'Statistics & Mechanics Year 2', label:'Chapter 4', title:'Moments', mech: true, sections:[
  { id:'2A4.1', num:'4.1', title:'Moments' },
  { id:'2A4.2', num:'4.2', title:'Resultant moments' },
  { id:'2A4.3', num:'4.3', title:'Equilibrium' },
  { id:'2A4.4', num:'4.4', title:'Centres of mass' },
  { id:'2A4.5', num:'4.5', title:'Tilting' }
]});
const BM = (label, L, opts) => Fig.beam(Object.assign({ label, L }, opts));
const AB = L => [{ x: 0, label: 'A' }, { x: L, label: 'B' }];
FIGS['2A4.1-mom'] = BM('A force of 12 N acting downwards 2 m to the right of the pivot P gives a clockwise moment of 24 N m', 4, { supports: [{ x: 1, label: 'P' }], forces: [{ x: 3, dir: 'down', label: '12 N' }], dims: [1, 3] });
FIGS['2A4.1-angle'] = BM('A 20 N force acting at 30 degrees to the rod, 4 m from P: its perpendicular component is 20 sin 30 = 10 N', 4, { names: [{ x: 0, label: 'P' }], hinge: 0, forces: [{ x: 4, dir: 150, label: '20 N', len: 64, angle: '30°' }], dims: [0, 4] });
FIGS['2A4.3-plank'] = BM('Uniform plank AB of length 4 m and mass 20 kg resting on supports at A and B, with a person of 60 kg 1 m from A', 4, { names: AB(4), supports: [{ x: 0 }, { x: 4 }], forces: [{ x: 0, dir: 'up', label: 'R_A' }, { x: 4, dir: 'up', label: 'R_B' }, { x: 1, dir: 'down', label: '60g', weight: true }, { x: 2, dir: 'down', label: '20g', weight: true }], dims: [0, 1, 2, 4] });
FIGS['2A4.5-tilt'] = BM('Uniform rod AB of length 5 m and mass 12 kg on supports at C, 1 m from A, and D, 1 m from B, with a particle at A. On the point of tilting about C the reaction at D is zero', 5, { names: AB(5), supports: [{ x: 1, label: 'C' }, { x: 4, label: 'D' }], forces: [{ x: 1, dir: 'up', label: 'R_C' }, { x: 0, dir: 'down', label: 'mg', weight: true }, { x: 2.5, dir: 'down', label: '12g', weight: true }], dims: [0, 1, 2.5, 4, 5] });

CONTENT['2A4.1'] = {
notes: R`
### What is a moment?
The **moment** of a force about a point $P$ measures its turning effect:
$$\text{moment} = \text{force} \times \text{perpendicular distance from } P \text{ to the line of action}$$
- Units: newton metres (N m).
- Give the sense: **clockwise** or **anticlockwise**.
- A force whose line of action passes through $P$ has zero moment about $P$.

[[fig:2A4.1-mom]]

### Forces at an angle
If a force $F$ acts at a distance $d$ along a rod at angle $\theta$ to the rod, either use the perpendicular component $F\sin\theta$ times $d$, or $F$ times the perpendicular distance $d\sin\theta$. Both give $Fd\sin\theta$.

[[fig:2A4.1-angle]]

::: booklet
**Learn this:** moment $=$ force $\times$ perpendicular distance. It's not in the formula booklet.
:::

### Worked example 1
A $12$ N force acts downwards $2$ m to the right of a pivot $P$ (diagram above).
- Moment $= 12 \times 2 = 24$ N m, clockwise.

### Worked example 2: perpendicular, not along
A $20$ N force acts at the end of a $4$ m rod, at $30^\circ$ to the rod. Find its moment about the other end $P$.
- Perpendicular component $= 20\sin30^\circ = 10$ N, so the moment is $10 \times 4 = 40$ N m.

**The trap:** using $20 \times 4 = 80$ N m. Only the component perpendicular to the rod turns it; the component along the rod passes through $P$.

### Watch out
- Draw the line of action of each force and measure the shortest distance to the point.
`,
questions: [
Q('2A4.1-1', 1, R`Find the moment about $P$ of a $10$ N force whose line of action is $3$ m from $P$. [[1]]`,
  [R`Force $\times$ perpendicular distance.`, R`$10 \times 3$.`],
  [R`|B1|$30$ N m`], R`$30$ N m`,
  R`Moment $= 10 \times 3 = 30$ N m.`, { fig: BM('A 10 N force acting 3 m from P', 4, { supports: [{ x: 0.5, label: 'P' }], forces: [{ x: 3.5, dir: 'down', label: '10 N' }], dims: [0.5, 3.5] }) }),
Q('2A4.1-2', 1, R`The diagram shows a $12$ N force acting on a rod pivoted at $P$. Find the moment of the force about $P$, stating its direction. [[1]]`,
  [R`$12 \times 2$.`, R`Which way would it turn the rod?`],
  [R`|B1|$24$ N m clockwise`], R`$24$ N m clockwise`,
  R`$12 \times 2 = 24$ N m. The force is to the right of $P$ and pushes down, so the turning is clockwise.`, { fig: FIGS['2A4.1-mom'] }),
Q('2A4.1-3', 1, R`State the SI units of a moment. [[1]]`,
  [R`Force times distance.`, R`Newtons and metres.`],
  [R`|B1|N m (newton metres)`], R`N m`,
  R`A moment is force times distance, so its unit is the newton metre, N m.`, NF),
Q('2A4.1-4', 2, R`An $8$ N force acts $0.5$ m from a point $P$, perpendicular to the line joining them. Find its moment about $P$. [[1]]`,
  [R`$8 \times 0.5$.`, R`Units N m.`],
  [R`|B1|$4$ N m`], R`$4$ N m`,
  R`$8 \times 0.5 = 4$ N m.`, NF),
Q('2A4.1-5', 2, R`A force acts along a line that passes through the point $P$. What is its moment about $P$? Explain. [[1]]`,
  [R`What is the perpendicular distance?`, R`Zero.`],
  [R`|B1|$0$, because the perpendicular distance is $0$`], R`$0$`,
  R`Its line of action passes through $P$, so the perpendicular distance is $0$ and the moment is $0$.`, NF),
Q('2A4.1-6', 2, R`A light rod is hinged at $P$. A $20$ N force acts at the other end, $4$ m from $P$, at $30^\circ$ to the rod. Find the moment of the force about $P$. [[2]]`,
  [R`Use the component perpendicular to the rod.`, R`$20\sin30^\circ \times 4$.`],
  [R`|M1|$20\sin30^\circ \times 4$`, R`|A1|$40$ N m`], R`$40$ N m`,
  R`Perpendicular component $= 20\sin30^\circ = 10$ N, so the moment is $10 \times 4 = 40$ N m.`, { fig: FIGS['2A4.1-angle'] }),
Q('2A4.1-7', 2, R`A horizontal force of $15$ N acts through a point that is $2$ m to the right of $P$ and $3$ m above $P$. Find its moment about $P$. [[2]]`,
  [R`The perpendicular distance to a horizontal line of action is the vertical distance.`, R`$15 \times 3$.`],
  [R`|M1|Perpendicular distance $3$ m`, R`|A1|$45$ N m`], R`$45$ N m`,
  R`The line of action is horizontal and $3$ m above $P$, so the perpendicular distance is $3$ m. Moment $= 45$ N m. (The $2$ m is along the line of action, so it doesn't matter.)`, NF),
Q('2A4.1-8', 3, R`A rod $AB$ of length $5$ m has a force of $6$ N acting at $B$, perpendicular to the rod. Find the moment of the force about **(a)** $A$ **(b)** the midpoint of $AB$. [[2]]`,
  [R`Distances $5$ m and $2.5$ m.`, R`Multiply.`],
  [R`(a)|B1|$30$ N m`, R`(b)|B1|$15$ N m`], R`(a) $30$ N m (b) $15$ N m`,
  R`**(a)** $6 \times 5 = 30$ N m.
**(b)** $6 \times 2.5 = 15$ N m.`, { fig: BM('Rod AB of length 5 m with a 6 N force at B perpendicular to the rod', 5, { names: AB(5), forces: [{ x: 5, dir: 'up', label: '6 N' }], dims: [0, 2.5, 5] }) }),
Q('2A4.1-9', 3, R`A $25$ N force acts on a rod $2$ m from a point $P$ on the rod, at $60^\circ$ to the rod. Find its moment about $P$. [[2]]`,
  [R`$25 \times 2\sin60^\circ$.`, R`$\sin 60^\circ = 0.866$.`],
  [R`|M1|$25 \times 2\sin60^\circ$`, R`|A1|$43.3$ N m`], R`$43.3$ N m`,
  R`$25 \times 2 \times \frac{\sqrt3}{2} = 25\sqrt3 = 43.3$ N m.`, { fig: BM('A 25 N force at 60 degrees to the rod, 2 m from P', 3, { names: [{ x: 0.5, label: 'P' }], forces: [{ x: 2.5, dir: 60, label: '25 N', len: 60, angle: '60°' }], dims: [0.5, 2.5] }) }),
Q('2A4.1-10', 3, R`A uniform rod of mass $4$ kg and length $3$ m is held horizontal. Find the moment of its weight about one end. [[2]]`,
  [R`The weight acts at the midpoint.`, R`$4g \times 1.5$.`],
  [R`|M1|$4g \times 1.5$`, R`|A1|$58.8$ N m`], R`$58.8$ N m`,
  R`The weight $4g$ acts at the midpoint, $1.5$ m from the end: $4 \times 9.8 \times 1.5 = 58.8$ N m.`, { fig: BM('Uniform rod of length 3 m with its weight 4g acting at the midpoint', 3, { names: AB(3), forces: [{ x: 1.5, dir: 'down', label: '4g', weight: true }], dims: [0, 1.5, 3] }) }),
Q('2A4.1-11', 3, R`A force of $9$ N has a moment of $36$ N m about a point $P$. Find the perpendicular distance from $P$ to the line of action of the force. [[1]]`,
  [R`$36 = 9d$.`, R`$d = 4$.`],
  [R`|B1|$4$ m`], R`$4$ m`,
  R`$d = \frac{36}{9} = 4$ m.`, NF),
Q('2A4.1-12', 4, R`A force $F$ N acts on a rod at a point $1.5$ m from $P$, at $40^\circ$ to the rod. Its moment about $P$ is $20$ N m. Find $F$. [[3]]`,
  [R`$F \times 1.5\sin40^\circ = 20$.`, R`$\sin40^\circ = 0.643$.`],
  [R`|M1|$F \times 1.5\sin40^\circ = 20$`, R`|M1|$F = \frac{20}{1.5\sin40^\circ}$`, R`|A1|$20.7$ N`], R`$20.7$ N`,
  R`$F = \frac{20}{1.5 \times 0.6428} = 20.7$ N.`, NF),
Q('2A4.1-13', 4, R`A force $(3\mathbf{i} + 4\mathbf{j})$ N acts at the point $(2, 1)$ m. Find its moment about the origin, stating the sense. [[3]]`,
  [R`Moment $= xF_y - yF_x$ (anticlockwise positive).`, R`$2 \times 4 - 1 \times 3$.`],
  [R`|M1|$x F_y - y F_x$`, R`|A1|$2(4) - 1(3) = 5$`, R`|A1|$5$ N m anticlockwise`], R`$5$ N m anticlockwise`,
  R`Split the force: $4$ N up acts $2$ m to the right of $O$ (anticlockwise, $8$ N m); $3$ N to the right acts $1$ m above $O$ (clockwise, $3$ N m). Resultant $5$ N m anticlockwise.`, NF),
Q('2A4.1-14', 4, R`A spanner is $25$ cm long. **(a)** Find the moment of a $30$ N force applied perpendicular to the end. **(b)** Find the force needed to give a moment of $12$ N m. [[2]]`,
  [R`Convert to metres.`, R`$30 \times 0.25$.`],
  [R`(a)|B1|$7.5$ N m`, R`(b)|B1|$48$ N`], R`(a) $7.5$ N m (b) $48$ N`,
  R`**(a)** $30 \times 0.25 = 7.5$ N m.
**(b)** $F = \frac{12}{0.25} = 48$ N.`, NF),
Q('2A4.1-15', 5, R`A light rod $AB$ of length $4$ m has three forces on it: $10$ N vertically up at $A$, $6$ N vertically down $1$ m from $A$, and $8$ N at $B$ at $60^\circ$ to the rod, as shown. Find the resultant moment about $A$. [[4]]`,
  [R`The force at $A$ has no moment about $A$.`, R`The $8$ N force: perpendicular component $8\sin60^\circ$.`],
  [R`|B1|$10$ N at $A$ has zero moment`, R`|M1|$6 \times 1 = 6$ N m clockwise`, R`|M1|$8\sin60^\circ \times 4 = 27.7$ N m anticlockwise`, R`|A1|$21.7$ N m anticlockwise`], R`$21.7$ N m anticlockwise`,
  R`About $A$: the $10$ N force has no moment; $6$ N gives $6$ N m clockwise; $8$ N gives $8 \times \frac{\sqrt3}{2} \times 4 = 27.7$ N m anticlockwise. Resultant $21.7$ N m anticlockwise.`,
  { fig: BM('Rod AB of length 4 m: 10 N up at A, 6 N down 1 m from A, 8 N at 60 degrees at B', 4, { names: AB(4), forces: [{ x: 0, dir: 'up', label: '10 N' }, { x: 1, dir: 'down', label: '6 N' }, { x: 4, dir: 120, label: '8 N', len: 56, angle: '60°' }], dims: [0, 1, 4] }) })
]};

CONTENT['2A4.2'] = {
notes: R`
### Resultant moment
The **resultant moment** about a point is the sum of the moments of all the forces, taking one sense (say clockwise) as positive and the other as negative.

- If the resultant moment is zero, there's no turning about that point.
- The resultant moment depends on the point you take moments about.

::: booklet
**Learn this:** choose a positive sense, write each moment with its sign, then add.
:::

### Worked example 1
A rod $AB$ of length $8$ m has downward forces of $10$ N at $A$, $20$ N at $3$ m from $A$ and $15$ N at $B$. Find the resultant moment about $A$.
- $20 \times 3 + 15 \times 8 = 180$ N m clockwise (the force at $A$ has no moment).

### Worked example 2: forces on both sides
A pivot $P$ has a $5$ N weight $2$ m to its right and a $3$ N weight $1$ m to its left.
- Clockwise: $5 \times 2 = 10$. Anticlockwise: $3 \times 1 = 3$.
- Resultant $= 7$ N m clockwise.

**The trap:** adding the two moments to get $13$ N m. Forces on opposite sides of the pivot turn in opposite senses.

### Watch out
- An upward force to the **left** of a pivot turns **clockwise**, just like a downward force on the right.
`,
questions: [
Q('2A4.2-1', 1, R`A $5$ N weight hangs $2$ m to the right of a pivot $P$ on a light rod, and a $3$ N weight hangs $1$ m to the left. Find the resultant moment about $P$. [[2]]`,
  [R`Clockwise $10$, anticlockwise $3$.`, R`Subtract.`],
  [R`|M1|$5 \times 2 - 3 \times 1$`, R`|A1|$7$ N m clockwise`], R`$7$ N m clockwise`,
  R`$10$ N m clockwise and $3$ N m anticlockwise give $7$ N m clockwise.`, { fig: BM('Pivot P with 3 N 1 m to the left and 5 N 2 m to the right', 4, { supports: [{ x: 1.5, label: 'P' }], forces: [{ x: 0.5, dir: 'down', label: '3 N' }, { x: 3.5, dir: 'down', label: '5 N' }], dims: [0.5, 1.5, 3.5] }) }),
Q('2A4.2-2', 1, R`A light rod of length $6$ m is pivoted at its midpoint, with a $4$ N weight at each end. Find the resultant moment about the pivot. [[1]]`,
  [R`$12$ N m each way.`, R`They cancel.`],
  [R`|B1|$0$`], R`$0$`,
  R`Each weight gives $4 \times 3 = 12$ N m, in opposite senses, so the resultant moment is $0$.`, { fig: BM('Light rod 6 m pivoted at its midpoint with 4 N at each end', 6, { supports: [{ x: 3 }], forces: [{ x: 0, dir: 'down', label: '4 N' }, { x: 6, dir: 'down', label: '4 N' }], dims: [0, 3, 6] }) }),
Q('2A4.2-3', 1, R`A light rod $AB$ of length $4$ m has a $2$ N force vertically up at $A$ and a $2$ N force vertically down at $B$. Find the resultant moment about the midpoint. [[2]]`,
  [R`Up on the left turns clockwise.`, R`Down on the right also turns clockwise.`],
  [R`|M1|Both moments clockwise, $2 \times 2$ each`, R`|A1|$8$ N m clockwise`], R`$8$ N m clockwise`,
  R`The upward force at $A$ and the downward force at $B$ both turn the rod clockwise about the midpoint: $4 + 4 = 8$ N m.`, { fig: BM('Rod AB 4 m with 2 N up at A and 2 N down at B', 4, { names: AB(4), forces: [{ x: 0, dir: 'up', label: '2 N' }, { x: 4, dir: 'down', label: '2 N' }], dims: [0, 2, 4] }) }),
Q('2A4.2-4', 2, R`A light rod $AB$ of length $8$ m has downward forces of $10$ N at $A$, $20$ N at $3$ m from $A$, and $15$ N at $B$. Find the resultant moment about $A$. [[2]]`,
  [R`The force at $A$ has no moment about $A$.`, R`$20 \times 3 + 15 \times 8$.`],
  [R`|M1|$20 \times 3 + 15 \times 8$`, R`|A1|$180$ N m clockwise`], R`$180$ N m clockwise`,
  R`$60 + 120 = 180$ N m clockwise.`, { fig: BM('Rod AB of length 8 m with downward forces 10 N at A, 20 N 3 m from A and 15 N at B', 8, { names: AB(8), forces: [{ x: 0, dir: 'down', label: '10 N' }, { x: 3, dir: 'down', label: '20 N' }, { x: 8, dir: 'down', label: '15 N' }], dims: [0, 3, 8] }) }),
Q('2A4.2-5', 2, R`For the rod in question 4, find the resultant moment about $B$. [[2]]`,
  [R`Distances from $B$: $8$ and $5$.`, R`Both anticlockwise.`],
  [R`|M1|$10 \times 8 + 20 \times 5$`, R`|A1|$180$ N m anticlockwise`], R`$180$ N m anticlockwise`,
  R`$80 + 100 = 180$ N m anticlockwise.`, NF),
Q('2A4.2-6', 2, R`A uniform rod of mass $3$ kg and length $2$ m is pivoted at one end. A force of $5$ N acts vertically upwards at the other end. Find the resultant moment about the pivot. [[2]]`,
  [R`Weight $3g$ at $1$ m.`, R`$5$ N at $2$ m in the other sense.`],
  [R`|M1|$3g \times 1 - 5 \times 2$`, R`|A1|$19.4$ N m clockwise`], R`$19.4$ N m clockwise`,
  R`Weight: $29.4$ N m clockwise. Force: $10$ N m anticlockwise. Resultant $19.4$ N m clockwise.`, { fig: BM('Uniform rod 2 m pivoted at A, weight 3g at the middle and 5 N up at B', 2, { names: AB(2), hinge: 0, forces: [{ x: 1, dir: 'down', label: '3g', weight: true }, { x: 2, dir: 'up', label: '5 N' }], dims: [0, 1, 2] }) }),
Q('2A4.2-7', 2, R`A light rod $AB$ of length $5$ m has a $6$ N weight at $A$ and a $4$ N weight at $B$. Find the point about which the resultant moment is zero. [[2]]`,
  [R`Let the point be $x$ m from $A$.`, R`$6x = 4(5 - x)$.`],
  [R`|M1|$6x = 4(5 - x)$`, R`|A1|$2$ m from $A$`], R`$2$ m from $A$`,
  R`$6x = 20 - 4x$ gives $x = 2$ m from $A$.`, NF),
Q('2A4.2-8', 3, R`A light rod $AB$ of length $6$ m is pivoted at $C$, $2$ m from $A$. A $10$ N force acts vertically down at $A$, and a $12$ N force acts at $B$ at $30^\circ$ to the rod, as shown. Find the resultant moment about $C$. [[3]]`,
  [R`$10 \times 2$ anticlockwise.`, R`$12\sin30^\circ \times 4$ clockwise.`],
  [R`|M1|$10 \times 2 = 20$ anticlockwise`, R`|M1|$12\sin30^\circ \times 4 = 24$ clockwise`, R`|A1|$4$ N m clockwise`], R`$4$ N m clockwise`,
  R`Anticlockwise: $20$ N m. Clockwise: $6 \times 4 = 24$ N m. Resultant $4$ N m clockwise.`,
  { fig: BM('Rod AB 6 m pivoted at C 2 m from A: 10 N down at A, 12 N at 30 degrees below the rod at B', 6, { names: AB(6), supports: [{ x: 2, label: 'C' }], forces: [{ x: 0, dir: 'down', label: '10 N' }, { x: 6, dir: 210, label: '12 N', len: 56, angle: '30°' }], dims: [0, 2, 6] }) }),
Q('2A4.2-9', 3, R`A light rod $AB$ of length $4$ m has downward forces of $5$ N at $1$ m from $A$ and $8$ N at $3$ m from $A$, and an upward force of $6$ N at $B$. Find the resultant moment about $A$. [[3]]`,
  [R`Clockwise: $5 + 24$.`, R`Anticlockwise: $6 \times 4$.`],
  [R`|M1|Clockwise $5 \times 1 + 8 \times 3 = 29$`, R`|M1|Anticlockwise $6 \times 4 = 24$`, R`|A1|$5$ N m clockwise`], R`$5$ N m clockwise`,
  R`$29 - 24 = 5$ N m clockwise.`, { fig: BM('Rod AB 4 m: 5 N down at 1 m, 8 N down at 3 m, 6 N up at B', 4, { names: AB(4), forces: [{ x: 1, dir: 'down', label: '5 N' }, { x: 3, dir: 'down', label: '8 N' }, { x: 4, dir: 'up', label: '6 N' }], dims: [0, 1, 3, 4] }) }),
Q('2A4.2-10', 3, R`Force $\mathbf{F}_1 = (2\mathbf{i} + 3\mathbf{j})$ N acts at $(1, 0)$ m and force $\mathbf{F}_2 = (-\mathbf{i} + \mathbf{j})$ N acts at $(0, 2)$ m. Find the resultant moment about the origin. [[3]]`,
  [R`Moment $= xF_y - yF_x$ (anticlockwise positive).`, R`$3$ and $2$.`],
  [R`|M1|$\mathbf{F}_1$: $1 \times 3 - 0 \times 2 = 3$`, R`|M1|$\mathbf{F}_2$: $0 \times 1 - 2 \times (-1) = 2$`, R`|A1|$5$ N m anticlockwise`], R`$5$ N m anticlockwise`,
  R`$\mathbf{F}_1$ gives $3$ N m anticlockwise; $\mathbf{F}_2$'s $-\mathbf{i}$ part acts $2$ m above $O$ and turns anticlockwise, $2$ N m. Total $5$ N m anticlockwise.`, NF),
Q('2A4.2-11', 4, R`A light rod $AB$ of length $5$ m is hinged at $A$. A $20$ N weight hangs $2$ m from $A$, and a force $F$ N acts at $B$ at $30^\circ$ to the rod, as shown. The resultant moment about $A$ is zero. Find $F$. [[3]]`,
  [R`$20 \times 2 = F\sin30^\circ \times 5$.`, R`$40 = 2.5F$.`],
  [R`|M1|$20 \times 2$`, R`|M1|$F\sin30^\circ \times 5$`, R`|A1|$F = 16$`], R`$16$ N`,
  R`$40 = 2.5F$, so $F = 16$ N.`, { fig: BM('Rod AB 5 m hinged at A: 20 N down 2 m from A, force F at 30 degrees above the rod at B', 5, { names: AB(5), hinge: 0, forces: [{ x: 2, dir: 'down', label: '20 N' }, { x: 5, dir: 150, label: 'F', len: 56, angle: '30°' }], dims: [0, 2, 5] }) }),
Q('2A4.2-12', 4, R`A square lamina $ABCD$ of side $2$ m has forces of $3$ N, $4$ N, $5$ N and $6$ N acting along $AB$, $BC$, $CD$ and $DA$ respectively, all in the anticlockwise sense round the square. Find the resultant moment about the centre. [[3]]`,
  [R`Each side is $1$ m from the centre.`, R`All turn the same way.`],
  [R`|M1|Perpendicular distance $1$ m for each`, R`|M1|$(3 + 4 + 5 + 6) \times 1$`, R`|A1|$18$ N m anticlockwise`], R`$18$ N m anticlockwise`,
  R`Each force acts along a side $1$ m from the centre, and all four turn anticlockwise: $18$ N m.`, NF),
Q('2A4.2-13', 4, R`A light rod $AB$ of length $6$ m carries forces $P$ N and $Q$ N vertically downwards at $2$ m and $5$ m from $A$. The resultant moment about $A$ is $30$ N m clockwise, and about $B$ it is $12$ N m anticlockwise. Find $P$ and $Q$. [[4]]`,
  [R`About $A$: $2P + 5Q = 30$.`, R`About $B$: $4P + Q = 12$.`],
  [R`|M1|$2P + 5Q = 30$`, R`|M1|$4P + Q = 12$`, R`|A1|$P = \frac53$`, R`|A1|$Q = \frac{16}{3}$`], R`$P = \frac53$, $Q = \frac{16}{3}$`,
  R`From the second, $Q = 12 - 4P$; then $2P + 60 - 20P = 30$, so $P = \frac53$ and $Q = \frac{16}{3}$.`, NF),
Q('2A4.2-14', 4, R`A uniform rod $AB$ of length $4$ m and mass $2$ kg is held horizontal. A $10$ N force acts upwards at $A$ and a $15$ N force acts downwards at $B$. Find the resultant moment about **(a)** $A$ **(b)** the midpoint $M$. [[4]]`,
  [R`The weight $2g$ acts at $M$.`, R`About $M$, the weight has no moment.`],
  [R`(a)|M1|$2g \times 2 + 15 \times 4$`, R`(a)|A1|$99.2$ N m clockwise`, R`(b)|M1|$10 \times 2 + 15 \times 2$`, R`(b)|A1|$50$ N m clockwise`], R`(a) $99.2$ N m (b) $50$ N m, both clockwise`,
  R`**(a)** $39.2 + 60 = 99.2$ N m clockwise.
**(b)** Both forces turn clockwise about $M$: $20 + 30 = 50$ N m.`, NF),
Q('2A4.2-15', 5, R`A light rod $AB$ of length $10$ m carries weights of $30$ N at $1$ m, $50$ N at $4$ m and $20$ N at $9$ m from $A$. **(a)** Find the resultant moment about $A$. **(b)** Find the resultant moment about the point $5$ m from $A$. **(c)** Find the point about which the resultant moment is zero. [[5]]`,
  [R`(c): the point $x$ where $\sum W(d - x) = 0$.`, R`$x = \frac{\sum Wd}{\sum W}$.`],
  [R`(a)|M1|$30 + 200 + 180$`, R`(a)|A1|$410$ N m clockwise`, R`(b)|B1|$90$ N m anticlockwise`, R`(c)|M1|$100x = 410$`, R`(c)|A1|$4.1$ m from $A$`], R`(a) $410$ N m (b) $90$ N m anticlockwise (c) $4.1$ m from $A$`,
  R`**(a)** $30(1) + 50(4) + 20(9) = 410$ N m clockwise.
**(b)** About $5$ m: $30 \times 4 + 50 \times 1 = 170$ anticlockwise, $20 \times 4 = 80$ clockwise, so $90$ N m anticlockwise.
**(c)** $100x = 410$, so $x = 4.1$ m from $A$.`, { fig: BM('Rod AB of 10 m with weights 30 N at 1 m, 50 N at 4 m and 20 N at 9 m from A', 10, { names: AB(10), forces: [{ x: 1, dir: 'down', label: '30 N' }, { x: 4, dir: 'down', label: '50 N' }, { x: 9, dir: 'down', label: '20 N' }], dims: [0, 1, 4, 9, 10] }) })
]};

CONTENT['2A4.3'] = {
notes: R`
### Equilibrium of a rigid body
A rigid body is in equilibrium when **both**:
- the resultant force is zero (resolve up = down, left = right), and
- the resultant moment about **any** point is zero (clockwise = anticlockwise).

Take moments about a point where an unknown force acts: that force then has no moment, so it disappears from the equation.

[[fig:2A4.3-plank]]

::: booklet
**Learn these:** resolving and taking moments. A **uniform** rod's weight acts at its midpoint.
:::

### Worked example 1
A uniform plank $AB$ of length $4$ m and mass $20$ kg rests on supports at $A$ and $B$. A person of mass $60$ kg stands $1$ m from $A$ (diagram above).
- Moments about $A$: $4R_B = 20g \times 2 + 60g \times 1 = 100g$, so $R_B = 25g = 245$ N.
- Resolving: $R_A = 80g - 25g = 55g = 539$ N.

### Worked example 2: choosing the point
A uniform rod of mass $10$ kg and length $6$ m rests on supports at $A$ and $C$, where $AC = 4$ m. Find the reactions.
- Moments about $A$: $4R_C = 10g \times 3$, so $R_C = 7.5g = 73.5$ N. Then $R_A = 2.5g = 24.5$ N.

**The trap:** taking moments about the midpoint with both reactions unknown, giving one equation with two unknowns. Pick a point where an unknown acts.

### Watch out
- Leave answers in terms of $g$ until the end if that keeps the working tidy.
`,
questions: [
Q('2A4.3-1', 1, R`A uniform rod of weight $20$ N and length $4$ m rests on supports at its ends. Find the reaction at each support. [[1]]`,
  [R`By symmetry the reactions are equal.`, R`$20 \div 2$.`],
  [R`|B1|$10$ N each`], R`$10$ N each`,
  R`The weight acts at the midpoint, so by symmetry each support takes $10$ N.`, { fig: BM('Uniform rod 4 m of weight 20 N on supports at both ends', 4, { names: AB(4), supports: [{ x: 0 }, { x: 4 }], forces: [{ x: 0, dir: 'up', label: 'R' }, { x: 4, dir: 'up', label: 'R' }, { x: 2, dir: 'down', label: '20 N', weight: true }], dims: [0, 2, 4] }) }),
Q('2A4.3-2', 1, R`A child of mass $30$ kg sits $2$ m from the pivot of a light see-saw. How far from the pivot, on the other side, should a child of mass $40$ kg sit to balance it? [[2]]`,
  [R`$30g \times 2 = 40g \times d$.`, R`$g$ cancels.`],
  [R`|M1|$30 \times 2 = 40d$`, R`|A1|$1.5$ m`], R`$1.5$ m`,
  R`$60 = 40d$, so $d = 1.5$ m.`, { fig: BM('See-saw with 30g at 2 m on one side and 40g at d m on the other', 4, { supports: [{ x: 2 }], forces: [{ x: 0, dir: 'down', label: '30g', weight: true }, { x: 3.5, dir: 'down', label: '40g', weight: true }], dims: [0, 2, 3.5] }) }),
Q('2A4.3-3', 1, R`State the two conditions for a rigid body to be in equilibrium. [[1]]`,
  [R`Forces and moments.`, R`Both zero.`],
  [R`|B1|Resultant force is zero and resultant moment about any point is zero`], R`Zero resultant force and zero resultant moment`,
  R`The resultant force must be zero and the resultant moment about any point must be zero.`, NF),
Q('2A4.3-4', 2, R`A uniform rod $AB$ of mass $10$ kg and length $6$ m rests horizontally on supports at $A$ and $C$, where $AC = 4$ m. Find the reactions at $A$ and $C$. [[3]]`,
  [R`Moments about $A$: $4R_C = 10g \times 3$.`, R`Then resolve.`],
  [R`|M1|$4R_C = 30g$`, R`|A1|$R_C = 73.5$ N`, R`|A1|$R_A = 24.5$ N`], R`$R_A = 24.5$ N, $R_C = 73.5$ N`,
  R`$R_C = 7.5g = 73.5$ N, and $R_A = 10g - 7.5g = 24.5$ N.`, { fig: BM('Uniform rod AB of 6 m on supports at A and C, 4 m from A', 6, { names: AB(6), supports: [{ x: 0 }, { x: 4, label: 'C' }], forces: [{ x: 0, dir: 'up', label: 'R_A' }, { x: 4, dir: 'up', label: 'R_C' }, { x: 3, dir: 'down', label: '10g', weight: true }], dims: [0, 3, 4, 6] }) }),
Q('2A4.3-5', 2, R`A uniform plank $AB$ of length $4$ m and mass $20$ kg rests on supports at $A$ and $B$. A person of mass $60$ kg stands $1$ m from $A$. Find the reactions at $A$ and $B$. [[3]]`,
  [R`Moments about $A$.`, R`$4R_B = 20g \times 2 + 60g \times 1$.`],
  [R`|M1|$4R_B = 40g + 60g$`, R`|A1|$R_B = 245$ N`, R`|A1|$R_A = 539$ N`], R`$R_A = 539$ N, $R_B = 245$ N`,
  R`$R_B = 25g = 245$ N; $R_A = 80g - 25g = 55g = 539$ N.`, { fig: FIGS['2A4.3-plank'] }),
Q('2A4.3-6', 2, R`A light rod $AB$ of length $4$ m hangs horizontally from vertical strings at $A$ and $B$. A weight of $50$ N hangs $1$ m from $A$. Find the tensions. [[3]]`,
  [R`Moments about $A$: $4T_B = 50 \times 1$.`, R`Resolve.`],
  [R`|M1|$4T_B = 50$`, R`|A1|$T_B = 12.5$ N`, R`|A1|$T_A = 37.5$ N`], R`$T_A = 37.5$ N, $T_B = 12.5$ N`,
  R`$T_B = 12.5$ N and $T_A = 50 - 12.5 = 37.5$ N.`, { fig: BM('Light rod AB 4 m hanging from strings at A and B with 50 N at 1 m from A', 4, { names: AB(4), strings: [{ x: 0, label: 'T_A' }, { x: 4, label: 'T_B' }], forces: [{ x: 1, dir: 'down', label: '50 N' }], dims: [0, 1, 4] }) }),
Q('2A4.3-7', 2, R`A uniform rod $AB$ of length $2$ m and mass $8$ kg hangs horizontally from two vertical strings, one at $A$ and one at $C$ where $AC = 1.5$ m. Find the tensions. [[3]]`,
  [R`Moments about $A$: $1.5T_C = 8g \times 1$.`, R`Resolve.`],
  [R`|M1|$1.5T_C = 8g$`, R`|A1|$T_C = 52.3$ N`, R`|A1|$T_A = 26.1$ N`], R`$T_A = 26.1$ N, $T_C = 52.3$ N`,
  R`$T_C = \frac{8g}{1.5} = 52.3$ N and $T_A = 8g - 52.3 = 26.1$ N.`, { fig: BM('Uniform rod 2 m hanging from strings at A and C, 1.5 m from A', 2, { names: AB(2), strings: [{ x: 0, label: 'T_A' }, { x: 1.5, label: 'T_C' }], forces: [{ x: 1, dir: 'down', label: '8g', weight: true }], dims: [0, 1, 1.5, 2] }) }),
Q('2A4.3-8', 3, R`A uniform plank $AB$ of length $5$ m and mass $30$ kg rests on supports at $C$ and $D$, where $AC = DB = 1$ m. A man of mass $80$ kg stands $0.5$ m from $A$. Find the reactions at $C$ and $D$. [[4]]`,
  [R`Moments about $D$.`, R`$3R_C = 30g \times 1.5 + 80g \times 3.5$.`],
  [R`|M1|Moments about $D$`, R`|M1|$3R_C = 45g + 280g$`, R`|A1|$R_C = 1060$ N`, R`|A1|$R_D = 16.3$ N`], R`$R_C = 1060$ N, $R_D = 16.3$ N`,
  R`$3R_C = 325g$, so $R_C = 108.3g = 1060$ N ($3$ s.f.). $R_D = 110g - 108.3g = 1.67g = 16.3$ N.`, { fig: BM('Plank 5 m on supports C and D, 1 m from each end, man 80 kg 0.5 m from A', 5, { names: AB(5), supports: [{ x: 1, label: 'C' }, { x: 4, label: 'D' }], forces: [{ x: 1, dir: 'up', label: 'R_C' }, { x: 4, dir: 'up', label: 'R_D' }, { x: 0.5, dir: 'down', label: '80g', weight: true }, { x: 2.5, dir: 'down', label: '30g', weight: true }], dims: [0, 0.5, 1, 2.5, 4, 5] }) }),
Q('2A4.3-9', 3, R`A uniform plank of length $6$ m and mass $20$ kg rests on supports at its ends. Where must a person of mass $60$ kg stand for the two reactions to be equal? [[2]]`,
  [R`Equal reactions means symmetry.`, R`All the weight acts at the centre.`],
  [R`|M1|Equal reactions need the combined centre of mass at the midpoint`, R`|A1|At the midpoint, $3$ m from each end`], R`$3$ m from each end`,
  R`Taking moments about one end with $R_A = R_B = 40g$: $40g \times 6 = 20g \times 3 + 60g \times d$, so $d = 3$ m: the midpoint.`, NF),
Q('2A4.3-10', 3, R`A uniform rod $AB$ of length $4$ m and mass $6$ kg rests on supports at $A$ and $C$, where $AC = 3$ m. A particle of mass $2$ kg is placed $x$ m from $A$. The reaction at $C$ is twice the reaction at $A$. Find $x$. [[4]]`,
  [R`$R_A + R_C = 8g$ with $R_C = 2R_A$.`, R`Moments about $A$.`],
  [R`|M1|$R_A = \frac{8g}{3}$, $R_C = \frac{16g}{3}$`, R`|M1|$3R_C = 6g \times 2 + 2g \times x$`, R`|M1|$16g = 12g + 2gx$`, R`|A1|$x = 2$`], R`$x = 2$ m`,
  R`$R_C = \frac{16g}{3}$. Moments about $A$: $16g = 12g + 2gx$, so $x = 2$ m.`, NF),
Q('2A4.3-11', 3, R`A uniform rod $AB$ of length $4$ m and mass $12$ kg rests on two pegs at $C$ and $D$, each $0.5$ m from an end ($AC = DB = 0.5$ m). A particle of mass $3$ kg is attached at $A$. Find the reactions at the pegs. [[3]]`,
  [R`Moments about $D$.`, R`$3R_C = 12g \times 1.5 + 3g \times 3.5$.`],
  [R`|M1|$3R_C = 18g + 10.5g$`, R`|A1|$R_C = 93.1$ N`, R`|A1|$R_D = 53.9$ N`], R`$R_C = 93.1$ N, $R_D = 53.9$ N`,
  R`$R_C = 9.5g = 93.1$ N and $R_D = 15g - 9.5g = 5.5g = 53.9$ N.`, NF),
Q('2A4.3-12', 4, R`A uniform beam $AB$ of length $8$ m and mass $50$ kg hangs from two vertical ropes at $C$ and $D$, where $AC = 1$ m and $DB = 2$ m. A load of mass $m$ kg hangs at $A$, and the tensions in the ropes are equal. Find $m$. [[4]]`,
  [R`$2T = (50 + m)g$.`, R`Moments about $C$: $5T = 50g \times 3 - mg \times 1$.`],
  [R`|M1|$2T = (50 + m)g$`, R`|M1|$5T = 150g - mg$`, R`|M1|$\frac52(50 + m) = 150 - m$`, R`|A1|$m = 7.14$`], R`$m = 7.14$ kg`,
  R`$T = \frac{(50 + m)g}{2}$, so $125 + 2.5m = 150 - m$ and $m = \frac{25}{3.5} = 7.14$ kg.`, { fig: BM('Beam AB 8 m hanging from ropes at C (1 m from A) and D (2 m from B), load m at A', 8, { names: AB(8), strings: [{ x: 1, label: 'T' }, { x: 6, label: 'T' }], forces: [{ x: 0, dir: 'down', label: 'mg', weight: true }, { x: 4, dir: 'down', label: '50g', weight: true }], dims: [0, 1, 4, 6, 8] }) }),
Q('2A4.3-13', 4, R`A uniform rod $AB$ of length $2$ m and mass $5$ kg is hinged to a wall at $A$ and held horizontal by a vertical string at $B$. A particle of mass $3$ kg is attached at the midpoint. Find the tension and the force at the hinge. [[3]]`,
  [R`Moments about $A$: $2T = 8g \times 1$.`, R`Resolve vertically.`],
  [R`|M1|$2T = 5g + 3g$`, R`|A1|$T = 39.2$ N`, R`|A1|Hinge force $39.2$ N upwards`], R`$T = 39.2$ N; hinge $39.2$ N up`,
  R`$2T = 8g$, so $T = 4g = 39.2$ N. Resolving: the hinge supplies $8g - 4g = 4g = 39.2$ N upwards.`, { fig: BM('Rod AB 2 m hinged at A, held by a vertical string at B, with 5g and 3g at the midpoint', 2, { names: AB(2), hinge: 0, strings: [{ x: 2, label: 'T' }], forces: [{ x: 1, dir: 'down', label: '8g', weight: true }, { x: 0, dir: 'up', label: 'H' }], dims: [0, 1, 2] }) }),
Q('2A4.3-14', 4, R`A uniform rod $AB$ of length $3$ m and mass $4$ kg rests on supports at $A$ and $B$. A particle of mass $2$ kg is placed at $C$, with $AC = 1$ m. Find the reactions at $A$ and $B$, and the ratio $R_A : R_B$. [[4]]`,
  [R`Moments about $A$: $3R_B = 4g(1.5) + 2g(1)$.`, R`Then resolve.`],
  [R`|M1|$3R_B = 6g + 2g$`, R`|A1|$R_B = 26.1$ N`, R`|A1|$R_A = 32.7$ N`, R`|B1|$R_A : R_B = 5 : 4$`], R`$R_A = 32.7$ N, $R_B = 26.1$ N; $5 : 4$`,
  R`$R_B = \frac{8g}{3} = 26.1$ N and $R_A = 6g - \frac{8g}{3} = \frac{10g}{3} = 32.7$ N. Ratio $10 : 8 = 5 : 4$.`, NF),
Q('2A4.3-15', 5, R`A uniform plank $AB$ of length $6$ m and mass $40$ kg rests on supports at $A$ and $C$, where $AC = 4$ m. A man of mass $80$ kg walks along the plank from $A$. **(a)** Find the reactions when he is $1$ m from $A$. **(b)** Find how far from $A$ he can walk before the plank starts to tip. **(c)** State a modelling assumption you have made. [[7]]`,
  [R`(a) Moments about $A$.`, R`(b) On the point of tipping, $R_A = 0$; take moments about $C$.`],
  [R`(a)|M1|$4R_C = 40g \times 3 + 80g \times 1$`, R`(a)|A1|$R_C = 490$ N`, R`(a)|A1|$R_A = 686$ N`, R`(b)|M1|$R_A = 0$`, R`(b)|M1|$40g \times 1 = 80g(x - 4)$`, R`(b)|A1|$4.5$ m from $A$`, R`(c)|B1|The man is a particle (or the plank is a uniform rod)`], R`(a) $R_A = 686$ N, $R_C = 490$ N (b) $4.5$ m`,
  R`**(a)** $4R_C = 200g$, so $R_C = 50g = 490$ N and $R_A = 120g - 50g = 70g = 686$ N.
**(b)** At the point of tipping, $R_A = 0$. About $C$: $40g \times 1 = 80g(x - 4)$, so $x = 4.5$ m.
**(c)** The man is modelled as a particle (and the plank as a uniform rod).`, { fig: BM('Plank AB 6 m on supports at A and C (4 m from A), man 80 kg at 1 m from A', 6, { names: AB(6), supports: [{ x: 0 }, { x: 4, label: 'C' }], forces: [{ x: 0, dir: 'up', label: 'R_A' }, { x: 4, dir: 'up', label: 'R_C' }, { x: 1, dir: 'down', label: '80g', weight: true }, { x: 3, dir: 'down', label: '40g', weight: true }], dims: [0, 1, 3, 4, 6] }) })
]};

CONTENT['2A4.4'] = {
notes: R`
### Centres of mass
The **centre of mass** is the point where the whole weight can be taken to act.
- A **uniform** rod: at its midpoint.
- A **non-uniform** rod: anywhere along it. Find it by taking moments, calling its distance from one end $x$.
- For particles on a light rod: $\bar{x} = \dfrac{\sum m_ix_i}{\sum m_i}$.

::: booklet
**Learn this:** set the centre of mass at an unknown distance $x$ from one end, then take moments.
:::

### Worked example 1
A non-uniform rod $AB$ of length $5$ m and mass $8$ kg rests on supports at its ends. The reaction at $A$ is $50$ N. Find the distance of the centre of mass from $A$.
- $R_B = 8g - 50 = 28.4$ N.
- Moments about $A$: $28.4 \times 5 = 8g \times x$, so $x = 1.81$ m.

### Worked example 2: balancing with an extra mass
A non-uniform rod of length $2$ m and mass $3$ kg balances on a pivot at its midpoint when a $1$ kg mass hangs at $B$. Find the centre of mass.
- Let the centre of mass be $d$ m from $A$. Moments about the midpoint: $3g(1 - d) = 1g \times 1$, so $d = \frac23$ m.

**The trap:** assuming the centre of mass is at the midpoint. "Non-uniform" means you must find it.

### Watch out
- State which end your distance is measured from.
`,
questions: [
Q('2A4.4-1', 1, R`Where is the centre of mass of a uniform rod? [[1]]`,
  [R`Uniform means evenly spread.`, R`Halfway.`],
  [R`|B1|At its midpoint`], R`The midpoint`,
  R`A uniform rod's centre of mass is at its midpoint.`, NF),
Q('2A4.4-2', 1, R`A non-uniform rod $AB$ of length $4$ m balances horizontally on a pivot $1.5$ m from $A$. Where is its centre of mass? [[1]]`,
  [R`Balancing means the weight acts through the pivot.`, R`So ...`],
  [R`|B1|$1.5$ m from $A$`], R`$1.5$ m from $A$`,
  R`For it to balance on the pivot alone, the weight must act through the pivot: $1.5$ m from $A$.`, { fig: BM('Non-uniform rod 4 m balanced on a pivot 1.5 m from A', 4, { names: AB(4), supports: [{ x: 1.5 }], forces: [{ x: 1.5, dir: 'down', label: 'W', weight: true }], dims: [0, 1.5, 4] }) }),
Q('2A4.4-3', 1, R`A non-uniform rod $AB$ of length $3$ m and weight $20$ N has its centre of mass $1$ m from $A$. It rests on supports at $A$ and $B$. Find the reactions. [[2]]`,
  [R`Moments about $A$: $3R_B = 20 \times 1$.`, R`Resolve.`],
  [R`|M1|$3R_B = 20$`, R`|A1|$R_B = 6.67$ N, $R_A = 13.3$ N`], R`$R_A = 13.3$ N, $R_B = 6.67$ N`,
  R`$R_B = \frac{20}{3} = 6.67$ N and $R_A = 13.3$ N.`, NF),
Q('2A4.4-4', 2, R`A non-uniform rod $AB$ of length $5$ m and mass $8$ kg rests on supports at its ends. The reaction at $A$ is $50$ N. Find the distance of the centre of mass from $A$. [[3]]`,
  [R`$R_B = 8g - 50$.`, R`Moments about $A$.`],
  [R`|M1|$R_B = 28.4$ N`, R`|M1|$5R_B = 8gx$`, R`|A1|$x = 1.81$ m`], R`$1.81$ m`,
  R`$R_B = 78.4 - 50 = 28.4$ N. $5 \times 28.4 = 78.4x$, so $x = 1.81$ m from $A$.`, { fig: BM('Non-uniform rod AB of 5 m on supports at A and B, with its weight at x m from A', 5, { names: AB(5), supports: [{ x: 0 }, { x: 5 }], forces: [{ x: 0, dir: 'up', label: '50 N' }, { x: 5, dir: 'up', label: 'R_B' }, { x: 1.8, dir: 'down', label: '8g', weight: true }] }) }),
Q('2A4.4-5', 2, R`A non-uniform rod $AB$ of length $4$ m hangs horizontally from vertical strings at its ends. The tension at $A$ is $30$ N and at $B$ is $50$ N. Find the weight of the rod and the position of its centre of mass. [[3]]`,
  [R`Weight $= 30 + 50$.`, R`Moments about $A$: $50 \times 4 = 80x$.`],
  [R`|B1|Weight $80$ N`, R`|M1|$50 \times 4 = 80x$`, R`|A1|$2.5$ m from $A$`], R`$80$ N; $2.5$ m from $A$`,
  R`$W = 80$ N. Moments about $A$: $200 = 80x$, so $x = 2.5$ m.`, { fig: BM('Rod AB of 4 m hanging from strings with tensions 30 N at A and 50 N at B', 4, { names: AB(4), strings: [{ x: 0, label: '30 N' }, { x: 4, label: '50 N' }], forces: [{ x: 2.5, dir: 'down', label: 'W', weight: true }] }) }),
Q('2A4.4-6', 2, R`A non-uniform rod $AB$ of length $6$ m has its centre of mass $2$ m from $A$. Where should a single support be placed for it to balance? [[1]]`,
  [R`Under the centre of mass.`, R`$2$ m from $A$.`],
  [R`|B1|$2$ m from $A$`], R`$2$ m from $A$`,
  R`It balances on a single support placed directly under its centre of mass, $2$ m from $A$.`, NF),
Q('2A4.4-7', 2, R`A non-uniform rod $AB$ of length $2$ m and mass $3$ kg balances on a pivot at its midpoint when a $1$ kg mass hangs at $B$. Find the distance of the centre of mass from $A$. [[3]]`,
  [R`Let the centre of mass be $d$ m from $A$.`, R`$3g(1 - d) = 1g \times 1$.`],
  [R`|M1|Moments about the midpoint`, R`|M1|$3(1 - d) = 1$`, R`|A1|$d = \frac23$ m`], R`$\frac23$ m from $A$`,
  R`$3(1 - d) = 1$ gives $d = \frac23$ m from $A$.`, NF),
Q('2A4.4-8', 3, R`A non-uniform plank $AB$ of length $5$ m and mass $20$ kg rests on supports at $A$ and $B$. A person of mass $60$ kg stands $2$ m from $A$, and the reaction at $A$ is twice the reaction at $B$. Find the distance of the plank's centre of mass from $A$. [[4]]`,
  [R`$R_A + R_B = 80g$ with $R_A = 2R_B$.`, R`Moments about $A$.`],
  [R`|M1|$R_B = \frac{80g}{3}$`, R`|M1|$5R_B = 20gx + 60g \times 2$`, R`|M1|$\frac{400}{3} = 20x + 120$`, R`|A1|$x = \frac23$ m`], R`$\frac23$ m from $A$`,
  R`$R_B = \frac{80g}{3}$. Moments about $A$: $\frac{400g}{3} = 20gx + 120g$, so $20x = \frac{40}{3}$ and $x = \frac23$ m.`, NF),
Q('2A4.4-9', 3, R`Particles of mass $2$ kg and $3$ kg are attached at the ends of a light rod of length $4$ m. Find the centre of mass. [[2]]`,
  [R`$\bar{x} = \frac{\sum mx}{\sum m}$.`, R`$\frac{2(0) + 3(4)}{5}$.`],
  [R`|M1|$\frac{2 \times 0 + 3 \times 4}{5}$`, R`|A1|$2.4$ m from the $2$ kg particle`], R`$2.4$ m from the $2$ kg end`,
  R`$\bar{x} = \frac{12}{5} = 2.4$ m from the $2$ kg particle.`, NF),
Q('2A4.4-10', 3, R`A uniform rod $AB$ of length $2$ m and mass $6$ kg has a particle of mass $4$ kg attached at $B$. Find the distance of the centre of mass of the system from $A$. [[2]]`,
  [R`Rod's weight at $1$ m.`, R`$\frac{6(1) + 4(2)}{10}$.`],
  [R`|M1|$\frac{6 \times 1 + 4 \times 2}{10}$`, R`|A1|$1.4$ m`], R`$1.4$ m from $A$`,
  R`$\bar{x} = \frac{6 + 8}{10} = 1.4$ m from $A$.`, NF),
Q('2A4.4-11', 3, R`A non-uniform rod $AB$ of length $3$ m rests on supports at $C$ and $D$, where $AC = 0.5$ m and $DB = 1$ m. The reactions are $40$ N at $C$ and $60$ N at $D$. Find the weight of the rod and the distance of its centre of mass from $A$. [[3]]`,
  [R`Weight $= 100$ N.`, R`Moments about $C$: $60 \times 1.5 = 100(x - 0.5)$.`],
  [R`|B1|$100$ N`, R`|M1|$60 \times 1.5 = 100(x - 0.5)$`, R`|A1|$x = 1.4$ m`], R`$100$ N; $1.4$ m from $A$`,
  R`$W = 100$ N. About $C$: $90 = 100(x - 0.5)$, so $x = 1.4$ m.`, { fig: BM('Rod AB 3 m on supports C (0.5 m from A) and D (1 m from B) with reactions 40 N and 60 N', 3, { names: AB(3), supports: [{ x: 0.5, label: 'C' }, { x: 2, label: 'D' }], forces: [{ x: 0.5, dir: 'up', label: '40 N' }, { x: 2, dir: 'up', label: '60 N' }, { x: 1.4, dir: 'down', label: 'W', weight: true }], dims: [0, 0.5, 2, 3] }) }),
Q('2A4.4-12', 4, R`A non-uniform rod $AB$ of length $4$ m and mass $6$ kg rests on supports at its ends. When a $2$ kg particle is placed at $A$, the two reactions are equal. Find the distance of the rod's centre of mass from $A$. [[4]]`,
  [R`Each reaction is $4g$.`, R`Moments about $A$: $4g \times 4 = 6gx$.`],
  [R`|B1|Each reaction $4g$`, R`|M1|Moments about $A$`, R`|M1|$16g = 6gx$`, R`|A1|$x = \frac83$ m`], R`$\frac83$ m from $A$`,
  R`The total weight is $8g$, so each reaction is $4g$. About $A$ (the particle has no moment): $4g \times 4 = 6gx$, so $x = \frac83 = 2.67$ m.`, NF),
Q('2A4.4-13', 4, R`A non-uniform rod $AB$ of length $4$ m and mass $5$ kg has its centre of mass $1.5$ m from $A$. It hangs horizontally from vertical strings at $A$ and $B$. Each string breaks if its tension exceeds $40$ N. Find the greatest mass that can hang at $B$. [[4]]`,
  [R`Moments about $A$: $4T_B = 5g(1.5) + mg(4)$.`, R`Set $T_B \le 40$ and check $T_A$.`],
  [R`|M1|$4T_B = 7.5g + 4mg$`, R`|M1|$7.5g + 4mg \le 160$`, R`|A1|$m \le 2.21$`, R`|B1|Check $T_A = 30.6 \le 40$`], R`$2.21$ kg`,
  R`$T_B \le 40$ gives $73.5 + 39.2m \le 160$, so $m \le 2.21$ kg. Then $T_A = (5 + 2.21)g - 40 = 30.6$ N, which is within the limit.`, NF),
Q('2A4.4-14', 4, R`A non-uniform rod $AB$ of length $3$ m and mass $2$ kg balances on a pivot at its midpoint when a particle of mass $0.5$ kg hangs at $A$. Find the distance of the centre of mass from $A$. [[3]]`,
  [R`The rod's centre of mass is on the $B$ side of the midpoint.`, R`$2g(x - 1.5) = 0.5g \times 1.5$.`],
  [R`|M1|Moments about the midpoint`, R`|M1|$2(x - 1.5) = 0.75$`, R`|A1|$x = 1.875$ m`], R`$1.875$ m from $A$`,
  R`$2(x - 1.5) = 0.75$ gives $x = 1.875$ m from $A$.`, NF),
Q('2A4.4-15', 5, R`A non-uniform rod $AB$ of length $6$ m, mass $M$ kg, rests on supports at $A$ and $B$. Its centre of mass is $d$ m from $A$. When a $10$ kg particle is placed $2$ m from $A$, each reaction is $15g$. **(a)** Find $M$. **(b)** Find $d$. **(c)** The particle is moved to $B$. Find the new reactions. [[7]]`,
  [R`$(M + 10)g = 30g$.`, R`Moments about $A$ in each case.`],
  [R`(a)|M1|$2 \times 15g = (M + 10)g$`, R`(a)|A1|$M = 20$`, R`(b)|M1|$6 \times 15g = 20gd + 10g \times 2$`, R`(b)|A1|$d = 3.5$`, R`(c)|M1|$6R_B = 20g \times 3.5 + 10g \times 6$`, R`(c)|A1|$R_B = 212$ N`, R`(c)|A1|$R_A = 81.7$ N`], R`(a) $20$ (b) $3.5$ m (c) $R_A = 81.7$ N, $R_B = 212$ N`,
  R`**(a)** $M + 10 = 30$, so $M = 20$.
**(b)** $90g = 20gd + 20g$, so $d = 3.5$ m.
**(c)** $6R_B = 70g + 60g = 130g$, so $R_B = 21.7g = 212$ N and $R_A = 30g - 21.7g = 8.33g = 81.7$ N.`, NF)
]};

CONTENT['2A4.5'] = {
notes: R`
### Tilting
A rod resting on two supports is **on the point of tilting** about one support when the reaction at the **other** support becomes **zero**.
1. Decide which support it would tilt about.
2. Set the reaction at the other support to $0$.
3. Take moments about the support it tilts about.

[[fig:2A4.5-tilt]]

::: booklet
**Learn this:** "about to tilt about $C$" means the reaction at $D$ is $0$.
:::

### Worked example 1
A uniform rod $AB$ of length $5$ m and mass $12$ kg rests on supports at $C$ and $D$, where $AC = DB = 1$ m. Find the greatest mass that can hang at $A$ without the rod tilting.
- About to tilt about $C$, so $R_D = 0$.
- Moments about $C$: $mg \times 1 = 12g \times 1.5$, so $m = 18$ kg.

### Worked example 2: does it tilt at all?
With the same rod, an $8$ kg particle is placed somewhere on $AC$. Can it tilt?
- Even at $A$ (the worst place), the particle's moment about $C$ is $8g \times 1 = 8g$, less than the rod's $18g$.
- So the rod never tilts.

**The trap:** setting up an equation and accepting a negative distance. Check that your answer lies on the rod.

### Watch out
- Tilting about the support nearer the load is the danger; check that one first.
`,
questions: [
Q('2A4.5-1', 1, R`A rod rests on supports at $C$ and $D$ and is on the point of tilting about $C$. What can you say about the reaction at $D$? [[1]]`,
  [R`Is the rod still pressing on $D$?`, R`It's about to lift off.`],
  [R`|B1|The reaction at $D$ is zero`], R`$R_D = 0$`,
  R`On the point of tilting about $C$, the rod is about to lift off $D$, so the reaction at $D$ is zero.`, { fig: FIGS['2A4.5-tilt'] }),
Q('2A4.5-2', 1, R`A uniform rod $AB$ of length $4$ m and mass $10$ kg rests on supports at $A$ and $C$, where $AC = 3$ m. Find the greatest mass that can hang at $B$ without the rod tilting. [[2]]`,
  [R`Tilting about $C$: $R_A = 0$.`, R`$10g \times 1 = mg \times 1$.`],
  [R`|M1|$R_A = 0$; moments about $C$`, R`|A1|$10$ kg`], R`$10$ kg`,
  R`About $C$: the rod's weight acts $1$ m to the left, the mass $1$ m to the right. $10g = mg$, so $m = 10$ kg.`, { fig: BM('Uniform rod AB of 4 m on supports at A and C (3 m from A), mass m at B', 4, { names: AB(4), supports: [{ x: 0 }, { x: 3, label: 'C' }], forces: [{ x: 3, dir: 'up', label: 'R_C' }, { x: 2, dir: 'down', label: '10g', weight: true }, { x: 4, dir: 'down', label: 'mg', weight: true }], dims: [0, 2, 3, 4] }) }),
Q('2A4.5-3', 1, R`A uniform plank $AB$ of length $6$ m and mass $30$ kg rests on supports at $A$ and $C$, where $CB = 2$ m. Find the greatest mass of a person who can stand at $B$ without the plank tilting. [[2]]`,
  [R`$R_A = 0$; moments about $C$.`, R`$30g \times 1 = mg \times 2$.`],
  [R`|M1|$30g \times 1 = mg \times 2$`, R`|A1|$15$ kg`], R`$15$ kg`,
  R`$C$ is $4$ m from $A$, so the plank's weight is $1$ m from $C$. $30 = 2m$, so $m = 15$ kg.`, NF),
Q('2A4.5-4', 2, R`A uniform rod $AB$ of length $5$ m and mass $12$ kg rests on supports at $C$ and $D$, where $AC = DB = 1$ m. Find the greatest mass that can hang at $A$ without the rod tilting. [[2]]`,
  [R`About to tilt about $C$: $R_D = 0$.`, R`$m \times 1 = 12 \times 1.5$.`],
  [R`|M1|Moments about $C$ with $R_D = 0$`, R`|A1|$18$ kg`], R`$18$ kg`,
  R`$mg \times 1 = 12g \times 1.5$, so $m = 18$ kg.`, { fig: FIGS['2A4.5-tilt'] }),
Q('2A4.5-5', 2, R`For the rod in question 4, an $8$ kg particle is placed somewhere between $A$ and $C$. Show that the rod cannot tilt. [[2]]`,
  [R`The worst place is at $A$.`, R`Compare moments about $C$.`],
  [R`|M1|Largest moment of particle about $C$: $8g \times 1$`, R`|A1|$8g < 18g$ (rod's moment), so it can't tilt`], R`$8g < 18g$`,
  R`The particle's moment about $C$ is at most $8g \times 1 = 8g$, but the rod's weight gives $12g \times 1.5 = 18g$ the other way. So $R_D > 0$ always and the rod can't tilt.`, NF),
Q('2A4.5-6', 2, R`A uniform beam $AB$ of length $4$ m and mass $20$ kg rests on a support at $C$, $1$ m from $A$, and is held horizontal by a vertical string at $B$. A mass is hung at $A$. Find the mass at which the tension in the string becomes zero. [[2]]`,
  [R`With $T = 0$, take moments about $C$.`, R`$m \times 1 = 20 \times 1$.`],
  [R`|M1|$mg \times 1 = 20g \times 1$`, R`|A1|$20$ kg`], R`$20$ kg`,
  R`The beam's weight is $1$ m from $C$, and so is the mass at $A$. $T = 0$ when $m = 20$ kg.`, NF),
Q('2A4.5-7', 2, R`A uniform plank $AB$ of length $4$ m and mass $15$ kg rests on supports at $A$ and $C$, where $AC = 2.5$ m. A person of mass $50$ kg walks from $C$ towards $B$. Find how far from $A$ the person can walk before the plank tilts. [[3]]`,
  [R`$R_A = 0$; moments about $C$.`, R`$15g \times 0.5 = 50g \times d$.`],
  [R`|M1|$R_A = 0$`, R`|M1|$15 \times 0.5 = 50d$`, R`|A1|$2.65$ m from $A$`], R`$2.65$ m`,
  R`The plank's weight is $0.5$ m from $C$. $7.5 = 50d$ gives $d = 0.15$ m beyond $C$: $2.65$ m from $A$.`, NF),
Q('2A4.5-8', 3, R`A non-uniform rod $AB$ of length $6$ m and mass $20$ kg has its centre of mass $2.5$ m from $A$. It rests on supports at $C$ and $D$, where $AC = 1$ m and $AD = 4$ m. Find the greatest mass that can hang at $B$ without tilting. [[3]]`,
  [R`Tilts about $D$: $R_C = 0$.`, R`$20g \times 1.5 = mg \times 2$.`],
  [R`|M1|$R_C = 0$, moments about $D$`, R`|M1|$20 \times 1.5 = 2m$`, R`|A1|$15$ kg`], R`$15$ kg`,
  R`The centre of mass is $1.5$ m from $D$ and $B$ is $2$ m from $D$. $30 = 2m$, so $m = 15$ kg.`, { fig: BM('Rod AB 6 m, centre of mass 2.5 m from A, on supports C (1 m from A) and D (4 m from A), mass m at B', 6, { names: AB(6), supports: [{ x: 1, label: 'C' }, { x: 4, label: 'D' }], forces: [{ x: 4, dir: 'up', label: 'R_D' }, { x: 2.5, dir: 'down', label: '20g', weight: true }, { x: 6, dir: 'down', label: 'mg', weight: true }], dims: [0, 1, 2.5, 4, 6] }) }),
Q('2A4.5-9', 3, R`For the rod in question 8, find the greatest mass that can hang at $A$ without tilting. [[3]]`,
  [R`Tilts about $C$: $R_D = 0$.`, R`$m \times 1 = 20 \times 1.5$.`],
  [R`|M1|$R_D = 0$, moments about $C$`, R`|M1|$m \times 1 = 20 \times 1.5$`, R`|A1|$30$ kg`], R`$30$ kg`,
  R`The centre of mass is $1.5$ m from $C$, $A$ is $1$ m from $C$: $m = 30$ kg.`, NF),
Q('2A4.5-10', 3, R`A uniform rod $AB$ of length $5$ m and mass $10$ kg rests on supports at $C$ and $D$, where $AC = 1$ m and $AD = 3$ m. A particle of mass $20$ kg is placed $x$ m from $A$. Find the range of values of $x$ for which the rod does not tilt. [[4]]`,
  [R`Tilting about $C$ (particle near $A$) and about $D$ (particle near $B$).`, R`The rod's weight is $1.5$ m from $C$ and $0.5$ m from $D$.`],
  [R`|M1|About $C$: $20(1 - x) \le 10 \times 1.5$`, R`|A1|$x \ge 0.25$`, R`|M1|About $D$: $20(x - 3) \le 10 \times 0.5$`, R`|A1|$0.25 \le x \le 3.25$`], R`$0.25 \le x \le 3.25$`,
  R`About $C$: $20(1 - x) \le 15$ gives $x \ge 0.25$. About $D$: $20(x - 3) \le 5$ gives $x \le 3.25$. So $0.25 \le x \le 3.25$.`, NF),
Q('2A4.5-11', 3, R`In a tilting problem, a person standing on a plank is modelled as a particle and the plank as a uniform rod. Explain what each assumption means. [[2]]`,
  [R`Particle: size ignored.`, R`Uniform rod: mass spread evenly, centre at the middle.`],
  [R`|B1|Particle: the person's weight acts at a single point`, R`|B1|Uniform rod: the plank's weight acts at its midpoint and it doesn't bend`], R`Point weight; weight at midpoint, rigid`,
  R`Modelling the person as a particle means their weight acts at one point. Modelling the plank as a uniform rod means its weight acts at its midpoint and it is rigid (one-dimensional).`, NF),
Q('2A4.5-12', 4, R`A uniform plank $AB$ of length $8$ m and mass $30$ kg rests on supports at $A$ and $C$, $c$ m from $A$. A man of mass $90$ kg stands at $B$. Find the least value of $c$ for which the plank doesn't tilt. [[4]]`,
  [R`About to tilt about $C$: $R_A = 0$.`, R`$30g(c - 4) \ge 90g(8 - c)$.`],
  [R`|M1|$R_A = 0$`, R`|M1|$30(c - 4) = 90(8 - c)$`, R`|M1|$120c = 840$`, R`|A1|$c = 7$`], R`$c = 7$ m`,
  R`On the point of tilting: $30(c - 4) = 90(8 - c)$, so $30c - 120 = 720 - 90c$ and $c = 7$. The plank doesn't tilt for $c \ge 7$ m.`, NF),
Q('2A4.5-13', 4, R`A uniform rod $AB$ of length $6$ m and mass $10$ kg rests on supports at $C$ and $D$, where $AC = DB = 2$ m. A particle of mass $m$ kg at $A$ makes the rod about to tilt. Find $m$ and the reaction at $C$. [[3]]`,
  [R`$R_D = 0$; moments about $C$.`, R`Then resolve.`],
  [R`|M1|$m \times 2 = 10 \times 1$`, R`|A1|$m = 5$`, R`|A1|$R_C = 147$ N`], R`$m = 5$; $R_C = 147$ N`,
  R`$2m = 10$, so $m = 5$ kg. Then $R_C = 15g = 147$ N.`, NF),
Q('2A4.5-14', 4, R`A uniform plank $AB$ of length $6$ m and mass $20$ kg rests on supports at $C$ and $D$, where $AC = DB = 1$ m. A person $P$ of mass $50$ kg stands at $A$. Find the least mass of a second person $Q$, standing at $B$, needed to stop the plank tilting. [[3]]`,
  [R`Tilting about $C$ with $R_D = 0$.`, R`$50 \times 1 = 20 \times 2 + Q \times 5$.`],
  [R`|M1|Moments about $C$ with $R_D = 0$`, R`|M1|$50 = 40 + 5Q$`, R`|A1|$Q = 2$ kg`], R`$2$ kg`,
  R`On the point of tilting about $C$: $50g \times 1 = 20g \times 2 + Qg \times 5$, so $Q = 2$ kg.`, NF),
Q('2A4.5-15', 5, R`A non-uniform plank $AB$ of length $6$ m and mass $40$ kg rests on supports at $C$ and $D$, where $AC = 1$ m and $AD = 4$ m. A man of mass $30$ kg stands at $B$, and the plank is on the point of tilting. **(a)** Find the distance of the plank's centre of mass from $A$. **(b)** Find the reaction at $D$. **(c)** The man moves to $A$. Find the new reactions. [[7]]`,
  [R`Tilting about $D$: $R_C = 0$.`, R`(c) Moments about $C$.`],
  [R`(a)|M1|$R_C = 0$; moments about $D$`, R`(a)|M1|$40(4 - x) = 30 \times 2$`, R`(a)|A1|$x = 2.5$ m`, R`(b)|B1|$R_D = 70g = 686$ N`, R`(c)|M1|$3R_D = 40g \times 1.5 - 30g \times 1$`, R`(c)|A1|$R_D = 98$ N`, R`(c)|A1|$R_C = 588$ N`], R`(a) $2.5$ m (b) $686$ N (c) $R_C = 588$ N, $R_D = 98$ N`,
  R`**(a)** $40g(4 - x) = 30g \times 2$, so $4 - x = 1.5$ and $x = 2.5$ m.
**(b)** $R_D = 70g = 686$ N.
**(c)** About $C$: $3R_D = 40g(1.5) - 30g(1) = 30g$, so $R_D = 10g = 98$ N, and $R_C = 70g - 10g = 60g = 588$ N.`, { fig: BM('Plank AB 6 m on supports C (1 m from A) and D (4 m from A), man 30 kg at B', 6, { names: AB(6), supports: [{ x: 1, label: 'C' }, { x: 4, label: 'D' }], forces: [{ x: 4, dir: 'up', label: 'R_D' }, { x: 2.5, dir: 'down', label: '40g', weight: true }, { x: 6, dir: 'down', label: '30g', weight: true }], dims: [0, 1, 2.5, 4, 6] }) })
]};
