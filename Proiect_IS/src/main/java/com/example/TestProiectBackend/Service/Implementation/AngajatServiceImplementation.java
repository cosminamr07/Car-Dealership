package com.example.TestProiectBackend.Service.Implementation;

import com.example.TestProiectBackend.Model.Angajat;
import com.example.TestProiectBackend.Repository.AngajatRepository;
import com.example.TestProiectBackend.Service.AngajatService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AngajatServiceImplementation implements AngajatService {
    @Autowired
    private AngajatRepository angajatRepository;



    @Override
   public Angajat findFirstByIdAngajat(Long id) {

        return angajatRepository.findFirstByIdAngajat(id);
    }

    public void Insert(Angajat angajat) {
        angajatRepository.save(angajat);
    }

    public void Update(Angajat angajat) {
        angajatRepository.save(angajat);
    }

    public void Delete(Long id) {
        angajatRepository.deleteById(id);
    }
    public List<Angajat> getAllAngajati() {
        return (List<Angajat>) angajatRepository.findAll();
    }
}
