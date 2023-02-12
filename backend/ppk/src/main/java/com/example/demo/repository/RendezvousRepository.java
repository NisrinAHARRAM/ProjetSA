package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.Rendezvous;

public interface RendezvousRepository extends JpaRepository<Rendezvous, Long>{

}
