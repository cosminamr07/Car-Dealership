package com.example.TestProiectBackend.Service.Implementation;

import com.example.TestProiectBackend.Model.Angajat;
import com.example.TestProiectBackend.Model.Client;
import com.example.TestProiectBackend.Repository.ClientRepository;
import com.example.TestProiectBackend.Service.ClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ClientServiceImplementation implements ClientService {
    @Autowired
    private ClientRepository clientRepository;
    @Override
    public Client getClientByUserId(Long id)
    {
        return clientRepository.findFirstByIdClient(id);
    }

    public void Insert(Client client) {
        clientRepository.save(client);
    }
    public void Update(Client client) {
        clientRepository.save(client);
    }
    public void Delete(Client client) {
        clientRepository.delete(client);
    }
    public List<Client> getAllClienti() {
        return (List<Client>) clientRepository.findAll();
    }

}
