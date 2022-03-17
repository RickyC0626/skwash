package me.rickychon.skwash.server.project.adapters.controllers.models;

import me.rickychon.skwash.server.project.entities.Project;

public class ProjectWeb {
    private String id;
    private String name;

    public String getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setId(String id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Project toProject() {
        return Project.builder()
            .withName(name)
            .build();
    }

    public static ProjectWeb toProjectWeb(final Project project) {
        var projectWeb = new ProjectWeb();
        projectWeb.setId(project.getId());
        projectWeb.setName(project.getName());
        return projectWeb;
    }
}
