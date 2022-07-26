package ar.store.italiana.tienda_back.tienda_back.services.impl;

import ar.store.italiana.tienda_back.tienda_back.models.Favorito;
import ar.store.italiana.tienda_back.tienda_back.repositories.FavoritoRepository;
import ar.store.italiana.tienda_back.tienda_back.services.FavoritoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FavoritoServiceImpl implements FavoritoService {
    @Autowired
    private FavoritoRepository favrepo;

    @Override
    public void add(Favorito fav) {
        favrepo.save(fav);
    }

    @Override
    public void remove(String cat,long u,long p) {
        Favorito wanted = favrepo.findByIdUserAndIdProductAndCategory(u,p,cat);
        favrepo.deleteById(wanted.getId());
    }

    @Override
    public List<Favorito> getAllByUserId(long user) {
        return favrepo.findByIdUser(user);
    }

    @Override
    public List<Favorito> getDressesByUserId(long user) {
        return favrepo.findByIdUserAndCategory(user,"dress");
    }

    @Override
    public List<Favorito> getFragrancesByUserId(long user) {
        return favrepo.findByIdUserAndCategory(user,"fragrance");
    }
}