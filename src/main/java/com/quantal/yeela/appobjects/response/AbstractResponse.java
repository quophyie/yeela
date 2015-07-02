package com.quantal.yeela.appobjects.response;

public abstract class AbstractResponse {

	private int code;
	private String message;
	
	public AbstractResponse(int code, String message){
		this.code = code;
		this.message = message;
	}
	
	public AbstractResponse() {
		// TODO Auto-generated constructor stub
	}

	public int getCode() {
		return code;
	}
	public void setCode(int code) {
		this.code = code;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	
}
