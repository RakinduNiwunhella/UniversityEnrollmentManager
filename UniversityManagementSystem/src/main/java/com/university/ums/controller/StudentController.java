package com.university.ums.controller;

import com.university.ums.entity.Student;
import com.university.ums.service.StudentService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/students")
@CrossOrigin(origins = "http://localhost:5173")
public class StudentController {

    private final StudentService service;

    public StudentController(StudentService service) {
        this.service = service;
    }

    @PostMapping
    public Student create(@RequestBody Student student) {
        System.out.println("STUDENT RECEIVED: " + student.getEmail());
        return service.save(student);
    }

    @GetMapping
    public List<Student> getAll() {
        return service.getAll();
    }
}