package com.chronia.external.service.impl;

import com.chronia.external.model.AuthenticatedUser;
import com.chronia.external.service.FirebaseClient;

import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.auth.FirebaseAuthException;
import com.google.firebase.auth.FirebaseToken;
import com.google.firebase.auth.UserRecord;
import com.google.firebase.messaging.FirebaseMessaging;

public class FirebaseClientImpl implements FirebaseClient {
    private final FirebaseAuth firebaseAuth;

    private final FirebaseMessaging firebaseMessaging;

    public FirebaseClientImpl(FirebaseMessaging firebaseMessaging, FirebaseAuth firebaseAuth) {
        this.firebaseMessaging = firebaseMessaging;
        this.firebaseAuth = firebaseAuth;
    }

    @Override
    public void deleteUser(String userId) {
        try {
            firebaseAuth.deleteUser(userId);
        } catch (FirebaseAuthException e) {
            throw new RuntimeException(e.getMessage());
        }
    }

    @Override
    public AuthenticatedUser createUser(String email, String password) {
        try {
            UserRecord.CreateRequest request = new UserRecord.CreateRequest();
            request.setEmail(email);
            request.setPassword(password);
            UserRecord user = firebaseAuth.createUser(request);
            return new AuthenticatedUser(user.getUid());
        } catch(FirebaseAuthException e) {
            throw new RuntimeException(e.getMessage());
        }
    }

    @Override
    public void updateUser(String userId, String email) {
        try {
            UserRecord.UpdateRequest request = new UserRecord.UpdateRequest(userId);
            request.setEmail(email);
            firebaseAuth.updateUser(request);
        } catch (FirebaseAuthException e) {
            throw new RuntimeException(e.getMessage());
        }
    }

    @Override
    public AuthenticatedUser getUser(String jwt) {
        try {
            FirebaseToken token = firebaseAuth.verifyIdToken(jwt, true);
            return new AuthenticatedUser(token.getUid());
        } catch(FirebaseAuthException e) {
            throw new RuntimeException(e.getMessage());
        }
    }
}
