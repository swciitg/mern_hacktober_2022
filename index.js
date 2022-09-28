#!/usr/bin/env node
import chalk from 'chalk';
import inquirer from 'inquirer';
import chalkAnimation from 'chalk-animation';
import figlet from 'figlet';
import { createSpinner } from 'nanospinner';

const { textSync } = figlet;

const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));

async function createAnimatedText() {
    const rainbow = chalkAnimation.rainbow(textSync('Spotify CLI', function(err, data) {
        if (err) {
            console.log('Something went wrong...');
            console.dir(err);
            return;
        }
        console.log(data)
    }));


    return rainbow;
}

async function handleOperation(operation) {
    
    const spinner = createSpinner(`Processing...`).start();
    await sleep();
    if (operation === 'Quit') {
        spinner.stop({ text: 'Bye!', mark: ':)', color: 'magenta' })
        process.exit(1);
    }
    spinner.success({ text: `Cool` });

}

async function operation() {
    const answers = await inquirer.prompt({
        name: 'operation',
        type: 'list',
        message: 'Choose Operation\n',
        choices: [
          'Show Playlists',
          'Play',
          'Pause',
          'Skip',
          'Quit'
        ],
      });
    console.log(answers);
    await handleOperation(answers.operation);
}


const rainbow = await createAnimatedText();



// console.log(chalk.bgGreen('\n\n\n\n Spotify CLI \n \n \n'));

await sleep(3000);


rainbow.stop();

await operation();