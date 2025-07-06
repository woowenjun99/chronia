package com.chronia.app.service.impl;

import com.chronia.app.model.ChroniaException;
import com.chronia.app.model.dto.CreateUserDTO;
import com.chronia.app.service.UserService;
import com.chronia.external.model.AuthenticatedUser;
import com.chronia.external.service.FirebaseClient;
import com.chronia.persistence.repository.UserRepository;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;

@ExtendWith(MockitoExtension.class)
public class UserServiceTest {
    @Mock
    private FirebaseClient firebaseClient;

    @Mock
    private UserRepository userRepository;

    @Test
    public void createUser_emailExist_shouldThrow() {
        // Arrange
        CreateUserDTO request = new CreateUserDTO();
        request.setEmail("abc@gmail.com");
        Mockito.when(userRepository.checkIfUserWithEmailExist("abc@gmail.com")).thenReturn(true);

        // Act
        UserService userService = new UserServiceImpl(firebaseClient, userRepository);
        Throwable exception = Assertions.assertThrows(ChroniaException.class, () -> userService.createUser(request));

        // Assert
        Assertions.assertEquals("Email already exists", exception.getMessage());
    }

    @Test
    public void createUser_emailNotExist_shouldNotThrow() {
        // Arrange
        CreateUserDTO request = new CreateUserDTO();
        request.setEmail("abc@gmail.com");
        Mockito.when(userRepository.checkIfUserWithEmailExist("abc@gmail.com")).thenReturn(false);
        Mockito.when(firebaseClient.createUser("abc@gmail.com", null)).thenReturn(new AuthenticatedUser("userId"));

        // Act
        UserService userService = new UserServiceImpl(firebaseClient, userRepository);
        Assertions.assertDoesNotThrow(() -> userService.createUser(request));

        // Assert
        Mockito.verify(userRepository, Mockito.times(1)).createUser(Mockito.any());
    }
}
