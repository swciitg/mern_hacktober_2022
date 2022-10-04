#!/usr/bin/env node
import chalk from 'chalk';
import inquirer from 'inquirer';
import chalkAnimation from 'chalk-animation';
import figlet from 'figlet';
import { createSpinner } from 'nanospinner';

// import app from './api.js';
import { getToken, getUserProfile, getUserPlaylists, getPlaylistTracks } from './api.js';

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
      const token = await getToken();
      const data = await getUserPlaylists(token, username);
      

      const newPlaylistList = data.items.map((ele) => {
        return {
          name: ele.name,
          description: ele.description,
          id: ele.id
        };
      });

      const playlistChoice = await inquirer.prompt({
        name: 'playlists',
        type: 'list',
        message: 'choose playlist',
        choices: newPlaylistList.map((ele) => ele.name)
      });

      const choice = newPlaylistList.filter((ele) => {
        return ele.name === playlistChoice.playlists
      })[0].id;

      const trackData = await getPlaylistTracks(choice);

      console.log(trackData.items);

    }
    else if (operation === 'Me') {
      const token = await getToken();
      const data = await getUserProfile(token, username);
      console.log(data);
    }
    else if (operation === 'Quit') {
        spinner.stop({ text: 'Bye!', mark: ':)', color: 'magenta' })
        process.exit(1);
    }
    spinner.success({ text: `Cool \n \n \n` });

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


while (true) {
  
  await operation();
}



