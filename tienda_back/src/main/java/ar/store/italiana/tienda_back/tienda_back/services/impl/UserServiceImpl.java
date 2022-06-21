package ar.store.italiana.tienda_back.tienda_back.services.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ar.store.italiana.tienda_back.tienda_back.models.User;
import ar.store.italiana.tienda_back.tienda_back.repositories.UserRepository;
import ar.store.italiana.tienda_back.tienda_back.services.UserService;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private UserRepository urepo;
	
	//DEFINO LAS FUNCIONES QUE VAN A LLAMAR AL REPOSITORIO Y VAN A MODIFICAR LA BASE DE DATOS
	
	@Override
	public boolean checkUser(User user) {
		return urepo.existsByUsername(user.getUsername()) && urepo.existsByPassword(user.getPassword());
	}
	
}
