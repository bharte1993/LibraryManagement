package service;

import models.Books;

public interface BookService {
	 public Object findAll();
	 public Books findById(Long id);
	 public Books save(Books Book);
	 public void deleteById(Long id);


}
