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
import com.example.demo.model.Liste;
import com.example.demo.model.Validation;
import com.example.demo.service.DemandvService;

@RestController
public class DemandvController {
	
	

	@Autowired
	private DemandvService demandvService;
	
	@GetMapping("/demand")
	public List<Demandv> getAllListe(){
		return demandvService.getAllEtudiants();
	}

	@PostMapping("/demand")
	Demandv createListe(@RequestBody Demandv employee) {

		return demandvService.createListe(employee) ;
}
	@GetMapping("/demand/{id}")
	public ResponseEntity<Demandv> getListeById(@PathVariable Long id) {
		return demandvService.getEmployeeById(id);
	}
	@DeleteMapping("/demand/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteEmployee(@PathVariable Long id){
		return demandvService.deleteEmployee(id);
	}


}
