package me.rickychon.skwash.server.project.interfaces;

import me.rickychon.skwash.server.core.ports.Controller;
import me.rickychon.skwash.server.project.adapters.controllers.models.ProjectWeb;
import me.rickychon.skwash.server.project.ports.ProjectUseCase;

import java.util.List;

public interface ProjectController extends Controller<ProjectUseCase> {
    ProjectWeb createProject(final ProjectWeb projectWeb);
    ProjectWeb getProject(final String projectId);
    List<ProjectWeb> getAllProjects();
}
