set -e

psql -v ON_ERROR_STOP=1 --username = "postgres" --dbname="FavorsDB" <<-EOSQL
    CREATE USER "postgres" WITH PASSWORD "Kazuki123";
    CREATE DATABASE FavorsDB
    GRANT ALL PRIVILEGES ON DATABASE FavorsDB TO "Kazuki123";

EOSQL

psql -v ON_ERROR_STOP=1 --username = "postgres" --dbname="FavorsDB" -f /etc/postgresql/init-db.sql