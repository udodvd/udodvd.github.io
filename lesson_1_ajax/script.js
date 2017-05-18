window.onload = function () {
    document.querySelector('#shop_ip').onclick = function () {
        ajaxGet();
    }
}
function ajaxGet() {
    var XmlRh = new XMLHttpRequest();

    XmlRh.open('GET','ip.php');
    XmlRh.send();
}