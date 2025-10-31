/**
 * Cloudinary Upload Service
 * Handles file uploads to Cloudinary using unsigned upload
 */

// Cloudinary configuration
const CLOUDINARY_CONFIG = {
  cloudName: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME || 'dvauarkh6',
  uploadPreset: import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET || 'unsigned_upload',
};

// Debug logging
if (import.meta.env.DEV) {
  console.log('Cloudinary Config:', {
    cloudName: CLOUDINARY_CONFIG.cloudName,
    uploadPreset: CLOUDINARY_CONFIG.uploadPreset
  });
}

const CLOUDINARY_UPLOAD_URL = `https://api.cloudinary.com/v1_1/${CLOUDINARY_CONFIG.cloudName}/upload`;

class CloudinaryService {
  /**
   * Upload a file to Cloudinary using unsigned upload
   * @param {File} file - The file to upload
   * @param {string} folder - Optional folder name for organization
   * @returns {Promise<{url: string, public_id: string, format: string, bytes: number}>}
   */
  async uploadFile(file, folder = 'applications') {
    if (!file || !(file instanceof File)) {
      throw new Error('Invalid file provided');
    }

    // Validate file size (max 10MB)
    const maxSize = 10 * 1024 * 1024; // 10MB in bytes
    if (file.size > maxSize) {
      throw new Error(`File size exceeds 10MB limit. File size: ${(file.size / 1024 / 1024).toFixed(2)}MB`);
    }

    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', CLOUDINARY_CONFIG.uploadPreset);
    formData.append('folder', folder);
    formData.append('resource_type', 'auto'); // Automatically detect file type

    try {
      console.log(`Uploading file to Cloudinary: ${file.name} (${(file.size / 1024).toFixed(2)}KB)`);
      
      const response = await fetch(CLOUDINARY_UPLOAD_URL, {
        method: 'POST',
        body: formData
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ message: 'Unknown error' }));
        console.error('Cloudinary error response:', errorData);
        throw new Error(`Cloudinary upload failed: ${response.status} - ${errorData.message || 'Unknown error'}`);
      }

      const data = await response.json();
      console.log(`✓ File uploaded successfully: ${data.secure_url}`);
      
      return {
        url: data.secure_url,
        public_id: data.public_id,
        format: data.format,
        bytes: data.bytes,
        original_filename: data.original_filename
      };
    } catch (error) {
      console.error('Cloudinary upload error:', error);
      throw error;
    }
  }

  /**
   * Upload multiple files to Cloudinary
   * @param {File[]} files - Array of files to upload
   * @param {string} folder - Optional folder name
   * @returns {Promise<Array>} Array of upload results
   */
  async uploadFiles(files, folder = 'applications') {
    if (!Array.isArray(files) || files.length === 0) {
      return [];
    }

    const uploadPromises = files.map(file => this.uploadFile(file, folder));
    return Promise.all(uploadPromises);
  }
}

const cloudinaryService = new CloudinaryService();
export default cloudinaryService;
