# ── Backend Dockerfile ──
# Uses dlib-bin (pre-compiled) so no heavy compilation needed
FROM python:3.11-slim

# Install minimal system dependencies for OpenCV headless
RUN apt-get update && apt-get install -y --no-install-recommends \
    libglib2.0-0 \
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

# Render sets PORT env var; default to 8001 locally
ENV PORT=8001
EXPOSE ${PORT}

# Start server — uses $PORT so Render can assign its own port
CMD uvicorn main:app --host 0.0.0.0 --port ${PORT}
