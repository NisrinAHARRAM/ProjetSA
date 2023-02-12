package com.example.demo.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Admin;
import com.example.demo.service.AdminService;

@RestController
public class AdminController {

	@Autowired
	private AdminService ValidationService;



	@GetMapping("/Admin")
	public List<Admin> getAllListe(){
		return ValidationService.getAllEmployees();
	}


	@GetMapping("/Admin/{id}")
	public ResponseEntity<Admin> getListeById(@PathVariable Long id) {
		return ValidationService.getEmployeeById(id);
	}
	@PutMapping("/Admin/{id}")
	public ResponseEntity<Admin> updateEmployee(@PathVariable Long id, @RequestBody Admin employeeDetails){
		return ValidationService.updateEmployee( id, employeeDetails);
	}

	@DeleteMapping("/Admin/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteEmployee(@PathVariable Long id){
		return ValidationService.deleteEmployee(id);
	}

	@PostMapping("/Admin")
	Admin createListe(@RequestBody Admin employee) {
			return ValidationService.createListe(employee) ;
	}

}