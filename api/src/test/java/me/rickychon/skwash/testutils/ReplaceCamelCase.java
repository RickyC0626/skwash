package me.rickychon.skwash.testutils;

import org.junit.jupiter.api.DisplayNameGenerator;

import java.lang.reflect.Method;

public class ReplaceCamelCase extends DisplayNameGenerator.Standard {
    @Override
    public String generateDisplayNameForClass(Class<?> testClass) {
        return replaceCamelCase(super.generateDisplayNameForClass(testClass));
    }

    @Override
    public String generateDisplayNameForNestedClass(Class<?> nestedClass) {
        return replaceCamelCase(super.generateDisplayNameForNestedClass(nestedClass));
    }

    @Override
    public String generateDisplayNameForMethod(Class<?> testClass, Method testMethod) {
        return replaceCamelCase(testMethod.getName());
    }

    String replaceCamelCase(String name) {
        name = name.replaceAll("([A-Z])", " $1").toLowerCase();
        name = name.replaceAll("([0-9]+)", " $1");
        return name;
    }
}
