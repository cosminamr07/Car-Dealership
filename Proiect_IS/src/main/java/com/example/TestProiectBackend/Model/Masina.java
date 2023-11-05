package com.example.TestProiectBackend.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
@Table(name="masina")
public class Masina {
    @Id
    private Long idMasina;
    private String marca;
    private String model;
    private Integer an;
    private Float motorizare;
    private Float pret;
    private Long id_tranzactie;

}
