import Header from "./Design/Header"
import Sidebar from "./Design/Sidebar"
import Layout from "./Design/Player/Layout"

const App = () => {
  return (
    <section className="flex max-w-7xl gap-1 mx-auto h-screen">
      <div className="sidebar max-w-52 border-r border-r-slate-300 p-4 w-full min-h-full">
        <Sidebar />
      </div>
      <div className="flex p-4 flex-col gap-5">
        <Header />
        <div className="scrollbar overflow-y-scroll">
          <Layout />
        </div>
      </div>
    </section>
  )
}

export default App