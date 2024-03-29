package ar.store.italiana.tienda_back.tienda_back.models;

import lombok.Data;

import javax.persistence.*;

@Data
@MappedSuperclass
@Inheritance(strategy = InheritanceType.TABLE_PER_CLASS)
public abstract class Product {
	protected Boolean enabled;
	protected String subcategory;
	protected String sex;
	protected String brand;
	protected String model;
	protected String code;
	protected Boolean stock;
	protected Float price;
	@Column(length = 350000)
	protected String image;
	protected Boolean isOnFavs;
}