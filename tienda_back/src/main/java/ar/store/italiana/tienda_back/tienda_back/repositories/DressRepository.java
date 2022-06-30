package ar.store.italiana.tienda_back.tienda_back.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import ar.store.italiana.tienda_back.tienda_back.models.Dress;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface DressRepository extends JpaRepository<Dress,Long>{
    @Query(value =  "SELECT BRAND,MODEL,min(ID) id,min(code) code,min(image) image," +
                        "min(subcategory) subcategory,min(sex) sex,min(stock) stock,min(price) price," +
                        "min(age) age,min(sizes) sizes,min(color) color " +
                    "FROM DRESS " +
                    "GROUP BY BRAND,MODEL",
            nativeQuery = true)
    List<Dress> filterByBrandsAndModels();
    List<Dress> findBySubcategory(String subcategory);
    List<Dress> findBySex(String sex);
    List<Dress> findByAge(String age);
    Dress findByCode(String code);
    List<Dress> findByBrandAndModel(String brand, String model);
}
