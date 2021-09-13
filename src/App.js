// import Name from './component/name';
// import {Number,Address,Subject} from './component/info';
// function React(){
//   return(
//  <div>
//     <h1>What is React ?</h1>
//      <p>
//      React is a component base javascript library this is use for create user interface .React create by facebook .Facebook invent React in 'july 2013' React first used in 2013 for facebooks newsfeed feature ,React Made By FACEBOOK Software engineer "Jordan walk " 
//      </p>
//   </div>
//   );
// }
// function SpaVsMpa(){
//   return(
//     <div>
//     <h1> SPA </h1>
//   <ul>
//   <li>SPA Stand for single page Application</li>
//   <li>spa no page refresh on go to other page</li>
//   <li>spa does not reload page entirely whenever the user request a new piece of data</li>
//   <li>one of the weakness of SPA is SEO ,SPA are not SEO friendly Because most singlr page application are run on javascript ,which most search engine is not support because search engine CRAWLERS download html file and chack keyword this is easier to ranking your website,but Third party plugin solve this issue  </li>
//   </ul>
// <h1>MPA</h1>
// <ul>
// <li>MPA Stand for Multiple page Application</li>
// <li>MPA whole page refresh on request</li>
// <li>MPA required a page reload everytime the content changes .</li>
// <li>MPA is better  positioning  your website beacuse MPA each page can be optimized for different keyword and meta tags ,this is positively impacts google ranking our website</li>
// </ul>
//     <h1>REACT </h1>
// <ul>
//     <li>REACT Own by facebook</li>
//     <li>React is initial relese in 2013</li>
//     <li> ONEWAY data binding</li>
//     <li>Open source</li>
// </ul>
// <h1>ANGULAR</h1>
// <ul>
//     <li>ANGULAR Own by google</li>
//     <li> Angular is initial relese in 2013 </li>
//     <li>TWOWAY data binding</li>
//     <li>Open source</li>
// </ul>
//     <h1>What is Library?</h1>
// <ul>
//     <li>React is a JavaScript library for building user interfaces.</li>
//     <li>A Library is a set of code that was previously written by a developer that you can call when you are building your project.</li>
//     <li>In Library, you import or call specific methods that you need for your project.</li>
//     <li>library is a bunch of code packed together that can be used repeatedly</li>
//     <li>Reusability is one of the main reasons to use libraries</li>
// </ul>
// </div>
//   );
// }
// function  Angular(){
//   return (
// <div>
// <h1>ANGULAR</h1>
// <ul>
//     <li>ANGULAR Own by google</li>
//     <li> Angular is initial relese in 2013 </li>
//     <li>TWOWAY data binding</li>
//     <li>Open source</li>
// </ul>
//     <h1>What is Library?</h1>
// <ul>
//     <li>React is a JavaScript library for building user interfaces.</li>
//     <li>A Library is a set of code that was previously written by a developer that you can call when you are building your project.</li>
//     <li>In Library, you import or call specific methods that you need for your project.</li>
//     <li>library is a bunch of code packed together that can be used repeatedly</li>
//     <li>Reusability is one of the main reasons to use libraries</li>
// </ul>
// </div>
//   );
// } 

// function App() {
  
//   return (
//   <div>
//     <Name />
//     <Address/>
//     <Number/>
//     <Subject/>
//  <React />,
//   <SpaVsMpa />,
//   <Angular/>
//   </div>

//   );
// }

// export default App;

import Single from "./component/q2/default";

import Q1 from "./component/javascript"
import {A,B,C} from './component/q2/multiple'
import Question from "./component/Question3";
function App(){
  return(
<div>
 
<Q1/>
<Single/>
 <h1>The difference between these is how you import them. If you have a single file with multiple modules, it makes sense to give each module a name and be able to import each of them individually, without having to import the entire contents of the file.

For example, say you have 3 modules in one file, and you export them as export A; export B; export C;. You can then import any one of them using the curly brackets import syntax. So import a,b,c , for example will import module A and B only.

The default export syntax is commonly used in React when you want to export a component, and nothing else from a file. By exporting something with export default A, you can import that module by using the import X from ../file, where X is an alias and can be anything (but usually the same name is used for consistency).</h1>
<A/>
<B/>
<C/>

<Question/>
</div>
  );
}


export default App;