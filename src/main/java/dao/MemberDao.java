package dao;

import models.Member;
public interface MemberDao {
	 public Object findAll();
	 public Member findById(Long id);
	 public Member save(Member member);
	 public void deleteById(Long id);
	 public Long loginMember(String emailID,String password);

}
