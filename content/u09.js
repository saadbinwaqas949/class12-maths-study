/* Unit 9 · Inverse Trigonometric Functions */
M12.addConcepts(9, String.raw`
#C u9-inverse-trig Inverse trigonometric functions and their principal ranges
pre: f-inverse-fn, f-trig-ratios, f-quadrants
R: Each trig function is made one-to-one by restricting its domain; its inverse returns the unique angle in that **principal range**: $\sin^{-1}$ and $\csc^{-1}$ in $\left[-\frac\pi2,\frac\pi2\right]$, $\cos^{-1}$ and $\sec^{-1}$ in $[0,\pi]$, $\tan^{-1}$ in $\left(-\frac\pi2,\frac\pi2\right)$, $\cot^{-1}$ in $(0,\pi)$.
F: | function | domain | principal range |
| --- | --- | --- |
| $\sin^{-1}x$ | $[-1,1]$ | $\left[-\frac\pi2,\frac\pi2\right]$ |
| $\cos^{-1}x$ | $[-1,1]$ | $[0,\pi]$ |
| $\tan^{-1}x$ | $\R$ | $\left(-\frac\pi2,\frac\pi2\right)$ |
| $\csc^{-1}x$ | $(-\infty,-1]\cup[1,\infty)$ | $\left[-\frac\pi2,0\right)\cup\left(0,\frac\pi2\right]$ |
| $\sec^{-1}x$ | $(-\infty,-1]\cup[1,\infty)$ | $\left[0,\frac\pi2\right)\cup\left(\frac\pi2,\pi\right]$ |
| $\cot^{-1}x$ | $\R$ | $(0,\pi)$ |
B: $y=\sin^{-1}x$ means "$y$ is the angle in $\left[-\frac\pi2,\frac\pi2\right]$ whose sine is $x$". The function $\sin x$ repeats its values, so without a restriction there would be infinitely many such angles; the restriction picks exactly one.
The domain of each inverse is the range of the original function: $\sin x$ only takes values in $[-1,1]$, so $\sin^{-1}x$ only accepts inputs in $[-1,1]$.
X: **Memory aid for the ranges.** Functions whose negative inputs should give negative angles ($\sin^{-1},\tan^{-1},\csc^{-1}$) use the interval around $0$. Those that give obtuse angles for negative inputs ($\cos^{-1},\sec^{-1},\cot^{-1}$) use an interval from $0$ to $\pi$.
$\sin^{-1}x$ is **not** $\frac1{\sin x}$; that reciprocal is $\csc x$.
E: $\sin^{-1}\left(-\frac12\right)=-\frac\pi6$ (not $\frac{7\pi}6$ or $\frac{11\pi}6$, which are outside the principal range).
M: Giving an angle outside the principal range, e.g. $\cos^{-1}\left(-\frac12\right)=-\frac\pi3$ (wrong) instead of $\frac{2\pi}3$.

#C u9-principal-value Finding principal values
pre: u9-inverse-trig
R: To find $\sin^{-1}a$ (or another inverse), find the reference angle for $|a|$, then place it in the principal range with the correct sign.
B: **Steps:**
1. Ignore the sign and find the standard angle: e.g. $\cos\alpha=\frac{\sqrt2}2\Rightarrow\alpha=\frac\pi4$.
2. Use the principal range: for a negative input,
- $\sin^{-1}(-a)=-\sin^{-1}a$, $\tan^{-1}(-a)=-\tan^{-1}a$, $\csc^{-1}(-a)=-\csc^{-1}a$;
- $\cos^{-1}(-a)=\pi-\cos^{-1}a$, $\sec^{-1}(-a)=\pi-\sec^{-1}a$, $\cot^{-1}(-a)=\pi-\cot^{-1}a$.
E: $\cos^{-1}\left(-\frac12\right)=\pi-\frac\pi3=\frac{2\pi}3$; $\ \sin^{-1}\left(-\frac{\sqrt3}2\right)=-\frac\pi3$.
M: Using $-\frac{\pi}{3}$ for $\cos^{-1}\left(-\frac12\right)$.

#C u9-composite Expressions like $\sin^{-1}(\cos\theta)$
pre: u9-principal-value, f-quadrants
R: Work from the inside out: evaluate the inner trig value first, then find the principal value of the outer inverse.
B: $\sin^{-1}\left[\cos\frac{\pi}3\right]=\sin^{-1}\left(\frac12\right)=\frac\pi6$.
Note that $\sin^{-1}(\sin\theta)=\theta$ only when $\theta$ is already in $\left[-\frac\pi2,\frac\pi2\right]$.
E: $\cos^{-1}\left[\sin\left(-\frac\pi6\right)\right]=\cos^{-1}\left(-\frac12\right)=\frac{2\pi}3$.

#C u9-domain Domains of functions with inverse trig
pre: u9-inverse-trig, f-inequalities
R: Put the inside expression into the allowed domain: $-1\le u\le1$ for $\sin^{-1}u$, $\cos^{-1}u$; $|u|\ge1$ for $\sec^{-1}u$, $\csc^{-1}u$; any real $u$ for $\tan^{-1}u$, $\cot^{-1}u$. Then solve the inequality for $x$ and combine with any other restrictions.
B: **Examples of the inequalities:**
- $\sin^{-1}(5x-3)$: $-1\le5x-3\le1$;
- $\sec^{-1}(x+2)$: $x+2\ge1$ or $x+2\le-1$;
- also respect roots ($\sqrt u$ needs $u\ge0$) and logs ($\ln u$ needs $u>0$).
When there are several conditions, the domain is their **intersection**.
E: $\sin^{-1}\left(\frac{x^2-5}4\right)$: $-4\le x^2-5\le4\Rightarrow1\le x^2\le9\Rightarrow x\in[-3,-1]\cup[1,3]$.
M: Solving only $u\le1$ and forgetting $u\ge-1$.

#C u9-relations Reciprocal and complementary relations
pre: u9-inverse-trig
R: $\csc^{-1}x=\sin^{-1}\frac1x$, $\sec^{-1}x=\cos^{-1}\frac1x$, $\cot^{-1}x=\tan^{-1}\frac1x$ ($x>0$); and $\sin^{-1}x+\cos^{-1}x=\frac\pi2$, $\tan^{-1}x+\cot^{-1}x=\frac\pi2$, $\sec^{-1}x+\csc^{-1}x=\frac\pi2$.
F: $$\csc^{-1}x=\sin^{-1}\frac1x,\quad \sec^{-1}x=\cos^{-1}\frac1x,\quad \sin^{-1}x+\cos^{-1}x=\frac\pi2,\quad \tan^{-1}x+\cot^{-1}x=\frac\pi2$$
B: **Proof of a reciprocal relation:** let $\csc^{-1}x=y$; then $\csc y=x$, so $\sin y=\frac1x$, and $y$ is in the right range, so $y=\sin^{-1}\frac1x$.
**Proof of a complementary relation:** let $\sin^{-1}x=y$; then $x=\sin y=\cos\left(\frac\pi2-y\right)$ with $\frac\pi2-y\in[0,\pi]$, so $\cos^{-1}x=\frac\pi2-y$.
E: $\cot^{-1}(x+1)=\tan^{-1}\frac{1}{x+1}$ for $x+1>0$.

#C u9-triangle Converting with a right triangle
pre: f-pythagoras, u9-inverse-trig
R: For a positive argument, an inverse trig value is an acute angle in a right triangle; draw it, find the third side, and read off any other ratio.
B: $\cos^{-1}\frac5{13}=\alpha$: adjacent $5$, hypotenuse $13$, so opposite $=\sqrt{169-25}=12$. Hence $\alpha=\sin^{-1}\frac{12}{13}=\tan^{-1}\frac{12}5=\sec^{-1}\frac{13}{5}$.
This works because for positive arguments every principal value is an acute angle.
E: $\tan^{-1}\frac43=\alpha$: opposite 4, adjacent 3, hypotenuse 5, so $\sin\alpha=\frac45$, $\cos\alpha=\frac35$.
M: Applying the triangle method to a negative argument without fixing the sign.

#C u9-half-angle-eval Trig functions of half an inverse angle
pre: u9-triangle, f-compound
R: To find $\cos\left(\frac12\cot^{-1}\frac5{12}\right)$ and similar, let $\alpha$ be the inverse angle, get $\cos\alpha$ (or $\sin\alpha$) from a triangle, then use a half-angle formula.
F: $$\cos\frac\alpha2=\sqrt{\frac{1+\cos\alpha}{2}},\qquad \sin\frac\alpha2=\sqrt{\frac{1-\cos\alpha}2},\qquad \tan\frac\alpha2=\frac{\sin\alpha}{1+\cos\alpha}$$
B: For a positive argument $\alpha$ is acute, so $\frac\alpha2$ is acute too and all its ratios are positive: take the positive square roots.
E: $\sin\left(\frac12\tan^{-1}\frac43\right)$: $\cos\alpha=\frac35$, so $\sin\frac\alpha2=\sqrt{\frac{1-3/5}2}=\frac1{\sqrt5}$.

#C u9-sum-formulas Sum and difference formulas
pre: u9-inverse-trig, f-compound
R: $\tan^{-1}x\pm\tan^{-1}y=\tan^{-1}\dfrac{x\pm y}{1\mp xy}$; $\sin^{-1}x\pm\sin^{-1}y=\sin^{-1}\left(x\sqrt{1-y^2}\pm y\sqrt{1-x^2}\right)$; $\cos^{-1}x\pm\cos^{-1}y=\cos^{-1}\left(xy\mp\sqrt{(1-x^2)(1-y^2)}\right)$.
F: $$\tan^{-1}x+\tan^{-1}y=\tan^{-1}\frac{x+y}{1-xy},\qquad \tan^{-1}x-\tan^{-1}y=\tan^{-1}\frac{x-y}{1+xy}$$ $$\sin^{-1}x\pm\sin^{-1}y=\sin^{-1}\Big(x\sqrt{1-y^2}\pm y\sqrt{1-x^2}\Big),\qquad \cos^{-1}x\pm\cos^{-1}y=\cos^{-1}\Big(xy\mp\sqrt{(1-x^2)(1-y^2)}\Big)$$
B: **Proof idea:** put $\alpha=\tan^{-1}x$, $\beta=\tan^{-1}y$ and use $\tan(\alpha+\beta)=\frac{\tan\alpha+\tan\beta}{1-\tan\alpha\tan\beta}$.
**Strategy for "prove that" questions:**
1. Convert every term to the same inverse function (often $\tan^{-1}$ or $\sin^{-1}$) using triangles.
2. Combine two terms at a time with the formulas.
3. Simplify the fraction; compare with the right side.
These formulas are valid when the angles stay in the principal ranges (in exam questions the numbers are chosen so that they do). If $xy>1$ in the $\tan^{-1}$ sum, the true answer is $\pi$ plus the formula's value.
X: **Checking the range:** for example $\tan^{-1}x+\tan^{-1}y$ with $x,y>0$ and $xy>1$ is more than $\frac\pi2$; the formula's $\tan^{-1}$ would give a negative angle, so add $\pi$. A quick decimal check with a calculator always catches this.
E: $\tan^{-1}\frac12+\tan^{-1}\frac13=\tan^{-1}\frac{\frac12+\frac13}{1-\frac16}=\tan^{-1}1=\frac\pi4$.
M: Using $1+xy$ in the denominator of the **sum** formula (the sum has $1-xy$).

#C u9-double Double-angle forms
pre: u9-sum-formulas
R: $2\tan^{-1}x=\tan^{-1}\frac{2x}{1-x^2}$ ($|x|<1$), $2\sin^{-1}x=\sin^{-1}\left(2x\sqrt{1-x^2}\right)$, $2\cos^{-1}x=\cos^{-1}(2x^2-1)$, and $2\tan^{-1}x=\cos^{-1}\frac{1-x^2}{1+x^2}$ ($x\ge0$).
B: Set $y=x$ in the sum formulas, or use $\tan2\alpha$, $\sin2\alpha$, $\cos2\alpha$ with $\alpha$ the inverse angle.
For $\cos2\alpha$ in terms of $\tan\alpha$: $\cos2\alpha=\frac{1-\tan^2\alpha}{1+\tan^2\alpha}$.
E: $2\tan^{-1}\frac15=\tan^{-1}\dfrac{2/5}{1-1/25}=\tan^{-1}\dfrac{5}{12}$.
`);

M12.addQuestions(9, String.raw`
#Q 9.1 1(i)
Q: Find the principal value of $\sin^{-1}\left(\frac{\sqrt3}{2}\right)$.
T: u9-principal-value
S: The angle in $\left[-\frac\pi2,\frac\pi2\right]$ whose sine is $\frac{\sqrt3}2$ is $\frac\pi3$.
C: u9-principal-value
A: $\frac{\pi}{3}$.

#Q 9.1 1(ii)
Q: Find the principal value of $\cos^{-1}\left(-\frac{\sqrt2}{2}\right)$.
T: u9-principal-value
S: Reference angle: $\cos\frac\pi4=\frac{\sqrt2}2$. The range of $\cos^{-1}$ is $[0,\pi]$, and cosine is negative in Q II.
C: u9-principal-value
S: $\cos^{-1}\left(-\frac{\sqrt2}2\right)=\pi-\frac\pi4=\frac{3\pi}4$.
A: $\frac{3\pi}{4}$.

#Q 9.1 1(iii)
Q: Find the principal value of $\tan^{-1}(-\sqrt3)$.
T: u9-principal-value
S: $\tan\frac\pi3=\sqrt3$; for a negative input, $\tan^{-1}(-a)=-\tan^{-1}a$.
C: u9-principal-value
A: $-\frac{\pi}{3}$.

#Q 9.1 1(iv)
Q: Find the principal value of $\sec^{-1}\left(\frac{2}{\sqrt3}\right)$.
T: u9-principal-value, u9-relations
S: $\sec^{-1}\frac2{\sqrt3}=\cos^{-1}\frac{\sqrt3}2=\frac\pi6$.
C: u9-relations
A: $\frac{\pi}{6}$.

#Q 9.1 1(v)
Q: Find the principal value of $\csc^{-1}(-\sqrt2)$.
T: u9-principal-value, u9-relations
S: $\csc^{-1}(-\sqrt2)=\sin^{-1}\left(-\frac1{\sqrt2}\right)=-\frac\pi4$.
C: u9-relations, u9-principal-value
A: $-\frac{\pi}{4}$.

#Q 9.1 1(vi)
Q: Find the principal value of $\sin^{-1}\left[\cos\left(\frac{3\pi}{4}\right)\right]$.
T: u9-composite
S: Inside first: $\cos\frac{3\pi}4=-\frac{1}{\sqrt2}$.
C: f-quadrants
S: $\sin^{-1}\left(-\frac1{\sqrt2}\right)=-\frac\pi4$.
C: u9-composite
A: $-\frac{\pi}{4}$.

#Q 9.1 1(vii)
Q: Find the principal value of $\tan^{-1}\left[\cot\left(\frac{\pi}{6}\right)\right]$.
T: u9-composite
S: $\cot\frac\pi6=\sqrt3$.
S: $\tan^{-1}\sqrt3=\frac\pi3$.
C: u9-composite
A: $\frac{\pi}{3}$.

#Q 9.1 1(viii)
Q: Find the principal value of $\sec^{-1}\left[2\cos\left(\frac{3\pi}{4}\right)\right]$.
T: u9-composite, u9-relations
S: $2\cos\frac{3\pi}4=2\left(-\frac{\sqrt2}2\right)=-\sqrt2$.
S: $\sec^{-1}(-\sqrt2)=\cos^{-1}\left(-\frac{1}{\sqrt2}\right)=\pi-\frac\pi4=\frac{3\pi}4$.
C: u9-relations, u9-principal-value
A: $\frac{3\pi}{4}$.

#Q 9.1 1(ix)
Q: Find the principal value of $\csc^{-1}\left(\sqrt2\cos\frac\pi4\right)$.
T: u9-composite
S: $\sqrt2\cos\frac\pi4=\sqrt2\cdot\frac{1}{\sqrt2}=1$.
S: $\csc^{-1}1=\sin^{-1}1=\frac\pi2$.
C: u9-relations
A: $\frac{\pi}{2}$.

#Q 9.1 1(x)
Q: Find the principal value of $\tan^{-1}\left[3\cos\left\{3\cos^{-1}\left(\frac{\sqrt3}{2}\right)\right\}\right]$.
T: u9-composite
S: Innermost: $\cos^{-1}\frac{\sqrt3}2=\frac\pi6$, so $3\cdot\frac\pi6=\frac\pi2$.
C: u9-principal-value
S: $\cos\frac\pi2=0$, so the expression is $\tan^{-1}(3\cdot0)=\tan^{-1}0=0$.
C: u9-composite
A: $0$.

#Q 9.1 1(xi)
Q: Find the principal value of $\csc^{-1}\left[\frac43\cos\left\{\tan^{-1}\left(\frac{1}{\sqrt3}\right)\right\}\right]$.
T: u9-composite
S: $\tan^{-1}\frac1{\sqrt3}=\frac\pi6$ and $\cos\frac\pi6=\frac{\sqrt3}2$.
S: $\frac43\cdot\frac{\sqrt3}2=\frac{2\sqrt3}3=\frac2{\sqrt3}$, and $\csc^{-1}\frac2{\sqrt3}=\sin^{-1}\frac{\sqrt3}2=\frac\pi3$.
C: u9-relations
A: $\frac{\pi}{3}$.

#Q 9.1 2(i)
Q: Find the domain of $f(x)=\sin^{-1}(5x-3)$.
T: u9-domain
S: Need $-1\le5x-3\le1\Rightarrow2\le5x\le4$.
C: u9-domain
A: $\left[\frac25,\frac45\right]$.

#Q 9.1 2(ii)
Q: Find the domain of $g(x)=\cos^{-1}\sqrt{x-3}$.
T: u9-domain
S: The root needs $x-3\ge0$; $\cos^{-1}$ needs $\sqrt{x-3}\le1$ (it is automatically $\ge-1$).
C: u9-domain
S: $0\le x-3\le1\Rightarrow3\le x\le4$.
A: $[3,4]$.

#Q 9.1 2(iii)
Q: Find the domain of $h(x)=\csc^{-1}(x^2-3)$.
T: u9-domain
S: Need $|x^2-3|\ge1$: either $x^2-3\ge1$ or $x^2-3\le-1$.
C: u9-domain
S: $x^2\ge4\Rightarrow x\le-2$ or $x\ge2$; $\ x^2\le2\Rightarrow-\sqrt2\le x\le\sqrt2$.
C: f-inequalities
A: $(-\infty,-2]\cup[-\sqrt2,\sqrt2]\cup[2,\infty)$.

#Q 9.1 2(iv)
Q: Find the domain of $k(x)=\sin^{-1}(\ln x)$.
T: u9-domain, f-logs
S: $-1\le\ln x\le1\Rightarrow e^{-1}\le x\le e$ (and $x>0$ automatically).
C: u9-domain
A: $\left[\frac1e,e\right]$.

#Q 9.1 2(v)
Q: Find the domain of $p(x)=\tan^{-1}\sqrt{4-x^2}$.
T: u9-domain
S: $\tan^{-1}$ accepts every real input; only the root restricts: $4-x^2\ge0$.
C: u9-domain
A: $[-2,2]$.

#Q 9.1 2(vi)
Q: Find the domain of $q(x)=\sec^{-1}(x+2)$.
T: u9-domain
S: Need $x+2\ge1$ or $x+2\le-1$, i.e. $x\ge-1$ or $x\le-3$.
C: u9-domain
A: $(-\infty,-3]\cup[-1,\infty)$.

#Q 9.1 2(vii)
Q: Find the domain of $u(x)=\sec^{-1}\left(\frac{3x-1}{2}\right)$.
T: u9-domain
S: $\frac{3x-1}2\ge1\Rightarrow x\ge1$; $\ \frac{3x-1}2\le-1\Rightarrow x\le-\frac13$.
C: u9-domain
A: $\left(-\infty,-\frac13\right]\cup[1,\infty)$.

#Q 9.1 2(viii)
Q: Find the domain of $v(x)=\sin^{-1}(\ln x)+\csc^{-1}(e^x)$.
T: u9-domain
S: $\sin^{-1}(\ln x)$: $\frac1e\le x\le e$.
C: u9-domain
S: $\csc^{-1}(e^x)$: $e^x\ge1$ (it is always positive), so $x\ge0$.
S: Intersection: $\left[\frac1e,e\right]\cap[0,\infty)=\left[\frac1e,e\right]$.
A: $\left[\frac1e,e\right]$.

#Q 9.1 3(i)
Q: Show that $\cos^{-1}\frac{8}{17}=\sin^{-1}\frac{15}{17}$.
T: u9-triangle
S: Let $\alpha=\cos^{-1}\frac8{17}$, an acute angle with $\cos\alpha=\frac8{17}$.
C: u9-triangle
S: $\sin\alpha=\sqrt{1-\frac{64}{289}}=\frac{15}{17}$ (positive, since $\alpha$ is acute).
C: f-trig-identities
S: So $\alpha=\sin^{-1}\frac{15}{17}$. $\blacksquare$
A: Shown.

#Q 9.1 3(ii)
Q: Show that $\csc^{-1}\frac54=\cos^{-1}\frac35$.
T: u9-triangle, u9-relations
S: $\csc^{-1}\frac54=\alpha$ means $\sin\alpha=\frac45$ with $\alpha$ acute.
C: u9-relations
S: Then $\cos\alpha=\frac35$ (3–4–5 triangle), so $\alpha=\cos^{-1}\frac35$. $\blacksquare$
C: u9-triangle
A: Shown.

#Q 9.1 3(iii)
Q: Show that $2\tan^{-1}\frac34=\tan^{-1}\frac{24}7$.
T: u9-double
S: $\tan\left(2\alpha\right)=\dfrac{2\tan\alpha}{1-\tan^2\alpha}$ with $\tan\alpha=\frac34$: $\ \dfrac{3/2}{1-9/16}=\dfrac{3/2}{7/16}=\dfrac{24}7$.
C: u9-double
S: Since $\frac34<1$, $\alpha<\frac\pi4$ and $2\alpha<\frac\pi2$ is in the principal range. So $2\alpha=\tan^{-1}\frac{24}7$. $\blacksquare$
A: Shown.

#Q 9.1 3(iv)
Q: Show that $2\sin^{-1}\frac7{25}=\sin^{-1}\frac{336}{625}$.
T: u9-double, u9-triangle
S: Let $\alpha=\sin^{-1}\frac7{25}$: $\cos\alpha=\frac{24}{25}$.
C: u9-triangle
S: $\sin2\alpha=2\cdot\frac7{25}\cdot\frac{24}{25}=\frac{336}{625}$, and $2\alpha<\frac\pi2$. So $2\alpha=\sin^{-1}\frac{336}{625}$. $\blacksquare$
C: u9-double
A: Shown.

#Q 9.1 4(i)
Q: Without using a calculator, find $\cos\left(\frac12\cot^{-1}\frac5{12}\right)$.
T: u9-half-angle-eval
S: Let $\alpha=\cot^{-1}\frac5{12}$: adjacent 5, opposite 12, hypotenuse 13, so $\cos\alpha=\frac5{13}$.
C: u9-triangle
S: $\cos\frac\alpha2=\sqrt{\frac{1+\frac5{13}}2}=\sqrt{\frac{9}{13}}=\frac3{\sqrt{13}}$.
C: u9-half-angle-eval
A: $\frac{3}{\sqrt{13}}$.

#Q 9.1 4(ii)
Q: Without using a calculator, find $\sec\left(\frac12\sin^{-1}\frac7{25}\right)$.
T: u9-half-angle-eval
S: $\alpha=\sin^{-1}\frac7{25}$: $\cos\alpha=\frac{24}{25}$.
C: u9-triangle
S: $\cos\frac\alpha2=\sqrt{\frac{1+\frac{24}{25}}2}=\sqrt{\frac{49}{50}}=\frac7{\sqrt{50}}$, so $\sec\frac\alpha2=\frac{\sqrt{50}}7=\frac{5\sqrt2}7$.
C: u9-half-angle-eval
A: $\frac{\sqrt{50}}{7}=\frac{5\sqrt2}{7}$.

#Q 9.1 4(iii)
Q: Without using a calculator, find $\tan\left(\frac12\cot^{-1}\frac{24}7\right)$.
T: u9-half-angle-eval
S: $\alpha=\cot^{-1}\frac{24}7$: adjacent 24, opposite 7, hypotenuse 25, so $\sin\alpha=\frac7{25}$, $\cos\alpha=\frac{24}{25}$.
C: u9-triangle
S: $\tan\frac\alpha2=\dfrac{\sin\alpha}{1+\cos\alpha}=\dfrac{7/25}{49/25}=\dfrac17$.
C: u9-half-angle-eval
A: $\frac17$.

#Q 9.1 4(iv)
Q: Without using a calculator, find $\tan\left(\frac12\sin^{-1}\frac{\sqrt3}2\right)$.
T: u9-half-angle-eval, u9-principal-value
S: $\sin^{-1}\frac{\sqrt3}2=\frac\pi3$, so the expression is $\tan\frac\pi6$.
C: u9-principal-value
A: $\frac{1}{\sqrt3}$.

#Q 9.1 4(v)
Q: Without using a calculator, find $\cot\left(\frac12\sec^{-1}\frac{2\sqrt6}3\right)$.
T: u9-half-angle-eval
S: $\alpha=\sec^{-1}\frac{2\sqrt6}3$: $\cos\alpha=\frac{3}{2\sqrt6}=\frac{\sqrt6}4$, $\sin\alpha=\sqrt{1-\frac6{16}}=\frac{\sqrt{10}}4$.
C: u9-triangle
S: $\cot\frac\alpha2=\dfrac{1+\cos\alpha}{\sin\alpha}=\dfrac{1+\frac{\sqrt6}4}{\frac{\sqrt{10}}4}=\dfrac{4+\sqrt6}{\sqrt{10}}$.
C: u9-half-angle-eval
S: Squaring: $\dfrac{16+8\sqrt6+6}{10}=\dfrac{11+4\sqrt6}5$.
A: $\frac{4+\sqrt6}{\sqrt{10}}=\sqrt{\frac{11+4\sqrt6}{5}}$.

#Q 9.1 4(vi)
Q: Without using a calculator, find $\csc\left(\frac12\cot^{-1}\frac43\right)$.
ref: printed as the second (v)
T: u9-half-angle-eval
S: $\alpha=\cot^{-1}\frac43$: $\cos\alpha=\frac45$.
C: u9-triangle
S: $\sin\frac\alpha2=\sqrt{\frac{1-\frac45}2}=\frac1{\sqrt{10}}$, so $\csc\frac\alpha2=\sqrt{10}$.
C: u9-half-angle-eval
A: $\sqrt{10}$.

#Q 9.2 1
Q: Prove that $\sin^{-1}\frac7{25}+\sin^{-1}\frac{15}{17}=\cos^{-1}\frac{87}{425}$.
T: u9-sum-formulas, u9-triangle
S: Let $\alpha=\sin^{-1}\frac7{25}$ ($\cos\alpha=\frac{24}{25}$) and $\beta=\sin^{-1}\frac{15}{17}$ ($\cos\beta=\frac8{17}$).
C: u9-triangle
S: $\cos(\alpha+\beta)=\cos\alpha\cos\beta-\sin\alpha\sin\beta=\frac{24}{25}\cdot\frac8{17}-\frac7{25}\cdot\frac{15}{17}=\frac{192-105}{425}=\frac{87}{425}$.
C: f-compound
S: Both angles are acute and $\frac{87}{425}>0$, so $\alpha+\beta$ is in $[0,\pi]$ and $\alpha+\beta=\cos^{-1}\frac{87}{425}$. $\blacksquare$
C: u9-sum-formulas
A: Shown.

#Q 9.2 2
Q: Prove that $\cos^{-1}\frac7{25}-\cos^{-1}\frac5{13}=\cos^{-1}\frac{323}{325}$.
T: u9-sum-formulas, u9-triangle
S: $\alpha=\cos^{-1}\frac7{25}$: $\sin\alpha=\frac{24}{25}$. $\ \beta=\cos^{-1}\frac5{13}$: $\sin\beta=\frac{12}{13}$.
C: u9-triangle
S: $\cos(\alpha-\beta)=\cos\alpha\cos\beta+\sin\alpha\sin\beta=\frac{35}{325}+\frac{288}{325}=\frac{323}{325}$.
C: f-compound
S: $\alpha>\beta$ (smaller cosine means larger angle), so $\alpha-\beta\in[0,\pi]$ and equals $\cos^{-1}\frac{323}{325}$. $\blacksquare$
A: Shown.

#Q 9.2 3
Q: Prove that $\tan^{-1}\frac34+\tan^{-1}\frac35-\tan^{-1}\frac8{19}=\frac\pi4$.
T: u9-sum-formulas
S: First two: $\tan^{-1}\dfrac{\frac34+\frac35}{1-\frac9{20}}=\tan^{-1}\dfrac{27/20}{11/20}=\tan^{-1}\dfrac{27}{11}$.
C: u9-sum-formulas
S: Subtract: $\tan^{-1}\dfrac{27}{11}-\tan^{-1}\dfrac8{19}=\tan^{-1}\dfrac{\frac{27}{11}-\frac8{19}}{1+\frac{216}{209}}=\tan^{-1}\dfrac{(513-88)/209}{425/209}=\tan^{-1}1=\dfrac\pi4$. $\blacksquare$
A: Shown.

#Q 9.2 4
Q: Prove that $\sin^{-1}\frac{12}{13}-\sin^{-1}\frac35=\sin^{-1}\frac{33}{65}$.
T: u9-sum-formulas, u9-triangle
S: $\sin^{-1}x-\sin^{-1}y=\sin^{-1}\left(x\sqrt{1-y^2}-y\sqrt{1-x^2}\right)$ with $x=\frac{12}{13}$, $y=\frac35$.
C: u9-sum-formulas
S: $\frac{12}{13}\cdot\frac45-\frac35\cdot\frac5{13}=\frac{48-15}{65}=\frac{33}{65}$. $\blacksquare$
A: Shown.

#Q 9.2 5
Q: Prove that $\sin^{-1}\frac45+\cos^{-1}\frac{12}{13}=\sin^{-1}\frac{63}{65}$.
T: u9-sum-formulas, u9-triangle
S: Convert: $\cos^{-1}\frac{12}{13}=\sin^{-1}\frac5{13}$ (5–12–13 triangle).
C: u9-triangle
S: $\sin^{-1}\frac45+\sin^{-1}\frac5{13}=\sin^{-1}\left(\frac45\cdot\frac{12}{13}+\frac5{13}\cdot\frac35\right)=\sin^{-1}\frac{48+15}{65}=\sin^{-1}\frac{63}{65}$. $\blacksquare$
C: u9-sum-formulas
A: Shown.

#Q 9.2 6
Q: Prove that $\sin^{-1}\frac35+2\tan^{-1}\frac14=\cos^{-1}\frac{36}{85}$.
T: u9-sum-formulas, u9-double, u9-triangle
S: $2\tan^{-1}\frac14=\tan^{-1}\dfrac{1/2}{1-1/16}=\tan^{-1}\dfrac8{15}$.
C: u9-double
S: $\sin^{-1}\frac35=\tan^{-1}\frac34$. Sum: $\tan^{-1}\dfrac{\frac34+\frac8{15}}{1-\frac{24}{60}}=\tan^{-1}\dfrac{77/60}{36/60}=\tan^{-1}\dfrac{77}{36}$.
C: u9-triangle, u9-sum-formulas
S: The triangle with opposite 77 and adjacent 36 has hypotenuse $\sqrt{5929+1296}=85$, so $\tan^{-1}\frac{77}{36}=\cos^{-1}\frac{36}{85}$. $\blacksquare$
A: Shown.

#Q 9.2 7
Q: Prove that $\sin^{-1}\frac1{\sqrt2}+\sin^{-1}\frac1{\sqrt5}+\sin^{-1}\frac1{\sqrt{10}}=\frac\pi2$.
T: u9-sum-formulas, u9-triangle
S: Convert to $\tan^{-1}$: $\sin^{-1}\frac1{\sqrt5}=\tan^{-1}\frac12$ and $\sin^{-1}\frac1{\sqrt{10}}=\tan^{-1}\frac13$; also $\sin^{-1}\frac1{\sqrt2}=\frac\pi4$.
C: u9-triangle
S: $\tan^{-1}\frac12+\tan^{-1}\frac13=\tan^{-1}\dfrac{5/6}{5/6}=\tan^{-1}1=\frac\pi4$.
C: u9-sum-formulas
S: Total $=\frac\pi4+\frac\pi4=\frac\pi2$. $\blacksquare$
A: Shown.

#Q 9.2 8
Q: Prove that $\tan^{-1}\frac17+2\tan^{-1}\frac13=\frac\pi4$.
T: u9-sum-formulas, u9-double
S: $2\tan^{-1}\frac13=\tan^{-1}\dfrac{2/3}{1-1/9}=\tan^{-1}\dfrac34$.
C: u9-double
S: $\tan^{-1}\frac17+\tan^{-1}\frac34=\tan^{-1}\dfrac{\frac17+\frac34}{1-\frac3{28}}=\tan^{-1}\dfrac{25/28}{25/28}=\tan^{-1}1=\frac\pi4$. $\blacksquare$
C: u9-sum-formulas
A: Shown.

#Q 9.2 9
Q: Prove that $\tan^{-1}\frac{10}3-\tan^{-1}\frac7{13}+\tan^{-1}\frac95-\tan^{-1}\frac27=\frac\pi2$.
T: u9-sum-formulas
S: Pair the first two: $\tan^{-1}\dfrac{\frac{10}3-\frac7{13}}{1+\frac{70}{39}}=\tan^{-1}\dfrac{109/39}{109/39}=\tan^{-1}1=\frac\pi4$.
C: u9-sum-formulas
S: Pair the last two: $\tan^{-1}\dfrac{\frac95-\frac27}{1+\frac{18}{35}}=\tan^{-1}\dfrac{53/35}{53/35}=\frac\pi4$.
S: Total $=\frac\pi4+\frac\pi4=\frac\pi2$. $\blacksquare$
A: Shown.

#Q 9.2 10
Q: Prove that $\sec^2\left(\tan^{-1}\frac14\right)+\csc^2\left(\cot^{-1}\frac25\right)=\frac{889}{400}$.
T: u9-inverse-trig, f-trig-identities
S: $\sec^2\theta=1+\tan^2\theta$: with $\tan\theta=\frac14$, $\ \sec^2\theta=1+\frac1{16}=\frac{17}{16}$.
C: f-trig-identities
S: $\csc^2\phi=1+\cot^2\phi$: with $\cot\phi=\frac25$, $\ \csc^2\phi=1+\frac4{25}=\frac{29}{25}$.
S: Sum: $\frac{17}{16}+\frac{29}{25}=\frac{425+464}{400}=\frac{889}{400}$. $\blacksquare$
A: Shown.

#Q 9.2 14
Q: Prove that $2\tan^{-1}x=\cos^{-1}\dfrac{1-x^2}{1+x^2}$ (for $x\ge0$).
N: For negative $x$ the left side is negative while $\cos^{-1}$ is never negative, so the identity needs $x\ge0$.
T: u9-double, f-compound
S: Let $\alpha=\tan^{-1}x$ (so $0\le\alpha<\frac\pi2$ when $x\ge0$).
C: u9-inverse-trig
S: $\cos2\alpha=\dfrac{1-\tan^2\alpha}{1+\tan^2\alpha}=\dfrac{1-x^2}{1+x^2}$.
W: Divide $\cos^2\alpha-\sin^2\alpha$ by $\cos^2\alpha+\sin^2\alpha=1$, then divide top and bottom by $\cos^2\alpha$.
C: f-compound
S: $2\alpha\in[0,\pi)$, inside the range of $\cos^{-1}$, so $2\alpha=\cos^{-1}\dfrac{1-x^2}{1+x^2}$. $\blacksquare$
A: Shown (for $x\ge0$).

#Q 9.2 15
Q: Prove that $\cos(\sin^{-1}x)=\sqrt{1-x^2}$.
ref: printed as the second Q14
T: u9-inverse-trig, f-trig-identities
S: Let $\alpha=\sin^{-1}x$, so $\sin\alpha=x$ with $-\frac\pi2\le\alpha\le\frac\pi2$.
C: u9-inverse-trig
S: In this range $\cos\alpha\ge0$, so $\cos\alpha=\sqrt{1-\sin^2\alpha}=\sqrt{1-x^2}$. $\blacksquare$
C: f-trig-identities
A: Shown.

#Q 9.2 16
Q: Prove that $\tan^{-1}x+\cot^{-1}(x+1)=\tan^{-1}(x^2+x+1)$.
ref: printed as Q15
T: u9-sum-formulas, u9-relations
S: For $x+1>0$, $\cot^{-1}(x+1)=\tan^{-1}\dfrac1{x+1}$.
C: u9-relations
S: $\tan^{-1}x+\tan^{-1}\dfrac1{x+1}=\tan^{-1}\dfrac{x+\frac1{x+1}}{1-\frac{x}{x+1}}=\tan^{-1}\dfrac{\frac{x^2+x+1}{x+1}}{\frac{1}{x+1}}=\tan^{-1}(x^2+x+1)$. $\blacksquare$
C: u9-sum-formulas
A: Shown.

#Q 9.2 19
Q: If $\tan^{-1}x+\tan^{-1}y+\tan^{-1}z=\pi$, show that $x+y+z=xyz$.
ref: printed as Q18
T: u9-sum-formulas
S: $\tan^{-1}x+\tan^{-1}y=\pi-\tan^{-1}z$. Take the tangent of both sides.
C: u9-sum-formulas
S: Left: $\dfrac{x+y}{1-xy}$. Right: $\tan(\pi-\tan^{-1}z)=-z$.
C: f-quadrants
S: $\dfrac{x+y}{1-xy}=-z\Rightarrow x+y=-z+xyz\Rightarrow x+y+z=xyz$. $\blacksquare$
A: Shown.
`);

M12.addMCQs(9, String.raw`
#M
c: u9-inverse-trig
Q: The principal range of $\cos^{-1}x$ is
O: $\left[-\frac\pi2,\frac\pi2\right]$
O*: $[0,\pi]$
O: $(0,\pi)$
O: $\left(-\frac\pi2,\frac\pi2\right)$
E: Cosine is one-to-one on $[0,\pi]$.

#M
c: u9-inverse-trig
Q: The domain of $\sin^{-1}x$ is
O*: $[-1,1]$
O: $\R$
O: $[0,\pi]$
O: $|x|\ge1$
E: $\sin x$ only takes values from $-1$ to $1$.

#M
c: u9-principal-value
Q: $\tan^{-1}(-1)=$
O: $\frac{3\pi}4$
O*: $-\frac\pi4$
O: $\frac\pi4$
O: $\frac{5\pi}4$
E: The range of $\tan^{-1}$ is $\left(-\frac\pi2,\frac\pi2\right)$.

#M
c: u9-principal-value
Q: $\cos^{-1}(-1)=$
O: $-\pi$
O: $0$
O*: $\pi$
O: $\frac{\pi}{2}$
E: $\cos\pi=-1$ and $\pi$ lies in the range $[0,\pi]$.

#M
c: u9-relations
Q: $\sin^{-1}x+\cos^{-1}x=$
O: $0$
O: $\pi$
O*: $\frac\pi2$
O: $1$
E: The two angles are complementary.

#M
c: u9-relations
Q: $\csc^{-1}x$ equals
O*: $\sin^{-1}\frac1x$
O: $\frac{1}{\sin^{-1}x}$
O: $\cos^{-1}\frac1x$
O: $\frac{1}{\sin x}$
E: If $\csc y=x$ then $\sin y=\frac1x$.

#M
c: u9-sum-formulas
Q: $\tan^{-1}x+\tan^{-1}y=$ (for $xy<1$)
O: $\tan^{-1}\frac{x+y}{1+xy}$
O*: $\tan^{-1}\frac{x+y}{1-xy}$
O: $\tan^{-1}(x+y)$
O: $\tan^{-1}\frac{x-y}{1+xy}$
E: From $\tan(\alpha+\beta)$.

#M
c: u9-double
Q: $2\tan^{-1}\frac12=$
O: $\tan^{-1}1$
O*: $\tan^{-1}\frac43$
O: $\tan^{-1}\frac34$
O: $\tan^{-1}2$
E: $\frac{2\cdot\frac12}{1-\frac14}=\frac43$.

#M
c: u9-domain
Q: The domain of $\sec^{-1}x$ is
O: $[-1,1]$
O*: $(-\infty,-1]\cup[1,\infty)$
O: $\R$
O: $(0,\pi)$
E: $|\sec x|\ge1$ always.
`);
