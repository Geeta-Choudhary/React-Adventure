import { useState } from "react"


function App() {
  const [color, setColor] = useState("pink")

  return (

    <div className="w-full h-screen duration-200"
    style={{backgroundColor : color}}>

<body className="px-10 py-10">
    <div className="flex bg-slate-100 p-9 justify-center  ">
    <div class='text-4xl'> 
          Welcome to the Background Color Changer !
          <br/>
          <br/>
           Click and observe the color magic 
    </div>
       
        </div>
       </body>
     
      <div className="fixed flex flex-wrap justify-center
       bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 
        shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button 
          onClick ={() => setColor("red")}
          className="outline-none px-4 py-1
          rounded-full text-white shadow-lg "
          style={{backgroundColor : "red"}}>
            Red</button>

            <button
            onClick ={() => setColor("orange")}
             className="outline-none px-4 py-1
          rounded-full text-white shadow-lg "
          style={{backgroundColor : "orange"}}>
            Orange</button>

            <button 
            onClick ={() => setColor("yellow")}
            className="outline-none px-4 py-1
          rounded-full text-white shadow-lg "
          style={{backgroundColor : "yellow"}}>
            Yellow</button>

            <button 
            onClick ={() => setColor("blue")}
            className="outline-none px-4 py-1
          rounded-full text-white shadow-lg "
          style={{backgroundColor : "blue"}}>
            Blue</button>

            <button 
            onClick ={() => setColor("green")}
            className="outline-none px-4 py-1
          rounded-full text-white shadow-lg "
          style={{backgroundColor : "green"}}>
            Green</button>

            <button 
            onClick ={() => setColor("#7e22ce")}
            className="outline-none px-4 py-1
          rounded-full text-white shadow-lg "
          style={{backgroundColor : "#7e22ce"}}>
            Voilet</button>

            <button 
            onClick ={() => setColor("#451a03")}
            className="outline-none px-4 py-1
          rounded-full text-white shadow-lg "
          style={{backgroundColor : "#451a03"}}>
            Amber</button>

            <button 
            onClick ={() => setColor("brown")}
            className="outline-none px-4 py-1
          rounded-full text-white shadow-lg "
          style={{backgroundColor : "brown"}}>
            Brown</button>

            <button 
            onClick ={() => setColor("gray")}
            className="outline-none px-4 py-1
          rounded-full text-white shadow-lg "
          style={{backgroundColor : "gray"}}>
            gray</button>

            <button 
            onClick ={() => setColor("black")}
            className="outline-none px-4 py-1
          rounded-full text-white shadow-lg "
          style={{backgroundColor : "black"}}>
            Black</button>

            <button 
            onClick ={() => setColor("white")}
            className="outline-none px-4 py-1
          rounded-full text-black shadow-lg "
          style={{backgroundColor : "white"}}>
            white</button>

            <button 
            onClick ={() => setColor("#a3e635")}
            className="outline-none px-4 py-1
          rounded-full text-black shadow-lg "
          style={{backgroundColor : "#a3e635"}}>
            Parrot green</button>

            <button 
            onClick ={() => setColor("#60a5fa")}
            className="outline-none px-4 py-1
          rounded-full text-black shadow-lg "
          style={{backgroundColor : "#60a5fa"}}>
            Sky Blue</button>
        </div>
      </div>
    </div>
  )
}

export default App
