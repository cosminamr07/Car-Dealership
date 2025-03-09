package com.example.TestProiectBackend.Controller;

import com.example.TestProiectBackend.Model.Angajat;
import com.example.TestProiectBackend.Model.Client;
import com.example.TestProiectBackend.Service.Implementation.AngajatServiceImplementation;
import com.example.TestProiectBackend.Service.Implementation.ClientServiceImplementation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Random;

@RestController
@CrossOrigin
@RequestMapping("Angajat")

public class AngajatController {
    @Autowired
    private AngajatServiceImplementation angajatServiceImplementation;

    @GetMapping("/ReadData")
    public String getData(){
        return "mesajAngajat";
    }
    @PostMapping("/Insert")
    public void insert(@RequestBody Angajat angajat)
    {

        angajatServiceImplementation.Insert(angajat);
    }
    @PostMapping("/Update")
    public void update(@RequestBody Angajat angajat)
    {

        angajatServiceImplementation.Update(angajat);
    }
    @PostMapping("/Delete")
    public void delete(@RequestBody Long id) {
        angajatServiceImplementation.Delete(id);
    }
    @PostMapping("/FindAll")
    public void findAll(@RequestBody Long id) {
        angajatServiceImplementation.getAllAngajati();
    }
    @PostMapping("/GetById")
    public ResponseEntity ReadByID(@RequestBody Long id)
    {
        Angajat angajat = angajatServiceImplementation.getAngajatByUserId(id);
        return ResponseEntity.status(HttpStatus.OK).body(angajat);
    }

    @GetMapping("/Random")
    public Angajat getAngajatAleatoriu() {
        List<Angajat> angajati = angajatServiceImplementation.getAllAngajati();
        if (!angajati.isEmpty()) {
            int indexAleatoriu = new Random().nextInt(angajati.size());

            return angajati.get(indexAleatoriu);
        }

        return null;
    }

}
