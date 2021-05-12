CREATE DATABASE pern;

CREATE TABLE user_info(
    user_id SERIAL PRIMARY KEY,
    first_name VARCHAR(255),
    last_name VARCHAR(255),
    email VARCHAR(255)
);

CREATE TABLE action_info(
    action_id SERIAL PRIMARY KEY,
    action_desc VARCHAR(255)
);