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
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long idAngajat;
    private String numeAngajat;

}
