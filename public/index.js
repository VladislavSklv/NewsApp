document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        var elems = document.querySelectorAll('.sidenav');
        var instances = M.Sidenav.init(elems, []);
    }, 500);
});