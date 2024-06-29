import { catchAssyncErrors } from "../../middlewares/catchAssyncErrors.js";
import { Category } from "../../models/CategorySchema.js";
import { v2 as cloudinary } from "cloudinary";

export const createCategory = catchAssyncErrors(async (req, res, next) => {
    const { name, slug, hasPopular } = req.body;

    if (!name || !slug || !req.files || !req.files.image) {
        return res.status(400).json({
            success: false,
            message: "Please enter all required data and upload an image.",
        });
    }

    const { image } = req.files;

    const CategoryImage = await cloudinary.uploader.upload(image.tempFilePath, {
        folder: "CATEGORY",
    });

    if (!CategoryImage || CategoryImage.error) {
        return res.status(500).json({
            success: false,
            message: CategoryImage.error || "Unknown Cloudinary error",
        });
    }

    const category = await Category.create({
        name,
        slug,
        hasPopular,
        image: CategoryImage.secure_url,
    });

    res.status(201).json({
        success: true,
        category,
    });
});
