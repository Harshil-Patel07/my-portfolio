import { catchAsyncErrors } from "../../middlewares/catchAsyncErrors.js";
import { Category } from "../../models/CategorySchema.js";
export const deleteCategory = catchAsyncErrors(async (req, res, next) => {
    const {id} = req.params;
    const category =await Category.findById(id);
    if(!category){
        return next(new ErrorHandler("Category Alrady Deleted",400));
    }
    
    await category.deleteOne();
    res.status(200).json({
        success:true,
        category:"Category delete successfully,"
    });
});




