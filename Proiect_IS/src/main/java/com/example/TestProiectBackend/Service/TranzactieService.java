package com.example.TestProiectBackend.Service;

import com.example.TestProiectBackend.Model.Tranzactie;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

@Component
public interface TranzactieService {
    Tranzactie findFirstByIdTranzactie(Long id);

}
