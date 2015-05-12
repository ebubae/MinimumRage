 $(document).ready(function() {
    $('#map').usmap({});
    
    $("#start").click(function() {
        var toLoad = "map/index.html";
        $(document.getElementsByTagName("main")[0]).hide('slide', {direction: 'left'}, 'slow')
    });
});