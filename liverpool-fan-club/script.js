$(document).ready(function () {
    $(".mobile.menu-items > li ").each( itemLi => {
        
        
        
        var targetedMenu = $(itemLi).find(".wrapper");
        
        $(itemLi).click(function (e) { 
            e.preventDefault();
            $(targetedMenu).toggle("show");
        });
    })
});