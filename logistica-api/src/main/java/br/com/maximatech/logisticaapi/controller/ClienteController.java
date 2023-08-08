package br.com.maximatech.logisticaapi.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.maximatech.logisticaapi.model.Cliente;
import br.com.maximatech.logisticaapi.service.ClienteService;

@RestController
@RequestMapping("api/cliente")
@CrossOrigin(origins = "http://localhost:4200/") 
public class ClienteController {
	
	@Autowired
	private ClienteService service;
	
	@GetMapping("/lista")
	public List<Cliente> findAll(){
		return service.findAll();
	}
	
	@PostMapping(
				consumes=MediaType.APPLICATION_JSON_VALUE,
				produces=MediaType.APPLICATION_JSON_VALUE)
	public Cliente create(@RequestBody Cliente cliente) {
		return service.create(cliente);
	}

}
