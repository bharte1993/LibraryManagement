<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1" %>

    <!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">

    <html>
      <head>
        <%= " <script>var id1 ='"+request.getParameter("id")+"';console.log(id1)</script>" %>

        <meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">

        <h>Welcome to Library Management System</h>
        <%= request.getParameter("id") %>
        
           <style> 
			#myDIV {
				width:1000px;
			    height: 500px;
			    background-color: lightblue;
			   
			}
			#myDIV1 {
				width:1000px;
			    height: 500px;
			    background-color: lightblue;
			   
			}
			.hide{
				display:none;
			}
       </style>
       </head>
       
         <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
         <script src="${pageContext.request.contextPath}/resources/js/Members.js"></script> 

    <body>
    <h> welcome member <h>
    <table>
                <tr>
                    <td><input type="button" value ="Search All Books" onclick="searchBooks()" /></td>
                </tr>
                <tr>
                    <td>Search Books By ID</td>
                    <td><input type="text" name="id" id="bid" /></td>
                    <td><input type="button" value ="Search" onclick="searchBookByID()" /></td>
                </tr>
                
                <tr>
                    <td><input type="button" value ="Update Your Account" onclick="updateaccount()" /></td>
                </tr>
                <tr>
                    <td><input type="button" value ="Your Account" onclick="yourAccount()" /></td>
                </tr>
                <tr>
                    <td>Issue Book</td>
                    <td><input type="button" value ="Issue" onclick="" /></td>
                </tr>
                <tr> 
                   <td>Return Book</td>
                <td><input type="button" value ="Return" onclick="" /></td>
                </tr>
     </table>
               <div id="myDIV" class="hide"> Result
                    <table>
						<thead>
							<tr>
								<th>BookId</th>
								<th>BookName</th>
								<th>BookPublisher</th>
								<th>BookAuthor</th>
							    <th>BookType</th>
							    <th>BookAvailablity</th>
							</tr>
						</thead>
						<tbody id ="tabledata">
							
					    </tbody>
					</table>
                </div>
                 <div id="myDIV1" class="hide">
                  <table >
						<thead>
							<tr>
								<th>Id</th><br>
								<th>FirstName</th>
								<th>LastName</th>
								<th>Address</th>
							    <th>PhoneNo</th>
							     <th>MemberId</th>
							    <th>MemberType</th>
							    <th>MemberAge</th>
							    <th>Password</th>
							    <th>EmailID</th>
							  
							</tr>
						</thead>
						<tbody id ="tabledata3">
						<tr><td><input type="text" style = "width : 70px" name="id"id="id" ></td><td><input type="text" style = "width : 70px" name="firstName" id="firstName" ></td><td><input type="text" style = "width : 70px" name="lastName" id="lastName" ></td><td><input type="text" style = "width : 70px" name="address"id="address" ></td><td><input type="text" style = "width : 70px" name="phoneNo" id="phoneNo" ></td><td><input type="text" style = "width : 70px" name="memberId" id="memberId" ></td><td><input type="text" style = "width : 70px" name="memberType" id="memberType" ></td><td><input type="text" style = "width : 70px" name="memberAge" id="memberAge" ></td><td><input type="text" style = "width : 70px" name="password"id="password" ></td><td><input type="text" style = "width : 70px" name="emailID"id="emailID" ></td></tr>
						 <td><input type="button" value ="Update" onclick="updateAccount()" /></td>	
					    </tbody>
					</table>
                 </div>
          <div id="myDIV2" class="hide">
             <table cellpadding="2" width="20%" bgcolor="99FFFF" align="center" cellspacing="2">

				<tr>
				 <td colspan=2>
				    <center><font size=4><b>Account</b></font></center>
				 </td>
				</tr>
				<tr>
				 <td>ID</td>
				 <td><input type=text name="id" id="id1" readonly size="30"></td>
				</tr>
				<tr>
				 <td>FirstName</td>
				 <td><input type=text name="firstName" id="firstName1" readonly size="30"></td>
				</tr>
				
				<tr>
				 <td>LastName</td>
				 <td><input type="text" name="lastName" id="lastName1" readonly size="30"></td>
				</tr>
				<tr>
				 <td>Address</td>
				 <td><input type="text" name="address" id="address1" readonly size="30"></td>
				</tr>
				<tr>
				 <td>PhoneNo</td>
				 <td><input type="text" name="phoneNo" id="phoneNo1" readonly size="30"></td>
				</tr>
				<tr>
				  <td>MemberId</td>
				  <td><input type="text" name="memberId" id="memberId1" readonly size="30"></td>
				</tr>
				<tr>
				  <td>MemberType</td>
				  <td><input type="text" name="memberType" id="memberType1" readonly size="30"></td>
				</tr>
				<tr>
				  <td>MemberAge</td>
				  <td><input type="text" name="memberAge" id="memberAge1" readonly size="30"></td>
				</tr>
				<tr>
				  <td>Password</td>
				  <td><input type="text" name="password" id="password1" readonly size="30"></td>
				</tr>
				<tr>
				  <td>EmailID</td>
				  <td><input type="text" name="emailID" id="emailID1" readonly size="30"></td>
				</tr>
				

         </table>
         </div>
    </body>
    </html>