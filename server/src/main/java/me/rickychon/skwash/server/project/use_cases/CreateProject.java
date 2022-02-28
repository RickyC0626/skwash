package me.rickychon.skwash.server.project.use_cases;

import me.rickychon.skwash.server.project.entities.Project;
import me.rickychon.skwash.server.project.ports.ProjectRepository;
import me.rickychon.skwash.server.project.ports.ProjectUseCase;

public final class CreateProject implements ProjectUseCase {
    private final ProjectRepository repo;

    public CreateProject(final ProjectRepository repo) {
        this.repo = repo;
    }

    public Project create(final Project project) {
        var existing = repo.findById(project.getId());
        if(existing.isPresent())
            return existing.get();

        var p = Project.builder()
            .withName(project.getName())
            .build();
        return repo.create(p);
    }
}
