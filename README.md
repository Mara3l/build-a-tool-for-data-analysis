# Build a Tool For Data Analysis - Materials

## #1 Build a Tool for Data Analysis | Overview

- [GoodData.CN](https://www.gooddata.com/developers/cloud-native/)

## #2 Build a Tool for Data Analysis | Start PostgreSQL and GoodData.CN

- See `docker-compose.yml` and `docker.env` for running the service
- [Data](https://github.com/patrikbraborec/data-generator/tree/main/data) and data [generator tool](https://github.com/patrikbraborec/data-generator)
- Psql terminal: `psql -h localhost -p 5432 -d online-shop-production -U admin --password`
- See `db-structure.sql` file for database structure
- Commands for copying data:
  - `COPY users FROM '/var/lib/postgresql/data/pgdata/users.csv' with (FORMAT csv, DELIMITER ',', HEADER true);`
  - `COPY products FROM '/var/lib/postgresql/data/pgdata/products.csv' with (FORMAT csv, DELIMITER ',', HEADER true);`
  - `COPY orders FROM '/var/lib/postgresql/data/pgdata/orders.csv' with (FORMAT csv, DELIMITER ',', HEADER true);`
  - `COPY order_items FROM '/var/lib/postgresql/data/pgdata/order_items.csv' with (FORMAT csv, DELIMITER ',', HEADER true);`

## #3 Build a Tool for Data Analysis | Connect Data

- The API call to connect the PostgreSQL database to GoodData.CN:

```bash
$ curl http://localhost:3000/api/entities/dataSources \
-H "Content-Type: application/vnd.gooddata.api+json" \
-H "Accept: application/vnd.gooddata.api+json" \
-H "Authorization: Bearer YWRtaW46Ym9vdHN0cmFwOmFkbWluMTIz" \
-X POST \
-d '{
    "data": {
        "attributes": {
            "name":"online-shop-postgres",
            "url": "jdbc:postgresql://postgres:5432/online-shop-production",
            "schema": "public",
            "type": "POSTGRESQL",
            "username": "admin",
            "password": "admin"
        },
        "id": "online-shop-postgres",
        "type": "dataSource"
    }
}' | jq .
```

## #4 Build a Tool for Data Analysis | Data Visualizations

- [Analytical Designer](https://www.gooddata.com/developers/cloud-native/doc/1.6/analytics/ad/visualizations/)
- [Dashboards](https://www.gooddata.com/developers/cloud-native/doc/1.6/analytics/dashboards/)

## #5 Build a Tool for Data Analysis | Embed Data Visualizations

- [GoodData UI SDK](https://sdk.gooddata.com/gooddata-ui/docs/about_gooddataui.html)
- [Accelerator Toolkit](https://sdk.gooddata.com/gooddata-ui/docs/create_new_application.html)
- The command to generate a new application: `npx --ignore-existing @gooddata/create-gooddata-react-app <your-app>`
- [API token](https://www.gooddata.com/developers/cloud-native/doc/1.6/getting-started/install/)
- See the `client` folder for more details about the web application