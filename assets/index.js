document.getElementById('open_sidebar').addEventListener('click', function () {
    document.getElementById('sidebar').style.width = "270px";
    document.getElementById('wrapper').style.marginLeft = "270px";
    document.getElementById('wrapper').style.overflow = "hidden";
});

document.getElementById('close_sidebar').addEventListener('click', function () {
    document.getElementById('sidebar').style.width = "0";
    document.getElementById('wrapper').style.marginLeft = "0";
    document.getElementById('wrapper').style.overflow = "unset";
});

