const student={
    name:"Apurv",
    age:19,
    eng:45,
    maths:89,
    science:87,
    getavg(){
        let avg=(this.eng+this.maths+this.science)/3;
        console.log(avg);
    }
}