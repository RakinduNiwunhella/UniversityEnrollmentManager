package org.example.universitymanagementsystem.controller;

import org.example.universitymanagementsystem.model.Person;
import org.example.universitymanagementsystem.model.Student;
import org.example.universitymanagementsystem.service.EnrollmentManager;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class EnrollmentController {

    private final EnrollmentManager enrollmentManager;

    public EnrollmentController(EnrollmentManager enrollmentManager) {
        this.enrollmentManager = enrollmentManager;
    }

    @GetMapping("/people")
    public List<Person> getAllPeople() {
        return enrollmentManager.getAllPeople();
    }

    @GetMapping("/students")
    public List<Student> getAllStudents() {
        return enrollmentManager.getAllStudents();
    }

    @PostMapping("/people")
    public void addPerson(@RequestBody Person person) {
        enrollmentManager.addPerson(person);
    }

    @GetMapping("/search")
    public List<Person> searchById(@RequestParam String prefix) {
        return enrollmentManager.searchByIdPrefix(prefix);
    }
}