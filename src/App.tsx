// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
// import WebTonggLe from './Miniproject';
// import CallApiZingMp3Fake from './Zingmp3Fake';
import HomePage from "./Miniproject/page/HomePage";
import PopularPage from "./Miniproject/page/index";
import NowPlayingPage from "./Miniproject/page/NowPlayingPage";
import MoviesDetailPage from "./Miniproject/page/MoviesDetailPage";
// import DefaultLayout from "./layouts/DefaultLayout";
import NoPage from "./Miniproject/page/NoPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import DefaultLayout from './Miniproject/layouts';
const queryClient = new QueryClient();

function App() {
    console.log("App render");
    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <Routes>
                    {/* 
          Cứ mỗi URL bạn cần định nghĩa 1 thẻ Route 
          Trong đó:
          - path: là đường dẫn URL
          - element là component bạn muốn hiển thị tương ứng với path
          */}
                    <Route path="/Project/" element={<DefaultLayout />}>
                        <Route index element={<HomePage />} />
                        <Route path="popular" element={<PopularPage />} />
                        <Route path=":id" element={<MoviesDetailPage />} />
                        {/* 
            :slug ==> Đại diện cho phần chuỗi phía sau blog/
            */}
                        <Route path="now_playing" element={<NowPlayingPage />} />
                        <Route path="*" element={<NoPage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </QueryClientProvider>
    );
}

export default App;
