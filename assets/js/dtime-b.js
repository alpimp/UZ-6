function thisElement() {
    for (var e = document.documentElement; e.lastChild;) e = e.lastChild;
    return e.parentNode
}

function dtime_nums(e, t) {
    var n = thisElement(),
        a = new Date;
    a.setDate(a.getDate() + e);
    var d = "";
    a.getDate() < 10 && (d = "0"), d += a.getDate();
    var l = "";
    a.getMonth() + 1 < 10 && (l = "0"), l += a.getMonth() + 1;
    var r = document.createElement("span");
    !0 === t ? r.appendChild(document.createTextNode(d + "." + l + "." + a.getFullYear())) : r.appendChild(document.createTextNode(l + "." + d + "." + a.getFullYear())), n.parentNode.appendChild(r)
}