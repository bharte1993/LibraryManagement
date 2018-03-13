package service;

import models.Member;

public interface MemberService {
	 public Object findAll();
	 public Member findById(Long id);
	 public Member save(Member member);
	 public void deleteById(Long id);
	 public Long loginMember(String emailID,String password);

}