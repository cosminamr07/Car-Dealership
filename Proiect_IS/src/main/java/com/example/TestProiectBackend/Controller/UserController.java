package com.example.TestProiectBackend.Controller;

import com.example.TestProiectBackend.Model.User;
import com.example.TestProiectBackend.Service.Implementation.UserServiceImplementation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("User")
public class UserController {

    @Autowired
    private UserServiceImplementation userServiceImplementation;

    @GetMapping("/ReadData")
    public String getData() {
        return "test";
    }

    @PostMapping("/Insert")
    public void insert(@RequestBody User user) {
        userServiceImplementation.insert(user);
    }

    @PostMapping("/Update")
    public void update(@RequestBody User user) {
        userServiceImplementation.update(user);
    }
    @PostMapping("/GetEmail")
    public ResponseEntity<String> getEmail(@RequestBody Long id) {
        String email = userServiceImplementation.getEmail(id);
        return ResponseEntity.status(HttpStatus.OK).body(email);
    }


    @PostMapping("/GetById")
    public ResponseEntity<User> readById(@RequestBody Long id) {
        User user = userServiceImplementation.findFirstByIdUser(id);
        return ResponseEntity.status(HttpStatus.OK).body(user);
    }
}
// Proiectul are in vedere o aplcatie unde clientul se poate inregistra, primeste acces si poate cauta masini in functie de mai multe criterii(an,marca,buget etc)
//  Daca un client se hotaraste si doreste sa cumpere o masina, va fi ajutat de un angajat si se realizeaza tranzactia
//Ca si functionalitate, vom avea ca si useri: client, angajat, admin, iar fiecare va avea interfata diferita( clientul poate doar sa caute masini, angajatul poate sa vada
// vanzarile si tranzactiile, adminul poate adauga masini, angajati)
