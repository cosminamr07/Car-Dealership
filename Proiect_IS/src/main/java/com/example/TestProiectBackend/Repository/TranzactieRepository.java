package com.example.TestProiectBackend.Repository;

import com.example.TestProiectBackend.Model.Tranzactie;
import com.example.TestProiectBackend.Model.Masina;
import org.springframework.data.repository.CrudRepository;

public interface TranzactieRepository extends CrudRepository<Tranzactie,Long> {

    Tranzactie findFirstByIdTranzactie(Long id);

}
