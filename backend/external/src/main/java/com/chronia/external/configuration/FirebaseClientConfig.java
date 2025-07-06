package com.chronia.external.configuration;

import com.chronia.external.service.FirebaseClient;
import com.chronia.external.service.impl.FirebaseClientImpl;

import com.google.auth.oauth2.GoogleCredentials;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;
import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.messaging.FirebaseMessaging;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.io.InputStream;

@Configuration
public class FirebaseClientConfig {
    @Value("${firebaseServiceAccount}")
    private String serviceAccount;

    @Bean
    public FirebaseClient firebaseClient() throws IOException {
        InputStream serviceAccount = new ByteArrayInputStream(this.serviceAccount.getBytes());
        GoogleCredentials googleCredentials = GoogleCredentials.fromStream(serviceAccount);
        FirebaseOptions firebaseOptions = FirebaseOptions.builder().setCredentials(googleCredentials).build();
        FirebaseApp firebaseApp = FirebaseApp.initializeApp(firebaseOptions);
        FirebaseAuth firebaseAuth = FirebaseAuth.getInstance(firebaseApp);
        FirebaseMessaging firebaseMessaging = FirebaseMessaging.getInstance(firebaseApp);
        return new FirebaseClientImpl(firebaseMessaging, firebaseAuth);
    }
}
