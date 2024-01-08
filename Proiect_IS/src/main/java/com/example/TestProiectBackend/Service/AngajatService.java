package com.example.TestProiectBackend.Service;

import com.example.TestProiectBackend.Model.Angajat;

public interface AngajatService {
    Angajat getAngajatByUserId(Long id);

    Angajat getAngajatAleatoriu();
}
