var b = document.querySelectorAll("body > *"),
	htmlhArray = "H6 H5 H4 H3 H2 H1".split(" ");
for (k = 0; k < b.length; k++)
	if ("H1" == b[k].tagName) {
		var i = k;
		break
	}
for (; i < b.length; i++) {
	var num = b[i].tagName.charAt(1);
	var a = num,
		btag = b[i].tagName,
		showaar;
	if (htmlhArray.includes(btag)) {
		showaar = btag;
		var x = a - 1,
			showaarH = "H" + x;
		b[i].classList.add(showaarH);
		b[i].addEventListener("click", togglefunction);
		b[i].style.cursor = "pointer";
		b[i].prepend(document.createElement("span"));
		bhSpan = b[i].querySelectorAll("span")[0];
		bhSpan.appendChild(document.createTextNode("\u21f2  "))
	} else "SCRIPT" != btag && b[i].classList.add(showaar);
	"H1" != btag && "SCRIPT" != btag && (b[i].style.display =
		"none")
}

function togglefunction() {
	var c = this.querySelectorAll("span")[0];
	c.innerHTML = "\u21f1  " == c.innerHTML ? "\u21f2  " : "\u21f1  ";
	var d = this.nextElementSibling;
	c = this.nextElementSibling;
	this.tagName.charAt(1);
	htmlhArray.indexOf(c.tagName);
	var e = this.tagName;
	htmlhArray.indexOf(e);
	var f = e + "2showit";
	"none" == d.style.display ? (d = "", this.classList.add("open")) : (d = "none", this.classList.add("closed"));
	for (; 0 == htmlhArray.includes(c.tagName, htmlhArray.indexOf(e)) && "SCRIPT" != c.tagName;) "none" == d ? ("none" != c.style.display && c.classList.add(f),
		c.style.display = "none") : c.classList.contains(f) ? (c.style.display = "", c.classList.remove(f)) : 1 == c.classList.contains(e) && (c.style.display = ""), c = c.nextElementSibling
};