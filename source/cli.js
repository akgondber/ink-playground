#!/usr/bin/env node
import React from 'react';
import {render} from 'ink';
import App from './index.js';
import { program } from 'commander';

program
  .option('--target <string>');

program.parse();
const options = program.opts();
// const cli = meow(
// 	`
// 		Usage
// 		  $ what-is-sequence-game

// 		Options
// 			--emoji  Use emojis as a sequence items

// 		Examples
// 		  $ what-is-sequence-game
// 		  $ what-is-sequence-game --emoji
// 	`,
// 	{
// 		importMeta: import.meta,
// 		flags: {
// 			emoj: {
// 				type: 'boolean',
// 				default: false,
// 				aliases: ['emoji', 'emojis'],
// 				shortFlag: 'e',
// 			},
// 		},
// 	},
// );
const {target} = options;

render(<App target={options.target} />);
