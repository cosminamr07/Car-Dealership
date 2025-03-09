package com.example.TestProiectBackend.Model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
@Table(name="user")
public class User {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Long idUser;
    private String email;
    private String password;
    private String adresa;
    private String nrTelefon;
    private String fullName;
    private String userType;

//    @OneToOne(mappedBy = "user")
//    private UserLink userLink;
    public Long getIdUser() {
        return idUser;
    }

    public String getEmail() {
        return email;
    }

    public String getPassword() {
        return password;
    }

    public String getAdresa() {
        return adresa;
    }

    public String getNrTelefon() {
        return nrTelefon;
    }

    public String getFullName() {
        return fullName;
    }

    public String getUserType() {
        return userType;
    }
}
