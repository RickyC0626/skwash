package me.rickychon.skwash.server.config;

import me.rickychon.skwash.server.endpoints.RootEndpoint;
import org.glassfish.jersey.server.ResourceConfig;
import org.springframework.stereotype.Component;

@Component
public class JerseyConfig extends ResourceConfig {
    public JerseyConfig() {
        register(RootEndpoint.class);
    }
}
