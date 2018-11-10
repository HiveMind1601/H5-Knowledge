var faker=require('faker');
var lodash=require('lodash');
faker.locale = "zh_CN";
module.exports=function(){
    return{
        people:lodash.times(50,function(n){
            return{
                id:n,
                name:faker.name.title(),
                avatar:faker.internet.avatar(),
                address:faker.address.streetName(),
                number:faker.random.number(),
                text:faker.lorem.text()
            }
        })
    }
}