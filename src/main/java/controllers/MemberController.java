package controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import models.Member;
import service.MemberService;


@RestController
@RequestMapping("/member")
public class MemberController {
	Member member =new Member();

	@Autowired
    MemberService memberService;

	@RequestMapping("/all")
	public Object getAllMembers(){
	   return memberService.findAll();
		
	}
	
	@RequestMapping("/{id}")
	public Member getMember(@PathVariable("id") Long id) {
		return memberService.findById(id);
		
	}

	
	@RequestMapping(value = "/save", method = RequestMethod.PUT, consumes = MediaType.APPLICATION_JSON_VALUE)	  
	@ResponseBody
	public String addMember(@RequestBody Member member) {
		  String Id = "";
	    try {	    
	         memberService.save(member);
            Id = String.valueOf(member.getId());
	  }
	    catch (Exception ex) {
	      return  ex.toString();
	    }
    return  Id;
}
	@RequestMapping(value = "/delete/{id}", method = RequestMethod.DELETE, consumes = MediaType.APPLICATION_JSON_VALUE)	  
	@ResponseBody
	public String deleteByid(@PathVariable("id") Long id) {
	
		   try {	    
		       memberService.deleteById(id);
		   }
		    catch (Exception ex) {
		      return  ex.toString();
		    }
		   return  "ok";
	}
	
	@RequestMapping(value = "/login", method = RequestMethod.POST)	  
	@ResponseBody
	public Object loginMamber(@RequestParam(value="emailID" ) String emailID , @RequestParam(value="password" ) String password) {
		  String Id = "";
	    try {	    
	        return memberService.loginMember(emailID, password);
            
	  }
	    catch (Exception ex) {
	      return  ex.toString();
	    }
}


}
