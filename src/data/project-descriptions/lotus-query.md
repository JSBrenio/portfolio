# Lotus Query

## Table of Contents

- [Overview](#overview)
- [Walkthrough](#walkthrough)
- [Technical and Soft Skills Gained](#technical-and-soft-skills-gained)
- [Improvements That Can Be Made](#improvements-that-can-be-made)

## Overview

---

A full-stack Magic: The Gathering card database application featuring advanced search capabilities, random card discovery, and comprehensive card information display. Built with React.js frontend and Node.js/Express backend, integrated with MySQL database for optimized card data queries.

## Walkthrough

---


<div class="walkthrough-section">
<div class="walkthrough-content">

**Navigation & UX:**
  - Intuitive routing system with dedicated pages:
  - Home page with random card gallery
  - Advanced search interface
  - Search help documentation

**Individual Card Details:**
  - Comprehensive card information display
  - Scryfall ID integration for unique identification
  - Multi-table JOIN queries for complete card data
  - Support for creature stats, mana costs, and format legality

</div>
<div class="walkthrough-media">
<img src="/lotus-query/image-2.gif" alt="Application navigation and responsive design showcase across different pages" />
</div>
</div>

<div class="walkthrough-section">
<div class="walkthrough-content">

**Advanced Search System:**
- Complex query parsing with multiple filter types:
  - Converted Mana Cost (CMC) with operators (`cmc>5`, `cmc<=3`)
  - Creature Power/Toughness filtering (`pow>=4`, `tou<2`)
  - Type-based searches (`type:artifact`)
  - Color filtering (`color:WUBRG`)
  - Color identity matching (`cmm:WUBRG`)
  - Rarity filtering (`rarity:mythic`)
  - Format legality (`legal:standard`)
  - Set-specific searches (`set:MOM`)

</div>
<div class="walkthrough-media">
<img src="/lotus-query/image-1.gif" alt="Advanced search interface showing various filter options and query syntax" />
</div>
</div>

<div class="walkthrough-section">
<div class="walkthrough-content">

**Search Results Management:**
- Customizable sorting by name, CMC, power, or toughness
- Ascending/descending order options
- Efficient pagination for large result sets

</div>
<div class="walkthrough-media">
<img src="/lotus-query/image-3.gif" alt="Search results page demonstrating sorting options and result display" />
</div>
</div>

<div class="walkthrough-section">
<div class="walkthrough-content">

**Random Card Discovery:**
- Generate random card collections
- Configurable number of random cards
- Database-level randomization for performance

</div>
<div class="walkthrough-media">
<img src="/lotus-query/image-2.gif" alt="Random card generator showing multiple random Magic cards being displayed" />
</div>
</div>

## Technical and Soft Skills Gained

---

**Full-Stack Development:**
- React.js component architecture and state management
- Node.js server-side development with Express framework
- RESTful API design and implementation
- Frontend-backend integration with Axios

**Database Management:**
- MySQL database design and optimization
- Complex SQL queries with multiple JOINs
- Database connection pooling for performance
- Environment variable configuration for security

**Advanced Query Processing:**
- Custom query parser implementation
- Dynamic SQL generation with parameterized queries
- Operator-based filtering logic
- String parsing and validation

**Web Development Patterns:**
- MVC (Model-View-Controller) architecture
- Component-based UI development
- Route organization and middleware usage
- Error handling and status code management

**Security & Best Practices:**
- Environment-based configuration with dotenv
- SQL injection prevention with parameterized queries
- CORS configuration for secure cross-origin requests
- Proper error handling and response codes

**Development Tools:**
- Git version control
- Package management with npm
- Development server setup and configuration
- API testing and debugging

## Future Plans and Next Steps

---

**Performance Enhancements:**
- Implement database indexing optimization
- Add query result caching with Redis
- Implement pagination for large result sets
- Add database connection optimization

**Feature Expansions:**
- Card image integration with Scryfall API
- Advanced filtering UI with visual selectors
- Saved search functionality
- Card collection management system
- Price tracking integration

**User Experience Improvements:**
- Add search autocomplete functionality
- Implement advanced search builder interface
- Add card comparison tools
- Mobile-responsive design enhancements
- Loading states and error handling improvements

**Technical Infrastructure:**
- Add comprehensive error logging
- Implement API rate limiting
- Add automated testing suite
- Database migration system
- Production deployment configuration
