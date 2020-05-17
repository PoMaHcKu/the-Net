package com.roman.thenetapi.model;

import lombok.Data;

import javax.persistence.*;
import java.time.LocalDateTime;

@MappedSuperclass
@Data
public class BasicEntity {

    @Id
    private int id;

    @Column(name = "created", updatable = false)
    private LocalDateTime created;

    @Column(name = "last_update", insertable = false)
    private LocalDateTime lastUpdated = LocalDateTime.now();

    @PrePersist
    public void toCreate() {
        setCreated(LocalDateTime.now());
    }

    @PreUpdate
    public void toUpdate() {
        setLastUpdated(LocalDateTime.now());
    }
}
