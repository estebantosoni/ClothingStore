package ar.store.italiana.tienda_back.tienda_back.models;

import javax.persistence.*;

import lombok.Data;

@Entity
@Data
public class Fragrance extends Product{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private int volumen;
	private String aroma;
	private String originCountry;
	
}
