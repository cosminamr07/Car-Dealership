package com.example.TestProiectBackend.Service.Implementation;

import com.example.TestProiectBackend.Model.Angajat;
import com.example.TestProiectBackend.Repository.AngajatRepository;
import com.example.TestProiectBackend.Service.AngajatService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Random;

@Service
public class AngajatServiceImplementation implements AngajatService {
    @Autowired
    private AngajatRepository angajatRepository;



    @Override
   public Angajat getAngajatByUserId(Long id) {

        return angajatRepository.findFirstByIdAngajat(id);
    }


    @Override
    public Angajat getAngajatAleatoriu() {
        List<Angajat> angajati = getAllAngajati();

        if (!angajati.isEmpty()) {
            // Generează un index aleatoriu pentru a selecta un angajat din lista
            int indexAleatoriu = new Random().nextInt(angajati.size());

            // Returnează angajatul ales aleatoriu
            return angajati.get(indexAleatoriu);
        }

        return null; // sau aruncă o excepție / gestionează cazul în care nu există angajați
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
