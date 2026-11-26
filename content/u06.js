/* Unit 6 · Conics */
M12.addConcepts(6, String.raw`
#C u6-conics Conic sections
pre: f-coord
R: Circles, ellipses, parabolas and hyperbolas are the curves you get by slicing a double cone with a plane; each has a simple distance definition.
B: - **Circle**: all points at a fixed distance (radius) from a fixed point (centre).
- **Parabola**: points equidistant from a fixed point (focus) and a fixed line (directrix).
- **Ellipse**: points whose distances from two fixed points (foci) add up to a constant $2a$.
- **Hyperbola**: points whose distances from two foci differ by a constant $2a$.
The **eccentricity** $e$ measures the shape: circle $e=0$, ellipse $0<e<1$, parabola $e=1$, hyperbola $e>1$.
X: Every conic equation in this unit is obtained by writing its distance definition with the distance formula and simplifying. When a question gives "a point moves so that…", that is exactly how to find its equation (a locus).

#C u6-perp-distance Perpendicular distance from a point to a line
pre: f-coord
R: The distance from $(x_1,y_1)$ to the line $ax+by+c=0$ is $\dfrac{|ax_1+by_1+c|}{\sqrt{a^2+b^2}}$.
F: $$d=\frac{|ax_1+by_1+c|}{\sqrt{a^2+b^2}}$$
B: Substitute the point into the left side of the line's equation, take the absolute value, and divide by $\sqrt{a^2+b^2}$.
This is the key tool for tangency: a line **touches** a circle exactly when its distance from the centre equals the radius.
E: Distance from $(1,-2)$ to $4x+3y+7=0$: $\frac{|4-6+7|}{5}=1$.

#C u6-circle-standard Circle: standard form
pre: f-coord
R: A circle with centre $(h,k)$ and radius $r$ is $(x-h)^2+(y-k)^2=r^2$; with centre at the origin, $x^2+y^2=r^2$.
F: $$(x-h)^2+(y-k)^2=r^2,\qquad x=h+r\cos\theta,\ y=k+r\sin\theta\ (\text{parametric})$$
B: It is the distance formula: the distance from any point $(x,y)$ on the circle to the centre is $r$. Squaring removes the root.
$r=0$ gives a single point (a point circle).
The **parametric** form $x=r\cos\theta,\ y=r\sin\theta$ describes the circle $x^2+y^2=r^2$, because $\cos^2\theta+\sin^2\theta=1$.
E: Centre $(-2,1)$, radius $5$: $(x+2)^2+(y-1)^2=25$, i.e. $x^2+y^2+4x-2y-20=0$.
M: The centre $(-2,1)$ gives $(x+2)^2$, not $(x-2)^2$.

#C u6-circle-general General form of a circle
pre: u6-circle-standard, f-complete-square
R: $x^2+y^2+2gx+2fy+c=0$ is a circle with centre $(-g,-f)$ and radius $\sqrt{g^2+f^2-c}$ (provided this is positive).
F: $$x^2+y^2+2gx+2fy+c=0:\quad \text{centre }(-g,-f),\quad r=\sqrt{g^2+f^2-c}$$
B: **Working rule:**
1. Make the coefficients of $x^2$ and $y^2$ both equal to 1 (divide through).
2. Centre $=\left(-\frac{\text{coeff of }x}{2},\ -\frac{\text{coeff of }y}{2}\right)$.
3. Radius $=\sqrt{(\text{half coeff of }x)^2+(\text{half coeff of }y)^2-\text{constant}}$.
If $g^2+f^2-c=0$ it is a point circle; if negative, there is no real circle.
X: The rule is completing the square: $x^2+2gx=(x+g)^2-g^2$ and $y^2+2fy=(y+f)^2-f^2$.
A second-degree equation is a circle only if $x^2$ and $y^2$ have **equal** coefficients and there is **no** $xy$ term.
E: $5x^2+5y^2+20x+25y+10=0\Rightarrow x^2+y^2+4x+5y+2=0$: centre $\left(-2,-\frac52\right)$, $r=\sqrt{4+\frac{25}4-2}=\frac{\sqrt{33}}2$.
M: Forgetting to divide by the common coefficient first.

#C u6-circle-diameter Circle on a given diameter
pre: u6-circle-standard
R: The circle with diameter from $(x_1,y_1)$ to $(x_2,y_2)$ is $(x-x_1)(x-x_2)+(y-y_1)(y-y_2)=0$.
F: $$(x-x_1)(x-x_2)+(y-y_1)(y-y_2)=0$$
B: The angle in a semicircle is a right angle, so for any point $P$ on the circle, $PA\perp PB$; writing $m_{PA}\cdot m_{PB}=-1$ and clearing fractions gives the formula.
Alternatively: centre = midpoint of the diameter, radius = half its length.
E: Ends $(1,2)$ and $(5,6)$: $(x-1)(x-5)+(y-2)(y-6)=0\Rightarrow x^2+y^2-6x-8y+17=0$.

#C u6-circle-conditions Finding a circle from given conditions
pre: u6-circle-general, f-linear-eq, u6-perp-distance
R: A circle has three unknowns ($g,f,c$ or $h,k,r$), so it needs three conditions. Turn each condition into an equation and solve.
B: Useful translations:
- **passes through** $(p,q)$: substitute it into the equation;
- **centre on a line**: the centre $(h,k)$ satisfies that line;
- **touches a line at a point**: the centre lies on the **normal** at that point (the line through the point perpendicular to the tangent);
- **touches a line** (point unknown): distance from the centre to the line $=r$;
- **touches the $x$-axis**: $r=|k|$; **touches the $y$-axis**: $r=|h|$;
- **passes through two points**: the centre lies on the perpendicular bisector of the chord joining them.
X: With three points, subtract the equations in pairs: the constant $c$ cancels, leaving two linear equations in $g$ and $f$.
E: Centre $(2,-3)$ and touching the $x$-axis: $r=|k|=3$, so $(x-2)^2+(y+3)^2=9$.
M: Writing the centre as $(g,f)$ instead of $(-g,-f)$.

#C u6-circle-tangent Tangent and normal to a circle at a point
pre: u6-circle-general, u2-tangent-normal
R: The tangent to $x^2+y^2+2gx+2fy+c=0$ at $(x_1,y_1)$ is $xx_1+yy_1+g(x+x_1)+f(y+y_1)+c=0$; the normal is the line through the point and the centre.
F: $$x^2+y^2=r^2:\ xx_1+yy_1=r^2;\qquad \text{general: } xx_1+yy_1+g(x+x_1)+f(y+y_1)+c=0$$
B: **Rule for writing the tangent:** replace $x^2\to xx_1$, $y^2\to yy_1$, $x\to\frac{x+x_1}2$, $y\to\frac{y+y_1}2$, and keep the constant.
The **normal** always passes through the centre, so it is the line joining the point of contact to the centre.
X: Derivation: implicit differentiation gives slope $-\frac{x_1+g}{y_1+f}$ at $(x_1,y_1)$; point-slope form plus the fact that the point lies on the circle gives the formula.
E: $x^2+y^2=10$ at $(1,3)$: tangent $x+3y=10$; normal: through $(0,0)$ and $(1,3)$: $y=3x$.
M: Using the tangent formula at a point that is not on the circle.

#C u6-tangency Condition for a line to touch a curve
pre: u6-circle-standard, f-quadratic-formula, u6-perp-distance
R: $y=mx+c$ touches $x^2+y^2=a^2$ iff $c^2=a^2(1+m^2)$, i.e. $c=\pm a\sqrt{1+m^2}$. In general, substitute the line into the curve and set the discriminant to zero.
F: $$\text{circle } x^2+y^2=a^2:\ c^2=a^2(1+m^2);\quad \text{parabola } y^2=4ax:\ c=\frac am;\quad \text{ellipse}:\ c^2=a^2m^2+b^2;\quad \text{hyperbola}:\ c^2=a^2m^2-b^2$$
B: Substituting $y=mx+c$ into a conic gives a quadratic in $x$. Its discriminant decides: $D>0$ two points (secant), $D=0$ one point (tangent), $D<0$ no points.
For a circle the quicker test is: distance from the centre to the line $=$ radius.
X: **Tangents with a given slope** $m$: just use $c=\pm a\sqrt{1+m^2}$ (circle at origin) and write $y=mx\pm a\sqrt{1+m^2}$. For a circle not at the origin, write the line as $y=mx+c$ (or $3x-4y+k=0$ for a given direction) and use distance $=$ radius.
E: Tangents to $x^2+y^2=9$ with slope $2$: $c=\pm3\sqrt{1+4}=\pm3\sqrt5$, so $y=2x\pm3\sqrt5$.
M: Forgetting the $\pm$: there are always two parallel tangents.

#C u6-point-position Position of a point and length of a tangent
pre: u6-circle-general
R: For $S(x,y)=x^2+y^2+2gx+2fy+c$: the point $(x_1,y_1)$ is outside, on, or inside the circle as $S(x_1,y_1)>0$, $=0$, $<0$; the tangent length from an outside point is $\sqrt{S(x_1,y_1)}$.
B: Substitute the point into the left side of the circle's equation (written with $x^2$ and $y^2$ having coefficient 1). The sign compares the distance to the centre with the radius.
E: $(2,3)$ and $x^2+y^2+2x-3y-10=0$: $4+9+4-9-10=-2<0$, so the point is inside.

#C u6-parabola Parabola: definition and standard forms
pre: f-coord
R: $y^2=4ax$ has vertex $(0,0)$, focus $(a,0)$, directrix $x=-a$, axis $y=0$, latus rectum $4a$; the forms $y^2=-4ax$, $x^2=4ay$, $x^2=-4ay$ open left, up and down.
F: | form | focus | directrix | opens |
| --- | --- | --- | --- |
| $y^2=4ax$ | $(a,0)$ | $x=-a$ | right |
| $y^2=-4ax$ | $(-a,0)$ | $x=a$ | left |
| $x^2=4ay$ | $(0,a)$ | $y=-a$ | up |
| $x^2=-4ay$ | $(0,-a)$ | $y=a$ | down |
B: **Definition:** distance to the focus $=$ distance to the directrix. With focus $(a,0)$ and directrix $x=-a$: $\sqrt{(x-a)^2+y^2}=|x+a|$, which squares to $y^2=4ax$.
Elements: the **vertex** is midway between focus and directrix; the **axis** passes through the focus perpendicular to the directrix; the **latus rectum** is the focal chord perpendicular to the axis, of length $4a$, with ends $(a,\pm2a)$.
Parametric form: $x=at^2,\ y=2at$.
X: To find a parabola from a focus and directrix that are not standard, use the definition directly: $(\text{distance to focus})^2=(\text{distance to directrix})^2$.
E: $y^2=20x$: $4a=20\Rightarrow a=5$: focus $(5,0)$, directrix $x=-5$.
M: In $y^2=20x$, $a$ is $5$ (a quarter of 20), not 20.

#C u6-parabola-shifted Parabolas with vertex $(h,k)$
pre: u6-parabola, f-complete-square
R: $(y-k)^2=\pm4a(x-h)$ and $(x-h)^2=\pm4a(y-k)$ are the standard parabolas moved so that the vertex is $(h,k)$; complete the square to reach this form.
B: Put $X=x-h$, $Y=y-k$: everything about the standard form (focus at $a$ from the vertex along the axis, directrix at $a$ on the other side) carries over.
**Example:** $x^2-4x-4y-2=0\Rightarrow(x-2)^2=4y+6=4\left(y+\tfrac32\right)$: vertex $\left(2,-\tfrac32\right)$, $a=1$, opens up, focus $\left(2,-\tfrac12\right)$, directrix $y=-\tfrac52$.
X: If you know the vertex and focus, the direction from vertex to focus tells you which way the parabola opens and the distance between them is $a$.
M: After completing the square, factor out the coefficient of $y$ (or $x$) to read $4a$.

#C u6-parabola-tangent Tangent and normal to a parabola
pre: u6-parabola, u2-tangent-normal
R: The tangent to $y^2=4ax$ at $(x_1,y_1)$ is $yy_1=2a(x+x_1)$; the line $y=mx+c$ touches it iff $c=\frac am$, at the point $\left(\frac a{m^2},\frac{2a}m\right)$.
F: $$yy_1=2a(x+x_1),\qquad c=\frac am,\qquad \text{contact point }\Big(\frac{a}{m^2},\frac{2a}{m}\Big)$$
B: Slope at $(x_1,y_1)$ by implicit differentiation: $2yy'=4a\Rightarrow y'=\frac{2a}{y_1}$. The normal has slope $-\frac{y_1}{2a}$.
For other parabolas, differentiate the given equation directly and use point-slope form.
E: $y^2=8x$ at $(2,4)$: here $a=2$, so the tangent is $4y=4(x+2)$, i.e. $y=x+2$, and the normal (slope $-1$) is $x+y=6$.

#C u6-ellipse Ellipse: definition and key features
pre: f-coord
R: $\frac{x^2}{a^2}+\frac{y^2}{b^2}=1\ (a>b)$: centre $(0,0)$, vertices $(\pm a,0)$, co-vertices $(0,\pm b)$, foci $(\pm c,0)$ with $c^2=a^2-b^2$, eccentricity $e=\frac ca<1$, directrices $x=\pm\frac ae$, latus rectum $\frac{2b^2}a$.
F: $$\frac{x^2}{a^2}+\frac{y^2}{b^2}=1,\qquad c^2=a^2-b^2,\qquad e=\frac ca,\qquad x=\pm\frac ae,\qquad \text{LR}=\frac{2b^2}{a}$$
B: $2a$ is the **major axis** (the longer one) and $2b$ the **minor axis**. The foci always lie on the major axis.
If the larger denominator is under $y^2$, the major axis is vertical: $\frac{x^2}{b^2}+\frac{y^2}{a^2}=1$ with foci $(0,\pm c)$ and directrices $y=\pm\frac ae$.
Definition: $|PF|+|PF'|=2a$ for every point $P$ on the ellipse. Parametric form: $(a\cos\theta,\ b\sin\theta)$.
X: $c=ae$ and $b^2=a^2(1-e^2)$ are handy when the eccentricity is given.
A circle is the special case $a=b$ ($e=0$).
E: $\frac{x^2}{25}+\frac{y^2}{9}=1$: $a=5,b=3,c=4$, $e=\frac45$, foci $(\pm4,0)$, directrices $x=\pm\frac{25}4$.
M: For an ellipse $c^2=a^2-b^2$ (minus); for a hyperbola it is plus.

#C u6-ellipse-shifted Ellipses with centre $(h,k)$
pre: u6-ellipse, f-complete-square
R: $\frac{(x-h)^2}{a^2}+\frac{(y-k)^2}{b^2}=1$ (horizontal) or $\frac{(x-h)^2}{b^2}+\frac{(y-k)^2}{a^2}=1$ (vertical); every feature is the standard one shifted by $(h,k)$.
B: To analyse an equation like $4x^2+24x+9y^2-36y+36=0$: group $x$ terms and $y$ terms, complete both squares, move the constant across, and divide to get 1 on the right.
Then: centre $(h,k)$; vertices $h\pm a$ (horizontal) or $k\pm a$ (vertical); foci at distance $c$ from the centre along the major axis; directrices at distance $\frac ae$.
E: Foci $(2,1),(2,7)$ and major axis 10: centre $(2,4)$, $c=3$, $a=5$, $b=4$, vertical: $\frac{(x-2)^2}{16}+\frac{(y-4)^2}{25}=1$.

#C u6-ellipse-tangent Tangents to an ellipse
pre: u6-ellipse, u6-tangency
R: $y=mx+c$ touches $\frac{x^2}{a^2}+\frac{y^2}{b^2}=1$ iff $c^2=a^2m^2+b^2$; the tangent at $(x_1,y_1)$ is $\frac{xx_1}{a^2}+\frac{yy_1}{b^2}=1$.
F: $$c^2=a^2m^2+b^2,\qquad \frac{xx_1}{a^2}+\frac{yy_1}{b^2}=1$$
B: If $c^2<a^2m^2+b^2$ the line cuts the ellipse in two points (secant); if $c^2>a^2m^2+b^2$ it misses it.
**Closest distance from an ellipse to a line** that does not meet it: find the tangents parallel to the line; the nearer tangent's distance from the line is the minimum distance.
E: $y=x+c$ touches $\frac{x^2}{4}+\frac{y^2}{2}=1$ when $c^2=4\cdot1+2=6$, i.e. $c=\pm\sqrt6$.

#C u6-hyperbola Hyperbola: definition and key features
pre: f-coord
R: $\frac{x^2}{a^2}-\frac{y^2}{b^2}=1$: vertices $(\pm a,0)$, foci $(\pm c,0)$ with $c^2=a^2+b^2$, $e=\frac ca>1$, directrices $x=\pm\frac ae$, asymptotes $y=\pm\frac bax$, latus rectum $\frac{2b^2}a$.
F: $$\frac{x^2}{a^2}-\frac{y^2}{b^2}=1,\quad c^2=a^2+b^2,\quad e=\frac ca,\quad x=\pm\frac ae,\quad y=\pm\frac bax,\quad \text{LR}=\frac{2b^2}a$$
B: The **transverse axis** (length $2a$) joins the vertices; the **conjugate axis** has length $2b$. The positive term tells you the direction: if $y^2$ is positive, $\frac{y^2}{a^2}-\frac{x^2}{b^2}=1$ opens up and down, with foci $(0,\pm c)$ and directrices $y=\pm\frac ae$.
Unlike an ellipse, $a$ need not be larger than $b$; $a$ is always under the **positive** term.
Definition: $\big||PF|-|PF'|\big|=2a$. Parametric form $(a\sec\theta,\ b\tan\theta)$.
X: $b^2=a^2(e^2-1)$, so $e$ together with $a$ is enough to find $b$.
E: $\frac{x^2}{16}-\frac{y^2}{9}=1$: $a=4,b=3,c=5$, $e=\frac54$, directrices $x=\pm\frac{16}5$, asymptotes $y=\pm\frac34x$.
M: Using $c^2=a^2-b^2$ (the ellipse rule) for a hyperbola.

#C u6-hyperbola-shifted Hyperbolas with centre $(h,k)$
pre: u6-hyperbola, f-complete-square
R: $\frac{(x-h)^2}{a^2}-\frac{(y-k)^2}{b^2}=1$ (horizontal) or $\frac{(y-k)^2}{a^2}-\frac{(x-h)^2}{b^2}=1$ (vertical): features shift by $(h,k)$.
B: The centre is the midpoint of the foci (and of the vertices). Distances from the centre: vertices $a$, foci $c$, directrices $\frac ae$.
To build the equation from data: find the centre and orientation, then $a$ and $c$ (or $e$), and $b^2=c^2-a^2$.
E: Foci $(4,-3),(4,7)$ and a vertex $(4,5)$: centre $(4,2)$, $c=5$, $a=3$, $b^2=16$: $\frac{(y-2)^2}9-\frac{(x-4)^2}{16}=1$.

#C u6-hyperbola-tangent Tangents and normals to a hyperbola
pre: u6-hyperbola, u6-tangency
R: $y=mx+c$ touches $\frac{x^2}{a^2}-\frac{y^2}{b^2}=1$ iff $c^2=a^2m^2-b^2$; tangent at $(x_1,y_1)$: $\frac{xx_1}{a^2}-\frac{yy_1}{b^2}=1$; normal: $\frac{a^2x}{x_1}+\frac{b^2y}{y_1}=a^2+b^2$.
F: $$c^2=a^2m^2-b^2,\qquad \frac{xx_1}{a^2}-\frac{yy_1}{b^2}=1,\qquad \frac{a^2x}{x_1}+\frac{b^2y}{y_1}=a^2+b^2$$
B: The normal at $(x_1,y_1)$ has slope $-\frac{a^2y_1}{b^2x_1}$. For any point on the hyperbola, $\frac{y_1^2}{b^2}=\frac{x_1^2}{a^2}-1<\frac{x_1^2}{a^2}$, so $\left|\frac{y_1}{x_1}\right|<\frac ba$ and every normal has a slope strictly between $-\frac ab$ and $\frac ab$.
E: Tangents to $2x^2-3y^2=24$ through $(2,-4)$: $\frac{x^2}{12}-\frac{y^2}8=1$, so $y=mx\pm\sqrt{12m^2-8}$; substituting the point gives $m=3$ or $m=-1$.

#C u6-applications Conics in real life
pre: u6-parabola, u6-ellipse
R: Parabolic reflectors send rays from the focus out parallel to the axis, parabolic arches and suspension-bridge cables follow parabolas, and a loop of string around two stakes traces an ellipse.
B: - **Reflector / dish:** put the vertex at the origin, use $y^2=4ax$, and the bulb or receiver goes at the focus $(a,0)$.
- **Arch or cable:** put the vertex at a convenient origin, write $x^2=\pm4ay$ or $(x-h)^2=-4a(y-k)$, and use a known point (such as the end of the span) to find $a$.
- **Gardener's ellipse:** two stakes at the foci and a loop of string of length $2a+2c$ trace an ellipse.
E: A flashlight reflector $x=\frac{y^2}{20}$ is $y^2=20x$, so $4a=20$, $a=5$: the bulb goes at $(5,0)$.
`);

M12.addQuestions(6, String.raw`
#Q 6.1 1(a)
Q: Find the equation of the circle with centre $(5,7)$ and radius $2$.
T: u6-circle-standard
S: $(x-5)^2+(y-7)^2=2^2$.
C: u6-circle-standard
S: Expand: $x^2-10x+25+y^2-14y+49=4$.
A: $x^2+y^2-10x-14y+70=0$.

#Q 6.1 1(b)
Q: Find the equation of the circle with centre $(a\cos\theta,\ a\sin\theta)$ and radius $a$.
T: u6-circle-standard, f-trig-identities
S: $(x-a\cos\theta)^2+(y-a\sin\theta)^2=a^2$.
C: u6-circle-standard
S: Expand: $x^2+y^2-2ax\cos\theta-2ay\sin\theta+a^2(\cos^2\theta+\sin^2\theta)=a^2$, and $\cos^2\theta+\sin^2\theta=1$.
C: f-trig-identities
A: $x^2+y^2-2ax\cos\theta-2ay\sin\theta=0$ (it passes through the origin).

#Q 6.1 1(c)
Q: Find the equation of the circle with ends of a diameter at $(3,4)$ and $(2,-7)$.
T: u6-circle-diameter
S: $(x-3)(x-2)+(y-4)(y+7)=0$.
C: u6-circle-diameter
S: $x^2-5x+6+y^2+3y-28=0$.
A: $x^2+y^2-5x+3y-22=0$.

#Q 6.1 2(a)
Q: Express $2x^2+2y^2-4x-12y+11=0$ in standard form and find its centre and radius.
T: u6-circle-general, f-complete-square
S: Divide by 2: $x^2+y^2-2x-6y+\tfrac{11}2=0$.
C: u6-circle-general
S: Complete the squares: $(x-1)^2-1+(y-3)^2-9+\tfrac{11}2=0\Rightarrow(x-1)^2+(y-3)^2=\tfrac92$.
C: f-complete-square
A: $(x-1)^2+(y-3)^2=\frac92$; centre $(1,3)$, radius $\frac{3}{\sqrt2}=\frac{3\sqrt2}{2}$.

#Q 6.1 2(b)
Q: Express $x^2+y^2-2ax+2by-2ab=0$ in standard form and find its centre and radius.
T: u6-circle-general, f-complete-square
S: $(x-a)^2-a^2+(y+b)^2-b^2-2ab=0$.
C: f-complete-square
S: $(x-a)^2+(y+b)^2=a^2+2ab+b^2=(a+b)^2$.
A: $(x-a)^2+(y+b)^2=(a+b)^2$; centre $(a,-b)$, radius $|a+b|$.

#Q 6.1 3
Q: Find the equation of the circle passing through $(2,8)$, $(5,-1)$ and $(-3,3)$; also find its centre and radius.
T: u6-circle-conditions, f-linear-eq
S: Let the circle be $x^2+y^2+2gx+2fy+c=0$. Substituting the points:
$(2,8)$: $4g+16f+c=-68$; $\ (5,-1)$: $10g-2f+c=-26$; $\ (-3,3)$: $-6g+6f+c=-18$.
C: u6-circle-conditions
S: Subtract to remove $c$: (2nd)−(1st): $6g-18f=42\Rightarrow g-3f=7$; (2nd)−(3rd): $16g-8f=-8\Rightarrow2g-f=-1$.
C: f-linear-eq
S: From $f=2g+1$: $g-6g-3=7\Rightarrow g=-2$, $f=-3$. Then $-8-48+c=-68\Rightarrow c=-12$.
S: Circle: $x^2+y^2-4x-6y-12=0$; centre $(-g,-f)=(2,3)$, $r=\sqrt{4+9+12}=5$.
C: u6-circle-general
A: $x^2+y^2-4x-6y-12=0$; centre $(2,3)$, radius $5$.

#Q 6.1 5
Q: Find the equation of the circle passing through $(1,3)$ and $(2,-1)$ with its centre on the line $x+y=3$. Does the point $(4,1)$ lie on the circle?
T: u6-circle-conditions
S: Let the centre be $(h,k)$ with $h+k=3$. It is equidistant from the two points:
$(h-1)^2+(k-3)^2=(h-2)^2+(k+1)^2\Rightarrow2h-8k+5=0$.
C: u6-circle-conditions
S: With $h=3-k$: $6-2k-8k+5=0\Rightarrow k=\tfrac{11}{10}$, $h=\tfrac{19}{10}$.
C: f-linear-eq
S: $r^2=\left(\tfrac9{10}\right)^2+\left(-\tfrac{19}{10}\right)^2=\tfrac{442}{100}$. Expanding $(x-1.9)^2+(y-1.1)^2=4.42$ and multiplying by 5: $5x^2+5y^2-19x-11y+2=0$.
S: Test $(4,1)$: $80+5-76-11+2=0$. Yes, it lies on the circle.
A: $5x^2+5y^2-19x-11y+2=0$; $(4,1)$ lies on it.

#Q 6.1 6
Q: Find the equation of the circle passing through $(-3,-4)$ and touching the line $3x-y-1=0$ at $(1,2)$.
T: u6-circle-conditions, u6-circle-tangent
S: The centre lies on the normal to the line at $(1,2)$: slope of the line is 3, so the normal has slope $-\tfrac13$: $x+3y-7=0$.
W: A radius drawn to the point of contact is perpendicular to the tangent.
C: u6-circle-conditions
!:
S: Centre $(h,k)$ equidistant from $(1,2)$ and $(-3,-4)$: $(h-1)^2+(k-2)^2=(h+3)^2+(k+4)^2\Rightarrow2h+3k+5=0$.
S: Solve with $h=7-3k$: $14-6k+3k+5=0\Rightarrow k=\tfrac{19}3$, $h=-12$.
C: f-linear-eq
S: $r^2=(-12-1)^2+\left(\tfrac{19}3-2\right)^2=169+\tfrac{169}9=\tfrac{1690}9$. So $(x+12)^2+\left(y-\tfrac{19}3\right)^2=\tfrac{1690}9$; multiply out and by 3.
A: $3x^2+3y^2+72x-38y-11=0$.

#Q 6.1 7
Q: Find the equation of the circle of radius $a$ lying in the second quadrant and tangent to both axes.
T: u6-circle-conditions
S: Touching both axes means the centre is $a$ units from each axis. In the second quadrant ($x<0,y>0$): centre $(-a,a)$.
C: u6-circle-conditions
S: $(x+a)^2+(y-a)^2=a^2$.
A: $x^2+y^2+2ax-2ay+a^2=0$.

#Q 6.1 9
Q: Find the equation of the circle passing through the point of intersection of $x-y-5=0$ and $2x+y-4=0$, with centre $(5,0)$.
T: u6-circle-conditions, f-linear-eq
S: Intersection: adding the equations gives $3x-9=0\Rightarrow x=3$, $y=-2$.
C: f-linear-eq
S: $r^2=(3-5)^2+(-2-0)^2=8$.
S: $(x-5)^2+y^2=8$.
C: u6-circle-standard
A: $x^2+y^2-10x+17=0$.

#Q 6.1 11
Q: Find the equations of the circles passing through $A(3,2)$ and $B(3,-2)$ and touching the line $x+2y+3=0$.
T: u6-circle-conditions, u6-perp-distance
S: The centre lies on the perpendicular bisector of $AB$. $AB$ is vertical ($x=3$) with midpoint $(3,0)$, so the bisector is the $x$-axis: centre $(h,0)$.
C: u6-circle-conditions
S: Radius: $r^2=(h-3)^2+4$. Tangency: distance from $(h,0)$ to the line equals $r$: $\dfrac{|h+3|}{\sqrt5}=r$.
C: u6-perp-distance
S: Square: $(h+3)^2=5(h^2-6h+13)\Rightarrow4h^2-36h+56=0\Rightarrow h^2-9h+14=0\Rightarrow h=2$ or $7$.
C: f-factor
S: $h=2$: $r^2=5$, $(x-2)^2+y^2=5$. $\quad h=7$: $r^2=20$, $(x-7)^2+y^2=20$.
A: $x^2+y^2-4x-1=0$ and $x^2+y^2-14x+29=0$.

#Q 6.2 1(a)
Q: Find the equations of the tangent and normal to $x^2+y^2=8$ at $(2,2)$ and at $(2\sqrt2\cos\theta,\ 2\sqrt2\sin\theta)$.
T: u6-circle-tangent
S: At $(2,2)$: tangent $2x+2y=8\Rightarrow x+y=4$; normal through the centre $(0,0)$ and $(2,2)$: $x-y=0$.
C: u6-circle-tangent
S: At $(2\sqrt2\cos\theta,2\sqrt2\sin\theta)$: tangent $2\sqrt2x\cos\theta+2\sqrt2y\sin\theta=8\Rightarrow x\cos\theta+y\sin\theta=2\sqrt2$.
S: Normal $xy_1-yx_1=0$: $x\sin\theta-y\cos\theta=0$.
A: At $(2,2)$: $x+y=4$, $x-y=0$. At the general point: $x\cos\theta+y\sin\theta=2\sqrt2$, $x\sin\theta-y\cos\theta=0$.

#Q 6.2 1(b)
Q: Find the equations of the tangent and normal to $x^2+y^2-6x-2y-7=0$ at $(4,5)$.
T: u6-circle-tangent
S: Check the point: $16+25-24-10-7=0$ ✓. Here $g=-3$, $f=-1$, $c=-7$.
S: Tangent: $4x+5y-3(x+4)-(y+5)-7=0\Rightarrow x+4y-24=0$.
C: u6-circle-tangent
S: Normal: through the centre $(3,1)$ and $(4,5)$, slope $4$: $y-5=4(x-4)\Rightarrow4x-y-11=0$.
A: Tangent $x+4y-24=0$; normal $4x-y-11=0$.

#Q 6.2 2
Q: Show that the line $4x+3y-25=0$ is tangent to the circle $x^2+y^2=25$ and find the point of contact.
T: u6-tangency, u6-perp-distance
S: Distance from the centre $(0,0)$ to the line: $\dfrac{|-25|}{\sqrt{16+9}}=5=r$. So the line is a tangent. $\blacksquare$
C: u6-perp-distance
S: The point of contact is the foot of the perpendicular from the centre, in the direction $(4,3)$: $5\cdot\left(\tfrac45,\tfrac35\right)=(4,3)$.
S: Check: $4^2+3^2=25$ and $16+9-25=0$ ✓.
A: Tangent (distance $=5=r$); point of contact $(4,3)$.

#Q 6.2 3
Q: Find the equations of the tangents to $x^2+y^2=4$ (a) inclined at $45^\circ$ to the $x$-axis, (b) parallel to $3x+4y+1=0$, (c) perpendicular to $6x-8y+3=0$.
T: u6-tangency
S: For $x^2+y^2=a^2$ ($a=2$) the tangents with slope $m$ are $y=mx\pm2\sqrt{1+m^2}$.
C: u6-tangency
S: (a) $m=1$: $y=x\pm2\sqrt2$, i.e. $x-y\pm2\sqrt2=0$.
S: (b) $m=-\tfrac34$: $c=\pm2\cdot\tfrac54=\pm\tfrac52$: $y=-\tfrac34x\pm\tfrac52$, i.e. $3x+4y\mp10=0$.
S: (c) The given line has slope $\tfrac34$, so $m=-\tfrac43$: $c=\pm2\cdot\tfrac53=\pm\tfrac{10}3$, i.e. $4x+3y\mp10=0$.
A: (a) $x-y\pm2\sqrt2=0$ (b) $3x+4y\pm10=0$ (c) $4x+3y\pm10=0$.

#Q 6.2 4
Q: Find the equations of the tangents to $x^2+y^2-4x-2y-4=0$ which are parallel to $3x-4y+2=0$.
T: u6-tangency, u6-perp-distance, u6-circle-general
S: Centre $(2,1)$, radius $\sqrt{4+1+4}=3$.
C: u6-circle-general
S: Parallel lines: $3x-4y+k=0$. Distance from $(2,1)$ must be 3: $\dfrac{|6-4+k|}{5}=3\Rightarrow|2+k|=15$.
C: u6-perp-distance
S: $k=13$ or $k=-17$.
A: $3x-4y+13=0$ and $3x-4y-17=0$.

#Q 6.3 1(i)
Q: Find the focus, vertex and directrix of $y^2=12x$ and sketch it.
T: u6-parabola
S: $y^2=4ax$ with $4a=12\Rightarrow a=3$; opens to the right.
C: u6-parabola
S: Vertex $(0,0)$, focus $(3,0)$, directrix $x=-3$.
P: {"x":[-4,8],"y":[-8,8],"step":2,"par":[{"x":"3*t*t","y":"6*t","t":[-1.6,1.6]}],"lines":[{"v":-3}],"pts":[[0,0,"V"],[3,0,"F(3, 0)"]],"labels":[[-3.8,6.5,"x = −3"]]}
A: Vertex $(0,0)$, focus $(3,0)$, directrix $x=-3$.

#Q 6.3 1(ii)
Q: Find the focus, vertex and directrix of $x^2=8(y-1)$ and sketch it.
T: u6-parabola-shifted
S: $X^2=4aY$ with $X=x$, $Y=y-1$, $4a=8\Rightarrow a=2$; opens upward.
C: u6-parabola-shifted
S: Vertex $(0,1)$; focus $2$ above it: $(0,3)$; directrix $2$ below: $y=-1$.
A: Vertex $(0,1)$, focus $(0,3)$, directrix $y=-1$.

#Q 6.3 1(iii)
Q: Find the focus, vertex and directrix of $y^2=-8(x-3)$ and sketch it.
T: u6-parabola-shifted
S: $Y^2=-4aX$ with $X=x-3$, $Y=y$, $a=2$; opens to the left.
C: u6-parabola-shifted
S: Vertex $(3,0)$; focus $(3-2,0)=(1,0)$; directrix $x=3+2=5$.
A: Vertex $(3,0)$, focus $(1,0)$, directrix $x=5$.

#Q 6.3 1(v)
Q: Find the focus, vertex and directrix of $x^2-4x-8y+4=0$ and sketch it.
T: u6-parabola-shifted, f-complete-square
S: $x^2-4x+4=8y\Rightarrow(x-2)^2=8y$.
C: f-complete-square
S: $4a=8\Rightarrow a=2$, opens upward, vertex $(2,0)$.
C: u6-parabola-shifted
S: Focus $(2,2)$, directrix $y=-2$.
A: Vertex $(2,0)$, focus $(2,2)$, directrix $y=-2$.

#Q 6.3 2(i)
Q: Write the equation of the parabola with focus $(-3,2)$ and directrix $x=5$.
T: u6-parabola
S: Distance to focus $=$ distance to directrix: $(x+3)^2+(y-2)^2=(x-5)^2$.
C: u6-parabola
S: $x^2+6x+9+(y-2)^2=x^2-10x+25\Rightarrow(y-2)^2=-16x+16$.
A: $(y-2)^2=-16(x-1)$.

#Q 6.3 2(ii)
Q: Write the equation of the parabola with focus $(3,5)$ and vertex $(3,2)$.
T: u6-parabola-shifted
S: The focus is directly above the vertex: the parabola opens upward with $a=5-2=3$.
C: u6-parabola-shifted
S: $(x-3)^2=4\cdot3\,(y-2)$.
A: $(x-3)^2=12(y-2)$.

#Q 6.3 2(iii)
Q: Write the equation of the parabola with directrix $x=4$ and vertex $(6,3)$.
T: u6-parabola-shifted
S: The vertex is $2$ units to the right of the directrix, so the parabola opens right with $a=2$.
C: u6-parabola-shifted
S: $(y-3)^2=4\cdot2\,(x-6)$.
A: $(y-3)^2=8(x-6)$.

#Q 6.3 2(iv)
Q: Write the equation of the parabola with axis $y=0$ passing through $(2,2)$ and $(6,-3)$.
T: u6-parabola-shifted, f-linear-eq
S: Axis $y=0$ means the form $y^2=4a(x-h)$.
C: u6-parabola-shifted
S: Substitute: $4=4a(2-h)$ and $9=4a(6-h)$. Divide: $\dfrac94=\dfrac{6-h}{2-h}\Rightarrow18-9h=24-4h\Rightarrow h=-\dfrac65$.
C: f-linear-eq
S: Then $4a=\dfrac{4}{2+\frac65}=\dfrac54$, so $y^2=\dfrac54\left(x+\dfrac65\right)$.
A: $4y^2=5x+6$.

#Q 6.3 3
Q: Find the equation of the parabola having its focus at the origin and directrix parallel to (i) the $x$-axis, (ii) the $y$-axis.
T: u6-parabola
S: (i) Directrix $y=d$ ($d$ = directed distance from the origin): $x^2+y^2=(y-d)^2\Rightarrow x^2=-2dy+d^2$.
C: u6-parabola
S: (ii) Directrix $x=d$: $x^2+y^2=(x-d)^2\Rightarrow y^2=-2dx+d^2$.
A: (i) $x^2=-2dy+d^2$ (ii) $y^2=-2dx+d^2$, where $d$ is the directed distance from the origin to the directrix.

#Q 6.3 4
Q: Show that the parabola with focus $(a\cos\theta,\ a\sin\theta)$ and directrix $x\cos\theta+y\sin\theta+a=0$ is $(x\sin\theta-y\cos\theta)^2=4a(x\cos\theta+y\sin\theta)$.
T: u6-parabola, u6-perp-distance, f-trig-identities
S: Let $P=x\cos\theta+y\sin\theta$. Distance to the directrix: $\dfrac{|P+a|}{\sqrt{\cos^2\theta+\sin^2\theta}}=|P+a|$.
C: u6-perp-distance
S: Distance$^2$ to the focus: $(x-a\cos\theta)^2+(y-a\sin\theta)^2=x^2+y^2-2aP+a^2$.
S: Equate the squares: $x^2+y^2-2aP+a^2=P^2+2aP+a^2\Rightarrow x^2+y^2-P^2=4aP$.
C: u6-parabola
!:
S: Since $(x\cos\theta+y\sin\theta)^2+(x\sin\theta-y\cos\theta)^2=x^2+y^2$, we get $x^2+y^2-P^2=(x\sin\theta-y\cos\theta)^2$. Hence $(x\sin\theta-y\cos\theta)^2=4a(x\cos\theta+y\sin\theta)$. $\blacksquare$
C: f-trig-identities
A: Shown.

#Q 6.3 8
Q: Find the equations of the tangent and normal to the parabola $y^2=4ax$ at $(at^2,2at)$.
T: u6-parabola-tangent
S: Tangent $yy_1=2a(x+x_1)$: $\ y(2at)=2a(x+at^2)\Rightarrow ty=x+at^2$.
C: u6-parabola-tangent
S: Tangent slope $\dfrac1t$, so the normal slope is $-t$: $y-2at=-t(x-at^2)$.
A: Tangent $ty=x+at^2$; normal $y=-tx+2at+at^3$.

#Q 6.3 9
Q: Find the equations of the tangent and normal to $x^2-6x-2y+11=0$ at $(5,3)$.
T: u6-parabola-tangent, u2-implicit
S: Differentiate: $2x-6-2y'=0\Rightarrow y'=x-3=2$ at $x=5$.
C: u2-implicit
S: Tangent: $y-3=2(x-5)\Rightarrow2x-y-7=0$.
S: Normal: slope $-\tfrac12$: $y-3=-\tfrac12(x-5)\Rightarrow x+2y-11=0$.
C: u2-tangent-normal
A: Tangent $2x-y-7=0$; normal $x+2y-11=0$.

#Q 6.3 10
Q: Find the equation of the tangent to $y^2=12x$ which is parallel to $3x-y+4=0$. Also find the point of tangency.
T: u6-parabola-tangent
S: $a=3$ and the slope is $m=3$. Tangency condition $c=\dfrac am=1$: tangent $y=3x+1$.
C: u6-parabola-tangent
S: Point of contact $\left(\dfrac a{m^2},\dfrac{2a}m\right)=\left(\dfrac13,2\right)$. Check: $2^2=12\cdot\tfrac13$ ✓.
A: $3x-y+1=0$, touching at $\left(\frac13,2\right)$.

#Q 6.4 1(i)
Q: Find the equation of the ellipse with foci $(0,\pm5)$ and minor axis of length 8.
T: u6-ellipse
S: Foci on the $y$-axis: vertical major axis, $c=5$; minor axis $2b=8\Rightarrow b=4$.
C: u6-ellipse
S: $a^2=b^2+c^2=16+25=41$: $\ \dfrac{x^2}{16}+\dfrac{y^2}{41}=1$.
A: $\frac{x^2}{16}+\frac{y^2}{41}=1$.

#Q 6.4 1(ii)
Q: Find the equation of the ellipse with vertices $(-2,5)$, $(-2,-3)$ and foci $(-2,4)$, $(-2,-2)$.
T: u6-ellipse-shifted
S: Centre = midpoint of the vertices $=(-2,1)$; vertical major axis with $a=4$; $c=4-1=3$.
C: u6-ellipse-shifted
S: $b^2=a^2-c^2=16-9=7$.
A: $\frac{(x+2)^2}{7}+\frac{(y-1)^2}{16}=1$.

#Q 6.4 1(iii)
Q: Find the equation of the ellipse with vertices $(\pm6,0)$ and eccentricity $\frac23$.
T: u6-ellipse
S: $a=6$, $c=ae=4$, $b^2=36-16=20$.
C: u6-ellipse
A: $\frac{x^2}{36}+\frac{y^2}{20}=1$.

#Q 6.4 1(iv)
Q: Find the equation of the ellipse with centre $(-3,1)$, major axis parallel to the $x$-axis of length 10, and minor axis parallel to the $y$-axis of length 6.
T: u6-ellipse-shifted
S: $a=5$ (horizontal), $b=3$.
C: u6-ellipse-shifted
A: $\frac{(x+3)^2}{25}+\frac{(y-1)^2}{9}=1$.

#Q 6.4 2(i)
Q: Find the centre, foci, eccentricity, vertices and directrices of $4x^2+9y^2=36$, and sketch it.
T: u6-ellipse
S: Divide by 36: $\dfrac{x^2}9+\dfrac{y^2}4=1$: $a=3$, $b=2$, horizontal.
C: u6-ellipse
S: $c=\sqrt{9-4}=\sqrt5$, $e=\dfrac{\sqrt5}3$.
S: Centre $(0,0)$; vertices $(\pm3,0)$; foci $(\pm\sqrt5,0)$; directrices $x=\pm\dfrac ae=\pm\dfrac{9}{\sqrt5}$.
P: {"x":[-5,5],"y":[-3,3],"step":1,"par":[{"x":"3*cos(t)","y":"2*sin(t)"}],"pts":[[2.236,0,"F"],[-2.236,0,"F′"],[3,0,"(3,0)"],[0,2,"(0,2)"]],"lines":[{"v":4.025},{"v":-4.025}]}
A: Centre $(0,0)$, foci $(\pm\sqrt5,0)$, $e=\frac{\sqrt5}{3}$, vertices $(\pm3,0)$, directrices $x=\pm\frac9{\sqrt5}$.

#Q 6.4 2(ii)
Q: Find the centre, foci, eccentricity, vertices and directrices of $4x^2+24x+9y^2-36y+36=0$, and sketch it.
T: u6-ellipse-shifted, f-complete-square
S: Complete the squares: $4(x^2+6x)+9(y^2-4y)+36=0\Rightarrow4(x+3)^2-36+9(y-2)^2-36+36=0$.
C: f-complete-square
S: $4(x+3)^2+9(y-2)^2=36\Rightarrow\dfrac{(x+3)^2}9+\dfrac{(y-2)^2}4=1$: centre $(-3,2)$, $a=3$, $b=2$, $c=\sqrt5$.
C: u6-ellipse-shifted
S: $e=\dfrac{\sqrt5}3$; vertices $(-3\pm3,2)=(0,2),(-6,2)$; foci $(-3\pm\sqrt5,2)$; directrices $x=-3\pm\dfrac9{\sqrt5}$.
A: Centre $(-3,2)$, foci $(-3\pm\sqrt5,2)$, $e=\frac{\sqrt5}3$, vertices $(0,2),(-6,2)$, directrices $x=-3\pm\frac{9}{\sqrt5}$.

#Q 6.4 3
Q: Find the equation of the locus of points $P(x,y)$ such that the sum of the distances from $P$ to $(-3,0)$ and $(3,0)$ is 10.
T: u6-ellipse
S: This is the definition of an ellipse with foci $(\pm3,0)$ and $2a=10$: $a=5$, $c=3$.
C: u6-ellipse
S: $b^2=25-9=16$.
A: $\frac{x^2}{25}+\frac{y^2}{16}=1$.

#Q 6.4 4
Q: Find the equation of an ellipse centred at $(5,3)$ that is tangent to both the $x$-axis and the $y$-axis.
T: u6-ellipse-shifted
S: Touching the $y$-axis: the horizontal semi-axis reaches $x=0$, so it is $5$. Touching the $x$-axis: the vertical semi-axis is $3$.
C: u6-ellipse-shifted
A: $\frac{(x-5)^2}{25}+\frac{(y-3)^2}{9}=1$.

#Q 6.4 8
Q: Find the minimum distance from the ellipse $\frac{x^2}9+\frac{y^2}4=1$ to the line $x+y=6$.
T: u6-ellipse-tangent, u6-perp-distance
S: Tangents parallel to the line have slope $m=-1$: $c^2=a^2m^2+b^2=9+4=13$, so $x+y=\pm\sqrt{13}$.
C: u6-ellipse-tangent
S: The line $x+y=6$ is beyond the nearer tangent $x+y=\sqrt{13}$ (since $6>\sqrt{13}$), so it does not meet the ellipse.
S: Distance between the parallel lines $x+y=6$ and $x+y=\sqrt{13}$: $\dfrac{6-\sqrt{13}}{\sqrt2}$.
C: u6-perp-distance
A: $\frac{6-\sqrt{13}}{\sqrt2}=\frac{6\sqrt2-\sqrt{26}}{2}\approx1.69$.

#Q 6.4 9
Q: Find the value of $k$ for which the line $y=2x+k$ is tangent to the ellipse $\frac{x^2}9+y^2=1$.
T: u6-ellipse-tangent
S: $a^2=9$, $b^2=1$, $m=2$: $k^2=a^2m^2+b^2=36+1=37$.
C: u6-ellipse-tangent
A: $k=\pm\sqrt{37}$.

#Q 6.4 10
Q: Determine whether the line $y=2x-3$ is a tangent, secant, or external to the ellipse $\frac{x^2}9+\frac{y^2}4=1$.
T: u6-ellipse-tangent, u6-tangency
S: Compare $c^2=9$ with $a^2m^2+b^2=9\cdot4+4=40$.
C: u6-ellipse-tangent
S: $c^2<a^2m^2+b^2$, so the line cuts the ellipse in two points: a **secant**.
S: Check by substitution: $\dfrac{x^2}9+\dfrac{(2x-3)^2}4=1\Rightarrow40x^2-108x+45=0$, discriminant $108^2-4(40)(45)=4464>0$ ✓.
C: u6-tangency
A: Secant.

#Q 6.5 1(i)
Q: Find the equation of the hyperbola with centre $(0,0)$, focus $(0,10)$ and vertex $(0,8)$, and sketch it.
T: u6-hyperbola
S: Focus and vertex on the $y$-axis: vertical transverse axis, $c=10$, $a=8$.
C: u6-hyperbola
S: $b^2=c^2-a^2=100-64=36$.
A: $\frac{y^2}{64}-\frac{x^2}{36}=1$.

#Q 6.5 1(ii)
Q: Find the equation of the hyperbola with foci $(0,\pm8)$ and eccentricity 4.
T: u6-hyperbola
S: $c=8$, $a=\dfrac ce=2$, $b^2=64-4=60$; vertical.
C: u6-hyperbola
A: $\frac{y^2}{4}-\frac{x^2}{60}=1$.

#Q 6.5 1(iii)
Q: Find the equation of the hyperbola with foci $(0,\pm10)$ and directrices $y=\pm5$.
T: u6-hyperbola
S: $c=10$ and $\dfrac ae=5$. Since $e=\dfrac ca$: $\dfrac{a^2}{c}=5\Rightarrow a^2=50$.
C: u6-hyperbola
S: $b^2=100-50=50$.
A: $\frac{y^2}{50}-\frac{x^2}{50}=1$.

#Q 6.5 2(i)
Q: Find the centre, foci, eccentricity, vertices and directrices of $\frac{x^2}{36}-\frac{y^2}{64}=1$, and sketch it.
T: u6-hyperbola
S: $a=6$, $b=8$, $c=\sqrt{36+64}=10$, $e=\dfrac{10}6=\dfrac53$.
C: u6-hyperbola
S: Centre $(0,0)$; vertices $(\pm6,0)$; foci $(\pm10,0)$; directrices $x=\pm\dfrac ae=\pm\dfrac{18}5$; asymptotes $y=\pm\dfrac43x$.
P: {"x":[-14,14],"y":[-12,12],"step":2,"par":[{"x":"6/cos(t)","y":"8*tan(t)","t":[-1.25,1.25]},{"x":"-6/cos(t)","y":"8*tan(t)","t":[-1.25,1.25]}],"fn":[{"f":"4*x/3","dash":true,"col":3},{"f":"-4*x/3","dash":true,"col":3}],"pts":[[10,0,"F"],[-10,0,"F′"],[6,0,"V"],[-6,0,"V′"]]}
A: Centre $(0,0)$, vertices $(\pm6,0)$, foci $(\pm10,0)$, $e=\frac53$, directrices $x=\pm\frac{18}{5}$.

#Q 6.5 2(ii)
Q: Find the centre, foci, eccentricity, vertices and directrices of $\frac{(x+3)^2}{5}-\frac{(y-2)^2}{4}=1$, and sketch it.
T: u6-hyperbola-shifted
S: Centre $(-3,2)$, horizontal; $a=\sqrt5$, $b=2$, $c=\sqrt{5+4}=3$, $e=\dfrac3{\sqrt5}$.
C: u6-hyperbola-shifted
S: Vertices $(-3\pm\sqrt5,2)$; foci $(-3\pm3,2)=(0,2),(-6,2)$; directrices $x=-3\pm\dfrac ae=-3\pm\dfrac53$.
A: Centre $(-3,2)$, vertices $(-3\pm\sqrt5,2)$, foci $(0,2),(-6,2)$, $e=\frac{3}{\sqrt5}$, directrices $x=-3\pm\frac53$.

#Q 6.5 2(iii)
Q: Find the centre, foci, eccentricity, vertices and directrices of $\frac{y^2}{25}-\frac{x^2}{16}=1$, and sketch it.
T: u6-hyperbola
S: Vertical: $a=5$, $b=4$, $c=\sqrt{41}$, $e=\dfrac{\sqrt{41}}5$.
C: u6-hyperbola
S: Centre $(0,0)$; vertices $(0,\pm5)$; foci $(0,\pm\sqrt{41})$; directrices $y=\pm\dfrac ae=\pm\dfrac{25}{\sqrt{41}}$.
A: Centre $(0,0)$, vertices $(0,\pm5)$, foci $(0,\pm\sqrt{41})$, $e=\frac{\sqrt{41}}5$, directrices $y=\pm\frac{25}{\sqrt{41}}$.

#Q 6.5 4
Q: A hyperbola has a horizontal transverse axis of length 8. One focus is at $(1+2\sqrt5,\ 3)$ and its eccentricity is $\frac{\sqrt5}2$. Find its equation.
T: u6-hyperbola-shifted
S: $2a=8\Rightarrow a=4$; $c=ae=2\sqrt5$.
C: u6-hyperbola
S: The focus is $c$ to the right of the centre: centre $(1+2\sqrt5-2\sqrt5,\ 3)=(1,3)$.
C: u6-hyperbola-shifted
S: $b^2=c^2-a^2=20-16=4$.
A: $\frac{(x-1)^2}{16}-\frac{(y-3)^2}{4}=1$.

#Q 6.5 5
Q: A hyperbola has a vertical transverse axis of length 8, centre $(2,-1)$ and eccentricity $\frac{\sqrt{13}}2$. Find its equation.
T: u6-hyperbola-shifted
S: $a=4$, $c=ae=2\sqrt{13}$, $b^2=52-16=36$.
C: u6-hyperbola
A: $\frac{(y+1)^2}{16}-\frac{(x-2)^2}{36}=1$.

#Q 6.5 7
Q: A hyperbola has a vertical transverse axis, eccentricity $\frac{\sqrt{19}}4$ and latus rectum of length $\frac32$. It passes through $(2,8)$ and $(2,0)$. Find its equation.
T: u6-hyperbola-shifted
S: Latus rectum: $\dfrac{2b^2}a=\dfrac32\Rightarrow b^2=\dfrac{3a}4$. Eccentricity: $e^2=1+\dfrac{b^2}{a^2}=\dfrac{19}{16}\Rightarrow b^2=\dfrac{3a^2}{16}$.
C: u6-hyperbola
S: Equate: $\dfrac{3a}4=\dfrac{3a^2}{16}\Rightarrow a=4$, $b^2=3$.
S: The two points have the same $x$ and are $8$ apart $=2a$: they are the vertices. Centre $(2,4)$.
C: u6-hyperbola-shifted
!:
A: $\frac{(y-4)^2}{16}-\frac{(x-2)^2}{3}=1$.

#Q 6.5 8
Q: Find the equation of the hyperbola in standard form (centred at the origin) that passes through $(\sqrt{80},4)$ and $(\sqrt{32},2)$.
T: u6-hyperbola, f-linear-eq
S: Try $\dfrac{x^2}{a^2}-\dfrac{y^2}{b^2}=1$ with $A=\dfrac1{a^2}$, $B=\dfrac1{b^2}$: $80A-16B=1$ and $32A-4B=1$.
C: u6-hyperbola
S: Multiply the second by 4: $128A-16B=4$. Subtract the first: $48A=3\Rightarrow A=\dfrac1{16}$; then $2-4B=1\Rightarrow B=\dfrac14$.
C: f-linear-eq
A: $\frac{x^2}{16}-\frac{y^2}{4}=1$.

#Q 6.5 10
Q: Find the length of the latus rectum of the hyperbola $9x^2-16y^2=144$.
T: u6-hyperbola
S: $\dfrac{x^2}{16}-\dfrac{y^2}9=1$: $a=4$, $b=3$.
C: u6-hyperbola
S: Latus rectum $=\dfrac{2b^2}a=\dfrac{18}4$.
A: $\frac92$.

#Q 6.5 13
Q: The foci of a hyperbola coincide with the foci of the ellipse $\frac{x^2}{25}+\frac{y^2}9=1$. If the eccentricity of the hyperbola is 2, find its equation.
T: u6-hyperbola, u6-ellipse
S: Ellipse: $c^2=25-9=16$, foci $(\pm4,0)$.
C: u6-ellipse
S: Hyperbola: $c=4$, $a=\dfrac ce=2$, $b^2=16-4=12$.
C: u6-hyperbola
A: $\frac{x^2}{4}-\frac{y^2}{12}=1$.

#Q 6.5 15
Q: Find the equations of the normals to the hyperbola $\frac{x^2}9-\frac{y^2}{16}=1$ which are parallel to the line $2x-y=5$.
T: u6-hyperbola-tangent
S: The normal at $(x_1,y_1)$ has slope $-\dfrac{a^2y_1}{b^2x_1}=-\dfrac{9y_1}{16x_1}$. Setting this equal to $2$: $y_1=-\dfrac{32}{9}x_1$.
C: u6-hyperbola-tangent
S: The point must be on the hyperbola: $\dfrac{x_1^2}9-\dfrac{1}{16}\cdot\dfrac{1024x_1^2}{81}=1\Rightarrow\dfrac{9x_1^2-64x_1^2}{81}=1\Rightarrow x_1^2=-\dfrac{81}{55}$.
!:
S: There is no real $x_1$, so **no normal** of this hyperbola has slope 2.
S: Reason: on this hyperbola $\dfrac{y_1^2}{16}=\dfrac{x_1^2}{9}-1<\dfrac{x_1^2}{9}$, so $\left|\dfrac{y_1}{x_1}\right|<\dfrac43$, and the size of the normal's slope, $\dfrac{9}{16}\left|\dfrac{y_1}{x_1}\right|$, is always less than $\dfrac{9}{16}\cdot\dfrac43=\dfrac34$. A slope of $2$ is impossible.
N: Some answer keys list $5y=10x\pm14$ here; substituting shows these lines are not normal to this hyperbola.
A: No such normal exists (every normal has slope between $-\frac34$ and $\frac34$).

#Q 6.5 16
Q: If the distance between the foci of a hyperbola is 16 and the distance between its vertices is 12, find its eccentricity.
T: u6-hyperbola
S: $2c=16\Rightarrow c=8$; $2a=12\Rightarrow a=6$.
C: u6-hyperbola
A: $e=\frac ca=\frac43$.

#Q 6.5 17
Q: Find the length of the transverse axis of the hyperbola $4x^2-9y^2=36$.
T: u6-hyperbola
S: $\dfrac{x^2}9-\dfrac{y^2}4=1\Rightarrow a=3$.
C: u6-hyperbola
A: $2a=6$.

#Q 6.6 1
Q: A comet has a parabolic orbit with the sun at the focus. When the comet is 100 million km from the sun, the line joining the sun and the comet makes an angle of $60^\circ$ with the axis of the parabola. How close will the comet get to the sun?
T: u6-applications, u6-parabola
S: Take the orbit $y^2=4ax$ with the sun at the focus $F(a,0)$. The closest point is the vertex, at distance $a$ from the focus.
C: u6-parabola
S: Measuring the $60^\circ$ from the axis on the opening side (as in the book's worked example), the comet is at $\left(a+100\cos60^\circ,\ 100\sin60^\circ\right)=(a+50,\ 50\sqrt3)$.
C: f-trig-ratios
S: It lies on the parabola: $(50\sqrt3)^2=4a(a+50)\Rightarrow4a^2+200a-7500=0\Rightarrow a^2+50a-1875=0$.
S: $a=\dfrac{-50+\sqrt{2500+7500}}2=\dfrac{-50+100}2=25$.
C: f-quadratic-formula
S: If instead the $60^\circ$ is measured on the vertex side, the comet is at $(a-50,\ 50\sqrt3)$, which gives $a^2-50a-1875=0$ and $a=75$. (This second reading gives the answer printed in some keys.)
!:
A: 25 million km (75 million km if the angle is measured on the vertex side of the focus).

#Q 6.6 2
Q: Find the equation of the parabola formed by the cables of a suspension bridge whose span is $\ell$ m and the vertical height of the supporting towers is $h$ m.
T: u6-applications, u6-parabola
S: Put the lowest point of the cable at the origin: $x^2=4ay$ (opens upward).
C: u6-parabola
S: The top of a tower is at $\left(\dfrac\ell2,h\right)$: $\dfrac{\ell^2}4=4ah\Rightarrow4a=\dfrac{\ell^2}{4h}$.
A: $x^2=\frac{\ell^2}{4h}\,y$, i.e. $y=\frac{4h}{\ell^2}x^2$.

#Q 6.6 3
Q: A parabolic arch has a 120 m base and height 25 m. Find the height of the arch at a point 42 m from the centre of the base.
T: u6-applications, u6-parabola-shifted
S: Put the centre of the base at the origin: vertex $(0,25)$, opening down: $x^2=-4a(y-25)$.
C: u6-parabola-shifted
S: The base ends $(\pm60,0)$ lie on it: $3600=100a\Rightarrow a=36$, so $x^2=-144(y-25)$.
S: At $x=42$: $1764=-144(y-25)\Rightarrow y=25-12.25=12.75$.
A: 12.75 m.

#Q 6.6 4
Q: An elliptical running track is 120 m long along its major axis and 80 m wide along its minor axis. (a) Find the distance from the centre to each focus. (b) If water fountains are placed at the foci, how far apart are they?
T: u6-applications, u6-ellipse
S: $a=60$, $b=40$.
S: (a) $c=\sqrt{a^2-b^2}=\sqrt{3600-1600}=\sqrt{2000}=20\sqrt5\approx44.72$ m.
C: u6-ellipse
S: (b) $2c=40\sqrt5\approx89.44$ m.
A: (a) $20\sqrt5\approx44.7$ m (b) $40\sqrt5\approx89.4$ m.

#Q 6.6 5
Q: A landscaper makes an elliptical flower bed with major axis 10 m and minor axis 6 m using the gardener's method (two stakes at the foci and a loop of string). (a) How far apart are the stakes? (b) What is the total length of the string loop?
T: u6-applications, u6-ellipse
S: $a=5$, $b=3$, $c=\sqrt{25-9}=4$.
C: u6-ellipse
S: (a) The stakes are at the foci: $2c=8$ m apart.
S: (b) The loop goes from a point $P$ to both foci and between the foci: $|PF|+|PF'|+|FF'|=2a+2c=10+8=18$ m.
W: The sum $|PF|+|PF'|$ is always $2a$, which is what makes the curve an ellipse.
A: (a) 8 m (b) 18 m.
`);

M12.addMCQs(6, String.raw`
#M
c: u6-circle-general
Q: The centre of $x^2+y^2+2gx+2fy+c=0$ is
O: $(g,f)$
O*: $(-g,-f)$
O: $(2g,2f)$
O: $(-2g,-2f)$
E: Completing the squares gives $(x+g)^2+(y+f)^2=g^2+f^2-c$.

#M
c: u6-circle-general
Q: The radius of $x^2+y^2-6x+8y=0$ is
O: $10$
O*: $5$
O: $25$
O: $\sqrt7$
E: $r=\sqrt{9+16-0}=5$.

#M
c: u6-circle-tangent
Q: The tangent to $x^2+y^2=a^2$ at $(x_1,y_1)$ is
O: $xx_1-yy_1=a^2$
O*: $xx_1+yy_1=a^2$
O: $x+y=a$
O: $xy_1-yx_1=0$
E: Replace $x^2\to xx_1$, $y^2\to yy_1$. The last option is the normal.

#M
c: u6-tangency
Q: The line $y=mx+c$ touches $x^2+y^2=a^2$ if
O: $c=a(1+m^2)$
O*: $c^2=a^2(1+m^2)$
O: $c^2=a^2m^2-1$
O: $c=am$
E: Distance from the centre $\frac{|c|}{\sqrt{1+m^2}}$ must equal $a$.

#M
c: u6-point-position
Q: The point $(2,3)$ with respect to $x^2+y^2+2x-3y-10=0$ lies
O: outside the circle
O: on the circle
O*: inside the circle
O: at the centre
E: $4+9+4-9-10=-2<0$.

#M
c: u6-parabola
Q: The focus of $y^2=8x$ is
O*: $(2,0)$
O: $(8,0)$
O: $(0,2)$
O: $(-2,0)$
E: $4a=8\Rightarrow a=2$.

#M
c: u6-parabola
Q: The length of the latus rectum of $y^2=4ax$ is
O: $a$
O: $2a$
O*: $4a$
O: $8a$
E: Its ends are $(a,\pm2a)$.

#M
c: u6-parabola
Q: The directrix of $x^2=-8y$ is
O: $y=-2$
O*: $y=2$
O: $x=2$
O: $x=-2$
E: $4a=8$, opens downward, so the directrix is $y=a=2$.

#M
c: u6-parabola-tangent
Q: The line $y=mx+c$ touches $y^2=4ax$ if
O*: $c=\frac am$
O: $c=am$
O: $c^2=a^2m^2+1$
O: $c=-\frac am$
E: Setting the discriminant of $(mx+c)^2=4ax$ to zero.

#M
c: u6-ellipse
Q: For an ellipse with $a>b$, the foci $(\pm c,0)$ satisfy
O*: $c^2=a^2-b^2$
O: $c^2=a^2+b^2$
O: $c=a+b$
O: $c=ab$
E: For a hyperbola it is $c^2=a^2+b^2$.

#M
c: u6-ellipse
Q: The eccentricity $e$ of an ellipse satisfies
O: $e=0$
O*: $0<e<1$
O: $e=1$
O: $e>1$
E: $e=\frac ca$ and $c<a$.

#M
c: u6-ellipse
Q: The length of the latus rectum of $\frac{x^2}{a^2}+\frac{y^2}{b^2}=1$ is
O: $\frac{2a^2}{b}$
O*: $\frac{2b^2}{a}$
O: $2b$
O: $\frac{b^2}{a}$
E: Standard result for both the ellipse and the hyperbola.

#M
c: u6-ellipse-tangent
Q: The line $y=mx+c$ touches $\frac{x^2}{a^2}+\frac{y^2}{b^2}=1$ if
O: $c^2=a^2m^2-b^2$
O*: $c^2=a^2m^2+b^2$
O: $c^2=a^2+b^2m^2$
O: $c=am+b$
E: The hyperbola has the minus sign instead.

#M
c: u6-hyperbola
Q: The asymptotes of $\frac{x^2}{a^2}-\frac{y^2}{b^2}=1$ are
O*: $y=\pm\frac bax$
O: $y=\pm\frac abx$
O: $x=\pm a$
O: $y=\pm\frac{b^2}{a}$
E: For large $x$, $\frac{y^2}{x^2}\to\frac{b^2}{a^2}$.

#M
c: u6-hyperbola
Q: The length of the transverse axis of $\frac{x^2}{a^2}-\frac{y^2}{b^2}=1$ is
O: $2b$
O*: $2a$
O: $a+b$
O: $2c$
E: The vertices are $(\pm a,0)$, so the transverse axis has length $2a$.

#M
c: u6-hyperbola
Q: For the hyperbola $\frac{y^2}{a^2}-\frac{x^2}{b^2}=1$ the foci are
O: $(\pm c,0)$
O*: $(0,\pm c)$
O: $(\pm a,0)$
O: $(0,\pm b)$
E: The positive term $y^2$ puts the transverse axis on the $y$-axis.

#M
c: u6-conics
Q: A conic with eccentricity $e=1$ is a
O: circle
O: ellipse
O*: parabola
O: hyperbola
E: Distance to the focus equals distance to the directrix.

#M
c: u6-applications
Q: In a parabolic reflector, the light source should be placed at the
O: vertex
O*: focus
O: end of the latus rectum
O: directrix
E: Rays from the focus reflect parallel to the axis.
`);
