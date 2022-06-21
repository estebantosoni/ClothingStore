package ar.store.italiana.tienda_back.tienda_back.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import ar.store.italiana.tienda_back.tienda_back.models.Fragrance;

import java.util.List;

public interface FragranceRepository extends JpaRepository<Fragrance, Long>{
    List<Fragrance> findByProdSubcategory(String which);
    List<Fragrance> findByProdSex(String who);
    List<Fragrance> findByOriginCountry(String what);
}
