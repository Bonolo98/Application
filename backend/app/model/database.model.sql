
DROP TABLE IF EXISTS users CASCADE;
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255),
);



DROP TABLE IF EXISTS tutorials CASCADE;
CREATE TABLE tutorials(
    tutorial_id SERIAL PRIMARY KEY,
    tutorial_name VARCHAR(225),
    tutorial_desc text,
);

