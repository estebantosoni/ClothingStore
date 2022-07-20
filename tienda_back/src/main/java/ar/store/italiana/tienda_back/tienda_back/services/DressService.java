package ar.store.italiana.tienda_back.tienda_back.services;

import ar.store.italiana.tienda_back.tienda_back.models.Dress;

import java.util.List;

public interface DressService {
    List<Dress> getAllDresses();
    List<Dress> getEverything();
    Dress getObjD(String who);
    List<Dress> getSizeD(String who);
    List<Dress> getFromSubcategory(String which);
    List<Dress> getFromSex(String which);
    List<Dress> getFromAge(String who);

    void save(Dress which);
}
