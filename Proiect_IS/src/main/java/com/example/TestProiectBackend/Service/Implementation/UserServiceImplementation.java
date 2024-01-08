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
    public User findUserById(Long id) {
        return userRepository.findByIdUser(id);
    }

    public void insert(User user) {
        userRepository.save(user);
    }

    public void update(User user) {
        userRepository.save(user);
    }

    public void delete(User user) {
        userRepository.delete(user);
    }

    public User findByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    public List<User> getAllUsers() {
        return (List<User>) userRepository.findAll();
    }

}
