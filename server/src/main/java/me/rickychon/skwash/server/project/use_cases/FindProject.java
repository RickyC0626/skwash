package me.rickychon.skwash.server.project.use_cases;

import me.rickychon.skwash.server.project.entities.Project;
import me.rickychon.skwash.server.project.ports.ProjectRepository;
import me.rickychon.skwash.server.project.ports.ProjectUseCase;

import java.util.List;
import java.util.Optional;

public final class FindProject implements ProjectUseCase {
    private final ProjectRepository repo;

    public FindProject(final ProjectRepository repo) {
        this.repo = repo;
    }

    public Optional<Project> findById(final String id) {
        return repo.findById(id);
    }

    public List<Project> findAll() {
        return repo.findAll();
    }
}
