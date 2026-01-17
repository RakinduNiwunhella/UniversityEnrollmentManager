package com.university.ums.service;

import com.university.ums.entity.Alumni;
import com.university.ums.repository.AlumniRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AlumniService {

    private final AlumniRepository repo;

    public AlumniService(AlumniRepository repo) {
        this.repo = repo;
    }

    public Alumni save(Alumni alumni) {
        return repo.save(alumni);
    }

    public List<Alumni> getAll() {
        return repo.findAll();
    }
}