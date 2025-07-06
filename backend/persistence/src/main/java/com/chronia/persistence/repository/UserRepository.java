package com.chronia.persistence.repository;

import com.chronia.persistence.mappers.UserMapper;
import com.chronia.persistence.models.User;
import com.chronia.persistence.models.UserExample;

import org.springframework.stereotype.Repository;

import jakarta.annotation.Resource;

@Repository
public class UserRepository {
    @Resource
    private UserMapper userMapper;

    /**
     * Given an email, we check if the user already exist in the database.
     *
     * @param email The email to check for
     * @return True if the email is already in use, otherwise return false
     */
    public boolean checkIfUserWithEmailExist(String email) {
        UserExample example = new UserExample();
        example.createCriteria().andEmailEqualTo(email);
        return userMapper.countByExample(example) != 0;
    }

    /**
     * Create a user record in the database
     *
     * @param user The user to be added
     */
    public void createUser(User user) {
        userMapper.insertSelective(user);
    }
}
