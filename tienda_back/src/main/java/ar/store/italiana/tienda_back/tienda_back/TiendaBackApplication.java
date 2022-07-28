package ar.store.italiana.tienda_back.tienda_back;

import ar.store.italiana.tienda_back.tienda_back.models.User;
import ar.store.italiana.tienda_back.tienda_back.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.password.PasswordEncoder;

import javax.annotation.PostConstruct;

@SpringBootApplication
public class TiendaBackApplication {
	@Autowired
	PasswordEncoder encoder;
	@Autowired
	UserRepository urepo;

	@PostConstruct
	public void addFirstsUsers(){
		User u1 = new User("admin","admin@example.com",encoder.encode("adminadmin"));
		User u2 = new User("estipy","estipy@example.com",encoder.encode("esteban123"));
		User u3 = new User("tiki","tiki@example.com",encoder.encode("tiki12345"));
		urepo.save(u1);
		urepo.save(u2);
		urepo.save(u3);
	}

	public static void main(String[] args) {
		SpringApplication.run(TiendaBackApplication.class, args);
	}
}