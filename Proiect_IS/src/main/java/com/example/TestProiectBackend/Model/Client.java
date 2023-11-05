package com.example.TestProiectBackend.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
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
    private String nume;
    private String nr_telefon;
    private String adresa;
  /*  @OneToMany
    private Masina masini;*/
}
