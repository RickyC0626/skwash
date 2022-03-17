package me.rickychon.skwash.server.project.ports;

import me.rickychon.skwash.server.core.ports.Repository;
import me.rickychon.skwash.server.project.entities.Project;

public interface ProjectRepository extends Repository<Project> {
    Project create(final Project project);
}
