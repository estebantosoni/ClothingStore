package ar.store.italiana.tienda_back.tienda_back.models;

import java.util.Set;

import lombok.Data;

@Data
public class SignupRequest {

	private String username;
	private String email;
	private String password;
	private Set<String> role;

}
