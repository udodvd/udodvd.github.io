window.onload = function () {
    document.querySelector('#shop_ip').onclick = function () {
        ajaxGet();
    }
}
function ajaxGet() {
    var XmlRh = new XMLHttpRequest();
console.log('XmlRh',XmlRh);
    XmlRh.open('GET','ip.php');
    console.log(' XmlRh.open',XmlRh);
    XmlRh.send();
    console.log('XmlRh.send',XmlRh);
}