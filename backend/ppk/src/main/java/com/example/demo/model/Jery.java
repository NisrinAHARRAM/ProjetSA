package com.example.demo.model;

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

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data @AllArgsConstructor @NoArgsConstructor
@Entity
public class Jery {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "idJ")
	private long idJ;
	private long idE;

	@NotFound(action = NotFoundAction.IGNORE)
    @ManyToOne(fetch = FetchType.LAZY, optional = true)
    @JsonBackReference(value="encadrant" )
    @JoinColumn(name="encadrant_id" ,nullable = true)
    private Encadrant encadrant;
	
	@NotFound(action = NotFoundAction.IGNORE)
    @ManyToOne(fetch = FetchType.LAZY, optional = true)
    @JsonBackReference(value="validation" )
    @JoinColumn(name="validation_id" ,nullable = true)
    private Validation validation;
}
