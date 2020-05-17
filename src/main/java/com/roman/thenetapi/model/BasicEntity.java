package com.roman.thenetapi.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

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
    private LocalDateTime lastUpdate = LocalDateTime.now();

    @PrePersist
    public void toCreate() {
        setCreated(LocalDateTime.now());
    }

    @PreUpdate
    public void toUpdate() {
        setLastUpdate(LocalDateTime.now());
    }
}
