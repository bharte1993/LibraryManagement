  
       function searchBooks() {
  	     $.ajax({
   			type: "GET",
   			url: "http://localhost:8080/LibraryManagementSystem/books/all",
   			success: function(response){
   			var myJSON = JSON.stringify(response); 
   			console.log(myJSON);
   			var obj = JSON.parse(myJSON);  
   		},
   			error:function(){
   			alert('Wrong');
   			}
   		});
   	}
       function searchBookByID() {
  	     
   	    var id1 = $('#bid').val(); 
   	    $.ajax({
   			type: "GET",
   			url: "http://localhost:8080/LibraryManagementSystem/books/id/"+id1,
   			data:"id=" + id1, 
   			success: function(response){
   			var myJSON = JSON.stringify(response); 
   			console.log(myJSON);
   			var obj = JSON.parse(myJSON);  
   		   
   		},
   			error:function(){
   				     console.log("data");
   	                	 alert('Wrong Password');
   			}
   		});
   	}