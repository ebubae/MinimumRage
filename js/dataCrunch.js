var fs = require("fs")

function work()
{
    var content;
    var values = {};
    var states = {};
    fs.readFile('../cleanData.csv', encoding="UTF-8", function read(err, data) 
    {
        if (err) 
        {
            throw err;
        }
        content = data;
        values = process(content);
        states = compare(values);
        console.log(states);
        return states;
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

function compare(values)
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

work();
