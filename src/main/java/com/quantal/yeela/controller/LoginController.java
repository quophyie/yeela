package com.quantal.yeela.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.quantal.yeela.appobjects.response.LoginResponse;
import com.quantal.yeela.appobjects.user.User;

/**
 * Created by dman on 27/06/15.
 */

@RestController
@RequestMapping("/login")
public class LoginController {

	@RequestMapping(value="", method=RequestMethod.GET)
    public LoginResponse login(@RequestHeader("Authorization") String authorisationHeader){
		User user = new User("quophyi", "");
    	return new LoginResponse(200, "User logged in succesfully", user);
    }
}
