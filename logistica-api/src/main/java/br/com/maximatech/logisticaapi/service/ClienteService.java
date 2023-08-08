package br.com.maximatech.logisticaapi.service;

import java.util.logging.Logger;

import br.com.maximatech.logisticaapi.model.Cliente;
import br.com.maximatech.logisticaapi.repositories.ClienteRepository;

public class ClienteService {
	
	private Logger logger = Logger.getLogger(ClienteService.class.getName());
	
	ClienteRepository repository;
	
	public Cliente create(Cliente cliente) {
		logger.info("Inserindo cliente");
		return repository.save(cliente);
	}

}
