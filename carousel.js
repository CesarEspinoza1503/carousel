var index =2;
imagenes = ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg","9.jpg","10.jpg",
			"11.jpg", "12.jpg", "13.jpg", "14.jpg", "15.jpg"];
showDivs(index);

function plusDivs(n) {
	showDivs(index += n);
}


function showDivs(n) {
	if (index > imagenes.length) {
		index = 1;
	}
	else if (index < 0) {
		index = imagenes.length-1;
	}
	for (var i = 0; i < imagenes.length; i++) {
		document.getElementById("img1").src = imagenes[index-3];
		document.getElementById("img2").src = imagenes[index-2];
		document.getElementById("img3").src = imagenes[index-1];
		document.getElementById("img4").src = imagenes[index];
		document.getElementById("img5").src = imagenes[index+1];
		document.getElementById("imagenGrande").src = imagenes[index-1];
		if (n==0) {
			document.getElementById("img1").src = imagenes[imagenes.length-3];
			document.getElementById("img2").src = imagenes[imagenes.length-2];
			document.getElementById("img3").src = imagenes[imagenes.length-1];
			document.getElementById("imagenGrande").src = imagenes[imagenes.length-1];
		}
		if (n==1) {
			document.getElementById("img1").src = imagenes[imagenes.length-2];
			document.getElementById("img2").src = imagenes[imagenes.length-1];
		}else if (n==2) {
			document.getElementById("img1").src = imagenes[imagenes.length-1];
			document.getElementById("img2").src = imagenes[0];
		}
		if (n<0) {
			document.getElementById("img1").src = imagenes[index-3];
			document.getElementById("img2").src = imagenes[index-2];
			document.getElementById("img3").src = imagenes[index-1];
			document.getElementById("img4").src = imagenes[index];
			document.getElementById("img5").src = imagenes[n+1];
		}else if (n>imagenes.length-1) {
			if (index==imagenes.length) {
				document.getElementById("img1").src = imagenes[imagenes.length-3];
				document.getElementById("img2").src = imagenes[imagenes.length-2];
				document.getElementById("img3").src = imagenes[imagenes.length-1];
				document.getElementById("img4").src = imagenes[0];
				document.getElementById("img5").src = imagenes[1];
			}
		}
		
	}
}
