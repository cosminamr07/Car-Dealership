package com.example.TestProiectBackend.Repository;

import com.example.TestProiectBackend.Model.Admin;
import com.example.TestProiectBackend.Model.Client;
import com.example.TestProiectBackend.Model.Masina;
import org.springframework.data.repository.CrudRepository;

public interface AdminRepository extends CrudRepository<Admin,Long> {

    Admin findFirstByIdAdmin(Long id);

}
