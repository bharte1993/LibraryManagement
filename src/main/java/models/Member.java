package models;

public class Member {

   private long id;
   private String firstName;
   private	String lastName;
   private	String address;
   private	long phoneNo;
   private	long memberId;
   private	String memberType;
   private  long   memberAge;
   private  String  password;
   private  String  emailID;
   public String getEmailID() {
	return emailID;
}
public void setEmailID(String emailID) {
	this.emailID = emailID;
}
public long getId() {
	return id;
}
public String getPassword() {
	return password;
}
public void setPassword(String password) {
	this.password = password;
}
public void setId(long id) {
	this.id = id;
}
public String getFirstName() {
	return firstName;
}
public void setFirstName(String firstName) {
	this.firstName = firstName;
}
public String getLastName() {
	return lastName;
}
public void setLastName(String lastName) {
	this.lastName = lastName;
}
public String getAddress() {
	return address;
}
public void setAddress(String address) {
	this.address = address;
}
public long getPhoneNo() {
	return phoneNo;
}
public void setPhoneNo(long phoneNo) {
	this.phoneNo = phoneNo;
}
public long getMemberId() {
	return memberId;
}
public void setMemberId(long memberId) {
	this.memberId = memberId;
}
public String getMemberType() {
	return memberType;
}
public void setMemberType(String memberType) {
	this.memberType = memberType;
}
public long getMemberAge() {
	return memberAge;
}
public void setMemberAge(long memberAge) {
	this.memberAge = memberAge;
}

}
