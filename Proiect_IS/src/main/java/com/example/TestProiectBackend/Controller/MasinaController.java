package com.example.TestProiectBackend.Controller;

import com.example.TestProiectBackend.Model.Masina;
import com.example.TestProiectBackend.Service.Implementation.MasinaServiceImplementation;
import com.example.TestProiectBackend.Service.MasinaService;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.persistence.TypedQuery;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@CrossOrigin
@RequestMapping("Masina")
public class MasinaController {

    @Autowired
    private MasinaServiceImplementation masinaServiceImplementation;
    @PersistenceContext
    private EntityManager entityManager; // Inject the EntityManager


    @GetMapping("/ReadData")
    public String getData() {
        return "mesajMasina";
    }

    @PostMapping("/Insert")
    public void insert(@RequestBody Masina masina) {
        masinaServiceImplementation.insert(masina);
    }

    @PostMapping("/Update")
    public void update(@RequestBody Masina masina) {
        masinaServiceImplementation.update(masina);
    }

    @PostMapping("/Delete")
    public void delete(@RequestBody Masina masina) {
        masinaServiceImplementation.delete(masina);
    }

    @GetMapping("/FindAll")
    public List<Masina> findAll() {
        return masinaServiceImplementation.getAllMasini();
    }

    @GetMapping("/Search")
    public ResponseEntity<List<Masina>> searchCars(
            @RequestParam(name = "marca") String marca,
            @RequestParam(name = "an", required = false) Integer an,
            @RequestParam(name = "motorizare", required = false) Float motorizare,
            @RequestParam(name = "pret", required = false) Float pret) {

        String queryString = "SELECT m FROM Masina m WHERE m.marca=:marca ";

        if (an != null) {
            queryString += " AND m.an >= :an";
        }
        if (motorizare != null) {
            queryString += " AND m.motorizare = :motorizare";
        }
        if (pret != null) {
            queryString += " AND m.pret <= :pret";
        }

        TypedQuery<Masina> query = entityManager.createQuery(queryString, Masina.class);

        query.setParameter("marca", marca);
        if (an != null) {
            query.setParameter("an", an);
        }
        if (motorizare != null) {
            query.setParameter("motorizare", motorizare);
        }
        if (pret != null) {
            query.setParameter("pret", pret);
        }

        List<Masina> masinaList = query.getResultList().stream()
                .filter(masina -> masina.getVandut() != Masina.StareVanzare.DA)
                .collect(Collectors.toList());
        return ResponseEntity.status(HttpStatus.OK).body(masinaList);    }

    @GetMapping("/GetById")
    public Masina readByID(@RequestBody Long id) {
        Masina masina = masinaServiceImplementation.findMasinaById(id);
        return masina ;
    }
    @GetMapping("/GetAllMasini")
    public List<Masina> getAllMasini() {
        return masinaServiceImplementation.getAllMasini();
    }
}
