<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<h>Library Management System</h>
 <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
  <script>
   function memberLogin() {
	     
	    var email = $('#emailID').val();  
	    var pass = $('#password').val();  
	    console.log(email);
	    console.log(pass);
		
		$.ajax({
			type: "POST",
			url: "http://localhost:8080/LibraryManagementSystem/member/login",
			data:"emailID=" + email + "&password=" + pass ,  
			success: function(response){
			var myJSON = JSON.stringify(response); 
			console.log(myJSON);
			var obj = JSON.parse(myJSON);  
		    console.log(obj.length);
			if(obj.length===0){
				 window.location.href = "Login.jsp";
			}
			if(obj.length>0){
			var membertype=obj[0].memberType;
			var id1=obj[0].id;
			
			if(membertype==="librarian"){
				 window.location.href = "http://localhost:8080/LibraryManagementSystem/librarian.jsp?id="+id1;
			}
			if(membertype==="member"){
	         window.location.href = "http://localhost:8080/LibraryManagementSystem/member.jsp?id="+id1;
		     }
			}	
		},
			error:function(){
				     console.log("data");
	                	 alert('Wrong Password');
			}
		});
	}
  
  </script>
</head>
<body>
  
    
        <div align="center">
            <table>
                <tr>
                    <td>Email ID</td>
                    <td><input type="text" name="emailID" id="emailID" /></td>
                </tr>
                <tr>
                    <td>Password</td>
                    <td><input type="Password" name="password" id="password" /></td>
                </tr>
                <tr>
                    <td></td>
                   <td><input type="submit" value ="Login" onclick="memberLogin()" /></td>
                   
                </tr>
            </table>
            <div style="color: red">${error}</div>
           
        </div>
  
</body>
</html>