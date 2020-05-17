package com.roman.thenetapi.controller;

import com.roman.thenetapi.dto.user.UserDTO;
import com.roman.thenetapi.dto.user.UserMapperDto;
import com.roman.thenetapi.model.User;
import com.roman.thenetapi.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService userService;
    @Autowired
    private UserMapperDto userMapper;

    @GetMapping("{id}")
    public UserDTO getUserById(@PathVariable String id) {
        User user = userService.getUserById(Integer.parseInt(id));
        return userMapper.toDto(user);
    }

}
