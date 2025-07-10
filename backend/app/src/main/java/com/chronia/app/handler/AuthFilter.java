package com.chronia.app.handler;

import com.chronia.app.model.ResponseWrapper;
import com.chronia.app.util.ThreadLocalUser;
import com.chronia.external.model.AuthenticatedUser;
import com.chronia.external.service.FirebaseClient;

import com.fasterxml.jackson.databind.ObjectMapper;

import lombok.extern.log4j.Log4j2;

import org.slf4j.MDC;
import org.springframework.core.annotation.Order;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import static io.opentelemetry.instrumentation.api.incubator.log.LoggingContextConstants.TRACE_ID;

@Component
@Order(2)
@Log4j2
public class AuthFilter extends OncePerRequestFilter {
    private final FirebaseClient firebaseClient;

    public AuthFilter(FirebaseClient firebaseClient) {
        this.firebaseClient = firebaseClient;
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
            throws ServletException, IOException {
        try {
            String jwt = request.getHeader("Authorization");
            AuthenticatedUser user = firebaseClient.getUser(jwt);
            ThreadLocalUser.set(user);
            filterChain.doFilter(request, response);
        } catch (Exception e) {
            log.error("Error: {}", e.getMessage());
            ObjectMapper mapper = new ObjectMapper();
            response.setContentType(MediaType.APPLICATION_JSON_VALUE);
            ResponseWrapper wrapper = new ResponseWrapper<>(null, false, e.getMessage(), 401, MDC.get(TRACE_ID));
            mapper.writeValue(response.getWriter(), wrapper);
        }
    }

    @Override
    protected boolean shouldNotFilter(HttpServletRequest request) {
        String uri = request.getRequestURI();
        boolean isRegistrationEndpoint = "/users/register".equalsIgnoreCase(uri);
        boolean isGetAllBlogsEndpoint = uri.equalsIgnoreCase("/blogs") && request.getMethod().equalsIgnoreCase("get");
        boolean isPreflight = "options".equalsIgnoreCase(request.getMethod());
        return isRegistrationEndpoint
                || isPreflight
                || isGetAllBlogsEndpoint;
    }
}
