# CineNest - Movie Website Project

A modern, responsive movie website built with React that showcases current movies, upcoming releases, and more.

![CineNest Screenshot]([./src/images/homepage.jpg](https://res.cloudinary.com/dtogfz0uu/image/upload/v1744059943/homepage_tv9f7o.png))

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [API Reference](#api-reference)
- [Contributing](#contributing)
- [License](#license)

## Overview

CineNest is a dynamic movie website that allows users to browse movies by category, view trending movies, read blog posts about the latest movie news, and more. The site features a sleek, modern design with responsive layouts for all device sizes.

## Features

- **Featured Movie Banner** - Showcase highlighted movies with dynamic background images
- **Movie Categorization** - Filter movies by genre (Romance, Action, Thriller, Horror, Adventure)
- **Schedule Section** - View movies opening this week
- **Trending Movies** - Carousel display of upcoming movie releases
- **Blog Section** - Latest news and updates about movies
- **Responsive Design** - Optimized for all device sizes
- **Dynamic Content** - Fetches movie data from JSON API

## Technologies Used

- React.js
- Bootstrap 5
- Swiper.js for carousels
- CSS3 for custom styling
- IonIcons for icons
- Fetch API for data retrieval

## Project Structure

```
src/
├── App.js              # Main application component
├── App.css             # Global styles
├── components/         # Reusable UI components
│   ├── Card.jsx        # Movie card component
│   ├── MovieContent.jsx # Movie information component
│   ├── MovieDate.jsx   # Movie release date component
│   ├── MovieSwiper.jsx # Movie carousel component
│   ├── PlayBtn.jsx     # Play button component
│   └── TrendCard.jsx   # Trending movie card component
├── pages/              # Page components
│   ├── Banner.jsx      # Hero banner component
│   ├── Blog.jsx        # Blog section component
│   ├── Footer.jsx      # Footer component
│   ├── Header.jsx      # Navigation header component
│   ├── Main.jsx        # Main content wrapper
│   ├── Schedule.jsx    # Movie schedule component
│   └── Trend.jsx       # Trending movies component
└── images/             # Static image assets
```

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/cinenest.git
cd cinenest
```

2. Install dependencies:
```bash
npm install
```

3. Create a `public/data/movieData.json` file with your movie data (see API Reference section for format)

4. Start the development server:
```bash
npm start
```

## Usage

After starting the development server, the application will be available at `http://localhost:3000`.

### Filtering Movies

Click on the genre categories in the Schedule section to filter movies by type:
- All
- Romance
- Action
- Thriller
- Horror
- Adventure

### Viewing Movie Details

Click on any movie card to see additional details.

## API Reference

The application fetches movie data from a local JSON file at `http://localhost:3000/data/movieData.json`.

Example movie data format:

```json
[
  {
    "_id": "1",
    "title": "Movie Title",
    "year": "2025",
    "category": "Action",
    "rating": 8.5,
    "active": true,
    "trailer": "https://example.com/trailer",
    "bgImg": "/path/to/background-image.jpg",
    "coverImg": "/path/to/cover-image.jpg",
    "description": "Brief description of the movie"
  }
]
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

---

© 2025 CineNest Technologies. All Rights Reserved.
