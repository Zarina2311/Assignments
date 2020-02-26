/*Data Modeling pair exercise */

INSERT INTO User (userID) VALUES (2);

INSERT INTO Photo (photoID, url) VALUES (44, "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260");

INSERT INTO Likes (userID, photoID) VALUES (3, 22);

SELECT * FROM Photo WHERE userId = 5;

SELECT Photo.url FROM Likes JOIN Photo ON Likes.photoId = Photo.photoId;

SELECT userId FROM Likes WHERE photoId = 44;

-- User
-- ________________________________________________
-- userId   |     email       |   created_at
-- _________|________________ |____________________
-- integer  |      text       |    date
-- _________|_________________|____________________
-- 1        | karen@mail.com  |  2020-03-01
-- 2        | bob@mail.com    |  2017-03-03
-- 3        | olga@mail.com   |  2018-04-06
-- 4        | kim@mail.com    |  2014-01-10
-- 5        | leo@mail.com    |  2015-08-12


-- Photo
-- ___________________________________________________________________________
-- userId   |    photoId     |      created_at    |       url
-- _________|_______________ |____________________|___________________________
-- integer  |    integer     |         date               text
-- _________|_______________ |____________________|___________________________
-- 1        |       11       |      2020-02-03    |    https://flowers.com
-- 2        |       22       |      2019-03-05    |    https://baloons.com
-- 3        |       33       |      2018-09-05    |    https://ice-cream.com
-- 4        |       44       |      2019-06-12    |    https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260
-- 5        |       55       |      2020-04-08    |    https://cats.com


-- Likes
-- ____________________________________________
-- userId   |    photoId     |  liked time
-- _________|_______________ |_________________
-- integer  |    integer     |   timestamp
-- _________|_______________ |_________________
-- 1        |       11       |  1582670953675
-- 1        |       22       |  1582670953675
-- 3        |       33       |  1582670953675
-- 4        |       44       |  1582670953675
-- 2        |       44       |  1582670953675
-- 5        |       55       |  1582670953675
