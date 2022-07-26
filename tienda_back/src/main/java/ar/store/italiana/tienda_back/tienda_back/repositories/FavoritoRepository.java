package ar.store.italiana.tienda_back.tienda_back.repositories;

import ar.store.italiana.tienda_back.tienda_back.models.Favorito;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface FavoritoRepository extends JpaRepository<Favorito,Long> {
    Favorito findByIdUserAndIdProductAndCategory(long idUser,long idProduct,String category);
    List<Favorito> findByIdUserAndCategory(long idUser,String category);
    List<Favorito> findByIdUser(long idUser);
}
