package com.example.TestProiectBackend.Repository;

import com.example.TestProiectBackend.Model.Client;
import com.example.TestProiectBackend.Model.Masina;
import org.springframework.data.repository.CrudRepository;

public interface ClientRepository extends CrudRepository<Client,Long> {

    Client findFirstByIdClient(Long id);

}
