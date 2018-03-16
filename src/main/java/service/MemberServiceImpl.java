package service;

import org.springframework.beans.factory.annotation.Autowired;
import dao.MemberDao;
import models.Member;

public class MemberServiceImpl implements MemberService{
	  @Autowired
	   private MemberDao memberdao;
	
	public void setMemberdao(MemberDao memberdao) {
		this.memberdao = memberdao;
	}

	public Object findAll() {
		return memberdao.findAll();
	}

	public Member findById(Long id) {
		return memberdao.findById(id);
	}

	public Member save(Member member) {
		 memberdao.save(member);
		 return member;
	}

	 public void deleteById(Long id) {
		 memberdao.deleteById(id);
		
	}

	@Override
	public Object loginMember(String emailID, String password) {
		// TODO Auto-generated method stub
		return memberdao.loginMember( emailID, password);
	}

	@Override
	public void updateMember(Member member) {
		memberdao.updateMember(member);
		
	}
	@Override
	public void updatepassMember(Member member) {
		memberdao.updatepassMember(member);
		
	}


}
