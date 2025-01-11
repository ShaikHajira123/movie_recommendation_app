# Movie Recommendation App

## Overview
This Movie Recommendation App suggests a personalized movie based on the user's preferred genre, movie duration, and mood. The app provides a simple, interactive interface where users can select their preferences from dropdown menus, and the app generates a tailored movie suggestion based on their inputs.

## Features
- **Genre Selection**: Choose from a variety of genres such as Action, Comedy, Drama, Horror, and Sci-Fi.
- **Duration Selection**: Choose the preferred movie duration (Short, Medium, or Long).
- **Mood Selection**: Select your current mood (Happy, Relaxed, Excited, Adventurous).
- **Movie Recommendation**: After making selections, the app displays a personalized movie suggestion with details like movie name, genre, duration, and a brief description.

## Technologies Used
- **HTML**: Structure and layout of the app.
- **CSS**: Styling for the user interface, including responsive design using media queries.
- **JavaScript**: Logic for capturing user input, processing selections, and displaying the movie recommendations dynamically.

## How It Works
1. The user selects their preferred genre, movie duration, and mood from the dropdown menus.
2. Based on the selections, the app uses a decision tree stored in the `recommendations` object to generate a movie suggestion.
3. The movie suggestion is displayed on the screen with relevant details such as the movie name, description, and its suitability for the selected mood.
4. The app works responsively on different screen sizes, ensuring a seamless experience on both desktop and mobile devices.

## Challenges Encountered
- **Responsive Design**: Ensuring the app works well across various screen sizes, especially mobile devices, required tweaking the CSS media queries to handle different viewport widths.
- **Dynamic Content Generation**: Implementing the decision tree logic to provide accurate movie recommendations based on user input was a bit challenging, but was achieved by nesting JavaScript objects for easy access and retrieval.
- **Cross-Browser Compatibility**: Ensuring that the dropdowns and other form elements rendered consistently across different browsers and devices was a key focus during development.

## Installation
To run the app locally, follow these steps:

1. Clone the repository:
2. Open the `index.html` file in your browser to start using the app.
