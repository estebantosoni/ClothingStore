package ar.store.italiana.tienda_back.tienda_back.services.impl;

import ar.store.italiana.tienda_back.tienda_back.models.Dress;
import ar.store.italiana.tienda_back.tienda_back.models.Fragrance;
import ar.store.italiana.tienda_back.tienda_back.repositories.FragranceRepository;
import ar.store.italiana.tienda_back.tienda_back.services.FragranceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class FragranceServiceImpl implements FragranceService {
    @Autowired
    private FragranceRepository frepo;

    @Override
    public List<Fragrance> getAllFragrances() {
        return frepo.findAll();
    }

    @Override
    public Fragrance getObjF(String who) {
    	return frepo.findByCode(who);
    }

    @Override
    public List<Fragrance> getFromSubcategory(String which) {
        return frepo.findBySubcategory(which);
    }

    @Override
    public List<Fragrance> getFromSex(String who) {
        return frepo.findBySex(who);
    }

    @Override
    public List<Fragrance> getFromOriginCountry(String what) {
        return frepo.findByOriginCountry(what);
    }

    @Override
    public void save(Fragrance which) {
        frepo.save(which);
    }
    
    @Override
	public void status(Long id) {
        Optional<Fragrance> prod = frepo.findById(id);
    	Fragrance fr = new Fragrance();
        if(prod.isPresent()){
            fr = prod.get();
        }
		if(fr.getEnabled()) {
            System.out.println("ANTES ES" + fr.getEnabled());
			fr.setEnabled(false);
		}
		else {
            System.out.println("ANTES ES" + fr.getEnabled());
			fr.setEnabled(true);
		}
        frepo.save(fr);
        System.out.println("DESPUES ES" + fr.getEnabled());
	}
}
