const{default:mongoose} =require('mongoose');
const DB='mongodb+src://hung:hung1234@cluster0.lurhspy.mongodb.net/?retryWrites=true&w=majority';

// mongoose.set('strictQuery', false);
// mongoose.connect(DB,{}).then(()=>console.log('Connect is Successfully done')).console.log('Error connect db' + error.message)
const dbConnect =() =>{
    try{
        const conn=mongoose.connect(process.env.MONGODB_URL);
        console.log('Database connected Successfully');
    }catch(error){
        console.log('Database error')
    }
}; 

module.exports=dbConnect;


