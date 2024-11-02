package com.example.welcome;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class WelcomeSpringbootApplication {

    public static void main(String[] args) {
        SpringApplication.run(WelcomeSpringbootApplication.class, args);
    }

    @GetMapping("/print")
    public String welcomeMessage() {
        return "Welcome to Spring Boot";
    }
}
