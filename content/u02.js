/* Unit 2 · Further Differentiation */
M12.addConcepts(2, String.raw`
#C u2-derivative-def The derivative and first principles
pre: f-limits, f-coord
R: $f'(x)=\displaystyle\lim_{h\to0}\frac{f(x+h)-f(x)}{h}$ is the slope of the tangent to $y=f(x)$, i.e. the instantaneous rate of change.
F: $$f'(x)=\frac{dy}{dx}=\lim_{h\to0}\frac{f(x+h)-f(x)}{h}$$
B: The fraction $\dfrac{f(x+h)-f(x)}{h}$ is the slope of the chord joining $(x,f(x))$ and $(x+h,f(x+h))$. As $h\to0$ the chord turns into the tangent, so its slope becomes the derivative.
Notations: $f'(x)$, $\dfrac{dy}{dx}$, $y'$, $y_1$, $Dy$.
X: **First principles for $\sin x$:**
$$\frac{\sin(x+h)-\sin x}{h}=\frac{2\cos\left(x+\frac h2\right)\sin\frac h2}{h}=\cos\left(x+\tfrac h2\right)\cdot\frac{\sin\frac h2}{\frac h2}\ \to\ \cos x\cdot1$$
using $\sin P-\sin Q=2\cos\frac{P+Q}2\sin\frac{P-Q}2$ and $\lim\limits_{\theta\to0}\frac{\sin\theta}\theta=1$.
E: From first principles, $f(x)=x^2$: $\dfrac{(x+h)^2-x^2}{h}=\dfrac{2xh+h^2}{h}=2x+h\to2x$.
M: The derivative is a limit; you cannot simply put $h=0$ at the start (you would get $\frac00$).

#C u2-basic-rules Power, sum, product and quotient rules
pre: u2-derivative-def, f-indices
R: $(x^n)'=nx^{n-1}$; derivatives of sums add; $(uv)'=u'v+uv'$; $\left(\frac uv\right)'=\dfrac{u'v-uv'}{v^2}$.
F: $$\frac{d}{dx}x^n=nx^{n-1},\quad (cf)'=cf',\quad (u\pm v)'=u'\pm v',\quad (uv)'=u'v+uv',\quad \Big(\frac uv\Big)'=\frac{u'v-uv'}{v^2}$$
B: Write roots and reciprocals as powers first: $\sqrt x=x^{1/2}\Rightarrow\frac{1}{2\sqrt x}$; $\frac1x=x^{-1}\Rightarrow-\frac1{x^2}$.
The derivative of a constant is $0$.
**Product rule:** "first $\times$ derivative of second + second $\times$ derivative of first".
**Quotient rule:** "bottom $\times$ derivative of top minus top $\times$ derivative of bottom, all over bottom squared". The order matters because of the minus sign.
X: Before using the quotient rule, see if the expression simplifies. $\dfrac{x^2+x}{x}=x+1$ (for $x\ne0$) needs no quotient rule at all.
E: $\dfrac{d}{dx}\left(x^3\sin x\right)=3x^2\sin x+x^3\cos x$.
E: $\dfrac{d}{dx}\dfrac{x}{x^2+1}=\dfrac{1\cdot(x^2+1)-x\cdot2x}{(x^2+1)^2}=\dfrac{1-x^2}{(x^2+1)^2}$.
M: $\left(\frac uv\right)'\neq\frac{u'}{v'}$, and $(uv)'\neq u'v'$.

#C u2-trig-derivs Derivatives of trigonometric functions
pre: u2-basic-rules, f-trig-identities, f-radians
R: $(\sin x)'=\cos x$, $(\cos x)'=-\sin x$, $(\tan x)'=\sec^2x$, $(\cot x)'=-\csc^2x$, $(\sec x)'=\sec x\tan x$, $(\csc x)'=-\csc x\cot x$.
F: $$\frac{d}{dx}\sin x=\cos x,\ \ \frac{d}{dx}\cos x=-\sin x,\ \ \frac{d}{dx}\tan x=\sec^2x,\ \ \frac{d}{dx}\cot x=-\csc^2x,\ \ \frac{d}{dx}\sec x=\sec x\tan x,\ \ \frac{d}{dx}\csc x=-\csc x\cot x$$
B: Memory aid: the derivatives of the **co-** functions ($\cos,\cot,\csc$) all start with a minus sign.
Only $\sin$ and $\cos$ need first principles; the other four follow from the quotient rule because $\tan x=\frac{\sin x}{\cos x}$, $\sec x=\frac{1}{\cos x}$, and so on.
X: **Derivation of $(\tan x)'$:** $\dfrac{\cos x\cdot\cos x-\sin x\cdot(-\sin x)}{\cos^2x}=\dfrac{\cos^2x+\sin^2x}{\cos^2x}=\dfrac1{\cos^2x}=\sec^2x$.
All of these need $x$ in **radians**.
E: $\dfrac{d}{dx}(x^2\csc x)=2x\csc x-x^2\csc x\cot x$.
M: $(\cos x)'=-\sin x$; the minus sign is often forgotten.

#C u2-chain-rule The chain rule
pre: u2-basic-rules, f-functions
R: For a function of a function, differentiate the outside (keeping the inside) and multiply by the derivative of the inside: $\frac{dy}{dx}=\frac{dy}{du}\cdot\frac{du}{dx}$.
F: $$\frac{d}{dx}f\big(g(x)\big)=f'\big(g(x)\big)\cdot g'(x),\qquad \frac{dy}{dx}=\frac{dy}{du}\cdot\frac{du}{dx}$$
B: Spot the **inside** function $u$. Then:
1. differentiate the outer function as if $u$ were $x$ (leave $u$ unchanged inside),
2. multiply by $\dfrac{du}{dx}$.
For several layers, peel them off one at a time, multiplying a factor for each layer.
X: Examples of layers: $\sin(x^2-x)$ has outer $\sin$, inner $x^2-x$, so the derivative is $\cos(x^2-x)\cdot(2x-1)$.
$\tan^3(5x^2+1)$ has three layers: cube → tangent → $5x^2+1$. Each layer contributes a factor:
$$3\tan^2(5x^2+1)\cdot\sec^2(5x^2+1)\cdot10x$$
A useful special case is the **general power rule**: $\dfrac{d}{dx}[u]^n=n[u]^{n-1}u'$.
E: $\dfrac{d}{dx}\sqrt{\cos x}=\dfrac{1}{2\sqrt{\cos x}}\cdot(-\sin x)=-\dfrac{\sin x}{2\sqrt{\cos x}}$.
E: $\dfrac{d}{dx}\tan(x^3)=\sec^2(x^3)\cdot3x^2$.
M: Forgetting to multiply by the derivative of the inside, e.g. writing $\frac{d}{dx}\sin3x=\cos3x$ (the factor $3$ is missing).

#C u2-parametric Parametric differentiation
pre: u2-chain-rule
R: If $x$ and $y$ are both given in terms of $t$, then $\dfrac{dy}{dx}=\dfrac{dy/dt}{dx/dt}$.
F: $$\frac{dy}{dx}=\frac{\;dy/dt\;}{\;dx/dt\;},\qquad \frac{d^2y}{dx^2}=\frac{\frac{d}{dt}\left(\frac{dy}{dx}\right)}{dx/dt}$$
B: Differentiate $x$ and $y$ separately with respect to $t$, then divide.
For the **second derivative**, differentiate $\frac{dy}{dx}$ (a function of $t$) with respect to $t$ and divide by $\frac{dx}{dt}$ **again**.
X: Why the extra division in $y''$? Because $y''=\dfrac{d}{dx}\left(y'\right)=\dfrac{d}{dt}(y')\cdot\dfrac{dt}{dx}$ by the chain rule, and $\dfrac{dt}{dx}=\dfrac{1}{dx/dt}$.
E: $x=2t+1,\ y=t^2$: $\dfrac{dy}{dx}=\dfrac{2t}{2}=t$, and $\dfrac{d^2y}{dx^2}=\dfrac{1}{2}$.
M: $\dfrac{d^2y}{dx^2}$ is **not** $\dfrac{d^2y/dt^2}{d^2x/dt^2}$.

#C u2-implicit Implicit differentiation
pre: u2-chain-rule
R: Differentiate both sides with respect to $x$, treating $y$ as a function of $x$ (so $y^2\to2y\,y'$), then solve for $y'$.
B: Steps:
1. Differentiate every term with respect to $x$. Whenever you differentiate something containing $y$, multiply by $\frac{dy}{dx}$ (chain rule).
2. Collect all $\frac{dy}{dx}$ terms on one side.
3. Factor out $\frac{dy}{dx}$ and divide.
Products like $xy$ need the product rule: $\frac{d}{dx}(xy)=y+x\frac{dy}{dx}$.
X: Implicit differentiation is how we find slopes on curves like circles and ellipses, where $y$ is not given as one formula in $x$. It also proves the derivatives of inverse functions: from $x=\sin y$, $1=\cos y\cdot y'$.
E: $x^2+xy+y^2=3\Rightarrow2x+(y+xy')+2yy'=0\Rightarrow y'=-\dfrac{2x+y}{x+2y}$.
M: Writing $\frac{d}{dx}(y^2)=2y$ without the factor $y'$.

#C u2-inv-trig-derivs Derivatives of inverse trigonometric functions
pre: u2-chain-rule, u2-implicit
R: $(\sin^{-1}x)'=\frac1{\sqrt{1-x^2}}$, $(\cos^{-1}x)'=-\frac1{\sqrt{1-x^2}}$, $(\tan^{-1}x)'=\frac1{1+x^2}$, $(\cot^{-1}x)'=-\frac1{1+x^2}$, $(\sec^{-1}x)'=\frac1{|x|\sqrt{x^2-1}}$, $(\csc^{-1}x)'=-\frac1{|x|\sqrt{x^2-1}}$.
F: $$\frac{d}{dx}\sin^{-1}x=\frac1{\sqrt{1-x^2}},\quad \frac{d}{dx}\tan^{-1}x=\frac1{1+x^2},\quad \frac{d}{dx}\sec^{-1}x=\frac1{|x|\sqrt{x^2-1}}$$ $$\text{and the co- versions have a minus sign: } (\cos^{-1}x)'=-\tfrac1{\sqrt{1-x^2}},\ (\cot^{-1}x)'=-\tfrac1{1+x^2},\ (\csc^{-1}x)'=-\tfrac1{|x|\sqrt{x^2-1}}$$
B: With an inside function, use the chain rule: $\dfrac{d}{dx}\sin^{-1}u=\dfrac{u'}{\sqrt{1-u^2}}$, $\dfrac{d}{dx}\tan^{-1}u=\dfrac{u'}{1+u^2}$.
X: **Proof for $\sin^{-1}$:** let $y=\sin^{-1}x$, so $x=\sin y$ with $-\frac\pi2\le y\le\frac\pi2$. Differentiate: $1=\cos y\,y'$, so $y'=\frac1{\cos y}$. On that interval $\cos y\ge0$, hence $\cos y=\sqrt{1-\sin^2y}=\sqrt{1-x^2}$.
E: $\dfrac{d}{dx}\tan^{-1}(x^2)=\dfrac{1}{1+x^4}\cdot2x=\dfrac{2x}{1+x^4}$.
M: $\dfrac{d}{dx}\tan^{-1}x$ is $\dfrac1{1+x^2}$, not $\sec^2x$ and not $\dfrac{1}{\tan x}$.

#C u2-exp-derivs Derivatives of exponential functions
pre: u2-chain-rule, u1-exponential
R: $(e^x)'=e^x$ and $(a^x)'=a^x\ln a$; with an inside function, $(e^{u})'=e^{u}u'$.
F: $$\frac{d}{dx}e^x=e^x,\qquad \frac{d}{dx}a^x=a^x\ln a,\qquad \frac{d}{dx}e^{u}=e^{u}\,u'$$
B: $e^x$ is its own derivative, which is why $e$ is the natural base.
For other bases an extra factor $\ln a$ appears: $(2^x)'=2^x\ln2$.
X: From first principles, $\dfrac{a^{x+h}-a^x}{h}=a^x\cdot\dfrac{a^h-1}{h}\to a^x\ln a$, using the standard limit $\lim\limits_{h\to0}\frac{a^h-1}h=\ln a$.
E: $\dfrac{d}{dx}e^{\sin^2x}=e^{\sin^2x}\cdot2\sin x\cos x=e^{\sin^2x}\sin2x$.
E: $\dfrac{d}{dx}e^{3x^2}=e^{3x^2}\cdot6x$.
M: $\dfrac{d}{dx}e^{x^2}$ is not $x^2e^{x^2-1}$; exponentials are not powers. It is $2xe^{x^2}$.

#C u2-log-derivs Derivatives of logarithmic functions
pre: u2-chain-rule, f-logs
R: $(\ln x)'=\frac1x$, $(\log_ax)'=\frac1{x\ln a}$; with an inside function, $(\ln u)'=\frac{u'}{u}$.
F: $$\frac{d}{dx}\ln x=\frac1x,\qquad \frac{d}{dx}\log_ax=\frac1{x\ln a},\qquad \frac{d}{dx}\ln u=\frac{u'}{u}$$
B: **Simplify with log laws before differentiating.** $\ln\dfrac{(x+1)^3}{x-2}=3\ln(x+1)-\ln(x-2)$ is far easier to differentiate than the original.
X: $\ln(1+\tan^2x)=\ln(\sec^2x)=2\ln|\sec x|$, whose derivative is $2\tan x$. Using identities first often turns a messy derivative into one line.
E: $\dfrac{d}{dx}\ln(\cos e^x)=\dfrac{-\sin e^x\cdot e^x}{\cos e^x}=-e^x\tan e^x$.
M: $\dfrac{d}{dx}\ln(5x)=\dfrac1x$ (not $\dfrac5x$), because $\dfrac{5}{5x}=\dfrac1x$.

#C u2-log-diff Logarithmic differentiation
pre: u2-log-derivs, u2-implicit
R: For products, quotients and powers like $x^{x^2}$: take $\ln$ of both sides, simplify with log laws, differentiate implicitly, and multiply back by $y$.
B: 1. $\ln y=\ln(\text{right side})$, expanded with log laws.
2. Differentiate: $\dfrac{y'}{y}=\dots$
3. $y'=y\times(\dots)$, then substitute $y$ back.
X: This is the only practical way to differentiate a variable raised to a variable power: $y=x^{\sin x}\Rightarrow\ln y=\sin x\ln x\Rightarrow\dfrac{y'}y=\cos x\ln x+\dfrac{\sin x}{x}$.
E: $y=\dfrac{(x+1)^2\sqrt{x-3}}{(x+4)^3}$: $\ln y=2\ln(x+1)+\tfrac12\ln(x-3)-3\ln(x+4)$, so $\dfrac{y'}y=\dfrac{2}{x+1}+\dfrac{1}{2(x-3)}-\dfrac{3}{x+4}$.
M: Forgetting to multiply by $y$ at the end.

#C u2-tangent-normal Tangent and normal lines
pre: u2-chain-rule, f-line-basic
R: At $(x_0,y_0)$ the tangent has slope $m=f'(x_0)$: $y-y_0=m(x-x_0)$; the normal is perpendicular: slope $-\frac1m$.
F: $$\text{tangent: } y-y_0=m(x-x_0),\qquad \text{normal: } y-y_0=-\frac1m(x-x_0)$$
B: Steps: find the point (both coordinates), find the slope by differentiating and substituting $x_0$, then use point-slope form.
- **Horizontal tangent:** $\frac{dy}{dx}=0$; the normal is vertical ($x=x_0$).
- **Vertical tangent:** $\frac{dy}{dx}$ is infinite (its denominator is $0$); the tangent is $x=x_0$ and the normal is horizontal ($y=y_0$).
X: With implicit curves, horizontal tangents come from "numerator of $y'$ $=0$" and vertical tangents from "denominator of $y'$ $=0$"; substitute back into the curve to find the actual points.
E: $y=\sec x$ at $x=\frac\pi4$: point $\left(\frac\pi4,\sqrt2\right)$, slope $\sec\frac\pi4\tan\frac\pi4=\sqrt2$. Tangent $y-\sqrt2=\sqrt2\left(x-\frac\pi4\right)$.
M: Using $f(x_0)$ as the slope. The slope is $f'(x_0)$.

#C u2-higher Higher-order derivatives
pre: u2-basic-rules
R: Differentiate again: $y''=\frac{d^2y}{dx^2}$, $y'''$, …; notations $y_2$, $D^2y$, $f''(x)$.
B: The second derivative is the rate of change of the slope. It is used in the second derivative test and in "show that $y''+\dots=0$" questions.
For an implicit curve, differentiate $y'$ again and replace $y'$ by its expression; then use the original equation to simplify.
X: **Show-that questions.** Find $y'$ and $y''$, substitute into the left side, and simplify to $0$. A common trick is to multiply through first (for example by $x$) so that the next differentiation is easier.
E: $y=e^{ax}\Rightarrow y'=ae^{ax},\ y''=a^2e^{ax},\ \dots,\ y^{(n)}=a^ne^{ax}$.
M: For implicit curves, $y'$ inside the expression for $y''$ must be replaced, otherwise the answer is incomplete.

#C u2-inc-dec Increasing and decreasing functions
pre: u2-basic-rules, f-inequalities
R: Where $f'(x)>0$ the function increases; where $f'(x)<0$ it decreases. Split the domain at the critical points and test the sign of $f'$ in each part.
B: **Method:**
1. Find $f'(x)$.
2. Find the critical points (where $f'=0$ or $f'$ does not exist).
3. These points divide the domain into intervals; pick a test point in each.
4. $f'>0$ → increasing on that interval; $f'<0$ → decreasing.
X: Geometric meaning: a positive slope means the graph rises from left to right.
E: $f(x)=2x^3-3x^2-12x$: $f'=6(x+1)(x-2)$. Positive on $(-\infty,-1)$ and $(2,\infty)$ (increasing), negative on $(-1,2)$ (decreasing).
M: Testing the sign of $f(x)$ instead of $f'(x)$.

#C u2-critical Stationary and critical points
pre: u2-inc-dec
R: A stationary point has $f'(c)=0$; a critical point has $f'(c)=0$ or $f'(c)$ undefined. Local maxima and minima can only occur at critical points (or at ends of an interval).
B: At a **local maximum** $f'$ changes from $+$ to $-$; at a **local minimum** from $-$ to $+$ (the first derivative test). If the sign does not change, it is neither.
X: $f(x)=x^{2/3}$ has $f'(x)=\frac{2}{3x^{1/3}}$, undefined at $x=0$: a critical point that is a minimum (a sharp corner). $|x|$ behaves the same way.
E: $f(x)=x^2-6x+5$: $f'=2x-6=0$ at $x=3$; $f'$ goes from $-$ to $+$, so a local minimum $f(3)=-4$.

#C u2-extrema-interval Absolute (global) and local extrema on an interval
pre: u2-critical
R: On a closed interval $[a,b]$, the absolute max and min are among the values at the critical points and at the end points; compare them.
B: **Closed-interval method:**
1. Find the critical points inside $(a,b)$.
2. Evaluate $f$ at these points and at $a$ and $b$.
3. The largest value is the absolute (global) maximum, the smallest the absolute minimum.
End points can also be **local** extrema: if $f$ increases away from $x=a$, then $f(a)$ is a local minimum.
E: $f(x)=x^4-4x$ on $[-2,3]$: $f'=4x^3-4=0\Rightarrow x=1$. Values $f(-2)=24$, $f(1)=-3$, $f(3)=69$. Max $69$ at $x=3$, min $-3$ at $x=1$.
M: Forgetting to check the end points.

#C u2-second-test The second derivative test
pre: u2-critical, u2-higher
R: At a stationary point ($f'(c)=0$): $f''(c)<0$ gives a local maximum, $f''(c)>0$ a local minimum; $f''(c)=0$ means the test is inconclusive.
F: $$f'(c)=0:\quad f''(c)<0\Rightarrow\text{max},\qquad f''(c)>0\Rightarrow\text{min}$$
B: Picture it: $f''>0$ means the graph bends upward (like a cup), so the stationary point is a bottom; $f''<0$ means it bends downward (a cap), a top.
E: $f(x)=x^3-3x$: $f'=3x^2-3=0$ at $x=\pm1$; $f''=6x$: $f''(1)=6>0$ (minimum $f(1)=-2$), $f''(-1)=-6<0$ (maximum $f(-1)=2$).
M: The test says nothing when $f''(c)=0$; then use the sign of $f'$ instead.

#C u2-linearization Linearization (local linear approximation)
pre: u2-tangent-normal
R: Near $x=a$, $f(x)\approx L(x)=f(a)+f'(a)(x-a)$: the tangent line approximates the curve.
F: $$L(x)=f(a)+f'(a)(x-a)$$
B: Choose $a$ close to the value you want and where $f(a)$ and $f'(a)$ are easy to compute (perfect squares, standard angles).
The approximation is good only for $x$ close to $a$.
X: For angles, convert the small change to **radians**: $1^\circ=\frac{\pi}{180}$.
E: $f(x)=\sqrt{2x-1}$ at $a=5$: $f(5)=3$, $f'(5)=\frac13$, so $L(x)=3+\frac{x-5}3$; $\sqrt{9.2}=f(5.1)\approx3.0333$.
M: Using degrees for $x-a$ in a trigonometric approximation.

#C u2-differentials Differentials and approximation
pre: u2-linearization
R: $dy=f'(x)\,dx$ approximates the actual change $\Delta y=f(x+\Delta x)-f(x)$; so $f(x+\Delta x)\approx f(x)+dy$.
F: $$dy=f'(x)\,dx,\qquad \Delta y\approx dy,\qquad f(x+dx)\approx f(x)+f'(x)\,dx$$
B: $dx$ is the small change in $x$ (it can be negative). $dy$ is the change along the tangent line; $\Delta y$ is the true change along the curve. For small $dx$ they are almost equal.
To estimate a number such as $\sqrt[5]{33}$: pick a nearby easy value ($32$), set $dx=1$, and add $dy$ to $f(32)$.
E: $\sqrt{24}$: $f(x)=\sqrt x$, $x=25$, $dx=-1$: $dy=\frac{1}{2\cdot5}(-1)=-0.1$, so $\sqrt{24}\approx4.9$.
M: Mixing up $dy$ (estimate) and $\Delta y$ (exact).

#C u2-errors Errors in measurement
pre: u2-differentials
R: If $x$ has a small error $dx$, the error in $y=f(x)$ is about $dy=f'(x)dx$; relative error $\frac{dy}{y}$, percentage error $\frac{dy}{y}\times100\%$.
F: $$\text{absolute error}\approx dy,\qquad \text{relative error}=\frac{dy}{y},\qquad \text{percentage error}=\frac{dy}{y}\times100\%$$
B: For a cube $V=x^3$: $dV=3x^2dx$, and $\frac{dV}V=3\frac{dx}x$: the percentage error in the volume is **three times** that in the side.
In general, for $y=x^n$ the percentage error is multiplied by $n$.
E: Radius measured with a $2\%$ error: area $A=\pi r^2$ has about $4\%$ error; circumference $2\pi r$ has $2\%$.

#C u2-optimization Optimization problems
pre: u2-second-test
R: Write the quantity to optimise as a function of one variable (using the constraint), differentiate, set to zero, check with the second derivative, and answer in words.
B: **Steps:**
1. Draw a picture and name the variables.
2. Write the quantity $Q$ to maximise/minimise.
3. Use the constraint to write $Q$ in terms of **one** variable.
4. State the allowed range of that variable.
5. Solve $Q'=0$; reject values outside the range.
6. Confirm max/min with $Q''$ (or end-point comparison).
7. Answer the actual question (dimensions, maximum value, …).
X: Heron's formula $A=\sqrt{s(s-a)(s-b)(s-c)}$ is handy for triangle questions; maximising $A$ is the same as maximising $A^2$ (or the product under the root), which avoids square roots.
E: A 100 m fence on three sides of a garden against a wall: $A=x(100-2x)$, $A'=100-4x=0\Rightarrow x=25$, so $25\times50$ m, area $1250\ \text{m}^2$.
M: Forgetting to reject solutions that are impossible (negative lengths, cuts wider than the sheet).
`);

M12.addQuestions(2, String.raw`
#Q 2.1 1(a)
Q: Derive the formula for the derivative of $\sec x$ with respect to $x$.
T: u2-trig-derivs, u2-basic-rules
S: Write $\sec x=\dfrac{1}{\cos x}$ and use the quotient rule with $u=1,\ v=\cos x$:
$$\frac{d}{dx}\sec x=\frac{0\cdot\cos x-1\cdot(-\sin x)}{\cos^2x}=\frac{\sin x}{\cos^2x}$$
W: The derivative of the constant $1$ is $0$ and the derivative of $\cos x$ is $-\sin x$.
C: u2-basic-rules
S: Split the fraction: $\dfrac{\sin x}{\cos^2x}=\dfrac{1}{\cos x}\cdot\dfrac{\sin x}{\cos x}=\sec x\tan x$.
C: f-trig-ratios
A: $\dfrac{d}{dx}\sec x=\sec x\tan x$.

#Q 2.1 1(b)
Q: Derive the formula for the derivative of $\csc x$ with respect to $x$.
T: u2-trig-derivs, u2-basic-rules
S: $\csc x=\dfrac1{\sin x}$. Quotient rule: $\dfrac{d}{dx}\csc x=\dfrac{0\cdot\sin x-1\cdot\cos x}{\sin^2x}=-\dfrac{\cos x}{\sin^2x}$.
C: u2-basic-rules
S: $-\dfrac{\cos x}{\sin^2x}=-\dfrac1{\sin x}\cdot\dfrac{\cos x}{\sin x}=-\csc x\cot x$.
C: f-trig-ratios
A: $\dfrac{d}{dx}\csc x=-\csc x\cot x$.

#Q 2.1 1(c)
Q: Derive the formula for the derivative of $\cot x$ with respect to $x$.
T: u2-trig-derivs, u2-basic-rules, f-trig-identities
S: $\cot x=\dfrac{\cos x}{\sin x}$. Quotient rule:
$$\frac{d}{dx}\cot x=\frac{(-\sin x)\sin x-\cos x\cos x}{\sin^2x}=\frac{-(\sin^2x+\cos^2x)}{\sin^2x}$$
C: u2-basic-rules
S: Since $\sin^2x+\cos^2x=1$: $\ \dfrac{d}{dx}\cot x=-\dfrac{1}{\sin^2x}=-\csc^2x$.
C: f-trig-identities
A: $\dfrac{d}{dx}\cot x=-\csc^2x$.

#Q 2.1 2
Q: Differentiate $y=x^2\cos x$ with respect to $x$.
T: u2-basic-rules, u2-trig-derivs
S: Product rule with $u=x^2,\ v=\cos x$: $\ y'=u'v+uv'=2x\cos x+x^2(-\sin x)$.
C: u2-basic-rules, u2-trig-derivs
A: $y'=2x\cos x-x^2\sin x$.

#Q 2.1 3
Q: Differentiate $y=x\sec x+\dfrac1x$ with respect to $x$.
T: u2-basic-rules, u2-trig-derivs
S: Product rule on $x\sec x$: $\ (x)'\sec x+x(\sec x)'=\sec x+x\sec x\tan x$.
C: u2-basic-rules, u2-trig-derivs
S: $\dfrac1x=x^{-1}$ has derivative $-x^{-2}=-\dfrac1{x^2}$.
C: f-indices
A: $y'=\sec x+x\sec x\tan x-\dfrac1{x^2}$.

#Q 2.1 4
Q: Differentiate $y=\dfrac{\sin t}{1-\cos t}$ with respect to $t$.
T: u2-basic-rules, u2-trig-derivs, f-trig-identities
S: Quotient rule: $\ y'=\dfrac{\cos t\,(1-\cos t)-\sin t\,(\sin t)}{(1-\cos t)^2}$.
W: The derivative of the bottom $1-\cos t$ is $+\sin t$.
C: u2-basic-rules
S: Numerator: $\cos t-\cos^2t-\sin^2t=\cos t-1$, using $\sin^2t+\cos^2t=1$.
C: f-trig-identities
S: So $y'=\dfrac{\cos t-1}{(1-\cos t)^2}=\dfrac{-(1-\cos t)}{(1-\cos t)^2}=-\dfrac{1}{1-\cos t}$.
A: $\dfrac{dy}{dt}=-\dfrac{1}{1-\cos t}=\dfrac{1}{\cos t-1}$.

#Q 2.1 5
Q: Differentiate $y=(1+\csc t)\sin t$ with respect to $t$.
T: u2-basic-rules, f-trig-ratios
S: Simplify first: $(1+\csc t)\sin t=\sin t+\csc t\sin t=\sin t+1$, since $\csc t\sin t=1$.
W: Simplifying before differentiating avoids a product rule altogether.
C: f-trig-ratios
S: $\dfrac{dy}{dt}=\cos t+0=\cos t$.
A: $\dfrac{dy}{dt}=\cos t$.

#Q 2.1 6
Q: Differentiate $y=\sec x+4\sqrt x-10$ with respect to $x$.
T: u2-basic-rules, u2-trig-derivs
S: Term by term: $(\sec x)'=\sec x\tan x$; $\ (4x^{1/2})'=4\cdot\tfrac12x^{-1/2}=\dfrac2{\sqrt x}$; $(10)'=0$.
C: u2-trig-derivs, u2-basic-rules
A: $y'=\sec x\tan x+\dfrac{2}{\sqrt x}$.

#Q 2.1 7
Q: Using a suitable substitution and the chain rule, differentiate $y=\sqrt{\dfrac{1+x}{1-x}}$.
T: u2-chain-rule, u2-basic-rules
S: Let $u=\dfrac{1+x}{1-x}$, so $y=u^{1/2}$ and $\dfrac{dy}{du}=\dfrac{1}{2\sqrt u}$.
C: u2-chain-rule
S: Quotient rule: $\dfrac{du}{dx}=\dfrac{(1)(1-x)-(1+x)(-1)}{(1-x)^2}=\dfrac{2}{(1-x)^2}$.
C: u2-basic-rules
S: Chain rule: $\dfrac{dy}{dx}=\dfrac{1}{2}\sqrt{\dfrac{1-x}{1+x}}\cdot\dfrac{2}{(1-x)^2}=\dfrac{\sqrt{1-x}}{\sqrt{1+x}\,(1-x)^2}$.
W: $\dfrac{1}{\sqrt u}=\sqrt{\dfrac{1-x}{1+x}}$.
S: Simplify: $\dfrac{\sqrt{1-x}}{(1-x)^2}=\dfrac{1}{(1-x)^{3/2}}$, and $(1-x)^{3/2}(1+x)^{1/2}=(1-x)\sqrt{(1-x)(1+x)}$, so
$$\frac{dy}{dx}=\frac{1}{(1-x)\sqrt{1-x^2}}.$$
C: f-indices
A: $\dfrac{dy}{dx}=\dfrac{1}{(1-x)\sqrt{1-x^2}}$.

#Q 2.1 8
Q: Using a suitable substitution and the chain rule, differentiate $y=(\sin x+\cos x)^{3/2}$.
T: u2-chain-rule, u2-trig-derivs
S: Let $u=\sin x+\cos x$, so $y=u^{3/2}$: $\ \dfrac{dy}{du}=\tfrac32u^{1/2}$ and $\dfrac{du}{dx}=\cos x-\sin x$.
C: u2-chain-rule, u2-trig-derivs
S: $\dfrac{dy}{dx}=\dfrac{dy}{du}\cdot\dfrac{du}{dx}=\tfrac32\sqrt{\sin x+\cos x}\,(\cos x-\sin x)$.
A: $y'=\tfrac32(\cos x-\sin x)\sqrt{\sin x+\cos x}$.

#Q 2.1 9
Q: Differentiate $y=\sec(\tan x)$.
T: u2-chain-rule, u2-trig-derivs
S: Outer function $\sec(\,\cdot\,)$, inner function $\tan x$: $\ y'=\sec(\tan x)\tan(\tan x)\cdot\dfrac{d}{dx}(\tan x)$.
C: u2-chain-rule
S: $\dfrac{d}{dx}\tan x=\sec^2x$, so $y'=\sec^2x\,\sec(\tan x)\tan(\tan x)$.
C: u2-trig-derivs
A: $y'=\sec^2x\,\sec(\tan x)\,\tan(\tan x)$.

#Q 2.1 10
Q: Differentiate $y=\sqrt{\sin x}+\cos\sqrt x$.
T: u2-chain-rule, u2-trig-derivs
S: $\dfrac{d}{dx}(\sin x)^{1/2}=\tfrac12(\sin x)^{-1/2}\cos x=\dfrac{\cos x}{2\sqrt{\sin x}}$.
C: u2-chain-rule
S: $\dfrac{d}{dx}\cos\sqrt x=-\sin\sqrt x\cdot\dfrac{1}{2\sqrt x}$.
W: The inside function $\sqrt x$ contributes the factor $\frac1{2\sqrt x}$.
C: u2-chain-rule
A: $y'=\dfrac{\cos x}{2\sqrt{\sin x}}-\dfrac{\sin\sqrt x}{2\sqrt x}$.

#Q 2.1 11
Q: Differentiate $y=\tan^2x+\cot(x^2)$.
T: u2-chain-rule, u2-trig-derivs
S: $\tan^2x=(\tan x)^2$: general power rule gives $2\tan x\cdot\sec^2x$.
C: u2-chain-rule
S: $\cot(x^2)$: derivative of $\cot$ is $-\csc^2$, times the inside derivative $2x$: $\ -2x\csc^2(x^2)$.
W: Notice the difference: in $\tan^2x$ the square is outside; in $\cot(x^2)$ it is inside.
A: $y'=2\tan x\sec^2x-2x\csc^2(x^2)$.

#Q 2.1 12
Q: Differentiate $y=\sin^3(\cos2v)$ with respect to $v$.
T: u2-chain-rule, u2-trig-derivs
S: Layers from outside in: cube $\to$ $\sin$ $\to$ $\cos$ $\to$ $2v$.
C: u2-chain-rule
S: Differentiate each layer and multiply:
$$\frac{dy}{dv}=3\sin^2(\cos2v)\cdot\cos(\cos2v)\cdot(-\sin2v)\cdot2$$
W: Each layer is differentiated while everything inside it is kept unchanged.
C: u2-trig-derivs
!:
S: Tidy up: $\dfrac{dy}{dv}=-6\sin2v\,\sin^2(\cos2v)\cos(\cos2v)$.
A: $\dfrac{dy}{dv}=-6\sin2v\,\sin^2(\cos2v)\,\cos(\cos2v)$.

#Q 2.1 13(i)
Q: Find $\dfrac{dy}{dx}$ for $x=\sin^2t,\ y=\cos2t$.
T: u2-parametric, u2-chain-rule
S: $\dfrac{dx}{dt}=2\sin t\cos t=\sin2t$ and $\dfrac{dy}{dt}=-2\sin2t$.
C: u2-chain-rule
S: $\dfrac{dy}{dx}=\dfrac{dy/dt}{dx/dt}=\dfrac{-2\sin2t}{\sin2t}=-2$.
C: u2-parametric
S: Check: $\cos2t=1-2\sin^2t$, so $y=1-2x$, a straight line of slope $-2$. ✓
C: f-compound
A: $\dfrac{dy}{dx}=-2$.

#Q 2.1 13(ii)
Q: Find $\dfrac{dy}{dx}$ for $x=\sqrt{1+\sec t},\ y=\sqrt{\tan t}$.
T: u2-parametric, u2-chain-rule
S: $\dfrac{dx}{dt}=\dfrac{\sec t\tan t}{2\sqrt{1+\sec t}}$ and $\dfrac{dy}{dt}=\dfrac{\sec^2t}{2\sqrt{\tan t}}$.
C: u2-chain-rule
S: Divide: $\dfrac{dy}{dx}=\dfrac{\sec^2t}{2\sqrt{\tan t}}\cdot\dfrac{2\sqrt{1+\sec t}}{\sec t\tan t}=\dfrac{\sec t\sqrt{1+\sec t}}{\tan t\sqrt{\tan t}}$.
C: u2-parametric
A: $\dfrac{dy}{dx}=\dfrac{\sec t\,\sqrt{1+\sec t}}{(\tan t)^{3/2}}$.

#Q 2.1 14
Q: If $x=a\sec t$ and $y=b\tan t$, find $\dfrac{dy}{dx}$ in terms of $x$ and $y$.
N: The printed statement asks to show $\frac{dy}{dx}=-\frac{b^2x}{a^2y}$. Careful differentiation gives $+\frac{b^2x}{a^2y}$ (the minus sign is a misprint). Step 4 checks this independently.
T: u2-parametric, u2-trig-derivs
S: $\dfrac{dx}{dt}=a\sec t\tan t,\qquad \dfrac{dy}{dt}=b\sec^2t$.
C: u2-trig-derivs
S: $\dfrac{dy}{dx}=\dfrac{b\sec^2t}{a\sec t\tan t}=\dfrac{b\sec t}{a\tan t}$.
C: u2-parametric
S: Replace $\sec t=\dfrac xa$ and $\tan t=\dfrac yb$: $\ \dfrac{dy}{dx}=\dfrac{b\cdot\frac xa}{a\cdot\frac yb}=\dfrac{b^2x}{a^2y}$.
S: Check: $\sec^2t-\tan^2t=1$ gives $\dfrac{x^2}{a^2}-\dfrac{y^2}{b^2}=1$. Differentiating implicitly: $\dfrac{2x}{a^2}-\dfrac{2y\,y'}{b^2}=0\Rightarrow y'=\dfrac{b^2x}{a^2y}$. ✓
C: u2-implicit
A: $\dfrac{dy}{dx}=\dfrac{b^2x}{a^2y}$.

#Q 2.1 15(i)
Q: Find $\dfrac{dy}{dx}$ by implicit differentiation: $ax^2+by^2+2gx+2fy+c=0$.
T: u2-implicit
S: Differentiate each term with respect to $x$: $\ 2ax+2by\dfrac{dy}{dx}+2g+2f\dfrac{dy}{dx}=0$.
W: Terms with $y$ pick up a factor $\frac{dy}{dx}$; the constant $c$ gives $0$.
C: u2-implicit
S: Collect: $(2by+2f)\dfrac{dy}{dx}=-(2ax+2g)\Rightarrow\dfrac{dy}{dx}=-\dfrac{ax+g}{by+f}$.
A: $\dfrac{dy}{dx}=-\dfrac{ax+g}{by+f}$.

#Q 2.1 15(ii)
Q: Find $\dfrac{dy}{dx}$ by implicit differentiation: $x+\tan(xy)=0$.
T: u2-implicit, u2-chain-rule, u2-basic-rules
S: Differentiate: $1+\sec^2(xy)\cdot\dfrac{d}{dx}(xy)=0$, and $\dfrac{d}{dx}(xy)=y+x\dfrac{dy}{dx}$.
C: u2-chain-rule, u2-basic-rules
!:
S: So $1+\sec^2(xy)\left(y+x\dfrac{dy}{dx}\right)=0\Rightarrow x\sec^2(xy)\dfrac{dy}{dx}=-1-y\sec^2(xy)$.
C: u2-implicit
S: $\dfrac{dy}{dx}=-\dfrac{1+y\sec^2(xy)}{x\sec^2(xy)}=-\dfrac{\cos^2(xy)+y}{x}$.
W: Divide top and bottom by $\sec^2(xy)$.
S: Since $\tan(xy)=-x$, $\ \sec^2(xy)=1+x^2$, so also $\dfrac{dy}{dx}=-\dfrac{1+y(1+x^2)}{x(1+x^2)}$.
C: f-trig-identities
A: $\dfrac{dy}{dx}=-\dfrac{\cos^2(xy)+y}{x}=-\dfrac{1+y(1+x^2)}{x(1+x^2)}$.

#Q 2.1 16(i)
Q: Differentiate $\sin^{-1}\dfrac{x}{a}$ $(a>0)$.
T: u2-inv-trig-derivs, u2-chain-rule
S: $\dfrac{d}{dx}\sin^{-1}u=\dfrac{u'}{\sqrt{1-u^2}}$ with $u=\dfrac xa$, $u'=\dfrac1a$.
C: u2-inv-trig-derivs
S: $\dfrac{1}{a\sqrt{1-x^2/a^2}}=\dfrac{1}{a\cdot\frac{\sqrt{a^2-x^2}}{a}}=\dfrac{1}{\sqrt{a^2-x^2}}$.
W: $\sqrt{1-\frac{x^2}{a^2}}=\frac{\sqrt{a^2-x^2}}{a}$ because $a>0$.
A: $\dfrac{1}{\sqrt{a^2-x^2}}$.

#Q 2.1 16(ii)
Q: Differentiate $\csc^{-1}\dfrac{x^2+1}{x^2-1}$ (for $|x|>1$).
T: u2-inv-trig-derivs, u2-chain-rule, u2-basic-rules
S: Let $u=\dfrac{x^2+1}{x^2-1}$ (here $u>1$). Then $\dfrac{d}{dx}\csc^{-1}u=-\dfrac{u'}{u\sqrt{u^2-1}}$.
C: u2-inv-trig-derivs
S: $u'=\dfrac{2x(x^2-1)-(x^2+1)2x}{(x^2-1)^2}=\dfrac{-4x}{(x^2-1)^2}$.
C: u2-basic-rules
S: $u^2-1=\dfrac{(x^2+1)^2-(x^2-1)^2}{(x^2-1)^2}=\dfrac{4x^2}{(x^2-1)^2}$, so $\sqrt{u^2-1}=\dfrac{2|x|}{x^2-1}$.
C: f-factor
!:
S: Combine: $\ -\dfrac{-4x}{(x^2-1)^2}\cdot\dfrac{x^2-1}{x^2+1}\cdot\dfrac{x^2-1}{2|x|}=\dfrac{2x}{|x|(x^2+1)}$.
S: So the derivative is $\dfrac{2}{1+x^2}$ for $x>1$ and $-\dfrac{2}{1+x^2}$ for $x<-1$.
A: $\dfrac{2x}{|x|(1+x^2)}$, i.e. $\dfrac{2}{1+x^2}$ when $x>1$.

#Q 2.1 16(iii)
Q: Differentiate $\cot^{-1}\sqrt x+\sqrt{\cot^{-1}x}$.
T: u2-inv-trig-derivs, u2-chain-rule
S: First term: $\dfrac{d}{dx}\cot^{-1}u=-\dfrac{u'}{1+u^2}$ with $u=\sqrt x$: $\ -\dfrac{1}{1+x}\cdot\dfrac{1}{2\sqrt x}$.
C: u2-inv-trig-derivs
S: Second term: $\dfrac{d}{dx}\left(\cot^{-1}x\right)^{1/2}=\dfrac{1}{2\sqrt{\cot^{-1}x}}\cdot\left(-\dfrac{1}{1+x^2}\right)$.
C: u2-chain-rule
A: $-\dfrac{1}{2\sqrt x\,(1+x)}-\dfrac{1}{2(1+x^2)\sqrt{\cot^{-1}x}}$.

#Q 2.1 16(iv)
Q: Differentiate $(\tan t)^{-1}+\dfrac{1}{\tan^{-1}t}$ with respect to $t$.
T: u2-inv-trig-derivs, u2-trig-derivs, u2-chain-rule
S: $(\tan t)^{-1}=\cot t$ (a reciprocal, **not** an inverse function), with derivative $-\csc^2t$.
W: $(\tan t)^{-1}$ means $\frac1{\tan t}$; the inverse function is written $\tan^{-1}t$.
C: u2-trig-derivs
!:
S: $\dfrac1{\tan^{-1}t}=(\tan^{-1}t)^{-1}$; derivative $-(\tan^{-1}t)^{-2}\cdot\dfrac{1}{1+t^2}$.
C: u2-chain-rule, u2-inv-trig-derivs
A: $-\csc^2t-\dfrac{1}{(1+t^2)\left(\tan^{-1}t\right)^2}$.

#Q 2.2 1(i)
Q: Find $f'(x)$ if $f(x)=(x^3+4x)\,e^{1/x}$.
T: u2-basic-rules, u2-exp-derivs
S: Product rule: $f'=(3x^2+4)e^{1/x}+(x^3+4x)\cdot\dfrac{d}{dx}e^{1/x}$.
C: u2-basic-rules
S: $\dfrac{d}{dx}e^{1/x}=e^{1/x}\cdot\left(-\dfrac{1}{x^2}\right)$.
C: u2-exp-derivs
S: Factor out $e^{1/x}$: $\ f'(x)=e^{1/x}\left(3x^2+4-\dfrac{x^3+4x}{x^2}\right)=e^{1/x}\left(3x^2-x+4-\dfrac4x\right)$.
A: $f'(x)=e^{1/x}\left(3x^2-x+4-\dfrac4x\right)$.

#Q 2.2 1(ii)
Q: Find $f'(x)$ if $f(x)=\sin(2^x)$.
T: u2-chain-rule, u2-exp-derivs
S: Chain rule: $f'(x)=\cos(2^x)\cdot\dfrac{d}{dx}2^x=\cos(2^x)\cdot2^x\ln2$.
C: u2-exp-derivs
A: $f'(x)=2^x\ln2\,\cos(2^x)$.

#Q 2.2 1(iii)
Q: Find $f'(x)$ if $f(x)=e^{x\cos x}$.
T: u2-exp-derivs, u2-basic-rules
S: $f'(x)=e^{x\cos x}\cdot\dfrac{d}{dx}(x\cos x)$.
C: u2-exp-derivs
S: Product rule: $\dfrac{d}{dx}(x\cos x)=\cos x-x\sin x$.
C: u2-basic-rules
A: $f'(x)=e^{x\cos x}(\cos x-x\sin x)$.

#Q 2.2 1(iv)
Q: Find $f'(x)$ if $f(x)=\dfrac{e^x+e^{-x}}{e^x-e^{-x}}$.
T: u2-exp-derivs, u2-basic-rules, f-expand
S: Quotient rule (note $(e^x+e^{-x})'=e^x-e^{-x}$ and $(e^x-e^{-x})'=e^x+e^{-x}$):
$$f'=\frac{(e^x-e^{-x})(e^x-e^{-x})-(e^x+e^{-x})(e^x+e^{-x})}{(e^x-e^{-x})^2}$$
C: u2-basic-rules, u2-exp-derivs
S: Numerator: $(e^{2x}-2+e^{-2x})-(e^{2x}+2+e^{-2x})=-4$.
C: f-expand
A: $f'(x)=\dfrac{-4}{(e^x-e^{-x})^2}$.

#Q 2.2 2(i)
Q: Find $\dfrac{dy}{dx}$ if $y=\ln(e^x-e^{-x})$.
T: u2-log-derivs, u2-exp-derivs
S: $\dfrac{d}{dx}\ln u=\dfrac{u'}{u}$ with $u=e^x-e^{-x}$, $u'=e^x+e^{-x}$.
C: u2-log-derivs
A: $\dfrac{dy}{dx}=\dfrac{e^x+e^{-x}}{e^x-e^{-x}}$.

#Q 2.2 2(ii)
Q: Find $\dfrac{dy}{dx}$ if $y=\log_{10}\sqrt{\dfrac{1-x^2}{1+x^2}}$.
T: u2-log-derivs, f-logs
S: Use log laws first: $y=\tfrac12\left[\log_{10}(1-x^2)-\log_{10}(1+x^2)\right]$.
C: f-logs
S: $\dfrac{d}{dx}\log_{10}u=\dfrac{u'}{u\ln10}$:
$$\frac{dy}{dx}=\frac{1}{2\ln10}\left[\frac{-2x}{1-x^2}-\frac{2x}{1+x^2}\right]$$
C: u2-log-derivs
S: Combine: $\dfrac{-x}{\ln10}\cdot\dfrac{(1+x^2)+(1-x^2)}{(1-x^2)(1+x^2)}=\dfrac{-2x}{(1-x^4)\ln10}$.
A: $\dfrac{dy}{dx}=-\dfrac{2x}{(1-x^4)\ln10}$.

#Q 2.2 2(iii)
Q: Find $\dfrac{dy}{dx}$ if $y=\ln\left(x-\sqrt{x^2-1}\right)$.
T: u2-log-derivs, u2-chain-rule
S: $\dfrac{dy}{dx}=\dfrac{1-\frac{x}{\sqrt{x^2-1}}}{x-\sqrt{x^2-1}}$.
C: u2-log-derivs, u2-chain-rule
S: Numerator: $\dfrac{\sqrt{x^2-1}-x}{\sqrt{x^2-1}}=-\dfrac{x-\sqrt{x^2-1}}{\sqrt{x^2-1}}$; it cancels with the denominator.
!:
A: $\dfrac{dy}{dx}=-\dfrac{1}{\sqrt{x^2-1}}$.

#Q 2.2 2(iv)
Q: Find $\dfrac{dy}{dx}$ if $y=\ln(1-\cos^2x)$.
T: u2-log-derivs, f-trig-identities
S: $1-\cos^2x=\sin^2x$, so $y=\ln(\sin^2x)=2\ln|\sin x|$.
C: f-trig-identities, f-logs
S: $\dfrac{dy}{dx}=2\cdot\dfrac{\cos x}{\sin x}=2\cot x$.
C: u2-log-derivs
A: $\dfrac{dy}{dx}=2\cot x$.

#Q 2.2 2(v)
Q: Find $\dfrac{dy}{dx}$ if $y=\dfrac{\ln x}{x^2}$.
T: u2-basic-rules, u2-log-derivs
S: Quotient rule: $\dfrac{dy}{dx}=\dfrac{\frac1x\cdot x^2-\ln x\cdot2x}{x^4}=\dfrac{x-2x\ln x}{x^4}$.
C: u2-basic-rules
S: Cancel $x$: $\dfrac{1-2\ln x}{x^3}$.
A: $\dfrac{dy}{dx}=\dfrac{1-2\ln x}{x^3}$.

#Q 2.2 2(vi)
Q: Find $\dfrac{dy}{dx}$ if $y=\dfrac{\sqrt{x^2-1}\,(2x+1)}{(x^3-1)^{3/2}}$.
T: u2-log-diff, u2-log-derivs
S: Take logs: $\ln y=\tfrac12\ln(x^2-1)+\ln(2x+1)-\tfrac32\ln(x^3-1)$.
W: Logarithmic differentiation turns this product/quotient into a sum that is easy to differentiate.
C: u2-log-diff, f-logs
S: Differentiate: $\dfrac1y\dfrac{dy}{dx}=\dfrac{x}{x^2-1}+\dfrac{2}{2x+1}-\dfrac{9x^2}{2(x^3-1)}$.
C: u2-log-derivs
S: Multiply by $y$.
A: $\dfrac{dy}{dx}=\dfrac{\sqrt{x^2-1}(2x+1)}{(x^3-1)^{3/2}}\left[\dfrac{x}{x^2-1}+\dfrac{2}{2x+1}-\dfrac{9x^2}{2(x^3-1)}\right]$.

#Q 2.3 1
Q: Find the equation of the tangent line to $y=\sin^{-1}\dfrac x2+\cos x$ at $x=\dfrac\pi2$.
T: u2-tangent-normal, u2-inv-trig-derivs
S: Point: $y\left(\frac\pi2\right)=\sin^{-1}\dfrac\pi4+\cos\dfrac\pi2=\sin^{-1}\dfrac\pi4\approx0.9033$.
S: Slope: $y'=\dfrac{1}{\sqrt{4-x^2}}-\sin x$, so $m=\dfrac{1}{\sqrt{4-\pi^2/4}}-1=\dfrac{2}{\sqrt{16-\pi^2}}-1\approx-0.1922$.
C: u2-inv-trig-derivs
S: Tangent: $\ y-\sin^{-1}\dfrac\pi4=\left(\dfrac{2}{\sqrt{16-\pi^2}}-1\right)\left(x-\dfrac\pi2\right)$.
C: u2-tangent-normal
A: $y-\sin^{-1}\frac\pi4=\left(\frac{2}{\sqrt{16-\pi^2}}-1\right)\left(x-\frac\pi2\right)$, i.e. $y\approx-0.1922x+1.2052$.

#Q 2.3 3
Q: Find the point on the curve $x+y-e^y=0$ where the tangent is vertical. Also find the tangent and normal at that point.
T: u2-tangent-normal, u2-implicit
S: Implicit differentiation: $1+y'-e^yy'=0\Rightarrow y'(1-e^y)=-1\Rightarrow y'=\dfrac{1}{e^y-1}$.
C: u2-implicit
S: Vertical tangent ⇔ $y'$ is infinite ⇔ denominator $e^y-1=0\Rightarrow y=0$.
C: u2-tangent-normal
S: From the curve: $x=e^y-y=1-0=1$. The point is $(1,0)$.
S: Tangent: the vertical line $x=1$. Normal: the horizontal line through $(1,0)$, i.e. $y=0$.
A: Point $(1,0)$; tangent $x=1$; normal $y=0$.

#Q 2.3 4
Q: Find all points on the ellipse $x^2-xy+y^2=1$ where the tangent line is horizontal.
T: u2-tangent-normal, u2-implicit
S: Differentiate: $2x-(y+xy')+2yy'=0\Rightarrow y'(2y-x)=y-2x\Rightarrow y'=\dfrac{y-2x}{2y-x}$.
C: u2-implicit
S: Horizontal tangent: $y'=0\Rightarrow y=2x$ (with $2y-x\ne0$).
C: u2-tangent-normal
S: Substitute in the curve: $x^2-2x^2+4x^2=1\Rightarrow3x^2=1\Rightarrow x=\pm\dfrac1{\sqrt3}$, so $y=\pm\dfrac2{\sqrt3}$.
S: Check $2y-x=\pm\dfrac{3}{\sqrt3}\ne0$ ✓.
A: $\left(\frac1{\sqrt3},\frac2{\sqrt3}\right)$ and $\left(-\frac1{\sqrt3},-\frac2{\sqrt3}\right)$.

#Q 2.3 5(i)
Q: Find $y_2$ for $y=x^4-3x^2+4x-5$.
T: u2-higher
S: $y_1=4x^3-6x+4$.
S: $y_2=12x^2-6$.
A: $y_2=12x^2-6$.

#Q 2.3 5(ii)
Q: Find $y_2$ for $y=\ln(2x+3)$.
T: u2-higher, u2-log-derivs
S: $y_1=\dfrac{2}{2x+3}=2(2x+3)^{-1}$.
C: u2-log-derivs
S: $y_2=-2(2x+3)^{-2}\cdot2=-\dfrac{4}{(2x+3)^2}$.
C: u2-chain-rule
A: $y_2=-\dfrac{4}{(2x+3)^2}$.

#Q 2.3 5(iii)
Q: Find $y_2$ for $y=x^3e^{2x}$.
T: u2-higher, u2-basic-rules, u2-exp-derivs
S: $y_1=3x^2e^{2x}+2x^3e^{2x}=e^{2x}(2x^3+3x^2)$.
C: u2-basic-rules
S: $y_2=2e^{2x}(2x^3+3x^2)+e^{2x}(6x^2+6x)=e^{2x}(4x^3+12x^2+6x)$.
A: $y_2=2xe^{2x}(2x^2+6x+3)$.

#Q 2.3 5(iv)
Q: Find $y_2$ for $x^2-y^2=4$.
T: u2-higher, u2-implicit
S: $2x-2yy_1=0\Rightarrow y_1=\dfrac xy$.
C: u2-implicit
S: Quotient rule: $y_2=\dfrac{y-xy_1}{y^2}=\dfrac{y-\frac{x^2}y}{y^2}=\dfrac{y^2-x^2}{y^3}$.
S: Since $x^2-y^2=4$: $y_2=-\dfrac{4}{y^3}$.
A: $y_2=-\dfrac{4}{y^3}$.

#Q 2.3 5(v)
Q: Find $y_2$ for $x^2-xy+y^2=7$.
T: u2-higher, u2-implicit
S: $2x-y-xy_1+2yy_1=0\Rightarrow y_1=\dfrac{y-2x}{2y-x}$.
C: u2-implicit
S: Differentiate the quotient: $y_2=\dfrac{(y_1-2)(2y-x)-(y-2x)(2y_1-1)}{(2y-x)^2}=\dfrac{3(xy_1-y)}{(2y-x)^2}$.
W: Expanding the numerator, the $2yy_1$ terms and the $2x$ terms cancel, leaving $3xy_1-3y$.
!:
S: $xy_1-y=\dfrac{x(y-2x)-y(2y-x)}{2y-x}=\dfrac{-2(x^2-xy+y^2)}{2y-x}=\dfrac{-14}{2y-x}$.
W: The curve's equation $x^2-xy+y^2=7$ simplifies the numerator.
S: So $y_2=\dfrac{3}{(2y-x)^2}\cdot\dfrac{-14}{2y-x}=-\dfrac{42}{(2y-x)^3}$.
A: $y_2=-\dfrac{42}{(2y-x)^3}$.

#Q 2.3 5(vi)
Q: Find $y_2$ for $x=a\cos t,\ y=b\sin t$.
T: u2-higher, u2-parametric
S: $y_1=\dfrac{b\cos t}{-a\sin t}=-\dfrac ba\cot t$.
C: u2-parametric
S: $y_2=\dfrac{\frac{d}{dt}y_1}{dx/dt}=\dfrac{\frac ba\csc^2t}{-a\sin t}=-\dfrac{b}{a^2}\csc^3t$.
W: For a parametric second derivative, differentiate $y_1$ with respect to $t$ and divide by $\frac{dx}{dt}$ again.
!:
A: $y_2=-\dfrac{b}{a^2}\csc^3t$.

#Q 2.3 5(vii)
Q: Find $y_2$ for $x=t^2,\ y=2t^3$.
T: u2-higher, u2-parametric
S: $y_1=\dfrac{6t^2}{2t}=3t$.
C: u2-parametric
S: $y_2=\dfrac{\frac{d}{dt}(3t)}{\frac{dx}{dt}}=\dfrac{3}{2t}$.
A: $y_2=\dfrac{3}{2t}$.

#Q 2.3 7
Q: If $x^2+y^2=25$, show that $y^3y''+25=0$.
T: u2-higher, u2-implicit
S: $2x+2yy'=0\Rightarrow y'=-\dfrac xy$.
C: u2-implicit
S: $y''=-\dfrac{y-xy'}{y^2}=-\dfrac{y+\frac{x^2}y}{y^2}=-\dfrac{x^2+y^2}{y^3}=-\dfrac{25}{y^3}$.
S: Multiply by $y^3$: $y^3y''=-25$, i.e. $y^3y''+25=0$. $\blacksquare$
A: Shown: $y''=-\frac{25}{y^3}$, so $y^3y''+25=0$.

#Q 2.3 8
Q: If $y=e^{ax}\cos bx$, show that $y''-2ay'+(a^2+b^2)y=0$.
T: u2-higher, u2-basic-rules, u2-exp-derivs
S: $y'=ae^{ax}\cos bx-be^{ax}\sin bx$.
C: u2-basic-rules
S: $y''=a^2e^{ax}\cos bx-abe^{ax}\sin bx-abe^{ax}\sin bx-b^2e^{ax}\cos bx=(a^2-b^2)e^{ax}\cos bx-2abe^{ax}\sin bx$.
S: Substitute: the $\cos bx$ terms give $(a^2-b^2)-2a^2+(a^2+b^2)=0$ and the $\sin bx$ terms give $-2ab+2ab=0$. So the expression is $0$. $\blacksquare$
A: Shown: $y''-2ay'+(a^2+b^2)y=0$.

#Q 2.3 9
Q: If $x=\sin t$ and $y=\cos^2t$, show that $y''+2=0$.
T: u2-higher, u2-parametric
S: $\dfrac{dx}{dt}=\cos t$, $\dfrac{dy}{dt}=-2\cos t\sin t$, so $y'=\dfrac{-2\cos t\sin t}{\cos t}=-2\sin t$.
C: u2-parametric
S: $y''=\dfrac{\frac{d}{dt}(-2\sin t)}{dx/dt}=\dfrac{-2\cos t}{\cos t}=-2$, so $y''+2=0$. $\blacksquare$
S: Check: $y=\cos^2t=1-\sin^2t=1-x^2$, whose second derivative is $-2$. ✓
A: Shown: $y''=-2$.

#Q 2.3 10
Q: If $x=\ln t$ and $y=\dfrac1t$, show that $y''-y=0$.
T: u2-higher, u2-parametric
S: $\dfrac{dx}{dt}=\dfrac1t,\ \dfrac{dy}{dt}=-\dfrac{1}{t^2}\Rightarrow y'=\dfrac{-1/t^2}{1/t}=-\dfrac1t$.
C: u2-parametric
S: $y''=\dfrac{\frac{d}{dt}\left(-\frac1t\right)}{dx/dt}=\dfrac{1/t^2}{1/t}=\dfrac1t=y$, so $y''-y=0$. $\blacksquare$
A: Shown: $y''=\frac1t=y$.

#Q 2.3 11
Q: If $y=a\cos(\ln x)+b\sin(\ln x)$, show that $x^2y_2+xy_1+y=0$.
T: u2-higher, u2-chain-rule
S: $y_1=-\dfrac{a\sin(\ln x)}{x}+\dfrac{b\cos(\ln x)}{x}$, so $xy_1=-a\sin(\ln x)+b\cos(\ln x)$.
W: Multiplying by $x$ before differentiating again avoids a quotient rule.
C: u2-chain-rule
!:
S: Differentiate $xy_1$: $\ y_1+xy_2=-\dfrac{a\cos(\ln x)}{x}-\dfrac{b\sin(\ln x)}{x}=-\dfrac yx$.
C: u2-basic-rules
S: Multiply by $x$: $xy_1+x^2y_2=-y$, i.e. $x^2y_2+xy_1+y=0$. $\blacksquare$
A: Shown.

#Q 2.4 1(i)
Q: Determine the intervals in which $f(x)=\sin x$, $x\in(0,2\pi)$, is increasing or decreasing.
T: u2-inc-dec, u2-critical
S: $f'(x)=\cos x=0$ at $x=\dfrac\pi2$ and $\dfrac{3\pi}2$.
C: u2-critical
S: Test the sign of $\cos x$: positive on $\left(0,\frac\pi2\right)$, negative on $\left(\frac\pi2,\frac{3\pi}2\right)$, positive on $\left(\frac{3\pi}2,2\pi\right)$.
C: u2-inc-dec, f-quadrants
A: Increasing on $\left(0,\frac\pi2\right)\cup\left(\frac{3\pi}2,2\pi\right)$; decreasing on $\left(\frac\pi2,\frac{3\pi}2\right)$.

#Q 2.4 1(ii)
Q: Determine the intervals in which $f(x)=4-x^2$, $x\in\R$, is increasing or decreasing.
T: u2-inc-dec
S: $f'(x)=-2x$, zero at $x=0$.
S: $f'>0$ for $x<0$ and $f'<0$ for $x>0$.
C: u2-inc-dec
A: Increasing on $(-\infty,0)$, decreasing on $(0,\infty)$.

#Q 2.4 1(iii)
Q: Determine the intervals in which $f(x)=x^2+3x+2$, $x\in[-4,1]$, is increasing or decreasing.
T: u2-inc-dec
S: $f'(x)=2x+3=0\Rightarrow x=-\tfrac32$.
S: $f'<0$ on $\left[-4,-\tfrac32\right)$ and $f'>0$ on $\left(-\tfrac32,1\right]$.
C: u2-inc-dec
A: Decreasing on $\left[-4,-\frac32\right]$, increasing on $\left[-\frac32,1\right]$.

#Q 2.4 2(i)
Q: Use the second derivative test to find the local extreme values of $f(x)=8-2x^2$.
T: u2-second-test
S: $f'(x)=-4x=0\Rightarrow x=0$.
C: u2-critical
S: $f''(x)=-4<0$, so $x=0$ is a local maximum: $f(0)=8$.
C: u2-second-test
A: Local maximum value $8$ at $x=0$.

#Q 2.4 2(ii)
Q: Use the second derivative test to find the local extreme values of $f(x)=x^2-x-2$.
T: u2-second-test
S: $f'(x)=2x-1=0\Rightarrow x=\tfrac12$.
S: $f''(x)=2>0$: local minimum $f\left(\tfrac12\right)=\tfrac14-\tfrac12-2=-\tfrac94$.
C: u2-second-test
A: Local minimum value $-\frac94$ at $x=\frac12$.

#Q 2.4 2(iii)
Q: Use the second derivative test to find the local extreme values of $f(x)=x^4-8x^2+2$.
T: u2-second-test, f-factor
S: $f'(x)=4x^3-16x=4x(x^2-4)=4x(x-2)(x+2)=0\Rightarrow x=0,\pm2$.
C: f-factor
S: $f''(x)=12x^2-16$: $f''(0)=-16<0$ (max); $f''(\pm2)=32>0$ (min).
C: u2-second-test
S: Values: $f(0)=2$; $f(\pm2)=16-32+2=-14$.
A: Local maximum $2$ at $x=0$; local minimum $-14$ at $x=\pm2$.

#Q 2.4 4(i)
Q: Find the global and local extreme values of $f(x)=4-x^2$ on $[-1,2]$ using increasing and decreasing behaviour (include the end points).
T: u2-extrema-interval, u2-inc-dec
S: $f'(x)=-2x$: positive on $[-1,0)$ (increasing), negative on $(0,2]$ (decreasing).
C: u2-inc-dec
S: Values: $f(-1)=3,\ f(0)=4,\ f(2)=0$.
S: Increasing then decreasing gives a local maximum at $x=0$. At the end points: $f$ rises away from $x=-1$, so $f(-1)=3$ is a local minimum; $f$ falls into $x=2$, so $f(2)=0$ is a local minimum.
C: u2-extrema-interval
A: Global max $4$ at $x=0$; global min $0$ at $x=2$; local minima $3$ (at $x=-1$) and $0$ (at $x=2$); local max $4$ (at $x=0$).

#Q 2.4 4(ii)
Q: Find the global and local extreme values of $f(x)=\cos x-\sin x$ on $[0,2\pi]$ using increasing and decreasing behaviour (include the end points).
T: u2-extrema-interval, u2-inc-dec, f-quadrants
S: $f'(x)=-\sin x-\cos x=0\Rightarrow\tan x=-1\Rightarrow x=\dfrac{3\pi}4,\ \dfrac{7\pi}4$.
C: u2-critical, f-quadrants
S: Signs of $f'$: negative on $\left(0,\frac{3\pi}4\right)$, positive on $\left(\frac{3\pi}4,\frac{7\pi}4\right)$, negative on $\left(\frac{7\pi}4,2\pi\right)$.
W: Test points: $f'\left(\frac\pi2\right)=-1$, $f'(\pi)=1$, $f'(2\pi)=-1$.
C: u2-inc-dec
S: Values: $f(0)=1$, $f\left(\frac{3\pi}4\right)=-\frac{\sqrt2}2-\frac{\sqrt2}2=-\sqrt2$, $f\left(\frac{7\pi}4\right)=\sqrt2$, $f(2\pi)=1$.
S: Local min $-\sqrt2$ at $\frac{3\pi}4$ (global min); local max $\sqrt2$ at $\frac{7\pi}4$ (global max). End points: $f(0)=1$ is a local max (it decreases after $0$) and $f(2\pi)=1$ is a local min (it decreases into $2\pi$).
C: u2-extrema-interval
A: Global max $\sqrt2$ at $x=\frac{7\pi}4$; global min $-\sqrt2$ at $x=\frac{3\pi}4$; end points give a local max $1$ at $x=0$ and a local min $1$ at $x=2\pi$.

#Q 2.4 6
Q: Show that $f(x)=x^{x^2}$ ($x>0$) has a relative minimum at $x=\dfrac1{\sqrt e}$.
T: u2-log-diff, u2-critical, u2-second-test
S: Logarithmic differentiation: $\ln f=x^2\ln x\Rightarrow\dfrac{f'}{f}=2x\ln x+x$, so $f'(x)=x^{x^2}\cdot x(2\ln x+1)$.
C: u2-log-diff
S: $f'=0$ (with $x>0$ and $x^{x^2}>0$) when $2\ln x+1=0\Rightarrow\ln x=-\tfrac12\Rightarrow x=e^{-1/2}=\dfrac1{\sqrt e}$.
C: u2-critical
S: Sign check: for $x<\frac1{\sqrt e}$, $2\ln x+1<0$ so $f'<0$; for $x>\frac1{\sqrt e}$, $f'>0$. $f$ decreases then increases: a relative minimum. $\blacksquare$
C: u2-inc-dec
S: (Second derivative check: $f''=f\,(x(2\ln x+1))'+f'\cdot x(2\ln x+1)$; at the critical point the second part is $0$ and $(x(2\ln x+1))'=2\ln x+3=2$, so $f''=2f>0$.)
C: u2-second-test
A: $f'$ changes from negative to positive at $x=\frac1{\sqrt e}$, so $f$ has a relative minimum there.

#Q 2.5 1
Q: Find the linear approximation of $f(x)=\sqrt{x+1}$ at $x=3$, and use it to approximate $\sqrt{3.1}$ and $\sqrt{2.9}$.
T: u2-linearization
S: $f(3)=\sqrt4=2$, $f'(x)=\dfrac{1}{2\sqrt{x+1}}\Rightarrow f'(3)=\dfrac14$.
S: $L(x)=f(3)+f'(3)(x-3)=2+\dfrac{x-3}{4}$.
C: u2-linearization
S: $\sqrt{3.1}=f(2.1)\approx L(2.1)=2-\dfrac{0.9}{4}=1.775$; $\ \sqrt{2.9}=f(1.9)\approx L(1.9)=2-\dfrac{1.1}4=1.725$.
W: $\sqrt{3.1}=\sqrt{x+1}$ when $x=2.1$.
S: The true values are $1.7607$ and $1.7029$: the error is about $0.02$ because $2.1$ and $1.9$ are not very close to $3$. For numbers near $4$ the same $L$ is excellent, e.g. $\sqrt{4.1}=f(3.1)\approx2.025$ (true $2.0248$).
W: Linearization is accurate only close to the point of tangency.
A: $L(x)=2+\frac{x-3}4$; $\sqrt{3.1}\approx1.775$, $\sqrt{2.9}\approx1.725$.

#Q 2.5 2(a)
Q: Find the local linear approximation of $f(x)=\sin x$ at $x=0$.
T: u2-linearization
S: $f(0)=0$ and $f'(x)=\cos x\Rightarrow f'(0)=1$.
S: $L(x)=0+1\cdot(x-0)=x$, so $\sin x\approx x$ for $x$ near $0$ (in radians).
C: u2-linearization
A: $L(x)=x$.

#Q 2.5 3(i)
Q: Find the linear approximation of $f(x)=\sqrt{x^2+16}$ at $x=3$.
T: u2-linearization, u2-chain-rule
S: $f(3)=\sqrt{25}=5$; $f'(x)=\dfrac{x}{\sqrt{x^2+16}}\Rightarrow f'(3)=\dfrac35$.
C: u2-chain-rule
S: $L(x)=5+\dfrac35(x-3)=\dfrac{3x+16}{5}$.
C: u2-linearization
A: $L(x)=5+\frac35(x-3)=\frac{3x+16}5$.

#Q 2.5 3(iii)
Q: Find the linear approximation of $f(x)=\cos x$ at $x=0$.
ref: printed as the second (ii)
T: u2-linearization
S: $f(0)=1$ and $f'(x)=-\sin x\Rightarrow f'(0)=0$.
S: $L(x)=1+0\cdot x=1$: near $0$, $\cos x\approx1$ (the tangent at $x=0$ is horizontal).
C: u2-linearization
A: $L(x)=1$.

#Q 2.5 4(ii)
Q: Use a local linear approximation to estimate $\sin29^\circ$.
ref: printed as Q3(ii)
T: u2-linearization, f-radians
S: Take $f(x)=\sin x$ at $a=30^\circ=\frac\pi6$, where $\sin\frac\pi6=\frac12$ and $\cos\frac\pi6=\frac{\sqrt3}2$.
S: The change is $-1^\circ=-\dfrac{\pi}{180}\approx-0.017453$ rad.
W: Calculus formulas need radians.
C: f-radians
S: $\sin29^\circ\approx\dfrac12+\dfrac{\sqrt3}{2}\left(-\dfrac{\pi}{180}\right)=0.5-0.015115=0.4849$.
C: u2-linearization
A: $\sin29^\circ\approx0.4849$ (calculator: $0.4848$).

#Q 2.6 1(i)
Q: Find $dy$ for $y=x^3-3\sqrt x$.
T: u2-differentials
S: $dy=f'(x)\,dx=\left(3x^2-\dfrac{3}{2\sqrt x}\right)dx$.
C: u2-differentials
A: $dy=\left(3x^2-\dfrac{3}{2\sqrt x}\right)dx$.

#Q 2.6 1(ii)
Q: Find $dy$ for $y=\cos x^2$.
T: u2-differentials, u2-chain-rule
S: $\dfrac{dy}{dx}=-\sin(x^2)\cdot2x$, so $dy=-2x\sin(x^2)\,dx$.
C: u2-chain-rule
A: $dy=-2x\sin(x^2)\,dx$.

#Q 2.6 2(i)
Q: Use $dy$ to approximate $\Delta y$ for $y=x^3-x$ as $x$ changes from $3$ to $3.02$.
T: u2-differentials
S: $dx=0.02$ and $\dfrac{dy}{dx}=3x^2-1=26$ at $x=3$.
S: $dy=26\times0.02=0.52$.
C: u2-differentials
S: Exact change: $(3.02^3-3.02)-(27-3)=0.5236$, very close to $dy$.
A: $\Delta y\approx dy=0.52$.

#Q 2.6 2(iii)
Q: Use $dy$ to approximate $\Delta y$ for $y=\dfrac1x$ at $x=0.5$ with $dx=-0.1$.
T: u2-differentials
S: $dy=-\dfrac{1}{x^2}\,dx=-\dfrac{1}{0.25}(-0.1)=0.4$.
C: u2-differentials
S: Exact: $\dfrac1{0.4}-\dfrac1{0.5}=2.5-2=0.5$. (Here $dx$ is fairly large compared with $x$, so the estimate is rougher.)
A: $\Delta y\approx0.4$.

#Q 2.6 3(ii)
Q: Use differentials to approximate $\sqrt[5]{33}$.
T: u2-differentials, f-indices
S: Take $f(x)=x^{1/5}$ at $x=32$ (because $\sqrt[5]{32}=2$) with $dx=1$.
S: $f'(x)=\tfrac15x^{-4/5}$, so $f'(32)=\dfrac15\cdot\dfrac{1}{32^{4/5}}=\dfrac{1}{5\cdot16}=\dfrac1{80}$.
C: f-indices
S: $\sqrt[5]{33}\approx2+\dfrac{1}{80}=2.0125$.
C: u2-differentials
A: $\sqrt[5]{33}\approx2.0125$ (calculator: $2.0123$).

#Q 2.6 4
Q: The side of a cube is measured as 30 cm with a maximum error of 0.14 cm. Estimate the maximum error in the calculated volume.
T: u2-errors, u2-differentials
S: $V=x^3$, so $dV=3x^2\,dx$.
C: u2-differentials
S: $dV=3(30)^2(0.14)=3\times900\times0.14=378\ \text{cm}^3$.
S: Relative error: $\dfrac{dV}{V}=3\dfrac{dx}{x}=3\times\dfrac{0.14}{30}=0.014$, i.e. $1.4\%$.
C: u2-errors
A: Maximum error in volume $\approx378\ \text{cm}^3$ (about $1.4\%$ of $27000\ \text{cm}^3$).

#Q 2.7 2
Q: An open box is made from a $40\text{ cm}\times25\text{ cm}$ sheet by cutting equal squares from the corners and folding up the sides. Find the size of the square that gives the maximum volume.
T: u2-optimization, u2-second-test
S: Let the square side be $x$. The box is $(40-2x)\times(25-2x)\times x$, with $0<x<12.5$.
C: u2-optimization
S: $V=x(40-2x)(25-2x)=4x^3-130x^2+1000x$.
S: $V'=12x^2-260x+1000=0\Rightarrow3x^2-65x+250=0\Rightarrow x=\dfrac{65\pm35}{6}=5$ or $\dfrac{50}3$.
C: f-quadratic-formula
S: $x=\frac{50}3>12.5$ is impossible. $V''=24x-260=-140<0$ at $x=5$: maximum.
C: u2-second-test
S: Maximum volume $V=5\times30\times15=2250\ \text{cm}^3$.
A: Cut squares of side $5$ cm; maximum volume $2250\ \text{cm}^3$.

#Q 2.7 3
Q: A closed cylindrical tank is to hold $54\pi$ litres. Find its dimensions so that the material used (surface area) is a minimum.
T: u2-optimization, u2-second-test
S: Volume: $\pi r^2h=54\pi\Rightarrow h=\dfrac{54}{r^2}$.
C: u2-optimization
S: Surface area: $S=2\pi r^2+2\pi rh=2\pi r^2+\dfrac{108\pi}{r}$.
S: $S'=4\pi r-\dfrac{108\pi}{r^2}=0\Rightarrow r^3=27\Rightarrow r=3$; then $h=\dfrac{54}{9}=6$.
S: $S''=4\pi+\dfrac{216\pi}{r^3}>0$: a minimum.
C: u2-second-test
S: Since $1$ litre $=1\ \text{dm}^3$, the radius is $3$ dm and the height $6$ dm (height = diameter).
A: Radius $3$ dm, height $6$ dm.

#Q 2.7 6
Q: The perimeter of a triangle is 16 cm and one side is 6 cm. Find the other two sides when the area is maximum.
T: u2-optimization, u2-second-test
S: Let the other sides be $x$ and $10-x$. Semi-perimeter $s=8$.
C: u2-optimization
S: Heron: $A^2=s(s-6)(s-x)(s-10+x)=8\cdot2\,(8-x)(x-2)=16(8-x)(x-2)$.
W: Maximising $A$ is the same as maximising $A^2$, which avoids square roots.
S: Let $g(x)=(8-x)(x-2)=-x^2+10x-16$: $g'=-2x+10=0\Rightarrow x=5$, $g''=-2<0$ (maximum).
C: u2-second-test
S: Sides $5$ and $5$ cm; $A^2=16\times3\times3=144\Rightarrow A=12\ \text{cm}^2$.
A: The other sides are $5$ cm and $5$ cm (maximum area $12\ \text{cm}^2$).

#Q 2.7 8
Q: Find two positive integers whose sum is 12 such that the product of one with the square of the other is maximum.
T: u2-optimization, u2-second-test
S: Let the numbers be $x$ and $y$ with $x+y=12$, and maximise $P=xy^2$. Substitute $x=12-y$: $\ P=(12-y)y^2=12y^2-y^3$.
C: u2-optimization
S: $P'=24y-3y^2=3y(8-y)=0\Rightarrow y=8$ (or $0$, not positive).
S: $P''=24-6y=-24<0$ at $y=8$: maximum. Then $x=4$.
C: u2-second-test
S: Maximum product $4\times8^2=256$.
A: The numbers are $4$ and $8$ (product $4\cdot8^2=256$).
`);

M12.addMCQs(2, String.raw`
#M
c: u2-trig-derivs
Q: $\dfrac{d}{dx}(\sec x)=$
O*: $\sec x\tan x$
O: $\sec^2x$
O: $-\sec x\tan x$
O: $\tan^2x$
E: $\sec x=\frac1{\cos x}$; the quotient rule gives $\frac{\sin x}{\cos^2x}=\sec x\tan x$.

#M
c: u2-trig-derivs
Q: $\dfrac{d}{dx}(\cot x)=$
O: $\csc^2x$
O*: $-\csc^2x$
O: $-\sec^2x$
O: $\tan x$
E: Derivatives of the co-functions carry a minus sign.

#M
c: u2-chain-rule
Q: $\dfrac{d}{dx}\sin(x^2)=$
O: $\cos(x^2)$
O*: $2x\cos(x^2)$
O: $2\sin x\cos x$
O: $\cos2x$
E: Outer $\sin\to\cos$, times the derivative of the inside $x^2$.

#M
c: u2-parametric
Q: If $x=t^2$ and $y=t^3$, then $\dfrac{dy}{dx}=$
O: $\dfrac{2}{3t}$
O*: $\dfrac{3t}{2}$
O: $6t^5$
O: $\dfrac{3t^2}{2}$
E: $\frac{dy/dt}{dx/dt}=\frac{3t^2}{2t}$.

#M
c: u2-implicit
Q: For $x^2+y^2=r^2$, $\dfrac{dy}{dx}=$
O*: $-\dfrac xy$
O: $\dfrac xy$
O: $-\dfrac yx$
O: $2x+2y$
E: $2x+2yy'=0$.

#M
c: u2-inv-trig-derivs
Q: $\dfrac{d}{dx}\tan^{-1}x=$
O: $\sec^2x$
O*: $\dfrac{1}{1+x^2}$
O: $\dfrac{1}{\sqrt{1-x^2}}$
O: $-\dfrac{1}{1+x^2}$
E: Standard result; $\cot^{-1}x$ has the minus sign.

#M
c: u2-inv-trig-derivs
Q: $\dfrac{d}{dx}\sin^{-1}x=$
O*: $\dfrac{1}{\sqrt{1-x^2}}$
O: $\dfrac{-1}{\sqrt{1-x^2}}$
O: $\cos^{-1}x$
O: $\dfrac{1}{1+x^2}$
E: From $x=\sin y$: $y'=\frac1{\cos y}=\frac1{\sqrt{1-x^2}}$.

#M
c: u2-exp-derivs
Q: $\dfrac{d}{dx}a^x=$
O: $xa^{x-1}$
O: $a^x$
O*: $a^x\ln a$
O: $\dfrac{a^x}{\ln a}$
E: Only base $e$ gives no extra factor.

#M
c: u2-log-derivs
Q: $\dfrac{d}{dx}\log_ax=$
O: $\dfrac1x$
O*: $\dfrac{1}{x\ln a}$
O: $\dfrac{\ln a}{x}$
O: $a^x$
E: $\log_ax=\frac{\ln x}{\ln a}$.

#M
c: u2-tangent-normal
Q: If the slope of the tangent at a point is $m\ne0$, the slope of the normal is
O: $m$
O: $-m$
O*: $-\dfrac1m$
O: $\dfrac1m$
E: The normal is perpendicular to the tangent: $m\cdot m_n=-1$.

#M
c: u2-tangent-normal
Q: A curve has a vertical tangent where
O: $\frac{dy}{dx}=0$
O*: the denominator of $\frac{dy}{dx}$ is zero
O: $y=0$
O: $x=0$
E: Infinite slope means a vertical line.

#M
c: u2-second-test
Q: If $f'(c)=0$ and $f''(c)<0$, then $f$ has at $x=c$ a
O*: local maximum
O: local minimum
O: point of inflection
O: vertical tangent
E: The graph bends downward there, like a cap.

#M
c: u2-inc-dec
Q: If $f'(x)>0$ on an interval, then on that interval $f$ is
O*: increasing
O: decreasing
O: constant
O: zero
E: A positive slope means the graph rises.

#M
c: u2-critical
Q: A critical point of $f$ is a point where
O: $f(x)=0$
O*: $f'(x)=0$ or $f'(x)$ does not exist
O: $f''(x)=0$
O: $f(x)$ is undefined
E: Extreme values can occur only at such points (or at end points).

#M
c: u2-linearization
Q: The linearization of $f$ at $x=a$ is
O: $f(a)+f'(x)(x-a)$
O*: $f(a)+f'(a)(x-a)$
O: $f'(a)(x-a)$
O: $f(x)+f'(a)$
E: It is the tangent line at $x=a$.

#M
c: u2-linearization
Q: Near $x=0$, $\sin x\approx$
O*: $x$
O: $1$
O: $0$
O: $1-x$
E: $L(x)=\sin0+\cos0\cdot x=x$ (radians).

#M
c: u2-differentials
Q: If $y=x^2$, $x=10$ and $dx=0.1$, then $dy=$
O: $0.1$
O*: $2$
O: $20$
O: $0.01$
E: $dy=2x\,dx=2(10)(0.1)=2$.

#M
c: u2-errors
Q: If the side of a cube has a $1\%$ error, the volume has an error of about
O: $1\%$
O: $2\%$
O*: $3\%$
O: $9\%$
E: $\frac{dV}{V}=3\frac{dx}{x}$.

#M
c: u2-optimization
Q: The maximum value of $x(10-x)$ is
O: $10$
O: $20$
O*: $25$
O: $50$
E: Derivative $10-2x=0\Rightarrow x=5$; value $25$.
`);
