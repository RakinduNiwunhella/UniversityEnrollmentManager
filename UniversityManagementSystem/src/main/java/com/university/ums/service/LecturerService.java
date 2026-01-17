package com.university.ums.service;

import com.university.ums.entity.Lecturer;
import com.university.ums.repository.LecturerRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LecturerService {

    private final LecturerRepository repo;

    public LecturerService(LecturerRepository repo) {
        this.repo = repo;
    }

    public Lecturer save(Lecturer lecturer) {
        return repo.save(lecturer);
    }

    public List<Lecturer> getAll() {
        return repo.findAll();
    }
}