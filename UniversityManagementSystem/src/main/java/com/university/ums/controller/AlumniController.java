package com.university.ums.controller;

import com.university.ums.entity.Alumni;
import com.university.ums.service.AlumniService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/alumni")
@CrossOrigin(origins = "http://localhost:5173")
public class AlumniController {

    private final AlumniService service;

    public AlumniController(AlumniService service) {
        this.service = service;
    }

    @PostMapping
    public Alumni create(@RequestBody Alumni alumni) {
        System.out.println("ALUMNI RECEIVED: " + alumni.getEmail());
        return service.save(alumni);
    }

    @GetMapping
    public List<Alumni> getAll() {
        return service.getAll();
    }
}