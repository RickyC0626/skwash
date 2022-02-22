package me.rickychon.skwash.server;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.context.SpringBootTest.WebEnvironment;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

@SpringBootTest(webEnvironment = WebEnvironment.RANDOM_PORT)
public class ApplicationTest {
    @Autowired
    private TestRestTemplate restTemplate;

    @Test
    @DisplayName("GET / returns 'Skwash server'")
    public void message() {
        ResponseEntity<String> entity = this.restTemplate.getForEntity("/", String.class);
        assertEquals(entity.getStatusCode(), HttpStatus.OK);
        assertEquals(entity.getBody(), "Skwash server");
    }
}
