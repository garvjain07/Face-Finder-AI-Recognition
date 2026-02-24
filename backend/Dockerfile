# ── Backend Dockerfile ──
# Uses pre-built dlib to avoid 20+ min compilation
FROM python:3.11-slim

# Install system dependencies for dlib & OpenCV
RUN apt-get update && apt-get install -y --no-install-recommends \
    build-essential cmake libopenblas-dev liblapack-dev \
    libx11-dev libgtk-3-dev libboost-all-dev \
    libgl1-mesa-glx libglib2.0-0 \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

# Install Python dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir --upgrade pip \
    && pip install --no-cache-dir -r requirements.txt

# Copy application code
COPY . .

# Create runtime directories
RUN mkdir -p uploads thumbnails temp

# Expose port
EXPOSE 8001

# Start server
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8001"]
