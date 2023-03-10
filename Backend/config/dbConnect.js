const{default:mongoose} =require('mongoose');
const DB='mongodb+srv://hung:12345@cluster0.aongnbk.mongodb.net/?retryWrites=true&w=majority'

// mongoose.set('strictQuery', false);
// mongoose.connect(DB,{}).then(()=>console.log('Connect is Successfully done')).console.log('Error connect db' + error.message)
const dbConnect =() =>{
    try{
        const conn=mongoose.connect(DB);
        console.log('Database connected Successfully');
    }catch(error){
        console.log('Database error ket noi database ')
    }
}; 

module.exports=dbConnect;


