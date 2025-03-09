package com.example.TestProiectBackend.Model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
@Table(name="masina")

public class Masina {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long idMasina;
    private String marca;
    private String model;
    private Integer an;
    private Float motorizare;
    private Float pret;
    private Long idTranzactie;
    private String imagineCale;
    public enum StareVanzare {
        DA,
        NU
    }
    @Enumerated(EnumType.STRING)
    @Column(columnDefinition = "ENUM('DA', 'NU') DEFAULT 'NU'")
    private StareVanzare vandut;

    public StareVanzare getVandut() {
        return vandut;
    }

    public void setVandut(StareVanzare vandut) {
        this.vandut = vandut;
    }

    public Long getIdMasina() {
        return idMasina;
    }

    public void setIdMasina(Long idMasina) {
        this.idMasina = idMasina;
    }

    public String getMarca() {
        return marca;
    }

    public void setMarca(String marca) {
        this.marca = marca;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public Integer getAn() {
        return an;
    }

    public void setAn(Integer an) {
        this.an = an;
    }

    public Float getMotorizare() {
        return motorizare;
    }

    public void setMotorizare(Float motorizare) {
        this.motorizare = motorizare;
    }

    public Float getPret() {
        return pret;
    }

    public void setPret(Float pret) {
        this.pret = pret;
    }

    public Long getIdTranzactie() {
        return idTranzactie;
    }

    public void setIdTranzactie(Long idTranzactie) {
        this.idTranzactie = idTranzactie;
    }

    public String getImagineCale() {
        return imagineCale;
    }

    public void setImagineCale(String imagineCale) {
        this.imagineCale = imagineCale;
    }




    public Masina(String marca, Integer an, Float motorizare, Float pret) {
        this.marca = marca;
        this.an = an;
        this.motorizare = motorizare;
        this.pret = pret;
    }
}
