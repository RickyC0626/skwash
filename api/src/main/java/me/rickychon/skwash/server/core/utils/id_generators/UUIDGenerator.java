package me.rickychon.skwash.server.core.utils.id_generators;

import me.rickychon.skwash.server.core.utils.id_generators.interfaces.IdGenerator;

import java.util.UUID;

public class UUIDGenerator implements IdGenerator {
    @Override
    public String generate() {
        return UUID.randomUUID().toString();
    }
}
