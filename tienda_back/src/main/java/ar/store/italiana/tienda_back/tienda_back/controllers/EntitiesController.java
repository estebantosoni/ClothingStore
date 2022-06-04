package ar.store.italiana.tienda_back.tienda_back.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ar.store.italiana.tienda_back.tienda_back.services.ServiceInterface;


//	IMPORTANTE (DUDA)

	// SE PUEDE USAR UN SOLO CONTROLADOR PARA LAS 3 ENTIDADES, PERO TAL VEZ POR MOTIVOS DE ORDEN SE PUEDE HACER UNA MAS PARA LAS DOS CATEGORIAS


@RestController										//AGREGO REST
//@CrossOrigin
//@RequestMapping("/api")							//POR DEFECTO LO DEJAMOS EN API, PERO HAY QUE VER QUE HACEMOS EN EL FRONT
public class EntitiesController {					//LA CLASE TODAVIA NO ESTÁ DEFINIDA PARA UNA ENTIDAD PARTICULAR, MAS ADELANTE SE PUEDE CAMBIAR EL NOMBRE
	
	@Autowired
	private ServiceInterface service;
	
	//ACÁ ABAJO SE VAN A IR AGREGANDO LOS ENDPOINTS (PUT, POST, DELETE, GET) CON SUS RESPECTIVAS FUNCIONES
	
}
