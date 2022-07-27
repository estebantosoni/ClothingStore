package ar.store.italiana.tienda_back.tienda_back.models;

import lombok.Data;

@Data
public class MessageResponse {
	private String message;
	private Long id;

	public MessageResponse(String message){
		this.message = message;
	}
	public MessageResponse(String message,Long id){
		this.message = message;
		this.id = id;
	}
}
