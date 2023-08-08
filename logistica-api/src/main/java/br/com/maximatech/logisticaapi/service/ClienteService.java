package br.com.maximatech.logisticaapi.service;

import java.util.List;
import java.util.logging.Logger;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.maximatech.logisticaapi.model.Cliente;
import br.com.maximatech.logisticaapi.repositories.ClienteRepository;

@Service
public class ClienteService {
	
	private Logger logger = Logger.getLogger(ClienteService.class.getName());
	
	@Autowired
	ClienteRepository repository;
	
	
	public List<Cliente> findAll(){
		
		logger.info("Buscando todos os clientes do banco de dados!");
		return repository.findAll();
	}
	
	public Cliente create(Cliente cliente) {
		logger.info("Inserindo cliente no banco de dados!");
		return repository.save(cliente);
	}

}
