  
	 
			
			 // Cont_phone 
			  $("#Cont_Phone").on("blur", function(){
        var mobNum = $(this).val();
        var filter = /^\d*(?:\.\d{1,2})?$/;

          if (filter.test(mobNum)) {
            if(mobNum.length==10){
			
                  // alert("valid");
				
              $("#mobile-valid").removeClass("hidden");
              $("#folio-invalid").addClass("hidden");
             } else {
                alert('Please enter 10  digit mobile number');
               $("#folio-invalid").removeClass("hidden");
               $("#mobile-valid").addClass("hidden");
                return false;
              }
            }
            else {
              alert('Not a valid phone number');
			   $("#idphoneinvalid").removeClass("hidden");
              $("#folio-invalid").removeClass("hidden");
              $("#mobile-valid").addClass("hidden");
              return false;
           }
    
			});
  			 //End Cont_phone 
			
			
			 //Cont_phone 
			  $("#Cont_Phone2").on("blur", function(){
        var mobNum = $(this).val();
        var filter = /^\d*(?:\.\d{1,2})?$/;

          if (filter.test(mobNum)) {
            if(mobNum.length==10){
                  alert("valid");
              $("#mobile-valid").removeClass("hidden");
              $("#folio-invalid").addClass("hidden");
             } else {
                alert('Please put 10  digit mobile number');
               $("#folio-invalid").removeClass("hidden");
               $("#mobile-valid").addClass("hidden");
                return false;
              }
            }
            else {
              alert('Not a valid phone number');
			   $("#idphoneinvalid").removeClass("hidden");
              $("#folio-invalid").removeClass("hidden");
              $("#mobile-valid").addClass("hidden");
              return false;
           }
    
			});
  			// End Cont_phone 
		// email Validations  
			 $("#Cont_Email1").on("blur", function(){
		
        var email = document.getElementById('Cont_Email1');
        var filter = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!filter.test(email.value)) {
            alert('Please provide a valid email address');
            email.focus;
            return false;
        }

	});
	
	
		 $("#Con_Email2").on("blur", function(){
		
        var email = document.getElementById('Con_Email2	');
        var filter = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!filter.test(email.value)) {
            alert('Please provide a valid email address');
            email.focus;
            return false;
        }

	});
			// end EMailValidations 
			

	
	
	
