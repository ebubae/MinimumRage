var fs = require("fs")

function work()
{
    var content = fs.readFileSync('../cleanData.csv').toString(); 
    var values = process(content);
    var states = index(values);
    return states;

    fs.readFile('../thresh14.csv', encoding="UTF-8", function read(err, data)
    {
        if(err)
        {
            throw err;
        }
        
    });
}

function process(content)
{
    var start = 0;
    var values = {};
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
            values[id] = parseFloat(num);
        }
        else if(content[k] === "\"")
        {
            start = k;
        }
    }
    return values;
}

function index(values)
{
    var states = {};
    for(var k = 0; k < Object.keys(values).length; k++)
    {
        var place = Object.keys(values)[k];
        var currState = place.substring(place.length-2, place.length);
        if(!RegExp(currState).test(Object.keys(states)))
        {
            states[currState] = [values[place], 1];
        }
        else
        {
            states[currState][0] += values[place];
            states[currState][1]++;
        }
    }
    for(var j = 0; j < Object.keys(states).length; j++)
    {
        var nowState = Object.keys(states)[j];
        states[nowState] = states[nowState][0]/states[nowState][1];
    }
    return states;
}

function poor()
{
    
}

console.log(work());
