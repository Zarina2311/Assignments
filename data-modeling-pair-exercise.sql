/*Data Modeling pair exercise (Amy and Zarina) */

INSERT INTO User (userID) VALUES (23);

INSERT INTO Photo (photoID, url) VALUES (17, "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"); 

INSERT INTO Likes (userID, photoID) VALUES (23, 3);

SELECT userID FROM User JOIN Photo ON User.userID = Photo.url WHERE userID = 23; 

SELECT userID FROM User JOIN Photo ON User.userID = Photo.PhotoID WHERE photoID = "hearted"; 

SELECT photoID, likeID FROM Likes WHERE photoID = "hearted"; 