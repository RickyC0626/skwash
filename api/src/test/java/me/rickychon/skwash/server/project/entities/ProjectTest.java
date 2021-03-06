package me.rickychon.skwash.server.project.entities;

import me.rickychon.skwash.testutils.ReplaceCamelCase;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.DisplayNameGeneration;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

@DisplayName("Project Entity")
@DisplayNameGeneration(ReplaceCamelCase.class)
public class ProjectTest {
    @Nested
    class Id {
        @Test
        public void shouldBeAutoGenerated() {
            var project = Project.builder().build();

            assertNotNull(project.getId());
        }
    }

    @Nested
    class Name {
        @Test
        @DisplayName("should be \"New Project\" by default")
        public void shouldBeNewProjectByDefault() {
            var project = Project.builder().build();

            assertEquals(project.getName(), "New Project");
        }

        @Test
        public void shouldNotExceed100Characters() {
            var notManyChars = "Short Project Name";
            var manyChars = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat";

            assertDoesNotThrow(() -> Project.builder()
                .withName(notManyChars)
                .build()
            );
            assertThrows(IllegalArgumentException.class, () -> Project.builder()
                .withName(manyChars)
                .build(),
                "Project name must not exceed 100 characters"
            );
        }
    }
}
