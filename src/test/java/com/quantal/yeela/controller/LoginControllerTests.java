package com.quantal.yeela.controller;

/**
 * Created by dman on 01/07/15.
 */

import com.quantal.yeela.appobjects.response.LoginResponse;
import com.quantal.yeela.appobjects.user.User;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.runners.MockitoJUnitRunner;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.client.MockRestServiceServer;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.context.WebApplicationContext;

import static org.springframework.test.web.client.match.MockRestRequestMatchers.*;
import static org.springframework.test.web.client.response.MockRestResponseCreators.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;

//UNCOMMENT BELOW FOR INTEGRATION TESTS
/*@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration("file:src/main/webapp/WEB-INF/yeela-dispatcher-servlet.xml")
@WebAppConfiguration*/
//USE MockitoJUnitRunner For  traditional JUnit Style Test
@RunWith(MockitoJUnitRunner.class)
public class LoginControllerTests {
    private MockMvc mockMvc;
    private RestTemplate restTemplate;
    private MockRestServiceServer mockServer ;
    //@Autowired
    //private WebApplicationContext webApplicationContext;

    private LoginController loginCntrllr ;


    @Before
    public  void setUp(){
       // mockMvc = MockMvcBuilders.standaloneSetup(new LoginController()).build();
        loginCntrllr = new LoginController();
        mockMvc = MockMvcBuilders.standaloneSetup(loginCntrllr).setMessageConverters(new MappingJackson2HttpMessageConverter()).build();
        //mockMvc = MockMvcBuilders.webAppContextSetup(webApplicationContext).build();
        /**
         mockMvc = MockMvcBuilders.standaloneSetup(loginCntrllr)
         defaultRequest(get("/").contextPath("/yeela")
         .accept(MediaType.AÅPPLICATION_JSON)).build();
        **/
        restTemplate = new RestTemplate();
        mockServer = MockRestServiceServer.createServer(restTemplate);

    }

    @Test
    public void whenLoginRequestedThenReturnNewLoginReponseObject() throws Exception {

        User user = new User("quophyie", "");
        //mockServer.expect(requestTo("/greeting")).andRespo    nd(withSuccess(jsonPath("$.User.username").value("Lee"),MediaType.APPLICATION_JSON));


            Object res = loginCntrllr.login("Basic cXVvcGh5aWU6cGFzc3dvcmQx");
            mockMvc.perform(get("/login/").header("Authorization", "Basic cXVvcGh5aWU6cGFzc3dvcmQx")).andExpect(jsonPath("$.User.username").value("quophyie"));


    }

    @Test
    public void whenRequestIsNotRootOfControllerReturnView() throws Exception {
        mockMvc.perform(get("/login/loggedInUser/"));
    }
}
