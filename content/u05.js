/* Unit 5 · Analytical Geometry */
M12.addConcepts(5, String.raw`
#C u5-line-forms Forms of the equation of a straight line
pre: f-line-basic
R: A line can be written in general form $ax+by+c=0$, slope-intercept form $y=mx+c$, point-slope form, two-point form, intercept form $\frac xa+\frac yb=1$, or normal form $x\cos\alpha+y\sin\alpha=p$.
F: $$y=mx+c,\quad y-y_1=m(x-x_1),\quad \frac{y-y_1}{y_2-y_1}=\frac{x-x_1}{x_2-x_1},\quad \frac xa+\frac yb=1,\quad x\cos\alpha+y\sin\alpha=p$$
B: Each form highlights different information:
- **slope-intercept** $y=mx+c$: slope $m$, $y$-intercept $c$;
- **point-slope** $y-y_1=m(x-x_1)$: one point and the slope;
- **two-point**: two points on the line;
- **intercept** $\frac xa+\frac yb=1$: crosses the axes at $(a,0)$ and $(0,b)$;
- **normal** $x\cos\alpha+y\sin\alpha=p$: $p\ (>0)$ is the perpendicular distance from the origin and $\alpha$ the angle that perpendicular makes with the positive $x$-axis.
Every line can be written in the **general form** $ax+by+c=0$, with slope $-\frac ab$ (if $b\ne0$).
X: The intercepts of $ax+by+c=0$ come from putting $y=0$ (giving $x=-\frac ca$) and $x=0$ (giving $y=-\frac cb$). These two points also give the two-point form.
E: Through $(-3,-2)$ and $(5,4)$: slope $\frac{6}{8}=\frac34$, so $y+2=\frac34(x+3)\Rightarrow3x-4y+1=0$.
M: In intercept form both intercepts must be divided **into** $x$ and $y$: $\frac x3+\frac y2=1$, not $3x+2y=1$.

#C u5-normal-form The normal form
pre: u5-line-forms, f-trig-ratios
R: To put $ax+by+c=0$ in normal form, move $c$ to the right, then divide by $\pm\sqrt{a^2+b^2}$, choosing the sign that makes the right side positive.
F: $$ax+by=-c\ \Longrightarrow\ \frac{a}{\pm\sqrt{a^2+b^2}}\,x+\frac{b}{\pm\sqrt{a^2+b^2}}\,y=\frac{-c}{\pm\sqrt{a^2+b^2}}$$
B: In $x\cos\alpha+y\sin\alpha=p$ the coefficients must satisfy $\cos^2\alpha+\sin^2\alpha=1$; dividing by $\sqrt{a^2+b^2}$ achieves exactly that. The right side $p$ is a distance, so it must be **positive**: if $-c$ is negative, divide by $-\sqrt{a^2+b^2}$ instead.
E: $x+y+2=0\Rightarrow x+y=-2\Rightarrow -x-y=2$. Divide by $\sqrt2$: $-\frac1{\sqrt2}x-\frac1{\sqrt2}y=\sqrt2$. So $p=\sqrt2$ and $\cos\alpha=\sin\alpha=-\frac1{\sqrt2}$, i.e. $\alpha=225^\circ$.
M: Leaving a negative number on the right; $p$ must be positive.

#C u5-triangle-lines Medians, altitudes and right bisectors
pre: f-coord, f-line-basic
R: A **median** joins a vertex to the midpoint of the opposite side; an **altitude** goes from a vertex perpendicular to the opposite side; a **right (perpendicular) bisector** is perpendicular to a side through its midpoint.
B: | line | passes through | slope |
| --- | --- | --- |
| median from $A$ | $A$ and midpoint of $BC$ | from the two points |
| altitude from $A$ | $A$ | $-\frac{1}{m_{BC}}$ |
| right bisector of $BC$ | midpoint of $BC$ | $-\frac1{m_{BC}}$ |
Then use the point-slope form. The three medians meet at the centroid, the three altitudes at the orthocentre, and the three right bisectors at the circumcentre.
X: If a side is horizontal, its altitude and right bisector are vertical lines $x=k$; if it is vertical, they are horizontal $y=k$.
E: For $A(0,0),B(4,2),C(2,6)$: $m_{BC}=\frac{6-2}{2-4}=-2$, so the altitude from $A$ has slope $\frac12$: $y=\frac12x\Rightarrow x-2y=0$.
M: Using the altitude's slope for a median (a median is not perpendicular to anything in general).

#C u5-concurrency Concurrency of three lines
pre: f-determinant, f-linear-eq
R: Three non-parallel lines $a_ix+b_iy+c_i=0$ meet at one point if and only if the determinant of their coefficients is zero.
F: $$\begin{vmatrix}a_1&b_1&c_1\\a_2&b_2&c_2\\a_3&b_3&c_3\end{vmatrix}=0$$
B: Two ways to test or use concurrency:
1. **Determinant:** expand it; zero means concurrent.
2. **Intersection:** solve two of the equations together and check whether the point satisfies the third. This is also how you find the point of concurrency, or an unknown constant $k$ that makes the lines concurrent.
E: $x+y-5=0$ and $x-y-1=0$ meet at $(3,2)$. For $kx+y-8=0$ to pass through it: $3k+2-8=0\Rightarrow k=2$.
M: The determinant test needs the equations in the form $ax+by+c=0$ (everything on one side).

#C u5-family Family of lines through an intersection
pre: f-line-basic
R: Every line through the intersection of $\ell_1=0$ and $\ell_2=0$ (except $\ell_2$ itself) can be written $\ell_1+k\ell_2=0$; one more condition fixes $k$.
F: $$(a_1x+b_1y+c_1)+k\,(a_2x+b_2y+c_2)=0$$
B: Collect terms: $(a_1+ka_2)x+(b_1+kb_2)y+(c_1+kc_2)=0$, whose slope is $-\dfrac{a_1+ka_2}{b_1+kb_2}$.
- **Parallel** to a line of slope $m$: set this slope equal to $m$.
- **Perpendicular** to a line of slope $m$: set it equal to $-\frac1m$.
- **Through a point**: substitute the point.
Solve for $k$ and substitute back.
X: Why it works: any point on both $\ell_1$ and $\ell_2$ makes $\ell_1=0$ and $\ell_2=0$, so it also satisfies $\ell_1+k\ell_2=0$. And $\ell_1+k\ell_2=0$ is linear, so it is a straight line.
E: Through the intersection of $2x-3y-14=0$ and $2x+y-10=0$, parallel to slope $-\frac12$: slope $-\frac{2+2k}{k-3}=-\frac12\Rightarrow k=-\frac73$, giving $2x+4y-7=0$.

#C u5-angle-lines Angle from one line to another
pre: f-coord, f-compound
R: The angle $\theta$ from $\ell_1$ (slope $m_1$) to $\ell_2$ (slope $m_2$), measured anticlockwise, satisfies $\tan\theta=\dfrac{m_2-m_1}{1+m_1m_2}$.
F: $$\tan\theta=\frac{m_2-m_1}{1+m_1m_2},\qquad \ell_1\parallel\ell_2\iff m_1=m_2,\qquad \ell_1\perp\ell_2\iff m_1m_2=-1$$
B: If $\tan\theta$ comes out **negative**, the angle is obtuse: $\theta=180^\circ-\tan^{-1}|\tan\theta|$. The **acute angle** between the lines is $\tan^{-1}\left|\frac{m_2-m_1}{1+m_1m_2}\right|$.
If $1+m_1m_2=0$ the lines are perpendicular ($\theta=90^\circ$).
X: **Proof:** if the inclinations are $\alpha_1,\alpha_2$, then $\theta=\alpha_2-\alpha_1$ and $\tan(\alpha_2-\alpha_1)=\frac{\tan\alpha_2-\tan\alpha_1}{1+\tan\alpha_1\tan\alpha_2}$.
**Interior angles of a triangle:** label the vertices in anticlockwise order $A\to B\to C$. Then the interior angle at $A$ is the angle from line $AB$ to line $AC$, at $B$ from $BC$ to $BA$, and at $C$ from $CA$ to $CB$. Always check that the three angles add up to $180^\circ$.
E: From slope $-\frac73$ to slope $\frac52$: $\tan\theta=\frac{\frac52+\frac73}{1-\frac{35}{6}}=\frac{29/6}{-29/6}=-1$, so $\theta=135^\circ$.
M: Swapping $m_1$ and $m_2$ changes the angle "from $\ell_1$ to $\ell_2$" into its supplement.

#C u5-triangle-area Area of a triangle and collinearity
pre: f-determinant
R: Area $=\frac12\left|x_1(y_2-y_3)+x_2(y_3-y_1)+x_3(y_1-y_2)\right|$; the three points are collinear exactly when this is zero.
F: $$\Delta=\frac12\begin{vmatrix}x_1&y_1&1\\x_2&y_2&1\\x_3&y_3&1\end{vmatrix}\quad(\text{take the absolute value})$$
B: Expand the determinant along the third column (or use the bracket formula). The sign only shows the orientation of the vertices, so take the absolute value for the area.
If $\Delta=0$ the "triangle" is flat: the points lie on one line. This gives an equation for an unknown coordinate.
E: $A(1,2),B(3,6),C(5,10)$: $\frac12|1(6-10)+3(10-2)+5(2-6)|=\frac12|-4+24-20|=0$, so they are collinear.
M: Forgetting the $\frac12$, or the absolute value.

#C u5-homog-pair Pair of lines through the origin
pre: f-factor, f-quadratic-formula
R: $ax^2+2hxy+by^2=0$ represents two lines through the origin: real and distinct if $h^2>ab$, coincident if $h^2=ab$, imaginary if $h^2<ab$.
F: $$ax^2+2hxy+by^2=0:\quad m_1+m_2=-\frac{2h}{b},\qquad m_1m_2=\frac ab$$
B: **Finding the lines:** factorise the left side into two linear factors (split the middle term as for a quadratic), or divide by $x^2$ and solve the quadratic $b\,m^2+2h\,m+a=0$ for $m=\frac yx$.
Note that the coefficient of $xy$ is $2h$, so $h$ is **half** of it.
X: Every term has degree 2, which is why such an equation is called homogeneous of the second degree; it is satisfied by $(0,0)$, so both lines pass through the origin.
E: $3x^2-10xy+3y^2=0$: $3x^2-9xy-xy+3y^2=3x(x-3y)-y(x-3y)=(3x-y)(x-3y)$, so the lines are $3x-y=0$ and $x-3y=0$.
M: Taking $h$ as the whole coefficient of $xy$ instead of half of it.

#C u5-pair-angle Angle between a pair of lines
pre: u5-homog-pair, u5-angle-lines
R: For $ax^2+2hxy+by^2=0$: $\tan\theta=\dfrac{2\sqrt{h^2-ab}}{a+b}$; perpendicular if $a+b=0$; coincident if $h^2=ab$.
F: $$\tan\theta=\frac{2\sqrt{h^2-ab}}{a+b},\qquad \perp\iff a+b=0,\qquad \text{coincident}\iff h^2=ab$$
B: This comes from $\tan\theta=\frac{m_1-m_2}{1+m_1m_2}$ with $m_1+m_2=-\frac{2h}b$ and $m_1m_2=\frac ab$.
If $a+b<0$ the formula gives a negative value: the acute angle is $\tan^{-1}\left|\frac{2\sqrt{h^2-ab}}{a+b}\right|$.
**Lines perpendicular to a given pair:** if the given lines have slopes $m_1,m_2$, the perpendicular lines through the origin have slopes $-\frac1{m_1},-\frac1{m_2}$; multiply their equations to get the joint equation.
E: $5x^2+6xy+y^2=0$: $a=5,h=3,b=1$: $\tan\theta=\frac{2\sqrt{9-5}}{6}=\frac23$, $\theta\approx33.69^\circ$.
M: Using the coefficient of $xy$ (6) instead of $h=3$.

#C u5-inclination Inclination (tilt angle) of a line
pre: f-coord
R: The inclination $\alpha$ is the angle from the positive $x$-axis to the line, measured anticlockwise; slope $m=\tan\alpha$.
B: Find the slope from two points, then $\alpha=\tan^{-1}m$ (add $180^\circ$ if $m<0$). Real-life "tilt" or "gradient angle" questions are exactly this.
E: Through $(1,4)$ and $(3,2)$: $m=\frac{2-4}{3-1}=-1$, so $\alpha=180^\circ-45^\circ=135^\circ$.
`);

M12.addQuestions(5, String.raw`
#Q 5.1 1
Q: Find the equation of the altitude of triangle $XYZ$ from vertex $X$, where $X(1,3)$, $Y(5,7)$, $Z(-3,9)$.
T: u5-triangle-lines, f-line-basic
S: Slope of the opposite side $YZ$: $m_{YZ}=\dfrac{9-7}{-3-5}=-\dfrac14$.
C: f-coord
S: The altitude is perpendicular to $YZ$, so its slope is $4$.
W: Perpendicular slopes multiply to $-1$.
C: u5-triangle-lines
S: Through $X(1,3)$: $y-3=4(x-1)\Rightarrow4x-y-1=0$.
C: f-line-basic
A: $4x-y-1=0$.

#Q 5.1 2
Q: $A(-3,-7)$, $B(4,5)$, $C(-1,2)$ are the vertices of triangle $ABC$. Find the equation of the right bisector of side $BC$.
T: u5-triangle-lines
S: Midpoint of $BC$: $\left(\dfrac{4-1}2,\dfrac{5+2}2\right)=\left(\dfrac32,\dfrac72\right)$.
C: f-coord
S: $m_{BC}=\dfrac{2-5}{-1-4}=\dfrac35$, so the right bisector has slope $-\dfrac53$.
C: u5-triangle-lines
S: $y-\dfrac72=-\dfrac53\left(x-\dfrac32\right)$. Multiply by 6: $6y-21=-10x+15\Rightarrow10x+6y-36=0$.
A: $5x+3y-18=0$.

#Q 5.1 3
Q: The vertices of triangle $PQR$ are $P(1,2)$, $Q(5,-6)$, $R(7,-2)$. Find the equations of all three medians.
T: u5-triangle-lines
S: Midpoints: of $QR$: $(6,-4)$; of $PR$: $(4,0)$; of $PQ$: $(3,-2)$.
C: f-coord
S: Median from $P(1,2)$ to $(6,-4)$: slope $-\dfrac65$: $y-2=-\dfrac65(x-1)\Rightarrow6x+5y-16=0$.
C: u5-triangle-lines
S: Median from $Q(5,-6)$ to $(4,0)$: slope $\dfrac{0+6}{4-5}=-6$: $y=-6(x-4)\Rightarrow6x+y-24=0$.
S: Median from $R(7,-2)$ to $(3,-2)$: both points have $y=-2$, so it is the horizontal line $y+2=0$.
A: $6x+5y-16=0$, $\ 6x+y-24=0$, $\ y+2=0$.

#Q 5.1 6
Q: Find the equations of the medians, altitudes and right bisectors of the triangle with vertices $A(2,5)$, $B(-3,4)$, $C(6,-8)$.
T: u5-triangle-lines
L: l
S: Midpoints: $D$ of $BC=\left(\tfrac32,-2\right)$, $E$ of $CA=\left(4,-\tfrac32\right)$, $F$ of $AB=\left(-\tfrac12,\tfrac92\right)$. Slopes of the sides: $m_{BC}=-\tfrac43$, $m_{CA}=-\tfrac{13}4$, $m_{AB}=\tfrac15$.
C: f-coord
S: **Medians.** $AD$: slope $\dfrac{-2-5}{\frac32-2}=14$: $14x-y-23=0$. $\ BE$: slope $-\dfrac{11}{14}$: $11x+14y-23=0$. $\ CF$: slope $-\dfrac{25}{13}$: $25x+13y-46=0$.
C: u5-triangle-lines
S: **Altitudes** (slopes are negative reciprocals of the opposite sides). From $A$: slope $\tfrac34$: $3x-4y+14=0$. From $B$: slope $\tfrac4{13}$: $4x-13y+64=0$. From $C$: slope $-5$: $5x+y-22=0$.
S: **Right bisectors** (through the midpoints, same slopes as the altitudes). Of $BC$ through $D$: $6x-8y-25=0$. Of $CA$ through $E$: $8x-26y-71=0$. Of $AB$ through $F$: $5x+y-2=0$.
D: Example for the right bisector of $BC$: $y+2=\frac34\left(x-\frac32\right)\Rightarrow4y+8=3x-\frac92\Rightarrow8y+16=6x-9\Rightarrow6x-8y-25=0$.
A: Medians $14x-y-23=0,\ 11x+14y-23=0,\ 25x+13y-46=0$; altitudes $3x-4y+14=0,\ 4x-13y+64=0,\ 5x+y-22=0$; right bisectors $6x-8y-25=0,\ 8x-26y-71=0,\ 5x+y-2=0$.

#Q 5.1 7(a)
Q: Convert $2x+3y-6=0$ into (i) slope-intercept (ii) two-point (iii) intercept (iv) point-slope (v) normal form.
T: u5-line-forms, u5-normal-form
S: (i) $3y=-2x+6\Rightarrow y=-\tfrac23x+2$.
C: u5-line-forms
S: Intercepts: $y=0\Rightarrow x=3$; $x=0\Rightarrow y=2$. (ii) Through $(3,0)$ and $(0,2)$: $\dfrac{y-0}{2-0}=\dfrac{x-3}{0-3}$.
S: (iii) $\dfrac x3+\dfrac y2=1$. (iv) Through $(3,0)$ with slope $-\tfrac23$: $y-0=-\tfrac23(x-3)$.
S: (v) $2x+3y=6$; divide by $\sqrt{2^2+3^2}=\sqrt{13}$: $\dfrac2{\sqrt{13}}x+\dfrac3{\sqrt{13}}y=\dfrac6{\sqrt{13}}$, so $p=\dfrac6{\sqrt{13}}$.
C: u5-normal-form
A: (i) $y=-\frac23x+2$ (ii) $\frac{y}{2}=\frac{x-3}{-3}$ (iii) $\frac x3+\frac y2=1$ (iv) $y=-\frac23(x-3)$ (v) $\frac{2}{\sqrt{13}}x+\frac{3}{\sqrt{13}}y=\frac{6}{\sqrt{13}}$.

#Q 5.1 7(b)
Q: Convert $x-2y+4=0$ into (i) slope-intercept (ii) two-point (iii) intercept (iv) point-slope (v) normal form.
T: u5-line-forms, u5-normal-form
S: (i) $2y=x+4\Rightarrow y=\tfrac12x+2$.
C: u5-line-forms
S: Intercepts: $(-4,0)$ and $(0,2)$. (ii) $\dfrac{y-0}{2-0}=\dfrac{x+4}{0+4}$. (iii) $\dfrac{x}{-4}+\dfrac y2=1$. (iv) $y-2=\tfrac12(x-0)$.
S: (v) $x-2y=-4$; the right side must be positive, so write $-x+2y=4$ and divide by $\sqrt5$: $-\dfrac1{\sqrt5}x+\dfrac2{\sqrt5}y=\dfrac4{\sqrt5}$.
C: u5-normal-form
!:
A: (i) $y=\frac12x+2$ (ii) $\frac y2=\frac{x+4}{4}$ (iii) $\frac{x}{-4}+\frac y2=1$ (iv) $y-2=\frac12x$ (v) $-\frac1{\sqrt5}x+\frac2{\sqrt5}y=\frac4{\sqrt5}$.

#Q 5.1 7(c)
Q: Convert $4x+5y-20=0$ into (i) slope-intercept (ii) two-point (iii) intercept (iv) point-slope (v) normal form.
T: u5-line-forms, u5-normal-form
S: (i) $y=-\tfrac45x+4$.
C: u5-line-forms
S: Intercepts $(5,0)$ and $(0,4)$. (ii) $\dfrac{y-0}{4-0}=\dfrac{x-5}{0-5}$. (iii) $\dfrac x5+\dfrac y4=1$. (iv) $y-0=-\tfrac45(x-5)$.
S: (v) $4x+5y=20$, divide by $\sqrt{41}$: $\dfrac4{\sqrt{41}}x+\dfrac5{\sqrt{41}}y=\dfrac{20}{\sqrt{41}}$.
C: u5-normal-form
A: (i) $y=-\frac45x+4$ (ii) $\frac y4=\frac{x-5}{-5}$ (iii) $\frac x5+\frac y4=1$ (iv) $y=-\frac45(x-5)$ (v) $\frac4{\sqrt{41}}x+\frac5{\sqrt{41}}y=\frac{20}{\sqrt{41}}$.

#Q 5.1 7(d)
Q: Convert $3x+4y-12=0$ into (i) slope-intercept (ii) two-point (iii) intercept (iv) point-slope (v) normal form.
T: u5-line-forms, u5-normal-form
S: (i) $y=-\tfrac34x+3$.
C: u5-line-forms
S: Intercepts $(4,0)$ and $(0,3)$. (ii) $\dfrac{y-0}{3-0}=\dfrac{x-4}{0-4}$. (iii) $\dfrac x4+\dfrac y3=1$. (iv) $y-0=-\tfrac34(x-4)$.
S: (v) $3x+4y=12$, divide by $5$: $\dfrac35x+\dfrac45y=\dfrac{12}5$ (so $p=\tfrac{12}5$).
C: u5-normal-form
A: (i) $y=-\frac34x+3$ (ii) $\frac y3=\frac{x-4}{-4}$ (iii) $\frac x4+\frac y3=1$ (iv) $y=-\frac34(x-4)$ (v) $\frac35x+\frac45y=\frac{12}{5}$.

#Q 5.1 9
Q: Find the family of lines through the intersection of $2x-3y+5=0$ and $x+4y-7=0$. Find the member which is (i) parallel to $y=2x+1$, (ii) perpendicular to $y=x$.
T: u5-family
S: Family: $(2x-3y+5)+k(x+4y-7)=0$, i.e. $(2+k)x+(4k-3)y+(5-7k)=0$, with slope $-\dfrac{2+k}{4k-3}$.
C: u5-family
S: (i) Slope 2: $-\dfrac{2+k}{4k-3}=2\Rightarrow-2-k=8k-6\Rightarrow k=\dfrac49$. Substituting and multiplying by 9: $22x-11y+17=0$.
S: (ii) Perpendicular to $y=x$ means slope $-1$: $\dfrac{2+k}{4k-3}=1\Rightarrow k=\dfrac53$. Multiplying by 3: $11x+11y-20=0$.
S: Check: the lines meet at $\left(\tfrac1{11},\tfrac{19}{11}\right)$, and both answers pass through it.
C: f-linear-eq
A: Family $(2x-3y+5)+k(x+4y-7)=0$; (i) $22x-11y+17=0$ (ii) $11x+11y-20=0$.

#Q 5.1 10
Q: Check whether the lines $x+2y-7=0$, $3x-y-4=0$, $2x+35y-145=0$ are concurrent. If so, find the point of concurrency.
T: u5-concurrency, f-determinant
S: $\begin{vmatrix}1&2&-7\\3&-1&-4\\2&35&-145\end{vmatrix}=1(145+140)-2(-435+8)-7(105+2)$.
C: f-determinant
S: $=285+854-749=390\ne0$.
C: u5-concurrency
S: So the lines are **not** concurrent. (The first two meet at $\left(\tfrac{15}7,\tfrac{17}7\right)$, which does not satisfy the third.)
A: Not concurrent (determinant $=390\neq0$).

#Q 5.1 12
Q: Find the value of $k$ if the lines $x+y-4=0$, $2x-y+1=0$ and $kx+2y-10=0$ are concurrent.
T: u5-concurrency, f-linear-eq
S: Intersection of the first two: adding gives $3x-3=0\Rightarrow x=1$, then $y=3$.
C: f-linear-eq
S: The third line must pass through $(1,3)$: $k+6-10=0$.
C: u5-concurrency
A: $k=4$.

#Q 5.1 13
Q: If the lines $2x+3y-7=0$, $4x-y-5=0$ and $6x+ay-9=0$ meet at a point, find $a$.
T: u5-concurrency, f-linear-eq
S: From $4x-y-5=0$: $y=4x-5$. Substitute in the first: $2x+12x-15-7=0\Rightarrow x=\tfrac{11}7$, $y=\tfrac97$.
C: f-linear-eq
S: The third line passes through $\left(\tfrac{11}7,\tfrac97\right)$: $\tfrac{66}7+\tfrac{9a}7-9=0\Rightarrow66+9a-63=0$.
C: u5-concurrency
A: $a=-\frac13$.

#Q 5.2 1(i)
Q: Find the angle measured from $\ell_1$ to $\ell_2$, where $\ell_1$ joins $(2,7)$ and $(-4,5)$, and $\ell_2$ joins $(-7,2)$ and $(1,3)$. Also find the acute angle.
T: u5-angle-lines
S: $m_1=\dfrac{5-7}{-4-2}=\dfrac13$, $\ m_2=\dfrac{3-2}{1+7}=\dfrac18$.
C: f-coord
S: $\tan\theta=\dfrac{m_2-m_1}{1+m_1m_2}=\dfrac{\frac18-\frac13}{1+\frac1{24}}=\dfrac{-5/24}{25/24}=-\dfrac15$.
C: u5-angle-lines
S: Negative tangent: $\theta=180^\circ-\tan^{-1}\tfrac15=180^\circ-11.31^\circ=168.69^\circ$. The acute angle is $11.31^\circ$.
A: $\theta\approx168.69^\circ$; acute angle $\approx11.31^\circ$.

#Q 5.2 1(ii)
Q: Find the angle measured from $\ell_1$ to $\ell_2$, where $\ell_1$ joins $(1,2)$ and $(3,5)$, and $\ell_2$ joins $(2,-1)$ and $(4,3)$. Also find the acute angle.
T: u5-angle-lines
S: $m_1=\tfrac32$, $\ m_2=\tfrac42=2$.
S: $\tan\theta=\dfrac{2-\frac32}{1+3}=\dfrac{1/2}{4}=\dfrac18\Rightarrow\theta\approx7.13^\circ$.
C: u5-angle-lines
A: $\theta\approx7.13^\circ$, which is already acute.

#Q 5.2 2(i)
Q: Find the angle from the line with slope $m_1=2$ to the line with slope $m_2=-\tfrac12$.
T: u5-angle-lines
S: $1+m_1m_2=1-1=0$, so $\tan\theta$ is undefined.
C: u5-angle-lines
A: $\theta=90^\circ$ (the lines are perpendicular).

#Q 5.2 2(ii)
Q: Find the angle from the line with slope $m_1=3$ to the line with slope $m_2=-2$.
T: u5-angle-lines
S: $\tan\theta=\dfrac{-2-3}{1+3(-2)}=\dfrac{-5}{-5}=1$.
C: u5-angle-lines
A: $\theta=45^\circ$.

#Q 5.2 3(i)
Q: Find the angle from $\ell_1:2x+y-3=0$ to $\ell_2:x+y-5=0$.
T: u5-angle-lines
S: Slopes $-\dfrac ab$: $m_1=-2$, $m_2=-1$.
C: f-line-basic
S: $\tan\theta=\dfrac{-1+2}{1+2}=\dfrac13\Rightarrow\theta\approx18.43^\circ$.
C: u5-angle-lines
A: $\theta\approx18.43^\circ$.

#Q 5.2 3(ii)
Q: Find the angle from $\ell_1:2x-3y+2=0$ to $\ell_2:x+y-4=0$.
T: u5-angle-lines
S: $m_1=\tfrac23$, $m_2=-1$.
S: $\tan\theta=\dfrac{-1-\frac23}{1-\frac23}=\dfrac{-5/3}{1/3}=-5\Rightarrow\theta=180^\circ-78.69^\circ$.
C: u5-angle-lines
A: $\theta\approx101.31^\circ$.

#Q 5.2 4
Q: The angle from the line $ax-y+2=0$ to the line $x+y-4=0$ is $30^\circ$. Find $a$.
T: u5-angle-lines
S: $m_1=a$, $m_2=-1$: $\ \tan30^\circ=\dfrac{-1-a}{1-a}\Rightarrow\dfrac1{\sqrt3}=\dfrac{-1-a}{1-a}$.
C: u5-angle-lines
S: $1-a=-\sqrt3-\sqrt3a\Rightarrow a(\sqrt3-1)=-(\sqrt3+1)\Rightarrow a=-\dfrac{\sqrt3+1}{\sqrt3-1}$.
S: Rationalise: $a=-\dfrac{(\sqrt3+1)^2}{2}=-\dfrac{4+2\sqrt3}{2}=-(2+\sqrt3)$.
C: f-surds
S: Check: slope $-3.732$ has inclination $105^\circ$; the other line has inclination $135^\circ$; from the first to the second is $30^\circ$. ✓ (If only the angle *between* the lines were required, $a=-2+\sqrt3$ would also give $30^\circ$, measured the other way.)
A: $a=-(2+\sqrt3)$.

#Q 5.2 5(i)
Q: Find the interior angles of the triangle with vertices $A(2,3)$, $B(6,3)$, $C(4,7)$.
T: u5-angle-lines
S: Slopes: $m_{AB}=0$, $m_{BC}=\dfrac{7-3}{4-6}=-2$, $m_{CA}=\dfrac{3-7}{2-4}=2$. (The vertices $A\to B\to C$ go anticlockwise.)
C: f-coord
S: $\angle A$ (from $AB$ to $AC$): $\tan A=\dfrac{2-0}{1+0}=2\Rightarrow A\approx63.43^\circ$.
C: u5-angle-lines
S: $\angle B$ (from $BC$ to $BA$): $\tan B=\dfrac{0-(-2)}{1+0}=2\Rightarrow B\approx63.43^\circ$.
S: $\angle C$ (from $CA$ to $CB$): $\tan C=\dfrac{-2-2}{1+2(-2)}=\dfrac43\Rightarrow C\approx53.13^\circ$. Check: $63.43+63.43+53.13=180^\circ$ ✓.
A: $63.43^\circ$, $63.43^\circ$, $53.13^\circ$ (an isosceles triangle).

#Q 5.2 5(ii)
Q: Find the interior angles of the triangle with vertices $L(1,2)$, $M(5,5)$, $N(7,2)$.
T: u5-angle-lines
S: Slopes: $m_{LM}=\tfrac34$, $m_{MN}=-\tfrac32$, $m_{NL}=0$. Going $L\to N\to M$ is anticlockwise.
C: f-coord
S: $\angle L$ (from $LN$ to $LM$): $\tan L=\dfrac{\frac34-0}{1+0}=\dfrac34\Rightarrow L\approx36.87^\circ$.
C: u5-angle-lines
S: $\angle N$ (from $NM$ to $NL$): $\tan N=\dfrac{0+\frac32}{1+0}=\dfrac32\Rightarrow N\approx56.31^\circ$.
S: $\angle M$ (from $ML$ to $MN$): $\tan M=\dfrac{-\frac32-\frac34}{1-\frac98}=\dfrac{-9/4}{-1/8}=18\Rightarrow M\approx86.82^\circ$. Sum $=180^\circ$ ✓.
A: $L\approx36.87^\circ$, $M\approx86.82^\circ$, $N\approx56.31^\circ$.

#Q 5.2 8
Q: Find the area of the triangle formed by the points $A(-3,2)$, $B(4,-1)$, $C(1,5)$.
T: u5-triangle-area
S: $\Delta=\tfrac12\left|x_1(y_2-y_3)+x_2(y_3-y_1)+x_3(y_1-y_2)\right|$.
C: u5-triangle-area
S: $=\tfrac12\left|-3(-1-5)+4(5-2)+1(2+1)\right|=\tfrac12|18+12+3|=\tfrac{33}2$.
A: $16.5$ square units.

#Q 5.2 10
Q: The points are $A(0,\lambda)$, $B(-2,1)$, $C(-3,-2)$. By computing the area of triangle $ABC$, find $\lambda$ if the points are collinear.
T: u5-triangle-area
S: Collinear means area $=0$: $\ 0(1+2)+(-2)(-2-\lambda)+(-3)(\lambda-1)=0$.
C: u5-triangle-area
S: $4+2\lambda-3\lambda+3=0\Rightarrow7-\lambda=0$.
A: $\lambda=7$.

#Q 5.3 1
Q: Find the lines represented by $6x^2-5xy-4y^2=0$ and the angle between them.
T: u5-homog-pair, u5-pair-angle
S: Split the middle term (product $6\times(-4)=-24$, sum $-5$: $3$ and $-8$): $6x^2+3xy-8xy-4y^2=3x(2x+y)-4y(2x+y)=(3x-4y)(2x+y)$.
C: f-factor
S: Lines: $3x-4y=0$ and $2x+y=0$.
C: u5-homog-pair
S: $a=6$, $h=-\tfrac52$, $b=-4$: $\tan\theta=\dfrac{2\sqrt{\frac{25}4+24}}{6-4}=\dfrac{2\cdot\frac{11}2}{2}=\dfrac{11}2$, so $\theta\approx79.70^\circ$.
C: u5-pair-angle
A: $3x-4y=0$, $2x+y=0$; $\theta=\tan^{-1}\frac{11}{2}\approx79.70^\circ$.

#Q 5.3 2
Q: Find the lines represented by $2x^2-7xy+3y^2=0$ and the angle between them.
T: u5-homog-pair, u5-pair-angle
S: $2x^2-6xy-xy+3y^2=2x(x-3y)-y(x-3y)=(2x-y)(x-3y)$.
C: f-factor
S: $a=2$, $h=-\tfrac72$, $b=3$: $\tan\theta=\dfrac{2\sqrt{\frac{49}4-6}}{5}=\dfrac{2\cdot\frac52}{5}=1$.
C: u5-pair-angle
A: $2x-y=0$, $x-3y=0$; $\theta=45^\circ$.

#Q 5.3 3
Q: Find the lines represented by $5x^2+6xy+y^2=0$ and the angle between them.
T: u5-homog-pair, u5-pair-angle
S: $5x^2+5xy+xy+y^2=5x(x+y)+y(x+y)=(5x+y)(x+y)$.
C: f-factor
S: $a=5$, $h=3$, $b=1$: $\tan\theta=\dfrac{2\sqrt{9-5}}{6}=\dfrac23$.
C: u5-pair-angle
A: $5x+y=0$, $x+y=0$; $\theta\approx33.69^\circ$.

#Q 5.3 4
Q: Find the lines represented by $x^2+2xy\sec\alpha+y^2=0$ and the angle between them.
T: u5-homog-pair, u5-pair-angle, f-trig-identities
S: Divide by $x^2$ with $m=\frac yx$: $m^2+2m\sec\alpha+1=0\Rightarrow m=-\sec\alpha\pm\sqrt{\sec^2\alpha-1}=-\sec\alpha\pm\tan\alpha$.
C: f-quadratic-formula, f-trig-identities
S: Lines: $y=(\tan\alpha-\sec\alpha)x$ and $y=-(\tan\alpha+\sec\alpha)x$.
C: u5-homog-pair
S: $a=1$, $h=\sec\alpha$, $b=1$: $\tan\theta=\dfrac{2\sqrt{\sec^2\alpha-1}}{2}=\tan\alpha$, so $\theta=\alpha$ (for acute $\alpha$).
C: u5-pair-angle
A: $y=(\tan\alpha-\sec\alpha)x$, $y=-(\tan\alpha+\sec\alpha)x$; the angle between them is $\alpha$.

#Q 5.3 5
Q: Find the lines represented by $7x^2-8xy+y^2=0$ and the angle between them.
T: u5-homog-pair, u5-pair-angle
S: $7x^2-7xy-xy+y^2=7x(x-y)-y(x-y)=(7x-y)(x-y)$.
C: f-factor
S: $a=7$, $h=-4$, $b=1$: $\tan\theta=\dfrac{2\sqrt{16-7}}{8}=\dfrac34$.
C: u5-pair-angle
A: $7x-y=0$, $x-y=0$; $\theta\approx36.87^\circ$.

#Q 5.3 6
Q: Find $k$ so that the lines $(k-8)x^2-9xy+3ky^2=0$ are perpendicular to each other.
T: u5-pair-angle
S: Perpendicular $\iff a+b=0$: $(k-8)+3k=0$.
C: u5-pair-angle
A: $k=2$.

#Q 5.3 7
Q: Prove that the lines represented by $9y^2+6xy+x^2=0$ are coincident.
T: u5-pair-angle, u5-homog-pair
S: $a=1$, $2h=6\Rightarrow h=3$, $b=9$: $h^2=9=ab$. ✓
C: u5-pair-angle
S: Indeed $x^2+6xy+9y^2=(x+3y)^2$, so both lines are $x+3y=0$. $\blacksquare$
A: $h^2=ab$; the lines coincide in $x+3y=0$.

#Q 5.3 8
Q: Find the joint equation of the lines through the origin perpendicular to the lines $3x^2+5xy-2y^2=0$.
T: u5-pair-angle, u5-homog-pair
S: Factorise: $3x^2+6xy-xy-2y^2=(3x-y)(x+2y)$: slopes $3$ and $-\tfrac12$.
C: f-factor
S: Perpendicular slopes: $-\tfrac13$ and $2$, giving $x+3y=0$ and $2x-y=0$.
C: u5-pair-angle
S: Joint equation: $(x+3y)(2x-y)=2x^2+5xy-3y^2=0$.
A: $2x^2+5xy-3y^2=0$.

#Q 5.3 9
Q: $A(-2,-1)$ and $B(3,4)$ are two points on a solar panel roof. Find the slope and the tilt angle.
T: u5-inclination
S: Slope $=\dfrac{4-(-1)}{3-(-2)}=\dfrac55=1$.
C: f-coord
S: Tilt angle $=\tan^{-1}1=45^\circ$.
C: u5-inclination
A: Slope $1$; tilt angle $45^\circ$.

#Q 5.3 10
Q: The paths of two rays from a star are represented by $2x^2+5xy-3y^2=0$. Find the two lines and the angle between the rays.
T: u5-homog-pair, u5-pair-angle
S: $2x^2+6xy-xy-3y^2=2x(x+3y)-y(x+3y)=(2x-y)(x+3y)$: lines $2x-y=0$ and $x+3y=0$.
C: f-factor
S: $a=2$, $h=\tfrac52$, $b=-3$: $\tan\theta=\dfrac{2\sqrt{\frac{25}4+6}}{2-3}=-7$.
C: u5-pair-angle
S: The acute angle between the rays is $\tan^{-1}7\approx81.87^\circ$ (the other angle is $98.13^\circ$).
A: $2x-y=0$ and $x+3y=0$; angle $\approx81.87^\circ$.
`);

M12.addMCQs(5, String.raw`
#M
c: u5-line-forms
Q: The slope of the line $3x-4y+7=0$ is
O*: $\frac34$
O: $-\frac34$
O: $\frac43$
O: $-\frac43$
E: Slope $=-\frac ab=-\frac{3}{-4}=\frac34$.

#M
c: u5-line-forms
Q: The intercept form of $3x+2y-6=0$ is
O: $\frac x3+\frac y2=1$
O*: $\frac x2+\frac y3=1$
O: $3x+2y=1$
O: $\frac x6+\frac y6=1$
E: The intercepts are $x=2$ and $y=3$.

#M
c: u5-normal-form
Q: In the normal form $x\cos\alpha+y\sin\alpha=p$, $p$ is
O: the slope
O: the $y$-intercept
O*: the perpendicular distance of the line from the origin
O: the length of the line
E: $p>0$ is the length of the perpendicular from the origin.

#M
c: u5-triangle-lines
Q: The altitudes of a triangle meet at the
O: centroid
O*: orthocentre
O: circumcentre
O: incentre
E: Medians meet at the centroid, right bisectors at the circumcentre.

#M
c: u5-triangle-lines
Q: A right bisector of a side of a triangle passes through
O: the opposite vertex
O*: the midpoint of that side
O: the origin
O: the centroid only
E: It is perpendicular to the side through its midpoint.

#M
c: u5-concurrency
Q: Three lines $a_ix+b_iy+c_i=0$ are concurrent if
O: $a_1b_2=a_2b_1$
O*: the determinant of their coefficients is zero
O: they have equal slopes
O: $c_1=c_2=c_3$
E: Concurrency condition: $\left|\begin{smallmatrix}a_1&b_1&c_1\\a_2&b_2&c_2\\a_3&b_3&c_3\end{smallmatrix}\right|=0$.

#M
c: u5-family
Q: The family of lines through the intersection of $\ell_1=0$ and $\ell_2=0$ is
O: $\ell_1\ell_2=0$
O*: $\ell_1+k\ell_2=0$
O: $\ell_1-\ell_2=k$
O: $k\ell_1\ell_2=1$
E: Any point on both lines satisfies $\ell_1+k\ell_2=0$.

#M
c: u5-angle-lines
Q: Two lines with slopes $m_1$ and $m_2$ are perpendicular if
O: $m_1=m_2$
O: $m_1+m_2=0$
O*: $m_1m_2=-1$
O: $m_1m_2=1$
E: Then $1+m_1m_2=0$ and $\tan\theta$ is undefined.

#M
c: u5-angle-lines
Q: The angle from the line of slope $\frac12$ to the line of slope $3$ is
O*: $45^\circ$
O: $135^\circ$
O: $90^\circ$
O: $30^\circ$
E: $\tan\theta=\frac{3-\frac12}{1+\frac32}=1$.

#M
c: u5-triangle-area
Q: Three points are collinear if the area of the triangle they form is
O*: zero
O: one
O: negative
O: undefined
E: A zero-area triangle is flat.

#M
c: u5-homog-pair
Q: $ax^2+2hxy+by^2=0$ represents two real and distinct lines through the origin if
O*: $h^2>ab$
O: $h^2=ab$
O: $h^2<ab$
O: $a+b=0$
E: Like a quadratic, a positive "discriminant" gives two real factors.

#M
c: u5-pair-angle
Q: The lines $ax^2+2hxy+by^2=0$ are perpendicular if
O: $h^2=ab$
O*: $a+b=0$
O: $a=b$
O: $h=0$
E: Then $1+m_1m_2=1+\frac ab=0$.

#M
c: u5-pair-angle
Q: For $5x^2+6xy+y^2=0$, the value of $h$ is
O: $6$
O*: $3$
O: $5$
O: $1$
E: The coefficient of $xy$ is $2h=6$.

#M
c: u5-inclination
Q: The inclination of the line through $(0,0)$ and $(1,\sqrt3)$ is
O: $30^\circ$
O: $45^\circ$
O*: $60^\circ$
O: $90^\circ$
E: Slope $\sqrt3=\tan60^\circ$.
`);
