document.addEventListener('DOMContentLoaded', function() {
    const num1Input = document.getElementById('num1');
    const num2Input = document.getElementById('num2');
    const calculateBtn = document.getElementById('calculateBtn');
    const clearBtn = document.getElementById('clearBtn');
    const resultText = document.getElementById('resultText');
    const errorArea = document.getElementById('errorArea');
    const operationButtons = document.querySelectorAll('.op-btn');
    
    let selectedOperation = null;
    
    // Handle operation button clicks
    operationButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove previous selection
            operationButtons.forEach(b => b.classList.remove('selected'));
            
            // Select current button
            this.classList.add('selected');
            selectedOperation = this.getAttribute('data-op');
        });
    });
    
    // Handle calculate button click
    calculateBtn.addEventListener('click', performCalculation);
    
    // Handle clear button click
    clearBtn.addEventListener('click', function() {
        num1Input.value = '';
        num2Input.value = '';
        selectedOperation = null;
        resultText.textContent = 'Result will appear here';
        resultText.classList.remove('success');
        errorArea.textContent = '';
        errorArea.classList.remove('show');
        operationButtons.forEach(btn => btn.classList.remove('selected'));
    });
    
    // Allow Enter key to calculate
    num2Input.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performCalculation();
        }
    });
    
    function performCalculation() {
        // Clear previous error
        errorArea.textContent = '';
        errorArea.classList.remove('show');
        
        // Validate inputs
        const num1 = num1Input.value.trim();
        const num2 = num2Input.value.trim();
        
        if (!num1 || !num2) {
            showError('Please enter both numbers');
            return;
        }
        
        if (!selectedOperation) {
            showError('Please select an operation (+, −, ×, ÷)');
            return;
        }
        
        // Send calculation request to server
        fetch('/calculate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                num1: parseFloat(num1),
                num2: parseFloat(num2),
                operation: selectedOperation
            })
        })
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                showError(data.error);
            } else {
                resultText.textContent = `${num1} ${selectedOperation} ${num2} = ${data.result}`;
                resultText.classList.add('success');
            }
        })
        .catch(error => {
            showError('An error occurred. Please try again.');
            console.error('Error:', error);
        });
    }
    
    function showError(message) {
        errorArea.textContent = message;
        errorArea.classList.add('show');
        resultText.textContent = 'Result will appear here';
        resultText.classList.remove('success');
    }
});
