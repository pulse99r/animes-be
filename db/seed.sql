-- \connect to the database
\c data_wharehouse_dev;

-- initial data for animes_03 table

INSERT INTO animes_03 (name, description) VALUES
('One Piece', 'One Piece is a Japanese manga series written and illustrated by Eiichiro Oda. It has been serialized in Shueishas shōnen manga magazine Weekly Shōnen Jump since July 1997, with its individual chapters compiled into 107 tankōbon volumes as of November 2023.'),
('Naruto', 'Naruto is a Japanese manga series written and illustrated by Masashi Kishimoto. It tells the story of Naruto Uzumaki, a young ninja who seeks recognition from his peers and dreams of becoming the Hokage, the leader of his village.'),
('Jujutsu Kaisen', 'Jujutsu Kaisen is a Japanese manga series written and illustrated by Gege Akutami. It has been serialized in Shueishas shōnen manga magazine Weekly Shōnen Jump since March 2018, with its chapters collected and published in 24 tankōbon volumes as of October 2023.'),
('Cowboy Bebop', 'The futuristic adventures of an easygoing bounty hunter and his partners.');