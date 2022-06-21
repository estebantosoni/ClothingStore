package ar.store.italiana.tienda_back.tienda_back.services.impl;

import ar.store.italiana.tienda_back.tienda_back.models.Dress;
import ar.store.italiana.tienda_back.tienda_back.models.Fragrance;
import ar.store.italiana.tienda_back.tienda_back.repositories.DressRepository;
import ar.store.italiana.tienda_back.tienda_back.repositories.FragranceRepository;
import ar.store.italiana.tienda_back.tienda_back.services.DressService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DressServiceImpl implements DressService {
	@Autowired
	private DressRepository drepo;

	@Override
	public List<Dress> getAllDresses(){return drepo.findAll();}
	@Override
	public List<Dress> getFromSubcategory(String which){return drepo.findByProdSubcategory(which);}
	@Override
	public List<Dress> getFromSex(String which){return drepo.findByProdSex(which);}
	@Override
	public List<Dress> getFromAge(String who){return drepo.findByAge(who);}
}
