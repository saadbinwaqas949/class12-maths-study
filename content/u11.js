/* Unit 11 · Vector Valued Functions and Their Derivatives */
M12.addConcepts(11, String.raw`
#C u11-scalar-vector Scalar and vector-valued functions
pre: f-functions
R: A scalar function gives one number for each input (e.g. $f(t)=3t+2\cos t$); a vector-valued function gives a vector: $\vr(t)=\langle f(t),g(t),h(t)\rangle=f(t)\ii+g(t)\jj+h(t)\kk$.
F: $$\vr(t)=\langle f(t),\,g(t),\,h(t)\rangle=f(t)\,\ii+g(t)\,\jj+h(t)\,\kk$$
B: The scalar functions $f,g,h$ are the **components**. As $t$ (often time) changes, the tip of $\vr(t)$ traces a curve in the plane or in space.
**How to tell them apart:** if the output is a single number, it is scalar; if the output is written with $\langle\ \rangle$ or with $\ii,\jj,\kk$ (several components), it is vector-valued. Vector functions are usually written in bold ($\vr$) or with an arrow.
E: $T(x,y,z)=100-x^2-y^2-z^2$ (a temperature) is scalar; $\vr(t)=\langle\cos t,\sin t,t\rangle$ is vector-valued.

#C u11-construct Constructing vector-valued functions
pre: u11-scalar-vector, f-trig-ratios
R: Describe how each coordinate changes with $t$, then put the components together: $\vr(t)=x(t)\ii+y(t)\jj\,(+z(t)\kk)$, and state the allowed values of $t$.
B: Standard building blocks:
- **circle** of radius $R$: $x=R\cos\omega t$, $y=R\sin\omega t$;
- **parabola** $y=x^2$: $x=t$, $y=t^2$;
- **straight line**: $x=x_0+at$, $y=y_0+bt$;
- **helix / upward spiral**: $x=a\cos t$, $y=a\sin t$, $z=ct$;
- **projectile**: $x=(v_0\cos\theta)t$, $y=(v_0\sin\theta)t-\frac12gt^2$.
E: A satellite circling at radius 4000 km while rising 3000 km per hour: $\vr(t)=4000\cos t\,\ii+4000\sin t\,\jj+3000t\,\kk$.

#C u11-domain-range Domain and range of a vector-valued function
pre: u11-scalar-vector
R: The domain is the set of $t$ for which **every** component is defined (the intersection of the component domains); the range is the set of output vectors, i.e. the curve traced.
B: **Steps:** find the domain of each component ($\sqrt{u}$ needs $u\ge0$, $\ln u$ needs $u>0$, denominators $\ne0$, $\sec^{-1}u$ needs $|u|\ge1$), then intersect them.
To describe the range, look at the values each component takes and any relation between them (for example $x^2+y^2=1$ for $\langle\cos t,\sin t\rangle$).
E: $\vr(t)=\sqrt{4-t^2}\,\ii+\frac1{t-1}\jj$: $t\in[-2,2]$ and $t\ne1$, so the domain is $[-2,1)\cup(1,2]$.

#C u11-derivative Derivative of a vector-valued function
pre: u11-scalar-vector, u2-chain-rule
R: Differentiate each component separately: $\vr'(t)=f'(t)\ii+g'(t)\jj+h'(t)\kk$; to evaluate at a point, substitute $t$ afterwards.
F: $$\vr'(t)=\lim_{\Delta t\to0}\frac{\vr(t+\Delta t)-\vr(t)}{\Delta t}=f'(t)\,\ii+g'(t)\,\jj+h'(t)\,\kk$$
B: All the ordinary rules (product, quotient, chain) are used inside each component. The derivative vector $\vr'(t)$ points along the tangent to the curve.
If a component is undefined at the point but has a limit there (like $\frac{\sin t^2}{t}$ at $t=0$), use the limit definition of the derivative for that component.
E: $\vr(t)=\sec t\,\ii+\tan t\,\jj-\cos t\,\kk$ at $t=\frac\pi4$: $\vr'=\sec t\tan t\,\ii+\sec^2t\,\jj+\sin t\,\kk=\sqrt2\,\ii+2\,\jj+\frac{1}{\sqrt2}\kk$.
`);

M12.addQuestions(11, String.raw`
#Q 11.1 1
Q: Give two real-life examples where vector-valued functions are necessary.
T: u11-scalar-vector
S: **Position of a moving object**, such as an aircraft or a drone: at each time $t$ we need several coordinates, $\vr(t)=x(t)\ii+y(t)\jj+z(t)\kk$.
C: u11-scalar-vector
S: **Motion of a projectile** (a football, an arrow): $\vr(t)=(v_0\cos\theta)t\,\ii+\left((v_0\sin\theta)t-\frac12gt^2\right)\jj$, giving both horizontal and vertical position.
S: (Other examples: the velocity of wind at a moving weather balloon, the path of a robotic arm, a satellite's orbit.) A single number cannot describe these; a direction is needed, so a vector function is necessary.
A: For example, the position of an aircraft in flight and the path of a projectile.

#Q 11.1 2
Q: Construct a vector function for a particle moving in a circle.
T: u11-construct
S: A circle of radius $R$ centred at the origin, traced at angular speed $\omega$: $x=R\cos\omega t$, $y=R\sin\omega t$.
C: u11-construct
S: $\vr(t)=R\cos\omega t\,\ii+R\sin\omega t\,\jj$, $t\ge0$. Check: $x^2+y^2=R^2$.
A: $\vr(t)=R\cos(\omega t)\,\ii+R\sin(\omega t)\,\jj$ (e.g. $\vr(t)=\cos t\,\ii+\sin t\,\jj$ for the unit circle).

#Q 11.1 3
Q: Write a vector function for a car moving along a parabolic path.
T: u11-construct
S: For the path $y=x^2$, let $x=t$; then $y=t^2$.
C: u11-construct
A: $\vr(t)=t\,\ii+t^2\,\jj$ (more generally $\vr(t)=t\,\ii+(at^2+bt+c)\,\jj$).

#Q 11.1 4
Q: Create a 3D vector function for a drone flying upward in a spiral.
T: u11-construct
S: Circular motion of radius $a$ in the horizontal plane: $x=a\cos t$, $y=a\sin t$; steady climb: $z=ct$ with $c>0$.
C: u11-construct
A: $\vr(t)=a\cos t\,\ii+a\sin t\,\jj+ct\,\kk$ (for example $5\cos t\,\ii+5\sin t\,\jj+0.5t\,\kk$).

#Q 11.1 5
Q: Given $x(t)=t^2+1$ and $y(t)=\sqrt t$, construct $\vr(t)$.
T: u11-construct, u11-domain-range
S: $\vr(t)=x(t)\ii+y(t)\jj=(t^2+1)\ii+\sqrt t\,\jj$.
C: u11-construct
S: $\sqrt t$ needs $t\ge0$, so the domain is $[0,\infty)$.
C: u11-domain-range
A: $\vr(t)=(t^2+1)\,\ii+\sqrt t\,\jj$, $t\ge0$.

#Q 11.1 6
Q: Given $x(t)=\dfrac{1}{t+4}$, $y(t)=\ln\sqrt t$, $z(t)=\sec^{-1}(t)$, construct $\vr(t)$.
T: u11-construct, u11-domain-range
S: $\vr(t)=\dfrac1{t+4}\ii+\ln\sqrt t\,\jj+\sec^{-1}t\,\kk$.
C: u11-construct
S: Domain: $t\ne-4$; $t>0$ (for $\ln\sqrt t$); $|t|\ge1$ (for $\sec^{-1}t$). Intersection: $t\ge1$.
C: u11-domain-range, u9-domain
A: $\vr(t)=\frac{1}{t+4}\,\ii+\ln\sqrt t\,\jj+\sec^{-1}(t)\,\kk$, defined for $t\ge1$.

#Q 11.1 7(i)
Q: Find the domain and range of $\vr(t)=\sqrt t\,\ii+\ln t\,\jj$.
T: u11-domain-range
S: $\sqrt t$: $t\ge0$; $\ \ln t$: $t>0$. Domain $=(0,\infty)$.
C: u11-domain-range
S: As $t$ runs over $(0,\infty)$, $x=\sqrt t$ takes every positive value and $y=\ln t$ every real value; since $t=x^2$, the outputs lie on the curve $y=2\ln x$.
A: Domain $(0,\infty)$; range: the vectors $\langle x,y\rangle$ with $x>0$ and $y=2\ln x$ (every real $y$ occurs).

#Q 11.1 7(ii)
Q: Find the domain and range of $\vr(t)=\cos t\,\ii+\sin t\,\jj$.
T: u11-domain-range
S: Both components are defined for all $t$: domain $\R$.
C: u11-domain-range
S: $x^2+y^2=\cos^2t+\sin^2t=1$, and every point of the circle is reached.
A: Domain $\R$; range: the unit circle $x^2+y^2=1$.

#Q 11.1 7(iii)
Q: Find the domain and range of $\vr(t)=t\,\ii+t^2\,\jj+e^t\,\kk$.
T: u11-domain-range
S: Every component is defined for all real $t$: domain $\R$.
C: u11-domain-range
S: Outputs $\langle t,t^2,e^t\rangle$: $x$ any real, $y=x^2\ge0$, $z=e^x>0$.
A: Domain $\R$; range: the curve $\{(x,x^2,e^x):x\in\R\}$ (so $y\ge0$, $z>0$).

#Q 11.1 7(iv)
Q: Find the domain and range of $\vr(t)=\sin t\,\ii+\cos t\,\jj+t\,\kk$.
T: u11-domain-range
S: Domain $\R$.
C: u11-domain-range
S: $x^2+y^2=1$ and $z=t$ takes every real value: the curve is a helix winding around the cylinder $x^2+y^2=1$.
A: Domain $\R$; range: the helix $\{(\sin t,\cos t,t)\}$ on the cylinder $x^2+y^2=1$.

#Q 11.1 8
Q: Determine which are scalar functions and which are vector-valued functions: (i) $f(t)=(3t^2-5)^2$ (ii) $\mathbf h(t)=\langle t^2,e^t,\ln\sqrt t\rangle$ (iii) $g(t)=\tan t+\csc t$ (iv) $\mathbf j(t)=\left\langle\frac{1}{t^2+1},\frac{1}{t^2+1}\right\rangle$.
T: u11-scalar-vector
S: (i) One real number for each $t$: **scalar**.
C: u11-scalar-vector
S: (ii) Three components: **vector-valued** (3D).
S: (iii) A single number: **scalar**.
S: (iv) Two components (even though they are equal): **vector-valued** (2D).
A: Scalar: (i), (iii). Vector-valued: (ii), (iv).

#Q 11.2 1(i)
Q: Find the first derivative of $\vr(t)=(t^2+1)\ii+(t^3+t^2+3t)\jj$.
T: u11-derivative
S: Differentiate each component: $\frac{d}{dt}(t^2+1)=2t$, $\ \frac{d}{dt}(t^3+t^2+3t)=3t^2+2t+3$.
C: u11-derivative
A: $\vr'(t)=2t\,\ii+(3t^2+2t+3)\,\jj$.

#Q 11.2 1(ii)
Q: Find the first derivative of $\vr(t)=(t\sin t-\cos t)\ii+(\cot t+\ln t)\jj+\ln(1+t^2)\kk$.
T: u11-derivative, u2-basic-rules
S: $\ii$: $(\sin t+t\cos t)+\sin t=2\sin t+t\cos t$.
C: u2-basic-rules
S: $\jj$: $-\csc^2t+\dfrac1t$. $\ \kk$: $\dfrac{2t}{1+t^2}$.
C: u11-derivative
A: $\vr'(t)=(2\sin t+t\cos t)\,\ii+\left(\frac1t-\csc^2t\right)\jj+\frac{2t}{1+t^2}\,\kk$.

#Q 11.2 1(iii)
Q: Find the first derivative of $\vr(t)=\dfrac{2}{\sqrt{1-t^2}}\ii+\dfrac{\sqrt3}{1+t^2}\kk$.
T: u11-derivative, u2-chain-rule
S: $\ii$: $2(1-t^2)^{-1/2}\to2\cdot\left(-\tfrac12\right)(1-t^2)^{-3/2}(-2t)=\dfrac{2t}{(1-t^2)^{3/2}}$.
C: u2-chain-rule
S: $\kk$: $\sqrt3(1+t^2)^{-1}\to-\sqrt3(1+t^2)^{-2}(2t)=-\dfrac{2\sqrt3\,t}{(1+t^2)^2}$.
C: u11-derivative
A: $\vr'(t)=\frac{2t}{(1-t^2)^{3/2}}\,\ii-\frac{2\sqrt3\,t}{(1+t^2)^2}\,\kk$.

#Q 11.2 2(i)
Q: Find $\vr'(t)$ at $t=\frac\pi2$ for $\vr(t)=\left(\dfrac{t^2+1}{\sin t}\right)\ii+\left(\sqrt t\,e^t\right)\jj$.
T: u11-derivative, u2-basic-rules
S: $\ii$: quotient rule: $\dfrac{2t\sin t-(t^2+1)\cos t}{\sin^2t}$; at $\frac\pi2$: $\dfrac{\pi\cdot1-0}{1}=\pi$.
C: u2-basic-rules
S: $\jj$: product rule: $\dfrac{e^t}{2\sqrt t}+\sqrt t\,e^t=e^t\left(\dfrac{1}{2\sqrt t}+\sqrt t\right)$.
S: At $\frac\pi2$: $e^{\pi/2}\left(\dfrac{1}{\sqrt{2\pi}}+\sqrt{\dfrac\pi2}\right)=\dfrac{e^{\pi/2}(1+\pi)}{\sqrt{2\pi}}\approx7.948$.
C: u11-derivative
A: $\vr'\left(\frac\pi2\right)=\pi\,\ii+\frac{e^{\pi/2}(1+\pi)}{\sqrt{2\pi}}\,\jj\approx3.142\,\ii+7.948\,\jj$.

#Q 11.2 2(ii)
Q: Find $\vr'(0)$ for $\vr(t)=\left(t\sqrt{t+2}\right)\ii+\ln\left(t+\sqrt{t^2+1}\right)\jj$.
T: u11-derivative
S: $\ii$: $\sqrt{t+2}+\dfrac{t}{2\sqrt{t+2}}$; at $0$: $\sqrt2$.
C: u2-basic-rules
S: $\jj$: $\dfrac{1+\frac{t}{\sqrt{t^2+1}}}{t+\sqrt{t^2+1}}=\dfrac{1}{\sqrt{t^2+1}}$; at $0$: $1$.
W: The numerator equals $\frac{\sqrt{t^2+1}+t}{\sqrt{t^2+1}}$, which cancels with the denominator.
C: u2-log-derivs
A: $\vr'(0)=\sqrt2\,\ii+\jj$.

#Q 11.2 2(iii)
Q: Find $\vr'(0)$ for $\vr(t)=\tan^{-1}(t)\,\ii+\dfrac{\sin(t^2)}{t}\jj+\sqrt[3]{1+t}\,\kk$.
T: u11-derivative, f-limits
S: $\ii$: $\dfrac{1}{1+t^2}=1$ at $t=0$. $\ \kk$: $\tfrac13(1+t)^{-2/3}=\tfrac13$ at $t=0$.
C: u2-inv-trig-derivs
S: $\jj$: $g(t)=\dfrac{\sin t^2}{t}$ is not defined at $0$, but $g(t)\to0$, so take $g(0)=0$ and use the definition: $g'(0)=\lim\limits_{h\to0}\dfrac{g(h)-0}{h}=\lim\limits_{h\to0}\dfrac{\sin h^2}{h^2}=1$.
C: f-limits
!:
A: $\vr'(0)=\ii+\jj+\frac13\,\kk$.

#Q 11.2 2(iv)
Q: Find $\vr'(0)$ for $\vr(t)=te^{-t}\ii+\cos(3t)\jj+\ln(1+t^2)\kk$.
T: u11-derivative
S: $\ii$: $e^{-t}-te^{-t}\to1$. $\ \jj$: $-3\sin3t\to0$. $\ \kk$: $\dfrac{2t}{1+t^2}\to0$.
C: u11-derivative
A: $\vr'(0)=\ii$.
`);

M12.addMCQs(11, String.raw`
#M
c: u11-scalar-vector
Q: Which of these is a vector-valued function?
O: $f(t)=t^2+\sin t$
O*: $\vr(t)=\langle t,\,t^2\rangle$
O: $g(t)=e^t\ln t$
O: $h(t)=|t|$
E: It has two components.

#M
c: u11-derivative
Q: If $\vr(t)=t^2\ii+\sin t\,\jj$, then $\vr'(t)=$
O*: $2t\,\ii+\cos t\,\jj$
O: $2t+\cos t$
O: $t^2\ii+\cos t\,\jj$
O: $2t\,\ii-\cos t\,\jj$
E: Differentiate each component.

#M
c: u11-domain-range
Q: The domain of $\vr(t)=\sqrt{t}\,\ii+\frac{1}{t-2}\jj$ is
O: $[0,\infty)$
O*: $[0,2)\cup(2,\infty)$
O: $\R\setminus\{2\}$
O: $(2,\infty)$
E: Intersect $t\ge0$ with $t\ne2$.

#M
c: u11-construct
Q: The curve traced by $\vr(t)=\cos t\,\ii+\sin t\,\jj$ is
O: a parabola
O*: a circle
O: a straight line
O: a helix
E: $x^2+y^2=1$.

#M
c: u11-construct
Q: $\vr(t)=\cos t\,\ii+\sin t\,\jj+t\,\kk$ describes a
O: circle
O: parabola
O*: helix
O: ellipse
E: It circles around the $z$-axis while rising steadily.
`);
