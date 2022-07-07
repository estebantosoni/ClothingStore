package ar.store.italiana.tienda_back.tienda_back.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import ar.store.italiana.tienda_back.tienda_back.models.Dress;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface DressRepository extends JpaRepository<Dress,Long>{
    String DEF_QUERY =
            "SELECT BRAND,MODEL,min(ID) id,min(code) code,min(image) image," +
                "min(subcategory) subcategory,min(sex) sex,min(stock) stock,min(price) price," +
                "min(age) age,min(sizes) sizes,min(color) color " +
                "FROM DRESS ",
            GROUP_BY =
            "GROUP BY BRAND,MODEL";
    List<Dress> findAll();
    @Query(value =  DEF_QUERY + GROUP_BY,nativeQuery = true)
    List<Dress> filterByBrandsAndModels();
    @Query(value = DEF_QUERY + "WHERE subcategory = ?1 " + GROUP_BY,nativeQuery = true)
    List<Dress> filterBySubcategory(String subcategory);
    @Query(value = DEF_QUERY + "WHERE sex = ?1 " + GROUP_BY,nativeQuery = true)
    List<Dress> filterBySex(String sex);
    @Query(value = DEF_QUERY + "WHERE age = ?1 " + GROUP_BY,nativeQuery = true)
    List<Dress> filterByAge(String age);
    Dress findByCode(String code);
    List<Dress> findByBrandAndModel(String brand, String model);
}
