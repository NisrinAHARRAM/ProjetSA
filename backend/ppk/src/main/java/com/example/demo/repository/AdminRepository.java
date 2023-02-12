package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.Admin;
import com.example.demo.model.Demandv;

public interface AdminRepository  extends JpaRepository<Admin, Long> {

}