let  NameQ1 = "Hello world";

let objQ1 ={
    name:"hello world Object"
};

var data =["we","are","united"];


var arrofobj=[
    {name:"Hello world 1"},
    {name:"Hello world 2"},
    {name: "hello world 3"},
]


const complex = [{company: 'XYZ', jobs: ['Javascript', 'React']}, {company: 'ABC', jobs: ['AngularJs' ,'Ionic']}]
function Q1(){
    return (
<div>
   <h1>{NameQ1}</h1>
   <h1>{objQ1.name}</h1>
   <div>
       <h1>array</h1>
   <h1>{data[0]}</h1>
   <h1>{data[1]}</h1>
   <h1>{data[2]}</h1>
   </div>
   <div>
       <h1>array of Object</h1>,
       <ul>
           {arrofobj.map((v,i)=> <li key={i}>{v.name}</li>)}
       </ul>


   </div>
   <div>
       <ul>
           {complex.map((v,i)=><li key={i}>{v.company} {v.jobs }</li>)}
       </ul>
   </div>
</div>
    );
}
export default Q1;