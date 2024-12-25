import "../app/styles/globals.css"

export const metadata = {
  title: "H_VD",
  description: " description",
};

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#ECECEC] text-gray-900">
        {children}
      </body>
    </html>
  );
}
