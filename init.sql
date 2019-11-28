CREATE DATABASE IF NOT EXISTS wigilabs;
USE wigilabs;
CREATE TABLE IF NOT EXISTS tareas (tarea_id INTEGER PRIMARY KEY AUTO_INCREMENT, titulo VARCHAR(255), descripcion TEXT, creado_en TIMESTAMP DEFAULT current_timestamp);
