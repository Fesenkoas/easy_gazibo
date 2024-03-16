export const signal = (printFile) => {

for (let i = 0; i < printFile.folderDate.length; i++) {
  const date = printFile.folderDate[i];
  for (let j = 0; j < date.item.length; j++) {
    const item = date.item[j];
    if (item.print === false) {
      
      return true
    }
  }
}
return false;
};


// const Contact = props => {
//   const [planets, setPlanets] = useState(['wait...'])

//   const fillPlanets = async (url) => {
//     const response = await fetch(url);
//     const json = await response.json();
//     const planets = json.map(item => item.name);
//     setPlanets(planets);
//     const info = {
//       payLoad: planets,
//       time: Date.now()
//     };
//     localStorage.setItem('planets', JSON.stringify(info));

//   }

//   useEffect(() => {
//     const planets = JSON.parse(localStorage.getItem('planets'));
//     if (!planets || (Date.now() - planets.time) > periodMonth) {
//       fillPlanets(`${base_url}/v1/planets`);
//     } else {
//       setPlanets(planets.payLoad);
//     }
//     return () => console.log('Component Contact unmounted');
//   }, [])

//   return (
//     <div>
//       <form onSubmit={(e) => {
//         e.preventDefault();
//       }}>
//         <label>First Name
//           <input type="text" name="firstname" placeholder="Your name.." />
//         </label>
//         <label>Planet
//           <select name="planet">{
//             planets.map((item, index) => <option value={item} key={index}>{item}</option>)
//           }
//           </select>
//         </label>
//         <label>Subject
//           <textarea name="subject" placeholder="Write something.." />
//         </label>
//         <input type="submit" value="Submit" />
//       </form>
//     </div>
//   )

// }

// export const periodMonth = 1000 * 60 * 60 * 24 * 30;
