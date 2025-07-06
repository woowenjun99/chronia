package com.chronia.app.model.enums;

import lombok.Getter;

@Getter
public enum ChroniaExceptionEnum {
    UNAUTHORIZED(401, "Please login");

    private final String errorMessage;
    private final Integer httpStatusCode;

    ChroniaExceptionEnum(Integer httpStatusCode, String errorMessage) {
        this.errorMessage = errorMessage;
        this.httpStatusCode = httpStatusCode;
    }
}
