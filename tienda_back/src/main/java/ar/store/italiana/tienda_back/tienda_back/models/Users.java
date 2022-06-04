package ar.store.italiana.tienda_back.tienda_back.models;

import java.util.ArrayList;
import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;

import lombok.Data;

@Entity
@Data
public class Users{
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	
	private String usuario;
	private String contraseña;
	private Boolean admin;
	
	// HAY UN PROBLEMA CON SET Y ES QUE REQUIERO DE ANOTACIONES PARA VINCULARLAS CON OTRAS ENTIDADES
	// SIN EMBARGO, NOSOTROS QUEREMOS TRABAJAR CON UN TIPO PRIMITIVO
	// ANTE ESTO, SE USA TEMPORALMENTE ARRAYLIST
	// COMO NOTA, CREO QUE SERIA CONVENIENTE CREAR UNA FUNCION QUE IMPIDE AGREGAR ELEMENTOS YA EXISTENTES
		//O SINO BUSCARLE LA VUELTA CON SET
	private ArrayList<String> favoritos = new ArrayList<String>();		
	
	
}
