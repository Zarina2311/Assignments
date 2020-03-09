1. Install Postgres on your machine.
2. Create a new database named `eventonica`.
3. In `eventonica` database, create a table named `users` that contains `id` with type `serial` (as Primary Key), and `name` with type `text`
4. Then, in `eventonica` database, create a table named `events` that contains `id` with type `serial` (as Primary Key), and `name` with type `text`
5. Also, in `eventonica` database, create a table named `user_events` that contains `user_id` with type `integer` (as a Foreign Key to the `users` table) and `event_id` with type
   `integer` (as a Foreign Key to the `events` table) . Make sure to add unique constraint for `user_id`, `event_id`.

The `users` table should look like this:

```
"id","name",
1,"jane",
2,"lala",
3,"Angela",
4,"Regina",
5,"Zarina",
6,"marina",
7,"Sally",
8,"Vivien",
```
