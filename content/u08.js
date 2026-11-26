/* Unit 8 · Numerical Solutions of Nonlinear Equations */
M12.addConcepts(8, String.raw`
#C u8-nonlinear Roots of nonlinear equations
pre: f-functions
R: A root (zero) of $f$ is a value with $f(x)=0$, where the graph meets the $x$-axis. Nonlinear equations usually have no neat formula, so we approximate their roots.
B: "Nonlinear" means $f$ is not of the form $ax+b$: powers, trig, exponential and log terms all make it nonlinear, for example $x-\cos x=0$ or $x^3+2x-5=0$.
Numerical methods produce a sequence of better and better estimates until the root is known to the required number of decimal places.

#C u8-lrt Location of root theorem
pre: u8-nonlinear, f-limits
R: If $f$ is continuous on $[a,b]$ and $f(a)f(b)<0$ (the values have opposite signs), then $f$ has at least one root between $a$ and $b$.
B: A continuous graph that starts below the axis and ends above it (or the other way round) must cross the axis somewhere in between. Such an interval is an **interval of sign change**.
**How to use it:** make a table of $f(x)$ at a few convenient values and look for a change of sign. Always state that $f$ is continuous (polynomials, $\sin$, $\cos$, $e^x$ are continuous; $\ln x$ for $x>0$).
E: $f(x)=x^3-3x-10$: $f(2)=-8<0$, $f(3)=8>0$, so a root lies in $[2,3]$.
M: The theorem needs continuity: $\frac1x$ changes sign on $[-1,1]$ but has no root.

#C u8-graphical Graphical method
pre: u8-lrt
R: Tabulate $f(x)$ at small steps inside an interval of sign change, plot the points, and read where the curve crosses the $x$-axis.
B: **Steps:**
1. Find an interval of sign change (if not given).
2. Compute $f$ at steps of $0.1$ (then finer if needed) inside it.
3. Plot and join smoothly; the crossing point is the root.
The graphical method gives about one or two decimal places; it is mainly a starting point for the faster methods.
X: For two decimal places, after finding the sign change between $x_1$ and $x_1+0.1$, compute $f$ at steps of $0.01$ in that small interval and pick the value where $|f|$ is smallest.

#C u8-tolerance Accuracy, tolerance and calculator setup
pre: u8-nonlinear, f-rounding
R: An approximation $c$ is accepted as a root correct to $n$ decimal places when $|f(c)|<\dfrac{10^{-n}}{2}$ (about $0.005$ for 2 d.p., $0.0005$ for 3 d.p.).
F: $$|f(c)|<\frac{10^{-n}}{2}:\quad n=2\Rightarrow0.005,\qquad n=3\Rightarrow0.0005,\qquad n=4\Rightarrow0.00005$$
B: Keep at least $n+1$ decimals (usually 4) in all working, and use **radian mode** whenever trigonometric functions appear. Round the final root once at the end.

#C u8-bisection Bisection method
pre: u8-lrt, u8-tolerance
R: Halve the interval of sign change at its midpoint $c=\frac{a+b}2$ and keep the half in which $f$ still changes sign; repeat until $|f(c)|$ is within the tolerance.
F: $$c=\frac{a+b}{2};\qquad f(a)f(c)<0\Rightarrow b=c,\qquad f(c)f(b)<0\Rightarrow a=c$$
B: **Steps:**
1. Check $f$ is continuous on $[a,b]$ and $f(a)f(b)<0$.
2. $c=\frac{a+b}2$; compute $f(c)$.
3. If $|f(c)|$ is small enough, stop: $c$ is the root.
4. Otherwise replace $a$ or $b$ by $c$ so that the signs at the ends are still opposite. Repeat.
A table with columns $a$, $b$, $c$, $f(c)$ and the new interval keeps the work organised.
X: Bisection is slow but **always works**: each step halves the interval, so after $k$ steps the root is trapped in an interval of length $\frac{b-a}{2^k}$.
M: Replacing the wrong endpoint: keep the endpoint whose sign is **opposite** to $f(c)$.

#C u8-regula-falsi Regula-falsi (false position) method
pre: u8-lrt, u8-tolerance
R: Instead of the midpoint, use where the chord joining $(a,f(a))$ and $(b,f(b))$ meets the $x$-axis: $c=\dfrac{af(b)-bf(a)}{f(b)-f(a)}$; then keep the sub-interval with a sign change.
F: $$c=\frac{a\,f(b)-b\,f(a)}{f(b)-f(a)}$$
B: The steps are exactly those of bisection; only the formula for $c$ changes. Because the chord uses the sizes of $f(a)$ and $f(b)$, regula-falsi usually needs fewer steps.
X: **Derivation:** the chord through $(a,f(a))$ and $(b,f(b))$ is $y-f(a)=\frac{f(b)-f(a)}{b-a}(x-a)$. Putting $y=0$ and $x=c$ and simplifying gives the formula.
Often one endpoint stays fixed for many iterations while the other creeps towards the root.
M: Writing $af(a)$ instead of $af(b)$ in the numerator: each endpoint is multiplied by the *other* function value.

#C u8-newton Newton–Raphson method
pre: u2-tangent-normal, u8-tolerance
R: From a starting guess $x_0$, repeat $x_{n+1}=x_n-\dfrac{f(x_n)}{f'(x_n)}$ until $|f(x_{n+1})|$ is within the tolerance.
F: $$x_{n+1}=x_n-\frac{f(x_n)}{f'(x_n)},\qquad f'(x_n)\neq0$$
B: Each step follows the **tangent** at $x_n$ down to the $x$-axis. When the guess is close to the root it converges very fast (the number of correct decimals roughly doubles each step).
**Steps:** write the equation as $f(x)=0$, find $f'(x)$, choose $x_0$ (from a sign change or the question), iterate, and stop when $|f(x_n)|$ is small enough.
X: **Derivation:** the tangent at $(x_n,f(x_n))$ is $y-f(x_n)=f'(x_n)(x-x_n)$; at its $x$-intercept $y=0$, giving $x=x_n-\frac{f(x_n)}{f'(x_n)}$.
A poor starting value (where $f'$ is small) can throw the next estimate far away; the method still often recovers, but a starting value near the root is best.
M: Forgetting to rewrite the equation as $f(x)=0$ first: for $e^x=4x$ use $f(x)=e^x-4x$.

#C u8-trapezium Trapezium rule
pre: u3-definite
R: Split $[a,b]$ into $n$ strips of width $h=\frac{b-a}n$ and add the trapezium areas: $\displaystyle\int_a^bf\,dx\approx\frac h2\big[f_0+2(f_1+\dots+f_{n-1})+f_n\big]$.
F: $$\int_a^bf(x)\,dx\approx\frac h2\Big[f(x_0)+2\big(f(x_1)+f(x_2)+\cdots+f(x_{n-1})\big)+f(x_n)\Big],\qquad h=\frac{b-a}{n}$$
B: **Steps:**
1. $h=\frac{b-a}n$ (or $n=\frac{b-a}h$ if $h$ is given).
2. Points $x_i=a+ih$ and values $f(x_i)$ (keep 4 decimals).
3. First + last, plus **twice** every middle value; multiply by $\frac h2$.
X: Each strip is a trapezium with parallel sides $f(x_{i-1})$, $f(x_i)$ and width $h$, area $\frac h2(f_{i-1}+f_i)$. Adding them counts every inner value twice.
The error shrinks as $n$ grows. For a curve that bends upward (like $x^3$ or $e^{x^2}$) the rule **overestimates**; for one that bends downward (like $\sqrt x$ or $\ln x$) it **underestimates**.
M: Doubling the first and last values as well.
`);

M12.addQuestions(8, String.raw`
#Q 8.1 1(i)
Q: Find the real root of $f(x)=3x+\sin x-e^x$ in $[0,1]$ correct to two decimal places using the graphical method.
T: u8-graphical, u8-lrt
S: $f$ is continuous; $f(0)=-1<0$ and $f(1)=1.1232>0$, so a root lies in $[0,1]$ (radian mode).
C: u8-lrt
S: Table:
| $x$ | 0.0 | 0.1 | 0.2 | 0.3 | 0.4 | 0.5 |
| --- | --- | --- | --- | --- | --- | --- |
| $f(x)$ | $-1.0000$ | $-0.7053$ | $-0.4227$ | $-0.1543$ | $0.0976$ | $0.3307$ |
The sign changes between $0.3$ and $0.4$.
C: u8-graphical
S: Refining: $f(0.36)=-0.0011$ and $f(0.37)=0.0239$, so the curve crosses the axis just above $0.36$.
P: {"x":[-0.05,1.05],"y":[-1.1,1.2],"step":0.1,"ystep":0.5,"fn":[{"f":"3*x+sin(x)-exp(x)","label":"y = 3x + sin x − eˣ","at":0.7}],"pts":[[0.3604,0,"x ≈ 0.36"]]}
A: $x\approx0.36$.

#Q 8.1 1(ii)
Q: Find the real root of $f(x)=x^4-x-10$ in $[1,2]$ correct to two decimal places using the graphical method.
T: u8-graphical, u8-lrt
S: $f(1)=-10$, $f(2)=4$: sign change, $f$ is a continuous polynomial.
C: u8-lrt
S: Table: $f(1.7)=-3.3479$, $f(1.8)=-1.3024$, $f(1.9)=1.1321$: the root is between $1.8$ and $1.9$.
C: u8-graphical
S: Refining: $f(1.85)=-0.1365$, $f(1.86)=0.1088$: the crossing is nearer $1.86$ (true root $1.8556$).
P: {"x":[0.95,2.05],"y":[-11,5],"step":0.1,"ystep":2,"fn":[{"f":"x**4-x-10","label":"y = x⁴ − x − 10","at":1.55}],"pts":[[1.8556,0,"x ≈ 1.86"]]}
A: $x\approx1.86$.

#Q 8.1 2(i)
Q: Find an interval of sign change and the real root of $f(x)=x^3-x-1$ correct to two decimal places using the graphical method.
T: u8-graphical, u8-lrt
S: $f(1)=-1$, $f(2)=5$: interval $[1,2]$.
C: u8-lrt
S: Table: $f(1.3)=-0.1030$, $f(1.4)=0.3440$; then $f(1.32)=-0.0201$, $f(1.33)=0.0226$.
C: u8-graphical
S: The root is between $1.32$ and $1.33$, closer to $1.32$ (true value $1.3247$).
A: $x\approx1.32$.

#Q 8.1 2(ii)
Q: Find an interval of sign change and the real root of $f(x)=xe^x-2$ correct to two decimal places using the graphical method.
T: u8-graphical, u8-lrt
S: $f(0)=-2$, $f(1)=e-2=0.7183$: interval $[0,1]$.
C: u8-lrt
S: Table: $f(0.8)=-0.2196$, $f(0.9)=0.2136$; then $f(0.85)=-0.0113$, $f(0.86)=0.0323$.
C: u8-graphical
A: $x\approx0.85$.

#Q 8.1 2(iii)
Q: Find an interval of sign change and the real root of $f(x)=\ln x-2$ correct to two decimal places using the graphical method.
T: u8-graphical, u8-lrt
S: $\ln7=1.9459$ and $\ln8=2.0794$: $f(7)=-0.0541$, $f(8)=0.0794$: interval $[7,8]$.
C: u8-lrt
S: Table: $f(7.3)=-0.0121$, $f(7.4)=0.0015$; then $f(7.38)=-0.0012$, $f(7.39)=0.0001$.
C: u8-graphical
S: Check: the exact root is $e^2=7.389\ldots$ ✓.
A: $x\approx7.39$.

#Q 8.2 1(ii)
Q: Use the bisection method to find the root of $f(x)=3x-\cos x-1$ in $[0,1]$ correct to 3 decimal places.
T: u8-bisection, u8-tolerance
S: $f(0)=-2<0$, $f(1)=1.4597>0$; $f$ is continuous. Tolerance for 3 d.p.: $|f(c)|<0.0005$ (radian mode).
C: u8-tolerance
S: Iterations ($c=\frac{a+b}2$, 4 decimals):
| $n$ | $a$ | $b$ | $c$ | $f(c)$ |
| --- | --- | --- | --- | --- |
| 1 | 0 | 1 | 0.5 | $-0.3776$ |
| 2 | 0.5 | 1 | 0.75 | $0.5183$ |
| 3 | 0.5 | 0.75 | 0.625 | $0.0640$ |
| 4 | 0.5 | 0.625 | 0.5625 | $-0.1584$ |
| 5 | 0.5625 | 0.625 | 0.5938 | $-0.0474$ |
| 6 | 0.5938 | 0.625 | 0.6094 | $0.0082$ |
| 7 | 0.5938 | 0.6094 | 0.6016 | $-0.0196$ |
| 8 | 0.6016 | 0.6094 | 0.6055 | $-0.0057$ |
| 9 | 0.6055 | 0.6094 | 0.6075 | $0.0014$ |
| 10 | 0.6055 | 0.6075 | 0.6065 | $-0.0021$ |
| 11 | 0.6065 | 0.6075 | 0.6070 | $-0.0004$ |
C: u8-bisection
S: $|f(0.6070)|\approx0.0004<0.0005$, so stop.
A: $x\approx0.607$.

#Q 8.2 1(iv)
Q: Use the bisection method to find the root of $f(x)=x^3-3x-10$ in $[2,3]$ correct to 3 decimal places.
T: u8-bisection, u8-tolerance
S: $f(2)=-8$, $f(3)=8$. Tolerance $0.0005$.
C: u8-lrt
S: | $n$ | $a$ | $b$ | $c$ | $f(c)$ |
| --- | --- | --- | --- | --- |
| 1 | 2 | 3 | 2.5 | $-1.8750$ |
| 2 | 2.5 | 3 | 2.75 | $2.5469$ |
| 3 | 2.5 | 2.75 | 2.625 | $0.2129$ |
| 4 | 2.5 | 2.625 | 2.5625 | $-0.8611$ |
| 5 | 2.5625 | 2.625 | 2.5938 | $-0.3308$ |
| 6 | 2.5938 | 2.625 | 2.6094 | $-0.0609$ |
| 7 | 2.6094 | 2.625 | 2.6172 | $0.0755$ |
| 8 | 2.6094 | 2.6172 | 2.6133 | $0.0072$ |
| 9 | 2.6094 | 2.6133 | 2.6113 | $-0.0277$ |
| 10 | 2.6113 | 2.6133 | 2.6123 | $-0.0103$ |
| 11 | 2.6123 | 2.6133 | 2.6128 | $-0.0015$ |
| 12 | 2.6128 | 2.6133 | 2.6131 | $0.0037$ |
| 13 | 2.6128 | 2.6131 | 2.6130 | $0.0020$ |
| 14 | 2.6128 | 2.6130 | 2.6129 | $0.0002$ |
C: u8-bisection
S: $|f(2.6129)|\approx0.0002<0.0005$: stop.
A: $x\approx2.613$.

#Q 8.2 2(i)
Q: Use the regula-falsi method to find the root of $3x^3-9x^2+8=0$ in $[2,3]$ correct to 2 decimal places.
T: u8-regula-falsi, u8-tolerance
S: $f(2)=-4$, $f(3)=8$. Tolerance $0.005$. Formula $c=\dfrac{af(b)-bf(a)}{f(b)-f(a)}$.
C: u8-regula-falsi
S: First step: $c=\dfrac{2(8)-3(-4)}{8-(-4)}=\dfrac{28}{12}=2.3333$, $f(c)=-2.8891<0$, so $a=2.3333$.
S: Continuing (the end $b=3$ stays fixed):
| $n$ | $a$ | $c$ | $f(c)$ |
| --- | --- | --- | --- |
| 2 | 2.3333 | 2.5102 | $-1.2588$ |
| 3 | 2.5102 | 2.5768 | $-0.4300$ |
| 4 | 2.5768 | 2.5984 | $-0.1344$ |
| 5 | 2.5984 | 2.6050 | $-0.0414$ |
| 6 | 2.6050 | 2.6070 | $-0.0130$ |
| 7 | 2.6070 | 2.6076 | $-0.0045$ |
S: $|f(2.6076)|\approx0.0045<0.005$: stop.
A: $x\approx2.61$.

#Q 8.2 2(iv)
Q: Use the regula-falsi method to find a real root of $3x+\sin x=e^x$ correct to 2 decimal places (find an interval of sign change first).
T: u8-regula-falsi, u8-lrt
S: Write $f(x)=3x+\sin x-e^x$. $f(0)=-1$, $f(1)=1.1232$: interval $[0,1]$ (radian mode).
C: u8-lrt
S: $c_1=\dfrac{0\cdot1.1232-1\cdot(-1)}{1.1232+1}=0.4710$, $f=0.2652>0\Rightarrow b=0.4710$.
C: u8-regula-falsi
S: $c_2=\dfrac{0\cdot0.2652-0.4710(-1)}{0.2652+1}=0.3723$, $f=0.0296>0\Rightarrow b=0.3723$.
S: $c_3=\dfrac{0.3723}{1.0296}=0.3616$, $f=0.0029$; $|f|<0.005$: stop.
A: $x\approx0.36$.

#Q 8.2 3(i)
Q: Use the Newton–Raphson method to find the root of $x^3+x^2=3(x+1)$ near $x=1$, accurate to 2 decimal places.
T: u8-newton
S: $f(x)=x^3+x^2-3x-3$, $f'(x)=3x^2+2x-3$.
C: u8-newton
S: $x_0=1$: $x_1=1-\dfrac{-4}{2}=3$ (a big jump because $f'(1)=2$ is small).
W: Newton's method can overshoot from a poor start, but it usually comes back quickly.
!:
S: $x_2=3-\dfrac{24}{30}=2.2$, $\ x_3=2.2-\dfrac{5.888}{15.92}=1.8302$, $\ x_4=1.8302-\dfrac{0.9895}{10.7093}=1.7378$, $\ x_5=1.7378-\dfrac{0.0546}{9.5355}=1.7321$.
S: $f(1.7321)=0.0005<0.005$: stop. (Indeed $f(x)=(x+1)(x^2-3)$, so the root is $\sqrt3=1.7320\ldots$)
C: f-factor
A: $x\approx1.73$.

#Q 8.2 3(ii)
Q: Use the Newton–Raphson method to find the root of $e^x=4x$ near $x=2$, accurate to 3 decimal places.
T: u8-newton
S: $f(x)=e^x-4x$, $f'(x)=e^x-4$, $x_0=2$.
C: u8-newton
S: $x_1=2-\dfrac{-0.6109}{3.3891}=2.18027$; $\ x_2=2.18027-\dfrac{0.12762}{4.84870}=2.15395$; $\ x_3=2.15395-\dfrac{0.00304}{4.61884}=2.15329$.
S: $|f(2.15329)|\approx0.00001<0.0005$: stop.
A: $x\approx2.153$.

#Q 8.2 3(iii)
Q: Use the Newton–Raphson method to find the real root of $x^3+2x-5=0$ accurate to 4 decimal places.
N: Some answer keys give 2.0946, which is the root of $x^3-2x-5=0$; the equation as printed, $x^3+2x-5=0$, has its root near 1.3283.
T: u8-newton, u8-lrt
S: $f(x)=x^3+2x-5$: $f(1)=-2$, $f(2)=7$, so the root is in $[1,2]$; take $x_0=1$. $f'(x)=3x^2+2$.
C: u8-lrt
S: $x_1=1-\dfrac{-2}{5}=1.4$; $\ x_2=1.4-\dfrac{0.544}{7.88}=1.330964$; $\ x_3=1.330964-\dfrac{0.019684}{7.314400}=1.328273$.
C: u8-newton
S: $|f(1.328273)|\approx0.00003<0.00005$: stop.
A: $x\approx1.3283$.

#Q 8.3 3
Q: Use the trapezoidal rule to approximate $\displaystyle\int_1^7\ln x\,dx$ taking $n=6$.
T: u8-trapezium
S: $h=\dfrac{7-1}6=1$; values $\ln1,\ldots,\ln7$: $0,\ 0.6931,\ 1.0986,\ 1.3863,\ 1.6094,\ 1.7918,\ 1.9459$.
C: u8-trapezium
S: $\dfrac12\left[0+2(0.6931+1.0986+1.3863+1.6094+1.7918)+1.9459\right]=\dfrac12[13.1584+1.9459]=7.5522$.
S: Exact value: $[x\ln x-x]_1^7=7\ln7-6\approx7.6214$ (the rule underestimates because $\ln x$ bends downward).
A: $\approx7.5522$.

#Q 8.3 4
Q: Use the trapezoidal rule to approximate $\displaystyle\int_0^2x^3\,dx$ taking $n=8$.
T: u8-trapezium
S: $h=0.25$; values of $x^3$: $0,\ 0.0156,\ 0.125,\ 0.4219,\ 1,\ 1.9531,\ 3.375,\ 5.3594,\ 8$.
C: u8-trapezium
S: Middle values sum to $12.25$: $\ \dfrac{0.25}2\left[0+2(12.25)+8\right]=0.125\times32.5=4.0625$.
S: Exact: $\left[\frac{x^4}4\right]_0^2=4$ (overestimate, since $x^3$ bends upward here).
A: $4.0625$.

#Q 8.3 5
Q: Use the trapezoidal rule to approximate $\displaystyle\int_0^4\sqrt x\,dx$ taking $n=4$.
T: u8-trapezium
S: $h=1$; values: $0,\ 1,\ 1.4142,\ 1.7321,\ 2$.
C: u8-trapezium
S: $\dfrac12\left[0+2(1+1.4142+1.7321)+2\right]=\dfrac12(10.2926)=5.1463$.
S: Exact: $\frac23\cdot4^{3/2}=\frac{16}3\approx5.3333$.
A: $\approx5.1463$.

#Q 8.3 6
Q: Use the trapezoidal rule to approximate $\displaystyle\int_{-1}^{1}e^{-x^2}\,dx$ taking $h=0.4$.
T: u8-trapezium
S: $n=\dfrac{1-(-1)}{0.4}=5$; points $-1,-0.6,-0.2,0.2,0.6,1$.
C: u8-trapezium
S: Values: $0.3679,\ 0.6977,\ 0.9608,\ 0.9608,\ 0.6977,\ 0.3679$ (symmetric, since $e^{-x^2}$ is even).
S: $\dfrac{0.4}2\left[0.3679+2(0.6977+0.9608+0.9608+0.6977)+0.3679\right]=0.2\times7.3698\approx1.474$.
A: $\approx1.474$.

#Q 8.3 9
Q: Show by the trapezium rule that the area bounded by $y=\sqrt{8-2x-x^2}$ and the $x$-axis, using $n=8$, is about 13.5 square units. Calculate the exact area using the formula for the area of a semicircle.
T: u8-trapezium, f-complete-square
S: $8-2x-x^2=9-(x+1)^2\ge0$ for $-4\le x\le2$, so integrate over $[-4,2]$ with $h=\dfrac68=0.75$.
C: f-complete-square
S: With $u=x+1=-3,-2.25,\ldots,3$: $y=\sqrt{9-u^2}$ gives $0,\ 1.9843,\ 2.5981,\ 2.9047,\ 3,\ 2.9047,\ 2.5981,\ 1.9843,\ 0$.
S: $\dfrac{0.75}2\left[0+2(17.9742)+0\right]=0.375\times35.9484\approx13.48\approx13.5$.
C: u8-trapezium
S: Exact: $y^2=9-(x+1)^2$ is the upper half of the circle with centre $(-1,0)$ and radius $3$, so the area is $\tfrac12\pi(3)^2=\dfrac{9\pi}2\approx14.137$.
A: Trapezium rule $\approx13.48\approx13.5$; exact area $\frac{9\pi}{2}\approx14.14$.

#Q 8.3 10
Q: Setting $h=0.5$, use the trapezium rule to find the approximate area bounded by $y=e^{x^2}$ from $x=0$ to $x=4$.
T: u8-trapezium
S: $n=\dfrac{4}{0.5}=8$; values of $e^{x^2}$ at $0,0.5,\ldots,4$: $1,\ 1.2840,\ 2.7183,\ 9.4877,\ 54.5982,\ 518.0128,\ 8103.0839,\ 208981.2889,\ 8886110.5205$.
C: u8-trapezium
S: Middle values sum to $217670.47$: $\ \dfrac{0.5}2\left[1+2(217670.47)+8886110.52\right]\approx2330363$.
S: This is a large overestimate of the true area (about $1.15\times10^6$): $e^{x^2}$ grows so steeply that straight chords lie well above the curve, so a much smaller $h$ would be needed.
A: $\approx2.330\times10^6$ square units.
`);

M12.addMCQs(8, String.raw`
#M
c: u8-lrt
Q: If $f$ is continuous on $[a,b]$ and $f(a)f(b)<0$, then
O: $f$ has no root in $(a,b)$
O*: $f$ has at least one root in $(a,b)$
O: $f$ has exactly two roots
O: $f(a)=f(b)$
E: This is the location of root theorem.

#M
c: u8-bisection
Q: In the bisection method the next approximation is
O*: $\dfrac{a+b}{2}$
O: $\dfrac{af(b)-bf(a)}{f(b)-f(a)}$
O: $a-\dfrac{f(a)}{f'(a)}$
O: $\sqrt{ab}$
E: The interval is halved each time.

#M
c: u8-regula-falsi
Q: The regula-falsi formula is $c=$
O: $\dfrac{af(a)-bf(b)}{f(b)-f(a)}$
O*: $\dfrac{af(b)-bf(a)}{f(b)-f(a)}$
O: $\dfrac{a+b}{2}$
O: $b-\dfrac{f(b)}{f'(b)}$
E: It is where the chord through $(a,f(a))$ and $(b,f(b))$ meets the axis.

#M
c: u8-newton
Q: The Newton–Raphson formula is $x_{n+1}=$
O: $x_n+\dfrac{f(x_n)}{f'(x_n)}$
O*: $x_n-\dfrac{f(x_n)}{f'(x_n)}$
O: $x_n-\dfrac{f'(x_n)}{f(x_n)}$
O: $\dfrac{x_n+f(x_n)}{2}$
E: Follow the tangent at $x_n$ to the $x$-axis.

#M
c: u8-newton
Q: The Newton–Raphson method fails when
O: $f(x_n)=0$
O*: $f'(x_n)=0$
O: $x_n>1$
O: $f$ is a polynomial
E: Division by zero: the tangent is horizontal and never meets the axis.

#M
c: u8-tolerance
Q: To give a root correct to 3 decimal places we stop when $|f(c)|$ is less than about
O: $0.05$
O: $0.005$
O*: $0.0005$
O: $0.00005$
E: $\frac{10^{-3}}{2}=0.0005$.

#M
c: u8-trapezium
Q: In the trapezium rule with $n$ strips on $[a,b]$, the width is $h=$
O: $\frac{b+a}{n}$
O*: $\frac{b-a}{n}$
O: $\frac{n}{b-a}$
O: $(b-a)n$
E: The interval is divided into $n$ equal parts.

#M
c: u8-trapezium
Q: In the trapezium rule the middle ordinates are
O: added once
O*: doubled
O: halved
O: ignored
E: Each inner value is shared by two neighbouring trapeziums.
`);
