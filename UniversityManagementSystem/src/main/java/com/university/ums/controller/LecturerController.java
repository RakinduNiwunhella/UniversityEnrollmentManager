package com.university.ums.controller;

import com.university.ums.entity.Lecturer;
import com.university.ums.service.LecturerService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/lecturers")
public class LecturerController {

    private final LecturerService service;

    public LecturerController(LecturerService service) {
        this.service = service;
    }

    @PostMapping
    public Lecturer create(@RequestBody Lecturer lecturer) {
        return service.save(lecturer);
    }

    @GetMapping
    public List<Lecturer> getAll() {
        return service.getAll();
    }
}