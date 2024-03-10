import React from 'react';
import chalk from 'chalk';
import {render, Box, Text} from 'ink';
import { List } from './List.js';

const text = "The opinion that people in general have about someone or something, or how much respect or admiration someone or something receives, based on past behaviour or character";

const App = ({ target = 'defa' }) => {
  console.log('t - ', target);
  if (target === 'defa') {
    return <Box>
        <Text>{chalk.bgHex('#B52E2E')(text)}</Text>
      </Box>;
  }
  if (target === 'list') {
    return <List>

    </List>;
  }
  return <Box>
    <Text>Something</Text>
  </Box>
};

export default App;

