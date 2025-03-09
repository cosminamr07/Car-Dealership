package com.example.TestProiectBackend.Model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
@Table(name = "user_link")
public class UserLink {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long idLink;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne
    @JoinColumn(name = "client_id")
    private Client client;

    @ManyToOne
    @JoinColumn(name = "angajat_id")
    private Angajat angajat;

    @ManyToOne
    @JoinColumn(name = "admin_id")
    private Admin admin;
}


