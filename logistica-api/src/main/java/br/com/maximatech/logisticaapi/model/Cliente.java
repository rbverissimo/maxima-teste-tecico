package br.com.maximatech.logisticaapi.model;

import java.io.Serializable;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonInclude;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import jakarta.persistence.Transient;

@Entity
@Table(name = "clientes")
public class Cliente implements Serializable{

	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long codigo;
	
	@Column(nullable = false, length = 80)
	private String nome;
	
	@Column(nullable = true, length = 18)
	private String cnpj;
	
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "endereco_id", referencedColumnName = "codigo")
	private Endereco endereco;
	
	@JsonInclude
	@Transient
	private List<String> listaErros;
	
	public Cliente() {
		
	}
	
	public Long getCodigo() {
		return codigo;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getCnpj() {
		return cnpj;
	}

	public void setCnpj(String cnpj) {
		this.cnpj = cnpj;
	}

	public Endereco getEndereco() {
		return endereco;
	}

	public void setEndereco(Endereco endereco) {
		this.endereco = endereco;
	}

	public List<String> getListaErros() {
		return listaErros;
	}

	public void setListaErros(List<String> listaErros) {
		this.listaErros = listaErros;
	}
	
}
