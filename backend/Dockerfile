# ---------- Stage 1: Build ----------
FROM maven:3.9.9 AS build
WORKDIR /app
COPY . .
RUN mvn -B package --file pom.xml

# ---------- Stage 2: Runtime ----------
FROM openjdk:17
WORKDIR /app
COPY --from=build /app/app/target/app-0.0.1-SNAPSHOT.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","app.jar"]