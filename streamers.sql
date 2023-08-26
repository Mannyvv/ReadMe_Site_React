-- PostgreSQL database dump

-- Dumped from database version 14.1
-- Dumped by pg_dump version 14.1

-- kill other connections
SELECT pg_terminate_backend(pg_stat_activity.pid)
FROM pg_stat_activity
WHERE pg_stat_activity.datname = 'ReadMe_Database' AND pid <> pg_backend_pid();

-- (re)create the database
DROP DATABASE IF EXISTS ReadMe_Database;
CREATE DATABASE ReadMe_Database;
-- connect via psql
\c ReadMe_Database

SET statement_timeout = 0;
SET lock_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;
SET default_tablespace = '';
SET default_with_oids = false;

CREATE TABLE streamers (
    id SERIAL,
    name TEXT NOT NULL,
    start DATE NOT NULL,
    age INT,
    followers INT,
    stream_days TEXT,
    PRIMARY KEY (id),
    tiktok_accounts_id INT UNIQUE
);

Create TABLE games (
    id SERIAL,
    platform TEXT,
    genre TEXT,
    name TEXT NOT NULL UNIQUE,
    release_date DATE,
    copies_sold INT,
    publisher TEXT,
    PRIMARY KEY (id)
);

CREATE TABLE streaming_softwares (
    id SERIAL,
    name TEXT NOT NULL UNIQUE,
    release_date DATE,
    user_count INT,
    PRIMARY KEY (id),
    streamer_id INT
);

CREATE TABLE tiktok_accounts (
    id SERIAL,
    name TEXT NOT NULL UNIQUE,
    followers INT,
    PRIMARY KEY (id)
);

CREATE TABLE streamers_games (
    streamer_id INT,
    game_id INT,
    PRIMARY KEY(streamer_id, game_id)
);

ALTER TABLE streamers_games ADD CONSTRAINT fk_streamers_games_streamers FOREIGN KEY (streamer_id) REFERENCES streamers (id);
ALTER TABLE streamers_games ADD CONSTRAINT fk_streamers_games_games FOREIGN KEY (game_id) REFERENCES games (id);

ALTER TABLE streaming_softwares ADD CONSTRAINT fk_streaming_softwares_streamers FOREIGN KEY (streamer_id) REFERENCES streamers(id);

ALTER TABLE streamers ADD CONSTRAINT fk_streamers_tiktok_accounts FOREIGN KEY (tiktok_accounts_id) REFERENCES tiktok_accounts(id);
