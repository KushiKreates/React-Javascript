import React, { useState } from 'react';
import './KushiCodeEngine.css'; // Import the CSS file for styling

function KushiCodeEngine() {
  const [input, setInput] = useState(''); // State to store the input text
  const [output, setOutput] = useState(''); // State to store the output text

  // Function to handle changes in the input area
  const handleInputChange = (event) => {
    setInput(event.target.value); // Update the input state with the new value
  };

  // Function to handle the submit button click
  // Function to handle the submit button click
  const handleSubmit = async () => {
    // Process the input text (example: kushicode:help)
    if (input.startsWith('kushicode:')) {
      const command = input.slice(10); // Extract the command part
      switch (command) {
        case 'help':
          setOutput('Displaying help commands...');
          break;
        case 'funfact':
          try {
            const response = await fetch('http://api.fungenerators.com/fact/random?category=Countries&subcategory=USA');
            const data = await response.json();
            setOutput(`Fun Fact: ${data.text}`);
          } catch (error) {
            setOutput('Failed to fetch fun fact. Please try again later.');
          }
          break;
        case 'time':
          const currentTime = new Date().toLocaleTimeString();
          setOutput(`Current Time: ${currentTime}`);
          break;
        case 'weather':
          try {
            const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=yourcity&appid=yourAPIKey');
            const data = await response.json();
            const weatherDescription = data.weather[0].description;
            setOutput(`Weather: ${weatherDescription}`);
          } catch (error) {
            setOutput('Failed to fetch weather information. Please try again later.');
          }
          break;
        case 'calculate':
          const parts = command.split(' '); // Split the command into parts
          if (parts.length === 4 && (parts[1] === 'plus' || parts[1] === 'minus')) {
            const num1 = parseFloat(parts[0]); // Parse the first number
            const operator = parts[1]; // Get the operator (plus or minus)
            const num2 = parseFloat(parts[2]); // Parse the second number
            let result;
            if (!isNaN(num1) && !isNaN(num2)) {
              if (operator === 'plus') {
                result = num1 + num2;
              } else if (operator === 'minus') {
                result = num1 - num2;
              }
              setOutput(`Result: ${result}`);
            } else {
              setOutput('Invalid numbers. Please enter valid numbers.');
            }
          } else {
            setOutput('Invalid command format. Example: kushicode:calculate 5 plus 3');
          }
          break;
        default:
          setOutput(`Invalid command: ${command}`);
          break;
      }
    } else {
      setOutput(input); // Set the output to the input text if it doesn't match any command
    }
  };



  return (
    <div className="kushicode-engine">
      <div className="editor">
        <textarea
          className="input-area"
          placeholder="Enter Kushicode commands...
          None for now!"
          value={input}
          onChange={handleInputChange}
        />
        <button className="submit-button" onClick={handleSubmit}>Run</button>
      </div>
      <div className="output-area">
        <p>Output:</p>
        <textarea className="output-text" value={output} readOnly />
      </div>
    </div>
  );
}

export default KushiCodeEngine;
