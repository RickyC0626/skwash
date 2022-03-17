package me.rickychon.skwash.server.core.config;

import me.rickychon.skwash.server.project.frameworks.web.routes.ProjectRoutes;
import me.rickychon.skwash.server.core.routes.BaseRoute;
import org.glassfish.jersey.server.ResourceConfig;
import org.springframework.stereotype.Component;

@Component
public class JerseyConfig extends ResourceConfig {
    public JerseyConfig() {
        register(BaseRoute.class);
        register(ProjectRoutes.class);
    }
}
