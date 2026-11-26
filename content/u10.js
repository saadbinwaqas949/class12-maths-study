/* Unit 10 · Solution of Trigonometric Equations */
M12.addConcepts(10, String.raw`
#C u10-trig-eq Principal and general solutions
pre: f-quadrants, f-radians
R: Solve for the angles in $[0,2\pi]$ first (the principal solutions), then add whole periods: $2n\pi$ for $\sin,\cos,\sec,\csc$ and $n\pi$ for $\tan,\cot$ ($n\in\Z$).
F: $$\text{period of }\sin,\cos,\sec,\csc=2\pi;\qquad \text{period of }\tan,\cot=\pi$$
B: **Steps for $\sin x=k$, $\cos x=k$ or $\tan x=k$:**
1. Find the reference angle $\alpha$ from $|k|$.
2. Decide the quadrants from the sign of $k$ (ASTC).
3. Write the solutions in $[0,2\pi]$: Q I $\alpha$, Q II $\pi-\alpha$, Q III $\pi+\alpha$, Q IV $2\pi-\alpha$.
4. Add $2n\pi$ (or $n\pi$ for $\tan$) to each.
X: Compact general forms: $\sin x=\sin\alpha\Rightarrow x=n\pi+(-1)^n\alpha$; $\cos x=\cos\alpha\Rightarrow x=2n\pi\pm\alpha$; $\tan x=\tan\alpha\Rightarrow x=n\pi+\alpha$. Both styles describe the same set of angles.
When the answer has the shape $\pm\alpha$ in every quadrant (for example $\tan^2x=3$), it collapses to $x=n\pi\pm\alpha$.
E: $\sin x=-\frac{\sqrt3}2$: reference $\frac\pi3$, Q III and Q IV: $x=\frac{4\pi}3,\frac{5\pi}3$, general $x=\frac{4\pi}3+2n\pi$ or $\frac{5\pi}3+2n\pi$.
M: Forgetting the second quadrant solution, or adding $n\pi$ to a sine solution.

#C u10-identities Equations that need identities or factorisation
pre: u10-trig-eq, f-trig-identities, f-compound, f-zero-product
R: Use identities to reduce the equation to **one** trig ratio (or to a product), factorise, and solve each factor separately.
B: Common moves:
- replace $\csc^2x$ by $1+\cot^2x$, $\sec^2x$ by $1+\tan^2x$, $\cos^2x$ by $1-\sin^2x$;
- expand $\sin2x=2\sin x\cos x$, $\cos2x=2\cos^2x-1$;
- recognise compound angles: $\sin3x\cos x+\cos3x\sin x=\sin4x$;
- take out common factors: $\sin x(\sqrt2\cos x-1)=0$;
- treat it as a quadratic in $\cos x$ or $\tan x$ and factorise.
**Never divide by** $\sin x$ or $\cos x$ unless you have checked it cannot be zero; take it out as a factor instead.
X: For an equation in a multiple angle such as $\sin4x=k$, solve for $4x$ first (all solutions, with $+2n\pi$), then divide by 4.
E: $2\cos^2x-3\cos x+1=0\Rightarrow(2\cos x-1)(\cos x-1)=0\Rightarrow\cos x=\frac12$ or $1$.
M: Dividing by $\sin x$ and losing the solutions $x=n\pi$.

#C u10-extraneous Squaring and extraneous roots
pre: u10-trig-eq
R: Squaring both sides can create false solutions, so every root found after squaring must be checked in the original equation.
B: $\sqrt3\cos x-1=\sin x$ squared gives an equation also satisfied by solutions of $\sqrt3\cos x-1=-\sin x$. Substitute each candidate back and discard those that fail.
Also discard any root that makes a denominator zero (for example $\sin x=0$ in an equation containing $\cot x$ or $\frac{1}{\sin x}$).

#C u10-graphical Graphical solution of trigonometric equations
pre: u10-trig-eq, f-functions
R: To solve $f(x)=g(x)$ graphically, draw $y=f(x)$ and $y=g(x)$ on the same axes; the $x$-coordinates of the intersection points are the solutions.
B: Useful observations before plotting:
- range limits: $|\sin|\le1$, so $\sin3x=\frac x2$ can only hold where $\left|\frac x2\right|\le1$, i.e. $|x|\le2$;
- symmetry: if both sides are odd functions, the solutions come in $\pm$ pairs (and $x=0$ may be one);
- calculators must be in radian mode.
Read each intersection to about two decimal places; a sign-change check on $f(x)-g(x)$ confirms it.

#C u10-applications Real-life trigonometric problems
pre: f-pythagoras, u9-sum-formulas
R: Draw a diagram, mark right angles, write each angle with $\tan=\frac{\text{opposite}}{\text{adjacent}}$, and combine angles with inverse-trig sum/difference formulas when an object "subtends" an angle.
B: - **Angle of elevation:** $\tan\theta=\frac{\text{height}}{\text{distance}}$.
- **Angle subtended by an object** of height from $h_1$ to $h_2$ seen from distance $d$: $\theta=\tan^{-1}\frac{h_2}d-\tan^{-1}\frac{h_1}d$.
- **Work done** by a force $F$ moving through $d$ at angle $\theta$: $W=Fd\cos\theta$.
E: From 20 m away, the top of a tree is at $30^\circ$: height $=20\tan30^\circ=\frac{20}{\sqrt3}\approx11.55$ m.
`);

M12.addQuestions(10, String.raw`
#Q 10.1 1
Q: Solve $\sin x=\dfrac{1}{\sqrt2}$.
T: u10-trig-eq
S: Reference angle $\frac\pi4$; sine is positive in Q I and Q II.
C: f-quadrants
S: In $[0,2\pi]$: $x=\frac\pi4$ and $x=\pi-\frac\pi4=\frac{3\pi}4$.
S: Period $2\pi$: general solution $\left\{\frac\pi4+2n\pi\right\}\cup\left\{\frac{3\pi}4+2n\pi\right\}$, $n\in\Z$.
C: u10-trig-eq
A: $x=\frac\pi4+2n\pi$ or $x=\frac{3\pi}4+2n\pi$, $n\in\Z$.

#Q 10.1 2
Q: Solve $2\cos x=-1$.
T: u10-trig-eq
S: $\cos x=-\frac12$: reference $\frac\pi3$; cosine is negative in Q II and Q III.
C: f-quadrants
S: $x=\pi-\frac\pi3=\frac{2\pi}3$ and $x=\pi+\frac\pi3=\frac{4\pi}3$.
C: u10-trig-eq
A: $x=\frac{2\pi}3+2n\pi$ or $x=\frac{4\pi}3+2n\pi$, $n\in\Z$.

#Q 10.1 3
Q: Solve $3\tan^2x=1$.
T: u10-trig-eq
S: $\tan x=\pm\frac1{\sqrt3}$; reference angle $\frac\pi6$.
S: $\tan x=\frac1{\sqrt3}$: $x=\frac\pi6+n\pi$. $\ \tan x=-\frac1{\sqrt3}$: $x=\frac{5\pi}6+n\pi$ (period $\pi$).
C: u10-trig-eq
S: Together: $x=n\pi\pm\frac\pi6$. In $[0,2\pi]$: $\frac\pi6,\frac{5\pi}6,\frac{7\pi}6,\frac{11\pi}6$.
A: $x=n\pi\pm\frac\pi6$, $n\in\Z$.

#Q 10.1 4
Q: Solve $9-3\csc^2x=5$.
T: u10-trig-eq, f-trig-ratios
S: $3\csc^2x=4\Rightarrow\csc^2x=\frac43\Rightarrow\sin^2x=\frac34\Rightarrow\sin x=\pm\frac{\sqrt3}2$.
C: f-trig-ratios
S: Reference $\frac\pi3$ in all four quadrants: $\frac\pi3,\frac{2\pi}3,\frac{4\pi}3,\frac{5\pi}3$.
C: u10-trig-eq
A: $x=n\pi\pm\frac\pi3$, $n\in\Z$.

#Q 10.1 5
Q: Solve $2\cos^2x-3\cos x+1=0$.
T: u10-identities, f-factor
S: Quadratic in $\cos x$: $(2\cos x-1)(\cos x-1)=0$.
C: f-factor
S: $\cos x=1\Rightarrow x=0$; $\ \cos x=\frac12\Rightarrow x=\frac\pi3,\frac{5\pi}3$.
C: u10-trig-eq
A: $x=2n\pi$, $x=\frac\pi3+2n\pi$ or $x=\frac{5\pi}3+2n\pi$, $n\in\Z$.

#Q 10.1 6
Q: Solve $\sin^2x-3\cos^2x=0$.
T: u10-identities
S: If $\cos x=0$ then $\sin^2x=1\ne0$, so $\cos x\ne0$ and we may divide by $\cos^2x$: $\tan^2x=3$.
W: Check before dividing, so that no solution is lost.
C: u10-identities
S: $\tan x=\pm\sqrt3\Rightarrow x=\frac\pi3,\frac{2\pi}3,\frac{4\pi}3,\frac{5\pi}3$.
A: $x=n\pi\pm\frac\pi3$, $n\in\Z$.

#Q 10.1 7
Q: Solve $\sqrt2\cos x\sin x-\sin x=0$.
T: u10-identities, f-zero-product
S: Factor out $\sin x$: $\sin x\,(\sqrt2\cos x-1)=0$.
C: f-zero-product
S: $\sin x=0\Rightarrow x=0,\pi$ (general $n\pi$). $\ \cos x=\frac1{\sqrt2}\Rightarrow x=\frac\pi4,\frac{7\pi}4$.
C: u10-trig-eq
A: $x=n\pi$, $x=\frac\pi4+2n\pi$ or $x=\frac{7\pi}4+2n\pi$, $n\in\Z$.

#Q 10.1 8
Q: Solve $3\cot^2x+3\csc^2x=5$.
T: u10-identities
S: $\csc^2x=1+\cot^2x$: $3\cot^2x+3+3\cot^2x=5\Rightarrow\cot^2x=\frac13$.
C: f-trig-identities
S: $\cot x=\pm\frac1{\sqrt3}$, i.e. $\tan x=\pm\sqrt3$: $x=\frac\pi3,\frac{2\pi}3,\frac{4\pi}3,\frac{5\pi}3$.
C: u10-trig-eq
A: $x=n\pi\pm\frac\pi3$, $n\in\Z$.

#Q 10.1 9
Q: Solve $\sin2x-\sqrt3\cos x=0$.
T: u10-identities
S: $2\sin x\cos x-\sqrt3\cos x=0\Rightarrow\cos x\,(2\sin x-\sqrt3)=0$.
C: f-compound, f-zero-product
S: $\cos x=0\Rightarrow x=\frac\pi2,\frac{3\pi}2$ (general $\frac\pi2+n\pi$). $\ \sin x=\frac{\sqrt3}2\Rightarrow x=\frac\pi3,\frac{2\pi}3$.
C: u10-trig-eq
A: $x=\frac\pi2+n\pi$, $x=\frac\pi3+2n\pi$ or $x=\frac{2\pi}3+2n\pi$, $n\in\Z$.

#Q 10.1 10
Q: Solve $\cos2x=\cos x$.
T: u10-identities
S: $2\cos^2x-1=\cos x\Rightarrow2\cos^2x-\cos x-1=0\Rightarrow(2\cos x+1)(\cos x-1)=0$.
C: f-compound, f-factor
S: $\cos x=1\Rightarrow x=0$; $\ \cos x=-\frac12\Rightarrow x=\frac{2\pi}3,\frac{4\pi}3$.
C: u10-trig-eq
S: These are exactly the multiples of $\frac{2\pi}3$.
A: $x=\frac{2n\pi}{3}$, $n\in\Z$.

#Q 10.1 11
Q: Solve $\tan^2x-(\sqrt3+1)\tan x=-\sqrt3$.
T: u10-identities, f-factor
S: $\tan^2x-(\sqrt3+1)\tan x+\sqrt3=0\Rightarrow(\tan x-1)(\tan x-\sqrt3)=0$.
W: The two numbers with sum $\sqrt3+1$ and product $\sqrt3$ are $1$ and $\sqrt3$.
C: f-factor
S: $\tan x=1\Rightarrow x=\frac\pi4+n\pi$; $\ \tan x=\sqrt3\Rightarrow x=\frac\pi3+n\pi$.
C: u10-trig-eq
A: $x=\frac\pi4+n\pi$ or $x=\frac\pi3+n\pi$, $n\in\Z$.

#Q 10.1 12
Q: Solve $\tan x=\sin2x$.
T: u10-identities
S: $\dfrac{\sin x}{\cos x}=2\sin x\cos x\Rightarrow\sin x=2\sin x\cos^2x$ (with $\cos x\ne0$) $\Rightarrow\sin x\,(1-2\cos^2x)=0$.
C: f-compound
!:
S: $\sin x=0\Rightarrow x=n\pi$. $\ 1-2\cos^2x=0\Rightarrow-\cos2x=0\Rightarrow2x=\frac\pi2+n\pi\Rightarrow x=\frac\pi4+\frac{n\pi}2$.
C: u10-trig-eq
A: $x=n\pi$ or $x=\frac\pi4+\frac{n\pi}2$, $n\in\Z$.

#Q 10.1 13
Q: Solve $\sin3x=\cos2x$.
T: u10-identities, f-quadrants
S: Write the cosine as a sine: $\cos2x=\sin\left(\frac\pi2-2x\right)$, so $\sin3x=\sin\left(\frac\pi2-2x\right)$.
C: f-quadrants
S: Equal sines: either $3x=\frac\pi2-2x+2n\pi$ or $3x=\pi-\left(\frac\pi2-2x\right)+2n\pi$.
W: $\sin A=\sin B$ when $A=B+2n\pi$ or $A=\pi-B+2n\pi$.
!:
S: First: $5x=\frac\pi2+2n\pi\Rightarrow x=\frac\pi{10}+\frac{2n\pi}5$. Second: $x=\frac\pi2+2n\pi$, which is already included in the first family ($n=1$).
S: In $[0,2\pi]$: $\frac\pi{10},\frac\pi2,\frac{9\pi}{10},\frac{13\pi}{10},\frac{17\pi}{10}$. (Check: $\sin\frac{27\pi}{10}=\cos\frac{18\pi}{10}\approx0.809$ ✓.)
A: $x=\frac{\pi}{10}+\frac{2n\pi}{5}$, $n\in\Z$.

#Q 10.1 15
Q: Solve $\sin^3x\cos x+\cos^3x\sin x=\dfrac12$.
T: u10-identities
S: Factor: $\sin x\cos x(\sin^2x+\cos^2x)=\sin x\cos x=\frac12\sin2x$.
C: f-compound, f-trig-identities
S: $\frac12\sin2x=\frac12\Rightarrow\sin2x=1\Rightarrow2x=\frac\pi2+2n\pi$.
C: u10-trig-eq
A: $x=\frac\pi4+n\pi$, $n\in\Z$.

#Q 10.1 16
Q: Solve $\sin^32x\cos2x-\cos^32x\sin2x=\dfrac{\sqrt2}8$.
T: u10-identities
S: Factor: $\sin2x\cos2x\,(\sin^22x-\cos^22x)=\tfrac12\sin4x\cdot(-\cos4x)=-\tfrac14\sin8x$.
W: $\sin^2A-\cos^2A=-\cos2A$ and $\sin A\cos A=\frac12\sin2A$, used twice.
C: f-compound
!:
S: $-\tfrac14\sin8x=\tfrac{\sqrt2}8\Rightarrow\sin8x=-\tfrac{\sqrt2}2$: $\ 8x=\frac{5\pi}4+2n\pi$ or $8x=\frac{7\pi}4+2n\pi$.
C: u10-trig-eq
A: $x=\frac{5\pi}{32}+\frac{n\pi}{4}$ or $x=\frac{7\pi}{32}+\frac{n\pi}{4}$, $n\in\Z$.

#Q 10.1 17
Q: Solve $\sin3x\cos x+\cos3x\sin x=\dfrac{1}{\sqrt2}$.
T: u10-identities
S: The left side is $\sin(3x+x)=\sin4x$.
C: f-compound
S: $\sin4x=\frac1{\sqrt2}\Rightarrow4x=\frac\pi4+2n\pi$ or $4x=\frac{3\pi}4+2n\pi$.
C: u10-trig-eq
A: $x=\frac{\pi}{16}+\frac{n\pi}{2}$ or $x=\frac{3\pi}{16}+\frac{n\pi}{2}$, $n\in\Z$.

#Q 10.1 18
Q: Solve $\dfrac{\sin x}{1+\cos x}+\dfrac{1+\cos x}{\sin x}=4$.
T: u10-identities, f-fractions
S: Common denominator: $\dfrac{\sin^2x+(1+\cos x)^2}{(1+\cos x)\sin x}=\dfrac{\sin^2x+1+2\cos x+\cos^2x}{(1+\cos x)\sin x}$.
C: f-fractions
S: Numerator $=2+2\cos x=2(1+\cos x)$, so the left side is $\dfrac{2}{\sin x}$.
C: f-trig-identities
S: $\dfrac2{\sin x}=4\Rightarrow\sin x=\frac12\Rightarrow x=\frac\pi6,\frac{5\pi}6$ (neither makes $\sin x$ or $1+\cos x$ zero).
C: u10-extraneous
A: $x=\frac\pi6+2n\pi$ or $x=\frac{5\pi}6+2n\pi$, $n\in\Z$.

#Q 10.2 6
Q: Solve graphically: $\sin3x=\dfrac x2$.
T: u10-graphical
S: Since $|\sin3x|\le1$, solutions need $\left|\frac x2\right|\le1$, i.e. $-2\le x\le2$.
C: u10-graphical
S: Draw $y=\sin3x$ (period $\frac{2\pi}3\approx2.09$) and the line $y=\frac x2$ on $[-2,2]$.
P: {"x":[-2.4,2.4],"y":[-1.3,1.3],"step":0.5,"ystep":0.5,"fn":[{"f":"sin(3*x)","label":"y = sin 3x","at":0.35},{"f":"x/2","label":"y = x/2","at":2},{"f":"0","dash":true,"col":5}],"pts":[[-0.8929,-0.4464,"−0.89",{"dy":18}],[0,0,"0",{"dx":-14,"dy":16}],[0.8929,0.4464,"0.89"]]}
S: Both sides are odd, so the intersections are symmetric: $x=0$ and $x\approx\pm0.89$. (Check: $\sin2.679\approx0.446\approx\frac{0.893}2$.)
A: $x\approx-0.89,\ 0,\ 0.89$.

#Q 10.2 7
Q: Solve graphically: $\sin2x=2\cos3x$, $x\in[0,\pi]$.
T: u10-graphical
S: Draw $y=\sin2x$ and $y=2\cos3x$ on $[0,\pi]$ and read the crossings.
C: u10-graphical
P: {"x":[0,3.3],"y":[-2.3,2.3],"xpi":0.5,"ystep":0.5,"fn":[{"f":"sin(2*x)","label":"y = sin 2x","at":0.75},{"f":"2*cos(3*x)","label":"y = 2cos 3x","at":2.05}],"pts":[[0.4011,0.7184,"0.40"],[1.5708,0,"1.57"],[2.7405,-0.7184,"2.74"]]}
S: Intersections at $x\approx0.40$, $1.57$ and $2.74$. ($x=\frac\pi2$ is exact: both sides are 0 there.)
A: $x\approx0.40,\ 1.57,\ 2.74$.

#Q 10.2 8
Q: Solve graphically: $\sin x+\cos x=-2\cos x$, $x\in[0,\pi]$.
T: u10-graphical, u10-trig-eq
S: Plot $y=\sin x+\cos x$ and $y=-2\cos x$; they cross once in $[0,\pi]$, near $x\approx1.89$.
C: u10-graphical
P: {"x":[0,3.3],"y":[-2.2,2.2],"xpi":0.5,"ystep":0.5,"fn":[{"f":"sin(x)+cos(x)","label":"sin x + cos x","at":0.6},{"f":"-2*cos(x)","label":"−2cos x","at":2.7}],"pts":[[1.8925,0.6325,"1.89"]]}
S: Algebraic check: $\sin x=-3\cos x\Rightarrow\tan x=-3$, so $x=\pi-\tan^{-1}3\approx1.8925$.
C: u10-trig-eq
A: $x\approx1.89$.

#Q 10.2 9
Q: A hiker pulls a sled with a rope that exerts a force of 80 N over a distance of 25 m. The total work done is 1200 J. At what angle to the direction of motion is the force applied?
T: u10-applications
S: $W=Fd\cos\theta\Rightarrow1200=80\times25\cos\theta=2000\cos\theta$.
C: u10-applications
S: $\cos\theta=0.6\Rightarrow\theta=\cos^{-1}0.6\approx53.13^\circ$.
A: $\theta\approx53.13^\circ$.

#Q 10.2 10
Q: A radio tower stands on flat ground with a small antenna on top. From a point 50 m from the base, the antenna subtends the same angle as a 1 m vertical rod placed at the base of the tower. The total height of the tower and antenna is 10 m. (a) Find the height of the tower. (b) Calculate the subtended angle.
T: u10-applications, u9-sum-formulas
S: Let the tower be $h$ m. From 50 m away: the antenna subtends $\tan^{-1}\frac{10}{50}-\tan^{-1}\frac h{50}$; the rod subtends $\tan^{-1}\frac1{50}$.
C: u10-applications
S: Set them equal: $\tan^{-1}\frac h{50}=\tan^{-1}\frac15-\tan^{-1}\frac1{50}=\tan^{-1}\dfrac{\frac15-\frac1{50}}{1+\frac1{250}}=\tan^{-1}\dfrac{45}{251}$.
C: u9-sum-formulas
!:
S: (a) $\dfrac h{50}=\dfrac{45}{251}\Rightarrow h=\dfrac{2250}{251}\approx8.96$ m.
S: (b) The angle is $\tan^{-1}\frac1{50}\approx1.15^\circ$.
A: (a) $h\approx8.96$ m (b) $\approx1.15^\circ$.

#Q 10.2 11
Q: A person 20 m from the base of a tree measures the angle of elevation to the top as $30^\circ$. (a) Find the height of the tree. (b) If the person walks 10 m closer, what is the new angle of elevation?
T: u10-applications
S: (a) $\tan30^\circ=\dfrac h{20}\Rightarrow h=\dfrac{20}{\sqrt3}\approx11.55$ m.
C: u10-applications
S: (b) Now 10 m away: $\tan\theta=\dfrac{11.547}{10}=\dfrac{2}{\sqrt3}\Rightarrow\theta\approx49.11^\circ$.
A: (a) $\approx11.55$ m (b) $\approx49.1^\circ$.
`);

M12.addMCQs(10, String.raw`
#M
c: u10-trig-eq
Q: The general solution of $\sin x=0$ is
O*: $x=n\pi$
O: $x=2n\pi$
O: $x=\frac\pi2+n\pi$
O: $x=\frac{n\pi}2$
E: $\sin x=0$ at every multiple of $\pi$.

#M
c: u10-trig-eq
Q: The general solution of $\cos x=0$ is
O: $x=n\pi$
O*: $x=\frac\pi2+n\pi$
O: $x=2n\pi$
O: $x=\frac\pi2+2n\pi$
E: $\cos x=0$ at $\frac\pi2$ and $\frac{3\pi}2$, which differ by $\pi$.

#M
c: u10-trig-eq
Q: The period used to write the general solution of $\tan x=k$ is
O*: $\pi$
O: $2\pi$
O: $\frac\pi2$
O: $4\pi$
E: $\tan(x+\pi)=\tan x$.

#M
c: u10-trig-eq
Q: The solutions of $\cos x=-\frac12$ in $[0,2\pi]$ are
O: $\frac\pi3,\frac{5\pi}3$
O*: $\frac{2\pi}3,\frac{4\pi}3$
O: $\frac\pi6,\frac{11\pi}6$
O: $\frac{5\pi}6,\frac{7\pi}6$
E: Reference angle $\frac\pi3$; cosine is negative in Q II and Q III.

#M
c: u10-identities
Q: $\sin3x\cos x+\cos3x\sin x$ simplifies to
O: $\sin2x$
O*: $\sin4x$
O: $\cos4x$
O: $\cos2x$
E: $\sin A\cos B+\cos A\sin B=\sin(A+B)$.

#M
c: u10-extraneous
Q: After squaring both sides of a trigonometric equation you must
O: add $2n\pi$ twice
O*: check every root in the original equation
O: divide by $\cos x$
O: change to degrees
E: Squaring can introduce extraneous roots.

#M
c: u10-graphical
Q: The equation $\sin x=\frac x2$ is solved graphically by finding
O: the roots of $\sin x$
O*: the intersection points of $y=\sin x$ and $y=\frac x2$
O: the maximum of $\sin x$
O: where $\frac x2=1$
E: Each intersection's $x$-coordinate satisfies the equation.
`);
