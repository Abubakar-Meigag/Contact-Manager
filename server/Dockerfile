FROM python:3.9-slim

# Declare the build argument
ARG REQUIREMENTS_PATH=.

# Install system dependencies required for psycopg2
RUN apt-get update && \
    apt-get install -y libpq-dev gcc && \
    rm -rf /var/lib/apt/lists/*

# Set the working directory inside the container to /server
WORKDIR /server

# Copy requirements.txt into the container at /server
COPY ${REQUIREMENTS_PATH}/requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy all files from the current server directory on the host to /server in the container
COPY . .

# Expose the port your app runs on (adjust if needed)
EXPOSE 5000

# Set environment variables for Flask
ENV FLASK_APP=contact_manager/server.py
ENV FLASK_RUN_HOST=0.0.0.0
ENV FLASK_ENV=production  

# Run the application
CMD ["gunicorn", "-w", "4", "-b", "0.0.0.0:5000", "contact_manager.server:app"]
