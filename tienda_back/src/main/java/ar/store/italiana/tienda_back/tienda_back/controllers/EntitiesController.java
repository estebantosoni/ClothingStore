package ar.store.italiana.tienda_back.tienda_back.controllers;

import ar.store.italiana.tienda_back.tienda_back.models.Dress;
import ar.store.italiana.tienda_back.tienda_back.models.Fragrance;
import ar.store.italiana.tienda_back.tienda_back.services.DressService;
import ar.store.italiana.tienda_back.tienda_back.services.FragranceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import ar.store.italiana.tienda_back.tienda_back.models.User;
import ar.store.italiana.tienda_back.tienda_back.services.UserService;

import java.util.List;


//	IMPORTANTE (DUDA)

	// SE PUEDE USAR UN SOLO CONTROLADOR PARA LAS 3 ENTIDADES, PERO TAL VEZ POR MOTIVOS DE ORDEN SE PUEDE HACER UNA MAS PARA LAS DOS CATEGORIAS


@RestController										//AGREGO REST
@CrossOrigin
@RequestMapping("/interface")							//POR DEFECTO LO DEJAMOS EN API, PERO HAY QUE VER QUE HACEMOS EN EL FRONT
public class EntitiesController {					//LA CLASE TODAVIA NO ESTÁ DEFINIDA PARA UNA ENTIDAD PARTICULAR, MAS ADELANTE SE PUEDE CAMBIAR EL NOMBRE
	@Autowired
	private UserService uservice;
	@Autowired
	private DressService dservice;
	@Autowired
	private FragranceService fservice;
	//USER SECTOR
	@PostMapping("/user")
	public boolean checkIfUserExists(@RequestBody User usuario) {
		return uservice.checkUser(usuario);
	}
	
	
	//DRESS SECTOR
	@GetMapping("/dress/all")
	public List<Dress> getAllDresses(){
		return dservice.getAllDresses();
	}
	
	@GetMapping("dress/obj/{codigo}")
	public Dress getObjD(@PathVariable String codigo) {
		return dservice.getObjD(codigo);
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
}
