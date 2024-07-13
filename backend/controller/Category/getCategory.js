import { catchAsyncErrors } from "../../middlewares/catchAsyncErrors.js";
import { Category } from "../../models/CategorySchema.js";

export const getAllCategory = catchAsyncErrors(async (req, res, next) => {
    const category = await Category.find();
    res.status(200).json({
        success: true,
        count: category.length,
        category,
    })
})


export const getSingleCategory = catchAsyncErrors(async (req, res, next) => {

    console.log(req.body,'BODY')
    console.log(req.params,"params")
    const category = await Category.findOne({ slug: req.params.slug });
    console.log(category,'category')
    if (!category) {
        return res.status(404).json({
            success: false,
            message: "Category not found"
        });
    }

    return res.status(200).json({
        success: true,
        category
    });
});
