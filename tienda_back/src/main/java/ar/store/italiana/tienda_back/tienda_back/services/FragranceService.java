package ar.store.italiana.tienda_back.tienda_back.services;

import ar.store.italiana.tienda_back.tienda_back.models.Fragrance;

import java.util.List;
import java.util.Optional;

public interface FragranceService {
    List<Fragrance> getAllFragrances();
    List<Fragrance> getEverything();
    Fragrance getObjF(String who);
    Optional<Fragrance> getFromId(Long id);
    List<Fragrance> getFromSubcategory(String which);
    List<Fragrance> getFromSex(String who);
    List<Fragrance> getFromOriginCountry(String what);

    void save(Fragrance which);

    Fragrance checkCode(Fragrance which);
}
