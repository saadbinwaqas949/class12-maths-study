/* Unit 7 · Kinematics of Motion in a Straight Line */
M12.addConcepts(7, String.raw`
#C u7-scalars-vectors Scalars and vectors in straight-line motion
R: Distance and speed are scalars (size only); displacement, velocity and acceleration are vectors, shown in a straight line by a $+$ or $-$ sign.
B: Choose one direction as positive (say east or up); the opposite direction is negative.
- **Distance**: total length travelled (never negative).
- **Displacement**: change in position (can be negative or zero).
If you walk 5 m forward and 5 m back, the distance is 10 m but the displacement is 0.

#C u7-average Average speed and average velocity
pre: u7-scalars-vectors
R: Average speed $=\dfrac{\text{total distance}}{\text{total time}}$; average velocity $=\dfrac{\text{total displacement}}{\text{total time}}$.
B: A man walks 100 m east in 2 min, then 60 m west in 1 min: distance 160 m, displacement 40 m east, time 3 min. Average speed $\approx53.3$ m/min; average velocity $\approx13.3$ m/min east.
M: Averaging the two speeds instead of dividing total distance by total time.

#C u7-calculus Velocity and acceleration as derivatives
pre: u2-basic-rules, u7-scalars-vectors
R: $v=\dfrac{dx}{dt}$, $a=\dfrac{dv}{dt}=\dfrac{d^2x}{dt^2}$, and also $a=v\dfrac{dv}{dx}$; speed $=|v|$.
F: $$v=\frac{dx}{dt},\qquad a=\frac{dv}{dt}=\frac{d^2x}{dt^2}=v\frac{dv}{dx}$$
B: Differentiate the position to get velocity, and again to get acceleration. A negative velocity means motion in the negative direction; speed is its size.
E: $x=t^3-6t^2$: $v=3t^2-12t$, so $v(1)=-9$ m/s (moving backwards) and the speed is $9$ m/s.

#C u7-graphs Displacement–time and velocity–time graphs
pre: u7-calculus
R: On a displacement–time graph the slope is the velocity; on a velocity–time graph the slope is the acceleration and the area under it is the displacement.
B: - $x$–$t$ graph: horizontal line = at rest; straight rising line = constant positive velocity; falling = moving backwards.
- $v$–$t$ graph: horizontal line = constant velocity; straight sloping line = constant acceleration.
- Area under a $v$–$t$ graph: area above the axis minus area below = displacement; the sum of both areas = distance.
E: A $v$–$t$ graph that is a trapezium with parallel sides 12 and 8 and height 6 has area $\frac12(12+8)\cdot6=60$, the displacement.

#C u7-units Converting km/h to m/s
R: $1\ \text{km/h}=\dfrac{1000\text{ m}}{3600\text{ s}}=\dfrac{5}{18}\ \text{m/s}$, so multiply by $\frac5{18}$ (and by $\frac{18}5$ to go back).
B: $36$ km/h $=36\times\frac5{18}=10$ m/s; $54$ km/h $=15$ m/s; $90$ km/h $=25$ m/s.
M: Using km/h together with seconds in the same equation.

#C u7-suvat Equations of motion with constant acceleration
pre: u7-calculus
R: With constant acceleration $a$, initial velocity $u$, final velocity $v$, time $t$ and displacement $s$: $v=u+at$, $s=ut+\tfrac12at^2$, $2as=v^2-u^2$, and $s=\frac{u+v}{2}\,t$.
F: $$v=u+at,\qquad s=ut+\tfrac12at^2,\qquad 2as=v^2-u^2,\qquad s=\frac{u+v}{2}\,t$$
B: **Method:** list the five quantities $s,u,v,a,t$, mark the three you know and the one you want, and pick the equation that links exactly those four.
"Starts from rest" means $u=0$; "comes to rest" means $v=0$; slowing down gives a negative $a$ (a retardation).
X: **Derivation from calculus:** $\frac{dv}{dt}=a\Rightarrow v=at+u$; then $\frac{ds}{dt}=u+at\Rightarrow s=ut+\frac12at^2$; eliminating $t$ gives $v^2-u^2=2as$.
E: A car goes from 10 m/s to 30 m/s in 4 s: $a=\frac{30-10}4=5$ m/s$^2$, and $s=\frac{10+30}{2}\cdot4=80$ m.
M: Mixing units (km/h with seconds).

#C u7-free-fall Free fall and vertical motion
pre: u7-suvat
R: Under gravity alone the acceleration is $g\approx9.8$ m/s$^2$ downward: use the equations of motion with $a=+g$ (taking down positive) or $a=-g$ (taking up positive).
B: - **Dropped**: $u=0$.
- **Thrown up with speed $u$**: at the top $v=0$, so the time to the top is $\frac ug$, the maximum height is $\frac{u^2}{2g}$, and the time to return to the hand is $\frac{2u}g$.
- Two bodies moving at the same time: write each height as a function of $t$ and set them equal to find when they meet.
E: Thrown up at 20 m/s: max height $\frac{400}{19.6}\approx20.4$ m after $\frac{20}{9.8}\approx2.04$ s.
M: Using $+g$ for upward motion when up is taken as positive.

#C u7-variable Motion with variable acceleration
pre: u3-motion, u7-calculus
R: When $a$ depends on $t$, integrate: $v=\int a\,dt$ and $x=\int v\,dt$, using the starting values to find the constants. Distance needs the times when $v=0$.
B: The constant-acceleration equations do **not** apply when $a$ changes; go back to calculus.
For distance travelled, find where $v=0$ (the object turns around), split the time interval, and add $\left|\int v\,dt\right|$ for each piece.
E: $a=\cos t+\sin t$, $v(0)=2$: $v=\sin t-\cos t+C$ and $v(0)=-1+C=2$, so $v=\sin t-\cos t+3$.
`);

M12.addQuestions(7, String.raw`
#Q 7.1 6
Q: A vehicle moving at 36 km/h is stopped by applying brakes and comes to rest in 10 seconds. Find the retardation and the distance covered during this time.
T: u7-suvat, u7-units
S: Convert: $u=36\times\tfrac5{18}=10$ m/s; $v=0$; $t=10$ s.
C: u7-units
S: $v=u+at\Rightarrow0=10+10a\Rightarrow a=-1$ m/s$^2$, i.e. a retardation of $1$ m/s$^2$.
C: u7-suvat
S: $s=\dfrac{u+v}{2}\,t=\dfrac{10+0}2\times10=50$ m.
A: Retardation $1$ m/s$^2$; distance $50$ m.

#Q 7.1 7
Q: A train moving at 54 km/h is accelerated uniformly to 90 km/h in 20 s. Find the acceleration and the distance covered in this time.
T: u7-suvat, u7-units
S: $u=54\times\tfrac5{18}=15$ m/s, $v=90\times\tfrac5{18}=25$ m/s, $t=20$ s.
C: u7-units
S: $a=\dfrac{v-u}{t}=\dfrac{10}{20}=0.5$ m/s$^2$.
C: u7-suvat
S: $s=\dfrac{15+25}{2}\times20=400$ m.
A: $a=0.5$ m/s$^2$; distance $400$ m.

#Q 7.1 8
Q: A particle starts from rest and accelerates uniformly to 30 km/h in 5 seconds. Find the distance travelled in the last three seconds.
T: u7-suvat, u7-units
S: $v=30\times\tfrac5{18}=\tfrac{25}3$ m/s, $u=0$: $a=\dfrac{25/3}{5}=\dfrac53$ m/s$^2$.
C: u7-units, u7-suvat
S: The last three seconds are from $t=2$ to $t=5$: distance $=s(5)-s(2)=\tfrac12a(5^2-2^2)$.
W: $s=\frac12at^2$ for a start from rest; subtract the distance already covered after 2 s.
!:
S: $=\tfrac12\cdot\tfrac53\cdot21=17.5$ m.
A: $17.5$ m.

#Q 7.1 9
Q: A particle is projected vertically upward with velocity 100 m/s, and another is let fall from a height of 200 m at the same time. Find the height of the point where they meet.
T: u7-free-fall
S: Take up as positive, $g=9.8$. First particle: $h_1=100t-4.9t^2$. Second (dropped from 200 m): $h_2=200-4.9t^2$.
C: u7-free-fall
S: They meet when $h_1=h_2$: $100t-4.9t^2=200-4.9t^2\Rightarrow100t=200\Rightarrow t=2$ s.
W: The $4.9t^2$ terms cancel because both fall under the same gravity.
S: Height: $h=200-4.9(2)^2=200-19.6=180.4$ m.
A: They meet $180.4$ m above the ground (after 2 s).

#Q 7.1 10
Q: A ball is thrown vertically upward with a velocity of 20 m/s. Find the maximum height reached and the time taken to return to the thrower's hand.
T: u7-free-fall
S: At the top $v=0$: $v^2=u^2-2gh\Rightarrow0=400-19.6h\Rightarrow h=\dfrac{400}{19.6}\approx20.41$ m.
C: u7-free-fall
S: Time up: $0=20-9.8t\Rightarrow t=\dfrac{20}{9.8}\approx2.04$ s. Going down takes the same time, so the total is $\approx4.08$ s.
A: Maximum height $\approx20.41$ m; time $\approx4.08$ s.

#Q 7.1 11
Q: A rock is dropped from a cliff. One second later another rock is dropped from the same height. (a) What is the distance between the two rocks 2 seconds after the first is dropped? (b) At what time will the distance between them be 14.7 m?
T: u7-free-fall
S: After $t$ seconds the first rock has fallen $\tfrac12gt^2$ and the second $\tfrac12g(t-1)^2$ (for $t\ge1$).
C: u7-free-fall
S: (a) $t=2$: $\tfrac12(9.8)(4)-\tfrac12(9.8)(1)=19.6-4.9=14.7$ m.
S: (b) Separation $d=\tfrac12g\left[t^2-(t-1)^2\right]=\tfrac12g(2t-1)=4.9(2t-1)$. Set $4.9(2t-1)=14.7\Rightarrow2t-1=3\Rightarrow t=2$ s.
W: The gap grows steadily with time, so it equals 14.7 m only once.
A: (a) $14.7$ m (b) at $t=2$ s after the first rock is dropped.

#Q 7.1 12
Q: The acceleration of a particle is $a(t)=\dfrac{1}{1+t}$ for $t\ge0$. If the velocity is $0$ m/s when $t=0$, find the velocity at $t=5$ s.
T: u7-variable
S: $v=\displaystyle\int\frac{dt}{1+t}=\ln(1+t)+C$; $v(0)=0\Rightarrow C=0$.
C: u7-variable
S: $v(5)=\ln6\approx1.79$ m/s.
A: $v(5)=\ln6\approx1.79$ m/s.

#Q 7.1 13
Q: A robotic arm moves along a straight track with velocity $v(t)=6+t-t^2$ (m/s) for $0\le t\le5$. Find the distance travelled by the arm.
T: u7-variable, u3-motion
S: $v=-(t^2-t-6)=-(t-3)(t+2)$: positive for $0\le t<3$, negative for $3<t\le5$. The arm turns round at $t=3$.
C: f-factor
S: $\int v\,dt=6t+\tfrac{t^2}2-\tfrac{t^3}3$. From $0$ to $3$: $18+4.5-9=13.5$.
C: u7-variable
S: From $3$ to $5$: $\left(30+12.5-\tfrac{125}3\right)-13.5=\tfrac56-13.5=-\tfrac{38}3$, so $\tfrac{38}3$ m backwards.
S: Distance $=13.5+\tfrac{38}3=\tfrac{157}6\approx26.17$ m.
C: u3-motion
A: $\frac{157}{6}\approx26.17$ m.
`);

M12.addMCQs(7, String.raw`
#M
c: u7-scalars-vectors
Q: Which of the following is a scalar quantity?
O: displacement
O: velocity
O*: speed
O: acceleration
E: Speed has size only; the others also have direction.

#M
c: u7-calculus
Q: If $x(t)$ is the position, the velocity is
O: $\int x\,dt$
O*: $\dfrac{dx}{dt}$
O: $\dfrac{d^2x}{dt^2}$
O: $x\,t$
E: Velocity is the rate of change of position.

#M
c: u7-calculus
Q: Acceleration can also be written as
O: $x\dfrac{dv}{dx}$
O*: $v\dfrac{dv}{dx}$
O: $\dfrac{dx}{dv}$
O: $v\dfrac{dx}{dv}$
E: Chain rule: $\frac{dv}{dt}=\frac{dv}{dx}\frac{dx}{dt}$.

#M
c: u7-graphs
Q: The area under a velocity–time graph gives the
O: acceleration
O*: displacement
O: speed
O: jerk
E: $\int v\,dt$ is the displacement.

#M
c: u7-graphs
Q: The slope of a displacement–time graph gives the
O*: velocity
O: acceleration
O: distance
O: time
E: $v=\frac{dx}{dt}$.

#M
c: u7-units
Q: $72$ km/h equals
O: $7.2$ m/s
O*: $20$ m/s
O: $25$ m/s
O: $12$ m/s
E: $72\times\frac5{18}=20$.

#M
c: u7-suvat
Q: For constant acceleration, $v^2-u^2=$
O: $at$
O*: $2as$
O: $\frac12as$
O: $as^2$
E: Eliminate $t$ from $v=u+at$ and $s=ut+\frac12at^2$.

#M
c: u7-free-fall
Q: A ball thrown up with speed $u$ reaches a maximum height of
O: $\frac ug$
O*: $\frac{u^2}{2g}$
O: $\frac{2u}{g}$
O: $\frac{u^2}{g}$
E: At the top $v=0$: $0=u^2-2gh$.
`);
