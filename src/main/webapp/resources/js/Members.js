  
       
       function searchBooks() {
    	    $(".hide").hide();
    	    document.getElementById("myDIV").style.display = "block";
    	 
  	     $.ajax({
   			type: "GET",
   			url: "http://localhost:8080/LibraryManagementSystem/books/all",
   			success: function(response){
   			var myJSON = JSON.stringify(response); 
   			console.log(myJSON);
   			var obj = JSON.parse(myJSON);  
   			var loadData='';
			$.each(obj, function( index, value ) {
				loadData += '<tr><td>'+value.bookId+'</td><td>'+value.bookName+'</td><td>'+value.bookPublisher+'</td><td>'+value.bookAuthor+'</td><td>'+value.bookType+'</td><td>'+value.bookAvailablity+'</td></tr>';
			});
			$('#tabledata').html(loadData);
			console.log(loadData);
		
   		},
   			error:function(){
   			alert('ERROR');
   			}
   		});
   	}
       function searchBookByID() {
    	   $(".hide").hide();
    	   document.getElementById("myDIV").style.display = "block"; 
    	  
    	    var id1 = $('#bid').val(); 
    	    $.ajax({
    			type: "GET",
    			url: "http://localhost:8080/LibraryManagementSystem/books/id/"+id1,
    			data:"id=" + id1, 
    			success: function(response){
    			var myJSON = JSON.stringify(response); 
    			console.log(myJSON);
    			var value = JSON.parse(myJSON); 
    			var loadData = '<tr><td>'+value.bookId+'</td><td>'+value.bookName+'</td><td>'+value.bookPublisher+'</td><td>'+value.bookAuthor+'</td><td>'+value.bookType+'</td><td>'+value.bookAvailablity+'</td></tr>';
    			$('#tabledata').html(loadData);
    		    console.log(loadData);
    	   		
    		},
    			error:function(){
    				     console.log("data");
    	                	 alert('Wrong ID');
    			}
    		});
    	}
       function updateaccount() {
    	   $(".hide").hide();
    	   document.getElementById("myDIV1").style.display = "block";
    	  

    	   console.log(id1);
   	    $.ajax({
   			type: "GET",
   			url: "http://localhost:8080/LibraryManagementSystem/member/id/"+id1,
   			data:"id=" + id1, 
   			success: function(response){
   			var myJSON = JSON.stringify(response); 
   			console.log(myJSON);
   			var obj = JSON.parse(myJSON); 
   		    $('#id').val(obj.id);
   		    $('#firstName').val(obj.firstName);
   		    $('#lastName').val(obj.lastName);
   		    $('#address').val(obj.address); 
   		    $('#phoneNo').val(obj.phoneNo);
   		    $('#memberType').val(obj.memberType);
   		    $('#memberAge').val(obj.memberAge);
   		    $('#memberId').val(obj.memberId);
   		    $('#password').val(obj.password);
   		    $('#emailID').val(obj.emailID);
   		  
   		 
   		  
   	   		
   		},
   		error:function(){
			     console.log("data");
              	 alert('Wrong ID');
		}
	});
  }
       function updateAccount() {
    	   document.getElementById("myDIV1").style.display = "none";
  	     $.ajax({
     			type: "POST",
     			url: "http://localhost:8080/LibraryManagementSystem/member/updatePass",
     			contentType:"application/json; charset=utf-8",
     			data: JSON.stringify({"id":$("#id").val(),
     				"firstName":$("#firstName").val(),
     				"lastName":$("#lastName").val(),
     				"address":$("#address").val(),
     				"phoneNo":$("#phoneNo").val(),
     				"memberType":$("#memberType").val(),
     				"memberAge":$("#memberAge").val(),
     				"memberId":$("#memberId").val(),
     				"password":$("#password").val(),
     				"emailID":$("#emailID").val(),
     		
     		       }),  
     		       
    
     			success: function(response){
     			var myJSON = JSON.stringify(response); 
     			console.log(myJSON);
     			var obj = JSON.parse(myJSON);  
     		    alert('Update');
     		
     		  
     		},
     			error:function(){
     	 		
     				     console.log("data");
     	                 alert('Wrong Data');
     			}
     		});
   		
   	}
       function yourAccount() {
    	   $(".hide").hide();
    	   document.getElementById("myDIV2").style.display = "block";
    	  

    	   console.log(id1);
    	   $.ajax({
      			type: "GET",
      			url: "http://localhost:8080/LibraryManagementSystem/member/id/"+id1,
      			data:"id=" + id1, 
      			success: function(response){
      			var myJSON = JSON.stringify(response); 
      			console.log(myJSON);
      			var obj = JSON.parse(myJSON); 
      	
      		    $('#id1').val(obj.id);
      		    $('#firstName1').val(obj.firstName);
      		    $('#lastName1').val(obj.lastName);
      		    $('#address1').val(obj.address); 
      		    $('#phoneNo1').val(obj.phoneNo);
      		    $('#memberType1').val(obj.memberType);
      		    $('#memberAge1').val(obj.memberAge);
      		    $('#memberId1').val(obj.memberId);
      		    $('#password1').val(obj.password);
      		    $('#emailID1').val(obj.emailID);
      		  
      		 
      		  
      	   		
      		},
      		error:function(){
   			     console.log("data");
                 	 alert('Wrong ID');
   		}
   	});
     }