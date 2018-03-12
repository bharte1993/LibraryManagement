package models;

public class Books {
	private Long bookId;
	private String bookName;
	private String bookPublisher;
	private String bookAuthor;
    private String bookType;
    private String bookAvailablity;
    
	public Long getBookId() {
		return bookId;
	}
	public void setBookId(Long bookId) {
		this.bookId = bookId;
	}
	public String getBookName() {
		return bookName;
	}
	public void setBookName(String bookName) {
		this.bookName = bookName;
	}
	public String getBookPublisher() {
		return bookPublisher;
	}
	public void setBookPublisher(String bookPublisher) {
		this.bookPublisher = bookPublisher;
	}
	public String getBookAuthor() {
		return bookAuthor;
	}
	public void setBookAuthor(String bookAuthor) {
		this.bookAuthor = bookAuthor;
	}
	public String getBookType() {
		return bookType;
	}
	public void setBookType(String bookType) {
		this.bookType = bookType;
	}
	public String getBookAvailablity() {
		return bookAvailablity;
	}
	public void setBookAvailablity(String bookAvailablity) {
		this.bookAvailablity = bookAvailablity;
	}
	
}
