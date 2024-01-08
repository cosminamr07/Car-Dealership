package com.example.TestProiectBackend.Service.Implementation;

import com.example.TestProiectBackend.Model.Admin;
import com.example.TestProiectBackend.Repository.AdminRepository;
import com.example.TestProiectBackend.Service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AdminServiceImplementation implements AdminService {
    @Autowired
    private AdminRepository adminRepository;

    @Override
    public Admin getAdminByUserId(Long id) {
        return adminRepository.findFirstByIdAdmin(id);
    }

    public void insert(Admin admin) {
        adminRepository.save(admin);
    }

    public void update(Admin admin) {
        adminRepository.save(admin);
    }

    public void delete(Long id) {
        adminRepository.deleteById(id);
    }

    public List<Admin> getAllAdmins() {
        return (List<Admin>) adminRepository.findAll();
    }
}
