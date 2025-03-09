package com.example.TestProiectBackend.Service;

import com.example.TestProiectBackend.Model.Client;
import com.example.TestProiectBackend.Model.Masina;
import org.springframework.stereotype.Component;

@Component
public interface ClientService {
    Client getClientByUserId(Long id);

}
