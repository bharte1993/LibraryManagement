package dao;

import models.Books;

public interface BookDao {
	 public Object findAll();
	 public Books findById(Long id);
	 public Books save(Books book);
	 public void deleteById(Long id);

}
