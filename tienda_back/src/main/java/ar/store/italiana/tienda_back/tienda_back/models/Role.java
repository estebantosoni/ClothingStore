package ar.store.italiana.tienda_back.tienda_back.models;

import javax.persistence.*;

import lombok.Data;

//DEFINO LA ENTIDAD 'ROLES', LA CUAL PUEDE ALMACENAR UN ID CON SU RESPECTIVO ROL

@Entity
@Table(name = "roles")
@Data
public class Role {
	
	  @Id
	  @GeneratedValue(strategy = GenerationType.IDENTITY)		//OJO, NO USA 'AUTO'
	  private Integer id;
	  
	  @Enumerated(EnumType.STRING)
	  @Column(length = 20)
	  private RoleTypes name;

}
