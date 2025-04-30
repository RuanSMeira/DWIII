package br.gov.sp.cps.diadema.projetoestacionamento.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ProjetoEstacionamentoController {
    @GetMapping("/")
    public String index() {
        return "index";
    }
}
