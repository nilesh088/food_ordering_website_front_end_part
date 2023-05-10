i=0
        let a=["im1.jpg","im2.jpg","im3.jpg"]
        function fun()
        {
            let iref=document.getElementById("im")
            i++
            if(i>=a.length){
                i=0
            }
            iref.src=a[i]
        }
        setInterval(fun,1500)
