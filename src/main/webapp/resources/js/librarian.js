
       
       function searchBooks() {
    	   document.getElementById("myDIV3").style.display = "none";
    	   document.getElementById("myDIV").style.display = "block";
    	   document.getElementById("myDIV1").style.display = "none";
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
    	   document.getElementById("myDIV3").style.display = "block";
    	   document.getElementById("myDIV").style.display = "none";
    	   document.getElementById("myDIV1").style.display = "none";
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
    	   document.getElementById("myDIV").style.display = "block"; 
    	   document.getElementById("myDIV1").style.display = "none";
    	   document.getElementById("myDIV3").style.display = "none";
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
    	   document.getElementById("myDIV3").style.display = "block";
    	   document.getElementById("myDIV1").style.display = "none";
    	   document.getElementById("myDIV").style.display = "none"; 
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
    	   document.getElementById("myDIV1").style.display = "block";
    	   document.getElementById("myDIV").style.display = "none";
    	   document.getElementById("myDIV3").style.display = "none";
       }

     

      