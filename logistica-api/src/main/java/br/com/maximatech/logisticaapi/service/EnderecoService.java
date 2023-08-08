package br.com.maximatech.logisticaapi.service;

import java.util.logging.Logger;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.maximatech.logisticaapi.exception.RecursoNaoEncontradoException;
import br.com.maximatech.logisticaapi.model.Endereco;
import br.com.maximatech.logisticaapi.repositories.EnderecoRepository;

@Service
public class EnderecoService {
	
	private Logger logger = Logger.getLogger(EnderecoService.class.getName());
	
	@Autowired
	EnderecoRepository repository;
	
	
	public Endereco create(Endereco endereco) {
		logger.info("Adicionando um endereco ao banco de dados");
		return repository.save(endereco);
	}
	
	public Endereco findById(Long id) {
		
		logger.info("Buscando Endereço pelo código: " + id);
		
		return repository.findById(id)
				.orElseThrow(() 
				-> new RecursoNaoEncontradoException("Não foi encontrado o Endereço de código:" + id));
	}
	
	public Endereco update(Endereco endereco) {
		logger.info("Atualizando Endereço no código: " + endereco.getCodigo());
		
		Endereco entity = findById(endereco.getCodigo());
		
		entity.setCep(endereco.getCep());
		entity.setComplemento(endereco.getComplemento());
		entity.setLogradouro(endereco.getLogradouro());
		
		return repository.save(endereco);
	}
	
	public void delete(Long id) {
		logger.info("Deletando Endereço no código:" + id);
		
		Endereco entity = findById(id);
		
		repository.delete(entity);
	}

}
