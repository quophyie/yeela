package com.quantal.yeela.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

/**
 * Created by dman on 26/06/15.
 */
@Controller
@RequestMapping("dialog")
public class DialogController {
    @RequestMapping(method = RequestMethod.GET)
    public String defaultDialog(){
        return "defaultDialog" ;
    }
}
