Calculator Web App

A simple and elegant calculator web application built with Flask, HTML, CSS, and JavaScript.

Features

- ✨ Clean, modern user interface
- ➕ Basic arithmetic operations (addition, subtraction, multiplication, division)
- 🎨 Responsive design (works on desktop and mobile)
- ⌨️ Keyboard support (Enter key to calculate)
- 🔄 Input validation and error handling
- 📱 Beautiful gradient background and smooth animations

 Project Structure

```
Calculator/
├── app.py                 # Flask backend application
├── requirements.txt       # Python dependencies
├── templates/
│   └── index.html        # HTML template
└── static/
    ├── css/
    │   └── style.css     # CSS styling
    └── js/
        └── calculator.js # JavaScript interactivity
```

 Installation & Setup

Prerequisites
- Python 3.7 or higher
- pip (Python package manager)
 Step 1: Install Dependencies

```bash
pip install -r requirements.txt
```

Or manually install Flask:
```bash
pip install Flask
```

Step 2: Run the Application

```bash
python app.py
```

The app will start on `http://localhost:5000`

Usage

1. Open your web browser and navigate to `http://localhost:5000`
2. Enter the first number in the input field
3. Click one of the operation buttons (+, −, ×, ÷)
4. Enter the second number
5. Click the "Calculate" button or press Enter
6. View the result displayed below
7. Use the "Clear" button to reset all fields

 How It Works
 Backend (Flask)
- `app.py` contains the Flask server that handles:
  - Serving the HTML page at `/`
  - Processing calculation requests at `/calculate` endpoint
  - Performing arithmetic operations
  - Returning results as JSON

 Frontend (HTML/CSS/JS)
- `index.html` - Structure of the calculator interface
- `style.css` - Beautiful styling with gradients, animations, and responsive design
- `calculator.js` - Handles user interactions, validation, and API calls

Features Explained

 Operation Selection
- Click one of the four operation buttons to select (+, −, ×, ÷)
- The selected button highlights in blue

 Input Validation
- Both input fields must be filled before calculating
- An operation must be selected
- Division by zero is prevented with an error message

 Error Handling
- Invalid input displays an error message
- Server-side validation ensures calculations are correct
- User-friendly error messages guide the user

Responsive Design
- Adapts perfectly to mobile devices
- Touch-friendly button sizes
- Mobile-optimized layout

Technical Details

Floating Point Precision
- Results are rounded to 10 decimal places to avoid floating-point errors
- Example: 0.1 + 0.2 will correctly display as 0.3

API Communication
- Frontend communicates with backend via JSON POST requests
- All calculations are processed server-side for reliability
- Graceful error handling on both client and server

License

This project is open source and available for educational purposes.

Troubleshooting

**Port 5000 already in use:**
```bash
python app.py  # Change port in app.py if needed
```

**Flask not found:**
```bash
pip install Flask
```

**JavaScript not loading:**
- Clear browser cache (Ctrl+Shift+Delete)
- Check that the static folder structure is correct

Enjoy your calculator app! 🎉
