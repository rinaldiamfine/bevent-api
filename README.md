# Bevent

## Migrations
Create migration files
```
npx sequelize-cli migration:generate --name {filename}
```
Running the migration
```
npx sequelize-cli db:migrate --env production
```
or (revert back the migrations)
```
npx sequelize-cli db:migrate:undo --env production
```
