<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1" %>

    <!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">

    <html>
      <head>
        <%= " <script>var id ='"+request.getParameter("id")+"';console.log(id)</script>" %>

        <meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">

        <h>Welcome to Library Management System</h>
        <%= request.getParameter("id") %>
       </head>
       <script>  </script>

    <body>
    <h> welcome member <h>
    <table>
                <tr>
                    <td>Search All Books</td>
                    <td><input type="button" value ="Search" onclick="" /></td>
                </tr>
                <tr>
                    <td>Search Books By ID</td>
                    <td><input type="text" name="id" id="id" /></td>
                    <td><input type="button" value ="Search" onclick="" /></td>
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
    </body>

    </html>