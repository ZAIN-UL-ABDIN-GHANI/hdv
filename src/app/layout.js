import "../app/styles/globals.css"

export const metadata = {
  title: "Your App Title",
  description: "Your app description",
};

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900">
        {children}
      </body>
    </html>
  );
}
