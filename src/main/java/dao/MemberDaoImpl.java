package dao;
import org.springframework.jdbc.core.JdbcTemplate;


import models.Member;
import models.MemberMapper;

public class MemberDaoImpl implements MemberDao {
	 Member member = new Member();
	private JdbcTemplate jdbcTemplate;  
	  
	public void setJdbcTemplate(JdbcTemplate jdbcTemplate) {  
	    this.jdbcTemplate = jdbcTemplate;  
	}  

	public Object findAll() {
		 String query="select * from member  ";  
			return  jdbcTemplate.query(query,new MemberMapper());
	}


	 public void deleteById(Long id){
	   String query="delete from member where id='"+id+"' ";  
	   jdbcTemplate.update(query);  
		
	}

	@Override
	public Member findById(Long id) {
		 String query="select * from member where id=?";  
			return jdbcTemplate.queryForObject(query,new Object[]{id},new MemberMapper());  
			 
	}

	@Override
	public Member save(Member member) {
		String query="insert into member (id, firstName, lastName, address, phoneNo ,memberId, memberType, memberAge, password, emailID) values(  '" +member.getId() +"','"+member.getFirstName()+"','"+member.getLastName()+"','"+member.getAddress() +"','"+member.getPhoneNo() +"','"+member.getMemberId() +"','"+member.getMemberType() +"','"+member.getMemberAge() +"','"+member.getPassword() +"','"+member.getEmailID() +"')";  
		   jdbcTemplate.update(query);  
		   return member;
	}

	@Override
	public Object loginMember(String emailID, String password) {
		String query="select * from member where emailID='" + emailID + "' and password='" + password + "'";
		return jdbcTemplate.query(query, new MemberMapper());
	}

	@Override
	public void updateMember(Member member) {
		String query="UPDATE member SET id= '" +member.getId() +"' , firstName= '" +member.getFirstName() +"', lastName= '" +member.getLastName() +"', address= '" +member.getAddress() +"', phoneNo= '" +member.getPhoneNo() +"', memberId= '" +member.getMemberId()+"', memberType= '" +member.getMemberType()+"', memberAge= '" +member.getMemberAge()+"'WHERE id="+member.getId()+"";
		jdbcTemplate.update(query); 
		
	}
	@Override
	public void updatepassMember(Member member) {
		System.out.print(member.getPassword());
		String query="UPDATE member SET id= '" +member.getId() +"' , firstName= '" +member.getFirstName() +"', lastName= '" +member.getLastName() +"', address= '" +member.getAddress() +"', phoneNo= '" +member.getPhoneNo() +"', memberId= '" +member.getMemberId()+"', memberType= '" +member.getMemberType()+"', memberAge= '" +member.getMemberAge()+"', password= '" +member.getPassword()+"', emailID= '" +member.getEmailID()+"'WHERE id="+member.getId()+"";
		jdbcTemplate.update(query); 
		
	}
		 
}




