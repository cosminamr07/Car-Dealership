    package com.example.TestProiectBackend.Controller;

    import com.example.TestProiectBackend.Model.Angajat;
    import com.example.TestProiectBackend.Model.Client;
    import com.example.TestProiectBackend.Model.User;
    import com.example.TestProiectBackend.Model.UserLink;
    import com.example.TestProiectBackend.Service.Implementation.AngajatServiceImplementation;
    import com.example.TestProiectBackend.Service.Implementation.ClientServiceImplementation;
    import com.example.TestProiectBackend.Service.Implementation.UserServiceImplementation;
    import com.example.TestProiectBackend.Service.UserLinkServiceImplementation;
    import org.springframework.beans.factory.annotation.Autowired;
    import org.springframework.http.HttpStatus;
    import org.springframework.http.ResponseEntity;
    import org.springframework.web.bind.annotation.*;

    import java.util.List;

    @RestController
    @CrossOrigin
    @RequestMapping("User")
    public class UserController {

        @Autowired
        private UserServiceImplementation userServiceImplementation;
        @Autowired

        private AngajatServiceImplementation angajatServiceImplementation;
        @Autowired
        private ClientServiceImplementation clientServiceImplementation;

        @Autowired
        private UserLinkServiceImplementation userLinkServiceImplementation;


        @PostMapping("/Insert")
        public void insert(@RequestBody User user) {
            userServiceImplementation.insert(user);
            if ("angajat".equals(user.getUserType())) {
                Angajat angajat = new Angajat();
                angajat.setNumeAngajat(user.getFullName());

                angajatServiceImplementation.Insert(angajat);

            }
            if ("client".equals(user.getUserType())) {
                Client client = new Client();
                client.setNumeClient(user.getFullName());
                client.setAdresa(user.getAdresa());
                client.setNrTelefon(user.getNrTelefon());
                      clientServiceImplementation.Insert(client);
            }
        }

        @PostMapping("/Update")
        public void update(@RequestBody User user) {
            userServiceImplementation.update(user);

        }
        @GetMapping("/GetAllUsers")
        public List<User> getAllUsers() {
            return userServiceImplementation.getAllUsers();
        }
        @PostMapping("/Delete")
        public void delete(@RequestBody User user){
            userServiceImplementation.delete(user);
        }

        @GetMapping("/FindByEmail")
        public User findByEmail(@RequestParam String email) {
            User user = userServiceImplementation.findByEmail(email);
            return user;
            //return ResponseEntity.status(HttpStatus.OK).body(email);
        }
        @GetMapping("/CheckLogin")
        public ResponseEntity<String> checkLogin(
                @RequestParam String email,
                @RequestParam String password
        ) {
            User user = userServiceImplementation.findByEmail(email);

            if (user != null && user.getPassword().equals(password)) {

                String redirectPath = determineRedirectPath(user.getUserType());
                return ResponseEntity.ok("Redirect:" + redirectPath);
            } else {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid email or password");
            }
        }

        private String determineRedirectPath(String userType) {
            switch (userType) {
                case "client":
                    return "/Platform";
                case "angajat":
                    return "/AngajatPlatform";
                case "admin":
                    return "/AdminPage";
                default:
                    return "/";
            }
        }



        @GetMapping("/GetById")
        public String readById(@RequestBody Long id) {
            User user = userServiceImplementation.findUserById(id);
            return user.getFullName();
            //return ResponseEntity.status(HttpStatus.OK).body(user);
        }
    }
    // Proiectul are in vedere o aplcatie unde clientul se poate inregistra, primeste acces si poate cauta masini in functie de mai multe criterii(an,marca,buget etc)
    //  Daca un client se hotaraste si doreste sa cumpere o masina, va fi ajutat de un angajat si se realizeaza tranzactia
    //Ca si functionalitate, vom avea ca si useri: client, angajat, admin, iar fiecare va avea interfata diferita( clientul poate doar sa caute masini, angajatul poate sa vada
    // vanzarile si tranzactiile, adminul poate adauga masini, angajati)
