package br.gov.sp.cps.Projeto_Spring_Initializr_IMC.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/")

public class IMCController {

    // Simulação de recebimento de Variaveis:
    String peso = "80";
    String altura = "1.70";


    // Converter pra Numerico
    double numPeso = Double.parseDouble(peso);
    double numAltura = Double.parseDouble(altura);

    // Calcular o IMC:
    double numIMC = numPeso/(numAltura*numAltura);

    // Transforma em String:
    String imc = String.format("%.2f", numIMC);

    @GetMapping("/imc")
    public String resultadoimc(ModelMap model) {
        model.addAttribute("imc", imc);
        return "imc";
    }
}
