package me.rickychon.skwash.server.project.adapters.repositories;

import me.rickychon.skwash.server.project.entities.Project;
import me.rickychon.skwash.server.project.ports.ProjectRepository;

import java.util.*;

public class InMemoryProjectRepository implements ProjectRepository {
    private final Map<String, Project> inMemoryDb = new HashMap<>();

    @Override
    public Project create(Project project) {
        inMemoryDb.put(project.getId(), project);
        return project;
    }

    @Override
    public Optional<Project> findById(String id) {
        return Optional.ofNullable(inMemoryDb.get(id));
    }

    @Override
    public List<Project> findAll() {
        return new ArrayList<>(inMemoryDb.values());
    }
}
