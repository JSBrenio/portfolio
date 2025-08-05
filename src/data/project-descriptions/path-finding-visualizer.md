# Path Finding Visualizer

<!-- For single image (existing) -->
<!-- 
<div class="walkthrough-section">
  <div class="walkthrough-content">...</div>
  <div class="walkthrough-media">
    <img src="..." alt="...">
  </div>
</div> 
-->

<!-- For multiple images (new) -->
<!-- 
<div class="walkthrough-section multiple">
  <div class="walkthrough-content">...</div>
  <div class="walkthrough-media-multiple">
    <img src="..." alt="...">
    <img src="..." alt="...">
    <img src="..." alt="...">
  </div>
</div> 
-->

## Table of Contents

- [Overview](#overview)
- [Walkthrough](#walkthrough)
- [Design Iterations](#design-iterations)
- [Technical and Soft Skills Gained](#technical-and-soft-skills-gained)
- [Future Plans and Next Steps](#future-plans-and-next-steps)

## Overview

---

During my Summer Quarter after my Junior year, I wanted to learn more about graphs and web development, both new to me. So as part of my algorithms course's extra credit, I combined both goals and tried to make an web application using vanilla JavaScript, HTML Canvas, and CSS.

## Walkthrough

---

The application opens with a clean grid interface and a comprehensive sidebar containing algorithm controls. Users begin by selecting their preferred pathfinding algorithm from the available options: A* (with Manhattan, Euclidean, Chebyshev, or Octile heuristics), Dijkstra's algorithm, or Breadth-First Search.

<div class="walkthrough-section">
    <div class="walkthrough-content">

**Grid Interaction:**

- Click to draw walls on the grid
- Use the random maze generator with adjustable wall density (0-100%)
- Clear or reset the grid as needed

</div>
<div class="walkthrough-media">
<img src="/path-finding-visualizer/image-1-1.gif" alt="Grid interaction demonstration showing wall drawing and maze generation" />
</div>
</div>

<div class="walkthrough-section">
<div class="walkthrough-content">

**Algorithm Configuration:**

- Choose between different pathfinding algorithms
- For A*, select from four heuristic functions optimized for different scenarios
- Enable diagonal movement for more flexible pathfinding
- Toggle weights to simulate varied terrain costs
- Turn off sleep mode for faster execution during data collection

</div>
<div class="walkthrough-media">
<img src="/path-finding-visualizer/image-1-2.gif" alt="Algorithm configuration panel showing different options and settings" />
</div>
</div>

<div class="walkthrough-section multiple">
<div class="walkthrough-content">

**Data Collection:**

- Automated data collection across multiple runs with varied trial parameters for performance analysis
- Export results as `JSON` for further analysis using included Python script with `Pandas`

</div>
<div class="walkthrough-media-multiple">

<img src="/path-finding-visualizer/image-1-3.gif" alt="Data collection interface automation">
<img src="/path-finding-visualizer/image-1-4.png" alt="Performance analysis dashboard">
<img src="/path-finding-visualizer/image-1-5.png" alt="Statistical analysis results">

</div>
</div>


## Design Iterations

---

<!-- **Initial Implementation:**
Started with a basic grid system and simple A* algorithm implementation using Manhattan distance heuristic. The early version focused on core pathfinding functionality without visual feedback.

**Algorithm Expansion:**
Added support for multiple algorithms (Dijkstra's, BFS) and implemented four different heuristic functions for A*: Manhattan (city-block distance), Euclidean (straight-line distance), Chebyshev (chessboard distance), and Octile (optimized for 8-directional movement).

**User Interface Development:**
Evolved from a minimal interface to a comprehensive sidebar with algorithm selection, performance metrics, and configuration options. Added visual feedback through color-coded nodes and smooth animations.

**Performance Analysis Integration:**
Incorporated data collection capabilities and statistical analysis tools. Developed Python scripts for generating comparative performance graphs across different wall densities and algorithm configurations.

**Optimization Features:**
Added debug mode, sleep toggle for faster data collection, weight system for terrain simulation, and image export functionality for documentation purposes. -->

## Technical and Soft Skills Gained

---

<!-- **Frontend Development:**

- Vanilla JavaScript programming without frameworks
- HTML5 Canvas manipulation and rendering
- CSS styling and responsive design principles
- Event handling and user interaction management

**Algorithm Implementation:**

- Deep understanding of pathfinding algorithms (A*, Dijkstra's, BFS)
- Heuristic function design and optimization
- Data structures usage (priority queues, sets, arrays)
- Algorithm complexity analysis and performance optimization

**Data Analysis:**

- Python programming for statistical analysis
- Matplotlib and Pandas for data visualization
- JSON data handling and file operations
- Comparative performance analysis methodologies

**Project Management:**

- Git version control and GitHub Pages deployment
- Documentation writing and README creation
- Code organization and modular design
- Testing and debugging methodologies

**Problem-Solving:**

- Algorithm comparison and evaluation techniques
- Performance bottleneck identification and resolution
- User experience design for educational tools -->

## Future Plans and Next Steps

---
<!-- 
**Algorithm Enhancements:**

- Implement additional pathfinding algorithms (Jump Point Search, Theta*)
- Add bidirectional search capabilities
- Introduce dynamic pathfinding for moving obstacles

**Advanced Features:**

- Weighted terrain types with visual representation
- Maze solving competitions with leaderboards
- Algorithm racing mode with side-by-side comparison
- 3D pathfinding visualization

**Educational Improvements:**

- Step-by-step algorithm explanation overlay
- Interactive tutorials for each algorithm
- Complexity analysis display
- Algorithm comparison charts integrated into the interface

**Technical Optimizations:**

- WebGL implementation for larger grids
- Web Workers for background algorithm processing
- Enhanced mobile responsiveness
- Improved performance for real-time analysis

**Data Analysis Expansion:**

- Machine learning integration for heuristic optimization
- Automated maze generation with specific characteristics
- Statistical significance testing for algorithm comparisons
- Export functionality for academic research -->
