package ar.store.italiana.tienda_back.tienda_back.models;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class UserInfoResponse {

	//EN VEZ DE VOLVER A ESCRIBIR ESTAS VARIABLES, PUEDO LLAMARMAS MEDIANTE HERENCIA (LLAMAR A USER)
	
	private Long id;
	private String username;
	private String email;
	private List<String> roles;
	
}
