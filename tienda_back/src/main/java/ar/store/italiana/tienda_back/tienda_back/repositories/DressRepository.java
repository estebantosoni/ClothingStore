package ar.store.italiana.tienda_back.tienda_back.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import ar.store.italiana.tienda_back.tienda_back.models.Dress;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface DressRepository extends JpaRepository<Dress,Long>{
    String DEF_QUERY =
            "SELECT brand,model,min(ID) id,min(code) code,min(image) image,min(enabled) enabled," +
                "min(subcategory) subcategory,min(sex) sex,min(stock) stock,min(price) price," +
                "min(age) age,min(sizes) sizes,min(color) color,min(is_on_favs) is_on_favs " +
                "FROM dress ",
            ENABLEDS =
            "WHERE enabled = TRUE ",
            GROUP_BY =
            "GROUP BY brand,model";
    List<Dress> findAll();
    @Query(value =  DEF_QUERY + ENABLEDS + GROUP_BY ,nativeQuery = true)
    List<Dress> filterByBrandsAndModels();
    @Query(value = DEF_QUERY + ENABLEDS + "AND subcategory = ?1 "  + GROUP_BY,nativeQuery = true)
    List<Dress> filterBySubcategory(String subcategory);
    @Query(value = DEF_QUERY + ENABLEDS + "AND sex = ?1 " + GROUP_BY,nativeQuery = true)
    List<Dress> filterBySex(String sex);
    @Query(value = DEF_QUERY + ENABLEDS + "AND age = ?1 " + GROUP_BY,nativeQuery = true)
    List<Dress> filterByAge(String age);
    Dress findByCode(String code);
    List<Dress> findByBrandAndModel(String brand, String model);

    boolean existsByCode(String code);
}
