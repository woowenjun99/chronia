package com.chronia.app.util;

import com.chronia.app.model.ChroniaException;
import com.chronia.app.model.enums.ChroniaExceptionEnum;
import com.chronia.external.model.AuthenticatedUser;

public class ThreadLocalUser {
    private static ThreadLocal<AuthenticatedUser> user = new ThreadLocal<>();

    public static void set(AuthenticatedUser authenticatedUser) {
        user.set(authenticatedUser);
    }

    public static void clear() {
        user.remove();
    }

    public static AuthenticatedUser get() {
        return user.get();
    }

    public static AuthenticatedUser getAuthenticatedUser() throws ChroniaException {
        if (user.get() == null) {
            throw new ChroniaException(ChroniaExceptionEnum.UNAUTHORIZED);
        }
        return user.get();
    }
}
