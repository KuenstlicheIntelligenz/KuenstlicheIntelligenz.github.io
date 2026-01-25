# Jekyll Site Makefile
# Simple commands for local development

.PHONY: help install serve build clean deploy docker-serve docker-build restart upload-images

# Default target
help:
	@echo "Available commands:"
	@echo "  make install       - Install dependencies (requires Ruby)"
	@echo "  make serve         - Run local development server (requires Ruby)"
	@echo "  make build         - Build the site (requires Ruby)"
	@echo "  make clean         - Clean build files"
	@echo "  make deploy        - Build and deploy (GitHub Pages)"
	@echo "  make upload-images - Upload all images to Cloudinary"
	@echo ""
	@echo "Docker commands (recommended):"
	@echo "  make docker-serve  - Run development server with Docker"
	@echo "  make docker-build  - Build site with Docker"
	@echo "  make restart       - Restart Docker containers"

# Install Ruby dependencies
install:
	@echo "Installing dependencies..."
	bundle install

# Run local development server
serve:
	@echo "Starting Jekyll development server..."
	bundle exec jekyll serve

# Build site for production
build:
	@echo "Building Jekyll site..."
	bundle exec jekyll build

# Clean build files and cache
clean:
	@echo "Cleaning build files..."
	bundle exec jekyll clean
	rm -rf _site .jekyll-cache

# Build and deploy (for GitHub Pages)
deploy: clean build
	@echo "Site built and ready for deployment"
	@echo "Push to GitHub to deploy via GitHub Pages"

# Docker-based development (no Ruby installation needed)
docker-serve:
	@echo "Starting Jekyll with Docker..."
	docker-compose up

docker-build:
	@echo "Building site with Docker..."
	docker-compose run jekyll jekyll build

# Restart Docker containers
restart:
	@echo "Restarting Docker containers..."
	docker compose down
	docker compose up --build

# Upload images to Cloudinary
upload-images:
	@echo "🚀 Uploading images to Cloudinary..."
	@echo "=================================="
	@for collection in travel kitesurf lifestyle social videos; do \
		collection_path="assets/images/$$collection"; \
		if [ ! -d "$$collection_path" ]; then \
			echo "⏭️  Skipping $$collection (directory not found)"; \
			continue; \
		fi; \
		found_images=false; \
		for subdir in $$collection_path/*/; do \
			if [ -d "$$subdir" ]; then \
				folder_name=$$(basename "$$subdir"); \
				cloudinary_folder="$$collection/$$folder_name"; \
				image_count=$$(find "$$subdir" -maxdepth 1 -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" -o -iname "*.gif" -o -iname "*.webp" \) 2>/dev/null | wc -l); \
				if [ "$$image_count" -eq 0 ]; then \
					echo "⏭️  Skipping $$cloudinary_folder (no images)"; \
					continue; \
				fi; \
				found_images=true; \
				echo ""; \
				echo "📤 Uploading $$cloudinary_folder ($$image_count images)..."; \
				cld uploader upload_dir "$$subdir" \
					--folder "$$cloudinary_folder" \
					--use_filename true \
					--unique_filename false \
					--overwrite false \
					--resource_type image; \
				echo "✅ Uploaded $$cloudinary_folder"; \
			fi; \
		done; \
		if [ "$$found_images" = false ]; then \
			echo "⏭️  Skipping $$collection (no subdirectories with images)"; \
		fi; \
	done
	@echo ""
	@echo "=================================="
	@echo "✨ Upload complete!"
