function downloadModal(event, value1, value2) {
	console.log("event", event,value1,value2);
	filename = value1;
	title = value2;
	console.log("filename", filename, title);
}

 // download form


 jQuery(function ($) {
    var roles = ['',''];
    //used to determine which is the next roles to be displayed
    var counter = 0;
    var $role = $('#role')
    //repeat the passed function at the specified interval - it is in milliseconds
    setInterval(function () {
        //display the role and increment the counter to point to next role
        $role.text(roles[counter]);
        //if it is the last role in the array point back to the first item
       
    }, 5000)
})



//$(function() {

	//setTimeout(function() { $("#hideDiv").fadeOut(1500); }, 5000)
//	setTimeout(function() { $("#hideDiv1").fadeOut(1500); }, 0.1)

//	setTimeout(function() { $("#hideDiv1").fadeIn(1500); }, 5000)
	
//	})



//	$(window).scroll(function () {
//		$('.animation-test').each(function () {
//			var imagePos = $(this).offset().top;
//			var imageHeight = $(this).height();
	//		var topOfWindow = $(window).scrollTop();
	//
	//		if (imagePos < topOfWindow + imageHeight && imagePos + imageHeight > topOfWindow) {
	//			$(this).addClass("slideRight");
	//		} else {
	//			$(this).removeClass("slideRight");
	//		}
	//	});
	//});

	//	$(window).scroll(function() {
	//	$('#hideDiv').html($(this).scrollTop() > 100 ? 'ISo':'No');
	//}).scroll(); //

	$(window).scroll(function(){
		if ($(this).scrollTop() > 700) {
		   $('#dynamic').addClass('newClass');
		   $('#dynamic1').addClass('newClass1');
		} else {
		   $('#dynamic').removeClass('newClass');
		   $('#dynamic1').removeClass('newClass1');
		}
	});

	$(window).scroll(function(){
		if ($(this).scrollTop() > 1300) {
		   $('#dynamic2').addClass('newClass2');
		   $('#dynamic3').addClass('newClass3');
		} else {
		   $('#dynamic2').removeClass('newClass2');
		   $('#dynamic3').removeClass('newClass3');
		}
	});

	$(window).scroll(function(){
		if ($(this).scrollTop() > 2300) {
		   $('#dynamic4').addClass('newClass4');
		   $('#dynamic5').addClass('newClass5');
		} else {
		   $('#dynamic4').removeClass('newClass4');
		   $('#dynamic5').removeClass('newClass5');
		}
	});

	$(window).scroll(function(){
		if ($(this).scrollTop() > 2500) {
		   $('#dynamic6').addClass('newClass6');
		   $('#dynamic7').addClass('newClass7');
		} else {
		   $('#dynamic6').removeClass('newClass6');
		   $('#dynamic7').removeClass('newClass7');
		}
	});

	$(window).scroll(function(){
		console.log("scroll");
		if ($(this).scrollTop() > 10) {
		   $('#header').addClass('stickey');
		} else {
		   $('#header').removeClass('stickey');
		}
	});

//	$("#dynamic").show().delay(5000).fadeOut();


//Contact Form


(function($) {
	if($('#sales-form').length){
		$('#sales-form').validate({
			rules: {
				name: {
					required: true
				},
				email: {
					required: true,
					email: true,
					emailExt: true
				},
                phone: {
                    required: true,
                },
				about:{
					required: true,
				}
			}
		});
	}

	function validateSalesForm(){
		let array=[];
		var name = $('#name').val();
		var email = $('#email').val();
        var phone = $('#phone').val();
		var about = $('#about').val();
		var indexat = email.indexOf("@"); //Index of "@" in the email field
		var indexdot = email.indexOf("."); 

	
		  if(name == '')
		  {
			$('#name').focus(); 
			array.push("Name required")
		  }
		  else if(indexat < 1 || (indexdot-indexat) < 2)
		  {
			$('#email').focus();
			array.push("Email required")
	
		  }
          else if(phone == '')
          {
            $('#phone').focus();
            array.push("Phone required")

          }
		  else if(about >1)		  {
			$('#about').focus();
			array.push("about required")
		  }
		 
		  return array;	 
	} 
	$('#submitsales-form').click(function(event) {
		//var name;
		event.preventDefault();
		let error = validateSalesForm()
		console.log("123", error);
		
		if(error.length == 0){
			var formData = {
				name:$("#name").val(),
				email:$("#email").val(),
                phone:$("#phone").val(),
                about:$("#about").val(),

			} 
			
			$.ajax({
				type:'post',
				url:'https://webtriggersapi.herokuapp.com/api/tutorials',
				data:JSON.stringify( formData ),
				catch: false,
				contentType: "application/json",
				success: function(){
					console.log("success", formData);
				
					$('#contactForm')[0].reset();
					$('#notice').removeClass('hide-notice');
					$('#notice').addClass('show-notice');
					$('#subloader').removeClass('displayloader');

					$('#subloader').addClass('hideloader');

					$('#subloader').fadeOut();
					setTimeout(() => {
						$('#notice').removeClass('show-notice');
						$('#notice').addClass('hide-notice');
			
					}, 4000)
					
					//$("#myElem").show();
					//	setTimeout(function() { $("#myElem").hide(); }, 5000);
				 
				},
				error: function(jqXHR, textStatus, errorThrown) {
					console.log('error', jqXHR, textStatus, errorThrown);
				},
			});
		}
		
	
		console.log("111", formData)
		
		//alert("welcome");
	});
	

}
)(jQuery);