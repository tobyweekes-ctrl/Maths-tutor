/* Statistics and Mechanics Year 1 · Chapter 10 Forces and motion (sections 10.1 to 10.6) */
BOOK_CHAPTERS.push({ id:'A10', book:'Statistics & Mechanics Year 1', label:'Chapter 10', title:'Forces and motion', mech: true, sections:[
  { id:'A10.1', num:'10.1', title:'Force diagrams' },
  { id:'A10.2', num:'10.2', title:'Forces as vectors' },
  { id:'A10.3', num:'10.3', title:'Forces and acceleration' },
  { id:'A10.4', num:'10.4', title:'Motion in 2 dimensions' },
  { id:'A10.5', num:'10.5', title:'Connected particles' },
  { id:'A10.6', num:'10.6', title:'Pulleys' }
]});
const A10box = (label, forces, opts = {}) => Fig.ground(Object.assign({ label, forces: forces.map(f => Object.assign({ components: false }, f)) }, opts));
FIGS['A10.1-forces'] = A10box('A box on rough ground pulled by a rope: tension T to the right, friction F to the left, normal reaction R up, weight mg down',
  [{ deg: 0, label: 'T', len: 70 }, { deg: 180, label: 'F', len: 50 }, { deg: 90, label: 'R', len: 56 }, { deg: 270, label: 'mg', len: 56, weight: true }], { rough: true });
FIGS['A10.5-car'] = Fig.train({ label: 'Car and trailer joined by a tow bar: driving force 3000 N on the car, resistances on both, tension T in the tow bar acting on each',
  blocks: [{ name: 'trailer 500 kg', w: 96 }, { name: 'car 1000 kg', w: 96 }],
  forces: [{ on: 1, dir: 'R', label: '3000 N', len: 44 }, { on: 1, dir: 'TL', label: 'T' }, { on: 0, dir: 'TR', label: 'T' }, { on: 0, dir: 'L', label: '200 N', len: 36 }], motion: 'a' });
FIGS['A10.6-pulley'] = Fig.pulleyHang({ label: 'Particles of 5 kg and 3 kg hanging over a smooth pulley: tension T up on each, weights 5g and 3g down',
  left: { name: '5 kg', weight: '5g', drop: 140 }, right: { name: '3 kg', weight: '3g', drop: 90 } });
FIGS['A10.6-table'] = Fig.tablePulley({ label: 'Block P of 4 kg on a smooth table joined over a pulley at the edge to a hanging particle Q of 1 kg',
  block: { name: 'P 4 kg', weight: '4g' }, hang: { name: 'Q', weight: 'g' } });

CONTENT['A10.1'] = {
notes: R`
### Common forces
- **Weight** $W = mg$, acting vertically downwards.
- **Normal reaction** $R$, perpendicular to a surface the object rests on.
- **Friction** $F$, along a rough surface, opposing motion.
- **Tension** $T$ in a string or rope, pulling away from the object.
- **Thrust** in a rod, pushing towards the object.
- **Resistance** (such as air resistance), opposing motion.

### Resultant force
Add the forces in each direction, taking one way as positive. If the resultant is zero the object is in **equilibrium**: at rest or moving with constant velocity.

[[fig:A10.1-forces]]

::: booklet
**Learn these:** the names and directions of the forces above. Always draw a force diagram first.
:::

### Worked example 1
A box of mass $4$ kg on a rough floor is pushed with a horizontal force of $30$ N. Friction is $18$ N. Find the resultant force and the normal reaction.
- Horizontally: $30 - 18 = 12$ N in the direction of the push.
- Vertically there's no acceleration: $R = 4g = 39.2$ N.

### Worked example 2: the reaction from a stack
A $1$ kg book rests on a $2$ kg book on a table. Find the force the table exerts on the lower book.
- Treat the two books together: $R = 3g = 29.4$ N.

**The trap:** giving $2g$. The lower book is pressed down by the top book as well as by its own weight.

### Watch out
- Label each force with its magnitude or letter, and draw arrows from the object.
- Equilibrium doesn't mean "at rest": constant velocity counts too.
`,
questions: [
Q('A10.1-1', 1, R`A box of mass $5$ kg rests on a horizontal table. Find the normal reaction from the table. [[1]]`,
  [R`Vertical forces balance.`, R`$R = 5g$.`],
  [R`|B1|$49$ N`], R`$49$ N`,
  R`The box is in equilibrium, so $R = 5g = 49$ N.`, { fig: A10box('A 5 kg box on a table: reaction R up, weight 5g down', [{ deg: 90, label: 'R', len: 56 }, { deg: 270, label: '5g', len: 56, weight: true }]) }),
Q('A10.1-2', 1, R`Name the force exerted on a particle by a taut string attached to it. [[1]]`,
  [R`It pulls.`, R`Strings are in ...`],
  [R`|B1|Tension`], R`Tension`,
  R`A taut string exerts a tension, pulling away from the particle along the string.`, { fig: Fig.hanging({ label: 'Particle hanging on a vertical string: tension T up, weight mg down', strings: [{ deg: 90, label: 'T' }] }) }),
Q('A10.1-3', 1, R`Forces of $10$ N to the right and $4$ N to the left act on a particle. Find the resultant force. [[1]]`,
  [R`Subtract.`, R`Which is bigger?`],
  [R`|B1|$6$ N to the right`], R`$6$ N to the right`,
  R`$10 - 4 = 6$ N, to the right.`, { fig: Fig.particle({ label: 'Forces of 10 N to the right and 4 N to the left', forces: [{ deg: 0, label: '10 N', len: 90 }, { deg: 180, label: '4 N', len: 50 }] }) }),
Q('A10.1-4', 2, R`A particle of mass $3$ kg hangs at rest on a vertical string. Find the tension. [[1]]`,
  [R`Equilibrium.`, R`$T = 3g$.`],
  [R`|B1|$29.4$ N`], R`$29.4$ N`,
  R`The particle is in equilibrium, so the tension balances the weight: $T = 3g = 29.4$ N.`, { fig: Fig.hanging({ label: 'A 3 kg particle hanging on a vertical string', strings: [{ deg: 90, label: 'T' }], weightLabel: '3g' }) }),
Q('A10.1-5', 2, R`Forces of $8$ N up, $5$ N down, $3$ N to the right and $7$ N to the left act on a particle. Find the magnitude of the resultant. [[2]]`,
  [R`Vertical: $8 - 5$. Horizontal: $3 - 7$.`, R`Then Pythagoras.`],
  [R`|M1|$3$ N up and $4$ N left`, R`|A1|$5$ N`], R`$5$ N`,
  R`Vertically $3$ N up; horizontally $4$ N to the left. Magnitude $\sqrt{9 + 16} = 5$ N.`,
  { fig: Fig.particle({ label: 'Four forces: 8 N up, 5 N down, 3 N right, 7 N left', forces: [{ deg: 90, label: '8 N', len: 80 }, { deg: 270, label: '5 N', len: 55 }, { deg: 0, label: '3 N', len: 40 }, { deg: 180, label: '7 N', len: 80 }] }) }),
Q('A10.1-6', 2, R`A car drives along a level road against a constant resistance. Draw a force diagram showing all the forces on the car. [[2]]`,
  [R`Horizontal: driving force and resistance.`, R`Vertical: weight and reaction.`],
  [R`|B1|Driving force forwards and resistance backwards`, R`|B1|Weight down and normal reaction up`], R`Driving force, resistance, weight, reaction`,
  R`Four forces: the driving force $D$ forwards, the resistance backwards, the weight $mg$ down and the normal reaction $R$ up.`,
  { solFig: A10box('Car on a level road: driving force D forwards, resistance backwards, reaction R up, weight mg down', [{ deg: 0, label: 'D', len: 70 }, { deg: 180, label: 'resistance', len: 50 }, { deg: 90, label: 'R', len: 56 }, { deg: 270, label: 'mg', len: 56, weight: true }]), noFig: true }),
Q('A10.1-7', 2, R`A particle is in equilibrium under forces $P$ N to the right, $12$ N to the left, $Q$ N upwards and $20$ N downwards. Find $P$ and $Q$. [[2]]`,
  [R`Horizontal forces balance.`, R`Vertical forces balance.`],
  [R`|B1|$P = 12$`, R`|B1|$Q = 20$`], R`$P = 12$, $Q = 20$`,
  R`Equilibrium: $P = 12$ and $Q = 20$.`, { fig: Fig.particle({ label: 'Forces P right, 12 N left, Q up, 20 N down', forces: [{ deg: 0, label: 'P', len: 60 }, { deg: 180, label: '12 N', len: 60 }, { deg: 90, label: 'Q', len: 70 }, { deg: 270, label: '20 N', len: 70 }] }) }),
Q('A10.1-8', 3, R`A box of mass $4$ kg on a rough floor is pushed with a horizontal force of $30$ N against friction of $18$ N. Find the resultant force and the normal reaction. [[2]]`,
  [R`Horizontally: $30 - 18$.`, R`Vertically: $R = 4g$.`],
  [R`|B1|$12$ N`, R`|B1|$39.2$ N`], R`$12$ N; $39.2$ N`,
  R`Resultant $= 12$ N in the direction of the push. $R = 4g = 39.2$ N.`, { fig: A10box('A 4 kg box pushed with 30 N against friction 18 N', [{ deg: 0, label: '30 N', len: 70 }, { deg: 180, label: '18 N', len: 50 }, { deg: 90, label: 'R', len: 56 }, { deg: 270, label: '4g', len: 56, weight: true }], { rough: true }) }),
Q('A10.1-9', 3, R`A particle is in equilibrium under the forces $(2\mathbf{i} + 3\mathbf{j})$ N, $(-5\mathbf{i} + \mathbf{j})$ N and $\mathbf{F}$. Find $\mathbf{F}$ and its magnitude. [[3]]`,
  [R`The three forces add to zero.`, R`$\mathbf{F} = -(\text{the other two})$.`],
  [R`|M1|$\mathbf{F} = -[(2 - 5)\mathbf{i} + (3 + 1)\mathbf{j}]$`, R`|A1|$\mathbf{F} = (3\mathbf{i} - 4\mathbf{j})$ N`, R`|A1|$5$ N`], R`$(3\mathbf{i} - 4\mathbf{j})$ N; $5$ N`,
  R`The other two add to $-3\mathbf{i} + 4\mathbf{j}$, so $\mathbf{F} = 3\mathbf{i} - 4\mathbf{j}$, with magnitude $5$ N.`, NF),
Q('A10.1-10', 3, R`Explain the difference between a tension and a thrust. [[1]]`,
  [R`Which one pushes?`, R`Strings can only pull.`],
  [R`|B1|Tension pulls away from the object (string or rod); thrust pushes towards it (rod only)`], R`Tension pulls; thrust pushes`,
  R`A tension pulls on an object along a string or rod; a thrust pushes on an object and can only come from a rigid rod.`, NF),
Q('A10.1-11', 3, R`A person of mass $70$ kg stands in a lift moving upwards at constant speed. Find the normal reaction from the floor. [[2]]`,
  [R`Constant speed means equilibrium.`, R`$R = 70g$.`],
  [R`|M1|$R = 70g$`, R`|A1|$686$ N`], R`$686$ N`,
  R`Constant velocity means no resultant force, so $R = 70 \times 9.8 = 686$ N.`, { fig: Fig.particle({ label: 'Person in a lift: reaction R up, weight 70g down', forces: [{ deg: 90, label: 'R', len: 70 }, { deg: 270, label: '70g', len: 70, weight: true }] }) }),
Q('A10.1-12', 4, R`A book of mass $1$ kg rests on a book of mass $2$ kg, which rests on a table. Find **(a)** the force between the two books **(b)** the force from the table on the lower book. [[3]]`,
  [R`The top book is in equilibrium.`, R`The table supports both books.`],
  [R`(a)|B1|$9.8$ N`, R`(b)|M1|$R = 2g + 9.8$`, R`(b)|A1|$29.4$ N`], R`(a) $9.8$ N (b) $29.4$ N`,
  R`**(a)** The top book: $S = 1g = 9.8$ N.
**(b)** The lower book has its weight $2g$ and the push $9.8$ N from above, so $R = 19.6 + 9.8 = 29.4$ N.`,
  { fig: Fig.particle({ label: 'Lower book: reaction R up, its weight 2g and the push S from the top book down', forces: [{ deg: 90, label: 'R', len: 80 }, { deg: 270, label: '2g + S', len: 80, weight: true }] }) }),
Q('A10.1-13', 4, R`Forces $(3\mathbf{i} + 4\mathbf{j})$ N and $(a\mathbf{i} + b\mathbf{j})$ N have resultant $6\mathbf{i}$ N. Find $a$ and $b$. [[2]]`,
  [R`Compare $\mathbf{i}$ and $\mathbf{j}$ parts.`, R`$4 + b = 0$.`],
  [R`|B1|$a = 3$`, R`|B1|$b = -4$`], R`$a = 3$, $b = -4$`,
  R`$3 + a = 6$ gives $a = 3$, and $4 + b = 0$ gives $b = -4$.`, NF),
Q('A10.1-14', 4, R`A particle is in equilibrium under $(5\mathbf{i} + 2\mathbf{j})$ N, $(-3\mathbf{i} + p\mathbf{j})$ N and $(q\mathbf{i} - 6\mathbf{j})$ N. Find $p$ and $q$. [[3]]`,
  [R`Sum of the $\mathbf{i}$ parts is $0$.`, R`Sum of the $\mathbf{j}$ parts is $0$.`],
  [R`|M1|$5 - 3 + q = 0$ and $2 + p - 6 = 0$`, R`|A1|$q = -2$`, R`|A1|$p = 4$`], R`$p = 4$, $q = -2$`,
  R`$\mathbf{i}$: $2 + q = 0$, so $q = -2$. $\mathbf{j}$: $p - 4 = 0$, so $p = 4$.`, NF),
Q('A10.1-15', 5, R`A box of mass $10$ kg on a rough horizontal floor is pulled by a horizontal rope with tension $40$ N. Friction is $25$ N. **(a)** Draw a force diagram. **(b)** Find the normal reaction. **(c)** Find the resultant force. **(d)** Find the acceleration. [[5]]`,
  [R`Four forces act.`, R`$F = ma$ horizontally.`],
  [R`(a)|B1|Tension, friction, weight and reaction shown`, R`(b)|B1|$98$ N`, R`(c)|B1|$15$ N`, R`(d)|M1|$15 = 10a$`, R`(d)|A1|$1.5$ m s$^{-2}$`], R`(b) $98$ N (c) $15$ N (d) $1.5$ m s$^{-2}$`,
  R`**(a)** Tension $40$ N forwards, friction $25$ N backwards, weight $10g$ down, reaction $R$ up.
**(b)** $R = 10g = 98$ N.
**(c)** $40 - 25 = 15$ N.
**(d)** $a = \frac{15}{10} = 1.5$ m s$^{-2}$.`, { solFig: A10box('A 10 kg box pulled by 40 N against friction 25 N', [{ deg: 0, label: '40 N', len: 70 }, { deg: 180, label: '25 N', len: 50 }, { deg: 90, label: 'R', len: 56 }, { deg: 270, label: '10g', len: 56, weight: true }], { rough: true }), noFig: true })
]};

CONTENT['A10.2'] = {
notes: R`
### Forces in $\mathbf{i}, \mathbf{j}$ form
A force $a\mathbf{i} + b\mathbf{j}$ has magnitude $\sqrt{a^2 + b^2}$ and makes an angle $\tan^{-1}\frac{b}{a}$ with $\mathbf{i}$ (sketch it to fix the quadrant).
- **Resultant:** add the $\mathbf{i}$ parts and the $\mathbf{j}$ parts.
- **Equilibrium:** the resultant is $0\mathbf{i} + 0\mathbf{j}$.
- **Newton's second law:** $\mathbf{F} = m\mathbf{a}$, so $\mathbf{a} = \frac{1}{m}\mathbf{F}$.
- A force of magnitude $F$ at angle $\theta$ above $\mathbf{i}$ is $F\cos\theta\,\mathbf{i} + F\sin\theta\,\mathbf{j}$.

::: booklet
**Learn these:** $\mathbf{F} = m\mathbf{a}$ and $|a\mathbf{i} + b\mathbf{j}| = \sqrt{a^2 + b^2}$.
:::

### Worked example 1
Forces $(3\mathbf{i} + 2\mathbf{j})$ N and $(\mathbf{i} - 5\mathbf{j})$ N act on a particle of mass $2$ kg. Find the acceleration.
- Resultant: $4\mathbf{i} - 3\mathbf{j}$, magnitude $5$ N.
- $\mathbf{a} = \frac12(4\mathbf{i} - 3\mathbf{j}) = (2\mathbf{i} - 1.5\mathbf{j})$ m s$^{-2}$, magnitude $2.5$ m s$^{-2}$.

### Worked example 2: parallel to a vector
The resultant of $(p\mathbf{i} + 3\mathbf{j})$ and $(2\mathbf{i} - \mathbf{j})$ is parallel to $\mathbf{i} + \mathbf{j}$. Find $p$.
- Resultant $(p + 2)\mathbf{i} + 2\mathbf{j}$. Parallel to $\mathbf{i} + \mathbf{j}$ means the two components are equal: $p + 2 = 2$, so $p = 0$.

**The trap:** setting the resultant **equal** to $\mathbf{i} + \mathbf{j}$. Parallel only means it's a multiple of it.

### Watch out
- Give an angle with a clear reference: "below $\mathbf{i}$" or a bearing.
`,
questions: [
Q('A10.2-1', 1, R`Find the resultant of $(3\mathbf{i} + 2\mathbf{j})$ N and $(\mathbf{i} - 5\mathbf{j})$ N. [[1]]`,
  [R`Add the $\mathbf{i}$ parts and the $\mathbf{j}$ parts.`, R`$3 + 1$ and $2 - 5$.`],
  [R`|B1|$(4\mathbf{i} - 3\mathbf{j})$ N`], R`$(4\mathbf{i} - 3\mathbf{j})$ N`,
  R`$(3 + 1)\mathbf{i} + (2 - 5)\mathbf{j} = 4\mathbf{i} - 3\mathbf{j}$.`, NF),
Q('A10.2-2', 1, R`Find the magnitude of $(4\mathbf{i} - 3\mathbf{j})$ N. [[1]]`,
  [R`Pythagoras.`, R`$\sqrt{16 + 9}$.`],
  [R`|B1|$5$ N`], R`$5$ N`,
  R`$\sqrt{16 + 9} = 5$ N.`, NF),
Q('A10.2-3', 1, R`Find the angle between $(4\mathbf{i} - 3\mathbf{j})$ N and $\mathbf{i}$. [[1]]`,
  [R`$\tan^{-1}\frac34$.`, R`Below $\mathbf{i}$.`],
  [R`|B1|$36.9^\circ$ below $\mathbf{i}$`], R`$36.9^\circ$ below $\mathbf{i}$`,
  R`$\tan^{-1}\frac34 = 36.9^\circ$, below $\mathbf{i}$ because the $\mathbf{j}$ part is negative.`,
  { fig: Fig.particle({ label: 'A force pointing right and down at 36.9 degrees below the horizontal', ref: true, angles: [{ from: -36.9, to: 0, label: 'θ' }], forces: [{ deg: -36.9, label: '4i − 3j', len: 90 }] }) }),
Q('A10.2-4', 2, R`Find the resultant of $(2\mathbf{i} - \mathbf{j})$ N, $(-4\mathbf{i} + 3\mathbf{j})$ N and $(5\mathbf{i} + 2\mathbf{j})$ N, and its magnitude. [[2]]`,
  [R`Add all three.`, R`$\mathbf{i}$: $2 - 4 + 5$.`],
  [R`|B1|$(3\mathbf{i} + 4\mathbf{j})$ N`, R`|B1|$5$ N`], R`$(3\mathbf{i} + 4\mathbf{j})$ N; $5$ N`,
  R`$(2 - 4 + 5)\mathbf{i} + (-1 + 3 + 2)\mathbf{j} = 3\mathbf{i} + 4\mathbf{j}$, magnitude $5$ N.`, NF),
Q('A10.2-5', 2, R`A particle is in equilibrium under $\mathbf{F}_1 = (4\mathbf{i} - 7\mathbf{j})$ N, $\mathbf{F}_2 = (-2\mathbf{i} + 3\mathbf{j})$ N and $\mathbf{F}_3$. Find $\mathbf{F}_3$. [[2]]`,
  [R`$\mathbf{F}_1 + \mathbf{F}_2 + \mathbf{F}_3 = \mathbf{0}$.`, R`$\mathbf{F}_1 + \mathbf{F}_2 = 2\mathbf{i} - 4\mathbf{j}$.`],
  [R`|M1|$\mathbf{F}_3 = -(\mathbf{F}_1 + \mathbf{F}_2)$`, R`|A1|$(-2\mathbf{i} + 4\mathbf{j})$ N`], R`$(-2\mathbf{i} + 4\mathbf{j})$ N`,
  R`$\mathbf{F}_1 + \mathbf{F}_2 = 2\mathbf{i} - 4\mathbf{j}$, so $\mathbf{F}_3 = -2\mathbf{i} + 4\mathbf{j}$.`, NF),
Q('A10.2-6', 2, R`A force of $(6\mathbf{i} + 8\mathbf{j})$ N acts on a particle of mass $2$ kg. Find its acceleration and the magnitude of the acceleration. [[2]]`,
  [R`$\mathbf{a} = \frac{\mathbf{F}}{m}$.`, R`Then Pythagoras.`],
  [R`|B1|$(3\mathbf{i} + 4\mathbf{j})$ m s$^{-2}$`, R`|B1|$5$ m s$^{-2}$`], R`$(3\mathbf{i} + 4\mathbf{j})$ m s$^{-2}$; $5$ m s$^{-2}$`,
  R`$\mathbf{a} = \frac12(6\mathbf{i} + 8\mathbf{j}) = 3\mathbf{i} + 4\mathbf{j}$, magnitude $5$ m s$^{-2}$.`, NF),
Q('A10.2-7', 2, R`The resultant of $(a\mathbf{i} + 2\mathbf{j})$ N and $(3\mathbf{i} + b\mathbf{j})$ N is $(7\mathbf{i} + 5\mathbf{j})$ N. Find $a$ and $b$. [[2]]`,
  [R`$a + 3 = 7$.`, R`$2 + b = 5$.`],
  [R`|B1|$a = 4$`, R`|B1|$b = 3$`], R`$a = 4$, $b = 3$`,
  R`$a + 3 = 7$ and $2 + b = 5$, so $a = 4$ and $b = 3$.`, NF),
Q('A10.2-8', 3, R`The resultant of $(p\mathbf{i} + 3\mathbf{j})$ N and $(2\mathbf{i} - \mathbf{j})$ N is parallel to $\mathbf{i} + \mathbf{j}$. Find $p$ and the magnitude of the resultant. [[3]]`,
  [R`Resultant $(p + 2)\mathbf{i} + 2\mathbf{j}$.`, R`Parallel to $\mathbf{i} + \mathbf{j}$: equal components.`],
  [R`|M1|$(p + 2)\mathbf{i} + 2\mathbf{j}$`, R`|A1|$p = 0$`, R`|A1|$2\sqrt2 = 2.83$ N`], R`$p = 0$; $2.83$ N`,
  R`Resultant $(p + 2)\mathbf{i} + 2\mathbf{j}$; parallel to $\mathbf{i} + \mathbf{j}$ needs $p + 2 = 2$, so $p = 0$. The resultant $2\mathbf{i} + 2\mathbf{j}$ has magnitude $2\sqrt2 = 2.83$ N.`, NF),
Q('A10.2-9', 3, R`A force of $10$ N acts at $30^\circ$ above $\mathbf{i}$. Write it in the form $a\mathbf{i} + b\mathbf{j}$. [[2]]`,
  [R`$10\cos30^\circ$ and $10\sin30^\circ$.`, R`$\cos30^\circ = 0.866$.`],
  [R`|M1|$10\cos30^\circ\,\mathbf{i} + 10\sin30^\circ\,\mathbf{j}$`, R`|A1|$(8.66\mathbf{i} + 5\mathbf{j})$ N`], R`$(8.66\mathbf{i} + 5\mathbf{j})$ N`,
  R`$10\cos30^\circ = 8.66$ and $10\sin30^\circ = 5$, so $(8.66\mathbf{i} + 5\mathbf{j})$ N.`,
  { fig: Fig.particle({ label: 'A 10 N force at 30 degrees above the horizontal, with its components drawn', ref: true, angles: [{ from: 0, to: 30, label: '30°' }], forces: [{ deg: 30, label: '10 N', len: 92 }, { deg: 0, label: '10 cos 30°', len: 80 }, { deg: 90, label: '10 sin 30°', len: 46 }] }) }),
Q('A10.2-10', 3, R`Find the direction of the force $(-3\mathbf{i} + 3\mathbf{j})$ N, as an angle measured anticlockwise from $\mathbf{i}$. [[2]]`,
  [R`It points up and to the left.`, R`$45^\circ$ above $-\mathbf{i}$.`],
  [R`|M1|$45^\circ$ above the negative $\mathbf{i}$ direction`, R`|A1|$135^\circ$`], R`$135^\circ$`,
  R`It is $45^\circ$ above $-\mathbf{i}$, which is $180^\circ - 45^\circ = 135^\circ$ anticlockwise from $\mathbf{i}$.`, NF),
Q('A10.2-11', 3, R`Forces $(2\mathbf{i} + \mathbf{j})$ N and $(\mathbf{i} - 3\mathbf{j})$ N act on a particle of mass $0.5$ kg. Find the magnitude of its acceleration. [[3]]`,
  [R`Resultant $3\mathbf{i} - 2\mathbf{j}$.`, R`Divide by $0.5$.`],
  [R`|M1|Resultant $3\mathbf{i} - 2\mathbf{j}$`, R`|M1|$\mathbf{a} = 6\mathbf{i} - 4\mathbf{j}$`, R`|A1|$7.21$ m s$^{-2}$`], R`$7.21$ m s$^{-2}$`,
  R`$\mathbf{a} = \frac{3\mathbf{i} - 2\mathbf{j}}{0.5} = 6\mathbf{i} - 4\mathbf{j}$, so $|\mathbf{a}| = \sqrt{52} = 7.21$ m s$^{-2}$.`, NF),
Q('A10.2-12', 4, R`A particle of mass $4$ kg has acceleration $(2\mathbf{i} - 3\mathbf{j})$ m s$^{-2}$ under two forces. One is $(5\mathbf{i} + 2\mathbf{j})$ N. Find the other. [[3]]`,
  [R`The resultant is $4\mathbf{a}$.`, R`Subtract the known force.`],
  [R`|M1|Resultant $= 4(2\mathbf{i} - 3\mathbf{j}) = 8\mathbf{i} - 12\mathbf{j}$`, R`|M1|Subtract $(5\mathbf{i} + 2\mathbf{j})$`, R`|A1|$(3\mathbf{i} - 14\mathbf{j})$ N`], R`$(3\mathbf{i} - 14\mathbf{j})$ N`,
  R`Resultant $= 8\mathbf{i} - 12\mathbf{j}$, so the other force is $8\mathbf{i} - 12\mathbf{j} - (5\mathbf{i} + 2\mathbf{j}) = 3\mathbf{i} - 14\mathbf{j}$.`, NF),
Q('A10.2-13', 4, R`Forces $(2\mathbf{i} + 3\mathbf{j})$ N and $(\lambda\mathbf{i} - 4\mathbf{j})$ N have a resultant of magnitude $5$ N. Find the possible values of $\lambda$. [[4]]`,
  [R`Resultant $(2 + \lambda)\mathbf{i} - \mathbf{j}$.`, R`$(2 + \lambda)^2 + 1 = 25$.`],
  [R`|M1|Resultant $(2 + \lambda)\mathbf{i} - \mathbf{j}$`, R`|M1|$(2 + \lambda)^2 + 1 = 25$`, R`|A1|$2 + \lambda = \pm\sqrt{24}$`, R`|A1|$\lambda = 2.90$ or $-6.90$`], R`$\lambda = 2.90$ or $-6.90$`,
  R`$(2 + \lambda)^2 = 24$, so $\lambda = -2 \pm 2\sqrt6$: $\lambda = 2.90$ or $\lambda = -6.90$.`, NF),
Q('A10.2-14', 4, R`Forces $(3\mathbf{i} + p\mathbf{j})$ N and $(q\mathbf{i} - 2\mathbf{j})$ N have a resultant of magnitude $\sqrt{45}$ N in the direction of $\mathbf{i} + 2\mathbf{j}$. Find $p$ and $q$. [[4]]`,
  [R`The resultant is $k(\mathbf{i} + 2\mathbf{j})$ with $k\sqrt5 = \sqrt{45}$.`, R`So the resultant is $3\mathbf{i} + 6\mathbf{j}$.`],
  [R`|M1|$k\sqrt5 = \sqrt{45}$, $k = 3$`, R`|A1|Resultant $3\mathbf{i} + 6\mathbf{j}$`, R`|A1|$q = 0$`, R`|A1|$p = 8$`], R`$p = 8$, $q = 0$`,
  R`$|k(\mathbf{i} + 2\mathbf{j})| = k\sqrt5 = \sqrt{45}$ gives $k = 3$, so the resultant is $3\mathbf{i} + 6\mathbf{j}$. Then $3 + q = 3$ and $p - 2 = 6$: $q = 0$, $p = 8$.`, NF),
Q('A10.2-15', 5, R`A particle of mass $3$ kg is at rest at the origin. Forces $(6\mathbf{i} - 3\mathbf{j})$ N and $(3\mathbf{i} + 9\mathbf{j})$ N then act on it. Find **(a)** its acceleration **(b)** its speed after $4$ s **(c)** its distance from the origin after $4$ s. [[6]]`,
  [R`$\mathbf{a} = \frac{1}{3}(9\mathbf{i} + 6\mathbf{j})$.`, R`$\mathbf{v} = \mathbf{a}t$ and $\mathbf{r} = \frac12\mathbf{a}t^2$ from rest.`],
  [R`(a)|M1|Resultant $9\mathbf{i} + 6\mathbf{j}$`, R`(a)|A1|$(3\mathbf{i} + 2\mathbf{j})$ m s$^{-2}$`, R`(b)|M1|$\mathbf{v} = 4(3\mathbf{i} + 2\mathbf{j})$`, R`(b)|A1|$14.4$ m s$^{-1}$`, R`(c)|M1|$\mathbf{r} = \frac12(16)(3\mathbf{i} + 2\mathbf{j})$`, R`(c)|A1|$28.8$ m`], R`(a) $(3\mathbf{i} + 2\mathbf{j})$ m s$^{-2}$ (b) $14.4$ m s$^{-1}$ (c) $28.8$ m`,
  R`**(a)** $\mathbf{a} = \frac13(9\mathbf{i} + 6\mathbf{j}) = 3\mathbf{i} + 2\mathbf{j}$.
**(b)** $\mathbf{v} = 12\mathbf{i} + 8\mathbf{j}$, speed $\sqrt{208} = 14.4$ m s$^{-1}$.
**(c)** $\mathbf{r} = 8(3\mathbf{i} + 2\mathbf{j}) = 24\mathbf{i} + 16\mathbf{j}$, distance $\sqrt{832} = 28.8$ m.`, NF)
]};

CONTENT['A10.3'] = {
notes: R`
### Newton's laws
1. An object stays at rest or moves at constant velocity unless a resultant force acts.
2. $F = ma$: the resultant force equals mass times acceleration.
3. Every force has an equal and opposite reaction on the other object.

### Using $F = ma$
1. Draw a force diagram and mark the acceleration with a double arrow.
2. Resolve **in the direction of the acceleration**: (forces that way) $-$ (forces the other way) $= ma$.
3. Use suvat if you need speeds, times or distances.

For a lift accelerating upwards at $a$: $T - mg = ma$. Accelerating downwards: $mg - T = ma$.

::: booklet
**Learn this:** $F = ma$, with $F$ the **resultant** force.
:::

### Worked example 1
A car of mass $1200$ kg has driving force $3000$ N and resistance $600$ N. Find its acceleration.
- $3000 - 600 = 1200a$, so $a = 2$ m s$^{-2}$.

### Worked example 2: lifts
A person of mass $60$ kg stands in a lift moving upwards and **slowing down** at $1.2$ m s$^{-2}$. Find the reaction from the floor.
- The acceleration is downwards, so resolve downwards: $60g - R = 60 \times 1.2$.
- $R = 588 - 72 = 516$ N.

**The trap:** assuming the acceleration is upwards because the lift is moving upwards. Acceleration and velocity can point opposite ways.

### Watch out
- $F$ in $F = ma$ is the resultant, not just the force you're given.
`,
questions: [
Q('A10.3-1', 1, R`A resultant force of $12$ N acts on a particle of mass $3$ kg. Find its acceleration. [[1]]`,
  [R`$a = \frac{F}{m}$.`, R`$\frac{12}{3}$.`],
  [R`|B1|$4$ m s$^{-2}$`], R`$4$ m s$^{-2}$`,
  R`$a = \frac{12}{3} = 4$ m s$^{-2}$.`, NF),
Q('A10.3-2', 1, R`A particle of mass $5$ kg accelerates at $2$ m s$^{-2}$. Find the resultant force on it. [[1]]`,
  [R`$F = ma$.`, R`$5 \times 2$.`],
  [R`|B1|$10$ N`], R`$10$ N`,
  R`$F = 5 \times 2 = 10$ N.`, NF),
Q('A10.3-3', 1, R`Find the weight of a particle of mass $2$ kg. [[1]]`,
  [R`$W = mg$.`, R`$2 \times 9.8$.`],
  [R`|B1|$19.6$ N`], R`$19.6$ N`,
  R`$W = 2 \times 9.8 = 19.6$ N.`, { fig: Fig.particle({ label: 'A 2 kg particle with weight 2g acting down', forces: [{ deg: 270, label: '2g', len: 70, weight: true }] }) }),
Q('A10.3-4', 2, R`A car of mass $1200$ kg has a driving force of $3000$ N and experiences a resistance of $600$ N. Find its acceleration. [[2]]`,
  [R`Resultant $= 3000 - 600$.`, R`$F = ma$.`],
  [R`|M1|$3000 - 600 = 1200a$`, R`|A1|$2$ m s$^{-2}$`], R`$2$ m s$^{-2}$`,
  R`$2400 = 1200a$, so $a = 2$ m s$^{-2}$.`, { fig: A10box('Car with driving force 3000 N and resistance 600 N', [{ deg: 0, label: '3000 N', len: 70 }, { deg: 180, label: '600 N', len: 40 }, { deg: 90, label: 'R', len: 50 }, { deg: 270, label: '1200g', len: 50, weight: true }], { motion: 'a' }) }),
Q('A10.3-5', 2, R`A particle of mass $2$ kg is raised by a vertical string with tension $25$ N. Find its acceleration. [[2]]`,
  [R`Resolve upwards: $T - 2g = 2a$.`, R`$25 - 19.6$.`],
  [R`|M1|$25 - 2g = 2a$`, R`|A1|$2.7$ m s$^{-2}$`], R`$2.7$ m s$^{-2}$`,
  R`$25 - 19.6 = 2a$, so $a = 2.7$ m s$^{-2}$ upwards.`, { fig: Fig.particle({ label: 'Particle raised by a string: tension 25 N up, weight 2g down', forces: [{ deg: 90, label: '25 N', len: 80 }, { deg: 270, label: '2g', len: 64, weight: true }] }) }),
Q('A10.3-6', 2, R`A box is pushed along a floor by a horizontal force of $40$ N against friction of $25$ N. It accelerates at $1.5$ m s$^{-2}$. Find its mass. [[2]]`,
  [R`$40 - 25 = 1.5m$.`, R`Solve for $m$.`],
  [R`|M1|$40 - 25 = 1.5m$`, R`|A1|$10$ kg`], R`$10$ kg`,
  R`$15 = 1.5m$, so $m = 10$ kg.`, { fig: A10box('Box pushed with 40 N against friction 25 N', [{ deg: 0, label: '40 N', len: 70 }, { deg: 180, label: '25 N', len: 45 }, { deg: 90, label: 'R', len: 50 }, { deg: 270, label: 'mg', len: 50, weight: true }], { rough: true, motion: '1.5 m/s²' }) }),
Q('A10.3-7', 2, R`A lift of mass $500$ kg accelerates upwards at $0.5$ m s$^{-2}$. Find the tension in the cable. [[2]]`,
  [R`$T - 500g = 500 \times 0.5$.`, R`$T = 500(9.8 + 0.5)$.`],
  [R`|M1|$T - 500g = 500(0.5)$`, R`|A1|$5150$ N`], R`$5150$ N`,
  R`$T = 500(9.8 + 0.5) = 5150$ N.`, { fig: Fig.particle({ label: 'Lift: tension T up, weight 500g down, accelerating upwards', forces: [{ deg: 90, label: 'T', len: 80 }, { deg: 270, label: '500g', len: 70, weight: true }] }) }),
Q('A10.3-8', 3, R`A person of mass $60$ kg stands in a lift that is moving upwards and decelerating at $1.2$ m s$^{-2}$. Find the reaction from the floor. [[3]]`,
  [R`The acceleration is downwards.`, R`$60g - R = 60 \times 1.2$.`],
  [R`|B1|Acceleration $1.2$ m s$^{-2}$ downwards`, R`|M1|$60g - R = 60(1.2)$`, R`|A1|$516$ N`], R`$516$ N`,
  R`Decelerating while going up means the acceleration is downwards. $60g - R = 72$, so $R = 588 - 72 = 516$ N.`, { fig: Fig.particle({ label: 'Person in the lift: reaction R up, weight 60g down', forces: [{ deg: 90, label: 'R', len: 70 }, { deg: 270, label: '60g', len: 70, weight: true }] }) }),
Q('A10.3-9', 3, R`A car of mass $900$ kg brakes from $20$ m s$^{-1}$ to rest in $40$ m. Find the braking force, assuming it is constant and there are no other resistances. [[3]]`,
  [R`$v^2 = u^2 + 2as$ gives $a$.`, R`Then $F = ma$.`],
  [R`|M1|$0 = 400 + 80a$`, R`|A1|$a = -5$`, R`|A1|$4500$ N`], R`$4500$ N`,
  R`$0 = 20^2 + 2a(40)$ gives $a = -5$ m s$^{-2}$. The braking force is $900 \times 5 = 4500$ N.`, { fig: A10box('Car braking: braking force F backwards', [{ deg: 180, label: 'F', len: 60 }, { deg: 90, label: 'R', len: 50 }, { deg: 270, label: '900g', len: 50, weight: true }], { motion: 'motion' }) }),
Q('A10.3-10', 3, R`A particle of mass $3$ kg falls vertically against an air resistance of $10$ N. Find its acceleration. [[2]]`,
  [R`Resolve downwards: $3g - 10 = 3a$.`, R`$29.4 - 10$.`],
  [R`|M1|$3g - 10 = 3a$`, R`|A1|$6.47$ m s$^{-2}$`], R`$6.47$ m s$^{-2}$`,
  R`$29.4 - 10 = 3a$, so $a = 6.47$ m s$^{-2}$.`, { fig: Fig.particle({ label: 'Falling particle: air resistance 10 N up, weight 3g down', forces: [{ deg: 90, label: '10 N', len: 46 }, { deg: 270, label: '3g', len: 80, weight: true }] }) }),
Q('A10.3-11', 3, R`A sledge of mass $15$ kg is pulled from rest by a horizontal rope with tension $60$ N against a resistance of $30$ N. Find its speed after $5$ s. [[3]]`,
  [R`$60 - 30 = 15a$.`, R`$v = 0 + 5a$.`],
  [R`|M1|$60 - 30 = 15a$`, R`|A1|$a = 2$`, R`|A1|$10$ m s$^{-1}$`], R`$10$ m s$^{-1}$`,
  R`$a = \frac{30}{15} = 2$ m s$^{-2}$, so $v = 2 \times 5 = 10$ m s$^{-1}$.`, { fig: A10box('Sledge pulled by 60 N against resistance 30 N', [{ deg: 0, label: '60 N', len: 70 }, { deg: 180, label: '30 N', len: 45 }, { deg: 90, label: 'R', len: 50 }, { deg: 270, label: '15g', len: 50, weight: true }]) }),
Q('A10.3-12', 4, R`A lift of mass $800$ kg accelerates upwards at $1.5$ m s$^{-2}$ for $2$ s and then moves at constant speed. Find the tension in the cable in each stage, and the constant speed. [[3]]`,
  [R`Stage 1: $T - 800g = 800 \times 1.5$.`, R`Stage 2: $T = 800g$.`],
  [R`|B1|$9040$ N`, R`|B1|$7840$ N`, R`|B1|$3$ m s$^{-1}$`], R`$9040$ N; $7840$ N; $3$ m s$^{-1}$`,
  R`Accelerating: $T = 800(9.8 + 1.5) = 9040$ N. Constant speed: $T = 800g = 7840$ N. The speed reached is $1.5 \times 2 = 3$ m s$^{-1}$.`, { fig: Fig.particle({ label: 'Lift: tension T up, weight 800g down', forces: [{ deg: 90, label: 'T', len: 80 }, { deg: 270, label: '800g', len: 70, weight: true }] }) }),
Q('A10.3-13', 4, R`A ball of mass $0.2$ kg is thrown vertically upwards at $15$ m s$^{-1}$. On the way up, air resistance of $0.5$ N acts on it. Find its deceleration and its greatest height. [[4]]`,
  [R`Both forces act downwards on the way up.`, R`$0.2g + 0.5 = 0.2a$.`],
  [R`|M1|$0.2g + 0.5 = 0.2a$`, R`|A1|$12.3$ m s$^{-2}$`, R`|M1|$0 = 15^2 - 2(12.3)s$`, R`|A1|$9.15$ m`], R`$12.3$ m s$^{-2}$; $9.15$ m`,
  R`$1.96 + 0.5 = 0.2a$, so $a = 12.3$ m s$^{-2}$ (downwards). Then $s = \frac{225}{2 \times 12.3} = 9.15$ m.`, { fig: Fig.particle({ label: 'Ball moving up: weight 0.2g and air resistance 0.5 N both act down', forces: [{ deg: 270, label: '0.2g + 0.5 N', len: 70, weight: true }] }) }),
Q('A10.3-14', 4, R`A car of mass $1500$ kg speeds up from $10$ m s$^{-1}$ to $25$ m s$^{-1}$ in $6$ s against a resistance of $500$ N. Find the driving force. [[3]]`,
  [R`$a = \frac{15}{6}$.`, R`$D - 500 = 1500a$.`],
  [R`|B1|$a = 2.5$ m s$^{-2}$`, R`|M1|$D - 500 = 1500(2.5)$`, R`|A1|$4250$ N`], R`$4250$ N`,
  R`$a = 2.5$ m s$^{-2}$, so $D = 1500 \times 2.5 + 500 = 4250$ N.`, { fig: A10box('Car: driving force D forwards, resistance 500 N backwards', [{ deg: 0, label: 'D', len: 70 }, { deg: 180, label: '500 N', len: 40 }, { deg: 90, label: 'R', len: 50 }, { deg: 270, label: '1500g', len: 50, weight: true }]) }),
Q('A10.3-15', 5, R`A boy of mass $50$ kg stands on bathroom scales in a lift. **(a)** The scales read $590$ N. Find the acceleration of the lift and state its direction. **(b)** The lift then moves upwards while decelerating at $1.5$ m s$^{-2}$. Find the reading on the scales. **(c)** Explain why the reading changes. [[6]]`,
  [R`The scales show the reaction $R$.`, R`(a) $590 - 50g = 50a$.`],
  [R`(a)|M1|$590 - 50g = 50a$`, R`(a)|A1|$2$ m s$^{-2}$ upwards`, R`(b)|M1|$50g - R = 50(1.5)$`, R`(b)|A1|$415$ N`, R`(c)|B1|The reading is the normal reaction, not the weight`, R`(c)|B1|It must provide the resultant force $ma$ as well as balance the weight`], R`(a) $2$ m s$^{-2}$ up (b) $415$ N`,
  R`**(a)** $590 - 490 = 50a$, so $a = 2$ m s$^{-2}$ upwards.
**(b)** The acceleration is $1.5$ m s$^{-2}$ downwards: $490 - R = 75$, so $R = 415$ N.
**(c)** The scales measure the normal reaction. It differs from the weight by the force needed to give the boy the lift's acceleration.`, { fig: Fig.particle({ label: 'Boy on scales: reaction R up, weight 50g down', forces: [{ deg: 90, label: 'R', len: 76 }, { deg: 270, label: '50g', len: 70, weight: true }] }) })
]};

CONTENT['A10.4'] = {
notes: R`
### Constant acceleration in two dimensions
The suvat formulae work with vectors when the acceleration is constant:
$$\mathbf{v} = \mathbf{u} + \mathbf{a}t \qquad \mathbf{r} = \mathbf{u}t + \tfrac12\mathbf{a}t^2$$
(For a particle starting at $\mathbf{r}_0$, add $\mathbf{r}_0$ to the second formula.) Combine with $\mathbf{F} = m\mathbf{a}$.

- **Speed** $= |\mathbf{v}|$.
- **Moving parallel to $\mathbf{i}$**: the $\mathbf{j}$ part of $\mathbf{v}$ is zero.
- **Due east of the origin**: the $\mathbf{j}$ part of $\mathbf{r}$ is zero and the $\mathbf{i}$ part is positive.

::: booklet
**Learn these:** $\mathbf{v} = \mathbf{u} + \mathbf{a}t$ and $\mathbf{r} = \mathbf{u}t + \frac12\mathbf{a}t^2$.
:::

### Worked example 1
A particle has $\mathbf{u} = (3\mathbf{i} + 2\mathbf{j})$ m s$^{-1}$ and $\mathbf{a} = (\mathbf{i} - \mathbf{j})$ m s$^{-2}$. Find its velocity and speed after $4$ s.
- $\mathbf{v} = (3 + 4)\mathbf{i} + (2 - 4)\mathbf{j} = 7\mathbf{i} - 2\mathbf{j}$.
- Speed $\sqrt{53} = 7.28$ m s$^{-1}$.

### Worked example 2: direction of motion
When is the particle above moving parallel to $\mathbf{i}$?
- $\mathbf{v} = (3 + t)\mathbf{i} + (2 - t)\mathbf{j}$. Parallel to $\mathbf{i}$ when $2 - t = 0$, so $t = 2$ s.

**The trap:** using the position vector $\mathbf{r}$. The direction of **motion** comes from $\mathbf{v}$.

### Watch out
- Find time from one component, then use it in the other.
`,
questions: [
Q('A10.4-1', 1, R`A particle starts from rest with acceleration $(2\mathbf{i} - \mathbf{j})$ m s$^{-2}$. Find its velocity after $3$ s. [[1]]`,
  [R`$\mathbf{v} = \mathbf{u} + \mathbf{a}t$.`, R`$\mathbf{u} = \mathbf{0}$.`],
  [R`|B1|$(6\mathbf{i} - 3\mathbf{j})$ m s$^{-1}$`], R`$(6\mathbf{i} - 3\mathbf{j})$ m s$^{-1}$`,
  R`$\mathbf{v} = 3(2\mathbf{i} - \mathbf{j}) = 6\mathbf{i} - 3\mathbf{j}$.`, NF),
Q('A10.4-2', 1, R`Find the speed of a particle with velocity $(6\mathbf{i} - 3\mathbf{j})$ m s$^{-1}$. [[1]]`,
  [R`Magnitude.`, R`$\sqrt{36 + 9}$.`],
  [R`|B1|$6.71$ m s$^{-1}$`], R`$6.71$ m s$^{-1}$`,
  R`$\sqrt{45} = 6.71$ m s$^{-1}$.`, NF),
Q('A10.4-3', 1, R`A force of $(4\mathbf{i} + 6\mathbf{j})$ N acts on a particle of mass $2$ kg. Find its acceleration. [[1]]`,
  [R`$\mathbf{a} = \frac{\mathbf{F}}{m}$.`, R`Halve each part.`],
  [R`|B1|$(2\mathbf{i} + 3\mathbf{j})$ m s$^{-2}$`], R`$(2\mathbf{i} + 3\mathbf{j})$ m s$^{-2}$`,
  R`$\mathbf{a} = \frac12(4\mathbf{i} + 6\mathbf{j}) = 2\mathbf{i} + 3\mathbf{j}$.`, NF),
Q('A10.4-4', 2, R`A particle has initial velocity $(3\mathbf{i} + 2\mathbf{j})$ m s$^{-1}$ and acceleration $(\mathbf{i} - \mathbf{j})$ m s$^{-2}$. Find its velocity after $4$ s and its speed. [[2]]`,
  [R`$\mathbf{v} = \mathbf{u} + 4\mathbf{a}$.`, R`Then the magnitude.`],
  [R`|B1|$(7\mathbf{i} - 2\mathbf{j})$ m s$^{-1}$`, R`|B1|$7.28$ m s$^{-1}$`], R`$(7\mathbf{i} - 2\mathbf{j})$ m s$^{-1}$; $7.28$ m s$^{-1}$`,
  R`$\mathbf{v} = 7\mathbf{i} - 2\mathbf{j}$, speed $\sqrt{53} = 7.28$ m s$^{-1}$.`, NF),
Q('A10.4-5', 2, R`A particle starts at the origin with velocity $(2\mathbf{i} + \mathbf{j})$ m s$^{-1}$ and acceleration $(\mathbf{i} + 2\mathbf{j})$ m s$^{-2}$. Find its position after $2$ s. [[2]]`,
  [R`$\mathbf{r} = \mathbf{u}t + \frac12\mathbf{a}t^2$.`, R`$2(2\mathbf{i} + \mathbf{j}) + 2(\mathbf{i} + 2\mathbf{j})$.`],
  [R`|M1|$2(2\mathbf{i} + \mathbf{j}) + \frac12(4)(\mathbf{i} + 2\mathbf{j})$`, R`|A1|$(6\mathbf{i} + 6\mathbf{j})$ m`], R`$(6\mathbf{i} + 6\mathbf{j})$ m`,
  R`$\mathbf{r} = 4\mathbf{i} + 2\mathbf{j} + 2\mathbf{i} + 4\mathbf{j} = 6\mathbf{i} + 6\mathbf{j}$.`, NF),
Q('A10.4-6', 2, R`A particle has velocity $\mathbf{v} = (3 + t)\mathbf{i} + (2t - 4)\mathbf{j}$ m s$^{-1}$. Find when it is moving parallel to $\mathbf{i}$. [[2]]`,
  [R`The $\mathbf{j}$ part is zero.`, R`$2t - 4 = 0$.`],
  [R`|M1|$2t - 4 = 0$`, R`|A1|$t = 2$ s`], R`$t = 2$ s`,
  R`$2t - 4 = 0$ gives $t = 2$ s (and the $\mathbf{i}$ part is $5 \ne 0$).`, NF),
Q('A10.4-7', 2, R`A particle of mass $4$ kg starts from rest and is acted on by a force $(8\mathbf{i} - 4\mathbf{j})$ N. Find its speed after $5$ s. [[2]]`,
  [R`$\mathbf{a} = 2\mathbf{i} - \mathbf{j}$.`, R`$\mathbf{v} = 5\mathbf{a}$.`],
  [R`|M1|$\mathbf{v} = 5(2\mathbf{i} - \mathbf{j}) = 10\mathbf{i} - 5\mathbf{j}$`, R`|A1|$11.2$ m s$^{-1}$`], R`$11.2$ m s$^{-1}$`,
  R`$\mathbf{a} = 2\mathbf{i} - \mathbf{j}$, so $\mathbf{v} = 10\mathbf{i} - 5\mathbf{j}$ and the speed is $\sqrt{125} = 11.2$ m s$^{-1}$.`, NF),
Q('A10.4-8', 3, R`A particle has velocity $\mathbf{v} = (2 + t)\mathbf{i} + (6 - 2t)\mathbf{j}$ m s$^{-1}$. Find the angle between its direction of motion and $\mathbf{i}$ when $t = 1$. [[3]]`,
  [R`$\mathbf{v}(1) = 3\mathbf{i} + 4\mathbf{j}$.`, R`$\tan^{-1}\frac43$.`],
  [R`|M1|$\mathbf{v} = 3\mathbf{i} + 4\mathbf{j}$`, R`|M1|$\tan^{-1}\frac43$`, R`|A1|$53.1^\circ$`], R`$53.1^\circ$`,
  R`At $t = 1$, $\mathbf{v} = 3\mathbf{i} + 4\mathbf{j}$, so the angle with $\mathbf{i}$ is $\tan^{-1}\frac43 = 53.1^\circ$.`, NF),
Q('A10.4-9', 3, R`A particle starts at the origin with velocity $(2\mathbf{i} + 4\mathbf{j})$ m s$^{-1}$ and acceleration $(\mathbf{i} - 2\mathbf{j})$ m s$^{-2}$. Find when it is due east of the origin, and how far away it is then. [[3]]`,
  [R`$\mathbf{r} = (2t + 0.5t^2)\mathbf{i} + (4t - t^2)\mathbf{j}$.`, R`Set the $\mathbf{j}$ part to $0$.`],
  [R`|M1|$4t - t^2 = 0$`, R`|A1|$t = 4$ s`, R`|A1|$16$ m`], R`$t = 4$ s; $16$ m`,
  R`$4t - t^2 = 0$ gives $t = 4$ ($t > 0$). Then $\mathbf{r} = (8 + 8)\mathbf{i} = 16\mathbf{i}$, so it is $16$ m due east.`, NF),
Q('A10.4-10', 3, R`A particle's velocity changes from $(5\mathbf{i} - 2\mathbf{j})$ m s$^{-1}$ to $(13\mathbf{i} + 6\mathbf{j})$ m s$^{-1}$ in $4$ s with constant acceleration. Find the acceleration. [[2]]`,
  [R`$\mathbf{a} = \frac{\mathbf{v} - \mathbf{u}}{t}$.`, R`$\frac{8\mathbf{i} + 8\mathbf{j}}{4}$.`],
  [R`|M1|$\frac{(13 - 5)\mathbf{i} + (6 + 2)\mathbf{j}}{4}$`, R`|A1|$(2\mathbf{i} + 2\mathbf{j})$ m s$^{-2}$`], R`$(2\mathbf{i} + 2\mathbf{j})$ m s$^{-2}$`,
  R`$\mathbf{a} = \frac{8\mathbf{i} + 8\mathbf{j}}{4} = 2\mathbf{i} + 2\mathbf{j}$.`, NF),
Q('A10.4-11', 3, R`A ship starts at $(2\mathbf{i} + \mathbf{j})$ km and moves with constant velocity $(3\mathbf{i} + 4\mathbf{j})$ km h$^{-1}$. Find when it reaches $(14\mathbf{i} + 17\mathbf{j})$ km. [[2]]`,
  [R`$\mathbf{r} = \mathbf{r}_0 + \mathbf{v}t$.`, R`Use the $\mathbf{i}$ parts, then check the $\mathbf{j}$ parts.`],
  [R`|M1|$2 + 3t = 14$ and $1 + 4t = 17$`, R`|A1|$t = 4$ hours`], R`After $4$ hours`,
  R`$2 + 3t = 14$ gives $t = 4$, and $1 + 4t = 17$ also gives $t = 4$. It arrives after $4$ hours.`, NF),
Q('A10.4-12', 4, R`A particle of mass $2$ kg has initial velocity $(4\mathbf{i} - 3\mathbf{j})$ m s$^{-1}$ and is acted on by a constant force $(2\mathbf{i} + 4\mathbf{j})$ N. Find when it is moving in the direction of $\mathbf{i} + \mathbf{j}$, and its speed then. [[4]]`,
  [R`$\mathbf{a} = \mathbf{i} + 2\mathbf{j}$.`, R`Equal positive components: $4 + t = -3 + 2t$.`],
  [R`|B1|$\mathbf{a} = \mathbf{i} + 2\mathbf{j}$`, R`|M1|$\mathbf{v} = (4 + t)\mathbf{i} + (2t - 3)\mathbf{j}$`, R`|A1|$t = 7$ s`, R`|A1|$15.6$ m s$^{-1}$`], R`$t = 7$ s; $15.6$ m s$^{-1}$`,
  R`$\mathbf{v} = (4 + t)\mathbf{i} + (2t - 3)\mathbf{j}$. Direction $\mathbf{i} + \mathbf{j}$ needs $4 + t = 2t - 3$, so $t = 7$ s. Then $\mathbf{v} = 11\mathbf{i} + 11\mathbf{j}$, speed $11\sqrt2 = 15.6$ m s$^{-1}$.`, NF),
Q('A10.4-13', 4, R`A particle starts at the origin with velocity $(\mathbf{i} + 2\mathbf{j})$ m s$^{-1}$ and acceleration $(2\mathbf{i} - \mathbf{j})$ m s$^{-2}$. Find its distance from the origin after $3$ s. [[3]]`,
  [R`$\mathbf{r} = 3(\mathbf{i} + 2\mathbf{j}) + 4.5(2\mathbf{i} - \mathbf{j})$.`, R`Then the magnitude.`],
  [R`|M1|$\mathbf{r} = \mathbf{u}t + \frac12\mathbf{a}t^2$`, R`|A1|$12\mathbf{i} + 1.5\mathbf{j}$`, R`|A1|$12.1$ m`], R`$12.1$ m`,
  R`$\mathbf{r} = 3\mathbf{i} + 6\mathbf{j} + 9\mathbf{i} - 4.5\mathbf{j} = 12\mathbf{i} + 1.5\mathbf{j}$, distance $\sqrt{146.25} = 12.1$ m.`, NF),
Q('A10.4-14', 4, R`Particle $P$ leaves the origin with constant velocity $4\mathbf{i}$ m s$^{-1}$. At the same moment, particle $Q$ leaves the origin from rest with acceleration $(2\mathbf{i} + \mathbf{j})$ m s$^{-2}$. Find when $Q$ is due north of $P$, and the distance between them then. [[4]]`,
  [R`$\mathbf{p} = 4t\mathbf{i}$, $\mathbf{q} = t^2\mathbf{i} + 0.5t^2\mathbf{j}$.`, R`Due north: equal $\mathbf{i}$ parts.`],
  [R`|M1|$\mathbf{p} = 4t\mathbf{i}$ and $\mathbf{q} = t^2\mathbf{i} + 0.5t^2\mathbf{j}$`, R`|M1|$t^2 = 4t$`, R`|A1|$t = 4$ s`, R`|A1|$8$ m`], R`$t = 4$ s; $8$ m`,
  R`Equal $\mathbf{i}$ parts: $t^2 = 4t$, so $t = 4$. Then $\mathbf{q} - \mathbf{p} = 0.5(16)\mathbf{j} = 8\mathbf{j}$: $Q$ is $8$ m due north of $P$.`, NF),
Q('A10.4-15', 5, R`A particle of mass $0.5$ kg is at rest at the point $(\mathbf{i} + 2\mathbf{j})$ m. Forces $(3\mathbf{i} - \mathbf{j})$ N and $(-\mathbf{i} + 2\mathbf{j})$ N then act on it. Find **(a)** its acceleration **(b)** its position vector after $3$ s **(c)** its speed after $3$ s **(d)** its distance from its starting point after $3$ s. [[7]]`,
  [R`$\mathbf{a} = \frac{2\mathbf{i} + \mathbf{j}}{0.5}$.`, R`Add $\mathbf{r}_0$ in (b).`],
  [R`(a)|M1|Resultant $2\mathbf{i} + \mathbf{j}$`, R`(a)|A1|$(4\mathbf{i} + 2\mathbf{j})$ m s$^{-2}$`, R`(b)|M1|$\mathbf{r} = (\mathbf{i} + 2\mathbf{j}) + \frac12(9)(4\mathbf{i} + 2\mathbf{j})$`, R`(b)|A1|$(19\mathbf{i} + 11\mathbf{j})$ m`, R`(c)|M1|$\mathbf{v} = 3(4\mathbf{i} + 2\mathbf{j})$`, R`(c)|A1|$13.4$ m s$^{-1}$`, R`(d)|B1|$\sqrt{18^2 + 9^2} = 20.1$ m`], R`(a) $(4\mathbf{i} + 2\mathbf{j})$ m s$^{-2}$ (b) $(19\mathbf{i} + 11\mathbf{j})$ m (c) $13.4$ m s$^{-1}$ (d) $20.1$ m`,
  R`**(a)** $\mathbf{a} = \frac{2\mathbf{i} + \mathbf{j}}{0.5} = 4\mathbf{i} + 2\mathbf{j}$.
**(b)** Displacement $= 4.5(4\mathbf{i} + 2\mathbf{j}) = 18\mathbf{i} + 9\mathbf{j}$, so $\mathbf{r} = 19\mathbf{i} + 11\mathbf{j}$.
**(c)** $\mathbf{v} = 12\mathbf{i} + 6\mathbf{j}$, speed $\sqrt{180} = 13.4$ m s$^{-1}$.
**(d)** $\sqrt{18^2 + 9^2} = 20.1$ m.`, NF)
]};

CONTENT['A10.5'] = {
notes: R`
### Connected particles
When objects are joined by a light inextensible string (or a rigid tow bar), they move with the **same acceleration**.
- **Whole system:** treat them as one object. The tension is internal, so it cancels.
- **One object:** include the tension (or thrust) acting on it.
Use the whole system to find $a$, then one object to find $T$.

[[fig:A10.5-car]]

::: booklet
**Learn this:** internal forces (tension in a tow bar) cancel when you treat the system as a whole.
:::

### Worked example 1
A car of mass $1000$ kg tows a trailer of mass $500$ kg. The car's driving force is $3000$ N; the resistance is $400$ N on the car and $200$ N on the trailer. Find the acceleration and the tension in the tow bar.
- System: $3000 - 400 - 200 = 1500a$, so $a = 1.6$ m s$^{-2}$.
- Trailer: $T - 200 = 500 \times 1.6$, so $T = 1000$ N.

### Worked example 2: thrust when braking
A car of mass $1200$ kg tows a trailer of mass $400$ kg. The car brakes with a force of $2000$ N; there are no other resistances.
- System: $-2000 = 1600a$, so $a = -1.25$ m s$^{-2}$.
- Trailer: the only horizontal force is from the tow bar, $= 400 \times (-1.25) = -500$ N. It acts **backwards** on the trailer: a **thrust** of $500$ N.

**The trap:** assuming the tow bar is always in tension. When the car brakes, the bar pushes the trailer back.

### Watch out
- Draw separate force diagrams for each object.
`,
questions: [
Q('A10.5-1', 1, R`A car of mass $1000$ kg tows a trailer of mass $500$ kg with a driving force of $3000$ N. There are no resistances. Find the acceleration. [[1]]`,
  [R`Treat them as one system.`, R`$3000 = 1500a$.`],
  [R`|B1|$2$ m s$^{-2}$`], R`$2$ m s$^{-2}$`,
  R`$3000 = 1500a$, so $a = 2$ m s$^{-2}$.`, { fig: Fig.train({ label: 'Trailer and car with driving force 3000 N on the car and tension T in the tow bar', blocks: [{ name: 'trailer 500 kg', w: 96 }, { name: 'car 1000 kg', w: 96 }], forces: [{ on: 1, dir: 'R', label: '3000 N', len: 44 }, { on: 1, dir: 'TL', label: 'T' }, { on: 0, dir: 'TR', label: 'T' }] }) }),
Q('A10.5-2', 1, R`For the car and trailer in question 1, find the tension in the tow bar. [[1]]`,
  [R`Look at the trailer alone.`, R`$T = 500 \times 2$.`],
  [R`|B1|$1000$ N`], R`$1000$ N`,
  R`The only horizontal force on the trailer is $T$, so $T = 500 \times 2 = 1000$ N.`, { fig: Fig.train({ label: 'Trailer alone: tension T forwards', blocks: [{ name: 'trailer 500 kg', w: 96 }], forces: [{ on: 0, dir: 'R', label: 'T', len: 44 }] }) }),
Q('A10.5-3', 1, R`Explain why the car and trailer have the same acceleration. [[1]]`,
  [R`What joins them?`, R`It doesn't stretch.`],
  [R`|B1|The tow bar is rigid (inextensible), so they move together`], R`The tow bar doesn't stretch`,
  R`The tow bar is rigid and doesn't change length, so the car and trailer always move together with the same velocity and acceleration.`, NF),
Q('A10.5-4', 2, R`A car of mass $1000$ kg tows a trailer of mass $500$ kg. The driving force is $3000$ N, and the resistances are $400$ N on the car and $200$ N on the trailer. Find the acceleration and the tension in the tow bar. [[3]]`,
  [R`System: $3000 - 600 = 1500a$.`, R`Trailer: $T - 200 = 500a$.`],
  [R`|M1|$3000 - 400 - 200 = 1500a$`, R`|A1|$a = 1.6$ m s$^{-2}$`, R`|A1|$T = 1000$ N`], R`$1.6$ m s$^{-2}$; $1000$ N`,
  R`$2400 = 1500a$, so $a = 1.6$ m s$^{-2}$. Trailer: $T = 500 \times 1.6 + 200 = 1000$ N.`, { fig: Fig.train({ label: 'Trailer and car with driving force 3000 N, resistances 200 N and 400 N, tension T', blocks: [{ name: 'trailer 500 kg', w: 96 }, { name: 'car 1000 kg', w: 96 }], forces: [{ on: 1, dir: 'R', label: '3000 N', len: 44 }, { on: 1, dir: 'TL', label: 'T' }, { on: 0, dir: 'TR', label: 'T' }, { on: 0, dir: 'L', label: '200 N', len: 36 }] }) }),
Q('A10.5-5', 2, R`Blocks $A$ ($3$ kg) and $B$ ($2$ kg) lie on a smooth table, joined by a light string. $A$ is pulled with a horizontal force of $20$ N, away from $B$. Find the acceleration and the tension. [[2]]`,
  [R`System: $20 = 5a$.`, R`$B$: $T = 2a$.`],
  [R`|B1|$a = 4$ m s$^{-2}$`, R`|B1|$T = 8$ N`], R`$4$ m s$^{-2}$; $8$ N`,
  R`$20 = 5a$ gives $a = 4$ m s$^{-2}$. For $B$: $T = 2 \times 4 = 8$ N.`, { fig: Fig.train({ label: 'B (2 kg) and A (3 kg) joined by a string, A pulled by 20 N', blocks: [{ name: 'B 2 kg', w: 70 }, { name: 'A 3 kg', w: 70 }], forces: [{ on: 1, dir: 'R', label: '20 N', len: 44 }, { on: 1, dir: 'TL', label: 'T' }, { on: 0, dir: 'TR', label: 'T' }] }) }),
Q('A10.5-6', 2, R`Two boxes of mass $5$ kg and $3$ kg stand touching on a smooth floor. A horizontal force of $24$ N pushes the $5$ kg box, which pushes the $3$ kg box. Find the acceleration and the force between the boxes. [[2]]`,
  [R`System: $24 = 8a$.`, R`$3$ kg box: $S = 3a$.`],
  [R`|B1|$3$ m s$^{-2}$`, R`|B1|$9$ N`], R`$3$ m s$^{-2}$; $9$ N`,
  R`$24 = 8a$, so $a = 3$ m s$^{-2}$. The $3$ kg box needs $S = 3 \times 3 = 9$ N.`, { fig: Fig.particle({ label: 'Forces on the 3 kg box: push S from the 5 kg box, reaction R up, weight 3g down', forces: [{ deg: 0, label: 'S', len: 70 }, { deg: 90, label: 'R', len: 50 }, { deg: 270, label: '3g', len: 50, weight: true }] }) }),
Q('A10.5-7', 2, R`A lift of mass $400$ kg carries a passenger of mass $70$ kg and accelerates upwards at $0.8$ m s$^{-2}$. Find the tension in the cable and the reaction on the passenger. [[3]]`,
  [R`System: $T - 470g = 470(0.8)$.`, R`Passenger: $R - 70g = 70(0.8)$.`],
  [R`|M1|$T - 470g = 470(0.8)$`, R`|A1|$T = 4980$ N`, R`|A1|$R = 742$ N`], R`$T = 4980$ N; $R = 742$ N`,
  R`$T = 470(9.8 + 0.8) = 4982$ N, about $4980$ N. $R = 70(10.6) = 742$ N.`, { fig: Fig.particle({ label: 'Passenger in the lift: reaction R up, weight 70g down', forces: [{ deg: 90, label: 'R', len: 70 }, { deg: 270, label: '70g', len: 70, weight: true }] }) }),
Q('A10.5-8', 3, R`A car of mass $1200$ kg tows a trailer of mass $400$ kg. The car brakes with a force of $2000$ N, and there are no other resistances. Find the deceleration and the force in the tow bar, saying whether it is a tension or a thrust. [[3]]`,
  [R`System: $-2000 = 1600a$.`, R`Trailer: force $= 400a$.`],
  [R`|B1|$1.25$ m s$^{-2}$`, R`|M1|Trailer: $F = 400 \times 1.25$`, R`|A1|$500$ N, thrust`], R`$1.25$ m s$^{-2}$; thrust of $500$ N`,
  R`$a = -\frac{2000}{1600} = -1.25$ m s$^{-2}$. The trailer needs a backwards force of $400 \times 1.25 = 500$ N, so the tow bar is in thrust, $500$ N.`, { fig: Fig.train({ label: 'Braking: braking force 2000 N backwards on the car; the tow bar pushes the trailer backwards', blocks: [{ name: 'trailer 400 kg', w: 96 }, { name: 'car 1200 kg', w: 96 }], forces: [{ on: 1, dir: 'TL', label: 'S', push: true }, { on: 0, dir: 'TR', label: 'S', push: true }], link: 'rod', motion: 'moving right; car brakes with 2000 N' }) }),
Q('A10.5-9', 3, R`A truck of mass $2000$ kg pulls a trailer of mass $1000$ kg. The resistances are $800$ N on the truck and $400$ N on the trailer, and the acceleration is $0.5$ m s$^{-2}$. Find the driving force and the tension in the coupling. [[4]]`,
  [R`System: $D - 1200 = 3000(0.5)$.`, R`Trailer: $T - 400 = 1000(0.5)$.`],
  [R`|M1|$D - 1200 = 1500$`, R`|A1|$D = 2700$ N`, R`|M1|$T - 400 = 500$`, R`|A1|$T = 900$ N`], R`$D = 2700$ N; $T = 900$ N`,
  R`System: $D = 1500 + 1200 = 2700$ N. Trailer: $T = 500 + 400 = 900$ N.`, { fig: Fig.train({ label: 'Trailer and truck: driving force D, resistances 400 N and 800 N, tension T', blocks: [{ name: 'trailer 1000 kg', w: 104 }, { name: 'truck 2000 kg', w: 104 }], forces: [{ on: 1, dir: 'R', label: 'D', len: 44 }, { on: 1, dir: 'TL', label: 'T' }, { on: 0, dir: 'TR', label: 'T' }, { on: 0, dir: 'L', label: '400 N', len: 36 }] }) }),
Q('A10.5-10', 3, R`A lift of mass $520$ kg carries a man of mass $80$ kg. The tension in the cable is $7200$ N. Find the acceleration of the lift and the reaction on the man. [[3]]`,
  [R`System: $7200 - 600g = 600a$.`, R`Man: $R - 80g = 80a$.`],
  [R`|M1|$7200 - 600g = 600a$`, R`|A1|$a = 2.2$ m s$^{-2}$ upwards`, R`|A1|$R = 960$ N`], R`$2.2$ m s$^{-2}$ upwards; $960$ N`,
  R`$7200 - 5880 = 600a$, so $a = 2.2$ m s$^{-2}$ upwards. $R = 80(9.8 + 2.2) = 960$ N.`, { fig: Fig.particle({ label: 'Lift and man together: tension 7200 N up, weight 600g down', forces: [{ deg: 90, label: '7200 N', len: 80 }, { deg: 270, label: '600g', len: 70, weight: true }] }) }),
Q('A10.5-11', 3, R`An engine of mass $50\,000$ kg pulls two carriages, each of mass $20\,000$ kg, with a driving force of $80\,000$ N. Ignoring resistances, find the acceleration and the tension in the coupling between the two carriages. [[3]]`,
  [R`System mass $90\,000$ kg.`, R`The last carriage alone: $T = 20\,000a$.`],
  [R`|B1|$a = 0.889$ m s$^{-2}$`, R`|M1|Last carriage: $T = 20\,000a$`, R`|A1|$17\,800$ N`], R`$0.889$ m s$^{-2}$; $17\,800$ N`,
  R`$a = \frac{80\,000}{90\,000} = 0.889$ m s$^{-2}$. The last carriage: $T = 20\,000 \times 0.889 = 17\,800$ N.`, { fig: Fig.train({ label: 'Two carriages and an engine with driving force 80000 N', blocks: [{ name: 'carriage', w: 80 }, { name: 'carriage', w: 80 }, { name: 'engine', w: 90 }], forces: [{ on: 2, dir: 'R', label: '80 000 N', len: 40 }, { on: 0, dir: 'TR', label: 'T' }] }) }),
Q('A10.5-12', 4, R`A car of mass $1100$ kg tows a caravan of mass $900$ kg. The driving force is $2600$ N and each experiences a resistance of $300$ N. **(a)** Find the acceleration and the tension in the tow bar. **(b)** When the speed is $15$ m s$^{-1}$, the tow bar breaks. Find the distance the caravan travels before stopping, assuming its resistance stays $300$ N. [[5]]`,
  [R`System: $2600 - 600 = 2000a$.`, R`After the break, the caravan only has the resistance.`],
  [R`(a)|M1|$2000 = 2000a$`, R`(a)|A1|$a = 1$ m s$^{-2}$; $T = 1200$ N`, R`(b)|M1|Deceleration $\frac{300}{900}$`, R`(b)|M1|$0 = 15^2 - 2\left(\frac13\right)s$`, R`(b)|A1|$338$ m`], R`(a) $1$ m s$^{-2}$, $1200$ N (b) $338$ m`,
  R`**(a)** $a = \frac{2600 - 600}{2000} = 1$ m s$^{-2}$. Caravan: $T - 300 = 900$, so $T = 1200$ N.
**(b)** Deceleration $= \frac{300}{900} = \frac13$ m s$^{-2}$. $0 = 225 - \frac23s$, so $s = 337.5 \approx 338$ m.`, { fig: Fig.train({ label: 'Caravan and car with driving force 2600 N and resistances 300 N each', blocks: [{ name: 'caravan 900 kg', w: 100 }, { name: 'car 1100 kg', w: 96 }], forces: [{ on: 1, dir: 'R', label: '2600 N', len: 44 }, { on: 1, dir: 'TL', label: 'T' }, { on: 0, dir: 'TR', label: 'T' }, { on: 0, dir: 'L', label: '300 N', len: 36 }] }) }),
Q('A10.5-13', 4, R`Three boxes of mass $1$ kg, $2$ kg and $3$ kg stand in a line, touching, on a smooth floor. A horizontal force of $30$ N pushes the $1$ kg box towards the others. Find the acceleration and the forces between each pair of boxes. [[3]]`,
  [R`System: $30 = 6a$.`, R`The force on the $3$ kg box: $3a$; on the last two: $5a$.`],
  [R`|B1|$a = 5$ m s$^{-2}$`, R`|B1|Between $1$ kg and $2$ kg: $25$ N`, R`|B1|Between $2$ kg and $3$ kg: $15$ N`], R`$5$ m s$^{-2}$; $25$ N; $15$ N`,
  R`$a = 5$ m s$^{-2}$. The last two boxes ($5$ kg) need $25$ N, so the force between the first two is $25$ N. The last box needs $15$ N.`, { fig: Fig.train({ label: 'Three boxes of 1, 2 and 3 kg in a line, touching, pushed from the left', blocks: [{ name: '1 kg', w: 56 }, { name: '2 kg', w: 56 }, { name: '3 kg', w: 56 }], forces: [], link: 'rod', motion: '30 N push on the 1 kg box' }) }),
Q('A10.5-14', 4, R`Particle $A$ of mass $3$ kg hangs from a string. Particle $B$ of mass $2$ kg hangs below $A$ on a second light string. The top string is pulled upwards with tension $60$ N. Find the acceleration and the tension in the lower string. [[3]]`,
  [R`System: $60 - 5g = 5a$.`, R`$B$: $T - 2g = 2a$.`],
  [R`|M1|$60 - 5g = 5a$`, R`|A1|$a = 2.2$ m s$^{-2}$`, R`|A1|$T = 24$ N`], R`$2.2$ m s$^{-2}$; $24$ N`,
  R`$60 - 49 = 5a$, so $a = 2.2$ m s$^{-2}$ upwards. For $B$: $T = 2(9.8 + 2.2) = 24$ N.`, { fig: Fig.particle({ label: 'Particle B: tension T up, weight 2g down', forces: [{ deg: 90, label: 'T', len: 70 }, { deg: 270, label: '2g', len: 60, weight: true }] }) }),
Q('A10.5-15', 5, R`A car of mass $1200$ kg tows a trailer of mass $600$ kg using a light inextensible rope. The resistances are $400$ N on the car and $200$ N on the trailer, and the driving force is $3000$ N. **(a)** Find the acceleration. **(b)** Find the tension in the rope. **(c)** When the speed is $12$ m s$^{-1}$, the rope breaks. Find the car's new acceleration, and how far the trailer travels before it stops. [[8]]`,
  [R`System: $3000 - 600 = 1800a$.`, R`After the break: the car has $3000 - 400$ forwards; the trailer only $200$ backwards.`],
  [R`(a)|M1|$3000 - 600 = 1800a$`, R`(a)|A1|$1.33$ m s$^{-2}$`, R`(b)|M1|$T - 200 = 600a$`, R`(b)|A1|$1000$ N`, R`(c)|M1|$3000 - 400 = 1200a$`, R`(c)|A1|$2.17$ m s$^{-2}$`, R`(c)|M1|Trailer: $0 = 144 - 2\left(\frac13\right)s$`, R`(c)|A1|$216$ m`], R`(a) $1.33$ m s$^{-2}$ (b) $1000$ N (c) $2.17$ m s$^{-2}$; $216$ m`,
  R`**(a)** $a = \frac{2400}{1800} = 1.33$ m s$^{-2}$.
**(b)** $T = 600 \times \frac43 + 200 = 1000$ N.
**(c)** Car: $a = \frac{2600}{1200} = 2.17$ m s$^{-2}$. Trailer: deceleration $\frac{200}{600} = \frac13$ m s$^{-2}$, so $s = \frac{144}{2/3} = 216$ m.`, { fig: Fig.train({ label: 'Trailer and car: driving force 3000 N, resistances 200 N and 400 N, tension T in the rope', blocks: [{ name: 'trailer 600 kg', w: 96 }, { name: 'car 1200 kg', w: 96 }], forces: [{ on: 1, dir: 'R', label: '3000 N', len: 44 }, { on: 1, dir: 'TL', label: 'T' }, { on: 0, dir: 'TR', label: 'T' }, { on: 0, dir: 'L', label: '200 N', len: 36 }] }) })
]};

CONTENT['A10.6'] = {
notes: R`
### Smooth pulleys
A light inextensible string passing over a **smooth** pulley has the **same tension on both sides**, and both particles have the same magnitude of acceleration.
1. Draw a force diagram for each particle.
2. Write $F = ma$ for each one **in its own direction of motion**.
3. Solve the two equations together (adding them eliminates $T$).

[[fig:A10.6-pulley]]

::: booklet
**Learn this:** equal tension on both sides of a smooth pulley; write an $F = ma$ equation for each particle.
:::

### Worked example 1
Particles of mass $5$ kg and $3$ kg hang over a smooth pulley and are released from rest. Find the acceleration and the tension.
- $5$ kg (moving down): $5g - T = 5a$.
- $3$ kg (moving up): $T - 3g = 3a$.
- Adding: $2g = 8a$, so $a = 2.45$ m s$^{-2}$, and $T = 3(9.8 + 2.45) = 36.75$ N.

### Worked example 2: a table and a pulley
A block $P$ of mass $4$ kg on a smooth table is joined over a pulley at the edge to a hanging particle $Q$ of mass $1$ kg.

[[fig:A10.6-table]]

- $Q$: $g - T = 1a$. $P$: $T = 4a$.
- Adding: $g = 5a$, so $a = 1.96$ m s$^{-2}$ and $T = 7.84$ N.

**The trap:** treating the whole system with $1g = 1 \times a$, which uses the wrong mass. Both particles accelerate, so the mass to accelerate is $5$ kg.

### Watch out
- The force on the pulley from the string is $2T$ when both strings are vertical.
- When the falling particle hits the floor, the string goes slack and the other particle moves freely.
`,
questions: [
Q('A10.6-1', 1, R`Explain why the tension is the same on both sides of a smooth pulley. [[1]]`,
  [R`What would friction do?`, R`Smooth means ...`],
  [R`|B1|There is no friction at the pulley, so nothing changes the tension (the string is also light)`], R`No friction at the pulley`,
  R`A smooth pulley exerts no friction on the string, and the string is light, so the tension is the same on both sides.`, { fig: FIGS['A10.6-pulley'] }),
Q('A10.6-2', 1, R`Particles of mass $5$ kg and $3$ kg hang over a smooth pulley and are released from rest. Find the acceleration. [[2]]`,
  [R`$5g - T = 5a$ and $T - 3g = 3a$.`, R`Add them.`],
  [R`|M1|$5g - T = 5a$ and $T - 3g = 3a$`, R`|A1|$a = 2.45$ m s$^{-2}$`], R`$2.45$ m s$^{-2}$`,
  R`Adding: $2g = 8a$, so $a = \frac{19.6}{8} = 2.45$ m s$^{-2}$.`, { fig: FIGS['A10.6-pulley'] }),
Q('A10.6-3', 1, R`For the particles in question 2, find the tension in the string. [[1]]`,
  [R`Use the $3$ kg particle.`, R`$T = 3(g + 2.45)$.`],
  [R`|B1|$36.8$ N`], R`$36.8$ N`,
  R`$T = 3(9.8 + 2.45) = 36.75 \approx 36.8$ N.`, { fig: FIGS['A10.6-pulley'] }),
Q('A10.6-4', 2, R`For the particles in question 2, find the force exerted on the pulley by the string. [[1]]`,
  [R`Two vertical strings pull down on the pulley.`, R`$2T$.`],
  [R`|B1|$73.5$ N`], R`$73.5$ N`,
  R`Both parts of the string pull down on the pulley with tension $T$: $2 \times 36.75 = 73.5$ N.`, { fig: FIGS['A10.6-pulley'] }),
Q('A10.6-5', 2, R`A block $P$ of mass $4$ kg on a smooth horizontal table is joined by a light string over a smooth pulley at the edge to a particle $Q$ of mass $1$ kg, which hangs freely. Find the acceleration and the tension. [[3]]`,
  [R`$Q$: $g - T = a$. $P$: $T = 4a$.`, R`Add them.`],
  [R`|M1|$g - T = a$ and $T = 4a$`, R`|A1|$a = 1.96$ m s$^{-2}$`, R`|A1|$T = 7.84$ N`], R`$1.96$ m s$^{-2}$; $7.84$ N`,
  R`Adding: $g = 5a$, so $a = 1.96$ m s$^{-2}$ and $T = 4 \times 1.96 = 7.84$ N.`, { fig: FIGS['A10.6-table'] }),
Q('A10.6-6', 2, R`A block of mass $3$ kg on a rough table is joined over a smooth pulley at the edge to a hanging particle of mass $2$ kg. Friction on the block is $5$ N. Find the acceleration and the tension. [[3]]`,
  [R`Hanging: $2g - T = 2a$. Block: $T - 5 = 3a$.`, R`Add them.`],
  [R`|M1|$2g - T = 2a$ and $T - 5 = 3a$`, R`|A1|$a = 2.92$ m s$^{-2}$`, R`|A1|$T = 13.8$ N`], R`$2.92$ m s$^{-2}$; $13.8$ N`,
  R`Adding: $2g - 5 = 5a$, so $a = \frac{14.6}{5} = 2.92$ m s$^{-2}$. $T = 5 + 3 \times 2.92 = 13.8$ N.`, { fig: Fig.tablePulley({ label: 'Block of 3 kg on a rough table with friction 5 N, joined to a hanging 2 kg particle', block: { name: '3 kg', weight: '3g' }, hang: { name: '2 kg', weight: '2g' }, friction: '5 N' }) }),
Q('A10.6-7', 2, R`Particles of mass $4$ kg and $m$ kg ($m < 4$) hang over a smooth pulley. When released, they accelerate at $1.4$ m s$^{-2}$. Find $m$. [[3]]`,
  [R`$4g - T = 4(1.4)$ and $T - mg = 1.4m$.`, R`Add: $(4 - m)g = (4 + m)1.4$.`],
  [R`|M1|Two equations of motion`, R`|M1|$(4 - m)g = 1.4(4 + m)$`, R`|A1|$m = 3$`], R`$m = 3$`,
  R`$39.2 - 9.8m = 5.6 + 1.4m$, so $33.6 = 11.2m$ and $m = 3$.`, { fig: Fig.pulleyHang({ label: 'Particles of 4 kg and m kg over a smooth pulley', left: { name: '4 kg', weight: '4g', drop: 130 }, right: { name: 'm', weight: 'mg', drop: 90 } }) }),
Q('A10.6-8', 3, R`Particles of mass $5$ kg and $3$ kg hang over a smooth pulley. The $5$ kg particle starts $1.5$ m above the ground. They are released from rest. Find the speed of the $5$ kg particle when it hits the ground. [[3]]`,
  [R`$a = 2.45$ m s$^{-2}$.`, R`$v^2 = 0 + 2(2.45)(1.5)$.`],
  [R`|B1|$a = 2.45$ m s$^{-2}$`, R`|M1|$v^2 = 2(2.45)(1.5)$`, R`|A1|$2.71$ m s$^{-1}$`], R`$2.71$ m s$^{-1}$`,
  R`From question 2, $a = 2.45$ m s$^{-2}$. $v^2 = 2 \times 2.45 \times 1.5 = 7.35$, so $v = 2.71$ m s$^{-1}$.`, { fig: FIGS['A10.6-pulley'] }),
Q('A10.6-9', 3, R`In question 8, after the $5$ kg particle hits the ground, the $3$ kg particle continues to rise. Find how much further it rises. [[3]]`,
  [R`The string goes slack: the $3$ kg particle moves freely under gravity.`, R`$0 = 7.35 - 2(9.8)s$.`],
  [R`|B1|Moves freely with deceleration $g$`, R`|M1|$0 = 7.35 - 19.6s$`, R`|A1|$0.375$ m`], R`$0.375$ m`,
  R`Once the string is slack, the only force on the $3$ kg particle is its weight. $0 = 7.35 - 19.6s$ gives $s = 0.375$ m.`, NF),
Q('A10.6-10', 3, R`A block of mass $6$ kg on a smooth table is joined over a smooth pulley at the edge to a hanging particle of mass $2$ kg, which starts $1$ m above the floor. The system is released from rest. Find the time for the particle to reach the floor. [[3]]`,
  [R`$a = \frac{2g}{8}$.`, R`$1 = \frac12at^2$.`],
  [R`|B1|$a = 2.45$ m s$^{-2}$`, R`|M1|$1 = \frac12(2.45)t^2$`, R`|A1|$0.904$ s`], R`$0.904$ s`,
  R`$2g = 8a$ gives $a = 2.45$ m s$^{-2}$. Then $t = \sqrt{\frac{2}{2.45}} = 0.904$ s.`, { fig: Fig.tablePulley({ label: 'Block of 6 kg on a smooth table joined to a hanging 2 kg particle', block: { name: '6 kg', weight: '6g' }, hang: { name: '2 kg', weight: '2g' } }) }),
Q('A10.6-11', 3, R`In pulley problems, the string is modelled as light and inextensible. State the effect of each of these assumptions. [[2]]`,
  [R`Light: tension.`, R`Inextensible: acceleration.`],
  [R`|B1|Light: the tension is the same throughout the string`, R`|B1|Inextensible: both particles have the same magnitude of acceleration`], R`Same tension; same acceleration`,
  R`A light string has the same tension throughout. An inextensible string keeps the same length, so both particles move with the same speed and the same magnitude of acceleration.`, NF),
Q('A10.6-12', 4, R`A block of mass $5$ kg on a rough table is joined over a smooth pulley to a hanging particle of mass $m$ kg. The resistance to the block's motion is $10$ N, and the acceleration is $2$ m s$^{-2}$. Find the tension and $m$. [[4]]`,
  [R`Block: $T - 10 = 5 \times 2$.`, R`Hanging: $mg - T = 2m$.`],
  [R`|M1|$T - 10 = 10$`, R`|A1|$T = 20$ N`, R`|M1|$mg - 20 = 2m$`, R`|A1|$m = 2.56$`], R`$T = 20$ N; $m = 2.56$`,
  R`Block: $T = 20$ N. Hanging: $m(9.8 - 2) = 20$, so $m = 2.56$.`, { fig: Fig.tablePulley({ label: 'Block of 5 kg on a rough table with resistance 10 N, joined to a hanging particle of mass m', block: { name: '5 kg', weight: '5g' }, hang: { name: 'm', weight: 'mg' }, friction: '10 N' }) }),
Q('A10.6-13', 4, R`Particles of mass $2$ kg and $3$ kg hang over a smooth pulley. The $3$ kg particle starts $2$ m above the ground and both are released from rest. Find the greatest height the $2$ kg particle reaches above its starting point. [[5]]`,
  [R`$a = \frac{g}{5} = 1.96$.`, R`After the $3$ kg particle lands, the $2$ kg particle rises freely.`],
  [R`|B1|$a = 1.96$ m s$^{-2}$`, R`|M1|$v^2 = 2(1.96)(2)$`, R`|A1|$v = 2.8$ m s$^{-1}$`, R`|M1|Extra height $\frac{2.8^2}{2g} = 0.4$ m`, R`|A1|$2.4$ m`], R`$2.4$ m`,
  R`$3g - 2g = 5a$, so $a = 1.96$ m s$^{-2}$. After $2$ m, $v^2 = 7.84$, $v = 2.8$ m s$^{-1}$. The $2$ kg particle then rises a further $\frac{7.84}{19.6} = 0.4$ m. Total $2.4$ m.`, { fig: Fig.pulleyHang({ label: 'Particles of 2 kg and 3 kg over a smooth pulley; the 3 kg particle starts 2 m above the ground', left: { name: '2 kg', weight: '2g', drop: 90 }, right: { name: '3 kg', weight: '3g', drop: 130 } }) }),
Q('A10.6-14', 4, R`A block of mass $4$ kg on a rough table is joined over a smooth pulley to a hanging particle of mass $3$ kg. The acceleration is $3$ m s$^{-2}$. Find the tension and the frictional force. [[4]]`,
  [R`Hanging: $3g - T = 3 \times 3$.`, R`Block: $T - F = 4 \times 3$.`],
  [R`|M1|$3g - T = 9$`, R`|A1|$T = 20.4$ N`, R`|M1|$T - F = 12$`, R`|A1|$F = 8.4$ N`], R`$T = 20.4$ N; $F = 8.4$ N`,
  R`$T = 29.4 - 9 = 20.4$ N. Then $F = 20.4 - 12 = 8.4$ N.`, { fig: Fig.tablePulley({ label: 'Block of 4 kg on a rough table with friction F, joined to a hanging 3 kg particle', block: { name: '4 kg', weight: '4g' }, hang: { name: '3 kg', weight: '3g' }, friction: 'F' }) }),
Q('A10.6-15', 5, R`Particles $A$ ($6$ kg) and $B$ ($4$ kg) hang over a smooth pulley. $B$ rests on the floor and $A$ is $2.5$ m above the floor. They are released from rest. Find **(a)** the acceleration **(b)** the tension **(c)** the speed of $A$ when it hits the floor **(d)** the greatest height of $B$ above the floor. [[8]]`,
  [R`$6g - T = 6a$ and $T - 4g = 4a$.`, R`After $A$ lands, $B$ moves freely.`],
  [R`(a)|M1|$2g = 10a$`, R`(a)|A1|$1.96$ m s$^{-2}$`, R`(b)|B1|$47.0$ N`, R`(c)|M1|$v^2 = 2(1.96)(2.5)$`, R`(c)|A1|$3.13$ m s$^{-1}$`, R`(d)|M1|Extra height $\frac{v^2}{2g}$`, R`(d)|A1|$0.5$ m`, R`(d)|A1|$3$ m`], R`(a) $1.96$ m s$^{-2}$ (b) $47.0$ N (c) $3.13$ m s$^{-1}$ (d) $3$ m`,
  R`**(a)** $a = \frac{2g}{10} = 1.96$ m s$^{-2}$.
**(b)** $T = 4(9.8 + 1.96) = 47.04 \approx 47.0$ N.
**(c)** $v^2 = 2 \times 1.96 \times 2.5 = 9.8$, so $v = 3.13$ m s$^{-1}$.
**(d)** $B$ has risen $2.5$ m, then rises freely a further $\frac{9.8}{19.6} = 0.5$ m: $3$ m above the floor.`, { fig: Fig.pulleyHang({ label: 'A (6 kg) 2.5 m above the floor and B (4 kg) on the floor, over a smooth pulley', left: { name: 'A', weight: '6g', drop: 110 }, right: { name: 'B', weight: '4g', drop: 170 } }) })
]};
