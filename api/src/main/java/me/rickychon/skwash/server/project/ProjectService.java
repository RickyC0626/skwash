package me.rickychon.skwash.server.project;

import me.rickychon.skwash.server.project.adapters.repositories.InMemoryProjectRepository;
import me.rickychon.skwash.server.project.ports.ProjectRepository;
import me.rickychon.skwash.server.project.use_cases.CreateProject;
import me.rickychon.skwash.server.project.use_cases.FindProject;

public class ProjectService {
    private final ProjectRepository projectRepo = new InMemoryProjectRepository();

    public CreateProject createProject() {
        return new CreateProject(projectRepo);
    }

    public FindProject findProject() {
        return new FindProject(projectRepo);
    }
}
