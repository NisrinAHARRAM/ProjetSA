package com.example.demo.model;

import java.util.Collection;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import org.hibernate.annotations.NotFound;
import org.hibernate.annotations.NotFoundAction;

import com.fasterxml.jackson.annotation.JsonBackReference;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
@Data @AllArgsConstructor @NoArgsConstructor
@Entity
public class Liste {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "id")
	private long id;
	@Column(nullable = false)
	String sujet;
	@Column(nullable = false)
    String desc;
    @Column(nullable = false)
    String nbr;
	
    @NotFound(action = NotFoundAction.IGNORE)
    @ManyToOne(fetch = FetchType.LAZY, optional = true)
    @JsonBackReference(value="encadrant" )
    @JoinColumn(name="encadrant_id" ,nullable = true)
    private Encadrant encadrant;
    
    @OneToMany(cascade=CascadeType.ALL, mappedBy="liste",fetch = FetchType.LAZY)
   	private Collection<EnregistrerPostulation>  enregistrers;
	
    @OneToMany(cascade=CascadeType.ALL, mappedBy="liste",fetch = FetchType.LAZY)
   	private Collection<Validation>  validations;
	
}
