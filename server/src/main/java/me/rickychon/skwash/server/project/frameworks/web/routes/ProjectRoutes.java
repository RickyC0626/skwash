package me.rickychon.skwash.server.project.frameworks.web.routes;

import me.rickychon.skwash.server.project.adapters.controllers.models.ProjectWeb;
import me.rickychon.skwash.server.project.interfaces.ProjectController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;

@Service
@Path("/projects")
@Produces(MediaType.APPLICATION_JSON)
public class ProjectRoutes {
    private final ProjectController controller;

    @Autowired
    public ProjectRoutes(final ProjectController controller) {
        this.controller = controller;
    }

    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    public Response createProject(final ProjectWeb projectWeb) {
        try {
            var project = controller.createProject(projectWeb);
            return Response.status(Status.CREATED).entity(project).build();
        }
        catch(Exception e) {
            return Response.status(Status.NOT_ACCEPTABLE).entity(e).build();
        }
    }

    @GET @Path("/{projectId}")
    @Consumes(MediaType.APPLICATION_JSON)
    public Response getProject(@PathParam("projectId") final String projectId) {
        try {
            var project = controller.getProject(projectId);
            return Response.ok().entity(project).build();
        }
        catch(Exception e) {
            return Response.status(Status.NOT_FOUND).entity(e).build();
        }
    }

    @GET
    public Response getAllProjects() {
        try {
            var projects = controller.getAllProjects();
            return Response.ok().entity(projects).build();
        }
        catch(Exception e) {
            return Response.status(Status.UNAUTHORIZED).entity(e).build();
        }
    }
}
