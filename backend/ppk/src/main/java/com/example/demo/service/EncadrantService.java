package com.example.demo.service;

import java.io.UnsupportedEncodingException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import com.example.demo.excpetion.ResourceNotFoundException;
import com.example.demo.model.Encadrant;
import com.example.demo.repository.EncadrantRepository;
import com.example.demo.repository.ListeRepository;

import net.bytebuddy.utility.RandomString;

@Service
public class EncadrantService {
@Autowired
EncadrantRepository en;
@Autowired
ListeRepository ls;
@Autowired
private JavaMailSender mailSender;
@Autowired
private EncadrantRepository encadrantRepository;




public List<Encadrant> getAllEncadrants(){
				   return en.findAll();
	}
/*
public List<Encadrant> getAllEmployees(){
	return en.findAll();
}
*/

public Optional<Encadrant> serchEncadrants(Long id){
	   return en.findById(id);
}	   
 public void addEncadrant(Encadrant p) {
   
     	 en.save(p);
 }
/*
 public void deleteEncadrant(Long id) {
		en.deleteById(id);
	}
*/

public Encadrant updateEncadrant(Encadrant p) {
				
				  return (Encadrant) en.save(p);
	}
				
public ResponseEntity<Map<String, Boolean>> deleteEncadrant(Long id){
	Encadrant encadrant = en.findById(id).orElseThrow(() -> new ResourceNotFoundException("Encadrant not exist with id :" + id));
	en.delete(encadrant);
	Map<String, Boolean> response = new HashMap<>();
	response.put("deleted", Boolean.TRUE);
	return ResponseEntity.ok(response);
}

public ResponseEntity<Encadrant> updateEncadrant( Long id, Encadrant employeeDetails){
	Encadrant employee = en.findById(id)
			.orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id :" + id));
	employee.setNom(employeeDetails.getNom());
	employee.setPrenom(employeeDetails.getPrenom());
	employee.setEmail(employeeDetails.getEmail());
	employee.setPassword(employeeDetails.getPassword());
	employee.setDepartement(employeeDetails.getDepartement());
		
	Encadrant updatedEmployee = en.save(employee);
	return ResponseEntity.ok(updatedEmployee);
}
public Encadrant register(Encadrant employee) {
		employee.setEnabled(false);
		String randomcode = RandomString.make(64);
		employee.setVerificationCode(randomcode);
		
		return en.save(employee);

	   // sendVerificationEmail(employee, randomcode);
	}

public void sendVerificationEmail(Encadrant user ,String siteURL)
  		throws MessagingException, UnsupportedEncodingException {
    String toAddress = user.getEmail();
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
    
   
    helper.setFrom("manalml751@gmail.com", senderName);
    helper.setTo(toAddress);
    helper.setSubject(subject);
     
    content = content.replace("[[name]]", user.getNom());
    String verifyURL = siteURL + "/verify_en?code=" + user.getVerificationCode();
     
    content = content.replace("[[URL]]", verifyURL);
     
    helper.setText(content, true);
     
    mailSender.send(message);
     

}


public boolean verify(String verificationCode) {
    Encadrant user = en.findByVerificationCode(verificationCode);
     
    if (user == null || user.isEnabled()) {
        return false;
    } else {
        user.setVerificationCode(null);
        user.setEnabled(true);
        en.save(user);
         
        return true;
    }
     
}
public ResponseEntity<Encadrant> getEncadrantById( Long id) {
	Encadrant employee = en.findById(id)
			.orElseThrow(() -> new ResourceNotFoundException("Encadrant not exist with id :" + id));
	return ResponseEntity.ok(employee);
}





public Encadrant createEncadrant(Encadrant employee) {
	
		return en.save(employee);
	}

/*
public Encadrant getEncadrantById(Long id) {
    return encadrantRepository.findById(id).orElse(null);
}
*/
public Encadrant findById(Long id) {
    return encadrantRepository.findById(id).orElse(null);
}
/*
public Long getAppogeByEmaiE(String email) {
    Long etudiant = en.findByEmaiE(email);
        return etudiant;
}
*/



}
