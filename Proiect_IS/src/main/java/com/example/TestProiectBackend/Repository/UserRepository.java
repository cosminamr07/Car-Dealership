package com.example.TestProiectBackend.Repository;

import com.example.TestProiectBackend.Model.User;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User,Long> {

    User findFirstByIdUser(Long id);
    String findEmailByIdUser(Long id);


}
