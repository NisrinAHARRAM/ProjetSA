package com.example.demo.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.demo.model.Etudiant;

public interface EtudiantRepository extends JpaRepository<Etudiant, Long> {
	
	@Query("SELECT u FROM Etudiant u WHERE u.emaiE = ?1")
	  Etudiant findByEmail(String email);
	  @Query("SELECT u FROM Etudiant u WHERE u.verificationCode = ?1")
	  public Etudiant findByVerificationCode(String code);
	  
	 @Query("SELECT e.appoge FROM Etudiant e WHERE e.emaiE = :email")
	  Long findByEmaiE(@Param("email") String email);

}
