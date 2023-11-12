package com.example.TestProiectBackend.Repository;

import com.example.TestProiectBackend.Model.Angajat;
import com.example.TestProiectBackend.Model.Client;
import com.example.TestProiectBackend.Model.Masina;
import org.springframework.data.repository.CrudRepository;

public interface AngajatRepository extends CrudRepository<Angajat,Long> {

    Angajat findFirstByIdAngajat(Long id);

}
