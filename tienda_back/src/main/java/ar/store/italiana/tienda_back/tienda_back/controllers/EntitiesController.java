package ar.store.italiana.tienda_back.tienda_back.controllers;

import ar.store.italiana.tienda_back.tienda_back.models.Dress;
import ar.store.italiana.tienda_back.tienda_back.models.Fragrance;
import ar.store.italiana.tienda_back.tienda_back.services.DressService;
import ar.store.italiana.tienda_back.tienda_back.services.FragranceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

//import ar.store.italiana.tienda_back.tienda_back.models.User;
//import ar.store.italiana.tienda_back.tienda_back.services.UserService;

import java.util.List;


//	IMPORTANTE (DUDA)

	// SE PUEDE USAR UN SOLO CONTROLADOR PARA LAS 3 ENTIDADES, PERO TAL VEZ POR MOTIVOS DE ORDEN SE PUEDE HACER UNA MAS PARA LAS DOS CATEGORIAS


@RestController										//AGREGO REST
@CrossOrigin
@RequestMapping("/interface")
public class EntitiesController {
//	@Autowired
//	private UserService uservice;
	@Autowired
	private DressService dservice;
	@Autowired
	private FragranceService fservice;
	
	//ESTO NO SE HACE EN ENTITIES, HAY QUE BORRARLO. EL LOGUEO DEBE MATCHEAR CON EL ENDPOINT EN AUTHCONTROLLER
/*
	//USER SECTOR
	@PostMapping("/user")
	public boolean checkIfUserExists(@RequestBody User usuario) {
		return uservice.checkUser(usuario);
	}
*/	
	
	//DRESS SECTOR
	@GetMapping("/dress/all")
	public List<Dress> getAllDresses(){
		return dservice.getAllDresses();
	}

	@GetMapping("/dress/everything")
	public List<Dress> getEverything(){
		return dservice.getEverything();
	}
	
	@GetMapping("dress/obj/{codigo}")
	public Dress getObjD(@PathVariable String codigo) {
		return dservice.getObjD(codigo);
	}
	
	@GetMapping("dress/size/{codigo}")
	public List<Dress> getSizeD(@PathVariable String codigo){
		return dservice.getSizeD(codigo);
	}
	
	@GetMapping("/dress/sub/{subcategoria}")
	public List<Dress> getSubcategoryD(@PathVariable String subcategoria){
		return dservice.getFromSubcategory(subcategoria);
	}
	@GetMapping("/dress/sex/{genero}")
	public List<Dress> getSexD(@PathVariable String genero){
		return dservice.getFromSex(genero);
	}
	@GetMapping("/dress/age/{edad}")
	public List<Dress> getAge(@PathVariable String edad){
		return dservice.getFromAge(edad);
	}
	@PostMapping("/dress/save")
	public void saveDress(@RequestBody Dress which){
		dservice.save(which);
	}
	@PostMapping("dress/status")
	public void statusDress(@RequestBody Long id) {
		dservice.status(id);
	}
	
	
	//FRAGRANCE SECTOR
	@GetMapping("/fragrance/all")
	public List<Fragrance> getAllFragances(){
		return fservice.getAllFragrances();
	}
	
	@GetMapping("fragrance/obj/{codigo}")
	public Fragrance getObjF(@PathVariable String codigo) {
		return fservice.getObjF(codigo);
	}
	
	@GetMapping("/fragrance/sub/{subcategoria}")
	public List<Fragrance> getSubcategoryF(@PathVariable String subcategoria){
		return fservice.getFromSubcategory(subcategoria);
	}
	@GetMapping("/fragrance/sex/{genero}")
	public List<Fragrance> getSexF(@PathVariable String genero){
		return fservice.getFromSex(genero);
	}
	@GetMapping("/fragrance/country/{pais}")
	public List<Fragrance> getOriginCountry(@PathVariable String pais){
		return fservice.getFromOriginCountry(pais);
	}
	@PostMapping("/fragrance/save")
	public void saveFragrance(@RequestBody Fragrance which){
		fservice.save(which);
	}
	@PostMapping("/fragrance/status")
	public void statusFragrance(@RequestBody Long id) {
		fservice.status(id);
	}
}
