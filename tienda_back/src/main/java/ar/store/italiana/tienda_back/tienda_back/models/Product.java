package ar.store.italiana.tienda_back.tienda_back.models;

import javax.persistence.Embeddable;

import lombok.Data;

@Data
@Embeddable								//EN VEZ DE HEREDAR, LO EMBEBO, PERO HAY QUE CHEQUEAR QUE ESTO SEA EFECTIVO
public class Product {
	
	private String subcategoria;
	private String sexo;
	private String marca;
	private String codigo;
	private Boolean stock;
	private Float precio;
	private String imagen;				//CREO QUE ESTO ES MAS COMPLEJO QUE SOLO UN STRING, HAY QUE INVESTIGAR MEJOR
	
}
