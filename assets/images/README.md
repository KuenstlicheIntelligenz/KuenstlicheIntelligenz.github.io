# Cloudinary Image Staging

This directory is for **staging images before uploading to Cloudinary**. Content here is NOT tracked in git.

## Workflow

1. **Organize photos locally** in subdirectories matching your collections:
   ```
   assets/images/
     travel/2024-bali/
     travel/2019-asia/
     kitesurf/2024-06-tarifa/
     lifestyle/2024-summer/
     social/
   ```

2. **Upload to Cloudinary**:
   ```bash
   # Upload all images at once (skips existing)
   make upload-images

   # Or upload single folder manually
   cld uploader upload_dir assets/images/travel/2024-bali \
     --folder travel/2024-bali \
     --use_filename true \
     --unique_filename false \
     --overwrite false
   ```

3. **Reference in Jekyll posts**:
   ```yaml
   ---
   photos:
     - url: https://res.cloudinary.com/YOUR_CLOUD/image/upload/travel/2024-bali/sunset.jpg
       caption: "Beautiful sunset"
   ---
   ```

4. **Clean up** (optional):
   ```bash
   # After upload, you can delete local files
   rm -rf assets/images/travel/2024-bali
   ```

## URL Pattern

Cloudinary URLs follow this pattern:
```
https://res.cloudinary.com/{cloud_name}/image/upload/{folder}/{filename}
```

## Image Transformations

Add transformations directly in URL:
- Resize: `/w_800,h_600,c_fill/`
- Auto format: `/f_auto/`
- Auto quality: `/q_auto/`

Example:
```
https://res.cloudinary.com/YOUR_CLOUD/image/upload/w_800,f_auto,q_auto/travel/2024-bali/sunset.jpg
```
