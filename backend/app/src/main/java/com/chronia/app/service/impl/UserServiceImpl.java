package com.chronia.app.service.impl;

import com.chronia.app.model.ChroniaException;
import com.chronia.app.model.dto.CreateUserDTO;
import com.chronia.app.model.enums.ChroniaExceptionEnum;
import com.chronia.app.service.UserService;
import com.chronia.external.model.AuthenticatedUser;
import com.chronia.external.service.FirebaseClient;
import com.chronia.persistence.models.UserEntity;
import com.chronia.persistence.repository.UserRepository;

import lombok.AllArgsConstructor;

import org.springframework.stereotype.Service;

@AllArgsConstructor
@Service
public class UserServiceImpl implements UserService {
    private final FirebaseClient firebaseClient;

    private final UserRepository userRepository;

    @Override
    public void createUser(CreateUserDTO request) throws ChroniaException {
        boolean isEmailInUse = userRepository.checkIfUserWithEmailExist(request.getEmail());
        if (isEmailInUse) {
            throw new ChroniaException(ChroniaExceptionEnum.CONFLICT, "Email");
        }
        AuthenticatedUser authenticatedUser = firebaseClient.createUser(request.getEmail(), request.getPassword());
        UserEntity user = new UserEntity();
        user.setEmail(request.getEmail());
        user.setUid(authenticatedUser.getUid());
        userRepository.createUser(user);
    }
}
