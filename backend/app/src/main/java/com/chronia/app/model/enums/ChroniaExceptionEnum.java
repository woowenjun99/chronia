package com.chronia.app.model.enums;

import lombok.Getter;

@Getter
public enum ChroniaExceptionEnum {
    UNAUTHORIZED(401, "Please login"),
    CONFLICT(409, "%s already exists");

    private final String errorMessage;
    private final Integer httpStatusCode;

    ChroniaExceptionEnum(Integer httpStatusCode, String errorMessage) {
        this.errorMessage = errorMessage;
        this.httpStatusCode = httpStatusCode;
    }
}
