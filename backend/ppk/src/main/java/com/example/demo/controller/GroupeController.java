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
import com.example.demo.model.Groupe;
import com.example.demo.model.Liste;
import com.example.demo.model.Validation;
import com.example.demo.service.DemandvService;
import com.example.demo.service.GroupeService;

@RestController
public class GroupeController {

	@Autowired
	private GroupeService demandvService;
	
	@GetMapping("/Groupe")
	public List<Groupe> getAllListe(){
		return demandvService.getAllEtudiants();
	}

	@PostMapping("/Groupe")
	Groupe createListe(@RequestBody Groupe employee) {

		return demandvService.createListe(employee) ;
}
	@GetMapping("/Groupe/{id}")
	public ResponseEntity<Groupe> getListeById(@PathVariable Long id) {
		return demandvService.getEmployeeById(id);
	}
	@DeleteMapping("/Groupe/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteEmployee(@PathVariable Long id){
		return demandvService.deleteEmployee(id);
	}
	


}
