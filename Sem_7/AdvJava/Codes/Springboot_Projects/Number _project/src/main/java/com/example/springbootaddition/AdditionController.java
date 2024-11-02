package com.example.springbootaddition;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class AdditionController {

    @GetMapping("/")
    public String showForm() {
        return "num";
    }

    @PostMapping("/square")
    public String squareNumbers(@RequestParam("num1") int num1,
                             Model model) {
        int square = num1*num1;
        model.addAttribute("square", square);
        return "result";
    }
}
