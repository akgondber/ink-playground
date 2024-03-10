const packageNameRegex = /(?:(Add\s*))(@[a-z0-9-~][a-z0-9-._~]*\/)?[a-z0-9-~][a-z0-9-._~]*/g;
const packageNameRegex2 = /Required package:\s*(@[a-z0-9-~][a-z0-9-._~]*\/)?[a-z0-9-~][a-z0-9-._~]*/g;
let s = '';

// let s = `
// SyntaxError: C:\fep\bckn\cons\inku\v3\ink-playground\source\index.js: Support for the experimental syntax 'jsx' isn't currently enabled (5:12):

//   3 |
//   4 | const App = () => {
// > 5 |     return <Text>XS</Text>;
//     |            ^
//   6 | };
//   7 |
//   8 | export default App;

// Add @babel/preset-react (https://github.com/babel/babel/tree/main/packages/babel-preset-react) to the 'presets' section of your Babel config to enable transformation.
// erfer
// `;
// s += `
// C:\\fep\\bckn\\cons\\inku\\v3\\ink-playground\.pnp.cjs:11676
//   return Object.defineProperties(new Error(message), {
//                                  ^

// Error: Your application tried to access nanoid, but it isn't declared in your dependencies; this makes the require call ambiguous and unsound.

// Required package: nanoid (via "nanoid\\package.json")
// Required by: C:\\fep\\bckn\\cons\\inku\\v3\\ink-playground\\dist\\List.js
// `;

const notEmpty = (str) => str !== '';

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

// if (ma != null) {
//   ma.map(el => {
//     console.log(el.slice(4));
//   });
// } else {
//   ma = s.match(packageNameRegex2);
// }

const res = retrievePackageCandidatesToInstall(s, [packageNameRegex, packageNameRegex2])

// const matches = s.matchAll(packageNameRegex2);
// for (const m of matches) {
//   console.log(m);
//   console.log(m[0].split(/Add\s*/));
// }
console.log(res);
