package com.quantal.yeela.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.Base64;

import com.quantal.yeela.appobjects.response.LoginResponse;
import com.quantal.yeela.appobjects.user.User;

/**
 * Created by dman on 27/06/15.
 */

@RestController
@RequestMapping("login")
public class LoginController {

	@RequestMapping(value="/", method=RequestMethod.GET)
    public LoginResponse login(@RequestHeader("Authorization") String authorisationHeader){

		String splitAuthHeaher = authorisationHeader.split(" ")[1];
		Base64.Decoder decoder = Base64.getDecoder();
		byte[] decoded = decoder.decode(splitAuthHeaher) ;
		String decodedAsString = new String(decoded);

		User User = new User("quophyie", "");
    	return new LoginResponse(200, "User logged in succesfully", User);
    }

	@RequestMapping(value="loggedInUser", method = RequestMethod.GET)
	public LoginResponse getLoggedInUser(){
		return new LoginResponse(200, "User logged in succesfully", null);

	}

}
