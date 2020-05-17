package com.roman.thenetapi.dto.user;

import com.roman.thenetapi.model.User;
import com.sun.istack.NotNull;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class UserMapperDto {

    @Autowired
    private ModelMapper modelMapper;

    public User toEntity(@NotNull UserDTO userDto) {
        return modelMapper.map(userDto, User.class);
    }

    public UserDTO toDto(@NotNull User user) {
        return modelMapper.map(user, UserDTO.class);
    }
}
