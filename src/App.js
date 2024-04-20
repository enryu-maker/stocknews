import React from "react";
import Content from "./Component/Content";
import Subjects from "./Component/Subjects";
import View from "./Component/Viewer";
import { MagnifyingGlass } from "react-loader-spinner";
import axios from "axios";

export default function App() {
  const [current, setCurrent] = React.useState('')
  const [currentd, setCurrentd] = React.useState('')
  const [content, setContent] = React.useState([])

  const [loading, setLoading] = React.useState(false)

  async function getData() {
    setLoading(true)
    await axios.get('http://127.0.0.1:8000/download-file/').then(() => {
      setLoading(false)
    })
      .catch((err) => {
        console.log(err.response.data)
      })
  }

  React.useEffect(() => {
    getData()
  }, [])

  if (loading) {
    return (
      <div className=" h-[100vh] flex flex-col justify-center items-center">
        <MagnifyingGlass
          visible={true}
          height="100"
          width="100"
          ariaLabel="magnifying-glass-loading"
          wrapperStyle={{}}
          wrapperClass="magnifying-glass-wrapper"
          glassColor="#c0efff"
          color="#e15b64"
        />
        <p className="text-center text-2xl font-bold">Searching Latest Data...</p>
      </div>
    )
  }
  else {
    return (
      <>
      <div className="bg-gray-50 w-full h-[50px] flex justify-center items-center">
          <h1 className=' text-2xl text-orange-500 self-center font-bold font-Helvetica tracking-wider text-center'>
              Stock News
          </h1>
        </div>
        <div className=" flex h-[90vh] justify-between items-center">
          <Subjects setCurrent={setCurrent} setContent={setContent} />
          <Content current={current} data={content} setCurrentd={setCurrentd} />
          <View currentd={currentd} />
        </div>
        <div className="bg-gray-50 w-full h-[50px] flex justify-center items-center">
          <h1 className=' text-base text-black self-center font-Helvetica tracking-wider text-center'>
              made with ❤️ by NerdTech
          </h1>
        </div>
      </>

    )
  }

}