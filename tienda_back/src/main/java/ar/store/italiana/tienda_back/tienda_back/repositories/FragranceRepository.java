package ar.store.italiana.tienda_back.tienda_back.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import ar.store.italiana.tienda_back.tienda_back.models.Fragrance;

import java.util.List;

public interface FragranceRepository extends JpaRepository<Fragrance, Long>{
    List<Fragrance> findByEnabledTrue();
    List<Fragrance> findBySubcategoryAndEnabledTrue(String which);
    List<Fragrance> findBySexAndEnabledTrue(String who);
    List<Fragrance> findByOriginCountryAndEnabledTrue(String what);
    Fragrance findByCode(String who);
}
