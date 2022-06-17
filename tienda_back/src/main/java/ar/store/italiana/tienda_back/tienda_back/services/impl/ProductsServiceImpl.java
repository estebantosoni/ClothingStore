package ar.store.italiana.tienda_back.tienda_back.services.impl;

import ar.store.italiana.tienda_back.tienda_back.models.User;
import ar.store.italiana.tienda_back.tienda_back.repositories.DressRepository;
import ar.store.italiana.tienda_back.tienda_back.repositories.FragranceRepository;
import ar.store.italiana.tienda_back.tienda_back.services.ServiceInterface;

public class ProductsServiceImpl implements ServiceInterface{

	private DressRepository drepo;
	private FragranceRepository frepo;
	
	//TENGO QUE AGREGAR SI O SI CUALQUIER METODO DEFINIDO EN ServiceInterface PORQUE SINO ME TIRA ERROR
	// LO QUE DEBERIAMOS HACER ES CREAR OTRA INTERFAZ, LA CUAL FUNCIONA CONCRETAMENTE PARA DRESS Y FRAGRANCE
	
	@Override
	public boolean checkUser(User user) {
		return false;
	}
	
	//DEFINO LAS FUNCIONES QUE VAN A LLAMAR AL REPOSITORIO Y VAN A MODIFICAR LA BASE DE DATOS
	
}
