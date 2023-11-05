package com.example.TestProiectBackend.Repository;

import com.example.TestProiectBackend.Model.Masina;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository

public interface MasinaRepository extends CrudRepository<Masina,Long> {

    Masina findFirstByIdMasina(Long id);
//    List<Masina>

}
