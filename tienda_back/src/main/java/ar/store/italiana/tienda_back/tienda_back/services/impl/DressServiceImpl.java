package ar.store.italiana.tienda_back.tienda_back.services.impl;

import ar.store.italiana.tienda_back.tienda_back.models.Dress;
import ar.store.italiana.tienda_back.tienda_back.repositories.DressRepository;
import ar.store.italiana.tienda_back.tienda_back.services.DressService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class DressServiceImpl implements DressService {
	@Autowired
	private DressRepository drepo;

	@Override
	public List<Dress> getAllDresses(){
		return drepo.filterByBrandsAndModels();
	}

	@Override
	public List<Dress> getEverything() {
		return drepo.findAll();
	}

	@Override
	public Dress getObjD(String which) {
		return drepo.findByCode(which);
	}

	@Override
	public List<Dress> getSizeD(String what) {
		Dress prod = new Dress();
		prod = drepo.findByCode(what);
		String brand; String model;
		brand = prod.getBrand();
		model = prod.getModel();
		return drepo.findByBrandAndModel(brand,model);
	}

	@Override
	public Optional<Dress> getFromId(Long id) {
		return drepo.findById(id);
	}

	@Override
	public List<Dress> getFromSubcategory(String which){
		return drepo.filterBySubcategory(which);
	}

	@Override
	public List<Dress> getFromSex(String which){
		return drepo.filterBySex(which);
	}

	@Override
	public List<Dress> getFromAge(String who){
		return drepo.filterByAge(who);
	}

	@Override
	public void save(Dress which) {
		drepo.save(which);
	}

	@Override
	public Dress checkCode(Dress which) {
		Dress ret = null;
		String codeInCuestion = which.getCode();
		if(drepo.existsByCode(codeInCuestion))
			ret = drepo.findByCode(codeInCuestion);
		return ret;
	}
}
