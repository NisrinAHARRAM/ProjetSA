package com.example.demo.model;

import java.util.Collection;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import org.springframework.data.annotation.Transient;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
@Data @AllArgsConstructor @NoArgsConstructor
@Entity
@Table(name="encadrants")
public class Encadrant {
	@Id
	@Column(name = "id",unique = true)
	private long id;

	@Column(name = "email", nullable = false, unique = true)
	private String email;
	
	@Column(name = "Mot de passe",nullable = false, unique = true)
	@Transient
	private String password;
	
	@Column(name = "Nom",nullable = false)
	private String nom;
	
	@Column(name = "Prenom",nullable = false)
	private String prenom;
	
	@Column(name = "Departement",nullable = false)
	private String departement;
	
	@Column(name = "verification_code", length = 64)
	private String verificationCode;  
	private boolean enabled;
	
	@OneToMany(cascade=CascadeType.ALL, mappedBy="encadrant",fetch = FetchType.LAZY)
	private Collection<Liste>  listes;
	
	@OneToMany(cascade=CascadeType.ALL, mappedBy="encadrant",fetch = FetchType.LAZY)
	private Collection<Groupe>  groupes;
	
	@OneToMany(cascade=CascadeType.ALL, mappedBy="encadrant",fetch = FetchType.LAZY)
	private Collection<Jery>  jerys;
}