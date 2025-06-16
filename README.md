# Simple Calculator 🧮

A basic yet visually appealing calculator built using **HTML**, **CSS**, and **JavaScript** with a custom background image for a modern look.

## 🌟 Features
- Basic arithmetic operations: Addition, Subtraction, Multiplication, and Division
- Clear (`AC`) and backspace (`C`) functionality
- Click-based input (no keyboard required)
- Smooth user interaction
- Custom background image

## 🖥️ Live Demo
[View Calculator](https://kareemzuhaib.github.io/simple-calculator/)

## 🛠️ Tech Stack
- HTML
- CSS (with background image)
- JavaScript (DOM manipulation)

### Core Logic (`script.js`)
- When a button is clicked:
  - If it's `=`, the expression is evaluated using `eval()`.
  - If it's `AC`, the input is cleared completely.
  - If it's `C`, the last character is removed (like backspace).
  - Otherwise, the clicked character is appended to the current input.
