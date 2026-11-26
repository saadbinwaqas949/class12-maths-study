/* Unit 1 · Graphical Representation of Functions */
M12.addConcepts(1, String.raw`
#C u1-quad-factored Quadratic in factored form
pre: f-zero-product, f-functions
R: $y=a(x-h)(x-k)$ shows the roots $h,k$ directly, opens up if $a>0$ and down if $a<0$, and crosses the $y$-axis at $ahk$.
F: $$y=a(x-h)(x-k):\quad \text{roots } x=h,\ x=k;\quad \text{vertex at } x=\frac{h+k}2;\quad y\text{-intercept}=ahk$$
B: Every quadratic that crosses the $x$-axis can be written as $y=a(x-h)(x-k)$. Each piece tells you something:
- $a$: the **direction**. $a>0$ gives a U shape (opens upward); $a<0$ gives an upside-down U.
- $h$ and $k$: the **$x$-intercepts** (roots), because $y=0$ exactly when $x=h$ or $x=k$.
- the **vertex** lies halfway between the roots, at $x=\frac{h+k}{2}$; substitute this $x$ to get its $y$.
- the **$y$-intercept**: put $x=0$ to get $y=a(-h)(-k)=ahk$.
If $h=k$ the form is $y=a(x-h)^2$: the parabola only **touches** the $x$-axis at $(h,0)$, which is also the vertex.
X: **Why the vertex is midway.** A parabola is symmetric about a vertical line (its axis). The two roots are mirror images in that line, so the line passes through their midpoint $\frac{h+k}2$, and the vertex sits on it.
**Sketching recipe:** direction → roots → vertex → $y$-intercept → one or two extra points → smooth symmetric curve.
E: Sketch $y=2(x-1)(x-3)$. Here $a=2>0$ (opens up), roots $1$ and $3$, vertex at $x=2$ with $y=2(1)(-1)=-2$, $y$-intercept $2(-1)(-3)=6$. Plot $(1,0),(3,0),(2,-2),(0,6)$ and the mirror point $(4,6)$.
E: $y=-4x^2-8x-4=-4(x^2+2x+1)=-4(x+1)^2$: opens down and touches the $x$-axis only at $(-1,0)$, its vertex.
M: $y=3(x+1)(x-1)$ has root $x=-1$ (not $+1$) from the factor $x+1$: set each factor equal to zero.

#C u1-parabola-features Vertex, axis and intercepts of a parabola
pre: u1-quad-factored, f-complete-square
R: The vertex is the turning point; the axis of symmetry is the vertical line through it; intercepts come from putting $x=0$ or $y=0$.
B: For $y=ax^2+bx+c$ the axis is $x=-\dfrac{b}{2a}$. Completing the square gives the vertex form $y=a(x-p)^2+q$ with vertex $(p,q)$.
A good sketch shows: the direction, the vertex, both intercepts and the symmetry.
X: When the roots are not nice numbers, use the vertex form instead of factors. For example $y=x^2+2x+1=(x+1)^2$ has vertex $(-1,0)$.
E: $y=2x^2+x-3$: axis $x=-\frac{1}{4}$, vertex $y=2\cdot\frac1{16}-\frac14-3=-\frac{25}{8}$, so the vertex is $\left(-\frac14,-\frac{25}8\right)$.
M: The axis formula is $-\frac{b}{2a}$, not $\frac{b}{2a}$.

#C u1-quad-from-graph Finding a quadratic from its graph
pre: u1-quad-factored, f-linear-eq
R: Read the roots $h,k$ from the graph, write $y=a(x-h)(x-k)$, then use one more point to find $a$.
B: A parabola is fixed by its two roots plus one more point.
1. Write $y=a(x-h)(x-k)$ using the given $x$-intercepts.
2. Substitute the extra point $(x_0,y_0)$ and solve for $a$.
3. Write the final equation (expanded if asked).
If the graph only **touches** the $x$-axis at $x=h$, use $y=a(x-h)^2$.
E: Roots $1$ and $2$, passing through $(3,4)$: $4=a(3-1)(3-2)=2a\Rightarrow a=2$, so $y=2(x-1)(x-2)=2x^2-6x+4$.
M: A root at $x=-2$ gives the factor $(x+2)$, not $(x-2)$.

#C u1-alg-trans Algebraic and transcendental functions
pre: f-functions
R: Algebraic functions are built from $x$ by $+,-,\times,\div$ and roots; any function that is not algebraic (exponential, logarithmic, trigonometric) is transcendental.
B: Examples of algebraic functions: polynomials, $\dfrac{2x-3}{x+1}$, $\sqrt{x^2+2x}$.
Transcendental functions "transcend" algebra: $a^x$, $\ln x$, $\sin x$, $\sin^{-1}x$ and combinations of them.
E: $\sqrt{x^2+1}$ is algebraic; $e^{x}+x^2$ is transcendental (it contains $e^x$).

#C u1-exponential Exponential functions
pre: f-indices, f-functions, f-e-number
R: $f(x)=a^x$ with $a>0,\ a\ne1$: domain $\R$, every value positive, range $(0,\infty)$, $y$-intercept $(0,1)$, no $x$-intercept, one-to-one.
F: $$f(x)=a^x\ (a>0,\ a\neq1):\quad \text{domain } \R,\quad \text{range } (0,\infty),\quad f(0)=1$$
B: In $a^x$ the variable is in the **exponent**. Key facts:
- It is defined for every real $x$, so the **domain is $\R$**, and the graph is one unbroken curve.
- $a^x>0$ for every $x$, so the graph lies **above** the $x$-axis and there is **no $x$-intercept**.
- $a^0=1$, so every exponential graph passes through **$(0,1)$**.
- Its values cover every positive number, so the **range is $(0,\infty)$**.
- Different inputs give different outputs: $a^x$ is **one-to-one**, so $a^p=a^q\Rightarrow p=q$.
With $a>1$ (like $2^x$, $3^x$, $e^x$) the function models **growth**; with $0<a<1$ (like $(\frac12)^x$) it models **decay**.
X: To sketch, make a table. For $3^x$: $x=-2,-1,0,1,2$ gives $\frac19,\frac13,1,3,9$. The values get very small on the left (but stay positive) and grow quickly on the right.
The base $e\approx2.718$ gives the **natural exponential** $e^x$, the most important one in calculus.
E: For $f(x)=2^{x}$: $f(-1)=\tfrac12$, $f(0)=1$, $f(3)=8$. All values are positive.
M: $a^x$ is never zero or negative, so equations like $3^x=-\tfrac32$ have **no** solution.

#C u1-hyperbolic Hyperbolic functions
pre: u1-exponential
R: $\sinh x=\dfrac{e^x-e^{-x}}2$, $\cosh x=\dfrac{e^x+e^{-x}}2$, and $\tanh,\coth,\operatorname{sech},\operatorname{csch}$ are built from them like the trig ratios.
F: $$\sinh x=\frac{e^x-e^{-x}}{2},\quad \cosh x=\frac{e^x+e^{-x}}{2},\quad \tanh x=\frac{\sinh x}{\cosh x},\quad \coth x=\frac{\cosh x}{\sinh x},\quad \sech x=\frac1{\cosh x},\quad \csch x=\frac1{\sinh x}$$
B: | function | domain | range |
| --- | --- | --- |
| $\sinh x$ | $\R$ | $\R$ |
| $\cosh x$ | $\R$ | $[1,\infty)$ |
| $\tanh x$ | $\R$ | $(-1,1)$ |
| $\coth x$ | $\R\setminus\{0\}$ | $(-\infty,-1)\cup(1,\infty)$ |
| $\sech x$ | $\R$ | $(0,1]$ |
| $\csch x$ | $\R\setminus\{0\}$ | $\R\setminus\{0\}$ |
$\coth$ and $\csch$ exclude $0$ because $\sinh 0=0$ would be in a denominator.
X: They are called *hyperbolic* because $x=\cosh t,\ y=\sinh t$ satisfies $x^2-y^2=1$, the equation of a hyperbola, just as $\cos t,\sin t$ satisfy $x^2+y^2=1$ (a circle).
Useful values: $\sinh0=0$, $\cosh0=1$.
E: $\tanh x=\dfrac{\sinh x}{\cosh x}=\dfrac{e^x-e^{-x}}{e^x+e^{-x}}$. Multiplying top and bottom by $e^x$: $\tanh x=\dfrac{e^{2x}-1}{e^{2x}+1}$.
M: $\cosh x$ has a **plus** sign; $\sinh x$ has the **minus**.

#C u1-hyp-identities Hyperbolic identities
pre: u1-hyperbolic, f-expand
R: The master identity is $\cosh^2x-\sinh^2x=1$; dividing it by $\cosh^2x$ or $\sinh^2x$ gives the others.
F: $$\cosh^2x-\sinh^2x=1,\quad 1-\tanh^2x=\sech^2x,\quad \coth^2x-1=\csch^2x,\quad \sinh2x=2\sinh x\cosh x,\quad \cosh2x=\cosh^2x+\sinh^2x$$
B: **Two ways to prove a hyperbolic identity:**
1. Replace every function by exponentials and simplify (always works).
2. Start from a known identity and divide or rearrange (quicker).
Proof of the master identity: $\cosh^2x-\sinh^2x=\dfrac{(e^x+e^{-x})^2-(e^x-e^{-x})^2}{4}=\dfrac{(e^{2x}+2+e^{-2x})-(e^{2x}-2+e^{-2x})}4=\dfrac44=1$.
X: Notice how these mirror trig identities with sign changes: $\cos^2+\sin^2=1$ becomes $\cosh^2-\sinh^2=1$ (Osborn's rule: change the sign of any product of two sines).
The key algebra fact is $e^x\cdot e^{-x}=1$, which produces the constant terms.
E: Show $\cosh2x=1+2\sinh^2x$: $1+2\sinh^2x=1+2\cdot\dfrac{e^{2x}-2+e^{-2x}}4=\dfrac{e^{2x}+e^{-2x}}2=\cosh2x$.
M: $(e^x-e^{-x})^2=e^{2x}-2+e^{-2x}$: the middle term is $-2$, because $2\cdot e^x\cdot e^{-x}=2$.

#C u1-inv-hyperbolic Inverse hyperbolic functions as logarithms
pre: u1-hyperbolic, f-quadratic-formula, f-logs
R: Write $x=\sinh y$ (or another), turn it into a quadratic in $e^y$, solve, keep the root that is allowed, and take $\ln$.
F: $$\sinh^{-1}x=\ln\big(x+\sqrt{x^2+1}\big),\ \ \cosh^{-1}x=\ln\big(x+\sqrt{x^2-1}\big),\ \ \tanh^{-1}x=\tfrac12\ln\frac{1+x}{1-x},$$ $$\coth^{-1}x=\tfrac12\ln\frac{x+1}{x-1},\ \ \sech^{-1}x=\ln\frac{1+\sqrt{1-x^2}}{x},\ \ \csch^{-1}x=\ln\Big(\frac1x+\sqrt{\frac1{x^2}+1}\Big)$$
B: **Method** (shown for $\sinh^{-1}$):
1. Let $y=\sinh^{-1}x$, so $x=\sinh y=\dfrac{e^y-e^{-y}}2$.
2. Multiply by $2e^y$: $2xe^y=e^{2y}-1$, i.e. $(e^y)^2-2x(e^y)-1=0$, a quadratic in $u=e^y$.
3. Quadratic formula: $e^y=x\pm\sqrt{x^2+1}$.
4. $e^y>0$ but $x-\sqrt{x^2+1}<0$, so keep the $+$ sign.
5. Take $\ln$: $y=\ln\big(x+\sqrt{x^2+1}\big)$.
X: Choosing the sign is the only real thinking step. Use what you know about $e^y$: it is always positive, and if the range of the inverse is $[0,\infty)$ then $y\ge0$, so $e^y\ge1$.
Domains: $\cosh^{-1}$ needs $x\ge1$, $\tanh^{-1}$ needs $|x|<1$, $\coth^{-1}$ needs $|x|>1$, $\sech^{-1}$ needs $0<x\le1$, $\csch^{-1}$ needs $x\ne0$.
E: $\sinh^{-1}\!\left(\tfrac34\right)=\ln\!\left(\tfrac34+\sqrt{\tfrac9{16}+1}\right)=\ln\!\left(\tfrac34+\tfrac54\right)=\ln2$.
M: For $\tanh$ and $\coth$ it is easier to multiply top and bottom by $e^y$ first, giving $\dfrac{e^{2y}-1}{e^{2y}+1}$; then solve for $e^{2y}$ (a linear equation, no quadratic needed).

#C u1-log-function The logarithmic function
pre: f-logs, f-inverse-fn, u1-exponential
R: $y=\log_ax$ is the inverse of $y=a^x$: domain $(0,\infty)$, range $\R$; $\ln x$ uses base $e$.
B: Because $\log_a x$ undoes $a^x$, the facts swap: the domain of $\log_ax$ is the range of $a^x$, namely $x>0$, and its range is all real numbers.
Its graph is the reflection of the graph of $a^x$ in the line $y=x$, and it passes through $(1,0)$ because $\log_a1=0$.
X: Solving any equation or inequality with $\log$ starts by writing the **domain conditions**: everything inside a logarithm must be positive. Answers that break these conditions are rejected.
E: Domain of $\ln(x^2-1)$: $x^2-1>0\Rightarrow x<-1$ or $x>1$.
M: Forgetting the domain and keeping a "solution" that makes a log argument zero or negative.

#C u1-modulus The modulus (absolute value) function
pre: f-abs
R: $f(x)=|x|$ is a V-shaped graph with its corner at the origin and arms $y=x$ (right) and $y=-x$ (left).
B: $|x|$ is defined piece by piece: $x$ for $x\ge0$ and $-x$ for $x<0$. Points: $(0,0),(2,2),(-2,2)$.
After transformations, $y=a|bx-c|+d$ is still a V; the corner is where $bx-c=0$.
E: $y=|x-7|$ has its corner at $(7,0)$.
M: The corner of $|2x-7|$ is at $x=3.5$, not at $x=7$.

#C u1-inverse-graph Inverse functions from graphs
pre: f-inverse-fn
R: The graph of $f^{-1}$ is the mirror image of the graph of $f$ in the line $y=x$; only one-to-one functions have inverses.
B: **Method:** draw $f$, draw the line $y=x$, and reflect points: $(a,b)$ on $f$ becomes $(b,a)$ on $f^{-1}$.
Use the **horizontal line test** to check that $f$ is one-to-one first.
E: Reflecting $y=e^x$ (through $(0,1)$ and $(1,e)$) in $y=x$ gives $y=\ln x$ (through $(1,0)$ and $(e,1)$).

#C u1-shift Shifting graphs (translations)
pre: f-functions
R: $y=f(x-h)$ moves the graph $h$ units right; $y=f(x)+k$ moves it $k$ units up.
F: $$y=f(x-h)+k:\quad \text{right } h \ (\text{left if } h<0),\quad \text{up } k\ (\text{down if } k<0)$$
B: **Horizontal shifts work "opposite" to the sign.** In $f(x-3)$ the graph moves **right** by 3, because the new graph reaches the old value $f(0)$ only when $x-3=0$, i.e. at $x=3$.
**Vertical shifts work as expected:** $f(x)+2$ lifts every point by 2.
X: Shifting does not change the shape, only the position. A point $(a,b)$ on $y=f(x)$ moves to $(a+h,\ b+k)$ on $y=f(x-h)+k$.
E: $f(x)=\ln x$ shifted 1 unit right is $\ln(x-1)$; then 3 units up is $\ln(x-1)+3$.
M: $f(x+2)$ is a shift **left** by 2.

#C u1-scale Stretching, compressing and reflecting
pre: u1-shift
R: $y=af(x)$ stretches vertically by $a$ (compresses if $0<a<1$); $y=f(bx)$ compresses horizontally by $b$ (stretches if $0<b<1$); negatives reflect.
F: $$y=a\,f(x):\ \text{vertical scale by } a,\qquad y=f(bx):\ \text{horizontal scale by } \tfrac1b$$
B: - **Vertical stretch by 2:** multiply the whole function by 2: $y=2f(x)$.
- **Vertical compression by 2:** multiply by $\tfrac12$: $y=\tfrac12f(x)$.
- **Horizontal compression by 2:** replace $x$ by $2x$: $y=f(2x)$ (points move twice as close to the $y$-axis).
- **Horizontal stretch by 3:** replace $x$ by $\tfrac x3$: $y=f\!\left(\tfrac x3\right)$.
- $y=-f(x)$ reflects in the $x$-axis; $y=f(-x)$ reflects in the $y$-axis.
X: Horizontal changes act on $x$ *before* $f$ is applied, so they feel backwards: multiplying $x$ by 2 makes the graph narrower, not wider.
A point $(p,q)$ on $y=f(x)$ moves to $(p,aq)$ on $y=af(x)$ and to $(\tfrac pb,q)$ on $y=f(bx)$.
E: Vertical stretch of $\sqrt x$ by 2: $y=2\sqrt x$. The point $(4,2)$ moves to $(4,4)$.
M: "Compress vertically by a factor 2" means multiply by $\tfrac12$, not by 2.

#C u1-transform-sequence Applying transformations in order
pre: u1-shift, u1-scale
R: Apply the changes one at a time, each to the *current* formula: horizontal changes replace $x$, vertical changes act on the whole expression.
B: **Rules for each step:**
- shift right $h$: replace every $x$ by $x-h$;
- horizontal compression by $b$: replace every $x$ by $bx$;
- vertical stretch by $a$: multiply the whole current expression by $a$;
- shift up $k$: add $k$ to the whole expression.
X: Order matters. Shifting $|x|$ right by 7 gives $|x-7|$; *then* compressing horizontally by 2 replaces $x$ by $2x$, giving $|2x-7|$, whose corner is at $x=3.5$. Doing it the other way round ($|2x|$ then shift) would give $|2(x-7)|$, a different graph.
E: Start with $f(x)=\dfrac{x}{x+1}$. Vertical stretch by 2: $\dfrac{2x}{x+1}$. Shift 1 down: $\dfrac{2x}{x+1}-1=\dfrac{x-1}{x+1}$.
M: Applying a horizontal change to the constant terms too: after $|x-7|$, compressing gives $|2x-7|$, not $|2x-14|$.

#C u1-exp-eq Solving exponential equations
pre: f-indices, f-logs, f-factor, u1-exponential
R: Make the bases equal and compare exponents, or take logs of both sides, or substitute $u=a^x$ to get a quadratic.
B: Three standard methods:
1. **Same base:** $4^{x-1}=8\Rightarrow 2^{2x-2}=2^3\Rightarrow 2x-2=3\Rightarrow x=\tfrac52$ (uses one-to-one).
2. **Take logarithms:** $2^{2x}=3^{5x+3}\Rightarrow 2x\ln2=(5x+3)\ln3$, then solve the linear equation.
3. **Substitute $u=a^x$:** when $a^x$ and $a^{2x}$ (or $a^{-x}$) appear together. Remember $u>0$, so reject negative values of $u$.
X: Spot hidden squares: $9^x=(3^x)^2$, $4^x=(2^x)^2$, $3^{x+1}=3\cdot3^x$, $2^{1-x}=\dfrac{2}{2^x}$, $2^{-x}=\dfrac1{2^x}$.
E: Solve $4^x-6\cdot2^x+8=0$. Let $u=2^x$: $u^2-6u+8=0\Rightarrow(u-2)(u-4)=0\Rightarrow u=2$ or $4\Rightarrow x=1$ or $2$.
M: Keeping a root like $u=-\tfrac32$: $a^x$ can never be negative.

#C u1-log-eq Solving logarithmic equations
pre: f-logs, f-quadratic-formula, u1-log-function
R: Write the domain conditions, use log laws to get one log on each side, drop the logs (one-to-one), solve, and check every root against the domain.
B: Steps:
1. **Domain:** every log argument $>0$ (and a log base $>0$, $\ne1$).
2. Combine logs: $\log A+\log B=\log(AB)$.
3. $\log_a P=\log_a Q\Rightarrow P=Q$; or $\log_a P=c\Rightarrow P=a^c$.
4. Solve and **reject** answers outside the domain.
X: Example: $\log x+\log(x-3)=1$: domain $x>3$; $\log[x(x-3)]=1\Rightarrow x^2-3x=10\Rightarrow(x-5)(x+2)=0$; keep $x=5$, reject $x=-2$.
E: Solve $\log_x(x^2-3x+2)=2$: $x^2-3x+2=x^2\Rightarrow x=\tfrac23$. Base $\tfrac23$ is valid and $x^2-3x+2=\tfrac49>0$. ✓
M: Not checking the domain at the end is the most common way to lose marks here.

#C u1-exp-log-ineq Exponential and logarithmic inequalities
pre: f-inequalities, u1-exp-eq, u1-log-eq
R: With a base greater than 1 the inequality keeps its direction when you remove the exponential or log; with a base between 0 and 1 it reverses. Always add the domain.
F: $$a>1:\ \ a^p<a^q\iff p<q,\ \ \log_aP<\log_aQ\iff P<Q;\qquad 0<a<1:\ \text{the inequality reverses}$$
B: **Steps for a log inequality:**
1. Domain: each argument $>0$.
2. Compare the arguments, keeping the sign if the base is $>1$, reversing it if $0<$ base $<1$.
3. Solve, then **intersect** with the domain.
For exponential inequalities, a substitution $u=a^x$ often leads to a quadratic inequality; remember $u>0$.
X: Why the reversal? With base $\tfrac13$, bigger inputs give smaller logs: $\log_{1/3}9=-2<\log_{1/3}3=-1$ even though $9>3$.
E: $\log_2(x-1)\ge\log_2(5-x)$: domain $1<x<5$; base $2>1$ so $x-1\ge5-x\Rightarrow x\ge3$. Answer $[3,5)$.
M: Forgetting to flip the inequality for a base between 0 and 1.

#C u1-growth-decay Exponential growth and decay
pre: f-e-number, f-logs
R: $N=N_0e^{kt}$: $N_0$ is the starting amount, $k>0$ growth, $k<0$ decay; solve for $t$ or $k$ by taking $\ln$.
F: $$N=N_0e^{kt}\quad\Rightarrow\quad t=\frac{1}{k}\ln\frac{N}{N_0},\qquad k=\frac1t\ln\frac{N}{N_0}$$
B: To find the **time**: divide by $N_0$, take $\ln$, divide by $k$.
To find the **constant $k$**: use a known pair $(t,N)$ in the same way.
X: Doubling time: $N=2N_0\Rightarrow e^{kt}=2\Rightarrow t=\frac{\ln2}k$. Half-life (decay): $e^{kt}=\tfrac12\Rightarrow t=\frac{\ln2}{|k|}$.
E: $N=200e^{0.1t}$ reaches $600$ when $e^{0.1t}=3$, i.e. $t=\dfrac{\ln3}{0.1}\approx10.99$.
M: Taking $\ln$ of each term separately: $\ln(300e^{0.02t})=\ln300+0.02t$, not $300\cdot0.02t$.

#C u1-decibel Sound level in decibels
pre: f-logs
R: Sound level $L=10\log\dfrac{I}{I_0}$ dB, with reference intensity $I_0=10^{-12}\ \text{W/m}^2$.
F: $$L=10\log_{10}\frac{I}{I_0},\qquad I=I_0\cdot10^{L/10}$$
B: Every factor of $10$ in intensity adds $10$ dB. To go backwards from $L$ to $I$, divide by 10 and undo the log: $\dfrac{I}{I_0}=10^{L/10}$.
E: $I=10^{-9}$: $L=10\log\dfrac{10^{-9}}{10^{-12}}=10\log10^3=30$ dB.

#C u1-compound-interest Compound interest
pre: f-indices, f-logs, f-e-number
R: Compounded $n$ times a year: $A=P\left(1+\dfrac rn\right)^{nt}$; annually $A=P(1+r)^t$; continuously $A=Pe^{rt}$.
F: $$A=P\Big(1+\frac rn\Big)^{nt},\qquad A=P(1+r)^t\ (\text{annual}),\qquad A=Pe^{rt}\ (\text{continuous})$$
B: $P$ is the principal, $r$ the yearly rate as a decimal ($6\%=0.06$), $t$ the time in years.
To find $t$, divide by $P$ and take logs: $t=\dfrac{\ln(A/P)}{\ln(1+r)}$.
E: Rs 1000 at 10% compounded annually for 2 years: $A=1000(1.1)^2=$ Rs 1210.
M: Using $6$ instead of $0.06$ for the rate.
`);

M12.addQuestions(1, String.raw`
#Q 1.1 1(i)
Q: Sketch the graph of $y=3(x+1)(x-1)$ using factorization.
T: u1-quad-factored, u1-parabola-features
S: Compare with $y=a(x-h)(x-k)$: here $a=3,\ h=-1,\ k=1$. Since $a=3>0$, the parabola **opens upward**.
W: The factored form tells us the direction (from $a$) and the roots (from $h,k$) without any calculation.
C: u1-quad-factored
S: $x$-intercepts: put $y=0$: $(x+1)(x-1)=0\Rightarrow x=-1$ or $x=1$. Points $(-1,0)$ and $(1,0)$.
W: A product is zero only when one of the factors is zero.
C: f-zero-product
S: Vertex: midway between the roots, $x=\dfrac{-1+1}{2}=0$, and $y=3(0+1)(0-1)=-3$. Vertex $(0,-3)$.
W: The parabola is symmetric, so its turning point lies exactly halfway between the two roots.
C: u1-parabola-features
S: $y$-intercept: put $x=0$: $y=3(1)(-1)=-3$, the point $(0,-3)$ (here it is also the vertex). Extra points: $x=\pm2\Rightarrow y=3(3)(1)=9$.
S: Plot these points and join them with a smooth U-shaped curve, symmetric about the line $x=0$.
P: {"x":[-3,3],"y":[-4,10],"step":1,"ystep":2,"fn":[{"f":"3*(x+1)*(x-1)","label":"y = 3(x+1)(x−1)","at":1.75}],"pts":[[-1,0,"(−1, 0)",{"dx":-8}],[1,0,"(1, 0)"],[0,-3,"V(0, −3)"],[2,9,"(2, 9)"],[-2,9,"(−2, 9)"]]}
A: An upward parabola through $(-1,0)$ and $(1,0)$, vertex and $y$-intercept $(0,-3)$, symmetric about $x=0$.

#Q 1.1 1(ii)
Q: Sketch the graph of $f(x)=-2(x-1)(x-2)$ using factorization.
T: u1-quad-factored, u1-parabola-features
S: Compare with $y=a(x-h)(x-k)$: $a=-2,\ h=1,\ k=2$. Since $a<0$ the parabola **opens downward**.
C: u1-quad-factored
S: $x$-intercepts: $(x-1)(x-2)=0\Rightarrow x=1,\ x=2$: points $(1,0)$ and $(2,0)$.
C: f-zero-product
S: Vertex: $x=\dfrac{1+2}{2}=\dfrac32$, and $f\!\left(\tfrac32\right)=-2\left(\tfrac12\right)\left(-\tfrac12\right)=\tfrac12$. Vertex $\left(\tfrac32,\tfrac12\right)$, the **highest** point.
W: For a downward parabola the vertex is a maximum.
C: u1-parabola-features
S: $y$-intercept: $f(0)=-2(-1)(-2)=-4$, the point $(0,-4)$. By symmetry about $x=\tfrac32$, the point $(3,-4)$ is also on the graph.
W: $x=0$ is $\tfrac32$ to the left of the axis, so its mirror point is $\tfrac32$ to the right, at $x=3$.
S: Join the points with a smooth, upside-down U shape.
P: {"x":[-1,4],"y":[-5,2],"step":1,"fn":[{"f":"-2*(x-1)*(x-2)","label":"f(x)","at":2.6}],"pts":[[1,0,"(1, 0)",{"dx":-34,"dy":-8}],[2,0,"(2, 0)"],[1.5,0.5,"V(1.5, 0.5)"],[0,-4,"(0, −4)"],[3,-4,"(3, −4)"]]}
A: A downward parabola through $(1,0)$ and $(2,0)$ with vertex (maximum) $\left(\tfrac32,\tfrac12\right)$ and $y$-intercept $-4$.

#Q 1.1 1(iii)
Q: Sketch the graph of $y=(2x-1)(2x+1)$ using factorization.
T: u1-quad-factored, u1-parabola-features, f-factor
S: Take out the factor 2 from each bracket: $y=2\left(x-\tfrac12\right)\cdot2\left(x+\tfrac12\right)=4\left(x-\tfrac12\right)\left(x+\tfrac12\right)$.
W: To compare with $a(x-h)(x-k)$ the coefficient of $x$ inside each bracket must be 1.
D: $2x-1=2\left(x-\tfrac12\right)$ because $2\cdot\tfrac12=1$. Doing this in both brackets produces $2\times2=4$ in front.
C: f-factor
S: So $a=4>0$ (opens upward), roots $x=\tfrac12$ and $x=-\tfrac12$.
C: u1-quad-factored
S: Vertex: $x=\dfrac{\frac12+(-\frac12)}2=0$, $y=(0-1)(0+1)=-1$. Vertex $(0,-1)$, which is also the $y$-intercept.
C: u1-parabola-features
S: Extra points: $x=\pm1\Rightarrow y=(1)(3)=3$. Draw a narrow U through $\left(-\tfrac12,0\right),(0,-1),\left(\tfrac12,0\right)$ and $(\pm1,3)$.
P: {"x":[-1.5,1.5],"y":[-1.5,4],"step":0.5,"ystep":1,"fn":[{"f":"(2*x-1)*(2*x+1)","label":"y = 4x² − 1","at":0.85}],"pts":[[-0.5,0,"(−½, 0)",{"dx":-40}],[0.5,0,"(½, 0)"],[0,-1,"(0, −1)"]]}
A: $y=4x^2-1$: upward parabola with roots $\pm\tfrac12$ and vertex $(0,-1)$.

#Q 1.1 1(iv)
Q: Sketch the graph of $y=2x^2+x-3$ using factorization.
T: u1-quad-factored, f-factor, u1-parabola-features
S: Factorise by splitting the middle term: $ac=2(-3)=-6$; two numbers with product $-6$ and sum $1$ are $3$ and $-2$.
$$2x^2+3x-2x-3=x(2x+3)-1(2x+3)=(2x+3)(x-1)$$
W: Splitting $x$ into $3x-2x$ lets us group the four terms into two pairs with a common bracket.
C: f-factor
!:
S: Make each bracket monic: $y=2\left(x+\tfrac32\right)(x-1)$. So $a=2>0$ (opens up), roots $x=-\tfrac32$ and $x=1$.
C: u1-quad-factored
S: Vertex: $x=\dfrac{-\frac32+1}{2}=-\dfrac14$; $\ y=2\left(\tfrac1{16}\right)-\tfrac14-3=\tfrac18-\tfrac14-3=-\tfrac{25}{8}$. Vertex $\left(-\tfrac14,-\tfrac{25}8\right)=(-0.25,-3.125)$.
W: Substitute the vertex $x$ into the original equation; working with fractions is safer than decimals here.
C: u1-parabola-features
S: $y$-intercept: $y=-3$ at $x=0$. Its mirror point about $x=-\tfrac14$ is $\left(-\tfrac12,-3\right)$. Draw the U through these points.
P: {"x":[-2.5,2],"y":[-4,4],"step":0.5,"ystep":1,"fn":[{"f":"2*x*x+x-3","label":"y = 2x² + x − 3","at":1.25}],"pts":[[-1.5,0,"(−1.5, 0)",{"dx":-58}],[1,0,"(1, 0)"],[-0.25,-3.125,"V(−0.25, −3.125)",{"dy":20}],[0,-3,"(0, −3)"]]}
A: $y=(2x+3)(x-1)$: upward parabola, roots $-\tfrac32$ and $1$, vertex $\left(-\tfrac14,-\tfrac{25}8\right)$, $y$-intercept $-3$.

#Q 1.1 1(vi)
Q: Sketch the graph of $y=3(x-1)^2$ using factorization.
T: u1-quad-factored, u1-parabola-features
S: This is $y=a(x-h)(x-k)$ with $h=k=1$ and $a=3>0$: an upward parabola with a **repeated** root $x=1$.
W: When both roots are the same, the graph does not cross the $x$-axis; it only touches it.
C: u1-quad-factored
S: So the graph **touches** the $x$-axis at $(1,0)$, and this point is the vertex (lowest point).
C: u1-parabola-features
S: $y$-intercept: $y=3(0-1)^2=3$, point $(0,3)$; its mirror point about $x=1$ is $(2,3)$.
S: Draw a U shape resting on the $x$-axis at $(1,0)$ through $(0,3)$ and $(2,3)$.
P: {"x":[-1,3],"y":[-1,7],"step":1,"fn":[{"f":"3*(x-1)**2","label":"y = 3(x−1)²","at":2.3}],"pts":[[1,0,"V(1, 0)"],[0,3,"(0, 3)",{"dx":-44}],[2,3,"(2, 3)"]]}
A: Upward parabola touching the $x$-axis at its vertex $(1,0)$, with $y$-intercept $3$.

#Q 1.1 3
Q: Find an equation of the graph whose $x$-intercepts are $x=-1$ and $x=-2$ and which passes through the point $(-3,2)$.
T: u1-quad-from-graph
S: Roots $-1$ and $-2$ give factors $(x+1)$ and $(x+2)$: $\ y=a(x+1)(x+2)$.
W: A root $x=r$ always corresponds to a factor $(x-r)$; with $r=-1$ that is $(x+1)$.
C: u1-quad-from-graph
S: The point $(-3,2)$ lies on the graph: $2=a(-3+1)(-3+2)=a(-2)(-1)=2a\Rightarrow a=1$.
C: f-linear-eq
S: Therefore $y=(x+1)(x+2)=x^2+3x+2$.
A: $y=(x+1)(x+2)$, i.e. $y=x^2+3x+2$.

#Q 1.1 4
Q: Find an equation of the graph which touches the $x$-axis at $x=-1$ and cuts the $y$-axis at $y=-2$.
T: u1-quad-from-graph, u1-quad-factored
S: "Touches the $x$-axis at $x=-1$" means a repeated root: $y=a(x+1)^2$.
W: Touching (not crossing) the axis is the case $h=k$ of the factored form.
C: u1-quad-factored
S: It cuts the $y$-axis at $(0,-2)$: $-2=a(0+1)^2=a\Rightarrow a=-2$.
S: Hence $y=-2(x+1)^2=-2x^2-4x-2$, a downward parabola with vertex $(-1,0)$.
P: {"x":[-3,1],"y":[-5,1],"step":1,"fn":[{"f":"-2*(x+1)**2","label":"y = −2(x+1)²","at":-2.3}],"pts":[[-1,0,"(−1, 0)"],[0,-2,"(0, −2)"]]}
A: $y=-2(x+1)^2$.

#Q 1.1 5
Q: Find an equation of the function whose graph cuts the $x$-axis at $x=-1$ and $x=1$, and whose vertex is at $(0,-2)$.
T: u1-quad-from-graph
S: Roots $\pm1$: $\ y=a(x+1)(x-1)=a(x^2-1)$.
C: u1-quad-from-graph
S: The vertex $(0,-2)$ is on the graph: $-2=a(0-1)=-a\Rightarrow a=2$.
W: The vertex is just another point on the curve, so it can be used to find $a$. (Its $x$-coordinate $0$ is indeed midway between $-1$ and $1$, which confirms the data are consistent.)
S: So $y=2(x^2-1)=2x^2-2$.
A: $y=2x^2-2$.

#Q 1.2 5
Q: Discuss the domain, range and graph of $f(x)=3^x$.
T: u1-exponential
S: **Domain.** $3^x$ is defined for every real number $x$, so the domain is $\R$ (all real numbers).
C: u1-exponential
S: **Values are positive.** For any $x$, $3^x>0$; for example $3^{-2}=\tfrac19$, $3^0=1$, $3^2=9$. So the graph lies above the $x$-axis and has **no $x$-intercept**.
W: A positive base raised to any power stays positive.
C: f-indices
S: **Range.** As $x$ takes very large negative values, $3^x$ becomes as small a positive number as we like; for large positive $x$ it becomes as large as we like. So every positive value is reached: range $=(0,\infty)$.
S: **Intercept.** $f(0)=3^0=1$: the graph crosses the $y$-axis at $(0,1)$.
S: **Table and sketch.**
| $x$ | $-2$ | $-1$ | $0$ | $1$ | $2$ |
| --- | --- | --- | --- | --- | --- |
| $3^x$ | $\frac19$ | $\frac13$ | $1$ | $3$ | $9$ |
Plot the points and join them with a smooth curve that stays above the $x$-axis, rising quickly on the right.
P: {"x":[-3,2.5],"y":[-1,10],"step":1,"ystep":2,"fn":[{"f":"3**x","label":"y = 3^x","at":1.75}],"pts":[[-2,0.1111,"(−2, 1/9)",{"dy":-10}],[-1,0.3333,"(−1, 1/3)",{"dy":-12}],[0,1,"(0, 1)"],[1,3,"(1, 3)"],[2,9,"(2, 9)",{"dx":-50}]]}
A: Domain $\R$, range $(0,\infty)$, $y$-intercept $(0,1)$, no $x$-intercept; the graph passes through $(-1,\frac13),(0,1),(1,3),(2,9)$.

#Q 1.2 7(i)
Q: Prove the identity $1-\tanh^2x=\sech^2x$.
T: u1-hyp-identities, u1-hyperbolic
S: Start from the master identity $\cosh^2x-\sinh^2x=1$.
W: It is quicker to divide a known identity than to expand exponentials.
C: u1-hyp-identities
S: Divide every term by $\cosh^2x$ (never zero, since $\cosh x\ge1$):
$$\frac{\cosh^2x}{\cosh^2x}-\frac{\sinh^2x}{\cosh^2x}=\frac1{\cosh^2x}$$
S: Use $\dfrac{\sinh x}{\cosh x}=\tanh x$ and $\dfrac{1}{\cosh x}=\sech x$: $\ 1-\tanh^2x=\sech^2x$. $\blacksquare$
C: u1-hyperbolic
A: Dividing $\cosh^2x-\sinh^2x=1$ by $\cosh^2x$ gives $1-\tanh^2x=\sech^2x$.
H: Want an exponentials-only proof of the master identity? It is in the topic **Hyperbolic identities** on the right.

#Q 1.2 7(ii)
Q: Prove the identity $\csch^2x=\coth^2x-1$.
T: u1-hyp-identities, u1-hyperbolic
S: Start from $\cosh^2x-\sinh^2x=1$ and divide by $\sinh^2x$ (valid for $x\ne0$):
$$\frac{\cosh^2x}{\sinh^2x}-1=\frac{1}{\sinh^2x}$$
W: $\sinh x=0$ only at $x=0$, which is outside the domain of $\coth$ and $\csch$ anyway.
C: u1-hyp-identities
S: Since $\dfrac{\cosh x}{\sinh x}=\coth x$ and $\dfrac1{\sinh x}=\csch x$: $\ \coth^2x-1=\csch^2x$. $\blacksquare$
C: u1-hyperbolic
A: Dividing $\cosh^2x-\sinh^2x=1$ by $\sinh^2x$ gives $\coth^2x-1=\csch^2x$.

#Q 1.2 7(iii)
Q: Prove the identity $\sinh2x=2\sinh x\cosh x$.
T: u1-hyp-identities, u1-hyperbolic, f-expand
S: Start from the right side and write it in exponentials:
$$2\sinh x\cosh x=2\cdot\frac{e^x-e^{-x}}2\cdot\frac{e^x+e^{-x}}2$$
C: u1-hyperbolic
S: The brackets form a difference of squares: $(e^x-e^{-x})(e^x+e^{-x})=(e^x)^2-(e^{-x})^2=e^{2x}-e^{-2x}$.
W: $(a-b)(a+b)=a^2-b^2$ with $a=e^x,\ b=e^{-x}$, and $(e^x)^2=e^{2x}$.
C: f-expand, f-indices
S: So $2\sinh x\cosh x=\dfrac{2}{4}\left(e^{2x}-e^{-2x}\right)=\dfrac{e^{2x}-e^{-2x}}{2}=\sinh2x$. $\blacksquare$
W: $\sinh$ of any input $u$ is $\frac{e^u-e^{-u}}2$; here $u=2x$.
A: $2\sinh x\cosh x=\frac{e^{2x}-e^{-2x}}2=\sinh2x$.

#Q 1.2 7(iv)
Q: Prove the identity $\cosh2x=\cosh^2x+\sinh^2x$.
T: u1-hyp-identities, u1-hyperbolic, f-expand
S: Expand each square from the right side:
$$\cosh^2x=\frac{e^{2x}+2+e^{-2x}}4,\qquad \sinh^2x=\frac{e^{2x}-2+e^{-2x}}4$$
W: $(e^x\pm e^{-x})^2=e^{2x}\pm2e^xe^{-x}+e^{-2x}$ and $e^xe^{-x}=1$.
C: f-expand
!:
S: Add them: the $+2$ and $-2$ cancel: $\cosh^2x+\sinh^2x=\dfrac{2e^{2x}+2e^{-2x}}{4}=\dfrac{e^{2x}+e^{-2x}}2$.
S: This is exactly $\cosh(2x)$. Hence $\cosh2x=\cosh^2x+\sinh^2x$. $\blacksquare$
C: u1-hyperbolic
A: $\cosh^2x+\sinh^2x=\frac{e^{2x}+e^{-2x}}2=\cosh2x$.

#Q 1.2 8(i)
Q: Prove that $\tanh^{-1}x=\dfrac12\ln\dfrac{1+x}{1-x}$, $\ |x|<1$.
T: u1-inv-hyperbolic, u1-hyperbolic, f-logs
S: Let $y=\tanh^{-1}x$. Then $x=\tanh y=\dfrac{e^y-e^{-y}}{e^y+e^{-y}}$.
C: u1-inv-hyperbolic
S: Multiply top and bottom by $e^y$: $\ x=\dfrac{e^{2y}-1}{e^{2y}+1}$.
W: This clears the negative powers, leaving only $e^{2y}$.
C: f-indices
S: Cross-multiply and collect $e^{2y}$: $\ xe^{2y}+x=e^{2y}-1\Rightarrow e^{2y}(1-x)=1+x\Rightarrow e^{2y}=\dfrac{1+x}{1-x}$.
W: Treat $e^{2y}$ as one unknown and solve the linear equation for it.
!:
S: Take natural logs: $2y=\ln\dfrac{1+x}{1-x}$, so $y=\dfrac12\ln\dfrac{1+x}{1-x}$. $\blacksquare$
W: The condition $|x|<1$ makes $\frac{1+x}{1-x}$ positive, so the logarithm exists.
C: f-logs
A: $\tanh^{-1}x=\frac12\ln\frac{1+x}{1-x}$ for $-1<x<1$.

#Q 1.2 8(ii)
Q: Prove that $\coth^{-1}x=\dfrac12\ln\dfrac{x+1}{x-1}$, $\ |x|>1$.
N: The formula is stated here in the form used in the book's table of inverse hyperbolic functions, $\frac12\ln\frac{x+1}{x-1}$. (Written as $\frac{1+x}{1-x}$ it would be negative for $|x|>1$, so it could not be the argument of a logarithm.)
T: u1-inv-hyperbolic, u1-hyperbolic, f-logs
S: Let $y=\coth^{-1}x$, so $x=\coth y=\dfrac{e^y+e^{-y}}{e^y-e^{-y}}=\dfrac{e^{2y}+1}{e^{2y}-1}$ (multiplying top and bottom by $e^y$).
C: u1-inv-hyperbolic
S: Cross-multiply: $xe^{2y}-x=e^{2y}+1\Rightarrow e^{2y}(x-1)=x+1\Rightarrow e^{2y}=\dfrac{x+1}{x-1}$.
!:
S: Take $\ln$: $y=\dfrac12\ln\dfrac{x+1}{x-1}$. $\blacksquare$ (For $|x|>1$ the fraction is positive, so the log is defined.)
C: f-logs
A: $\coth^{-1}x=\frac12\ln\frac{x+1}{x-1}$ for $|x|>1$.

#Q 1.2 8(iii)
Q: Prove that $\sech^{-1}x=\ln\dfrac{1+\sqrt{1-x^2}}{x}$, $\ 0<x\le1$.
T: u1-inv-hyperbolic, u1-hyperbolic, f-quadratic-formula
S: Let $y=\sech^{-1}x$ (with $y\ge0$). Then $x=\sech y=\dfrac{2}{e^y+e^{-y}}$.
C: u1-inv-hyperbolic
S: Clear fractions and multiply by $e^y$: $\ x e^y+xe^{-y}=2\Rightarrow x\,(e^y)^2-2e^y+x=0$, a quadratic in $e^y$.
W: Multiplying by $e^y$ turns $e^{-y}$ into $1$, so everything is in terms of $u=e^y$: $xu^2-2u+x=0$.
C: f-quadratic-formula
S: Quadratic formula: $e^y=\dfrac{2\pm\sqrt{4-4x^2}}{2x}=\dfrac{1\pm\sqrt{1-x^2}}{x}$.
S: Choose the sign. The range of $\sech^{-1}$ is $[0,\infty)$, so $y\ge0$ and $e^y\ge1$. The minus root gives $\dfrac{1-\sqrt{1-x^2}}{x}=\dfrac{x}{1+\sqrt{1-x^2}}<1$ (for $0<x<1$), so it is rejected; keep the plus sign.
W: Multiply top and bottom of the minus root by $1+\sqrt{1-x^2}$ to see that it is less than 1.
D: $\dfrac{1-\sqrt{1-x^2}}{x}\cdot\dfrac{1+\sqrt{1-x^2}}{1+\sqrt{1-x^2}}=\dfrac{1-(1-x^2)}{x(1+\sqrt{1-x^2})}=\dfrac{x}{1+\sqrt{1-x^2}}$, and the denominator is bigger than $x$ when $0<x<1$. (At $x=1$ both roots equal 1, so either works.)
!:
S: Therefore $e^y=\dfrac{1+\sqrt{1-x^2}}{x}$ and $y=\ln\dfrac{1+\sqrt{1-x^2}}{x}$. $\blacksquare$
C: f-logs
A: $\sech^{-1}x=\ln\frac{1+\sqrt{1-x^2}}{x}$, $0<x\le1$.

#Q 1.2 8(iv)
Q: Prove that $\csch^{-1}x=\ln\left(\dfrac1x+\sqrt{\dfrac1{x^2}+1}\right)$, $\ x\ne0$.
T: u1-inv-hyperbolic, u1-hyperbolic, f-quadratic-formula
S: Let $y=\csch^{-1}x$, so $x=\csch y=\dfrac{2}{e^y-e^{-y}}$. Then $xe^y-xe^{-y}=2$, and multiplying by $e^y$: $\ x(e^y)^2-2e^y-x=0$.
C: u1-inv-hyperbolic
S: Quadratic formula in $u=e^y$: $\ e^y=\dfrac{2\pm\sqrt{4+4x^2}}{2x}=\dfrac{1\pm\sqrt{1+x^2}}{x}$.
C: f-quadratic-formula
S: Write $\dfrac{\sqrt{1+x^2}}{x}$ using $\dfrac1x$: it equals $+\sqrt{\dfrac1{x^2}+1}$ when $x>0$ and $-\sqrt{\dfrac1{x^2}+1}$ when $x<0$.
W: $\sqrt{x^2}=|x|$, so pulling $x$ inside the root introduces the sign of $x$.
!:
S: We need $e^y>0$. For $x>0$ the positive root is $\dfrac1x+\sqrt{\dfrac1{x^2}+1}$ (the plus sign). For $x<0$ the positive root is $\dfrac{1-\sqrt{1+x^2}}{x}$, which is again $\dfrac1x+\sqrt{\dfrac1{x^2}+1}$. So in every case
$$e^y=\frac1x+\sqrt{\frac1{x^2}+1}.$$
D: For $x<0$: $\dfrac{1}{x}-\dfrac{\sqrt{1+x^2}}{x}=\dfrac1x+\dfrac{\sqrt{1+x^2}}{|x|}=\dfrac1x+\sqrt{\dfrac{1+x^2}{x^2}}$, which is positive because $\sqrt{\frac{1}{x^2}+1}>\left|\frac1x\right|$.
S: Taking $\ln$: $\ \csch^{-1}x=\ln\left(\dfrac1x+\sqrt{\dfrac1{x^2}+1}\right)$. $\blacksquare$
C: f-logs
A: $\csch^{-1}x=\ln\left(\frac1x+\sqrt{\frac1{x^2}+1}\right)$ for all $x\ne0$.

#Q 1.3 4
Q: Given $f(x)=\sqrt x$, find the equation of the function after: (i) a vertical stretch by a factor of 2; (ii) a horizontal shift of 3 units to the right; (iii) applying both (i) and (ii).
T: u1-scale, u1-shift, u1-transform-sequence
S: **(i)** A vertical stretch by 2 multiplies the whole function by 2: $\ y=2\sqrt x$.
C: u1-scale
S: **(ii)** A shift 3 units right replaces $x$ by $x-3$: $\ y=\sqrt{x-3}$ (defined for $x\ge3$).
W: The new graph starts at $x=3$, where the inside of the root becomes 0.
C: u1-shift
S: **(iii)** Apply both: stretch gives $2\sqrt x$, then replacing $x$ by $x-3$ gives $\ y=2\sqrt{x-3}$.
W: A vertical stretch and a horizontal shift do not interfere, so the order does not matter here.
C: u1-transform-sequence
P: {"x":[-1,10],"y":[-1,7],"step":1,"fn":[{"f":"sqrt(x)","label":"√x","dom":[0,10],"at":9},{"f":"2*sqrt(x)","label":"2√x","dom":[0,10],"at":7},{"f":"sqrt(x-3)","label":"√(x−3)","dom":[3,10],"at":8.6},{"f":"2*sqrt(x-3)","label":"2√(x−3)","dom":[3,10],"at":8.2}]}
A: (i) $y=2\sqrt x$ (ii) $y=\sqrt{x-3}$ (iii) $y=2\sqrt{x-3}$.

#Q 1.3 6
Q: Given $f(x)=\ln x$, find the transformed function after shifting 1 unit right, vertically compressing by a factor of 2, and then shifting 3 units up.
T: u1-shift, u1-scale, u1-transform-sequence, u1-log-function
S: Shift 1 unit right: replace $x$ by $x-1$: $\ y=\ln(x-1)$.
C: u1-shift
S: Compress vertically by a factor of 2: multiply the whole function by $\tfrac12$: $\ y=\tfrac12\ln(x-1)$.
W: Compressing by 2 halves every $y$-value.
C: u1-scale
S: Shift 3 units up: add 3: $\ y=\tfrac12\ln(x-1)+3$.
S: Using $\tfrac12\ln u=\ln\sqrt u$, this can also be written $y=\ln\sqrt{x-1}+3$, with domain $x>1$.
C: f-logs
P: {"x":[-0.5,10],"y":[-3,5],"step":1,"fn":[{"f":"log(x)","label":"ln x","dom":[0.02,10],"at":8},{"f":"0.5*log(x-1)+3","label":"½ln(x−1) + 3","dom":[1.0004,10],"at":6.5}]}
A: $y=\frac12\ln(x-1)+3=\ln\sqrt{x-1}+3$, for $x>1$.

#Q 1.3 10
Q: Draw the graph of $f(x)=|x|$ after applying the following transformations in order: shift 7 units right, horizontal compression by a factor of 2, vertical shift 6 units down, vertical compression by a factor of 2.
T: u1-modulus, u1-transform-sequence, u1-shift, u1-scale
S: Shift 7 right ($x\to x-7$): $\ y=|x-7|$.
C: u1-shift
S: Horizontal compression by 2 ($x\to2x$): $\ y=|2x-7|$.
W: Replace every $x$ in the *current* formula by $2x$; the $-7$ is not doubled.
C: u1-transform-sequence
!:
S: Shift 6 down: $\ y=|2x-7|-6$.
S: Vertical compression by 2 (multiply the whole expression by $\tfrac12$): $\ g(x)=\tfrac12\big(|2x-7|-6\big)=\tfrac12|2x-7|-3$.
W: The compression acts on everything built so far, including the $-6$.
C: u1-scale
S: Key points for the sketch: corner where $2x-7=0$, i.e. $\left(\tfrac72,-3\right)$; $x$-intercepts from $\tfrac12|2x-7|=3\Rightarrow 2x-7=\pm6\Rightarrow x=\tfrac{13}2$ or $\tfrac12$; $y$-intercept $g(0)=\tfrac72-3=\tfrac12$. The arms have slopes $\pm1$.
C: u1-modulus
P: {"x":[-2,9],"y":[-4,6],"step":1,"fn":[{"f":"abs(x)","label":"|x|","dash":true,"at":-1.6},{"f":"0.5*abs(2*x-7)-3","label":"g(x) = ½|2x−7| − 3","at":7.4,"col":2}],"pts":[[3.5,-3,"(3.5, −3)"],[0.5,0,"(0.5, 0)"],[6.5,0,"(6.5, 0)"],[0,0.5,"(0, 0.5)",{"dx":-52}]]}
A: $g(x)=\frac12|2x-7|-3$: a V with corner $(3.5,-3)$, $x$-intercepts $0.5$ and $6.5$, $y$-intercept $0.5$.

#Q 1.4 1(i)
Q: Solve the equation $\log(3x-2)=\log(x^2-5x+6)$.
T: u1-log-eq, f-quadratic-formula, f-inequalities
S: **Domain:** $3x-2>0\Rightarrow x>\tfrac23$, and $x^2-5x+6=(x-2)(x-3)>0\Rightarrow x<2$ or $x>3$.
W: A logarithm is only defined for positive arguments, so these conditions must hold for any answer.
C: u1-log-function, f-inequalities
S: Since $\log$ is one-to-one, equal logs mean equal arguments: $\ x^2-5x+6=3x-2\Rightarrow x^2-8x+8=0$.
C: u1-log-eq
S: Quadratic formula: $x=\dfrac{8\pm\sqrt{64-32}}{2}=\dfrac{8\pm4\sqrt2}{2}=4\pm2\sqrt2$.
C: f-quadratic-formula, f-surds
S: Check: $4+2\sqrt2\approx6.83$ satisfies $x>3$ ✓. $4-2\sqrt2\approx1.17$ satisfies $\tfrac23<x<2$ ✓. Both are valid.
W: Always test each root against the domain found in step 1.
A: $S=\{4-2\sqrt2,\ 4+2\sqrt2\}$.

#Q 1.4 1(ii)
Q: Solve the equation $\ln(x^2-1)=\ln(3x-2)$.
T: u1-log-eq, f-quadratic-formula
S: **Domain:** $x^2-1>0\Rightarrow |x|>1$, and $3x-2>0\Rightarrow x>\tfrac23$. Together: $x>1$.
C: u1-log-function
S: Equate the arguments: $x^2-1=3x-2\Rightarrow x^2-3x+1=0$.
C: u1-log-eq
S: $x=\dfrac{3\pm\sqrt{9-4}}{2}=\dfrac{3\pm\sqrt5}{2}$, i.e. $x\approx2.618$ or $x\approx0.382$.
C: f-quadratic-formula
S: Only $\dfrac{3+\sqrt5}2$ satisfies $x>1$; reject $\dfrac{3-\sqrt5}2$ (it makes $x^2-1$ negative).
A: $S=\left\{\dfrac{3+\sqrt5}{2}\right\}$.

#Q 1.4 1(iv)
Q: Solve the equation $3^{x+1}-2\cdot9^x+9=0$.
T: u1-exp-eq, f-factor
S: Rewrite in terms of $3^x$: $3^{x+1}=3\cdot3^x$ and $9^x=(3^2)^x=(3^x)^2$.
C: f-indices
S: Let $u=3^x\ (u>0)$: $\ 3u-2u^2+9=0\Rightarrow 2u^2-3u-9=0$.
W: Multiplying by $-1$ makes the leading coefficient positive, which is easier to factorise.
C: u1-exp-eq
S: Factorise (product $-18$, sum $-3$: $-6$ and $3$): $(2u+3)(u-3)=0\Rightarrow u=3$ or $u=-\tfrac32$.
C: f-factor
S: $u=3^x$ can never be negative, so reject $u=-\tfrac32$. Then $3^x=3=3^1\Rightarrow x=1$.
W: The exponential function is one-to-one, so equal powers of 3 have equal exponents.
C: u1-exponential
A: $x=1$.

#Q 1.4 1(vi)
Q: Solve the equation $2^x+2^{-x}=5$.
T: u1-exp-eq, f-quadratic-formula
S: Let $u=2^x>0$, so $2^{-x}=\dfrac1u$: $\ u+\dfrac1u=5$.
C: u1-exp-eq
S: Multiply by $u$: $u^2-5u+1=0\Rightarrow u=\dfrac{5\pm\sqrt{21}}{2}$.
C: f-quadratic-formula
S: Both values are positive ($\sqrt{21}\approx4.58<5$), so both are allowed: $2^x=\dfrac{5\pm\sqrt{21}}2$.
S: Take $\log_2$: $\ x=\log_2\dfrac{5+\sqrt{21}}2\approx2.26$ or $x=\log_2\dfrac{5-\sqrt{21}}2\approx-2.26$.
W: The two answers are negatives of each other, because the equation does not change when $x$ is replaced by $-x$.
C: f-logs
A: $S=\left\{\log_2\dfrac{5+\sqrt{21}}2,\ \log_2\dfrac{5-\sqrt{21}}2\right\}\approx\{2.26,\,-2.26\}$.

#Q 1.4 2(i)
Q: Solve the inequality (if a solution exists): $2^x+2^{1-x}\le3$.
T: u1-exp-log-ineq, u1-exp-eq, f-inequalities
S: Let $u=2^x>0$; then $2^{1-x}=\dfrac2{u}$: $\ u+\dfrac2u\le3$.
C: u1-exp-eq
S: Multiply by $u$ (positive, so the sign stays): $u^2-3u+2\le0\Rightarrow (u-1)(u-2)\le0$.
W: Multiplying an inequality by a positive quantity keeps its direction.
C: f-inequalities
!:
S: A product of two factors is $\le0$ between its roots: $1\le u\le2$.
C: f-inequalities
S: Back to $x$: $1\le2^x\le2\Rightarrow 2^0\le2^x\le2^1\Rightarrow 0\le x\le1$ (base $2>1$ keeps the order).
C: u1-exp-log-ineq
A: $S=[0,1]$.

#Q 1.4 2(ii)
Q: Solve the inequality (if a solution exists): $2^x\ge\log_216$.
T: u1-exp-log-ineq, f-logs
S: Evaluate the right side: $\log_216=4$ because $2^4=16$.
C: f-logs
S: So $2^x\ge4=2^2$. The base $2>1$, so the inequality keeps its direction: $x\ge2$.
C: u1-exp-log-ineq
A: $S=[2,\infty)$.

#Q 1.4 2(iii)
Q: Solve the inequality (if a solution exists): $\log_2(x-1)\ge\log_2(5-x)$.
T: u1-exp-log-ineq, u1-log-function
S: **Domain:** $x-1>0$ and $5-x>0$, i.e. $1<x<5$.
C: u1-log-function
S: Base $2>1$: compare arguments in the same direction: $x-1\ge5-x\Rightarrow 2x\ge6\Rightarrow x\ge3$.
C: u1-exp-log-ineq
S: Intersect with the domain: $3\le x<5$.
W: $x=5$ is excluded because $\log_2(5-x)$ would be $\log_20$, which is undefined.
A: $S=[3,5)$.

#Q 1.4 2(iv)
Q: Solve the inequality (if a solution exists): $\log_{1/3}(x^2-4x+3)>\log_{1/3}(2x-1)$.
T: u1-exp-log-ineq, f-inequalities, f-quadratic-formula
S: **Domain:** $x^2-4x+3=(x-1)(x-3)>0\Rightarrow x<1$ or $x>3$; and $2x-1>0\Rightarrow x>\tfrac12$. So $\tfrac12<x<1$ or $x>3$.
C: u1-log-function, f-inequalities
S: The base $\tfrac13$ is between 0 and 1, so **reverse** the inequality when comparing arguments: $\ x^2-4x+3<2x-1$.
W: For a base less than 1, a larger argument gives a smaller logarithm.
C: u1-exp-log-ineq
!:
S: $x^2-6x+4<0$. Roots $x=3\pm\sqrt5$ (about $0.764$ and $5.236$), so $3-\sqrt5<x<3+\sqrt5$.
C: f-quadratic-formula, f-inequalities
S: Intersect with the domain: $\left(3-\sqrt5,\ 1\right)\cup\left(3,\ 3+\sqrt5\right)$.
W: $3-\sqrt5\approx0.764$ is larger than $\tfrac12$, so it becomes the left end of the first piece.
D: Check a value: $x=0.6$ is in the domain but $0.6^2-6(0.6)+4=0.76>0$, so it does **not** satisfy the inequality. That is why the answer starts at $3-\sqrt5$, not at $\tfrac12$.
A: $S=\left(3-\sqrt5,\,1\right)\cup\left(3,\,3+\sqrt5\right)$.

#Q 1.5 1
Q: A population is given by $N=300e^{0.02t}$, where $t$ is measured in hours. Find the time when the population becomes 600.
T: u1-growth-decay, f-logs
S: Put $N=600$: $\ 600=300e^{0.02t}\Rightarrow e^{0.02t}=2$.
C: u1-growth-decay
S: Take natural logs: $0.02t=\ln2$.
C: f-logs
S: $t=\dfrac{\ln2}{0.02}=\dfrac{0.6931}{0.02}\approx34.66$ hours.
A: $t\approx34.7$ hours (the doubling time).

#Q 1.5 2
Q: A culture grows according to $N=150e^{kt}$, where $t$ is in hours. After 10 hours the population becomes 250. Find the growth constant $k$.
T: u1-growth-decay, f-logs
S: Substitute $t=10,\ N=250$: $\ 250=150e^{10k}\Rightarrow e^{10k}=\dfrac{250}{150}=\dfrac53$.
C: u1-growth-decay
S: Take $\ln$: $10k=\ln\dfrac53\approx0.5108$, so $k\approx0.0511$ per hour.
C: f-logs
A: $k=\frac{1}{10}\ln\frac53\approx0.0511$.

#Q 1.5 3
Q: A radioactive substance decays as $N=800e^{-0.05t}$, where $t$ is in hours. Find the time when the amount reduces to 200.
T: u1-growth-decay, f-logs
S: $200=800e^{-0.05t}\Rightarrow e^{-0.05t}=\dfrac14$.
C: u1-growth-decay
S: $\ln$ of both sides: $-0.05t=\ln\tfrac14=-\ln4$.
C: f-logs
S: $t=\dfrac{\ln4}{0.05}=\dfrac{1.3863}{0.05}\approx27.73$ hours.
A: $t\approx27.73$ hours.

#Q 1.5 5
Q: A sound has intensity $I=10^{-6}\ \text{W/m}^2$ and reference intensity $I_0=10^{-12}\ \text{W/m}^2$. Find the sound level in decibels.
T: u1-decibel, f-logs
S: $L=10\log\dfrac{I}{I_0}=10\log\dfrac{10^{-6}}{10^{-12}}$.
C: u1-decibel
S: $\dfrac{10^{-6}}{10^{-12}}=10^{-6-(-12)}=10^6$, so $L=10\log10^6=10\times6=60$ dB.
C: f-indices, f-logs
A: $L=60$ dB.

#Q 1.5 6
Q: A sound has level $L=80$ dB and $I_0=10^{-12}\ \text{W/m}^2$. Find the intensity $I$.
T: u1-decibel, f-logs
S: $80=10\log\dfrac{I}{10^{-12}}\Rightarrow\log\dfrac{I}{10^{-12}}=8$.
C: u1-decibel
S: Undo the log (base 10): $\dfrac{I}{10^{-12}}=10^8\Rightarrow I=10^8\times10^{-12}=10^{-4}\ \text{W/m}^2$.
C: f-logs, f-indices
A: $I=10^{-4}\ \text{W/m}^2$.

#Q 1.5 9
Q: A sum of Rs. 4000 is invested at 6% per annum, compounded annually, for 3 years. Find the final amount.
T: u1-compound-interest
S: Annual compounding: $A=P(1+r)^t$ with $P=4000,\ r=0.06,\ t=3$.
C: u1-compound-interest
S: $A=4000(1.06)^3=4000\times1.191016=4764.06$.
A: Rs. 4764.06.

#Q 1.5 10
Q: A sum of Rs. 5000 becomes Rs. 6324.48 when invested at 8% per annum, compounded annually. Find the time $t$.
T: u1-compound-interest, f-logs
S: $6324.48=5000(1.08)^t\Rightarrow(1.08)^t=\dfrac{6324.48}{5000}=1.264896$.
C: u1-compound-interest
S: Take logs: $t\ln1.08=\ln1.264896\Rightarrow t=\dfrac{\ln1.264896}{\ln1.08}=\dfrac{0.23500}{0.07696}\approx3.05$.
C: f-logs
S: So the time is about 3 years. (Check: after exactly 3 years the amount is $5000(1.08)^3=$ Rs. 6298.56, just below the given value, which is why $t$ comes out slightly above 3.)
A: $t\approx3.05$, i.e. about 3 years.
`);

M12.addMCQs(1, String.raw`
#M
c: u1-quad-factored
Q: The graph of $y=a(x-h)(x-k)$ with $a<0$
O: opens upward
O*: opens downward
O: is a straight line
O: does not meet the $x$-axis
E: The sign of $a$ decides the direction: $a<0$ gives an upside-down U.

#M
c: u1-quad-factored
Q: The $x$-intercepts of $y=2(x-1)(x-3)$ are
O*: $1$ and $3$
O: $-1$ and $-3$
O: $2$ and $6$
O: $1$ and $-3$
E: Put $y=0$: $x-1=0$ or $x-3=0$.

#M
c: u1-quad-factored
Q: The $x$-coordinate of the vertex of $y=a(x-h)(x-k)$ is
O: $h+k$
O*: $\dfrac{h+k}{2}$
O: $hk$
O: $\dfrac{h-k}{2}$
E: The vertex lies midway between the roots because the parabola is symmetric.

#M
c: u1-quad-factored
Q: The graph of $y=3(x-1)^2$ meets the $x$-axis at
O: two points
O*: exactly one point, where it touches the axis
O: no point
O: the origin
E: A repeated root means the parabola touches the axis at $(1,0)$, its vertex.

#M
c: u1-exponential
Q: The graph of $y=a^x\ (a>0,\ a\ne1)$ always passes through
O: $(1,0)$
O*: $(0,1)$
O: $(0,a)$
O: $(0,0)$
E: $a^0=1$ for every allowed base.

#M
c: u1-exponential
Q: The range of $f(x)=3^x$ is
O: $\R$
O: $[0,\infty)$
O*: $(0,\infty)$
O: $(1,\infty)$
E: $3^x$ is always positive and takes every positive value.

#M
c: u1-hyp-identities
Q: $\cosh^2x-\sinh^2x$ equals
O: $0$
O*: $1$
O: $\cosh2x$
O: $-1$
E: The master hyperbolic identity; compare $\cos^2x+\sin^2x=1$.

#M
c: u1-hyperbolic
Q: The range of $\cosh x$ is
O: $\R$
O: $(-1,1)$
O*: $[1,\infty)$
O: $(0,1]$
E: $\cosh x=\frac{e^x+e^{-x}}2\ge1$, with the minimum $1$ at $x=0$.

#M
c: u1-hyperbolic
Q: The range of $\tanh x$ is
O*: $(-1,1)$
O: $[1,\infty)$
O: $\R$
O: $(0,1]$
E: $\tanh x=\frac{e^{2x}-1}{e^{2x}+1}$ always lies strictly between $-1$ and $1$.

#M
c: u1-inv-hyperbolic
Q: $\sinh^{-1}x$ equals
O: $\ln\big(x+\sqrt{x^2-1}\big)$
O*: $\ln\big(x+\sqrt{x^2+1}\big)$
O: $\tfrac12\ln\dfrac{1+x}{1-x}$
O: $\ln\big(x-\sqrt{x^2+1}\big)$
E: Solve $x=\sinh y$ as a quadratic in $e^y$ and keep the positive root.

#M
c: u1-inv-hyperbolic
Q: The domain of $\cosh^{-1}x$ is
O: $\R$
O: $(-1,1)$
O*: $[1,\infty)$
O: $(0,1]$
E: The domain of an inverse is the range of the original function: $\cosh x\ge1$.

#M
c: u1-shift
Q: The graph of $y=f(x-3)$ is the graph of $y=f(x)$ shifted
O: 3 units left
O*: 3 units right
O: 3 units up
O: 3 units down
E: Replacing $x$ by $x-3$ moves the graph to the right.

#M
c: u1-scale
Q: The graph of $y=f(2x)$ is obtained from $y=f(x)$ by
O: a vertical stretch by 2
O: a horizontal stretch by 2
O*: a horizontal compression by a factor of 2
O: a vertical compression by 2
E: Multiplying $x$ by 2 squeezes the graph towards the $y$-axis.

#M
c: u1-scale
Q: A vertical compression of $y=f(x)$ by a factor of 2 gives
O: $y=2f(x)$
O*: $y=\tfrac12f(x)$
O: $y=f(2x)$
O: $y=f\left(\tfrac x2\right)$
E: Every $y$-value is halved.

#M
c: u1-exp-eq
Q: The solution of $4^{x-1}=8$ is
O: $x=2$
O*: $x=\tfrac52$
O: $x=3$
O: $x=\tfrac32$
E: $2^{2x-2}=2^3\Rightarrow2x-2=3\Rightarrow x=\tfrac52$.

#M
c: u1-log-eq
Q: The domain condition for $\log(x-3)$ is
O: $x\ge3$
O*: $x>3$
O: $x\ne3$
O: $x<3$
E: The argument of a logarithm must be strictly positive.

#M
c: u1-exp-log-ineq
Q: If $\log_{1/2}P>\log_{1/2}Q$ (with $P,Q>0$), then
O: $P>Q$
O*: $P<Q$
O: $P=Q$
O: $P=2Q$
E: For a base between 0 and 1 the inequality reverses.

#M
c: u1-decibel
Q: If $I=100\,I_0$, the sound level $L=10\log\frac{I}{I_0}$ is
O: 10 dB
O*: 20 dB
O: 100 dB
O: 2 dB
E: $10\log100=10\times2=20$.

#M
c: u1-compound-interest
Q: The amount when $P$ is compounded continuously at rate $r$ for $t$ years is
O: $P(1+r)^t$
O: $P(1+rt)$
O*: $Pe^{rt}$
O: $P\left(1+\frac rt\right)^t$
E: Continuous compounding is the limit of $P(1+\frac rn)^{nt}$ as $n\to\infty$, which is $Pe^{rt}$.

#M
c: u1-growth-decay
Q: For $N=N_0e^{kt}$ with $k>0$, the time for $N$ to double is
O: $\dfrac{2}{k}$
O*: $\dfrac{\ln2}{k}$
O: $k\ln2$
O: $\dfrac{k}{\ln2}$
E: $e^{kt}=2\Rightarrow kt=\ln2$.
`);
