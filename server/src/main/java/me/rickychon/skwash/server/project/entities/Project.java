package me.rickychon.skwash.server.project.entities;

import me.rickychon.skwash.server.core.utils.id_generators.UUIDGenerator;
import me.rickychon.skwash.server.core.utils.id_generators.interfaces.IdGenerator;

public class Project {
    private final IdGenerator idGenerator = new UUIDGenerator();

    private final String id = idGenerator.generate();
    private String name;

    private Project(Builder builder) {
        if(builder.name.length() > 100) throw new IllegalArgumentException("Project name must not exceed 100 characters");
        this.name = builder.name;
    }

    public String getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public String toString() {
        var template = "Project{id='%s',name='%s'}";
        return String.format(template, id, name);
    }

    public static Builder builder() {
        return new Builder();
    }

    public static class Builder {
        private String name = "New Project";

        public Builder withName(String name) {
            this.name = name;
            return this;
        }

        public Project build() {
            return new Project(this);
        }
    }
}
