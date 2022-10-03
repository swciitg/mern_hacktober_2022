#!/usr/bin/env node
import chalk from 'chalk';
import inquirer from 'inquirer';
import chalkAnimation from 'chalk-animation';
import figlet from 'figlet';
import { createSpinner } from 'nanospinner';

// import app from './api.js';
import { getToken, getUserProfile } from './api.js';

const { textSync } = figlet;

let username = ``;

const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));

async function acceptUsername() {
  const usernameAccept = await inquirer.prompt({
    name: 'username',
    type: 'input',
    message: 'Enter your spotify username: '
  });
  username = usernameAccept.username;
}

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

async function createAnimatedName(name) {
    const radar = chalkAnimation.radar(textSync(name, function(err, data) {
        if (err) {
            console.log('Something went wrong...');
            console.dir(err);
            return;
        }
        console.log(data)
    }), 2);


    return radar;
}


async function handleOperation(operation) {

    const spinner = createSpinner(`Processing...`).start();
    await sleep(1000);
    if (operation === 'Show Playlists') {
      console.log(`Playlists!`);

    }
    else if (operation === 'Me') {
      const token = await getToken();
      const data = await getUserProfile(token, username);
      console.log(data);
    }
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
          'Me',
          'Play',
          'Pause',
          'Skip',
          'Quit'
        ],
      });
    await handleOperation(answers.operation);
}


const rainbow = await createAnimatedText();



await sleep(3000);


rainbow.stop();


await acceptUsername();
await operation();


