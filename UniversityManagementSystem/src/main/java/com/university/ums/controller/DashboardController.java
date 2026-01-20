package com.university.ums.controller;

import com.university.ums.repository.StudentRepository;
import com.university.ums.repository.LecturerRepository;
import com.university.ums.repository.AlumniRepository;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/dashboard")
@CrossOrigin(origins = "http://localhost:5173")
public class DashboardController {

    private final StudentRepository studentRepo;
    private final LecturerRepository lecturerRepo;
    private final AlumniRepository alumniRepo;

    public DashboardController(
            StudentRepository studentRepo,
            LecturerRepository lecturerRepo,
            AlumniRepository alumniRepo
    ) {
        this.studentRepo = studentRepo;
        this.lecturerRepo = lecturerRepo;
        this.alumniRepo = alumniRepo;
    }

    @GetMapping("/stats")
    public Map<String, Long> getStats() {
        return Map.of(
                "students", studentRepo.count(),
                "lecturers", lecturerRepo.count(),
                "alumni", alumniRepo.count()
        );
    }
}