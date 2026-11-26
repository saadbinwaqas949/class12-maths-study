/* Foundations: the basic algebra, trigonometry and coordinate ideas every unit relies on. */
M12.addConcepts(0, String.raw`
#C f-expand Expanding brackets and simplifying
R: Multiply every term in one bracket by every term in the other, then collect like terms.
F: $$a(b+c)=ab+ac,\quad (a+b)^2=a^2+2ab+b^2,\quad (a-b)^2=a^2-2ab+b^2,\quad (a+b)(a-b)=a^2-b^2$$
B: **Expanding** means removing brackets. The rule underneath everything is the distributive law $a(b+c)=ab+ac$: the term outside multiplies *each* term inside.
For two brackets, every term of the first multiplies every term of the second: $(x+2)(x+5)=x\cdot x+x\cdot5+2\cdot x+2\cdot5=x^2+7x+10$.
**Like terms** have exactly the same letters and powers ($3x^2$ and $-5x^2$ are like; $3x^2$ and $3x$ are not). Only like terms can be added.
X: Why does $(a+b)^2$ have a middle term? Because $(a+b)^2=(a+b)(a+b)=a^2+ab+ba+b^2=a^2+2ab+b^2$. Forgetting the $2ab$ is the most common algebra mistake in the whole course.
Signs: a minus sign in front of a bracket changes the sign of *every* term inside: $-(x-3)=-x+3$.
E: Expand and simplify $2(x-1)(x+3)-(x-2)^2$.
First bracket pair: $(x-1)(x+3)=x^2+3x-x-3=x^2+2x-3$, so $2(\dots)=2x^2+4x-6$.
Second: $(x-2)^2=x^2-4x+4$, and the minus sign gives $-x^2+4x-4$.
Total: $2x^2+4x-6-x^2+4x-4=x^2+8x-10$.
E: Expand $(e^x+e^{-x})^2$. Treat $e^x$ like $a$ and $e^{-x}$ like $b$: $e^{2x}+2e^xe^{-x}+e^{-2x}=e^{2x}+2+e^{-2x}$, because $e^x\cdot e^{-x}=e^0=1$.
M: $(a+b)^2\ne a^2+b^2$. The middle term $2ab$ is always there.
M: $-(x-3)$ is $-x+3$, not $-x-3$.

#C f-factor Factorisation (including splitting the middle term)
pre: f-expand
R: Write an expression as a product of simpler factors: take out common factors, use identities, or split the middle term of $ax^2+bx+c$.
F: $$ax^2+bx+c:\ \text{find two numbers with product } ac \text{ and sum } b,\ \text{split } bx,\ \text{then group.}$$
B: Factorising is expanding in reverse. Try these in order:
1. **Common factor**: $6x^2-9x=3x(2x-3)$.
2. **Difference of squares**: $a^2-b^2=(a-b)(a+b)$, e.g. $4x^2-1=(2x-1)(2x+1)$.
3. **Splitting the middle term** (mid-term breaking) for $ax^2+bx+c$: find two numbers whose **product is $ac$** and whose **sum is $b$**. Replace $bx$ by those two terms and factor in pairs.
4. **Cubes**: $a^3-b^3=(a-b)(a^2+ab+b^2)$ and $a^3+b^3=(a+b)(a^2-ab+b^2)$.
X: **Why splitting the middle term works.** When you expand $(px+q)(rx+s)$ you get $prx^2+(ps+qr)x+qs$. The two middle pieces $ps$ and $qr$ multiply to $pqrs=(pr)(qs)=ac$ and add to $b$. So finding two numbers with product $ac$ and sum $b$ recovers exactly those two hidden pieces.
How to search: list the factor pairs of $ac$, and check which pair adds (or subtracts, if $ac<0$) to $b$. If $ac<0$, the two numbers have opposite signs; if $ac>0$ and $b<0$, both are negative.
If no pair works, the quadratic does not factor nicely: use the quadratic formula instead.
E: Factorise $2x^2+x-3$.
Here $a=2,\ b=1,\ c=-3$, so $ac=-6$. We need two numbers with product $-6$ and sum $1$: they are $3$ and $-2$.
Split the middle term: $2x^2+3x-2x-3$.
Group: $x(2x+3)-1(2x+3)=(2x+3)(x-1)$.
Check by expanding: $2x^2-2x+3x-3=2x^2+x-3$. ✓
E: Factorise $x^2-8x+15$. Product $15$, sum $-8$: the numbers are $-3$ and $-5$. So $x^2-3x-5x+15=x(x-3)-5(x-3)=(x-3)(x-5)$.
E: Factorise $2u^2-3u-9$. Product $ac=-18$, sum $-3$: numbers $-6$ and $3$. $2u^2-6u+3u-9=2u(u-3)+3(u-3)=(u-3)(2u+3)$.
M: Grouping must leave the *same* bracket twice. If you get $x(2x+3)-1(2x-3)$, recheck the signs.
M: Always expand your answer mentally to check it.

#C f-zero-product Zero-product rule
pre: f-factor
R: If a product equals zero, at least one of the factors is zero: $AB=0\Rightarrow A=0$ or $B=0$.
B: This is why we factorise before solving. From $(x+1)(x-1)=0$ we get two simple equations, $x+1=0$ or $x-1=0$, so $x=-1$ or $x=1$.
The rule only works when the right-hand side is **zero**. From $(x-2)(x-3)=6$ you can *not* say $x-2=6$; first expand and move everything to one side.
X: It works because real numbers have no "zero divisors": if $A\ne0$ we may divide by $A$, and then $B=0$.
In trigonometric equations the same idea appears as $\cos x\,(2\cos x-\sqrt3)=0\Rightarrow \cos x=0$ or $\cos x=\tfrac{\sqrt3}{2}$.
E: Solve $x^2-5x=0$. Factor: $x(x-5)=0$, so $x=0$ or $x=5$. (Never divide both sides by $x$: you would lose the solution $x=0$.)
M: Dividing an equation by a variable factor loses solutions. Factor it out instead.

#C f-quadratic-formula Quadratic formula and the discriminant
pre: f-factor
R: The roots of $ax^2+bx+c=0$ are $x=\dfrac{-b\pm\sqrt{b^2-4ac}}{2a}$; the discriminant $b^2-4ac$ tells how many real roots there are.
F: $$x=\frac{-b\pm\sqrt{b^2-4ac}}{2a},\qquad D=b^2-4ac:\ \ D>0 \text{ two roots},\ D=0 \text{ one repeated root},\ D<0 \text{ no real roots}$$
B: Use the formula when a quadratic will not factorise easily. Write the equation as $ax^2+bx+c=0$ first, read off $a,b,c$ **with their signs**, then substitute.
The **discriminant** $D=b^2-4ac$ sits under the square root. A negative number has no real square root, so $D<0$ means no real solutions.
X: The formula comes from completing the square on $ax^2+bx+c=0$: divide by $a$, move $c/a$ across, add $\left(\tfrac{b}{2a}\right)^2$ to both sides and take square roots.
In geometry the discriminant decides how a line meets a curve: two points ($D>0$), touching (tangent, $D=0$) or missing ($D<0$). Units 6 and 8 use this a lot.
E: Solve $x^2-8x+8=0$. Here $a=1,b=-8,c=8$.
$$x=\frac{8\pm\sqrt{64-32}}{2}=\frac{8\pm\sqrt{32}}{2}=\frac{8\pm4\sqrt2}{2}=4\pm2\sqrt2$$
E: How many real roots has $2x^2+3x+5=0$? $D=9-40=-31<0$, so none.
M: With $b=-8$, $-b=+8$ and $b^2=64$ (not $-64$).
M: The whole numerator $-b\pm\sqrt{D}$ is divided by $2a$, not just the square root.

#C f-complete-square Completing the square
pre: f-expand
R: Rewrite $x^2+px$ as $\left(x+\tfrac p2\right)^2-\left(\tfrac p2\right)^2$; this reveals the vertex of a parabola or the centre of a circle.
F: $$x^2+px=\Big(x+\frac p2\Big)^2-\Big(\frac p2\Big)^2$$
B: Take **half the coefficient of $x$**, square it, add it and subtract it. For example
$x^2-6x=(x-3)^2-9$ because $(x-3)^2=x^2-6x+9$, which has an extra $9$.
If $x^2$ has a coefficient, take it out first: $2x^2+8x=2(x^2+4x)=2[(x+2)^2-4]=2(x+2)^2-8$.
X: Completing the square is used to (i) find the vertex of $y=ax^2+bx+c$, (ii) find the centre and radius of a circle $x^2+y^2+2gx+2fy+c=0$, (iii) put a conic such as $9x^2-36x-4y^2+8y-4=0$ into standard form, and (iv) prepare integrals like $\int\frac{dx}{x^2+4x+5}$.
E: Write $x^2+y^2-4x+6y-3=0$ in centre form.
$x^2-4x=(x-2)^2-4$ and $y^2+6y=(y+3)^2-9$.
So $(x-2)^2-4+(y+3)^2-9-3=0$, i.e. $(x-2)^2+(y+3)^2=16$: centre $(2,-3)$, radius $4$.
M: Half of $-6$ is $-3$, so $x^2-6x=(x-3)^2-9$, not $(x-3)^2+9$.

#C f-indices Laws of indices (exponents)
R: Multiply powers of the same base by adding indices, divide by subtracting, and raise a power to a power by multiplying.
F: $$a^m a^n=a^{m+n},\ \ \frac{a^m}{a^n}=a^{m-n},\ \ (a^m)^n=a^{mn},\ \ a^0=1,\ \ a^{-n}=\frac1{a^n},\ \ a^{1/n}=\sqrt[n]{a},\ \ (ab)^n=a^nb^n$$
B: These laws let you rewrite expressions so that the base is the same on both sides of an equation, or so that a power rule can be used in calculus.
- $\sqrt{x}=x^{1/2}$ and $\dfrac{1}{\sqrt x}=x^{-1/2}$. Differentiation and integration need this form.
- $9^x=(3^2)^x=3^{2x}=(3^x)^2$. This turns equations like $3^{x+1}-2\cdot9^x+9=0$ into quadratics in $u=3^x$.
- $8=2^3$, $16=2^4$, $\tfrac14=2^{-2}$: spot the hidden common base.
X: Why $a^0=1$: $\dfrac{a^n}{a^n}=1$, and the subtraction law gives $a^{n-n}=a^0$.
Why $a^{-n}=1/a^n$: $a^{-n}\cdot a^n=a^0=1$.
These laws need the **same base**. $2^x\cdot3^x=6^x$ uses $(ab)^n=a^nb^n$ instead.
E: Simplify $\dfrac{4^{x}\cdot 2^{x+1}}{8^x}$. Write everything as powers of 2: $\dfrac{2^{2x}\cdot2^{x+1}}{2^{3x}}=2^{2x+x+1-3x}=2^1=2$.
E: Write $\dfrac{3}{x\sqrt x}$ as a power: $x\sqrt x=x^{1}x^{1/2}=x^{3/2}$, so it is $3x^{-3/2}$.
M: $a^m+a^n$ cannot be combined into one power. Only products and quotients follow the laws.
M: $(2x)^3=8x^3$, not $2x^3$.

#C f-surds Surds and rationalising
pre: f-indices
R: Simplify square roots by taking out square factors, and remove roots from a denominator by multiplying by the conjugate.
F: $$\sqrt{ab}=\sqrt a\sqrt b,\quad \frac{1}{\sqrt a+\sqrt b}=\frac{\sqrt a-\sqrt b}{a-b}$$
B: $\sqrt{32}=\sqrt{16\cdot2}=4\sqrt2$. To rationalise $\dfrac{1}{\sqrt{x+1}+\sqrt x}$ multiply top and bottom by the **conjugate** $\sqrt{x+1}-\sqrt x$: the bottom becomes $(x+1)-x=1$.
X: The conjugate trick is the difference of squares $(p+q)(p-q)=p^2-q^2$ in disguise. It is used in Unit 3 to integrate $\dfrac{1}{\sqrt{x+1}+\sqrt x}$ and in Unit 2 to simplify derivatives.
E: Simplify $\dfrac{8\pm\sqrt{32}}{2}$: $\sqrt{32}=4\sqrt2$, so it is $\dfrac{8\pm4\sqrt2}{2}=4\pm2\sqrt2$.
M: $\sqrt{a+b}\neq\sqrt a+\sqrt b$.

#C f-fractions Algebraic fractions
pre: f-factor
R: Add fractions over a common denominator; simplify by cancelling common *factors* (never common terms).
F: $$\frac ab+\frac cd=\frac{ad+bc}{bd},\qquad \frac{a/b}{c/d}=\frac{ad}{bc}$$
B: To combine $\dfrac{1}{x}+\dfrac{1}{x+1}$ use the common denominator $x(x+1)$: $\dfrac{(x+1)+x}{x(x+1)}=\dfrac{2x+1}{x(x+1)}$.
A **complex fraction** (a fraction inside a fraction) is cleared by multiplying top and bottom by the inner denominators.
X: Cancelling works only for factors that multiply the *whole* numerator and *whole* denominator: $\dfrac{x(x+2)}{x(x-1)}=\dfrac{x+2}{x-1}$, but in $\dfrac{x+2}{x-1}$ nothing cancels.
E: Simplify $\dfrac{\frac{x-1}{x+1}+\frac{2x}{x+1}}{1-\frac{x-1}{x+1}\cdot\frac{2x}{x+1}}$ (from an inverse-tangent problem).
Multiply top and bottom by $(x+1)^2$: top $=(x-1)(x+1)+2x(x+1)=(x+1)(3x-1)$, bottom $=(x+1)^2-2x(x-1)=-x^2+4x+1$.
M: $\dfrac{x+2}{x}\neq 2$. You cannot cancel the $x$ inside a sum.

#C f-linear-eq Linear and simultaneous equations
R: Solve one linear equation by doing the same operation to both sides; solve two equations by substitution or elimination.
B: **One equation**: collect the unknown on one side: $3x-2=x+6\Rightarrow 2x=8\Rightarrow x=4$.
**Two equations** in $x,y$:
- *Elimination*: multiply so one variable has equal coefficients, then add or subtract.
- *Substitution*: make one variable the subject and substitute into the other.
X: In Unit 3 (partial fractions) and Unit 6 (circle through three points) you solve 2 or 3 simultaneous equations. Subtracting pairs of equations to eliminate the constant term is the standard move.
E: Solve $x-y=5,\ 2x+y=4$. Adding eliminates $y$: $3x=9\Rightarrow x=3$, then $y=x-5=-2$. So the lines meet at $(3,-2)$.
M: When you multiply an equation to match coefficients, multiply **every** term, including the right-hand side.

#C f-inequalities Inequalities and sign charts
pre: f-zero-product
R: Solve like an equation, but flip the inequality when multiplying or dividing by a negative; for products, use a sign chart.
F: $$a<b \ \Rightarrow\ -a>-b,\qquad (x-p)(x-q)<0 \iff p<x<q\ \ (p<q)$$
B: Adding or subtracting keeps the direction. Multiplying or dividing by a **positive** number keeps it; by a **negative** number reverses it.
For a quadratic inequality, factor it, mark the roots on a number line and test the sign in each region. For $(x-1)(x-2)\le0$, the product is negative between the roots, so $1\le x\le2$.
X: **Interval notation.** $[a,b]$ includes both ends; $]a,b[$ (also written $(a,b)$) excludes them; $[a,\infty[$ means $x\ge a$. A union $\cup$ joins separate pieces, an intersection $\cap$ keeps only the overlap.
When two conditions must both hold (for example the domain of a logarithm *and* the inequality itself), take the intersection of their solution sets.
E: Solve $x^2-6x+4<0$. Roots: $x=3\pm\sqrt5$. The parabola opens upward, so it is negative between the roots: $3-\sqrt5<x<3+\sqrt5$.
E: Solve $(x-1)(x-3)>0$. Sign chart: positive for $x<1$, negative for $1<x<3$, positive for $x>3$. So $x<1$ or $x>3$.
M: Multiplying by an unknown $u$ is safe only if you know its sign (for example $u=2^x>0$).

#C f-functions Functions: domain, range and notation
R: A function gives exactly one output for each input; its domain is every allowed input and its range is every output it produces.
B: Write $y=f(x)$. To find the **domain**, exclude inputs that break the formula:
- a denominator cannot be $0$,
- an even root needs a non-negative inside: $\sqrt{u}$ needs $u\ge0$,
- a logarithm needs a positive inside: $\ln u$ needs $u>0$.
The **range** is the set of $y$-values actually reached.
X: **One-to-one** (injective): different inputs always give different outputs. Graphically, every horizontal line meets the graph at most once (the horizontal line test). Only one-to-one functions have inverses.
**Composite** $f(g(x))$: first apply $g$, then $f$. The chain rule (Unit 2) differentiates composites.
E: Domain of $f(x)=\sqrt{4-x^2}$: need $4-x^2\ge0\Rightarrow x^2\le4\Rightarrow -2\le x\le2$.
E: Domain of $g(x)=\dfrac{1}{t-1}+\sqrt{4-t^2}$: $t\ne1$ and $-2\le t\le2$, so $[-2,1)\cup(1,2]$.
M: The range is not the same as the domain. $f(x)=x^2$ has domain $\R$ but range $[0,\infty)$.

#C f-inverse-fn Inverse functions
pre: f-functions
R: The inverse $f^{-1}$ undoes $f$: if $f(a)=b$ then $f^{-1}(b)=a$. Swap $x$ and $y$ and solve for $y$.
B: To find $f^{-1}$: write $y=f(x)$, swap $x$ and $y$, then make $y$ the subject.
The domain of $f^{-1}$ is the range of $f$, and the range of $f^{-1}$ is the domain of $f$.
The graph of $f^{-1}$ is the mirror image of the graph of $f$ in the line $y=x$.
X: A function must be one-to-one to have an inverse. Functions that are not one-to-one (like $\sin x$ or $x^2$) are given a **restricted domain** first; that is exactly how inverse trigonometric functions are defined.
E: Inverse of $f(x)=e^x$: $y=e^x$, swap: $x=e^y$, so $y=\ln x$. Hence $f^{-1}(x)=\ln x$ (domain $x>0$).
M: $f^{-1}(x)$ means the inverse function, not $\dfrac1{f(x)}$.

#C f-coord Distance, midpoint and slope
R: For points $(x_1,y_1),(x_2,y_2)$: distance $\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}$, midpoint $\left(\frac{x_1+x_2}2,\frac{y_1+y_2}2\right)$, slope $\frac{y_2-y_1}{x_2-x_1}$.
F: $$d=\sqrt{(x_2-x_1)^2+(y_2-y_1)^2},\quad M=\Big(\tfrac{x_1+x_2}{2},\tfrac{y_1+y_2}{2}\Big),\quad m=\frac{y_2-y_1}{x_2-x_1}=\tan\theta$$
B: The **slope** $m$ measures steepness: rise over run. A line rising to the right has $m>0$; falling, $m<0$; horizontal, $m=0$; vertical, slope undefined.
**Parallel** lines have equal slopes. **Perpendicular** lines have slopes with product $-1$: $m_1m_2=-1$, i.e. $m_2=-\dfrac1{m_1}$.
If the line makes angle $\theta$ with the positive $x$-axis, $m=\tan\theta$ (the inclination).
X: The distance formula is Pythagoras: the horizontal and vertical differences are the legs of a right triangle and the distance is the hypotenuse.
E: For $A(1,2)$, $B(5,-1)$: slope $=\dfrac{-1-2}{5-1}=-\dfrac34$, so a perpendicular line has slope $\dfrac43$. Midpoint $=(3,\tfrac12)$, distance $=\sqrt{16+9}=5$.
M: Keep the same order in numerator and denominator: $(y_2-y_1)$ over $(x_2-x_1)$.

#C f-line-basic Equation of a straight line
pre: f-coord
R: A line with slope $m$ through $(x_1,y_1)$ is $y-y_1=m(x-x_1)$; with intercept $c$ it is $y=mx+c$.
F: $$y-y_1=m(x-x_1),\qquad y=mx+c,\qquad ax+by+c=0\ \Rightarrow\ m=-\frac ab$$
B: Most line questions reduce to: *find a point, find the slope, use point-slope form.*
From the general form $ax+by+c=0$, solving for $y$ gives $y=-\frac abx-\frac cb$, so the slope is $-\frac ab$.
X: Vertical lines $x=k$ have no slope and cannot be written as $y=mx+c$. Horizontal lines are $y=k$ (slope $0$). The normal to a horizontal tangent is vertical, and vice versa.
E: Line through $(2,-1)$ perpendicular to $3x-4y+1=0$: slope of given line $=\tfrac34$, so required slope $=-\tfrac43$. Equation: $y+1=-\tfrac43(x-2)\Rightarrow 4x+3y-5=0$.
M: After using point-slope form, clear fractions and move everything to one side for a neat final answer.

#C f-abs Absolute value
R: $|x|$ is the distance of $x$ from $0$: $|x|=x$ if $x\ge0$ and $|x|=-x$ if $x<0$.
F: $$|x|=\begin{cases}x,& x\ge0\\-x,&x<0\end{cases},\qquad |x-a|=\text{distance from }x\text{ to }a$$
B: $|x|$ is never negative. Its graph is a V with the corner at the origin.
To work with $|x-3|$, split at the point where the inside is zero ($x=3$): it equals $x-3$ for $x\ge3$ and $3-x$ for $x<3$.
X: Integrals of absolute values (Unit 3) are done by splitting the interval at the points where the inside changes sign, exactly like this.
E: $|4-x^2|$ equals $4-x^2$ when $-2\le x\le2$ and $x^2-4$ otherwise.
M: $|-x|=|x|$, and $|a+b|$ is not always $|a|+|b|$.

#C f-logs Logarithms and their laws
pre: f-indices
R: $\log_a x=y$ means $a^y=x$. Logs turn products into sums and powers into multiples.
F: $$\log_a(xy)=\log_ax+\log_ay,\ \ \log_a\frac xy=\log_ax-\log_ay,\ \ \log_a x^n=n\log_ax,\ \ \log_a x=\frac{\ln x}{\ln a}$$
B: A logarithm answers the question *"what power?"*: $\log_2 8=3$ because $2^3=8$.
- $\log x$ means base $10$; $\ln x$ means base $e\approx2.718$ (the natural log).
- $\log_a1=0$, $\log_aa=1$, $\log_a(a^x)=x$ and $a^{\log_a x}=x$.
- You can only take the log of a **positive** number.
X: **Why the product law holds.** Let $\log_ax=p$ and $\log_ay=q$, so $x=a^p$, $y=a^q$. Then $xy=a^{p+q}$, so $\log_a(xy)=p+q$.
**Change of base** lets a calculator (which only has $\log$ and $\ln$) find any log: $\log_2 5=\dfrac{\ln5}{\ln2}\approx2.32$.
**Solving for an exponent:** from $e^{0.02t}=2$, take $\ln$ of both sides: $0.02t=\ln2$.
E: Solve $2^x=10$: $x=\log_2 10=\dfrac{\ln 10}{\ln2}\approx3.32$.
E: Simplify $\ln\sqrt{\dfrac{2x-3}{x+1}}=\tfrac12\left[\ln(2x-3)-\ln(x+1)\right]$. This makes differentiating far easier.
M: $\log(x+y)\neq\log x+\log y$. The product law is for $\log(xy)$.
M: $\ln(e^x)=x$, but $\ln x\cdot\ln y\neq\ln(xy)$.

#C f-e-number The number e and natural exponential
pre: f-indices
R: $e\approx2.71828$ is the special base for which $\dfrac{d}{dx}e^x=e^x$; $\ln$ is the logarithm with base $e$.
F: $$e=\lim_{n\to\infty}\Big(1+\frac1n\Big)^n=1+\frac1{1!}+\frac1{2!}+\frac1{3!}+\cdots\approx2.71828$$
B: $e^x$ and $\ln x$ are inverse functions: $e^{\ln x}=x$ (for $x>0$) and $\ln(e^x)=x$.
Natural growth and decay, continuous compounding and almost every calculus formula involving exponentials use base $e$.
X: The value of $e$ appears from compound interest: investing Rs 1 at 100% a year compounded $n$ times gives $(1+\frac1n)^n$, which approaches $e$ as $n$ grows. That is why continuous compounding uses $A=Pe^{rt}$.
E: Solve $e^{10k}=\frac53$: take $\ln$: $10k=\ln\frac53\approx0.5108$, so $k\approx0.0511$.
M: $e$ is a number (like $\pi$), not a variable.

#C f-trig-ratios Trigonometric ratios and standard angles
R: In a right triangle $\sin=\frac{\text{opp}}{\text{hyp}}$, $\cos=\frac{\text{adj}}{\text{hyp}}$, $\tan=\frac{\text{opp}}{\text{adj}}$; learn the values at $0,30^\circ,45^\circ,60^\circ,90^\circ$.
F: | $\theta$ | $0$ | $\frac\pi6\,(30^\circ)$ | $\frac\pi4\,(45^\circ)$ | $\frac\pi3\,(60^\circ)$ | $\frac\pi2\,(90^\circ)$ |
| --- | --- | --- | --- | --- | --- |
| $\sin\theta$ | $0$ | $\frac12$ | $\frac{1}{\sqrt2}$ | $\frac{\sqrt3}2$ | $1$ |
| $\cos\theta$ | $1$ | $\frac{\sqrt3}2$ | $\frac1{\sqrt2}$ | $\frac12$ | $0$ |
| $\tan\theta$ | $0$ | $\frac1{\sqrt3}$ | $1$ | $\sqrt3$ | undefined |
B: The reciprocal ratios are $\csc\theta=\dfrac1{\sin\theta}$, $\sec\theta=\dfrac1{\cos\theta}$, $\cot\theta=\dfrac1{\tan\theta}=\dfrac{\cos\theta}{\sin\theta}$.
Also $\tan\theta=\dfrac{\sin\theta}{\cos\theta}$.
X: A quick way to remember the table: $\sin$ of $0,30,45,60,90$ is $\frac{\sqrt0}2,\frac{\sqrt1}2,\frac{\sqrt2}2,\frac{\sqrt3}2,\frac{\sqrt4}2$; $\cos$ is the same list backwards.
E: $\sec\frac\pi3=\dfrac1{\cos\frac\pi3}=\dfrac1{1/2}=2$, and $\csc\frac\pi4=\sqrt2$.
M: $\sin^{-1}x$ is the inverse sine (an angle), not $\dfrac1{\sin x}$; the reciprocal is $\csc x$.

#C f-radians Radian measure
R: $\pi$ radians $=180^\circ$. Calculus always uses radians.
F: $$1^\circ=\frac{\pi}{180}\text{ rad},\qquad 1\text{ rad}=\frac{180^\circ}{\pi}\approx57.3^\circ$$
B: To convert degrees to radians multiply by $\dfrac\pi{180}$; radians to degrees, multiply by $\dfrac{180}\pi$.
$30^\circ=\frac\pi6$, $45^\circ=\frac\pi4$, $60^\circ=\frac\pi3$, $90^\circ=\frac\pi2$, $180^\circ=\pi$, $360^\circ=2\pi$.
X: The formula $\dfrac{d}{dx}\sin x=\cos x$ is true only in radians, because it relies on $\lim\limits_{\theta\to0}\frac{\sin\theta}\theta=1$, which needs $\theta$ in radians. That is why small changes like $1^\circ$ must be written as $\frac{\pi}{180}$ in approximation questions.
Set your calculator to **radian mode** for calculus and numerical methods.
E: $1^\circ=\frac{\pi}{180}\approx0.017453$ rad. In "estimate $\cos61^\circ$" we use $dx=\frac{\pi}{180}$.
M: Mixing degrees and radians in one calculation.

#C f-quadrants Signs in the four quadrants and reference angles
pre: f-trig-ratios, f-radians
R: All ratios are positive in Q I, only $\sin$ in Q II, only $\tan$ in Q III, only $\cos$ in Q IV; use the reference angle for the size.
F: $$\text{Q II: } \pi-\alpha,\qquad \text{Q III: } \pi+\alpha,\qquad \text{Q IV: } 2\pi-\alpha \quad(\alpha=\text{reference angle})$$
B: To find angles with $\cos x=-\tfrac{\sqrt3}2$ in $[0,2\pi]$:
1. Ignore the sign: the reference angle with $\cos\alpha=\tfrac{\sqrt3}2$ is $\alpha=\frac\pi6$.
2. Cosine is negative in Q II and Q III.
3. Q II: $\pi-\frac\pi6=\frac{5\pi}6$; Q III: $\pi+\frac\pi6=\frac{7\pi}6$.
X: Memory aid **"All Students Take Coffee"** (Q I: All, Q II: Sin, Q III: Tan, Q IV: Cos).
Negative angles: $\sin(-\theta)=-\sin\theta$, $\cos(-\theta)=\cos\theta$, $\tan(-\theta)=-\tan\theta$.
Allied angles: $\sin(\pi-\theta)=\sin\theta$, $\cos(\pi-\theta)=-\cos\theta$, $\sin(\frac\pi2-\theta)=\cos\theta$, $\cos(\frac\pi2-\theta)=\sin\theta$.
E: $\cos\frac{3\pi}4=\cos(\pi-\frac\pi4)=-\cos\frac\pi4=-\frac1{\sqrt2}$.
M: The reference angle is always between $0$ and $\frac\pi2$ and is found from the *positive* value.

#C f-trig-identities Fundamental trigonometric identities
pre: f-trig-ratios
R: $\sin^2\theta+\cos^2\theta=1$, $1+\tan^2\theta=\sec^2\theta$, $1+\cot^2\theta=\csc^2\theta$.
F: $$\sin^2\theta+\cos^2\theta=1,\qquad 1+\tan^2\theta=\sec^2\theta,\qquad 1+\cot^2\theta=\csc^2\theta$$
B: The last two come from the first by dividing by $\cos^2\theta$ or by $\sin^2\theta$.
Useful rearrangements: $\cos^2\theta=1-\sin^2\theta$, $\tan^2\theta=\sec^2\theta-1$, $\cot^2\theta=\csc^2\theta-1$.
X: In integration we often replace $\tan^2x$ by $\sec^2x-1$ because $\int\sec^2x\,dx=\tan x$ is known. In trig equations we replace $\csc^2x$ by $1+\cot^2x$ to get a quadratic in one ratio.
E: Simplify $\dfrac{\tan x-\sec x}{1+\tan^2x}=\dfrac{\tan x-\sec x}{\sec^2x}=\sin x\cos x-\cos x$.
M: $\sin^2\theta$ means $(\sin\theta)^2$, not $\sin(\theta^2)$.

#C f-compound Compound, double and half angle formulas
pre: f-trig-identities
R: $\sin(A\pm B)$, $\cos(A\pm B)$, $\tan(A\pm B)$ expand in fixed patterns; setting $A=B$ gives the double-angle formulas.
F: $$\sin(A\pm B)=\sin A\cos B\pm\cos A\sin B,\qquad \cos(A\pm B)=\cos A\cos B\mp\sin A\sin B$$ $$\tan(A\pm B)=\frac{\tan A\pm\tan B}{1\mp\tan A\tan B},\quad \sin2A=2\sin A\cos A,\quad \cos2A=\cos^2A-\sin^2A=2\cos^2A-1=1-2\sin^2A$$
B: **Half-angle forms** (from $\cos2A$):
$$\cos^2A=\frac{1+\cos2A}{2},\qquad \sin^2A=\frac{1-\cos2A}{2},\qquad \tan\frac A2=\frac{\sin A}{1+\cos A}=\frac{1-\cos A}{\sin A}$$
They turn squares into first powers, which is what integration needs.
X: $\tan2A=\dfrac{2\tan A}{1-\tan^2A}$. With $\tan A=x$ this gives $2\tan^{-1}x=\tan^{-1}\dfrac{2x}{1-x^2}$, used in Unit 9.
$1-\cos2x=2\sin^2x$ and $1+\cos2x=2\cos^2x$ simplify roots: $\sqrt{1-\cos2x}=\sqrt2\,|\sin x|$.
E: $\int\cos^2x\,dx=\int\frac{1+\cos2x}2\,dx=\frac x2+\frac{\sin2x}4+c$.
E: $\sin^3x\cos x+\cos^3x\sin x=\sin x\cos x(\sin^2x+\cos^2x)=\tfrac12\sin2x$.
M: $\sin2A\neq2\sin A$.

#C f-sum-product Product-to-sum and sum-to-product formulas
pre: f-compound
R: $2\sin A\cos B=\sin(A+B)+\sin(A-B)$; $\sin C+\sin D=2\sin\frac{C+D}2\cos\frac{C-D}2$, and similar for cosines.
F: $$2\sin A\cos B=\sin(A+B)+\sin(A-B),\quad 2\cos A\cos B=\cos(A+B)+\cos(A-B),\quad 2\sin A\sin B=\cos(A-B)-\cos(A+B)$$ $$\sin C+\sin D=2\sin\tfrac{C+D}2\cos\tfrac{C-D}2,\quad \cos C-\cos D=-2\sin\tfrac{C+D}2\sin\tfrac{C-D}2$$
B: **Product to sum** is used to integrate products like $\sin x\cos7x$.
**Sum to product** is used in derivatives from first principles ($\sin(x+h)-\sin x$) and to factorise trig equations.
X: Each formula is just two compound-angle formulas added or subtracted. For example adding $\sin(A+B)$ and $\sin(A-B)$ cancels the $\cos A\sin B$ terms and leaves $2\sin A\cos B$.
E: $\sin x\cos7x=\tfrac12[\sin8x+\sin(-6x)]=\tfrac12[\sin8x-\sin6x]$.
M: Watch the sign of $\sin(A-B)$ when $A<B$: $\sin(x-7x)=\sin(-6x)=-\sin6x$.

#C f-limits Limits and standard limits
pre: f-functions
R: $\lim\limits_{x\to a}f(x)$ is the value $f(x)$ approaches as $x$ gets close to $a$. Key limits: $\lim\limits_{\theta\to0}\frac{\sin\theta}\theta=1$, $\lim\limits_{h\to0}\frac{a^h-1}h=\ln a$.
F: $$\lim_{\theta\to0}\frac{\sin\theta}{\theta}=1,\qquad \lim_{h\to0}\frac{e^h-1}{h}=1,\qquad \lim_{h\to0}\frac{a^h-1}{h}=\ln a,\qquad \lim_{n\to\infty}\Big(1+\frac1n\Big)^n=e$$
B: A limit describes behaviour *near* a point, even when the formula cannot be evaluated *at* the point (for example $\frac{\sin\theta}\theta$ at $\theta=0$ gives $\frac00$).
If substitution gives a real number, that number is the limit (for continuous functions).
X: Limits are the foundation of the derivative: $f'(x)=\lim\limits_{h\to0}\dfrac{f(x+h)-f(x)}h$ is the slope of the tangent, obtained as the limit of slopes of chords.
A function is **continuous** at $a$ if $\lim\limits_{x\to a}f(x)=f(a)$; graphically, no jump or hole. The location-of-root theorem in Unit 8 needs continuity.
E: $\lim\limits_{h\to0}\dfrac{\sin(h^2)}{h^2}=1$ (put $\theta=h^2\to0$).
M: $\frac00$ is not $0$ or $1$; it means "more work needed".

#C f-determinant Determinants (2 × 2 and 3 × 3)
R: $\begin{vmatrix}a&b\\c&d\end{vmatrix}=ad-bc$; a $3\times3$ determinant expands along a row with alternating signs $+,-,+$.
F: $$\begin{vmatrix}a_1&b_1&c_1\\a_2&b_2&c_2\\a_3&b_3&c_3\end{vmatrix}=a_1\begin{vmatrix}b_2&c_2\\b_3&c_3\end{vmatrix}-b_1\begin{vmatrix}a_2&c_2\\a_3&c_3\end{vmatrix}+c_1\begin{vmatrix}a_2&b_2\\a_3&b_3\end{vmatrix}$$
B: Each entry of the first row multiplies the $2\times2$ determinant left after deleting its row and column, with signs $+,-,+$.
In Unit 5, determinants test whether three lines are concurrent and give the area of a triangle.
X: Row operations help: subtracting one row from another does not change the value, and can create zeros that make expansion quick.
E: $\begin{vmatrix}3&-2&-2\\1&1&-4\\2&-1&-2\end{vmatrix}=3(-2-4)+2(-2+8)-2(-1-2)=-18+12+6=0$.
M: The middle term has a **minus** sign in front: $-b_1(\dots)$.

#C f-pythagoras Right triangles and Pythagoras
pre: f-trig-ratios
R: In a right triangle $(\text{hyp})^2=(\text{opp})^2+(\text{adj})^2$; given one ratio, draw the triangle to find all the others.
B: If $\tan\alpha=\frac43$ with $\alpha$ acute, draw a right triangle with opposite $4$, adjacent $3$; the hypotenuse is $\sqrt{16+9}=5$. Then $\sin\alpha=\frac45$, $\cos\alpha=\frac35$, etc.
X: This *triangle method* converts between inverse trigonometric functions: $\cos^{-1}\frac{8}{17}=\sin^{-1}\frac{15}{17}$ because the triangle with adjacent $8$ and hypotenuse $17$ has opposite $\sqrt{289-64}=15$. It is also how angles of elevation are handled in real-life problems.
E: If $\sin\alpha=\frac7{25}$ ($\alpha$ acute), then the adjacent side is $\sqrt{625-49}=24$, so $\cos\alpha=\frac{24}{25}$ and $\tan\alpha=\frac7{24}$.
M: The triangle method gives positive ratios; for obtuse or negative angles, fix the signs with the quadrant.

#C f-rounding Rounding and decimal places
R: To give an answer to $n$ decimal places, keep at least $n+1$ decimals while working, then round once at the end.
B: Round up if the next digit is $5$ or more. $2.6133\to2.61$ (2 d.p.), $1.3283\to1.328$ (3 d.p.).
Rounding too early accumulates error, especially in iterative methods.
E: $\sqrt{9.2}\approx3.0332$, which is $3.03$ to 2 d.p.
M: Do not round intermediate iterations to the final number of decimals.
`);
