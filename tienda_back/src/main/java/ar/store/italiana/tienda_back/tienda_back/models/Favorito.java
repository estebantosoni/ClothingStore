package ar.store.italiana.tienda_back.tienda_back.models;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
public class Favorito {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "users")
    private long idUser;
    @Column(name = "products")
    private long idProduct;
    private String category;
}