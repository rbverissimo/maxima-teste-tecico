package br.com.maximatech.logisticaapi.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.maximatech.logisticaapi.model.Cliente;
import br.com.maximatech.logisticaapi.service.ClienteService;


@RestController
@CrossOrigin(origins ="http://localhost:4200")
@RequestMapping("/api/cliente")
public class ClienteController {
	
	@Autowired
	private ClienteService service;
	
	@GetMapping("/lista")
	public List<Cliente> findAll(){
		return service.findAll();
	}
	
	@GetMapping(value = "/{id}", 
			produces=MediaType.APPLICATION_JSON_VALUE)
	public Cliente findById(@PathVariable(value="id") Long id) {
		return service.findById(id);
	}
	
	
	@PostMapping(
				consumes=MediaType.APPLICATION_JSON_VALUE,
				produces=MediaType.APPLICATION_JSON_VALUE)
	public Cliente create(@RequestBody Cliente cliente) {
		return service.create(cliente);
	}
	
	@PutMapping(
				consumes=MediaType.APPLICATION_JSON_VALUE,
				produces=MediaType.APPLICATION_JSON_VALUE
			)
	public Cliente update(@RequestBody Cliente cliente) {
		return service.update(cliente);
	}
	
	
	@DeleteMapping(value = "/{id}")
	public ResponseEntity<?> delete(@PathVariable(value="id") Long id){
		service.delete(id);
		return ResponseEntity.noContent().build();
	}

}
