package controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import models.Books;
import service.BookService;


@RestController
@RequestMapping("/books")
public class BookController {
	
	@Autowired
	BookService bookService;

	@RequestMapping(value="/all", method=RequestMethod.GET)
	public Object getAllBooks(){
		return bookService.findAll();
	}
	
	@RequestMapping(value="id/{id}", method=RequestMethod.GET)
	public Books getMember(@PathVariable("id") Long id) {
		return bookService.findById(id);
	}

	
	@RequestMapping(value = "/save", method = RequestMethod.PUT)	  
	@ResponseBody
	public String addBook(@RequestBody Books book) {
		System.out.println("in");
		  String Id = "";
	    try {	    
	       
	    	bookService.save(book);
            Id = String.valueOf(book.getBookId());
	  
	    }
	    catch (Exception ex) {
	      return  ex.toString();
	    }
    return  Id;
}
	@RequestMapping(value = "/delete/{id}", method = RequestMethod.DELETE)	  
	@ResponseBody
	public String deleteByid(@PathVariable("id") Long id) {
	
		   try {	    
		       
			   bookService.deleteById(id);
		  
		    }
		    catch (Exception ex) {
		      return  ex.toString();
		    }
		   return  "ok";
	}


}
