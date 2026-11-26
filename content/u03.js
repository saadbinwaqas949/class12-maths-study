/* Unit 3 · Integration */
M12.addConcepts(3, String.raw`
#C u3-antiderivative Antiderivatives and the indefinite integral
pre: u2-basic-rules
R: $F$ is an antiderivative of $f$ if $F'=f$. All antiderivatives differ by a constant: $\int f(x)\,dx=F(x)+c$.
F: $$\int f(x)\,dx=F(x)+c\quad\Longleftrightarrow\quad F'(x)=f(x)$$
B: Integration is differentiation in reverse. Because the derivative of a constant is $0$, $x^2$, $x^2+5$ and $x^2-\pi$ all have derivative $2x$, so we write $\int2x\,dx=x^2+c$.
Parts of the notation: $\int$ is the integral sign, $f(x)$ the **integrand**, $dx$ shows the variable, $c$ the **constant of integration**.
**Always check** an answer by differentiating it: you must get the integrand back.
X: Solving $\frac{dy}{dx}=f(x)$ means finding all antiderivatives; a condition such as $y(0)=3$ then fixes $c$.
E: $\frac{dy}{dx}=100x^4\Rightarrow y=\int100x^4\,dx=20x^5+c$. Check: $(20x^5)'=100x^4$ ✓.
M: Forgetting $+c$ in an indefinite integral.

#C u3-standard-integrals Table of standard integrals
pre: u3-antiderivative, u2-trig-derivs, u2-exp-derivs, u2-inv-trig-derivs
R: Every differentiation formula read backwards gives an integral: $\int x^n\,dx=\frac{x^{n+1}}{n+1}$ $(n\ne-1)$, $\int\frac1x\,dx=\ln|x|$, $\int e^x\,dx=e^x$, $\int\cos x\,dx=\sin x$, …
F: $$\int x^n\,dx=\frac{x^{n+1}}{n+1}\ (n\neq-1),\quad \int\frac{dx}{x}=\ln|x|,\quad \int e^x\,dx=e^x,\quad \int a^x\,dx=\frac{a^x}{\ln a}$$ $$\int\cos x\,dx=\sin x,\ \int\sin x\,dx=-\cos x,\ \int\sec^2x\,dx=\tan x,\ \int\csc^2x\,dx=-\cot x,\ \int\sec x\tan x\,dx=\sec x,\ \int\csc x\cot x\,dx=-\csc x$$ $$\int\frac{dx}{\sqrt{1-x^2}}=\sin^{-1}x,\qquad \int\frac{dx}{1+x^2}=\tan^{-1}x,\qquad \int\frac{dx}{x\sqrt{x^2-1}}=\sec^{-1}|x|$$
B: Before integrating, **rewrite** the integrand as a sum of these standard forms: expand brackets, split fractions, write roots as powers.
$\int\frac{x+2}{\sqrt x}\,dx=\int\left(x^{1/2}+2x^{-1/2}\right)dx=\tfrac23x^{3/2}+4x^{1/2}+c$.
X: Also known: $\int\tan x\,dx=\ln|\sec x|$, $\int\cot x\,dx=\ln|\sin x|$, $\int\sec x\,dx=\ln|\sec x+\tan x|$, $\int\csc x\,dx=\ln|\csc x-\cot x|$. The last two come from multiplying by a clever form of 1, e.g. $\frac{\sec x+\tan x}{\sec x+\tan x}$, which makes the numerator the derivative of the denominator.
E: $\int(3x+3^x+x^3)\,dx=\frac{3x^2}2+\frac{3^x}{\ln3}+\frac{x^4}4+c$.
M: $\int x^{-1}dx$ is $\ln|x|$, not $\frac{x^0}{0}$.

#C u3-integral-rules Rules of integration
pre: u3-standard-integrals, f-logs
R: Integrals split over sums and constants come out; $\int[f]^nf'\,dx=\frac{[f]^{n+1}}{n+1}$; $\int\frac{f'}{f}\,dx=\ln|f|$; $\int f(ax+b)\,dx=\frac1aF(ax+b)$.
F: $$\int[f(x)]^nf'(x)\,dx=\frac{[f(x)]^{n+1}}{n+1}+c,\qquad \int\frac{f'(x)}{f(x)}\,dx=\ln|f(x)|+c,\qquad \int f(ax+b)\,dx=\frac1aF(ax+b)+c$$
B: These three patterns cover a large share of exam integrals:
- **power of a function times its derivative**: $\int(5x^2+7x-3)^7(10x+7)\,dx=\frac{(5x^2+7x-3)^8}{8}+c$;
- **derivative over function**: $\int\frac{2x}{x^2+1}dx=\ln(x^2+1)+c$;
- **linear inside**: $\int\cos(3x+1)\,dx=\tfrac13\sin(3x+1)+c$.
If the derivative is off by a constant factor, adjust it: $\int\frac{x}{x^2+1}dx=\frac12\int\frac{2x}{x^2+1}dx$.
E: $\int\frac{ax+b}{\sqrt{ax^2+2bx+c}}\,dx$: the derivative of $ax^2+2bx+c$ is $2(ax+b)$, so the integral is $\frac12\cdot2\sqrt{ax^2+2bx+c}=\sqrt{ax^2+2bx+c}+C$.
M: You can only adjust a missing **constant** factor, never a missing $x$.

#C u3-trig-integrals Integrals that need trigonometric identities
pre: u3-standard-integrals, f-compound, f-sum-product, f-trig-identities
R: Rewrite before integrating: $\tan^2x=\sec^2x-1$, $\cos^2x=\frac{1+\cos2x}2$, $\sin^2x=\frac{1-\cos2x}2$, products $\to$ sums, $1\pm\cos x\to2\cos^2\frac x2$ or $2\sin^2\frac x2$.
B: Squares and products of trig functions have no direct formula, so turn them into first powers or sums:
- $\int\cot^2x\,dx=\int(\csc^2x-1)dx=-\cot x-x+c$;
- $\int\sin x\cos7x\,dx=\frac12\int(\sin8x-\sin6x)dx$;
- $\int\frac{dx}{1+\cos x}=\int\frac{dx}{2\cos^2\frac x2}=\frac12\int\sec^2\frac x2\,dx=\tan\frac x2+c$;
- $\sec^4x=\sec^2x(1+\tan^2x)$, then use $\int\tan^2x\sec^2x\,dx=\frac{\tan^3x}3$.
X: Factorising also helps: $\dfrac{\cos^3x-\sin^3x}{\cos x-\sin x}=\cos^2x+\cos x\sin x+\sin^2x=1+\tfrac12\sin2x$ (difference of cubes), and $\dfrac{\cos2x}{\sin x+\cos x}=\cos x-\sin x$ (difference of squares).
E: $\int\frac{1-\cos2x}{1+\cos2x}dx=\int\frac{2\sin^2x}{2\cos^2x}dx=\int\tan^2x\,dx=\tan x-x+c$.
M: $\int\sin^2x\,dx\neq\frac{\sin^3x}3$.

#C u3-substitution Integration by substitution
pre: u3-integral-rules, u2-chain-rule
R: Choose $u=g(x)$ so that $g'(x)\,dx$ appears in the integrand; replace everything by $u$ and $du$, integrate, then substitute back.
F: $$\int f\big(g(x)\big)g'(x)\,dx=\int f(u)\,du,\qquad u=g(x),\ du=g'(x)\,dx$$
B: **Steps:**
1. Pick $u$: usually the inside of a power, root, exponential or log, or the denominator.
2. Compute $du=g'(x)\,dx$ and solve for the piece of the integrand you need.
3. Rewrite the whole integral in $u$ (no $x$ may remain).
4. Integrate, then put $u=g(x)$ back.
X: Good choices: $u=\ln x$ when $\frac1x$ is present; $u=e^x$ when $e^x\,dx$ is present; $u=\tan x$ when $\sec^2x\,dx$ is present; $u=\sin x$ when $\cos x\,dx$ is present.
Sometimes multiply top and bottom first to make the derivative appear: $\int\frac{x}{1+x\tan x}dx=\int\frac{x\cos x}{\cos x+x\sin x}dx$, and the numerator is the derivative of the denominator.
E: $\int x(7x^2+8)^9dx$: $u=7x^2+8$, $du=14x\,dx$, so $\frac1{14}\int u^9du=\frac{u^{10}}{140}+c=\frac{(7x^2+8)^{10}}{140}+c$.
E: $\int\frac{\sec^2x}{\tan x\ln\tan x}dx$: $u=\ln\tan x$, $du=\frac{\sec^2x}{\tan x}dx$, so $\int\frac{du}u=\ln|\ln\tan x|+c$.
M: Leaving some $x$'s in the integral after substituting.

#C u3-special-forms Standard forms with $a^2\pm x^2$
pre: u3-substitution
R: $\int\frac{dx}{a^2+x^2}=\frac1a\tan^{-1}\frac xa$, $\int\frac{dx}{\sqrt{a^2-x^2}}=\sin^{-1}\frac xa$, $\int\frac{dx}{a^2-x^2}=\frac1{2a}\ln\left|\frac{a+x}{a-x}\right|$, $\int\frac{dx}{x^2-a^2}=\frac1{2a}\ln\left|\frac{x-a}{x+a}\right|$.
F: $$\int\frac{dx}{a^2+x^2}=\frac1a\tan^{-1}\frac xa,\quad \int\frac{dx}{\sqrt{a^2-x^2}}=\sin^{-1}\frac xa,\quad \int\frac{dx}{x\sqrt{x^2-a^2}}=\frac1a\sec^{-1}\frac xa$$ $$\int\frac{dx}{a^2-x^2}=\frac1{2a}\ln\left|\frac{a+x}{a-x}\right|,\quad \int\frac{dx}{x^2-a^2}=\frac1{2a}\ln\left|\frac{x-a}{x+a}\right|,\quad \int\frac{dx}{\sqrt{x^2\pm a^2}}=\ln\left|x+\sqrt{x^2\pm a^2}\right|$$
B: After a substitution such as $u=e^x$ or $u=\sin x$, many integrals turn into one of these forms. Identify $a$ (for example $9-u^2$ gives $a=3$) and apply the formula.
X: The log forms come from partial fractions: $\frac{1}{a^2-x^2}=\frac1{2a}\left(\frac1{a-x}+\frac1{a+x}\right)$.
E: $\int\frac{e^x}{9-e^{2x}}dx$: $u=e^x$ gives $\int\frac{du}{9-u^2}=\frac16\ln\left|\frac{3+u}{3-u}\right|+c$.
M: The $\frac1a$ in front of $\tan^{-1}$ is easy to forget.

#C u3-trig-substitution Trigonometric substitution
pre: u3-substitution, f-trig-identities
R: For $\sqrt{a^2-x^2}$ put $x=a\sin\theta$; for $\sqrt{a^2+x^2}$ put $x=a\tan\theta$; for $\sqrt{x^2-a^2}$ put $x=a\sec\theta$.
B: The identity removes the square root: $a^2-a^2\sin^2\theta=a^2\cos^2\theta$, $a^2+a^2\tan^2\theta=a^2\sec^2\theta$, $a^2\sec^2\theta-a^2=a^2\tan^2\theta$.
After integrating in $\theta$, draw a right triangle from the substitution to return to $x$.
E: $\int\frac{dx}{(1+x^2)^{3/2}}$: $x=\tan\theta$, $dx=\sec^2\theta\,d\theta$, $(1+x^2)^{3/2}=\sec^3\theta$. The integral is $\int\cos\theta\,d\theta=\sin\theta=\frac{x}{\sqrt{1+x^2}}+c$.
M: Forgetting to change $dx$ into $d\theta$.

#C u3-by-parts Integration by parts
pre: u3-integral-rules, u2-basic-rules
R: $\int u\,dv=uv-\int v\,du$: differentiate one factor ($u$), integrate the other ($dv$). Choose $u$ by **LIATE**: Log, Inverse trig, Algebraic, Trig, Exponential.
F: $$\int u\,\frac{dv}{dx}\,dx=uv-\int v\,\frac{du}{dx}\,dx$$
B: It comes from the product rule $(uv)'=u'v+uv'$ integrated and rearranged.
Choose as $u$ the factor that becomes **simpler** when differentiated (a polynomial, $\ln x$, $\tan^{-1}x$), and as $dv$ something you can integrate ($e^{ax}$, $\sin$, $\cos$, $\sec^2$).
**Integrals of single functions** such as $\int\ln x\,dx$ or $\int\sin^{-1}x\,dx$: take $dv=dx$ (i.e. multiply by 1).
X: A polynomial of degree $n$ needs $n$ rounds of parts: $\int x^2e^{ax}dx$ needs two. The **tabular method** keeps it tidy: differentiate $x^2\to2x\to2\to0$, integrate $e^{ax}\to\frac{e^{ax}}a\to\frac{e^{ax}}{a^2}\to\frac{e^{ax}}{a^3}$, and combine with alternating signs $+,-,+$.
E: $\int x\cos2x\,dx$: $u=x$, $dv=\cos2x\,dx$, $v=\frac{\sin2x}2$. Result $\frac{x\sin2x}2-\int\frac{\sin2x}2dx=\frac{x\sin2x}2+\frac{\cos2x}4+c$.
E: $\int\ln x\,dx=x\ln x-\int x\cdot\frac1x\,dx=x\ln x-x+c$.
M: Choosing $u=e^x$ and $dv=x\,dx$ makes the integral harder, not easier.

#C u3-ex-pattern The pattern $\int e^{x}\,[f(x)+f'(x)]\,dx=e^xf(x)$
pre: u3-by-parts
R: If the integrand is $e^x$ times (a function + its derivative), the answer is $e^x$ times that function: $\int e^x[f+f']\,dx=e^xf+c$. More generally $\int e^{kx}[kf+f']\,dx=e^{kx}f+c$.
F: $$\int e^x\big[f(x)+f'(x)\big]dx=e^xf(x)+c,\qquad \int e^{kx}\big[kf(x)+f'(x)\big]dx=e^{kx}f(x)+c$$
B: Why: by the product rule, $\frac{d}{dx}\left[e^xf(x)\right]=e^xf(x)+e^xf'(x)$.
**How to use it:** split the bracket into a function and its derivative.
$\left(\frac{1-x}{1+x^2}\right)^2=\frac{1+x^2-2x}{(1+x^2)^2}=\frac{1}{1+x^2}+\frac{-2x}{(1+x^2)^2}$, and the second piece is the derivative of the first. So $\int e^x\left(\frac{1-x}{1+x^2}\right)^2dx=\frac{e^x}{1+x^2}+c$.
E: $\int e^{5x}(x^5+x^4+1)\,dx$: try $f=\frac{x^5+1}{5}$; then $5f+f'=x^5+1+x^4$ ✓, so the answer is $\frac{e^{5x}(x^5+1)}{5}+c$.
M: Applying the pattern when the two parts are not a function and its derivative.

#C u3-cyclic-parts Repeated (cyclic) integration by parts
pre: u3-by-parts
R: Sometimes integrating by parts twice brings back the original integral $I$; then solve the equation for $I$.
B: Typical cases: $e^{ax}$ times $\sin bx$ or $\cos bx$, and odd powers of $\sec$ or $\csc$.
1. Call the integral $I$.
2. Integrate by parts (twice if needed) until $I$ reappears on the right.
3. Move it to the left and divide.
X: Example: $I=\int e^x\cos x\,dx=e^x\sin x-\int e^x\sin x\,dx=e^x\sin x-\left[-e^x\cos x+\int e^x\cos x\,dx\right]=e^x\sin x+e^x\cos x-I$. So $2I=e^x(\sin x+\cos x)$ and $I=\frac{e^x}{2}(\sin x+\cos x)+c$.
Keep the **same type** of choice in both rounds (here $u$ is always the trig part); switching would undo the first step.
E: $\int\csc^3x\,dx$: write $\csc^3x=\csc x\cdot\csc^2x$, take $u=\csc x$, $dv=\csc^2x\,dx$; $\cot^2x=\csc^2x-1$ brings back $I$.
M: Forgetting that the constant of integration is added only at the end.

#C u3-sqrt-forms The integrals $\int\sqrt{x^2\pm a^2}\,dx$ and $\int\sqrt{a^2-x^2}\,dx$
pre: u3-by-parts, u3-special-forms, f-complete-square
R: $\int\sqrt{x^2+a^2}\,dx=\frac x2\sqrt{x^2+a^2}+\frac{a^2}2\ln\left|x+\sqrt{x^2+a^2}\right|+c$; similar formulas hold for $\sqrt{x^2-a^2}$ and $\sqrt{a^2-x^2}$.
F: $$\int\sqrt{x^2\pm a^2}\,dx=\frac x2\sqrt{x^2\pm a^2}\pm\frac{a^2}2\ln\left|x+\sqrt{x^2\pm a^2}\right|+c,\qquad \int\sqrt{a^2-x^2}\,dx=\frac x2\sqrt{a^2-x^2}+\frac{a^2}2\sin^{-1}\frac xa+c$$
B: They are proved by parts with $dv=dx$ (the function times 1), which brings back the original integral. For a quadratic under the root, complete the square first: $\sqrt{x^2-4x+13}=\sqrt{(x-2)^2+3^2}$, then use the formula with $x-2$ in place of $x$ and $a=3$.

#C u3-partial-fractions Partial fractions
pre: f-factor, f-linear-eq, u3-integral-rules
R: Split a proper rational function into simple fractions, one for each factor of the denominator, then integrate each piece (they give logs and $\tan^{-1}$ terms).
F: $$\frac{px+q}{(x-a)(x-b)}=\frac A{x-a}+\frac B{x-b},\quad \frac{\cdots}{(x-a)^2}\to\frac A{x-a}+\frac B{(x-a)^2},\quad \frac{\cdots}{(x-a)(x^2+k)}\to\frac A{x-a}+\frac{Bx+C}{x^2+k}$$
B: **The four cases:**
1. Distinct linear factors: one constant over each.
2. Repeated linear factor $(x-a)^n$: $\frac{A_1}{x-a}+\frac{A_2}{(x-a)^2}+\dots+\frac{A_n}{(x-a)^n}$.
3. Irreducible quadratic $x^2+bx+c$: a numerator $Bx+C$.
4. Repeated quadratic: $\frac{B_1x+C_1}{q}+\frac{B_2x+C_2}{q^2}$.
**Finding the constants:** multiply through by the denominator, then put convenient values of $x$ (the roots) or compare coefficients.
X: The "cover-up" shortcut for distinct linear factors: to find $A$ in $\frac{5x+7}{(x+1)(x+2)}$, cover $(x+1)$ and put $x=-1$ in the rest: $A=\frac{-5+7}{-1+2}=2$.
E: $\frac{5x+7}{(x+1)(x+2)}=\frac2{x+1}+\frac3{x+2}$, so $\int=2\ln|x+1|+3\ln|x+2|+c$.
M: Using a constant (not $Bx+C$) over an irreducible quadratic.

#C u3-improper-fraction Improper fractions: divide first
pre: u3-partial-fractions
R: If the degree of the numerator is at least the degree of the denominator, do long division first: quotient + remainder/denominator.
B: $\dfrac{x^3+2x^2-x-1}{x^2-1}=x+2+\dfrac{1}{x^2-1}$: the polynomial part integrates directly and the proper fraction is split into partial fractions.
Also check whether the numerator and denominator share a factor; then the fraction simply cancels.
M: Applying partial fractions to an improper fraction gives wrong constants.

#C u3-definite The definite integral and the fundamental theorem
pre: u3-antiderivative
R: $\displaystyle\int_a^bf(x)\,dx=F(b)-F(a)$, where $F$ is any antiderivative of $f$; no constant is needed.
F: $$\int_a^bf(x)\,dx=\Big[F(x)\Big]_a^b=F(b)-F(a)$$
B: Find an antiderivative, substitute the **upper** limit, substitute the **lower** limit, and subtract. The constant $c$ would cancel, so it is left out.
Geometrically, for $f\ge0$, $\int_a^bf\,dx$ is the area under the curve from $a$ to $b$.
E: $\int_1^2(x^2+x)\,dx=\left[\frac{x^3}3+\frac{x^2}2\right]_1^2=\left(\frac83+2\right)-\left(\frac13+\frac12\right)=\frac{23}6$.
M: Subtracting in the wrong order ($F(a)-F(b)$).

#C u3-definite-sub Substitution in definite integrals
pre: u3-definite, u3-substitution
R: When you substitute $u=g(x)$ in a definite integral, change the limits too: $x=a\to u=g(a)$, $x=b\to u=g(b)$; then you never need to return to $x$.
B: Example: $\int_0^4x\sqrt{4-x}\,dx$ with $u=4-x$: $x=0\to u=4$, $x=4\to u=0$, $dx=-du$ and $x=4-u$. The integral becomes $\int_4^0(4-u)\sqrt u\,(-du)=\int_0^4(4u^{1/2}-u^{3/2})\,du$.
M: Changing the variable but keeping the old limits.

#C u3-def-properties Properties of definite integrals
pre: u3-definite
R: $\int_a^af=0$, $\int_b^af=-\int_a^bf$, $\int_a^bf=\int_a^cf+\int_c^bf$, constants come out, and the variable's name does not matter.
F: $$\int_b^af=-\int_a^bf,\qquad \int_a^bf=\int_a^cf+\int_c^bf,\qquad \int_a^b(\alpha f+\beta g)=\alpha\int_a^bf+\beta\int_a^bg$$
B: These let you rearrange integrals without knowing $f$:
- reversing the limits changes the sign;
- adjacent intervals add: $\int_0^3f+\int_3^{10}f=\int_0^{10}f$;
- linearity: $\int_3^9(2f+5)\,dx=2\int_3^9f\,dx+5\times(9-3)$.
X: A good habit is to write every integral as a difference of values of an antiderivative $F$: $\int_a^bf=F(b)-F(a)$. Then sums of integrals become sums of $F$ values that cancel visibly.
E: If $\int_0^2f=7$ and $\int_0^5f=11$, then $\int_2^5f=11-7=4$.
M: $\int_a^b(2f+5)\,dx$ is not $2\int f+5$; the constant $5$ integrates to $5(b-a)$.

#C u3-king-property The reflection property $\int_a^bf(x)\,dx=\int_a^bf(a+b-x)\,dx$
pre: u3-def-properties, u3-definite-sub
R: Replacing $x$ by $a+b-x$ does not change a definite integral over $[a,b]$; with $a=0$: $\int_0^bf(x)\,dx=\int_0^bf(b-x)\,dx$.
F: $$\int_a^bf(x)\,dx=\int_a^bf(a+b-x)\,dx$$
B: **Proof:** substitute $u=a+b-x$: $x=a\to u=b$, $x=b\to u=a$, $dx=-du$, and flip the limits back.
**Typical use:** call the integral $I$, write the same integral after replacing $x$ by $a+b-x$, then **add** the two forms. The awkward parts often cancel or add up to something simple.
X: If adding gives $2I=\int_a^b1\,dx=b-a$, then $I=\frac{b-a}2$. If replacing $x$ makes the integrand change sign, then $I=-I$, so $I=0$.
E: $I=\int_2^5\frac{x^3}{x^3+(7-x)^3}dx$. Replacing $x$ by $7-x$ gives $\int_2^5\frac{(7-x)^3}{(7-x)^3+x^3}dx$. Adding, $2I=\int_2^51\,dx=3$, so $I=\frac32$.
M: Forgetting to change *every* $x$ in the integrand.

#C u3-even-odd Even and odd functions on $[-a,a]$
pre: u3-def-properties
R: If $f$ is odd ($f(-x)=-f(x)$), $\int_{-a}^af=0$; if $f$ is even ($f(-x)=f(x)$), $\int_{-a}^af=2\int_0^af$.
B: Odd functions are symmetric through the origin, so the area above cancels the area below. Even functions are mirror-symmetric in the $y$-axis.
Examples: $x$, $x^3$, $\sin x$, $x\cos x$ are odd; $x^2$, $\cos x$, $|x|$ are even. A product of an odd and an even function is odd.
E: $\int_{-2}^2(x^3+x)\cos x\,dx=0$ because $(x^3+x)\cos x$ is odd.
M: Using the odd-function rule on an interval that is not symmetric.

#C u3-abs-integral Integrating piecewise and absolute-value functions
pre: u3-definite, f-abs
R: Split the interval at the points where the formula changes (where the inside of $|\,\cdot\,|$ is zero) and integrate each piece with its own formula.
B: $\int_{-3}^4|4-x^2|\,dx$: $4-x^2\ge0$ on $[-2,2]$ and $<0$ outside. So
$$\int_{-3}^{-2}(x^2-4)\,dx+\int_{-2}^{2}(4-x^2)\,dx+\int_{2}^{4}(x^2-4)\,dx.$$
E: $\int_2^4|x-3|\,dx=\int_2^3(3-x)\,dx+\int_3^4(x-3)\,dx=\frac12+\frac12=1$.
M: Integrating $|f|$ as if it were $f$ over the whole interval.

#C u3-ftc1 Differentiating an integral with variable limits
pre: u3-definite, u2-chain-rule
R: $\dfrac{d}{dx}\displaystyle\int_a^xf(t)\,dt=f(x)$; with variable limits, $\dfrac{d}{dx}\int_{g(x)}^{h(x)}f(t)\,dt=f(h(x))h'(x)-f(g(x))g'(x)$.
F: $$\frac{d}{dx}\int_{g(x)}^{h(x)}f(t)\,dt=f\big(h(x)\big)h'(x)-f\big(g(x)\big)g'(x)$$
B: This is the first fundamental theorem: integrating and then differentiating gives the integrand back, evaluated at the upper limit. You never need to evaluate the integral itself.
E: $\frac{d}{dt}\int_\pi^t\frac{\sin y}{1+\sqrt y}dy=\frac{\sin t}{1+\sqrt t}$.

#C u3-area-under Area between a curve and the $x$-axis
pre: u3-definite, f-zero-product
R: Area $=\int_a^b|f(x)|\,dx$: where the curve is below the axis the integral is negative, so split at the roots and add the absolute values.
B: **Steps:**
1. Find where the curve meets the $x$-axis (solve $f(x)=0$).
2. Split $[a,b]$ at those roots.
3. Integrate each piece; take the absolute value of any negative result.
4. Add.
A quick sketch tells you which parts are above and which below.
E: Area between $y=x^2-5x+4$ and the $x$-axis: roots $1$ and $4$; $\int_1^4(x^2-5x+4)\,dx=-\frac92$, so the area is $\frac92$.
M: Integrating straight across a root, so that areas above and below cancel.

#C u3-area-between Area between two curves
pre: u3-area-under
R: Area $=\displaystyle\int_a^b\big(\text{upper}-\text{lower}\big)\,dx$, where $a,b$ are the $x$-coordinates of the intersection points.
B: 1. Solve the two equations together to find the intersection points.
2. Decide which curve is on top between them (test a point).
3. Integrate (top $-$ bottom).
If the curves cross in between, split there.
E: $y=13-x^2$ and $y=2x+5$: they meet where $x^2+2x-8=0$, $x=-4,2$. Area $=\int_{-4}^2(8-2x-x^2)\,dx=36$.
M: Subtracting top from bottom gives a negative area.

#C u3-area-y Area with respect to $y$
pre: u3-area-under
R: When curves are easier written as $x=g(y)$, use horizontal strips: area $=\displaystyle\int_c^d(\text{right}-\text{left})\,dy$.
B: Useful for parabolas like $x=9-y^2$ or $y^2=2x+10$. Find the $y$-coordinates where the curves meet, and integrate the right curve minus the left curve with respect to $y$.
E: Area between $x=9-y^2$ and the $y$-axis: $y$ from $-3$ to $3$, area $=\int_{-3}^3(9-y^2)\,dy=36$.

#C u3-signed-area Signed area and total area
pre: u3-area-under
R: The definite integral gives **signed** area (above the axis counts $+$, below counts $-$); total area counts every part as positive.
B: Signed area $=\int_a^bf\,dx$. Total area $=\int_a^b|f|\,dx$. They are equal exactly when $f\ge0$ on $[a,b]$.
In motion problems, signed area under $v(t)$ is **displacement** and total area is **distance**.

#C u3-motion Velocity, displacement and distance by integration
pre: u3-definite, u3-signed-area
R: $v=\int a\,dt$ and $s=\int v\,dt$ (use initial values to find the constants); displacement $=\int_{t_1}^{t_2}v\,dt$, distance $=\int_{t_1}^{t_2}|v|\,dt$.
F: $$v(t)=\int a(t)\,dt,\quad s(t)=\int v(t)\,dt,\quad \text{displacement}=\int_{t_1}^{t_2}v\,dt,\quad \text{distance}=\int_{t_1}^{t_2}|v|\,dt$$
B: For distance, find when $v=0$ (the particle turns around), split the time interval there, and add the absolute values.
E: $a=6t-18$, $v(0)=15$: $v=3t^2-18t+15=3(t-1)(t-5)$, which changes sign at $t=1$ and $t=5$.
M: Using displacement when the question asks for distance.

#C u3-growth-model Growth proportional to size
pre: u3-antiderivative, f-e-number, f-logs
R: If $\frac{dN}{dt}=kN$, then $N=N_0e^{kt}$; two data points fix $N_0$ and $k$.
B: "The rate of growth is proportional to the number present" means $\frac{dN}{dt}=kN$. Separating, $\int\frac{dN}N=\int k\,dt$, so $\ln N=kt+c$ and $N=N_0e^{kt}$.
Often $e^k$ turns out to be a nice number, giving $N=N_0\,b^t$.
E: $N(0)=200$, $N(2)=1800$: $e^{2k}=9\Rightarrow e^k=3$, so $N=200\cdot3^t$.

#C u3-average-value Average value of a function
pre: u3-definite
R: The average value of $f$ on $[a,b]$ is $f_{\text{av}}=\dfrac{1}{b-a}\displaystyle\int_a^bf(x)\,dx$.
B: It is the height of the rectangle on $[a,b]$ with the same area as the region under the curve.
E: $f(x)=x^2+2$ on $[-1,2]$: $\frac13\int_{-1}^2(x^2+2)\,dx=\frac13(3+6)=3$.

#C u3-dosage Repeated drug doses
pre: f-e-number
R: Each dose contributes its own decaying term; the total concentration is the sum of the contributions of all doses already given.
B: If one dose gives $C(t)=C_0e^{-kt}$, a dose given at time $T$ contributes $C_0e^{-k(t-T)}$ for $t\ge T$ (and nothing before $T$). Add these for all doses given so far.
Just before a new dose the total is the sum of the older doses; just after, add $C_0$.
E: Doses at $t=0$ and $t=8$ with $C=12e^{-0.2t}$: at $t=10$, total $=12e^{-2}+12e^{-0.4}\approx9.67$.
`);

M12.addQuestions(3, String.raw`
#Q 3.1 1(i)
Q: Find all antiderivatives: $\dfrac{dy}{dx}=100x^4$.
T: u3-antiderivative, u3-standard-integrals
S: $y=\displaystyle\int100x^4\,dx=100\cdot\frac{x^5}{5}+c$.
C: u3-standard-integrals
S: $y=20x^5+c$. Check: $\frac{d}{dx}(20x^5)=100x^4$ ✓.
A: $y=20x^5+c$.

#Q 3.1 1(ii)
Q: Find all antiderivatives: $\dfrac{dy}{dt}=2+24t^3-10t^4$.
T: u3-antiderivative, u3-standard-integrals
S: Integrate term by term: $y=2t+24\cdot\dfrac{t^4}4-10\cdot\dfrac{t^5}5+c$.
C: u3-standard-integrals
A: $y=2t+6t^4-2t^5+c$.

#Q 3.1 2(i)
Q: Evaluate $\displaystyle\int(1+2t)\,dt$ and check by differentiation.
T: u3-standard-integrals, u3-antiderivative
S: $\int(1+2t)\,dt=t+t^2+c$.
S: Check: $\frac{d}{dt}(t+t^2)=1+2t$ ✓.
A: $t+t^2+c$.

#Q 3.1 2(ii)
Q: Evaluate $\displaystyle\int(3u^2+4u)\,du$ and check by differentiation.
T: u3-standard-integrals
S: $\int(3u^2+4u)\,du=u^3+2u^2+c$.
S: Check: $\frac{d}{du}(u^3+2u^2)=3u^2+4u$ ✓.
A: $u^3+2u^2+c$.

#Q 3.1 2(iii)
Q: Evaluate $\displaystyle\int100x^8\,dx$ and check by differentiation.
T: u3-standard-integrals
S: $\int100x^8\,dx=100\cdot\dfrac{x^9}{9}+c=\dfrac{100}{9}x^9+c$.
S: Check: $\frac{d}{dx}\left(\frac{100}9x^9\right)=100x^8$ ✓.
A: $\frac{100}{9}x^9+c$.

#Q 3.1 2(iv)
Q: Evaluate $\displaystyle\int(2x^{-2}+3x^{-3})\,dx$ and check by differentiation.
T: u3-standard-integrals, f-indices
S: Power rule on each term: $2\cdot\dfrac{x^{-1}}{-1}+3\cdot\dfrac{x^{-2}}{-2}+c$.
C: u3-standard-integrals
S: $=-\dfrac2x-\dfrac{3}{2x^2}+c$. Check: derivative is $2x^{-2}+3x^{-3}$ ✓.
A: $-\dfrac2x-\dfrac3{2x^2}+c$.

#Q 3.1 3(i)
Q: Evaluate $\displaystyle\int(5x^3+10x+20)\,dx$.
T: u3-standard-integrals
S: $\dfrac{5x^4}4+\dfrac{10x^2}2+20x+c$.
A: $\frac54x^4+5x^2+20x+c$.

#Q 3.1 3(ii)
Q: Evaluate $\displaystyle\int x^2\left(x+\frac1x\right)dx$.
T: u3-standard-integrals, f-expand
S: Expand first: $x^2\left(x+\frac1x\right)=x^3+x$.
W: There is no product rule for integrals, so multiply out before integrating.
C: f-expand
S: $\int(x^3+x)\,dx=\dfrac{x^4}4+\dfrac{x^2}2+c$.
A: $\frac{x^4}{4}+\frac{x^2}{2}+c$.

#Q 3.1 3(iii)
Q: Evaluate $\displaystyle\int\left(\sqrt y+\frac1y\right)^2dy$, $y>0$.
T: u3-standard-integrals, f-expand, f-indices
S: Expand: $\left(y^{1/2}+y^{-1}\right)^2=y+2y^{-1/2}+y^{-2}$.
W: $2\cdot y^{1/2}\cdot y^{-1}=2y^{-1/2}$.
C: f-expand, f-indices
S: Integrate: $\dfrac{y^2}2+2\cdot\dfrac{y^{1/2}}{1/2}+\dfrac{y^{-1}}{-1}+c=\dfrac{y^2}2+4\sqrt y-\dfrac1y+c$.
C: u3-standard-integrals
A: $\frac{y^2}{2}+4\sqrt y-\frac1y+c$.

#Q 3.1 3(iv)
Q: Evaluate $\displaystyle\int\frac{\sqrt x\,(x+2)}{x}\,dx$, $x>0$.
T: u3-standard-integrals, f-indices
S: Simplify: $\dfrac{x^{1/2}(x+2)}{x}=x^{-1/2}(x+2)=x^{1/2}+2x^{-1/2}$.
C: f-indices
S: Integrate: $\dfrac23x^{3/2}+4x^{1/2}+c$.
A: $\frac23x^{3/2}+4\sqrt x+c$.

#Q 3.1 3(v)
Q: Evaluate $\displaystyle\int\frac{x+1}{\sqrt{x+2}}\,dx$.
T: u3-integral-rules, f-indices
S: Make the numerator match the root: $x+1=(x+2)-1$, so the integrand is $(x+2)^{1/2}-(x+2)^{-1/2}$.
W: Writing the numerator in terms of $x+2$ splits the fraction into two simple powers of $(x+2)$.
!:
S: Integrate (linear inside, coefficient 1): $\dfrac23(x+2)^{3/2}-2(x+2)^{1/2}+c$.
C: u3-integral-rules
S: Factor: $\dfrac23\sqrt{x+2}\,\big[(x+2)-3\big]=\dfrac23\sqrt{x+2}\,(x-1)+c$.
A: $\frac23\sqrt{x+2}\,(x-1)+c$.

#Q 3.1 3(vi)
Q: Evaluate $\displaystyle\int\frac{ax+b}{\sqrt{ax^2+2bx+c}}\,dx$.
T: u3-integral-rules
S: The derivative of $ax^2+2bx+c$ is $2(ax+b)$, so the integrand is $\dfrac12\cdot\dfrac{f'(x)}{\sqrt{f(x)}}$ with $f=ax^2+2bx+c$.
C: u3-integral-rules
!:
S: $\displaystyle\int f^{-1/2}f'\,dx=\frac{f^{1/2}}{1/2}=2\sqrt f$, so the integral is $\dfrac12\cdot2\sqrt{ax^2+2bx+c}+C$.
A: $\sqrt{ax^2+2bx+c}+C$.

#Q 3.1 3(vii)
Q: Evaluate $\displaystyle\int\frac{1}{\sqrt{x+1}+\sqrt x}\,dx$, $x>0$.
T: f-surds, u3-standard-integrals
S: Rationalise: multiply top and bottom by $\sqrt{x+1}-\sqrt x$. The denominator becomes $(x+1)-x=1$.
C: f-surds
!:
S: So the integral is $\int\left[(x+1)^{1/2}-x^{1/2}\right]dx=\dfrac23(x+1)^{3/2}-\dfrac23x^{3/2}+c$.
C: u3-integral-rules
A: $\frac23\left[(x+1)^{3/2}-x^{3/2}\right]+c$.

#Q 3.1 3(xi)
Q: Evaluate $\displaystyle\int(3x+3^x+x^3)\,dx$.
T: u3-standard-integrals
S: $\int3x\,dx=\dfrac{3x^2}2$, $\ \int3^x\,dx=\dfrac{3^x}{\ln3}$, $\ \int x^3\,dx=\dfrac{x^4}4$.
W: $3^x$ is an exponential (variable in the power), not a power of $x$.
C: u3-standard-integrals
A: $\frac{3x^2}{2}+\frac{3^x}{\ln3}+\frac{x^4}{4}+c$.

#Q 3.1 3(xiii)
Q: Evaluate $\displaystyle\int\frac{1}{1+\sqrt{2+x}}\,dx$.
T: u3-substitution, f-fractions
S: Let $u=\sqrt{2+x}$, so $x=u^2-2$ and $dx=2u\,du$.
C: u3-substitution
S: The integral becomes $\displaystyle\int\frac{2u}{1+u}\,du=2\int\left(1-\frac{1}{1+u}\right)du$.
W: $\frac{u}{1+u}=\frac{(1+u)-1}{1+u}=1-\frac1{1+u}$.
C: f-fractions
!:
S: $=2u-2\ln|1+u|+c=2\sqrt{2+x}-2\ln\left(1+\sqrt{2+x}\right)+c$.
A: $2\sqrt{2+x}-2\ln\left(1+\sqrt{2+x}\right)+c$.

#Q 3.1 4(i)
Q: Evaluate $\displaystyle\int\csc x\,dx$.
T: u3-standard-integrals, u3-integral-rules
S: Multiply top and bottom by $\csc x-\cot x$: $\displaystyle\int\frac{\csc^2x-\csc x\cot x}{\csc x-\cot x}\,dx$.
W: This clever factor makes the numerator the derivative of the denominator.
!:
S: $\frac{d}{dx}(\csc x-\cot x)=-\csc x\cot x+\csc^2x$, exactly the numerator. So the integral is $\ln|\csc x-\cot x|+c$.
C: u3-integral-rules
A: $\ln|\csc x-\cot x|+c$.

#Q 3.1 4(ii)
Q: Evaluate $\displaystyle\int\cot^2x\,dx$.
T: u3-trig-integrals
S: Use $\cot^2x=\csc^2x-1$.
C: f-trig-identities
S: $\int(\csc^2x-1)\,dx=-\cot x-x+c$.
A: $-\cot x-x+c$.

#Q 3.1 4(iii)
Q: Evaluate $\displaystyle\int\sec^4x\,dx$.
T: u3-trig-integrals, u3-integral-rules
S: $\sec^4x=\sec^2x\cdot\sec^2x=\sec^2x\,(1+\tan^2x)=\sec^2x+\tan^2x\sec^2x$.
C: f-trig-identities
S: $\int\sec^2x\,dx=\tan x$, and $\int\tan^2x\sec^2x\,dx=\dfrac{\tan^3x}3$ (a power of $\tan x$ times its derivative).
C: u3-integral-rules
A: $\tan x+\frac{\tan^3x}{3}+c$.

#Q 3.1 4(iv)
Q: Evaluate $\displaystyle\int\sin x\cos7x\,dx$.
T: u3-trig-integrals, f-sum-product
S: $2\sin A\cos B=\sin(A+B)+\sin(A-B)$: $\ \sin x\cos7x=\tfrac12\left[\sin8x+\sin(-6x)\right]=\tfrac12\left[\sin8x-\sin6x\right]$.
C: f-sum-product
S: Integrate: $\tfrac12\left[-\dfrac{\cos8x}8+\dfrac{\cos6x}6\right]+c$.
C: u3-integral-rules
A: $\frac{\cos6x}{12}-\frac{\cos8x}{16}+c$.

#Q 3.1 4(v)
Q: Evaluate $\displaystyle\int\frac{\cos^3x-\sin^3x}{\cos x-\sin x}\,dx$.
T: u3-trig-integrals, f-factor
S: Difference of cubes: $\cos^3x-\sin^3x=(\cos x-\sin x)(\cos^2x+\cos x\sin x+\sin^2x)$.
C: f-factor
S: Cancel: the integrand is $1+\sin x\cos x=1+\tfrac12\sin2x$.
C: f-compound
S: $\int\left(1+\tfrac12\sin2x\right)dx=x-\tfrac14\cos2x+c$.
A: $x-\frac14\cos2x+c$ (equivalently $x+\frac12\sin^2x+c$).

#Q 3.1 4(vi)
Q: Evaluate $\displaystyle\int\frac{\cos2x}{\sin x+\cos x}\,dx$.
T: u3-trig-integrals, f-compound
S: $\cos2x=\cos^2x-\sin^2x=(\cos x-\sin x)(\cos x+\sin x)$.
C: f-compound
S: Cancel $(\cos x+\sin x)$: $\int(\cos x-\sin x)\,dx=\sin x+\cos x+c$.
A: $\sin x+\cos x+c$.

#Q 3.1 4(vii)
Q: Evaluate $\displaystyle\int\sqrt{1-\cos2x}\,dx$.
T: u3-trig-integrals, f-compound
S: $1-\cos2x=2\sin^2x$, so $\sqrt{1-\cos2x}=\sqrt2\,|\sin x|$.
C: f-compound
S: Where $\sin x\ge0$: $\int\sqrt2\sin x\,dx=-\sqrt2\cos x+c$.
A: $-\sqrt2\cos x+c$ (on intervals where $\sin x\ge0$).

#Q 3.1 4(viii)
Q: Evaluate $\displaystyle\int\frac{1}{1+\cos x}\,dx$.
T: u3-trig-integrals, f-compound
S: $1+\cos x=2\cos^2\dfrac x2$, so the integrand is $\tfrac12\sec^2\dfrac x2$.
C: f-compound
S: $\int\tfrac12\sec^2\dfrac x2\,dx=\tfrac12\cdot\dfrac{\tan\frac x2}{1/2}=\tan\dfrac x2+c$.
C: u3-integral-rules
A: $\tan\frac{x}{2}+c$.

#Q 3.1 4(ix)
Q: Evaluate $\displaystyle\int\frac{\sin2x}{\sqrt{1+\sin^2x}}\,dx$.
T: u3-integral-rules, u3-substitution
S: The derivative of $1+\sin^2x$ is $2\sin x\cos x=\sin2x$, the numerator.
C: u3-integral-rules
S: So with $f=1+\sin^2x$: $\displaystyle\int f^{-1/2}f'\,dx=2\sqrt f+c$.
A: $2\sqrt{1+\sin^2x}+c$.

#Q 3.1 4(x)
Q: Evaluate $\displaystyle\int\frac{1-\cos2x}{1+\cos2x}\,dx$.
T: u3-trig-integrals
S: $\dfrac{1-\cos2x}{1+\cos2x}=\dfrac{2\sin^2x}{2\cos^2x}=\tan^2x=\sec^2x-1$.
C: f-compound, f-trig-identities
S: $\int(\sec^2x-1)\,dx=\tan x-x+c$.
A: $\tan x-x+c$.

#Q 3.2 1(i)
Q: Evaluate $\displaystyle\int x(7x^2+8)^9\,dx$ by a suitable substitution.
T: u3-substitution
S: Let $u=7x^2+8$; $du=14x\,dx\Rightarrow x\,dx=\dfrac{du}{14}$.
C: u3-substitution
S: $\dfrac1{14}\int u^9\,du=\dfrac{u^{10}}{140}+c$.
A: $\frac{(7x^2+8)^{10}}{140}+c$.

#Q 3.2 1(ii)
Q: Evaluate $\displaystyle\int\frac{x^2}{(x^3+2)^5}\,dx$.
T: u3-substitution
S: $u=x^3+2$, $du=3x^2\,dx$: $\ \dfrac13\int u^{-5}\,du=\dfrac13\cdot\dfrac{u^{-4}}{-4}+c$.
C: u3-substitution
A: $-\frac{1}{12(x^3+2)^4}+c$.

#Q 3.2 1(iv)
Q: Evaluate $\displaystyle\int\frac{(1+\sqrt x)^5}{\sqrt x}\,dx$.
T: u3-substitution
S: $u=1+\sqrt x$, $du=\dfrac{dx}{2\sqrt x}\Rightarrow\dfrac{dx}{\sqrt x}=2\,du$.
C: u3-substitution
S: $2\int u^5\,du=\dfrac{u^6}3+c$.
A: $\frac{(1+\sqrt x)^6}{3}+c$.

#Q 3.2 1(vi)
Q: Evaluate $\displaystyle\int\frac{t^2-2t}{(t^3-3t^2+5)^4}\,dt$.
T: u3-substitution
S: $u=t^3-3t^2+5$, $du=(3t^2-6t)\,dt=3(t^2-2t)\,dt$.
C: u3-substitution
S: $\dfrac13\int u^{-4}\,du=\dfrac13\cdot\dfrac{u^{-3}}{-3}+c=-\dfrac{1}{9u^3}+c$.
A: $-\frac{1}{9(t^3-3t^2+5)^3}+c$.

#Q 3.2 1(vii)
Q: Evaluate $\displaystyle\int\frac{\sec^2x}{\tan x\,\ln(\tan x)}\,dx$.
T: u3-substitution, u2-log-derivs
S: Let $u=\ln(\tan x)$; then $du=\dfrac{\sec^2x}{\tan x}\,dx$.
C: u3-substitution, u2-log-derivs
!:
S: $\int\dfrac{du}{u}=\ln|u|+c$.
A: $\ln|\ln(\tan x)|+c$.

#Q 3.2 1(ix)
Q: Evaluate $\displaystyle\int\frac{\tan^3x}{\sec^4x+\tan^4x}\,dx$.
T: u3-substitution, f-trig-ratios
S: Multiply top and bottom by $\cos^4x$: numerator $\tan^3x\cos^4x=\sin^3x\cos x$; denominator $1+\sin^4x$.
W: $\sec^4x\cos^4x=1$ and $\tan^4x\cos^4x=\sin^4x$.
!:
S: Now $u=1+\sin^4x$, $du=4\sin^3x\cos x\,dx$: $\ \dfrac14\int\dfrac{du}{u}=\dfrac14\ln|u|+c$.
C: u3-substitution
A: $\frac14\ln(1+\sin^4x)+c$.

#Q 3.2 1(x)
Q: Evaluate $\displaystyle\int\frac{x}{1+x\tan x}\,dx$.
T: u3-substitution, u3-integral-rules
S: Multiply top and bottom by $\cos x$: $\displaystyle\int\frac{x\cos x}{\cos x+x\sin x}\,dx$.
!:
S: $\frac{d}{dx}(\cos x+x\sin x)=-\sin x+\sin x+x\cos x=x\cos x$, the numerator.
C: u2-basic-rules
S: So the integral is $\ln|\cos x+x\sin x|+c$.
C: u3-integral-rules
A: $\ln|\cos x+x\sin x|+c$.

#Q 3.2 1(xi)
Q: Evaluate $\displaystyle\int\frac{\ln(\sec x)}{\cot x}\,dx$.
T: u3-substitution
S: $\dfrac{1}{\cot x}=\tan x$, and $\dfrac{d}{dx}\ln(\sec x)=\tan x$.
C: u2-log-derivs
S: With $u=\ln(\sec x)$, $du=\tan x\,dx$: $\int u\,du=\dfrac{u^2}2+c$.
C: u3-substitution
A: $\frac{[\ln(\sec x)]^2}{2}+c=\frac{[\ln(\cos x)]^2}{2}+c$.

#Q 3.2 1(xii)
Q: Evaluate $\displaystyle\int\frac{\ln(\sin x)}{\tan x}\,dx$.
T: u3-substitution
S: $\dfrac1{\tan x}=\cot x=\dfrac{d}{dx}\ln(\sin x)$.
C: u2-log-derivs
S: $u=\ln(\sin x)$, $du=\cot x\,dx$: $\int u\,du=\dfrac{u^2}2+c$.
C: u3-substitution
A: $\frac{[\ln(\sin x)]^2}{2}+c$.

#Q 3.2 1(xiii)
Q: Evaluate $\displaystyle\int\frac{e^{2x}}{(2+e^{2x})^2}\,dx$.
T: u3-substitution
S: $u=2+e^{2x}$, $du=2e^{2x}\,dx$: $\ \dfrac12\int u^{-2}\,du=-\dfrac{1}{2u}+c$.
C: u3-substitution
A: $-\frac{1}{2(2+e^{2x})}+c$.

#Q 3.2 2(i)
Q: Evaluate $\displaystyle\int\frac{e^x}{9-e^{2x}}\,dx$ by a change of variable.
T: u3-substitution, u3-special-forms
S: $u=e^x$, $du=e^x\,dx$: $\displaystyle\int\frac{du}{9-u^2}=\int\frac{du}{3^2-u^2}$.
C: u3-substitution
S: Standard form with $a=3$: $\dfrac{1}{6}\ln\left|\dfrac{3+u}{3-u}\right|+c$.
C: u3-special-forms
A: $\frac16\ln\left|\frac{3+e^x}{3-e^x}\right|+c$.

#Q 3.2 2(ii)
Q: Evaluate $\displaystyle\int\frac{\cos x}{\sin^2x-4}\,dx$.
T: u3-substitution, u3-special-forms
S: $u=\sin x$, $du=\cos x\,dx$: $\displaystyle\int\frac{du}{u^2-2^2}$.
C: u3-substitution
S: $\displaystyle\int\frac{du}{u^2-a^2}=\frac{1}{2a}\ln\left|\frac{u-a}{u+a}\right|$ with $a=2$.
C: u3-special-forms
A: $\frac14\ln\left|\frac{\sin x-2}{\sin x+2}\right|+c$.

#Q 3.2 2(iii)
Q: Evaluate $\displaystyle\int\frac{e^x}{1+e^{2x}}\,dx$.
T: u3-substitution, u3-special-forms
S: $u=e^x$: $\displaystyle\int\frac{du}{1+u^2}=\tan^{-1}u+c$.
C: u3-substitution, u3-special-forms
A: $\tan^{-1}(e^x)+c$.

#Q 3.2 2(iv)
Q: Evaluate $\displaystyle\int\frac{1}{x\sqrt{4-(\ln x)^2}}\,dx$.
T: u3-substitution, u3-special-forms
S: $u=\ln x$, $du=\dfrac{dx}{x}$: $\displaystyle\int\frac{du}{\sqrt{2^2-u^2}}=\sin^{-1}\frac u2+c$.
C: u3-substitution, u3-special-forms
A: $\sin^{-1}\left(\frac{\ln x}{2}\right)+c$.

#Q 3.2 2(vi)
Q: Evaluate $\displaystyle\int\frac{dx}{x\sqrt{3x^2-12}}$.
T: u3-special-forms
S: Take out $\sqrt3$: $\sqrt{3x^2-12}=\sqrt3\sqrt{x^2-4}$, so the integral is $\dfrac{1}{\sqrt3}\displaystyle\int\frac{dx}{x\sqrt{x^2-2^2}}$.
C: f-surds
S: $\displaystyle\int\frac{dx}{x\sqrt{x^2-a^2}}=\frac1a\sec^{-1}\frac xa$ with $a=2$: $\ \dfrac{1}{\sqrt3}\cdot\dfrac12\sec^{-1}\dfrac x2+c$.
C: u3-special-forms
A: $\frac{1}{2\sqrt3}\sec^{-1}\frac{x}{2}+c$ $\left(=\frac{1}{2\sqrt3}\tan^{-1}\frac{\sqrt{x^2-4}}{2}+c\ \text{for } x>2\right)$.

#Q 3.2 2(vii)
Q: Evaluate $\displaystyle\int\frac{x^2}{x^2+a^2}\,dx$.
T: u3-special-forms, f-fractions
S: $\dfrac{x^2}{x^2+a^2}=\dfrac{(x^2+a^2)-a^2}{x^2+a^2}=1-\dfrac{a^2}{x^2+a^2}$.
C: f-fractions
S: $\int\left(1-\dfrac{a^2}{x^2+a^2}\right)dx=x-a^2\cdot\dfrac1a\tan^{-1}\dfrac xa+c$.
C: u3-special-forms
A: $x-a\tan^{-1}\frac{x}{a}+c$.

#Q 3.2 2(viii)
Q: Evaluate $\displaystyle\int\frac{1}{x\left[1+(\ln x)^2\right]}\,dx$.
T: u3-substitution, u3-special-forms
S: $u=\ln x$, $du=\dfrac{dx}x$: $\displaystyle\int\frac{du}{1+u^2}=\tan^{-1}u+c$.
C: u3-substitution
A: $\tan^{-1}(\ln x)+c$.

#Q 3.2 2(x)
Q: Evaluate $\displaystyle\int\frac{dx}{(1+x^2)^{3/2}}$.
T: u3-trig-substitution
S: Put $x=\tan\theta$: $dx=\sec^2\theta\,d\theta$ and $(1+\tan^2\theta)^{3/2}=\sec^3\theta$.
C: u3-trig-substitution
S: $\displaystyle\int\frac{\sec^2\theta}{\sec^3\theta}\,d\theta=\int\cos\theta\,d\theta=\sin\theta+c$.
S: From $\tan\theta=\dfrac x1$: opposite $x$, adjacent $1$, hypotenuse $\sqrt{1+x^2}$, so $\sin\theta=\dfrac{x}{\sqrt{1+x^2}}$.
C: f-pythagoras
A: $\frac{x}{\sqrt{1+x^2}}+c$.

#Q 3.2 2(xii)
Q: Evaluate $\displaystyle\int\sqrt{\frac{1+x}{1-x}}\,dx$.
T: u3-special-forms, u3-integral-rules
S: Multiply inside the root by $\frac{1+x}{1+x}$: $\sqrt{\dfrac{(1+x)^2}{1-x^2}}=\dfrac{1+x}{\sqrt{1-x^2}}$.
!:
S: Split: $\displaystyle\int\frac{dx}{\sqrt{1-x^2}}+\int\frac{x\,dx}{\sqrt{1-x^2}}=\sin^{-1}x-\sqrt{1-x^2}+c$.
W: $\int\frac{x}{\sqrt{1-x^2}}dx=-\frac12\int(1-x^2)^{-1/2}(-2x)\,dx=-\sqrt{1-x^2}$.
C: u3-special-forms, u3-integral-rules
A: $\sin^{-1}x-\sqrt{1-x^2}+c$.

#Q 3.3 1
Q: Evaluate $\displaystyle\int\ln x\,dx$.
T: u3-by-parts
S: Write it as $\int\ln x\cdot1\,dx$ with $u=\ln x$, $dv=dx$, so $du=\dfrac{dx}x$, $v=x$.
C: u3-by-parts
S: $x\ln x-\int x\cdot\dfrac1x\,dx=x\ln x-x+c$.
A: $x\ln x-x+c$.

#Q 3.3 2
Q: Evaluate $\displaystyle\int x^7\ln x\,dx$.
T: u3-by-parts
S: LIATE: $u=\ln x$, $dv=x^7dx$, $v=\dfrac{x^8}8$.
C: u3-by-parts
S: $\dfrac{x^8}8\ln x-\int\dfrac{x^8}8\cdot\dfrac1x\,dx=\dfrac{x^8\ln x}8-\dfrac{x^8}{64}+c$.
A: $\frac{x^8\ln x}{8}-\frac{x^8}{64}+c$.

#Q 3.3 3
Q: Evaluate $\displaystyle\int x\cos2x\,dx$.
T: u3-by-parts
S: $u=x$, $dv=\cos2x\,dx$, $v=\dfrac{\sin2x}2$.
C: u3-by-parts
S: $\dfrac{x\sin2x}2-\int\dfrac{\sin2x}2\,dx=\dfrac{x\sin2x}2+\dfrac{\cos2x}4+c$.
A: $\frac{x\sin2x}{2}+\frac{\cos2x}{4}+c$.

#Q 3.3 4
Q: Evaluate $\displaystyle\int\frac{x}{\sin^2x}\,dx$.
T: u3-by-parts, u3-standard-integrals
S: $\dfrac{x}{\sin^2x}=x\csc^2x$. Take $u=x$, $dv=\csc^2x\,dx$, $v=-\cot x$.
C: u3-by-parts
S: $-x\cot x+\int\cot x\,dx=-x\cot x+\ln|\sin x|+c$.
C: u3-standard-integrals
A: $-x\cot x+\ln|\sin x|+c$.

#Q 3.3 5
Q: Evaluate $\displaystyle\int xe^{2x}\,dx$.
T: u3-by-parts
S: $u=x$, $dv=e^{2x}dx$, $v=\dfrac{e^{2x}}2$.
C: u3-by-parts
S: $\dfrac{xe^{2x}}2-\int\dfrac{e^{2x}}2\,dx=\dfrac{xe^{2x}}2-\dfrac{e^{2x}}4+c$.
A: $\frac{xe^{2x}}{2}-\frac{e^{2x}}{4}+c$.

#Q 3.3 6
Q: Evaluate $\displaystyle\int x^2e^{ax}\,dx$.
T: u3-by-parts
S: First round: $u=x^2$, $dv=e^{ax}dx$: $\ \dfrac{x^2e^{ax}}a-\dfrac2a\int xe^{ax}\,dx$.
C: u3-by-parts
S: Second round on $\int xe^{ax}dx=\dfrac{xe^{ax}}a-\dfrac{e^{ax}}{a^2}$.
S: Combine: $\dfrac{x^2e^{ax}}a-\dfrac{2xe^{ax}}{a^2}+\dfrac{2e^{ax}}{a^3}+c$.
W: The tabular method gives the same: derivatives $x^2,2x,2$ against integrals $\frac{e^{ax}}a,\frac{e^{ax}}{a^2},\frac{e^{ax}}{a^3}$ with signs $+,-,+$.
A: $e^{ax}\left(\frac{x^2}{a}-\frac{2x}{a^2}+\frac{2}{a^3}\right)+c$.

#Q 3.3 7
Q: Evaluate $\displaystyle\int x\tan^2x\,dx$.
T: u3-by-parts, u3-trig-integrals
S: $\tan^2x=\sec^2x-1$: the integral is $\int x\sec^2x\,dx-\int x\,dx$.
C: f-trig-identities
S: By parts ($u=x$, $v=\tan x$): $\int x\sec^2x\,dx=x\tan x-\int\tan x\,dx=x\tan x-\ln|\sec x|$.
C: u3-by-parts
S: Total: $x\tan x-\ln|\sec x|-\dfrac{x^2}2+c$.
A: $x\tan x-\ln|\sec x|-\frac{x^2}{2}+c$.

#Q 3.3 8
Q: Evaluate $\displaystyle\int\ln(\sin x)\cos x\,dx$.
T: u3-substitution, u3-by-parts
S: Substitute $u=\sin x$, $du=\cos x\,dx$: $\int\ln u\,du$.
C: u3-substitution
S: $\int\ln u\,du=u\ln u-u+c$ (by parts).
C: u3-by-parts
A: $\sin x\,\ln(\sin x)-\sin x+c$.

#Q 3.3 9
Q: Evaluate $\displaystyle\int e^x\ln(1+e^x)\,dx$.
T: u3-substitution, u3-by-parts
S: $u=1+e^x$, $du=e^x\,dx$: $\int\ln u\,du=u\ln u-u$.
C: u3-substitution, u3-by-parts
S: $=(1+e^x)\ln(1+e^x)-(1+e^x)+c=(1+e^x)\ln(1+e^x)-e^x+c'$ (the $-1$ joins the constant).
A: $(1+e^x)\ln(1+e^x)-e^x+c$.

#Q 3.3 10
Q: Evaluate $\displaystyle\int(2x^3+2x)e^{x^2}\,dx$.
T: u3-substitution, u3-ex-pattern
S: $(2x^3+2x)e^{x^2}=(x^2+1)e^{x^2}\cdot2x$. Put $u=x^2$, $du=2x\,dx$: $\int(u+1)e^u\,du$.
C: u3-substitution
S: $(u+1)$ is a function plus its derivative pattern: $\int e^u[u+1]\,du=ue^u+c$.
C: u3-ex-pattern
A: $x^2e^{x^2}+c$.

#Q 3.3 12
Q: Evaluate $\displaystyle\int\frac{x}{1+\cos x}\,dx$.
T: u3-by-parts, u3-trig-integrals
S: $1+\cos x=2\cos^2\dfrac x2$, so the integrand is $\tfrac12x\sec^2\dfrac x2$.
C: f-compound
S: By parts: $u=x$, $dv=\tfrac12\sec^2\frac x2\,dx$, $v=\tan\frac x2$: $\ x\tan\dfrac x2-\int\tan\dfrac x2\,dx$.
C: u3-by-parts
S: $\int\tan\dfrac x2\,dx=2\ln\left|\sec\dfrac x2\right|$.
A: $x\tan\frac{x}{2}-2\ln\left|\sec\frac{x}{2}\right|+c$.

#Q 3.3 13
Q: Evaluate $\displaystyle\int\frac{x}{1-\sin x}\,dx$.
T: u3-by-parts, u3-trig-integrals
S: $\dfrac{1}{1-\sin x}=\dfrac{1+\sin x}{1-\sin^2x}=\dfrac{1+\sin x}{\cos^2x}=\sec^2x+\sec x\tan x$.
C: f-trig-identities
!:
S: By parts with $u=x$, $v=\tan x+\sec x$: $\ x(\tan x+\sec x)-\int(\tan x+\sec x)\,dx$.
C: u3-by-parts
S: $\int\tan x\,dx=\ln|\sec x|$ and $\int\sec x\,dx=\ln|\sec x+\tan x|$.
C: u3-standard-integrals
A: $x\tan x+x\sec x-\ln|\sec x|-\ln|\sec x+\tan x|+c$.

#Q 3.3 14
Q: Evaluate $\displaystyle\int\frac{x\cos x-\sin x}{x^2}\,dx$.
T: u2-basic-rules, u3-antiderivative
S: Recognise a quotient-rule derivative: $\dfrac{d}{dx}\left(\dfrac{\sin x}{x}\right)=\dfrac{x\cos x-\sin x}{x^2}$.
C: u2-basic-rules
S: So the integral is $\dfrac{\sin x}{x}+c$.
A: $\frac{\sin x}{x}+c$.

#Q 3.3 17
Q: Evaluate $\displaystyle\int e^x\left(\frac{1-x}{1+x^2}\right)^2dx$.
T: u3-ex-pattern
S: Expand: $\left(\dfrac{1-x}{1+x^2}\right)^2=\dfrac{1+x^2-2x}{(1+x^2)^2}=\dfrac{1}{1+x^2}-\dfrac{2x}{(1+x^2)^2}$.
C: f-expand
S: With $f=\dfrac1{1+x^2}$, $f'=-\dfrac{2x}{(1+x^2)^2}$: the bracket is $f+f'$.
C: u3-ex-pattern
!:
S: $\int e^x(f+f')\,dx=e^xf+c$.
A: $\frac{e^x}{1+x^2}+c$.

#Q 3.3 18
Q: Evaluate $\displaystyle\int\frac{e^{\tan^{-1}x}}{(1+x^2)^2}\,dx$.
T: u3-substitution, u3-cyclic-parts, f-compound
S: Let $t=\tan^{-1}x$: $x=\tan t$, $dx=\sec^2t\,dt$, $1+x^2=\sec^2t$. The integral becomes $\displaystyle\int\frac{e^t\sec^2t}{\sec^4t}dt=\int e^t\cos^2t\,dt$.
C: u3-substitution
S: $\cos^2t=\tfrac12(1+\cos2t)$: $\ \tfrac12\int e^t\,dt+\tfrac12\int e^t\cos2t\,dt$.
C: f-compound
S: Cyclic parts: $\int e^t\cos2t\,dt=\dfrac{e^t(\cos2t+2\sin2t)}{5}$.
D: Let $J=\int e^t\cos2t\,dt$. Parts twice (trig part as $u$): $J=e^t\cos2t+2\int e^t\sin2t\,dt=e^t\cos2t+2\left[e^t\sin2t-2J\right]$, so $5J=e^t(\cos2t+2\sin2t)$.
C: u3-cyclic-parts
!:
S: So the integral is $\dfrac{e^t}2+\dfrac{e^t(\cos2t+2\sin2t)}{10}$. Back to $x$: $\cos2t=\dfrac{1-x^2}{1+x^2}$, $\sin2t=\dfrac{2x}{1+x^2}$.
C: f-compound
S: $e^t\left[\dfrac12+\dfrac{1-x^2+4x}{10(1+x^2)}\right]=\dfrac{e^t\,(5+5x^2+1-x^2+4x)}{10(1+x^2)}=\dfrac{e^{\tan^{-1}x}(2x^2+2x+3)}{5(1+x^2)}$.
A: $\frac{e^{\tan^{-1}x}\,(2x^2+2x+3)}{5(1+x^2)}+c$.

#Q 3.3 19
Q: Evaluate $\displaystyle\int\sin^{-1}x\,dx$.
T: u3-by-parts
S: $u=\sin^{-1}x$, $dv=dx$: $\ x\sin^{-1}x-\displaystyle\int\frac{x}{\sqrt{1-x^2}}\,dx$.
C: u3-by-parts
S: $\displaystyle\int\frac{x}{\sqrt{1-x^2}}dx=-\sqrt{1-x^2}$.
C: u3-integral-rules
A: $x\sin^{-1}x+\sqrt{1-x^2}+c$.

#Q 3.3 21
Q: Evaluate $\displaystyle\int\csc^3x\,dx$.
T: u3-cyclic-parts, u3-standard-integrals
S: Let $I=\int\csc x\cdot\csc^2x\,dx$ with $u=\csc x$, $dv=\csc^2x\,dx$, $v=-\cot x$.
C: u3-by-parts
S: $I=-\csc x\cot x-\int\csc x\cot^2x\,dx=-\csc x\cot x-\int\csc x(\csc^2x-1)\,dx$.
C: f-trig-identities
S: $I=-\csc x\cot x-I+\int\csc x\,dx$, so $2I=-\csc x\cot x+\ln|\csc x-\cot x|$.
C: u3-cyclic-parts
!:
A: $-\frac12\csc x\cot x+\frac12\ln|\csc x-\cot x|+c$.

#Q 3.3 22
Q: Evaluate $\displaystyle\int e^{5x}(x^5+x^4+1)\,dx$.
T: u3-ex-pattern
S: Look for $f$ with $5f+f'=x^5+x^4+1$. Try $f=\dfrac{x^5+1}{5}$: $5f=x^5+1$ and $f'=x^4$. ✓
C: u3-ex-pattern
!:
S: So $\int e^{5x}(5f+f')\,dx=e^{5x}f+c$.
A: $\frac{e^{5x}(x^5+1)}{5}+c$.

#Q 3.3 24
Q: Evaluate $\displaystyle\int e^{3x}(\sin x-3\cos3x)\,dx$.
T: u3-cyclic-parts
S: Split: $\int e^{3x}\sin x\,dx-3\int e^{3x}\cos3x\,dx$.
S: $I_1=\int e^{3x}\sin x\,dx$: parts twice gives $I_1=\dfrac{e^{3x}(3\sin x-\cos x)}{10}$.
D: $I_1=-e^{3x}\cos x+3\int e^{3x}\cos x\,dx=-e^{3x}\cos x+3\left[e^{3x}\sin x-3I_1\right]$, so $10I_1=e^{3x}(3\sin x-\cos x)$.
C: u3-cyclic-parts
S: $I_2=\int e^{3x}\cos3x\,dx=\dfrac{e^{3x}(\cos3x+\sin3x)}{6}$.
D: $I_2=\frac{e^{3x}\sin3x}{3}-\int e^{3x}\sin3x\,dx=\frac{e^{3x}\sin3x}3-\left[-\frac{e^{3x}\cos3x}3+I_2\right]$, so $2I_2=\frac{e^{3x}(\sin3x+\cos3x)}{3}$.
C: u3-cyclic-parts
S: Combine: $I_1-3I_2$.
A: $\frac{e^{3x}(3\sin x-\cos x)}{10}-\frac{e^{3x}(\cos3x+\sin3x)}{2}+c$.

#Q 3.4 1
Q: Evaluate $\displaystyle\int\frac{5x+7}{(x+1)(x+2)}\,dx$.
T: u3-partial-fractions
S: $\dfrac{5x+7}{(x+1)(x+2)}=\dfrac A{x+1}+\dfrac B{x+2}\Rightarrow5x+7=A(x+2)+B(x+1)$.
C: u3-partial-fractions
S: $x=-1$: $2=A$. $\ x=-2$: $-3=-B\Rightarrow B=3$.
S: $\int\left(\dfrac2{x+1}+\dfrac3{x+2}\right)dx=2\ln|x+1|+3\ln|x+2|+c$.
A: $2\ln|x+1|+3\ln|x+2|+c$.

#Q 3.4 2
Q: Evaluate $\displaystyle\int\frac{3x+5}{x^2+4x+3}\,dx$.
T: u3-partial-fractions, f-factor
S: Factor: $x^2+4x+3=(x+1)(x+3)$.
C: f-factor
S: $3x+5=A(x+3)+B(x+1)$: $x=-1\Rightarrow A=1$; $x=-3\Rightarrow-4=-2B\Rightarrow B=2$.
C: u3-partial-fractions
A: $\ln|x+1|+2\ln|x+3|+c$.

#Q 3.4 3
Q: Evaluate $\displaystyle\int\frac{x^3+2x^2-x-1}{x^2-1}\,dx$.
T: u3-improper-fraction, u3-partial-fractions
S: Improper: divide. $x^3+2x^2-x-1=(x^2-1)(x+2)+1$, so the integrand is $x+2+\dfrac1{x^2-1}$.
C: u3-improper-fraction
S: $\dfrac1{x^2-1}=\dfrac12\left(\dfrac1{x-1}-\dfrac1{x+1}\right)$.
C: u3-partial-fractions
S: Integrate: $\dfrac{x^2}2+2x+\dfrac12\ln\left|\dfrac{x-1}{x+1}\right|+c$.
A: $\frac{x^2}{2}+2x+\frac12\ln\left|\frac{x-1}{x+1}\right|+c$.

#Q 3.4 7
Q: Evaluate $\displaystyle\int\frac{x^2-3}{(x+2)^3}\,dx$.
T: u3-partial-fractions, u3-substitution
S: Let $u=x+2$: $x^2-3=(u-2)^2-3=u^2-4u+1$.
W: With a single repeated factor, substituting $u=x+2$ gives the partial fractions immediately.
C: u3-substitution
S: $\displaystyle\int\frac{u^2-4u+1}{u^3}du=\int\left(\frac1u-\frac4{u^2}+\frac1{u^3}\right)du=\ln|u|+\frac4u-\frac1{2u^2}+c$.
C: u3-partial-fractions
A: $\ln|x+2|+\frac{4}{x+2}-\frac{1}{2(x+2)^2}+c$.

#Q 3.4 8
Q: Evaluate $\displaystyle\int\frac{e^x-1}{e^x(e^x+1)}\,dx$.
T: u3-partial-fractions, u3-substitution
S: $u=e^x$, $dx=\dfrac{du}u$: $\displaystyle\int\frac{u-1}{u^2(u+1)}du$.
C: u3-substitution
S: $\dfrac{u-1}{u^2(u+1)}=\dfrac Au+\dfrac B{u^2}+\dfrac C{u+1}$: $u=0\Rightarrow B=-1$; $u=-1\Rightarrow C=-2$; $u^2$-coefficients $0=A+C\Rightarrow A=2$.
C: u3-partial-fractions
!:
S: $\int\left(\dfrac2u-\dfrac1{u^2}-\dfrac2{u+1}\right)du=2\ln u+\dfrac1u-2\ln(u+1)+c$.
S: Back to $x$ ($\ln e^x=x$): $\ 2x+e^{-x}-2\ln(e^x+1)+c$.
A: $2x+e^{-x}-2\ln(e^x+1)+c$.

#Q 3.4 10
Q: Evaluate $\displaystyle\int\frac{x^3+4x^2+5x+2}{(x+1)^3(x+2)}\,dx$.
T: u3-improper-fraction, f-factor
S: Factor the numerator: $x^3+4x^2+5x+2=(x+1)^2(x+2)$.
W: $x=-1$ makes the numerator $-1+4-5+2=0$, so $(x+1)$ is a factor; dividing twice gives $(x+1)^2(x+2)$.
C: f-factor
!:
S: The fraction cancels to $\dfrac{1}{x+1}$.
A: $\ln|x+1|+c$.

#Q 3.4 11
Q: Evaluate $\displaystyle\int\frac{x^2+2x-1}{(x-1)(x^2+1)}\,dx$.
T: u3-partial-fractions
S: $\dfrac{x^2+2x-1}{(x-1)(x^2+1)}=\dfrac A{x-1}+\dfrac{Bx+C}{x^2+1}$.
C: u3-partial-fractions
S: $x^2+2x-1=A(x^2+1)+(Bx+C)(x-1)$. $x=1$: $2=2A\Rightarrow A=1$. $x^2$: $1=A+B\Rightarrow B=0$. Constant: $-1=A-C\Rightarrow C=2$.
S: $\int\left(\dfrac1{x-1}+\dfrac2{x^2+1}\right)dx=\ln|x-1|+2\tan^{-1}x+c$.
A: $\ln|x-1|+2\tan^{-1}x+c$.

#Q 3.5 1(i)
Q: Evaluate $\displaystyle\int_1^2(x^2+x)\,dx$.
T: u3-definite
S: $\left[\dfrac{x^3}3+\dfrac{x^2}2\right]_1^2=\left(\dfrac83+2\right)-\left(\dfrac13+\dfrac12\right)$.
C: u3-definite
S: $=\dfrac73+\dfrac32=\dfrac{23}6$.
A: $\frac{23}{6}$.

#Q 3.5 1(ii)
Q: Evaluate $\displaystyle\int_{-2}^3(4x^3+3x^2+2x)\,dx$.
T: u3-definite
S: Antiderivative: $x^4+x^3+x^2$.
S: $\left[x^4+x^3+x^2\right]_{-2}^3=(81+27+9)-(16-8+4)=117-12=105$.
W: Careful with signs at $x=-2$: $(-2)^4=16$, $(-2)^3=-8$, $(-2)^2=4$.
A: $105$.

#Q 3.5 1(iii)
Q: Evaluate $\displaystyle\int_0^{\pi/2}\sin^2x\,dx$.
T: u3-definite, u3-trig-integrals
S: $\sin^2x=\dfrac{1-\cos2x}2$: antiderivative $\dfrac x2-\dfrac{\sin2x}4$.
C: f-compound
S: $\left[\dfrac x2-\dfrac{\sin2x}4\right]_0^{\pi/2}=\dfrac\pi4-0=\dfrac\pi4$.
A: $\frac{\pi}{4}$.

#Q 3.5 1(iv)
Q: Evaluate $\displaystyle\int_0^{\pi/4}\frac{dx}{1+\sin x}$.
T: u3-definite, u3-trig-integrals
S: Multiply by $\dfrac{1-\sin x}{1-\sin x}$: $\dfrac{1-\sin x}{\cos^2x}=\sec^2x-\sec x\tan x$.
C: f-trig-identities
!:
S: $\left[\tan x-\sec x\right]_0^{\pi/4}=(1-\sqrt2)-(0-1)=2-\sqrt2$.
A: $2-\sqrt2$.

#Q 3.5 1(v)
Q: Evaluate $\displaystyle\int_0^{\pi/2}\cos^3\theta\,d\theta$.
T: u3-definite, u3-substitution
S: $\cos^3\theta=(1-\sin^2\theta)\cos\theta$; with $u=\sin\theta$ the antiderivative is $\sin\theta-\dfrac{\sin^3\theta}3$.
C: u3-substitution
S: $\left[\sin\theta-\dfrac{\sin^3\theta}3\right]_0^{\pi/2}=1-\dfrac13=\dfrac23$.
A: $\frac{2}{3}$.

#Q 3.5 1(viii)
Q: Evaluate $\displaystyle\int_0^1\tan^{-1}x\,dx$.
T: u3-definite, u3-by-parts
S: By parts: $\int\tan^{-1}x\,dx=x\tan^{-1}x-\displaystyle\int\frac{x}{1+x^2}dx=x\tan^{-1}x-\tfrac12\ln(1+x^2)$.
C: u3-by-parts
S: $\left[x\tan^{-1}x-\tfrac12\ln(1+x^2)\right]_0^1=\dfrac\pi4-\tfrac12\ln2$.
A: $\frac{\pi}{4}-\frac12\ln2$.

#Q 3.5 2(i)
Q: Evaluate $\displaystyle\int_{-1}^1f(x)\,dx$, where $f(x)=5-3x$ for $x\le0$ and $f(x)=5+3x$ for $x>0$.
T: u3-abs-integral, u3-def-properties
S: Split at $0$: $\displaystyle\int_{-1}^0(5-3x)\,dx+\int_0^1(5+3x)\,dx$.
C: u3-def-properties
S: $\left[5x-\tfrac32x^2\right]_{-1}^0=0-\left(-5-\tfrac32\right)=\tfrac{13}2$, and $\left[5x+\tfrac32x^2\right]_0^1=\tfrac{13}2$.
A: $13$.

#Q 3.5 2(ii)
Q: Evaluate $\displaystyle\int_{-3}^5f(x)\,dx$, where $f(x)=|x-4|+|x|$.
T: u3-abs-integral
S: $\int_{-3}^5|x-4|\,dx=\int_{-3}^4(4-x)\,dx+\int_4^5(x-4)\,dx=\tfrac{49}2+\tfrac12=25$.
W: The area under $|x-4|$ is two triangles: base 7 height 7, and base 1 height 1.
C: u3-abs-integral
S: $\int_{-3}^5|x|\,dx=\int_{-3}^0(-x)\,dx+\int_0^5x\,dx=\tfrac92+\tfrac{25}2=17$.
A: $25+17=42$.

#Q 3.5 2(iii)
Q: Evaluate $\displaystyle\int_{-3}^4|4-x^2|\,dx$.
T: u3-abs-integral
S: $4-x^2\ge0$ for $-2\le x\le2$. Split: $\displaystyle\int_{-3}^{-2}(x^2-4)\,dx+\int_{-2}^2(4-x^2)\,dx+\int_2^4(x^2-4)\,dx$.
C: u3-abs-integral
S: $\left[\tfrac{x^3}3-4x\right]_{-3}^{-2}=\tfrac73$, $\ \left[4x-\tfrac{x^3}3\right]_{-2}^2=\tfrac{32}3$, $\ \left[\tfrac{x^3}3-4x\right]_2^4=\tfrac{32}3$.
A: $\frac73+\frac{32}3+\frac{32}3=\frac{71}{3}$.

#Q 3.5 4(i)
Q: Simplify $\displaystyle\int_0^1f(x)\,dx-\int_0^2f(x)\,dx-\int_3^1f(x)\,dx+\int_3^2f(x)\,dx$.
T: u3-def-properties
S: Write each integral with an antiderivative $F$: $[F(1)-F(0)]-[F(2)-F(0)]-[F(1)-F(3)]+[F(2)-F(3)]$.
C: u3-def-properties
!:
S: Every term cancels.
A: $0$.

#Q 3.5 4(ii)
Q: Simplify $\displaystyle\int_0^35f(x)\,dx-\int_1^35f(4-x)\,dx-\int_1^55f(x)\,dx-\int_0^54f(5-x)\,dx$.
T: u3-def-properties, u3-definite-sub
S: Substitute $u=4-x$: $\int_1^3f(4-x)\,dx=\int_3^1f(u)(-du)=\int_1^3f(u)\,du$. Similarly $\int_0^5f(5-x)\,dx=\int_0^5f(u)\,du$.
C: u3-definite-sub
!:
S: The expression is $5\int_0^3f-5\int_1^3f-5\int_1^5f-4\int_0^5f=5\int_0^1f-5\int_1^5f-4\int_0^5f$.
C: u3-def-properties
S: Split $\int_0^5f=\int_0^1f+\int_1^5f$: $\ 5\int_0^1f-5\int_1^5f-4\int_0^1f-4\int_1^5f=\int_0^1f-9\int_1^5f$.
S: Check with $f(x)=1$: the original is $15-10-20-20=-35$ and $1-9(4)=-35$ ✓.
A: $\displaystyle\int_0^1f(x)\,dx-9\int_1^5f(x)\,dx$.

#Q 3.5 5
Q: Prove that $\displaystyle\int_0^1x^m(1-x)^n\,dx=\int_0^1x^n(1-x)^m\,dx$ and hence evaluate $\displaystyle\int_0^1x(1-x)^{10}\,dx$.
T: u3-king-property
S: Use $\int_0^af(x)\,dx=\int_0^af(a-x)\,dx$ with $a=1$: replacing $x$ by $1-x$ turns $x^m(1-x)^n$ into $(1-x)^mx^n$. $\blacksquare$
C: u3-king-property
S: Hence $\displaystyle\int_0^1x(1-x)^{10}dx=\int_0^1x^{10}(1-x)\,dx=\int_0^1(x^{10}-x^{11})\,dx$.
S: $=\dfrac1{11}-\dfrac1{12}=\dfrac1{132}$.
A: $\frac{1}{132}$.

#Q 3.5 6(i)
Q: Evaluate $\displaystyle\int_0^4x\sqrt{4-x}\,dx$.
T: u3-definite-sub
S: $u=4-x$: $x=4-u$, $dx=-du$, $x=0\to u=4$, $x=4\to u=0$.
C: u3-definite-sub
S: $\displaystyle\int_4^0(4-u)\sqrt u\,(-du)=\int_0^4\left(4u^{1/2}-u^{3/2}\right)du=\left[\tfrac83u^{3/2}-\tfrac25u^{5/2}\right]_0^4$.
S: $=\tfrac83(8)-\tfrac25(32)=\tfrac{64}3-\tfrac{64}5=\tfrac{128}{15}$.
A: $\frac{128}{15}$.

#Q 3.5 6(ii)
Q: Evaluate $\displaystyle\int_0^1\frac{x^2}{\sqrt{1-x}}\,dx$.
T: u3-definite-sub
S: $u=1-x$: $\displaystyle\int_0^1\frac{(1-u)^2}{\sqrt u}du=\int_0^1\left(u^{-1/2}-2u^{1/2}+u^{3/2}\right)du$.
C: u3-definite-sub
S: $\left[2u^{1/2}-\tfrac43u^{3/2}+\tfrac25u^{5/2}\right]_0^1=2-\tfrac43+\tfrac25=\tfrac{16}{15}$.
A: $\frac{16}{15}$.

#Q 3.5 8
Q: Let $\displaystyle\int_0^3f(x)\,dx=20$ and $\displaystyle\int_0^{10}f(x)\,dx=45$. Evaluate $\displaystyle\int_3^{10}f(x)\,dx$.
T: u3-def-properties
S: $\int_0^{10}f=\int_0^3f+\int_3^{10}f\Rightarrow45=20+\int_3^{10}f$.
C: u3-def-properties
A: $\int_3^{10}f(x)\,dx=25$.

#Q 3.5 9
Q: Given $\displaystyle\int_0^9f(x)\,dx=16$ and $\displaystyle\int_0^3f(x)\,dx=12$, evaluate $\displaystyle\int_3^9\big(2f(x)+5\big)\,dx$.
T: u3-def-properties
S: $\int_3^9f=16-12=4$.
C: u3-def-properties
S: $\int_3^9(2f+5)\,dx=2(4)+5(9-3)=8+30$.
A: $38$.

#Q 3.5 11
Q: Show that $\displaystyle\int_{-1}^1(1-x)f(1-x^2)\,dx=\int_{-1}^1f(1-x^2)\,dx$.
T: u3-even-odd, u3-def-properties
S: Split: $\displaystyle\int_{-1}^1(1-x)f(1-x^2)\,dx=\int_{-1}^1f(1-x^2)\,dx-\int_{-1}^1xf(1-x^2)\,dx$.
C: u3-def-properties
S: $g(x)=xf(1-x^2)$ is odd: $g(-x)=-xf(1-x^2)=-g(x)$. So $\int_{-1}^1g=0$. $\blacksquare$
C: u3-even-odd
A: The odd part integrates to $0$, leaving $\int_{-1}^1f(1-x^2)\,dx$.

#Q 3.5 13
Q: Show that $\displaystyle\int_{-a}^a\frac{f(x)}{1+e^x}\,dx=\int_0^af(x)\,dx$ where $f$ is even. Hence evaluate $\displaystyle\int_{-a}^a\frac{x^2}{1+e^x}\,dx$.
T: u3-king-property, u3-even-odd
S: Let $I=\displaystyle\int_{-a}^a\frac{f(x)}{1+e^x}dx$. Replace $x$ by $-x$ (here $a+b=0$): $I=\displaystyle\int_{-a}^a\frac{f(-x)}{1+e^{-x}}dx=\int_{-a}^a\frac{e^xf(x)}{e^x+1}dx$.
W: $f$ is even, so $f(-x)=f(x)$; multiplying top and bottom by $e^x$ tidies $\frac{1}{1+e^{-x}}$.
C: u3-king-property
!:
S: Add the two forms: $2I=\displaystyle\int_{-a}^a\frac{(1+e^x)f(x)}{1+e^x}dx=\int_{-a}^af(x)\,dx=2\int_0^af(x)\,dx$. So $I=\int_0^af$. $\blacksquare$
C: u3-even-odd
S: With $f(x)=x^2$ (even): $\displaystyle\int_{-a}^a\frac{x^2}{1+e^x}dx=\int_0^ax^2\,dx=\frac{a^3}3$.
A: $\frac{a^3}{3}$.

#Q 3.5 15(ii)
Q: Show that $\displaystyle\int_0^\pi\frac{\sin x\cos x}{1+e^{\sin x}}\,dx=0$.
T: u3-king-property
S: Replace $x$ by $\pi-x$: $\sin(\pi-x)=\sin x$ and $\cos(\pi-x)=-\cos x$.
C: f-quadrants
S: So $I=\displaystyle\int_0^\pi\frac{\sin x(-\cos x)}{1+e^{\sin x}}dx=-I$.
C: u3-king-property
S: $2I=0\Rightarrow I=0$. $\blacksquare$
A: $I=-I$, so $I=0$.

#Q 3.5 15(iii)
Q: Show that $\displaystyle\int_0^\pi x(\pi-x)\cos(\pi-x)\,dx=0$.
T: u3-king-property
S: Replacing $x$ by $\pi-x$ leaves $x(\pi-x)$ unchanged and turns $\cos(\pi-x)$ into $\cos x$: $\ I=\displaystyle\int_0^\pi x(\pi-x)\cos x\,dx$.
C: u3-king-property
S: But $\cos(\pi-x)=-\cos x$, so the original is $I=-\displaystyle\int_0^\pi x(\pi-x)\cos x\,dx$.
C: f-quadrants
S: Both are true, so $I=-I\Rightarrow I=0$. $\blacksquare$
A: $I=0$.

#Q 3.5 16(i)
Q: Evaluate $\displaystyle\int_1^3\frac{x^2}{x^2+(4-x)^2}\,dx$.
T: u3-king-property
S: Here $a+b=4$. Replacing $x$ by $4-x$: $I=\displaystyle\int_1^3\frac{(4-x)^2}{(4-x)^2+x^2}dx$.
C: u3-king-property
S: Add: $2I=\displaystyle\int_1^3\frac{x^2+(4-x)^2}{x^2+(4-x)^2}dx=\int_1^31\,dx=2$.
A: $I=1$.

#Q 3.5 16(ii)
Q: Evaluate $\displaystyle\int_0^{\ln2}\frac{e^x}{e^x+2e^{-x}}\,dx$.
T: u3-definite-sub, u3-integral-rules
S: Multiply top and bottom by $e^x$: $\dfrac{e^{2x}}{e^{2x}+2}$.
S: The numerator is half the derivative of the denominator: antiderivative $\tfrac12\ln(e^{2x}+2)$.
C: u3-integral-rules
S: $\tfrac12\left[\ln(e^{2x}+2)\right]_0^{\ln2}=\tfrac12\left[\ln(4+2)-\ln(1+2)\right]=\tfrac12\ln2$.
W: $e^{2\ln2}=e^{\ln4}=4$.
A: $\frac12\ln2$.

#Q 3.5 17(i)
Q: Find $\dfrac{d}{dt}\displaystyle\int_\pi^t\frac{\sin y}{1+\sqrt y}\,dy$.
T: u3-ftc1
S: By the fundamental theorem, differentiating the integral with respect to its upper limit gives the integrand at that limit.
C: u3-ftc1
A: $\frac{\sin t}{1+\sqrt t}$.

#Q 3.5 17(ii)
Q: Find $\dfrac{d}{dx}\displaystyle\int_{ax}^{bx}\frac{1}{1+t^2}\,dt$.
T: u3-ftc1
S: $f(t)=\dfrac1{1+t^2}$, upper limit $bx$ (derivative $b$), lower limit $ax$ (derivative $a$).
C: u3-ftc1
S: $f(bx)\cdot b-f(ax)\cdot a$.
A: $\frac{b}{1+b^2x^2}-\frac{a}{1+a^2x^2}$.

#Q 3.6 1
Q: Find the area above the $x$-axis and below the curve $y=(x-2)(3-x)$.
T: u3-area-under
S: Roots $x=2$ and $x=3$; between them $y>0$ (for example $y(2.5)=0.25$).
C: u3-area-under
S: Area $=\displaystyle\int_2^3(x-2)(3-x)\,dx=\int_2^3(-x^2+5x-6)\,dx=\left[-\tfrac{x^3}3+\tfrac52x^2-6x\right]_2^3$.
S: $=\left(-9+\tfrac{45}2-18\right)-\left(-\tfrac83+10-12\right)=-\tfrac92+\tfrac{14}3=\tfrac16$.
P: {"x":[1,4],"y":[-1,1],"step":0.5,"ystep":0.25,"fn":[{"f":"(x-2)*(3-x)","label":"y = (x−2)(3−x)","at":3.3}],"shade":[{"f":"(x-2)*(3-x)","g":"0","a":2,"b":3}]}
A: $\frac16$ square units.

#Q 3.6 3(i)
Q: Sketch the region bounded by $y=2x$ and $y=x^2$ and find its area.
ref: printed as Q2(i)
T: u3-area-between
S: Intersections: $x^2=2x\Rightarrow x(x-2)=0\Rightarrow x=0,2$.
C: f-zero-product
S: On $(0,2)$ the line is above (e.g. at $x=1$: $2>1$). Area $=\displaystyle\int_0^2(2x-x^2)\,dx=\left[x^2-\tfrac{x^3}3\right]_0^2=4-\tfrac83$.
C: u3-area-between
P: {"x":[-0.5,2.6],"y":[-0.5,5],"step":0.5,"ystep":1,"fn":[{"f":"2*x","label":"y = 2x","at":2.2},{"f":"x*x","label":"y = x²","at":2.15}],"shade":[{"f":"2*x","g":"x*x","a":0,"b":2}],"pts":[[0,0,"(0,0)"],[2,4,"(2,4)"]]}
A: $\frac43$ square units.

#Q 3.6 3(ii)
Q: Sketch the region bounded by $y=\sqrt x$ and $y=x^2$ and find its area.
ref: printed as Q2(ii)
T: u3-area-between
S: Intersections: $\sqrt x=x^2\Rightarrow x=x^4\Rightarrow x(x^3-1)=0\Rightarrow x=0,1$.
S: On $(0,1)$, $\sqrt x>x^2$. Area $=\displaystyle\int_0^1(\sqrt x-x^2)\,dx=\left[\tfrac23x^{3/2}-\tfrac{x^3}3\right]_0^1=\tfrac23-\tfrac13$.
C: u3-area-between
P: {"x":[-0.2,1.4],"y":[-0.2,1.4],"step":0.2,"fn":[{"f":"sqrt(x)","label":"y = √x","dom":[0,1.4],"at":1.25},{"f":"x*x","label":"y = x²","at":1.12}],"shade":[{"f":"sqrt(x)","g":"x*x","a":0,"b":1}]}
A: $\frac13$ square unit.

#Q 3.6 4
Q: Find the area of the region bounded by $y=|x-3|$, $x=2$, $x=4$ and the $x$-axis.
ref: printed as Q3
T: u3-area-under, u3-abs-integral
S: Split at $x=3$: $\displaystyle\int_2^3(3-x)\,dx+\int_3^4(x-3)\,dx$.
C: u3-abs-integral
S: Each is $\tfrac12$ (two triangles with base 1 and height 1).
A: $1$ square unit.

#Q 3.6 5
Q: Find the area of the region bounded by $y=x^2-6x+8$, $x=2$, $x=4$ and the $x$-axis.
ref: printed as Q4
T: u3-area-under
S: $x^2-6x+8=(x-2)(x-4)$ is negative between $2$ and $4$, so the region lies below the axis.
C: f-factor
S: $\displaystyle\int_2^4(x^2-6x+8)\,dx=\left[\tfrac{x^3}3-3x^2+8x\right]_2^4=\tfrac{16}3-\tfrac{20}3=-\tfrac43$.
C: u3-area-under
S: Area is the absolute value: $\tfrac43$.
A: $\frac43$ square units.

#Q 3.6 6
Q: Find the area of the region bounded by $x=9-y^2$ and the $y$-axis.
ref: printed as Q5
T: u3-area-y
S: The curve meets the $y$-axis ($x=0$) where $y^2=9$: $y=\pm3$. Between these, $x=9-y^2\ge0$.
C: u3-area-y
S: Area $=\displaystyle\int_{-3}^3(9-y^2)\,dy=\left[9y-\tfrac{y^3}3\right]_{-3}^3=18-(-18)=36$.
A: $36$ square units.

#Q 3.6 7
Q: Find the ratio of the areas of the regions bounded by $y=x^2-4x+3$ and the coordinate axes.
ref: printed as Q6
T: u3-area-under
S: $y=(x-1)(x-3)$: roots $1$ and $3$; $y$-intercept $3$.
C: f-factor
S: Region 1 (between the curve and both axes, $0\le x\le1$, above the axis): $\displaystyle\int_0^1(x^2-4x+3)\,dx=\tfrac13-2+3=\tfrac43$.
S: Region 2 (between the curve and the $x$-axis, $1\le x\le3$, below): $\displaystyle\int_1^3(x^2-4x+3)\,dx=-\tfrac43$, area $\tfrac43$.
C: u3-area-under
A: The areas are equal: ratio $1:1$.

#Q 3.6 8
Q: For $f(x)=2x$ on $[0,3]$ find (a) the signed area, (b) the total area, (c) explain why they are equal.
ref: printed as Q7
T: u3-signed-area
S: (a) Signed area $=\displaystyle\int_0^32x\,dx=[x^2]_0^3=9$.
C: u3-signed-area
S: (b) $f(x)=2x\ge0$ on $[0,3]$, so the total area $\int_0^3|2x|\,dx$ is also $9$.
S: (c) They are equal because the graph never goes below the $x$-axis on $[0,3]$, so there are no negative parts to cancel.
A: (a) 9 (b) 9 (c) $f\ge0$ on $[0,3]$.

#Q 3.6 9
Q: Find the area of the region bounded by $y=(x-1)(x+1)(x-2)$ and the $x$-axis.
ref: printed as Q8
T: u3-area-under
S: Roots $-1,1,2$. Expand: $y=x^3-2x^2-x+2$. Sign: positive on $(-1,1)$ (e.g. $y(0)=2$), negative on $(1,2)$.
C: f-expand
S: $\displaystyle\int_{-1}^1y\,dx=\left[\tfrac{x^4}4-\tfrac{2x^3}3-\tfrac{x^2}2+2x\right]_{-1}^1=\tfrac{13}{12}+\tfrac{19}{12}=\tfrac83$.
S: $\displaystyle\int_1^2y\,dx=\tfrac23-\tfrac{13}{12}=-\tfrac5{12}$, area $\tfrac5{12}$.
C: u3-area-under
S: Total: $\tfrac83+\tfrac5{12}=\tfrac{37}{12}$.
P: {"x":[-1.5,2.5],"y":[-1,2.5],"step":0.5,"fn":[{"f":"(x-1)*(x+1)*(x-2)","label":"y","at":2.3}],"shade":[{"f":"(x-1)*(x+1)*(x-2)","g":"0","a":-1,"b":2}]}
A: $\frac{37}{12}$ square units.

#Q 3.6 10
Q: Find the area of the region bounded by $y=x+1$ and $y^2=2x+10$.
ref: printed as Q9
T: u3-area-y
S: Use $y$ as the variable: line $x=y-1$, parabola $x=\dfrac{y^2-10}2$.
C: u3-area-y
S: Intersections: $y^2=2(y-1)+10\Rightarrow y^2-2y-8=0\Rightarrow y=4$ or $y=-2$.
C: f-factor
S: The line is to the right (at $y=0$: $-1>-5$). Area $=\displaystyle\int_{-2}^4\left[(y-1)-\frac{y^2-10}2\right]dy=\int_{-2}^4\left(-\tfrac{y^2}2+y+4\right)dy$.
S: $=\left[-\tfrac{y^3}6+\tfrac{y^2}2+4y\right]_{-2}^4=\tfrac{40}3+\tfrac{14}3=18$.
A: $18$ square units.

#Q 3.7 3
Q: A particle has acceleration $a(t)=12t-36$ and $v(0)=30$. Find (a) $v(t)$, (b) the displacement for $1\le t\le6$, (c) the distance travelled for $1\le t\le6$.
T: u3-motion
S: (a) $v=\int(12t-36)\,dt=6t^2-36t+C$; $v(0)=30\Rightarrow C=30$. So $v=6t^2-36t+30=6(t-1)(t-5)$.
C: u3-motion
S: (b) Displacement $=\displaystyle\int_1^6v\,dt=\left[2t^3-18t^2+30t\right]_1^6=-36-14=-50$.
S: (c) $v$ changes sign at $t=5$: $\int_1^5v\,dt=-64$ and $\int_5^6v\,dt=14$. Distance $=64+14=78$.
C: u3-signed-area
A: (a) $v=6t^2-36t+30$ (b) $-50$ m (c) $78$ m.

#Q 3.7 4
Q: At $t=0$ a particle is at $2$ cm with velocity $5$ cm/s, and $a(t)=3-4(t+2)^{-3}$. Find its velocity and position as functions of $t$.
T: u3-motion
S: $v=\int\left(3-4(t+2)^{-3}\right)dt=3t+2(t+2)^{-2}+C$; $v(0)=\tfrac12+C=5\Rightarrow C=\tfrac92$.
C: u3-motion
S: $s=\int v\,dt=\tfrac32t^2-2(t+2)^{-1}+\tfrac92t+D$; $s(0)=-1+D=2\Rightarrow D=3$.
A: $v(t)=3t+\frac{2}{(t+2)^2}+\frac92$ cm/s; $s(t)=\frac32t^2+\frac92t-\frac{2}{t+2}+3$ cm.

#Q 3.7 5
Q: A projectile is fired upward from a height $s_0$ ft with velocity $v_0$ ft/s. Show that $s(t)=-\tfrac12gt^2+v_0t+s_0$.
T: u3-motion
S: Gravity gives $a(t)=-g$ (upward positive). $v=\int-g\,dt=-gt+C$; $v(0)=v_0\Rightarrow C=v_0$.
C: u3-motion
S: $s=\int(-gt+v_0)\,dt=-\tfrac12gt^2+v_0t+D$; $s(0)=s_0\Rightarrow D=s_0$. $\blacksquare$
A: $s(t)=-\frac12gt^2+v_0t+s_0$.

#Q 3.7 6
Q: Bacteria grow at a rate proportional to their number. Initially there are 200; after 2 hours there are 1800. Find (a) $N(t)$, (b) the number after 4 hours.
T: u3-growth-model
S: $\dfrac{dN}{dt}=kN\Rightarrow N=200e^{kt}$.
C: u3-growth-model
S: $1800=200e^{2k}\Rightarrow e^{2k}=9\Rightarrow e^k=3$. So $N=200\cdot3^t$.
S: $N(4)=200\cdot81=16200$.
A: (a) $N(t)=200\cdot3^t$ (b) $16200$ bacteria.

#Q 3.7 8
Q: Find the integer $b$ for which the average value of $f(x)=2+4x-3x^2$ on $[2,b]$ equals $-7$.
T: u3-average-value, f-factor
S: $\dfrac{1}{b-2}\displaystyle\int_2^b(2+4x-3x^2)\,dx=-7$, and $\int_2^b=\left[2x+2x^2-x^3\right]_2^b=-b^3+2b^2+2b-4$.
C: u3-average-value
S: $-b^3+2b^2+2b-4=-7(b-2)\Rightarrow b^3-2b^2-9b+18=0$.
S: Group: $b^2(b-2)-9(b-2)=(b-2)(b-3)(b+3)=0$.
C: f-factor
S: $b>2$ for the interval to make sense, so $b=3$.
A: $b=3$.

#Q 3.7 9
Q: If $\displaystyle\int_0^2f(x)\,dx=5$ and the average value of $f$ on $[0,4]$ is twice its average value on $[0,2]$, find $\displaystyle\int_2^4f(x)\,dx$.
T: u3-average-value, u3-def-properties
S: Average on $[0,2]$ $=\tfrac52$. Average on $[0,4]$ $=2\cdot\tfrac52=5$, so $\int_0^4f=4\times5=20$.
C: u3-average-value
S: $\int_2^4f=\int_0^4f-\int_0^2f=20-5$.
C: u3-def-properties
A: $\int_2^4f(x)\,dx=15$.

#Q 3.7 13
Q: A drug is given every 8 hours; one dose gives concentration $C(t)=12e^{-0.2t}$. (a) Doses at $t=0,8,16$: find the contributions at $t=10$ and the total. (b) A student uses $12e^{-0.2\times10}\approx1.624$ as the concentration at $t=10$. What is wrong? (c) Find the concentration just before and just after the third dose ($t=16$). (d) Write $C_{\text{total}}(t)$ for $16\le t\le24$.
T: u3-dosage
S: (a) At $t=10$ two doses have been given: first $12e^{-0.2(10)}=12e^{-2}\approx1.624$; second $12e^{-0.2(10-8)}=12e^{-0.4}\approx8.044$. The third dose has not been given yet. Total $\approx9.67$.
C: u3-dosage
S: (b) The student counted only the first dose and forgot the contribution of the second dose given at $t=8$.
S: (c) Just before $t=16$: $12e^{-3.2}+12e^{-1.6}\approx0.489+2.423=2.912$. Just after: add the new dose $12$: $\approx14.912$.
S: (d) $C_{\text{total}}(t)=12e^{-0.2t}+12e^{-0.2(t-8)}+12e^{-0.2(t-16)}$ for $16\le t\le24$.
A: (a) $1.624+8.044\approx9.67$ (b) missed the second dose (c) $\approx2.91$ before, $\approx14.91$ after (d) $12e^{-0.2t}+12e^{-0.2(t-8)}+12e^{-0.2(t-16)}$.
`);

M12.addMCQs(3, String.raw`
#M
c: u3-standard-integrals
Q: $\displaystyle\int\frac{dx}{x}=$
O: $\frac{x^0}{0}+c$
O*: $\ln|x|+c$
O: $-\frac{1}{x^2}+c$
O: $x\ln x+c$
E: The power rule fails for $n=-1$; the answer is $\ln|x|$.

#M
c: u3-standard-integrals
Q: $\displaystyle\int\sec^2x\,dx=$
O*: $\tan x+c$
O: $\sec x\tan x+c$
O: $\frac{\sec^3x}{3}+c$
O: $-\cot x+c$
E: $(\tan x)'=\sec^2x$.

#M
c: u3-standard-integrals
Q: $\displaystyle\int a^x\,dx=$
O: $a^x\ln a+c$
O*: $\dfrac{a^x}{\ln a}+c$
O: $\dfrac{a^{x+1}}{x+1}+c$
O: $xa^{x-1}+c$
E: Since $(a^x)'=a^x\ln a$, divide by $\ln a$.

#M
c: u3-integral-rules
Q: $\displaystyle\int\frac{f'(x)}{f(x)}\,dx=$
O: $\frac{1}{f(x)}+c$
O*: $\ln|f(x)|+c$
O: $f(x)f'(x)+c$
O: $\frac{[f(x)]^2}{2}+c$
E: Derivative over function gives a logarithm.

#M
c: u3-integral-rules
Q: $\displaystyle\int\cos(3x+1)\,dx=$
O: $\sin(3x+1)+c$
O*: $\frac13\sin(3x+1)+c$
O: $3\sin(3x+1)+c$
O: $-\frac13\sin(3x+1)+c$
E: Linear inside: divide by the coefficient of $x$.

#M
c: u3-trig-integrals
Q: $\displaystyle\int\tan^2x\,dx=$
O: $\frac{\tan^3x}{3}+c$
O*: $\tan x-x+c$
O: $\sec^2x+c$
O: $\tan x+x+c$
E: $\tan^2x=\sec^2x-1$.

#M
c: u3-special-forms
Q: $\displaystyle\int\frac{dx}{a^2+x^2}=$
O: $\tan^{-1}\frac xa+c$
O*: $\frac1a\tan^{-1}\frac xa+c$
O: $\frac{1}{2a}\ln\left|\frac{a+x}{a-x}\right|+c$
O: $\sin^{-1}\frac xa+c$
E: The $\frac1a$ in front is essential.

#M
c: u3-special-forms
Q: $\displaystyle\int\frac{dx}{\sqrt{a^2-x^2}}=$
O*: $\sin^{-1}\frac xa+c$
O: $\frac1a\sin^{-1}\frac xa+c$
O: $\cos^{-1}\frac ax+c$
O: $\ln|x+\sqrt{a^2-x^2}|+c$
E: Standard result from $x=a\sin\theta$.

#M
c: u3-by-parts
Q: The integration by parts formula is
O: $\int u\,dv=uv+\int v\,du$
O*: $\int u\,dv=uv-\int v\,du$
O: $\int u\,dv=u\,dv-v\,du$
O: $\int u\,dv=\int u\,du\int v\,dv$
E: It comes from integrating the product rule.

#M
c: u3-by-parts
Q: $\displaystyle\int\ln x\,dx=$
O: $\frac1x+c$
O: $x\ln x+c$
O*: $x\ln x-x+c$
O: $\frac{(\ln x)^2}{2}+c$
E: Parts with $u=\ln x$, $dv=dx$.

#M
c: u3-ex-pattern
Q: $\displaystyle\int e^x\left(\frac1x-\frac1{x^2}\right)dx=$
O*: $\dfrac{e^x}{x}+c$
O: $e^x\ln x+c$
O: $\dfrac{e^x}{x^2}+c$
O: $-\dfrac{e^x}{x}+c$
E: $f=\frac1x$ and $f'=-\frac1{x^2}$, so the answer is $e^xf$.

#M
c: u3-partial-fractions
Q: The partial-fraction form of $\dfrac{2x+3}{(x-1)(x^2+4)}$ is
O: $\frac A{x-1}+\frac B{x^2+4}$
O*: $\frac A{x-1}+\frac{Bx+C}{x^2+4}$
O: $\frac A{x-1}+\frac B{x+2}+\frac C{x-2}$
O: $\frac{Ax+B}{x-1}+\frac C{x^2+4}$
E: An irreducible quadratic factor needs a linear numerator.

#M
c: u3-definite
Q: $\displaystyle\int_0^1x^2\,dx=$
O: $1$
O: $\frac12$
O*: $\frac13$
O: $\frac23$
E: $\left[\frac{x^3}{3}\right]_0^1=\frac13$.

#M
c: u3-def-properties
Q: $\displaystyle\int_b^af(x)\,dx$ equals
O: $\int_a^bf(x)\,dx$
O*: $-\int_a^bf(x)\,dx$
O: $0$
O: $2\int_a^bf(x)\,dx$
E: Reversing the limits changes the sign.

#M
c: u3-even-odd
Q: $\displaystyle\int_{-3}^3x^5\cos x\,dx=$
O*: $0$
O: $2\int_0^3x^5\cos x\,dx$
O: $3^6$
O: $-1$
E: $x^5\cos x$ is odd, so the integral over a symmetric interval is zero.

#M
c: u3-king-property
Q: For any continuous $f$, $\displaystyle\int_0^af(x)\,dx=$
O: $\int_0^af(x-a)\,dx$
O*: $\int_0^af(a-x)\,dx$
O: $\int_0^af(-x)\,dx$
O: $-\int_0^af(a-x)\,dx$
E: Substitute $u=a-x$ and flip the limits back.

#M
c: u3-ftc1
Q: $\dfrac{d}{dx}\displaystyle\int_0^x\sqrt{1+t^3}\,dt=$
O*: $\sqrt{1+x^3}$
O: $\sqrt{1+t^3}$
O: $\frac{3x^2}{2\sqrt{1+x^3}}$
O: $0$
E: The fundamental theorem returns the integrand at the upper limit.

#M
c: u3-area-under
Q: The area between $y=x^2-1$ and the $x$-axis from $x=-1$ to $x=1$ is
O: $-\frac43$
O*: $\frac43$
O: $\frac23$
O: $0$
E: $\int_{-1}^1(x^2-1)\,dx=-\frac43$; area is the absolute value.

#M
c: u3-average-value
Q: The average value of $f(x)=x$ on $[0,4]$ is
O: $4$
O*: $2$
O: $8$
O: $1$
E: $\frac14\int_0^4x\,dx=\frac14\cdot8=2$.

#M
c: u3-motion
Q: If $v(t)$ is the velocity, $\displaystyle\int_{t_1}^{t_2}|v(t)|\,dt$ gives the
O: displacement
O*: distance travelled
O: acceleration
O: average velocity
E: Taking the absolute value counts motion in both directions as positive.
`);
