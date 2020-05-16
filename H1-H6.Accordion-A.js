/*MILESTONE
2. Added pointer
1. Toggle shows the next level headers but nothing lower than them or after them
*/

/*To-Do
1. Add scrollIntoView to the clicked header
2. Add icons at the beginning of the header showing it has or has not been toggled
3. Make toggle open elements that were previously opened before
*/

/*HIDE ALL ELEMENTS THAT ARE NOT H1 (or H2)*/
var b = document.querySelectorAll("body > *");

/*Add classes indicating the header elements are under*/
for (i = 0; i < b.length; i++) {

	for (a = 1; a < 7; a++) {
		if (b[i].tagName == "H" + a) {
			var showaar = "H" + a;
			
			//prepend span element in headers to hold utf-8 symbols for open and close
			b[i].prepend(document.createElement("span"));
			bhSpan = b[i].querySelectorAll("span")[0];
			bhSpan.appendChild(document.createTextNode("\u21f2  "));
			bhSpan.style.color = "blue";
		}
		if (b[i].tagName != "SCRIPT") {
			b[i].classList.add(showaar);
		}
	}

	/*HIDE ALL ELEMENTS THAT ARE NOT H1 (or H2)*/
	if ((b[i].tagName != "H1") && (b[i].tagName != "SCRIPT")) {
		b[i].style.display = "none";
	}
};

//AddEventListener To All Headers from 1 to 6
for (i = 0; i < 5; i++) {
	var j = i + 1;
	var h1to6 = "h" + j;
	var h = document.querySelectorAll(h1to6);

	console.log(h[i]);
	h.forEach(function (elem) {
		elem.addEventListener('click', togglefunction);
		elem.style.cursor = "pointer";
	})
};

function togglefunction() {
	var hspan = this.querySelectorAll("span")[0];
	var sopen = "\u21f1  ";
	var sclose = "\u21f2  ";
	if(hspan.innerHTML == sopen){
		hspan.innerHTML = sclose;
		hspan.style.color = "blue";
	} else {
		hspan.innerHTML = sopen;
		hspan.style.color = "red";
	};


	var hSib1 = this.nextElementSibling;
	var hSibs = this.nextElementSibling;
	var num = this.tagName.charAt(1);

	var none = "none";
	var empty = "";
	var state;

	//Check the state of the nextElementSibling to determine whether to hide or to show
	if (hSib1.style.display == none) {
		var state = "";
	} else {
		var state = "none";
	}

	//The actual toggle function.

	var htag = this.tagName;

	function toggleNoneH() {
		if (state == "none") {
			hSibs.style.display = "none";
		} else if (hSibs.classList.contains(htag) == true) {
			hSibs.style.display = "";
		}
		hSibs = hSibs.nextElementSibling;
	};




	var notH1 = function () {
		return hSibs.tagName != "H1"
	};
	var notH2 = function () {
		return hSibs.tagName != "H2"
	};
	var notH3 = function () {
		return hSibs.tagName != "H3"
	};
	var notH4 = function () {
		return hSibs.tagName != "H4"
	};
	var notH5 = function () {
		return hSibs.tagName != "H5"
	};
	var notH6 = function () {
		return hSibs.tagName != "H6"
	};
	var notScript = function () {
		return hSibs.tagName != "SCRIPT"
	};

	//		let bbb = `notH1() && notScript()`;

	if (this.tagName == "H1") {
		while (notH1() && notScript()) {
			toggleNoneH();
		}
	} else if (this.tagName == "H2") {
		while (notH1() && notH2() && notScript()) {
			toggleNoneH();
		}
	} else if (this.tagName == "H3") {
		while (notH1() && notH2() && notH3() && notScript()) {
			toggleNoneH();
		}
	} else if (this.tagName == "H4") {
		while (notH1() && notH2() && notH3() && notH4() && notScript()) {
			toggleNoneH();
		}
	} else if (this.tagName == "H5") {
		while (notH1() && notH2() && notH3() && notH4() && notH5() && notScript()) {
			toggleNoneH();
		}
	} else if (this.tagName == "H6") {
		while (notH1() && notH2() && notH3() && notH4() && notH5() && notH6() && notScript()) {
			toggleNoneH();
		}
	}
};