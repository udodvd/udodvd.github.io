var myImg = document.querySelectorAll('li img');
var myBigImg = document.getElementsByClassName('big-picture')[0];
console.log(myBigImg);
for(var key in myImg){
    if(!myImg.hasOwnProperty(key)) {
        continue;
    }
    console.log("this.key - "+ key + " :myImg[key]- " +myImg[key]);

    this.myImg[key].onclick = function () {
        this.style.cssText = "border: 3px solid red"
        var that = this;
        console.log(this);
        var CurImg = that.cloneNode(true);
        myBigImg.replaceChild(CurImg,myBigImg.childNodes[0]);
        myBigImg.removeChild(myBigImg.childNodes[1]);
    }
    this.myImg[key].onmouseout = function () {
        this.style.cssText = "border: 3px solid blue"
    }
}
console.log(myImg);

