import React from 'react';
import chalk from 'chalk';
import { render, Box, Text } from 'ink';
import { List } from './List.js';
const text = "The opinion that people in general have about someone or something, or how much respect or admiration someone or something receives, based on past behaviour or character";
const App = ({
  target = 'defa'
}) => {
  console.log('t - ', target);
  if (target === 'defa') {
    return /*#__PURE__*/React.createElement(Box, null, /*#__PURE__*/React.createElement(Text, null, chalk.bgHex('#B52E2E')(text)));
  }
  if (target === 'list') {
    return /*#__PURE__*/React.createElement(List, null);
  }
  return /*#__PURE__*/React.createElement(Box, null, /*#__PURE__*/React.createElement(Text, null, "Something"));
};
export default App;