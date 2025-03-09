package com.example.TestProiectBackend.Repository;

import com.example.TestProiectBackend.Model.Masina;
import com.example.TestProiectBackend.Model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository

public interface MasinaRepository extends JpaRepository<Masina, Long> {

    Masina findFirstByIdMasina (Long id);
    Masina findByIdMasina(Long id);

    List<Masina> findByMarcaAndAnAndMotorizareAndPret(String marca, Integer an, Float motorizare, Float pret);

//    List<Masina>

}
