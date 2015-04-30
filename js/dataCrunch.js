var fs = require("fs")

var content;
fs.readFile('../cleanData.csv', encoding="UTF-8", function read(err, data) {
    if (err) {
        throw err;
    }
    content = data;
    process();
});

function process(){
    for(var k = 0; k < content.length; k++){
    content[0]
}
