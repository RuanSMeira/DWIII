package br.gov.sp.cps.revisao.model;

public class Conversao {
    private Double valorDolar;
    private Double quantidade;

    public Double getValorDolar() {
        return valorDolar;
    }

    public void setValorDolar(Double valorDolar) {
        this.valorDolar = valorDolar;
    }

    public Double getQuantidade() {
        return quantidade;
    }

    public void setQuantidade(Double quantidade) {
        this.quantidade = quantidade;
    }

    public Double getValorConvertido() {
        if (valorDolar != null && quantidade != null) {
            return valorDolar * quantidade;
        }
        return 0.0;
    }
}
