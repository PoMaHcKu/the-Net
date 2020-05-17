package com.roman.thenetapi.service;

import com.roman.thenetapi.model.User;
import com.roman.thenetapi.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public User getUserById(int id) {
        return userRepository.getOne(id);
    }

    public User getUserByLogin(String login) {
        return userRepository.findByLogin(login);
    }
}
