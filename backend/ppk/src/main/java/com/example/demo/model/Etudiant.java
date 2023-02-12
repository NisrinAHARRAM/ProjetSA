package com.example.demo.model;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonBackReference;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
@Data @AllArgsConstructor @NoArgsConstructor
@Entity

public class Etudiant {

	 @Id
	 @Column(unique = true)
	 long appoge;
	 @Column(nullable = false)
	  String nomE;
	 @Column(nullable = false)
	  String prenomE;
	 @Column(nullable = false)
	  String filierE;
	// @Column(nullable = false)
      String emaiE;
	 @Column(nullable = false)
      String motpasE;
	 @Column(name = "verification_code", length = 64)
	 private String verificationCode;  
	 private boolean enabled;
	 
	 
	 

}


