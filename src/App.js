import './App.css';
import Navbar from './Components/Navbar'
import YoutubeEmbed from "./Components/YoutubeEmbed";
import logo from './devanagari_cons.jpg';
const links= ['FaGvS57atXc','Iz4ksvZ10tU','Y4xLf0APsC0','q5anvjEKP4w','WclLMT4i5SA','VK666if5QHw','S1WZd_gxFF4','9mYQbkTqn-A','q5Fszt3w_AU','bjQIJ2mCEBQ','6cx4EIHg__Y','TReUdOtYPBo','h1ZPkrV-HfM','dyZn3jlBARY']
const abcs = ['FxqFsdRMUfQ','H7RgVcxn3eE','DHqcmEQlW2Q','DlqagjaJuZ4','JNlhBgomgCY','pcIPWhL1Uwk','dXJDp7acTU4','VTCCBy-4XCI','SNdHT76GBKw','M32X4EtCn-Y','fzWcuV2FT1k','pwCPIggVYCU','c4UvqH1zTJA','grCi0vZSjSU','vHfnSsxWNVg','F0jybv-uDOE','meomb57jV6U','PPs7Pr2Ls8E','6sTQnZ9wTbg','0ETg6TzCtd8','OeQrQxB86Gw','Na2viIte-uU','GOoIeeV4J7k','pHTyOn4wmM0','6fN8LeoIVSo','QVOOrDoZ2xg','hefoMfOMKCQ','QSdw1WwP3W8','-ZoRqWz7IBw','AK-KoMXGbSQ','Czd_vOew6g8','wFMOvFrOZIg','ATtLR3DMt40','bhEynSPg8iE','kf7X5W6cS7E','QWpS4EPuVbE','Is0v72H4lyc']


function App() {
  return (
    <div className="App">
        <Navbar/>
        <h1>अभिव्यक्ति को तरिका</h1>
        <img src={logo} alt='अभिव्यक्ति को तरिका' />
        <h1>स्वर</h1>
        {links.map( l =>
          <YoutubeEmbed embedId={l} />
        )}
        <h1>व्यंजन</h1>
        {abcs.map(a => 
          <YoutubeEmbed embedId={a} />
        )}
    </div>
  );
}

export default App;
