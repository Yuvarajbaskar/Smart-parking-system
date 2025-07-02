CREATE DATABASE parkingdb;
USE parkingdb;
CREATE TABLE parking_slot (
  id INT AUTO_INCREMENT PRIMARY KEY,
  slot_number VARCHAR(10),
  is_available BOOLEAN
);
INSERT INTO parking_slot (slot_number, is_available)
VALUES ('A1',TRUE),('A2',TRUE),('A3',TRUE)