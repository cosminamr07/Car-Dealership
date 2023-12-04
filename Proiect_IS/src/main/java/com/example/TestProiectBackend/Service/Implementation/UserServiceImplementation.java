package com.example.TestProiectBackend.Service.Implementation;

import com.example.TestProiectBackend.Model.User;
import com.example.TestProiectBackend.Repository.UserRepository;
import com.example.TestProiectBackend.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImplementation implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public User findFirstByIdUser(Long id) {
        return userRepository.findFirstByIdUser(id);
    }

    public void insert(User user) {
        userRepository.save(user);
    }

    public void update(User user) {
        userRepository.save(user);
    }

    public void delete(Long id) {
        userRepository.deleteById(id);
    }

    public String getEmail(Long id) {
        return userRepository.findEmailByIdUser(id);
    }

    public List<User> getAllUsers() {
        return (List<User>) userRepository.findAll();
    }
}
