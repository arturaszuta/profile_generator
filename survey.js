const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let answerString = '';

rl.question('What"s your name? Nicknames are also acceptable! \n', (answer) => {
  answerString += `Hi, I"am ${answer}. `;
  rl.question('What"s an activity you like doing? \n', (answer) => {
    answerString += `I really enjoy ${answer}. `;
    rl.question('What do you listen to while doing that? \n', (answer) => {
      answerString += `While I"m doing that - I love listening to ${answer}. `;
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.) \n', (answer) => {
        answerString += `My favorite meal of the day is ${answer}. `;
        rl.question('What"s your favourite thing to eat for that meal? \n', (answer) => {
          answerString += `And I love having ${answer}! `;
          rl.question('Which sport is your absolute favourite? \n', (answer) => {
            answerString += `I"m a huge fan of ${answer}. `;
            rl.question('What is your superpower? In a few words, tell us what you are amazing at! \n', (answer) => {
              answerString += `I think my secret super power is : ${answer}. `;
              console.log(answerString);
              rl.close();
            });
          });
        });
      });
    });
  });
});


