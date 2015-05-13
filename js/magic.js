 $(document).ready(function() {
    $('#map').usmap({});
    
    $("#start").click(function() {
        var toLoad = ("map/index.html main");
        $(document.getElementsByTagName("main")[0]).hide('slide', {direction: 'left'}, 'slow');
        /*function loadContent() {
            return
        }*/
    }); 
});