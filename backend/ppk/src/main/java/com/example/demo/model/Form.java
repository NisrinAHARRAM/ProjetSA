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
public class Form {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "idF")
	private long idF;
	@Column(nullable = false)
	Long appogeT1;
	@Column(nullable = false)
	Long appogeT2;
	@Column(nullable = true)
	Long appogeT3;
	@Column(nullable = false)
	String nomET1;
	@Column(nullable = false)
	String nomET2;
	@Column(nullable = true)
	String nomET3;
	String note;
	String notea;
	String noteP1;
	String noteP2;
	String noteP3;
	@NotFound(action = NotFoundAction.IGNORE)
    @ManyToOne(fetch = FetchType.LAZY, optional = true)
    @JsonBackReference(value="validation" )
    @JoinColumn(name="validation_id" ,nullable = true)
    private Validation validation;
}
