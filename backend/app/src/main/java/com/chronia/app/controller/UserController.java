package com.chronia.app.controller;

import com.chronia.app.model.ChroniaException;
import com.chronia.app.model.dto.CreateUserDTO;
import com.chronia.app.service.UserService;

import lombok.AllArgsConstructor;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import jakarta.validation.Valid;

@AllArgsConstructor
@RestController
@RequestMapping("/users")
public class UserController {
    private final UserService userService;

    @PostMapping("/register")
    public void createAccount(@Valid @RequestBody CreateUserDTO request) throws ChroniaException {
        userService.createUser(request);
    }
}
