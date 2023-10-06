import categoryModel from '../models/categotyModel.js';
class CategoryController{
    static getAllCategories = async(req,res)=>{
    //   res.send("get All Categories");
    try{
        const fetchAllCategories = await categoryModel.find({});
        return res.status(200).json(fetchAllCategories);
    }
    catch(error){
        return res.status(400).json({message: error.message})
    }
    };
    static addNewCategories = async(req,res)=>{
        // res.send(" Add New  Categorie");
        const {title} = req.body;
        try{
            if(title){
              const newCategory = new categoryModel({
                title,
              });
              const savedCategory = await newCategory.save();
              if (savedCategory) {
                return res.status(200).json({message:"category Added Successfully"});
                
              }
            }else{
        return res.status(400).json({message:"All field required"});
            }
        }catch(error){
        return res.status(400).json({message: error.message});
        }
      
    };
}

export default CategoryController;