package ar.store.italiana.tienda_back.tienda_back.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import ar.store.italiana.tienda_back.tienda_back.models.User;

public interface UserRepository extends JpaRepository<User, Long>{
	
	//DEFINIMOS ALGUNAS FUNCIONES UTILES PARA TRABAJAR CON LOS USUARIOS
	
	Optional<User> findByUsername(String username);
	boolean existsByUsername(String username);
	boolean existsByEmail(String email);
	boolean existsByPassword(String password);
	
}
