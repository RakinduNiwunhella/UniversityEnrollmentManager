package com.university.ums.entity;

import jakarta.persistence.Entity;
import lombok.Data;

@Data
@Entity
public class Alumni extends BaseUser {

    private String graduationYear;
    private String currentCompany;
}