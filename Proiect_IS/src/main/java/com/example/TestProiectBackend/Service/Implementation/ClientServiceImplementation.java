package com.example.TestProiectBackend.Service.Implementation;

import com.example.TestProiectBackend.Model.Client;
import com.example.TestProiectBackend.Repository.ClientRepository;
import com.example.TestProiectBackend.Service.ClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ClientServiceImplementation implements ClientService {
    @Autowired
    private ClientRepository clientRepository;
    @Override
    public Client findFirstByIdClient(Long id)
    {
        return clientRepository.findFirstByIdClient(id);
    }

    public void Insert(Client client) {
        clientRepository.save(client);
    }
  /*  public void Update(Client client) {
        clientRepository.
    }*/
}
