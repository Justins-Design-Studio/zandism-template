//Create the elements that will be attached to the popup window for the fist image in the gallery. These variables are specific to each gallery item


var galleryElement = jQuery('<div id="popup"></div');
var galleryWrapper = jQuery('<div id="galleryWrapper"></div>');
var largeImage = jQuery('<div id="largeImage"></div>');
var thumbnails = jQuery('<div class="lightgallery"></div>');
var thumbnailGallery = jQuery('<a class="galImg" href="/wp-content/themes/zandism-template/images/Light Box View/An Audience Of Roses/1.png"><img src="/wp-content/themes/zandism-template/images/Light Box View/An Audience Of Roses/1.png" id="image1"></a><a class="galImg" href="/wp-content/themes/zandism-template/images/Light Box View/An Audience Of Roses/2.png"><img src="/wp-content/themes/zandism-template/images/Light Box View/An Audience Of Roses/2.png"></a><a class="galImg" href="/wp-content/themes/zandism-template/images/Light Box View/An Audience Of Roses/An Audience Of Roses.png"><img src="/wp-content/themes/zandism-template/images/Light Box View/An Audience Of Roses/An Audience Of Roses.png"></a>');
var $heading = jQuery('<h2 id="popupHeading">An Audience Of Roses</h2>');
var $price = jQuery('<p id="price">SOLD OUT</p>');
var $description = jQuery('<p id="description">39 x 15.75<br> Spray Paint on Canvas</p>');
var closeWindow = jQuery('<p id="closeWindow">CLOSE</p>');


//These will be global variables that will be used for all the images in the gallery

//var $quantity = jQuery('<input type="number" id="quantity">');
//var $quantityLabel = jQuery('<label for="quantity" id="label">Quantity</label>');
var $cartButton = jQuery('<button id="cartButton"><a href="#">VIEW IN STORE</a></button>');







//Style all the elements that were created, the styling of the other elements can be found in the mainstyle.css file in the root folder css/mainstyle.css

	
	
thumbnails.css({
	  width: '100%',
	  height: 'auto',
	  display: 'block'
	});


	

 




//image 1 click function.

jQuery('#img1').on('click', function() {
	
	

	 //This code block appends a;; the cratede elements to the pop up window
	 thumbnails.append(thumbnailGallery);
         galleryWrapper.append(largeImage);
	 galleryWrapper.append(thumbnails);
	 galleryElement.append(galleryWrapper);
	 galleryElement.append($heading);
	 galleryElement.append($price);
	 galleryElement.append($description);
	 galleryElement.append(closeWindow);
	 
	// galleryElement.append($quantityLabel);
	// galleryElement.append($quantity);

	 jQuery('body').append(galleryElement.fadeIn("slow"));
	 
	 //This code block creates an image and selects the src of the first image(given an id="image1") in the thumbnail preview.
	 //This happens after the elements have been created above.
     var startImage = document.createElement('img');
     var img1 = document.getElementById('image1');
     var img1Src = img1.getAttribute("src");
     startImage.setAttribute("src", img1Src);
     document.getElementById("largeImage").appendChild(startImage);
	 
     //This code block replaces the image src in the large view with the source of the thumbnail that is clicked on.
     jQuery('.galImg img').click(function() {
       var imgSrc = this.getAttribute("src");
       startImage.setAttribute("src", imgSrc);
       startImage.replaceWith(this);
 
     })
      
        jQuery(".lightgallery").lightGallery(); 
     
	});
	
	//This code closes the window when the closeWindow element is clicked.
    closeWindow.click(function () {
      galleryElement.fadeOut("slow");
      jQuery("#largeImage").detach(startImage);
    });

//image 2
//Create the elements that will be attached to the popup window for the fist image in the gallery. These variables are specific to each gallery item.


var galleryElement2 = jQuery('<div id="popup2"></div');
var galleryWrapper2 = jQuery('<div id="galleryWrapper2"></div>');
var largeImage2 = jQuery('<div id="largeImage2"></div>');
var thumbnails2 = jQuery('<div class="lightgallery"></div>');
var thumbnailGallery2 = jQuery('<a class="galImg" href="/wp-content/themes/zandism-template/images/Light Box View/Coming up/1.png"><img src="/wp-content/themes/zandism-template/images/Light Box View/Coming up/1.png" id="image2"></a><a class="galImg" href="/wp-content/themes/zandism-template/images/Light Box View/Coming up/2.png"><img   src="/wp-content/themes/zandism-template/images/Light Box View/Coming up/2.png"></a><a class="galImg" href="/wp-content/themes/zandism-template/images/Light Box View/Coming up/Coming-up.png"><img src="/wp-content/themes/zandism-template/images/Light Box View/Coming up/Coming-up.png"></a>');

var $heading2 = jQuery('<h2 id="popupHeading2">Coming Up</h2>');
var $price2 = jQuery('<p id="price2">SOLD OUT</p>');
var $description2 = jQuery('<p id="description2">39 x 15.75<br> Spray Paint on Canvas</p>');
var closeWindow2 = jQuery('<p id="closeWindow2">CLOSE</p>');



	
thumbnails2.css({
	  width: '100%',
	  height: 'auto',
	  display: 'block'
	});
	


	
	

jQuery('#img2').on('click', function() {
	
	

	 
	 thumbnails2.append(thumbnailGallery2);
         galleryWrapper2.append(largeImage2);
	 galleryWrapper2.append(thumbnails2);
	 galleryElement2.append(galleryWrapper2);
	 galleryElement2.append($heading2);
	 galleryElement2.append($price2);
	 galleryElement2.append($description2);
	 galleryElement2.append(closeWindow2);
	 
	 
	// galleryElement2.append($quantityLabel);
	// galleryElement2.append($quantity);

	 jQuery('body').append(galleryElement2.fadeIn("slow"));
	 	 
          var startImage2 = document.createElement('img');
          var img2 = document.getElementById('image2');
          var img2Src = img2.getAttribute("src");
          startImage2.setAttribute("src", img2Src);
          document.getElementById("largeImage2").appendChild(startImage2);
	 
	 jQuery('.galImg img').click(function() {
           var imgSrc = this.getAttribute("src");
           startImage2.setAttribute("src", imgSrc);
           startImage2.replaceWith(this);
 
})
        
        jQuery(".lightgallery").lightGallery(); 
       
	 
	});
	
	
closeWindow2.click(function () {
		   galleryElement2.fadeOut("slow");
		   jQuery("#largeImage2").detach(startImage2);
});


//image 3


//Create the elements that will be attached to the popup window for the fist image in the gallery. These variables are specific to each gallery item.


var galleryElement3 = jQuery('<div id="popup3"></div');
var galleryWrapper3 = jQuery('<div id="galleryWrapper3"></div>');
var largeImage3 = jQuery('<div id="largeImage3"></div>');
var thumbnails3 = jQuery('<div class="lightgallery"></div>');
var thumbnailGallery3 = jQuery('<a class="galImg" href="/wp-content/themes/zandism-template/images/Light Box View/Dancing Whirlpool/1.png"><img src="/wp-content/themes/zandism-template/images/Light Box View/Dancing Whirlpool/1.png" id="image3"></a><a class="galImg" href="/wp-content/themes/zandism-template/images/Light Box View/Dancing Whirlpool/2.png"><img src="/wp-content/themes/zandism-template/images/Light Box View/Dancing Whirlpool/2.png"></a><a class="galImg" href="/wp-content/themes/zandism-template/images/Light Box View/Dancing Whirlpool/Dancing Whirlpool.png"><img src="/wp-content/themes/zandism-template/images/Light Box View/Dancing Whirlpool/Dancing Whirlpool.png"></a>');

var $heading3 = jQuery('<h2 id="popupHeading3">Dancing Whirlpool</h2>');
var $price3 = jQuery('<p id="price3"></p>');
var $description3 = jQuery('<p id="description3">39 x 15.75<br> Spray Paint on Canvas</p>');
var closeWindow3 = jQuery('<p id="closeWindow3">CLOSE</p>');


	
	
thumbnails3.css({
	  width: '100%',
	  height: 'auto',
	  display: 'block'
	});


	
	

jQuery('#img3').on('click', function() {
	
	

	 
	 thumbnails3.append(thumbnailGallery3);
     galleryWrapper3.append(largeImage3);
	 galleryWrapper3.append(thumbnails3);
	 galleryElement3.append(galleryWrapper3);
	 galleryElement3.append($heading3);
	// galleryElement3.append($price3);
	 galleryElement3.append($description3);
	 galleryElement3.append(closeWindow3);
	 
	 
	// galleryElement3.append($quantityLabel);
	// galleryElement3.append($quantity);
	
	 jQuery('body').append(galleryElement3.fadeIn("slow"));
	 	 
     var startImage3 = document.createElement('img');
     var img3 = document.getElementById('image3');
     var img3Src = img3.getAttribute("src");
     startImage3.setAttribute("src", img3Src);
     document.getElementById("largeImage3").appendChild(startImage3);
	 
	 jQuery('.galImg img').click(function() {
     var imgSrc = this.getAttribute("src");
     startImage3.setAttribute("src", imgSrc);
     startImage3.replaceWith(this);
 
})
	 jQuery(".lightgallery").lightGallery();
	 
	});
	
	
closeWindow3.click(function () {
		   galleryElement3.fadeOut("slow");
		   jQuery("#largeImage3").detach(startImage3);
});

//image 4
//Create the elements that will be attached to the popup window for the fist image in the gallery. These variables are specific to each gallery item.


var galleryElement4 = jQuery('<div id="popup4"></div');
var galleryWrapper4 = jQuery('<div id="galleryWrapper4"></div>');
var largeImage4 = jQuery('<div id="largeImage4"></div>');
var thumbnails4 = jQuery('<div class="lightgallery"></div>');
var thumbnailGallery4 = jQuery('<a class="galImg" href="/wp-content/themes/zandism-template/images/Light Box View/Head In The Clouds/1.png"><img src="/wp-content/themes/zandism-template/images/Light Box View/Head In The Clouds/1.png" id="image4"></a><a class="galImg" href="/wp-content/themes/zandism-template/images/Light Box View/Head In The Clouds/2.png"><img src="/wp-content/themes/zandism-template/images/Light Box View/Head In The Clouds/2.png"></a><a class="galImg" href="/wp-content/themes/zandism-template/images/Light Box View/Head In The Clouds/Head In The Clouds.png"><img src="/wp-content/themes/zandism-template/images/Light Box View/Head In The Clouds/Head In The Clouds.png"></a>');

var $heading4 = jQuery('<h2 id="popupHeading4">Head In The Clouds</h2>');
var $price4 = jQuery('<p id="price4">SOLD OUT</p>');
var $description4 = jQuery('<p id="description4">39 x 15.75<br> Spray Paint on Canvas</p>');
var closeWindow4 = jQuery('<p id="closeWindow4">CLOSE</p>');


	
	
	
thumbnails4.css({
	  width: '100%',
	  height: 'auto',
	  display: 'block'
	});
	


	
	

jQuery('#img4').on('click', function() {
	
	

	 
	 thumbnails4.append(thumbnailGallery4);
     galleryWrapper4.append(largeImage4);
	 galleryWrapper4.append(thumbnails4);
	 galleryElement4.append(galleryWrapper4);
	 galleryElement4.append($heading4);
	 //galleryElement4.append($price4);
	  galleryElement4.append($description4);
	 galleryElement4.append(closeWindow4);
	
	 
	// galleryElement4.append($quantityLabel);
	// galleryElement4.append($quantity);

	 jQuery('body').append(galleryElement4.fadeIn("slow"));
	 	 
     var startImage4 = document.createElement('img');
     var img4 = document.getElementById('image4');
     var img4Src = img4.getAttribute("src");
     startImage4.setAttribute("src", img4Src);
     document.getElementById("largeImage4").appendChild(startImage4);
	 
	 jQuery('.galImg img').click(function() {
     var imgSrc = this.getAttribute("src");
     startImage4.setAttribute("src", imgSrc);
     startImage4.replaceWith(this);
 
})
     jQuery(".lightgallery").lightGallery();
	 
	});
	
	
closeWindow4.click(function () {
		   galleryElement4.fadeOut("slow");
		   jQuery("#largeImage4").detach(startImage4);
});

//image 5
//Create the elements that will be attached to the popup window for the fist image in the gallery. These variables are specific to each gallery item.


var galleryElement5 = jQuery('<div id="popup5"></div');
var galleryWrapper5 = jQuery('<div id="galleryWrapper5"></div>');
var largeImage5 = jQuery('<div id="largeImage5"></div>');
var thumbnails5 = jQuery('<div class="lightgallery"></div>');

//unique image gallery for this item
var thumbnailGallery5 = jQuery('<a class="galImg" href="/wp-content/themes/zandism-template/images/Light Box View/Iron Lion/1.png"><img src="/wp-content/themes/zandism-template/images/Light Box View/Iron Lion/1.png" id="image5"></a><a class="galImg" href="/wp-content/themes/zandism-template/images/Light Box View/Iron Lion/2.png"><img src="/wp-content/themes/zandism-template/images/Light Box View/Iron Lion/2.png"></a><a class="galImg" href="/wp-content/themes/zandism-template/images/Light Box View/Iron Lion/Iron Lion.png"><img src="/wp-content/themes/zandism-template/images/Light Box View/Iron Lion/Iron Lion.png"></a>');

var $heading5 = jQuery('<h2 id="popupHeading5">Iron Lion</h2>');
var $price5 = jQuery('<p id="price5">SOLD OUT</p>');
var $description5 = jQuery('<p id="description5">39 x 15.75<br> Spray Paint on Canvas</p>');
var closeWindow5 = jQuery('<p id="closeWindow5">CLOSE</p>');





	
thumbnails5.css({
	  width: '100%',
	  height: 'auto',
	  display: 'block'
	});
	


	
	

jQuery('#img5').on('click', function() {
	
	

	 
	 thumbnails5.append(thumbnailGallery5);
         galleryWrapper5.append(largeImage5);
	 galleryWrapper5.append(thumbnails5);
	 galleryElement5.append(galleryWrapper5);
	 galleryElement5.append($heading5);
	 //galleryElement5.append($price5);
	 galleryElement5.append(closeWindow5);
	 galleryElement5.append($description5);
	 
	// galleryElement5.append($quantityLabel);
	// galleryElement5.append($quantity);

	 jQuery('body').append(galleryElement5.fadeIn("slow"));
	 	 
        var startImage5 = document.createElement('img');
        var img5 = document.getElementById('image5');
        var img5Src = img5.getAttribute("src");
        startImage5.setAttribute("src", img5Src);
        document.getElementById("largeImage5").appendChild(startImage5);
	 
	 jQuery('.galImg img').click(function() {
            var imgSrc = this.getAttribute("src");
            startImage5.setAttribute("src", imgSrc);
            startImage5.replaceWith(this);
 
         })
	 
	 jQuery(".lightgallery").lightGallery();

	});
	
	
closeWindow5.click(function () {
		   galleryElement5.fadeOut("slow");
		   jQuery("#largeImage5").detach(startImage5);
});

//image 6
//Create the elements that will be attached to the popup window for the fist image in the gallery. These variables are specific to each gallery item.


var galleryElement6 = jQuery('<div id="popup6"></div');
var galleryWrapper6 = jQuery('<div id="galleryWrapper6"></div>');
var largeImage6 = jQuery('<div id="largeImage6"></div>');
var thumbnails6 = jQuery('<div class="lightgallery"></div>');
var thumbnailGallery6 = jQuery('<a class="galImg" href="/wp-content/themes/zandism-template/images/Light Box View/Landscape/1.png"><img src="/wp-content/themes/zandism-template/images/Light Box View/Landscape/1.png" id="image6"></a><a class="galImg" href="/wp-content/themes/zandism-template/images/Light Box View/Landscape/2.png"><img src="/wp-content/themes/zandism-template/images/Light Box View/Landscape/2.png"></a><a class="galImg" href="/wp-content/themes/zandism-template/images/Light Box View/Landscape/Landscape.png"><img src="/wp-content/themes/zandism-template/images/Light Box View/Landscape/Landscape.png"></a>');

var $heading6 = jQuery('<h2 id="popupHeading6">Landscape</h2>');
var $price6 = jQuery('<p id="price6">SOLD OUT</p>');
var $description6 = jQuery('<p id="description6">50" x 40"<br> Spray Paint on Canvas</p>');
var closeWindow6 = jQuery('<p id="closeWindow6">CLOSE</p>');



	
	
	
thumbnails6.css({
	  width: '100%',
	  height: 'auto',
	  display: 'block'
	});
	


	
	

jQuery('#img6').on('click', function() {
	
	

	 
	 thumbnails6.append(thumbnailGallery6);
         galleryWrapper6.append(largeImage6);
	 galleryWrapper6.append(thumbnails6);
	 galleryElement6.append(galleryWrapper6);
	 galleryElement6.append($heading6);
	 //galleryElement6.append($price6);
	 galleryElement6.append($description6);
	 galleryElement6.append(closeWindow6);
	 
	 
	// galleryElement6.append($quantityLabel);
	// galleryElement6.append($quantity);
	 //galleryElement6.append($cartButton);
	 jQuery('body').append(galleryElement6.fadeIn("slow"));
	 	 
     var startImage6 = document.createElement('img');
     var img6 = document.getElementById('image6');
     var img6Src = img6.getAttribute("src");
     startImage6.setAttribute("src", img6Src);
     document.getElementById("largeImage6").appendChild(startImage6);
	 
	 jQuery('.galImg img').click(function() {
           var imgSrc = this.getAttribute("src");
           startImage6.setAttribute("src", imgSrc);
           startImage6.replaceWith(this);
 
         })
	 
	jQuery(".lightgallery").lightGallery();

	});
	
	
closeWindow6.click(function () {
		   galleryElement6.fadeOut("slow");
		   jQuery("#largeImage6").detach(startImage6);
});

//image 7
//Create the elements that will be attached to the popup window for the fist image in the gallery. These variables are specific to each gallery item.


var galleryElement7 = jQuery('<div id="popup7"></div');
var galleryWrapper7 = jQuery('<div id="galleryWrapper7"></div>');
var largeImage7 = jQuery('<div id="largeImage7"></div>');
var thumbnails7 = jQuery('<div class="lightgallery"></div>');
var thumbnailGallery7 = jQuery('<a class="galImg" href="/wp-content/themes/zandism-template/images/Light Box View/Leo/1.png"><img src="/wp-content/themes/zandism-template/images/Light Box View/Leo/1.png" id="image7"></a><a class="galImg" href="/wp-content/themes/zandism-template/images/Light Box View/Leo/2.png"><img src="/wp-content/themes/zandism-template/images/Light Box View/Leo/2.png"></a><a class="galImg" href="/wp-content/themes/zandism-template/images/Light Box View/Leo/Leo.png"><img src="/wp-content/themes/zandism-template/images/Light Box View/Leo/Leo.png"></a>');

var $heading7 = jQuery('<h2 id="popupHeading7">Leo</h2>');
var $price7 = jQuery('<p id="price7">SOLD OUT</p>');
var $description7 = jQuery('<p id="description7">Original artwork, Spray Paint on Canvas<br>50" x 40"<br>For limited edition giclee prints, please click on the <a style="color:#399944;" href="http://zandism.com/my-portfolio/store-2/">shop</a> link. </p>');
var closeWindow7 = jQuery('<p id="closeWindow7">CLOSE</p>');




	
thumbnails7.css({
	  width: '100%',
	  height: 'auto',
	  display: 'block'
	});
	


	
	

jQuery('#img7').on('click', function() {
	
	

	 
	 thumbnails7.append(thumbnailGallery7);
         galleryWrapper7.append(largeImage7);
	 galleryWrapper7.append(thumbnails7);
	 galleryElement7.append(galleryWrapper7);
	 galleryElement7.append($heading7);
	 //galleryElement7.append($price7);
	 galleryElement7.append(closeWindow7);
	 galleryElement7.append($description7);
	 
	// galleryElement7.append($quantityLabel);
	// galleryElement7.append($quantity);
	 //galleryElement7.append($cartButton);
	 jQuery('body').append(galleryElement7.fadeIn("slow"));
	 	 
     var startImage7 = document.createElement('img');
     var img7 = document.getElementById('image7');
     var img7Src = img7.getAttribute("src");
     startImage7.setAttribute("src", img7Src);
     document.getElementById("largeImage7").appendChild(startImage7);
	 
	 jQuery('.galImg img').click(function() {
           var imgSrc = this.getAttribute("src");
           startImage7.setAttribute("src", imgSrc);
           startImage7.replaceWith(this);
 
         })
	 jQuery(".lightgallery").lightGallery();
	 
	});
	
	
closeWindow7.click(function () {
		   galleryElement7.fadeOut("slow");
		   jQuery("#largeImage7").detach(startImage7);
});


//image 8
//Create the elements that will be attached to the popup window for the fist image in the gallery. These variables are specific to each gallery item.


var galleryElement8 = jQuery('<div id="popup8"></div');
var galleryWrapper8 = jQuery('<div id="galleryWrapper8"></div>');
var largeImage8 = jQuery('<div id="largeImage8"></div>');
var thumbnails8 = jQuery('<div class="lightgallery"></div>');
var thumbnailGallery8 = jQuery('<a class="galImg" href="/wp-content/themes/zandism-template/images/Light Box View/Pride/1.png"><img src="/wp-content/themes/zandism-template/images/Light Box View/Pride/1.png" id="image8"></a><a class="galImg" href="/wp-content/themes/zandism-template/images/Light Box View/Pride/2.png"><img src="/wp-content/themes/zandism-template/images/Light Box View/Pride/2.png"></a><a class="galImg" href="/wp-content/themes/zandism-template/images/Light Box View/Pride/Pride.png"><img src="/wp-content/themes/zandism-template/images/Light Box View/Pride/Pride.png"></a>');

var $heading8 = jQuery('<h2 id="popupHeading8">Leo</h2>');
var $price8 = jQuery('<p id="price8">SOLD OUT</p>');
var $description8 = jQuery('<p id="description8">50" x 40" <br>Spray Paint on Canvas</p>');
var closeWindow8 = jQuery('<p id="closeWindow8">CLOSE</p>');




	
thumbnails8.css({
	  width: '100%',
	  height: 'auto',
	  display: 'block'
	});
	


	
	

jQuery('#img8').on('click', function() {
	
	

	 
	 thumbnails8.append(thumbnailGallery8);
         galleryWrapper8.append(largeImage8);
	 galleryWrapper8.append(thumbnails8);
	 galleryElement8.append(galleryWrapper8);
	 galleryElement8.append($heading8);
	 //galleryElement8.append($price8);
	 galleryElement8.append(closeWindow8);
	 galleryElement8.append($description8);
	 
	// galleryElement8.append($quantityLabel);
	// galleryElement8.append($quantity);
	 //galleryElement8.append($cartButton);
	 jQuery('body').append(galleryElement8.fadeIn("slow"));
	 	 
     var startImage8 = document.createElement('img');
     var img8 = document.getElementById('image8');
     var img8Src = img8.getAttribute("src");
     startImage8.setAttribute("src", img8Src);
     document.getElementById("largeImage8").appendChild(startImage8);
	 
	 jQuery('.galImg img').click(function() {
           var imgSrc = this.getAttribute("src");
           startImage8.setAttribute("src", imgSrc);
           startImage8.replaceWith(this);
 
         })
	 jQuery(".lightgallery").lightGallery();
	 
	});
	
	
closeWindow8.click(function () {
		   galleryElement8.fadeOut("slow");
		   jQuery("#largeImage8").detach(startImage8);
});

//image 9
//Create the elements that will be attached to the popup window for the fist image in the gallery. These variables are specific to each gallery item.


var galleryElement9 = jQuery('<div id="popup9"></div');
var galleryWrapper9 = jQuery('<div id="galleryWrapper9"></div>');
var largeImage9 = jQuery('<div id="largeImage9"></div>');
var thumbnails9 = jQuery('<div class="lightgallery"></div>');
var thumbnailGallery9 = jQuery('<a class="galImg" href="/wp-content/themes/zandism-template/images/Light Box View/Raw/1.png"><img src="/wp-content/themes/zandism-template/images/Light Box View/Raw/1.png" id="image9"></a><a class="galImg" href="/wp-content/themes/zandism-template/images/Light Box View/Raw/2.png"><img src="/wp-content/themes/zandism-template/images/Light Box View/Raw/2.png"></a><a class="galImg" href="/wp-content/themes/zandism-template/images/Light Box View/Raw/Raw.png"><img src="/wp-content/themes/zandism-template/images/Light Box View/Raw/Raw.png"></a>');

var $heading9 = jQuery('<h2 id="popupHeading9">Raw</h2>');
var $price9 = jQuery('<p id="price9">SOLD OUT</p>');
var $description9 = jQuery('<p id="description9">50" x 40" <br>Spray Paint on Canvas</p>');
var closeWindow9 = jQuery('<p id="closeWindow9">CLOSE</p>');




	
thumbnails9.css({
	  width: '100%',
	  height: 'auto',
	  display: 'block'
	});
	


	
	

jQuery('#img9').on('click', function() {
	
	

	 
	 thumbnails9.append(thumbnailGallery9);
         galleryWrapper9.append(largeImage9);
	 galleryWrapper9.append(thumbnails9);
	 galleryElement9.append(galleryWrapper9);
	 galleryElement9.append($heading9);
	 //galleryElement9.append($price9);
	 galleryElement9.append(closeWindow9);
	 galleryElement9.append($description9);
	 
	// galleryElement9.append($quantityLabel);
	// galleryElement9.append($quantity);
	 //galleryElement9.append($cartButton);
	 jQuery('body').append(galleryElement9.fadeIn("slow"));
	 	 
     var startImage9 = document.createElement('img');
     var img9 = document.getElementById('image9');
     var img9Src = img9.getAttribute("src");
     startImage9.setAttribute("src", img9Src);
     document.getElementById("largeImage9").appendChild(startImage9);
	 
	 jQuery('.galImg img').click(function() {
          var imgSrc = this.getAttribute("src");
          startImage9.setAttribute("src", imgSrc);
          startImage9.replaceWith(this);
 
        })
	 
	 jQuery(".lightgallery").lightGallery();
	});
	
	
closeWindow9.click(function () {
		   galleryElement9.fadeOut("slow");
		   jQuery("#largeImage9").detach(startImage9);
});


//image 10
//Create the elements that will be attached to the popup window for the fist image in the gallery. These variables are specific to each gallery item.


var galleryElement10 = jQuery('<div id="popup10"></div');
var galleryWrapper10 = jQuery('<div id="galleryWrapper10"></div>');
var largeImage10 = jQuery('<div id="largeImage10"></div>');
var thumbnails10 = jQuery('<div class="lightgallery"></div>');
var thumbnailGallery10 = jQuery('<a class="galImg" href="/wp-content/themes/zandism-template/images/Light Box View/The Mentalist/1.png"><img src="/wp-content/themes/zandism-template/images/Light Box View/The Mentalist/1.png" id="image10"></a><a class="galImg" href="/wp-content/themes/zandism-template/images/Light Box View/The Mentalist/2.png"><img src="/wp-content/themes/zandism-template/images/Light Box View/The Mentalist/2.png"></a><a class="galImg" href="/wp-content/themes/zandism-template/images/Light Box View/The Mentalist/The Mentalist.png"><img src="/wp-content/themes/zandism-template/images/Light Box View/The Mentalist/The Mentalist.png"></a>');

var $heading10 = jQuery('<h2 id="popupHeading10">The Mentalist</h2>');
var $price10 = jQuery('<p id="price10">SOLD OUT</p>');
var $description10 = jQuery('<p id="description10">50" x 40" <br>Spray Paint on Canvas</p>');
var closeWindow10 = jQuery('<p id="closeWindow10">CLOSE</p>');




	
thumbnails10.css({
	  width: '100%',
	  height: 'auto',
	  display: 'block'
	});
	


	
	

jQuery('#img10').on('click', function() {
	
	

	 
	 thumbnails10.append(thumbnailGallery10);
         galleryWrapper10.append(largeImage10);
	 galleryWrapper10.append(thumbnails10);
	 galleryElement10.append(galleryWrapper10);
	 galleryElement10.append($heading10);
	 //galleryElement10.append($price10);
	 galleryElement10.append(closeWindow10);
	 galleryElement10.append($description10);
	 
	// galleryElement10.append($quantityLabel);
	// galleryElement10.append($quantity);
	 //galleryElement10.append($cartButton);
	 jQuery('body').append(galleryElement10.fadeIn("slow"));
	 	 
     var startImage10 = document.createElement('img');
     var img10 = document.getElementById('image10');
     var img10Src = img10.getAttribute("src");
     startImage10.setAttribute("src", img10Src);
     document.getElementById("largeImage10").appendChild(startImage10);
	 
	 jQuery('.galImg img').click(function() {
     var imgSrc = this.getAttribute("src");
     startImage10.setAttribute("src", imgSrc);
     startImage10.replaceWith(this);
 
})
	jQuery(".lightgallery").lightGallery(); 
	 
	});
	
	
closeWindow10.click(function () {
		   galleryElement10.fadeOut("slow");
		   jQuery("#largeImage10").detach(startImage10);
});




//image 11
//Create the elements that will be attached to the popup window for the fist image in the gallery. These variables are specific to each gallery item.


var galleryElement11 = jQuery('<div id="popup11"></div');
var galleryWrapper11 = jQuery('<div id="galleryWrapper11"></div>');
var largeImage11 = jQuery('<div id="largeImage11"></div>');
var thumbnails11 = jQuery('<div class="lightgallery"></div>');
var thumbnailGallery11 = jQuery('<a class="galImg" href="/wp-content/themes/zandism-template/images/Light Box View/Tigers Eye/1.png"><img src="/wp-content/themes/zandism-template/images/Light Box View/Tigers Eye/1.png" id="image11"></a><a class="galImg" href="/wp-content/themes/zandism-template/images/Light Box View/Tigers Eye/2.png"><img src="/wp-content/themes/zandism-template/images/Light Box View/Tigers Eye/2.png"></a><a class="galImg" href="/wp-content/themes/zandism-template/images/Light Box View/Tigers Eye/Tigers Eye.png"><img src="/wp-content/themes/zandism-template/images/Light Box View/Tigers Eye/Tigers Eye.png"></a>');

var $heading11 = jQuery('<h2 id="popupHeading11">Tigers Eye</h2>');
var $price11 = jQuery('<p id="price11">SOLD OUT</p>');
var $description11 = jQuery('<p id="description11">50" x 40" <br>Spray Paint on Canvas</p>');
var closeWindow11 = jQuery('<p id="closeWindow11">CLOSE</p>');




	
thumbnails11.css({
	  width: '100%',
	  height: 'auto',
	  display: 'block'
	});
	


	
	

jQuery('#img11').on('click', function() {
	
	

	 
	 thumbnails11.append(thumbnailGallery11);
         galleryWrapper11.append(largeImage11);
	 galleryWrapper11.append(thumbnails11);
	 galleryElement11.append(galleryWrapper11);
	 galleryElement11.append($heading11);
	 //galleryElement11.append($price11);
	 galleryElement11.append(closeWindow11);
	 galleryElement11.append($description11);
	 
	// galleryElement11.append($quantityLabel);
	// galleryElement11.append($quantity);
	 //galleryElement11.append($cartButton);
	 jQuery('body').append(galleryElement11.fadeIn("slow"));
	 	 
     var startImage11 = document.createElement('img');
     var img11 = document.getElementById('image11');
     var img11Src = img11.getAttribute("src");
     startImage11.setAttribute("src", img11Src);
     document.getElementById("largeImage11").appendChild(startImage11);
	 
	 jQuery('.galImg img').click(function() {
     var imgSrc = this.getAttribute("src");
     startImage11.setAttribute("src", imgSrc);
     startImage11.replaceWith(this);
 
})
	 
	 jQuery(".lightgallery").lightGallery();
	});
	
	
closeWindow11.click(function () {
		   galleryElement11.fadeOut("slow");
		   jQuery("#largeImage11").detach(startImage11);

});



//image 12
//Create the elements that will be attached to the popup window for the fist image in the gallery. These variables are specific to each gallery item.


var galleryElement12 = jQuery('<div id="popup12"></div');
var galleryWrapper12 = jQuery('<div id="galleryWrapper12"></div>');
var largeImage12 = jQuery('<div id="largeImage12"></div>');
var thumbnails12 = jQuery('<div class="lightgallery"></div>');
var thumbnailGallery12 = jQuery('<a class="galImg" href="/wp-content/themes/zandism-template/images/Light Box View/Totem/1.png"><img src="/wp-content/themes/zandism-template/images/Light Box View/Totem/1.png" id="image12"></a><a class="galImg" href="/wp-content/themes/zandism-template/images/Light Box View/Totem/2.png"><img src="/wp-content/themes/zandism-template/images/Light Box View/Totem/2.png"></a><a class="galImg" href="/wp-content/themes/zandism-template/images/Light Box View/Totem/Totem.png"><img src="/wp-content/themes/zandism-template/images/Light Box View/Totem/Totem.png"></a>');

var $heading12 = jQuery('<h2 id="popupHeading12">Totem</h2>');
var $price12 = jQuery('<p id="price12">SOLD OUT</p>');
var $description12 = jQuery('<p id="description12">50" x 40" <br>Spray Paint on Canvas</p>');
var closeWindow12 = jQuery('<p id="closeWindow12">CLOSE</p>');




	
thumbnails12.css({
	  width: '100%',
	  height: 'auto',
	  display: 'block'
	});
	


	
	

jQuery('#img12').on('click', function() {
	
	

	 
	 thumbnails12.append(thumbnailGallery12);
         galleryWrapper12.append(largeImage12);
	 galleryWrapper12.append(thumbnails12);
	 galleryElement12.append(galleryWrapper12);
	 galleryElement12.append($heading12);
	 //galleryElement12.append($price12);
	 galleryElement12.append(closeWindow12);
	 galleryElement12.append($description12);
	 
	// galleryElement12.append($quantityLabel);
	// galleryElement12.append($quantity);
	 //galleryElement12.append($cartButton);
	 jQuery('body').append(galleryElement12.fadeIn("slow"));
	 	 
     var startImage12 = document.createElement('img');
     var img12 = document.getElementById('image12');
     var img12Src = img12.getAttribute("src");
     startImage12.setAttribute("src", img12Src);
     document.getElementById("largeImage12").appendChild(startImage12);
	 
	 jQuery('.galImg img').click(function() {
     var imgSrc = this.getAttribute("src");
     startImage12.setAttribute("src", imgSrc);
     startImage12.replaceWith(this);
 
})
	 
	 jQuery(".lightgallery").lightGallery();
	});
	
	
closeWindow12.click(function () {
		   galleryElement12.fadeOut("slow");
		   jQuery("#largeImage12").detach(startImage12);

});




//image 13
//Create the elements that will be attached to the popup window for the fist image in the gallery. These variables are specific to each gallery item.


var galleryElement13 = jQuery('<div id="popup13"></div');
var galleryWrapper13 = jQuery('<div id="galleryWrapper13"></div>');
var largeImage13 = jQuery('<div id="largeImage13"></div>');
var thumbnails13 = jQuery('<div class="lightgallery"></div>');
var thumbnailGallery13 = jQuery('<a class="galImg" href="/wp-content/themes/zandism-template/images/Light Box View/Twin tower _Dystopia/1.png"><img src="/wp-content/themes/zandism-template/images/Light Box View/Twin tower _Dystopia/1.png" id="image13"></a><a class="galImg" href="/wp-content/themes/zandism-template/images/Light Box View/Twin tower _Dystopia/2.png"><img src="/wp-content/themes/zandism-template/images/Light Box View/Twin tower _Dystopia/2.png"></a><a class="galImg" href="/wp-content/themes/zandism-template/images/Light Box View/Twin tower _Dystopia/Twin tower _Dystopia.png"><img src="/wp-content/themes/zandism-template/images/Light Box View/Twin tower _Dystopia/Twin tower _Dystopia.png"></a>');

var $heading13 = jQuery('<h2 id="popupHeading13">Twin tower-Dystopia</h2>');
var $price13 = jQuery('<p id="price13">SOLD OUT</p>');
var $description13 = jQuery('<p id="description13">50" x 40" <br>Spray Paint on Canvas</p>');
var closeWindow13 = jQuery('<p id="closeWindow13">CLOSE</p>');




	
thumbnails13.css({
	  width: '100%',
	  height: 'auto',
	  display: 'block'
	});
	


	
	

jQuery('#img13').on('click', function() {
	
	

	 
	 thumbnails13.append(thumbnailGallery13);
         galleryWrapper13.append(largeImage13);
	 galleryWrapper13.append(thumbnails13);
	 galleryElement13.append(galleryWrapper13);
	 galleryElement13.append($heading13);
	 //galleryElement13.append($price13);
	 galleryElement13.append(closeWindow13);
	 galleryElement13.append($description13);
	 
	// galleryElement13.append($quantityLabel);
	// galleryElement13.append($quantity);
	 //galleryElement13.append($cartButton);
	 jQuery('body').append(galleryElement13.fadeIn("slow"));
	 	 
     var startImage13 = document.createElement('img');
     var img13 = document.getElementById('image13');
     var img13Src = img13.getAttribute("src");
     startImage13.setAttribute("src", img13Src);
     document.getElementById("largeImage13").appendChild(startImage13);
	 
	 jQuery('.galImg img').click(function() {
     var imgSrc = this.getAttribute("src");
     startImage13.setAttribute("src", imgSrc);
     startImage13.replaceWith(this);
 
})
	  jQuery(".lightgallery").lightGallery();
	 
	});
	
	
closeWindow13.click(function () {
		   galleryElement13.fadeOut("slow");
		   jQuery("#largeImage13").detach(startImage13);

});



//image 14
//Create the elements that will be attached to the popup window for the fist image in the gallery. These variables are specific to each gallery item.


var galleryElement14 = jQuery('<div id="popup14"></div');
var galleryWrapper14 = jQuery('<div id="galleryWrapper14"></div>');
var largeImage14 = jQuery('<div id="largeImage14"></div>');
var thumbnails14 = jQuery('<div class="lightgallery"></div>');
var thumbnailGallery14 = jQuery('<a class="galImg" href="/wp-content/themes/zandism-template/images/Light Box View/Twin tower_Utopia/1.png"><img src="/wp-content/themes/zandism-template/images/Light Box View/Twin tower_Utopia/1.png" id="image14"></a><a class="galImg" href="/wp-content/themes/zandism-template/images/Light Box View/Twin tower_Utopia/2.png"><img src="/wp-content/themes/zandism-template/images/Light Box View/Twin tower_Utopia/2.png"></a><a class="galImg" href="/wp-content/themes/zandism-template/images/Light Box View/Twin tower_Utopia/Twin tower_Utopia.png"><img src="/wp-content/themes/zandism-template/images/Light Box View/Twin tower_Utopia/Twin tower_Utopia.png"></a>');

var $heading14 = jQuery('<h2 id="popupHeading14">Twin tower-Utopia</h2>');
var $price14 = jQuery('<p id="price14">SOLD OUT</p>');
var $description14 = jQuery('<p id="description14">50" x 40" <br>Spray Paint on Canvas</p>');
var closeWindow14 = jQuery('<p id="closeWindow14">CLOSE</p>');




	
thumbnails14.css({
	  width: '100%',
	  height: 'auto',
	  display: 'block'
	});
	


	
	

jQuery('#img14').on('click', function() {
	
	

	 
	 thumbnails14.append(thumbnailGallery14);
         galleryWrapper14.append(largeImage14);
	 galleryWrapper14.append(thumbnails14);
	 galleryElement14.append(galleryWrapper14);
	 galleryElement14.append($heading14);
	 //galleryElement14.append($price14);
	 galleryElement14.append(closeWindow14);
	 galleryElement14.append($description14);
	 
	// galleryElement14.append($quantityLabel);
	// galleryElement14.append($quantity);
	 //galleryElement14.append($cartButton);
	 jQuery('body').append(galleryElement14.fadeIn("slow"));
	 	 
     var startImage14 = document.createElement('img');
     var img14 = document.getElementById('image14');
     var img14Src = img14.getAttribute("src");
     startImage14.setAttribute("src", img14Src);
     document.getElementById("largeImage14").appendChild(startImage14);
	 
	 jQuery('.galImg img').click(function() {
     var imgSrc = this.getAttribute("src");
     startImage14.setAttribute("src", imgSrc);
     startImage14.replaceWith(this);
 
})
	 
	 jQuery(".lightgallery").lightGallery();
	});
	
	
closeWindow14.click(function () {
		   galleryElement14.fadeOut("slow");
		   jQuery("#largeImage14").detach(startImage14);

});




