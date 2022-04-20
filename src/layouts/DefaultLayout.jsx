import TheHeader from "../components/TheHeader";

function DefaultLayout({ children }) {
  return (
    <>
      <div>
        <TheHeader />
      </div>
      <main>{children}</main>
    </>
  );
}

export default DefaultLayout;
