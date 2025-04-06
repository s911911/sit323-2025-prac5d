Steps to Publish the Microservice
1.Create a Private Container Registry on Google Cloud

2.Authenticate with the Container Registry
Before publishing, authenticate with the registry using the following command:
docker login reference-point-455409-q1
The login is successful when proceeding with building and pushing the image.

3.Build the Docker Image
Create a Docker File in the root directory of your project (it has already present).
Build the Docker image using the following command:
docker build -t container_webapp.

4.Push the Docker Image to the Cloud
Upload the Docker image to your private container registry with this command:
docker push gcr.io/reference-point-455409-q1/ container_webapp
This step publishes the microservice image to the cloud.

5.Verify the Published Image
Run the published image to ensure that your microservice boots correctly:
docker run -p 2000:2000 gcr.io/reference-point-455409-q1/ container_webapp
