package ar.store.italiana.tienda_back.tienda_back.models;

import javax.persistence.Embeddable;

import lombok.Data;

@Data
@Embeddable								//EN VEZ DE HEREDAR, LO EMBEBO, PERO HAY QUE CHEQUEAR QUE ESTO SEA EFECTIVO
public class Product {
	private String subcategory;
	private String sex;
	private String brand;
	private String code;
	private Boolean stock;
	private Float price;
	private String image;				//CREO QUE ESTO ES MAS COMPLEJO QUE SOLO UN STRING, HAY QUE INVESTIGAR MEJOR
	
}
