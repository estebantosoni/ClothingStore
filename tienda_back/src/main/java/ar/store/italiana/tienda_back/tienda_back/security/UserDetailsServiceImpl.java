package ar.store.italiana.tienda_back.tienda_back.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import ar.store.italiana.tienda_back.tienda_back.models.User;
import ar.store.italiana.tienda_back.tienda_back.repositories.UserRepository;

// CON ESTA IMPLEMENTACION DE SERVICIO, OBTENEMOS UN OBJETO USUARIO PERSONALIZADO, USANDO UserRepository
// LUEGO CONSTRUIMOS UN OBJETO UserDetails USANDO EL METODO static build().

@Service
public class UserDetailsServiceImpl implements UserDetailsService {
	
  @Autowired
  UserRepository userRepository;
  
  @Override
  @Transactional
  public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
    User user = userRepository.findByUsername(username)
        .orElseThrow(() -> new UsernameNotFoundException("User Not Found with username: " + username));
    return UserDetailsImpl.build(user);
    
  }
}