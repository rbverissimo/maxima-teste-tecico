package br.com.maximatech.logisticaapi.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.maximatech.logisticaapi.model.Cliente;

public interface ClienteRepository extends JpaRepository<Cliente, Long> {

}
