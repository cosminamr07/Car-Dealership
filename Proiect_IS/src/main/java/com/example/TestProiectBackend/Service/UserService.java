package com.example.TestProiectBackend.Service;

import com.example.TestProiectBackend.Model.User;
import com.example.TestProiectBackend.Model.Masina;
import org.springframework.stereotype.Component;

@Component
public interface UserService {
    User findUserById(Long id);

}
