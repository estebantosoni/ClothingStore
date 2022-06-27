package ar.store.italiana.tienda_back.tienda_back.services;

import ar.store.italiana.tienda_back.tienda_back.models.Fragrance;

import java.util.List;

public interface FragranceService {
    List<Fragrance> getAllFragrances();
    Fragrance getObjF(String who);
    List<Fragrance> getFromSubcategory(String which);
    List<Fragrance> getFromSex(String who);
    List<Fragrance> getFromOriginCountry(String what);
}
