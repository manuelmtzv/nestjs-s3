## NestJS AWS S3 Integration with PostgreSQL Example

This project serves as a demonstration of integrating NestJS with the AWS SDK for S3, utilizing Docker Compose for PostgreSQL database, and creating a Media module to manage files, storing their URLs in a PostgreSQL database.

### Prerequisites

Before running this project, ensure you have the following installed:

- Node.js and npm
- Docker and Docker Compose
- AWS account with S3 bucket created
- PostgreSQL database (can be run using Docker Compose)

### Installation

1. Clone this repository:

    ```
    git clone <repository-url>
    ```

2. Navigate to the project directory:

    ```
    cd nestjs-s3
    ```

3. Install dependencies:

    ```
    npm install
    ```

### Configuration

#### AWS S3

1. Create an S3 bucket in your AWS account.
2. Obtain your AWS Access Key ID and Secret Access Key.
3. Set up your AWS credentials through environment variables:
   
    ```
    AWS_ACCESS_KEY_ID=
    AWS_SECRET_ACCESS_KEY=
    
    AWS_S3_REGION=
    AWS_S3_BUCKET_NAME=
    ```

#### PostgreSQL

1. Ensure Docker is running on your machine.
2. Modify the `docker-compose.yml` file if needed to customize the PostgreSQL settings.
3. Run the following command to start the PostgreSQL container:

    ```
    docker-compose up -d
    ```
4. Set up the database url in the environment variables:
   
    ```
    DATABASE_URL={ example: postgresql://postgres:postgres@localhost:5432/media-db?schema=public }
    ```

### Usage

1. Run the application:

    ```
    npm run start:dev
    ```

2. Access the application through `http://localhost:3000`.

3. Use the provided endpoints to interact with the Media module, uploading and retrieving files.

### Endpoints

- **GET /medias**: Retrieve all the media files in the database.
- **POST /medias/upload**: Upload a file to S3 and store its URL in the database.
