package com.chronia.external.model;

public class AuthenticatedUser {
    private final String uid;

    public AuthenticatedUser(String userId) {
        this.uid = userId;
    }

    public String getUid() {
        return this.uid;
    }
}
