import SlideShow from "./components/SlideShow"
import "./App.css"

function App() {
  return (
    <>
      <div className='top'>
        <a href="https://naver.com" className="logo">
          <img src="vite.svg" className="logo" alt="house-cleaning-logo" />
        </a>
        <div className='nav'>
          <div className='main-menu'>회사소개</div>
          <div className='main-menu'>서비스소개</div>
          <div className='main-menu'>갤러리</div>
          <div className='main-menu'>고객센터</div>
        </div>
      </div>
      <div>
        <SlideShow />
      </div>
      <div className="example">
        <h1>서비스사례</h1>
      </div>
      <div className="product">
        <h1>서비스소개</h1>
      </div>
    </>
  )
}

export default App;