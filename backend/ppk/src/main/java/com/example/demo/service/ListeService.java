package com.example.demo.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.example.demo.excpetion.ResourceNotFoundException;
import com.example.demo.model.Etudiant;
import com.example.demo.model.Liste;
import com.example.demo.repository.EtudiantRepository;
import com.example.demo.repository.ListeRepository;

@Service
public class ListeService {
	@Autowired
	ListeRepository en;
	
	@Autowired
	private EtudiantRepository etudiantRepository;
	
	@Autowired
	private ListeRepository listeRepository;


public List<Liste> getAllListe(){
					   return en.findAll();
}

public List<Liste> getAllEmployees(){
		return en.findAll();
}

public Optional<Liste> serchEtudiants(Long id){
		   return en.findById(id);
}	   
 public Liste addEtudiant(Liste p) {
	return (Liste) en.save(p);
}
	 
 public void deleteEtudiant(Long id) {
			en.deleteById(id);
		}

public Liste updateEtudiant(Liste p) {
					
					  return (Liste) en.save(p);
		}
					
public ResponseEntity<Map<String, Boolean>> deleteEmployee(Long id){
	Liste etudiant = en.findById(id).orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id :" + id));
		en.delete(etudiant);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}

public ResponseEntity<Liste> updateEmployee( Long id, Liste employeeDetails){
	Liste employee = en.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id :" + id));
		employee.setId(employeeDetails.getId());
		employee.setSujet(employeeDetails.getSujet());;
		employee.setDesc(employeeDetails.getDesc());
		employee.setNbr(employeeDetails.getNbr());
		Liste updatedEmployee = en.save(employee);
		return ResponseEntity.ok(updatedEmployee);
	}


public ResponseEntity<Liste> getEmployeeById( Long id) {
	Liste employee = en.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id :" + id));
		return ResponseEntity.ok(employee);
	}




public Liste createEmployee(Liste employee) {
			return en.save(employee);
}

public Etudiant getEtudiantById(Long id) {
    return etudiantRepository.findById(id).orElse(null);
}



public Liste saveListe(Liste liste) {
    return listeRepository.save(liste);
}

public Liste save(Liste liste) {
    return listeRepository.save(liste);
}


}
