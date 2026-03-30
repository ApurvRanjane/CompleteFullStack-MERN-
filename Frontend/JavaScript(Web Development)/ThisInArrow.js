const student={
    name:"Apurv",
    age:19,
    marks:100,
    prop:this,
    getname:function(){
        console.log(this);
        return this.name;
    },

    getmarks:()=>{
        console.log(this);
        return this.marks;
    },

    getInfo1:function(){
        setTimeout(()=>{
            console.log(this);
        },3000);
    },

    getInfo2:function(){
        setTimeout(function(){
            console.log(this);
        },3000);
    }


}