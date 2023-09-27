const fs = require('fs')
const bioData = {
    name: "nabeel",
    age: 24,

}
console.log(bioData.name);
const jsonData = JSON.stringify(bioData);
console.log(jsonData);
// const obj = JSON.parse(jsonData);
// console.log(obj.age);
// fs.writeFile('jsonNodejs/json1.json', jsonData, (error) => {
//     console.log('obj')
// })
fs.readFile('jsonNodejs/json1.json', 'utf-8', (error, data) => {
    console.log(data)
    const or = JSON.parse(data);
    console.log(or)
})
