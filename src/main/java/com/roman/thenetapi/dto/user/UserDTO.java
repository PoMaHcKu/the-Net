package com.roman.thenetapi.dto.user;

import com.roman.thenetapi.dto.AbstractDTO;
import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(callSuper = true)
public class UserDTO extends AbstractDTO {

    private String login;
    private String email;

}
