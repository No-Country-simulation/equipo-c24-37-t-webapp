FROM --platform=linux/amd64 maven:3.8.4-openjdk-17 AS build
WORKDIR /app
COPY backend/equipo-C34-37/pom.xml .
COPY backend/equipo-C34-37/src ./src
RUN mvn clean package -DskipTests

FROM --platform=linux/amd64 amazoncorretto:17.0.14-al2023-headful
WORKDIR /app
COPY --from=build /app/target/*.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]