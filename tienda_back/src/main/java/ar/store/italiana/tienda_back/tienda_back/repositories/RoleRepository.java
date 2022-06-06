package ar.store.italiana.tienda_back.tienda_back.repositories;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import ar.store.italiana.tienda_back.tienda_back.models.Role;
import ar.store.italiana.tienda_back.tienda_back.models.RoleTypes;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {
  
	//AGREGO UNA FUNCION UTIL PARA TRABAJAR CON LOS TIPOS DE ROLES
	
	Optional<Role> findByName(RoleTypes name);
	
}
