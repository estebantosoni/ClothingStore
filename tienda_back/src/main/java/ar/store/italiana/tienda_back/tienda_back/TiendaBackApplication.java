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

	public static void main(String[] args) {
		SpringApplication.run(TiendaBackApplication.class, args);
	}

	@PostConstruct
	public void addFirstsUsers(){
		User [] defUsers = new User[4];
		defUsers[0] = new User("admin","admin@example.com",encoder.encode("adminadmin"));
		defUsers[1] = new User("estipy","estipy@example.com",encoder.encode("esteban123"));
		defUsers[2] = new User("tiki","tiki@example.com",encoder.encode("tiki12345"));
		defUsers[3] = new User("juan","juansito@example.com",encoder.encode("juanchopancho"));
		for(User user:defUsers)
			urepo.save(user);
	}
}