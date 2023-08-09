package br.com.maximatech.logisticaapi.utilitarios.entidades;

public class Filtro {
	
	private int paginaAtual;
	private int registrosPorPagina;
	
	public int getPaginaAtual() {
		return paginaAtual;
	}
	public void setPaginaAtual(int paginaAtual) {
		this.paginaAtual = paginaAtual;
	}
	public int getRegistrosPorPagina() {
		return registrosPorPagina;
	}
	public void setRegistrosPorPagina(int registrosPorPagina) {
		this.registrosPorPagina = registrosPorPagina;
	}
	
	

}
