package models;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

public class MemberMapper  implements RowMapper<Member> {
	 public Member mapRow(ResultSet rs, int rowNum) throws SQLException {
		 Member member = new Member();
		 member.setId(rs.getLong("id"));
		 member.setFirstName(rs.getString("firstName"));
		 member.setLastName(rs.getString("lastName"));
		 member.setAddress(rs.getString("address"));
		 member.setPhoneNo(rs.getLong("phoneNo")); 
		 member.setMemberId(rs.getLong("memberId"));
		 member.setMemberType(rs.getString("memberType"));
		 member.setMemberAge(rs.getLong("memberAge"));
		 member.setMemberAge(rs.getLong("emailID"));
		 member.setMemberAge(rs.getLong("password"));
		 return member;
	   }
}