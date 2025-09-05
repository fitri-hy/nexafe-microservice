# Stage 1: Build
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Install dependencies
COPY package.json pnpm-lock.yaml* ./
RUN npm install -g pnpm
RUN pnpm install

# Copy source code
COPY . .

# Build Tailwind CSS
RUN pnpm run css:build

# Build Vite app
RUN pnpm run build

# Stage 2: Serve
FROM nginx:alpine

# Copy build output to nginx html folder
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy nginx default config (optional)
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
