package com.example.TestProiectBackend.Service.Implementation;

import com.example.TestProiectBackend.Model.Masina;
import com.example.TestProiectBackend.Repository.MasinaRepository;
import com.example.TestProiectBackend.Service.MasinaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MasinaServiceImplementation implements MasinaService {
    @Autowired
    private MasinaRepository masinaRepository;
    @Override
    public Masina findFirstById_masina(Long id)
    {
        return masinaRepository.findFirstByIdMasina(id);
    }
}
