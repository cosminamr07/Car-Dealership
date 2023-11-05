package com.example.TestProiectBackend.Service;

import com.example.TestProiectBackend.Model.Masina;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

@Component
public interface MasinaService {
    Masina findFirstById_masina(Long id);

}
