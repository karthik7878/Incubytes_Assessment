# Sum Calculator

This is a simple React application that computes the sum of numbers provided in a string format. The input can include numbers separated by commas or newlines. The application also checks for negative numbers and alerts the user if any are found.

## Features

- Input a string of numbers separated by commas or newlines.
- Computes the sum of the valid numbers.
- Displays an error message if negative numbers are included in the input.
- User-friendly interface built with React.

## Installation

    To run this application locally, follow these steps:

1. **Clone the repository:**

   git clone https://github.com/yourusername/your-repo-name.git
   cd your-repo-name

2. **Install dependencies:**

    Make sure you have Node.js installed, then run:

    npm install

3. **Start the application:**

    npm start

## Usage

    Enter a string of numbers in the text area. You can separate the numbers with commas (,) or newlines (\n).
    Click the Compute button to calculate the sum.
    If there are negative numbers in the input, an error message will be displayed, and the sum will be reset to zero.
    Example Input
    Copy code
    1, 2, 3
    4
    5
    Output: Sum of the numbers is: 15

**Negative Number Example**

    Copy code
    1, -2, 3
    Output: Negative numbers not allowed: -2

**Technologies Used**

    React
    JavaScript
    CSS