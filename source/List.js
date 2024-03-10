#!/usr/bin/env node
import React from 'react';
import {Text, Box} from 'ink';
import {nanoid} from 'nanoid';
import figureSet from 'figures';
import {times} from 'remeda';
import stringWidth from 'string-width';
import litDate from 'lit-date';

const items = [
  {
    dt: new Date(2024, 2, 5),
    value: 2893
  },
  {
    dt: new Date(2024, 9, 19),
    value: 926
  }
];

export const List = () => {
  return <Box flexDirection='column'>
    {
      items.map(item => (
        <Box key={nanoid()} flexDirection='column'>
          <Box><Text>{times(stringWidth(`${litDate`${'D'}-${'M'}-${'YYYY'}`(item.dt)} ${`  `}${figureSet.lineVertical}${`  `}${item.value}`), _i => figureSet.lineBold).join('')}</Text></Box>
          <Box>
            <Text>{litDate`${'DD'}-${'MM'}-${'YYYY'}`(item.dt)}</Text>
            <Text>{`  `}{figureSet.lineVertical}{`  `}</Text>
            <Text>{item.value}</Text>
          </Box>
        </Box>
      ))
    }
    {/* <Table data={items} /> */}

    <Text>
      sdc
    </Text>
  </Box>
};

