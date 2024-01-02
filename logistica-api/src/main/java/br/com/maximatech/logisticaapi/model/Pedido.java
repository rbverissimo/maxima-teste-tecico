package br.com.maximatech.logisticaapi.model;

import java.util.Date;
import java.util.List;

import br.com.maximatech.logisticaapi.model.interfaces.LoteProduto;

public class Pedido {
	
	
	private final Cliente cliente;
	private final List<LoteProduto> produtos;
	private Double valorTotal;
	private Date dataLimiteEntrega;
	private Date dataFaturamento;
	
	public Double getValorTotal() {
		return valorTotal;
	}
	public void setValorTotal(Double valorTotal) {
		this.valorTotal = valorTotal;
	}
	public Date getDataLimiteEntrega() {
		return dataLimiteEntrega;
	}
	public void setDataLimiteEntrega(Date dataLimiteEntrega) {
		this.dataLimiteEntrega = dataLimiteEntrega;
	}
	public Date getDataFaturamento() {
		return dataFaturamento;
	}
	public void setDataFaturamento(Date dataFaturamento) {
		this.dataFaturamento = dataFaturamento;
	}
	public Cliente getCliente() {
		return cliente;
	}
	public List<LoteProduto> getProdutos() {
		return produtos;
	}
	
}
