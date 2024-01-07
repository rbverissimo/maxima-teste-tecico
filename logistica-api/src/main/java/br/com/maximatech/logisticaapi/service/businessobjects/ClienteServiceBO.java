package br.com.maximatech.logisticaapi.service.businessobjects;

import java.util.ArrayList;

import org.springframework.util.CollectionUtils;
import org.springframework.util.StringUtils;

import br.com.maximatech.logisticaapi.model.Cliente;

public abstract class ClienteServiceBO {
	
	protected boolean validar(Cliente cliente) {
		if(CollectionUtils.isEmpty(cliente.getListaErros())) {			
			cliente.setListaErros(new ArrayList<>());
		}
			
		boolean validacao = true;
			
		String cepCliente = cliente.getEndereco().getCep();
		String logradouroCliente = cliente.getEndereco().getLogradouro();
		String complementoCliente = cliente.getEndereco().getComplemento();
			
		if(cepCliente == null || cepCliente.equals("")) {
			cliente.getListaErros()
			.add("O CEP é inválido ou nulo. O CEP precisa ser declarado");
			validacao = false;
		}
			
		if(!StringUtils.hasLength(logradouroCliente)) {
			cliente.getListaErros()
			.add("O Logradouro é inválido ou nulo. O Logradouro precisa ser declarado");
			validacao = false;
		}
			
		if(complementoCliente == null || complementoCliente.equals("")) {
				cliente.getListaErros()
				.add("O Complemento é inválido ou nulo. O Complemento precisa ser declarado");
				validacao = false;
		}
			
		return validacao;
	}
		
}
