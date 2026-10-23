/* Pure Mathematics Year 1 · Chapter 11 Vectors (sections 11.1 to 11.6) */
BOOK_CHAPTERS.push({ id:'P11', book:'Pure Mathematics Year 1', label:'Chapter 11', title:'Vectors', sections:[
  { id:'P11.1', num:'11.1', title:'Vectors' },
  { id:'P11.2', num:'11.2', title:'Representing vectors' },
  { id:'P11.3', num:'11.3', title:'Magnitude and direction' },
  { id:'P11.4', num:'11.4', title:'Position vectors' },
  { id:'P11.5', num:'11.5', title:'Solving geometric problems' },
  { id:'P11.6', num:'11.6', title:'Modelling with vectors' }
]});
{
  const pt = (x, y, label, dx, dy) => ({ x, y, label, dx, dy });
  const V = (x1, y1, x2, y2, col) => ({ x1, y1, x2, y2, arrow: true, col: col || 'var(--accent)' });
  FIGS['P11.1-tri'] = Fig.graph({ label: 'The triangle law: travelling along a from A to B and then b from B to C is the same as travelling along a + b from A to C',
    x0: -0.5, x1: 7, y0: -0.5, y1: 4.5, equal: true, xlab: '', ylab: '',
    segs: [V(0, 0, 4, 1), V(4, 1, 6, 4), V(0, 0, 6, 4, 'var(--pen)')],
    points: [pt(0, 0, 'A', -10, 6), pt(4, 1, 'B', 12, 10), pt(6, 4, 'C', 12, -2)],
    texts: [{ x: 2.2, y: 0.15, label: 'a', col: 'var(--accent)' }, { x: 5.4, y: 2.3, label: 'b', col: 'var(--accent)' }, { x: 2.5, y: 2.2, label: 'a + b', col: 'var(--pen)' }] });
  FIGS['P11.3-mag'] = Fig.graph({ label: 'The vector 3i − 4j drawn from the origin: horizontal component 3, vertical component −4, magnitude 5, at 53.1° below the i direction',
    x0: -1, x1: 5, y0: -5, y1: 1, equal: true, segs: [V(0, 0, 3, -4), { x1: 0, y1: 0, x2: 3, y2: 0, dash: true }, { x1: 3, y1: 0, x2: 3, y2: -4, dash: true }],
    texts: [{ x: 1.5, y: 0.35, label: '3' }, { x: 3.4, y: -2, label: '4' }, { x: 1.1, y: -2.3, label: '5', col: 'var(--accent)' }, { x: 0.95, y: -0.45, label: '53.1°', size: 11 }] });
  FIGS['P11.5-centroid'] = Fig.geo({ label: 'Triangle OAB with M the midpoint of OA and N the midpoint of AB; the lines BM and ON cross at X, two-thirds of the way along each',
    pts: { O: [0, 0], A: [6, 0], B: [2, 5], M: [3, 0], N: [4, 2.5], X: [8 / 3, 5 / 3] }, segs: 'OA AB BO BM ON',
    labels: { O: [-12, 6], A: [12, 6], B: [0, -12], M: [0, 16], N: [12, -4], X: [-14, 0] } });
  FIGS['P11.6-boat'] = Fig.graph({ label: 'A boat starting at (2, 1) km moving with velocity (3i − 2j) km/h; after half an hour it is at (3.5, 0), due east of the origin',
    x0: -0.5, x1: 8, y0: -3.5, y1: 2, equal: true, xlab: 'east (km)', ylab: 'north (km)',
    segs: [V(2, 1, 3.5, 0), { x1: 3.5, y1: 0, x2: 7, y2: -2.33, dash: true }],
    points: [pt(2, 1, '(2, 1)', 0, -12), pt(3.5, 0, '(3.5, 0)', 26, -10), pt(5, -1, 't = 1', 22, -6), pt(6.5, -2, 't = 1.5', 26, -6)] });
  FIGS['P11.4-pos'] = Fig.graph({ label: 'Position vectors a and b from the origin O to A(3, −1) and B(7, 2); the vector AB = b − a = 4i + 3j',
    x0: -1, x1: 8, y0: -2, y1: 3, equal: true, segs: [V(0, 0, 3, -1, 'var(--muted)'), V(0, 0, 7, 2, 'var(--muted)'), V(3, -1, 7, 2)],
    points: [pt(3, -1, 'A', 6, 14), pt(7, 2, 'B', 10, -8)], texts: [{ x: 1.4, y: -0.9, label: 'a' }, { x: 3.4, y: 1.4, label: 'b' }, { x: 4.5, y: 0.9, label: 'b − a', col: 'var(--accent)' }] });
}

CONTENT['P11.1'] = {
notes: R`
### Vectors
A **vector** has size (magnitude) and direction; a **scalar** has only size. $\overrightarrow{AB}$ is the vector from $A$ to $B$. In print vectors are bold, $\mathbf{a}$; by hand write $\underline{a}$.

### Rules
- **Triangle law:** $\overrightarrow{AB} + \overrightarrow{BC} = \overrightarrow{AC}$.
- $\overrightarrow{BA} = -\overrightarrow{AB}$.
- $\lambda\mathbf{a}$ is parallel to $\mathbf{a}$, $\lambda$ times as long (opposite direction if $\lambda < 0$).
- Two vectors are **parallel** if one is a multiple of the other.
- If $\mathbf{a}$ and $\mathbf{b}$ are not parallel and $p\mathbf{a} + q\mathbf{b} = r\mathbf{a} + s\mathbf{b}$, then $p = r$ and $q = s$.

[[fig:P11.1-tri]]

::: booklet
**Not in the formula booklet:** these rules.
:::

### Worked example 1
In triangle $OAB$, $\overrightarrow{OA} = \mathbf{a}$ and $\overrightarrow{OB} = \mathbf{b}$. Find $\overrightarrow{AB}$.
- Go from $A$ to $O$, then $O$ to $B$: $\overrightarrow{AB} = -\mathbf{a} + \mathbf{b} = \mathbf{b} - \mathbf{a}$.

### Worked example 2: parallel or not?
Show that $6\mathbf{a} - 9\mathbf{b}$ is parallel to $2\mathbf{a} - 3\mathbf{b}$.
- $6\mathbf{a} - 9\mathbf{b} = 3(2\mathbf{a} - 3\mathbf{b})$: a scalar multiple, so parallel (and $3$ times as long).

**The trap:** writing $\overrightarrow{AB} = \mathbf{a} - \mathbf{b}$. A route from $A$ starts by going **back** along $\mathbf{a}$, so $\mathbf{a}$ gets the minus sign.

### Watch out
- To combine column vectors, work row by row.
`,
questions: [
Q('P11.1-1', 1, R`$\mathbf{a} = \begin{pmatrix} 2 \\ 3 \end{pmatrix}$ and $\mathbf{b} = \begin{pmatrix} -1 \\ 4 \end{pmatrix}$. Find $\mathbf{a} + \mathbf{b}$. [[1]]`,
  [R`Add the top numbers, then the bottom numbers.`, R`$2 + (-1)$ and $3 + 4$.`],
  [R`|B1|$\begin{pmatrix} 1 \\ 7 \end{pmatrix}$`], R`$\begin{pmatrix} 1 \\ 7 \end{pmatrix}$`,
  R`Add each component: $\begin{pmatrix} 2 - 1 \\ 3 + 4 \end{pmatrix}$.`),
Q('P11.1-2', 1, R`$\mathbf{a} = \begin{pmatrix} 2 \\ -1 \end{pmatrix}$. Find $3\mathbf{a}$. [[1]]`,
  [R`Multiply each component by $3$.`, R`$3 \times (-1) = -3$.`],
  [R`|B1|$\begin{pmatrix} 6 \\ -3 \end{pmatrix}$`], R`$\begin{pmatrix} 6 \\ -3 \end{pmatrix}$`,
  R`Each component is multiplied by the scalar $3$.`),
Q('P11.1-3', 1, R`With $\mathbf{a} = \begin{pmatrix} 2 \\ 3 \end{pmatrix}$ and $\mathbf{b} = \begin{pmatrix} -1 \\ 4 \end{pmatrix}$, find $\mathbf{a} - \mathbf{b}$. [[1]]`,
  [R`Subtract component by component.`, R`$2 - (-1) = 3$.`],
  [R`|B1|$\begin{pmatrix} 3 \\ -1 \end{pmatrix}$`], R`$\begin{pmatrix} 3 \\ -1 \end{pmatrix}$`,
  R`$\begin{pmatrix} 2 + 1 \\ 3 - 4 \end{pmatrix} = \begin{pmatrix} 3 \\ -1 \end{pmatrix}$.`),
Q('P11.1-4', 2, R`Show that $6\mathbf{a} - 9\mathbf{b}$ is parallel to $2\mathbf{a} - 3\mathbf{b}$. [[2]]`,
  [R`Look for a common factor.`, R`$6\mathbf{a} - 9\mathbf{b} = 3(\ldots)$.`],
  [R`|M1|$3(2\mathbf{a} - 3\mathbf{b})$`, R`|A1|A scalar multiple, so parallel`], R`$6\mathbf{a} - 9\mathbf{b} = 3(2\mathbf{a} - 3\mathbf{b})$`,
  R`A vector that is a scalar multiple of another is parallel to it.`),
Q('P11.1-5', 2, R`In triangle $OAB$, $\overrightarrow{OA} = \mathbf{a}$ and $\overrightarrow{OB} = \mathbf{b}$. Find $\overrightarrow{AB}$ and $\overrightarrow{BA}$. [[2]]`,
  [R`$\overrightarrow{AB} = \overrightarrow{AO} + \overrightarrow{OB}$.`, R`$\overrightarrow{AO} = -\mathbf{a}$.`],
  [R`|B1|$\overrightarrow{AB} = \mathbf{b} - \mathbf{a}$`, R`|B1|$\overrightarrow{BA} = \mathbf{a} - \mathbf{b}$`], R`$\mathbf{b} - \mathbf{a}$; $\mathbf{a} - \mathbf{b}$`,
  R`Reversing a vector changes its sign.`),
Q('P11.1-6', 2, R`$\mathbf{a} = \begin{pmatrix} 1 \\ 4 \end{pmatrix}$ and $\mathbf{b} = \begin{pmatrix} 2 \\ -1 \end{pmatrix}$. Find $2\mathbf{a} - 3\mathbf{b}$. [[2]]`,
  [R`$2\mathbf{a} = \begin{pmatrix} 2 \\ 8 \end{pmatrix}$, $3\mathbf{b} = \begin{pmatrix} 6 \\ -3 \end{pmatrix}$.`, R`Subtract.`],
  [R`|M1|Scales both`, R`|A1|$\begin{pmatrix} -4 \\ 11 \end{pmatrix}$`], R`$\begin{pmatrix} -4 \\ 11 \end{pmatrix}$`,
  R`$\begin{pmatrix} 2 - 6 \\ 8 + 3 \end{pmatrix}$.`),
Q('P11.1-7', 2, R`Find $\lambda$ such that $\begin{pmatrix} \lambda \\ 6 \end{pmatrix}$ is parallel to $\begin{pmatrix} 2 \\ 3 \end{pmatrix}$. [[2]]`,
  [R`$6 = 2 \times 3$, so the scale factor is $2$.`, R`$\lambda = 2 \times 2$.`],
  [R`|M1|Scale factor $2$`, R`|A1|$\lambda = 4$`], R`$\lambda = 4$`,
  R`$\begin{pmatrix} 4 \\ 6 \end{pmatrix} = 2\begin{pmatrix} 2 \\ 3 \end{pmatrix}$.`),
Q('P11.1-8', 3, R`$OABC$ is a parallelogram with $\overrightarrow{OA} = \mathbf{a}$ and $\overrightarrow{OC} = \mathbf{c}$. $M$ is the midpoint of $AB$. Find $\overrightarrow{OM}$. [[3]]`,
  [R`$\overrightarrow{AB} = \overrightarrow{OC} = \mathbf{c}$.`, R`$\overrightarrow{OM} = \overrightarrow{OA} + \frac12\overrightarrow{AB}$.`],
  [R`|B1|$\overrightarrow{AB} = \mathbf{c}$`, R`|M1|$\overrightarrow{OA} + \frac12\overrightarrow{AB}$`, R`|A1|$\mathbf{a} + \frac12\mathbf{c}$`], R`$\mathbf{a} + \frac12\mathbf{c}$`,
  R`Opposite sides of a parallelogram are equal vectors.`),
Q('P11.1-9', 3, R`Find $p$ and $q$ such that $p\begin{pmatrix} 1 \\ 2 \end{pmatrix} + q\begin{pmatrix} 3 \\ -1 \end{pmatrix} = \begin{pmatrix} 7 \\ 0 \end{pmatrix}$. [[3]]`,
  [R`$p + 3q = 7$ and $2p - q = 0$.`, R`Substitute $q = 2p$.`],
  [R`|M1|Two equations`, R`|M1|Solves`, R`|A1|$p = 1$, $q = 2$`], R`$p = 1$, $q = 2$`,
  R`$q = 2p$, so $7p = 7$.`),
Q('P11.1-10', 3, R`$\overrightarrow{AB} = 2\mathbf{a} + \mathbf{b}$ and $\overrightarrow{BC} = \mathbf{a} - 3\mathbf{b}$. Find $\overrightarrow{AC}$ and $\overrightarrow{CA}$. [[2]]`,
  [R`Triangle law.`, R`Then change the sign.`],
  [R`|B1|$\overrightarrow{AC} = 3\mathbf{a} - 2\mathbf{b}$`, R`|B1|$\overrightarrow{CA} = -3\mathbf{a} + 2\mathbf{b}$`], R`$3\mathbf{a} - 2\mathbf{b}$; $2\mathbf{b} - 3\mathbf{a}$`,
  R`$\overrightarrow{AC} = \overrightarrow{AB} + \overrightarrow{BC}$.`),
Q('P11.1-11', 3, R`$\mathbf{a}$ and $\mathbf{b}$ are not parallel and $(2s + 1)\mathbf{a} + (3 - t)\mathbf{b} = 5\mathbf{a} + \mathbf{b}$. Find $s$ and $t$. [[3]]`,
  [R`Compare coefficients of $\mathbf{a}$, then of $\mathbf{b}$.`, R`This is allowed because $\mathbf{a}$ and $\mathbf{b}$ aren't parallel.`],
  [R`|M1|Compares coefficients`, R`|A1|$s = 2$`, R`|A1|$t = 2$`], R`$s = 2$, $t = 2$`,
  R`$2s + 1 = 5$ and $3 - t = 1$.`),
Q('P11.1-12', 4, R`In triangle $OAB$, $\overrightarrow{OA} = \mathbf{a}$ and $\overrightarrow{OB} = \mathbf{b}$. $P$ lies on $AB$ with $AP : PB = 1 : 2$. Find $\overrightarrow{OP}$. [[3]]`,
  [R`$\overrightarrow{AP} = \frac13\overrightarrow{AB}$.`, R`$\overrightarrow{OP} = \mathbf{a} + \frac13(\mathbf{b} - \mathbf{a})$.`],
  [R`|B1|$\overrightarrow{AP} = \frac13(\mathbf{b} - \mathbf{a})$`, R`|M1|$\overrightarrow{OA} + \overrightarrow{AP}$`, R`|A1|$\frac23\mathbf{a} + \frac13\mathbf{b}$`], R`$\frac23\mathbf{a} + \frac13\mathbf{b}$`,
  R`$AP$ is $1$ part out of $3$ of $AB$.`),
Q('P11.1-13', 4, R`Show that $\begin{pmatrix} 3 \\ -6 \end{pmatrix}$ and $\begin{pmatrix} -1 \\ 2 \end{pmatrix}$ are parallel, and state how their directions and lengths compare. [[2]]`,
  [R`Is one a multiple of the other?`, R`$-3 \times \begin{pmatrix} -1 \\ 2 \end{pmatrix}$.`],
  [R`|M1|$\begin{pmatrix} 3 \\ -6 \end{pmatrix} = -3\begin{pmatrix} -1 \\ 2 \end{pmatrix}$`, R`|A1|Opposite directions; the first is $3$ times as long`], R`Parallel; opposite directions; ratio $3 : 1$`,
  R`A negative multiple reverses the direction.`),
Q('P11.1-14', 4, R`$OABC$ is a parallelogram with $\overrightarrow{OA} = \mathbf{a}$ and $\overrightarrow{OC} = \mathbf{c}$. $X$ is the midpoint of $AC$. Show that $X$ is also the midpoint of $OB$. [[4]]`,
  [R`$\overrightarrow{AC} = \mathbf{c} - \mathbf{a}$.`, R`$\overrightarrow{OB} = \mathbf{a} + \mathbf{c}$.`],
  [R`|B1|$\overrightarrow{AC} = \mathbf{c} - \mathbf{a}$`, R`|M1|$\overrightarrow{OX} = \mathbf{a} + \frac12(\mathbf{c} - \mathbf{a})$`, R`|A1|$= \frac12(\mathbf{a} + \mathbf{c})$`, R`|A1|$= \frac12\overrightarrow{OB}$, so $X$ is the midpoint of $OB$`], R`$\overrightarrow{OX} = \frac12\overrightarrow{OB}$`,
  R`So the diagonals of a parallelogram bisect each other.`),
Q('P11.1-15', 5, R`In triangle $OAB$, $\overrightarrow{OA} = \mathbf{a}$ and $\overrightarrow{OB} = \mathbf{b}$. $M$ is the midpoint of $OA$, and $N$ lies on $OB$ with $ON : NB = 2 : 1$. $P$ is the midpoint of $MN$.

**(a)** Find $\overrightarrow{MN}$. [[2]]

**(b)** Find $\overrightarrow{OP}$. [[2]]

**(c)** Show that $MN$ is not parallel to $AB$. [[2]]

**(d)** Find $\overrightarrow{AP}$. [[2]]`,
  [R`$\overrightarrow{OM} = \frac12\mathbf{a}$, $\overrightarrow{ON} = \frac23\mathbf{b}$.`, R`$\overrightarrow{OP} = \overrightarrow{OM} + \frac12\overrightarrow{MN}$.`],
  [R`(a)|M1|$\overrightarrow{MO} + \overrightarrow{ON}$`, R`(a)|A1|$\frac23\mathbf{b} - \frac12\mathbf{a}$`, R`(b)|M1|$\frac12\mathbf{a} + \frac12\left(\frac23\mathbf{b} - \frac12\mathbf{a}\right)$`, R`(b)|A1|$\frac14\mathbf{a} + \frac13\mathbf{b}$`, R`(c)|M1|$\overrightarrow{AB} = \mathbf{b} - \mathbf{a}$`, R`(c)|A1|Coefficients $-\frac12 : \frac23$ aren't in the ratio $-1 : 1$`, R`(d)|M1|$\overrightarrow{OP} - \mathbf{a}$`, R`(d)|A1|$-\frac34\mathbf{a} + \frac13\mathbf{b}$`],
  R`(a) $\frac23\mathbf{b} - \frac12\mathbf{a}$ (b) $\frac14\mathbf{a} + \frac13\mathbf{b}$ (d) $\frac13\mathbf{b} - \frac34\mathbf{a}$`,
  R`(c) For $\overrightarrow{MN} = \lambda(\mathbf{b} - \mathbf{a})$ we'd need $-\frac12 = -\lambda$ and $\frac23 = \lambda$: impossible.

(d) $\overrightarrow{AP} = \overrightarrow{AO} + \overrightarrow{OP} = -\mathbf{a} + \frac14\mathbf{a} + \frac13\mathbf{b}$.`)
]};

CONTENT['P11.2'] = {
notes: R`
### $\mathbf{i}$, $\mathbf{j}$ notation
$\mathbf{i}$ and $\mathbf{j}$ are unit vectors in the $x$ and $y$ directions, so
$$3\mathbf{i} - 2\mathbf{j} = \begin{pmatrix} 3 \\ -2 \end{pmatrix}$$
Add, subtract and scale them like algebra: collect the $\mathbf{i}$ terms and the $\mathbf{j}$ terms.

### Vector between two points
From $A(x_1, y_1)$ to $B(x_2, y_2)$: $\overrightarrow{AB} = (x_2 - x_1)\mathbf{i} + (y_2 - y_1)\mathbf{j}$.

::: booklet
**Not in the formula booklet:** this notation.
:::

### Worked example 1
$\mathbf{p} = 2\mathbf{i} + 5\mathbf{j}$ and $\mathbf{q} = 3\mathbf{i} - \mathbf{j}$. Find $2\mathbf{p} - \mathbf{q}$.
$$(4\mathbf{i} + 10\mathbf{j}) - (3\mathbf{i} - \mathbf{j}) = \mathbf{i} + 11\mathbf{j}$$

### Worked example 2: find the coefficients
Find $a$ and $b$ with $a(2\mathbf{i} + \mathbf{j}) + b(\mathbf{i} - \mathbf{j}) = 7\mathbf{i} + 2\mathbf{j}$.
- $\mathbf{i}$: $2a + b = 7$. $\mathbf{j}$: $a - b = 2$. Adding: $3a = 9$, so $a = 3$, $b = 1$.

**The trap:** losing the sign when subtracting: $10\mathbf{j} - (-\mathbf{j}) = 11\mathbf{j}$, not $9\mathbf{j}$.

### Watch out
- $\mathbf{j}$ alone means $0\mathbf{i} + 1\mathbf{j}$.
`,
questions: [
Q('P11.2-1', 1, R`Write $4\mathbf{i} - 7\mathbf{j}$ as a column vector. [[1]]`,
  [R`The $\mathbf{i}$ part goes on top.`, R`The $\mathbf{j}$ part goes underneath.`],
  [R`|B1|$\begin{pmatrix} 4 \\ -7 \end{pmatrix}$`], R`$\begin{pmatrix} 4 \\ -7 \end{pmatrix}$`,
  R`$x$-component $4$, $y$-component $-7$.`),
Q('P11.2-2', 1, R`Write $\begin{pmatrix} -2 \\ 5 \end{pmatrix}$ in $\mathbf{i}$, $\mathbf{j}$ form. [[1]]`,
  [R`Top number with $\mathbf{i}$.`, R`Bottom number with $\mathbf{j}$.`],
  [R`|B1|$-2\mathbf{i} + 5\mathbf{j}$`], R`$-2\mathbf{i} + 5\mathbf{j}$`,
  R`The components become the coefficients of $\mathbf{i}$ and $\mathbf{j}$.`),
Q('P11.2-3', 1, R`$\mathbf{a} = 2\mathbf{i} + \mathbf{j}$ and $\mathbf{b} = \mathbf{i} - 3\mathbf{j}$. Find $\mathbf{a} + \mathbf{b}$. [[1]]`,
  [R`Collect $\mathbf{i}$ terms.`, R`Collect $\mathbf{j}$ terms.`],
  [R`|B1|$3\mathbf{i} - 2\mathbf{j}$`], R`$3\mathbf{i} - 2\mathbf{j}$`,
  R`$(2 + 1)\mathbf{i} + (1 - 3)\mathbf{j}$.`),
Q('P11.2-4', 2, R`With $\mathbf{a} = 2\mathbf{i} + \mathbf{j}$ and $\mathbf{b} = \mathbf{i} - 3\mathbf{j}$, find $3\mathbf{a} - 2\mathbf{b}$. [[2]]`,
  [R`$3\mathbf{a} = 6\mathbf{i} + 3\mathbf{j}$, $2\mathbf{b} = 2\mathbf{i} - 6\mathbf{j}$.`, R`Subtract carefully.`],
  [R`|M1|Scales both`, R`|A1|$4\mathbf{i} + 9\mathbf{j}$`], R`$4\mathbf{i} + 9\mathbf{j}$`,
  R`$3\mathbf{j} - (-6\mathbf{j}) = 9\mathbf{j}$.`),
Q('P11.2-5', 2, R`Find $\overrightarrow{AB}$, where $A$ is $(2, 5)$ and $B$ is $(7, -1)$, in $\mathbf{i}$, $\mathbf{j}$ form. [[2]]`,
  [R`End minus start.`, R`$7 - 2$ and $-1 - 5$.`],
  [R`|M1|$B - A$`, R`|A1|$5\mathbf{i} - 6\mathbf{j}$`], R`$5\mathbf{i} - 6\mathbf{j}$`,
  R`$\overrightarrow{AB} = (7 - 2)\mathbf{i} + (-1 - 5)\mathbf{j}$.`),
Q('P11.2-6', 2, R`Find $p$ such that $2\mathbf{i} + p\mathbf{j}$ is parallel to $6\mathbf{i} - 9\mathbf{j}$. [[2]]`,
  [R`$6\mathbf{i} - 9\mathbf{j} = 3(2\mathbf{i} - 3\mathbf{j})$.`, R`So $p = -3$.`],
  [R`|M1|Scale factor $3$`, R`|A1|$p = -3$`], R`$p = -3$`,
  R`The ratio of components must match: $\frac{p}{2} = \frac{-9}{6}$.`),
Q('P11.2-7', 2, R`Find $a$ and $b$ such that $a(2\mathbf{i} + \mathbf{j}) + b(\mathbf{i} - \mathbf{j}) = 7\mathbf{i} + 2\mathbf{j}$. [[3]]`,
  [R`$2a + b = 7$ and $a - b = 2$.`, R`Add the equations.`],
  [R`|M1|Two equations`, R`|M1|Solves`, R`|A1|$a = 3$, $b = 1$`], R`$a = 3$, $b = 1$`,
  R`$3a = 9$, so $a = 3$ and $b = 1$.`),
Q('P11.2-8', 3, R`Simplify $\begin{pmatrix} 3 \\ 4 \end{pmatrix} - 2\begin{pmatrix} 1 \\ -1 \end{pmatrix} + \begin{pmatrix} 0 \\ 5 \end{pmatrix}$, giving the answer in $\mathbf{i}$, $\mathbf{j}$ form. [[2]]`,
  [R`$2\begin{pmatrix} 1 \\ -1 \end{pmatrix} = \begin{pmatrix} 2 \\ -2 \end{pmatrix}$.`, R`Top: $3 - 2 + 0$. Bottom: $4 + 2 + 5$.`],
  [R`|M1|Component by component`, R`|A1|$\mathbf{i} + 11\mathbf{j}$`], R`$\mathbf{i} + 11\mathbf{j}$`,
  R`$\begin{pmatrix} 1 \\ 11 \end{pmatrix}$.`),
Q('P11.2-9', 3, R`$\mathbf{p} = 3\mathbf{i} - 4\mathbf{j}$ and $\mathbf{q} = k\mathbf{i} + 2\mathbf{j}$. Given that $\mathbf{p} + \mathbf{q}$ is parallel to $\mathbf{i} + \mathbf{j}$, find $k$. [[3]]`,
  [R`$\mathbf{p} + \mathbf{q} = (3 + k)\mathbf{i} - 2\mathbf{j}$.`, R`Parallel to $\mathbf{i} + \mathbf{j}$ means equal components.`],
  [R`|B1|$(3 + k)\mathbf{i} - 2\mathbf{j}$`, R`|M1|$3 + k = -2$`, R`|A1|$k = -5$`], R`$k = -5$`,
  R`$\mathbf{p} + \mathbf{q} = -2\mathbf{i} - 2\mathbf{j} = -2(\mathbf{i} + \mathbf{j})$.`),
Q('P11.2-10', 3, R`Use vectors to show that $A(1, 2)$, $B(4, 6)$ and $C(10, 14)$ lie on a straight line. [[3]]`,
  [R`Find $\overrightarrow{AB}$ and $\overrightarrow{BC}$.`, R`Is one a multiple of the other?`],
  [R`|B1|$\overrightarrow{AB} = 3\mathbf{i} + 4\mathbf{j}$`, R`|B1|$\overrightarrow{BC} = 6\mathbf{i} + 8\mathbf{j}$`, R`|A1|$\overrightarrow{BC} = 2\overrightarrow{AB}$ and $B$ is common, so collinear`], R`$\overrightarrow{BC} = 2\overrightarrow{AB}$`,
  R`Parallel vectors through a shared point lie on the same line.`),
Q('P11.2-11', 3, R`Find the vector in the same direction as $3\mathbf{i} + 4\mathbf{j}$ but twice as long, and the vector in the opposite direction that is half as long. [[2]]`,
  [R`Multiply by $2$.`, R`Multiply by $-\frac12$.`],
  [R`|B1|$6\mathbf{i} + 8\mathbf{j}$`, R`|B1|$-1.5\mathbf{i} - 2\mathbf{j}$`], R`$6\mathbf{i} + 8\mathbf{j}$; $-1.5\mathbf{i} - 2\mathbf{j}$`,
  R`Scaling by a negative number reverses the direction.`),
Q('P11.2-12', 4, R`Find $\lambda$ and $\mu$ such that $\lambda\begin{pmatrix} 2 \\ -1 \end{pmatrix} + \mu\begin{pmatrix} -3 \\ 2 \end{pmatrix} = \begin{pmatrix} 1 \\ 0 \end{pmatrix}$. [[3]]`,
  [R`$2\lambda - 3\mu = 1$ and $-\lambda + 2\mu = 0$.`, R`$\lambda = 2\mu$.`],
  [R`|M1|Two equations`, R`|M1|Substitutes $\lambda = 2\mu$`, R`|A1|$\lambda = 2$, $\mu = 1$`], R`$\lambda = 2$, $\mu = 1$`,
  R`Components: $2\lambda - 3\mu = 1$ and $-\lambda + 2\mu = 0$. The second gives $\lambda = 2\mu$, so $4\mu - 3\mu = 1$: $\mu = 1$, $\lambda = 2$.`),
Q('P11.2-13', 4, R`$ABCD$ is a parallelogram with $A(1, 1)$, $B(5, 2)$ and $D(2, 4)$. Find the coordinates of $C$. [[3]]`,
  [R`$\overrightarrow{BC} = \overrightarrow{AD}$.`, R`$\overrightarrow{AD} = \mathbf{i} + 3\mathbf{j}$.`],
  [R`|B1|$\overrightarrow{AD} = \mathbf{i} + 3\mathbf{j}$`, R`|M1|$C = B + \overrightarrow{AD}$`, R`|A1|$(6, 5)$`], R`$(6, 5)$`,
  R`Opposite sides of a parallelogram are equal vectors: $(5 + 1, 2 + 3)$.`),
Q('P11.2-14', 4, R`$\mathbf{a} = \begin{pmatrix} 2 \\ 1 \end{pmatrix}$ and $\mathbf{b} = \begin{pmatrix} -1 \\ 3 \end{pmatrix}$. Find $\mathbf{c}$ such that $\mathbf{a} + \mathbf{b} + \mathbf{c} = \mathbf{0}$. [[2]]`,
  [R`$\mathbf{c} = -(\mathbf{a} + \mathbf{b})$.`, R`$\mathbf{a} + \mathbf{b} = \begin{pmatrix} 1 \\ 4 \end{pmatrix}$.`],
  [R`|M1|$-(\mathbf{a} + \mathbf{b})$`, R`|A1|$\begin{pmatrix} -1 \\ -4 \end{pmatrix}$`], R`$\begin{pmatrix} -1 \\ -4 \end{pmatrix}$`,
  R`Three vectors adding to zero form a closed triangle.`),
Q('P11.2-15', 5, R`$\mathbf{p} = 2\mathbf{i} - \mathbf{j}$ and $\mathbf{q} = \mathbf{i} + 3\mathbf{j}$.

**(a)** Find $3\mathbf{p} - \mathbf{q}$. [[2]]

**(b)** Find $s$ and $t$ such that $s\mathbf{p} + t\mathbf{q} = 7\mathbf{i} + 7\mathbf{j}$. [[3]]

**(c)** Find $k$ such that $\mathbf{p} + k\mathbf{q}$ is parallel to $\mathbf{j}$, and write down this vector. [[2]]`,
  [R`(b): $2s + t = 7$ and $-s + 3t = 7$.`, R`(c): parallel to $\mathbf{j}$ means the $\mathbf{i}$ component is $0$.`],
  [R`(a)|M1|$6\mathbf{i} - 3\mathbf{j} - \mathbf{i} - 3\mathbf{j}$`, R`(a)|A1|$5\mathbf{i} - 6\mathbf{j}$`, R`(b)|M1|Two equations`, R`(b)|M1|Solves`, R`(b)|A1|$s = 2$, $t = 3$`, R`(c)|M1|$2 + k = 0$`, R`(c)|A1|$k = -2$; $-7\mathbf{j}$`],
  R`(a) $5\mathbf{i} - 6\mathbf{j}$ (b) $s = 2$, $t = 3$ (c) $k = -2$; $-7\mathbf{j}$`,
  R`(b) From the first, $t = 7 - 2s$; then $-s + 21 - 6s = 7$, $s = 2$, $t = 3$.

(c) $\mathbf{p} - 2\mathbf{q} = (2 - 2)\mathbf{i} + (-1 - 6)\mathbf{j} = -7\mathbf{j}$.`)
]};

CONTENT['P11.3'] = {
notes: R`
### Magnitude
The magnitude of $\mathbf{a} = x\mathbf{i} + y\mathbf{j}$ is
$$|\mathbf{a}| = \sqrt{x^2 + y^2}$$
A **unit vector** has magnitude $1$: $\hat{\mathbf{a}} = \dfrac{\mathbf{a}}{|\mathbf{a}|}$.

### Direction
The angle with $\mathbf{i}$ (the positive $x$-direction) comes from $\tan\theta = \frac{y}{x}$. **Sketch** the vector to see which quadrant it's in.

### From magnitude and direction
A vector of magnitude $r$ at angle $\theta$ above $\mathbf{i}$ is $r\cos\theta\,\mathbf{i} + r\sin\theta\,\mathbf{j}$.

::: booklet
**Not in the formula booklet:** these results.
:::

### Worked example 1
Find $|3\mathbf{i} - 4\mathbf{j}|$ and the unit vector in its direction.
- $\sqrt{9 + 16} = 5$; unit vector $\frac35\mathbf{i} - \frac45\mathbf{j}$.
- It's $\tan^{-1}\frac43 = 53.1°$ below $\mathbf{i}$.

[[fig:P11.3-mag]]

### Worked example 2: check the quadrant
Find the angle between $-2\mathbf{i} + 5\mathbf{j}$ and the positive $x$-direction.
- The vector points up and to the **left**. The acute angle with the $x$-axis is $\tan^{-1}\frac52 = 68.2°$.
- So the angle with $\mathbf{i}$ is $180° - 68.2° = 111.8°$.

**The trap:** typing $\tan^{-1}\left(\frac{5}{-2}\right) = -68.2°$ and stopping. Always sketch.

### Watch out
- A vector in the direction of $\mathbf{a}$ with magnitude $k$ is $k\hat{\mathbf{a}}$.
`,
questions: [
Q('P11.3-1', 1, R`Find $|5\mathbf{i} + 12\mathbf{j}|$. [[1]]`,
  [R`$\sqrt{5^2 + 12^2}$.`, R`$\sqrt{169}$.`],
  [R`|B1|$13$`], R`$13$`,
  R`$\sqrt{25 + 144} = 13$.`),
Q('P11.3-2', 1, R`Find the magnitude of $\begin{pmatrix} -6 \\ 8 \end{pmatrix}$. [[1]]`,
  [R`$\sqrt{36 + 64}$.`, R`Signs don't matter when squaring.`],
  [R`|B1|$10$`], R`$10$`,
  R`$\sqrt{(-6)^2 + 8^2} = \sqrt{100} = 10$; the signs don't matter once squared.`),
Q('P11.3-3', 1, R`Find the unit vector in the direction of $3\mathbf{i} + 4\mathbf{j}$. [[2]]`,
  [R`Magnitude $5$.`, R`Divide each component by $5$.`],
  [R`|M1|$|3\mathbf{i} + 4\mathbf{j}| = 5$`, R`|A1|$0.6\mathbf{i} + 0.8\mathbf{j}$`], R`$0.6\mathbf{i} + 0.8\mathbf{j}$`,
  R`$\frac15(3\mathbf{i} + 4\mathbf{j})$.`),
Q('P11.3-4', 2, R`Find the exact magnitude of $2\mathbf{i} - 3\mathbf{j}$ and the angle it makes with $\mathbf{i}$. [[2]]`,
  [R`$\sqrt{4 + 9}$.`, R`It points down and right: $\tan^{-1}\frac32$ below $\mathbf{i}$.`],
  [R`|B1|$\sqrt{13}$`, R`|B1|$56.3°$ below $\mathbf{i}$`], R`$\sqrt{13}$; $56.3°$ below $\mathbf{i}$`,
  R`$\tan^{-1}1.5 = 56.3°$, measured clockwise from $\mathbf{i}$.`),
Q('P11.3-5', 2, R`Find the angle between $4\mathbf{i} + 4\mathbf{j}$ and $\mathbf{i}$. [[1]]`,
  [R`$\tan\theta = \frac44$.`, R`$\tan^{-1} 1$.`],
  [R`|B1|$45°$`], R`$45°$`,
  R`Equal components give $45°$.`),
Q('P11.3-6', 2, R`Find the angle between $2\mathbf{i} + 5\mathbf{j}$ and $\mathbf{i}$. [[2]]`,
  [R`$\tan\theta = \frac52$.`, R`First quadrant.`],
  [R`|M1|$\tan^{-1}\frac52$`, R`|A1|$68.2°$`], R`$68.2°$`,
  R`$\tan^{-1} 2.5 = 68.2°$.`),
Q('P11.3-7', 2, R`Find a vector of magnitude $10$ in the same direction as $3\mathbf{i} - 4\mathbf{j}$. [[2]]`,
  [R`The unit vector is $\frac15(3\mathbf{i} - 4\mathbf{j})$.`, R`Multiply by $10$.`],
  [R`|M1|$10 \times \frac{3\mathbf{i} - 4\mathbf{j}}{5}$`, R`|A1|$6\mathbf{i} - 8\mathbf{j}$`], R`$6\mathbf{i} - 8\mathbf{j}$`,
  R`$|3\mathbf{i} - 4\mathbf{j}| = 5$, so double it.`),
Q('P11.3-8', 3, R`Find the angle between $-2\mathbf{i} + 5\mathbf{j}$ and the positive $x$-direction. [[2]]`,
  [R`Sketch: up and to the left.`, R`$180° - \tan^{-1}\frac52$.`],
  [R`|M1|Acute angle $68.2°$`, R`|A1|$111.8°$`], R`$111.8°$`,
  R`Second quadrant, so subtract the acute angle from $180°$.`),
Q('P11.3-9', 3, R`Find a vector of magnitude $26$ in the direction of $5\mathbf{i} - 12\mathbf{j}$. [[2]]`,
  [R`$|5\mathbf{i} - 12\mathbf{j}| = 13$.`, R`Double it.`],
  [R`|M1|Magnitude $13$`, R`|A1|$10\mathbf{i} - 24\mathbf{j}$`], R`$10\mathbf{i} - 24\mathbf{j}$`,
  R`$|5\mathbf{i} - 12\mathbf{j}| = 13$, and $26 = 2 \times 13$, so double the vector: $10\mathbf{i} - 24\mathbf{j}$.`),
Q('P11.3-10', 3, R`$|k\mathbf{i} + 2k\mathbf{j}| = 10$. Find the exact possible values of $k$. [[3]]`,
  [R`$k^2 + 4k^2 = 100$.`, R`$5k^2 = 100$.`],
  [R`|M1|$k^2 + (2k)^2 = 100$`, R`|M1|$k^2 = 20$`, R`|A1|$k = \pm2\sqrt5$`], R`$k = \pm2\sqrt5$`,
  R`$k = \pm\sqrt{20} = \pm2\sqrt5$.`),
Q('P11.3-11', 3, R`$\mathbf{a} = 3\mathbf{i} + \mathbf{j}$ and $\mathbf{b} = \mathbf{i} + 2\mathbf{j}$. Find $|\mathbf{a} + \mathbf{b}|$. [[2]]`,
  [R`Add first.`, R`$4\mathbf{i} + 3\mathbf{j}$.`],
  [R`|M1|$\mathbf{a} + \mathbf{b} = 4\mathbf{i} + 3\mathbf{j}$`, R`|A1|$5$`], R`$5$`,
  R`$\sqrt{16 + 9} = 5$. (Note: $|\mathbf{a}| + |\mathbf{b}| = \sqrt{10} + \sqrt5 \ne 5$.)`),
Q('P11.3-12', 4, R`Find, exactly, the vector of magnitude $8$ that makes an angle of $30°$ above the positive $x$-direction. [[2]]`,
  [R`$8\cos 30°\,\mathbf{i} + 8\sin 30°\,\mathbf{j}$.`, R`$\cos 30° = \frac{\sqrt3}{2}$.`],
  [R`|M1|Resolves`, R`|A1|$4\sqrt3\,\mathbf{i} + 4\mathbf{j}$`], R`$4\sqrt3\,\mathbf{i} + 4\mathbf{j}$`,
  R`$8 \times \frac{\sqrt3}{2} = 4\sqrt3$ and $8 \times \frac12 = 4$.`),
Q('P11.3-13', 4, R`$|p\mathbf{i} + (p + 1)\mathbf{j}| = 5$. Find the possible values of $p$. [[3]]`,
  [R`$p^2 + (p + 1)^2 = 25$.`, R`$2p^2 + 2p - 24 = 0$.`],
  [R`|M1|$p^2 + (p + 1)^2 = 25$`, R`|M1|$p^2 + p - 12 = 0$`, R`|A1|$p = 3$ or $-4$`], R`$p = 3$ or $p = -4$`,
  R`$(p + 4)(p - 3) = 0$. Check: $3\mathbf{i} + 4\mathbf{j}$ and $-4\mathbf{i} - 3\mathbf{j}$ both have magnitude $5$.`),
Q('P11.3-14', 4, R`Find the angle between the vectors $\mathbf{a} = 2\mathbf{i} + \mathbf{j}$ and $\mathbf{b} = \mathbf{i} + 3\mathbf{j}$. [[3]]`,
  [R`Find each one's angle with $\mathbf{i}$.`, R`Subtract.`],
  [R`|B1|$\mathbf{a}$: $26.6°$`, R`|B1|$\mathbf{b}$: $71.6°$`, R`|A1|$45°$`], R`$45°$`,
  R`$\tan^{-1} 3 - \tan^{-1}\frac12 = 71.57° - 26.57° = 45°$.`),
Q('P11.3-15', 5, R`$A$, $B$ and $C$ have coordinates $(1, 2)$, $(4, 6)$ and $(-3, 5)$.

**(a)** Find $|\overrightarrow{AB}|$. [[2]]

**(b)** Find $|\overrightarrow{AC}|$. [[2]]

**(c)** Find the angle each of $\overrightarrow{AB}$ and $\overrightarrow{AC}$ makes with $\mathbf{i}$, and hence $\angle BAC$. [[2]]

**(d)** Find the area of triangle $ABC$. [[2]]`,
  [R`$\overrightarrow{AB} = 3\mathbf{i} + 4\mathbf{j}$, $\overrightarrow{AC} = -4\mathbf{i} + 3\mathbf{j}$.`, R`$\overrightarrow{AC}$ is in the second quadrant.`],
  [R`(a)|M1|$3\mathbf{i} + 4\mathbf{j}$`, R`(a)|A1|$5$`, R`(b)|M1|$-4\mathbf{i} + 3\mathbf{j}$`, R`(b)|A1|$5$`, R`(c)|M1|$53.1°$ and $143.1°$`, R`(c)|A1|$90°$`, R`(d)|M1|$\frac12 \times 5 \times 5$`, R`(d)|A1|$12.5$`],
  R`(a) $5$ (b) $5$ (c) $90°$ (d) $12.5$`,
  R`(c) $\tan^{-1}\frac43 = 53.13°$; $180° - \tan^{-1}\frac34 = 143.13°$. The difference is $90°$.

(d) A right angle at $A$ between two sides of $5$: $\frac12 \times 5 \times 5$.`)
]};

CONTENT['P11.4'] = {
notes: R`
### Position vectors
The **position vector** of a point $A$ is $\overrightarrow{OA}$, often written $\mathbf{a}$. If $A$ is $(3, -1)$, then $\mathbf{a} = 3\mathbf{i} - \mathbf{j}$.

$$\overrightarrow{AB} = \mathbf{b} - \mathbf{a}$$
The midpoint of $AB$ has position vector $\frac12(\mathbf{a} + \mathbf{b})$, and $|\overrightarrow{AB}|$ is the distance $AB$.

[[fig:P11.4-pos]]

::: booklet
**Not in the formula booklet:** these results.
:::

### Worked example 1
$A(3, -1)$ and $B(7, 2)$. Find $\overrightarrow{AB}$ and the distance $AB$.
- $\overrightarrow{AB} = (7\mathbf{i} + 2\mathbf{j}) - (3\mathbf{i} - \mathbf{j}) = 4\mathbf{i} + 3\mathbf{j}$, so $AB = 5$.

### Worked example 2: travelling from a known point
$\overrightarrow{OA} = 3\mathbf{i} + 2\mathbf{j}$ and $\overrightarrow{AB} = -5\mathbf{i} + 4\mathbf{j}$. Find the position vector of $B$.
- $\overrightarrow{OB} = \overrightarrow{OA} + \overrightarrow{AB} = -2\mathbf{i} + 6\mathbf{j}$.

**The trap:** writing $\overrightarrow{AB} = \mathbf{a} - \mathbf{b}$. It's always **end minus start**.

### Watch out
- To divide $AB$ in the ratio $m : n$, use $\mathbf{a} + \frac{m}{m + n}(\mathbf{b} - \mathbf{a})$.
`,
questions: [
Q('P11.4-1', 1, R`$\overrightarrow{OA} = 2\mathbf{i} + 5\mathbf{j}$ and $\overrightarrow{OB} = 6\mathbf{i} - \mathbf{j}$. Find $\overrightarrow{AB}$. [[1]]`,
  [R`$\mathbf{b} - \mathbf{a}$.`, R`End minus start.`],
  [R`|B1|$4\mathbf{i} - 6\mathbf{j}$`], R`$4\mathbf{i} - 6\mathbf{j}$`,
  R`$(6 - 2)\mathbf{i} + (-1 - 5)\mathbf{j}$.`),
Q('P11.4-2', 1, R`Write down the position vector of the point $(-3, 4)$. [[1]]`,
  [R`It's the vector from $O$ to the point.`, R`Use the coordinates as components.`],
  [R`|B1|$-3\mathbf{i} + 4\mathbf{j}$`], R`$-3\mathbf{i} + 4\mathbf{j}$`,
  R`$\overrightarrow{OP} = -3\mathbf{i} + 4\mathbf{j}$.`),
Q('P11.4-3', 1, R`Find the position vector of the midpoint of $A(2, 8)$ and $B(6, -2)$. [[1]]`,
  [R`$\frac12(\mathbf{a} + \mathbf{b})$.`, R`Average the coordinates.`],
  [R`|B1|$4\mathbf{i} + 3\mathbf{j}$`], R`$4\mathbf{i} + 3\mathbf{j}$`,
  R`$\frac12(8\mathbf{i} + 6\mathbf{j})$.`),
Q('P11.4-4', 2, R`Find the distance between $A(1, -2)$ and $B(4, 2)$ using vectors. [[2]]`,
  [R`$\overrightarrow{AB} = 3\mathbf{i} + 4\mathbf{j}$.`, R`Magnitude.`],
  [R`|M1|$\overrightarrow{AB} = 3\mathbf{i} + 4\mathbf{j}$`, R`|A1|$5$`], R`$5$`,
  R`$|\overrightarrow{AB}| = \sqrt{9 + 16} = 5$.`),
Q('P11.4-5', 2, R`$\overrightarrow{OA} = 3\mathbf{i} + 2\mathbf{j}$ and $\overrightarrow{AB} = -5\mathbf{i} + 4\mathbf{j}$. Find the position vector of $B$. [[2]]`,
  [R`$\overrightarrow{OB} = \overrightarrow{OA} + \overrightarrow{AB}$.`, R`Add.`],
  [R`|M1|Adds`, R`|A1|$-2\mathbf{i} + 6\mathbf{j}$`], R`$-2\mathbf{i} + 6\mathbf{j}$`,
  R`$(3 - 5)\mathbf{i} + (2 + 4)\mathbf{j}$.`),
Q('P11.4-6', 2, R`$A(2, 1)$ and $B(10, 5)$. $C$ lies on $AB$ with $AC : CB = 1 : 3$. Find the position vector of $C$. [[2]]`,
  [R`$\overrightarrow{AC} = \frac14\overrightarrow{AB}$.`, R`$\overrightarrow{AB} = 8\mathbf{i} + 4\mathbf{j}$.`],
  [R`|M1|$\mathbf{a} + \frac14(\mathbf{b} - \mathbf{a})$`, R`|A1|$4\mathbf{i} + 2\mathbf{j}$`], R`$4\mathbf{i} + 2\mathbf{j}$`,
  R`$(2\mathbf{i} + \mathbf{j}) + (2\mathbf{i} + \mathbf{j})$.`),
Q('P11.4-7', 2, R`$A(1, 1)$, $B(4, 5)$ and $C(5, -2)$. Use vectors to show that triangle $ABC$ is isosceles. [[3]]`,
  [R`Find the three side vectors.`, R`Compare magnitudes.`],
  [R`|M1|Side vectors`, R`|A1|$|\overrightarrow{AB}| = |\overrightarrow{AC}| = 5$`, R`|A1|$|\overrightarrow{BC}| = \sqrt{50}$, so two sides equal`], R`$AB = AC = 5$`,
  R`$\overrightarrow{AB} = 3\mathbf{i} + 4\mathbf{j}$, $\overrightarrow{AC} = 4\mathbf{i} - 3\mathbf{j}$, $\overrightarrow{BC} = \mathbf{i} - 7\mathbf{j}$.`),
Q('P11.4-8', 3, R`$OABC$ is a parallelogram with $A(4, 1)$ and $C(1, 3)$. Find the position vector of $B$ and of the centre of the parallelogram. [[3]]`,
  [R`$\overrightarrow{OB} = \mathbf{a} + \mathbf{c}$.`, R`The centre is the midpoint of $OB$.`],
  [R`|M1|$\mathbf{a} + \mathbf{c}$`, R`|A1|$5\mathbf{i} + 4\mathbf{j}$`, R`|A1|$2.5\mathbf{i} + 2\mathbf{j}$`], R`$5\mathbf{i} + 4\mathbf{j}$; $2.5\mathbf{i} + 2\mathbf{j}$`,
  R`The diagonals bisect each other, so the centre is half of $\overrightarrow{OB}$.`),
Q('P11.4-9', 3, R`$P(2, k)$ and $Q(5, 1)$ with $|\overrightarrow{PQ}| = 5$. Find the possible values of $k$. [[3]]`,
  [R`$\overrightarrow{PQ} = 3\mathbf{i} + (1 - k)\mathbf{j}$.`, R`$9 + (1 - k)^2 = 25$.`],
  [R`|M1|$9 + (1 - k)^2 = 25$`, R`|M1|$1 - k = \pm4$`, R`|A1|$k = -3$ or $5$`], R`$k = -3$ or $k = 5$`,
  R`$\overrightarrow{PQ} = 3\mathbf{i} + (1 - k)\mathbf{j}$, so $9 + (1 - k)^2 = 25$, $(1 - k)^2 = 16$, $1 - k = \pm4$: $k = -3$ or $5$.`),
Q('P11.4-10', 3, R`$A(1, 3)$ and $B(7, 11)$. $C$ lies on $AB$ with $AC : CB = 3 : 1$. Find the coordinates of $C$. [[2]]`,
  [R`$\overrightarrow{AC} = \frac34\overrightarrow{AB}$.`, R`$\overrightarrow{AB} = 6\mathbf{i} + 8\mathbf{j}$.`],
  [R`|M1|$\mathbf{a} + \frac34(\mathbf{b} - \mathbf{a})$`, R`|A1|$(5.5, 9)$`], R`$(5.5, 9)$`,
  R`$\overrightarrow{AC} = \frac34(6\mathbf{i} + 8\mathbf{j}) = 4.5\mathbf{i} + 6\mathbf{j}$, so $C$ is $(1 + 4.5, 3 + 6) = (5.5, 9)$.`),
Q('P11.4-11', 3, R`$A(2, 1)$ and $B(5, 5)$. Find the unit vector in the direction of $\overrightarrow{AB}$. [[2]]`,
  [R`$\overrightarrow{AB} = 3\mathbf{i} + 4\mathbf{j}$.`, R`Divide by $5$.`],
  [R`|M1|$\overrightarrow{AB}$ and its magnitude`, R`|A1|$0.6\mathbf{i} + 0.8\mathbf{j}$`], R`$0.6\mathbf{i} + 0.8\mathbf{j}$`,
  R`$\frac15(3\mathbf{i} + 4\mathbf{j})$.`),
Q('P11.4-12', 4, R`$A(1, 1)$, $B(5, 3)$ and $C(3, 7)$. Show that triangle $ABC$ is an isosceles right-angled triangle. [[4]]`,
  [R`Find all three side lengths.`, R`Check Pythagoras.`],
  [R`|M1|$\overrightarrow{AB} = 4\mathbf{i} + 2\mathbf{j}$, $\overrightarrow{BC} = -2\mathbf{i} + 4\mathbf{j}$`, R`|A1|$AB = BC = \sqrt{20}$`, R`|A1|$AC = \sqrt{40}$`, R`|A1|$20 + 20 = 40$, so right-angled at $B$`], R`$AB = BC = \sqrt{20}$, $AC = \sqrt{40}$`,
  R`Two equal sides and $AB^2 + BC^2 = AC^2$.`),
Q('P11.4-13', 4, R`$ABCD$ is a parallelogram with $A(1, 2)$, $B(4, 3)$ and $C(6, 7)$. Find the coordinates of $D$. [[3]]`,
  [R`$\overrightarrow{AD} = \overrightarrow{BC}$.`, R`$\overrightarrow{BC} = 2\mathbf{i} + 4\mathbf{j}$.`],
  [R`|B1|$\overrightarrow{BC} = 2\mathbf{i} + 4\mathbf{j}$`, R`|M1|$\mathbf{d} = \mathbf{a} + \overrightarrow{BC}$`, R`|A1|$(3, 6)$`], R`$(3, 6)$`,
  R`$(1 + 2, 2 + 4) = (3, 6)$. Check: $\mathbf{a} + \mathbf{c} = \mathbf{b} + \mathbf{d}$.`),
Q('P11.4-14', 4, R`$P$ and $Q$ have position vectors $\mathbf{p} = 3\mathbf{i} + \mathbf{j}$ and $\mathbf{q} = 7\mathbf{i} - 2\mathbf{j}$. The point $R$ satisfies $\overrightarrow{PR} = 2\overrightarrow{PQ}$. Find the position vector of $R$. [[3]]`,
  [R`$\overrightarrow{PQ} = 4\mathbf{i} - 3\mathbf{j}$.`, R`$\mathbf{r} = \mathbf{p} + 2\overrightarrow{PQ}$.`],
  [R`|B1|$\overrightarrow{PQ} = 4\mathbf{i} - 3\mathbf{j}$`, R`|M1|$\mathbf{p} + 2\overrightarrow{PQ}$`, R`|A1|$11\mathbf{i} - 5\mathbf{j}$`], R`$11\mathbf{i} - 5\mathbf{j}$`,
  R`$R$ is beyond $Q$, as far past $Q$ as $Q$ is from $P$.`),
Q('P11.4-15', 5, R`$A(2, 1)$, $B(8, 9)$ and $C(1, 8)$.

**(a)** Find $\overrightarrow{AB}$ and $|\overrightarrow{AB}|$. [[2]]

**(b)** Find the position vector of $M$, the midpoint of $AB$. [[1]]

**(c)** Show that $|\overrightarrow{CA}| = |\overrightarrow{CB}|$. [[2]]

**(d)** Find $|\overrightarrow{CM}|$ and hence the area of triangle $ABC$. [[3]]`,
  [R`Since $CA = CB$, $CM$ is perpendicular to $AB$.`, R`Area $= \frac12 \times AB \times CM$.`],
  [R`(a)|B1|$6\mathbf{i} + 8\mathbf{j}$`, R`(a)|B1|$10$`, R`(b)|B1|$5\mathbf{i} + 5\mathbf{j}$`, R`(c)|M1|$\overrightarrow{CA} = \mathbf{i} - 7\mathbf{j}$, $\overrightarrow{CB} = 7\mathbf{i} + \mathbf{j}$`, R`(c)|A1|Both $\sqrt{50}$`, R`(d)|M1|$\overrightarrow{CM} = 4\mathbf{i} - 3\mathbf{j}$`, R`(d)|A1|$|\overrightarrow{CM}| = 5$`, R`(d)|A1|Area $25$`],
  R`(a) $6\mathbf{i} + 8\mathbf{j}$, $10$ (b) $5\mathbf{i} + 5\mathbf{j}$ (d) $5$; $25$`,
  R`(d) In an isosceles triangle the line from the apex to the midpoint of the base is perpendicular to the base, so it's the height: $\frac12 \times 10 \times 5 = 25$.`)
]};

CONTENT['P11.5'] = {
notes: R`
### Proving geometric facts with vectors
- **Parallel:** show one vector is a multiple of the other.
- **Collinear:** $\overrightarrow{AB} = k\overrightarrow{AC}$ with a shared point $A$.
- **Ratios:** $\overrightarrow{AP} = \frac{m}{m + n}\overrightarrow{AB}$ for $AP : PB = m : n$.
- **Where two lines cross:** write the point two ways, using unknowns $\lambda$ and $\mu$, and compare coefficients of $\mathbf{a}$ and $\mathbf{b}$ (valid because they aren't parallel).

::: booklet
**Not in the formula booklet:** these methods.
:::

### Worked example 1
$\overrightarrow{OA} = \mathbf{a}$, $\overrightarrow{OB} = \mathbf{b}$ and $\overrightarrow{OC} = 3\mathbf{b} - 2\mathbf{a}$. Show that $A$, $B$, $C$ are collinear.
- $\overrightarrow{AB} = \mathbf{b} - \mathbf{a}$ and $\overrightarrow{AC} = 3\mathbf{b} - 3\mathbf{a} = 3\overrightarrow{AB}$. Parallel, with $A$ in common.

### Worked example 2: where two lines cross
In triangle $OAB$, $M$ is the midpoint of $OA$ and $N$ the midpoint of $AB$. $BM$ and $ON$ meet at $X$. Find $\overrightarrow{OX}$.

[[fig:P11.5-centroid]]

1. Along $ON$: $\overrightarrow{OX} = \lambda\cdot\frac12(\mathbf{a} + \mathbf{b})$.
2. Along $BM$: $\overrightarrow{OX} = \mathbf{b} + \mu\left(\frac12\mathbf{a} - \mathbf{b}\right) = \frac{\mu}{2}\mathbf{a} + (1 - \mu)\mathbf{b}$.
3. $\mathbf{a}$: $\frac{\lambda}{2} = \frac{\mu}{2}$. $\mathbf{b}$: $\frac{\lambda}{2} = 1 - \mu$. So $\lambda = \mu = \frac23$ and $\overrightarrow{OX} = \frac13(\mathbf{a} + \mathbf{b})$.

**The trap:** using the same letter for both unknowns. The two routes reach $X$ after **different** fractions of their lines.

### Watch out
- Say "since $\mathbf{a}$ and $\mathbf{b}$ are not parallel" before comparing coefficients.
`,
questions: [
Q('P11.5-1', 1, R`$\overrightarrow{AB} = 2\mathbf{a} + 6\mathbf{b}$ and $\overrightarrow{CD} = \mathbf{a} + 3\mathbf{b}$. Show that $AB$ is parallel to $CD$ and find the ratio $AB : CD$. [[2]]`,
  [R`Take out a factor of $2$.`, R`$\overrightarrow{AB} = 2\overrightarrow{CD}$.`],
  [R`|M1|$\overrightarrow{AB} = 2\overrightarrow{CD}$`, R`|A1|Parallel; $2 : 1$`], R`Parallel; $2 : 1$`,
  R`$2\mathbf{a} + 6\mathbf{b} = 2(\mathbf{a} + 3\mathbf{b})$.`),
Q('P11.5-2', 1, R`$\overrightarrow{OA} = \mathbf{a}$ and $\overrightarrow{OB} = \mathbf{b}$. $M$ is the midpoint of $AB$. Find $\overrightarrow{OM}$. [[1]]`,
  [R`$\overrightarrow{OM} = \mathbf{a} + \frac12(\mathbf{b} - \mathbf{a})$.`, R`Simplify.`],
  [R`|B1|$\frac12(\mathbf{a} + \mathbf{b})$`], R`$\frac12(\mathbf{a} + \mathbf{b})$`,
  R`$\mathbf{a} + \frac12\mathbf{b} - \frac12\mathbf{a} = \frac12\mathbf{a} + \frac12\mathbf{b}$.`),
Q('P11.5-3', 1, R`Given that $\overrightarrow{AB} = 3\overrightarrow{AC}$, what can you say about the points $A$, $B$ and $C$? [[1]]`,
  [R`The vectors are parallel and share a point.`, R`Compare the lengths.`],
  [R`|B1|Collinear, with $AB$ three times $AC$ ($C$ between $A$ and $B$)`], R`Collinear; $AB = 3AC$`,
  R`Same direction from $A$, so $C$ is a third of the way from $A$ to $B$.`),
Q('P11.5-4', 2, R`$\overrightarrow{OA} = \mathbf{a}$, $\overrightarrow{OB} = \mathbf{b}$ and $\overrightarrow{OC} = 2\mathbf{b} - \mathbf{a}$. Show that $A$, $B$ and $C$ are collinear. [[3]]`,
  [R`$\overrightarrow{AB} = \mathbf{b} - \mathbf{a}$.`, R`$\overrightarrow{AC} = 2\mathbf{b} - 2\mathbf{a}$.`],
  [R`|B1|$\overrightarrow{AB}$`, R`|B1|$\overrightarrow{AC}$`, R`|A1|$\overrightarrow{AC} = 2\overrightarrow{AB}$, with $A$ common`], R`$\overrightarrow{AC} = 2\overrightarrow{AB}$`,
  R`So $B$ is the midpoint of $AC$.`),
Q('P11.5-5', 2, R`$OABC$ is a parallelogram with $\overrightarrow{OA} = \mathbf{a}$ and $\overrightarrow{OC} = \mathbf{c}$. $P$ lies on $OB$ with $OP : PB = 1 : 2$. Find $\overrightarrow{OP}$. [[2]]`,
  [R`$\overrightarrow{OB} = \mathbf{a} + \mathbf{c}$.`, R`$\overrightarrow{OP} = \frac13\overrightarrow{OB}$.`],
  [R`|B1|$\overrightarrow{OB} = \mathbf{a} + \mathbf{c}$`, R`|A1|$\frac13(\mathbf{a} + \mathbf{c})$`], R`$\frac13(\mathbf{a} + \mathbf{c})$`,
  R`$OP$ is one part out of three.`),
Q('P11.5-6', 2, R`In triangle $OAB$, $\overrightarrow{OA} = \mathbf{a}$ and $\overrightarrow{OB} = \mathbf{b}$. $X$ lies on $AB$ with $AX : XB = 3 : 1$. Find $\overrightarrow{OX}$. [[2]]`,
  [R`$\overrightarrow{AX} = \frac34(\mathbf{b} - \mathbf{a})$.`, R`$\overrightarrow{OX} = \mathbf{a} + \overrightarrow{AX}$.`],
  [R`|M1|$\mathbf{a} + \frac34(\mathbf{b} - \mathbf{a})$`, R`|A1|$\frac14\mathbf{a} + \frac34\mathbf{b}$`], R`$\frac14\mathbf{a} + \frac34\mathbf{b}$`,
  R`$X$ is nearer $B$, so it has more of $\mathbf{b}$.`),
Q('P11.5-7', 2, R`$\mathbf{a}$ and $\mathbf{b}$ are not parallel, and $(k - 2)\mathbf{a} + 3\mathbf{b} = 4\mathbf{a} + (m + 1)\mathbf{b}$. Find $k$ and $m$. [[2]]`,
  [R`Compare coefficients of $\mathbf{a}$.`, R`Compare coefficients of $\mathbf{b}$.`],
  [R`|B1|$k = 6$`, R`|B1|$m = 2$`], R`$k = 6$, $m = 2$`,
  R`$k - 2 = 4$ and $3 = m + 1$.`),
Q('P11.5-8', 3, R`In triangle $OAB$, $\overrightarrow{OA} = \mathbf{a}$ and $\overrightarrow{OB} = \mathbf{b}$. $C$ lies on $OA$ with $\overrightarrow{OC} = \frac23\mathbf{a}$, and $D$ is the midpoint of $BC$. Find $\overrightarrow{BC}$ and $\overrightarrow{OD}$. [[3]]`,
  [R`$\overrightarrow{BC} = \overrightarrow{OC} - \overrightarrow{OB}$.`, R`$\overrightarrow{OD} = \frac12(\overrightarrow{OB} + \overrightarrow{OC})$.`],
  [R`|B1|$\overrightarrow{BC} = \frac23\mathbf{a} - \mathbf{b}$`, R`|M1|Midpoint formula`, R`|A1|$\overrightarrow{OD} = \frac13\mathbf{a} + \frac12\mathbf{b}$`], R`$\frac23\mathbf{a} - \mathbf{b}$; $\frac13\mathbf{a} + \frac12\mathbf{b}$`,
  R`$\frac12\left(\mathbf{b} + \frac23\mathbf{a}\right)$.`),
Q('P11.5-9', 3, R`$\overrightarrow{AB} = 2\mathbf{a}$, $\overrightarrow{AD} = \mathbf{b}$ and $\overrightarrow{DC} = 6\mathbf{a}$. Show that $ABCD$ is a trapezium and find the ratio $AB : DC$. [[2]]`,
  [R`$\overrightarrow{DC} = 3\overrightarrow{AB}$.`, R`One pair of parallel sides.`],
  [R`|M1|$\overrightarrow{DC} = 3\overrightarrow{AB}$, so $AB \parallel DC$`, R`|A1|Trapezium; $1 : 3$`], R`Trapezium; $1 : 3$`,
  R`$AB$ and $DC$ are parallel but of different lengths.`),
Q('P11.5-10', 3, R`$OABC$ is a parallelogram with $\overrightarrow{OA} = \mathbf{a}$ and $\overrightarrow{OC} = \mathbf{c}$. $M$ is the midpoint of $BC$. Find $\overrightarrow{AM}$. [[2]]`,
  [R`$\overrightarrow{AB} = \mathbf{c}$ and $\overrightarrow{BC} = -\mathbf{a}$.`, R`$\overrightarrow{AM} = \overrightarrow{AB} + \frac12\overrightarrow{BC}$.`],
  [R`|M1|$\overrightarrow{AB} + \frac12\overrightarrow{BC}$`, R`|A1|$\mathbf{c} - \frac12\mathbf{a}$`], R`$\mathbf{c} - \frac12\mathbf{a}$`,
  R`$\mathbf{c} + \frac12(-\mathbf{a})$.`),
Q('P11.5-11', 3, R`$\overrightarrow{OP} = 2\mathbf{a} + \mathbf{b}$, $\overrightarrow{OQ} = 5\mathbf{a} + 3\mathbf{b}$ and $\overrightarrow{OR} = 11\mathbf{a} + 7\mathbf{b}$. Show that $P$, $Q$ and $R$ are collinear and find $PQ : QR$. [[3]]`,
  [R`$\overrightarrow{PQ} = 3\mathbf{a} + 2\mathbf{b}$.`, R`$\overrightarrow{QR} = 6\mathbf{a} + 4\mathbf{b}$.`],
  [R`|B1|$\overrightarrow{PQ}$`, R`|B1|$\overrightarrow{QR} = 2\overrightarrow{PQ}$`, R`|A1|Collinear (common point $Q$); $1 : 2$`], R`Collinear; $1 : 2$`,
  R`Parallel vectors sharing $Q$.`),
Q('P11.5-12', 4, R`In triangle $OAB$, $\overrightarrow{OA} = \mathbf{a}$ and $\overrightarrow{OB} = \mathbf{b}$. $P$ is the midpoint of $OA$ and $Q$ lies on $OB$ with $OQ = \frac13 OB$. The lines $AQ$ and $BP$ meet at $X$. Find $\overrightarrow{OX}$ in terms of $\mathbf{a}$ and $\mathbf{b}$. [[5]]`,
  [R`Along $AQ$: $\overrightarrow{OX} = \mathbf{a} + s\left(\frac13\mathbf{b} - \mathbf{a}\right)$.`, R`Along $BP$: $\overrightarrow{OX} = \mathbf{b} + t\left(\frac12\mathbf{a} - \mathbf{b}\right)$.`],
  [R`|M1|First expression`, R`|M1|Second expression`, R`|M1|Compares coefficients: $1 - s = \frac{t}{2}$, $\frac{s}{3} = 1 - t$`, R`|A1|$s = \frac35$, $t = \frac45$`, R`|A1|$\overrightarrow{OX} = \frac25\mathbf{a} + \frac15\mathbf{b}$`], R`$\frac25\mathbf{a} + \frac15\mathbf{b}$`,
  R`From the second equation $s = 3 - 3t$; then $1 - 3 + 3t = \frac{t}{2}$, so $t = \frac45$, $s = \frac35$. Check: $\mathbf{b} + \frac45\left(\frac12\mathbf{a} - \mathbf{b}\right) = \frac25\mathbf{a} + \frac15\mathbf{b}$.`),
Q('P11.5-13', 4, R`$OABC$ is a trapezium with $\overrightarrow{OA} = \mathbf{a}$, $\overrightarrow{OC} = \mathbf{c}$ and $\overrightarrow{CB} = 2\mathbf{a}$. $M$ is the midpoint of $AB$. Find $\overrightarrow{OM}$ and $\overrightarrow{CM}$. [[3]]`,
  [R`$\overrightarrow{OB} = \mathbf{c} + 2\mathbf{a}$.`, R`$\overrightarrow{OM} = \frac12(\overrightarrow{OA} + \overrightarrow{OB})$.`],
  [R`|B1|$\overrightarrow{OB} = 2\mathbf{a} + \mathbf{c}$`, R`|A1|$\overrightarrow{OM} = \frac32\mathbf{a} + \frac12\mathbf{c}$`, R`|A1|$\overrightarrow{CM} = \frac32\mathbf{a} - \frac12\mathbf{c}$`], R`$\frac32\mathbf{a} + \frac12\mathbf{c}$; $\frac32\mathbf{a} - \frac12\mathbf{c}$`,
  R`$\overrightarrow{CM} = \overrightarrow{OM} - \mathbf{c}$.`),
Q('P11.5-14', 4, R`$\mathbf{a}$ and $\mathbf{b}$ are not parallel. $\overrightarrow{OP} = \mathbf{a} + 2\mathbf{b}$ and $\overrightarrow{OQ} = 3\mathbf{a} - \mathbf{b}$. The point $R$ with $\overrightarrow{OR} = \lambda\mathbf{a} + 5\mathbf{b}$ lies on the line $PQ$. Find $\lambda$. [[4]]`,
  [R`$\overrightarrow{PQ} = 2\mathbf{a} - 3\mathbf{b}$.`, R`$\overrightarrow{PR} = (\lambda - 1)\mathbf{a} + 3\mathbf{b}$ must be a multiple of $\overrightarrow{PQ}$.`],
  [R`|B1|$\overrightarrow{PQ} = 2\mathbf{a} - 3\mathbf{b}$`, R`|M1|$\overrightarrow{PR} = k\overrightarrow{PQ}$`, R`|A1|$k = -1$`, R`|A1|$\lambda = -1$`], R`$\lambda = -1$`,
  R`$\mathbf{b}$: $3 = -3k$, so $k = -1$. $\mathbf{a}$: $\lambda - 1 = 2k = -2$, so $\lambda = -1$.`),
Q('P11.5-15', 5, R`In triangle $OAB$, $\overrightarrow{OA} = \mathbf{a}$ and $\overrightarrow{OB} = \mathbf{b}$. $M$ is the midpoint of $OB$ and $N$ lies on $OA$ with $ON = \frac34 OA$. The lines $AM$ and $BN$ meet at $X$.

**(a)** Find $\overrightarrow{AM}$ and $\overrightarrow{BN}$. [[2]]

**(b)** Write $\overrightarrow{OX}$ in two ways, using unknowns $s$ and $t$. [[2]]

**(c)** Find $\overrightarrow{OX}$. [[3]]

**(d)** Find the ratio $AX : XM$. [[1]]`,
  [R`$\overrightarrow{OX} = \mathbf{a} + s\overrightarrow{AM} = \mathbf{b} + t\overrightarrow{BN}$.`, R`Compare coefficients, since $\mathbf{a}$ and $\mathbf{b}$ aren't parallel.`],
  [R`(a)|B1|$\overrightarrow{AM} = \frac12\mathbf{b} - \mathbf{a}$`, R`(a)|B1|$\overrightarrow{BN} = \frac34\mathbf{a} - \mathbf{b}$`, R`(b)|B1|$(1 - s)\mathbf{a} + \frac{s}{2}\mathbf{b}$`, R`(b)|B1|$\frac{3t}{4}\mathbf{a} + (1 - t)\mathbf{b}$`, R`(c)|M1|$1 - s = \frac{3t}{4}$, $\frac{s}{2} = 1 - t$`, R`(c)|A1|$s = \frac25$, $t = \frac45$`, R`(c)|A1|$\frac35\mathbf{a} + \frac15\mathbf{b}$`, R`(d)|B1|$2 : 3$`],
  R`(c) $\frac35\mathbf{a} + \frac15\mathbf{b}$ (d) $2 : 3$`,
  R`(c) $s = 2 - 2t$, so $1 - 2 + 2t = \frac{3t}{4}$, $t = \frac45$, $s = \frac25$.

(d) $\overrightarrow{AX} = \frac25\overrightarrow{AM}$, so $AX : XM = 2 : 3$.`)
]};

CONTENT['P11.6'] = {
notes: R`
### Vectors in mechanics
- **Displacement**, **velocity**, **acceleration** and **force** are vectors.
- **Distance** and **speed** are their magnitudes: speed $= |\mathbf{v}|$.
- For constant velocity $\mathbf{v}$, starting at $\mathbf{r}_0$: $\mathbf{r} = \mathbf{r}_0 + \mathbf{v}t$.
- The **resultant** of several forces is their sum. In **equilibrium** the resultant is $\mathbf{0}$.

::: booklet
**Not in the formula booklet:** these results.
:::

### Worked example 1
A particle moves with velocity $(3\mathbf{i} + 4\mathbf{j})$ m s⁻¹. Find its speed and its displacement after $6$ s.
- Speed $= \sqrt{9 + 16} = 5$ m s⁻¹. Displacement $= 6(3\mathbf{i} + 4\mathbf{j}) = (18\mathbf{i} + 24\mathbf{j})$ m.

### Worked example 2: position at time $t$
A boat starts at $(2\mathbf{i} + \mathbf{j})$ km and moves with velocity $(3\mathbf{i} - 2\mathbf{j})$ km h⁻¹. When is it due east of the origin?
1. $\mathbf{r} = (2 + 3t)\mathbf{i} + (1 - 2t)\mathbf{j}$.
2. Due east means the $\mathbf{j}$ component is $0$: $t = 0.5$ h, at $3.5\mathbf{i}$ km.

[[fig:P11.6-boat]]

**The trap:** answering "speed" with a vector, or "velocity" with a number. Speed is a scalar; velocity has a direction.

### Watch out
- "Due north of $P$" means the same $\mathbf{i}$ component as $P$ and a larger $\mathbf{j}$ component.
`,
questions: [
Q('P11.6-1', 1, R`A particle moves with velocity $(5\mathbf{i} - 12\mathbf{j})$ m s⁻¹. Find its speed. [[1]]`,
  [R`Speed $= |\mathbf{v}|$.`, R`$\sqrt{25 + 144}$.`],
  [R`|B1|$13$ m s⁻¹`], R`$13$ m s⁻¹`,
  R`Speed $= |\mathbf{v}| = \sqrt{5^2 + 12^2} = \sqrt{169} = 13$ m s⁻¹.`),
Q('P11.6-2', 1, R`Find the resultant of the forces $(2\mathbf{i} + 3\mathbf{j})$ N and $(4\mathbf{i} - \mathbf{j})$ N. [[1]]`,
  [R`Add the forces.`, R`Collect $\mathbf{i}$ and $\mathbf{j}$.`],
  [R`|B1|$(6\mathbf{i} + 2\mathbf{j})$ N`], R`$(6\mathbf{i} + 2\mathbf{j})$ N`,
  R`The resultant is the vector sum.`),
Q('P11.6-3', 1, R`A particle moves with constant velocity $(2\mathbf{i} + \mathbf{j})$ m s⁻¹. Find its displacement after $4$ s. [[1]]`,
  [R`Displacement $= $ velocity $\times$ time.`, R`$4(2\mathbf{i} + \mathbf{j})$.`],
  [R`|B1|$(8\mathbf{i} + 4\mathbf{j})$ m`], R`$(8\mathbf{i} + 4\mathbf{j})$ m`,
  R`$\mathbf{s} = \mathbf{v}t$.`),
Q('P11.6-4', 2, R`A particle moves at $10$ m s⁻¹ in the direction of $3\mathbf{i} + 4\mathbf{j}$. Find its velocity. [[2]]`,
  [R`Unit vector $\frac15(3\mathbf{i} + 4\mathbf{j})$.`, R`Multiply by $10$.`],
  [R`|M1|$10 \times \frac{3\mathbf{i} + 4\mathbf{j}}{5}$`, R`|A1|$(6\mathbf{i} + 8\mathbf{j})$ m s⁻¹`], R`$(6\mathbf{i} + 8\mathbf{j})$ m s⁻¹`,
  R`$|3\mathbf{i} + 4\mathbf{j}| = 5$, so scale by $2$.`),
Q('P11.6-5', 2, R`A boat's position at time $t$ hours is $\mathbf{r} = (\mathbf{i} + 2\mathbf{j}) + t(3\mathbf{i} - \mathbf{j})$ km. Find its position when $t = 2$ and its speed. [[2]]`,
  [R`Substitute $t = 2$.`, R`Speed $= |3\mathbf{i} - \mathbf{j}|$.`],
  [R`|B1|$7\mathbf{i}$ km`, R`|B1|$\sqrt{10}$ km h⁻¹`], R`$7\mathbf{i}$ km; $\sqrt{10} \approx 3.16$ km h⁻¹`,
  R`$\mathbf{i} + 2\mathbf{j} + 6\mathbf{i} - 2\mathbf{j} = 7\mathbf{i}$.`),
Q('P11.6-6', 2, R`Forces $(3\mathbf{i} + 2\mathbf{j})$ N, $(-\mathbf{i} + 5\mathbf{j})$ N and $\mathbf{F}$ act on a particle in equilibrium. Find $\mathbf{F}$. [[2]]`,
  [R`The resultant is $\mathbf{0}$.`, R`$\mathbf{F} = -(2\mathbf{i} + 7\mathbf{j})$.`],
  [R`|M1|Sum $= \mathbf{0}$`, R`|A1|$(-2\mathbf{i} - 7\mathbf{j})$ N`], R`$(-2\mathbf{i} - 7\mathbf{j})$ N`,
  R`The first two add to $2\mathbf{i} + 7\mathbf{j}$, so $\mathbf{F}$ must cancel it.`),
Q('P11.6-7', 2, R`Find the magnitude of the resultant of forces of $5\mathbf{i}$ N and $12\mathbf{j}$ N, and the angle it makes with $\mathbf{i}$. [[2]]`,
  [R`Resultant $5\mathbf{i} + 12\mathbf{j}$.`, R`$\tan\theta = \frac{12}{5}$.`],
  [R`|B1|$13$ N`, R`|B1|$67.4°$`], R`$13$ N at $67.4°$ to $\mathbf{i}$`,
  R`$\sqrt{25 + 144} = 13$; $\tan^{-1} 2.4 = 67.4°$.`),
Q('P11.6-8', 3, R`A ship leaves the origin with velocity $(4\mathbf{i} + 3\mathbf{j})$ km h⁻¹. Find its position after $2.5$ hours and the distance it has travelled. [[3]]`,
  [R`$\mathbf{r} = 2.5(4\mathbf{i} + 3\mathbf{j})$.`, R`Distance $=$ speed $\times$ time.`],
  [R`|M1|$2.5\mathbf{v}$`, R`|A1|$(10\mathbf{i} + 7.5\mathbf{j})$ km`, R`|A1|$12.5$ km`], R`$(10\mathbf{i} + 7.5\mathbf{j})$ km; $12.5$ km`,
  R`Speed $5$ km h⁻¹, so $5 \times 2.5 = 12.5$ km.`),
Q('P11.6-9', 3, R`A particle moves with constant velocity from $A(2, -1)$ to $B(10, 5)$ in $4$ s (distances in metres). Find its velocity and its speed. [[3]]`,
  [R`$\overrightarrow{AB} = 8\mathbf{i} + 6\mathbf{j}$.`, R`Divide by $4$.`],
  [R`|M1|$\overrightarrow{AB} \div 4$`, R`|A1|$(2\mathbf{i} + 1.5\mathbf{j})$ m s⁻¹`, R`|A1|$2.5$ m s⁻¹`], R`$(2\mathbf{i} + 1.5\mathbf{j})$ m s⁻¹; $2.5$ m s⁻¹`,
  R`$|2\mathbf{i} + 1.5\mathbf{j}| = \sqrt{4 + 2.25} = 2.5$.`),
Q('P11.6-10', 3, R`Ship $P$ has position $(2\mathbf{i} + 3\mathbf{j}) + t(\mathbf{i} + 2\mathbf{j})$ km and ship $Q$ has position $(8\mathbf{i} + \mathbf{j}) + t(-\mathbf{i} + 3\mathbf{j})$ km at time $t$ hours. Show that the ships never collide. [[3]]`,
  [R`To collide they must be at the same place at the same time.`, R`Compare the $\mathbf{i}$ and $\mathbf{j}$ components.`],
  [R`|M1|$\mathbf{i}$: $2 + t = 8 - t$, so $t = 3$`, R`|M1|$\mathbf{j}$: $3 + 2t = 1 + 3t$, so $t = 2$`, R`|A1|Different times, so no collision`], R`The times don't agree`,
  R`The $\mathbf{i}$ components match only at $t = 3$ and the $\mathbf{j}$ components only at $t = 2$.`),
Q('P11.6-11', 3, R`The resultant of $(2\mathbf{i} - 3\mathbf{j})$ N and $(p\mathbf{i} + q\mathbf{j})$ N is $(5\mathbf{i} + \mathbf{j})$ N. Find $p$, $q$ and the magnitude of the second force. [[3]]`,
  [R`$2 + p = 5$, $-3 + q = 1$.`, R`Then find $|3\mathbf{i} + 4\mathbf{j}|$.`],
  [R`|B1|$p = 3$`, R`|B1|$q = 4$`, R`|B1|$5$ N`], R`$p = 3$, $q = 4$; $5$ N`,
  R`The second force is $3\mathbf{i} + 4\mathbf{j}$, magnitude $5$ N.`),
Q('P11.6-12', 4, R`A boat's position at time $t$ hours is $\mathbf{r} = (3 + 2t)\mathbf{i} + (-4 + 3t)\mathbf{j}$ km. Find when and where it is north-east of the origin. [[3]]`,
  [R`North-east of the origin means the $\mathbf{i}$ and $\mathbf{j}$ components are equal and positive.`, R`$3 + 2t = -4 + 3t$.`],
  [R`|M1|Equal components`, R`|A1|$t = 7$`, R`|A1|$(17\mathbf{i} + 17\mathbf{j})$ km`], R`$t = 7$; $(17\mathbf{i} + 17\mathbf{j})$ km`,
  R`At $t = 7$ both components are $17 > 0$.`),
Q('P11.6-13', 4, R`Forces $\mathbf{F}_1 = (2\mathbf{i} + a\mathbf{j})$ N and $\mathbf{F}_2 = (b\mathbf{i} - 3\mathbf{j})$ N have a resultant parallel to $\mathbf{i} + 2\mathbf{j}$ with magnitude $\sqrt{45}$ N, pointing in the direction of $\mathbf{i} + 2\mathbf{j}$. Find $a$ and $b$. [[4]]`,
  [R`Resultant $= k(\mathbf{i} + 2\mathbf{j})$ with $k\sqrt5 = \sqrt{45}$.`, R`$k = 3$, so the resultant is $3\mathbf{i} + 6\mathbf{j}$.`],
  [R`|M1|$k(\mathbf{i} + 2\mathbf{j})$`, R`|A1|$k = 3$`, R`|A1|$b = 1$`, R`|A1|$a = 9$`], R`$a = 9$, $b = 1$`,
  R`$2 + b = 3$ and $a - 3 = 6$.`),
Q('P11.6-14', 4, R`At 09:00 a ship is at $(2\mathbf{i} + 5\mathbf{j})$ km, moving with velocity $(4\mathbf{i} - \mathbf{j})$ km h⁻¹. A lighthouse is at $(10\mathbf{i} + \mathbf{j})$ km. Find the time when the ship is due north of the lighthouse, and its distance from the lighthouse then. [[3]]`,
  [R`$\mathbf{r} = (2 + 4t)\mathbf{i} + (5 - t)\mathbf{j}$.`, R`Due north: $2 + 4t = 10$.`],
  [R`|M1|$2 + 4t = 10$`, R`|A1|11:00`, R`|A1|$2$ km`], R`11:00; $2$ km`,
  R`$t = 2$: the ship is at $10\mathbf{i} + 3\mathbf{j}$, which is $2$ km north of the lighthouse.`),
Q('P11.6-15', 5, R`A particle $P$ moves with constant velocity. At $t = 0$ it is at $(-3\mathbf{i} + 2\mathbf{j})$ m and at $t = 4$ s it is at $(5\mathbf{i} - 4\mathbf{j})$ m.

**(a)** Find the velocity of $P$. [[2]]

**(b)** Find the speed of $P$. [[1]]

**(c)** Find the position vector of $P$ at time $t$. [[1]]

**(d)** Find when and where $P$ crosses the $x$-axis ($\mathbf{i}$ direction). [[2]]

**(e)** Find the distance of $P$ from the origin when $t = 2$. [[2]]`,
  [R`Velocity $=$ change in position $\div$ time.`, R`On the $x$-axis the $\mathbf{j}$ component is $0$.`],
  [R`(a)|M1|$\frac{(5\mathbf{i} - 4\mathbf{j}) - (-3\mathbf{i} + 2\mathbf{j})}{4}$`, R`(a)|A1|$(2\mathbf{i} - 1.5\mathbf{j})$ m s⁻¹`, R`(b)|B1|$2.5$ m s⁻¹`, R`(c)|B1|$(-3 + 2t)\mathbf{i} + (2 - 1.5t)\mathbf{j}$`, R`(d)|M1|$2 - 1.5t = 0$`, R`(d)|A1|$t = \frac43$ s, at $-\frac13\mathbf{i}$ m`, R`(e)|M1|$\mathbf{r} = \mathbf{i} - \mathbf{j}$`, R`(e)|A1|$\sqrt2$ m`],
  R`(a) $(2\mathbf{i} - 1.5\mathbf{j})$ m s⁻¹ (b) $2.5$ m s⁻¹ (d) $t = \frac43$ s at $-\frac13\mathbf{i}$ (e) $\sqrt2$ m`,
  R`(a) $\frac{8\mathbf{i} - 6\mathbf{j}}{4}$.

(d) $t = \frac43$: $x = -3 + \frac83 = -\frac13$.

(e) At $t = 2$: $\mathbf{r} = \mathbf{i} - \mathbf{j}$, distance $\sqrt2$ m.`)
]};
