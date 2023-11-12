package com.example.TestProiectBackend.Controller;

import com.example.TestProiectBackend.Model.Masina;
import com.example.TestProiectBackend.Service.Implementation.MasinaServiceImplementation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("Masina")
public class MasinaController {

    @Autowired
    private MasinaServiceImplementation masinaServiceImplementation;

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
    public void delete(@RequestBody Long id) {
        masinaServiceImplementation.delete(id);
    }

    @GetMapping("/FindAll")
    public List<Masina> findAll() {
        return masinaServiceImplementation.getAllMasini();
    }

    @PostMapping("/GetById")
    public ResponseEntity readByID(@RequestBody Long id) {
        Masina masina = masinaServiceImplementation.findFirstByIdMasina(id);
        return ResponseEntity.status(HttpStatus.OK).body(masina);
    }
}
