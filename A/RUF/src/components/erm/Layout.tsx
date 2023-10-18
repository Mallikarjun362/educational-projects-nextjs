import AppBar from './AppBar';
// import Footer from './Footer';
export default function Layout({ children }: any) {
  return (
    <>
      <AppBar />
      <main>{children}</main>
      {/* <Footer /> */}
    </>
  );
}
