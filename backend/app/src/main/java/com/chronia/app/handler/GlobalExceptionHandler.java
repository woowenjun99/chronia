package com.chronia.app.handler;

import com.chronia.app.model.ChroniaException;
import com.chronia.app.model.ResponseWrapper;

import org.slf4j.MDC;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import jakarta.servlet.http.HttpServletRequest;
import static io.opentelemetry.instrumentation.api.incubator.log.LoggingContextConstants.TRACE_ID;

@RestControllerAdvice
public class GlobalExceptionHandler {
    @ExceptionHandler(ChroniaException.class)
    public ResponseWrapper handle(HttpServletRequest request, ChroniaException exception) {
        return new ResponseWrapper(
                null, false, exception.getMessage(), exception.getHttpStatusCode(), MDC.get(TRACE_ID));
    }

    @ExceptionHandler(Exception.class)
    public ResponseWrapper handle(HttpServletRequest req, Exception e) {
        return new ResponseWrapper(null, false, e.getMessage(), 500, MDC.get(TRACE_ID));
    }
}
