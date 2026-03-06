body{

margin:0;
font-family:Inter, sans-serif;
background:#f2efe9;

}

.hero{

position:relative;
height:100vh;
overflow:hidden;

}

.hero img{

width:100%;
height:100%;
object-fit:cover;

}

.hero-text{

position:absolute;
top:50%;
left:50%;
transform:translate(-50%,-50%);
color:white;
text-align:center;

}

.hero h1{

font-family:Forum;
font-size:60px;
letter-spacing:4px;

}

.menu{

background:#4b4038;
position:sticky;
top:0;

}

.menu ul{

display:flex;
justify-content:center;
list-style:none;
margin:0;
padding:15px;

}

.menu li{

margin:0 20px;

}

.menu a{

color:white;
text-decoration:none;
font-size:14px;

}

.section{

padding:100px 12%;

}

.section h2{

font-family:Forum;
letter-spacing:3px;
margin-bottom:30px;

}

.section img{

width:100%;
margin-top:30px;

}

.grid{

display:grid;
grid-template-columns:repeat(auto-fit,minmax(300px,1fr));
gap:20px;

}

.grid img{

width:100%;
transition:0.4s;
cursor:pointer;

}

.grid img:hover{

transform:scale(1.03);

}

.btn{

display:inline-block;
margin-top:30px;
padding:12px 25px;
background:black;
color:white;
text-decoration:none;

}

.contacto{

text-align:center;

}
