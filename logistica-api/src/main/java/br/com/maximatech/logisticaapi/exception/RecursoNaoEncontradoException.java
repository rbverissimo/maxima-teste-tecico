package br.com.maximatech.logisticaapi.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class RecursoNaoEncontradoException extends RuntimeException {


	private static final long serialVersionUID = -2004485462542841970L;

	public RecursoNaoEncontradoException(String mensagem) {
		super(mensagem);
	}
	

}
