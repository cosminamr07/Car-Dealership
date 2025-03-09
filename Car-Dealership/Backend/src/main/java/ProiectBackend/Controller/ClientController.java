package com.example.TestProiectBackend.Controller;

import com.example.TestProiectBackend.Model.Client;
import com.example.TestProiectBackend.Service.Implementation.ClientServiceImplementation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("Client")

public class ClientController {
    @Autowired
    private ClientServiceImplementation clientServiceImplementation;

    @GetMapping("/ReadData")
    public String getData(){
        return "mesaj";
    }
    @PostMapping("/Insert")
    public void insert(@RequestBody Client client)
    {
        clientServiceImplementation.Insert(client);
    }
    @PostMapping("/Update")
    public void update(@RequestBody Client client)
    {

        clientServiceImplementation.Insert(client);
    }
    @PostMapping("/Delete")
    public void delete(@RequestBody Client client)
    {
        clientServiceImplementation.Delete(client);
    }
    @PostMapping("/GetById")
    public ResponseEntity ReadByID(@RequestBody Long id)
    {
        Client client = clientServiceImplementation.getClientByUserId(id);
        return ResponseEntity.status(HttpStatus.OK).body(client);
    }


}
