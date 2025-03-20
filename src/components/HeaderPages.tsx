import "./css/HeaderPages.css";

export default function HeaderPages({ text }: { text: string }) {
  return (
    <>
      <div className="header-pages">
        <h1>{text}</h1>
      </div>
    </>
  );
}
