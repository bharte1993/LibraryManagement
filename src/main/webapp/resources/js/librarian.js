
       
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
       function searchMember() {
    	   $(".hide").hide();
    	   document.getElementById("myDIV3").style.display = "block";
      		$.ajax({
      			type: "GET",
      			url: "http://localhost:8080/LibraryManagementSystem/member/all",
      			success: function(response){
      			var myJSON = JSON.stringify(response); 
      			console.log(myJSON);
      			var obj = JSON.parse(myJSON);  
      			var loadData='';
    			$.each(obj, function( index, value ) {
    				loadData += '<tr><td>'+value.id+'</td><td>'+value.firstName+'</td><td>'+value.lastName+'</td><td>'+value.address+'</td><td>'+value.phoneNo+'</td><td>'+value.memberId+'</td><td>'+value.memberType+'</td><td>'+value.memberAge+'</td><td>'+value.password+'</td><td>'+value.emailID+'</td></tr>';
    			});
    			$('#tabledata1').html(loadData);
    			console.log(loadData);
      		 
      		},
      			error:function(){
      				     console.log("data");
      	                	 alert('ERROR');
      			}
      		});
      	}
       function addBook() {
    	   $(".hide").hide();
    	   document.getElementById("myDIV1").style.display = "none";
  	     $.ajax({
     			type: "PUT",
     			url: "http://localhost:8080/LibraryManagementSystem/books/save",
     			contentType:"application/json; charset=utf-8",
     			data: JSON.stringify({"bookId":$("#bookId").val(),
     				"bookName":$("#bookName").val(),
     				"bookPublisher":$("#bookPublisher").val(),
     				"bookAuthor":$("#bookAuthor").val(),
     				"bookType":$("#bookType").val(),
     				"bookAvailablity":$("#bookAvailablity").val()
     		       }),  
    
     			success: function(response){
     			var myJSON = JSON.stringify(response); 
     			console.log(myJSON);
     			var obj = JSON.parse(myJSON);  
     			searchBooks();
     		
     		  
     		},
     			error:function(){
     	 		
     				     console.log("data");
     	                 alert('Wrong Data');
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
       function searchMemberByID() {
    	   $(".hide").hide();
    	   document.getElementById("myDIV3").style.display = "block";
    	
      	    var id1 = $('#mid').val(); 
   		
   		$.ajax({
   			type: "GET",
   			url: "http://localhost:8080/LibraryManagementSystem/member/id/"+id1,
   			data:"id=" + id1, 
   			success: function(response){
   			var myJSON = JSON.stringify(response); 
   			console.log(myJSON);
   			var value = JSON.parse(myJSON); 
            var loadData = '<tr><td>'+value.id+'</td><td>'+value.firstName+'</td><td>'+value.lastName+'</td><td>'+value.address+'</td><td>'+value.phoneNo+'</td><td>'+value.memberId+'</td><td>'+value.memberType+'</td><td>'+value.memberAge+'</td><td>'+value.password+'</td><td>'+value.emailID+'</td></tr>';
		    $('#tabledata1').html(loadData);
			console.log(loadData);
   	
   		  
   		},
   			error:function(){
   				     console.log("data");
   	                	 alert('Wrong ID');
   			}
   		});
   	}
       function deleteMemberByID() {
    	   $(".hide").hide();
     	    var id1 = $('#dmid').val(); 
     	    
    		console.log(id1);
      		$.ajax({
      			type: "DELETE",
      			url: "http://localhost:8080/LibraryManagementSystem/member/delete/"+id1,
      			data:"id=" + id1, 
      			success: function(response){
      			var myJSON = JSON.stringify(response); 
      			console.log(myJSON);
      			var obj = JSON.parse(myJSON);  
      			 alert('DELETED');
      		   
      		},
      			error:function(){
      				     console.log("data");
      	                	 alert('Wrong ID');
      			}
      		});
      	}
       function deleteBookByID() {
    	$(".hide").hide();
   	    var id1 = $('#dbid').val(); 
  		
  		$.ajax({
  			type: "DELETE",
  			url: "http://localhost:8080/LibraryManagementSystem/books/delete/"+id1,
  			data:"id=" + id1, 
  			success: function(response){
  			var myJSON = JSON.stringify(response); 
  			console.log(myJSON);
  			var obj = JSON.parse(myJSON);  
  			 alert('DELETED');
  		   
  		},
  			error:function(){
  				     console.log("data");
  	                	 alert('Wrong ID');
  			}
  		});
  	}
       function addnewBook() {
    	   $(".hide").hide();
    	   document.getElementById("myDIV1").style.display = "block";
    	  
       }
       function updatebookByID() {
    	   $(".hide").hide();
    	   document.getElementById("myDIV2").style.display = "block";
    	 
    	   var id1 = $('#ubid').val(); 
    	   console.log(id1);
   	    $.ajax({
   			type: "GET",
   			url: "http://localhost:8080/LibraryManagementSystem/books/id/"+id1,
   			data:"id=" + id1, 
   			success: function(response){
   			var myJSON = JSON.stringify(response); 
   			console.log(myJSON);
   			var obj = JSON.parse(myJSON); 
   		    $('#bookId').val(obj.bookId);
   		    $('#bookName').val(obj.bookName);
   		    $('#bookPublisher').val(obj.bookPublisher);
   		    $('#bookAuthor').val(obj.bookAuthor); 
   		    $('#bookType').val(obj.bookType);
   		    $('#bookAvailablity').val(obj.bookAvailablity);
   		  
   	   		
   		},
   			error:function(){
   				     console.log("data");
   	                	 alert('Wrong ID');
   			}
   		});
     		
     		
     	}
     
       function updatebook() {
    	   document.getElementById("myDIV2").style.display = "none";
    	     $.ajax({
       			type: "POST",
       			url: "http://localhost:8080/LibraryManagementSystem/books/update",
       			contentType:"application/json; charset=utf-8",
       			data: JSON.stringify({"bookId":$("#bookId").val(),
       				"bookName":$("#bookName").val(),
       				"bookPublisher":$("#bookPublisher").val(),
       				"bookAuthor":$("#bookAuthor").val(),
       				"bookType":$("#bookType").val(),
       				"bookAvailablity":$("#bookAvailablity").val(),
       		
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
       function updatememberByID() {
    	   $(".hide").hide();
    	   document.getElementById("myDIV4").style.display = "block";
    	
    	   var id1 = $('#umid').val(); 
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
   		  
   		 
   		  
   	   		
   		},
   			error:function(){
   				     console.log("data");
   	                	 alert('Wrong ID');
   			}
   		});
     		
     		
     	}
       function updatemember() {
    	   document.getElementById("myDIV4").style.display = "none";
    	     $.ajax({
       			type: "POST",
       			url: "http://localhost:8080/LibraryManagementSystem/member/update",
       			contentType:"application/json; charset=utf-8",
       			data: JSON.stringify({"id":$("#id").val(),
       				"firstName":$("#firstName").val(),
       				"lastName":$("#lastName").val(),
       				"address":$("#address").val(),
       				"phoneNo":$("#phoneNo").val(),
       				"memberType":$("#memberType").val(),
       				"memberAge":$("#memberAge").val(),
       				"memberId":$("#memberId").val(),
       		
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
     
     

      