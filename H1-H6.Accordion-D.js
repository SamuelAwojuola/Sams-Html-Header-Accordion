/*HIDE ALL ELEMENTS THAT ARE NOT H1 (or H2)*/
let b = document.querySelectorAll("body > *");

var htmlhArray = ["H6", "H5", "H4", "H3", "H2", "H1"]; 
 
/* To ensure it starts hiding element after the first H1 and not from before it, if there is another element before it */
for (k = 0; k < b.length; k++) {
	if(b[k].tagName == "H1"){
		var i = k;
		break;
	   }
};
 
/* Add classes indicating the header elements are under */

for (i; i < b.length; i++) {
	var num = b[i].tagName.charAt(1);
	var a = num;

	var btag = b[i].tagName;
	var showaar;

	/* For H1 to H6 */
	if (htmlhArray.includes(btag)) {
		var showaar = btag;

		/* Add showaar classes to Headers */
		var x = a - 1;
		var showaarH = "H" + x;
		b[i].classList.add(showaarH);

		/* AddEventListener To All Headers from 1 to 6 */
		b[i].addEventListener('click', togglefunction);
		b[i].style.cursor = "pointer";

		/* Prepend span element in headers to hold utf-8 symbols for open and close */
		b[i].prepend(document.createElement("span"));
		bhSpan = b[i].querySelectorAll("span")[0];
		bhSpan.appendChild(document.createTextNode("\u21f2  "));
	//	bhSpan.style.color = "blue";
	} 
	/* For Elements other than H1 - H6 and SCRIPT */
	else if (btag != "SCRIPT") {
		b[i].classList.add(showaar);
	}

	/* HIDE ALL ELEMENTS THAT ARE NOT H1 */
	if ((btag != "H1") && (btag != "SCRIPT")) {
		b[i].style.display = "none";
	}
};

/* Toggle Function */
function togglefunction() {
	
	/* To toggle open/close utf-8 icons */
	
	var hspan = this.querySelectorAll("span")[0];
	var sopen = "\u21f1  ";
	var sclose = "\u21f2  ";
	if (hspan.innerHTML == sopen) {
		hspan.innerHTML = sclose;
		//  hspan.style.color = "blue";
	} else {
		hspan.innerHTML = sopen;
		//	hspan.style.color = "red";
	};

	var hSib1 = this.nextElementSibling;
	var hSibs = this.nextElementSibling;
	var num = this.tagName.charAt(1);

	var hSibstag = hSibs.tagName;
	var hSibstagIndex = htmlhArray.indexOf(hSibstag);

	var htag = this.tagName;
	var htagIndex = htmlhArray.indexOf(htag);
	var h2showit = htag + "2showit";

	/* Check the state of the nextElementSibling to determine whether to hide or to show */
/*	if (hSib1.style.display == "none") {
		var state = "";
		this.classList.add("open");
		this.classList.remove("closed");
	} else {
		var state = "none";
		this.classList.add("closed");
		this.classList.remove("open");
	};*/

	/* THE ACTUAL TOGGLE FUNCTION */
	while ((htmlhArray.includes((hSibs.tagName), (htmlhArray.indexOf(htag))) == 0) && (hSibs.tagName != "SCRIPT")) {
		//Hide
		if (state == "none") {
			if (hSibs.style.display != "none") {
				hSibs.classList.add(h2showit);
			};
			hSibs.style.display = "none";

			/* Show (show elements the clicked header is to show it) */
		} else if (hSibs.classList.contains(h2showit)) {
			hSibs.style.display = "";
			hSibs.classList.remove(h2showit);

			/* Show (show elements that have the tag of the clicked header as a class) */
		} else if (hSibs.classList.contains(htag) == true) {
			hSibs.style.display = "";
		}

		hSibs = hSibs.nextElementSibling;
	}

}