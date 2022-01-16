import React from "react";
import MainHeader from "../main-header/main-header";
import MainLayoutContainer from "./main-layout-style";

interface MainLayoutProps {
  children: any;
}

const MainLayout: React.FC<MainLayoutProps> = (props: MainLayoutProps) => {
  return <MainLayoutContainer>
    <header className="main-header">
      <MainHeader />
    </header>
    <main className="main-content">
      {props.children}
    </main>
  </MainLayoutContainer>
}

export default MainLayout