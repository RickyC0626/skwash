package me.rickychon.skwash.server.core.ports;

import java.util.List;
import java.util.Optional;

public interface Repository<E> {
    Optional<E> findById(final String id);
    List<E> findAll();
}
