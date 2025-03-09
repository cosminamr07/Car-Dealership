package com.example.TestProiectBackend.Service;

import com.example.TestProiectBackend.Model.Masina;
import com.example.TestProiectBackend.Model.User;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.util.List;

@Component
public interface MasinaService {
    Masina findFirstByIdMasina(Long id);
    Masina findMasinaById(Long id);

    public List<Masina> searchMasini(Masina masina);
}
