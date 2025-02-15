```javascript
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/parent/*" element={<ParentRoutes/>}/ >
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

function Home() {  return <h1>Home</h1>;}
function About() { return <h1>About</h1>;}
function NotFound() { return <h1>404 Not Found</h1>;}

function ParentRoutes(){
  return(
    <Routes>
        <Route path=':id' element={<Child/>}/ >
    </Routes>
  );
}

function Child(){
    let {id} = useParams();
    return <h1>Child {id}</h1>;
}
export default App;
```