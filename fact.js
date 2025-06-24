var fact = {
    factorial: function(n)
    {
        var f=1,i;
        for(i=1;i<=n;i++)
        {
            f *=i;
        }
        console.log("Factorial of " + n + " is " + f);
    },

    
    areac: function(r) 
    {
        var a = 3.14 * r * r;
        console.log("Area of circle with radius " + r + " is " + a);
    },

    areat : function(b , h)
    {
        var a = 0.5 *b*h;
        console.log("Area of triangle with base " + b + " and height "+ h + " is " + a);
    }
};
module.exports = fact; 