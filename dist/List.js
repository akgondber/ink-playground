#!/usr/bin/env node
import React from 'react';
import { Text, Box } from 'ink';
import { nanoid } from 'nanoid';
import figureSet from 'figures';
import { times } from 'remeda';
import stringWidth from 'string-width';
import litDate from 'lit-date';
const items = [{
  dt: new Date(2024, 2, 5),
  value: 2893
}, {
  dt: new Date(2024, 9, 19),
  value: 926
}];
export const List = () => {
  return /*#__PURE__*/React.createElement(Box, {
    flexDirection: "column"
  }, items.map(item => /*#__PURE__*/React.createElement(Box, {
    key: nanoid(),
    flexDirection: "column"
  }, /*#__PURE__*/React.createElement(Box, null, /*#__PURE__*/React.createElement(Text, null, times(stringWidth(`${litDate`${'D'}-${'M'}-${'YYYY'}`(item.dt)} ${`  `}${figureSet.lineVertical}${`  `}${item.value}`), _i => figureSet.lineBold).join(''))), /*#__PURE__*/React.createElement(Box, null, /*#__PURE__*/React.createElement(Text, null, litDate`${'DD'}-${'MM'}-${'YYYY'}`(item.dt)), /*#__PURE__*/React.createElement(Text, null, `  `, figureSet.lineVertical, `  `), /*#__PURE__*/React.createElement(Text, null, item.value)))), /*#__PURE__*/React.createElement(Text, null, "sdc"));
};