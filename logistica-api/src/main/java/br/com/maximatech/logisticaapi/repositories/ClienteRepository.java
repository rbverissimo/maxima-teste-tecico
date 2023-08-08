package br.com.maximatech.logisticaapi.repositories;

import org.springframework.data.jpa.repository.support.JpaEntityInformation;
import org.springframework.data.jpa.repository.support.SimpleJpaRepository;

import br.com.maximatech.logisticaapi.model.Cliente;
import jakarta.persistence.EntityManager;

public class ClienteRepository extends SimpleJpaRepository<Cliente, Long> {

	public ClienteRepository(JpaEntityInformation<Cliente, ?> entityInformation, EntityManager entityManager) {
		super(entityInformation, entityManager);
	}
}
