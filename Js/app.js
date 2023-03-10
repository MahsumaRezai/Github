// select section 
function select() {
    let n = document.getElementById("sel");
    n.style.width = "100px";
    document.getElementById("sel").style.backgroundColor = "white";
    document.getElementById("sel").style.color = "black";
    document.getElementById("sel").style.gap = "5px";
}
select();
// button section 
function button() {
    document.getElementById("btn").style.width = "350px";
    document.getElementById("btn").style.color = "white";

}
button();
// image open window 

function imgwindow() {
    document.getElementById("open").innerText;
    let det = window.open("", "img", "width= 50, heig = 20");
    det.document.write("<h1> Hello this is  my github page</h1>");
    function closepage() {
        det.window.close()
    }
    window.setTimeout(closepage, 5000)
}


