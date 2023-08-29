-- PostgreSQL database dump

-- Dumped from database version 14.1
-- Dumped by pg_dump version 14.1

-- kill other connections
SELECT pg_terminate_backend(pg_stat_activity.pid)
FROM pg_stat_activity
WHERE pg_stat_activity.datname = 'readme_database' AND pid <> pg_backend_pid();

-- (re)create the database
DROP DATABASE IF EXISTS readme_database;
CREATE DATABASE readme_database;
-- connect via psql
\c readme_database

SET statement_timeout = 0;
SET lock_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;
SET default_tablespace = '';
SET default_with_oids = false;






CREATE TABLE users (
    id SERIAL,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    email TEXT NOT NULL,
    password TEXT NOT NULL,
    username TEXT,
    PRIMARY KEY (id)
);

INSERT INTO users (first_name, last_name, email, password, username)
VALUES
    ('Alice', 'Johnson', 'alice@example.com', 'pwd1', 'ajohnson'),
    ('Bob', 'Smith', 'bob@example.com', 'pwd2', 'bsmith'),
    ('Charlie', 'Brown', 'charlie@example.com', 'pwd3', 'cbrown'),
    ('David', 'Miller', 'david@example.com', 'pwd4', 'dmiller'),
    ('Eve', 'Davis', 'eve@example.com', 'pwd5', 'edavis'),
    ('Frank', 'Wilson', 'frank@example.com', 'pwd6', 'fwilson'),
    ('Grace', 'Martinez', 'grace@example.com', 'pwd7', 'gmartinez'),
    ('Henry', 'Garcia', 'henry@example.com', 'pwd8', 'hgarcia'),
    ('Ivy', 'Rodriguez', 'ivy@example.com', 'pwd9', 'irodriguez'),
    ('Jack', 'Lopez', 'jack@example.com', 'pwd10', 'jlopez'),
    ('Kate', 'Smith', 'kate@example.com', 'pwd11', 'ksmith'),
    ('Liam', 'Johnson', 'liam@example.com', 'pwd12', 'ljohnson'),
    ('Mia', 'Davis', 'mia@example.com', 'pwd13', 'mdavis'),
    ('Noah', 'Martinez', 'noah@example.com', 'pwd14', 'nmartinez'),
    ('Olivia', 'Garcia', 'olivia@example.com', 'pwd15', 'ogarcia');




--   $ cat streamers.sql | docker exec -i pg_container psql -d readme_database

-- CREATE TABLE streamers (
--     id SERIAL,
--     name TEXT NOT NULL,
--     start DATE NOT NULL,
--     age INT,
--     followers INT,
--     stream_days TEXT,
--     PRIMARY KEY (id),
--     tiktok_accounts_id INT UNIQUE
-- );

-- Create TABLE games (
--     id SERIAL,
--     platform TEXT,
--     genre TEXT,
--     name TEXT NOT NULL UNIQUE,
--     release_date DATE,
--     copies_sold INT,
--     publisher TEXT,
--     PRIMARY KEY (id)
-- );

-- CREATE TABLE streaming_softwares (
--     id SERIAL,
--     name TEXT NOT NULL UNIQUE,
--     release_date DATE,
--     user_count INT,
--     PRIMARY KEY (id),
--     streamer_id INT
-- );

-- CREATE TABLE tiktok_accounts (
--     id SERIAL,
--     name TEXT NOT NULL UNIQUE,
--     followers INT,
--     PRIMARY KEY (id)
-- );

-- CREATE TABLE streamers_games (
--     streamer_id INT,
--     game_id INT,
--     PRIMARY KEY(streamer_id, game_id)
-- );

-- ALTER TABLE streamers_games ADD CONSTRAINT fk_streamers_games_streamers FOREIGN KEY (streamer_id) REFERENCES streamers (id);
-- ALTER TABLE streamers_games ADD CONSTRAINT fk_streamers_games_games FOREIGN KEY (game_id) REFERENCES games (id);

-- ALTER TABLE streaming_softwares ADD CONSTRAINT fk_streaming_softwares_streamers FOREIGN KEY (streamer_id) REFERENCES streamers(id);

-- ALTER TABLE streamers ADD CONSTRAINT fk_streamers_tiktok_accounts FOREIGN KEY (tiktok_accounts_id) REFERENCES tiktok_accounts(id);
