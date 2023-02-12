package com.example.demo.repository;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.demo.model.EnregistrerPostulation;
public interface EnregistrerPostulationRepository extends JpaRepository<EnregistrerPostulation, Long>{

	List<EnregistrerPostulation> findByAppogeT1(Long appogeT1);
	
	
	@Transactional
	@Modifying
	@Query(value = "DELETE FROM EnregistrerPostulation e WHERE e.appogeT1 = :appogeT1")
	 void deleteByappogeT1(@Param("appogeT1") Long appogeT1);
	
	
}
