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
    private String fullName;
    public enum UserType{CLIENT,ANGAJAT,ADMIN};
    private UserType  userType;
}
