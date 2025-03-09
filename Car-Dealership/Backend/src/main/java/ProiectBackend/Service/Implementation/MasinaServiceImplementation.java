package com.example.TestProiectBackend.Service.Implementation;

import com.example.TestProiectBackend.Model.Masina;
import com.example.TestProiectBackend.Model.User;
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
        return findFirstByIdMasina(id);
    }

    @Override
    public Masina findMasinaById(Long id) {
        return masinaRepository.findByIdMasina(id);
    }
    @Override
    public List<Masina> searchMasini(Masina masina) {
        // Implement your search logic based on the provided criteria
        String marca = masina.getMarca();
        Integer an = masina.getAn();
        Float motorizare = masina.getMotorizare();
        Float pret = masina.getPret();
        System.out.println(marca+" "+an+" "+motorizare);
        // You can customize this query based on your database model and structure
        return masinaRepository.findByMarcaAndAnAndMotorizareAndPret(marca, an, motorizare, pret);

    }


    public void insert(Masina masina) {
        masinaRepository.save(masina);
    }

    public void update(Masina masina) {
        masinaRepository.save(masina);
    }

    public void delete(Masina masina) {
        masinaRepository.delete(masina);
    }

    public List<Masina> getAllMasini() {
        return (List<Masina>) masinaRepository.findAll();
    }
}
