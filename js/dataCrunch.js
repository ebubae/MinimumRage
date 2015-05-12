var fs = require("fs")

function work()
{
    var livingData = fs.readFileSync('../cleanData.csv').toString(); 
    var processLiving = process(livingData);
    var povertyData = fs.readFileSync('../thresh14.csv').toString().split("\n");
    var states = index(processLiving, povertyData);
    return states;
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

function index(values, data)
{
    var states = {};
    var size = "6";
    var kids = "0";
    var age = "67";
    var threshold = 0;
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
    for(var i = 0; i < data.length; i++)
    {
        var line = data[i].split(",");
        if(data[i][0] == size)
        {
            if(parseInt(age, 10) > 65 && line[1] == "true")
            {
                threshold = parseInt(line[parseInt(kids, 10)+2], 10);
            }
            if(parseInt(size, 10) > 2)
            {
                threshold = parseInt(line[parseInt(kids, 10)+2], 10);
            }
        }
    }
    console.log(threshold);
    for(var j = 0; j < Object.keys(states).length; j++)
    {
        var nowState = Object.keys(states)[j];
        states[nowState] = threshold * states[nowState][0]/(100* states[nowState][1]);
    }
    return states;
}

console.log(work());
