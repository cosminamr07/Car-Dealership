package com.example.TestProiectBackend.Model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
@Table(name="client")
public class Client {
    @Id
    private Long idClient;
    private String numeClient;
    private String nrTelefon;
    private String adresa;

}