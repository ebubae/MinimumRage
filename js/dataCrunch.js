var fs = require("fs")

var content;
var values = {};
fs.readFile('../cleanData.csv', encoding="UTF-8", function read(err, data) 
{
    if (err) 
    {
        throw err;
    }
    content = data;
    process();
    console.log(values);
});

function process()
{
    var start = 0;
    for(var k = 0; k < content.length; k++)
    {
        if(content[k] === "\"" && content[k+1] === ",")
        {
            var id = content.substring(start+1, k);
            var num = "";
            var j = 2;
            while(content[k+j] != ",")
            {
                num += content[k+j];
                j++;
            }
            values[id] = num;
        }
        else if(content[k] === "\"")
        {
            start = k;
        }
    }
}
