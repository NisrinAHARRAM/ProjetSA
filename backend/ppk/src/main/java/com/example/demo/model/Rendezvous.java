package com.example.demo.model;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import org.hibernate.annotations.NotFound;
import org.hibernate.annotations.NotFoundAction;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data @AllArgsConstructor @NoArgsConstructor
@Entity
public class Rendezvous {
	 @Id
	 @GeneratedValue(strategy = GenerationType.AUTO)
	 @Column(name = "idMatch")
	 private Long idMatch;
	 @JsonFormat(pattern = "yyyy-MM-dd")
	 private LocalDate date;
	// @JsonFormat(pattern = "hh:mm:ss ")
	 private String heure;
	 
	@NotFound(action = NotFoundAction.IGNORE)
	@ManyToOne(fetch = FetchType.LAZY, optional = true)
	@JsonBackReference(value="liste" )
	@JoinColumn(name="liste_id" ,nullable = true)
	private Validation validation;
}
