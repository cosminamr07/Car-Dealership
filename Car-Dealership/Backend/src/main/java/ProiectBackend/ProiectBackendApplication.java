package com.example.TestProiectBackend;

import com.example.TestProiectBackend.Model.Masina;
import com.example.TestProiectBackend.Repository.MasinaRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
@RequiredArgsConstructor
public class TestProiectBackendApplication {
	private final MasinaRepository masinaRepository;
	public static void main(String[] args) {
		SpringApplication.run(TestProiectBackendApplication.class, args);

//		Masina masina =  new Masina(12L,"bmw","g30",2019,2.0,10000.0,12);

	}

}
