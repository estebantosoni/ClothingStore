package ar.store.italiana.tienda_back.tienda_back.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import ar.store.italiana.tienda_back.tienda_back.models.Dress;

import java.util.List;
import java.util.Optional;

public interface DressRepository extends JpaRepository<Dress, Long>{
    List<Dress> findByProdSubcategory(String subcategory);
    List<Dress> findByProdSex(String sex);
    List<Dress> findByAge(String age);
}
