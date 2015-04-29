function () 
{
    var data = [];
    fs.readFile('../cleanData.csv', function (err, data) 
    {
        if (err) throw err;
        console.log(data);
    });
    
    
}
