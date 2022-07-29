DROP TABLE IF EXISTS tutorials CASCADE;
CREATE TABLE tutorials(
    tutorial_id SERIAL PRIMARY KEY,
    tutorial_name VARCHAR(225),
    tutorial_desc text,
);