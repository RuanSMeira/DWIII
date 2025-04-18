package br.gov.sp.cps.springInitializr.controller;


import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/")

public class HomeController {
    @GetMapping("/")
    public String index() {
        return "index";
    }

    @GetMapping("/saudacao/{nome}")
    public String saudacao(@PathVariable String nome, ModelMap model) {
        model.addAttribute("nome", nome);
        return "saudacao";
    }

    @GetMapping("/home")
    public String home(ModelMap model) {
        model.addAttribute("curso", "Desenvolvimento Multi Plataforma");
        return "home";
    }
}
