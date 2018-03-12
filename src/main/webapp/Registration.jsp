<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<html>

  <head>
  <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
  <script>
   function memberRegister() {
		
		$.ajax({
			type: "PUT",
			url: "http://localhost:8080/LibraryManagementSystem/member/save",
			contentType:"application/json; charset=utf-8",
			data: JSON.stringify({"id":$("#id").val(),
			"firstName":$("#firstName").val(),
			"lastName":$("#lastName").val(),
			"address":$("#address").val(),
			"phoneNo":$("#phoneNo").val(),
			"memberId":$("#memberId").val(),
			"memberType":$("#memberType").val(),
			"memberAge":$("#memberAge").val(),
			"password":$("#password").val(),
			"emailID":$("#emailID").val()
	
			}),
			success: function(response){     
				console.log("dataad");
				 window.location="http://net-informations.com"
	       
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

  <form action="#" >


<table cellpadding="2" width="20%" bgcolor="99FFFF" align="center"

  cellspacing="2">

<tr>

  <td colspan=2>

  <center><font size=4><b>Member Registration Form</b></font></center>

  </td>

  </tr>
  <tr>

  <td>ID</td>

  <td><input type=text name=id id="id" size="30"></td>

  </tr>

<tr>

  <td>FirstName</td>

  <td><input type=text name=firstName id="firstName" size="30"></td>

  </tr>

<tr>

  <td>LastName</td>

  <td><input type="text" name="lastName" id="lastName"

  size="30"></td>

  </tr>

  <tr>

  <td>Address</td>

  <td><input type="text" name="address" id="address" size="30"></td>

  </tr>


  <tr>

  <td>Age</td>

  <td><input type="text" name="memberAge" id="memberAge" size="30"></td>

  </tr>
  
   <tr>

  <td>Member Id</td>

  <td><input type="text" name="memberId" id="memberId" size="30"></td>

  </tr>
  
   <tr>

  <td>Member Type</td>

  <td><input type="text" name="memberType" id="memberType" size="30"></td>

  </tr>


<tr>

  <td>Phone Number</td>

  <td><input type="text" name="phoneNo" id="phoneNo" size="30"></td>

  </tr>
  
<tr>

  <td>Password</td>

  <td><input type="password" name="password"

  id="password" size="30"></td>

  </tr>
  <tr>

  <td>Email ID</td>

  <td><input type="text" name="emailID" id="emailID" size="30"></td>

  </tr>
  



  <tr>

  <td><input type="reset"></td>

  <td colspan="2"><input type="submit" value="Submit Form" onclick="memberRegister()"/></td>

  </tr>

  </table>

  </form>

  </body>

  </html>
