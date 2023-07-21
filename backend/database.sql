-- create users table --
CREATE TABLE users (
  id int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  role varchar(255) NOT NULL,
  mail varchar(255) DEFAULT NULL,
  password varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
INSERT INTO users (role) VALUES ('web developer');

-- create projects table --
CREATE TABLE projects (
  id int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  title varchar(255) NOT NULL,
  link varchar(255) DEFAULT NULL,
  image varchar(255) DEFAULT NULL,
  description varchar(255) DEFAULT NULL,
  is_public TINYINT(1) Default NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO projects (title, link, image, description, is_public) VALUES 
('PiQui', 'https://jsxperts.remote-fr-2.wilders.dev/',
'/assets/images/P2_img2.png',
'PiQui is a mini game created by a team of Junior developers
including myself. The Main caracters are the cats.', 1),
('ViVid', 'https://vivid.remote-6.wilders.dev/',
'/assets/images/ViVid.png',
'ViViD is a video plateform where you can enjoy watching
aerial scenary', 1);

-- create tools table --
CREATE TABLE tools (
  id int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  name varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO tools (name) VALUES 
('HTML'), ('CSS'), ('JavaScript'), ('React.JS'), ('Node.JS'),
('Express'), ('Scss'), ('MySQL'), ('Python'), ('Tailwind');

-- create tools_project table --
CREATE TABLE tools_project (
  project_id int, FOREIGN KEY (project_id) REFERENCES projects(id) ON DELETE CASCADE,
  tool_id int, FOREIGN KEY (tool_id) REFERENCES tools(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO tools_project (project_id, tool_id) VALUES 
(1, 4), (1, 5), (1, 7),
(2, 4), (2, 5), (2, 6), (2, 7), (2, 8);
