//solution 1

function feetToMile(feet){
    let mile = feet * 0.000189394;
    return mile;
}
var mail = feetToMile(6000);
console.log(mail)

//solution 2

function woodCalculator(chair,table,bed){
    let woodChair = chair * 1;
    let woodTable = table * 3;
    let woodBed = bed * 5;
    let totalWood = woodChair + woodTable + woodBed;
    return totalWood
}
 var totalCubicFeet = woodCalculator(3,12,4)
console.log(totalCubicFeet)

//solution-3

function brickCalculator( floor){
    if(floor <= 10){
        brick = (floor * 15)*1000
    }else if(floor <= 15 ||10 >floor){
         brick = (floor * 12)*1000
    }else{
         brick = (floor * 10)*1000
    }
    return brick
   } 

   var totalBrick = brickCalculator(16)
   console.log(totalBrick)

   // solution 4
   function tinyFriend(arr){
    var tiny = arr[0];
     for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
            if( tiny.length > element.length){
                tiny = element
                }
                     }
                    return tiny
                        }

        var  friend = ["abir","abdullah","robin","abdurrohim","ali"]
        var smallFrind = tinyFriend(friend)
        console.log(smallFrind)