package com.quantal.yeela.appobjects.response;

import com.quantal.yeela.appobjects.user.User;

public class LoginResponse extends AbstractResponse {

	private User user;

	public LoginResponse(){
		super();
	}
	
	public LoginResponse(int code, String message){
		super(code, message);
	}
	
	public LoginResponse(int code, String message, User user){
		this(code, message);
		this.user = user;
	}
	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}
	
}
