package dao;

import org.springframework.jdbc.core.JdbcTemplate;

import models.BookMapper;
import models.Books;

public class BookDaoImpl implements BookDao {
	Books book=new Books();


	private JdbcTemplate jdbcTemplate;  
	  
	public void setJdbcTemplate(JdbcTemplate jdbcTemplate) {  
	    this.jdbcTemplate = jdbcTemplate;  
	}  
	  

	public Object findAll() {
		 String query="select * from books  ";  
		return  jdbcTemplate.query(query,new BookMapper());
	}

	public Books findById(Long id) {
		 String query="select * from books where bookId=?";  
		return jdbcTemplate.queryForObject(query,new Object[]{id},new BookMapper());  
		 
	}

	public Books save(Books book) {
	   String query="insert into books (bookId, bookName,  bookPublisher,bookAuthor, bookType ,bookAvailablity) values(  '" +book.getBookId() +"','"+book.getBookName()+"','"+book.getBookPublisher()+"','"+book.getBookAuthor() +"','"+book.getBookType() +"','"+book.getBookAvailablity() +"')";  
	   jdbcTemplate.update(query);  
	   return book;
		
	}

	 public void deleteById(Long id){
		String query="delete from books where bookId='"+id+"' ";  
		jdbcTemplate.update(query);  
		
	}

}
//public Student getStudent(Integer id) {
//    String SQL = "select * from Student where id = ?";
//    Student student = jdbcTemplateObject.queryForObject(SQL, 
//       new Object[]{id}, new StudentMapper());
//    
//    return student;
// }
// public List<Student> listStudents() {
//    String SQL = "select * from Student";
//    List <Student> students = jdbcTemplateObject.query(SQL, new StudentMapper());
//    return students;
