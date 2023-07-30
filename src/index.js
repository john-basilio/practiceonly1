//  things to note to self
//
//  in package.json, to run the script i can use ["start": "node src/index.js] inside "script" to customize command
//
//  package-lock must be generated with "npm i" when sharing the project
//  in package.json, to do an put this inside the package.json ["type": "module",]
//  or use "require" by default on the source code.
//
//  example:
//      for module: import  {v4 as uuid} from 'uuid'   => need to do the ["type": "module",] in package json
//      for commonjs: const {v4 : uuid} = require ('uuid')
//

const {v4 : uuid} = require('uuid')

console.log(uuid())