package ar.store.italiana.tienda_back.tienda_back.models;

import java.util.HashSet;
import java.util.Set;
import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@Table(name = "users",			//COMO NO PUEDO LLAMAR A LA CLASE 'USER', YA QUE ESTA RESERVADO, CAMBIO EL NOMBRE A LA ENTIDAD
		uniqueConstraints = {
				@UniqueConstraint(columnNames = "username"),
				@UniqueConstraint(columnNames = "email")
		})
@NoArgsConstructor				//CREA EL CONSTRUCTOR SIN ARGUMENTOS DE FORMA AUTOMATICA
public class User {
	
	public User(String username, String email, String password) {
		this.username = username;
		this.email = email;
		this.password = password;
	}

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)		//EN EL EJEMPLO, SE USA 'IDENTITY' EN VEZ DE 'AUTO'
	private Long id;
	
	@NotBlank					//EVITO QUE LA VARIABLE SEA VACIA
	@Size(max = 20)
	private String username;
	
	@NotBlank
	@Size(max = 20)
	private String password;
	
	@NotBlank
	@Size(max = 50)
	@Email
	private String email;
	
	@ManyToMany(fetch = FetchType.LAZY)
	@JoinTable(name = "user_roles", 
	           joinColumns = @JoinColumn(name = "user_id"),
	           inverseJoinColumns = @JoinColumn(name = "role_id"))
	private Set<Role> roles = new HashSet<>();
	
	//private Boolean admin;		//LO REEMPLAZAMOS TEMPORALMENTE POR LA CLASE 'ROLE'
	
	// HAY UN PROBLEMA CON SET Y ES QUE REQUIERO DE ANOTACIONES PARA VINCULARLAS CON OTRAS ENTIDADES
	// SIN EMBARGO, NOSOTROS QUEREMOS TRABAJAR CON UN TIPO PRIMITIVO
	// ANTE ESTO, SE USA TEMPORALMENTE ARRAYLIST
	// NOTA: CREO QUE SERIA CONVENIENTE CREAR UNA FUNCION QUE IMPIDA AGREGAR ELEMENTOS YA EXISTENTES
	//private ArrayList<String> favoritos = new ArrayList<String>();
	
	
}
