package me.rickychon.skwash.server.project.adapters.controllers;

import me.rickychon.skwash.server.project.adapters.controllers.models.ProjectWeb;
import me.rickychon.skwash.server.project.interfaces.ProjectController;
import me.rickychon.skwash.server.project.use_cases.CreateProject;
import me.rickychon.skwash.server.project.use_cases.FindProject;

import java.util.List;
import java.util.stream.Collectors;

public class WebProjectController implements ProjectController {
    private final CreateProject createProject;
    private final FindProject findProject;

    public WebProjectController(final CreateProject createProject, final FindProject findProject) {
        this.createProject = createProject;
        this.findProject = findProject;
    }

    @Override
    public ProjectWeb createProject(final ProjectWeb projectWeb) {
        var project = projectWeb.toProject();
        return ProjectWeb.toProjectWeb(createProject.create(project));
    }

    @Override
    public ProjectWeb getProject(final String projectId) {
        var project = findProject.findById(projectId).orElseThrow(() -> new RuntimeException("Project not found"));
        return ProjectWeb.toProjectWeb(project);
    }

    @Override
    public List<ProjectWeb> getAllProjects() {
        return findProject.findAll()
            .stream()
            .map(ProjectWeb::toProjectWeb)
            .collect(Collectors.toList());
    }
}
