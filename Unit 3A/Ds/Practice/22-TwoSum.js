var nums =[2,7,11,15];
var target=9;
//op: [0,1]

for( let i=0;i<nums.length-1;i++)
{

    for(let j=i+1;j<nums.length;j++)
    {
        if(nums[i]+nums[j]==target)
        {
            console.log("["+i+", "+j+"]")
        }
    }
}
