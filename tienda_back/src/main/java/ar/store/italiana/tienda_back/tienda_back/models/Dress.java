package ar.store.italiana.tienda_back.tienda_back.models;

import javax.persistence.*;

import lombok.Data;

@Entity
@Data
public class Dress extends Product {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String age;
	@Column(name = "sizes")
	public String size;
	private String color;
}