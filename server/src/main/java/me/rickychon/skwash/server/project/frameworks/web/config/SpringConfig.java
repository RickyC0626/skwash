package me.rickychon.skwash.server.project.frameworks.web.config;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.databind.ObjectMapper;
import me.rickychon.skwash.server.project.ProjectService;
import me.rickychon.skwash.server.project.adapters.controllers.WebProjectController;
import me.rickychon.skwash.server.project.interfaces.ProjectController;
import me.rickychon.skwash.server.project.use_cases.CreateProject;
import me.rickychon.skwash.server.project.use_cases.FindProject;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class SpringConfig {
    private final ProjectService projectService = new ProjectService();

    @Bean
    public ObjectMapper objectMapper() {
        var objectMapper = new ObjectMapper();
        objectMapper.setSerializationInclusion(JsonInclude.Include.NON_NULL);
        return objectMapper;
    }

    @Bean
    public CreateProject createProject() {
        return projectService.createProject();
    }

    @Bean
    public FindProject findProject() {
        return projectService.findProject();
    }

    @Bean
    public ProjectController projectController() {
        return new WebProjectController(createProject(), findProject());
    }
}
