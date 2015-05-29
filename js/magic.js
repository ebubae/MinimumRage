 $(document).ready(function()
 {
    $("#start").click(function()
    {
        window.history.pushState("idk dude", "Minimum Rage: Map Your Rage", "map/index.html");
        var toLoad = "index.html #content";
        $("#content").hide('slide', {direction: 'left'}, 'slow');
        $("#load").fadeIn('normal');
        setTimeout(loadContent, 800);
        function hideLoader()
        {
            $("#load").fadeOut('normal');
        }
        function loadContent()
        {
            setTimeout(2000);
            $("#content").load(toLoad, '', showNewContent());
        }
        //window.location.href = window.location.href.substring(0, window.location.href.length - 10) + "map/index.html";
        function showNewContent()
        {
            hideLoader();
            $("#content").show('slide', {direction: 'right'}, 'slow');
//            $("#map")[0].usmap({});
        }
        function doLogic()
        {
            return false;
        }
        return doLogic;
    });
});
