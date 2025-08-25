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
- [Technical and Soft Skills Gained](#technical-and-soft-skills-gained)
- [Improvements That Can Be Made](#improvements-that-can-be-made)

## Overview

---

During my Summer Quarter after my Junior year, I wanted to learn more about graphs and web development, both exciting but new to me. So as part of my algorithms course's extra credit, I combined both goals and tried to make a static web application using vanilla JavaScript, HTML Canvas, and CSS.

I got to experience the chaotic language that is JavaScript, which quickly became one of my favorite languages coming from a Java-based background. The loosely typed (if any) experience was refreshing, I fondly remember adding a "weight" property to my matrix of coordinates on-the-fly and going "I can do that???" before summarily suffering the consequences when everything else broke.

The worse thing I had to experience was a broken webpage without any warnings from the console logs... spending almost half the day finding the bug, only for it be ONE WHITESPACE character in the HTML. I was able to contain my frustration spilling over to my git commit message: "Bug Fix"

But I got to finally learn graphing and pathfinding algorithms, something that was a blindspot in my knowledge. Working with queues and sets to traverse a coordinate grid translated naturally to graphs with vertices and tree structures. With this deeper understanding, I no longer need to memorize exact implementations—by following the process step by step, I can confidently work through the logic in any coding langauge I want.

## Walkthrough

---

The application opens with a comprehensive sidebar containing algorithm controls and a center grid to show the pathfinding visually.

Users begin by selecting their preferred pathfinding algorithm from the available options: A* (with Manhattan, Euclidean, Chebyshev, or Octile heuristics), Dijkstra's algorithm, or Breadth-First Search.

<div class="walkthrough-section">
    <div class="walkthrough-content">

**Grid Interaction:**

- Click to draw walls on the grid
- Use the random maze generator with adjustable wall density (0-100%)
- Add random weight to grid cells to showcase weighted pathfinding
- Clear or reset the grid as needed
- Save grid as image appended with algorithm statistics

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
  - Manhattan (city-block distance)
  - Euclidean (straight-line distance)
  - Chebyshev (chessboard distance)
  - Octile (optimized for 8-directional movement)
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
- Export results as JSON for further analysis using included Python script with Pandas

</div>
<div class="walkthrough-media-multiple">

<img src="/path-finding-visualizer/image-1-3.gif" alt="Data collection interface automation">
<img src="/path-finding-visualizer/image-1-4.png" alt="Performance analysis dashboard">
<img src="/path-finding-visualizer/image-1-5.png" alt="Statistical analysis results">

</div>
</div>

## Technical and Soft Skills Gained

---

**Static Webpage Development:**

- Vanilla JavaScript programming without frameworks
- HTML elements and a greater understanding of the DOM (Document Object Model)
- HTML Canvas manipulation and rendering
- CSS styling
- Async, Event handling, and user interaction management

**Algorithm Implementation:**

- Deep understanding of pathfinding algorithms (A*, Dijkstra's, BFS)
- Heuristic function design and optimization
- Data structures usage (priority queues, sets, arrays)
- Algorithm complexity analysis and performance optimization

**Data Analysis:**

- Python programming for statistical analysis
- Matplotlib and Pandas for data visualization
- JSON data handling and file operations
- Comparative performance analysis

**Project Management:**

- Git version control and GitHub Pages deployment
- Code organization and modular design

**Problem-Solving:**

- Translating theoritical graph algorithms to JavaSript code
- Navigate the challenges of a loosely-typed langauge
- Testing and debugging methodologies

## Future Plans and Next Steps

---

I've learned a lot more about web dev and have created more single and multi page applications since this project.

If I had to go back to improve the project that started my journey I would...

**Algorithm Enhancements:**

- Add bidirectional search capabilities
- Add new algorithms (DFS, Greedy, D* or D*-Lite for dynamic end goals or )

**Advanced Features:**

- Weighted terrain types with visual representation
- Algorithm racing mode with side-by-side comparison

**Educational Improvements:**

- Step-by-step algorithm explanation overlay
- Interactive tutorials for each algorithm
- Complexity analysis display
- Algorithm comparison charts integrated into the interface

**Quality of Life:**

- Enhance mobile experience
- Improve sidebar UI or revamp UI/UX
- Dynamically change size of grid
- Move start/end points manually
