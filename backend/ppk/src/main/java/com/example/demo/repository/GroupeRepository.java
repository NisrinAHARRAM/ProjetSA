package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.Etudiant;
import com.example.demo.model.Groupe;

public interface GroupeRepository extends JpaRepository<Groupe, Long> {

}
