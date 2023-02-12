package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;


import com.example.demo.model.Liste;



public interface ListeRepository extends JpaRepository<Liste, Long>{

	//boolean findBy(String email);

}
