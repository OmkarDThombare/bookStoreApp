import Book from "../Model/book.model.js";

export const getBook=async(req , res ) => 
{
  try{
     const book =await Book.find()
     res.status(200).json(book)
  }catch(error){
     console.log(error)
     res.send(500).json(error)
  }
}
