package me.rickychon.skwash.server.endpoints;

import org.springframework.stereotype.Service;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;

@Service
@Path("/")
public class RootEndpoint {
    @GET
    @Produces("text/plain")
    public String message() {
        return "Skwash server";
    }
}
