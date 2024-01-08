package com.example.TestProiectBackend.Controller;

import com.example.TestProiectBackend.Model.Angajat;
import com.example.TestProiectBackend.Model.Masina;
import com.example.TestProiectBackend.Model.Tranzactie;
import com.example.TestProiectBackend.Service.Implementation.AngajatServiceImplementation;
import com.example.TestProiectBackend.Service.Implementation.MasinaServiceImplementation;
import com.example.TestProiectBackend.Service.Implementation.TranzactieServiceImplementation;
import com.example.TestProiectBackend.Service.MasinaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("Tranzactie")
public class TranzactieController {

    @Autowired
    private TranzactieServiceImplementation tranzactieServiceImplementation;
    @Autowired
    private AngajatServiceImplementation angajatServiceImplementation; // Adaugă serviciul pentru a accesa informații despre angajați


    @Autowired
    private MasinaServiceImplementation masinaServiceImplementation;
    @GetMapping("/ReadData")
    public String getData() {
        return "mesajTranzactie";
    }

    @PostMapping("/Insert")
    public void insert(@RequestBody Tranzactie tranzactie) {
        Angajat angajatAleatoriu = angajatServiceImplementation.getAngajatAleatoriu();

        Long idMasina = tranzactie.getIdMasina();
        Masina masina = masinaServiceImplementation.findMasinaById(idMasina);

        if (masina != null) {
            masina.setVandut(Masina.StareVanzare.DA);
            masinaServiceImplementation.update(masina);

            tranzactieServiceImplementation.insert(tranzactie);
        } else {
            System.out.println("Mașina nu există.");
        }
    }


    @PostMapping("/Update")
    public void update(@RequestBody Tranzactie tranzactie) {
        tranzactieServiceImplementation.update(tranzactie);
    }

    @PostMapping("/Delete")
    public void delete(@RequestBody Long id) {
        tranzactieServiceImplementation.delete(id);
    }

    @GetMapping("/FindAll")
    public List<Tranzactie> findAll() {
        return tranzactieServiceImplementation.getAllTranzactii();
    }

    @PostMapping("/GetById")
    public ResponseEntity readByID(@RequestBody Long id) {
        Tranzactie tranzactie = tranzactieServiceImplementation.findFirstByIdTranzactie(id);
        return ResponseEntity.status(HttpStatus.OK).body(tranzactie);
    }
}
