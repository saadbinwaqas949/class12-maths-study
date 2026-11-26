/* Unit 4 · Differential Equations */
M12.addConcepts(4, String.raw`
#C u4-de-basics Differential equations: order and degree
pre: u2-higher
R: A differential equation contains a derivative of the unknown function. Its **order** is the highest derivative present; its **degree** is the power of that highest derivative once the equation is a polynomial in the derivatives.
B: **Order**: look for the highest derivative. $y'''$ makes the order 3.
**Degree**: the exponent of that highest-order derivative, *after* clearing radicals and fractions in the derivatives. If a derivative sits inside a function such as $\sin(y')$, $e^{y'}$ or $\ln y''$, the equation is not a polynomial in the derivatives and the degree is **not defined**.
Functions of $x$ or $y$ themselves (like $e^y\sin x$) do not affect the degree.
X: First-order, first-degree equations can be written $\frac{dy}{dx}=f(x,y)$ or $M(x,y)\,dx+N(x,y)\,dy=0$. Unit 4 studies two kinds: separable and homogeneous.
E: $(y''')^2+(y')^4=x$: highest derivative $y'''$ (order 3), raised to the power 2 (degree 2).
E: $e^{y''}+y=x$: order 2; degree not defined because $y''$ is inside the exponential.
M: The degree is the power of the **highest-order** derivative, not the largest power anywhere.

#C u4-solution Solutions, general solutions and initial value problems
pre: u4-de-basics, u3-antiderivative
R: A solution is a function that satisfies the equation. The general solution of a first-order equation has one arbitrary constant; an initial condition $y(x_0)=y_0$ fixes it (a particular solution).
B: Solving $\frac{dy}{dx}=f(x,y)$ means finding every $y$ that makes the equation true. Because integration produces a constant, the general solution is a whole family of curves.
An **initial value problem (IVP)** gives one point $(x_0,y_0)$ on the curve; substitute it into the general solution to find the constant.
X: You can always check a solution by differentiating it and substituting back into the equation.
E: $\frac{dy}{dx}=2x$, $y(0)=3$: the general solution is $y=x^2+C$; at $x=0$, $3=C$, so $y=x^2+3$.
M: Finding $C$ before integrating (the constant appears only after integration).

#C u4-separable Separable equations
pre: u4-solution, u3-integral-rules
R: If $\frac{dy}{dx}=g(x)h(y)$, separate: $\frac{dy}{h(y)}=g(x)\,dx$, then integrate both sides and add one constant.
F: $$\frac{dy}{dx}=g(x)\,h(y)\quad\Longrightarrow\quad \int\frac{dy}{h(y)}=\int g(x)\,dx+C$$
B: **Steps:**
1. Move every $y$ (with $dy$) to one side and every $x$ (with $dx$) to the other.
2. Integrate both sides.
3. Add a single constant (on one side).
4. Simplify; if asked, solve for $y$.
It helps to write the constant as $\ln|C|$ when the other terms are logarithms, so that the answer can be combined: $\ln|y|=\ln|x|+\ln|C|\Rightarrow y=Cx$.
X: Recognising separability: the right side must factor into (function of $x$) $\times$ (function of $y$). For example $e^{x-y}=e^x\cdot e^{-y}$ is separable, but $\ln x-\ln y$ is a difference, not a product, so it is not separable (it is homogeneous instead).
E: $\frac{dy}{dx}=y\cos x$: $\frac{dy}{y}=\cos x\,dx\Rightarrow\ln|y|=\sin x+C\Rightarrow y=Ae^{\sin x}$.
M: Writing two constants, one on each side. One is enough.

#C u4-homogeneous Homogeneous equations
pre: u4-separable
R: If $\frac{dy}{dx}$ can be written as a function of $\frac yx$, substitute $y=vx$ (so $\frac{dy}{dx}=v+x\frac{dv}{dx}$); the equation becomes separable in $v$ and $x$.
F: $$y=vx,\qquad \frac{dy}{dx}=v+x\frac{dv}{dx}$$
B: **Test:** every term in the numerator and denominator has the same total degree in $x$ and $y$ (e.g. $x^2$, $xy$, $y^2$ are all degree 2). Equivalently, replacing $x$ by 1 and $y$ by $v$ leaves a function of $v$ only.
**Steps:**
1. Put $\frac{dy}{dx}=F(v)$, with $v=\frac yx$.
2. Replace $\frac{dy}{dx}$ by $v+x\frac{dv}{dx}$.
3. Separate: $\frac{dv}{F(v)-v}=\frac{dx}{x}$.
4. Integrate, then replace $v$ by $\frac yx$.
X: Why $v+xv'$? Differentiate $y=vx$ with the product rule: $y'=v\cdot1+x\cdot v'$.
E: $\frac{dy}{dx}=\frac{x+y}{y-x}=\frac{1+v}{v-1}$. Then $v+xv'=\frac{1+v}{v-1}$ gives $xv'=\frac{1+2v-v^2}{v-1}$, which separates.
M: Forgetting the $v$ in $v+xv'$, so the $v$ terms do not cancel properly.

#C u4-growth-decay Growth and decay: $\frac{dN}{dt}=kN$
pre: u4-separable, f-logs, f-e-number
R: Separating $\frac{dN}{dt}=kN$ gives $N=N_0e^{kt}$; use the data to find $N_0$ and $k$, then predict.
F: $$\frac{dN}{dt}=kN\ \Longrightarrow\ N(t)=N_0e^{kt},\qquad k=\frac1t\ln\frac{N(t)}{N_0}$$
B: "The rate of change of $N$ is proportional to $N$" translates to $\frac{dN}{dt}=kN$, with $k>0$ for growth and $k<0$ for decay.
**Derivation:** $\frac{dN}N=k\,dt\Rightarrow\ln N=kt+c\Rightarrow N=e^{c}e^{kt}=N_0e^{kt}$, where $N_0=N(0)$.
**Steps for a word problem:**
1. Choose $t=0$ (often "now" or "initially").
2. Use one data point to find $k$: $e^{kt}=\frac{N}{N_0}$.
3. Use the formula to answer the question (future, past or time).
A useful shortcut: $e^{kt}=\left(e^{k}\right)^t$, so if $e^{5k}=0.9$ then $N(t)=N_0(0.9)^{t/5}$.
X: Times in the past are negative if $t=0$ is "now". For example, "two hours ago" is $t=-2$.
E: $N(0)=500$, $N(4)=800$: $e^{4k}=1.6$, so $N(t)=500(1.6)^{t/4}$.
M: Mixing up which moment is $t=0$.

#C u4-half-life Half-life
pre: u4-growth-decay
R: The half-life $T$ is the time for a decaying amount to halve: $m=m_0\left(\frac12\right)^{t/T}$, and the decay constant is $k=\frac{\ln2}{T}$.
F: $$m(t)=m_0e^{-kt}=m_0\Big(\tfrac12\Big)^{t/T},\qquad k=\frac{\ln2}{T}$$
B: After one half-life, $\frac12$ remains; after two, $\frac14$; after $n$ half-lives, $\left(\frac12\right)^n$.
So 200 g with a half-life of 5 h becomes 100, 50, 25 g after 5, 10, 15 h.
M: The amount after 3 half-lives is $\frac18$ of the original, not $\frac13$.

#C u4-motion-de Motion as a differential equation
pre: u4-solution
R: $\frac{dv}{dt}=a(t)$ and $\frac{ds}{dt}=v(t)$ are first-order differential equations: integrate and use the initial values.
B: Given the acceleration, integrate once for velocity (use $v(0)$) and again for position (use $s(0)$).
E: $a=6t$, $v(0)=2$: $v=3t^2+2$.
`);

M12.addQuestions(4, String.raw`
#Q 4.1 1
Q: Find the order and degree (if defined) of: (i) $y'''+7y''-9xyy'+x^2y=0$ (ii) $(y'')^3+y'=1$ (iii) $y''+\sin(y')=0$ (iv) $y'+e^y\sin x=0$.
T: u4-de-basics
S: (i) The highest derivative is $y'''$, appearing to the first power: **order 3, degree 1**.
C: u4-de-basics
S: (ii) The highest derivative is $y''$, raised to the power 3: **order 2, degree 3**.
S: (iii) The highest derivative is $y''$ (order 2), but $y'$ appears inside $\sin$, so the equation is not a polynomial in the derivatives: **degree not defined**.
W: The degree only makes sense when every derivative appears in a polynomial way.
!:
S: (iv) Only $y'$ appears, to the first power: **order 1, degree 1**. ($e^y$ is a function of $y$, not of a derivative, so it does not affect the degree.)
A: (i) 3, 1 (ii) 2, 3 (iii) 2, not defined (iv) 1, 1.

#Q 4.2 1
Q: Which of the following are separable and which are homogeneous? (i) $x\frac{dy}{dx}=1+y$ (ii) $x^2(2y+1)\,dy-dx=0$ (iii) $(2xy+x^2)\,dy-y^2\,dx=0$ (iv) $\frac{dy}{dx}=e^{x-y}$ (v) $\frac{dT}{dt}+k(T-T_m)=0$ (vi) $\frac{dy}{dx}=\ln x-\ln y$, $x,y>0$
T: u4-separable, u4-homogeneous
S: (i) $\dfrac{dy}{1+y}=\dfrac{dx}{x}$: **separable**.
C: u4-separable
S: (ii) $(2y+1)\,dy=\dfrac{dx}{x^2}$: **separable**.
S: (iii) $\dfrac{dy}{dx}=\dfrac{y^2}{2xy+x^2}$: every term has degree 2, so it is a function of $\frac yx$: **homogeneous**.
C: u4-homogeneous
S: (iv) $e^{x-y}=e^x\cdot e^{-y}$, so $e^y\,dy=e^x\,dx$: **separable**.
S: (v) $\dfrac{dT}{T-T_m}=-k\,dt$: **separable**.
S: (vi) $\ln x-\ln y=\ln\dfrac xy=-\ln\dfrac yx$, a function of $\frac yx$: **homogeneous** (it is a difference, not a product, so it does not separate).
!:
A: Separable: (i), (ii), (iv), (v). Homogeneous: (iii), (vi).

#Q 4.2 2
Q: Find the general solution of $\dfrac{dy}{dx}=\left(\dfrac{1-y^2}{1-x^2}\right)^{1/2}$.
T: u4-separable, u3-special-forms
S: Separate: $\dfrac{dy}{\sqrt{1-y^2}}=\dfrac{dx}{\sqrt{1-x^2}}$.
C: u4-separable
S: Integrate: $\sin^{-1}y=\sin^{-1}x+C$.
C: u3-special-forms
A: $\sin^{-1}y-\sin^{-1}x=C$.

#Q 4.2 3
Q: Find the general solution of $\dfrac{dy}{dx}=e^{x-y}$.
T: u4-separable
S: $e^{x-y}=\dfrac{e^x}{e^y}$, so $e^y\,dy=e^x\,dx$.
C: u4-separable, f-indices
S: Integrate: $e^y=e^x+C$.
A: $e^y=e^x+C$ (or $y=\ln(e^x+C)$).

#Q 4.2 4
Q: Find the general solution of $\dfrac{dy}{dx}=\sqrt y\cos^2\sqrt y$.
T: u4-separable, u3-substitution
S: Separate: $\dfrac{dy}{\sqrt y\cos^2\sqrt y}=dx$, i.e. $\dfrac{\sec^2\sqrt y}{\sqrt y}\,dy=dx$.
C: u4-separable
S: With $u=\sqrt y$, $du=\dfrac{dy}{2\sqrt y}$: $\int\dfrac{\sec^2\sqrt y}{\sqrt y}dy=2\int\sec^2u\,du=2\tan\sqrt y$.
C: u3-substitution
A: $2\tan\sqrt y=x+C$.

#Q 4.2 5
Q: Find the general solution of $\sqrt x\,\dfrac{dy}{dx}=e^{y+\sqrt x}$.
T: u4-separable, u3-substitution
S: $e^{y+\sqrt x}=e^ye^{\sqrt x}$: separate: $e^{-y}\,dy=\dfrac{e^{\sqrt x}}{\sqrt x}\,dx$.
C: u4-separable
S: Integrate: $-e^{-y}=2e^{\sqrt x}+C$ (using $u=\sqrt x$ on the right).
C: u3-substitution
A: $e^{-y}+2e^{\sqrt x}=C$.

#Q 4.2 6
Q: Find the general solution of $\dfrac{dy}{dx}=2x\sqrt{1-y^2}$.
T: u4-separable
S: $\dfrac{dy}{\sqrt{1-y^2}}=2x\,dx\Rightarrow\sin^{-1}y=x^2+C$.
C: u4-separable, u3-special-forms
A: $\sin^{-1}y=x^2+C$, i.e. $y=\sin(x^2+C)$.

#Q 4.2 7
Q: Find the general solution of $\dfrac{dy}{dx}=\dfrac{1+x}{(1-x)(1+x^2)}$.
T: u4-separable, u3-partial-fractions
S: $y=\displaystyle\int\frac{1+x}{(1-x)(1+x^2)}dx$. Partial fractions: $\dfrac{1+x}{(1-x)(1+x^2)}=\dfrac{A}{1-x}+\dfrac{Bx+C}{1+x^2}$.
C: u3-partial-fractions
S: $1+x=A(1+x^2)+(Bx+C)(1-x)$: $x=1\Rightarrow A=1$; $x^2$: $0=A-B\Rightarrow B=1$; constant: $1=A+C\Rightarrow C=0$.
S: $y=\displaystyle\int\left(\frac1{1-x}+\frac{x}{1+x^2}\right)dx=-\ln|1-x|+\tfrac12\ln(1+x^2)+C$.
A: $y=\ln\dfrac{\sqrt{1+x^2}}{|1-x|}+C$.

#Q 4.2 8
Q: Find the general solution of $x^2\,dx+(1-x^2)\,dy=0$.
T: u4-separable, u3-improper-fraction
S: $dy=\dfrac{x^2}{x^2-1}\,dx=\left(1+\dfrac{1}{x^2-1}\right)dx$.
C: u3-improper-fraction
S: Integrate: $y=x+\dfrac12\ln\left|\dfrac{x-1}{x+1}\right|+C$.
C: u3-special-forms
A: $y=x+\frac12\ln\left|\frac{x-1}{x+1}\right|+C$.

#Q 4.2 9
Q: Find the general solution of $y-x\dfrac{dy}{dx}=2\left(y^2+\dfrac{dy}{dx}\right)$.
T: u4-separable, u3-partial-fractions
S: Collect the derivative: $y-2y^2=(x+2)\dfrac{dy}{dx}$, so $\dfrac{dy}{y(1-2y)}=\dfrac{dx}{x+2}$.
C: u4-separable
S: $\dfrac{1}{y(1-2y)}=\dfrac1y+\dfrac{2}{1-2y}$, which integrates to $\ln|y|-\ln|1-2y|$.
C: u3-partial-fractions
!:
S: $\ln\left|\dfrac{y}{1-2y}\right|=\ln|x+2|+\ln|C|\Rightarrow\dfrac{y}{1-2y}=C(x+2)$.
A: $y=C(x+2)(1-2y)$.

#Q 4.2 10
Q: Find the general solution of $\sec^2x\tan y\,dx+\sec^2y\tan x\,dy=0$.
T: u4-separable, u3-integral-rules
S: Divide by $\tan x\tan y$: $\dfrac{\sec^2x}{\tan x}dx+\dfrac{\sec^2y}{\tan y}dy=0$.
C: u4-separable
S: Each term is (derivative)/(function): $\ln|\tan x|+\ln|\tan y|=\ln|C|$.
C: u3-integral-rules
A: $\tan x\tan y=C$.

#Q 4.2 11
Q: Find the general solution of $(e^{2x}+e^{-2x})\,dy+(e^{-2x}-e^{2x})\,dx=0$.
T: u4-separable, u3-integral-rules
S: $dy=\dfrac{e^{2x}-e^{-2x}}{e^{2x}+e^{-2x}}\,dx$.
C: u4-separable
S: The numerator is half the derivative of the denominator: $y=\tfrac12\ln(e^{2x}+e^{-2x})+C$.
C: u3-integral-rules
A: $y=\frac12\ln(e^{2x}+e^{-2x})+C$.

#Q 4.2 12
Q: Find the general solution of $x\sin x\,dx+\ln y\,dy=0$.
T: u4-separable, u3-by-parts
S: $\int\ln y\,dy=-\int x\sin x\,dx$.
C: u4-separable
S: Both by parts: $\int\ln y\,dy=y\ln y-y$ and $\int x\sin x\,dx=-x\cos x+\sin x$.
C: u3-by-parts
S: So $y\ln y-y=x\cos x-\sin x+C$.
A: $y\ln y=y+x\cos x-\sin x+C$.

#Q 4.2 13
Q: Find the general solution of $\dfrac{dy}{dx}=\cos^2\dfrac yx+\dfrac yx$.
T: u4-homogeneous
S: Put $y=vx$: $v+x\dfrac{dv}{dx}=\cos^2v+v\Rightarrow x\dfrac{dv}{dx}=\cos^2v$.
C: u4-homogeneous
S: Separate: $\sec^2v\,dv=\dfrac{dx}x\Rightarrow\tan v=\ln|x|+\ln|C|$.
C: u4-separable
A: $\tan\frac yx=\ln|Cx|$.

#Q 4.2 14
Q: Find the general solution of $(y^2+2xy)\,dx+x^2\,dy=0$.
T: u4-homogeneous, u3-partial-fractions
S: $\dfrac{dy}{dx}=-\dfrac{y^2+2xy}{x^2}=-(v^2+2v)$ with $y=vx$.
C: u4-homogeneous
S: $v+xv'=-v^2-2v\Rightarrow xv'=-v(v+3)\Rightarrow\dfrac{dv}{v(v+3)}=-\dfrac{dx}x$.
S: $\dfrac1{v(v+3)}=\dfrac13\left(\dfrac1v-\dfrac1{v+3}\right)$: $\ \dfrac13\ln\left|\dfrac{v}{v+3}\right|=-\ln|x|+\ln|C|$.
C: u3-partial-fractions
!:
S: So $\dfrac v{v+3}=\dfrac{C}{x^3}$, and $\dfrac{v}{v+3}=\dfrac{y}{y+3x}$.
A: $x^3y=C(y+3x)$.

#Q 4.2 15
Q: Find the general solution of $(x^2+3y^2)\,dx-2xy\,dy=0$.
T: u4-homogeneous
S: $\dfrac{dy}{dx}=\dfrac{x^2+3y^2}{2xy}=\dfrac{1+3v^2}{2v}$.
C: u4-homogeneous
S: $v+xv'=\dfrac{1+3v^2}{2v}\Rightarrow xv'=\dfrac{1+v^2}{2v}\Rightarrow\dfrac{2v\,dv}{1+v^2}=\dfrac{dx}{x}$.
S: $\ln(1+v^2)=\ln|x|+\ln|C|\Rightarrow1+\dfrac{y^2}{x^2}=Cx$.
C: u3-integral-rules
A: $x^2+y^2=Cx^3$.

#Q 4.2 16
Q: Find the general solution of $(x^2+xy+y^2)\,dx-x^2\,dy=0$.
T: u4-homogeneous
S: $\dfrac{dy}{dx}=1+v+v^2$, so $v+xv'=1+v+v^2\Rightarrow xv'=1+v^2$.
C: u4-homogeneous
S: $\dfrac{dv}{1+v^2}=\dfrac{dx}x\Rightarrow\tan^{-1}v=\ln|x|+\ln|C|$.
C: u3-special-forms
A: $\tan^{-1}\frac yx=\ln|Cx|$.

#Q 4.2 17
Q: Find the general solution of $x\dfrac{dy}{dx}=xe^{-y/x}+y$.
T: u4-homogeneous
S: Divide by $x$: $\dfrac{dy}{dx}=e^{-v}+v$. Then $v+xv'=e^{-v}+v\Rightarrow xv'=e^{-v}$.
C: u4-homogeneous
S: $e^v\,dv=\dfrac{dx}x\Rightarrow e^v=\ln|x|+\ln|C|$.
A: $e^{y/x}=\ln|Cx|$.

#Q 4.2 18
Q: Find the general solution of $x\dfrac{dy}{dx}-y=\dfrac{x^4+x^3y}{y^3-x^3}$.
T: u4-homogeneous, u3-improper-fraction
S: With $y=vx$: $xy'-y=x(v+xv')-vx=x^2v'$, and the right side is $\dfrac{x^4(1+v)}{x^3(v^3-1)}=\dfrac{x(1+v)}{v^3-1}$.
C: u4-homogeneous
!:
S: So $xv'=\dfrac{1+v}{v^3-1}\Rightarrow\dfrac{v^3-1}{v+1}\,dv=\dfrac{dx}{x}$.
S: Divide: $\dfrac{v^3-1}{v+1}=v^2-v+1-\dfrac{2}{v+1}$.
C: u3-improper-fraction
S: Integrate: $\dfrac{v^3}3-\dfrac{v^2}2+v-2\ln|v+1|=\ln|x|+C$.
S: Multiply by $6$ and put $v=\frac yx$: $\dfrac{2y^3}{x^3}-\dfrac{3y^2}{x^2}+\dfrac{6y}x=12\ln\left|\dfrac{x+y}{x}\right|+6\ln|x|+C$, i.e.
$$2y^3-3xy^2+6x^2y=6x^3\ln\left|\frac{C(x+y)^2}{x}\right|.$$
A: $2y^3-3xy^2+6x^2y=6x^3\ln\left|\dfrac{C(x+y)^2}{x}\right|$.

#Q 4.2 19
Q: Find the general solution of $y-x\dfrac{dy}{dx}=3\left(1+x\dfrac{dy}{dx}\right)$.
T: u4-separable
S: $y-3=4x\dfrac{dy}{dx}\Rightarrow\dfrac{dy}{y-3}=\dfrac{dx}{4x}$.
C: u4-separable
S: $\ln|y-3|=\tfrac14\ln|x|+\ln|C|\Rightarrow y-3=Cx^{1/4}$.
A: $y=3+Cx^{1/4}$.

#Q 4.2 20
Q: Find the general solution of $y\,dx+x\,dy=0$.
T: u4-separable
S: $\dfrac{dy}{y}=-\dfrac{dx}{x}\Rightarrow\ln|y|=-\ln|x|+\ln|C|$.
C: u4-separable
S: (Or notice $y\,dx+x\,dy=d(xy)=0$.)
A: $xy=C$.

#Q 4.2 21
Q: Find the general solution of $\dfrac{dy}{dx}+\dfrac{2xy}{2y+1}=x$.
T: u4-separable, f-fractions
S: $\dfrac{dy}{dx}=x-\dfrac{2xy}{2y+1}=\dfrac{x(2y+1)-2xy}{2y+1}=\dfrac{x}{2y+1}$.
C: f-fractions
!:
S: Separate: $(2y+1)\,dy=x\,dx\Rightarrow y^2+y=\dfrac{x^2}2+C$.
C: u4-separable
A: $y^2+y=\frac{x^2}{2}+C$.

#Q 4.2 22
Q: Solve the initial value problem $\dfrac{dy}{dx}-x=xy^2$, $y(0)=1$.
T: u4-separable, u4-solution
S: $\dfrac{dy}{dx}=x(1+y^2)\Rightarrow\dfrac{dy}{1+y^2}=x\,dx$.
C: u4-separable
S: $\tan^{-1}y=\dfrac{x^2}2+C$.
S: $y(0)=1$: $\tan^{-1}1=\dfrac\pi4=C$.
C: u4-solution
A: $\tan^{-1}y=\frac{x^2}{2}+\frac{\pi}{4}$, i.e. $y=\tan\left(\frac{x^2}2+\frac\pi4\right)$.

#Q 4.2 23
Q: Solve the initial value problem $\dfrac{ds}{dt}+2st=0$, $s=4e$ when $t=0$.
T: u4-separable, u4-solution
S: $\dfrac{ds}{s}=-2t\,dt\Rightarrow\ln s=-t^2+C\Rightarrow s=Ae^{-t^2}$.
C: u4-separable
S: $s(0)=A=4e$, so $s=4e\cdot e^{-t^2}$.
C: u4-solution
A: $s=4e^{1-t^2}$.

#Q 4.2 24
Q: Solve the initial value problem $(y+\sqrt{x^2+y^2})\,dx-x\,dy=0$, $y=0$ when $x=1$.
N: The printed version has $dy$ in both terms and the condition $y=0$ at $x=0$, which cannot fix the constant. This is the intended problem (it matches the book's answer).
T: u4-homogeneous, u4-solution, u3-special-forms
S: $\dfrac{dy}{dx}=\dfrac{y+\sqrt{x^2+y^2}}{x}=v+\sqrt{1+v^2}$ (for $x>0$).
C: u4-homogeneous
S: $v+xv'=v+\sqrt{1+v^2}\Rightarrow\dfrac{dv}{\sqrt{1+v^2}}=\dfrac{dx}x$.
S: $\ln\left(v+\sqrt{1+v^2}\right)=\ln x+\ln C\Rightarrow v+\sqrt{1+v^2}=Cx$.
C: u3-special-forms
S: Multiply by $x$: $y+\sqrt{x^2+y^2}=Cx^2$. At $(1,0)$: $0+1=C$.
C: u4-solution
A: $y+\sqrt{x^2+y^2}=x^2$.

#Q 4.2 25
Q: Solve the initial value problem $\dfrac{dy}{dx}=\dfrac{x+y}{x}$, $y(1)=1$.
T: u4-homogeneous, u4-solution
S: $\dfrac{dy}{dx}=1+v$, so $v+xv'=1+v\Rightarrow xv'=1\Rightarrow dv=\dfrac{dx}x$.
C: u4-homogeneous
S: $v=\ln|x|+C\Rightarrow y=x\ln|x|+Cx$.
S: $y(1)=1$: $1=0+C\Rightarrow C=1$.
C: u4-solution
A: $y=x\ln|x|+x$.

#Q 4.3 1
Q: A particle moves with acceleration $a=2t-7$. Find (i) $v$ in terms of $t$ if $v=10$ m/s when $t=0$; (ii) the distance $s$ in terms of $t$ if $s=0$ when $t=0$.
T: u4-motion-de, u3-motion
S: (i) $\dfrac{dv}{dt}=2t-7\Rightarrow v=t^2-7t+C$; $v(0)=10\Rightarrow C=10$.
C: u4-motion-de
S: (ii) $\dfrac{ds}{dt}=t^2-7t+10\Rightarrow s=\dfrac{t^3}3-\dfrac{7t^2}2+10t+D$; $s(0)=0\Rightarrow D=0$.
A: $v=t^2-7t+10$; $s=\frac{t^3}{3}-\frac{7t^2}{2}+10t$.

#Q 4.3 2
Q: A culture initially has 1000 bacteria and 900 after five hours. Use a differential equation to find the number of bacteria 7 hours from the start.
T: u4-growth-decay
S: Model $\dfrac{dN}{dt}=kN\Rightarrow N=1000e^{kt}$.
C: u4-growth-decay
S: $900=1000e^{5k}\Rightarrow e^{5k}=0.9\Rightarrow k=\dfrac{\ln0.9}{5}\approx-0.02107$.
S: $N(7)=1000e^{7k}=1000(0.9)^{7/5}\approx862.9$.
A: About $863$ bacteria.

#Q 4.3 3
Q: The number of bacteria is now 1000; three hours ago it was 750. How many were there five hours ago?
T: u4-growth-decay
S: Take $t=0$ as now: $N=1000e^{kt}$, and "three hours ago" is $t=-3$.
C: u4-growth-decay
S: $750=1000e^{-3k}\Rightarrow e^{-3k}=0.75\Rightarrow k=-\dfrac{\ln0.75}{3}\approx0.0959$.
S: Five hours ago ($t=-5$): $N=1000e^{-5k}=1000(0.75)^{5/3}\approx619.1$.
A: About $619$ bacteria.

#Q 4.3 4
Q: A radioactive isotope has a half-life of 12 hours and an initial mass of 160 g. Find (a) the decay constant, (b) the mass after 36 hours, (c) when only 10 g remain.
T: u4-half-life, u4-growth-decay
S: (a) $m=160e^{-kt}$ and $e^{-12k}=\tfrac12\Rightarrow k=\dfrac{\ln2}{12}\approx0.05776$ per hour.
C: u4-half-life
S: (b) $36$ h is three half-lives: $m=160\left(\tfrac12\right)^3=20$ g.
S: (c) $160\left(\tfrac12\right)^{t/12}=10\Rightarrow\left(\tfrac12\right)^{t/12}=\tfrac1{16}=\left(\tfrac12\right)^4\Rightarrow t=48$ hours.
A: (a) $k=\frac{\ln2}{12}\approx0.0578$ (b) $20$ g (c) $48$ hours.
`);

M12.addMCQs(4, String.raw`
#M
c: u4-de-basics
Q: The order of $\left(\dfrac{d^3y}{dx^3}\right)^2+y=x$ is
O: 1
O: 2
O*: 3
O: 6
E: The highest derivative is the third derivative.

#M
c: u4-de-basics
Q: The degree of $\left(\dfrac{d^3y}{dx^3}\right)^2+y=x$ is
O: 1
O*: 2
O: 3
O: not defined
E: The highest-order derivative is raised to the power 2.

#M
c: u4-de-basics
Q: The degree of $e^{y''}+y=0$ is
O: 1
O: 2
O: 0
O*: not defined
E: A derivative inside the exponential makes the equation non-polynomial in the derivatives.

#M
c: u4-separable
Q: The general solution of $\dfrac{dy}{dx}=\dfrac{y}{x}$ is
O*: $y=Cx$
O: $y=x+C$
O: $xy=C$
O: $y=Ce^x$
E: $\frac{dy}y=\frac{dx}x\Rightarrow\ln|y|=\ln|x|+\ln|C|$.

#M
c: u4-separable
Q: The general solution of $\dfrac{dy}{dx}=e^{x+y}$ is
O*: $e^x+e^{-y}=C$
O: $e^{x+y}=C$
O: $e^y=e^x+C$
O: $y=x+C$
E: $e^{-y}\,dy=e^x\,dx\Rightarrow-e^{-y}=e^x-C$.

#M
c: u4-homogeneous
Q: To solve a homogeneous equation we substitute
O: $y=x+v$
O*: $y=vx$
O: $y=\frac vx$
O: $x=y^2$
E: Then $\frac{dy}{dx}=v+x\frac{dv}{dx}$.

#M
c: u4-homogeneous
Q: If $y=vx$, then $\dfrac{dy}{dx}=$
O: $v$
O: $x\dfrac{dv}{dx}$
O*: $v+x\dfrac{dv}{dx}$
O: $v\dfrac{dv}{dx}$
E: Product rule on $vx$.

#M
c: u4-growth-decay
Q: The solution of $\dfrac{dN}{dt}=kN$ with $N(0)=N_0$ is
O: $N=N_0+kt$
O*: $N=N_0e^{kt}$
O: $N=N_0e^{-t}$
O: $N=kN_0t$
E: Separate and integrate: $\ln N=kt+c$.

#M
c: u4-half-life
Q: After three half-lives, the fraction of a radioactive sample remaining is
O: $\frac13$
O: $\frac16$
O*: $\frac18$
O: $\frac19$
E: $\left(\frac12\right)^3=\frac18$.

#M
c: u4-solution
Q: An initial condition is used to
O: find the order
O*: find the constant in the general solution
O: check the degree
O: separate the variables
E: Substituting the given point fixes the arbitrary constant.
`);
