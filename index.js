
// const fs = require('fs');
// const express = require('express');
// const app = express();
// const PORT = 3001;

// const HISTORY_FILE = 'history.json';

// let history = [];

// // Load history from file if it exists
// if (fs.existsSync(HISTORY_FILE)) {
//   const fileData = fs.readFileSync(HISTORY_FILE, 'utf8');
//   history = JSON.parse(fileData);
// }

// app.use(express.urlencoded({ extended: true }));

// app.get('/:operand1/:operator/:operand2', (req, res) => {
//   const operand1 = parseFloat(req.params.operand1);
//   const operand2 = parseFloat(req.params.operand2);
//   const operator = req.params.operator;

//   let answer;

//   switch (operator) {
//     case 'plus':
//       answer = operand1 + operand2;
//       break;
//     case 'minus':
//       answer = operand1 - operand2;
//       break;
//     case 'into':
//     case 'multiply':
//       answer = operand1 * operand2;
//       break;
//     case 'over':
//     case 'divide':
//       answer = operand1 / operand2;
//       break;
//     default:
//       res.status(400).send('Invalid operator');
//       return;
//   }

//   const question = `${operand1} ${operator} ${operand2}`;
//   history.push({ question, answer });

//   if (history.length > 20) {
//     history.shift();
//   }

//   saveHistory();
  
//   res.json({ question, answer });
// });

// app.get('/history', (req, res) => {
//   loadHistory();

//   const htmlList = history
//     .map(item => `<li>${item.question} = ${item.answer}</li>`)
//     .join('');

//   const htmlResponse = `
//     <html>
//       <head><title>History of Operations</title></head>
//       <body>
//         <h1>History of Operations</h1>
//         <ul>
//           ${htmlList}
//         </ul>
//       </body>
//     </html>
//   `;

//   res.send(htmlResponse);
// });

// function saveHistory() {
//   fs.writeFileSync(HISTORY_FILE, JSON.stringify(history), 'utf8');
// }

// function loadHistory() {
//   if (fs.existsSync(HISTORY_FILE)) {
//     const fileData = fs.readFileSync(HISTORY_FILE, 'utf8');
//     history = JSON.parse(fileData);
//   }
// }

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });






// const fs = require('fs');
// const express = require('express');
// const app = express();
// const PORT = 2002;

// const HISTORY_FILE = 'history.json';

// let history = [];

// // Load history from file if it exists
// if (fs.existsSync(HISTORY_FILE)) {
//   const fileData = fs.readFileSync(HISTORY_FILE, 'utf8');
//   history = JSON.parse(fileData);
// }

// app.get('/', (req, res) => {
//   const query = req.query.q;

//   if (query) {
//     const result = evaluateExpression(query);
    
//     if (result !== null) {
//         const formattedExpression = formatExpression(query);




//       history.push({question: formattedExpression, answer: result });

//       if (history.length > 20) {
//         history.shift();
//       }

//       saveHistory();

//       res.json({ question: formattedExpression, answer: result });
//     } else {
//       res.status(400).send('Invalid expression');
//     }
//   } else {
//     res.send('Please provide a valid query.');
//   }
// });

// app.get('/history', (req, res) => {
//   loadHistory();
  
//   const htmlList = history
//     .map(item => `<li>${item.question} = ${item.answer}</li>`)
//     .join('');

//   const htmlResponse = `
//     <html>
//       <head><title>History of Operations</title></head>
//       <body>
//         <h1>History of Operations</h1>
//         <ul>
//           ${htmlList}
//         </ul>
//       </body>
//     </html>
//   `;

//   res.send(htmlResponse);
// });

// function saveHistory() {
//   fs.writeFileSync(HISTORY_FILE, JSON.stringify(history), 'utf8');
// }

// function loadHistory() {
//   if (fs.existsSync(HISTORY_FILE)) {
//     const fileData = fs.readFileSync(HISTORY_FILE, 'utf8');
//     history = JSON.parse(fileData);
//   }
// }

// function evaluateExpression(expression) {
//   try {
//     const tokens = expression.split('/');
//     const operators = { 'plus': 1, 'minus': 1, 'into': 2, 'over': 2 };
    
//     const postfix = [];
//     const operatorStack = [];
    
//     for (const token of tokens) {
//       if (token in operators) {
//         while (operatorStack.length && operators[operatorStack[operatorStack.length - 1]] >= operators[token]) {
//           postfix.push(operatorStack.pop());
//         }
//         operatorStack.push(token);
//       } else {
//         postfix.push(parseFloat(token));
//       }
//     }
    
//     while (operatorStack.length) {
//       postfix.push(operatorStack.pop());
//     }
    
//     const evalStack = [];
//     for (const token of postfix) {
//       if (typeof token === 'number') {
//         evalStack.push(token);
//       } else {
//         const b = evalStack.pop();
//         const a = evalStack.pop();
//         switch (token) {
//           case 'plus':
//             evalStack.push(a + b);
//             break;
//           case 'minus':
//             evalStack.push(a - b);
//             break;
//           case 'into':
//             evalStack.push(a * b);
//             break;
//           case 'over':
//             evalStack.push(a / b);
//             break;
//         }
//       }
//     }
    
//     return evalStack[0];
//   } catch (error) {
//     return null;
//   }
// }


// function formatExpression(expression) {
//     const expressionWithoutSlashes = expression.replace(/\//g, '');
//     const formatted = expressionWithoutSlashes.replace(/into/g, '*').replace(/over/g, '/');
//     return formatted;
//   }


// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });





























const fs = require('fs');
const express = require('express');
const app = express();
const PORT = 2004;

const HISTORY_FILE = 'history.json';

let history = [];

// Load history from file if it exists
if (fs.existsSync(HISTORY_FILE)) {
  const fileData = fs.readFileSync(HISTORY_FILE, 'utf8');
  history = JSON.parse(fileData);
}

app.get('/', (req, res) => {
  const query = req.query.q;

  if (query) {
    const result = evaluateExpression(query);

    if (result !== null) {
      const formattedExpression = formatExpression(query);

      history.push({ question: formattedExpression, answer: result });

      if (history.length > 20) {
        history.shift();
      }

      saveHistory();

      res.json({ question: formattedExpression, answer: result });
    } else {
      res.status(400).send('Invalid expression');
    }
  } else {
    res.send('Please provide a valid query.');
  }
});

app.get('/history', (req, res) => {
  loadHistory();

  const htmlList = history
    .map(item => `<li>${item.question} = ${item.answer}</li>`)
    .join('');

  const htmlResponse = `
    <html>
      <head><title>History of Operations</title></head>
      <body>
        <h1>History of Operations</h1>
        <ul>
          ${htmlList}
        </ul>
      </body>
    </html>
  `;

  res.send(htmlResponse);
});

function saveHistory() {
  fs.writeFileSync(HISTORY_FILE, JSON.stringify(history), 'utf8');
}

function loadHistory() {
  if (fs.existsSync(HISTORY_FILE)) {
    const fileData = fs.readFileSync(HISTORY_FILE, 'utf8');
    history = JSON.parse(fileData);
  }
}

function evaluateExpression(expression) {
  try {
    const tokens = expression.split('/');
    const operators = { 'plus': 1, 'minus': 1, 'into': 2, 'over': 2 };

    const postfix = [];
    const operatorStack = [];

    for (const token of tokens) {
      if (token in operators) {
        while (operatorStack.length && operators[operatorStack[operatorStack.length - 1]] >= operators[token]) {
          postfix.push(operatorStack.pop());
        }
        operatorStack.push(token);
      } else {
        postfix.push(parseFloat(token));
      }
    }

    while (operatorStack.length) {
      postfix.push(operatorStack.pop());
    }

    const evalStack = [];
    for (const token of postfix) {
      if (typeof token === 'number') {
        evalStack.push(token);
      } else {
        const b = evalStack.pop();
        const a = evalStack.pop();
        switch (token) {
          case 'plus':
            evalStack.push(a + b);
            break;
          case 'minus':
            evalStack.push(a - b);
            break;
          case 'into':
            evalStack.push(a * b);
            break;
          case 'over':
            evalStack.push(a / b);
            break;
        }
      }
    }

    return evalStack[0];
  } catch (error) {
    return null;
  }
}

function formatExpression(expression) {
    const expressionWithoutSlashes = expression.replace(/\//g, '');
    const formatted = expressionWithoutSlashes.replace(/into/g, '*').replace(/over/g, '/').replace(/plus/g, '+').replace(/minus/g, '-');
    return formatted;
  }

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});











