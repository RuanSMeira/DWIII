package br.gov.sp.cps.media.model;

public class Media {
    private Double p1;
    private Double p2;

    public Double getP1() {
        return p1;
    }
    public void setP1(Double p1) {
        this.p1 = p1;
    }

    public Double getP2() {
        return p2;
    }
    public void setP2(Double p2) {
        this.p2 = p2;
    }

    public Double getValorMedia() {
        if(p1 != null || p2 != null){
            return (p1 + p2)/2;
        }
        return 0.0;
    }
}
