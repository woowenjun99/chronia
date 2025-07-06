package com.chronia.app.model.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;

@Data
@NoArgsConstructor
public class CreateUserDTO {
    @Email
    @NotNull
    @NotEmpty
    private String email;

    @NotNull
    @NotEmpty
    private String password;
}
