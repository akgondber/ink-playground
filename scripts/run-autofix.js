#!/usr/bin/env zx

import {$, argv} from 'zx';
import delay from 'delay';
import {execa} from 'execa';
import editJsonFile from 'edit-json-file';

const packageNameRegex = /(?:(Add\s*))(@[a-z0-9-~][a-z0-9-._~]*\/)?[a-z0-9-~][a-z0-9-._~]*/g;

const retrievePackageCandidatesToInstall = (source, regexes) => {
  let pkgs = [];

  regexes.map(regex => {
    let shouldBreak = false;

    let ma = source.matchAll(regex);

    for (const match of ma) {
      console.log(match[0].split(/(?:(?:Add)|(?:Required package:))\s*/));
      pkgs = [].concat(...pkgs, ...match[0].split(/(?:(?:Add)|(?:Required package:))\s*/).filter(notEmpty));
    }

    // if (ma != null) {
    //   ma.map(el => {
    //     pkgs.push(el.slice(0));
    //   });
    // }
  });

  return pkgs;
};

const notEmpty = (str) => str !== '';

const runRecursively = async (retries = 1) => {
  const cmd = argv.command; // console.log('Cdsjcds');
  if (!cmd) {
    console.log(`Provide a command, for example: yarn runau --command "babel --out-dir=dist source"`);
  }

  try {
    // = 'babel --out-dir=dist source';
    console.log(`Gona run ${cmd}`);
    const quoteEscaping = $.quote
    $.quote = (command) => command
    //await delay(1300);
    const nw = 'yarn go --target list';
    // const {stdout} = await execa(nw);

    // console.log(stdout);
    await $`${cmd}`;
    $.quote = quoteEscaping
    console.log(`${nw} has been executed succesfully`);
  } catch (err) {
    console.log(`Exit code: ${err.exitCode}`);
    // const matches = err.stderr.match(packageNameRegex);
    const regexes = [
      /(?:(Add\s*))(@[a-z0-9-~][a-z0-9-._~]*\/)?[a-z0-9-~][a-z0-9-._~]*/g,
      /Required package:\s*(@[a-z0-9-~][a-z0-9-._~]*\/)?[a-z0-9-~][a-z0-9-._~]*/g,
    ];
    const pkgs = retrievePackageCandidatesToInstall(err.stderr, regexes);
  
    if (pkgs.length > 0) {
      // matches.map(item => {
      //   const pkgToInstall = item.slice(4);
      //   pkgs.push(pkgToInstall);
      // });

      console.log(`Gona add new packages - ${pkgs.join(' ')}`);
      
      await delay(2000);
      await $`yarn add ${pkgs.join(' ')}`;
      // $`npe babel.presets '["${pkgs[0]}"]'`;
      
      const babelPackages = pkgs.filter(item => item.startsWith('@babel'));
      if (babelPackages.length > 0) {
        let file = editJsonFile('./package.json');
        babelPackages.map(pkg => {
          file.append('babel.presets', pkg);
        });
        
        file.save();
      }

      if (retries < 4) {
        console.log(`Gona new try #${retries}`);
        await delay(2000);
        await runRecursively(retries + 1);
      } else {
        throw err;
      }
    } else {
      console.log("An error occured in performed command does not belong to package not installed category.");
      console.log(`ERROR: ${err.stderr}`);
    }
  }
};

await runRecursively(1);
