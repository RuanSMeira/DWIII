package br.gov.sp.cps.media.controller;
import br.gov.sp.cps.media.model.Media;
import org.springframework.ui.Model;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class MainController {
    @GetMapping("/")
    public String index() {
        return "index";
    }
    @GetMapping("/formMedia")
    public String formMedia(Model model) {
        model.addAttribute("media", new Media());
        return "formMedia";

    }

    @PostMapping("/resultadoMedia")
    public String resultadoMedia(@ModelAttribute("media") Media media, Model model) {
        model.addAttribute("media", media);
        return "resultadoMedia";
    }
}
