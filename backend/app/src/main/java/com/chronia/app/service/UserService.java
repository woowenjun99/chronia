package com.chronia.app.service;

import com.chronia.app.model.ChroniaException;
import com.chronia.app.model.dto.CreateUserDTO;

public interface UserService {
    /**
     * Create a user with email and password
     *
     * @param request Creates a user with email and password
     * @throws ChroniaException If the email is already in used
     */
    void createUser(CreateUserDTO request) throws ChroniaException;
}
