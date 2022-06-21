package ar.store.italiana.tienda_back.tienda_back.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import ar.store.italiana.tienda_back.tienda_back.models.Dress;

import java.util.List;

public interface DressRepository extends JpaRepository<Dress, Long>{
    List<Dress> findBySubcategory(String subcategory);
    List<Dress> findBySex(String sex);
    List<Dress> findByAge(String age);
}
