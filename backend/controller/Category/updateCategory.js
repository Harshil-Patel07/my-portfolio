import { catchAssyncErrors } from "../../middlewares/catchAssyncErrors.js";
import { Category } from "../../models/CategorySchema.js";
import { v2 as cloudinary } from "cloudinary"; 

export const updateCategory = catchAssyncErrors(async (req, res, next) => {
    const { name, slug, hasPopular } = req.body;
    const { id } = req.params;

    // Check if req.files.image exists
    let imageUrl;
    if (req.files && req.files.image) {
        const CategoryImage = await cloudinary.uploader.upload(req.files.image.tempFilePath, {
            folder: "CATEGORY",
        });

        imageUrl = CategoryImage.secure_url;
    }

    // Prepare updated category data
    const updatedData = { name, slug, hasPopular };
    if (imageUrl) {
        updatedData.image = imageUrl;
    }

    // Find category by id and update
    const category = await Category.findByIdAndUpdate(id, updatedData, { new: true });

    if (!category) {
        return res.status(404).json({
            success: false,
            message: "Category not found",
        });
    }

    // Return updated category
    res.status(200).json({
        success: true,
        message: "Category updated!",
        category,
    });
});
