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
        return "add";
    }

    @PostMapping("/add")
    public String addNumbers(@RequestParam("num1") int num1,
                             @RequestParam("num2") int num2,
                             Model model) {
        int sum = num1 + num2;
        model.addAttribute("sum", sum);
        int sub = num1 - num2;
        model.addAttribute("sub", sub);
        int ratio = num1 % num2;
        model.addAttribute("ratio",ratio);
        return "result";
    }
}
