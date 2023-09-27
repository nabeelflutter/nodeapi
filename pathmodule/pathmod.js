const path = require('path');
console.log(path.dirname('D:/nodejsprojects/pathmodule/pathmod.js'));
console.log(path.extname('D:/nodejsprojects/pathmodule/pathmod.js'));
console.log(path.basename('D:/nodejsprojects/pathmodule/pathmod.js'));

const name = path.parse('D:/nodejsprojects/pathmodule/pathmod.js');
console.log(name.name); 