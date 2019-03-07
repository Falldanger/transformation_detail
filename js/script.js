let MasTochki = [];
let MasOsi = [];
window.onload = function (){
    let c = document.getElementById("myCanvas");
    let setka = this.document.getElementById('sitka');
    let detal = this.document.getElementById('detal');
    let myDetal = this.document.getElementById('myDetail');
    setka.addEventListener('change',function(e){
        if(setka.checked){
            main(true);
        }else{
            main(false);
        }
    });
    detal.addEventListener('change', function(e){
        if(detal.checked){
            myDetal.style.backgroundImage = "url('img/lab0.jpg')";
        }else{
            myDetal.style.backgroundImage = "none";
        }
    });

    let button = this.document.getElementById('button'); 
    button.addEventListener('click', main);

    let evklidovi = this.document.getElementById('evklidovi');
    evklidovi.addEventListener('click', ()=>{
        let X = Number(document.getElementById('X').value);
        let Y = Number(document.getElementById('Y').value);
        let Angle = Number(document.getElementById('Angle').value);

        var c = document.getElementById("myCanvas");
        var ctx=c.getContext('2d');
        ctx.clearRect(0, 0, c.width, c.height);
        ctx.beginPath();
        ctx.setLineDash([]);
        drawSitka();
        ctx.strokeStyle="#000000";
        ctx.beginPath();
        if(Angle){
            for (let value of MasTochki){
                let obj = rotate(X,Y,Angle,value[0]);
                console.log(obj,value[0]);
                ctx.moveTo(obj.x, obj.y);
                for(let i=1;i<value.length;i++){
                    obj = rotate(X,Y,Angle,value[i]);
                    ctx.lineTo(obj.x,obj.y);
                }
            }
        }else{
            for (let value of MasTochki){
                console.log(value[0].x + X,value[0].y + Y);
                ctx.moveTo(value[0].x + X, value[0].y + Y);
                for(let i=1;i<value.length;i++){
                    ctx.lineTo(value[i].x + X,value[i].y + Y);
                }
            }
        }
        ctx.stroke(); 
    })

    let afinni =  this.document.getElementById('afinni');
    afinni.addEventListener('click', () => {
        let X0 = Number(document.getElementById('X0').value);
        let Y0 = Number(document.getElementById('Y0').value);
        let Xx = Number(document.getElementById('Xx').value);
        let Yx = Number(document.getElementById('Yx').value);
        let Xy = Number(document.getElementById('Xy').value);
        let Yy = Number(document.getElementById('Yy').value);
        var c = document.getElementById("myCanvas");
        var ctx=c.getContext('2d');
        ctx.clearRect(0, 0, c.width, c.height);
        ctx.beginPath();
        ctx.setLineDash([]);
        drawSitka1(X0,Y0,Xx,Yx,Xy,Yy);
        ctx.strokeStyle="#000000";
        ctx.beginPath();

        for (let value of MasTochki){
            let obj = afin(X0,Y0,Xx,Yx,Xy,Yy,value[0]);
            console.log(obj,value[0]);
            ctx.moveTo(obj.x, obj.y);
            for(let i=1;i<value.length;i++){
                obj = afin(X0,Y0,Xx,Yx,Xy,Yy,value[i]);
                //console.log(obj,value[i]);
                ctx.lineTo(obj.x,obj.y);
            }
        }
        ctx.stroke(); 
    })

    let proektyvni =  this.document.getElementById('proektyvni');
    proektyvni.addEventListener('click', ()=>{
        let pX0 = Number(document.getElementById('pX0').value);
        let pY0 = Number(document.getElementById('pY0').value);
        let pXx = Number(document.getElementById('pXx').value);
        let pYx = Number(document.getElementById('pYx').value);
        let pXy = Number(document.getElementById('pXy').value);
        let pYy = Number(document.getElementById('pYy').value);
        let W0 = Number(document.getElementById('W0').value);
        let Wx = Number(document.getElementById('Wx').value);
        let Wy = Number(document.getElementById('Wy').value);
        console.log(Wy);
        var c = document.getElementById("myCanvas");
        var ctx=c.getContext('2d');
        ctx.clearRect(0, 0, c.width, c.height);
        ctx.beginPath();
        ctx.setLineDash([]);
        drawSitka2(pX0,pY0,pXx,pYx,pXy,pYy,W0,Wx,Wy);
        ctx.strokeStyle="#000000";
        ctx.beginPath();
        for (let value of MasTochki){
            let obj = proek(pX0,pY0,pXx,pYx,pXy,pYy,W0,Wx,Wy,value[0]);
           // console.log(obj,value[0]);
            ctx.moveTo(obj.x, obj.y);
            for(let i=1;i<value.length;i++){
                obj = proek(pX0,pY0,pXx,pYx,pXy,pYy,W0,Wx,Wy,value[i]);
               // console.log(obj,value[i]);
                ctx.lineTo(obj.x,obj.y);
            }
           // break;
        }
        ctx.stroke(); 
    })

}

function proek(X0,Y0,Xx,Yx,Xy,Yy,W0,Wx,Wy,obj){
    let x = (obj.x * Xx * Wx + obj.y * Xy * Wy + X0 * W0)/(obj.x * Wx + obj.y * Wy + W0);
    let y = (obj.x * Yx * Wx + obj.y * Yy * Wy + Y0 * W0)/(obj.x * Wx + obj.y * Wy + W0);
    return {
        x : x,
        y : y
    } 
}

function afin(X0,Y0,Xx,Yx,Xy,Yy,obj){
    let x = obj.x * Xx + obj.y * Xy + X0;
    let y = obj.x * Yx + obj.y * Yy + Y0;
    return {
        x : x,
        y : y
    } 
}


function rotate(m,n,Angle,obj){
    let ang = -(Angle*Math.PI)/180;
    let x = obj.x * Math.cos(ang) + obj.y * (-Math.sin(ang)) - m * (Math.cos(ang) - 1) + n * Math.sin(ang);
    let y = obj.x * Math.sin(ang) + obj.y * Math.cos(ang) - n * (Math.cos(ang) - 1) - m * Math.sin(ang);
    return {
        x : x,
        y : y
    }
}

function drawSitka1(X0,Y0,Xx,Yx,Xy,Yy){
    let c = document.getElementById("myCanvas");
    let ctx=c.getContext('2d');
    ctx.beginPath();
    ctx.setLineDash([]);
    ctx.strokeStyle="#000000"

    for (let value of MasOsi){
        for(let i=0;i<value.length-1;i+=2){
            let obj = afin(X0,Y0,Xx,Yx,Xy,Yy,value[i]);
            let obj1 = afin(X0,Y0,Xx,Yx,Xy,Yy,value[i+1])
            ctx.moveTo(obj.x,obj.y);
            ctx.lineTo(obj1.x,obj1.y);
        }
    }
    ctx.stroke();   
}
/*0 0 400 700 700 400 100 1 1 */
function drawSitka2(X0,Y0,Xx,Yx,Xy,Yy,W0,Wx,Wy){
    let c = document.getElementById("myCanvas");
    let ctx=c.getContext('2d');
    ctx.beginPath();
    ctx.setLineDash([]);
    ctx.strokeStyle="#000000"

    for (let value of MasOsi){
        for(let i=0;i<value.length-1;i+=2){
            let obj = proek(X0,Y0,Xx,Yx,Xy,Yy,W0,Wx,Wy,value[i]);
            let obj1 = proek(X0,Y0,Xx,Yx,Xy,Yy,W0,Wx,Wy,value[i+1]);
            console.log(obj.x,obj.y)
            ctx.moveTo(obj.x,obj.y);
            ctx.lineTo(obj1.x,obj1.y);
        }
    }
    ctx.stroke();   
}

function drawSitka(){
    let c = document.getElementById("myCanvas");
    let ctx=c.getContext('2d');
    ctx.beginPath();
    ctx.setLineDash([]);
    ctx.strokeStyle="#000000"

    let Mas1 = [];
    let Mas2 = [];
    for(let i=0; i<1000; i+=50){
        ctx.moveTo(i,0);
        Mas1.push({
            x : i,
            y : 0
        })
        ctx.fillText(i, i+1, 13);
        ctx.lineTo(i,600); 
        Mas1.push({
            x : i,
            y : 600
        })
    }
    MasOsi.push(Mas1);
    for(let i=0; i<600; i+=50){
        ctx.moveTo(0,i);
        Mas2.push({
            x : 0,
            y : i
        })
        ctx.fillText(i, 1, i+13);
        ctx.lineTo(1000,i); 
        Mas2.push({
            x : 1000,
            y : i
        })
    }
    MasOsi.push(Mas2);
    ctx.moveTo(50,50);
    ctx.fillText('X', 988, 13);
    ctx.fillText('Y', 1, 598);
    ctx.stroke();      
}

function drawDetail(){
    var c = document.getElementById("myCanvas");
    var ctx=c.getContext('2d');
    ctx.beginPath();
    ctx.setLineDash([]);
    ctx.strokeStyle="#000000"
    let x0 = 500;
    let y0 = 300;
    let x,y,A1;

    const R1 = parseInt(document.getElementById('R1').value);
    const R2 = parseInt(document.getElementById('R2').value);
    const A = parseInt(document.getElementById('A').value);
    const B = parseInt(document.getElementById('B').value);

    A1=(A-R2)/2;
    
    var xn, yn, angle;  //R1
    let someMas1 = [];
    for (let i = 0; i < 360 ; i += 0.1) {
        angle = i;
        xn = R1 * Math.cos(angle * Math.PI/180);
        yn = R1 * Math.sin(angle * Math.PI/180);
        ctx.lineTo(x0 + xn,y0 + yn);
        someMas1.push({
            x : x0 + xn,
            y : y0 + yn
        })
    }
    MasTochki.push(someMas1);
    let someMas2 = [];
    x = x0 - B/2;
    y = y0 - Math.sqrt(R2*R2 - B*B/4);
    ctx.moveTo(x, y);
    someMas2.push({
        x : x,
        y : y
    })
    ctx.lineTo(x, y-A1);
    someMas2.push({
        x : x,
        y : y-A1
    })
    ctx.lineTo(x + B, y-A1);
    someMas2.push({
        x : x+B,
        y : y-A1
    })
    ctx.lineTo(x + B, y);
    someMas2.push({
        x : x+B,
        y : y
    })

    let myAngle = Math.acos(B/(2*R2)) * 180 / Math.PI;
    for(let i= -myAngle; i < myAngle; i += 0.1) {
        angle = i;
        xn = R2 * Math.cos(angle * Math.PI/180);
        yn = R2 * Math.sin(angle * Math.PI/180);
        ctx.lineTo(x0 + xn,y0 + yn);
        someMas2.push({
            x : x0 + xn,
            y : y0 + yn
        })
    }
    ctx.lineTo(x0 + xn, y0 + yn+A1);
    someMas2.push({
        x : x0 + xn,
        y : y0 + yn+A1
    })
    ctx.lineTo(x0 - xn, y0 + yn+A1);
    someMas2.push({
        x : x0 - xn,
        y : y0 + yn+A1
    })
    ctx.lineTo(x0 - xn, y0 + yn);
    someMas2.push({
        x : x0 - xn,
        y : y0 + yn
    })


    for(let i= -myAngle; i < myAngle; i += 0.1) {
        angle = i;
        xn = -R2 * Math.cos(angle * Math.PI/180);
        yn = -R2 * Math.sin(angle * Math.PI/180);
        ctx.lineTo(x0 + xn,y0 + yn);
        someMas2.push({
            x : x0 + xn,
            y : y0 + yn
        })
    }

    MasTochki.push(someMas2);

    
    ctx.stroke();  

    ctx.beginPath();
    ctx.setLineDash([15, 5, 5]);
    ctx.moveTo(x0 - A-50, y0);
    ctx.lineTo(x0 + A+50, y0);
    ctx.moveTo(x0, y0 - A-50);
    ctx.lineTo(x0, y0 + A+50);
    MasOsi.push([])
    ctx.stroke();            
        
}

function main(sitka){
    let c = document.getElementById("myCanvas");
    let ctx  =c.getContext('2d');
    ctx.clearRect(0, 0, c.width, c.height);
    drawDetail();
    if(sitka) drawSitka();
}