canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");
rover_width=100;
rover_height=90;
rover_x=10;
rover_y=10;
nasa=["http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/fcam/FRB_486265257EDR_F0481570FHAZ00323M_.JPG","http://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000MR0044631300503690E01_DXXX.jpg","http://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000MR0044631280503688E0B_DXXX.jpg","http://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000MR0044631290503689E01_DXXX.jpg"];
Random=Math.floor(Math.random()*4);
background_img=nasa[Random];
rover_img="rover.png";
function add(){
    background_imgtag=new Image();
    background_imgtag.onload=uploadbg;
    background_imgtag.src=background_img;
    rover_imgtag=new Image();
    rover_imgtag.onload=uploadrover;
    rover_imgtag.src=rover_img;
}
function uploadbg(){
    ctx.drawImage(background_imgtag,0,0,canvas.width,canvas.height);

}
function uploadrover(){
    ctx.drawImage(rover_imgtag,rover_x,rover_y,rover_width,rover_height);
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keypressed=e.keyCode;
    console.log(keypressed);
    if(keypressed=='38'){
        up();
        console.log("up");
    }
    if(keypressed=='40'){
        down();
        console.log("down");
    }
    if(keypressed=='37'){
        left();
        console.log("left");    
    }
    if(keypressed=='39'){
        right();
        console.log("right");
    }
}
function up(){
    if(rover_y>=0){
        rover_y=rover_y-10;
        console.log("when up arrow pressed x="+rover_x+"y="+rover_y);
        uploadbg();
        uploadrover();
    }
}
function down(){
    if(rover_y<=500){
        rover_y=rover_y+10;
        console.log("when down arrow pressed x="+rover_x+"y="+rover_y);
        uploadbg();
        uploadrover();
    }
}
function left(){
    if(rover_x>=0){
        rover_x=rover_x-10;
        console.log("when left arrow pressed x="+rover_x+"y="+rover_y);
        uploadbg();
        uploadrover();
    }
}
function right(){
    if(rover_x<=700){
        rover_x=rover_x+10;
        console.log("when right arrow pressed x="+rover_x+"y="+rover_y);
        uploadbg();
        uploadrover();
    }
}