package com.example.TestProiectBackend.Model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
@Table(name="angajat")
public class Angajat {
    @Id
    private Long idAngajat;
    private String numeAngajat;
    private Long idTranzactie;
    private Float comisionVanzare;
    private Integer nrVanzari;
}
