package br.com.maximatech.logisticaapi.service;

import java.util.ArrayList;
import java.util.List;
import java.util.logging.Logger;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import br.com.maximatech.logisticaapi.exception.RecursoNaoEncontradoException;
import br.com.maximatech.logisticaapi.model.Cliente;
import br.com.maximatech.logisticaapi.repositories.ClienteRepository;

@Service
public class ClienteService {
	
	private Logger logger = Logger.getLogger(ClienteService.class.getName());
	
	@Autowired
	ClienteRepository repository;
	
	
	
	public Cliente create(Cliente cliente) {
		logger.info("Inserindo cliente no banco de dados!");
		
		return repository.save(cliente);
	}

	public List<Cliente> findAll(){
		
		logger.info("Buscando todos os clientes do banco de dados!");
		return repository.findAll();
	}
	
	
	public Page<Cliente> findAll(int pagina, int registrosPorPagina){
		Pageable pageable = PageRequest.of(pagina, registrosPorPagina);
		return repository.findAll(pageable);
	}
	
	
	public Cliente findById(Long id) {
		logger.info("Buscando o cliente pelo código:" + id);
		return repository.findById(id)
				.orElseThrow(() ->
				new RecursoNaoEncontradoException("O cliente não foi encontrado pelo código:" + id));
	}
	
	public Cliente update(Cliente cliente) {
		
		logger.info("Alterando o cliente de código: " + cliente.getCodigo());
		
		Cliente entity = findById(cliente.getCodigo());
		
		entity.setNome(cliente.getNome());
		entity.setCnpj(cliente.getCnpj());
		entity.setEndereco(cliente.getEndereco());
		
		return repository.save(cliente);
	}
	
	public void delete(Long id) {
		logger.info("Removendo cliente pelo código: " + id);
		
		Cliente entity = findById(id);
		
		repository.delete(entity);
	}
}
