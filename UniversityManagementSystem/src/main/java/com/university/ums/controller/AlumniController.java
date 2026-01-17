package com.university.ums.controller;

import com.university.ums.entity.Alumni;
import com.university.ums.service.AlumniService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/alumni")
public class AlumniController {

    private final AlumniService service;

    public AlumniController(AlumniService service) {
        this.service = service;
    }

    @PostMapping
    public Alumni create(@RequestBody Alumni alumni) {
        return service.save(alumni);
    }

    @GetMapping
    public List<Alumni> getAll() {
        return service.getAll();
    }
}