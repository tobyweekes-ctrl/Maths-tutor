/* 5.3 Friction */
FIGS['5.3-ground'] = Fig.ground({ rough: true, label: 'Block on rough ground with friction opposing the pull', forces: [{ deg: 0, label: 'P', len: 70 }, { deg: 180, label: 'F', len: 54 }, { deg: 90, label: 'R', len: 54 }, { deg: 270, label: 'mg', len: 50, weight: true }], motion: 'about to move right' });
FIGS['5.3-down'] = Fig.slope({ deg: 30, label: 'About to slide down: friction acts up the slope', forces: [{ dir: 'weight', label: 'mg' }, { dir: 'normal', label: 'R' }, { dir: 'up', label: 'F' }] });
FIGS['5.3-up'] = Fig.slope({ deg: 30, label: 'Pushed and about to move up: friction acts down the slope', forces: [{ dir: 'weight', label: 'mg' }, { dir: 'normal', label: 'R' }, { dir: 'up', label: 'P', len: 70 }, { dir: 'down', label: 'F', len: 50 }] });
FIGS['5.3-pulley'] = Fig.slope({ deg: 30, label: 'Block on a rough slope connected over a pulley to a hanging particle', forces: [{ dir: 'weight', label: '3g', len: 50 }, { dir: 'normal', label: 'R', len: 44 }, { dir: 'down', label: 'F', len: 44 }], pulley: { name: 'B', weightLabel: '4g', tension: 'T', blockName: 'A' } });
FIGS['5.3-ex2'] = Fig.slope({ deg: 20, label: 'Block at rest on a rough slope at 20 degrees', forces: [{ dir: 'weight', label: '2g' }, { dir: 'normal', label: 'R' }, { dir: 'up', label: 'F' }] });

CONTENT['5.3'] = {
notes: R`
### The friction model
> $$F \le \mu R$$
- $F$ is the friction force, $R$ the normal reaction and $\mu$ the coefficient of friction.
- Friction **opposes motion**, or the motion that *would* happen.
- It only grows as large as it needs to be, up to a maximum of $\mu R$.

[[fig:5.3-ground]]

### Three situations
| Situation | Friction |
|---|---|
| At rest, not about to move | $F < \mu R$ (find $F$ by resolving) |
| On the point of moving (**limiting equilibrium**) | $F = \mu R$ |
| Moving | $F = \mu R$, opposite to the motion |

### Method
1. Draw a force diagram with friction in the right direction.
2. Resolve perpendicular to the surface to find $R$.
3. Use $F = \mu R$ if limiting or moving.
4. Resolve along the surface: equilibrium ($=0$) or $F = ma$.

### On a slope
- Particle about to slide **down**: friction acts **up** the slope.
- Being pushed and about to move **up**: friction acts **down** the slope.
- A particle on the point of slipping with no other forces: $\mu = \tan\alpha$.

[[fig:5.3-down]]

[[fig:5.3-up]]

### Range of values for equilibrium
When a force $P$ holds a particle on a rough slope, there is a range of $P$ that works.
- **Smallest $P$:** the particle is about to slide **down**, so friction $\mu R$ acts **up** the slope.
- **Largest $P$:** the particle is about to move **up**, so friction $\mu R$ acts **down** the slope.

Work out each case separately; the answer is $P_{\min} \le P \le P_{\max}$.

### Projected up a rough slope
On the way up, gravity **and** friction both act down the slope: $a = g\sin\alpha + \mu g\cos\alpha$ (deceleration).
When it stops, compare $\mu$ with $\tan\alpha$:
- $\mu \ge \tan\alpha$: friction can hold it, so it **stays at rest**.
- $\mu < \tan\alpha$: it **slides back down**, now with friction acting up the slope: $a = g\sin\alpha - \mu g\cos\alpha$.

### Connected particles over a pulley
Write $F = ma$ for **each** particle separately, in its own direction of motion, then add the equations to remove $T$. Both particles have the same size of acceleration because the string is inextensible.

[[fig:5.3-pulley]]

### Modelling assumptions (often worth a mark)
| Assumption | What it means for the working |
|---|---|
| **Particle** | Its size doesn't matter; all forces act at one point and it doesn't rotate |
| **Light** string | The tension is the same all along the string |
| **Inextensible** string | Connected particles have the same speed and acceleration |
| **Smooth** pulley | The tension is the same on both sides of the pulley |
| **Rough** surface | Friction acts, $F \le \mu R$ |

::: booklet
**Not in the formula booklet, so learn it:** $F \le \mu R$, with $F = \mu R$ when limiting or moving. The suvat equations are in the booklet.
:::

### Does it move?
Compare the force trying to move it with the **maximum** friction $\mu R$. If the driving force is greater, it moves. Otherwise it stays at rest, and friction equals the driving force.

### Worked example 1
A $10$ kg box on rough ground, $\mu = 0.3$, is pulled by a horizontal force of $40$ N. $R = 98$ N, so $F_{\max} = 29.4$ N. Since $40 > 29.4$ it moves, and $40 - 29.4 = 10a$ gives $a = 1.06$ m s$^{-2}$.

### Worked example 2: friction isn't always $\mu R$
A $2$ kg block rests on a rough slope at $20^\circ$, with $\mu = 0.5$. Find the friction force.

[[fig:5.3-ex2]]

- Weight down the slope: $2g\sin20^\circ = 6.70$ N.
- Maximum friction: $\mu R = 0.5 \times 2g\cos20^\circ = 9.21$ N.
- $6.70 < 9.21$, so the block stays at rest and friction is only what's needed: $F = 6.70$ N, up the slope.

**The trap:** answering $F = 9.21$ N. That's the *maximum* friction, used only when the block is limiting or moving.

### Watch out
- $R$ is **not** always $mg$. A pull at an angle or a slope changes it.
- "Rough" means friction acts. "Smooth" means it doesn't.
`,
questions: [
{ id:'5.3-1', stars:2,
fig: Fig.ground({ rough: true, label: 'Box pushed by a horizontal 40 N force on rough ground', forces: [{ deg: 0, label: '40 N', len: 74 }, { deg: 180, label: 'F', len: 54 }, { deg: 90, label: 'R', len: 54 }, { deg: 270, label: '10g', len: 50, weight: true }] }),
q: R`A box of mass $10$ kg rests on rough horizontal ground. The coefficient of friction between the box and the ground is $0.3$. A horizontal force of $40$ N is applied to the box.

Show that the box moves, and find its acceleration. [[5]]`,
hints: [
  R`Find $R$, then the maximum friction $\mu R$.`,
  R`Compare $40$ N with $\mu R$. If it's bigger, use $F = ma$ with $F_{\text{friction}} = \mu R$.`
],
scheme: [
  ['', 'B1', R`$R = 10g = 98$ N`],
  ['', 'M1', R`$F_{\max} = 0.3 \times 98 = 29.4$ N`],
  ['', 'A1', R`$40 > 29.4$, so the box moves (conclusion stated)`],
  ['', 'M1', R`$40 - 29.4 = 10a$`],
  ['', 'A1', R`$a = 1.06$ m s$^{-2}$`]
],
answer: R`It moves since $40 > 29.4$. $a = 1.06$ m s$^{-2}$`,
sol: R`
1. **Resolving $(\uparrow)$:** $R = 10g = 98$ N.
2. **Maximum friction:** $\mu R = 0.3 \times 98 = 29.4$ N.
3. $40\text{ N} > 29.4\text{ N}$, so friction cannot hold the box and it moves. Friction is now $29.4$ N.
4. **$(\rightarrow)$, $F = ma$:** $40 - 29.4 = 10a$, so $a = 1.06$ m s$^{-2}$.`
},
{ id:'5.3-2', stars:2,
fig: Fig.slope({ deg: 30, label: 'Particle on the point of slipping down a rough slope', forces: [{ dir: 'weight', label: 'mg' }, { dir: 'normal', label: 'R' }, { dir: 'up', label: 'F' }] }),
q: R`A particle rests on a rough plane inclined at $30^\circ$ to the horizontal. The particle is on the point of slipping down the plane. Show that the coefficient of friction is $\dfrac{\sqrt3}{3}$. [[4]]`,
hints: [
  R`Let the mass be $m$. Friction acts up the slope because the particle is about to slide down.`,
  R`$R = mg\cos30^\circ$ and $F = mg\sin30^\circ$. Limiting, so $F = \mu R$.`
],
scheme: [
  ['', 'M1', R`$R = mg\cos30^\circ$`],
  ['', 'M1', R`$F = mg\sin30^\circ$`],
  ['', 'M1', R`Uses $F = \mu R$`],
  ['', 'A1', R`$\mu = \tan30^\circ = \dfrac{\sqrt3}3$ (cso)`]
],
answer: R`$\mu = \tan30^\circ = \frac{\sqrt3}{3}$`,
sol: R`
1. **Perpendicular:** $R = mg\cos30^\circ$
2. **Parallel:** friction balances the weight component, $F = mg\sin30^\circ$.
3. **Limiting equilibrium:** $F = \mu R$, so $mg\sin30^\circ = \mu\, mg\cos30^\circ$.
4. $\mu = \tan30^\circ = \frac{1}{\sqrt3} = \frac{\sqrt3}{3}$ $\blacksquare$`
},
{ id:'5.3-3', stars:3,
fig: Fig.slope({ deg: 36.87, angleLabel: 'α', label: 'Particle released on a rough slope', forces: [{ dir: 'weight', label: '4g' }, { dir: 'normal', label: 'R' }, { dir: 'up', label: 'F' }] }),
q: R`A particle of mass $4$ kg is placed on a rough plane inclined at angle $\alpha$ to the horizontal, where $\tan\alpha = \frac34$. The coefficient of friction is $0.5$. The particle is released from rest.

**(a)** Show that the particle slides down the plane. [[4]]

**(b)** Find the acceleration of the particle. [[2]]

**(c)** Find the distance it travels in the first $3$ seconds. [[2]]`,
hints: [
  R`$\sin\alpha = \frac35$ and $\cos\alpha = \frac45$.`,
  R`Compare the weight component down the slope, $4g\sin\alpha$, with the maximum friction $0.5 \times 4g\cos\alpha$.`,
  R`For (c), use $s = ut + \frac12at^2$ with $u = 0$.`
],
scheme: [
  ['(a)', 'M1', R`$R = 4g\cos\alpha = 31.36$ N`],
  ['(a)', 'M1', R`$F_{\max} = 0.5R = 15.68$ N`],
  ['(a)', 'M1', R`Compares with $4g\sin\alpha = 23.52$ N`],
  ['(a)', 'A1', R`$23.52 > 15.68$, so it slides (conclusion)`],
  ['(b)', 'M1', R`$23.52 - 15.68 = 4a$`],
  ['(b)', 'A1', R`$a = 1.96$ m s$^{-2}$`],
  ['(c)', 'M1', R`$s = \frac12(1.96)(3^2)$`],
  ['(c)', 'A1', R`$8.82$ m`]
],
answer: R`(a) $23.52 > 15.68$ (b) $1.96$ m s$^{-2}$ (c) $8.82$ m`,
sol: R`
**(a)** $\sin\alpha = \frac35$, $\cos\alpha = \frac45$.
Perpendicular: $R = 4g\cdot\frac45 = 31.36$ N, so $F_{\max} = 0.5 \times 31.36 = 15.68$ N.
Down the slope: $4g\cdot\frac35 = 23.52$ N.
$23.52 > 15.68$, so friction cannot hold it and the particle slides.

**(b)** Down the plane, $F = ma$: $23.52 - 15.68 = 4a$, so $a = 1.96$ m s$^{-2}$.

**(c)** $s = ut + \frac12at^2 = 0 + \frac12(1.96)(9) = 8.82$ m.`
},
{ id:'5.3-4', stars:3,
fig: Fig.ground({ rough: true, label: 'Sledge pulled by a rope at 30 degrees', angles: [{ from: 0, to: 30, label: '30°' }], forces: [{ deg: 30, label: '100 N', len: 80 }, { deg: 180, label: 'F', len: 54 }, { deg: 90, label: 'R', len: 54 }, { deg: 270, label: '20g', len: 50, weight: true }], motion: 'constant speed' }),
q: R`A sledge of mass $20$ kg is pulled across rough horizontal ground by a rope inclined at $30^\circ$ above the horizontal. The tension in the rope is $100$ N and the sledge moves at **constant speed**. Find the coefficient of friction between the sledge and the ground. [[6]]`,
hints: [
  R`Constant speed means equilibrium, so the forces balance in both directions.`,
  R`Vertically: $R + 100\sin30^\circ = 20g$. The rope reduces $R$.`,
  R`Horizontally: $F = 100\cos30^\circ$. Then $\mu = \frac FR$.`
],
scheme: [
  ['', 'M1', R`Resolves vertically, three terms`],
  ['', 'A1', R`$R = 20g - 50 = 146$ N`],
  ['', 'M1', R`Resolves horizontally (equilibrium)`],
  ['', 'A1', R`$F = 100\cos30^\circ = 86.6$ N`],
  ['', 'M1', R`Uses $F = \mu R$`],
  ['', 'A1', R`$\mu = 0.593$`]
],
answer: R`$\mu = 0.593$`,
sol: R`
1. **$(\uparrow)$:** $R + 100\sin30^\circ = 20g$, so $R = 196 - 50 = 146$ N.
2. **$(\rightarrow)$:** constant speed, so $F = 100\cos30^\circ = 86.60$ N.
3. The sledge is moving, so $F = \mu R$: $\mu = \dfrac{86.60}{146} = 0.593$ (3 s.f.).`
},
{ id:'5.3-5', stars:3,
fig: Fig.slope({ deg: 20, label: 'Particle pushed up a rough slope by a force P', forces: [{ dir: 'weight', label: '5g' }, { dir: 'normal', label: 'R' }, { dir: 'up', label: 'P', len: 70 }, { dir: 'down', label: 'F', len: 50 }] }),
q: R`A particle of mass $5$ kg rests on a rough plane inclined at $20^\circ$ to the horizontal. The coefficient of friction is $0.4$. A force $P$ N, acting up the plane along a line of greatest slope, is applied, and the particle is on the point of moving **up** the plane.

**(a)** Find $P$. [[5]]

**(b)** The force $P$ is removed. Show that the particle remains at rest. [[2]]`,
hints: [
  R`About to move **up**, so friction acts **down** the plane.`,
  R`$R = 5g\cos20^\circ$ and $F = 0.4R$. Parallel: $P = 5g\sin20^\circ + F$.`,
  R`For (b), compare $5g\sin20^\circ$ with the maximum friction $0.4R$.`
],
scheme: [
  ['(a)', 'M1', R`$R = 5g\cos20^\circ$`],
  ['(a)', 'A1', R`$R = 46.0$ N`],
  ['(a)', 'M1', R`Resolves parallel with friction acting down the plane`],
  ['(a)', 'A1', R`$P = 5g\sin20^\circ + 0.4R$`],
  ['(a)', 'A1', R`$P = 35.2$ N`],
  ['(b)', 'M1', R`Compares $5g\sin20^\circ = 16.8$ N with $F_{\max} = 18.4$ N`],
  ['(b)', 'A1', R`$16.8 < 18.4$, so it stays at rest (conclusion)`]
],
answer: R`(a) $P = 35.2$ N (b) $16.8 < 18.4$, so it stays at rest`,
sol: R`
**(a)** Perpendicular: $R = 5g\cos20^\circ = 46.04$ N, so $F = 0.4R = 18.42$ N, acting **down** the slope.
Parallel: $P = 5g\sin20^\circ + 18.42 = 16.76 + 18.42 = 35.2$ N.

**(b)** Without $P$, the weight component down the slope is $16.76$ N and the maximum friction is still $18.42$ N.
$16.76 < 18.42$, so friction can hold the particle and it stays at rest. (Equivalently, $\mu = 0.4 > \tan20^\circ = 0.364$.)`
},
{ id:'5.3-6', stars:1,
fig: Fig.ground({ rough: true, label: 'Box at rest on rough ground', forces: [{ deg: 90, label: 'R', len: 54 }, { deg: 270, label: '3g', len: 50, weight: true }] }),
q: R`A box of mass $3$ kg rests on rough horizontal ground. The coefficient of friction is $0.4$. Find the maximum friction force that could act on the box. [[2]]`,
hints: [
  R`Find $R$ first. On flat ground with no other vertical forces, $R = mg$.`,
  R`Maximum friction $= \mu R$.`
],
scheme: [
  ['', 'M1', R`$\mu R$ with $R = 3g$`],
  ['', 'A1', R`$11.8$ N`]
],
answer: R`$11.8$ N`,
sol: R`
1. **Resolving $(\uparrow)$:** $R = 3g = 29.4$ N.
2. **Maximum friction:** $F_{\max} = \mu R = 0.4 \times 29.4 = 11.76 = 11.8$ N.`
},
{ id:'5.3-7', stars:1,
fig: Fig.ground({ rough: true, label: 'Block sliding on rough ground', forces: [{ deg: 180, label: 'F', len: 54 }, { deg: 90, label: 'R', len: 54 }, { deg: 270, label: '2g', len: 50, weight: true }], motion: 'sliding right' }),
q: R`A block of mass $2$ kg slides across rough horizontal ground. The coefficient of friction is $0.25$, and no other horizontal forces act. Find the deceleration of the block. [[2]]`,
hints: [
  R`The block is moving, so $F = \mu R$.`,
  R`Friction is the only horizontal force: $\mu mg = ma$.`
],
scheme: [
  ['', 'M1', R`$0.25 \times 2g = 2a$`],
  ['', 'A1', R`$a = 2.45$ m s$^{-2}$`]
],
answer: R`$2.45$ m s$^{-2}$`,
sol: R`
1. **Friction while moving:** $F = \mu R = 0.25 \times 2g = 4.9$ N.
2. **$F = ma$:** $4.9 = 2a$, so the deceleration is $2.45$ m s$^{-2}$ (that's $\mu g$, so the mass doesn't matter).`
},
{ id:'5.3-8', stars:1,
fig: Fig.ground({ rough: true, label: 'Box pushed by 15 N on rough ground', forces: [{ deg: 0, label: '15 N', len: 70 }, { deg: 180, label: 'F', len: 54 }, { deg: 90, label: 'R', len: 54 }, { deg: 270, label: '5g', len: 50, weight: true }] }),
q: R`A box of mass $5$ kg is at rest on rough horizontal ground, with coefficient of friction $0.5$. A horizontal force of $15$ N is applied. Does the box move? State the friction force acting. [[2]]`,
hints: [
  R`Find the maximum friction $\mu R$ and compare it with $15$ N.`,
  R`If it doesn't move, friction is only as large as it needs to be.`
],
scheme: [
  ['', 'B1', R`$F_{\max} = 0.5 \times 5g = 24.5$ N $> 15$ N, so it does not move`],
  ['', 'B1', R`Friction $= 15$ N`]
],
answer: R`No, since $24.5 > 15$. Friction $= 15$ N`,
sol: R`
1. **Maximum friction:** $\mu R = 0.5 \times 49 = 24.5$ N.
2. **Compare:** $15 < 24.5$, so friction can hold the box: it stays at rest.
3. **Friction actually acting:** it only needs to balance the push, so $F = 15$ N. It is **not** $24.5$ N.`
},
{ id:'5.3-9', stars:2,
fig: Fig.ground({ rough: true, label: 'Block sliding to rest on rough ground', forces: [{ deg: 180, label: 'F', len: 54 }, { deg: 90, label: 'R', len: 54 }, { deg: 270, label: 'mg', len: 50, weight: true }], motion: '8 m/s to rest in 10 m' }),
q: R`A block slides across rough horizontal ground. Its speed falls from $8$ m s$^{-1}$ to zero over a distance of $10$ m. No other horizontal forces act. Find the coefficient of friction. [[4]]`,
hints: [
  R`Find the deceleration first with $v^2 = u^2 + 2as$.`,
  R`Then $\mu mg = ma$, so $\mu = \dfrac{a}{g}$.`
],
scheme: [
  ['', 'M1', R`$0 = 8^2 - 2a(10)$`],
  ['', 'A1', R`$a = 3.2$ m s$^{-2}$`],
  ['', 'M1', R`$\mu mg = ma$`],
  ['', 'A1', R`$\mu = 0.327$`]
],
answer: R`$\mu = 0.327$`,
sol: R`
1. **suvat:** $u = 8$, $v = 0$, $s = 10$. $0 = 64 - 20a$, so $a = 3.2$ m s$^{-2}$ (deceleration).
2. **$F = ma$:** friction is the only horizontal force and the block is moving, so $\mu mg = ma$.
3. **Solve:** $\mu = \dfrac{3.2}{9.8} = 0.327$.`
},
{ id:'5.3-10', stars:2,
fig: Fig.ground({ rough: true, label: 'Crate pulled by a rope at 20 degrees on rough ground', angles: [{ from: 0, to: 20, label: '20°' }], forces: [{ deg: 20, label: 'T', len: 80 }, { deg: 180, label: 'F', len: 54 }, { deg: 90, label: 'R', len: 54 }, { deg: 270, label: '12g', len: 50, weight: true }], motion: 'about to move' }),
q: R`A crate of mass $12$ kg rests on rough horizontal ground, with coefficient of friction $0.3$. A rope inclined at $20^\circ$ above the horizontal is used to pull it. Find the tension in the rope when the crate is on the point of moving. [[5]]`,
hints: [
  R`The rope lifts slightly, so $R = 12g - T\sin20^\circ$.`,
  R`Limiting: $F = 0.3R$, and horizontally $T\cos20^\circ = F$.`
],
scheme: [
  ['', 'M1', R`Resolves vertically: $R + T\sin20^\circ = 12g$`],
  ['', 'M1', R`Resolves horizontally: $T\cos20^\circ = F$`],
  ['', 'M1', R`Uses $F = 0.3R$`],
  ['', 'A1', R`$T\cos20^\circ = 0.3(12g - T\sin20^\circ)$`],
  ['', 'A1', R`$T = 33.8$ N`]
],
answer: R`$T = 33.8$ N`,
sol: R`
1. **Resolving $(\uparrow)$:** $R + T\sin20^\circ = 12g$, so $R = 117.6 - T\sin20^\circ$.
2. **Resolving $(\rightarrow)$, limiting:** $T\cos20^\circ = 0.3R = 0.3(117.6 - T\sin20^\circ)$.
3. **Collect $T$:** $T(\cos20^\circ + 0.3\sin20^\circ) = 35.28$, so $T = \dfrac{35.28}{1.0423} = 33.8$ N.`
},
{ id:'5.3-11', stars:3,
fig: Fig.slope({ deg: 30, label: 'Particle on a rough slope held by a force P parallel to the slope', forces: [{ dir: 'weight', label: '4g' }, { dir: 'normal', label: 'R' }, { dir: 'up', label: 'P', len: 70 }] }),
q: R`A particle of mass $4$ kg rests on a rough plane inclined at $30^\circ$ to the horizontal. The coefficient of friction is $0.2$. A force $P$ N acts on the particle up the plane, parallel to it. Find the range of values of $P$ for which the particle stays in equilibrium. [[7]]`,
hints: [
  R`Find $R$ and the maximum friction $0.2R$.`,
  R`Least $P$: about to slide **down**, so friction acts **up** the slope.`,
  R`Greatest $P$: about to move **up**, so friction acts **down** the slope.`
],
scheme: [
  ['', 'M1', R`$R = 4g\cos30^\circ$`],
  ['', 'A1', R`$F_{\max} = 0.2R = 6.79$ N`],
  ['', 'M1', R`About to slide down: $P + F = 4g\sin30^\circ$`],
  ['', 'A1', R`$P = 12.8$ N`],
  ['', 'M1', R`About to move up: $P = 4g\sin30^\circ + F$`],
  ['', 'A1', R`$P = 26.4$ N`],
  ['', 'A1', R`$12.8 \le P \le 26.4$`]
],
answer: R`$12.8 \le P \le 26.4$`,
sol: R`
1. **Perpendicular:** $R = 4g\cos30^\circ = 33.95$ N, so $F_{\max} = 0.2 \times 33.95 = 6.79$ N.
2. **Weight down the slope:** $4g\sin30^\circ = 19.6$ N.
3. **Least $P$ (about to slide down, friction up):** $P + 6.79 = 19.6$, so $P = 12.8$ N.
4. **Greatest $P$ (about to move up, friction down):** $P = 19.6 + 6.79 = 26.4$ N.
5. **Range:** $12.8 \le P \le 26.4$.`
},
{ id:'5.3-12', stars:4,
fig: Fig.slope({ deg: 36.87, angleLabel: 'α', label: 'Particle on a rough slope held by a horizontal force P, about to move up', forces: [{ dir: 'weight', label: '5g' }, { dir: 'normal', label: 'R' }, { dir: 'horiz', label: 'P', len: 62 }, { dir: 'down', label: 'F', len: 48 }] }),
q: R`A particle of mass $5$ kg rests on a rough plane inclined at angle $\alpha$, where $\tan\alpha = \frac34$. The coefficient of friction is $0.25$. A horizontal force of magnitude $P$ N acts on the particle, and the particle is on the point of moving **up** the plane.

**(a)** Find $P$. [[7]]

**(b)** State the direction of the friction force, with a reason. [[1]]`,
hints: [
  R`$\sin\alpha = \frac35$, $\cos\alpha = \frac45$. The horizontal force pushes into the plane, so it adds to $R$.`,
  R`Perpendicular: $R = 5g\cos\alpha + P\sin\alpha$. Parallel: $P\cos\alpha = 5g\sin\alpha + 0.25R$.`,
  R`Substitute $R$ into the parallel equation and solve for $P$.`
],
scheme: [
  ['(a)', 'M1', R`Resolves perpendicular, three terms`],
  ['(a)', 'A1', R`$R = 5g\cos\alpha + P\sin\alpha = 39.2 + 0.6P$`],
  ['(a)', 'M1', R`Resolves parallel with friction acting down the plane`],
  ['(a)', 'A1', R`$P\cos\alpha = 5g\sin\alpha + F$`],
  ['(a)', 'M1', R`Uses $F = 0.25R$`],
  ['(a)', 'M1', R`Solves the linear equation for $P$`],
  ['(a)', 'A1', R`$P = 60.3$ N`],
  ['(b)', 'B1', R`Down the plane, because the particle is about to move up and friction opposes that`]
],
answer: R`(a) $P = 60.3$ N (b) down the plane`,
sol: R`
**(a)**
1. **Perpendicular:** $R = 5g\cos\alpha + P\sin\alpha = 39.2 + 0.6P$.
2. **Parallel (friction down the plane):** $P\cos\alpha = 5g\sin\alpha + 0.25R$, so $0.8P = 29.4 + 0.25(39.2 + 0.6P)$.
3. **Solve:** $0.8P = 29.4 + 9.8 + 0.15P$, so $0.65P = 39.2$ and $P = 60.3$ N.

**(b)** Down the plane. The particle is about to move up, and friction always opposes the motion that would happen.`
},
{ id:'5.3-13', stars:4,
fig: Fig.slope({ deg: 30, label: 'Particle projected up a rough slope', forces: [{ dir: 'weight', label: 'mg' }, { dir: 'normal', label: 'R' }, { dir: 'down', label: 'F', len: 48 }], motion: 'projected up at 10 m/s' }),
q: R`A particle is projected up a rough plane inclined at $30^\circ$ to the horizontal, with speed $10$ m s$^{-1}$. The coefficient of friction is $0.4$.

**(a)** Find the deceleration of the particle as it moves up the plane. [[3]]

**(b)** Find the distance it travels before coming to rest. [[2]]

**(c)** Show that the particle then slides back down the plane. [[2]]

**(d)** Find its speed when it returns to its starting point. [[3]]`,
hints: [
  R`Going up, gravity and friction both act down the slope: $mg\sin30^\circ + \mu mg\cos30^\circ = ma$.`,
  R`For (c), compare $\mu$ with $\tan30^\circ$, or compare $mg\sin30^\circ$ with the maximum friction.`,
  R`Coming down, friction acts **up** the slope, so the acceleration is $g\sin30^\circ - \mu g\cos30^\circ$.`
],
scheme: [
  ['(a)', 'M1', R`$F = ma$ with weight and friction both down the slope`],
  ['(a)', 'A1', R`$mg\sin30^\circ + 0.4mg\cos30^\circ = ma$`],
  ['(a)', 'A1', R`$8.29$ m s$^{-2}$`],
  ['(b)', 'M1', R`$0 = 10^2 - 2(8.29)s$`],
  ['(b)', 'A1', R`$s = 6.03$ m`],
  ['(c)', 'M1', R`Compares $\mu = 0.4$ with $\tan30^\circ = 0.577$`],
  ['(c)', 'A1', R`$0.4 < 0.577$, so friction cannot hold it and it slides back`],
  ['(d)', 'M1', R`Acceleration down $= g\sin30^\circ - 0.4g\cos30^\circ$`],
  ['(d)', 'A1', R`$1.51$ m s$^{-2}$`],
  ['(d)', 'A1', R`$v = 4.26$ m s$^{-1}$`]
],
answer: R`(a) $8.29$ m s$^{-2}$ (b) $6.03$ m (c) $0.4 < \tan30^\circ$ (d) $4.26$ m s$^{-1}$`,
sol: R`
**(a)** Going up, both forces act down the slope. $mg\sin30^\circ + 0.4mg\cos30^\circ = ma$, so $a = 4.9 + 3.395 = 8.29$ m s$^{-2}$.

**(b)** $0 = 100 - 2(8.295)s$, so $s = 6.03$ m.

**(c)** At rest, gravity pulls it down the slope with $mg\sin30^\circ = 0.5mg$, and the most friction can supply is $0.4mg\cos30^\circ = 0.346mg$. Since $0.5mg > 0.346mg$ (equivalently $\mu < \tan30^\circ$), it slides back down.

**(d)** Coming down, friction acts up the slope: $a = 4.9 - 3.395 = 1.505$ m s$^{-2}$.
$v^2 = 0 + 2(1.505)(6.028) = 18.1$, so $v = 4.26$ m s$^{-1}$.

It returns more slowly than it left ($10$ m s$^{-1}$) because friction removes energy both ways.`
},
{ id:'5.3-14', stars:4,
fig: Fig.slope({ deg: 30, label: 'Block A on a rough slope connected over a smooth pulley to particle B', forces: [{ dir: 'weight', label: '3g', len: 50 }, { dir: 'normal', label: 'R', len: 44 }, { dir: 'down', label: 'F', len: 44 }], pulley: { name: 'B', weightLabel: '4g', tension: 'T', blockName: 'A' } }),
q: R`A block $A$ of mass $3$ kg lies on a rough plane inclined at $30^\circ$ to the horizontal, with coefficient of friction $0.3$. It is attached to a light inextensible string that passes over a small smooth pulley at the top of the plane. A particle $B$ of mass $4$ kg hangs freely from the other end. The system is released from rest and $B$ moves downwards.

**(a)** Find the acceleration of the system. [[5]]

**(b)** Find the tension in the string. [[2]]

**(c)** State how you have used the facts that the string is light and inextensible and the pulley is smooth. [[2]]`,
hints: [
  R`$A$ moves up the slope, so friction on $A$ acts **down** the slope.`,
  R`For $A$: $T - 3g\sin30^\circ - 0.3(3g\cos30^\circ) = 3a$. For $B$: $4g - T = 4a$.`,
  R`Add the two equations to remove $T$.`
],
scheme: [
  ['(a)', 'M1', R`$R = 3g\cos30^\circ$ and $F = 0.3R$`],
  ['(a)', 'M1', R`$F = ma$ for $A$ along the slope, four terms`],
  ['(a)', 'A1', R`$T - 3g\sin30^\circ - 0.3(3g\cos30^\circ) = 3a$`],
  ['(a)', 'A1', R`For $B$: $4g - T = 4a$`],
  ['(a)', 'A1', R`$a = 2.41$ m s$^{-2}$`],
  ['(b)', 'M1', R`Substitutes $a$ into either equation`],
  ['(b)', 'A1', R`$T = 29.6$ N`],
  ['(c)', 'B1', R`Inextensible: $A$ and $B$ have the same acceleration`],
  ['(c)', 'B1', R`Light string and smooth pulley: the tension is the same on both sides`]
],
answer: R`(a) $2.41$ m s$^{-2}$ (b) $29.6$ N (c) see solution`,
sol: R`
**(a)**
1. **For $A$, perpendicular:** $R = 3g\cos30^\circ = 25.46$ N, so friction $F = 0.3 \times 25.46 = 7.64$ N, acting down the slope.
2. **For $A$, up the slope:** $T - 3g\sin30^\circ - 7.64 = 3a$, i.e. $T - 22.34 = 3a$.
3. **For $B$, downwards:** $4g - T = 4a$, i.e. $39.2 - T = 4a$.
4. **Add:** $39.2 - 22.34 = 7a$, so $a = 2.41$ m s$^{-2}$.

**(b)** From $B$'s equation: $T = 39.2 - 4(2.409) = 29.6$ N.

**(c)**
- The string is **inextensible**, so $A$ and $B$ move with the same acceleration $a$.
- The string is **light** and the pulley **smooth**, so the tension $T$ is the same in both parts of the string.`
},
{ id:'5.3-15', stars:5,
fig: Fig.ground({ rough: true, label: 'Block pulled at angle theta to the horizontal on rough ground', angles: [{ from: 0, to: 26.6, label: 'θ' }], forces: [{ deg: 26.6, label: 'P', len: 80 }, { deg: 180, label: 'F', len: 54 }, { deg: 90, label: 'R', len: 54 }, { deg: 270, label: 'mg', len: 50, weight: true }], motion: 'about to move' }),
q: R`A block of mass $m$ rests on rough horizontal ground, with coefficient of friction $\mu$. A force $P$ is applied at an angle $\theta$ above the horizontal, and the block is on the point of moving.

**(a)** Show that $P = \dfrac{\mu mg}{\cos\theta + \mu\sin\theta}$. [[4]]

**(b)** By writing $\cos\theta + \mu\sin\theta$ in the form $\sqrt{1 + \mu^2}\cos(\theta - \alpha)$, show that the least possible value of $P$ is $\dfrac{\mu mg}{\sqrt{1 + \mu^2}}$, and that it occurs when $\tan\theta = \mu$. [[4]]

**(c)** For a block of mass $20$ kg with $\mu = 0.5$, find the least force needed to move it and the angle at which it should be applied. [[2]]`,
hints: [
  R`$R = mg - P\sin\theta$ and, limiting, $P\cos\theta = \mu R$.`,
  R`This links to Pure Chapter 7.5: $\cos\theta + \mu\sin\theta = R\cos(\theta - \alpha)$ with $R = \sqrt{1+\mu^2}$ and $\tan\alpha = \mu$.`,
  R`$P$ is least when the denominator is greatest, which is when $\cos(\theta - \alpha) = 1$.`
],
scheme: [
  ['(a)', 'M1', R`Resolves vertically: $R = mg - P\sin\theta$`],
  ['(a)', 'M1', R`Resolves horizontally with $F = \mu R$`],
  ['(a)', 'A1', R`$P\cos\theta = \mu(mg - P\sin\theta)$`],
  ['(a)', 'A1', R`Rearranges to the given result (cso)`],
  ['(b)', 'M1', R`$\cos\theta + \mu\sin\theta = \sqrt{1+\mu^2}\cos(\theta - \alpha)$ with $\tan\alpha = \mu$`],
  ['(b)', 'M1', R`Denominator is greatest when $\cos(\theta - \alpha) = 1$`],
  ['(b)', 'A1', R`Least $P = \dfrac{\mu mg}{\sqrt{1+\mu^2}}$`],
  ['(b)', 'A1', R`At $\theta = \alpha$, so $\tan\theta = \mu$ (cso)`],
  ['(c)', 'B1', R`$87.7$ N`],
  ['(c)', 'B1', R`$\theta = 26.6^\circ$`]
],
answer: R`(c) $87.7$ N at $26.6^\circ$ above the horizontal`,
sol: R`
**(a)**
1. **Resolving $(\uparrow)$:** $R + P\sin\theta = mg$, so $R = mg - P\sin\theta$.
2. **Resolving $(\rightarrow)$, limiting:** $P\cos\theta = \mu R = \mu mg - \mu P\sin\theta$.
3. **Rearrange:** $P(\cos\theta + \mu\sin\theta) = \mu mg$, so $P = \dfrac{\mu mg}{\cos\theta + \mu\sin\theta}$. $\blacksquare$

**(b)**
1. **$R$ form:** $\cos\theta + \mu\sin\theta = \sqrt{1+\mu^2}\cos(\theta - \alpha)$, where $\cos\alpha = \frac{1}{\sqrt{1+\mu^2}}$, $\sin\alpha = \frac{\mu}{\sqrt{1+\mu^2}}$, so $\tan\alpha = \mu$.
2. **Least $P$:** $P$ is least when the denominator is greatest, which is when $\cos(\theta - \alpha) = 1$, i.e. $\theta = \alpha$.
3. So $P_{\min} = \dfrac{\mu mg}{\sqrt{1+\mu^2}}$, when $\tan\theta = \mu$. $\blacksquare$

**(c)** $P_{\min} = \dfrac{0.5 \times 20 \times 9.8}{\sqrt{1.25}} = \dfrac{98}{1.118} = 87.7$ N, at $\theta = \tan^{-1}0.5 = 26.6^\circ$.

Pulling slightly upwards beats pulling horizontally (which needs $98$ N), because lifting reduces $R$ and so reduces friction.`
}
]
};
