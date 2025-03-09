package com.example.TestProiectBackend.Service.Implementation;

import com.example.TestProiectBackend.Model.Tranzactie;
import com.example.TestProiectBackend.Repository.TranzactieRepository;
import com.example.TestProiectBackend.Service.TranzactieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TranzactieServiceImplementation implements TranzactieService {
    @Autowired
    private TranzactieRepository tranzactieRepository;

    @Override
    public Tranzactie findFirstByIdTranzactie(Long id) {
        return tranzactieRepository.findFirstByIdTranzactie(id);
    }

    public void insert(Tranzactie tranzactie) {
        tranzactieRepository.save(tranzactie);
    }

    public void update(Tranzactie tranzactie) {
        tranzactieRepository.save(tranzactie);
    }

    public void delete(Long id) {
        tranzactieRepository.deleteById(id);
    }

    public List<Tranzactie> getAllTranzactii() {
        return (List<Tranzactie>) tranzactieRepository.findAll();
    }
}
