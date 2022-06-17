package ar.store.italiana.tienda_back.tienda_back.services;

import ar.store.italiana.tienda_back.tienda_back.models.User;

public interface ServiceInterface {
	
	//DEFINO LOS PROTOTIPOS DE LAS FUNCIONES QUE VAN A REALIZAR PUT, POST, GET O DELETE
	
	//(DUDA) PUEDO USAR LA MISMA INTERFAZ DE SERVICIO PARA TODAS LAS ENTIDADES
	
	boolean checkUser(User user);
	
	
}
