package ar.store.italiana.tienda_back.tienda_back.services;

import ar.store.italiana.tienda_back.tienda_back.models.Favorito;

import java.util.List;

public interface FavoritoService {
    void add(Favorito fav);

    void remove(String cat,long u,long p);

    List<Favorito> getAllByUserId(long user);
    List<Favorito> getDressesByUserId(long user);
    List<Favorito> getFragrancesByUserId(long user);
}
