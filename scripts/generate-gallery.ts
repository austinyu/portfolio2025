import fs from "fs";
import path from "path";
import sharp from "sharp";

// Define the structure of the image metadata
interface ImageData {
  src: string; // Relative path to the image
  width: number; // Width of the image
  height: number; // Height of the image
}

// Path to the gallery folder
const galleryFolder: string = path.join(__dirname, "../public", "gallery");

// Output file for the generated data
const outputFile: string = path.join(__dirname, "../src/app/gallery/galleryData.json");

// Function to get image metadata
async function getImageMetadata(imagePath: string): Promise<{ width: number; height: number }> {
  const metadata = await sharp(imagePath).metadata();
  return {
    width: metadata.width || 0, // Default to 0 if width is undefined
    height: metadata.height || 0, // Default to 0 if height is undefined
  };
}

// Main function to generate the gallery data
async function generateGalleryData(): Promise<void> {
  try {
    const files: string[] = fs.readdirSync(galleryFolder); // List of files in the gallery folder
    const imageData: ImageData[] = []; // Array to store image metadata

    for (const file of files) {
      if (path.extname(file).toLowerCase() === ".jpg") {
        const filePath: string = path.join(galleryFolder, file);
        const { width, height } = await getImageMetadata(filePath);

        imageData.push({
          src: `/gallery/${file}`, // Relative path for the image
          width,
          height,
        });
      }
    }

    // Write the data to a JSON file
    fs.writeFileSync(outputFile, JSON.stringify(imageData, null, 2));
    console.log(`Gallery data has been generated and saved to ${outputFile}`);
  } catch (error) {
    console.error("Error generating gallery data:", error);
  }
}

// Run the script
generateGalleryData();