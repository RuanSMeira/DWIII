package br.gov.sp.cps.revisao.controller;

import br.gov.sp.cps.revisao.model.Conversao;
import br.gov.sp.cps.revisao.model.Pessoa;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
public class MainController {

    /* OPÇAO 1 - Vai direto para formPessoa:
    @GetMapping("/")
    public String index() {
        return "redirect:/formPessoa";
    } */

    // OPÇÃO 2 - Chama uma pagina principal index
    @GetMapping("/")
    public String index() {
        return "index";
    }

    @GetMapping("/formPessoa")
    public String formPessoa(Model model) {
        model.addAttribute("pessoa", new Pessoa());
        return "formPessoa";
    }

    @PostMapping("/resultadoPessoa")
    public String resultadoPessoa(@ModelAttribute Pessoa pessoa, Model model) {
        model.addAttribute("pessoa", pessoa);
        return "resultadoPessoa";
    }

    @GetMapping("/formConversao")
    public String formConversao(Model model) {
        model.addAttribute("conversao", new Conversao());
        return "formConversao";
    }

    @PostMapping("/resultadoConversao")
    public String resultadoConversao(@ModelAttribute Conversao conversao, Model model) {
        model.addAttribute("conversao", conversao);
        return "resultadoConversao";
    }
}
