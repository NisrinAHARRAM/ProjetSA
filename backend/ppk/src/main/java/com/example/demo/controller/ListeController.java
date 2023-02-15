package com.example.demo.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.persistence.ManyToOne;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.excpetion.ResourceNotFoundException;
import com.example.demo.model.Etudiant;
import com.example.demo.model.Liste;

import com.example.demo.repository.ListeRepository;
import com.example.demo.service.EtudiantService;
import com.example.demo.service.ListeService;

@RestController
public class ListeController {


@Autowired

ListeService en;
ListeRepository at;

@Autowired
private ListeService listeService;
@Autowired
private EtudiantService etudiantService;


@GetMapping("/Liste")
public List<Liste> getAllListe(){
	return en.getAllEmployees();
}


@GetMapping("/Liste/{id}")
public ResponseEntity<Liste> getEmployeeById(@PathVariable Long id) {
	return en.getEmployeeById(id);
}

@PutMapping("/Liste/{id}")
public ResponseEntity<Liste> updateEmployee(@PathVariable Long id, @RequestBody Liste employeeDetails){
	return en.updateEmployee( id, employeeDetails);
}
@DeleteMapping("/Liste/{id}")
public ResponseEntity<Map<String, Boolean>> deleteEmp(@PathVariable Long id){
	return en.deleteEmployee(id);
}



@DeleteMapping("/LISTE/{id}")
public ResponseEntity<Map<String, Boolean>> deleteSuj(@PathVariable Long id){
	Liste encadrant = at.findById(id)
			.orElseThrow(() -> new ResourceNotFoundException("Encadrant not found with id :"+id));
	at.delete(encadrant);
	Map<String, Boolean> response = new HashMap<>();
	response.put("deleted", Boolean.TRUE);
	return ResponseEntity.ok(response);
}







@PostMapping("/Liste")
public Liste createEmployee(@RequestBody Liste employee) {
		return en.createEmployee(employee) ;
	}

/*
@PostMapping("/liste")
public ResponseEntity<Liste> addListe(@RequestBody Liste liste, @RequestParam("etudiantId") Long etudiantId) {
    Etudiant etudiant = etudiantService.getEtudiantById(etudiantId);
    liste.setEtudiant(etudiant);
    Liste savedListe = listeService.saveListe(liste);
    return new ResponseEntity<>(savedListe, HttpStatus.CREATED);
}*/
/*
@PostMapping
public ResponseEntity<Liste> addListe(@RequestBody Liste liste) {
    Etudiant etudiant = etudiantService.findById(liste.getEtudiant().getAppoge());
    if (etudiant == null) {
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }
    liste.setEtudiant(etudiant);
    Liste savedListe = listeService.save(liste);
    return new ResponseEntity<>(savedListe, HttpStatus.CREATED);
}
*/

}
