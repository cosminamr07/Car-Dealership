package com.example.TestProiectBackend.Controller;

import com.example.TestProiectBackend.DTO.NewObj;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RestController
@RequiredArgsConstructor
@CrossOrigin
@RequestMapping("Masina")
public class MasinaController {
    @GetMapping("/GetData")
    public String getMessage()
    {
        return "mesaj";
    }
    @PostMapping("/Print")
    public void printMessage(@RequestBody NewObj data)
    {
        System.out.println(data);
        data.getId();
    }

}
