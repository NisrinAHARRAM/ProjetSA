package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.Demandv;
import com.example.demo.model.DriveLink;

public interface DriveLinkRepository extends JpaRepository<DriveLink, Long>{

}
