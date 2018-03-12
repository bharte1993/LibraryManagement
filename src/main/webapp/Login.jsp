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
		
		$.ajax({
			type: "POST",
			url: "http://localhost:8080/LibraryManagementSystem/member/login",
			contentType:"application/json; charset=utf-8",
			data: JSON.stringify({"expString":$("#display").val()}),
			success: function(response){
			var myJSON = JSON.stringify(response); 
			console.log(myJSON);
			var obj = JSON.parse(myJSON);                  
	        $('#result1').html("expString:- " + obj.expString +"</br>expMessage:- " + obj.expMessage  + "</br>result:- " + obj.result.Answer+"</br>Error:- " + obj.result.Error);
	        $('#display').val(obj.result.Answer);
		},
			error:function(){
				console.log("data");
	                	 alert('Error while request..');
			}
		});
	}
  
  </script>
</head>
<body>
    <form:form name="submitForm" method="POST">
    
        <div align="center">
            <table>
                <tr>
                    <td>User Name</td>
                    <td><input type="text" name="userName" /></td>
                </tr>
                <tr>
                    <td>Password</td>
                    <td><input type="password" name="password" /></td>
                </tr>
                <tr>
                    <td></td>
                   <td><input type="submit" value ="Login" onclick="memberLogin()" /></td>
                   
                </tr>
            </table>
            <div style="color: red">${error}</div>
        </div>
    </form:form>
</body>
</html>