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
import com.example.demo.model.EnregistrerPostulation;
import com.example.demo.model.Liste;
import com.example.demo.service.EnregistrerPostulationService;
@RestController
public class EnregistrerPostulationController {
	@Autowired
	private EnregistrerPostulationService EnregistrerService;
	@GetMapping("/Enregistrer")
	public List<EnregistrerPostulation> getAllListe(){
		return EnregistrerService.getAllEmployees();
	}


	@GetMapping("/Enregistrer/{id}")
	public ResponseEntity<EnregistrerPostulation> getListeById(@PathVariable Long id) {
		return EnregistrerService.getEmployeeById(id);
	}

	@PutMapping("/Enregistrer/{id}")
	public ResponseEntity<EnregistrerPostulation> updateEmployee(@PathVariable Long id, @RequestBody EnregistrerPostulation employeeDetails){
		return EnregistrerService.updateEmployee( id, employeeDetails);
	}
	@DeleteMapping("/Enregistrer/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteEmployee(@PathVariable Long id){
		return EnregistrerService.deleteEmployee(id);
	}

	@PostMapping("/enregister")
	EnregistrerPostulation createListe(@RequestBody EnregistrerPostulation employee) {
			return EnregistrerService.createListe(employee) ;
	}
	@PostMapping("/enregis")
	EnregistrerPostulation createList(@RequestBody EnregistrerPostulation employee) {
		    Long nb=(long) 0;
		    String va = null;
			EnregistrerPostulation en=new EnregistrerPostulation();
			en.setAppogeT1(employee.getAppogeT1());
			en.setAppogeT2(employee.getAppogeT2());
			en.setAppogeT3(nb);
			en.setNomET1(employee.getNomET1());
			en.setNomET2(employee.getNomET2());
			en.setNomET3(va);
			return EnregistrerService.createListe(en) ;
	}
	
	@GetMapping("/enreg/{appogeT1}")
	public List<EnregistrerPostulation> getEnregistrerByAppogeT1(@PathVariable Long appogeT1) {
	    return EnregistrerService.getEnregistrerByAppogeT1(appogeT1);
	}
	
	@DeleteMapping("/delte/{appogeT1}")
	public void deleteEn(@PathVariable Long appogeT1){
		EnregistrerService.deleteEnr(appogeT1);
	}
	
}
