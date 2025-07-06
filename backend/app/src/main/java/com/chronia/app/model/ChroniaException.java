package com.chronia.app.model;

import com.chronia.app.model.enums.ChroniaExceptionEnum;

import lombok.Data;

@Data
public class ChroniaException extends Exception {
    private final Integer httpStatusCode;

    public ChroniaException(ChroniaExceptionEnum exception, String... args) {
        super(String.format(exception.getErrorMessage(), args));
        httpStatusCode = exception.getHttpStatusCode();
    }
}