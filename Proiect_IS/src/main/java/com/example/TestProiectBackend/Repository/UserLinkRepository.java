package com.example.TestProiectBackend.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import com.example.TestProiectBackend.Model.UserLink;

import java.util.List;

@Repository
public interface UserLinkRepository extends JpaRepository<UserLink, Long> {
    @Query(value = "SELECT ul.id_link, u.id_user, c.id_client, a.id_angajat, ad.id_admin " +
            "FROM user_link ul " +
            "LEFT JOIN user u ON ul.user_id = u.id_user " +
            "LEFT JOIN client c ON ul.client_id = c.id_client " +
            "LEFT JOIN angajat a ON ul.angajat_id = a.id_angajat " +
            "LEFT JOIN admin ad ON ul.admin_id = ad.id_admin",
            nativeQuery = true)
    List<Object[]> findUserLinkDetails();
}
