package com.example.demo.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Demandv;
import com.example.demo.model.Jery;
import com.example.demo.model.Liste;
import com.example.demo.model.Validation;
import com.example.demo.service.DemandvService;
import com.example.demo.service.JeryService;

@RestController

	

public class JeryController {

	@Autowired
	private JeryService demandvService;
	
	@GetMapping("/Jery")
	public List<Jery> getAllListe(){
		return demandvService.getAllEtudiants();
	}

	@PostMapping("/Jery")
	Jery createListe(@RequestBody Jery employee) {

		return demandvService.createListe(employee) ;
}
	@GetMapping("/Jery/{id}")
	public ResponseEntity<Jery> getListeById(@PathVariable Long id) {
		return demandvService.getEmployeeById(id);
	}
	@DeleteMapping("/Jery/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteEmployee(@PathVariable Long id){
		return demandvService.deleteEmployee(id);
	}


}
