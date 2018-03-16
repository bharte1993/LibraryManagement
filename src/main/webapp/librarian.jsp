<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1" %>

    <!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">

    <html>
    <head>
            <meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">  
    <style> 
			#myDIV {
				width:1000px;
			    height: 500px;
			    background-color: lightblue;
			   
			}
			#myDIV3 {
			    width:1000px;
			    height: 500px;
			    background-color: lightblue;
			   
			}
			#myDIV2 {
				width:1500px;
			    height: 500px;
			    background-color: lightblue;
			   
			}
			#myDIV4 {
				width:1500px;
			    height: 500px;
			    background-color: lightblue;
			   
			}

			.hide{
				display:none;
			}
   </style>
             <%= " <script>var id ='"+request.getParameter("id")+"';console.log(id)</script>" %>
             <h>Welcome to Library Management System</h>
             <%= request.getParameter("id") %>
   </head>
             <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
             <script src="${pageContext.request.contextPath}/resources/js/librarian.js"></script>
   <body>
             <h>  Librarian </h>
   <table>
              
	            <td><input type="button" value ="Search All Books" onclick="searchBooks()" /></td>
	            <td><input type="button" value ="Search All Members" onclick="searchMember()" /></td>
	            <td><input type="button" value ="Add New Book" onclick="addnewBook() " /></td>
	              
                <tr>
                    <td>Search Books By ID</td>
                    <td><input type="text" style = "width : 26px" name="bid" id="bid" /></td>
                    <td><input type="button" value ="Search" onclick="searchBookByID()" /></td>
                </tr>
               
                <tr>
                    <td>Search Member By ID</td>
                    <td><input type="text" style = "width : 26px" name="mid" id="mid" /></td>
                    <td><input type="button" value ="Search" onclick="searchMemberByID()" /></td>
                </tr>
                
                <tr>
                    <td>Delete Member By ID</td>
                     <td><input type="text" style = "width : 26px" name="dmid" id="dmid" /></td>
                    <td><input type="button" value ="Delete" onclick="deleteMemberByID()" /></td>
                </tr>
                <tr>
                    <td>Delete Book By ID</td>
                      <td><input type="text" style = "width : 26px" name="dbid" id="dbid" /></td>
                    <td><input type="button" value ="Delete" onclick="deleteBookByID()" /></td>
                </tr>
                <tr> 
                   <td>Update Book By ID</td>
                    <td><input type="text" style = "width : 26px" name="ubid" id="ubid" /></td>
                   <td><input type="button" value ="Update" onclick="updatebookByID()" /></td>
                </tr>
                <tr> 
                   <td>Update Member By ID</td>
                    <td><input type="text" style = "width : 26px" name="umid" id="umid" /></td>
                   <td><input type="button" value ="Update" onclick="updatememberByID()" /></td>
                </tr>
                
    </table>
                      
                <div id="myDIV" class="hide"> Result
                    <table class="table table-hover table-striped table-bordered">
						<thead>
							<tr>
								<th>BookId</th><br>
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
                           
                <div id="myDIV3" class="hide"> Result
                     <table class="table table-hover table-striped table-bordered">
						<thead>
							<tr>
								<th>Id</th><br>
								<th>FirstName</th>
								<th>LastName</th>
								<th>Address</th>
							    <th>PhoneNo</th>
							     <th>memberId</th>
							    <th>MemberType</th>
							    <th>MemberAge</th>
							    <th>Password</th>
							    <th>EmailID</th>
							</tr>
						</thead>
						 <tbody id ="tabledata1">
							
					     </tbody>
					</table>

             </div>
                 <div id="myDIV2" class="hide">
                  <table >
						<thead>
							<tr>
								<th>BookId</th><br>
								<th>BookName</th>
								<th>BookPublisher</th>
								<th>BookAuthor</th>
							    <th>BookType</th>
							    <th>BookAvailablity</th>
							</tr>
						</thead>
						<tbody id ="tabledata2">
						<tr><td><input type="text"  name="bookId"id="bookId" ></td><td><input type="text"  name="bookName" id="bookName" ></td><td><input type="text" name="bookPublisher" id="bookPublisher" ></td><td><input type="text"name="bookAuthor" id="bookAuthor" ></td><td><input type="text" name="bookType"  id="bookType" ></td><td><input type="text"  name="bookAvailablity" id="bookAvailablity" ></td></tr>
						 <td><input type="button" value ="Save" onclick="updatebook()" /></td>	
					    </tbody>
					</table>
                 </div>
                 <div id="myDIV4" class="hide">
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
							  
							</tr>
						</thead>
						<tbody id ="tabledata3">
						<tr><td><input type="text" style = "width : 70px" name="id"id="id" ></td><td><input type="text" style = "width : 70px" name="firstName" id="firstName" ></td><td><input type="text" style = "width : 70px" name="lastName" id="lastName" ></td><td><input type="text" style = "width : 70px" name="address"id="address" ></td><td><input type="text" style = "width : 70px" name="phoneNo" id="phoneNo" ></td><td><input type="text" style = "width : 70px" name="memberId" id="memberId" ></td><td><input type="text" style = "width : 70px" name="memberType" id="memberType" ></td><td><input type="text" style = "width : 70px" name="memberAge" id="memberAge" ></td></tr>
						 <td><input type="button" value ="Update" onclick="updatemember()" /></td>	
					    </tbody>
					</table>
                 </div>
             
             <div id="myDIV1" class="hide">
             <table cellpadding="2" width="20%" bgcolor="99FFFF" align="center" cellspacing="2">

				<tr>
				 <td colspan=2>
				    <center><font size=4><b>Add New Book</b></font></center>
				 </td>
				</tr>
				<tr>
				 <td>Book ID</td>
				 <td><input type=text name="bookId" id="bookId" size="30"></td>
				</tr>
				<tr>
				 <td>BookName</td>
				 <td><input type=text name="bookName" id="bookName" size="30"></td>
				</tr>
				
				<tr>
				 <td>BookPublisher</td>
				 <td><input type="text" name="bookPublisher" id="bookPublisher" size="30"></td>
				</tr>
				<tr>
				 <td>BookAuthor</td>
				 <td><input type="text" name="bookAuthor" id="bookAuthor" size="30"></td>
				</tr>
				<tr>
				 <td>BookType</td>
				 <td><input type="text" name="bookType" id="bookType" size="30"></td>
				</tr>
				<tr>
				  <td>BookAvailablity</td>
				  <td><input type="text" name="bookAvailablity" id="bookAvailablity" size="30"></td>
				</tr>
				<tr>
				<tr>
				  <td><input type="reset"></td>
				  <td colspan="2"><input type="button" value="Add" onclick="addBook()"/></td>
				</tr>

         </table>
         </div>
   
    </body>
    </html>