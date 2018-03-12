package models;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

public class BookMapper implements RowMapper<Books>{
	 public Books mapRow(ResultSet rs, int rowNum) throws SQLException {
		 Books book = new Books();
		 book.setBookId(rs.getLong("bookId"));
		 book.setBookName(rs.getString("bookName"));
		 book.setBookPublisher(rs.getString("bookPublisher"));
		 book.setBookAuthor(rs.getString("bookAuthor"));
		 book.setBookType(rs.getString("bookType")); 
		 book.setBookAvailablity(rs.getString("bookAvailablity"));
		
		 return book;
	   }
	

}
