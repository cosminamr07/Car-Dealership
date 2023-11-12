package com.example.TestProiectBackend.Service.Implementation;

import com.example.TestProiectBackend.Model.Masina;
import com.example.TestProiectBackend.Repository.MasinaRepository;
import com.example.TestProiectBackend.Service.MasinaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MasinaServiceImplementation implements MasinaService {
    @Autowired
    private MasinaRepository masinaRepository;

    @Override
    public Masina findFirstByIdMasina(Long id) {
        return masinaRepository.findFirstByIdMasina(id);
    }

    public void insert(Masina masina) {
        masinaRepository.save(masina);
    }

    public void update(Masina masina) {
        masinaRepository.save(masina);
    }

    public void delete(Long id) {
        masinaRepository.deleteById(id);
    }

    public List<Masina> getAllMasini() {
        return (List<Masina>) masinaRepository.findAll();
    }
}
