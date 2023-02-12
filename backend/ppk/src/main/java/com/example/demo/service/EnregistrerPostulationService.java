package com.example.demo.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import com.example.demo.excpetion.ResourceNotFoundException;
import com.example.demo.model.EnregistrerPostulation;
import com.example.demo.repository.EnregistrerPostulationRepository;
import com.example.demo.repository.EtudiantRepository;

@Service
public class EnregistrerPostulationService {
	@Autowired
	EnregistrerPostulationRepository en;
	@Autowired
	private JavaMailSender mailSender;
	@Autowired
	private EtudiantRepository etudiantRepository;




	public List<EnregistrerPostulation> getAllEtudiants(){
					   return en.findAll();
		}

	public List<EnregistrerPostulation> getAllEmployees(){
		return en.findAll();
	}

	public Optional<EnregistrerPostulation> serchEtudiants(Long id){
		   return en.findById(id);
	}	   
	 public void addEtudiant(EnregistrerPostulation p) {
	   
	     	 en.save(p);
	 }
	 public void deleteEtudiant(Long id) {
			en.deleteById(id);
		}

	public EnregistrerPostulation updateEtudiant(EnregistrerPostulation p) {
					
					  return (EnregistrerPostulation) en.save(p);
		}
					
	public ResponseEntity<Map<String, Boolean>> deleteEmployee(Long id){
		EnregistrerPostulation etudiant = en.findById(id).orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id :" + id));
		en.delete(etudiant);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}

	public ResponseEntity<EnregistrerPostulation> updateEmployee( Long id, EnregistrerPostulation employeeDetails){
		EnregistrerPostulation employee = en.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id :" + id));
		employee.setIdE(employeeDetails.getIdE());
		employee.setAppogeT1(employeeDetails.getAppogeT1());
		employee.setNomET1(employeeDetails.getNomET1());;
		
		employee.setAppogeT2(employeeDetails.getAppogeT2());
		employee.setNomET2(employeeDetails.getNomET2());;
		
		employee.setAppogeT3(employeeDetails.getAppogeT3());
		employee.setNomET3(employeeDetails.getNomET3());;
		
		EnregistrerPostulation updatedEmployee = en.save(employee);
		return ResponseEntity.ok(updatedEmployee);
	}
/*
	public Etudiant register(Etudiant employee) {
			employee.setEnabled(false);
			String randomcode = RandomString.make(64);
			employee.setVerificationCode(randomcode);
			
			return en.save(employee);

		   // sendVerificationEmail(employee, randomcode);
		}

	public void sendVerificationEmail(Etudiant user ,String siteURL)
			  		throws MessagingException, UnsupportedEncodingException {
			    String toAddress = user.getEmaiE();
			    //String fromAddress = "Your email address";
			  
			    String senderName = "univetsty";
			    String subject = "Please verify your registration";
			   
		        String content = "Dear [[name]],<br>"
		                + "Please click the link below to verify your registration:<br>"
		                + "<h3><a href=\"[[URL]]\" target=\"_self\">VERIFY</a></h3>"
		                + "Thank you,<br>"
		                + "Your company name.";
		        
			    MimeMessage message = mailSender.createMimeMessage();
			    MimeMessageHelper helper = new MimeMessageHelper(message);
			    
			   
			    helper.setFrom("ahniso199@gmail.com", senderName);
			    helper.setTo(toAddress);
			    helper.setSubject(subject);
			     
			    content = content.replace("[[name]]", user.getNomE());
			    String verifyURL = siteURL + "/verify?code=" + user.getVerificationCode();
			     
			    content = content.replace("[[URL]]", verifyURL);
			     
			    helper.setText(content, true);
			     
			    mailSender.send(message);
			     
			
	}


	public boolean verify(String verificationCode) {
	    Etudiant user = en.findByVerificationCode(verificationCode);
	     
	    if (user == null || user.isEnabled()) {
	        return false;
	    } else {
	        user.setVerificationCode(null);
	        user.setEnabled(true);
	        en.save(user);
	         
	        return true;
	    }
	     
	}*/
	public ResponseEntity<EnregistrerPostulation> getEmployeeById( Long id) {
		EnregistrerPostulation employee = en.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id :" + id));
		return ResponseEntity.ok(employee);
	}
	public EnregistrerPostulation getEtudiantById(Long id) {
	    return en.findById(id).orElse(null);
	}

	public EnregistrerPostulation findById(Long id) {
	    return en.findById(id).orElse(null);
	}
	public EnregistrerPostulation createListe(EnregistrerPostulation employee) {
		return en.save(employee);
}
	
	public List<EnregistrerPostulation> getEnregistrerByAppogeT1(Long appogeT1) {
	    return en.findByAppogeT1(appogeT1);
	}
	
	public void deleteEnr(Long appogeT1) {
		en.deleteByappogeT1(appogeT1);
	}

}
