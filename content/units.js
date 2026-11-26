/* Unit and exercise metadata (new 2026–27 syllabus; removed exercises are not listed). */
(function (M) {
  const U = (n, title, blurb, exercises) => M.defUnit({ n, title, blurb, exercises: exercises.map(([id, t, note]) => ({ id, title: t, note })) });

  U(1, 'Graphical Representation of Functions',
    'Quadratic graphs from factors, exponential, hyperbolic and logarithmic functions, transformations of graphs, and exponential and logarithmic equations and inequalities.',
    [['1.1', 'Graphs of quadratic functions'], ['1.2', 'Exponential and hyperbolic functions'], ['1.3', 'Transformations of graphs'], ['1.4', 'Exponential and logarithmic equations and inequalities'], ['1.5', 'Growth, decay, sound level and compound interest']]);
  U(2, 'Further Differentiation',
    'Derivatives of trigonometric, inverse trigonometric, exponential and logarithmic functions; the chain rule, parametric and implicit differentiation; tangents and normals; extreme values, linearization, differentials and optimization.',
    [['2.1', 'Trigonometric functions, chain rule, parametric and implicit differentiation'], ['2.2', 'Exponential and logarithmic functions'], ['2.3', 'Tangents, normals and higher derivatives'], ['2.4', 'Increasing and decreasing functions, extreme values'], ['2.5', 'Linearization'], ['2.6', 'Differentials and approximation'], ['2.7', 'Optimization']]);
  U(3, 'Integration',
    'Antiderivatives, substitution, integration by parts, partial fractions, definite integrals and their properties, areas, and applications to motion, averages and dosage.',
    [['3.1', 'Antiderivatives and standard integrals'], ['3.2', 'Integration by substitution'], ['3.3', 'Integration by parts'], ['3.4', 'Partial fractions'], ['3.5', 'Definite integrals and their properties'], ['3.6', 'Area under and between curves'], ['3.7', 'Motion, growth, average value and dosage']]);
  U(4, 'Differential Equations',
    'Order and degree, separable and homogeneous first-order equations, initial value problems, and growth and decay.',
    [['4.1', 'Order and degree'], ['4.2', 'Separable and homogeneous equations'], ['4.3', 'Motion, growth and decay']]);
  U(5, 'Analytical Geometry',
    'Forms of a straight line, medians, altitudes and right bisectors, concurrency, families of lines, angles between lines, area of a triangle, and pairs of lines through the origin.',
    [['5.1', 'Lines of a triangle, forms of a line and concurrency'], ['5.2', 'Angle between lines and area of a triangle'], ['5.3', 'Pairs of lines through the origin']]);
  U(6, 'Conics',
    'Circles, tangents and normals, parabolas, ellipses and hyperbolas, and real-life problems built on conics.',
    [['6.1', 'The circle'], ['6.2', 'Tangents and normals to a circle'], ['6.3', 'The parabola'], ['6.4', 'The ellipse'], ['6.5', 'The hyperbola'], ['6.6', 'Conics in real life']]);
  U(7, 'Kinematics of Motion in a Straight Line',
    'Displacement, velocity and acceleration; motion with constant acceleration; free vertical motion; motion with variable acceleration using calculus.',
    [['7.1', 'Motion in a straight line']]);
  U(8, 'Numerical Solutions of Nonlinear Equations',
    'The location of root theorem, the graphical method, bisection, regula-falsi and Newton–Raphson methods, and the trapezium rule.',
    [['8.1', 'Graphical method'], ['8.2', 'Bisection, regula-falsi and Newton–Raphson'], ['8.3', 'Trapezium rule']]);
  U(9, 'Inverse Trigonometric Functions',
    'Principal values, domains of inverse trigonometric functions, conversions between them, and the sum and difference formulas.',
    [['9.1', 'Principal values, domains and conversions'], ['9.2', 'Sum and difference formulas']]);
  U(10, 'Solution of Trigonometric Equations',
    'General and principal solutions, equations that need identities or factorization, extraneous roots, graphical solutions and real-life problems.',
    [['10.1', 'Solving trigonometric equations'], ['10.2', 'Graphical solutions and applications']]);
  U(11, 'Vector Valued Functions and Their Derivatives',
    'Scalar and vector-valued functions, constructing them, their domain and range, and differentiating them.',
    [['11.1', 'Vector-valued functions'], ['11.2', 'Derivatives of vector-valued functions']]);
})(window.M12);
