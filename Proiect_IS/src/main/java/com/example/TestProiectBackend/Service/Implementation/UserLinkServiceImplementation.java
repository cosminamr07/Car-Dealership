package com.example.TestProiectBackend.Service;

import com.example.TestProiectBackend.Model.User;
import com.example.TestProiectBackend.Model.UserLink;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.TestProiectBackend.Repository.UserLinkRepository;

import java.util.List;

@Service
public class UserLinkServiceImplementation implements UserLinkService {
    private UserService userService;

    @Autowired
    private ClientService clientService;

    @Autowired
    private AngajatService angajatService;

    @Autowired
    private AdminService adminService;

    @Autowired
    private UserLinkRepository userLinkRepository;

    public void createUserLink(Long userId) {
        User user = userService.findUserById(userId);
        String userType = user.getUserType();

        Long clientId = null;
        Long angajatId = null;
        Long adminId = null;

        switch (userType) {
            case "client":
                clientId = clientService.getClientByUserId(userId).getIdClient();
                break;
            case "angajat":
                angajatId = angajatService.getAngajatByUserId(userId).getIdAngajat();
                break;
            case "admin":
                adminId = adminService.getAdminByUserId(userId).getIdAdmin();
                break;
            default:
                // Tratează alte tipuri de userType, dacă este necesar
        }

        UserLink userLink = new UserLink();
        userLink.setUser(user);
        userLink.setClient(clientService.getClientByUserId(clientId));
        userLink.setAngajat(angajatService.getAngajatByUserId(angajatId));
        userLink.setAdmin(adminService.getAdminByUserId(adminId));

        userLinkRepository.save(userLink);
    }

    @Override
    public List<Object[]> getUserLinkDetails() {
        return null;
    }
}
