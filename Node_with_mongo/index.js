var MongoClient = require("mongodb").MongoClient;

var URL = "mongodb+srv://sadat103:sadat1505103@cluster0.p3rpi.mongodb.net/school?retryWrites=true&w=majority";
var config = { useUnifiedTopology: true };
MongoClient.connect(URL,config,function(error,MyMongoCLient)
{
   if(error)
   {
       console.log("Connection failed")
   }

   else{
       
    console.log("Connection success")
    //InsertData(MyMongoCLient);
    //DeleteOneItem(MyMongoCLient);
    //DeleteAllItem(MyMongoCLient)
    //findOneWithoutCondition(MyMongoCLient)
    //findOneWithCondition(MyMongoCLient)
    //findAll(MyMongoCLient)
   // findAllDataByProjection(MyMongoCLient)
    findAllDataByQuery(MyMongoCLient)
   }

});

function InsertData(MyMongoCLient)
{
    
    var MyDatabase =  MyMongoCLient.db("school");
    var MyCollection = MyDatabase.collection('students');
    var MyData ={Name:"hasib",Roll:"06",Class:"11",City:"Dhaka"} ;

    MyCollection.insertOne(MyData,function(error)
    {
      if(error)
       {
       console.log("failed");
       }

       else{
       
        console.log("success");
       }


    })

}


function DeleteOneItem(MyMongoCLient)
{

    var MyDatabase =  MyMongoCLient.db("school");
    var MyCollection = MyDatabase.collection('students');
    var DeleteItem ={Roll:"01"}

    MyCollection.deleteOne(DeleteItem,function(error)
    {

       if(error)
       {
       console.log("delete failed");
       }

       else{
       
        console.log("delete success");
       }

    })



}


function DeleteAllItem(MyMongoCLient)
{

    var MyDatabase =  MyMongoCLient.db("school");
    var MyCollection = MyDatabase.collection('students');

    MyCollection.deleteMany(function(error,obj)
    {

       if(error)
       {
       console.log("all delete failed");
       }

       else{
       
        console.log(obj.result.connect);
       }

    })



}

function findOneWithoutCondition(MyMongoCLient)
{

   var MyDatabase =  MyMongoCLient.db("school");
   var MyCollection = MyDatabase.collection('students');
   var FindObj={}
    MyCollection.findOne(function(error,result)
    {

       if(error)
       {
       console.log("all delete failed");
       }

       else{
       
        console.log(result);
       }

    })

}

function findOneWithCondition(MyMongoCLient)
{

   var MyDatabase =  MyMongoCLient.db("school");
   var MyCollection = MyDatabase.collection('students');
   var FindObj={"Roll":"06"}
    MyCollection.findOne(FindObj,function(error,result)
    {

       if(error)
       {
       console.log("finding failed");
       }

       else{
       
        console.log(result);
       }

    })

}

function findAll(MyMongoCLient)
{

   var MyDatabase =  MyMongoCLient.db("school");
   var MyCollection = MyDatabase.collection('students');
    MyCollection.find().toArray(function(error,result)
    {

       if(error)
       {
       console.log("finding failed");
       }

       else{
       
        console.log(result);
       }

    })

}

function findAllDataByProjection(MyMongoCLient)
{

   var MyDatabase =  MyMongoCLient.db("school");
   var MyCollection = MyDatabase.collection('students');
   
   var ItemObj={}
   var ItemProjection={projection:{Name:"",Roll:""}}
   MyCollection.find(ItemObj,ItemProjection).toArray(function(error,result)
    {

       if(error)
       {
       console.log("finding failed");
       }

       else{
       
        console.log(result);
       }

    })

}


function findAllDataByQuery(MyMongoCLient)
{

   var MyDatabase =  MyMongoCLient.db("school");
   var MyCollection = MyDatabase.collection('students');
   
   var Query={City:"Dhaka",Roll:"03"}
   
   MyCollection.find(Query).toArray(function(error,result)
    {

       if(error)
       {
       console.log("finding failed");
       }

       else{
       
        console.log(result);
       }

    })

}