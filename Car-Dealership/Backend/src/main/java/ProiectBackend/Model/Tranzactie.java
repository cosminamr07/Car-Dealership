package com.example.TestProiectBackend.Model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
@Table(name="tranzactie")
public class Tranzactie {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)

    private Long idTranzactie;
    private String masina;
    private Long idClient;
    private Long idAngajat;
    private Long idMasina;

    private String numeClient;
    private Float pretTranzactie;
    private String numeAngajat;


    @ManyToOne
    @JoinColumn(name = "idClient", insertable = false, updatable = false)
    private Client client;

    @ManyToOne
    @JoinColumn(name = "idAngajat", insertable = false, updatable = false)
    private Angajat angajat;

    public Long getIdMasina() {
        return idMasina;
    }

    public void setIdMasina(Long idMasina) {
        this.idMasina = idMasina;
    }

    @OneToOne
    @JoinColumn(name = "idMasina", insertable = false, updatable = false)
    private Masina Masina;

    public void setMasina(com.example.TestProiectBackend.Model.Masina masina) {
        Masina = masina;
    }

    public long getIdTranzactie() {
        return idTranzactie;
    }

    public void setIdTranzactie(long idTranzactie) {
        this.idTranzactie = idTranzactie;
    }

    public String getNumeClient() {
        return numeClient;
    }

    public void setNumeClient(String numeClient) {
        this.numeClient = numeClient;
    }

    public Long getIdClient() {
        return idClient;
    }

    public void setIdClient(Long idClient) {
        this.idClient = idClient;
    }

    public void setIdTranzactie(Long idTranzactie) {
        this.idTranzactie = idTranzactie;
    }

    public String getMasina() {
        return masina;
    }

    public void setMasina(String masina) {
        this.masina = masina;
    }

    public Client getClient() {
        return client;
    }

    public void setClient(Client client) {
        this.client = client;
    }

    public Angajat getAngajat() {
        return angajat;
    }

    public void setAngajat(Angajat angajat) {
        this.angajat = angajat;
    }

    public Long getIdAngajat() {
        return idAngajat;
    }

    public void setIdAngajat(Long idAngajat) {
        this.idAngajat = idAngajat;
    }

    public Float getPretTranzactie() {
        return pretTranzactie;
    }

    public void setPretTranzactie(Float pretTranzactie) {
        this.pretTranzactie = pretTranzactie;
    }

    public String getNumeAngajat() {
        return numeAngajat;
    }

    public void setNumeAngajat(String numeAngajat) {
        this.numeAngajat = numeAngajat;
    }


}
