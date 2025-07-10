package com.chronia.persistence.repository;

import com.chronia.persistence.mappers.UserEntityMapper;
import com.chronia.persistence.models.UserEntity;
import com.chronia.persistence.models.UserEntityExample;

import org.springframework.stereotype.Repository;

import jakarta.annotation.Resource;

@Repository
public class UserRepository {
    @Resource
    private UserEntityMapper userEntityMapper;

    /**
     * Given an email, we check if the user already exist in the database.
     *
     * @param email The email to check for
     * @return True if the email is already in use, otherwise return false
     */
    public boolean checkIfUserWithEmailExist(String email) {
        UserEntityExample example = new UserEntityExample();
        example.createCriteria().andEmailEqualTo(email);
        return userEntityMapper.countByExample(example) != 0;
    }

    /**
     * Create a user record in the database
     *
     * @param user The user to be added
     */
    public void createUser(UserEntity user) {
        userEntityMapper.insertSelective(user);
    }
}
