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
@Table(name="tranzactie")
public class Tranzactie {
    @Id
    private long idTranzactie;
    private String numeClient;
    private String idClient;
    private String idMasina;
    private String idAngajat;
}
