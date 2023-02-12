package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.demo.model.Encadrant;

public interface EncadrantRepository extends JpaRepository<Encadrant, Long> {
	
	  @Query("SELECT u FROM Encadrant u WHERE u.email = ?1")
	  Encadrant findByEmail(String email);
	  @Query("SELECT u FROM Encadrant u WHERE u.verificationCode = ?1")
	  public Encadrant findByVerificationCode(String code);
	  /*
	  @Query("SELECT e.id FROM Encadrant e WHERE e.emai = :email")
	  Long findByEmaiE(@Param("email") String email);
	  */
	  

}
