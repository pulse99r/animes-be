-- // connect to database
\c data_wharehouse_dev;

-- // drop table -- mostly for dev environment
DROP TABLE IF EXISTS animes_03;
CREATE TABLE animes_03(
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT NOT NULL
);