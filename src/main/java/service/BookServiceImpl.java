package service;

import org.springframework.beans.factory.annotation.Autowired;

import dao.BookDao;
import models.Books;

public class BookServiceImpl implements BookService{
       
   @Autowired
   private BookDao bookdao;
	
	public void setBookdao(BookDao bookdao) {
		this.bookdao = bookdao;
	}


	public Object findAll() {
		return bookdao.findAll();
	}

	public Books findById(Long id) {
		return bookdao.findById(id);
	}

	public Books save(Books book) {
		return bookdao.save(book);
	}

	public void deleteById(Long id) {
		bookdao.deleteById(id);
		
	}

}
