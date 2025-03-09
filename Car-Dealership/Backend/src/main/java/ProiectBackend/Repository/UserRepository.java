package com.example.TestProiectBackend.Repository;

import com.example.TestProiectBackend.Model.User;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User,Long> {

    User findByIdUser(Long id);
    User findByEmail(String email);



}
